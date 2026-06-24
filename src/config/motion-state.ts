// =========================
// Unified motion accumulator and debounced sender
// =========================

import { getMotionSendIntervalMs, recordMotionSendSample, MOTION_JITTER_EPS } from './config';
import { sendAirPadIntent } from '../network/session';
import { createMotionFlushGate } from './motion-rate-gate';
import { quantizeMotionFlush, type MotionAccum } from './motion-quantize';

const accum: MotionAccum = { dx: 0, dy: 0, dz: 0 };

let flushRaf: number | null = null;
const flushGate = createMotionFlushGate({ getIntervalMs: getMotionSendIntervalMs });

function clearAccum() {
    accum.dx = 0;
    accum.dy = 0;
    accum.dz = 0;
}

function emitMotionNow(): boolean {
    const motion = quantizeMotionFlush(accum);
    if (!motion) return false;
    recordMotionSendSample();
    sendAirPadIntent({
        type: 'pointer.move',
        dx: motion.dx,
        dy: motion.dy,
        dz: motion.dz
    });
    return true;
}

/** Send pending motion immediately (before discrete click so cursor matches intent). */
export function flushMotionNow(): void {
    if (flushRaf !== null) {
        cancelAnimationFrame(flushRaf);
        flushRaf = null;
    }
    if (emitMotionNow()) flushGate.recordFlush();
}

function scheduleFlush() {
    if (flushRaf !== null) return;
    flushRaf = requestAnimationFrame(() => {
        flushRaf = null;
        if (flushGate.shouldFlush() && emitMotionNow()) flushGate.recordFlush();
        if (accum.dx !== 0 || accum.dy !== 0 || accum.dz !== 0) scheduleFlush();
    });
}

// Public API: accumulate motion deltas; they will be sent on the next animation frame.
export function enqueueMotion(dx: number, dy: number, dz: number = 0) {
    if (Math.abs(dx) < MOTION_JITTER_EPS) dx = 0;
    if (Math.abs(dy) < MOTION_JITTER_EPS) dy = 0;
    if (Math.abs(dz) < MOTION_JITTER_EPS) dz = 0;
    if (dx === 0 && dy === 0 && dz === 0) return;

    accum.dx += dx;
    accum.dy += dy;
    accum.dz += dz;
    scheduleFlush();
}

export function resetMotionAccum() {
    clearAccum();
    if (flushRaf !== null) {
        cancelAnimationFrame(flushRaf);
        flushRaf = null;
    }
    flushGate.reset();
}
