import { ut as e } from "./src-CFwTR5EZ.js";
import { A as t, C as n, D as r, E as i, F as a, I as o, N as s, O as c, R as l, S as u, T as d, b as ee, h as f, j as p, k as m, m as h, v as te, w as g, y as _ } from "./config-CdEaAxAm.js";
import { n as ne, t as re } from "./cwsp-endpoint-resolve-DtbuqyNS.js";
import { a as v, i as ie, t as y } from "./clipboard-device-CdAzzaJV.js";
import { i as b, o as x } from "./cws-bridge-BVaPzxvD.js";
import { n as ae } from "./hub-socket-boot-BX1DkXVm.js";
//#region src/utils/utils.ts
var S = null;
function oe(e) {
	S = e;
}
function se() {
	return S;
}
function ce() {
	return S?.ownerDocument ?? (typeof document < "u" ? document : null);
}
function C(e) {
	let t = S;
	if (!t) return null;
	try {
		return t.querySelector(`#${CSS.escape(e)}`);
	} catch {
		return null;
	}
}
function le(e) {
	return S ? S.querySelector(e) : null;
}
var ue = () => C("wsStatus"), de = () => C("airStatus"), w = () => C("aiStatus"), T = () => C("logContainer"), fe = () => C("voiceText"), pe = () => C("vkStatus"), me = () => C("btnConnect"), he = () => C("airButton"), ge = () => C("aiButton"), _e = () => C("airNeighborButton"), ve = () => C("btnCut"), ye = () => C("btnCopy"), be = () => C("btnPaste"), xe = () => C("clipboardPreview");
function E(e) {
	let t = S?.ownerDocument ?? (typeof document < "u" ? document : null);
	if (!t) {
		console.log("[LOG]", e);
		return;
	}
	let n = t.createElement("div");
	n.textContent = `[${(/* @__PURE__ */ new Date()).toLocaleTimeString()}] ${e}`;
	let r = T();
	r && (r.appendChild(n), r.scrollTop = r.scrollHeight), console.log("[LOG]", e);
}
//#endregion
//#region ../../projects/cwsp-shared/src/wire-time64.ts
var D = 1e6, O = 0, k = 0, A = () => {
	if (k = Date.now(), typeof process < "u" && typeof process.hrtime?.bigint == "function") {
		O = Number(process.hrtime.bigint() / 1000n) % D;
		return;
	}
	try {
		let e = globalThis.performance;
		if (typeof e?.now == "function") {
			O = Math.floor(e.now() % 1 * D) % D;
			return;
		}
	} catch {}
	O = 0;
};
A();
var Se = () => {
	let e = Date.now(), t = 0;
	if (typeof process < "u" && typeof process.hrtime?.bigint == "function") {
		let n = e - k;
		(n < 0 || n > 6e4) && A(), t = (O + Number(process.hrtime.bigint() / 1000n)) % D;
	} else try {
		let e = globalThis.performance;
		typeof e?.now == "function" && (t = Math.floor(e.now() % 1 * D) % D);
	} catch {
		t = 0;
	}
	let n = String(BigInt(e) * BigInt(D) + BigInt(t));
	return {
		ts: e,
		subUs: t,
		wireTime64: n,
		ts64: n,
		wireTs: n
	};
}, Ce = (e) => {
	let t = Se(), n = String(e.wireTime64 ?? e.ts64 ?? e.wireTs ?? t.wireTime64);
	return {
		...e,
		ts: Number(e.ts ?? t.ts),
		subUs: Number(e.subUs ?? t.subUs),
		wireTime64: n,
		ts64: n,
		wireTs: n
	};
}, we = (e) => {
	let t = Se(), n = Number(e.timestamp ?? e.ts ?? t.ts), r = Number(e.subUs ?? t.subUs), i = String(e.wireTime64 ?? e.ts64 ?? e.wireTs ?? t.wireTime64), a = {
		...e.flags && typeof e.flags == "object" && !Array.isArray(e.flags) ? e.flags : {},
		wireTime64: i,
		ts64: i,
		wireTs: i
	};
	return {
		...e,
		ts: n,
		subUs: r,
		wireTime64: i,
		ts64: i,
		wireTs: i,
		timestamp: n,
		flags: a
	};
}, Te = (e) => e && typeof e == "object" && !Array.isArray(e) ? e : {}, Ee = () => {
	try {
		let e = globalThis.performance;
		if (typeof e?.now == "function") return e.now();
	} catch {}
	return Date.now();
}, De = (e = Ee()) => Math.round(e * 10) & 65535, Oe = (e) => (e & 65535) / 10, j = (e) => {
	let t = String(e || "").trim().toLowerCase();
	return t.startsWith("mouse:") || t.startsWith("keyboard:") || t.startsWith("airpad:mouse") || t.startsWith("airpad:keyboard");
}, ke = (e) => {
	let t = String(e || "").trim().toLowerCase();
	return t.startsWith("clipboard:") || t.startsWith("airpad:clipboard:");
}, M = (e) => j(e) || ke(e), Ae = (e) => {
	let t = Te(e), n = Number(t.perfTs ?? Ee());
	return {
		...Ce(t),
		perfTs: n,
		perfTsLo: Number(t.perfTsLo ?? De(n))
	};
}, N = (e, t) => {
	if (!(!t || typeof t != "object")) for (let [n, r] of Object.entries(t)) !n || r == null || r === "" || e.searchParams.set(n, String(r));
};
function je(e, t, n) {
	let r = new URL(e.includes("://") ? e : `https://${e}`);
	r.protocol === "http:" ? r.protocol = "ws:" : (r.protocol === "https:" || r.protocol !== "ws:" && r.protocol !== "wss:") && (r.protocol = "wss:"), (!r.pathname || r.pathname === "/" || /^\/socket\.io\/?$/i.test(r.pathname)) && (r.pathname = "/ws");
	for (let e of [
		"EIO",
		"transport",
		"sid"
	]) r.searchParams.delete(e);
	return N(r, t), N(r, n), r.toString();
}
var Me = class {
	connected = !1;
	connecting = !1;
	id = "";
	ws = null;
	listeners = /* @__PURE__ */ new Map();
	connectTimeout;
	constructor(e, t = {}) {
		this.url = e, this.options = t, this.connect();
	}
	connect() {
		try {
			let e = je(this.url, this.options.query, this.options.auth);
			this.connecting = !0, this.ws = new WebSocket(e), this.ws.onopen = () => {
				this.connected = !0, this.connecting = !1, this.connectTimeout && clearTimeout(this.connectTimeout), this.emitLocal("connect");
			}, this.ws.onclose = (e) => {
				this.connected = !1, this.connecting = !1, this.connectTimeout && clearTimeout(this.connectTimeout), this.emitLocal("disconnect", e.reason || "closed"), this.emitLocal("close", e.code, e.reason);
			}, this.ws.onerror = (e) => {
				this.connecting = !1, this.emitLocal("connect_error", /* @__PURE__ */ Error("WebSocket error")), this.emitLocal("error", e);
			}, this.ws.onmessage = (e) => {
				if (e.data instanceof ArrayBuffer) {
					this.emitLocal("binary", e.data);
					return;
				}
				if (typeof Blob < "u" && e.data instanceof Blob) {
					e.data.arrayBuffer().then((e) => this.emitLocal("binary", e));
					return;
				}
				try {
					let t = JSON.parse(String(e.data));
					t.event && t.payload ? this.emitLocal(t.event, t.payload) : this.emitLocal("data", t);
				} catch {
					this.emitLocal("data", e.data);
				}
			}, this.options.timeout && (this.connectTimeout = setTimeout(() => {
				this.connected || (this.connecting = !1, this.ws?.close(), this.emitLocal("connect_error", /* @__PURE__ */ Error("timeout")));
			}, this.options.timeout));
		} catch (e) {
			this.connecting = !1, setTimeout(() => this.emitLocal("connect_error", e), 0);
		}
	}
	on(e, t) {
		this.listeners.has(e) || this.listeners.set(e, /* @__PURE__ */ new Set()), this.listeners.get(e).add(t);
	}
	off(e, t) {
		this.listeners.get(e)?.delete(t);
	}
	send(e) {
		this.connected && this.ws && this.ws.send(typeof e == "string" ? e : JSON.stringify(e));
	}
	sendBinary(e) {
		!this.connected || !this.ws || this.ws.send(e);
	}
	emit(e, ...t) {
		this.send(t[0]);
	}
	emitLocal(e, ...t) {
		let n = this.listeners.get(e);
		if (n) for (let e of n) e(...t);
	}
	removeAllListeners() {
		this.listeners.clear();
	}
	close() {
		this.connectTimeout && clearTimeout(this.connectTimeout), this.ws &&= (this.ws.close(), null), this.connected = !1, this.connecting = !1;
	}
	disconnect() {
		this.close();
	}
};
function Ne(e, t) {
	return new Me(e, t);
}
//#endregion
//#region ../../projects/cwsp-shared/src/packet-wire-hash.ts
var Pe = "wireHash", Fe = new Set([
	"ts",
	"subUs",
	"wireTime64",
	"ts64",
	"wireTs",
	"perfTs",
	"perfTsLo",
	Pe,
	"source",
	"from",
	"clientId",
	"userId",
	"sender"
]), P = (e) => e && typeof e == "object" && !Array.isArray(e) ? e : {}, F = (e) => {
	if (!e) return "";
	let t = 5381;
	for (let n = 0; n < e.length; n += 1) t = (t << 5) + t + e.charCodeAt(n) | 0;
	return (t >>> 0).toString(36);
}, Ie = (e) => String(e ?? "").replace(/\r\n/g, "\n").trim(), Le = (e) => {
	if (e == null) return "";
	if (typeof e != "object") return JSON.stringify(e);
	if (Array.isArray(e)) return `[${e.map(Le).join(",")}]`;
	let t = e;
	return `{${Object.keys(t).filter((e) => !Fe.has(e)).sort().map((e) => `${JSON.stringify(e)}:${Le(t[e])}`).join(",")}}`;
}, Re = (e) => {
	for (let t of [
		"asset",
		"dataAsset",
		"file",
		"image"
	]) {
		let n = P(e[t]), r = String(n.hash ?? "").trim();
		if (r) return r;
	}
	return "";
}, ze = (e, t) => {
	for (let t of [
		"text",
		"content",
		"body"
	]) {
		let n = e[t];
		if (typeof n == "string" && n.trim()) return n;
	}
	for (let e of [
		"payload",
		"data",
		"result"
	]) {
		let n = t[e];
		if (typeof n == "string" && n.trim()) return n;
	}
	return "";
}, Be = (e) => {
	let t = String(e || "").trim().toLowerCase();
	return t ? t.startsWith("clipboard:") || t.startsWith("airpad:clipboard:") ? "clipboard" : t.startsWith("mouse:") || t.startsWith("keyboard:") || t.startsWith("airpad:mouse") || t.startsWith("airpad:keyboard") ? "input" : "general" : "general";
}, Ve = (e) => e === "clipboard" ? 250 : e === "input" ? 180 : 400, He = (e, t) => !!(t === "ask" || t === "request" || !e || e.endsWith(":read") || e.endsWith(":get") || e.endsWith(":isready")), Ue = (e) => {
	let t = P(e.flags), n = P(e.payload ?? e.data);
	return String(t.wireHash ?? e.wireHash ?? n.wireHash ?? "").trim();
}, We = (e) => {
	let t = String(e.op || "act").trim().toLowerCase(), n = String(e.what || e.type || "").trim().toLowerCase();
	if (He(n, t)) return "";
	let r = String(e.byId || e.from || e.sender || "").trim().toLowerCase(), i = P(e.payload ?? e.data ?? e.body ?? {});
	if (n.includes("clipboard")) {
		let a = ze(i, e), o = a ? "" : Re(i), s = a ? F(Ie(a)) : o ? `asset:${o}` : F(Le(i));
		return s ? F(`${t}|${n}|${r}|${s}`) : "";
	}
	if (Be(n) === "input") {
		let e = i.perfTs ?? i.perfTsLo ?? "";
		return F(`${t}|${n}|${r}|${Le(i)}|p:${e}`);
	}
	return F(`${t}|${n}|${r}|${Le(i)}`);
}, Ge = (e) => {
	let t = we(e);
	if (Ue(t)) return t;
	let n = We(t);
	if (!n) return t;
	let r = {
		...P(t.flags),
		[Pe]: n
	}, i = t.payload ?? t.data, a = i;
	return i && typeof i == "object" && !Array.isArray(i) && (a = {
		...i,
		[Pe]: n
	}), t.payload === void 0 ? t.data === void 0 ? {
		...t,
		flags: r,
		payload: a
	} : {
		...t,
		flags: r,
		data: a
	} : {
		...t,
		flags: r,
		payload: a
	};
}, Ke = new class {
	constructor(e = 512) {
		this.maxEntries = e, this.seen = /* @__PURE__ */ new Map();
	}
	shouldSuppress(e, t) {
		let n = String(e.what || e.type || "").trim().toLowerCase();
		if (He(n, String(e.op || "act").trim().toLowerCase())) return !1;
		let r = Ue(e) || We(e);
		if (!r) return !1;
		let i = t ?? Be(n), a = Ve(i), o = Date.now(), s = `${i}|${r}`, c = this.seen.get(s);
		return this.seen.set(s, o), this.prune(o, a), c !== void 0 && o - c < a;
	}
	clear() {
		this.seen.clear();
	}
	prune(e, t) {
		let n = Math.max(t * 4, 4e3);
		for (let [t, r] of this.seen.entries()) e - r > n && this.seen.delete(t);
		if (this.seen.size <= this.maxEntries) return;
		let r = [...this.seen.entries()].sort((e, t) => e[1] - t[1]);
		for (let e = 0; e < r.length - this.maxEntries; e += 1) this.seen.delete(r[e][0]);
	}
}(), qe = null;
function Je(e) {
	qe = e;
}
function Ye() {
	try {
		qe?.();
	} catch {}
}
//#endregion
//#region ../../projects/subsystem/src/boot/native-coordinator-bridge.ts
var I = !1, L = 0, Xe = 1200, R = () => ae() && x() && a(), Ze = 6e3, Qe = async () => {
	if (!R()) return I = !1, !1;
	try {
		let t = await e(b("coordinator:status", {}), Ze, "coordinator:status timed out"), n = !!(t.echo?.connected ?? t.ok);
		return I = n, L = Date.now(), n;
	} catch {
		return I = !1, L = Date.now(), !1;
	}
}, $e = async () => {
	if (!R()) return !1;
	try {
		return (await e(b("runtime:reload-settings", {}), Ze, "runtime:reload-settings timed out"))?.ok ? (I = !1, L = 0, Qe()) : (I = !1, L = Date.now(), !1);
	} catch {
		return I = !1, L = Date.now(), !1;
	}
}, et = () => R() ? (Date.now() - L > Xe && Qe(), I) : !1, tt = (e, t) => !M(e) || !t || typeof t != "object" || Array.isArray(t) ? t ?? {} : Ae(t), nt = async (e) => {
	if (!R()) return !1;
	let t = e instanceof Uint8Array ? e : new Uint8Array(e), n = "";
	for (let e = 0; e < t.length; e++) n += String.fromCharCode(t[e] ?? 0);
	let r = btoa(n);
	try {
		let e = await b("coordinator:binary", {
			data: r,
			encoding: "base64"
		}), t = !!(e?.sent ?? e.echo?.sent ?? e.ok);
		return t && (I = !0, L = Date.now()), t;
	} catch {
		return I = !1, L = Date.now(), !1;
	}
}, rt = async (e) => {
	if (!R()) return !1;
	try {
		let t = await b(e ? "airmouse:start" : "airmouse:stop", {}), n = t.echo ?? {}, r = !!t.ok;
		return r && (I = !0, L = Date.now()), e ? r && n.active !== !1 : r;
	} catch {
		return !1;
	}
}, it = () => rt(!0), at = () => rt(!1), ot = async (e) => {
	let t = (await b("coordinator:dispatch", {
		what: e.what,
		payload: tt(e.what, e.payload),
		nodes: e.nodes ?? [],
		uuid: e.uuid ?? "",
		op: e.op
	})).echo ?? {};
	if (t.result !== void 0) return t.result;
	if (typeof t.body == "string" && t.body.trim()) try {
		let e = JSON.parse(t.body);
		return e.result ?? e.payload ?? e.data ?? t.body;
	} catch {
		return t.body;
	}
	return t.result ?? null;
}, st = async (e) => {
	if (!R()) return !1;
	let t = e.op === "ask" ? "coordinator:ask" : "coordinator:act";
	try {
		let n = await b(t, {
			what: e.what,
			payload: tt(e.what, e.payload),
			nodes: e.nodes ?? [],
			uuid: e.uuid ?? "",
			op: e.op
		}), r = !!(n.echo?.sent ?? n.ok);
		return r && (I = !0, L = Date.now()), r;
	} catch {
		return I = !1, L = Date.now(), !1;
	}
}, z = null, B = !1, V = !1, ct = null, lt = null, H = 0, U = /* @__PURE__ */ new Set(), ut = !1, dt = 0, ft = null, pt = [], mt = 0, ht = /* @__PURE__ */ new Set(), gt = 0, _t = 800, vt = 4800, yt = vt + 800, bt = 3, xt = "CWS_AIRPAD_VERBOSE_QUERY", St = 8e3, Ct = () => {
	ft &&= (globalThis.clearTimeout(ft), null);
}, W = (e) => {
	let t = e;
	t.__cwspProbeTimer && (globalThis.clearTimeout(t.__cwspProbeTimer), delete t.__cwspProbeTimer);
}, G = {
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
}, wt = () => {
	try {
		let e = String(globalThis?.localStorage?.getItem?.(xt) || "").trim().toLowerCase();
		if ([
			"1",
			"true",
			"yes",
			"on"
		].includes(e)) return !0;
	} catch {}
	let e = String(globalThis?.[xt] || "").trim().toLowerCase();
	return [
		"1",
		"true",
		"yes",
		"on"
	].includes(e);
}, Tt = /* @__PURE__ */ new Set(), Et = "", Dt = /* @__PURE__ */ new Set(), Ot = /* @__PURE__ */ new Set(), kt = "ws", At = "ws", jt = (e) => {
	let t = String(e || "").trim().toLowerCase();
	return !t || t === "ws" || t === "wss" || t === "socket" || t === "socket.io" || t === "socketio" ? kt : t;
}, Mt = new TextEncoder(), Nt = new TextDecoder(), Pt = /* @__PURE__ */ new Map(), Ft = /* @__PURE__ */ new Map();
Je(() => {
	Pt.clear(), Ft.clear();
});
var K = /* @__PURE__ */ new Map(), It = [], Lt = 128, Rt = () => {
	if (z?.connected) for (; It.length > 0;) {
		let e = It.shift();
		e && q(e);
	}
}, zt = async (e = 7e3) => R() ? et() || await Qe() : z?.connected ? !0 : ($(), await new Promise((t) => {
	let n = !1, r = (e) => {
		if (!n) {
			n = !0;
			try {
				i?.();
			} catch {}
			globalThis.clearTimeout(a), t(e);
		}
	}, i = Ht((e) => {
		e && r(!0);
	}), a = globalThis.setTimeout(() => r(!!z?.connected), e);
}));
function Bt() {
	return z;
}
function Vt() {
	return R() ? et() : B;
}
function Ht(e) {
	Tt.add(e);
	try {
		e(Vt());
	} catch {}
	return () => Tt.delete(e);
}
async function Ut() {
	if (R()) {
		let e = await Qe();
		return Q(e), e;
	}
	let e = !!(B || z?.connected);
	return Q(e), e;
}
function Wt() {
	Q(!1);
}
function Gt() {
	return Et;
}
function Kt(e) {
	return Dt.add(e), () => Dt.delete(e);
}
function qt(e) {
	return Ot.add(e), () => Ot.delete(e);
}
function Jt(e, t) {
	for (let n of Dt) try {
		n(e, t);
	} catch {}
}
var Yt = 3500, Xt = "", Zt = 0, Qt = "", $t = 0, en = "", tn = 0, nn = null, rn = () => {
	nn &&= (globalThis.clearInterval(nn), null);
}, an = () => {
	if (rn(), !o() || !l()) return;
	let e = r();
	nn = globalThis.setInterval(() => {
		on();
	}, e);
};
async function on() {
	if (!z?.connected || !l() || !o()) return;
	let e = i();
	if (e.length) try {
		let t = await ie(), n = String(t ?? "").trim();
		if (!n) return;
		let r = Date.now();
		if (r < $t && n === Qt || n === Xt && r - Zt < Yt) return;
		Xt = n, Zt = r;
		let i = groupWireTargetsByAccessToken(e, wn());
		for (let e of i) Wn("clipboard:update", { text: n }, e.nodeIds, { accessToken: e.accessToken });
	} catch {}
}
async function sn(e, t) {
	if (!l()) return;
	let n = typeof e == "string" ? e : "", r = n.trim(), i = Date.now();
	if (!(r && r === en && i - tn < Yt) && (en = r, tn = i, Et = n, Jt(n, t), !(!p() || !r) && !(r === Qt && i < $t))) try {
		await v(r), Qt = r, Xt = r, Zt = i, $t = i + Yt;
	} catch (e) {
		console.warn("[cwsp:clipboard] device write failed", {
			length: n.length,
			source: t?.source,
			error: mn(e)
		});
	}
}
function cn(e) {
	try {
		return JSON.stringify(e);
	} catch {
		return String(e);
	}
}
var ln = (e) => {
	if (typeof e == "string") return e;
	if (!e || typeof e != "object") return "";
	let t = e;
	for (let e of [
		"text",
		"content",
		"body"
	]) {
		let n = t[e];
		if (typeof n == "string") return n;
	}
	if (typeof t.result == "string") return t.result;
	let n = t.payload ?? t.data;
	if (n && n !== e) {
		let e = ln(n);
		if (e) return e;
	}
	return "";
}, un = (e) => {
	let t = String(e || "").trim().toLowerCase();
	return t === "clipboard:update" || t === "clipboard:write" || t.startsWith("airpad:clipboard:");
}, dn = (e) => ln(e.payload ?? e.data ?? e.result ?? e.results) || ln(e), fn = (e) => {
	let t = e;
	return !t || typeof t != "object" ? "" : String(t.from || t.byId || t.sender || "").trim();
}, pn = (e) => {
	let t = String(e || "").trim().toLowerCase();
	return t.startsWith("clipboard:") ? "clipboard" : t.startsWith("mouse:") ? "mouse" : t.startsWith("keyboard:") ? "input" : t.startsWith("airpad:") ? "airpad" : t.startsWith("sms:") ? "sms" : t.startsWith("contacts:") ? "contact" : (t.startsWith("notification:") || t.startsWith("notifications:"), "general");
}, mn = (e) => e ? typeof e == "string" ? e : e instanceof Error ? `${e.name}: ${e.message}` : cn(e) : String(e);
function hn() {
	return u() === "secure" ? "secure" : "plaintext";
}
var gn = (e) => {
	try {
		let t = atob(e), n = new Uint8Array(t.length);
		for (let e = 0; e < t.length; e += 1) n[e] = t.charCodeAt(e);
		return n;
	} catch {
		return null;
	}
}, _n = (e) => typeof e == "object" && !!e && typeof e.cipher == "string" && typeof e.sig == "string", vn = (e) => {
	if (!e || typeof e != "string") return null;
	try {
		return JSON.parse(e);
	} catch {
		return null;
	}
}, yn = (e) => e ? !(e === "io client disconnect" || e === "forced close") : !0, bn = (e) => e ? !(e === "io server disconnect" || e === "io client disconnect") : !0, xn = () => (n() || "").trim(), Sn = () => (f() || "").trim() || "airpad-client", Cn = () => (g() || "").trim(), wn = () => (h() || "").trim(), Tn = () => wireTargetNodeIds(parseWireTargetList(t().trim())), En = () => globalThis.crypto?.randomUUID ? globalThis.crypto.randomUUID() : `airpad-${Date.now()}-${Math.random().toString(16).slice(2)}`, Dn = (e) => !!e && typeof e == "object" && ("op" in e || "what" in e || "uuid" in e || "result" in e || "error" in e), On = (e) => e === "request" ? "ask" : e === "response" ? "result" : e === "signal" || e === "notify" || e === "redirect" ? "act" : e, kn = (e) => e, An = (e) => {
	let t = Sn(), n = Cn(), r = (typeof e.accessToken == "string" && e.accessToken.trim() ? e.accessToken.trim() : typeof e.airpadToken == "string" && e.airpadToken.trim() ? e.airpadToken.trim() : "") || wn(), i = String(e.sender || e.byId || e.from || t || "").trim() || void 0, a = String(e.from || i || "").trim() || void 0, o = String(e.byId || i || "").trim() || void 0, s = Array.isArray(e.destinations) && e.destinations.length ? e.destinations : Array.isArray(e.nodes) ? e.nodes : Tn(), l = typeof e.uuid == "string" && e.uuid.trim() ? e.uuid.trim() : En(), u = Date.now();
	return {
		...e,
		op: kn(e.op),
		type: String(e.type || e.what || "").trim() || e.what,
		protocol: jt(e.protocol),
		transport: String(e.transport || At).trim() || At,
		purpose: String(e.purpose || pn(String(e.what || e.type || ""))).trim() || "general",
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
		urls: Array.isArray(e.urls) && e.urls.length ? e.urls : [c()],
		tokens: Array.isArray(e.tokens) && e.tokens.length ? e.tokens : n ? [n] : [],
		token: e.token || n || void 0,
		userKey: typeof e.userKey == "string" && e.userKey.trim() ? e.userKey : n || void 0,
		accessToken: r || void 0,
		flags: {
			...e.flags,
			canonicalV2: !0
		},
		uuid: l,
		timestamp: Number(e.timestamp || 0) > 0 ? Number(e.timestamp) : u
	};
}, jn = async (e) => {
	let t = On(e.op), n = (e.what || e.type || "").trim(), r = typeof e.uuid == "string" ? e.uuid : "";
	if (r && K.has(r)) {
		let n = K.get(r);
		n && (clearTimeout(n.timeoutId), K.delete(r), t === "error" || e.error !== void 0 ? n.reject(e.error ?? {
			ok: !1,
			error: "Unknown coordinator error"
		}) : n.resolve(e.result ?? e.results));
		return;
	}
	if (t === "ask" && n === "clipboard:get") {
		try {
			let t = await ie();
			q({
				...Mn("result", n, null, {
					uuid: r,
					nodes: e.from ? [e.from] : void 0
				}),
				result: typeof t == "string" ? t : String(t || "")
			});
		} catch (t) {
			q({
				...Mn("error", n, null, {
					uuid: r,
					nodes: e.from ? [e.from] : void 0
				}),
				error: t?.message || String(t)
			});
		}
		return;
	}
	if (t === "act" && n) {
		let t = un(n) ? "clipboard" : Be(n);
		if (Ke.shouldSuppress(e, t)) return;
	}
	if (un(n)) {
		if (!s(fn(e))) return;
		let t = e.payload ?? e.data ?? e.result ?? e.results;
		sn(dn(e), { source: typeof t == "object" && t ? String(t.source || "") : void 0 });
	}
}, q = (e) => {
	if (R()) {
		let t = String(e.what || e.type || ""), n = e.payload ?? e.data ?? {}, r = Array.isArray(e.nodes) ? e.nodes.map(String) : void 0;
		return st({
			op: e.op === "ask" || e.op === "request" ? "ask" : "act",
			what: t,
			payload: n,
			nodes: r,
			uuid: typeof e.uuid == "string" ? e.uuid : void 0
		}), et();
	}
	return !z || !z.connected ? !1 : (z.send(An(e)), !0);
}, Mn = (e, t, n, r = {}) => {
	let i = Sn(), a = Cn(), o = r.accessToken === void 0 ? wn() : String(r.accessToken).trim() || wn();
	return Ge(we({
		op: kn(e),
		what: t,
		type: t,
		purpose: pn(t),
		protocol: kt,
		transport: At,
		payload: n,
		nodes: r.nodes ?? Tn(),
		destinations: r.nodes ?? Tn(),
		uuid: r.uuid,
		sender: i,
		byId: i,
		from: i,
		ids: {
			byId: i,
			from: i,
			sender: i,
			destinations: r.nodes ?? Tn()
		},
		urls: [c()],
		tokens: a ? [a] : [],
		flags: { canonicalV2: !0 },
		token: a || void 0,
		userKey: a || void 0,
		accessToken: o || void 0,
		timestamp: Date.now()
	}));
}, Nn = async (e) => {
	if (!e || !globalThis.crypto?.subtle) return null;
	if (Pt.has(e)) return Pt.get(e) || null;
	let t = Mt.encode(e), n = await globalThis.crypto.subtle.digest("SHA-256", t), r = await globalThis.crypto.subtle.importKey("raw", n, "AES-GCM", !1, ["encrypt", "decrypt"]);
	return Pt.set(e, r), r;
}, Pn = async (e) => {
	if (!_n(e)) return e;
	let t = xn(), n = gn(e.cipher);
	if (!n) return e;
	if (!t || !globalThis.crypto?.subtle) return vn(Nt.decode(n)) ?? e;
	let r = await Nn(t);
	if (!r) return e;
	if (n.length < 28) return vn(Nt.decode(n)) ?? e;
	let i = n.slice(0, 12), a = n.slice(12);
	try {
		let t = new Uint8Array(await globalThis.crypto.subtle.decrypt({
			name: "AES-GCM",
			iv: i
		}, r, a));
		return vn(Nt.decode(t)) ?? e;
	} catch {
		return e;
	}
}, Fn = async (e) => !_n(e) || hn() !== "secure" ? e : Pn(e);
function J(e) {
	let t = e.trim();
	return /^l-/i.test(t) ? t.slice(2).trim() : t;
}
function In(e) {
	let t = J(e.trim()).toLowerCase();
	return t === "localhost" || t === "127.0.0.1" || t === "::1";
}
function Ln(e) {
	if (!e) return !1;
	let t = J(e);
	return t === "localhost" || e === "localhost" || e.endsWith(".local") ? !0 : /^\d{1,3}(?:\.\d{1,3}){3}$/.test(t) ? t.startsWith("10.") || t.startsWith("192.168.") || /^172\.(1[6-9]|2\d|3[01])\./.test(t) || t.startsWith("127.") || /^100\.(6[4-9]|[7-9]\d|1[01]\d|12[0-7])\./.test(t) : !1;
}
var Rn = () => {
	try {
		return String(new URL(location.href).hostname).toLowerCase();
	} catch {
		return "";
	}
}, zn = (e) => {
	if (!e || typeof e != "string") return !1;
	let t;
	try {
		t = new URL(e, location.href);
	} catch {
		return !1;
	}
	let n = t.hostname.toLowerCase(), r = t.protocol.toLowerCase();
	if (r !== "http:" && r !== "https:") return !1;
	let i = Rn();
	return Ln(n) || n === "localhost" || n === i;
}, Bn = (e) => {
	let t = {};
	if (!e) return t;
	for (let [n, r] of Object.entries(e)) typeof n != "string" || !n.trim() || typeof r == "string" && (t[n] = r);
	return t;
}, Vn = (e) => {
	let t = {};
	return e.forEach((e, n) => {
		t[n] = e;
	}), t;
}, Hn = async (e) => {
	let t = typeof e?.requestId == "string" ? e.requestId.trim() : "", n = typeof e?.method == "string" ? e.method.toUpperCase() : "GET", r = typeof e?.url == "string" ? e.url : "", i = e && typeof e.timeoutMs == "number" ? e.timeoutMs : 12e3, a = Number.isFinite(i) && i > 0 ? Math.min(Math.max(Math.round(i), 1e3), 6e4) : 12e3;
	if (!t) return {
		ok: !1,
		status: 400,
		statusText: "Bad Request",
		error: "Missing requestId"
	};
	if (!zn(r)) return {
		requestId: t,
		ok: !1,
		status: 400,
		statusText: "Bad Request",
		error: "URL not allowed"
	};
	let o = new AbortController(), s = globalThis.setTimeout(() => o.abort(), a);
	try {
		let i = Bn(e?.headers), a = !["GET", "HEAD"].includes(n), s = e?.body, c = a ? typeof s == "string" ? s : cn(s) : void 0, l = await fetch(r, {
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
			headers: Vn(l.headers),
			body: u
		};
	} catch (e) {
		return {
			requestId: t,
			ok: !1,
			status: 0,
			statusText: "Network Error",
			error: mn(e)
		};
	} finally {
		clearTimeout(s);
	}
};
async function Un(e, t) {
	if (!(!e || !t) && Ln(t) && location.protocol === "https:" && !ht.has(e)) {
		ht.add(e);
		try {
			await fetch(`${e}/lna-probe`, {
				method: "GET",
				mode: "cors",
				cache: "no-store",
				credentials: "omit",
				targetAddressSpace: "local"
			});
		} catch (e) {
			E(`LNA probe: ${String(e?.message || e || "") || "request failed"}`);
		}
	}
}
var Y = (e, t) => !M(e) || !t || typeof t != "object" || Array.isArray(t) ? t : Ae(t);
function Wn(e, t, n, r) {
	let i = Mn("act", e, Y(e, t), {
		nodes: n,
		accessToken: r?.accessToken
	});
	return q(i) ? !0 : (It.length >= Lt && It.shift(), It.push(i), $(), !0);
}
function Gn(e) {
	if (R()) return nt(e), et();
	if (!z?.connected) return !1;
	let t = z;
	return typeof t.sendBinary == "function" ? (t.sendBinary(e), !0) : !1;
}
function Kn(e, t, n) {
	return new Promise((r, i) => {
		(async () => {
			if (R()) {
				try {
					if (!await zt()) {
						i({
							ok: !1,
							error: "Native WS not connected"
						});
						return;
					}
					r(await ot({
						op: "ask",
						what: e,
						payload: Y(e, t),
						nodes: n
					}));
				} catch (e) {
					i({
						ok: !1,
						error: String(e?.message || e)
					});
				}
				return;
			}
			if (!await zt() || !z?.connected) {
				i({
					ok: !1,
					error: "WS not connected"
				});
				return;
			}
			let a = En(), o = globalThis.setTimeout(() => {
				K.delete(a), i({
					ok: !1,
					error: `Timeout waiting for ${e}`
				});
			}, St);
			K.set(a, {
				resolve: r,
				reject: i,
				timeoutId: o
			}), q(Mn("ask", e, Y(e, t), {
				nodes: n,
				uuid: a
			}));
		})();
	});
}
function qn(e, t, n) {
	return new Promise((r, i) => {
		(async () => {
			if (R()) {
				try {
					if (!await zt()) {
						i({
							ok: !1,
							error: "Native WS not connected"
						});
						return;
					}
					r(await ot({
						op: "act",
						what: e,
						payload: Y(e, t),
						nodes: n
					}));
				} catch (e) {
					i({
						ok: !1,
						error: String(e?.message || e)
					});
				}
				return;
			}
			if (!await zt() || !z?.connected) {
				i({
					ok: !1,
					error: "WS not connected"
				});
				return;
			}
			let a = En(), o = globalThis.setTimeout(() => {
				K.delete(a), i({
					ok: !1,
					error: `Timeout waiting for ${e}`
				});
			}, St);
			K.set(a, {
				resolve: r,
				reject: i,
				timeoutId: o
			}), q(Mn("act", e, Y(e, t), {
				nodes: n,
				uuid: a
			}));
		})();
	});
}
function X() {
	if (ct) {
		if (V || z && z.connected === !1) {
			ct.textContent = "WS…";
			return;
		}
		B || z && z.connected ? ct.textContent = "WS ✓" : ct.textContent = "WS ↔";
	}
}
function Z(e, t) {
	let n = t.trim();
	E(`[ws-state] event=${e}${n ? ` ${n}` : ""}`);
}
var Jn = "ws-status-tls-hint";
function Yn(e) {
	let t = ue();
	t && (t.textContent = y() ? `TLS failed — install your CA in Android Settings → Security → Encryption & credentials (or use Remote host = name on the cert). Try HTTP :8080 if the server allows. ${e}` : `Untrusted cert — open ${e} in this browser, accept, then retry`, t.classList.add(Jn), t.classList.remove("ws-status-ok"), t.classList.add("ws-status-bad"));
}
function Xn(e) {
	let t = ue();
	t && (t.textContent = `TLS name mismatch for raw IP — set Remote host to ${e} (name on certificate), keep ports as needed`, t.classList.add(Jn), t.classList.remove("ws-status-ok"), t.classList.add("ws-status-bad"));
}
function Q(e) {
	B = e, e && Rt();
	let t = ue();
	t && (t.classList.remove(Jn), e ? (t.textContent = "connected", t.classList.remove("ws-status-bad"), t.classList.add("ws-status-ok")) : (t.textContent = "disconnected", t.classList.remove("ws-status-ok"), t.classList.add("ws-status-bad"))), X();
	for (let t of Tt) try {
		t(e);
	} catch {}
}
function Zn(e) {
	if (e.type === "voice_result" || e.type === "voice_error") {
		let t = e.error || e.message || "Actions: " + JSON.stringify(e.actions || []);
		for (let n of Ot) try {
			n({
				text: t,
				type: e.type === "voice_error" ? "voice_error" : "voice_result",
				actions: e.actions,
				error: e.error
			});
		} catch {}
		E("Voice result: " + t);
	}
}
function Qn(e) {
	if (!(typeof window > "u")) {
		Z("lifecycle-reconnect", e), rn(), Ct(), H += 1, ut = !1;
		for (let [e, t] of K.entries()) clearTimeout(t.timeoutId), t.reject({
			ok: !1,
			error: `Disconnected before response for ${e}`
		}), K.delete(e);
		for (let e of [...U]) W(e), e.removeAllListeners(), e.close(), U.delete(e);
		if (V = !1, z) try {
			z.removeAllListeners(), z.disconnect();
		} catch {}
		z = null, window.__socket = null, Q(!1), dt = 0, Ke.clear(), $();
	}
}
function $() {
	if (V || z && (z.connected || z.connecting) || U.size > 0) return;
	Ct(), H += 1;
	let e = H;
	ut = !1;
	let n = c().trim(), r = n || location.hostname, i = m(), a = (e) => !!e && /^\d{1,3}(?:\.\d{1,3}){3}$/.test(e), o = (e) => !e || !a(e) ? !1 : e.startsWith("10.") || e.startsWith("192.168.") || /^172\.(1[6-9]|2\d|3[01])\./.test(e) || /^100\.(6[4-9]|[7-9]\d|1[01]\d|12[0-7])\./.test(e), l = (e) => {
		let t = [], n = [], r = [], i = [];
		for (let s of e) a(s.host) ? o(s.host) || s.host === "127.0.0.1" ? r.push(s) : i.push(s) : s.source === "page" ? n.push(s) : t.push(s);
		return [
			...r,
			...t,
			...n,
			...i
		];
	}, u = (e) => /^\d{1,5}$/.test(e), f = (e) => e.trim().replace(/^[a-z][a-z0-9+.-]*:\/\//i, "").split("/")[0], p = (e) => {
		let t = f(e).trim();
		if (!t) return null;
		let n = t.lastIndexOf(":");
		if (n <= 0) return { host: t };
		let r = t.slice(0, n), i = t.slice(n + 1);
		return !r || !u(i) ? { host: t } : {
			host: r,
			port: i
		};
	}, h = (e) => e.split(/[;,]/).map((e) => e.trim()).filter(Boolean), g = h(n).map((e) => p(e)).filter((e) => !!e && !!e.host), v = (g[0]?.port || "").trim(), ie = t().trim(), b = ie ? p(ie) : void 0, x = location.hostname || "", ae = /^(localhost|127\.0\.0\.1)$/.test(x) || /^\d{1,3}(?:\.\d{1,3}){3}$/.test(x) && (x.startsWith("10.") || x.startsWith("192.168.") || /^172\.(1[6-9]|2\d|3[01])\./.test(x));
	if (location.protocol === "https:" && i === "http" && !y()) {
		E("WebSocket error: browser blocks ws/http from https page (mixed content). Open Airpad via http:// or use valid HTTPS cert on endpoint."), V = !1, Q(!1), X();
		return;
	}
	let S = g[0], oe = S?.host || r, se = S?.port, ce = b?.host || ie || "", C = (b?.port || "").trim(), le = (oe || r || "").trim(), de = le.length > 0 ? J(le) || le : "", w = (() => {
		let e = de.trim();
		if (!e) return "";
		let t = e.lastIndexOf(":");
		return t > 0 && u(e.slice(t + 1)) ? e.slice(0, t) : e;
	})(), T = i === "http" || i === "https" ? i : v === "443" || v === "8434" || v === "8444" ? "https" : v === "80" || v === "8080" || v === "8081" ? "http" : y() && location.protocol === "https:" && w && a(w) && o(w) ? "https" : y() && location.protocol !== "https:" && w && a(w) && o(w) ? "http" : location.protocol === "https:" ? "https" : "http", fe = le, pe = J(fe) || fe, me = v || (T === "https" ? "8434" : "8080");
	if (Un(`${T}://${pe}:${me}`, pe), x && In(pe) && !In(x) && Ln(x)) {
		let e = J(x) || x;
		Un(`${T}://${e}:${me}`, e);
	}
	let he = T === "https" ? "http" : "https", ge = {
		http: [...ne],
		https: [...re]
	}, _e = location.port?.trim?.() || "", ve = _e || (location.protocol === "https:" ? "443" : location.protocol === "http:" ? "80" : ""), ye = i === "http" ? ["http"] : i === "https" ? ["https"] : [T, he], be = (e) => re.includes(e), xe = (e) => ne.includes(e), D = (e, t) => {
		let n = [];
		t && u(t) && !n.includes(t) && n.push(t), v && (e === "https" && be(v) && n.push(v), e === "http" && xe(v) && n.push(v), i === e && !n.includes(v) && n.push(v));
		for (let t of ge[e]) n.push(t);
		return _e && n.push(_e), n.filter((e, t) => n.indexOf(e) === t);
	}, O = (e) => J(e.trim()) || e.trim(), k = [];
	for (let e of g) {
		let t = O(e.host);
		t && k.push({
			host: t,
			source: "remote",
			preferPort: e.port
		});
	}
	if (g.length === 0 && n) {
		let e = O(n);
		e && k.push({
			host: e,
			source: "remote"
		});
	}
	let A = /* @__PURE__ */ new Set();
	for (let e of g) e.host && A.add(e.host.toLowerCase());
	if (g.length === 0 && n.trim()) for (let e of h(n.trim())) {
		let t = p(e);
		t?.host && A.add(t.host.toLowerCase());
	}
	let Se = () => {
		for (let e of A) {
			let t = J(e).toLowerCase();
			if (t === "localhost" || t === "127.0.0.1" || a(t) && o(t)) return !0;
		}
		return !1;
	}, Ce = x.toLowerCase(), we = !!x && A.size > 0 && Se() && !ae && !A.has(Ce);
	location.hostname && !we && k.push({
		host: location.hostname,
		source: "page",
		...ve ? { preferPort: ve } : {}
	});
	let Te = /* @__PURE__ */ new Map();
	for (let e of k) e.host && !Te.has(e.host) && Te.set(e.host, e);
	let Ee = Array.from(Te.values()), De = l(Ee), Oe = [];
	for (let e of ye) {
		if (location.protocol === "https:" && e === "http") continue;
		let t = e === "https" ? De : Ee;
		for (let n of t) {
			let { host: t, source: r, preferPort: i } = n, s = x && t === x && ve ? ve : i;
			for (let n of D(e, s)) {
				let i = J(t).trim() || t.trim(), s = a(i) && o(i), c = location.protocol === "https:" && !ae && s, l = y() && s || location.protocol === "https:" && ae && s || c && s;
				Oe.push({
					url: `${e}://${t}:${n}`,
					protocol: e,
					host: t,
					source: r,
					port: n,
					privateLanHint: l
				});
			}
		}
	}
	let j = Oe.filter((e, t) => Oe.findIndex((t) => t.url === e.url) === t);
	if (j.length === 0) {
		V = !1, Q(!1), X();
		return;
	}
	let ke = j.length > 0 ? mt % j.length : 0, M = j.slice(ke).concat(j.slice(0, ke));
	mt = ke, pt = M, pt.length <= 1 && (mt = 0);
	let Ae = () => {
		pt.length > 1 && (mt = (mt + 1) % pt.length);
	};
	V = !0, X();
	let N = O(oe || n || ""), je = C || se || v || (T === "https" ? "8434" : "8080"), Me = ce, Pe = Me || N || "", Fe = () => {
		if (!Me || !N) return !0;
		let e = Me.trim().toLowerCase(), t = N.trim().toLowerCase();
		return !e || !t || e === t || e === `l-${t}`;
	}, P = (e) => {
		let t = e.url, r = Cn(), i = wn(), a = d(), o = Sn(), s = ee().trim(), c = {};
		r && (c.token = r, c.userKey = r), i && (c.accessToken = i), a && (c.clientAccessToken = a), o && (c.clientId = o), s && (c.peerInstanceId = s, c.deviceInstanceId = s);
		let l = {};
		s && (l.peerInstanceId = s, l.deviceInstanceId = s), l.connectionType = _(), l.archetype = te(), l.cwspEnvelope = "v2", o && (l.clientId = o, l.userId = o), r && (l.token = r, l.userKey = r), l[G.via] = Fe() ? e.source || "unknown" : "tunnel", l[G.localEndpoint] = Fe() ? "1" : "0";
		let u = Pe, f = Me || N || Pe, p = J(e.host || "").trim(), m = J(x || "").trim();
		return e.source === "page" && p && m && p.toLowerCase() === m.toLowerCase() && In(u) && (u = p, f = p), u && (l[G.route] = u, l[G.routeTarget] = f), wt() && (l[G.hop] = e.host || n || "unknown", l[G.host] = e.host || n || "", l[G.target] = N || "", l[G.targetPort] = je, l[G.viaPort] = e.port || "", l[G.protocol] = e.protocol || "https"), a && (l.clientAccessToken = a), i && (l.accessToken = i), {
			url: t,
			clientToken: r,
			accessToken: i,
			clientId: o,
			peerInstanceId: s,
			handshakeAuth: c,
			queryParams: l
		};
	}, F = (e, t, n, r) => {
		z = e, Z("connected", `candidate=${n + 1}/${M.length} candidate_url=${r} transport=${t.protocol} parallel=${bt}`), V = !1, dt = 0, Ct(), Q(!0), an(), z.on("disconnect", (e) => {
			rn(), Z("disconnected", `candidate=${n + 1}/${M.length} candidate_url=${r} reason=${e || "unknown"}`), V = !1, Q(!1), X();
			let t = ut;
			ut = !1;
			for (let [e, t] of K.entries()) clearTimeout(t.timeoutId), t.reject({
				ok: !1,
				error: `Disconnected before response for ${e}`
			}), K.delete(e);
			if (z = null, t) {
				dt = 0;
				return;
			}
			bn(e) && (Ae(), pt.length > 1 && E(`WebSocket disconnect reason "${e || "unknown"}", trying next candidate on reconnect`));
			let i = dt + 1, a = gt > 0;
			if (!yn(e) || a && i > gt) return;
			dt = i;
			let o = Math.min(_t * i, 5e3);
			Ct(), ft = globalThis.setTimeout(() => {
				ft = null, !(V || B || z && z.connected || z?.connecting) && (Z("auto-reconnect", `attempt=${a ? `${i}/${gt}` : `${i}/unlimited`} reason=${e || "unknown reason"}`), $());
			}, o);
		}), z.on("connect_error", (e) => {
			Z("socket-connect-error", `candidate=${n + 1}/${M.length} candidate_url=${r} reason=${e?.message || "unknown"}`), V = !1, X();
		}), z.on("voice_result", async (e) => {
			Zn(await Fn(e));
		}), z.on("voice_error", async (e) => {
			Zn(await Fn(e));
		}), z.on("clipboard:update", async (e) => {
			let t = await Fn(e);
			s(fn(t)) && sn(dn(t), { source: t?.source });
		}), z.on("data", async (e) => {
			let t = await Fn(e);
			Dn(t) && jn(t);
		}), z.on("message", async (e) => {
			let t = await Fn(e);
			Dn(t) && jn(t);
		}), z.on("network.fetch", async (e, t) => {
			let n = await Hn(e);
			typeof t == "function" && t(n);
		}), typeof window < "u" && (window.__socket = z);
	}, Ie = (t, n) => new Promise((r) => {
		if (e !== H) {
			r(!1);
			return;
		}
		let i = M.slice(t, t + bt);
		if (!i.length) {
			r(!1);
			return;
		}
		if (t === 0 && n === 0) {
			let e = ue();
			e && (e.classList.remove(Jn), e.textContent = "connecting…");
		}
		let s = !1, c = !1, l = 0, u = i.length, d = null, ee = null, f = (e, t, n, i, a) => {
			if (!c) {
				c = !0, s = !0;
				for (let t of [...U]) t !== e && (W(t), t.removeAllListeners(), t.close(), U.delete(t));
				W(e), U.delete(e), F(e, t, n, i), r(!0);
			}
		}, p = () => {
			c || s || (l++, !(l < u) && (c = !0, d ? Yn(d) : ee && Xn(ee), r(!1)));
		};
		for (let n = 0; n < i.length; n++) {
			let r = i[n], l = t + n, m = P(r), { url: h, handshakeAuth: te, queryParams: g } = m;
			Z("connecting", `batch=${t}-${t + u - 1} candidate=${l + 1}/${M.length} candidate_url=${h} transport=${r.protocol} source=${r.source} host=${r.host}:${r.port} target=${N}:${je}`);
			let _ = Ne(h, {
				auth: te,
				query: g,
				timeout: vt
			});
			U.add(_), _.__cwspProbeTimer = globalThis.setTimeout(() => {
				if (e !== H) {
					W(_), _.removeAllListeners(), _.close(), U.delete(_);
					return;
				}
				s || c || _.connected || (W(_), _.removeAllListeners(), _.close(), U.delete(_), Z("connect-failed", `candidate=${l + 1}/${M.length} candidate_url=${h} reason=probe-hard-timeout`), p());
			}, yt), _.on("connect", () => {
				if (W(_), e !== H) {
					_.removeAllListeners(), _.close(), U.delete(_);
					return;
				}
				if (s || c) {
					_.removeAllListeners(), _.close(), U.delete(_);
					return;
				}
				f(_, r, l, h, m);
			}), _.on("connect_error", (e) => {
				if (W(_), U.delete(_), s || c) {
					_.removeAllListeners(), _.close();
					return;
				}
				_.removeAllListeners(), _.close();
				let t = e?.description || e?.context || "", n = String(e?.message || e || ""), i = `${n} ${String(t)}`, u = r.protocol === "https" && o(r.host) && /xhr poll error|websocket error/i.test(n), f = /certificate|cert\.|ssl|tls|trust|ERR_CERT|ERR_SSL|handshake|authority|SELF_SIGNED|unknown.*cert|invalid.*cert|unable to verify|pkix|hostname|name mismatch/i.test(i), m = /refused|ECONNREFUSED|ENOTFOUND|timed out|timeout|unreachable|ERR_CONNECTION|ADDRESS_UNREACHABLE|NAME_NOT_RESOLVED|INTERNET_DISCONNECTED|network.*lost/i.test(i), te = y();
				u && !d && (f || !te && !m) && (d = h);
				let g = r.protocol === "https" && a(r.host) && !o(r.host) && r.host !== "127.0.0.1", ne = `${n} ${String(t)}`;
				if (g && /xhr poll error|websocket error|certificate|CERT|common name|ssl|tls|failed to fetch|name invalid/i.test(ne) && !ee) {
					let e = x && !a(x) && x !== "localhost" ? x : "";
					e && (ee = e);
				}
				r.privateLanHint && /cors|private network|address space|failed fetch/i.test(n) && Z("connect-failed", `candidate=${l + 1}/${M.length} candidate_url=${h} reason=${n} hint=private-network-cors`), Z("connect-failed", `candidate=${l + 1}/${M.length} candidate_url=${h} reason=${n} details=${t ? cn(t) : "none"}`), p();
			});
		}
	});
	(async () => {
		for (let t = 0; t < 3; t++) {
			for (let n = 0; n < M.length; n += bt) if (e !== H || await Ie(n, t)) return;
			t + 1 < 3 && (Z("retry", `round=${t + 2}/3 next=0`), await new Promise((e) => globalThis.setTimeout(e, 450)));
		}
		e === H && (Z("failed", "round=3/3 all-candidates"), V = !1, Q(!1), X());
	})();
}
function $n() {
	rn(), Ct(), H += 1, ut = !0;
	for (let e of [...U]) W(e), e.removeAllListeners(), e.close(), U.delete(e);
	if (V = !1, !z) {
		Q(!1), X();
		return;
	}
	E("Disconnecting WebSocket..."), z.disconnect(), z = null, typeof window < "u" && (window.__socket = null), Q(!1);
}
function er(e) {
	ct = e, X(), e && lt !== e && (lt && lt.removeEventListener("click", tr), lt = e, lt.addEventListener("click", tr));
}
function tr() {
	V || B || z && z.connected || z?.connecting ? $n() : $();
}
//#endregion
export { se as A, le as B, Oe as C, he as D, w as E, be as F, xe as I, pe as L, me as M, ye as N, _e as O, ve as P, fe as R, Ye as S, ge as T, oe as V, $e as _, er as a, it as b, Kt as c, Qn as d, Ut as f, Gn as g, qn as h, Bt as i, ce as j, de as k, qt as l, Kn as m, $n as n, Vt as o, Wn as p, Gt as r, Wt as s, $ as t, Ht as u, Qe as v, De as w, at as x, R as y, E as z };
