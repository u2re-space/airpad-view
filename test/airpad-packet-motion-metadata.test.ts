import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

// WHY: src/network/rails/packet-ws.ts is now a Pass-II facade re-exporting the
// canonical implementation in src/network-old/rails/packet-ws.ts. The regression
// guards implementation invariants, so it reads the canonical -old source.
const source = readFileSync(resolve("src/network-old/rails/packet-ws.ts"), "utf8");

assert.match(
    source,
    /case "pointer\.move":[\s\S]*?motionHz: getMotionSendHz\(\),[\s\S]*?motionPath: getMotionPathClass\(\)/,
    "legacy JSON pointer.move packets must carry diagnostic 60/30Hz motion metadata"
);

assert.match(
    source,
    /buildInputV3Payload[\s\S]*?seq:[\s\S]*?sentAt:[\s\S]*?route:/,
    "Input v3 packets intentionally use their own timing payload instead of motionHz metadata"
);

assert.match(
    source,
    /encodeBinaryMove\(intent\.dx,\s*intent\.dy\)/,
    "direct binary pointer.move remains compact and does not carry motionHz metadata"
);

console.info("airpad packet motion metadata regression ok");
