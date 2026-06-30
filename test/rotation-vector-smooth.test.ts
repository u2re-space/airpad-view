import assert from "node:assert/strict";
import {
    vec3Smooth,
    vec3SmoothRotationVector,
    vec3ShortestRotationTarget,
} from "../src/utils/math.ts";

const PI = Math.PI;

// Equivalent rotations across π: +179° and -179° around X.
const nearPi = { x: PI - 0.02, y: 0, z: 0 };
const nearNegPi = { x: -(PI - 0.02), y: 0, z: 0 };

const flipped = vec3ShortestRotationTarget(nearPi, nearNegPi);
assert.ok(
    flipped.x > 0,
    `shortest rotation target must stay in same hemisphere (got x=${flipped.x})`
);

const rotSmooth = vec3SmoothRotationVector(nearPi, nearNegPi, 0.5);
assert.ok(
    rotSmooth.x > 0,
    `rotation smooth across π wrap must not reverse (got x=${rotSmooth.x})`
);

// Small residual + flipped delta: linear smooth can cross zero and reverse.
const residual = { x: 0.003, y: 0, z: 0 };
const opposing = { x: -0.004, y: 0, z: 0 };

const linear = vec3Smooth(residual, opposing, 0.5);
const rot = vec3SmoothRotationVector(residual, opposing, 0.5);

assert.ok(
    linear.x < 0,
    `linear smooth should demonstrate reversal bug (got x=${linear.x})`
);
assert.ok(
    rot.x > 0,
    `rotation smooth must keep forward hemisphere (got x=${rot.x})`
);

console.info("rotation vector smooth wrap regression ok");
