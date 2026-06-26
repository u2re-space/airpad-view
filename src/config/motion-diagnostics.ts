export type AirpadMotionSensorSource = 'relative' | 'orientation-fallback' | 'gyro' | 'accelerometer' | 'none';

type AirpadMotionDiagnostics = {
    activeSource: AirpadMotionSensorSource;
    sensorSamples: Partial<Record<AirpadMotionSensorSource, number>>;
    sends: number;
    lastSendAt: number;
    lastSendGapMs: number;
};

const diagnostics: AirpadMotionDiagnostics = {
    activeSource: 'none',
    sensorSamples: {},
    sends: 0,
    lastSendAt: 0,
    lastSendGapMs: 0
};

const nowMs = (): number => {
    const perf = globalThis.performance;
    if (typeof perf?.now === 'function') return perf.now();
    return Date.now();
};

export const setAirpadMotionActiveSource = (source: AirpadMotionSensorSource): void => {
    diagnostics.activeSource = source;
};

export const recordAirpadMotionSensorSample = (source: AirpadMotionSensorSource): void => {
    diagnostics.sensorSamples[source] = (diagnostics.sensorSamples[source] ?? 0) + 1;
};

export const recordAirpadMotionSend = (): void => {
    const now = nowMs();
    diagnostics.sends += 1;
    diagnostics.lastSendGapMs = diagnostics.lastSendAt > 0 ? now - diagnostics.lastSendAt : 0;
    diagnostics.lastSendAt = now;
};

export const resetAirpadMotionDiagnostics = (): void => {
    diagnostics.activeSource = 'none';
    diagnostics.sensorSamples = {};
    diagnostics.sends = 0;
    diagnostics.lastSendAt = 0;
    diagnostics.lastSendGapMs = 0;
};

export const getAirpadMotionDiagnosticsSnapshot = (): AirpadMotionDiagnostics => ({
    activeSource: diagnostics.activeSource,
    sensorSamples: { ...diagnostics.sensorSamples },
    sends: diagnostics.sends,
    lastSendAt: diagnostics.lastSendAt,
    lastSendGapMs: diagnostics.lastSendGapMs
});
