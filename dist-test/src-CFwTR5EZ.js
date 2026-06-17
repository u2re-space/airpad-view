//#region ../../projects/core.ts/src/runtime/dom-globals-polyfill.ts
function e() {
	let e = globalThis;
	if (typeof e.HTMLElement == "function") return;
	let t = class {}, n = (n) => {
		typeof e[n] != "function" && (e[n] = t);
	};
	n("EventTarget"), n("Node"), n("Element"), n("HTMLElement"), n("SVGElement"), n("Text"), n("Comment"), n("DocumentFragment"), n("ShadowRoot"), n("HTMLDocument"), n("Document"), n("HTMLBodyElement"), n("HTMLHeadElement"), n("HTMLCanvasElement"), n("HTMLInputElement"), n("HTMLLinkElement"), n("HTMLStyleElement"), n("HTMLPreElement"), n("HTMLDivElement"), n("CSSStyleRule"), n("CSSLayerBlockRule");
}
//#endregion
//#region ../../projects/core.ts/src/utils/PromiseUtils.ts
function t(e, t, n = "Operation timed out") {
	let r = new Promise((e, r) => {
		setTimeout(() => r(Error(n)), t);
	});
	return Promise.race([e, r]);
}
//#endregion
//#region ../../projects/core.ts/src/utils/Primitive.ts
var n = Symbol.for("@fix"), r = (e) => Array.isArray(e) || e instanceof Set || e instanceof Map, i = (e) => typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "bigint" || e === void 0 || e == null, a = (e, t) => i(e) ? t == "number" ? Number(e) || 0 : t == "string" ? String(e) || "" : t == "boolean" ? !!e : e : null, o = (e, t = "value") => (typeof e == "object" || typeof e == "function") && e != null && (t in e || e?.[t] != null), s = (e) => o(e, "value"), c = (e) => i(e) ? e : s(e) ? e?.value : e, l = (e, t) => e?.[n] ?? e ?? t ?? t, u = (e) => e != null && (typeof e == "object" || typeof e == "function") && (e instanceof WeakRef || typeof e?.deref == "function") ? u(e?.deref?.()) : e, d = (e) => {
	if (typeof e == "function" || e == null) return e;
	let t = function() {};
	return t[n] = e, t;
}, f = (e, t, n) => (e = u(e), e != null && (typeof e == "object" || typeof e == "function") ? e[t] = c(n = u(n)) : e), p = (e) => crypto?.getRandomValues ? crypto?.getRandomValues?.(e) : (() => {
	let t = new Uint8Array(e.length);
	for (let n = 0; n < e.length; n++) t[n] = Math.floor(Math.random() * 256);
	return t;
})(), ee = () => crypto?.randomUUID ? crypto?.randomUUID?.() : "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (e) => (e ^ p?.(new Uint8Array(1))?.[0] & 15 >> e / 4).toString(16)), te = (e) => e && e?.replace?.(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), ne = (e) => e && e?.replace?.(/-([a-z])/g, (e, t) => t.toUpperCase()), re = (e) => typeof CSSStyleValue < "u" && e instanceof CSSStyleValue, m = (e) => e != null && (typeof e == "boolean" ? e !== !1 : !0) && typeof e != "object" && typeof e != "function", ie = (e) => typeof e == "boolean" ? e ? "" : null : typeof e == "number" ? String(e) : e, h = Symbol.for("@trigger-lock"), ae = (e, t, n = "value") => {
	o(e, n) && (e[h] = !0);
	let r;
	try {
		r = t?.();
	} finally {
		o(e, n) && delete e[h];
	}
	return r;
}, oe = (e) => {
	if (typeof e != "string") return null;
	let t = [...e?.matchAll?.(/^\d+(\.\d+)?$/g)];
	if (t?.length != 1) return null;
	let n = parseFloat(t[0][0]);
	return !Number.isNaN(n) && Number.isFinite(n) ? n : null;
}, g = /^\d+$/g, _ = (e) => {
	if (typeof e != "string" || (e = e?.trim?.(), e == "" || e == null)) return null;
	let t = [...e?.matchAll?.(g)];
	if (t?.length != 1) return null;
	let n = parseInt(t[0][0]);
	return !Number.isNaN(n) && Number.isInteger(n) ? n : null;
}, se = (e) => typeof e == "string" ? _(e) != null : typeof e == "number" && Number.isInteger(e) && e >= 0, ce = (e) => Array.isArray(e) || typeof e == "object" && !!e && typeof e[Symbol.iterator] == "function", le = (e, t, n) => {
	e = e instanceof WeakRef ? e.deref() : e;
	let r = [...Object.entries(n)]?.map?.(([n, r]) => e?.[t]?.call?.(e, n, r));
	return () => {
		r?.forEach?.((e) => e?.());
	};
}, v = (e) => e instanceof WeakRef || typeof e?.deref == "function", ue = (e) => e == null || v(e) ? e : typeof e == "function" || typeof e == "object" ? new WeakRef(e) : e, y = (e) => (typeof e == "object" || typeof e == "function") && (e?.value != null || e != null && "value" in e), b = (e) => e != null && (typeof e == "object" || typeof e == "function"), x = (e) => s(e) ? e?.value : e, S = (e, t) => e instanceof Promise || typeof e?.then == "function" ? e?.then?.(t) : t?.(e), C = (e, t) => e instanceof Promise || typeof e?.then == "function" ? e?.then?.(t) : t?.(e), w = function(e) {
	return (t) => {
		e[h] = !0;
		let n;
		try {
			n = t?.();
		} finally {
			e[h] = !1;
		}
		return n;
	};
}, T = (e) => Array.isArray(e) ? e?.flatMap?.((e) => Array.isArray(e) ? T(e) : e) : e, E = (e) => T(e)?.every?.(D), D = (e) => i(e) || typeof SharedArrayBuffer == "function" && e instanceof SharedArrayBuffer || O(e) || Array.isArray(e) && E(e), O = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), de = (e) => i(e) || typeof ArrayBuffer == "function" && e instanceof ArrayBuffer || typeof MessagePort == "function" && e instanceof MessagePort || typeof ReadableStream == "function" && e instanceof ReadableStream || typeof WritableStream == "function" && e instanceof WritableStream || typeof TransformStream == "function" && e instanceof TransformStream || typeof ImageBitmap == "function" && e instanceof ImageBitmap || typeof VideoFrame == "function" && e instanceof VideoFrame || typeof OffscreenCanvas == "function" && e instanceof OffscreenCanvas || typeof RTCDataChannel == "function" && e instanceof RTCDataChannel || typeof AudioData == "function" && e instanceof AudioData || typeof WebTransportReceiveStream == "function" && e instanceof WebTransportReceiveStream || typeof WebTransportSendStream == "function" && e instanceof WebTransportSendStream || typeof WebTransportReceiveStream == "function" && e instanceof WebTransportReceiveStream, k = (e) => {
	switch (typeof e) {
		case "number": return 0;
		case "string": return "";
		case "boolean": return !1;
		case "object": return null;
		case "function": return null;
		case "symbol": return null;
		case "bigint": return 0n;
	}
}, A = (e) => typeof e?.[Symbol.iterator] == "function", fe = (e) => [
	"symbol",
	"string",
	"number"
].indexOf(typeof e) >= 0, j = (e, t, n = null) => {
	let r = n != null && (typeof e == "object" || typeof e == "function") ? e?.[n] ?? e : e, i = [];
	t instanceof Set || t instanceof Map || Array.isArray(t) || A(t) ? i = (r instanceof Set || r instanceof WeakSet ? t?.values?.() : t?.entries?.()) || (Array.isArray(t) || A(t) ? t : []) : (typeof t == "object" || typeof t == "function") && (i = r instanceof Set || r instanceof WeakSet ? Object.values(t) : Object.entries(t));
	let a = [];
	Array.isArray(r) ? a = r.entries() : r instanceof Map || r instanceof WeakMap ? a = r?.entries?.() : r instanceof Set || r instanceof WeakSet ? a = r?.values?.() : (typeof r == "object" || typeof r == "function") && (a = Object.entries(r));
	let o = new Set(Array.from(i).map((e) => e?.[0])), s = new Set(Array.from(a).map((e) => e?.[0])), c = o?.difference?.(s);
	if (Array.isArray(r)) {
		let e = r.filter((e, t) => !c.has(t));
		r.splice(0, r.length), r.push(...e);
	} else if (r instanceof Map || r instanceof Set || r instanceof WeakMap || r instanceof WeakSet) for (let e of c) r.delete(e);
	else if (typeof r == "function" || typeof r == "object") for (let e of c) delete r[e];
	return r;
}, M = (e, t, n = null, r = !0, i = "id") => {
	let a = n != null && (typeof e == "object" || typeof e == "function") ? e?.[n] ?? e : e, o = null;
	if (r && j(a, t), t instanceof Set || t instanceof Map || Array.isArray(t) || A(t) ? o = (a instanceof Set || a instanceof WeakSet ? t?.values?.() : t?.entries?.()) || (Array.isArray(t) || A(t) ? t : []) : (typeof t == "object" || typeof t == "function") && (o = a instanceof Set || a instanceof WeakSet ? Object.values(t) : Object.entries(t)), a && o && (typeof o == "object" || typeof o == "function")) {
		if (a instanceof Map || a instanceof WeakMap) {
			for (let e of o) a.set(...e);
			return a;
		}
		if (a instanceof Set || a instanceof WeakSet) {
			for (let e of o) {
				let t = e?.[i] ? Array.from(a?.values?.() || []).find((t) => !L?.(t?.[i], e?.[i])) : null;
				t == null ? a.add(e) : M(t, e, null, r, i);
			}
			return a;
		}
		if (typeof a == "object" || typeof a == "function") {
			if (Array.isArray(a) || A(a)) {
				let e = 0;
				for (let t of o) e < a.length ? a[e++] = t?.[1] : a?.push?.(t?.[1]);
				return a;
			}
			return Object.assign(a, Object.fromEntries([...o || []].filter((e) => typeof e != "symbol")));
		}
	}
	return n == null ? typeof t == "object" || typeof t == "function" ? Object.assign(e, t) : t : (Reflect.set(e, n, t), e);
}, N = (e, t) => R.getOrInsert(e, /* @__PURE__ */ new WeakMap()).getOrInsert(t, t?.bind?.(e)), P = (e, t) => (typeof t == "function" ? N(e, t) : t) ?? t, F = (e, t, n, r) => {
	if (t == Symbol.iterator) return I(e, n, r);
	if (t == null || typeof t == "symbol" || typeof t == "object" || typeof t == "function") return;
	let i = (e, ...t) => {
		if (e != null) return n?.(e, ...t);
	};
	if (e instanceof Map || e instanceof WeakMap) {
		if (e.has(t)) return i?.(e.get(t), t, null, "@set");
	} else if (e instanceof Set || e instanceof WeakSet) {
		if (e.has(t)) return i?.(t, t, null, "@add");
	} else if (Array.isArray(e) && typeof t == "string" && [...t?.matchAll?.(/^\d+$/g)]?.length == 1 && Number.isInteger(typeof t == "string" ? parseInt(t) : t)) {
		let n = typeof t == "string" ? parseInt(t) : t;
		return i?.(e?.[n], n, null, "@add");
	} else if (typeof e == "function" || typeof e == "object") return i?.(e?.[t], t, null, "@set");
}, I = (e, t, n) => {
	if (e == null) return;
	let r = [];
	if (e instanceof Set || e instanceof Map || typeof e?.keys == "function") return [...e?.keys?.() || r]?.forEach?.((r) => F(e, r, t, n));
	if (Array.isArray(e) || A(e)) return [...e]?.forEach?.((r, i) => F(e, i, t, n));
	if (typeof e == "object" || typeof e == "function") return [...Object.keys(e) || r]?.forEach?.((r) => F(e, r, t, n));
}, L = (e, t) => e == null && t == null ? !1 : e == null || t == null ? !0 : typeof e == "boolean" && typeof t == "boolean" ? e != t : typeof e == "number" && typeof t == "number" ? !(e == t || Math.abs(e - t) < 1e-9) : typeof e == "string" && typeof t == "string" ? e != "" && t != "" && e != t || e !== t : typeof e == typeof t && e && t && e != t || e !== t, R = /* @__PURE__ */ new WeakMap(), z = (e, t) => {
	let n = e == null || e < 0 || typeof e != "number" || e == Symbol.iterator || (t == null ? !1 : e >= (t?.length || 0));
	return t == null ? !1 : Array.isArray(t) && n;
}, B = (e, t, n) => {
	if (Array.isArray(e)) return e.every(D) ? e.map(t) : e.map((n, r) => B(n, t, [e, r]));
	if (e instanceof Map) {
		let n = Array.from(e.entries());
		return n.map(([e, t]) => t).every(D) ? new Map(n.map(([n, r]) => [n, t(r, n, e)])) : new Map(n.map(([n, r]) => [n, B(r, t, [e, n])]));
	}
	if (e instanceof Set) {
		let n = Array.from(e.entries()), r = n.map(([e, t]) => t);
		return n.every(D) ? new Set(r.map(t)) : new Set(r.map((n) => B(n, t, [e, n])));
	}
	if (typeof e == "object" && e?.constructor == Object && Object.prototype.toString.call(e) == "[object Object]") {
		let n = Array.from(Object.entries(e));
		return n.map(([e, t]) => t).every(D) ? Object.fromEntries(n.map(([n, r]) => [n, t(r, n, e)])) : Object.fromEntries(n.map(([n, r]) => [n, B(r, t, [e, n])]));
	}
	return t(e, n?.[1] ?? "", n?.[0] ?? null);
}, V = /* @__PURE__ */ new WeakMap(), H = /* @__PURE__ */ new WeakMap(), U = (e, t) => e instanceof Promise || typeof e?.then == "function" ? V?.has?.(e) ? t(V?.get?.(e)) : Promise.try?.(async () => {
	let t = await e;
	return V?.set?.(e, t), t;
})?.then?.(t) : t(e), pe = class {
	#e;
	#t;
	constructor(e, t) {
		this.#e = e, this.#t = t;
	}
	defineProperty(e, t, n) {
		return l(e) instanceof Promise ? Reflect.defineProperty(e, t, n) : U(l(e), (e) => Reflect.defineProperty(e, t, n));
	}
	deleteProperty(e, t) {
		return l(e) instanceof Promise ? Reflect.deleteProperty(e, t) : U(l(e), (e) => Reflect.deleteProperty(e, t));
	}
	getPrototypeOf(e) {
		return l(e) instanceof Promise ? Reflect.getPrototypeOf(e) : U(l(e), (e) => Reflect.getPrototypeOf(e));
	}
	setPrototypeOf(e, t) {
		return l(e) instanceof Promise ? Reflect.setPrototypeOf(e, t) : U(l(e), (e) => Reflect.setPrototypeOf(e, t));
	}
	isExtensible(e) {
		return l(e) instanceof Promise ? Reflect.isExtensible(e) : U(l(e), (e) => Reflect.isExtensible(e));
	}
	preventExtensions(e) {
		return l(e) instanceof Promise ? Reflect.ownKeys(e) : U(l(e), (e) => Reflect.preventExtensions(e));
	}
	ownKeys(e) {
		let t = l(e);
		return t instanceof Promise ? Object.keys(t) : U(t, (e) => (typeof e == "object" || typeof e == "function") && e != null ? Object.keys(e) : []) ?? [];
	}
	getOwnPropertyDescriptor(e, t) {
		return l(e) instanceof Promise ? Reflect.getOwnPropertyDescriptor(e, t) : U(l(e), (e) => Reflect.getOwnPropertyDescriptor(e, t));
	}
	construct(e, t, n) {
		return U(l(e), (e) => Reflect.construct(e, t, n));
	}
	has(e, t) {
		return l(e) instanceof Promise ? Reflect.has(e, t) : U(l(e), (e) => Reflect.has(e, t));
	}
	get(e, t, n) {
		if (e = l(e), t == "promise") return e;
		if (t == "resolve" && this.#e) return (...e) => {
			let t = this.#e?.(...e);
			return this.#e = null, t;
		};
		if (t == "reject" && this.#t) return (...e) => {
			let t = this.#t?.(...e);
			return this.#t = null, t;
		};
		if (t == "then" || t == "catch" || t == "finally") {
			if (e instanceof Promise) return e?.[t]?.bind?.(e);
			{
				let n = Promise.try(() => e);
				return n?.[t]?.bind?.(n);
			}
		}
		let r;
		return r = V?.has?.(e) && (r = V?.get?.(e))?.[t] != null ? V?.get?.(e)?.[t] : W(U(e, async (r) => {
			if (l(r) instanceof Promise) return Reflect.get(r, t, n);
			if (i(r)) return t == Symbol.toPrimitive || t == Symbol.toStringTag ? r : void 0;
			let a;
			try {
				a = Reflect.get(r, t, n);
			} catch {
				a = e?.[t];
			}
			return typeof a == "function" ? a?.bind?.(r) : a;
		})), t == Symbol.toStringTag ? i(r) ? String(r ?? "") || "" : r?.[Symbol.toStringTag]?.() || String(r ?? "") || "" : t == Symbol.toPrimitive ? (e) => {
			if (i(r)) return a(r, e);
		} : r;
	}
	set(e, t, n) {
		return U(l(e), (e) => Reflect.set(e, t, n));
	}
	apply(e, t, n) {
		if (this.#e) {
			let e = this.#e?.(...n);
			return this.#e = null, e;
		}
		return U(l(e, this.#e), (e) => {
			if (typeof e == "function") return l(e) instanceof Promise, Reflect.apply(e, t, n);
		});
	}
};
function W(e, t, n) {
	return e instanceof Promise || typeof e?.then == "function" ? V?.has?.(e) ? V?.get?.(e) : (H?.has?.(e) || e?.then?.((t) => V?.set?.(e, t)), H?.getOrInsertComputed?.(e, () => new Proxy(d(e), new pe(t, n)))) : e;
}
//#endregion
//#region ../../projects/core.ts/src/utils/Convert.ts
var G = (e, t, n = 0) => {
	let r = [...t], i = [...e];
	return n % 2 && (i.reverse(), r.reverse()), [(n == 0 || n == 3 ? i[0] : r[0] - i[0]) || 0, (n == 0 || n == 1 ? i[1] : r[1] - i[1]) || 0];
}, K = (e, t = [4, 8]) => {
	if (Array.isArray(e) && e.length >= 2) return [Math.max(1, Math.floor(Number(e[0]) || t[0])), Math.max(1, Math.floor(Number(e[1]) || t[1]))];
	if (e && typeof e == "object") {
		let n = e;
		return [Math.max(1, Math.floor(Number(n.columns) || t[0])), Math.max(1, Math.floor(Number(n.rows) || t[1]))];
	}
	return [t[0], t[1]];
}, q = (e, t) => {
	let [n, r] = K(t);
	return [Math.max(0, Math.min(n - 1, Math.floor(Number(e[0]) || 0))), Math.max(0, Math.min(r - 1, Math.floor(Number(e[1]) || 0)))];
}, me = (e, t, n, r, i) => {
	let a = K(n), o = Math.max(1, t[0] || 1), s = Math.max(1, t[1] || 1), c = G(e, [o, s], r), l = {
		item: i?.redirect?.item ?? { id: "" },
		list: i?.redirect?.list ?? [],
		items: i?.redirect?.items ?? /* @__PURE__ */ new Map(),
		layout: a,
		size: [o, s]
	}, u = X(c, l, r);
	return q(Y((i?.mode ?? "floor") === "round" ? [Math.round(u[0]), Math.round(u[1])] : [Math.floor(u[0]), Math.floor(u[1])], l), a);
}, J = (e) => e == null ? [] : Array.isArray(e) ? e : e instanceof Map ? Array.from(e.values()) : e instanceof Set || typeof e[Symbol.iterator] == "function" ? Array.from(e) : [], Y = (e, t) => {
	let n = K(t?.layout ?? [4, 8]), r = {
		...t,
		layout: n
	}, i = J(r?.items), a = r?.item || {}, o = (e) => i.filter((e) => !(e == a || e?.id == a?.id)).some((t) => (t?.cell?.[0] || 0) == (e[0] || 0) && (t?.cell?.[1] || 0) == (e[1] || 0)), s = [...e];
	if (!o(s)) return [...s];
	let c = n[0] || 4, l = n[1] || 8, u = ([
		[s[0] + 1, s[1]],
		[s[0] - 1, s[1]],
		[s[0], s[1] + 1],
		[s[0], s[1] - 1]
	].filter((e) => e[0] >= 0 && e[0] < c && e[1] >= 0 && e[1] < l) || []).find((e) => !o(e));
	if (u) return [...u];
	let d = 0, f = !0, p = [...s];
	for (; f && d++ < c * l;) {
		if (!(f = o(p))) return [...p];
		p[0]++, p[0] >= c && (p[0] = 0, p[1]++, p[1] >= l && (p[1] = 0));
	}
	return [...s];
}, X = (e, t, n = 0) => {
	let r = [...t.size], i = [...e], a = K(t.layout ?? [4, 8]);
	n % 2 && r.reverse();
	let o = [a[0] / r[0], a[1] / r[1]];
	return [i[0] * o[0], i[1] * o[1]];
}, Z = (e) => {
	let t = String(e ?? "").trim();
	return t ? (t.startsWith("/") ? t : `/${t}`).replace(/\/+/g, "/") : "/";
}, Q = (e) => {
	let t = Z(e);
	return t === "/user" || t.startsWith("/user/");
}, $ = (e) => {
	let t = Z(e);
	return t === "/user" ? "/" : t.startsWith("/user/") ? t.slice(5) || "/" : t;
}, he = (e) => {
	let t = Z(e), n = $(t);
	return Q(t) ? Array.from(new Set([n, t])) : [n];
};
//#endregion
//#region ../../projects/core.ts/src/index.ts
e();
//#endregion
export { ne as $, ee as A, s as B, j as C, f as D, c as E, d as F, b as G, D as H, p as I, v as J, r as K, x as L, se as M, k as N, h as O, u as P, re as Q, le as R, M as S, n as T, de as U, ce as V, E as W, m as X, O as Y, y as Z, B as _, X as a, a as at, fe as b, Y as c, l as ct, W as d, w as et, P as f, F as g, I as h, q as i, ue as it, te as j, g as k, me as l, T as lt, R as m, $ as n, S as nt, J as o, _ as ot, N as p, i as q, he as r, C as rt, K as s, oe as st, Q as t, ie as tt, G as u, t as ut, z as v, ae as w, L as x, A as y, o as z };
