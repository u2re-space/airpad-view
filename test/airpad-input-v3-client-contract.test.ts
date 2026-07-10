import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

// WHY: src/network/rails/packet-ws.ts is now a Pass-II facade re-exporting the
// canonical implementation in src/network-old/rails/packet-ws.ts. The regression
// guards implementation invariants, so it reads the canonical -old source.
const packetWsSource = readFileSync(resolve("src/network-old/rails/packet-ws.ts"), "utf8");

assert.ok(
    packetWsSource.includes("isInputV3Enabled"),
    "AirPad packet rail must gate v3 input behind an explicit feature flag"
);
assert.ok(
    packetWsSource.includes("buildInputV3Payload"),
    "AirPad packet rail must build one canonical v3 payload for pointer motion"
);
assert.ok(
    /if \(!canUseBinaryAirpadTransport\(\)\) return false;/.test(packetWsSource),
    "routed AirPad must not use binary packets because binary frames have no route metadata"
);

console.info("airpad input-v3 client contract ok");
