//#region ../../projects/subsystem/runtime/wire-target-id.ts
function e(e) {
	return Array.isArray(e) ? e.map((e) => typeof e == "string" ? { id: e.trim() } : e).filter((e) => !!e?.id) : typeof e == "string" ? e.split(/[,\s]+/).map((e) => ({ id: e.trim() })).filter((e) => !!e.id) : [];
}
//#endregion
//#region ../../projects/subsystem/runtime/cws-client-wire-defaults.ts
function t(e) {
	return typeof e == "string" && e.trim() ? e.trim() : "airpad";
}
function n(e) {
	return typeof e == "string" && e.trim() ? e.trim() : "auto";
}
//#endregion
//#region src/credential-cache-bridge.ts
var r = null;
function i(e) {
	r = e;
}
function a() {
	try {
		r?.();
	} catch {}
}
//#endregion
//#region src/config/config.ts
var o = "airpad.remote.connection.v1", s = (e) => typeof e == "number" ? Number.isFinite(e) ? String(e) : "" : typeof e == "string" ? e.trim() : "", c = (e) => {
	let t = e.trim();
	if (!t) return !1;
	let n = t.replace(/^[a-z][a-z0-9+.-]*:\/\//i, "").split("/")[0], r = n.lastIndexOf(":");
	if (r <= 0) return !1;
	let i = n.slice(r + 1);
	return /^\d{1,5}$/.test(i);
}, ee = (e, t) => {
	let n = e.trim();
	if (!n) return "";
	let r = t.trim();
	return !r || c(n) ? n : `${n}:${r}`;
}, l = (e) => {
	let t = s(e);
	if (!t) return "";
	try {
		let e = new URL(/^[a-z][a-z0-9+.-]*:\/\//i.test(t) ? t : `https://${t}`);
		return `${e.protocol}//${e.host}/`;
	} catch {
		return t;
	}
}, u = (e) => {
	let t = e.trim();
	return t ? !!(/^[a-z][a-z0-9+.-]*:\/\//i.test(t) || t.startsWith("localhost") || t.includes("/") || /^\[[0-9a-f:]+\](?::\d{1,5})?$/i.test(t) || /^\d{1,3}(?:\.\d{1,3}){3}(?::\d{1,5})?$/.test(t) || /^[^.\s:]+:\d{1,5}$/.test(t) || /^[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::\d{1,5})?$/i.test(t)) : !1;
}, d = (...e) => Array.from(new Set(e.map((e) => l(e)).filter(Boolean))).join(", "), te = () => {
	if (globalThis.location === void 0) return !1;
	let e = String(globalThis.location.hostname || "").toLowerCase();
	return !(!e || e === "localhost" || e === "127.0.0.1" || e === "[::1]");
}, ne = (e) => {
	let t = s(e);
	if (!t) return !1;
	try {
		let e = /^[a-z][a-z0-9+.-]*:\/\//i.test(t) ? t : `https://${t}`, n = new URL(e.endsWith("/") ? e : `${e.replace(/\/+$/, "")}/`).hostname.toLowerCase();
		return n === "localhost" || n === "127.0.0.1" || n === "[::1]";
	} catch {
		return !1;
	}
}, re = (e) => {
	let t = e.trim();
	if (!t || !te()) return t;
	let n = t.split(",").map((e) => e.trim()).filter(Boolean);
	if (!n.length || !n.every(ne)) return t;
	try {
		return l(globalThis.location.origin);
	} catch {
		return t;
	}
}, f = (e) => {
	let t = s(e);
	if (!t || globalThis.location === void 0 || !globalThis.location.hostname) return t;
	try {
		let e = /^[a-z][a-z0-9+.-]*:\/\//i.test(t) ? t : `https://${t}`, n = new URL(e.endsWith("/") ? e : `${e.replace(/\/+$/, "")}/`), r = globalThis.location;
		if (n.hostname === r.hostname && n.protocol === "https:" && n.port === "8443" && r.protocol === "https:" && (r.port === "" || r.port === "443")) return l(r.origin);
	} catch {}
	return t;
};
function p() {
	try {
		let e = globalThis?.localStorage?.getItem?.(o);
		if (!e) return {};
		let t = JSON.parse(e);
		if (!t || typeof t != "object") return {};
		let n = t, r = s(n.host), i = s(n.tunnelHost), a = s(n.port);
		if (!(a !== "" || i !== "")) return t;
		let c = [], l = /* @__PURE__ */ new Set(), u = (e) => {
			let t = (a ? ee(e, a) : e).trim();
			!t || l.has(t) || (l.add(t), c.push(t));
		};
		return r && u(r), i && u(i), !r && !i && a && location?.hostname && u(`${location.hostname}:${a}`), {
			...t,
			host: c.join(", "),
			_legacyMigrated: !0
		};
	} catch {
		return {};
	}
}
var m = (e) => {
	let t = globalThis.AIRPAD_CONFIG;
	for (let n of e) {
		let e = globalThis[n];
		if (typeof e == "string" && e.trim()) return e.trim();
		let r = t && typeof t == "object" && typeof t[n] == "string" ? t[n] : "";
		if (r.trim()) return String(r).trim();
	}
	return "";
};
function h() {
	try {
		globalThis?.localStorage?.setItem?.(o, JSON.stringify({
			quickConnectValue: _.quickConnectValue,
			endpointUrl: _.endpointUrl,
			directUrl: _.directUrl,
			destinationId: _.destinationId,
			accessToken: _.accessToken,
			clientId: _.clientId,
			peerInstanceId: _.peerInstanceId
		}));
	} catch {}
}
var g = () => globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `ap-${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}`, _ = {
	quickConnectValue: "",
	endpointUrl: "",
	directUrl: "",
	accessToken: "",
	destinationId: "",
	clientId: "",
	peerInstanceId: ""
}, v = "", y = "", b = !0, x = !0, S = !0, C = !1, w = 2e3, T = "", E = !1, D = !0, O = !0, k = !0, A = !0, j = "", M = !1, N = "auto", P = "", F = "", I = "", L = "", R = "plaintext", z = "", B = "", V = "", H = "", U = () => {
	H = d(_.directUrl, _.endpointUrl);
};
function W(e) {
	let t = s(e.host), n = s(e.routeTarget), r = l(e.endpointUrl) || (n ? l(t) : ""), i = l(e.directUrl) || (n ? "" : l(t)), a = s(e.quickConnectValue);
	_.endpointUrl = f(r), _.directUrl = f(i), _.accessToken = s(e.accessToken) || s(e.authToken) || "", _.destinationId = s(e.destinationId) || n, _.quickConnectValue = a || _.destinationId || _.directUrl, _.clientId = s(e.clientId);
	let o = s(e.peerInstanceId);
	o ? _.peerInstanceId = o : _.peerInstanceId ||= g(), U();
}
var G = p();
W(G), s(G.peerInstanceId) || (_.peerInstanceId = _.peerInstanceId || g());
var ie = s(G.accessToken), K = s(G.authToken);
(G._legacyMigrated === !0 || !G.peerInstanceId || K && !ie) && h();
function q() {
	W(p());
}
function J() {
	let e = (e) => {
		e.key !== o || e.newValue == null || (q(), a());
	};
	return globalThis.addEventListener?.("storage", e), () => globalThis.removeEventListener?.("storage", e);
}
function Y(e, t) {
	e.endpointUrl === void 0 ? e.host !== void 0 && (_.endpointUrl = l(e.host)) : _.endpointUrl = l(e.endpointUrl), e.directUrl !== void 0 && (_.directUrl = l(e.directUrl)), e.accessToken === void 0 ? e.authToken !== void 0 && (_.accessToken = e.authToken || "") : _.accessToken = e.accessToken || "", e.destinationId === void 0 ? e.routeTarget !== void 0 && (_.destinationId = (e.routeTarget || "").trim()) : _.destinationId = (e.destinationId || "").trim(), e.clientId !== void 0 && (_.clientId = (e.clientId || "").trim()), U(), t?.persist !== !1 && h();
}
var ae = (e) => {
	try {
		let t = new URL(e);
		return `${t.protocol}//${t.host}`;
	} catch {
		return "";
	}
};
function oe(e) {
	let t = e.core, n = e.shell, r = t?.socket, i = t?.interop;
	v = (t?.userId || "").trim(), y = (t?.userKey || "").trim(), b = (t?.useCoreIdentityForAirPad ?? !0) !== !1, x = (n?.enableRemoteClipboardBridge ?? !0) !== !1, S = (n?.applyRemoteClipboardToDevice ?? !0) !== !1, C = !!n?.pushLocalClipboardToLan;
	let a = Number(n?.clipboardPushIntervalMs);
	w = Number.isFinite(a) && a >= 800 ? Math.min(Math.round(a), 6e4) : 2e3, T = (n?.clipboardBroadcastTargets || "").trim(), E = (n?.maintainHubSocketConnection ?? !0) !== !1, D = (n?.preferNativeWebsocket ?? i?.preferNativeWebsocket ?? !0) !== !1, O = (n?.enableNativeSms ?? !0) !== !1, k = (n?.enableNativeContacts ?? !0) !== !1, A = (n?.acceptInboundClipboardData ?? !0) !== !1, j = (n?.clipboardInboundAllowIds || "").trim(), (n?.clipboardShareDestinationIds || "").trim(), M = (n?.accessTokenBypassesClipboardAllowlist ?? !1) === !0, n?.acceptContactsBridgeData, n?.acceptSmsBridgeData, N = r?.protocol === "http" || r?.protocol === "https" ? r.protocol : "auto", P = (r?.routeTarget || "").trim(), F = (r?.selfId || "").trim(), I = (r?.accessToken || r?.airpadAuthToken || "").trim(), L = (r?.clientAccessToken || "").trim(), R = r?.transportMode === "secure" ? "secure" : "plaintext", z = (r?.transportSecret || "").trim(), (r?.signingSecret || "").trim(), B = (r?.connectionType || "").trim(), V = (r?.archetype || "").trim(), (r?.protocolLanesJson || "").trim();
	let o = {};
	if (t?.endpointUrl?.trim()) {
		let e = ae(f(t.endpointUrl.trim()));
		e && (o.endpointUrl = e);
	}
	Object.keys(o).length && Y(o, { persist: !1 });
	try {
		globalThis.__CWS_SHELL_FEATURES__ = {
			clipboardBridge: x,
			applyRemoteClipboard: S,
			pushLocalClipboard: C,
			maintainHubSocket: E,
			preferNativeWebsocket: D,
			sms: O,
			contacts: k
		};
	} catch {}
}
function X() {
	return x !== !1;
}
function se() {
	return S !== !1;
}
function ce() {
	return C === !0;
}
function le() {
	return w;
}
function ue() {
	let t = e(T);
	if (t.length) return t;
	let n = Z().trim();
	return n ? e(n) : [];
}
function de() {
	return ue();
}
function fe() {
	return A !== !1;
}
function pe() {
	return M && !!Q().trim();
}
function me(t) {
	if (!fe() || !X()) return !1;
	if (pe()) return !0;
	let n = e(j);
	if (!n.length) return !0;
	let r = t.trim().toLowerCase();
	return r ? n.some((e) => e.nodeId.trim().toLowerCase() === r) : !1;
}
function he() {
	return E === !0;
}
function ge() {
	return D !== !1;
}
function _e() {
	return re(H);
}
function ve() {
	return _.endpointUrl.trim() ? _.endpointUrl.trim() : l(m(["AIRPAD_ENDPOINT_URL"]));
}
function ye() {
	return _.quickConnectValue.trim() ? _.quickConnectValue.trim() : _.destinationId.trim() ? _.destinationId.trim() : _.directUrl.trim() ? _.directUrl.trim() : P.trim() ? P.trim() : ve();
}
function be(e) {
	let t = s(e);
	if (_.quickConnectValue = t, !t) {
		_.directUrl = "", _.destinationId = "", U(), h();
		return;
	}
	u(t) ? (_.directUrl = l(t), _.destinationId = "") : (_.destinationId = t, _.directUrl = ""), U(), h();
}
function xe() {
	return N;
}
function Z() {
	return _.destinationId.trim() ? _.destinationId.trim() : P;
}
function Se() {
	return R;
}
function Q() {
	return (_.accessToken || "").trim() || (I.trim() ? I.trim() : m([
		"CWS_ACCESS_TOKEN",
		"ACCESS_TOKEN",
		"AIRPAD_AUTH_TOKEN",
		"AIRPAD_TOKEN",
		"CWS_AUTH_TOKEN",
		"HUB_AUTH_TOKEN",
		"MASTER_AUTH_TOKEN",
		"CONTROL_TOKEN",
		"ADMIN_TOKEN"
	]));
}
function Ce(e) {
	_.accessToken = e || "", h();
}
function we() {
	return F.trim() ? F.trim() : b && v.trim() ? v.trim() : _.clientId.trim() ? _.clientId.trim() : m(["AIRPAD_CLIENT_ID", "AIRPAD_CLIENT"]);
}
function Te() {
	return y.trim();
}
function Ee() {
	return L.trim() || m(["CWS_CLIENT_ACCESS_TOKEN", "CLIENT_ACCESS_TOKEN"]);
}
function $() {
	let e = m(["AIRPAD_PEER_INSTANCE_ID", "AIRPAD_DEVICE_ID"]);
	return e.trim() ? e.trim() : _.peerInstanceId || "";
}
function De() {
	return z;
}
function Oe() {
	return n(B.trim() || m(["CWS_CONNECTION_TYPE", "AIRPAD_CONNECTION_TYPE"]));
}
function ke() {
	return t(V.trim() || m(["CWS_ARCHETYPE", "AIRPAD_ARCHETYPE"]));
}
var Ae = .001, je = .001, Me = .8;
//#endregion
export { a as A, he as C, q as D, X as E, Ce as O, me as S, ce as T, le as _, J as a, Z as b, ke as c, ye as d, Se as f, de as g, Ee as h, oe as i, i as j, be as k, Oe as l, Te as m, je as n, Q as o, De as p, Me as r, we as s, Ae as t, $ as u, _e as v, ge as w, se as x, xe as y };
