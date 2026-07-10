/*
 * Filename: airpad-facade-subpaths.test.ts
 * FullPath: modules/views/airpad-view/test/airpad-facade-subpaths.test.ts
 * Change date and time: 14.25.00_10.07.2026
 * Reason for changes: Pass-II migration guard — proves the src/input and src/network
 *   public facade subpaths resolve to real files (not broken CWSP-reborn symlinks)
 *   and re-export the canonical input-old/network-old modules.
 */
import assert from "node:assert/strict";
import { existsSync, lstatSync, readFileSync } from "node:fs";
import { relative, resolve, sep } from "node:path";

/*
 * WHY: each entry is a public import path consumed by app code (src/main.ts,
 * src/index.ts, src/ui/*, src/component/*, src/config/*) plus the source-content
 * regression paths. After Pass-II these must be REAL facade files that re-export
 * the working -old trees — never dangling symlinks into CWSP-reborn stubs.
 */
const FACADE_MAP: Array<{ facade: string; old: string }> = [
    // src/input facade → src/input-old
    { facade: "src/input/speech.ts", old: "src/input-old/speech.ts" },
    { facade: "src/input/virtual-keyboard.ts", old: "src/input-old/virtual-keyboard.ts" },
    { facade: "src/input/keyboard/api.ts", old: "src/input-old/keyboard/api.ts" },
    { facade: "src/input/keyboard/constants.ts", old: "src/input-old/keyboard/constants.ts" },
    { facade: "src/input/keyboard/handlers.ts", old: "src/input-old/keyboard/handlers.ts" },
    { facade: "src/input/keyboard/message.ts", old: "src/input-old/keyboard/message.ts" },
    { facade: "src/input/keyboard/state.ts", old: "src/input-old/keyboard/state.ts" },
    { facade: "src/input/keyboard/ui.ts", old: "src/input-old/keyboard/ui.ts" },
    { facade: "src/input/sensor/relative-orientation.ts", old: "src/input-old/sensor/relative-orientation.ts" },
    { facade: "src/input/sensor/broken.ts", old: "src/input-old/sensor/broken.ts" },
    { facade: "src/input/unfinised/_euler.ts", old: "src/input-old/unfinised/_euler.ts" },
    { facade: "src/input/unfinised/accelerometer.ts", old: "src/input-old/unfinised/accelerometer.ts" },
    { facade: "src/input/unfinised/gravity-sensor.ts", old: "src/input-old/unfinised/gravity-sensor.ts" },
    { facade: "src/input/unfinised/gyroscope.ts", old: "src/input-old/unfinised/gyroscope.ts" },
    // src/network facade → src/network-old
    { facade: "src/network/session.ts", old: "src/network-old/session.ts" },
    { facade: "src/network/coordinator.ts", old: "src/network-old/coordinator.ts" },
    { facade: "src/network/intents.ts", old: "src/network-old/intents.ts" },
    { facade: "src/network/rails/packet-ws.ts", old: "src/network-old/rails/packet-ws.ts" },
    { facade: "src/network/transport/index.ts", old: "src/network-old/transport/index.ts" },
    { facade: "src/network/transport/websocket.ts", old: "src/network-old/transport/websocket.ts" },
];

const projectRoot = resolve(".");

for (const { facade, old } of FACADE_MAP) {
    const facadePath = resolve(facade);
    const oldPath = resolve(old);

    // INVARIANT: facade must be a real file, not a dangling symlink into CWSP-reborn stubs.
    assert.ok(existsSync(facadePath), `facade ${facade} must exist`);
    assert.ok(!lstatSync(facadePath).isSymbolicLink(), `facade ${facade} must be a real file (not a symlink)`);

    // INVARIANT: the canonical -old module it re-exports must still exist.
    assert.ok(existsSync(oldPath), `canonical ${old} must exist for facade ${facade}`);

    // COMPAT: facade must re-export the -old module (single source of truth, no behavior clone).
    const facadeSource = readFileSync(facadePath, "utf8");
    const expectedTarget = relative(resolve(facade, ".."), oldPath.replace(/\.ts$/, "")).split(sep).join("/");
    assert.ok(
        new RegExp(`export\\s+\\*\\s+from\\s+['"]${expectedTarget.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}['"]`).test(facadeSource),
        `facade ${facade} must re-export from ${expectedTarget}`
    );
}

console.info("airpad facade subpaths resolve regression ok");
