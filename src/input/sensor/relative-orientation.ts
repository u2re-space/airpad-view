import { log } from '../../utils/utils';
import { enqueueMotion } from '../../config/motion-state';
import { aiModeActive } from '../speech';
import { getAirState } from '../../ui/air-button';
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
} from '../../config/config';
import {
    vec3Zero,
    vec3Clamp,
    vec3Smooth,
    vec3IsNearZero,
    vec3Select,
    type Vector3,
    vec3RotateXYByAngle,
    expSmoothing,
    lerp,
    clamp01,
} from '../../utils/math';
import { AirpadMotionSensorSource } from '../../../config/motion-diagnostics';

let relSensor: any = null;
let fallbackOrientationActive = false;
let fallbackHandler: ((event: DeviceOrientationEvent) => void) | null = null;

// Orientation state

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
type Quat = [number, number, number, number];

// Normalize with stability: keep sign consistent with previous to avoid hemisphere flips
export function quatNormalizeStable(q: Quat, prev: Quat | null): Quat {
    const [x, y, z, w] = q;
    const len = Math.hypot(x, y, z, w) || 0.01;
    let nx = clamp01(x / len), ny = clamp01(y / len), nz = clamp01(z / len), nw = clamp01(w / len);
    if (prev) {
        const dot = nx * prev[0] + ny * prev[1] + nz * prev[2] + nw * prev[3];
        if (dot < 0) {
            nx = -nx; ny = -ny; nz = -nz; nw = -nw;
        }
    }
    return [nx, ny, nz, nw];
}


export function quatConj(q: Quat): Quat {
    const [x, y, z, w] = q;
    return [-x, -y, -z, w];
}

export function quatMul(a: Quat, b: Quat): Quat {
    const [ax, ay, az, aw] = a;
    const [bx, by, bz, bw] = b;
    return [
        aw * bx + ax * bw + ay * bz - az * by,
        aw * by - ax * bz + ay * bw + az * bx,
        aw * bz + ax * by - ay * bx + az * bw,
        aw * bw - ax * bx - ay * by - az * bz,
    ];
}






export function TAU(): number {
    return Math.PI * 2;
}

export function wrapPi(angle: number): number {
    angle = (angle + Math.PI) % TAU();
    if (angle < 0) angle += TAU();
    return angle - Math.PI;
}

export function angleDeltaRad(current: number, previous: number): number {
    return wrapPi(current - previous);
}

export function snapQuarterTurn(angle: number): number {
    return wrapPi(Math.round(angle / (TAU() / 2)) * (TAU() / 2));
}

//
export function quatNormalize(q: Quat): Quat {
    const x = q[0], y = q[1], z = q[2], w = q[3];
    const len = Math.hypot(x, y, z, w) || 0.01;
    return [
        clamp01(x / len),
        clamp01(y / len),
        clamp01(z / len),
        clamp01(w / len)
    ];
}

//
export function quatFromAxisAngle(x: number, y: number, z: number, angle: number): Quat {
    const half = angle * 0.5;
    const s = Math.sin(half);
    return [x * s, y * s, z * s, Math.cos(half)];
};

//
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

//
export function quatInvertUnit(q: Quat): Quat {
    return [-q[0], -q[1], -q[2], q[3]];
}

//
export function quatRotateVector(q: Quat, v: Vector3): Vector3 {
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
}

//
export function quatDeltaToAxisAngle(dqRaw: Quat): Vector3 {
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
}

/*
// Quaternion delta → small-angle vector (axis * angle)
export const quatDeltaToAxisAngle = (dq: Quat): Vector3 => {
    const [x, y, z, w] = dq;
    const sinHalf = Math.hypot(x, y, z);
    const angle = 2 * Math.atan2(sinHalf, w || 1);
    if (sinHalf < 1e-6) {
        return { x: 0, y: 0, z: 0 };
    }
    const inv = 1 / sinHalf;
    return { x: x * inv * angle, y: y * inv * angle, z: z * inv * angle };
};
*/



export function mapToPixelsRaw(movement: Vector3): Vector3 {
    const selected = vec3Select(
        movement,
        relSrcForMouseX as 'ax' | 'ay' | 'az',
        relSrcForMouseY as 'ax' | 'ay' | 'az',
        relSrcForMouseZ as 'ax' | 'ay' | 'az'
    );

    const rotationZ = selected.z * relDirZ;
    const projected = vec3RotateXYByAngle(selected, rotationZ, 1);
    return {
        x: projected.x * relDirX * REL_ORIENT_GAIN,
        y: projected.y * relDirY * REL_ORIENT_GAIN,
        z: projected.z * relDirZ * REL_ORIENT_GAIN,
    };
}


export function getDisplayOrientationRad(): number {
    const angle = Number(
        globalThis.screen?.orientation?.angle ??
        (globalThis as any).orientation ??
        0
    );

    return Number.isFinite(angle) ? (angle * Math.PI) / 180 : 0;
}



/**
 * Correction angle для того, чтобы движение оставалось в экранном базисе,
 * даже если телефон повернули portrait/landscape.
 *
 * Берём device-up vector и смотрим, как он лежит в reference XY.
 */
export function getPhoneToScreenWarpAngle(q: Quat): number {
    const up = quatRotateVector(q, { x: 0, y: 1, z: 0 });

    const planeMag = Math.hypot(up.x, up.y);
    if (planeMag < 1e-4) {
        return screenWarpAngleRad;
    }

    let angle = wrapPi(-Math.atan2(up.x, up.y) - getDisplayOrientationRad());

    if (REL_ORIENT_WARP_SNAP_RIGHT_ANGLES) {
        angle = snapQuarterTurn(angle);
    }

    return angle;
}

//
export function updateScreenWarpAngle(q: Quat, dt: number): number {
    const target = getPhoneToScreenWarpAngle(q);
    const t = clamp01(expSmoothing(dt, REL_ORIENT_WARP_SMOOTH_RATE));

    screenWarpAngleRad = wrapPi(
        screenWarpAngleRad + angleDeltaRad(target, screenWarpAngleRad) * t
    );

    return screenWarpAngleRad;
}

export function clampPxRadiusFromDeltaVec(deltaVec: Vector3, dt: number): number {
    // Convert deltaVec (rad axis-angle vector) into "desired pixel movement" magnitude.
    // This makes the clamp depend on current motion intensity, and shrink when motion shrinks.
    const rawMapped = mapToPixelsRaw(deltaVec);
    const magPx = Math.hypot(rawMapped.x, rawMapped.y, rawMapped.z);
    const desired = Math.max(REL_ORIENT_MAX_STEP, Math.min(REL_ORIENT_MAX_STEP_MAX, magPx));

    // "Incremental" update: grow slower, shrink faster (feels responsive but stable).
    const t = desired > dynamicMaxStepPx ? expSmoothing(dt, REL_ORIENT_MAX_STEP_UP_RATE) : expSmoothing(dt, REL_ORIENT_MAX_STEP_DOWN_RATE);
    dynamicMaxStepPx = lerp(dynamicMaxStepPx, desired, t);

    if (!Number.isFinite(dynamicMaxStepPx)) dynamicMaxStepPx = REL_ORIENT_MAX_STEP;
    dynamicMaxStepPx = Math.max(REL_ORIENT_MAX_STEP, Math.min(REL_ORIENT_MAX_STEP_MAX, dynamicMaxStepPx));
    return dynamicMaxStepPx;
}

/*
export function clampPxRadiusFromDeltaVec(
    deltaVec: Vector3,
    dt: number,
    warpAngleRad = screenWarpAngleRad
): number {
    const rawMapped = mapToPixelsRaw(deltaVec, warpAngleRad);
    const magPx = Math.hypot(rawMapped.x, rawMapped.y, rawMapped.z);
    const desired = Math.max(REL_ORIENT_MAX_STEP, Math.min(REL_ORIENT_MAX_STEP_MAX, magPx));

    // "Incremental" update: grow slower, shrink faster (feels responsive but stable).
    const t = desired > dynamicMaxStepPx ? expSmoothing(dt, REL_ORIENT_MAX_STEP_UP_RATE) : expSmoothing(dt, REL_ORIENT_MAX_STEP_DOWN_RATE);
    dynamicMaxStepPx = lerp(dynamicMaxStepPx, desired, t);

    if (!Number.isFinite(dynamicMaxStepPx)) { dynamicMaxStepPx = REL_ORIENT_MAX_STEP; }
    dynamicMaxStepPx = Math.max(REL_ORIENT_MAX_STEP, Math.min(REL_ORIENT_MAX_STEP_MAX, dynamicMaxStepPx));
    return dynamicMaxStepPx;
}
*/




//
export function mapAndScale(movement: Vector3, maxStepPx: number): Vector3 {
    const mapped = mapToPixelsRaw(movement);
    return vec3Clamp(mapped, maxStepPx);
}

/*
export function mapAndScale(
    movement: Vector3,
    maxStepPx: number,
    warpAngleRad = screenWarpAngleRad
): Vector3 {
    const mapped = mapToPixelsRaw(movement, warpAngleRad);
    return vec3Clamp(mapped, maxStepPx);
}
*/




//vec3NormalizeAngles

export function handleReading(quat: number[], dt: number): Vector3 {
    if (!quat || quat.length < 4) return vec3Zero();

    //
    const curQuat = quatNormalizeStable([quat[0], quat[1], quat[2], quat[3]], lastQuat);
    if (!lastQuat) { lastQuat = curQuat; };

    // deltaQuat = q_curr * conj(q_prev)
    const deltaQuat = quatMul(curQuat, quatConj(lastQuat)); lastQuat = curQuat;

    // small-angle vector from delta quaternion
    const deltaVec = quatDeltaToAxisAngle(deltaQuat);
    if (vec3IsNearZero(deltaVec, REL_ORIENT_DEADZONE)) {
        const zeroDecayFactor = clamp01(expSmoothing(dt, REL_ORIENT_ZERO_DECAY_RATE));
        smoothedDelta = vec3Smooth(smoothedDelta, vec3Zero(), zeroDecayFactor);
        if (vec3IsNearZero(smoothedDelta, REL_ORIENT_DEADZONE)) {
            smoothedDelta = vec3Zero();
            return vec3Zero();
        }
    }

    // Update adaptive clamp from current (unsmoothed) deltaVec.
    const maxStepPx = clampPxRadiusFromDeltaVec(deltaVec, dt);

    // Smooth delta directly in quaternion space (axis-angle vector)
    const deltaPx = mapToPixelsRaw(deltaVec);
    const deltaMagPx = Math.hypot(deltaPx.x, deltaPx.y, deltaPx.z);
    const magT = clamp01((deltaMagPx - REL_ORIENT_MAX_STEP) / Math.max(1, (REL_ORIENT_MAX_STEP_MAX - REL_ORIENT_MAX_STEP)));
    const smoothRate = lerp(REL_ORIENT_SMOOTH_RATE_LOW, REL_ORIENT_SMOOTH_RATE_HIGH, magT);
    const smoothFactor = clamp01(expSmoothing(dt, smoothRate) * clamp01(REL_ORIENT_SMOOTH));
    smoothedDelta = vec3Smooth(smoothedDelta, deltaVec, smoothFactor * 0.9);

    // clamp delta
    // Convert pixel clamp to axis-angle clamp (rad) for stability before mapping.
    const maxStepRad = maxStepPx / Math.max(1e-6, Math.abs(REL_ORIENT_GAIN));
    smoothedDelta = vec3Clamp(smoothedDelta, Math.max(REL_ORIENT_DEADZONE, maxStepRad));

    // Dead-zone / jitter suppression
    const dz = {
        x: Math.abs(smoothedDelta.x) < REL_ORIENT_DEADZONE ? 0 : smoothedDelta.x,
        y: Math.abs(smoothedDelta.y) < REL_ORIENT_DEADZONE ? 0 : smoothedDelta.y,
        z: Math.abs(smoothedDelta.z) < REL_ORIENT_DEADZONE ? 0 : smoothedDelta.z,
    };

    //
    if (Math.abs(dz.x) < MOTION_JITTER_EPS && Math.abs(dz.y) < MOTION_JITTER_EPS && Math.abs(dz.z) < MOTION_JITTER_EPS) {
        return vec3Zero();
    }

    // Map axes, apply gain, clamp
    const mapped = mapAndScale(dz, maxStepPx);

    // Ignore near-zero after mapping
    if (vec3IsNearZero(mapped, MOTION_JITTER_EPS)) return vec3Zero();
    return mapped;
}

/** iOS / some Android WebViews require a user-gesture permission prompt for orientation events. */
export async function requestRelativeOrientationPermission(): Promise<boolean> {
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

export function startDeviceOrientationFallback(): void {
    if (fallbackOrientationActive) return;
    let lastTs = performance.now();
    let lastEuler: { x: number; y: number; z: number } | null = null;

    fallbackHandler = (event: DeviceOrientationEvent) => {
        const now = performance.now();
        const dt = Math.max(0.00001, (now - lastTs) / 1000);
        lastTs = now;

        const alpha = Number(event.alpha ?? 0);
        const beta = Number(event.beta ?? 0);
        const gamma = Number(event.gamma ?? 0);
        const current = { x: beta, y: gamma, z: alpha };
        if (!lastEuler) {
            lastEuler = current;
            return;
        }
        const deltaDeg = {
            x: current.x - lastEuler.x,
            y: current.y - lastEuler.y,
            z: current.z - lastEuler.z
        };
        lastEuler = current;

        // Convert small Euler deltas to radians and reuse the same motion queue.
        const mapped = mapAndScale({
            x: (deltaDeg.x * Math.PI) / 180,
            y: (deltaDeg.y * Math.PI) / 180,
            z: (deltaDeg.z * Math.PI) / 180
        }, clampPxRadiusFromDeltaVec({
            x: (deltaDeg.x * Math.PI) / 180,
            y: (deltaDeg.y * Math.PI) / 180,
            z: (deltaDeg.z * Math.PI) / 180
        }, dt));

        if (getAirState && getAirState() !== 'AIR_MOVE') return;
        if (aiModeActive) return;
        if (vec3IsNearZero(mapped, MOTION_JITTER_EPS)) return;
        enqueueMotion(mapped.x, mapped.y, mapped.z);
    };

    globalThis.addEventListener("deviceorientation", fallbackHandler as EventListener, { passive: true });
    fallbackOrientationActive = true;
    log("RelativeOrientation fallback active (deviceorientation)");
};

/**
 * (Re)start motion sensors after the Air hold gesture — required on Android/Capacitor
 * where Generic Sensor API start() fails without user activation.
 */
export async function ensureAirMoveMotionSensors(): Promise<AirpadMotionSensorSource> {
    await requestRelativeOrientationPermission();
    await resetRelativeOrientationRuntimeState();
    return initRelativeOrientation();
}

export function initRelativeOrientation(): AirpadMotionSensorSource {
    resetRelativeOrientationRuntimeState();
    stopRelativeOrientation();

    if (!(window as any).RelativeOrientationSensor ) {
        log('RelativeOrientationSensor API is not supported.');
        startDeviceOrientationFallback();
        return 'none';
    }

    try {
        relSensor = new (window as any).RelativeOrientationSensor({ frequency: 60, referenceFrame: 'device' });
        return 'relative-orientation';
    } catch (err: any) {
        log('Cannot create RelativeOrientationSensor: ' + (err?.message || err));
        relSensor = null;
        startDeviceOrientationFallback();
        return 'none';
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
        enqueueMotion(mapped.x, mapped.y, mapped.z);
    });

    relSensor.addEventListener('error', (event: any) => {
        log('RelativeOrientationSensor error: ' + ((event?.error?.message) || event?.message || event));
        startDeviceOrientationFallback();
        return 'none';
    });

    try {
        relSensor.start();
        log('RelativeOrientationSensor started (120 Hz)');
    } catch (err: any) {
        log('RelativeOrientationSensor start failed: ' + (err?.message || err));
        startDeviceOrientationFallback();
        return 'none';
    }

    return 'relative-orientation';
}