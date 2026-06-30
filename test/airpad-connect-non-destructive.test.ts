import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const coordinatorSource = readFileSync(resolve("src/network/coordinator.ts"), "utf8");
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
