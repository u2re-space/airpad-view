export type MotionAccum = { dx: number; dy: number; dz: number };

export type QuantizedMotion = { dx: number; dy: number; dz: number };

/** Quantize relative motion for integer wire formats while preserving subpixel remainder. */
export const quantizeMotionFlush = (accum: MotionAccum): QuantizedMotion | null => {
    const dx = Math.round(accum.dx);
    const dy = Math.round(accum.dy);
    const dz = Math.round(accum.dz);
    if (dx === 0 && dy === 0 && dz === 0) return null;
    accum.dx -= dx;
    accum.dy -= dy;
    accum.dz -= dz;
    return { dx, dy, dz };
};
