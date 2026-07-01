import { getAirPadDestinationId, isShellRemoteClipboardBridgeEnabled, getMotionSendHz, getMotionPathClass } from "../../config/config.ts";
import {
    getAirpadMotionKvmPayload,
    refreshAirpadKvmSession,
    resetAirpadKvmSession,
    trackAirpadMotionDelta
} from "../../config/kvm-session.ts";
import {
    encodeBinaryClick,
    encodeBinaryKeyboard,
    encodeBinaryMouseDown,
    encodeBinaryMouseUp,
    encodeBinaryMove,
    encodeBinaryScroll,
    decodeBinaryAirpadIntent
} from "cwsp-shared/cwsp-binary-airpad";
import {
    connectWS,
    disconnectWS,
    initWebSocket,
    isWSConnected,
    onServerClipboardUpdate,
    onWSConnectionChange,
    sendCoordinatorAct,
    sendCoordinatorRequest,
    sendWsBinary
} from "../transport/websocket.ts";
import type { AirPadClipboardResult, AirPadIntent } from "../intents.ts";
import { INPUT_V3_FLAG, type InputV3Payload } from "cwsp-shared/input-v3";
import { CWSP_SLOT, cwspGlobal } from "cwsp-shared/cwsp-global";

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));
const CLIPBOARD_CHORD_SETTLE_MS = 140;
const INPUT_V3_STORAGE_KEY = "airpad.input.v3";

type PacketWsRailState = { inputV3Seq: number };

const packetWsRail = (): PacketWsRailState =>
    cwspGlobal(CWSP_SLOT.airpadPacketWsRail, () => ({ inputV3Seq: 0 }));

export const isInputV3Enabled = (): boolean => {
    const globalFlag = (globalThis as { CWS_INPUT_V3?: unknown }).CWS_INPUT_V3;
    if (globalFlag === true || globalFlag === "1" || globalFlag === INPUT_V3_FLAG) return true;
    try {
        return globalThis.localStorage?.getItem(INPUT_V3_STORAGE_KEY) === "1";
    } catch {
        return false;
    }
};

export const buildInputV3Payload = (intent: Extract<AirPadIntent, { type: "pointer.move" }>): InputV3Payload => ({
    input: INPUT_V3_FLAG,
    dx: intent.dx,
    dy: intent.dy,
    seq: ++packetWsRail().inputV3Seq,
    sentAt: Date.now(),
    route: getAirPadDestinationId().trim()
});

/** Act/ask replies may be a raw string or `{ value, text, ok, handled }` from local-dispatch. */
const extractCoordinatorClipboardText = (result: unknown): string => {
    if (typeof result === "string") return result;
    if (result == null) return "";
    if (typeof result !== "object") return String(result);
    const record = result as Record<string, unknown>;
    if (typeof record.text === "string") return record.text;
    if (typeof record.value === "string") return record.value;
    const nested = record.result ?? record.payload ?? record.data;
    if (typeof nested === "string") return nested;
    if (nested && typeof nested === "object") {
        const inner = nested as Record<string, unknown>;
        if (typeof inner.text === "string") return inner.text;
        if (typeof inner.value === "string") return inner.value;
    }
    return "";
};

/** WHY: legacy 8-byte frames carry no `nodes` — safe only on direct connect to the executor host. */
const canUseBinaryAirpadTransport = (): boolean => !getAirPadDestinationId().trim();

const toCoordinatorAction = (intent: AirPadIntent): { what: string; payload: any } | null => {
    switch (intent.type) {
        case "pointer.move":
            trackAirpadMotionDelta(intent.dx, intent.dy, getAirPadDestinationId());
            const kvmPayload = getAirpadMotionKvmPayload(getAirPadDestinationId());
            if (isInputV3Enabled()) {
                return {
                    what: "mouse:move",
                    payload: {
                        ...buildInputV3Payload(intent),
                        ...(kvmPayload ? { kvm: kvmPayload } : {})
                    }
                };
            }
            return {
                what: "mouse:move",
                payload: {
                    x: intent.dx,
                    y: intent.dy,
                    z: intent.dz ?? 0,
                    motionHz: getMotionSendHz(),
                    motionPath: getMotionPathClass(),
                    ...(kvmPayload ? { kvm: kvmPayload } : {})
                }
            };
        case "pointer.click":
            return {
                what: "mouse:click",
                payload: {
                    button: intent.button || "left",
                    double: Boolean(intent.double || intent.count === 2)
                }
            };
        case "pointer.scroll":
            return { what: "mouse:scroll", payload: { dx: intent.dx || 0, dy: intent.dy || 0 } };
        case "pointer.down":
            return { what: "mouse:down", payload: { button: intent.button || "left" } };
        case "pointer.up":
            return { what: "mouse:up", payload: { button: intent.button || "left" } };
        case "voice.submit":
            return { what: "voice:submit", payload: { text: intent.text } };
        case "keyboard.char":
            switch (intent.char) {
                case "\b":
                case "\u007F":
                    return { what: "keyboard:tap", payload: { key: "backspace" } };
                case "\n":
                case "\r":
                    return { what: "keyboard:tap", payload: { key: "enter" } };
                case "\t":
                    return { what: "keyboard:tap", payload: { key: "tab" } };
                default:
                    if (intent.char === " ") {
                        return { what: "keyboard:tap", payload: { key: "space" } };
                    }
                    return { what: "keyboard:type", payload: { text: intent.char } };
            }
        case "keyboard.binary":
            switch (intent.flags ?? 0) {
                case 1:
                    return { what: "keyboard:tap", payload: { key: "backspace" } };
                case 2:
                    return { what: "keyboard:tap", payload: { key: "enter" } };
                case 3:
                    return { what: "keyboard:tap", payload: { key: "space" } };
                case 4:
                    return { what: "keyboard:tap", payload: { key: "tab" } };
                default:
                    return { what: "keyboard:type", payload: { text: String.fromCodePoint(intent.codePoint) } };
            }
        case "gesture.swipe":
            return null;
    }
};

const trySendBinaryIntent = (intent: AirPadIntent): boolean => {
    if (!canUseBinaryAirpadTransport()) return false;
    if (!isWSConnected()) return false;
    switch (intent.type) {
        case "pointer.move":
            return sendWsBinary(encodeBinaryMove(intent.dx, intent.dy));
        case "pointer.scroll":
            return sendWsBinary(encodeBinaryScroll(intent.dx || 0, intent.dy || 0));
        case "pointer.click":
            return sendWsBinary(
                encodeBinaryClick(intent.button, Boolean(intent.double || intent.count === 2))
            );
        case "pointer.down":
            return sendWsBinary(encodeBinaryMouseDown(intent.button));
        case "pointer.up":
            return sendWsBinary(encodeBinaryMouseUp(intent.button));
        case "keyboard.binary":
            return sendWsBinary(encodeBinaryKeyboard(intent.codePoint, intent.flags ?? 0));
        default:
            return false;
    }
};

const sendKeyboardChord = async (key: string, modifier: string[] = ["ctrl"]): Promise<void> => {
    await sendCoordinatorRequest(
        "keyboard:tap",
        { key, modifier },
        resolveInputRouteNodes(),
    );
};

const requestClipboardRead = async (): Promise<string> => {
    const result = await sendCoordinatorRequest("clipboard:get", {}, resolveInputRouteNodes());
    return extractCoordinatorClipboardText(result);
};

const requestClipboardWrite = async (text: string): Promise<void> => {
    await sendCoordinatorRequest("clipboard:update", { text }, resolveInputRouteNodes());
};

export const initPacketWsRail = (button: HTMLElement | null): void => {
    initWebSocket(button);
};

export const connectPacketWsRail = (): void => {
    connectWS();
};

export const disconnectPacketWsRail = (): void => {
    disconnectWS();
};

export const isPacketWsRailConnected = (): boolean => {
    return isWSConnected();
};

export const onPacketWsRailConnectionChange = (handler: (connected: boolean) => void): (() => void) => {
    return onWSConnectionChange((connected) => {
        if (connected) {
            void sendCoordinatorRequest("mouse:isReady", {}, resolveInputRouteNodes()).catch(() => undefined);
            void refreshAirpadKvmSession(
                (what, payload) => sendCoordinatorRequest(what, payload, resolveInputRouteNodes()),
                getAirPadDestinationId()
            );
        } else {
            resetAirpadKvmSession();
        }
        handler(connected);
    });
};

export const onPacketWsClipboardUpdate = (handler: (text: string, meta?: { source?: string }) => void): (() => void) => {
    return onServerClipboardUpdate(handler);
};

const resolveInputRouteNodes = (): string[] | undefined => {
    const target = getAirPadDestinationId().trim();
    return target ? [target] : undefined;
};

export const sendPacketWsIntent = (intent: AirPadIntent): void => {
    if (intent.type === "gesture.swipe") {
        return;
    }
    if (trySendBinaryIntent(intent)) {
        return;
    }
    const action = toCoordinatorAction(intent);
    if (!action) return;
    sendCoordinatorAct(action.what, action.payload, resolveInputRouteNodes());
};

export const sendPacketWsBinary = (buffer: ArrayBuffer | Uint8Array): void => {
    if (canUseBinaryAirpadTransport() && sendWsBinary(buffer)) {
        return;
    }
    const decoded = decodeBinaryAirpadIntent(buffer);
    if (decoded) {
        sendCoordinatorAct(decoded.what, decoded.payload, resolveInputRouteNodes());
        return;
    }
};

export const createPacketWsKeyboardMessage = (codePoint: number, flags = 0): ArrayBuffer => {
    return encodeBinaryKeyboard(codePoint, flags);
};

export const requestPacketWsClipboardRead = async (): Promise<AirPadClipboardResult> => {
    if (!isShellRemoteClipboardBridgeEnabled()) {
        return { ok: false, error: "Remote clipboard bridge disabled in Settings → Server → Embedded shell." };
    }
    try {
        const text = await requestClipboardRead();
        return { ok: true, text };
    } catch (error: any) {
        return { ok: false, error: error?.error || error?.message || String(error) };
    }
};

export const requestPacketWsClipboardCopy = async (): Promise<AirPadClipboardResult> => {
    if (!isShellRemoteClipboardBridgeEnabled()) {
        return { ok: false, error: "Remote clipboard bridge disabled in Settings → Server → Embedded shell." };
    }
    try {
        await sendKeyboardChord("c", ["ctrl"]);
        await sleep(CLIPBOARD_CHORD_SETTLE_MS);
        return await requestPacketWsClipboardRead();
    } catch (error: any) {
        return { ok: false, error: error?.error || error?.message || String(error) };
    }
};

export const requestPacketWsClipboardCut = async (): Promise<AirPadClipboardResult> => {
    if (!isShellRemoteClipboardBridgeEnabled()) {
        return { ok: false, error: "Remote clipboard bridge disabled in Settings → Server → Embedded shell." };
    }
    try {
        await sendKeyboardChord("x", ["ctrl"]);
        await sleep(CLIPBOARD_CHORD_SETTLE_MS);
        return await requestPacketWsClipboardRead();
    } catch (error: any) {
        return { ok: false, error: error?.error || error?.message || String(error) };
    }
};

export const requestPacketWsClipboardPaste = async (text: string): Promise<AirPadClipboardResult> => {
    if (!isShellRemoteClipboardBridgeEnabled()) {
        return { ok: false, error: "Remote clipboard bridge disabled in Settings → Server → Embedded shell." };
    }
    const normalized = String(text ?? "");
    if (!normalized.trim()) {
        return { ok: false, error: "empty clipboard text" };
    }
    const nodes = resolveInputRouteNodes();
    try {
        // WHY: phone paste-back after copy-from-remote matches desk clipboard echo suppress;
        // keyboard:type injects into the focused remote field without that dedupe path.
        await sendCoordinatorRequest("keyboard:type", { text: normalized }, nodes);
        return { ok: true };
    } catch (typeError: any) {
        try {
            await requestClipboardWrite(normalized);
            await sleep(CLIPBOARD_CHORD_SETTLE_MS);
            await sendKeyboardChord("v", ["ctrl"]);
            return { ok: true };
        } catch (pasteError: any) {
            const message =
                pasteError?.error || pasteError?.message || typeError?.error || typeError?.message || String(pasteError);
            return { ok: false, error: message };
        }
    }
};