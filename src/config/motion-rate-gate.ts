export type MotionFlushGateOptions = {
    now?: () => number;
    getIntervalMs: () => number;
};

export type MotionFlushGate = {
    shouldFlush: () => boolean;
    recordFlush: () => void;
    reset: () => void;
};

const defaultNow = (): number => {
    const perf = globalThis.performance;
    if (typeof perf?.now === 'function') return perf.now();
    return Date.now();
};

export const createMotionFlushGate = ({
    now = defaultNow,
    getIntervalMs
}: MotionFlushGateOptions): MotionFlushGate => {
    let lastFlushAt: number | null = null;

    return {
        shouldFlush: () => {
            if (lastFlushAt === null) return true;
            return now() - lastFlushAt >= Math.max(1, getIntervalMs());
        },
        recordFlush: () => {
            lastFlushAt = now();
        },
        reset: () => {
            lastFlushAt = null;
        }
    };
};
