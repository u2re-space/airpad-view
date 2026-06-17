import { getAirPadDestinationId, isShellRemoteClipboardBridgeEnabled } from "../../config/config";
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
} from "../transport/websocket";
import type { AirPadClipboardResult, AirPadIntent } from "../intents";

const sleep = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));

/** WHY: legacy 8-byte frames carry no `nodes` — safe only on direct connect to the executor host. */
const canUseBinaryAirpadTransport = (): boolean => !getAirPadDestinationId().trim();

const toCoordinatorAction = (intent: AirPadIntent): { what: string; payload: any } | null => {
    switch (intent.type) {
        case "pointer.move":
            return { what: "mouse:move", payload: { x: intent.dx, y: intent.dy, z: intent.dz ?? 0 } };
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

const sendKeyboardTap = async (key: string, modifier?: string[]): Promise<void> => {
    sendCoordinatorAct("keyboard:tap", { key, modifier: modifier || [] }, resolveInputRouteNodes());
};

const requestClipboardRead = async (): Promise<string> => {
    const text = await sendCoordinatorRequest("clipboard:get", {}, resolveInputRouteNodes());
    return typeof text === "string" ? text : String(text || "");
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
    return onWSConnectionChange(handler);
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
        await sendKeyboardTap("c", ["control"]);
        await sleep(60);
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
        await sendKeyboardTap("x", ["control"]);
        await sleep(60);
        return await requestPacketWsClipboardRead();
    } catch (error: any) {
        return { ok: false, error: error?.error || error?.message || String(error) };
    }
};

export const requestPacketWsClipboardPaste = async (text: string): Promise<AirPadClipboardResult> => {
    if (!isShellRemoteClipboardBridgeEnabled()) {
        return { ok: false, error: "Remote clipboard bridge disabled in Settings → Server → Embedded shell." };
    }
    try {
        await requestClipboardWrite(text);
        await sleep(20);
        await sendKeyboardTap("v", ["control"]);
        return { ok: true };
    } catch (error: any) {
        return { ok: false, error: error?.error || error?.message || String(error) };
    }
};
