import {
    connectPacketWsRail,
    createPacketWsKeyboardMessage,
    disconnectPacketWsRail,
    initPacketWsRail,
    isPacketWsRailConnected,
    onPacketWsClipboardUpdate,
    onPacketWsRailConnectionChange,
    requestPacketWsClipboardCopy,
    requestPacketWsClipboardCut,
    requestPacketWsClipboardPaste,
    requestPacketWsClipboardRead,
    sendPacketWsBinary,
    sendPacketWsIntent
} from "../rails/packet-ws.ts";
import { onVoiceResult } from "./websocket.ts";
import { CWSP_SLOT, cwspGlobal } from "cwsp-shared/cwsp-global";

const buildAirpadTransport = () => ({
    init: initPacketWsRail,
    connect: connectPacketWsRail,
    disconnect: disconnectPacketWsRail,
    isConnected: isPacketWsRailConnected,
    onConnectionChange: onPacketWsRailConnectionChange,
    onClipboardUpdate: onPacketWsClipboardUpdate,
    onVoiceResult,
    sendIntent: sendPacketWsIntent,
    sendBinary: sendPacketWsBinary,
    createKeyboardMessage: createPacketWsKeyboardMessage,
    requestClipboardRead: requestPacketWsClipboardRead,
    requestClipboardCopy: requestPacketWsClipboardCopy,
    requestClipboardCut: requestPacketWsClipboardCut,
    requestClipboardPaste: requestPacketWsClipboardPaste
});

export const airpadTransport = cwspGlobal(CWSP_SLOT.airpadTransportFacade, buildAirpadTransport);
