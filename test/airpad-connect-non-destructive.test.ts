import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

// WHY: src/network/coordinator.ts is now a Pass-II facade re-exporting the
// canonical implementation in src/network-old/coordinator.ts. The regression
// guards implementation invariants, so it reads the canonical -old source.
const coordinatorSource = readFileSync(resolve("src/network-old/coordinator.ts"), "utf8");
const connectBody = coordinatorSource.match(/connect\(\): void \{([\s\S]*?)\n    \},/)?.[1] || "";

assert.ok(
    connectBody.includes("connectPacketWsRail();"),
    "AirPad connect() must be an idempotent socket connect for pointerdown"
);
assert.ok(
    !connectBody.includes("reconnectTransportAfterLifecycleResume"),
    "AirPad pointerdown must not force lifecycle reconnect; it tears down the live socket"
);

console.info("airpad connect non-destructive regression ok");
