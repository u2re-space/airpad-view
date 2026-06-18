import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const source = readFileSync(resolve("src/input/sensor/relative-orientation.ts"), "utf8");

assert.ok(
    /REL_ORIENT_ZERO_DECAY_RATE/.test(source),
    "relative orientation must decay smoothed delta toward zero when sensor delta stops"
);

assert.ok(
    /if\s*\(vec3IsNearZero\(deltaVec,\s*REL_ORIENT_DEADZONE\)\)/m.test(source),
    "relative orientation must detect zero/newly-stopped frame deltas"
);

assert.ok(
    /smoothedDelta\s*=\s*vec3Smooth\(smoothedDelta,\s*vec3Zero\(\),\s*zeroDecayFactor\)/m.test(source),
    "relative orientation must not keep sending the previous smoothed diff forever"
);

assert.ok(
    /if\s*\(vec3IsNearZero\(mapped,\s*MOTION_JITTER_EPS\)\)\s*return;/m.test(source),
    "Generic Sensor reading path must skip zero mapped movement"
);

console.info("airpad relative orientation inertia regression ok");
