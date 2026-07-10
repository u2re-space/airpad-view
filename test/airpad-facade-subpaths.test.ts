/*
 * Filename: airpad-facade-subpaths.test.ts
 * FullPath: modules/views/airpad-view/test/airpad-facade-subpaths.test.ts
 * Change date and time: 16.32.00_10.07.2026
 * Reason for changes: Pass-II migration guard — proves the src/input and src/network
 *   public facade subpaths resolve to real files (not broken CWSP-reborn symlinks),
 *   re-export the canonical input-old/network-old modules, and (for Node-loadable
 *   leaf modules) are actually importable with matching export bindings.
 */
import assert from "node:assert/strict";
import { existsSync, lstatSync, readFileSync } from "node:fs";
import { relative, resolve, sep } from "node:path";
import { pathToFileURL } from "node:url";

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

/*
 * NOTE: full network/session and sensor stacks pull Vite aliases (`shared`,
 * `com/config/Settings`, …) that Node/tsx does not resolve. Import-contract
 * coverage therefore targets leaf modules that load under plain tsx.
 * COMPAT: intents is types-only at runtime (empty export object) — import must
 * still succeed.
 */
const IMPORTABLE_FACADE_CONTRACTS: Array<{
    facade: string;
    old: string;
    requiredExports: string[];
}> = [
    {
        facade: "src/network/intents.ts",
        old: "src/network-old/intents.ts",
        requiredExports: [],
    },
    {
        facade: "src/input/keyboard/constants.ts",
        old: "src/input-old/keyboard/constants.ts",
        requiredExports: ["EMOJI_CATEGORIES", "KEYBOARD_LAYOUT", "KEYBOARD_LAYOUT_UPPER"],
    },
    {
        facade: "src/input/keyboard/state.ts",
        old: "src/input-old/keyboard/state.ts",
        requiredExports: [
            "setKeyboardVisible",
            "isKeyboardVisible",
            "setRemoteKeyboardEnabled",
            "isRemoteKeyboardEnabled",
        ],
    },
    {
        facade: "src/input/keyboard/api.ts",
        old: "src/input-old/keyboard/api.ts",
        requiredExports: ["initVirtualKeyboardAPI", "getVirtualKeyboardAPI", "hasVirtualKeyboardAPI"],
    },
    {
        facade: "src/input/unfinised/gravity-sensor.ts",
        old: "src/input-old/unfinised/gravity-sensor.ts",
        requiredExports: [
            "getGravityVector",
            "initGravitySensor",
            "resetGravitySensor",
            "applyDimensionalCorrection",
        ],
    },
];

const projectRoot = resolve(".");

for (const { facade, old } of FACADE_MAP) {
    const facadePath = resolve(projectRoot, facade);
    const oldPath = resolve(projectRoot, old);

    // INVARIANT: facade must be a real file, not a dangling symlink into CWSP-reborn stubs.
    assert.ok(existsSync(facadePath), `facade ${facade} must exist`);
    assert.ok(!lstatSync(facadePath).isSymbolicLink(), `facade ${facade} must be a real file (not a symlink)`);

    // INVARIANT: the canonical -old module it re-exports must still exist.
    assert.ok(existsSync(oldPath), `canonical ${old} must exist for facade ${facade}`);

    // COMPAT: facade must re-export the -old module (single source of truth, no behavior clone).
    // Extensionless relative specifiers are required (moduleResolution: bundler).
    const facadeSource = readFileSync(facadePath, "utf8");
    const expectedTarget = relative(resolve(facadePath, ".."), oldPath.replace(/\.ts$/, "")).split(sep).join("/");
    assert.ok(
        new RegExp(`export\\s+\\*\\s+from\\s+['"]${expectedTarget.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}['"]`).test(facadeSource),
        `facade ${facade} must re-export from ${expectedTarget}`
    );
    assert.ok(
        !/\.ts['"]\s*;?\s*$/m.test(facadeSource.match(/export\s+\*\s+from\s+['"][^'"]+['"]/)?.[0] ?? ""),
        `facade ${facade} must use extensionless relative re-export (bundler resolution)`
    );
}

for (const { facade, old, requiredExports } of IMPORTABLE_FACADE_CONTRACTS) {
    const facadeUrl = pathToFileURL(resolve(projectRoot, facade)).href;
    const oldUrl = pathToFileURL(resolve(projectRoot, old)).href;
    const facadeMod = await import(facadeUrl);
    const oldMod = await import(oldUrl);

    for (const name of requiredExports) {
        assert.ok(name in facadeMod, `facade ${facade} must export ${name}`);
        assert.equal(
            facadeMod[name],
            oldMod[name],
            `facade ${facade} export ${name} must be the same binding as ${old}`
        );
    }

    // INVARIANT: export * must not invent extra runtime keys beyond the -old module.
    const facadeKeys = Object.keys(facadeMod).sort();
    const oldKeys = Object.keys(oldMod).sort();
    assert.deepEqual(
        facadeKeys,
        oldKeys,
        `facade ${facade} runtime export keys must match ${old}`
    );
}

// Cycle hygiene: ui/air-button must not re-enter the new input/* facade layer for
// modules that input-old already imports (speech / sensors). Public entrypoints
// (main/index) still use src/input/* — that is intentional.
const airButtonSource = readFileSync(resolve(projectRoot, "src/ui/air-button.ts"), "utf8");
assert.ok(
    /from\s+['"]\.\.\/input-old\/speech['"]/.test(airButtonSource),
    "air-button must import speech from input-old to avoid facade↔ui cycles"
);
assert.ok(
    /from\s+['"]\.\.\/input-old\/sensor\/relative-orientation['"]/.test(airButtonSource),
    "air-button must import relative-orientation from input-old to avoid facade↔ui cycles"
);
assert.ok(
    /from\s+['"]\.\.\/input-old\/unfinised\/gyroscope['"]/.test(airButtonSource),
    "air-button must import gyroscope from input-old to avoid facade↔ui cycles"
);
assert.ok(
    /from\s+['"]\.\.\/input-old\/unfinised\/accelerometer['"]/.test(airButtonSource),
    "air-button must import accelerometer from input-old to avoid facade↔ui cycles"
);
assert.ok(
    !/from\s+['"]\.\.\/input\/(speech|sensor\/relative-orientation|unfinised\/(?:gyroscope|accelerometer))['"]/.test(airButtonSource),
    "air-button must not import cyclic motion modules via the new input/* facades"
);

console.info("airpad facade subpaths resolve + import contract ok");
