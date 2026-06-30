import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const configSource = readFileSync(resolve("src/config/config.ts"), "utf8");
const routeTargetBody = configSource.match(/export function getRemoteRouteTarget\(\): string \{([\s\S]*?)\n\}/)?.[1] || "";

const quickIndex = routeTargetBody.indexOf("remoteConfig.quickConnectValue.trim()");
const directIndex = routeTargetBody.indexOf("const direct = remoteConfig.directUrl.trim()");

assert.ok(quickIndex >= 0, "AirPad route target must inspect quickConnectValue");
assert.ok(directIndex >= 0, "AirPad route target must still inspect directUrl");
assert.ok(
    quickIndex < directIndex,
    "AirPad quick-connect L-192.168.0.200 must override stale directUrl/default desk route target"
);
assert.ok(
    routeTargetBody.includes("FLEET_GATEWAY_WIRE_NODE_ID"),
    "AirPad gateway quick-connect origins must resolve to the Linux gateway node id"
);
assert.ok(
    !routeTargetBody.includes("if (isGatewayHttpsOrigin(direct)) return DEFAULT_DESK_WIRE_NODE_ID"),
    "gateway directUrl must not force desk L-110 control target"
);

console.info("airpad quick target route regression ok");
