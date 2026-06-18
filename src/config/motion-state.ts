// =========================
// Unified motion accumulator and debounced sender
// =========================

import { MOTION_SEND_INTERVAL, MOTION_JITTER_EPS } from './config';
import { sendAirPadIntent } from '../network/session';
import { quantizeMotionFlush, type MotionAccum } from './motion-quantize';


const accum: MotionAccum = { dx: 0, dy: 0, dz: 0 };

let flushTimer: number | null = null;

function clearAccum() {
    accum.dx = 0;
    accum.dy = 0;
    accum.dz = 0;
}

/** Send any debounced motion immediately (before discrete click so cursor matches intent). */
export function flushMotionNow(): void {
    if (flushTimer !== null) {
        clearTimeout(flushTimer);
        flushTimer = null;
    }
    const motion = quantizeMotionFlush(accum);
    clearAccum();
    if (!motion) return;
    sendAirPadIntent({
        type: "pointer.move",
        dx: motion.dx,
        dy: motion.dy,
        dz: motion.dz
    });
}

function scheduleFlush() {
    if (flushTimer !== null) return;
    flushTimer = globalThis?.setTimeout?.(() => {
        flushTimer = null;
        const motion = quantizeMotionFlush(accum);
        if (!motion) return;
        sendAirPadIntent({
            type: 'pointer.move',
            dx: motion.dx,
            dy: motion.dy,
            dz: motion.dz,
        });
    }, MOTION_SEND_INTERVAL) as any;
}

// Public API: accumulate motion deltas; they will be sent debounced
export function enqueueMotion(dx: number, dy: number, dz: number = 0) {
    // Jitter suppression: ignore near-zero noise
    if (Math.abs(dx) < MOTION_JITTER_EPS) dx = 0;
    if (Math.abs(dy) < MOTION_JITTER_EPS) dy = 0;
    if (Math.abs(dz) < MOTION_JITTER_EPS) dz = 0;
    if (dx === 0 && dy === 0 && dz === 0) return;

    accum.dx += dx;
    accum.dy += dy;
    accum.dz += dz;
    scheduleFlush();
}

// For tests / manual resets
export function resetMotionAccum() {
    clearAccum();
    if (flushTimer !== null) {
        clearTimeout(flushTimer);
        flushTimer = null;
    }
}

