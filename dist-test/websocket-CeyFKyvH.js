import { g as e, h as t } from "./utils-D2Szamfx.js";
import { E as n, S as r, T as i, _ as a, b as o, c as s, f as c, g as l, h as u, j as d, l as f, m as p, o as m, p as h, s as g, u as ee, v as _, x as v, y } from "./config-BynrmT5f.js";
//#region ../../projects/subsystem/src/boot/native-socket.ts
var b = class {
	connected = !1;
	id = "";
	ws = null;
	listeners = /* @__PURE__ */ new Map();
	connectTimeout;
	constructor(e, t) {
		this.url = e, this.options = t, this.connect();
	}
	connect() {
		try {
			let e = new URL(this.url);
			if (this.options.query) for (let [t, n] of Object.entries(this.options.query)) e.searchParams.set(t, String(n));
			if (this.options.auth) for (let [t, n] of Object.entries(this.options.auth)) e.searchParams.set(t, String(n));
			e.protocol === "http:" && (e.protocol = "ws:"), e.protocol === "https:" && (e.protocol = "wss:"), (!e.pathname || e.pathname === "/") && (e.pathname = "/ws"), this.ws = new WebSocket(e.toString()), this.ws.onopen = () => {
				this.connected = !0, this.emitLocal("connect");
			}, this.ws.onclose = (e) => {
				this.connected = !1, this.emitLocal("disconnect", e.reason || "closed"), this.emitLocal("close", e.code, e.reason);
			}, this.ws.onerror = (e) => {
				this.emitLocal("connect_error", /* @__PURE__ */ Error("WebSocket error")), this.emitLocal("error", e);
			}, this.ws.onmessage = (e) => {
				try {
					let t = JSON.parse(e.data);
					t.event && t.payload ? this.emitLocal(t.event, t.payload) : this.emitLocal("data", t);
				} catch {
					this.emitLocal("data", e.data);
				}
			}, this.options.timeout && (this.connectTimeout = setTimeout(() => {
				this.connected || (this.ws?.close(), this.emitLocal("connect_error", /* @__PURE__ */ Error("timeout")));
			}, this.options.timeout));
		} catch (e) {
			setTimeout(() => this.emitLocal("connect_error", e), 0);
		}
	}
	on(e, t) {
		this.listeners.has(e) || this.listeners.set(e, /* @__PURE__ */ new Set()), this.listeners.get(e).add(t);
	}
	off(e, t) {
		this.listeners.get(e)?.delete(t);
	}
	emit(e, ...t) {
		e === "data" || e === "message" ? this.connected && this.ws && this.ws.send(typeof t[0] == "string" ? t[0] : JSON.stringify(t[0])) : this.connected && this.ws && this.ws.send(JSON.stringify({
			event: e,
			payload: t[0]
		}));
	}
	emitLocal(e, ...t) {
		let n = this.listeners.get(e);
		if (n) for (let e of n) e(...t);
	}
	removeAllListeners() {
		this.listeners.clear();
	}
	close() {
		this.connectTimeout && clearTimeout(this.connectTimeout), this.ws &&= (this.ws.close(), null), this.connected = !1;
	}
	disconnect() {
		this.close();
	}
};
function te(e, t) {
	return new b(e, t);
}
//#endregion
//#region ../../projects/subsystem/src/routing/native/clipboard-device.ts
var x = () => {
	try {
		let e = globalThis.Capacitor;
		return typeof e?.isNativePlatform == "function" && !!e.isNativePlatform();
	} catch {
		return !1;
	}
}, S = () => x();
async function C(e) {
	let t = String(e ?? "");
	if (x()) try {
		let { Clipboard: e } = await import(
			/* @vite-ignore */
			"@capacitor/clipboard"
);
		await e.write({ string: t });
		return;
	} catch {}
	if (globalThis.navigator?.clipboard?.writeText) {
		await globalThis.navigator.clipboard.writeText(t);
		return;
	}
	throw Error("Clipboard write unavailable");
}
async function ne() {
	if (x()) try {
		let { Clipboard: e } = await import(
			/* @vite-ignore */
			"@capacitor/clipboard"
), t = (await e.read())?.value;
		if (typeof t == "string") return t;
	} catch {}
	if (globalThis.navigator?.clipboard?.readText) return String(await globalThis.navigator.clipboard.readText());
	throw Error("Clipboard read unavailable");
}
//#endregion
//#region ../../projects/subsystem/src/boot/websocket.ts
var w = null, T = !1, E = !1, D = null, O = null, k = 0, A = /* @__PURE__ */ new Set(), j = !1, re = 0, ie = [], M = 0, ae = /* @__PURE__ */ new Set(), oe = 0, se = 800, ce = 4800, le = ce + 800, ue = 3, de = "CWS_AIRPAD_VERBOSE_QUERY", N = {
	via: "cwsp_via",
	localEndpoint: "cwsp_local_endpoint",
	route: "cwsp_route",
	routeTarget: "cwsp_route_target",
	hop: "cwsp_hop",
	host: "cwsp_host",
	target: "cwsp_target",
	targetPort: "cwsp_target_port",
	viaPort: "cwsp_via_port",
	protocol: "cwsp_protocol"
}, fe = () => {
	try {
		let e = globalThis.chrome;
		return typeof e?.runtime?.id == "string" && e.runtime.id.length > 0;
	} catch {
		return !1;
	}
}, pe = () => {
	try {
		let e = String(globalThis?.localStorage?.getItem?.(de) || "").trim().toLowerCase();
		if ([
			"1",
			"true",
			"yes",
			"on"
		].includes(e)) return !0;
	} catch {}
	let e = String(globalThis?.[de] || "").trim().toLowerCase();
	return [
		"1",
		"true",
		"yes",
		"on"
	].includes(e);
}, me = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Set(), ge = /* @__PURE__ */ new Set(), P = "socket", _e = "ws", ve = (e) => {
	let t = String(e || "").trim().toLowerCase();
	return !t || t === "ws" || t === "wss" || t === "socket.io" || t === "socketio" ? P : t;
}, F = new TextEncoder(), I = new TextDecoder(), L = /* @__PURE__ */ new Map(), ye = /* @__PURE__ */ new Map();
d(() => {
	L.clear(), ye.clear();
});
var R = /* @__PURE__ */ new Map(), z = [], be = 128, xe = () => {
	if (w?.connected) for (; z.length > 0;) {
		let e = z.shift();
		e && q(e);
	}
};
function B() {
	return w;
}
function Se() {
	return T;
}
function Ce(e, t) {
	for (let n of he) try {
		n(e, t);
	} catch {}
}
var we = "", Te = "", V = null, Ee = () => {
	V &&= (globalThis.clearInterval(V), null);
}, De = () => {
	if (Ee(), !i() || !n()) return;
	let e = a();
	V = globalThis.setInterval(() => {
		H();
	}, e);
};
async function H() {
	if (!w?.connected || !n() || !i()) return;
	let e = l();
	if (e.length) try {
		let t = await ne(), n = String(t ?? "");
		if (!n || n === we) return;
		we = n;
		let r = groupWireTargetsByAccessToken(e, G());
		for (let e of r) rt("clipboard:update", { text: n }, e.nodeIds, { accessToken: e.accessToken });
	} catch {}
}
async function Oe(e, t) {
	if (!n()) return;
	let r = typeof e == "string" ? e : "";
	if (Ce(r, t), !(!v() || !r) && r !== Te) try {
		await C(r), Te = r, we = r;
	} catch {}
}
function ke(e) {
	try {
		return JSON.stringify(e);
	} catch {
		return String(e);
	}
}
var Ae = (e) => typeof e == "string" ? e : !e || typeof e != "object" ? "" : typeof e.text == "string" ? e.text : typeof e.content == "string" ? e.content : typeof e.data == "string" ? e.data : typeof e.result == "string" ? e.result : "", je = (e) => {
	let t = e;
	return !t || typeof t != "object" ? "" : String(t.from || t.byId || t.sender || "").trim();
}, U = (e) => {
	let t = String(e || "").trim().toLowerCase();
	return t.startsWith("clipboard:") ? "clipboard" : t.startsWith("mouse:") ? "mouse" : t.startsWith("keyboard:") ? "input" : t.startsWith("airpad:") ? "airpad" : t.startsWith("sms:") ? "sms" : t.startsWith("contacts:") ? "contact" : (t.startsWith("notification:") || t.startsWith("notifications:"), "general");
}, Me = (e) => e ? typeof e == "string" ? e : e instanceof Error ? `${e.name}: ${e.message}` : ke(e) : String(e);
function Ne() {
	return c() === "secure" ? "secure" : "plaintext";
}
var Pe = (e) => {
	try {
		let t = atob(e), n = new Uint8Array(t.length);
		for (let e = 0; e < t.length; e += 1) n[e] = t.charCodeAt(e);
		return n;
	} catch {
		return null;
	}
}, Fe = (e) => typeof e == "object" && !!e && typeof e.cipher == "string" && typeof e.sig == "string", W = (e) => {
	if (!e || typeof e != "string") return null;
	try {
		return JSON.parse(e);
	} catch {
		return null;
	}
}, Ie = (e) => e ? !(e === "io client disconnect" || e === "forced close") : !0, Le = (e) => e ? !(e === "io server disconnect" || e === "io client disconnect") : !0, Re = () => (h() || "").trim(), ze = () => (g() || "").trim() || "airpad-client", Be = () => (p() || "").trim(), G = () => (m() || "").trim(), Ve = () => wireTargetNodeIds(parseWireTargetList(o().trim())), He = () => globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `airpad-${Date.now()}-${Math.random().toString(16).slice(2)}`, Ue = (e) => !!e && typeof e == "object" && ("op" in e || "what" in e || "uuid" in e || "result" in e || "error" in e), We = (e) => e === "request" ? "ask" : e === "response" ? "result" : e === "signal" || e === "notify" || e === "redirect" ? "act" : e, Ge = (e) => e === "ask" ? "request" : e === "result" || e === "resolve" ? "response" : e, K = (e) => {
	let t = ze(), n = Be(), r = (typeof e.accessToken == "string" && e.accessToken.trim() ? e.accessToken.trim() : typeof e.airpadToken == "string" && e.airpadToken.trim() ? e.airpadToken.trim() : "") || G(), i = String(e.sender || e.byId || e.from || t || "").trim() || void 0, a = String(e.from || i || "").trim() || void 0, o = String(e.byId || i || "").trim() || void 0, s = Array.isArray(e.destinations) && e.destinations.length ? e.destinations : Array.isArray(e.nodes) ? e.nodes : Ve(), c = typeof e.uuid == "string" && e.uuid.trim() ? e.uuid.trim() : He(), l = Date.now();
	return {
		...e,
		op: Ge(e.op),
		type: String(e.type || e.what || "").trim() || e.what,
		protocol: ve(e.protocol),
		transport: String(e.transport || _e).trim() || _e,
		purpose: String(e.purpose || U(String(e.what || e.type || ""))).trim() || "general",
		sender: i,
		byId: o,
		from: a,
		nodes: s,
		destinations: s,
		ids: typeof e.ids == "object" && e.ids != null ? e.ids : {
			byId: o,
			from: a,
			sender: i,
			destinations: s
		},
		urls: Array.isArray(e.urls) && e.urls.length ? e.urls : [_()],
		tokens: Array.isArray(e.tokens) && e.tokens.length ? e.tokens : n ? [n] : [],
		token: e.token || n || void 0,
		userKey: typeof e.userKey == "string" && e.userKey.trim() ? e.userKey : n || void 0,
		accessToken: r || void 0,
		flags: e.flags || { canonicalV2: !0 },
		uuid: c,
		timestamp: Number(e.timestamp || 0) > 0 ? Number(e.timestamp) : l
	};
}, Ke = async (e) => {
	let t = We(e.op), n = (e.what || e.type || "").trim(), i = typeof e.uuid == "string" ? e.uuid : "";
	if (i && R.has(i)) {
		let n = R.get(i);
		n && (clearTimeout(n.timeoutId), R.delete(i), t === "error" || e.error !== void 0 ? n.reject(e.error ?? {
			ok: !1,
			error: "Unknown coordinator error"
		}) : n.resolve(e.result ?? e.results));
		return;
	}
	if (t === "ask" && n === "clipboard:get") {
		try {
			let t = await ne();
			q({
				...J("result", n, null, {
					uuid: i,
					nodes: e.from ? [e.from] : void 0
				}),
				result: typeof t == "string" ? t : String(t || "")
			});
		} catch (t) {
			q({
				...J("error", n, null, {
					uuid: i,
					nodes: e.from ? [e.from] : void 0
				}),
				error: t?.message || String(t)
			});
		}
		return;
	}
	if (n === "clipboard:update") {
		if (!r(je(e))) return;
		let t = e.result ?? e.results ?? e.payload;
		Oe(Ae(t), { source: t?.source });
	}
}, q = (e) => !w || !w.connected ? !1 : (w.emit("data", K(e)), !0), J = (e, t, n, r = {}) => {
	let i = ze(), a = Be(), o = r.accessToken === void 0 ? G() : String(r.accessToken).trim() || G();
	return {
		op: Ge(e),
		what: t,
		type: t,
		purpose: U(t),
		protocol: P,
		transport: _e,
		payload: n,
		nodes: r.nodes ?? Ve(),
		destinations: r.nodes ?? Ve(),
		uuid: r.uuid,
		sender: i,
		byId: i,
		from: i,
		ids: {
			byId: i,
			from: i,
			sender: i,
			destinations: r.nodes ?? Ve()
		},
		urls: [_()],
		tokens: a ? [a] : [],
		flags: { canonicalV2: !0 },
		token: a || void 0,
		userKey: a || void 0,
		accessToken: o || void 0,
		timestamp: Date.now()
	};
}, qe = async (e) => {
	if (!e || !globalThis.crypto?.subtle) return null;
	if (L.has(e)) return L.get(e) || null;
	let t = F.encode(e), n = await globalThis.crypto.subtle.digest("SHA-256", t), r = await globalThis.crypto.subtle.importKey("raw", n, "AES-GCM", !1, ["encrypt", "decrypt"]);
	return L.set(e, r), r;
}, Y = async (e) => {
	if (!Fe(e)) return e;
	let t = Re(), n = Pe(e.cipher);
	if (!n) return e;
	if (!t || !globalThis.crypto?.subtle) return W(I.decode(n)) ?? e;
	let r = await qe(t);
	if (!r) return e;
	if (n.length < 28) return W(I.decode(n)) ?? e;
	let i = n.slice(0, 12), a = n.slice(12);
	try {
		let t = new Uint8Array(await globalThis.crypto.subtle.decrypt({
			name: "AES-GCM",
			iv: i
		}, r, a));
		return W(I.decode(t)) ?? e;
	} catch {
		return e;
	}
}, Je = async (e) => !Fe(e) || Ne() !== "secure" ? e : Y(e);
function X(e) {
	let t = e.trim();
	return /^l-/i.test(t) ? t.slice(2).trim() : t;
}
function Ye(e) {
	let t = X(e.trim()).toLowerCase();
	return t === "localhost" || t === "127.0.0.1" || t === "::1";
}
function Xe(e) {
	if (!e) return !1;
	let t = X(e);
	return t === "localhost" || e === "localhost" || e.endsWith(".local") ? !0 : /^\d{1,3}(?:\.\d{1,3}){3}$/.test(t) ? t.startsWith("10.") || t.startsWith("192.168.") || /^172\.(1[6-9]|2\d|3[01])\./.test(t) || t.startsWith("127.") || /^100\.(6[4-9]|[7-9]\d|1[01]\d|12[0-7])\./.test(t) : !1;
}
var Ze = () => {
	try {
		return String(new URL(location.href).hostname).toLowerCase();
	} catch {
		return "";
	}
}, Qe = (e) => {
	if (!e || typeof e != "string") return !1;
	let t;
	try {
		t = new URL(e, location.href);
	} catch {
		return !1;
	}
	let n = t.hostname.toLowerCase(), r = t.protocol.toLowerCase();
	if (r !== "http:" && r !== "https:") return !1;
	let i = Ze();
	return Xe(n) || n === "localhost" || n === i;
}, $e = (e) => {
	let t = {};
	if (!e) return t;
	for (let [n, r] of Object.entries(e)) typeof n != "string" || !n.trim() || typeof r == "string" && (t[n] = r);
	return t;
}, et = (e) => {
	let t = {};
	return e.forEach((e, n) => {
		t[n] = e;
	}), t;
}, tt = async (e) => {
	let t = typeof e?.requestId == "string" ? e.requestId.trim() : "", n = typeof e?.method == "string" ? e.method.toUpperCase() : "GET", r = typeof e?.url == "string" ? e.url : "", i = e && typeof e.timeoutMs == "number" ? e.timeoutMs : 12e3, a = Number.isFinite(i) && i > 0 ? Math.min(Math.max(Math.round(i), 1e3), 6e4) : 12e3;
	if (!t) return {
		ok: !1,
		status: 400,
		statusText: "Bad Request",
		error: "Missing requestId"
	};
	if (!Qe(r)) return {
		requestId: t,
		ok: !1,
		status: 400,
		statusText: "Bad Request",
		error: "URL not allowed"
	};
	let o = new AbortController(), s = globalThis.setTimeout(() => o.abort(), a);
	try {
		let i = $e(e?.headers), a = !["GET", "HEAD"].includes(n), s = e?.body, c = a ? typeof s == "string" ? s : ke(s) : void 0, l = await fetch(r, {
			method: n,
			headers: i,
			body: c,
			signal: o.signal
		}), u = await l.text();
		return {
			requestId: t,
			ok: l.ok,
			status: l.status,
			statusText: l.statusText,
			headers: et(l.headers),
			body: u
		};
	} catch (e) {
		return {
			requestId: t,
			ok: !1,
			status: 0,
			statusText: "Network Error",
			error: Me(e)
		};
	} finally {
		clearTimeout(s);
	}
};
async function nt(t, n) {
	if (!(!t || !n) && Xe(n) && location.protocol === "https:" && !ae.has(t)) {
		ae.add(t);
		try {
			await fetch(`${t}/lna-probe`, {
				method: "GET",
				mode: "cors",
				cache: "no-store",
				credentials: "omit",
				targetAddressSpace: "local"
			});
		} catch (t) {
			e(`LNA probe: ${String(t?.message || t || "") || "request failed"}`);
		}
	}
}
function rt(e, t, n, r) {
	let i = J("act", e, t, {
		nodes: n,
		accessToken: r?.accessToken
	});
	return q(i) ? !0 : (z.length >= be && z.shift(), z.push(i), lt(), !0);
}
function Z() {
	if (D) {
		if (E || w && w.connected === !1) {
			D.textContent = "WS…";
			return;
		}
		T || w && w.connected ? D.textContent = "WS ✓" : D.textContent = "WS ↔";
	}
}
function Q(t, n) {
	let r = n.trim();
	e(`[ws-state] event=${t}${r ? ` ${r}` : ""}`);
}
var it = "ws-status-tls-hint";
function at(e) {
	let n = t();
	n && (n.textContent = S() ? `TLS failed — install your CA in Android Settings → Security → Encryption & credentials (or use Remote host = name on the cert). Try HTTP :8080 if the server allows. ${e}` : `Untrusted cert — open ${e} in this browser, accept, then retry`, n.classList.add(it), n.classList.remove("ws-status-ok"), n.classList.add("ws-status-bad"));
}
function ot(e) {
	let n = t();
	n && (n.textContent = `TLS name mismatch for raw IP — set Remote host to ${e} (name on certificate), keep ports as needed`, n.classList.add(it), n.classList.remove("ws-status-ok"), n.classList.add("ws-status-bad"));
}
function $(e) {
	T = e, e && xe();
	let n = t();
	n && (n.classList.remove(it), e ? (n.textContent = "connected", n.classList.remove("ws-status-bad"), n.classList.add("ws-status-ok")) : (n.textContent = "disconnected", n.classList.remove("ws-status-ok"), n.classList.add("ws-status-bad"))), Z();
	for (let t of me) try {
		t(e);
	} catch {}
}
function st(t) {
	if (t.type === "voice_result" || t.type === "voice_error") {
		let n = t.error || t.message || "Actions: " + JSON.stringify(t.actions || []);
		for (let e of ge) try {
			e({
				text: n,
				type: t.type === "voice_error" ? "voice_error" : "voice_result",
				actions: t.actions,
				error: t.error
			});
		} catch {}
		e("Voice result: " + n);
	}
}
function ct(e) {
	if (!(typeof window > "u")) {
		Q("lifecycle-reconnect", e), Ee(), k += 1, j = !1;
		for (let [e, t] of R.entries()) clearTimeout(t.timeoutId), t.reject({
			ok: !1,
			error: `Disconnected before response for ${e}`
		}), R.delete(e);
		for (let e of [...A]) e.removeAllListeners(), e.close(), A.delete(e);
		if (E = !1, w) try {
			w.removeAllListeners(), w.disconnect();
		} catch {}
		w = null, window.__socket = null, $(!1), re = 0, lt();
	}
}
function lt() {
	if (E || w && (w.connected || w.connecting) || A.size > 0) return;
	k += 1;
	let n = k;
	j = !1;
	let i = _().trim(), a = i || location.hostname, c = y(), l = (e) => !!e && /^\d{1,3}(?:\.\d{1,3}){3}$/.test(e), d = (e) => !e || !l(e) ? !1 : e.startsWith("10.") || e.startsWith("192.168.") || /^172\.(1[6-9]|2\d|3[01])\./.test(e) || /^100\.(6[4-9]|[7-9]\d|1[01]\d|12[0-7])\./.test(e), p = (e) => {
		let t = [], n = [], r = [], i = [];
		for (let a of e) l(a.host) ? d(a.host) || a.host === "127.0.0.1" ? r.push(a) : i.push(a) : a.source === "page" ? n.push(a) : t.push(a);
		return [
			...r,
			...t,
			...n,
			...i
		];
	}, m = (e) => /^\d{1,5}$/.test(e), h = (e) => e.trim().replace(/^[a-z][a-z0-9+.-]*:\/\//i, "").split("/")[0], g = (e) => {
		let t = h(e).trim();
		if (!t) return null;
		let n = t.lastIndexOf(":");
		if (n <= 0) return { host: t };
		let r = t.slice(0, n), i = t.slice(n + 1);
		return !r || !m(i) ? { host: t } : {
			host: r,
			port: i
		};
	}, v = (e) => e.split(/[;,]/).map((e) => e.trim()).filter(Boolean), b = v(i).map((e) => g(e)).filter((e) => !!e && !!e.host), x = (b[0]?.port || "").trim(), C = o().trim(), ne = C ? g(C) : void 0, D = location.hostname || "", O = /^(localhost|127\.0\.0\.1)$/.test(D) || /^\d{1,3}(?:\.\d{1,3}){3}$/.test(D) && (D.startsWith("10.") || D.startsWith("192.168.") || /^172\.(1[6-9]|2\d|3[01])\./.test(D));
	if (location.protocol === "https:" && c === "http" && !S()) {
		e("WebSocket error: browser blocks ws/http from https page (mixed content). Open Airpad via http:// or use valid HTTPS cert on endpoint."), E = !1, $(!1), Z();
		return;
	}
	let ae = b[0], de = ae?.host || a, me = ae?.port, he = ne?.host || C || "", ge = (ne?.port || "").trim(), P = (de || a || "").trim(), _e = P.length > 0 ? X(P) || P : "", ve = (() => {
		let e = _e.trim();
		if (!e) return "";
		let t = e.lastIndexOf(":");
		return t > 0 && m(e.slice(t + 1)) ? e.slice(0, t) : e;
	})(), F = c === "http" || c === "https" ? c : x === "443" || x === "8443" || x === "8444" ? "https" : x === "80" || x === "8080" || S() && ve && l(ve) && d(ve) ? "http" : location.protocol === "https:" ? "https" : "http", I = P, L = X(I) || I, ye = x || (F === "https" ? "8443" : "8080");
	if (nt(`${F}://${L}:${ye}`, L), D && Ye(L) && !Ye(D) && Xe(D)) {
		let e = X(D) || D;
		nt(`${F}://${e}:${ye}`, e);
	}
	let z = F === "https" ? "http" : "https", be = {
		http: ["8080", "80"],
		https: [
			"8443",
			"443",
			"8444"
		]
	}, xe = location.port?.trim?.() || "", B = xe || (location.protocol === "https:" ? "443" : location.protocol === "http:" ? "80" : ""), Se = c === "http" ? ["http"] : c === "https" ? ["https"] : [F, z], Ce = (e) => e === "443" || e === "8443" || e === "8444", we = (e) => e === "80" || e === "8080", Te = (e, t) => {
		let n = [];
		t && m(t) && !n.includes(t) && n.push(t), x && (e === "https" && Ce(x) && n.push(x), e === "http" && we(x) && n.push(x), c === e && !n.includes(x) && n.push(x));
		for (let t of be[e]) n.push(t);
		return xe && n.push(xe), n.filter((e, t) => n.indexOf(e) === t);
	}, V = (e) => X(e.trim()) || e.trim(), H = [];
	for (let e of b) {
		let t = V(e.host);
		t && H.push({
			host: t,
			source: "remote",
			preferPort: e.port
		});
	}
	if (b.length === 0 && i) {
		let e = V(i);
		e && H.push({
			host: e,
			source: "remote"
		});
	}
	let U = /* @__PURE__ */ new Set();
	for (let e of b) e.host && U.add(e.host.toLowerCase());
	if (b.length === 0 && i.trim()) for (let e of v(i.trim())) {
		let t = g(e);
		t?.host && U.add(t.host.toLowerCase());
	}
	let Ne = () => {
		for (let e of U) {
			let t = X(e).toLowerCase();
			if (t === "localhost" || t === "127.0.0.1" || l(t) && d(t)) return !0;
		}
		return !1;
	}, Pe = D.toLowerCase(), Fe = !!D && U.size > 0 && Ne() && !O && !U.has(Pe);
	location.hostname && !Fe && H.push({
		host: location.hostname,
		source: "page",
		...B ? { preferPort: B } : {}
	});
	let W = /* @__PURE__ */ new Map();
	for (let e of H) e.host && !W.has(e.host) && W.set(e.host, e);
	let Re = Array.from(W.values()), He = p(Re), We = [], Ge = S();
	for (let e of Se) {
		if (location.protocol === "https:" && e === "http" && !Ge) continue;
		let t = e === "https" ? He : Re;
		for (let n of t) {
			let { host: t, source: r, preferPort: i } = n, a = D && t === D && B ? B : i;
			for (let n of Te(e, a)) {
				let i = X(t).trim() || t.trim(), a = l(i) && d(i), o = location.protocol === "https:" && !O && a, s = fe(), c = S(), u = !c && o && !s, f = c && a || location.protocol === "https:" && O && a || s && o && a;
				We.push({
					url: `${e}://${t}:${n}`,
					protocol: e,
					host: t,
					source: r,
					port: n,
					useWebSocketOnly: f,
					preferPollingFirst: u
				});
			}
		}
	}
	let K = We.filter((e, t) => We.findIndex((t) => t.url === e.url) === t);
	if (K.length === 0) {
		E = !1, $(!1), Z();
		return;
	}
	let q = K.length > 0 ? M % K.length : 0, J = K.slice(q).concat(K.slice(0, q));
	M = q, ie = J, ie.length <= 1 && (M = 0);
	let qe = () => {
		ie.length > 1 && (M = (M + 1) % ie.length);
	};
	E = !0, Z();
	let Y = V(de || i || ""), Ze = ge || me || x || (F === "https" ? "8443" : "8080"), Qe = he, $e = Qe || Y || "", et = () => {
		if (!Qe || !Y) return !0;
		let e = Qe.trim().toLowerCase(), t = Y.trim().toLowerCase();
		return !e || !t || e === t || e === `l-${t}`;
	}, rt = (e) => {
		let t = e.url, n = Be(), r = G(), a = u(), o = ze(), c = ee().trim(), l = {};
		n && (l.token = n, l.userKey = n), r && (l.accessToken = r), a && (l.clientAccessToken = a), o && (l.clientId = o), c && (l.peerInstanceId = c, l.deviceInstanceId = c);
		let d = {};
		c && (d.peerInstanceId = c, d.deviceInstanceId = c), d.connectionType = f(), d.archetype = s(), d[N.via] = et() ? e.source || "unknown" : "tunnel", d[N.localEndpoint] = et() ? "1" : "0";
		let p = $e, m = Qe || Y || $e, h = X(e.host || "").trim(), g = X(D || "").trim();
		return e.source === "page" && h && g && h.toLowerCase() === g.toLowerCase() && Ye(p) && (p = h, m = h), p && (d[N.route] = p, d[N.routeTarget] = m), pe() && (d[N.hop] = e.host || i || "unknown", d[N.host] = e.host || i || "", d[N.target] = Y || "", d[N.targetPort] = Ze, d[N.viaPort] = e.port || "", d[N.protocol] = e.protocol || "https"), a && (d.clientAccessToken = a), r && (d.accessToken = r), {
			url: t,
			clientToken: n,
			accessToken: r,
			clientId: o,
			peerInstanceId: c,
			handshakeAuth: l,
			queryParams: d
		};
	}, ct = (t, n, i, a, o, s, c, l, d, f, p) => {
		w = t, Q("connected", `candidate=${i + 1}/${J.length} candidate_url=${a} transport=${n.protocol} parallel=${ue}`), E = !1, re = 0, $(!0), De(), w.emit("hello", {
			id: l || c,
			byId: c,
			from: c,
			peerInstanceId: l || void 0,
			token: o || void 0,
			userKey: o || void 0,
			accessToken: s || void 0,
			clientAccessToken: u() || void 0,
			nodes: Ve()
		}), w.on("disconnect", (t) => {
			Ee(), Q("disconnected", `candidate=${i + 1}/${J.length} candidate_url=${a} reason=${t || "unknown"}`), d?.off?.("close", f), d?.off?.("error", p), E = !1, $(!1), Z();
			let n = j;
			j = !1;
			for (let [e, t] of R.entries()) clearTimeout(t.timeoutId), t.reject({
				ok: !1,
				error: `Disconnected before response for ${e}`
			}), R.delete(e);
			if (w = null, n) {
				re = 0;
				return;
			}
			Le(t) && (qe(), ie.length > 1 && e(`WebSocket disconnect reason "${t || "unknown"}", trying next candidate on reconnect`));
			let r = re + 1, o = oe > 0;
			if (!Ie(t) || o && r > oe) return;
			re = r;
			let s = Math.min(se * r, 5e3);
			setTimeout(() => {
				E || T || w && w.connected || w?.connecting || (Q("auto-reconnect", `attempt=${o ? `${r}/${oe}` : `${r}/unlimited`} reason=${t || "unknown reason"}`), lt());
			}, s);
		}), w.on("hello-ack", (t) => {
			t?.id && e(`WebSocket hello ack: ${String(t.id)}`);
		}), w.on("connect_error", (e) => {
			Q("socket-connect-error", `candidate=${i + 1}/${J.length} candidate_url=${a} reason=${e?.message || "unknown"}`), E = !1, Z();
		}), w.on("voice_result", async (e) => {
			st(await Je(e));
		}), w.on("voice_error", async (e) => {
			st(await Je(e));
		}), w.on("clipboard:update", async (e) => {
			let t = await Je(e);
			r(je(t)) && Oe(Ae(t), { source: t?.source });
		}), w.on("data", async (e) => {
			let t = await Je(e);
			Ue(t) && Ke(t);
		}), w.on("message", async (e) => {
			let t = await Je(e);
			Ue(t) && Ke(t);
		}), w.on("network.fetch", async (e, t) => {
			let n = await tt(e);
			typeof t == "function" && t(n);
		}), typeof window < "u" && (window.__socket = w);
	}, ut = (e, r) => new Promise((i) => {
		if (n !== k) {
			i(!1);
			return;
		}
		let a = J.slice(e, e + ue);
		if (!a.length) {
			i(!1);
			return;
		}
		if (e === 0 && r === 0) {
			let e = t();
			e && (e.classList.remove(it), e.textContent = "connecting…");
		}
		let o = !1, s = !1, c = 0, u = a.length, f = null, p = null, m = (e, t, n, r, a, c, l, u) => {
			if (s) return;
			s = !0, o = !0;
			let d = (e) => {
				let t = e.__cwspProbeTimer;
				t && globalThis.clearTimeout(t), delete e.__cwspProbeTimer;
			};
			for (let t of [...A]) t !== e && (d(t), t.removeAllListeners(), t.close(), A.delete(t));
			d(e), A.delete(e), ct(e, t, n, r, a.clientToken, a.accessToken, a.clientId, a.peerInstanceId, c, l, u), i(!0);
		}, h = () => {
			s || o || (c++, !(c < u) && (s = !0, f ? at(f) : p && ot(p), i(!1)));
		};
		for (let t = 0; t < a.length; t++) {
			let r = a[t], i = e + t, c = rt(r), { url: g, handshakeAuth: ee, queryParams: _ } = c;
			Q("connecting", `batch=${e}-${e + u - 1} candidate=${i + 1}/${J.length} candidate_url=${g} transport=${r.protocol} source=${r.source} host=${r.host}:${r.port} target=${Y}:${Ze}`);
			let v = te(g, {
				auth: ee,
				query: _,
				transports: r.useWebSocketOnly ? ["websocket"] : r.preferPollingFirst ? ["polling", "websocket"] : ["websocket", "polling"],
				upgrade: !r.useWebSocketOnly,
				reconnection: !1,
				timeout: ce,
				secure: r.protocol === "https",
				forceNew: !0
			}), y = v.io?.engine, b = (...e) => {
				let t = typeof e[0] == "number" ? e[0] : void 0, n = e.length > 1 ? e[1] : void 0;
				Q("engine-close", `candidate=${i + 1}/${J.length} candidate_url=${g} code=${t ?? "n/a"} reason=${typeof n == "string" ? n : ke(n)} transport=${y?.transport?.name || "unknown"}`);
			}, x = (e) => {
				Q("engine-error", `candidate=${i + 1}/${J.length} candidate_url=${g} reason=${Me(e)}`);
			};
			y?.on?.("close", b), y?.on?.("error", x), A.add(v);
			let C = globalThis.setTimeout(() => {
				o || s || v.connected || (v.removeAllListeners(), v.close(), A.delete(v), y?.off?.("close", b), y?.off?.("error", x), Q("connect-failed", `candidate=${i + 1}/${J.length} candidate_url=${g} reason=probe-hard-timeout`), h());
			}, le);
			v.__cwspProbeTimer = C, v.on("connect", () => {
				if (globalThis.clearTimeout(C), n !== k) {
					v.removeAllListeners(), v.close(), A.delete(v), y?.off?.("close", b), y?.off?.("error", x);
					return;
				}
				if (o || s) {
					v.removeAllListeners(), v.close(), A.delete(v), y?.off?.("close", b), y?.off?.("error", x);
					return;
				}
				m(v, r, i, g, c, y, b, x);
			}), v.on("connect_error", (e) => {
				if (globalThis.clearTimeout(C), A.delete(v), y?.off?.("close", b), y?.off?.("error", x), o || s) {
					v.removeAllListeners(), v.close();
					return;
				}
				v.removeAllListeners(), v.close();
				let t = e?.description || e?.context || "", n = String(e?.message || e || ""), a = `${n} ${String(t)}`, c = r.protocol === "https" && d(r.host) && /xhr poll error|websocket error/i.test(n), u = /certificate|cert\.|ssl|tls|trust|ERR_CERT|ERR_SSL|handshake|authority|SELF_SIGNED|unknown.*cert|invalid.*cert|unable to verify|pkix|hostname|name mismatch/i.test(a), m = /refused|ECONNREFUSED|ENOTFOUND|timed out|timeout|unreachable|ERR_CONNECTION|ADDRESS_UNREACHABLE|NAME_NOT_RESOLVED|INTERNET_DISCONNECTED|network.*lost/i.test(a), ee = S();
				c && !f && (u || !ee && !m) && (f = g);
				let _ = r.protocol === "https" && l(r.host) && !d(r.host) && r.host !== "127.0.0.1", te = `${n} ${String(t)}`;
				if (_ && /xhr poll error|websocket error|certificate|CERT|common name|ssl|tls|failed to fetch|name invalid/i.test(te) && !p) {
					let e = D && !l(D) && D !== "localhost" ? D : "";
					e && (p = e);
				}
				r.useWebSocketOnly && /xhr poll error|cors|private network|address space|failed fetch/i.test(n) && Q("connect-failed", `candidate=${i + 1}/${J.length} candidate_url=${g} reason=${n} hint=private-network-cors`), Q("connect-failed", `candidate=${i + 1}/${J.length} candidate_url=${g} reason=${n} details=${t ? ke(t) : "none"}`), h();
			});
		}
	});
	(async () => {
		for (let e = 0; e < 3; e++) {
			for (let t = 0; t < J.length; t += ue) if (n !== k || await ut(t, e)) return;
			e + 1 < 3 && (Q("retry", `round=${e + 2}/3 next=0`), await new Promise((e) => globalThis.setTimeout(e, 450)));
		}
		n === k && (Q("failed", "round=3/3 all-candidates"), E = !1, $(!1), Z());
	})();
}
function ut() {
	Ee(), k += 1, j = !0;
	for (let e of [...A]) e.removeAllListeners(), e.close(), A.delete(e);
	if (E = !1, !w) {
		$(!1), Z();
		return;
	}
	e("Disconnecting WebSocket..."), w.disconnect(), w = null, typeof window < "u" && (window.__socket = null), $(!1);
}
function dt(e) {
	D = e, Z(), e && O !== e && (O && O.removeEventListener("click", ft), O = e, O.addEventListener("click", ft));
}
function ft() {
	E || T || w && w.connected || w?.connecting ? ut() : lt();
}
//#endregion
export { lt as connectWS, B as getWS, dt as initWebSocket, Se as isWSConnected, ct as reconnectTransportAfterLifecycleResume };
