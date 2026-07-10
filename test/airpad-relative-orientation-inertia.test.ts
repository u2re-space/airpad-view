import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

// WHY: src/input/sensor/relative-orientation.ts is now a Pass-II facade re-exporting
// the canonical implementation in src/input-old/sensor/relative-orientation.ts. The
// regression guards implementation invariants, so it reads the canonical -old source.
// NOTE: this test encodes the not-yet-completed rotation-vector inertia migration
// (vec3SmoothRotationVector / vec3IsNearZeroMagnitude / recordAirpadMotionSensorSample
// diagnostics), which currently lives in src/input-old/sensor/broken.ts. Until that
// variant is promoted into relative-orientation.ts, this regression stays RED by design.
const source = readFileSync(resolve("src/input-old/sensor/relative-orientation.ts"), "utf8");

assert.ok(
    /REL_ORIENT_ZERO_DECAY_RATE/.test(source),
    "relative orientation must decay smoothed delta toward zero when sensor delta stops"
);
assert.ok(
    /const REL_ORIENT_ZERO_DECAY_RATE = 420;/.test(source),
    "relative orientation zero-decay must be aggressive enough to avoid stop-tail inertia"
);

assert.ok(
    /if\s*\(vec3IsNearZeroMagnitude\(deltaVec,\s*REL_ORIENT_DEADZONE\)\)/m.test(source),
    "relative orientation must detect zero/newly-stopped frame deltas"
);

assert.ok(
    /smoothedDelta\s*=\s*vec3SmoothRotationVector\(smoothedDelta,\s*vec3Zero\(\),\s*zeroDecayFactor\)/m.test(source),
    "relative orientation must not keep sending the previous smoothed diff forever"
);

assert.ok(
    /if\s*\(vec3IsNearZero\(mapped,\s*MOTION_JITTER_EPS\)\)\s*return;/m.test(source),
    "Generic Sensor reading path must skip zero mapped movement"
);

assert.ok(
    source.includes("recordAirpadMotionSensorSample('relative')"),
    "relative orientation path must record active sensor diagnostics"
);

console.info("airpad relative orientation inertia regression ok");
