import { c as e } from "./cwsp-endpoint-resolve-DtbuqyNS.js";
//#region ../../projects/cwsp-shared/src/airpad-cwsp-client-parity.ts
var t = "airpad.remote.connection.v1", n = (t) => {
	let n = String(t ?? "").trim();
	if (!/^L-/i.test(n)) return "";
	let r = n.replace(/^L-/i, "").trim();
	return e(r) ? r : "";
}, r = (e) => {
	let t = String(e ?? "").trim();
	return t ? /^L-/i.test(t) ? `L-${t.slice(2)}` : /^\d{1,3}(?:\.\d{1,3}){3}(?::\d+)?$/.test(t) ? `L-${t.split(":")[0]}` : t : "";
}, i = (t, r = 8434) => {
	let i = String(t ?? "").trim();
	if (!i) return "";
	if (e(i)) {
		if (/^https?:\/\//i.test(i)) return i.endsWith("/") ? i : `${i}/`;
		let e = i.split("/")[0]?.trim() ?? "";
		return e ? e.includes(":") ? `https://${e}/` : `https://${e}:${r}/` : "";
	}
	let a = n(i);
	return a ? a.includes(":") ? `https://${a}/` : `https://${a}:${r}/` : "";
}, a = "cwsp.remote.connection.v1";
function o(e) {
	return JSON.stringify({
		...e,
		v: e.v ?? 1
	});
}
function s(e) {
	return String(e || "").trim() || void 0;
}
function c(e, t) {
	let n = e;
	for (let e of t) {
		if (!n || typeof n != "object" || Array.isArray(n)) return;
		n = n[e];
	}
	return s(String(n ?? ""));
}
function l(e) {
	let t = e.core && typeof e.core == "object" && !Array.isArray(e.core) ? e.core : {}, n = t.socket && typeof t.socket == "object" && !Array.isArray(t.socket) ? t.socket : {}, r = c(e, ["core", "endpointUrl"]) || c(e, [
		"core",
		"admin",
		"httpsOrigin"
	]), i = s(String(n.accessToken ?? n.airpadAuthToken ?? "")) || void 0, a = c(e, ["core", "userKey"]) || c(e, [
		"core",
		"socket",
		"clientAccessToken"
	]) || c(e, [
		"core",
		"socket",
		"accessToken"
	]);
	return {
		v: 1,
		endpointUrl: r,
		directUrl: c(e, [
			"core",
			"ops",
			"directUrl"
		]),
		quickConnectValue: c(e, [
			"core",
			"network",
			"quickConnect"
		]),
		destinationId: c(e, [
			"core",
			"socket",
			"routeTarget"
		]),
		routeTarget: c(e, [
			"core",
			"socket",
			"routeTarget"
		]),
		accessToken: i,
		authToken: i,
		clientId: c(e, [
			"core",
			"socket",
			"selfId"
		]) || c(e, ["core", "userId"]) || c(e, ["core", "appClientId"]),
		peerInstanceId: c(e, ["core", "appClientId"]),
		identificationToken: a,
		clientAccessToken: c(e, [
			"core",
			"socket",
			"clientAccessToken"
		]),
		wireTransport: "ws"
	};
}
function u(e) {
	let t = e.shell && typeof e.shell == "object" && !Array.isArray(e.shell) ? e.shell : {}, n = {}, r = s(String(t.clipboardShareDestinationIds ?? ""));
	r !== void 0 && (n.shareIntentDestinationIds = r);
	let i = s(String(t.clipboardInboundAllowIds ?? ""));
	return i !== void 0 && (n.allowClipboardReadFromIds = i), t.acceptInboundClipboardData !== void 0 && (n.acceptInboundClipboard = (t.acceptInboundClipboardData ?? !0) !== !1), t.applyRemoteClipboardToDevice !== void 0 && (n.applyRemoteClipboardToDevice = (t.applyRemoteClipboardToDevice ?? !0) !== !1), t.accessTokenBypassesClipboardAllowlist !== void 0 && (n.accessTokenBypassesIdPolicy = t.accessTokenBypassesClipboardAllowlist === !0), t.acceptContactsBridgeData !== void 0 && (n.acceptContactsData = t.acceptContactsBridgeData === !0), t.acceptSmsBridgeData !== void 0 && (n.acceptSmsData = t.acceptSmsBridgeData === !0), t.autoStartOnBoot !== void 0 && (n.autoStartOnBoot = t.autoStartOnBoot !== !1), t.bridgeDaemonEnabled !== void 0 && (n.bridgeDaemonEnabled = t.bridgeDaemonEnabled !== !1), n;
}
//#endregion
export { i as a, n as c, l as i, a as n, r as o, u as r, o as s, t };
