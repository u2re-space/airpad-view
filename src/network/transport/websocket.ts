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
    markTransportDisconnected,
    reconnectTransportAfterLifecycleResume,
    refreshTransportConnectionStatus,
    sendCoordinatorAct,
    sendCoordinatorAsk,
    sendCoordinatorRequest,
    sendWsBinary,
    refreshNativeCoordinatorStatus,
    reconnectNativeCoordinatorTransport,
    startNativeAirMouse,
    stopNativeAirMouse,
    shouldUseNativeCoordinatorTransport
} from "shared/transport/websocket";
