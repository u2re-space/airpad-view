/**
 * AirPad CWSP transport: native {@code /ws} only (Java-WebSocket / browser WebSocket parity).
 * Re-exports the shared hub; binary mouse/keyboard helpers live in {@link cwsp-binary-airpad}.
 */
export {
    connectWS,
    disconnectWS,
    getWS,
    initWebSocket,
    isWSConnected,
    onServerClipboardUpdate,
    onVoiceResult,
    onWSConnectionChange,
    reconnectTransportAfterLifecycleResume,
    refreshTransportConnectionStatus,
    sendCoordinatorAct,
    sendCoordinatorAsk,
    sendCoordinatorRequest,
    sendWsBinary,
    refreshNativeCoordinatorStatus,
    shouldUseNativeCoordinatorTransport
} from "shared/transport/websocket";
