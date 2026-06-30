import assert from "node:assert/strict";

let motionQuantize: any;
try {
    motionQuantize = await import("../src/config/motion-quantize.ts");
} catch (error) {
    assert.fail(`missing motion quantizer helper: ${(error as Error).message}`);
}

assert.equal(
    typeof motionQuantize.quantizeMotionFlush,
    "function",
    "motion-state must expose quantizeMotionFlush for accumulator regression coverage"
);

const accum = { dx: 0.2, dy: 0.2, dz: 0 };
let result = motionQuantize.quantizeMotionFlush(accum);
assert.equal(result, null, "subpixel movement must not send a rounded zero packet");
assert.deepEqual(accum, { dx: 0.2, dy: 0.2, dz: 0 }, "subpixel remainder must be kept");

accum.dx += 0.2;
accum.dy += 0.2;
result = motionQuantize.quantizeMotionFlush(accum);
assert.equal(result, null, "still below integer threshold");
assert.deepEqual(accum, { dx: 0.4, dy: 0.4, dz: 0 }, "remainder still kept below threshold");

accum.dx += 0.2;
accum.dy += 0.2;
result = motionQuantize.quantizeMotionFlush(accum);
assert.deepEqual(result, { dx: 1, dy: 1, dz: 0 }, "fractional motion must eventually emit an integer step");
assert.ok(Math.abs(accum.dx + 0.4) < 1e-9, "dx remainder should be preserved after integer emit");
assert.ok(Math.abs(accum.dy + 0.4) < 1e-9, "dy remainder should be preserved after integer emit");

console.info("motion-state quantization regression ok");
