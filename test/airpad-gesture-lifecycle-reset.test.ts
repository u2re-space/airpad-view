import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const source = readFileSync(resolve("src/ui/air-button.ts"), "utf8");

assert.ok(
    /import \{[^}]*resetMotionAccum[^}]*\} from ['"]\.\.\/config\/motion-state['"];/.test(source),
    "Air gesture reset must clear pending motion accumulator"
);
assert.ok(
    /export function resetAirState\(\)[\s\S]*?resetMotionAccum\(\);[\s\S]*?resetMotionBaseline\(\);/.test(source),
    "resetAirState must drop pending motion before resetting sensor baseline"
);

for (const eventName of ["lostpointercapture", "visibilitychange", "pagehide", "blur"]) {
    assert.ok(
        source.includes(`'${eventName}'`),
        `Air button must cancel stuck AIR_MOVE on ${eventName}`
    );
}

assert.ok(
    /function cancelActiveAirGesture\(reason: string\)[\s\S]*?pointer\.up[\s\S]*?resetAirState\(\);/.test(source),
    "lifecycle cancellation must release drag and return Air state to IDLE"
);

assert.ok(
    /startJsAirMoveSensors[\s\S]*?ensureAirMoveMotionSensors\(\)\.then\(\(source\)[\s\S]*?source === 'relative' \|\| source === 'orientation-fallback'[\s\S]*?startLegacyAirMoveSensors\(\);/m.test(source),
    "AirMove must prefer one RelativeOrientation source and start gyro/accelerometer only as fallback"
);

assert.ok(
    !/gyroOnEnterAirMove\(\);[\s\S]*?accelOnEnterAirMove\(\);[\s\S]*?ensureAirMoveMotionSensors\(\);/m.test(source),
    "AirMove must not start gyro, accelerometer, and relative-orientation in parallel"
);

console.info("airpad gesture lifecycle reset regression ok");
