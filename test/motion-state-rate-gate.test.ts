import assert from "node:assert/strict";

const { createMotionFlushGate } = await import("../src/config/motion-rate-gate.ts");

let now = 1000;
const gate = createMotionFlushGate({
    now: () => now,
    getIntervalMs: () => 17
});

assert.equal(gate.shouldFlush(), true, "first motion flush should be allowed immediately");
gate.recordFlush();

now += 8;
assert.equal(gate.shouldFlush(), false, "second rAF before the 60Hz interval must keep accumulating");

now += 9;
assert.equal(gate.shouldFlush(), true, "flush should resume once the configured interval elapses");
gate.recordFlush();

gate.reset();
now += 1;
assert.equal(gate.shouldFlush(), true, "reset should allow an urgent/discrete flush immediately");

console.info("motion-state rate gate regression ok");
