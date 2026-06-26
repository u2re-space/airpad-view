import { log } from '../../utils/utils.ts';
import { enqueueMotion } from '../../config/motion-state.ts';
import { recordAirpadMotionSensorSample, setAirpadMotionActiveSource, type AirpadMotionSensorSource } from '../../config/motion-diagnostics.ts';
import { aiModeActive } from '../speech.ts';
import { getAirState } from '../../ui/air-button.ts';
import {
    REL_ORIENT_DEADZONE,
    REL_ORIENT_GAIN,
    REL_ORIENT_SMOOTH,
    REL_ORIENT_MAX_STEP,
    REL_ORIENT_MAX_STEP_MAX,
    REL_ORIENT_MAX_STEP_UP_RATE,
    REL_ORIENT_MAX_STEP_DOWN_RATE,
    REL_ORIENT_SMOOTH_RATE_LOW,
    REL_ORIENT_SMOOTH_RATE_HIGH,
    relDirX,
    relDirY,
    relDirZ,
    relSrcForMouseX,
    relSrcForMouseY,
    relSrcForMouseZ,
    MOTION_JITTER_EPS,
} from '../../config/config.ts';
import {
    vec3Zero,
    vec3Clamp,
    vec3IsNearZero,
    vec3IsNearZeroMagnitude,
    vec3SmoothRotationVector,
    vec3Select,
    type Vector3,
    vec3RotateXYByAngle,
    expSmoothing,
    lerp,
    clamp01,
} from '../../utils/math.ts';

let relSensor: any = null;
let fallbackOrientationActive = false;
let fallbackHandler: ((event: DeviceOrientationEvent) => void) | null = null;

// Orientation state
let lastQuat: [number, number, number, number] | null = null;
let smoothedDelta: Vector3 = vec3Zero();
let dynamicMaxStepPx: number = REL_ORIENT_MAX_STEP;

let screenWarpAngleRad = 0;

const REL_ORIENT_ZERO_DECAY_RATE = 420;

// Насколько быстро подтягивать correction-базис.
// Больше = быстрее.
const REL_ORIENT_WARP_SMOOTH_RATE = 35;

// true = коррекция к ближайшим 0/90/180/270 градусов,
// то есть режимы "|" / "--".
const REL_ORIENT_WARP_SNAP_RIGHT_ANGLES = true;

export function resetRelativeOrientationRuntimeState() {
    lastQuat = null;
    smoothedDelta = vec3Zero();
    dynamicMaxStepPx = REL_ORIENT_MAX_STEP;
    screenWarpAngleRad = 0;
}

export function stopRelativeOrientation(): void {
    try {
        if (relSensor) {
            relSensor.stop?.();
        }
    } catch {
        // ignore sensor stop errors
    }
    relSensor = null;

    if (fallbackOrientationActive && fallbackHandler) {
        globalThis.removeEventListener("deviceorientation", fallbackHandler as EventListener);
    }
    fallbackOrientationActive = false;
    fallbackHandler = null;
}

// Quaternion helpers
export type Quat = [number, number, number, number];

// Normalize with stability: keep sign consistent with previous to avoid hemisphere flips
export const quatNormalizeStable = (q: Quat, prev: Quat | null): Quat => {
    const [x, y, z, w] = q;
    const len = Math.hypot(x, y, z, w) || 1;
    let nx = x / len, ny = y / len, nz = z / len, nw = w / len;
    if (prev) {
        const dot = nx * prev[0] + ny * prev[1] + nz * prev[2] + nw * prev[3];
        if (dot < 0) {
            nx = -nx; ny = -ny; nz = -nz; nw = -nw;
        }
    }
    return [nx, ny, nz, nw];
};

export const quatConj = (q: Quat): Quat => {
    const [x, y, z, w] = q;
    return [-x, -y, -z, w];
};

export const quatMul = (a: Quat, b: Quat): Quat => {
    const [ax, ay, az, aw] = a;
    const [bx, by, bz, bw] = b;
    return [
        aw * bx + ax * bw + ay * bz - az * by,
        aw * by - ax * bz + ay * bw + az * bx,
        aw * bz + ax * by - ay * bx + az * bw,
        aw * bw - ax * bx - ay * by - az * bz,
    ];
};


export function quatMultiply(a, b) {
    const ax = a[0], ay = a[1], az = a[2], aw = a[3];
    const bx = b[0], by = b[1], bz = b[2], bw = b[3];

    return [
      aw * bx + ax * bw + ay * bz - az * by,
      aw * by - ax * bz + ay * bw + az * bx,
      aw * bz + ax * by - ay * bx + az * bw,
      aw * bw - ax * bx - ay * by - az * bz
    ];
}

export const TAU = Math.PI * 2;

export const wrapPi = (angle: number): number => {
    angle = (angle + Math.PI) % TAU;
    if (angle < 0) angle += TAU;
    return angle - Math.PI;
};

export const angleDeltaRad = (current: number, previous: number): number => {
    return wrapPi(current - previous);
};

export const snapQuarterTurn = (angle: number): number => {
    return wrapPi(Math.round(angle / (Math.PI / 2)) * (Math.PI / 2));
};

export function quatNormalize(q: Quat): Quat {
    const x = q[0], y = q[1], z = q[2], w = q[3];
    const len = Math.hypot(x, y, z, w);
    if (len === 0) return [0, 0, 0, 1];
    return [
        x / len,
        y / len,
        z / len,
        w / len
    ];
}

export const quatFromAxisAngle = (x: number, y: number, z: number, angle: number): Quat => {
    const half = angle * 0.5;
    const s = Math.sin(half);
    return [x * s, y * s, z * s, Math.cos(half)];
};


export function quatRotateVec3(q, v) {
    const x = v[0], y = v[1], z = v[2];
    const qx = q[0], qy = q[1], qz = q[2], qw = q[3];

    // t = 2 * cross(q.xyz, v)
    const tx = 2 * (qy * z - qz * y);
    const ty = 2 * (qz * x - qx * z);
    const tz = 2 * (qx * y - qy * x);

    // v' = v + qw * t + cross(q.xyz, t)
    return {
      x: x + qw * tx + (qy * tz - qz * ty),
      y: y + qw * ty + (qz * tx - qx * tz),
      z: z + qw * tz + (qx * ty - qy * tx)
    };
}

export function quatInvertUnit(q: Quat): Quat {
    return [-q[0], -q[1], -q[2], q[3]];
}


export const quatRotateVector = (q: Quat, v: Vector3): Vector3 => {
    const [x, y, z, w] = q;

    // t = 2 * cross(q.xyz, v)
    const tx = 2 * (y * v.z - z * v.y);
    const ty = 2 * (z * v.x - x * v.z);
    const tz = 2 * (x * v.y - y * v.x);

    // v' = v + w * t + cross(q.xyz, t)
    return {
        x: v.x + w * tx + (y * tz - z * ty),
        y: v.y + w * ty + (z * tx - x * tz),
        z: v.z + w * tz + (x * ty - y * tx),
    };
};

export const getDisplayOrientationRad = (): number => {
    const angle = Number(
        globalThis.screen?.orientation?.angle ??
        (globalThis as any).orientation ??
        0
    );

    return Number.isFinite(angle) ? (angle * Math.PI) / 180 : 0;
};

/**
 * Raw correction angle (continuous) for phone→screen basis tracking.
 * Snap is applied only when mapping to pixels, not during smoothing.
 */
export const getPhoneToScreenWarpAngleRaw = (q: Quat): number => {
    const up = quatRotateVector(q, { x: 0, y: 1, z: 0 });

    const planeMag = Math.hypot(up.x, up.y);
    if (planeMag < 1e-4) {
        return screenWarpAngleRad;
    }

    return wrapPi(-Math.atan2(up.x, up.y) - getDisplayOrientationRad());
};

/** Snap warp angle to portrait/landscape cardinals for stable XY mapping. */
export const snapWarpAngleForMapping = (angle: number): number => {
    return REL_ORIENT_WARP_SNAP_RIGHT_ANGLES ? snapQuarterTurn(angle) : angle;
};

/** @deprecated alias — prefer getPhoneToScreenWarpAngleRaw + snapWarpAngleForMapping */
export const getPhoneToScreenWarpAngle = (q: Quat): number => {
    return snapWarpAngleForMapping(getPhoneToScreenWarpAngleRaw(q));
};

export const updateScreenWarpAngle = (q: Quat, dt: number): number => {
    const target = getPhoneToScreenWarpAngleRaw(q);
    const t = clamp01(expSmoothing(dt, REL_ORIENT_WARP_SMOOTH_RATE));

    screenWarpAngleRad = wrapPi(
        screenWarpAngleRad + angleDeltaRad(target, screenWarpAngleRad) * t
    );

    return screenWarpAngleRad;
};

/**
 * DeviceOrientationEvent fallback: alpha/beta/gamma -> quaternion.
 * Порядок DeviceOrientation: Z-X-Y.
 */
export const deviceOrientationEulerToQuat = (
    alphaDeg: number,
    betaDeg: number,
    gammaDeg: number
): Quat => {
    const d = Math.PI / 180;

    const alpha = alphaDeg * d;
    const beta = betaDeg * d;
    const gamma = gammaDeg * d;

    const qz = quatFromAxisAngle(0, 0, 1, alpha);
    const qx = quatFromAxisAngle(1, 0, 0, beta);
    const qy = quatFromAxisAngle(0, 1, 0, gamma);

    return quatNormalize(quatMul(quatMul(qz, qx), qy));
};

export const quatDeltaToAxisAngle = (dqRaw: Quat): Vector3 => {
    let [x, y, z, w] = quatNormalize(dqRaw);

    // Shortest path: не даём quaternion delta внезапно идти длинной дугой.
    if (w < 0) {
        x = -x;
        y = -y;
        z = -z;
        w = -w;
    }

    w = Math.max(-1, Math.min(1, w));

    const sinHalf = Math.hypot(x, y, z);

    if (sinHalf < 1e-6) {
        // small-angle approximation
        return {
            x: 2 * x,
            y: 2 * y,
            z: 2 * z,
        };
    }

    const angle = 2 * Math.atan2(sinHalf, w);
    const k = angle / sinHalf;

    return {
        x: x * k,
        y: y * k,
        z: z * k,
    };
};

export function mapToPixelsRaw(movement: Vector3, warpAngleRad = screenWarpAngleRad): Vector3 {
    const selected = vec3Select(
        movement,
        relSrcForMouseX as 'ax' | 'ay' | 'az',
        relSrcForMouseY as 'ax' | 'ay' | 'az',
        relSrcForMouseZ as 'ax' | 'ay' | 'az'
    );

    // XY warp uses snapped cardinals; smoothing tracks the continuous raw angle.
    const projected = vec3RotateXYByAngle(
        selected,
        snapWarpAngleForMapping(warpAngleRad),
        1
    );

    return {
        x: projected.x * relDirX * REL_ORIENT_GAIN,
        y: projected.y * relDirY * REL_ORIENT_GAIN,
        z: projected.z * relDirZ * REL_ORIENT_GAIN,
    };
}

export function clampPxRadiusFromDeltaVec(
    deltaVec: Vector3,
    dt: number,
    warpAngleRad = screenWarpAngleRad
): number {
    const rawMapped = mapToPixelsRaw(deltaVec, warpAngleRad);
    const magPx = Math.hypot(rawMapped.x, rawMapped.y, rawMapped.z);
    const desired = Math.max(
        REL_ORIENT_MAX_STEP,
        Math.min(REL_ORIENT_MAX_STEP_MAX, magPx)
    );

    const t = desired > dynamicMaxStepPx
        ? expSmoothing(dt, REL_ORIENT_MAX_STEP_UP_RATE)
        : expSmoothing(dt, REL_ORIENT_MAX_STEP_DOWN_RATE);

    dynamicMaxStepPx = lerp(dynamicMaxStepPx, desired, t);

    if (!Number.isFinite(dynamicMaxStepPx)) {
        dynamicMaxStepPx = REL_ORIENT_MAX_STEP;
    }

    dynamicMaxStepPx = Math.max(
        REL_ORIENT_MAX_STEP,
        Math.min(REL_ORIENT_MAX_STEP_MAX, dynamicMaxStepPx)
    );

    return dynamicMaxStepPx;
}

export function mapAndScale(
    movement: Vector3,
    maxStepPx: number,
    warpAngleRad = screenWarpAngleRad
): Vector3 {
    const mapped = mapToPixelsRaw(movement, warpAngleRad);
    return vec3Clamp(mapped, maxStepPx);
}


//vec3NormalizeAngles

export function handleReading(quat: number[], dt: number): Vector3 {
    if (!quat || quat.length < 4) return vec3Zero();

    const curQuat = quatNormalizeStable(
        [quat[0], quat[1], quat[2], quat[3]],
        lastQuat
    );

    if (!lastQuat) {
        lastQuat = curQuat;
        screenWarpAngleRad = getPhoneToScreenWarpAngleRaw(curQuat);
        return vec3Zero();
    }

    const prevQuat = lastQuat;
    lastQuat = curQuat;

    const warpAngleRad = updateScreenWarpAngle(curQuat, dt);

    // Важно:
    // local delta: движение в системе телефона.
    // Потом мы его "варпаем" в экранную систему через warpAngleRad.
    const deltaQuat = quatMultiply(quatInvertUnit(prevQuat), curQuat);
    const deltaVec = quatDeltaToAxisAngle(deltaQuat as Quat);

    if (vec3IsNearZeroMagnitude(deltaVec, REL_ORIENT_DEADZONE)) {
        const zeroDecayFactor = clamp01(expSmoothing(dt, REL_ORIENT_ZERO_DECAY_RATE));

        smoothedDelta = vec3SmoothRotationVector(smoothedDelta, vec3Zero(), zeroDecayFactor);

        if (vec3IsNearZeroMagnitude(smoothedDelta, REL_ORIENT_DEADZONE)) {
            smoothedDelta = vec3Zero();
            return vec3Zero();
        }
    }

    const maxStepPx = clampPxRadiusFromDeltaVec(deltaVec, dt, warpAngleRad);

    const deltaPx = mapToPixelsRaw(deltaVec, warpAngleRad);
    const deltaMagPx = Math.hypot(deltaPx.x, deltaPx.y, deltaPx.z);

    const magT = clamp01(
        (deltaMagPx - REL_ORIENT_MAX_STEP) /
        Math.max(1, REL_ORIENT_MAX_STEP_MAX - REL_ORIENT_MAX_STEP)
    );

    const smoothRate = lerp(
        REL_ORIENT_SMOOTH_RATE_LOW,
        REL_ORIENT_SMOOTH_RATE_HIGH,
        magT
    );

    const smoothFactor = clamp01(
        expSmoothing(dt, smoothRate) * clamp01(REL_ORIENT_SMOOTH)
    );

    smoothedDelta = vec3SmoothRotationVector(smoothedDelta, deltaVec, smoothFactor * 0.9);

    const maxStepRad = maxStepPx / Math.max(1e-6, Math.abs(REL_ORIENT_GAIN));

    smoothedDelta = vec3Clamp(
        smoothedDelta,
        Math.max(REL_ORIENT_DEADZONE, maxStepRad)
    );

    if (vec3IsNearZeroMagnitude(smoothedDelta, REL_ORIENT_DEADZONE)) {
        smoothedDelta = vec3Zero();
        return vec3Zero();
    }

    const mapped = mapAndScale(smoothedDelta, maxStepPx, warpAngleRad);

    if (vec3IsNearZero(mapped, MOTION_JITTER_EPS)) {
        return vec3Zero();
    }

    return mapped;
}

/** iOS / some Android WebViews require a user-gesture permission prompt for orientation events. */
export async function requestMotionSensorPermission(): Promise<boolean> {
    const DOE = (globalThis as { DeviceOrientationEvent?: { requestPermission?: () => Promise<string> } }).DeviceOrientationEvent;
    if (DOE && typeof DOE.requestPermission === "function") {
        try {
            const state = await DOE.requestPermission();
            if (state !== "granted") {
                log(`Device orientation permission denied: ${state}`);
                return false;
            }
            return true;
        } catch (err: unknown) {
            log(`Device orientation permission error: ${err instanceof Error ? err.message : String(err)}`);
            return false;
        }
    }
    const [accelerometerPermission, gyroscopePermission] = await Promise.all([
        navigator.permissions.query({ name: "accelerometer" as PermissionName }),
        navigator.permissions.query({ name: "gyroscope" as PermissionName }),
    ]);
    return accelerometerPermission.state === "granted" && gyroscopePermission.state === "granted";
}

export const startDeviceOrientationFallback = (): AirpadMotionSensorSource => {
    if (fallbackOrientationActive) return 'orientation-fallback';

    resetRelativeOrientationRuntimeState();

    let lastTs = performance.now();

    fallbackHandler = (event: DeviceOrientationEvent) => {
        const now = performance.now();
        const dt = Math.max(0.00001, (now - lastTs) / 1000);
        lastTs = now;

        const alpha = Number(event.alpha ?? 0);
        const beta = Number(event.beta ?? 0);
        const gamma = Number(event.gamma ?? 0);

        const q = deviceOrientationEulerToQuat(alpha, beta, gamma);
        const mapped = handleReading(q, dt);

        if (getAirState && getAirState() !== 'AIR_MOVE') return;
        if (aiModeActive) return;
        if (vec3IsNearZero(mapped, MOTION_JITTER_EPS)) return;

        recordAirpadMotionSensorSample('orientation-fallback');
        enqueueMotion(mapped.x, mapped.y, mapped.z);
    };

    /*globalThis.addEventListener("deviceorientation", fallbackHandler as EventListener, {
        passive: true,
    });*/

    fallbackOrientationActive = true;
    setAirpadMotionActiveSource('orientation-fallback');
    log("RelativeOrientation fallback active (deviceorientation)");

    return 'orientation-fallback';
};

/**
 * (Re)start motion sensors after the Air hold gesture — required on Android/Capacitor
 * where Generic Sensor API start() fails without user activation.
 */
export async function ensureAirMoveMotionSensors(): Promise<AirpadMotionSensorSource> {
    const permitted = await requestMotionSensorPermission();
    if (!permitted) {
        setAirpadMotionActiveSource('none');
        return 'none';
    }
    return initRelativeOrientation();
}

export function initRelativeOrientation(): AirpadMotionSensorSource {
    stopRelativeOrientation();
    resetRelativeOrientationRuntimeState();

    if (typeof RelativeOrientationSensor === 'undefined') {
        log('RelativeOrientationSensor API is not supported.');
        return startDeviceOrientationFallback();
    }

    try {
        relSensor = new RelativeOrientationSensor({ frequency: 60, referenceFrame: 'device' });
    } catch (err: any) {
        log('Cannot create RelativeOrientationSensor: ' + (err?.message || err));
        relSensor = null;
        return startDeviceOrientationFallback();
    }

    let lastTs = performance.now();

    relSensor.addEventListener('reading', () => {
        const now = performance.now();
        const dt = Math.max(0.00001, (now - lastTs) / 1000);
        lastTs = now;

        const mapped = handleReading(relSensor.quaternion, dt);

        //
        if (getAirState && getAirState() !== 'AIR_MOVE') return;
        if (aiModeActive) return;

        // Accumulate into unified motion queue
        if (vec3IsNearZero(mapped, MOTION_JITTER_EPS)) return;
        recordAirpadMotionSensorSample('relative');
        enqueueMotion(mapped.x, mapped.y, mapped.z);
    });

    relSensor.addEventListener('error', (event: any) => {
        log('RelativeOrientationSensor error: ' + ((event?.error?.message) || event?.message || event));
        startDeviceOrientationFallback();
    });

    try {
        relSensor.start();
        setAirpadMotionActiveSource('relative');
        log('RelativeOrientationSensor started (60 Hz)');
        return 'relative';
    } catch (err: any) {
        log('RelativeOrientationSensor start failed: ' + (err?.message || err));
        return startDeviceOrientationFallback();
    }
}
