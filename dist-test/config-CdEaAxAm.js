import { c as e, h as t, l as n, u as r } from "./cwsp-endpoint-resolve-DtbuqyNS.js";
import { a as i, c as a, i as o, o as s, r as c, t as l } from "./airpad-cwsp-client-parity-DYU33g1T.js";
//#region ../../projects/cwsp-shared/src/wire-target-id.ts
function u(e) {
	let t = String(e ?? "").trim();
	if (!t) return { nodeId: "" };
	let n = t.lastIndexOf("::");
	if (n <= 0) return { nodeId: t };
	let r = t.slice(0, n).trim(), i = t.slice(n + 2).trim();
	return r ? {
		nodeId: r,
		accessToken: i || void 0
	} : { nodeId: t };
}
function d(e) {
	if (Array.isArray(e)) {
		let t = [], n = /* @__PURE__ */ new Set();
		for (let r of e) {
			if (typeof r == "string") {
				for (let e of d(r)) f(t, n, e);
				continue;
			}
			if (!r || typeof r != "object") continue;
			let e = r, i = String(e.nodeId ?? e.id ?? "").trim();
			i && f(t, n, {
				nodeId: i,
				accessToken: (e.accessToken == null ? void 0 : String(e.accessToken).trim()) || void 0
			});
		}
		return t;
	}
	if (typeof e != "string") return [];
	let t = e.split(/[;,]/).map((e) => e.trim()).filter(Boolean), n = [], r = /* @__PURE__ */ new Set();
	for (let e of t) {
		let t = u(e);
		t.nodeId && f(n, r, t);
	}
	return n;
}
var f = (e, t, n) => {
	let r = `${n.nodeId.toLowerCase()}::${n.accessToken ?? ""}`;
	t.has(r) || (t.add(r), e.push(n));
}, ee = "airpad", p = "first-order";
function te(e) {
	return (typeof e == "string" ? e.trim() : "") || ee;
}
function ne(e) {
	let t = typeof e == "string" ? e.trim().toLowerCase() : "";
	return !t || t === "auto" || t.includes("exchanger") ? p : typeof e == "string" ? e.trim() : p;
}
//#endregion
//#region src/config/config.ts
var m = (e) => typeof e == "number" ? Number.isFinite(e) ? String(e) : "" : typeof e == "string" ? e.trim() : "", re = (e) => {
	let t = e.trim();
	if (!t) return !1;
	let n = t.replace(/^[a-z][a-z0-9+.-]*:\/\//i, "").split("/")[0], r = n.lastIndexOf(":");
	if (r <= 0) return !1;
	let i = n.slice(r + 1);
	return /^\d{1,5}$/.test(i);
}, ie = (e, t) => {
	let n = e.trim();
	if (!n) return "";
	let r = t.trim();
	return !r || re(n) ? n : `${n}:${r}`;
}, h = (e) => r(m(e)), g = (e) => {
	let t = m(e).toLowerCase();
	if (t && (t === "ws" || t === "wss" || t === "socket" || t === "socket.io" || t === "socketio")) return "ws";
}, ae = e, _ = s, oe = (...e) => Array.from(new Set(e.map((e) => h(e)).filter(Boolean))).join(", "), se = () => {
	if (globalThis.location === void 0) return !1;
	let e = String(globalThis.location.hostname || "").toLowerCase();
	return !(!e || e === "localhost" || e === "127.0.0.1" || e === "[::1]");
}, ce = (e) => {
	let t = m(e);
	if (!t) return !1;
	try {
		let e = /^[a-z][a-z0-9+.-]*:\/\//i.test(t) ? t : `https://${t}`, n = new URL(e.endsWith("/") ? e : `${e.replace(/\/+$/, "")}/`).hostname.toLowerCase();
		return n === "localhost" || n === "127.0.0.1" || n === "[::1]";
	} catch {
		return !1;
	}
}, le = (e) => {
	let t = e.trim();
	if (!t || !se()) return t;
	let n = t.split(",").map((e) => e.trim()).filter(Boolean);
	if (!n.length || !n.every(ce)) return t;
	try {
		return h(globalThis.location.origin);
	} catch {
		return t;
	}
}, v = (e) => {
	let t = m(e);
	if (!t || globalThis.location === void 0 || !globalThis.location.hostname) return t;
	try {
		let e = /^[a-z][a-z0-9+.-]*:\/\//i.test(t) ? t : `https://${t}`, n = new URL(e.endsWith("/") ? e : `${e.replace(/\/+$/, "")}/`), r = globalThis.location;
		if (n.hostname === r.hostname && n.protocol === "https:" && n.port === "8434" && r.protocol === "https:" && (r.port === "" || r.port === "443")) return h(r.origin);
	} catch {}
	return t;
};
function y() {
	try {
		let e = globalThis?.localStorage?.getItem?.(l);
		if (!e) return {};
		let t = JSON.parse(e);
		if (!t || typeof t != "object") return {};
		let r = t, i = n(m(r.host)), a = n(m(r.tunnelHost)), o = m(r.port);
		if ((o === "8443" || o === "8343") && (r.port = "8434"), t.host = i, t.tunnelHost &&= a, t.endpointUrl = n(m(t.endpointUrl)), t.directUrl = n(m(t.directUrl)), t.quickConnectValue = n(m(t.quickConnectValue)), !(o !== "" || a !== "")) return t;
		let s = [], c = /* @__PURE__ */ new Set(), u = (e) => {
			let t = (o ? ie(e, o) : e).trim();
			!t || c.has(t) || (c.add(t), s.push(t));
		};
		return i && u(i), a && u(a), !i && !a && o && location?.hostname && u(`${location.hostname}:${o}`), {
			...t,
			host: s.join(", "),
			_legacyMigrated: !0
		};
	} catch {
		return {};
	}
}
var b = (e) => {
	let t = globalThis.AIRPAD_CONFIG;
	for (let n of e) {
		let e = globalThis[n];
		if (typeof e == "string" && e.trim()) return e.trim();
		let r = t && typeof t == "object" && typeof t[n] == "string" ? t[n] : "";
		if (r.trim()) return String(r).trim();
	}
	return "";
};
function x() {
	try {
		let e = {
			v: 1,
			quickConnectValue: C.quickConnectValue,
			endpointUrl: C.endpointUrl,
			directUrl: C.directUrl,
			destinationId: C.destinationId,
			accessToken: C.accessToken,
			clientId: C.clientId,
			peerInstanceId: C.peerInstanceId,
			identificationToken: C.identificationToken.trim() || void 0,
			clientAccessToken: C.clientAccessToken.trim() || void 0
		}, t = g(C.wireTransport);
		t && (e.wireTransport = t), globalThis?.localStorage?.setItem?.(l, JSON.stringify(e));
	} catch {}
}
var S = () => globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `ap-${Date.now().toString(16)}-${Math.random().toString(16).slice(2)}`, C = {
	quickConnectValue: "",
	endpointUrl: "",
	directUrl: "",
	accessToken: "",
	destinationId: "",
	clientId: "",
	peerInstanceId: "",
	identificationToken: "",
	clientAccessToken: ""
}, w = "", ue = "", de = !0, T = !0, E = !0, D = !1, O = 2e3, k = "", A = !1, j = !0, M = !0, N = !0, P = !0, F = "", I = !1, L = "auto", R = "", z = "", B = "", V = "", H = "plaintext", U = "", W = "", G = "", K = "", q = () => {
	K = oe(C.directUrl, C.endpointUrl);
};
function J(e) {
	let t = m(e.host), n = m(e.routeTarget), r = h(e.endpointUrl) || (n ? h(t) : ""), i = h(e.directUrl) || (n ? "" : h(t)), a = m(e.quickConnectValue);
	C.endpointUrl = v(r), C.directUrl = v(i), C.accessToken = m(e.accessToken) || m(e.authToken) || "", C.destinationId = m(e.destinationId) || n, C.quickConnectValue = a || C.destinationId || C.directUrl, C.clientId = m(e.clientId);
	let o = m(e.peerInstanceId);
	o ? C.peerInstanceId = o : C.peerInstanceId ||= S(), C.identificationToken = m(e.identificationToken), C.clientAccessToken = m(e.clientAccessToken), C.wireTransport = g(e.wireTransport), q();
}
var Y = y();
J(Y), (async () => {
	let { hasExplicitConnectOrigin: e } = await import("./cwsp-endpoint-resolve-DGJz2Jad.js"), n = {}, r = {
		timeoutMs: 1500,
		maxProbeCandidates: 2
	};
	if (C.directUrl.trim() && e(C.directUrl.trim())) {
		let e = await t(C.directUrl.trim(), r);
		e && e !== C.directUrl.trim() && (n.directUrl = e);
	}
	if (C.endpointUrl.trim() && e(C.endpointUrl.trim())) {
		let e = await t(C.endpointUrl.trim(), r);
		e && e !== C.endpointUrl.trim() && (n.endpointUrl = e);
	}
	Object.keys(n).length && X(n, { persist: !0 });
})(), (async () => {
	if (C.directUrl.trim()) return;
	let e = a(C.destinationId), n = a(C.quickConnectValue), r = e || n;
	if (!r) return;
	let o = i(r) || await t(r, {
		timeoutMs: 1500,
		maxProbeCandidates: 2
	});
	!o || o === C.directUrl || (C.directUrl = o, e ? C.destinationId = _(C.destinationId) : n && (C.destinationId = _(C.quickConnectValue)), q(), x());
})(), m(Y.peerInstanceId) || (C.peerInstanceId = C.peerInstanceId || S());
var fe = m(Y.accessToken), pe = m(Y.authToken), me = globalThis?.localStorage?.getItem?.("airpad.remote.connection.v1") ?? "";
(/(?<![0-9]):8443(?![0-9])|:8343(?![0-9])/.test(me) || Y._legacyMigrated === !0 || !Y.peerInstanceId || pe && !fe || Y.v !== 1) && x();
function he() {
	J(y());
}
function ge() {
	let e = (e) => {
		e.key !== "airpad.remote.connection.v1" || e.newValue == null || (he(), invalidateAirpadTransportCredentials());
	};
	return globalThis.addEventListener?.("storage", e), () => globalThis.removeEventListener?.("storage", e);
}
function X(e, t) {
	e.endpointUrl === void 0 ? e.host !== void 0 && (C.endpointUrl = h(e.host)) : C.endpointUrl = h(e.endpointUrl), e.directUrl !== void 0 && (C.directUrl = h(e.directUrl)), e.accessToken === void 0 ? e.authToken !== void 0 && (C.accessToken = e.authToken || "") : C.accessToken = e.accessToken || "", e.destinationId === void 0 ? e.routeTarget !== void 0 && (C.destinationId = (e.routeTarget || "").trim()) : C.destinationId = (e.destinationId || "").trim(), e.clientId !== void 0 && (C.clientId = (e.clientId || "").trim()), e.identificationToken !== void 0 && (C.identificationToken = (e.identificationToken || "").trim()), e.clientAccessToken !== void 0 && (C.clientAccessToken = (e.clientAccessToken || "").trim());
	let n = g(e.wireTransport);
	n && (C.wireTransport = n), q(), t?.persist !== !1 && x();
}
function _e(e, t) {
	let n = o(e), r = {};
	n.endpointUrl && (r.endpointUrl = n.endpointUrl), n.directUrl && (r.directUrl = n.directUrl), n.quickConnectValue && (r.quickConnectValue = n.quickConnectValue), (n.destinationId || n.routeTarget) && (r.destinationId = n.destinationId || n.routeTarget), (n.accessToken || n.authToken) && (r.accessToken = n.accessToken || n.authToken), n.clientId && (r.clientId = n.clientId), n.peerInstanceId && (r.peerInstanceId = n.peerInstanceId), n.identificationToken && (r.identificationToken = n.identificationToken), n.clientAccessToken && (r.clientAccessToken = n.clientAccessToken), n.wireTransport && (r.wireTransport = n.wireTransport), (r.endpointUrl || r.directUrl || r.quickConnectValue || r.destinationId || r.accessToken || r.clientId || r.peerInstanceId || r.identificationToken || r.clientAccessToken) && X(r, { persist: t?.persist ?? !0 });
}
var ve = (e) => {
	try {
		let t = new URL(e);
		return `${t.protocol}//${t.host}`;
	} catch {
		return "";
	}
};
function ye(e) {
	let t = e.core, n = e.shell, r = t?.socket, i = t?.interop;
	w = (t?.userId || "").trim(), ue = (t?.userKey || "").trim(), de = (t?.useCoreIdentityForAirPad ?? !0) !== !1, T = (n?.enableRemoteClipboardBridge ?? !0) !== !1, E = (n?.applyRemoteClipboardToDevice ?? !0) !== !1, D = !!n?.pushLocalClipboardToLan;
	let a = Number(n?.clipboardPushIntervalMs);
	O = Number.isFinite(a) && a >= 800 ? Math.min(Math.round(a), 6e4) : 2e3, k = (n?.clipboardBroadcastTargets || "").trim(), A = n?.maintainHubSocketConnection === !0, j = (n?.preferNativeWebsocket ?? i?.preferNativeWebsocket ?? !0) !== !1, M = (n?.enableNativeSms ?? !0) !== !1, N = (n?.enableNativeContacts ?? !0) !== !1, P = (n?.acceptInboundClipboardData ?? !0) !== !1, F = (n?.clipboardInboundAllowIds || "").trim(), (n?.clipboardShareDestinationIds || "").trim(), I = (n?.accessTokenBypassesClipboardAllowlist ?? !1) === !0, n?.acceptContactsBridgeData, n?.acceptSmsBridgeData, L = r?.protocol === "http" || r?.protocol === "https" ? r.protocol : "auto", R = (r?.routeTarget || "").trim(), z = (r?.selfId || "").trim(), B = (r?.accessToken || r?.airpadAuthToken || "").trim(), V = (r?.clientAccessToken || "").trim(), H = r?.transportMode === "secure" ? "secure" : "plaintext", U = (r?.transportSecret || "").trim(), (r?.signingSecret || "").trim(), W = (r?.connectionType || "").trim(), G = (r?.archetype || "").trim(), (r?.protocolLanesJson || "").trim();
	let o = {};
	if (t?.endpointUrl?.trim()) {
		let e = ve(v(t.endpointUrl.trim()));
		e && (o.endpointUrl = e);
	}
	Object.keys(o).length && X(o, { persist: !1 }), _e(e, { persist: !1 });
	try {
		globalThis.__CWS_SHELL_FEATURES__ = {
			clipboardBridge: T,
			applyRemoteClipboard: E,
			pushLocalClipboard: D,
			maintainHubSocket: A,
			preferNativeWebsocket: j,
			sms: M,
			contacts: N
		};
	} catch {}
}
function Z() {
	return T !== !1;
}
function be() {
	return E !== !1;
}
function xe() {
	return D === !0;
}
function Se() {
	return O;
}
function Ce() {
	let e = d(k);
	if (e.length) return e;
	let t = $().trim();
	return t ? d(t) : [];
}
function we() {
	return Ce();
}
function Te() {
	return P !== !1;
}
function Ee() {
	return I && !!Ue().trim();
}
function Q(e) {
	let t = e.trim().toLowerCase();
	return t ? t.startsWith("l-") ? t : /^\d{1,3}(?:\.\d{1,3}){3}(?::\d+)?$/.test(t) ? `l-${t}` : t : "";
}
function De() {
	try {
		let e = globalThis.Capacitor;
		if (!(typeof e?.isNativePlatform == "function" && e.isNativePlatform())) return !1;
	} catch {
		return !1;
	}
	return Z() && be();
}
function Oe(e) {
	if (!Te() || !Z()) return !1;
	if (Ee()) return !0;
	let t = d(F);
	if (!t.length) return !0;
	let n = Q(e);
	return n ? t.some((e) => Q(e.nodeId) === n) : !1;
}
function ke() {
	return A === !0;
}
function Ae() {
	return j !== !1;
}
function je() {
	return le(K);
}
function Me() {
	return C.endpointUrl.trim() ? C.endpointUrl.trim() : h(b(["AIRPAD_ENDPOINT_URL"]));
}
function Ne() {
	return C.quickConnectValue.trim() ? C.quickConnectValue.trim() : C.destinationId.trim() ? C.destinationId.trim() : C.directUrl.trim() ? C.directUrl.trim() : R.trim() ? R.trim() : Me();
}
async function Pe(e, n = {}) {
	let o = m(e);
	if (C.quickConnectValue = o, !o) {
		C.directUrl = "", C.destinationId = "", q(), x();
		return;
	}
	let s = {
		timeoutMs: n.probeTimeoutMs ?? 1200,
		maxProbeCandidates: n.maxProbeCandidates
	}, c = a(o);
	if (ae(o)) {
		let e = i(o);
		n.discover === !1 ? C.directUrl = e || r(o) : C.directUrl = await t(o, {
			discover: !0,
			...s
		}) || e || r(o), C.destinationId = "";
	} else if (c) {
		let e = i(c);
		n.discover === !1 ? C.directUrl = e || r(c) : C.directUrl = e || await t(c, {
			discover: !0,
			...s
		}) || r(c), C.destinationId = _(o);
	} else C.destinationId = o, C.directUrl = "";
	q(), x();
}
async function Fe() {
	try {
		let { withTimeout: e } = await import("./src-CeZy5oFF.js"), { isCapacitorCwsNativeShell: t, patchNativeUnifiedSettingsDetailed: n } = await import("./cws-bridge-BGth_SZV.js");
		if (!t()) return { ok: !0 };
		let r = c({
			endpointUrl: C.endpointUrl,
			directUrl: C.directUrl,
			quickConnectValue: C.quickConnectValue,
			destinationId: C.destinationId,
			accessToken: C.accessToken,
			identificationToken: C.identificationToken,
			clientAccessToken: C.clientAccessToken,
			clientId: C.clientId,
			peerInstanceId: C.peerInstanceId,
			wireTransport: "ws"
		});
		return await e(n({ core: {
			endpointUrl: C.endpointUrl || void 0,
			ops: { directUrl: C.directUrl || void 0 },
			network: { quickConnect: C.quickConnectValue || void 0 },
			socket: {
				routeTarget: C.destinationId || void 0,
				accessToken: C.accessToken || void 0,
				selfId: C.clientId || void 0,
				clientAccessToken: C.clientAccessToken || void 0
			},
			userKey: C.identificationToken || void 0,
			appClientId: C.peerInstanceId || void 0,
			...r
		} }), 6e3, "native settings sync timed out").catch((e) => ({
			ok: !1,
			error: String(e instanceof Error ? e.message : e)
		}));
	} catch (e) {
		return {
			ok: !1,
			error: String(e instanceof Error ? e.message : e)
		};
	}
}
function Ie() {
	return L;
}
var Le = (e) => {
	let t = h(e);
	if (!t) return "";
	try {
		let e = /^[a-z][a-z0-9+.-]*:\/\//i.test(t) ? t : `https://${t}`, n = new URL(e).hostname.trim();
		return n ? /^L-/i.test(n) ? n : `L-${n}` : "";
	} catch {
		let e = t.replace(/^[a-z][a-z0-9+.-]*:\/\//i, "").split("/")[0]?.split(":")[0]?.trim() || "";
		return e ? /^L-/i.test(e) ? e : `L-${e}` : "";
	}
}, Re = "L-192.168.0.110", ze = (e) => {
	let t = _(e).toLowerCase();
	return t === "l-192.168.0.200" || t === "l-45.147.121.152" || t.includes("gateway");
}, Be = (e) => {
	let t = String(e || "").trim().toLowerCase();
	return t ? t.includes("192.168.0.200") || t.includes("45.147.121.152") || t.includes("gateway") : !1;
};
function $() {
	if (C.destinationId.trim()) return C.destinationId.trim();
	let e = C.directUrl.trim(), t = C.endpointUrl.trim();
	if (e) return Be(e) ? Re : t ? Le(e) : "";
	let n = R.trim();
	return n && !ze(n) ? n : t && Be(t) ? Re : n || "";
}
function Ve() {
	return $();
}
function He() {
	return H;
}
function Ue() {
	return (C.accessToken || "").trim() || (B.trim() ? B.trim() : b([
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
function We(e) {
	C.accessToken = e || "", x();
}
function Ge() {
	return z.trim() ? z.trim() : de && w.trim() ? w.trim() : C.clientId.trim() ? C.clientId.trim() : b(["AIRPAD_CLIENT_ID", "AIRPAD_CLIENT"]);
}
function Ke() {
	return ue.trim();
}
function qe() {
	return V.trim() || C.clientAccessToken.trim() || b(["CWS_CLIENT_ACCESS_TOKEN", "CLIENT_ACCESS_TOKEN"]);
}
function Je() {
	let e = b(["AIRPAD_PEER_INSTANCE_ID", "AIRPAD_DEVICE_ID"]);
	return e.trim() ? e.trim() : C.peerInstanceId || "";
}
function Ye() {
	return U;
}
function Xe() {
	return ne(W.trim() || b(["CWS_CONNECTION_TYPE", "AIRPAD_CONNECTION_TYPE"]));
}
function Ze() {
	return te(G.trim() || b(["CWS_ARCHETYPE", "AIRPAD_ARCHETYPE"]));
}
var Qe = .001, $e = .3, et = 1e3, tt = .9, nt = .001, rt = .1, it = .2, at = 1e3, ot = .001, st = .8;
//#endregion
export { $ as A, he as B, Ye as C, Se as D, we as E, Ae as F, _e as G, We as H, xe as I, Fe as K, Te as L, De as M, Oe as N, je as O, ke as P, Z as R, He as S, qe as T, Pe as U, K as V, Ee as W, Me as _, et as a, Je as b, nt as c, X as d, ye as f, Ve as g, Ge as h, Qe as i, be as j, Ie as k, ot as l, Ue as m, at as n, tt as o, ge as p, it as r, $e as s, rt as t, st as u, Ze as v, Ke as w, Ne as x, Xe as y, Q as z };
