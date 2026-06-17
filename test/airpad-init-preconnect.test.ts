import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const mainSource = readFileSync(resolve("src/main.ts"), "utf8");

assert.ok(
    mainSource.includes("connectAirPadSession"),
    "AirPad main view must import connectAirPadSession for startup preconnect"
);
assert.ok(
    /runInitializer\("websocket preconnect",\s*\(\)\s*=>\s*connectAirPadSession\(\)\)/.test(mainSource),
    "AirPad startup must preconnect before the first Air hold"
);

console.info("airpad init preconnect regression ok");
