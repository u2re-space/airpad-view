import { A as e, B as t, C as n, D as r, E as i, F as a, H as o, I as s, L as c, M as l, N as u, O as d, P as f, R as p, S as m, T as ee, V as h, _ as g, b as te, c as ne, d as _, f as re, g as v, j as y, k as b, l as ie, m as x, o as ae, p as oe, s as se, u as ce, v as le, w as ue, x as de, y as fe, z as pe } from "./src-CJkOASls.js";
import { t as S } from "./jsox-D0iVxCRU.js";
//#region ../../projects/dom.ts/src/agate/Properties.ts
var me = /* @__PURE__ */ new Set();
[
	{
		name: "--screen-width",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	},
	{
		name: "--screen-height",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	},
	{
		name: "--visual-width",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	},
	{
		name: "--visual-height",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	},
	{
		name: "--clip-ampl",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	},
	{
		name: "--clip-freq",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	},
	{
		name: "--avail-width",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	},
	{
		name: "--avail-height",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	},
	{
		name: "--pixel-ratio",
		syntax: "<number>",
		inherits: !0,
		initialValue: "1"
	},
	{
		name: "--percent",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	},
	{
		name: "--percent-x",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	},
	{
		name: "--percent-y",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	},
	{
		name: "--scroll-left",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	},
	{
		name: "--scroll-top",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	},
	{
		name: "--drag-x",
		syntax: "<length>",
		inherits: !1,
		initialValue: "0px"
	},
	{
		name: "--drag-y",
		syntax: "<length>",
		inherits: !1,
		initialValue: "0px"
	},
	{
		name: "--grid-r",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--grid-c",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--resize-x",
		syntax: "<length>",
		inherits: !1,
		initialValue: "0px"
	},
	{
		name: "--resize-y",
		syntax: "<length>",
		inherits: !1,
		initialValue: "0px"
	},
	{
		name: "--shift-x",
		syntax: "<length>",
		inherits: !1,
		initialValue: "0px"
	},
	{
		name: "--shift-y",
		syntax: "<length>",
		inherits: !1,
		initialValue: "0px"
	},
	{
		name: "--cs-grid-r",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--cs-grid-c",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--cs-p-grid-r",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--cs-p-grid-c",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--os-grid-r",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--os-grid-c",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--rv-grid-r",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--rv-grid-c",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--cell-x",
		syntax: "<integer>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--cell-y",
		syntax: "<integer>",
		inherits: !1,
		initialValue: "0"
	}
].forEach((e) => {
	if (typeof CSS > "u" || typeof CSS?.registerProperty != "function") return;
	let t = String(e?.name || "").trim();
	if (!(!t || me.has(t))) try {
		CSS.registerProperty(e);
	} catch (e) {
		String(e?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(e);
	} finally {
		me.add(t);
	}
});
//#endregion
//#region ../../projects/core.ts/src/utils/Convert.ts
var he = (e, t, n = 0) => {
	let r = [...t], i = [...e];
	return n % 2 && (i.reverse(), r.reverse()), [(n == 0 || n == 3 ? i[0] : r[0] - i[0]) || 0, (n == 0 || n == 1 ? i[1] : r[1] - i[1]) || 0];
}, ge = (e, t = [4, 8]) => {
	if (Array.isArray(e) && e.length >= 2) return [Math.max(1, Math.floor(Number(e[0]) || t[0])), Math.max(1, Math.floor(Number(e[1]) || t[1]))];
	if (e && typeof e == "object") {
		let n = e;
		return [Math.max(1, Math.floor(Number(n.columns) || t[0])), Math.max(1, Math.floor(Number(n.rows) || t[1]))];
	}
	return [t[0], t[1]];
}, _e = (e, t) => {
	let [n, r] = ge(t);
	return [Math.max(0, Math.min(n - 1, Math.floor(Number(e[0]) || 0))), Math.max(0, Math.min(r - 1, Math.floor(Number(e[1]) || 0)))];
}, ve = (e, t, n, r, i) => {
	let a = ge(n), o = Math.max(1, t[0] || 1), s = Math.max(1, t[1] || 1), c = he(e, [o, s], r), l = {
		item: i?.redirect?.item ?? { id: "" },
		list: i?.redirect?.list ?? [],
		items: i?.redirect?.items ?? /* @__PURE__ */ new Map(),
		layout: a,
		size: [o, s]
	}, u = xe(c, l, r);
	return _e(be((i?.mode ?? "floor") === "round" ? [Math.round(u[0]), Math.round(u[1])] : [Math.floor(u[0]), Math.floor(u[1])], l), a);
}, ye = (e) => e == null ? [] : Array.isArray(e) ? e : e instanceof Map ? Array.from(e.values()) : e instanceof Set || typeof e[Symbol.iterator] == "function" ? Array.from(e) : [], be = (e, t) => {
	let n = ge(t?.layout ?? [4, 8]), r = {
		...t,
		layout: n
	}, i = ye(r?.items), a = r?.item || {}, o = (e) => i.filter((e) => !(e == a || e?.id == a?.id)).some((t) => (t?.cell?.[0] || 0) == (e[0] || 0) && (t?.cell?.[1] || 0) == (e[1] || 0)), s = [...e];
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
}, xe = (e, t, n = 0) => {
	let r = [...t.size], i = [...e], a = ge(t.layout ?? [4, 8]);
	n % 2 && r.reverse();
	let o = [a[0] / r[0], a[1] / r[1]];
	return [i[0] * o[0], i[1] * o[1]];
}, Se = (e) => {
	let t = String(e ?? "").trim();
	return t ? (t.startsWith("/") ? t : `/${t}`).replace(/\/+/g, "/") : "/";
}, Ce = (e) => {
	let t = Se(e);
	return t === "/user" || t.startsWith("/user/");
}, C = (e) => {
	let t = Se(e);
	return t === "/user" ? "/" : t.startsWith("/user/") ? t.slice(5) || "/" : t;
}, we = (e) => {
	let t = Se(e), n = C(t);
	return Ce(t) ? Array.from(new Set([n, t])) : [n];
}, Te = () => ({
	didTimeout: !1,
	timeRemaining: () => 0
}), Ee = (e, t = 1e3) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e(Te()), 0), De = () => {
	let e = {
		canceled: !1,
		rAFs: /* @__PURE__ */ new Set(),
		last: null,
		cancel() {
			return this.canceled = !0, cancelAnimationFrame(this.last), this;
		},
		shedule(e) {
			return this.rAFs.add(e), this;
		}
	};
	return (async () => {
		for (; !e?.canceled;) await Promise.all((e?.rAFs?.values?.() ?? [])?.map?.((e) => Promise.try(e)?.catch?.(console.warn.bind(console)))), e.rAFs?.clear?.(), typeof requestAnimationFrame < "u" ? await new Promise((t) => {
			e.last = requestAnimationFrame(t);
		}) : await new Promise((e) => {
			setTimeout(e, 16);
		});
	})(), e;
}, Oe = (e = De()) => (t) => e.shedule(t);
typeof document < "u" && document?.documentElement;
var ke = (e, t = {}) => {
	if (!(!t || typeof t != "object" || !e)) return Array.from(Object.entries(t)).map(([t, n]) => {
		let r = e.getAttribute(t);
		n == null ? e.removeAttribute(t) : n != r && e.setAttribute(t, r == "" ? n ?? r : r ?? n);
	});
}, Ae = /* @__PURE__ */ new Map(), je = (e, t = 1e3, ...n) => {
	let r = {
		running: !0,
		cancel: () => {
			r.running = !1;
		}
	};
	return Ee(async () => {
		if (!(!e || typeof e != "function")) {
			for (; r.running;) await Promise.all([Promise.try(e, ...n), new Promise((e) => setTimeout(e, t))]).catch?.(console.warn.bind(console)), await Promise.any([new Promise((e) => Ee(e, t)), new Promise((e) => setTimeout(e, t))]);
			r.cancel = () => {};
		}
	}, { timeout: t }), r?.cancel;
};
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
	for (;;) Ae.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var Me = (e, t, n) => {
	t != null && e.checked != t && (e?.type == "checkbox" || e?.type == "radio" && !e?.checked ? (e?.click?.(), n?.preventDefault?.()) : (e.checked = !!t, e?.dispatchEvent?.(new Event("change", {
		bubbles: !0,
		cancelable: !0
	}))));
}, w = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement) ? e : null, Ne = (e, t) => e == null || t == null ? -1 : Array.from(e?.childNodes ?? [])?.indexOf?.(t) ?? -1, Pe = (e) => {
	if (e == ":fragment:") return document.createDocumentFragment();
	let t = document.createElement.bind(document);
	for (var n = t("div"), r, i = ""; e && (r = e.match("^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)([\"'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]"));) r[1] && (n = t(r[1])), r[2] && (n.id = r[2]), r[3] && (i += " " + r[3]), r[4] && n.setAttribute(r[4], r[7] || ""), e = e.slice(r[0].length);
	return i && (n.className = i.slice(1)), n;
}, T = (e) => e != null && (e instanceof Node || e instanceof Text || e instanceof Element || e instanceof Comment || e instanceof HTMLElement || e instanceof DocumentFragment) ? e : null, Fe = (e, t) => {
	for (; e;) {
		if (!(e?.element ?? e)) return !1;
		if ((e?.element ?? e) === (t?.element ?? t)) return !0;
		e = e.parentElement ?? (e.parentNode == e?.getRootNode?.({ composed: !0 }) ? e?.getRootNode?.({ composed: !0 })?.host : e?.parentNode);
	}
}, Ie = {};
function E(e, t, n, r = Ie) {
	e?.addEventListener?.(t, n, r);
	let i = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
	return () => i?.deref?.()?.removeEventListener?.(t, n, r);
}
function Le(e, t, n, r = Ie) {
	e?.removeEventListener?.(t, n, r);
}
var Re = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)]?.map?.(([t, n]) => Array.isArray(n) ? E(e, t, ...n) : E(e, t, n))), ze = (e, t) => {
	if (t) {
		let n = t;
		return n = t instanceof Map ? [...t.entries()] : [...Object.entries(t)], n.map(([t, n]) => ((d(n) ? [...n] : n) ?? [])?.map?.((n) => E(e, t, n)));
	}
}, Be = (e, t, n) => {
	if (t == null || !(t instanceof Node) && t?.element == null) return !1;
	if (e == t || (e?.element ?? e) == (t?.element ?? t)) return !0;
	if (n?.composedPath && typeof n.composedPath == "function") {
		let r = n.composedPath(), i = e?.element ?? e, a = t?.element ?? t;
		if (r.includes(i) && r.includes(a)) {
			let e = r.indexOf(i), t = r.indexOf(a);
			if (t >= 0 && e >= 0 && t < e) return !0;
		}
	}
	return !!(e?.contains?.(t?.element ?? t) || e?.getRootNode({ composed: !0 })?.host == (t?.element ?? t));
}, Ve = (e, t, n) => {
	if (n?.composedPath && typeof n.composedPath == "function") {
		let e = n.composedPath();
		for (let n of e) if ((n instanceof HTMLElement || n instanceof Element) && n.matches?.(t)) return n;
	}
	let r = e?.matches?.(t) ? e : null, i = (e?.getRootNode({ composed: !0 }) ?? e?.parentElement?.getRootNode({ composed: !0 }))?.host, a = i?.matches?.(t) ? i : null, o = e?.closest?.(t) ?? r?.closest?.(t) ?? a?.closest?.(t) ?? null;
	return r ?? o ?? a;
}, He = (e, t, n = "parent") => {
	if (!e || e.checkVisibility && !e.checkVisibility({
		checkOpacity: !0,
		checkVisibilityCSS: !0
	}) || !e.checkVisibility && e.offsetParent === null && e.style.position !== "fixed") return !1;
	let r = document.activeElement;
	for (; r && r.shadowRoot && r.shadowRoot.activeElement;) r = r.shadowRoot.activeElement;
	let i = r === e || Fe(r, e), a = e.matches(":hover");
	if (!i && !a && !t) return !1;
	if (t) {
		if (typeof t == "string") {
			if (n === "parent") return !!Ve(e, t);
			{
				let n = !!Ve(i ? r : e.querySelector(":hover") || e, t);
				return e?.querySelector?.(t) != null || e?.matches?.(t) || n;
			}
		} else if (t instanceof HTMLElement) return n === "parent" ? Fe(e, t) || !1 : Fe(t, e) || !1;
	}
	return !0;
}, Ue = /* @__PURE__ */ new WeakMap(), We = (e = document.documentElement) => Ue.getOrInsertComputed(e, () => {
	let t = (e?.matches?.(".ui-orientbox") ? e : null) || e?.closest?.(".ui-orientbox") || document.body;
	if (t?.zoom) return t?.zoom || 1;
	if (e?.currentCSSZoom) return e?.currentCSSZoom || 1;
}), Ge = (e = document.documentElement) => (e?.currentCSSZoom == null ? We(e) : 1) || 1, Ke = (e = document.documentElement) => {
	let t = (e?.matches?.("[orient], [data-mixin=\"ui-orientbox\"]") ? e : null) || e?.closest?.("[orient], [data-mixin=\"ui-orientbox\"]") || e;
	return t?.hasAttribute?.("orient") ? parseInt(t?.getAttribute?.("orient") || "0") || 0 : t?.orient || 0;
};
(() => {
	let e = typeof matchMedia < "u" ? matchMedia("(orientation: landscape)")?.matches : !1, t = typeof window < "u" ? window.visualViewport : null, n = t ? {
		"--vv-width": `${t.width}px`,
		"--vv-height": `${t.height}px`,
		"--vv-offset-left": `${t.offsetLeft}px`,
		"--vv-offset-top": `${t.offsetTop}px`,
		"--vv-scale": String(t.scale ?? 1)
	} : {
		"--vv-width": typeof window < "u" ? `${window.innerWidth}px` : "0px",
		"--vv-height": typeof window < "u" ? `${window.innerHeight}px` : "0px",
		"--vv-offset-left": "0px",
		"--vv-offset-top": "0px",
		"--vv-scale": "1"
	};
	if (typeof screen < "u") {
		let t = screen?.availWidth + "px", r = screen?.availHeight + "px";
		return {
			"--screen-width": Math.min(screen?.width, screen?.availWidth) + "px",
			"--screen-height": Math.min(screen?.height, screen?.availHeight) + "px",
			"--avail-width": e ? r : t,
			"--avail-height": e ? t : r,
			"--view-height": Math.min(screen?.availHeight, window?.innerHeight) + "px",
			"--pixel-ratio": String(devicePixelRatio || 1),
			...n
		};
	}
	return {
		"--screen-width": "0px",
		"--screen-height": "0px",
		"--avail-width": "0px",
		"--avail-height": "0px",
		"--view-height": "0px",
		"--pixel-ratio": "1",
		...n
	};
})();
var qe = {
	"portrait-primary": 0,
	"landscape-primary": 1,
	"portrait-secondary": 2,
	"landscape-secondary": 3
}, Je = () => {
	let e = screen?.orientation?.type || "portrait-primary";
	return globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches || (matchMedia("(orientation: portrait)").matches ? e = e.replace("landscape", "portrait") : matchMedia("(orientation: landscape)").matches && (e = e.replace("portrait", "landscape"))), e;
};
new OffscreenCanvas(1, 1).getContext("2d");
//#endregion
//#region ../../projects/dom.ts/src/agate/LauncherGrid.ts
var Ye = (e, t) => {
	let n = parseInt(e.getAttribute("data-grid-columns") || "", 10), r = parseInt(e.getAttribute("data-grid-rows") || "", 10), i = ge(t ?? [4, 8]);
	return [Number.isFinite(n) && n > 0 ? n : i[0], Number.isFinite(r) && r > 0 ? r : i[1]];
}, Xe = (e, t, n, r = "floor") => {
	if (!e) return [0, 0];
	let i = e.getBoundingClientRect?.();
	if (!i) return [0, 0];
	let a = Ye(e, n?.layout), o = Ke(e), s = globalThis.getComputedStyle?.(e), c = parseFloat(s?.paddingLeft) || 0, l = parseFloat(s?.paddingTop) || 0, u = parseFloat(s?.paddingRight) || 0, d = parseFloat(s?.paddingBottom) || 0, f = Math.max(1, (i.width || e.clientWidth || 1) - c - u), p = Math.max(1, (i.height || e.clientHeight || 1) - l - d);
	return ve([(t?.[0] || 0) - i.left - c, (t?.[1] || 0) - i.top - l], [f, p], a, o, {
		mode: r,
		redirect: {
			item: n?.item,
			list: n?.list,
			items: n?.items
		}
	});
}, Ze = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), Qe = (e, t, n) => {
	if (typeof e?.selector == "string") return $e(e, e?.selector, t, n);
	let r = new Set((t.split(",") || [t]).map((e) => e.trim())), i = new MutationObserver((e, t) => {
		for (let i of e) i.attributeName && r.has(i.attributeName) && n(i, t);
	});
	return (e?.element ?? e) instanceof Node && i.observe(e = Ze(e), {
		attributes: !0,
		attributeOldValue: !0,
		attributeFilter: [...r]
	}), r.forEach((t) => n({
		target: e,
		type: "attributes",
		attributeName: t,
		oldValue: e?.getAttribute?.(t)
	}, i)), i;
}, $e = (e, t, n, r) => {
	let i = new Set([...n.split(",") || [n]].map((e) => e.trim())), a = new MutationObserver((e, n) => {
		for (let a of e) if (a.type == "childList") {
			let e = Array.from(a.addedNodes) || [], o = Array.from(a.removedNodes) || [];
			e.push(...Array.from(a.addedNodes || []).flatMap((e) => Array.from(e?.querySelectorAll?.(t) || []))), o.push(...Array.from(a.removedNodes || []).flatMap((e) => Array.from(e?.querySelectorAll?.(t) || []))), [...new Set(e)]?.filter((e) => e?.matches?.(t))?.map?.((e) => {
				i.forEach((t) => {
					r({
						target: e,
						type: "attributes",
						attributeName: t,
						oldValue: e?.getAttribute?.(t)
					}, n);
				});
			});
		} else a.target?.matches?.(t) && a.attributeName && i.has(a.attributeName) && r(a, n);
	});
	return a.observe(e = Ze(e), {
		attributeOldValue: !0,
		attributes: !0,
		attributeFilter: [...i],
		childList: !0,
		subtree: !0,
		characterData: !0
	}), [...e.querySelectorAll(t)].map((e) => i.forEach((t) => r({
		target: e,
		type: "attributes",
		attributeName: t,
		oldValue: e?.getAttribute?.(t)
	}, a))), a;
}, et = (e, t = "*", n = (e, t) => {}) => {
	let r = (e) => {
		let n = Array.from(e || []) || [];
		return n.push(...Array.from(e || []).flatMap((e) => Array.from(e?.querySelectorAll?.(t) || []))), [...Array.from(new Set(n).values())].filter((e) => e?.matches?.(t));
	}, i = (e) => {
		let t = u?.deref?.(), i = r(e.addedNodes), a = r(e.removedNodes);
		(i.length > 0 || a.length > 0) && n?.({
			type: e.type,
			target: e.target,
			attributeName: e.attributeName,
			attributeNamespace: e.attributeNamespace,
			nextSibling: e.nextSibling,
			oldValue: e.oldValue,
			previousSibling: e.previousSibling,
			addedNodes: i,
			removedNodes: a
		}, t);
	}, a = (e) => {
		i({
			addedNodes: [e?.target].filter((e) => !!e),
			removedNodes: [e?.relatedTarget].filter((e) => !!e),
			type: "childList",
			target: e?.currentTarget
		});
	}, o = (e) => {
		i({
			addedNodes: [e?.relatedTarget].filter((e) => !!e),
			removedNodes: [e?.target].filter((e) => !!e),
			type: "childList",
			target: e?.currentTarget
		});
	}, s = (e) => {
		i({
			addedNodes: [e?.target].filter((e) => !!e),
			removedNodes: [e?.relatedTarget || document?.activeElement].filter((e) => !!e),
			type: "childList",
			target: e?.currentTarget
		});
	}, c = {
		passive: !0,
		capture: !1
	};
	if (t?.includes?.(":hover") && t?.includes?.(":active")) return e.addEventListener("pointerover", a, c), e.addEventListener("pointerout", o, c), e.addEventListener("pointerdown", a, c), e.addEventListener("pointerup", o, c), e.addEventListener("pointercancel", o, c), { disconnect: () => {
		e.removeEventListener("pointerover", a, c), e.removeEventListener("pointerout", o, c), e.removeEventListener("pointerdown", a, c), e.removeEventListener("pointerup", o, c), e.removeEventListener("pointercancel", o, c);
	} };
	if (t?.includes?.(":hover")) return e.addEventListener("pointerover", a, c), e.addEventListener("pointerout", o, c), { disconnect: () => {
		e.removeEventListener("pointerover", a, c), e.removeEventListener("pointerout", o, c);
	} };
	if (t?.includes?.(":active")) return e.addEventListener("pointerdown", a, c), e.addEventListener("pointerup", o, c), e.addEventListener("pointercancel", o, c), { disconnect: () => {
		e.removeEventListener("pointerdown", a, c), e.removeEventListener("pointerup", o, c), e.removeEventListener("pointercancel", o, c);
	} };
	if (t?.includes?.(":focus") && t?.includes?.(":focus-within") && t?.includes?.(":focus-visible")) return e.addEventListener("focusin", a, c), e.addEventListener("focusout", o, c), e.addEventListener("click", s, c), { disconnect: () => {
		e.removeEventListener("focusin", a, c), e.removeEventListener("focusout", o, c), e.removeEventListener("click", s, c);
	} };
	let l = new MutationObserver((e, t) => {
		for (let t of e) t.type == "childList" && i(t);
	}), u = new WeakRef(l);
	(e?.element ?? e) instanceof Node && l.observe(e = Ze(e), {
		childList: !0,
		subtree: !0
	});
	let d = Array.from(e.querySelectorAll(t));
	return d.length > 0 && n?.({ addedNodes: d }, l), l;
}, tt = () => typeof globalThis < "u" && typeof globalThis.CSSStyleSheet == "function", nt = (e) => typeof e == "string" && /@import\b/i.test(e), rt = "DOM", it = typeof document < "u" ? document.createElement("style") : null;
it && (typeof document < "u" && document.querySelector("head")?.appendChild?.(it), it.dataset.owner = rt);
var at = (e, t, n = "") => {
	e[0][e[1]] = e[1] == "innerHTML" ? `@import url("${t}") ${n && typeof n == "string" ? `layer(${n})` : ""};` : t;
}, ot = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", st = (e) => ot && e instanceof CSSStyleValue, ct = (e) => ot && e instanceof CSSUnitValue, lt = (e, t, n, r = "") => {
	if (!(!e || !t)) {
		if (n == null) {
			e.getPropertyValue(t) !== "" && e.removeProperty(t);
			return;
		}
		e.getPropertyValue(t) !== n && e.setProperty(t, n, r);
	}
}, ut = (e, t, n, i = "") => {
	if (!e || !t) return e;
	let a = de(t), s = e.style, c = e.attributeStyleMap ?? e.styleMap;
	if (!ot || !c) return dt(e, t, n, i);
	let l = r(n) && !(st(n) || ct(n)) ? n?.value : n;
	if (l == null) return c.delete?.(a), s && lt(s, a, null, i), e;
	if (st(l)) {
		let t = c.get(a);
		if (ct(l) && ct(t)) {
			if (t.value === l.value && t.unit === l.unit) return e;
		} else if (t === l) return e;
		return c.set(a, l), e;
	}
	if (typeof l == "number") if (CSS?.number && !a.startsWith("--")) {
		let t = CSS.number(l), n = c.get(a);
		return ct(n) && n.value === t.value && n.unit === t.unit || c.set(a, t), e;
	} else return lt(s, a, String(l), i), e;
	if (typeof l == "string" && !st(l)) {
		let t = o(l);
		if (typeof t == "number" && CSS?.number && !a.startsWith("--")) {
			let n = CSS.number(t), r = c.get(a);
			return ct(r) && r.value === n.value && r.unit === n.unit || c.set(a, n), e;
		} else return lt(s, a, l, i), e;
	}
	return lt(s, a, String(l), i), e;
}, dt = (e, t, n, i = "") => {
	if (!e || !t) return e;
	let a = de(t), s = e.style;
	if (!s) return e;
	let c = r(n) && !(st(n) || ct(n)) ? n?.value : n;
	return typeof c == "string" && !st(c) && (c = o(c) ?? c), c == null ? (lt(s, a, null, i), e) : (st(c), lt(s, a, String(c), i), e);
}, ft = (e, t) => typeof e?.then == "function" ? e?.then?.(t) : t(e), pt = /* @__PURE__ */ new WeakMap(), mt = /* @__PURE__ */ new Map(), ht = (e) => {
	if (!e) return null;
	if (mt.has(e)) return mt.get(e);
	if (e instanceof Blob || e instanceof File) {
		if (pt.has(e)) return pt.get(e);
		let t = URL.createObjectURL(e);
		return pt.set(e, t), mt.set(t, t), t;
	}
	if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
		let t = fetch(e?.replace?.("?url", "?raw"), {
			cache: "force-cache",
			mode: "same-origin",
			priority: "high"
		})?.then?.(async (t) => {
			let n = await t.blob(), r = URL.createObjectURL(n);
			return pt.set(n, r), mt.set(e, r), mt.set(r, r), r;
		});
		return mt.set(e, t), t;
	}
	if (typeof e == "string") {
		let t = new Blob([e], { type: "text/css" }), n = URL.createObjectURL(t);
		return pt.set(t, n), mt.set(n, n), n;
	}
	return e;
}, gt = /* @__PURE__ */ new Map(), _t = /* @__PURE__ */ new WeakMap(), vt = (e) => {
	if (!e) return "";
	if (gt.has(e)) return gt.get(e) ?? "";
	if (e instanceof Blob || e instanceof File) {
		if (_t.has(e)) return _t.get(e) ?? "";
		let t = e?.text?.()?.then?.((t) => (_t.set(e, t), t));
		return _t.set(e, t), t;
	}
	if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
		let t = fetch(e?.replace?.("?url", "?raw"), {
			cache: "force-cache",
			mode: "same-origin",
			priority: "high"
		})?.then?.(async (t) => {
			let n = await t.text();
			return gt.set(e, n), n;
		});
		return gt.set(e, t), t;
	}
	return typeof e == "string" && gt.set(e, e), e;
}, yt = /* @__PURE__ */ new Map(), bt = /* @__PURE__ */ new WeakMap(), xt = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new WeakMap(), Ct = (e, t = "ux-query", n = null) => {
	if (!e || !tt()) return null;
	let r = n instanceof ShadowRoot ? n : n?.getRootNode ? n.getRootNode({ composed: !0 }) : null, i = r instanceof ShadowRoot, a = i ? r.adoptedStyleSheets : typeof document < "u" ? document.adoptedStyleSheets : null;
	if (!a) return null;
	let o = `${t || ""}:${e}`, s;
	if (i) {
		let e = bt.get(r);
		e || (e = /* @__PURE__ */ new Map(), bt.set(r, e)), s = e.get(o), s || (s = new CSSStyleSheet(), e.set(o, s), a.includes(s) || a.push(s));
	} else s = yt.get(o), s || (s = new CSSStyleSheet(), yt.set(o, s), a.includes(s) || a.push(s));
	if (t) {
		let n;
		if (i) {
			let e = St.get(r);
			e || (e = /* @__PURE__ */ new Map(), St.set(r, e)), n = e.get(t);
		} else n = xt.get(t);
		if (!n) {
			let e = Array.from(s.cssRules || []), a = e.findIndex((e) => e instanceof CSSLayerBlockRule && e.name === t);
			if (a === -1) try {
				s.insertRule(`@layer ${t} {}`, s.cssRules.length);
				let e = s.cssRules[s.cssRules.length - 1];
				e instanceof CSSLayerBlockRule && (n = e);
			} catch {
				n = void 0;
			}
			else n = e[a];
			if (n) if (i) {
				let e = St.get(r);
				e || (e = /* @__PURE__ */ new Map(), St.set(r, e)), e.set(t, n);
			} else xt.set(t, n);
		}
		if (n) {
			let t = Array.from(n.cssRules || []).findIndex((t) => t instanceof CSSStyleRule && t.selectorText?.trim?.() === e?.trim?.());
			if (t === -1) try {
				t = n.insertRule(`${e} {}`, n.cssRules.length);
			} catch {
				return null;
			}
			return n.cssRules[t];
		}
	}
	let c = Array.from(s.cssRules || []).findIndex((t) => t instanceof CSSStyleRule && t.selectorText?.trim?.() === e?.trim?.());
	if (c === -1) try {
		c = s.insertRule(`${e} {}`, s.cssRules.length);
	} catch {
		return null;
	}
	let l = s.cssRules[c];
	return l instanceof CSSStyleRule ? l : null;
}, wt = (e, t, n, r = "") => ot ? ut(e, t, n, r) : dt(e, t, n, r), Tt = (e, t, n = "", r) => {
	let i = ht(e), a = typeof e == "string" && URL.canParse(e) ? e : i;
	return t?.[0] && (t[0].fetchPriority = "high"), t && a && typeof a == "string" && at(t, a, n), t?.[0] && (!URL.canParse(e) || r) && t?.[0] instanceof HTMLLinkElement, ft(i, (e) => {
		t?.[0] && e && (at(t, e, n), t?.[0].setAttribute("loaded", ""));
	})?.catch?.((e) => {
		console.warn("Failed to load style sheet:", e);
	});
}, Et = (e) => {
	let t = typeof document < "u" ? document.createElement("link") : null;
	return t && (t.fetchPriority = "high"), t ? (Object.assign(t, {
		rel: "stylesheet",
		type: "text/css",
		crossOrigin: "same-origin"
	}), t.dataset.owner = rt, Tt(e, [t, "href"]), typeof document < "u" && document.head.append(t), t) : null;
}, Dt = (e, t = typeof document < "u" ? document?.head : null, n = "") => {
	let r = t?.querySelector?.("head") ?? t;
	if (typeof HTMLHeadElement < "u" && r instanceof HTMLHeadElement) return Et(e);
	let i = typeof document < "u" ? document.createElement("style") : null;
	return i ? (i.dataset.owner = rt, Tt(e, [i, "innerHTML"], n), r?.prepend?.(i), i) : null;
}, Ot = (e) => jt(e, ""), D = /* @__PURE__ */ new Map(), kt = /* @__PURE__ */ new WeakMap(), At = (e, t) => {
	if (!e || !t) return !1;
	try {
		return e.replaceSync(t), !0;
	} catch (e) {
		let t = String(e?.message || "").toLowerCase();
		return t.includes("@import rules are not allowed") || t.includes("@import") && t.includes("not allowed") || console.warn("[DOM] Failed to apply adopted stylesheet:", e), !1;
	}
}, jt = (e, t = null) => {
	if (!tt()) return typeof e == "string" && Dt(e, void 0, t || ""), null;
	if (typeof e == "string" && nt(e)) return Dt(e, void 0, t || ""), null;
	if (typeof e == "string" && D?.has?.(e)) {
		let t = D.get(e);
		return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(t) && document.adoptedStyleSheets.push(t), t;
	}
	if ((e instanceof Blob || e instanceof File) && kt?.has?.(e)) {
		let t = kt.get(e);
		return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(t) && document.adoptedStyleSheets.push(t), t;
	}
	if (!e) return null;
	let n = typeof e == "string" ? D.getOrInsertComputed(e, (e) => new CSSStyleSheet()) : kt.getOrInsertComputed(e, (e) => new CSSStyleSheet());
	if (typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(n) && document.adoptedStyleSheets.push(n), typeof e == "string" && !URL.canParse(e)) {
		let r = t ? `@layer ${t} { ${e} }` : e;
		return D.set(e, n), At(n, r) || (Mt(n), D.delete(e), Dt(e)), n;
	} else ft(vt(e), (r) => {
		if (D.set(r, n), r) return nt(r) ? (Mt(n), D.delete(r), kt.delete(e), Dt(r, void 0, t || ""), n) : (At(n, t ? `@layer ${t} { ${r} }` : r) || (Mt(n), D.delete(r), kt.delete(e), Dt(r, void 0, t || "")), n);
	});
	return n;
}, Mt = (e) => {
	if (!e) return !1;
	let t = typeof e == "string" ? D.get(e) : e;
	if (!t || typeof document > "u") return !1;
	let n = document.adoptedStyleSheets, r = n.indexOf(t);
	return r === -1 ? !1 : (n.splice(r, 1), !0);
}, Nt = (e, t) => {
	if ("computedStyleMap" in e) {
		let n = e?.computedStyleMap?.()?.get(t);
		return n instanceof CSSUnitValue ? n?.value || 0 : n?.toString?.();
	}
	if (e instanceof HTMLElement) {
		let n = getComputedStyle?.(e, "");
		return parseFloat(n?.getPropertyValue?.(t)?.replace?.("px", "")) || 0;
	}
	return parseFloat((e?.style ?? e).getPropertyValue?.(t)?.replace?.("px", "")) || 0;
}, Pt = (e, t) => t == "inline" ? Nt(e, "padding-inline-start") + Nt(e, "padding-inline-end") : Nt(e, "padding-block-start") + Nt(e, "padding-block-end"), Ft = /* @__PURE__ */ new WeakMap(), It = (e, t, n) => (new WeakRef(e), t.has(n) || t.add(n), e), Lt = (e, t) => {
	if (e) {
		if (t) {
			let n = Ft.getOrInsert(e, /* @__PURE__ */ new Set());
			[...t?.values?.() || []].map((t) => It(e, n, t));
		}
		return e;
	}
}, Rt = /* @__PURE__ */ new Map(), zt = (e, t) => {
	let n = [...e.entries() || []];
	return new Map(n?.map?.(([e, n]) => [e, n?.get?.(t)])?.filter?.(([e, t]) => !!t) || []);
}, Bt = (e, t, n) => {
	let r = Rt.get(t);
	return r || (r = /* @__PURE__ */ new WeakMap(), Rt.set(t, r)), r.has(e) || r.set(e, n), e;
}, Vt = (e, t) => {
	if (!(!e || !t)) {
		for (let [n, r] of t.entries()) Bt(e, n, r);
		return e;
	}
}, Ht = (e, t) => {
	if (e) {
		if (t) {
			let n = Gt?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
			Gt?.has?.(e) || Gt?.set?.(e, n), [...t?.values?.() || []].map((t) => Wt(e, t, n));
		}
		return e;
	}
}, Ut = (e) => ({
	storeSet: zt(Rt, e),
	mixinSet: Gt?.get?.(e),
	behaviorSet: Ft?.get?.(e)
}), Wt = (e, t, n) => {
	let r = new WeakRef(e);
	return n ||= Gt?.get?.(e), n?.has?.(t) || (n?.add?.(t), Kt?.get?.(t)?.add?.(e), t.name && e?.setAttribute?.("data-mixin", [...e?.getAttribute?.("data-mixin")?.split?.(" ") || [], t.name].filter((e) => !!e).join(" ")), t?.connect?.(r, t, Ut(e))), e;
}, Gt = /* @__PURE__ */ new WeakMap(), Kt = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ new Map(), Jt = /* @__PURE__ */ new WeakMap(), Yt = (e, t) => {
	typeof t == "string" && (t = qt?.get?.(t));
	let n = new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), r = new Set([...n].map((e) => qt?.get?.(e)).filter((e) => !!e)), i = Gt?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
	Kt?.has?.(t) || Kt?.set?.(t, /* @__PURE__ */ new WeakSet()), Gt?.has?.(e) || Gt?.set?.(e, i);
	let a = new WeakRef(e);
	i?.has?.(t) || (r.has(t) || t?.disconnect?.(a, t, Ut(e)), (r.has(t) || !Kt?.get?.(t)?.has?.(e)) && (t?.connect?.(a, t, Ut(e)), n.add(Jt?.get?.(t)), i?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((e) => !!e).join(" "))), Kt?.get?.(t)?.add?.(e)), i?.has?.(t) && (r.has(t) || (i?.delete?.(t), t?.disconnect?.(a, t, Ut(e))));
}, Xt = /* @__PURE__ */ new Set(), Zt = (e = typeof document < "u" ? document : null) => {
	if (e) return Xt?.has?.(e) || (Xt?.add?.(e), $e(e, "*", "data-mixin", (e) => Qt(e.target)), et(e, "[data-mixin]", (e) => {
		for (let t of e.addedNodes) t instanceof HTMLElement && Qt(t);
	})), e;
}, Qt = (e) => {
	let t = new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
	[...new Set([...t].map((e) => qt?.get?.(e)).filter((e) => !!e))]?.map?.((t) => Yt(e, t));
}, $t = (e, t) => {
	e.forEach((e) => t ? Yt(e, t) : Qt(e));
}, en = (e) => {
	for (let t of Xt) $t(t?.querySelectorAll?.("[data-mixin]"), e);
}, tn = new FinalizationRegistry((e) => {
	qt?.delete?.(e);
}), nn = (e, t) => {
	if (!Jt?.has?.(t)) {
		let n = e?.trim?.();
		n && (Jt?.set?.(t, n), qt?.set?.(n, t), tn?.register?.(t, n), en(t));
	}
};
Zt(typeof document < "u" ? document : null);
var rn = class {
	constructor(e = null) {
		e && nn(e, this);
	}
	connect(e, t, n) {
		return this;
	}
	disconnect(e, t, n) {
		return this;
	}
	storeForElement(e) {
		return Rt.get(this.name || "")?.get?.(e);
	}
	relatedForElement(e) {
		return Ut(e);
	}
	get elements() {
		return Kt?.get?.(this);
	}
	get storage() {
		return Rt?.get?.(this.name || "");
	}
	get name() {
		return Jt?.get?.(this);
	}
}, an = (e, t, n) => {
	let i = n;
	r(n) && (n = n.value);
	let a = (n = c(n)) != null && n !== !1;
	return v(i, () => {
		e instanceof HTMLInputElement ? e.hidden = !a : a ? e?.removeAttribute?.("data-hidden") : e?.setAttribute?.("data-hidden", "");
	}), e;
}, on = (e, t, n) => {
	if (!(t = typeof t == "string" ? a(t) : t) || !e || [
		"style",
		"dataset",
		"attributeStyleMap",
		"styleMap",
		"computedStyleMap"
	].indexOf(t || "") != -1) return e;
	let i = n;
	return r(n) && (n = n.value), e?.[t] === n || e?.[t] !== n && v(i, () => {
		n == null ? delete e[t] : e[t] = n;
	}), e;
}, sn = (e, t, n) => {
	let i = e?.dataset;
	if (!t || !e || !i) return e;
	let o = n;
	return r(n) && (n = n?.value), t = a(t), i?.[t] === (n = c(n)) || (n == null || n === !1 ? delete i[t] : v(o, () => {
		typeof n != "object" && typeof n != "function" ? i[t] = String(n) : delete i[t];
	})), e;
}, cn = (e, t) => e.style.removeProperty(de(t)), ln = (e, t, n) => {
	let i = e?.style;
	return !t || typeof t != "string" || !e || !i || v(n, () => {
		l(n) || r(n) || f(n) ? wt(e, t, n) : n ?? cn(e, t);
	}), e;
}, O = (e, t, n) => {
	if (!t || !e) return e;
	let i = n;
	return r(n) && (n = n.value), t = de(t), e?.getAttribute?.(t) === (n = c(n)) || v(i, () => {
		typeof n != "object" && typeof n != "function" && n != null && (typeof n != "boolean" || n == 1) ? e?.setAttribute?.(t, String(n)) : e?.removeAttribute?.(t);
	}), e;
};
//#endregion
//#region ../../projects/dom.ts/src/mixin/junction/types.ts
function un(e, t) {
	let n = Math.min(e.x, t.x), r = Math.min(e.y, t.y), i = Math.max(e.x, t.x), a = Math.max(e.y, t.y);
	return {
		left: n,
		top: r,
		right: i,
		bottom: a,
		width: i - n,
		height: a - r
	};
}
var dn = {
	start: "junction-select:start",
	move: "junction-select:move",
	end: "junction-select:end",
	cancel: "junction-select:cancel"
}, fn = {
	start: "junction-drag:start",
	move: "junction-drag:move",
	end: "junction-drag:end"
}, pn = {
	start: "junction-resize:start",
	move: "junction-resize:move",
	end: "junction-resize:end"
}, mn = /* @__PURE__ */ new WeakMap(), k = (e, t, n) => {
	let r = mn.get(e) ?? /* @__PURE__ */ new Map(), i = r.get(t) ?? [];
	i.push(n), r.set(t, i), mn.set(e, r);
}, hn = (e, t) => {
	let n = mn.get(e), r = n?.get(t);
	if (r) {
		for (let e of r) try {
			e();
		} catch {}
		n.delete(t), n.size === 0 && mn.delete(e);
	}
}, gn = (e, t) => {
	let n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", r = parseFloat(n);
	return Number.isFinite(r) ? r : 0;
}, _n = (e, t, n) => {
	let r = e.getAttribute(t)?.trim();
	if (!r) return n;
	let i = e.querySelector(r);
	return i instanceof HTMLElement ? i : n;
}, vn = class extends rn {
	constructor() {
		super("ui-junction-select");
	}
	connect(e) {
		let t = e?.deref?.();
		if (!t) return this;
		let n = document.createElement("div");
		n.className = "ui-junction-select-overlay", n.setAttribute("data-junction-overlay", ""), n.style.cssText = "position:absolute;pointer-events:none;z-index:9999;box-sizing:border-box;border:1px dashed color-mix(in oklab, #3794ff 70%, transparent);background:color-mix(in oklab, #3794ff 14%, transparent);display:none;inset:auto;min-width:0;min-height:0;", globalThis.getComputedStyle?.(t)?.position === "static" && (t.style.position = "relative"), t.appendChild(n);
		let r = !1, i = {
			x: 0,
			y: 0
		}, a = {
			x: 0,
			y: 0
		}, o = (e) => {
			let n = t.getBoundingClientRect();
			return {
				x: e.clientX - n.left,
				y: e.clientY - n.top
			};
		}, s = () => {
			let e = un(i, a);
			if (e.width < 1 && e.height < 1) {
				n.style.display = "none";
				return;
			}
			n.style.display = "block", n.style.left = `${e.left}px`, n.style.top = `${e.top}px`, n.style.width = `${e.width}px`, n.style.height = `${e.height}px`;
		}, c = (e) => {
			e.button === 0 && (e.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (e.target === t || t.contains(e.target)) && (r = !0, i = o(e), a = { ...i }, t.setPointerCapture(e.pointerId), t.dispatchEvent(new CustomEvent(dn.start, {
				bubbles: !0,
				detail: {
					a: { ...i },
					b: { ...a },
					host: t
				}
			})), s()));
		}, l = (e) => {
			if (!r) return;
			a = o(e), s();
			let n = un(i, a);
			t.dispatchEvent(new CustomEvent(dn.move, {
				bubbles: !0,
				detail: {
					a: { ...i },
					b: { ...a },
					box: n,
					host: t
				}
			}));
		}, u = (e) => {
			if (!r) return;
			r = !1;
			try {
				t.releasePointerCapture(e.pointerId);
			} catch {}
			let n = un(i, a);
			t.dispatchEvent(new CustomEvent(dn.end, {
				bubbles: !0,
				detail: {
					a: { ...i },
					b: { ...a },
					box: n,
					host: t
				}
			}));
		};
		return k(t, "ui-junction-select", () => {
			n.remove();
		}), k(t, "ui-junction-select", E(t, "pointerdown", c)), k(t, "ui-junction-select", E(t, "pointermove", l)), k(t, "ui-junction-select", E(t, "pointerup", (e) => {
			r && u(e);
		})), k(t, "ui-junction-select", E(t, "pointercancel", (e) => {
			if (r) {
				r = !1, n.style.display = "none";
				try {
					t.releasePointerCapture(e.pointerId);
				} catch {}
				t.dispatchEvent(new CustomEvent(dn.cancel, {
					bubbles: !0,
					detail: { host: t }
				}));
			}
		})), this;
	}
	disconnect(e) {
		let t = e?.deref?.();
		return t && hn(t, "ui-junction-select"), this;
	}
}, yn = class extends rn {
	constructor() {
		super("ui-junction-drag");
	}
	connect(e) {
		let t = e?.deref?.();
		if (!t) return this;
		wt(t, "--jx-drag-x", gn(t, "--jx-drag-x")), wt(t, "--jx-drag-y", gn(t, "--jx-drag-y"));
		let n = t.style.transform;
		(!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
		let r = _n(t, "data-junction-drag-handle", t), i = !1, a = 0, o = 0, s = 0, c = 0, l = (e) => {
			e.button === 0 && (e.target !== r && !r.contains(e.target) || (i = !0, a = e.clientX, o = e.clientY, s = gn(t, "--jx-drag-x"), c = gn(t, "--jx-drag-y"), r.setPointerCapture(e.pointerId), t.dispatchEvent(new CustomEvent(fn.start, {
				bubbles: !0,
				detail: {
					host: t,
					clientX: e.clientX,
					clientY: e.clientY,
					baseX: s,
					baseY: c
				}
			}))));
		}, u = (e) => {
			if (!i) return;
			let n = e.clientX - a, r = e.clientY - o, l = s + n, u = c + r;
			wt(t, "--jx-drag-x", l), wt(t, "--jx-drag-y", u), t.dispatchEvent(new CustomEvent(fn.move, {
				bubbles: !0,
				detail: {
					host: t,
					dx: n,
					dy: r,
					x: l,
					y: u
				}
			}));
		}, d = (e) => {
			if (i) {
				i = !1;
				try {
					r.releasePointerCapture(e.pointerId);
				} catch {}
				t.dispatchEvent(new CustomEvent(fn.end, {
					bubbles: !0,
					detail: {
						host: t,
						x: gn(t, "--jx-drag-x"),
						y: gn(t, "--jx-drag-y")
					}
				}));
			}
		};
		return k(t, "ui-junction-drag", () => {
			t.style.transform = n;
		}), k(t, "ui-junction-drag", E(r, "pointerdown", l)), k(t, "ui-junction-drag", E(r, "pointermove", u)), k(t, "ui-junction-drag", E(r, "pointerup", d)), k(t, "ui-junction-drag", E(r, "pointercancel", d)), this;
	}
	disconnect(e) {
		let t = e?.deref?.();
		return t && hn(t, "ui-junction-drag"), this;
	}
}, bn = class extends rn {
	constructor() {
		super("ui-junction-resize");
	}
	connect(e) {
		let t = e?.deref?.();
		if (!t) return this;
		let n = _n(t, "data-junction-resize-handle", t), r = !1, i = 0, a = 0, o = 0, s = 0, c = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), l = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), u = (e) => {
			e.button === 0 && (e.target !== n && !n.contains(e.target) || (r = !0, i = e.clientX, a = e.clientY, o = t.offsetWidth, s = t.offsetHeight, n.setPointerCapture(e.pointerId), t.dispatchEvent(new CustomEvent(pn.start, {
				bubbles: !0,
				detail: {
					host: t,
					width: o,
					height: s
				}
			}))));
		}, d = (e) => {
			if (!r) return;
			let n = Math.max(c, o + (e.clientX - i)), u = Math.max(l, s + (e.clientY - a));
			t.style.width = `${n}px`, t.style.height = `${u}px`, t.dispatchEvent(new CustomEvent(pn.move, {
				bubbles: !0,
				detail: {
					host: t,
					width: n,
					height: u
				}
			}));
		}, f = (e) => {
			if (r) {
				r = !1;
				try {
					n.releasePointerCapture(e.pointerId);
				} catch {}
				t.dispatchEvent(new CustomEvent(pn.end, {
					bubbles: !0,
					detail: {
						host: t,
						width: t.offsetWidth,
						height: t.offsetHeight
					}
				}));
			}
		};
		return k(t, "ui-junction-resize", E(n, "pointerdown", u)), k(t, "ui-junction-resize", E(n, "pointermove", d)), k(t, "ui-junction-resize", E(n, "pointerup", f)), k(t, "ui-junction-resize", E(n, "pointercancel", f)), this;
	}
	disconnect(e) {
		let t = e?.deref?.();
		return t && hn(t, "ui-junction-resize"), this;
	}
};
new vn(), new yn(), new bn(), Symbol.observable ||= Symbol.for("observable"), Symbol.subscribe ||= Symbol.for("subscribe"), Symbol.unsubscribe ||= Symbol.for("unsubscribe");
var A = Symbol.for("@value"), j = Symbol.for("@extract"), M = Symbol.for("@origin"), xn = Symbol.for("@registry"), Sn = Symbol.for("@behavior"), Cn = Symbol.for("@promise"), wn = Symbol.for("@trigger-less"), N = Symbol.for("@trigger-lock"), Tn = Symbol.for("@trigger-control"), En = Symbol.for("@trigger"), Dn = Symbol.for("@subscribe"), On = Symbol.for("@isNotEqual"), kn = Symbol.for("@realProp"), An = /* @__PURE__ */ new WeakMap(), jn = (e) => {
	let t = typeof e == "object" || typeof e == "function" ? e?.[j] ?? e : e, n = (e) => jn(e);
	return Array.isArray(t) ? t?.map?.(n) || Array.from(t || [])?.map?.(n) || [] : t instanceof Map || t instanceof WeakMap ? new Map(Array.from(t?.entries?.() || [])?.map?.(([e, t]) => [e, jn(t)])) : t instanceof Set || t instanceof WeakSet ? new Set(Array.from(t?.values?.() || [])?.map?.(n)) : t != null && typeof t == "function" || typeof t == "object" ? Object.fromEntries(Array.from(Object.entries(t || {}) || [])?.filter?.(([e]) => e != j && e != M && e != xn)?.map?.(([e, t]) => [e, jn(t)])) : t;
}, Mn = (e) => e?.[j] ?? e?.["@target"] ?? e, P = (e, t = !1) => {
	let n = e;
	if (y(e) || typeof e == "symbol") return e;
	if (e != null && (e instanceof WeakRef || "deref" in e && typeof e?.deref == "function") && (e = e?.deref?.()), e != null && (typeof e == "object" || typeof e == "function")) {
		e = Mn(e);
		let i = t && r(e) && e?.value;
		if (i != null && (typeof i == "object" || typeof i == "function") && (e = i), n != e) return P(e, t);
	}
	return e;
}, Nn = (e) => e != null && typeof e.then == "function", Pn = (e, t) => y(e) || typeof e == "function" ? t?.(e) : Nn(e) ? e.then(t) : e?.promise && Nn(e.promise) ? e.promise.then(t) : t?.(e), Fn = /* @__PURE__ */ new WeakMap(), In = new FinalizationRegistry((e) => {
	e?.forEach?.((e) => e?.());
});
function F(e, t, n) {
	!n || typeof n != "function" || typeof e != "object" && typeof e != "function" || (t == Symbol.dispose ? Fn?.getOrInsertComputed?.(e, () => {
		let t = /* @__PURE__ */ new Set();
		return (typeof e == "object" || typeof e == "function") && (In.register(e, t), Fn.set(e, t), e[Symbol.dispose] ??= () => t.forEach((e) => {
			e?.();
		})), t;
	})?.add?.(n) : e[t] = function(...r) {
		let i = e?.[t];
		typeof i == "function" && i.apply(this, r), n.apply(this, r);
	});
}
//#endregion
//#region ../../projects/object.ts/src/core/Subscript.ts
var Ln = /* @__PURE__ */ new WeakMap(), Rn = (e, t, n) => Ln.getOrInsert(e, () => {
	let r = t?.deref?.();
	r?.affected?.(n);
	let i = e?.complete?.bind?.(e), a = () => {
		let e = i?.();
		return r?.unaffected?.(n), e;
	};
	return e.complete = a, {
		unaffected: a,
		[Symbol.dispose]: a,
		[Symbol.asyncDispose]: a
	};
}), I = /* @__PURE__ */ new WeakMap(), zn = /* @__PURE__ */ new Map(), Bn = /* @__PURE__ */ new WeakMap(), Vn = (e, t) => {
	let n = e?.[j] ?? e, r = I.get(n);
	return r ? r.bindSource(n) : (r = new er(n), I.set(n, r)), t;
}, Hn = (e, t) => (e = P(e?.[j] ?? e), typeof e == "symbol" || !(typeof e == "object" || typeof e == "function") || e == null ? e : Bn.getOrInsertComputed(e, () => new Proxy(e, Vn(e, t)))), Un = Symbol.for("@allProps"), Wn = new Set(["*", "all"]), Gn = new Map([
	["set", ["setter", "@set"]],
	["add", ["@add"]],
	["delete", ["@delete"]],
	["invalidate", ["@invalidate"]],
	["manual", ["@manual"]],
	["custom", ["@custom"]],
	["setAll", ["@setAll"]],
	["addAll", ["@addAll"]],
	["deleteAll", ["@deleteAll", "@clear"]]
]), Kn = new Map(Array.from(Gn.entries()).flatMap(([e, t]) => t.map((t) => [t, e]))), qn = (e = "set") => {
	if (e == null) return e;
	let t = String(e || "set");
	return Kn.get(t) ?? t;
}, Jn = (e) => {
	let t = e == null ? "all" : String(qn(e) ?? "all");
	return [t, ...Gn.get(t) ?? []];
}, Yn = (e = ["*"]) => new Set([...Xn(e)].flatMap((e) => [e, ...Gn.get(e) ?? []])), Xn = (e = ["*"]) => {
	let t = typeof e == "string" ? [e] : Array.from(e ?? ["*"]), n = new Set(t.map((e) => {
		let t = String(e || "*");
		return Wn.has(t) ? t : String(qn(t) ?? t);
	}));
	return n.size ? n : new Set(["*"]);
}, Zn = (e, t) => {
	let n = e instanceof Set ? e : Xn(e);
	return [...Wn].some((e) => n.has(e)) || Jn(t).some((e) => n.has(e));
}, Qn = (e) => !!e && typeof e == "object" && !Array.isArray(e) && ("affectTypes" in e || "triggers" in e || "triggerImmediately" in e), $n = (e = ["*"]) => {
	if (Qn(e)) return {
		affectTypes: Xn(e.affectTypes ?? e.triggers ?? ["*"]),
		triggerImmediately: e.triggerImmediately !== !1
	};
	let t = Xn(e);
	return {
		affectTypes: t,
		triggerImmediately: Zn(t, "initial")
	};
}, er = class {
	compatible;
	#e;
	#t;
	#n = /* @__PURE__ */ new WeakSet();
	#r;
	#i;
	#a = /* @__PURE__ */ new Set();
	#o = /* @__PURE__ */ new Set();
	#s;
	#c = /* @__PURE__ */ new Map();
	#l = !1;
	constructor(e) {
		this.#e = e, this.#t = /* @__PURE__ */ new Map(), this.#n = /* @__PURE__ */ new WeakSet(), this.#s = {
			enable: (e = ["*"], t) => t ? this.withTriggers(e, !0, t) : this.setTriggersEnabled(e, !0),
			disable: (e = ["*"], t) => t ? this.withTriggers(e, !1, t) : this.setTriggersEnabled(e, !1),
			set: (e, t) => this.setTriggersEnabled(e, t),
			with: (e, t) => this.withTriggers(e, !0, t),
			without: (e, t) => this.withTriggers(e, !1, t),
			isEnabled: (e) => this.isTriggerEnabled(e)
		}, this.#i = { next: (e) => {
			e && (Array.isArray(e) ? this.#u(...e) : this.#u(e));
		} };
		let t = new WeakRef(this);
		this.#r = typeof Observable < "u" ? new Observable(function(e) {
			let n = e?.next?.bind?.(e);
			return Rn(e, t, n);
		}) : null, this.compatible = () => this.#r;
	}
	bindSource(e) {
		return this.#e ??= e, this;
	}
	$safeExec(e, ...t) {
		if (!(!e || this.#n.has(e))) {
			this.#n.add(e);
			try {
				let n = e(...t);
				return n && typeof n.then == "function" ? n.catch(console.warn) : n;
			} catch (e) {
				console.warn(e);
			} finally {
				this.#n.delete(e);
			}
		}
	}
	#u(e, t = null, n, r = "all", ...i) {
		r = qn(r) ?? r;
		let a = this.#t, o = a?.size ? Array.from(a.entries()).map(([a, o]) => {
			if ((o.prop === e || o.prop === Un || o.prop === null) && Zn(o.triggers, r)) return this.$safeExec(a, t, e, n, r, ...i);
		}).filter((e) => e && typeof e.then == "function") : [];
		if (zn.size) {
			let a = {
				source: this.#e,
				target: this.#e,
				value: t,
				prop: e,
				name: e,
				oldValue: n,
				trigger: r,
				args: i
			};
			for (let [e, t] of zn.entries()) if (Zn(t, r)) {
				let t = this.$safeExec(e, a);
				t && typeof t.then == "function" && o.push(t);
			}
		}
		return o.length ? Promise.allSettled(o) : void 0;
	}
	wrap(e) {
		return Array.isArray(e) ? Hn(e, this) : e;
	}
	get triggerControl() {
		return this.#s;
	}
	isTriggerEnabled(e) {
		return !Zn(this.#o, "all") && !Jn(e).some((e) => this.#o.has(e));
	}
	setTriggersEnabled(e = ["*"], t = !0) {
		let n = Yn(e);
		for (let e of n) t ? this.#o.delete(e) : this.#o.add(e);
	}
	withTriggers(e, t, n) {
		let r = [...Yn(e)], i = new Map(r.map((e) => [e, this.#o.has(e)])), a = () => {
			i.forEach((e, t) => {
				e ? this.#o.add(t) : this.#o.delete(t);
			});
		};
		this.setTriggersEnabled(r, t);
		try {
			let e = n?.();
			return e && typeof e.finally == "function" ? e.finally(a) : (a(), e);
		} catch (e) {
			throw a(), e;
		}
	}
	affected(e, t, n = ["*"]) {
		if (e == null || typeof e != "function") return;
		let r = $n(n);
		return this.#t.set(e, {
			prop: t || Un,
			triggers: r.affectTypes
		}), () => this.unaffected(e, t || Un);
	}
	unaffected(e, t) {
		if (e != null && typeof e == "function") {
			let n = this.#t, r = n?.get(e);
			if (r && (r.prop == t || t == null || t == Un)) return n.delete(e), () => this.affected(e, t || Un, r.triggers);
		}
		return this.#t.clear();
	}
	trigger(e, t, n, r = "set", ...i) {
		if (typeof e == "symbol" || (r === void 0 && (r = "set"), r = qn(r) ?? r, !this.isTriggerEnabled(r))) return;
		let a = `${r ?? "all"}`, o = this.#c.get(e);
		o || (o = /* @__PURE__ */ new Map(), this.#c.set(e, o)), o.set(a, [
			e,
			t,
			n,
			r,
			i
		]), !this.#l && (this.#l = !0, queueMicrotask(() => {
			this.#l = !1;
			let e = this.#c;
			this.#c = /* @__PURE__ */ new Map();
			for (let [t, n] of e) if (!(t != null && this.#a.has(t))) {
				t != null && this.#a.add(t);
				try {
					for (let [, e] of n) {
						let [t, n, r, i, a] = e;
						try {
							this.#u(t, n, r, i, ...a ?? []);
						} catch (e) {
							console.warn(e);
						}
					}
				} finally {
					t != null && this.#a.delete(t);
				}
			}
		}));
	}
	get iterator() {
		return this.#i;
	}
}, tr = new Set([
	Symbol.toStringTag,
	Symbol.iterator,
	Symbol.asyncIterator,
	Symbol.toPrimitive,
	"toString",
	"valueOf",
	"inspect",
	"constructor",
	"__proto__",
	"prototype",
	"then",
	"catch",
	"finally",
	"next"
]), nr = (e, t) => {
	if (!tr.has(t)) return null;
	let n = R(e, t);
	return typeof n == "function" ? ie(e, n) : n;
}, L = /* @__PURE__ */ new WeakMap();
function rr(e, t) {
	let n = !0;
	try {
		L?.getOrInsert?.(e, /* @__PURE__ */ new Set())?.add?.(t), L?.get?.(e)?.has?.(t) && (n = !0), n = typeof Reflect.getOwnPropertyDescriptor(e, t)?.get == "function";
	} catch {
		n = !0;
	} finally {
		L?.get?.(e)?.delete?.(t);
	}
	return n;
}
var ir = (e, t) => {
	if (y(e)) return e;
	let n = R(e, t);
	if (n == null && t != "value") {
		let r = R(e, "value");
		return r != null && !y(r) ? ir(r, t) : n;
	} else if (t == "value" && n != null && !y(n) && typeof n != "function") return ir(n, t) ?? n ?? e;
	return n ?? e;
}, ar = (e, t, n) => {
	if (e == null) return !1;
	let r = __safeSetGuard.getOrInsert(e, /* @__PURE__ */ new Set());
	return r?.has?.(t) ? !1 : (r?.add?.(t), Reflect.set(e, t, n));
}, R = (e, t, n) => {
	let r;
	if (e == null) return e;
	let i = L.getOrInsert(e, /* @__PURE__ */ new Set());
	if (i?.has?.(t)) return null;
	if (!rr(e, t)) r ??= Reflect.get(e, t, n ?? e);
	else {
		i?.add?.(t);
		try {
			r = Reflect.get(e, t, n ?? e);
		} catch {
			r = void 0;
		} finally {
			i.delete(t), i?.size === 0 && L?.delete?.(e);
		}
	}
	return typeof r == "function" ? ie(e, r) : r;
}, z = (e, t) => Object.prototype.hasOwnProperty.call(e, t), or = (e, t = !1) => !!e && typeof e == "object" && !Array.isArray(e) && (z(e, "key") || z(e, "name") || z(e, "oldValue") || z(e, "old") || z(e, "op") || z(e, "trigger") || t && z(e, "value")), B = (e, t, n) => z(e, t) ? e[t] : t == "oldValue" && z(e, "old") ? e.old : n(), sr = (e, t = "manual") => qn(e.trigger ?? e.op ?? t), cr = (e) => typeof e == "string" || typeof e == "number" || typeof e == "symbol", lr = (e) => {
	let t = R(e, kn) ?? R(e, "realProp");
	return cr(t) ? t : null;
}, ur = (e, t) => t == "value" ? lr(e) ?? t : t, dr = (e, t) => {
	let n = lr(e);
	return n != null && t == n ? R(e, "value") ?? R(e, A) ?? R(e, t) : t == null ? void 0 : R(e, t);
}, fr = (e, t) => {
	let n = (e, n, r) => (or(n) || (r ??= n), t(or(e) ? e : or(n, !0) ? {
		key: e,
		trigger: r,
		...n
	} : {
		key: e,
		trigger: r ?? n
	})), r = e?.triggerControl;
	return r && Object.assign(n, r), n.custom = (e, t, r, i) => n({
		key: t,
		trigger: e,
		value: r,
		oldValue: i
	}), n;
}, pr = (e, t, n) => {
	if (e == null || y(e)) return e;
	if (([
		"deref",
		"bind",
		"@target",
		M,
		j,
		xn
	]?.indexOf(t) < 0 ? R(e, t)?.bind?.(e) : null) != null) return null;
	if ([j, M].indexOf(t) >= 0) return R(e, t) ?? e;
	if (t == A) return R(e, t) ?? R(e, "value");
	if (t == xn) return n;
	if (t == Tn) return n?.triggerControl;
	if (t == Symbol.observable) return n?.compatible;
	if (t == Symbol.subscribe) return (t, n, r) => W(n == null ? e : [e, n], t, r);
	if (t == Symbol.iterator || t == Symbol.asyncIterator) return R(e, t);
	if (t == Symbol.dispose) return (t) => {
		R(e, Symbol.dispose)?.(t), Xr(t == null ? e : [e, t]);
	};
	if (t == Symbol.asyncDispose) return (t) => {
		R(e, Symbol.asyncDispose)?.(t), Xr(t == null ? e : [e, t]);
	};
	if (t == Symbol.unsubscribe) return (t) => Xr(t == null ? e : [e, t]);
	if (typeof t == "symbol" && (t in e || R(e, t) != null)) return R(e, t);
}, mr = (e, t, n) => {
	if (t == "subscribe") return n?.compatible?.[t] ?? ((t) => {
		if (typeof t == "function") return W(e, t);
		if ("next" in t && t?.next != null) {
			let n = W(e, t?.next), r = t?.complete;
			return t.complete = (...e) => (n?.(), r?.(...e)), t.complete;
		}
	});
}, hr = class {
	#e;
	#t;
	#n;
	constructor(e, t, n) {
		this.#e = e, this.#t = t, this.#n = n;
	}
	get(e, t, n) {
		return nr(e, t) ?? Reflect.get(e, t, n);
	}
	apply(e, t, n) {
		let r = [], i = [], a = [], o = [...this.#t], s = -1, c = Reflect.apply(e, t || this.#t, n);
		if (this.#n?.[N]) return Array.isArray(c) ? Sr(c) : c;
		switch (this.#e) {
			case "push":
				s = o?.length, r = n;
				break;
			case "unshift":
				s = 0, r = n;
				break;
			case "pop":
				s = o?.length - 1, o.length > 0 && (i = [[
					s - 1,
					o[s - 1],
					null
				]]);
				break;
			case "shift":
				s = 0, o.length > 0 && (i = [[
					s,
					o[s],
					null
				]]);
				break;
			case "splice":
				let [e, t, ...c] = n;
				if (s = e, r = t > 0 ? c.slice(t) : [], i = t > 0 ? o?.slice?.(c?.length + e, e + (t - (c?.length || 0))) : [], s += (t || 0) - (c?.length || 1), t > 0 && c?.length > 0) for (let n = 0; n < Math.min(t, c?.length ?? 0); n++) a.push([
					e + n,
					c[n],
					o?.[e + n] ?? null
				]);
				break;
			case "sort":
			case "fill":
			case "reverse":
			case "copyWithin":
				s = 0;
				for (let e = 0; e < o.length; e++) x(o[e], this.#t[e]) && a.push([
					s + e,
					this.#t[e],
					o[e]
				]);
				break;
			case "set":
				s = n[1], a.push([
					s,
					n[0],
					o?.[s] ?? null
				]);
				break;
		}
		let l = I.get(this.#t);
		return r?.length == 1 ? l?.trigger?.(s, r[0], null, r[0] == null ? "add" : "set") : r?.length > 1 && (l?.trigger?.(s, r, null, "addAll"), r.forEach((e, t) => l?.trigger?.(s + t, e, null, e == null ? "add" : "set"))), a?.length == 1 ? l?.trigger?.(a[0]?.[0] ?? s, a[0]?.[1], a[0]?.[2], a[0]?.[2] == null ? "add" : "set") : a?.length > 1 && (l?.trigger?.(s, a, o, "setAll"), a.forEach((e, t) => l?.trigger?.(e?.[0] ?? s + t, e?.[1], e?.[2], e?.[2] == null ? "add" : "set"))), i?.length == 1 ? l?.trigger?.(s, null, i[0], i[0] == null ? "add" : "delete") : i?.length > 1 && (l?.trigger?.(s, null, i, "deleteAll"), i.forEach((e, t) => l?.trigger?.(s + t, null, e, e == null ? "add" : "delete"))), c == e ? new Proxy(c, this.#n) : Array.isArray(c) ? Sr(c) : c;
	}
}, gr = (e, t, n, r) => {
	let i = Number.isInteger(n) && Number.isInteger(r) && r < n ? t.slice(r, n) : [];
	if (!e[N] && n !== r) {
		let e = I.get(t);
		i.length === 1 ? e?.trigger?.(r, null, i[0], "delete") : i.length > 1 && (e?.trigger?.(r, null, i, "deleteAll"), i.forEach((t, n) => e?.trigger?.(r + n, null, t, "delete")));
		let a = Number.isInteger(n) && Number.isInteger(r) && r > n ? r - n : 0;
		if (a === 1) e?.trigger?.(n, void 0, null, "add");
		else if (a > 1) {
			let t = Array(a).fill(void 0);
			e?.trigger?.(n, t, null, "addAll"), t.forEach((t, r) => e?.trigger?.(n + r, void 0, null, "add"));
		}
	}
}, _r = class {
	[N];
	constructor() {}
	has(e, t) {
		return Reflect.has(e, t);
	}
	get(e, t, n) {
		let r = nr(e, t);
		if (r != null) return r;
		if ([
			j,
			M,
			"@target",
			"deref"
		].indexOf(t) >= 0 && R(e, t) != null && R(e, t) != e) return typeof R(e, t) == "function" ? R(e, t)?.bind?.(e) : R(e, t);
		let i = I?.get?.(e), a = pr(e, t, i);
		if (a != null) return a;
		let o = mr(e, t, i);
		if (o != null) return o;
		if (t == wn) return s.call(this, this);
		if (t == En) return fr(i, (t) => {
			let n = t.key ?? t.name ?? 0, r = B(t, "value", () => R(e, n)), a = B(t, "oldValue", () => void 0);
			return i?.trigger?.(n, r, a, sr(t, "manual"));
		});
		if (t == "@target" || t == j) return e;
		if (t == "x") return () => e?.x ?? e?.[0];
		if (t == "y") return () => e?.y ?? e?.[1];
		if (t == "z") return () => e?.z ?? e?.[2];
		if (t == "w") return () => e?.w ?? e?.[3];
		if (t == "r") return () => e?.r ?? e?.[0];
		if (t == "g") return () => e?.g ?? e?.[1];
		if (t == "b") return () => e?.b ?? e?.[2];
		if (t == "a") return () => e?.a ?? e?.[3];
		let c = R(e, t) ?? (t == "value" ? R(e, A) : null);
		return typeof c == "function" ? new Proxy(typeof c == "function" ? c?.bind?.(e) : c, new hr(t, e, this)) : c;
	}
	set(e, t, n) {
		if (typeof t != "symbol" && Number.isInteger(parseInt(t)) && (t = parseInt(t) ?? t), t == N && n) return this[N] = !!n, !0;
		if (t == N && !n) return delete this[N], !0;
		let r = R(e, t), i = [
			"x",
			"y",
			"z",
			"w"
		], a = [
			"r",
			"g",
			"b",
			"a"
		], o = i.indexOf(t), s = a.indexOf(t), c = !1;
		return c = o >= 0 ? Reflect.set(e, o, n) : s >= 0 ? Reflect.set(e, s, n) : Reflect.set(e, t, n), t == "length" && x(r, n) && gr(this, e, r, n), !this[N] && typeof t != "symbol" && x(r, n) && I?.get?.(e)?.trigger?.(t, n, r, "set"), c;
	}
	deleteProperty(e, t) {
		if (typeof t != "symbol" && Number.isInteger(parseInt(t)) && (t = parseInt(t) ?? t), t == N) return delete this[N], !0;
		let n = R(e, t), r = Reflect.deleteProperty(e, t);
		return !this[N] && t != "length" && t != N && typeof t != "symbol" && n != null && I.get(e)?.trigger?.(t, t, n, "delete"), r;
	}
}, vr = class {
	[N];
	constructor() {}
	get(e, t, n) {
		if ([
			j,
			M,
			"@target",
			"deref",
			"then",
			"catch",
			"finally"
		].indexOf(t) >= 0 && R(e, t) != null && R(e, t) != e) return typeof R(e, t) == "function" ? ie(e, R(e, t)) : R(e, t);
		let i = I.get(e) ?? I.get(R(e, "value") ?? e);
		return pr(e, t, i) ?? (R(e, t) == null && t != "value" && r(e) && R(e, "value") != null && (typeof R(e, "value") == "object" || typeof R(e, "value") == "function") && R(R(e, "value"), t) != null && (e = R(e, "value") ?? e), mr(e, t, i) ?? (t == wn ? s.call(this, this) : t == En ? fr(i, (t) => {
			let n = ur(e, t.key ?? t.name ?? lr(e) ?? "value"), r = B(t, "value", () => dr(e, n)), a = B(t, "oldValue", () => n == "value" || n == lr(e) ? R(e, A) : void 0);
			return i?.trigger?.(n, r, a, sr(t, "manual"));
		}) : t == Symbol.toPrimitive ? (n) => {
			let r = ir(e, t);
			return R(r, t) ? R(r, t)?.(n) : y(r) ? h(r, n) : y(R(r, "value")) ? h(R(r, "value"), n) : h(R(r, "value") ?? r, n);
		} : t == Symbol.toStringTag ? () => {
			let n = ir(e, t);
			return R(n, t) ? R(n, t)?.() : y(n) ? String(n ?? "") || "" : y(R(n, "value")) ? String(R(n, "value") ?? "") || "" : String(R(n, "value") ?? n ?? "") || "";
		} : t == "toString" ? () => {
			let n = ir(e, t);
			return R(n, t) ? R(n, t)?.() : R(n, Symbol.toStringTag) ? R(n, Symbol.toStringTag)?.() : y(n) ? String(n ?? "") || "" : y(R(n, "value")) ? String(R(n, "value") ?? "") || "" : String(R(n, "value") ?? n ?? "") || "";
		} : t == "valueOf" ? () => {
			let n = ir(e, t);
			return R(n, t) ? R(n, t)?.() : R(n, Symbol.toPrimitive) ? R(n, Symbol.toPrimitive)?.() : y(n) ? n : y(R(n, "value")) ? R(n, "value") : R(n, "value") ?? n;
		} : typeof t == "symbol" && (t in e || R(e, t) != null) ? R(e, t) : ir(e, t)));
	}
	apply(e, t, n) {
		return Reflect.apply(e, t, n);
	}
	ownKeys(e) {
		return Reflect.ownKeys(e);
	}
	construct(e, t, n) {
		return Reflect.construct(e, t, n);
	}
	isExtensible(e) {
		return Reflect.isExtensible(e);
	}
	getOwnPropertyDescriptor(e, t) {
		let n;
		try {
			L?.getOrInsert?.(e, /* @__PURE__ */ new Set())?.add?.(t), L?.get?.(e)?.has?.(t) && (n = void 0), n = Reflect.getOwnPropertyDescriptor(e, t);
		} catch {
			n = void 0;
		} finally {
			L?.get?.(e)?.delete?.(t);
		}
		return n;
	}
	has(e, t) {
		return t in e;
	}
	set(e, t, n) {
		return nr(e, t) ?? p(n, (i) => {
			let a = nr(i, t);
			if (a != null) return a;
			if (t == N && n) return this[N] = !!n, !0;
			if (t == N && !n) return delete this[N], !0;
			let o = e;
			if (R(e, t) == null && t != "value" && r(e) && R(e, "value") != null && (typeof R(e, "value") == "object" || typeof R(e, "value") == "function") && R(R(e, "value"), t) != null && (e = R(e, "value") ?? e), typeof t == "symbol" && !(R(e, t) != null && t in e)) return;
			let s = ur(e, t), c = t == "value" ? R(e, A) ?? R(e, t) : R(e, t);
			e[t] = i;
			let l = R(e, t) ?? i;
			return !this[N] && typeof t != "symbol" && (R(e, On) ?? x)?.(c, l) && (I.get(e) ?? I.get(o))?.trigger?.(s, i, c), !0;
		});
	}
	defineProperty(e, t, n) {
		let i = nr(e, t);
		if (i != null) return i;
		if (t == N && n.value) return this[N] = !!n.value, !0;
		if (t == N && !n.value) return delete this[N], !0;
		if (R(e, t) == null && t != "value" && r(e) && R(e, "value") != null && (typeof R(e, "value") == "object" || typeof R(e, "value") == "function") && R(R(e, "value"), t) != null && (e = R(e, "value") ?? e), n.get == null && n.set == null) return Reflect.defineProperty(e, t, n);
		let a = R(e, t), o = Reflect.defineProperty(e, t, {
			get: n.get,
			set: n.set,
			enumerable: n.enumerable ?? !0,
			configurable: n.configurable ?? !0
		});
		return ar(e, t, a), o;
	}
	deleteProperty(e, t) {
		if (t == N) return delete this[N], !0;
		R(e, t) == null && t != "value" && r(e) && R(e, "value") != null && (typeof R(e, "value") == "object" || typeof R(e, "value") == "function") && R(R(e, "value"), t) != null && (e = R(e, "value") ?? e);
		let n = R(e, t), i = Reflect.deleteProperty(e, t);
		return !this[N] && t != N && typeof t != "symbol" && I.get(e)?.trigger?.(t, null, n, "delete"), i;
	}
}, yr = class {
	[N];
	constructor() {}
	get(e, t, n) {
		if ([
			j,
			M,
			"@target",
			"deref"
		].indexOf(t) >= 0 && R(e, t) != null && R(e, t) != e) return typeof R(e, t) == "function" ? ie(e, R(e, t)) : R(e, t);
		let r = I.get(e), i = pr(e, t, r);
		if (i != null) return i;
		let a = mr(e, t, r);
		if (a != null) return a;
		e = R(e, j) ?? R(e, M) ?? e;
		let o = ie(e, R(e, t));
		return typeof t == "symbol" && (t in e || R(e, t) != null) ? o : t == wn ? s.call(this, this) : t == En ? fr(r, (t) => {
			let n = t.key ?? t.name;
			if (n == null) return;
			let i = B(t, "value", () => e.get(n));
			if (i == null && !z(t, "value")) return;
			let a = B(t, "oldValue", () => void 0);
			return r?.trigger?.(n, i, a, sr(t, "manual"));
		}) : t == "clear" ? () => {
			let t = Array.from(e?.entries?.() || []), n = o();
			return t.forEach(([t, n]) => {
				!this[N] && n && I.get(e)?.trigger?.(t, null, n, "delete");
			}), n;
		} : t == "delete" ? (t, n = null) => {
			let r = e.get(t), i = o(t);
			return !this[N] && r && I.get(e)?.trigger?.(t, null, r, "delete"), i;
		} : t == "set" ? (t, n) => pe(n, (r) => {
			let i = e.get(t), a = o(t, n);
			return x(i, a) && (this[N] || I.get(e)?.trigger?.(t, a, i, i == null ? "add" : "set")), a;
		}) : o;
	}
	set(e, t, n) {
		return t == N ? (this[N] = !!n, !0) : t == N && !n ? (delete this[N], !0) : Reflect.set(e, t, n);
	}
	has(e, t) {
		return Reflect.has(e, t);
	}
	apply(e, t, n) {
		return Reflect.apply(e, t, n);
	}
	construct(e, t, n) {
		return Reflect.construct(e, t, n);
	}
	ownKeys(e) {
		return Reflect.ownKeys(e);
	}
	isExtensible(e) {
		return Reflect.isExtensible(e);
	}
	getOwnPropertyDescriptor(e, t) {
		let n;
		try {
			L?.getOrInsert?.(e, /* @__PURE__ */ new Set())?.add?.(t), L?.get?.(e)?.has?.(t) && (n = void 0), n = Reflect.getOwnPropertyDescriptor(e, t);
		} catch {
			n = void 0;
		} finally {
			L?.get?.(e)?.delete?.(t);
		}
		return n;
	}
	deleteProperty(e, t) {
		return t == N ? (delete this[N], !0) : Reflect.deleteProperty(e, t);
	}
}, br = class {
	[N] = !1;
	constructor() {}
	get(e, t, n) {
		if ([
			j,
			M,
			"@target",
			"deref"
		].indexOf(t) >= 0 && R(e, t) != null && R(e, t) != e) return typeof R(e, t) == "function" ? ie(e, R(e, t)) : R(e, t);
		let r = I.get(e), i = pr(e, t, r);
		if (i != null) return i;
		let a = mr(e, t, r);
		if (a != null) return a;
		e = R(e, j) ?? R(e, M) ?? e;
		let o = ie(e, R(e, t));
		return typeof t == "symbol" && (t in e || R(e, t) != null) ? o : t == wn ? s.call(this, this) : t == En ? fr(r, (t) => {
			let n = t.key ?? t.name;
			if (n == null) return;
			let i = B(t, "value", () => e.has(n)), a = B(t, "oldValue", () => void 0);
			return r?.trigger?.(n, i, a, sr(t, "manual"));
		}) : t == "clear" ? () => {
			let t = Array.from(e?.values?.() || []), n = o();
			return t.forEach((t) => {
				!this[N] && t && I.get(e)?.trigger?.(null, null, t, "delete");
			}), n;
		} : t == "delete" ? (t) => {
			let n = e.has(t) ? t : null, r = o(t);
			return !this[N] && n && I.get(e)?.trigger?.(t, null, n, "delete"), r;
		} : t == "add" ? (t) => {
			let n = e.has(t) ? t : null, r = o(t);
			return x(n, t) && !this[N] && !n && I.get(e)?.trigger?.(t, t, n, "add"), r;
		} : o;
	}
	set(e, t, n) {
		return t == N && n ? (this[N] = !!n, !0) : t == N && !n ? (delete this[N], !0) : Reflect.set(e, t, n);
	}
	has(e, t) {
		return Reflect.has(e, t);
	}
	apply(e, t, n) {
		return Reflect.apply(e, t, n);
	}
	construct(e, t, n) {
		return Reflect.construct(e, t, n);
	}
	ownKeys(e) {
		return Reflect.ownKeys(e);
	}
	isExtensible(e) {
		return Reflect.isExtensible(e);
	}
	getOwnPropertyDescriptor(e, t) {
		let n;
		try {
			L?.getOrInsert?.(e, /* @__PURE__ */ new Set())?.add?.(t), L?.get?.(e)?.has?.(t) && (n = void 0), n = Reflect.getOwnPropertyDescriptor(e, t);
		} catch {
			n = void 0;
		} finally {
			L?.get?.(e)?.delete?.(t);
		}
		return n;
	}
	deleteProperty(e, t) {
		return t == N ? (delete this[N], !0) : Reflect.deleteProperty(e, t);
	}
}, xr = (e) => !!((typeof e == "object" || typeof e == "function") && e != null && (e?.[j] || e?.[Dn])), Sr = (e) => xr(e) ? e : Hn(e, new _r()), Cr = (e) => xr(e) ? e : Hn(e, new vr()), wr = (e) => xr(e) ? e : Hn(e, new yr()), Tr = (e) => xr(e) ? e : Hn(e, new br()), V = (e, t) => {
	let n = e instanceof Promise || typeof e?.then == "function", r = U({
		[Cn]: n ? e : null,
		[A]: n ? 0 : Number(P(e) || 0) || 0,
		[Sn]: t,
		[Symbol?.toStringTag]() {
			return String(this?.[A] ?? "") || "";
		},
		[Symbol?.toPrimitive](e) {
			return h((typeof this?.[A] == "object" ? this?.[A]?.value || 0 : this?.[A]) ?? 0, e);
		},
		set value(e) {
			this[A] = (e != null && !Number.isNaN(e) ? Number(e) : this[A]) || 0;
		},
		get value() {
			return Number(this[A] || 0) || 0;
		}
	});
	return e?.then?.((e) => r.value = e), r;
}, Er = (e, t) => {
	let n = e instanceof Promise || typeof e?.then == "function", r = U({
		[Cn]: n ? e : null,
		[A]: (n ? "" : String(P(typeof e == "number" ? String(e) : e || ""))) ?? "",
		[Sn]: t,
		[Symbol?.toStringTag]() {
			return String(this?.[A] ?? "") ?? "";
		},
		[Symbol?.toPrimitive](e) {
			return h(this?.[A] ?? "", e);
		},
		set value(e) {
			this[A] = String(typeof e == "number" ? String(e) : e || "") ?? "";
		},
		get value() {
			return String(this[A] ?? "") ?? "";
		}
	});
	return e?.then?.((e) => r.value = e), r;
}, H = (e, t) => {
	let n = e instanceof Promise || typeof e?.then == "function", r = U({
		[Cn]: n ? e : null,
		[A]: (n ? !1 : (P(e) == null ? !1 : typeof P(e) == "string" ? !0 : !!P(e)) || !1) || !1,
		[Sn]: t,
		[Symbol?.toStringTag]() {
			return String(this?.[A] ?? "") || "";
		},
		[Symbol?.toPrimitive](e) {
			return h(!!this?.[A] || !1, e);
		},
		set value(e) {
			this[A] = (e == null ? this[A] : typeof e == "string" ? !0 : !!e) || !1;
		},
		get value() {
			return this[A] || !1;
		}
	});
	return e?.then?.((e) => r.value = e), r;
}, Dr = (e, t) => {
	let n = e instanceof Promise || typeof e?.then == "function", r = U({
		[Cn]: n ? e : null,
		[Sn]: t,
		[Symbol?.toStringTag]() {
			return String(this.value ?? "") || "";
		},
		[Symbol?.toPrimitive](e) {
			return h(this.value, e);
		},
		value: n ? null : P(e)
	});
	return e?.then?.((e) => r.value = e), W(e, (e) => {
		r?.[En]?.();
	}), r;
}, Or = (e, t) => {
	if (e == null || typeof e != "object" && typeof e != "function") return e;
	try {
		Object.defineProperty(e, kn, {
			value: t,
			writable: !0,
			configurable: !0
		});
	} catch {
		try {
			e[kn] = t;
		} catch {}
	}
	try {
		Object.defineProperty(e, "realProp", {
			value: t,
			writable: !0,
			configurable: !0
		});
	} catch {
		try {
			e.realProp = t;
		} catch {}
	}
	return e;
}, kr = (e, t = "value", i, a) => {
	if (y(e) || !e) return e;
	if (Array.isArray(e) && !re(e?.[1], e) && (Array.isArray(e?.[0]) || typeof e?.[0] == "object" || typeof e?.[0] == "function") && (e = e?.[0]), (t ??= Array.isArray(e) ? null : "value") == null || re(t, e)) return;
	if (t && r(e?.[t]) && Mr(e?.[t])) return Or(Nr(e?.[t]), t);
	if (t && typeof e?.getProperty == "function" && Mr(e?.getProperty?.(t))) return Or(e?.getProperty?.(t), t);
	let o = U({
		[A]: e[t] ??= i ?? e[t],
		[Sn]: a,
		[Symbol?.toStringTag]() {
			return String(e?.[t] ?? this[A] ?? "") || "";
		},
		[Symbol?.toPrimitive](n) {
			return h(e?.[t], n);
		},
		set value(r) {
			o[fe] = !0, e[t] = this[A] = r ?? n(e[t]), o[fe] = !1;
		},
		get value() {
			return this[A] = e?.[t] ?? this[A];
		}
	});
	Or(o, t);
	let s = W(e, (e, n, r, i) => {
		n === t && o?.[En]?.({
			key: t,
			value: e,
			oldValue: r,
			trigger: i
		});
	});
	return F(o, Symbol.dispose, s), o;
}, Ar = (e, t) => {
	switch (typeof e) {
		case "boolean": return H(e, t);
		case "number": return V(e, t);
		case "string": return Er(e, t);
		case "object": if (e != null) return Dr(U(e), t);
		default: return Dr(e, t);
	}
}, jr = (e, t = "value", n) => {
	let r = Mr(e) ? e : Ar(e, n);
	return t == null ? r : kr(r, t, n);
};
function U(e, t) {
	if (e == null || typeof e == "symbol" || !(typeof e == "object" || typeof e == "function") || xr(e) || (e = P?.(e)) == null || e instanceof Promise || e instanceof WeakRef || xr(e)) return e;
	let n = e;
	if (n == null || typeof n == "symbol" || !(typeof n == "object" || typeof n == "function") || n instanceof Promise || n instanceof WeakRef) return n;
	let r = n;
	return Array.isArray(n) ? (r = Sr(n), r) : n instanceof Map ? (r = wr(n), r) : n instanceof Set ? (r = Tr(n), r) : ((typeof n == "function" || typeof n == "object") && (r = Cr(n)), r);
}
var Mr = (e) => typeof HTMLInputElement < "u" && e instanceof HTMLInputElement ? !0 : !!((typeof e == "object" || typeof e == "function") && e != null && (e?.[j] || e?.[Dn] || I?.has?.(e))), Nr = (e) => Mr(e) ? U(e) : null, Pr = /* @__PURE__ */ new WeakMap(), Fr = (e) => {
	if (!(typeof e == "symbol" || e == null || !(typeof e == "object" || typeof e == "function"))) return e;
}, Ir = "initial", Lr = (e) => {
	let t = e?.[kn] ?? e?.realProp;
	return oe(t) ? t : null;
}, Rr = (e, t) => {
	let n = Lr(e);
	return n != null && (t == null || t == "value") ? n : t;
}, zr = (e, t) => t != null && t == Lr(e) ? e?.value : e?.[t], Br = (e, t, n, r) => {
	if (t != null && t == Lr(e)) {
		let r = zr(e, t);
		if (r != null) return n?.(r, t, null, "set");
	}
	return _(e, t, n, r);
}, Vr = (e, t, n) => {
	let r = $n(t);
	if (n == Ir) {
		if (!r.triggerImmediately) return;
	} else if (!Zn(r.affectTypes, n)) return;
	return (t, r, i, ...a) => e?.(t, r, i, n, ...a);
}, Hr = (e, t, n, r = ["*"]) => {
	if (!e || !Fr(e)) return;
	let i = t == Symbol.iterator ? null : Rr(e, t), a = e?.[xn] ?? I.get(e);
	e = e?.[j] ?? e, queueMicrotask(() => {
		let t = Vr(n, r, Ir);
		t && (i != null && i != Symbol.iterator ? Br(e, i, t, null) : ce(e, t, null));
	});
	let o = a?.affected?.(n, i, r);
	return e?.[Symbol.dispose] ? o : (F(o, Symbol.dispose, o), F(o, Symbol.asyncDispose, o), F(e, Symbol.dispose, o), F(e, Symbol.asyncDispose, o), o);
}, Ur = (e, t, n, r = ["*"]) => {
	let i = $n(r).affectTypes, a = {}, o = e?.value, s = (e) => {
		let t = e?.target?.value;
		Zn(i, "set") && n?.(t, "value", o, "set", e), o = t;
	};
	return e?.addEventListener?.("change", s, a), () => e?.removeEventListener?.("change", s, a);
}, Wr = (e) => Array.isArray(e) && e?.length == 2 && Fr(e?.[0]) && (oe(e?.[1]) || e?.[1] == Symbol.iterator), Gr = (e, t, n, r = ["*"]) => {
	let i = oe(e?.[1]) ? e?.[1] : null;
	return W(e?.[0], i, n, r);
}, Kr = (e, t, n, r = ["*"]) => e?.then?.((e) => W?.(e, t, n, r))?.catch?.((e) => (console.warn(e), null)), W = (e, t, n = () => {}, r) => {
	if (typeof t == "function" ? (r = n, n = t, t = null) : t = Rr(e, t), (typeof n == "object" || Array.isArray(n)) && (r = n, n = () => {}), (y(e) || typeof e == "symbol") && $n(r).triggerImmediately) return ne(globalThis?.Promise?.try?.(() => n?.(e, null, null, null, Ir)));
	if (typeof e?.[Dn] == "function") return e?.[Dn]?.(n, t, r);
	if (Fr(e)) {
		let i = e;
		if (Pr?.has?.(e = e?.[j] ?? e)) return Pr?.get?.(e)?.(i, t, n, r);
		if (Mr(i) || Wr(e) && Mr(e?.[0])) return Nn(e) ? Pr?.getOrInsert?.(e, Kr)?.(e, t, n, r) : Wr(e) ? Pr?.getOrInsert?.(e, Gr)?.(e, t, n, r) : typeof HTMLInputElement < "u" && e instanceof HTMLInputElement ? Pr?.getOrInsert?.(e, Ur)?.(e, t, n, r) : Pr?.getOrInsert?.(e, Hr)?.(i, t, n, r);
		{
			let i = Vr(n, r, Ir);
			return i ? ne(globalThis?.Promise?.try?.(() => Wr(e) ? Br?.(e?.[0], e?.[1], i, null) : t != null && t != Symbol.iterator ? Br?.(e, t, i, null) : ce?.(e, i, null))) : void 0;
		}
	}
}, qr = class {
	#e = /* @__PURE__ */ new WeakMap();
	#t(e) {
		let t = this.#e.get(e);
		return t || (t = /* @__PURE__ */ new WeakMap(), this.#e.set(e, t)), t;
	}
	#n(e) {
		return !Array.isArray(e) || e.length !== 2 ? [null, null] : e;
	}
	hasL1(e) {
		return this.#e.has(e);
	}
	set(e, t) {
		let [n, r] = this.#n(e);
		return this.#t(n).set(r, t), this;
	}
	get(e) {
		let [t, n] = this.#n(e);
		return this.#e.get(t)?.get(n);
	}
	has(e) {
		let [t, n] = this.#n(e);
		return this.#e.get(t)?.has(n) ?? !1;
	}
	delete(e) {
		let [t, n] = this.#n(e), r = this.#e.get(t);
		return r ? r.delete(n) : !1;
	}
	deleteTop(e) {
		return this.#e.delete(e);
	}
	getOrCreate(e, t) {
		let [n, r] = this.#n(e), i = this.#t(n);
		if (i.has(r)) return i.get(r);
		let a = t();
		return i.set(r, a), a;
	}
	getOrInsert(e, t) {
		let [n, r] = this.#n(e), i = this.#t(n);
		return i.has(r) ? i.get(r) : (i.set(r, t), t);
	}
	getOrInsertComputed(e, t) {
		let [n, r] = this.#n(e), i = this.#t(n);
		if (i.has(r)) return i.get(r);
		let a = t([n, r]);
		return i.set(r, a), a;
	}
}, Jr = new qr();
function Yr(e, t, n = ["*"]) {
	if (!e) return;
	if (Jr.has([e, t])) return Jr.get([e, t]);
	let i = (r, i, a, o) => {
		if (i == "value") {
			let i = (a?.value ?? a)?.entries?.(), o = e?.value ?? r?.value ?? r;
			if (i) for (let [e, n] of i) {
				let r = n ?? (a?.value ?? a)?.[e] ?? null, i = o?.[e];
				r == null && i != null ? t(i, e, null, "add") : r != null && i == null ? t(null, e, r, "delete") : x(r, i) && t(i, e, r, "set");
			}
			return Yr(r ?? e?.value, t, n);
		}
		return i == null ? void 0 : e[i];
	};
	return Jr.getOrInsertComputed([e, t], () => e instanceof Set ? W([Zr(e), Symbol.iterator], t, n) : e instanceof Map ? W(e, t, n) : r(e) ? W(e, i, n) : Array.isArray(e) && !(e?.length == 2 && oe(e?.[1]) && Mr(e?.[0])) ? W([e, Symbol.iterator], t, n) : W(e, t, n));
}
function Xr(e, t) {
	return Pn(e, (e) => {
		let n = Array.isArray(e) && e?.length == 2 && ["object", "function"].indexOf(typeof e?.[0]) >= 0 && oe(e?.[1]), r = n ? e?.[1] : null;
		e = n && r != null ? e?.[0] ?? e : e;
		let i = typeof e == "object" || typeof e == "function" ? e?.[j] ?? e : e;
		(e?.[xn] ?? I.get(i))?.unaffected?.(t, r);
	});
}
//#endregion
//#region ../../projects/object.ts/src/core/Assigned.ts
var Zr = (e) => {
	let t = U([]);
	return t.push(...Array.from(e?.values?.() || [])), F(t, Symbol.dispose, W(e, (e, n, r) => {
		if (x(e, r)) if (r == null && e != null) t.push(e);
		else if (r != null && e == null) {
			let e = t.indexOf(r);
			e >= 0 && t.splice(e, 1);
		} else {
			let n = t.indexOf(r);
			n >= 0 && x(t[n], e) && (t[n] = e);
		}
	})), t;
}, Qr = U({
	index: 0,
	length: 0,
	action: "MANUAL",
	view: "",
	canBack: !1,
	canForward: !1,
	entries: []
});
typeof history < "u" && history.pushState.bind(history), typeof history < "u" && history.replaceState.bind(history), typeof history < "u" && history.go.bind(history), typeof history < "u" && history.forward.bind(history), typeof history < "u" && history.back.bind(history);
var $r = (e, t = !1) => {
	let n = e.startsWith("#") ? e : `#${e}`;
	if (t && Qr?.index > 0) {
		let e = Qr?.entries?.[Qr?.index - 1];
		if (e && e.view === n) {
			history.back();
			return;
		}
	}
	t ? (Qr?.entries?.[Qr.index]?.view !== n || Qr?.entries?.[Qr.index]?.view) && history?.replaceState?.(null, "", n) : history?.pushState?.(null, "", n);
}, ei = /* @__PURE__ */ function(e) {
	return e[e.CONTEXT_MENU = 100] = "CONTEXT_MENU", e[e.DROPDOWN = 90] = "DROPDOWN", e[e.MODAL = 80] = "MODAL", e[e.DIALOG = 70] = "DIALOG", e[e.SIDEBAR = 60] = "SIDEBAR", e[e.OVERLAY = 50] = "OVERLAY", e[e.PANEL = 40] = "PANEL", e[e.TOAST = 30] = "TOAST", e[e.TASK = 20] = "TASK", e[e.VIEW = 10] = "VIEW", e[e.DEFAULT = 0] = "DEFAULT", e;
}({}), ti = /* @__PURE__ */ new Map(), ni = {}, ri = () => `closeable-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, ii = (e) => {
	let t = e.id || ri(), n = Object.assign(e, { id: t });
	return n?.hashId ?? (n.hashId = t), ti.set(t, n), ni.debug && console.log("[BackNav] Registered:", t, "priority:", e.priority), () => ai(t);
}, ai = (e) => {
	let t = ti.delete(e);
	return ni.debug && t && console.log("[BackNav] Unregistered:", e), t;
}, oi = (e, t, n) => ii({
	id: `ctx-menu-${e.id || ri()}`,
	priority: ei.CONTEXT_MENU,
	element: new WeakRef(e),
	group: "context-menu",
	isActive: () => t.value === !0,
	close: () => (t.value = !1, n?.(), !1)
}), si = (e, t, n) => ii({
	id: `modal-${e.id || ri()}`,
	priority: ei.MODAL,
	element: new WeakRef(e),
	group: "modal",
	isActive: t ?? (() => {
		let t = e;
		return t?.isConnected && !t?.hasAttribute?.("data-hidden") && t?.checkVisibility?.({
			opacityProperty: !0,
			visibilityProperty: !0
		}) !== !1;
	}),
	close: () => (n?.(), e?.remove?.(), !1)
}), ci = /* @__PURE__ */ new Map(), li = (e) => {
	if (!e) return;
	if (typeof e == "function") return e;
	let t = e;
	if (typeof t?.disconnect == "function") return () => t.disconnect?.();
	if (typeof t?.unsubscribe == "function") return () => t.unsubscribe?.();
}, ui = (e, t) => {
	let n = e?.[Tn];
	return typeof n?.without == "function" ? n.without(["setter", "set"], t) : v(e, t);
}, di = (e, t, n = "value") => !e || !(typeof e == "object" || typeof e == "function") ? t : x(e[n], t) ? ui(e, () => {
	e[n] = t;
}) : t, fi = (e, t, n = "input") => {
	let r = t?.target ?? e;
	return r?.matches?.(n) ? r : r?.querySelector?.(n) ?? e;
}, pi = (e, t) => {
	let n = Array.isArray(e) ? e : [e];
	return ({ source: e, commit: r }) => {
		let i = e?.element ?? e?.self ?? e;
		if (!i?.addEventListener) return;
		let a = (e) => r(e);
		return n.forEach((e) => i.addEventListener(e, a, t)), () => n.forEach((e) => i.removeEventListener?.(e, a, t));
	};
}, mi = (e) => ({ source: t, commit: n }) => {
	let r = t?.element ?? t?.self ?? t;
	if (!r || typeof MutationObserver > "u") return;
	let i = new MutationObserver((t) => {
		(!e || t.some((t) => t.type == "attributes" && t.attributeName == e)) && n(t);
	});
	return i.observe(r, {
		attributes: !0,
		attributeFilter: e ? [e] : void 0
	}), () => i.disconnect();
}, hi = (e) => {
	let t = typeof e.source == "function" ? e.source() : e.source, n = e.forProp ?? "value", r = {
		source: t,
		ref: e.ref,
		forProp: n,
		get(i, a = n) {
			return e.getter?.({
				source: t,
				ref: r.ref,
				linker: r,
				forProp: a,
				event: i,
				reason: i ? "source" : "manual"
			});
		},
		set(i, a, o = n) {
			return e.setter?.(i, {
				source: t,
				ref: r.ref,
				linker: r,
				forProp: o,
				event: a,
				reason: "ref"
			});
		},
		store(i, a, o = n) {
			let s = {
				source: t,
				ref: r.ref,
				linker: r,
				forProp: o,
				event: a,
				reason: "source"
			};
			return e.store ? e.store(i, s) : di(r.ref, i, o);
		},
		trigger(e, t = n) {
			let i = r.get(e, t);
			return r.store(i, e, t);
		},
		bind() {
			r.unbind(), e.bindImmediately && r.trigger();
			let i = li(e.trigger?.({
				source: t,
				ref: r.ref,
				linker: r,
				forProp: n,
				reason: "initial",
				commit: (e, t = n) => r.trigger(e, t)
			})), a = r.ref && e.setter ? W([r.ref, n], (e) => {
				r.set(e, void 0, n);
			}, {
				affectTypes: e.affectTypes ?? ["setter", "manual"],
				triggerImmediately: e.triggerImmediately ?? !0
			}) : null;
			return r.__cleanup = () => {
				i?.(), a?.();
			}, r;
		},
		unbind() {
			r.__cleanup?.(), r.__cleanup = null;
		},
		[Symbol.dispose]() {
			r.unbind();
		},
		__cleanup: null
	};
	return r;
}, gi = (e, t, n, r) => {
	if (n != null) return ci.has(n) && (ci.get(n)?.[0]?.(), ci.delete(n)), ci.getOrInsertComputed?.(n, () => {
		let i = (e ?? localStorage).getItem(n) ?? r?.value ?? r, a = u(t) ? t : Er(i);
		a.value ??= i;
		let o = new WeakRef(a), s = W([a, "value"], (t) => {
			v(o?.deref?.(), () => {
				(e ?? localStorage).setItem(n, t);
			});
		}), c = (t) => {
			t.storageArea == (e ?? localStorage) && t.key == n && x(a.value, t.newValue) && (a.value = t.newValue);
		};
		return addEventListener("storage", c), [() => {
			s?.(), removeEventListener("storage", c);
		}, a];
	});
}, _i = (e, t, n) => {
	if (n == null) return;
	let r = e ?? matchMedia(n), i = r?.matches || !1, a = u(t) ? t : H(i);
	a.value ??= i;
	let o = (e) => a.value = e.matches;
	return r?.addEventListener?.("change", o), () => {
		r?.removeEventListener?.("change", o);
	};
}, vi = (e, t, n) => {
	if (e == null) return;
	let r = n?.value ?? (typeof n == "object" ? null : n) ?? e?.getAttribute?.("data-hidden") == null, i = hi({
		source: e,
		ref: u(t) ? t : H(!!r),
		getter: ({ event: e }) => e?.type != "u2-hidden",
		setter: (e, { source: t }) => an(t, "data-hidden", e),
		trigger: pi(["u2-hidden", "u2-appear"], { passive: !0 })
	}).bind();
	return () => i.unbind();
}, yi = (e, t, n, r) => {
	let i = e?.getAttribute?.(n) ?? (typeof r == "boolean" ? r ? "" : null : ee(r));
	if (!e) return;
	let a = u(t) ? t : Er(i);
	b(a) && !c(a.value) && (a.value = c(i) ?? a.value ?? "");
	let o = hi({
		source: e,
		ref: a,
		getter: ({ source: e }) => e?.getAttribute?.(n),
		setter: (e, { source: t }) => O(t, n, c(e)),
		trigger: mi(n)
	}).bind();
	return () => o.unbind();
}, bi = (e, t, n, r) => {
	let i = r == "border-box" ? e?.[n == "inline" ? "offsetWidth" : "offsetHeight"] : e?.[n == "inline" ? "clientWidth" : "clientHeight"] - Pt(e, n), a = u(t) ? t : V(i);
	b(a) && (a.value ||= (i ?? a.value) || 1);
	let o = new ResizeObserver((e) => {
		b(a) && (r == "border-box" && (a.value = n == "inline" ? e[0].borderBoxSize[0].inlineSize : e[0].borderBoxSize[0].blockSize), r == "content-box" && (a.value = n == "inline" ? e[0].contentBoxSize[0].inlineSize : e[0].contentBoxSize[0].blockSize), r == "device-pixel-content-box" && (a.value = n == "inline" ? e[0].devicePixelContentBoxSize[0].inlineSize : e[0].devicePixelContentBoxSize[0].blockSize));
	});
	return (e?.element ?? e?.self ?? e) instanceof HTMLElement && o?.observe?.(e?.element ?? e?.self ?? e, { box: r }), () => o?.disconnect?.();
}, xi = (e, t, n, r) => {
	r != null && typeof (r?.value ?? r) == "number" && e?.scrollTo?.({ [n == "block" ? "top" : "left"]: r?.value ?? r });
	let i = e?.[n == "block" ? "scrollTop" : "scrollLeft"], a = u(t) ? t : V(i || 0);
	b(a) && (a.value ||= (i ?? a.value) || 1), a.value ||= (i ?? a.value) || 0;
	let o = n == "block" ? "scrollTop" : "scrollLeft", s = n == "block" ? "top" : "left", c = hi({
		source: e,
		ref: a,
		getter: ({ source: e }) => e?.[o] || 0,
		setter: (e, { source: t }) => {
			Math.abs((t?.[o] || 0) - Number(e || 0)) > .001 && t?.scrollTo?.({ [s]: Number(e || 0) });
		},
		trigger: pi("scroll", { passive: !0 })
	}).bind();
	return () => c.unbind();
}, Si = (e, t) => {
	let n = !!e?.checked || !1, r = u(t) ? t : H(n);
	b(r) && r.value !== n && (r.value = n);
	let i = hi({
		source: (e?.type == "radio" ? e?.closest?.("input[type='radio']") : e) ?? e,
		ref: r,
		getter: ({ source: t, event: n }) => fi(t, n, "input[type=\"checkbox\"], input:checked")?.checked ?? e?.checked ?? r?.value,
		setter: (t) => {
			e && e?.checked != t && Me(e, t);
		},
		trigger: pi([
			"click",
			"input",
			"change"
		])
	}).bind();
	return () => i.unbind();
}, Ci = (e, t) => {
	if (y(e) || !e || !(e instanceof Node || e?.element instanceof Node)) return;
	let n = e?.value ?? "", r = u(t) ? t : Er(n);
	b(r) && !c(r.value) && (r.value = c(n) ?? r.value ?? "");
	let i = hi({
		source: e,
		ref: r,
		getter: ({ source: e, event: t }) => fi(e, t)?.value ?? e?.value ?? r?.value ?? "",
		setter: (e, { source: t }) => {
			let n = g(e);
			t && x(t?.value, n) && (t.value = n ?? "", t?.dispatchEvent?.(new Event("change", { bubbles: !0 })));
		},
		trigger: pi([
			"click",
			"input",
			"change"
		])
	}).bind();
	return () => i.unbind();
}, wi = (e, t) => {
	if (y(e) || !e || !(e instanceof Node || e?.element instanceof Node)) return;
	let n = Number(e?.valueAsNumber) || 0, r = u(t) ? t : V(n);
	b(r) && !r.value && n && (r.value = n);
	let i = hi({
		source: e,
		ref: r,
		getter: ({ source: e, event: t }) => Number(fi(e, t)?.valueAsNumber || e?.valueAsNumber || 0) || 0,
		setter: (e, { source: t }) => {
			t && (t.type == "range" || t.type == "number") && typeof t?.valueAsNumber == "number" && x(t?.valueAsNumber, e) && (t.valueAsNumber = Number(e), t?.dispatchEvent?.(new Event("change", { bubbles: !0 })));
		},
		trigger: pi([
			"click",
			"input",
			"change"
		])
	}).bind();
	return () => i.unbind();
}, G = (e, t, n, ...r) => {
	if (n == yi || n == O) {
		let t = K?.get?.(e)?.get?.(O)?.get?.(r[0])?.[0];
		if (t) return t;
	}
	let i = (t ?? jr)?.(null), a = n?.(e, i, ...r), o = a && typeof a == "object" && typeof a?.unbind == "function" ? a : null, s = o?.ref ?? i, c = o ? () => o.unbind() : a;
	return c && s && F(s, Symbol.dispose, c), s;
}, Ti = (e, ...t) => G(e, Er, yi, ...t), Ei = (e, ...t) => G(e, Er, Ci, ...t), Di = (e, ...t) => G(e, V, wi, ...t), Oi = (...e) => {
	if (ci.has(e[0])) return ci.get(e[0])?.[1];
	let t = gi, n = (Er ?? jr)?.(null), [r, i] = t?.(null, n, ...e);
	return r && n && F(n, Symbol.dispose, r), n;
}, ki = (e, ...t) => G(e, V, bi, ...t), Ai = (e, ...t) => G(e, H, Si, ...t), ji = (e, ...t) => G(e, V, xi, ...t), Mi = (e, ...t) => G(e, H, vi, ...t), Ni = (...e) => G(null, H, _i, ...e), Pi = class e {
	_x;
	_y;
	constructor(e = 0, t = 0) {
		this._x = typeof e == "number" ? V(e) : e, this._y = typeof t == "number" ? V(t) : t;
	}
	get x() {
		return this._x;
	}
	set x(e) {
		typeof e == "number" ? this._x.value = e : this._x = e;
	}
	get y() {
		return this._y;
	}
	set y(e) {
		typeof e == "number" ? this._y.value = e : this._y = e;
	}
	get 0() {
		return this._x;
	}
	get 1() {
		return this._y;
	}
	toArray() {
		return [this._x, this._y];
	}
	clone() {
		return new e(this._x.value, this._y.value);
	}
	set(e, t) {
		return this._x.value = e, this._y.value = t, this;
	}
	copy(e) {
		return this._x.value = e.x.value, this._y.value = e.y.value, this;
	}
	add(t) {
		return new e(this._x.value + t.x.value, this._y.value + t.y.value);
	}
	subtract(t) {
		return new e(this._x.value - t.x.value, this._y.value - t.y.value);
	}
	multiply(t) {
		return new e(this._x.value * t, this._y.value * t);
	}
	divide(t) {
		if (t === 0) throw Error("Division by zero");
		return new e(this._x.value / t, this._y.value / t);
	}
	dot(e) {
		return this._x.value * e.x.value + this._y.value * e.y.value;
	}
	cross(e) {
		return this._x.value * e.y.value - this._y.value * e.x.value;
	}
	magnitude() {
		return Math.sqrt(this._x.value * this._x.value + this._y.value * this._y.value);
	}
	magnitudeSquared() {
		return this._x.value * this._x.value + this._y.value * this._y.value;
	}
	distanceTo(e) {
		let t = this._x.value - e.x.value, n = this._y.value - e.y.value;
		return Math.sqrt(t * t + n * n);
	}
	distanceToSquared(e) {
		let t = this._x.value - e.x.value, n = this._y.value - e.y.value;
		return t * t + n * n;
	}
	normalize() {
		let t = this.magnitude();
		return t === 0 ? new e(0, 0) : new e(this._x.value / t, this._y.value / t);
	}
	equals(e, t = 1e-6) {
		return Math.abs(this._x.value - e.x.value) < t && Math.abs(this._y.value - e.y.value) < t;
	}
	lerp(t, n) {
		let r = Math.max(0, Math.min(1, n));
		return new e(this._x.value + (t.x.value - this._x.value) * r, this._y.value + (t.y.value - this._y.value) * r);
	}
	angleTo(e) {
		let t = this.dot(e), n = this.cross(e);
		return Math.atan2(n, t);
	}
	rotate(t) {
		let n = Math.cos(t), r = Math.sin(t);
		return new e(this._x.value * n - this._y.value * r, this._x.value * r + this._y.value * n);
	}
	projectOnto(e) {
		let t = this.dot(e) / e.magnitudeSquared();
		return e.multiply(t);
	}
	reflect(e) {
		let t = e.normalize(), n = this.dot(t);
		return this.subtract(t.multiply(2 * n));
	}
	clamp(t, n) {
		return new e(Math.max(t.x.value, Math.min(n.x.value, this._x.value)), Math.max(t.y.value, Math.min(n.y.value, this._y.value)));
	}
	min() {
		return Math.min(this._x.value, this._y.value);
	}
	max() {
		return Math.max(this._x.value, this._y.value);
	}
	static zero() {
		return new e(0, 0);
	}
	static one() {
		return new e(1, 1);
	}
	static unitX() {
		return new e(1, 0);
	}
	static unitY() {
		return new e(0, 1);
	}
	static fromAngle(t, n = 1) {
		return new e(Math.cos(t) * n, Math.sin(t) * n);
	}
	static fromPolar(t, n) {
		return e.fromAngle(t, n);
	}
}, Fi = (e = 0, t = 0) => new Pi(e, t), Ii = (e) => {
	let t = [], n = (e) => {
		e && typeof e == "object" && "value" in e ? t.push(e) : Array.isArray(e) ? e.forEach(n) : e && typeof e == "object" && Object.values(e).forEach(n);
	};
	return n(e), t;
}, Li = (e, t) => {
	let n = () => e.map((e) => e && typeof e == "object" && "value" in e ? e.value : e), r = t(...n());
	if (typeof r == "number") {
		let i = V(r), a = () => {
			i.value = t(...n());
		};
		return Ii(e).forEach((e) => W(e, a)), i;
	}
	let i = r, a = () => {
		i = t(...n());
	};
	return Ii(e).forEach((e) => W(e, a)), i;
}, Ri = class {
	static add(e, t, n = "px") {
		return Li([e, t], () => `calc(${e.value}${n} + ${t.value}${n})`);
	}
	static subtract(e, t, n = "px") {
		return Li([e, t], () => `calc(${e.value}${n} - ${t.value}${n})`);
	}
	static multiply(e, t) {
		return Li([e, t], () => `calc(${e.value} * ${t.value})`);
	}
	static divide(e, t) {
		return Li([e, t], () => `calc(${e.value} / ${t.value})`);
	}
	static clamp(e, t, n, r = "px") {
		return Li([
			e,
			t,
			n
		], () => `clamp(${t.value}${r}, ${e.value}${r}, ${n.value}${r})`);
	}
	static min(e, t, n = "px") {
		return Li([e, t], () => `min(${e.value}${n}, ${t.value}${n})`);
	}
	static max(e, t, n = "px") {
		return Li([e, t], () => `max(${e.value}${n}, ${t.value}${n})`);
	}
}, zi = class {
	static width = V(typeof window < "u" ? window?.innerWidth : 0);
	static height = V(typeof window < "u" ? window?.innerHeight : 0);
	static init() {
		typeof window < "u" && window?.addEventListener?.("resize", () => {
			this.width.value = window?.innerWidth, this.height.value = window?.innerHeight;
		});
	}
	static center() {
		return {
			x: Ri.divide(this.width, V(2)),
			y: Ri.divide(this.height, V(2))
		};
	}
};
zi.init();
//#endregion
//#region ../../projects/lur.e/src/lure/core/Binding.ts
var K = new qr(), Bi = new FinalizationRegistry((e) => e?.()), Vi = Symbol.for("@mapped"), Hi = Symbol.for("@virtual"), Ui = Symbol.for("@behavior"), Wi = (e) => !!e && typeof e == "object" && "ref" in e && typeof e?.unbind == "function", Gi = (e, t) => {
	if (Wi(t)) {
		t.bind?.();
		let n = () => t.unbind?.();
		return F(e, Symbol.dispose, n), n;
	}
	let n = {
		click: t,
		input: t,
		change: t
	};
	t?.({ target: e });
	let r = i?.(e, "addEventListener", n);
	return F(e, Symbol.dispose, r), r;
}, Ki = (e, t) => {
	if (t) for (let n of t) Gi(e, n);
	return e;
}, qi = (e, n, r = "value") => {
	let a = t(e), o = t(n), s = (e) => {
		le(o, "value", ue(a)?.[r ?? "value"] ?? g(ue(o)));
	}, c = {
		click: s,
		input: s,
		change: s
	};
	return s?.({ target: e }), i?.(e, "addEventListener", c), le(o, "value", e?.[r ?? "value"] ?? g(ue(n))), () => i?.(e, "removeEventListener", c);
}, Ji = (e, n, r = "") => {
	t(e);
	let i = t(n), a = de(r);
	return Qe(e, a, (e) => {
		if (e.type == "attributes" && e.attributeName == a) {
			let t = e?.target?.getAttribute?.(e.attributeName), n = ue(i), r = g(n);
			x(e.oldValue, t) && n != null && (typeof n == "object" || typeof n == "function") && (x(r, t) || r == null) && le(n, "value", t);
		}
	});
}, Yi = (e, t, n) => {
	let r = K.get([e, t]);
	if (r) {
		let e = r[n]?.[1];
		delete r[n], e?.();
	}
}, Xi = (e, t, n, r) => {
	let i = K.getOrInsertComputed([e, t], () => ({}));
	return i?.[n]?.[1]?.(), i[n] = r, !0;
}, Zi = (e, n, r, i, a, o) => {
	let s = Wi(n) ? n : null;
	s && (s.bind?.(), n = s.ref);
	let c = t(e);
	if (e = ue(c), !e || !(e instanceof Node || e?.element instanceof Node)) return;
	let l;
	l && l?.abort?.(), l = new AbortController();
	let u = t(n);
	i?.(e, r, n);
	let d = W?.([n, "value"], (e, t, n) => {
		let o = ue(u), s = ue(a), d = ue(c), f = g(o) ?? g(e);
		(!s || s?.[r] == o) && (typeof o?.[Ui] == "function" ? o?.[Ui]?.((t = e) => i(d, r, f), [
			e,
			r,
			n
		], [
			l?.signal,
			r,
			c
		]) : i(d, r, f));
	}), f = null;
	typeof o == "boolean" && o && (i == O && (f = Ji(e, n, r)), i == on && (f = qi(e, n, r))), typeof o == "function" && (f = o(e, r, n));
	let p = () => {
		f?.disconnect?.(), f != null && typeof f == "function" && f?.(), s?.unbind?.(), d?.(), l?.abort?.(), Yi?.(e, i, r);
	};
	if (F(n, Symbol.dispose, p), Bi.register(e, p), !Xi(e, i, r, [n, p])) return p;
}, q = (e, t, n, r, i, a) => (r(e, t, Wi(n) ? n.ref : n), Zi(e, n, t, r, i, a)), Qi = (e) => typeof e == "number" && Number.isFinite(e) ? `${e}px` : e, $i = (e, t) => {
	if (!e) return () => {};
	let n = [q(e, "--client-x", Qi(t?.[0]), ln), q(e, "--client-y", Qi(t?.[1]), ln)];
	return t?.[2] != null && n.push(q(e, "--anchor-width", Qi(t?.[2]), ln)), t?.[3] != null && n.push(q(e, "--anchor-height", Qi(t?.[3]), ln)), () => n?.forEach?.((e) => e?.());
}, ea = (e, t) => {
	if (!e) return () => {};
	let n = null, r = !1, i = () => {
		if (!r) {
			if (!e.isConnected) {
				n &&= (n(), null);
				return;
			}
			if (!n) {
				let e = t();
				n = typeof e == "function" ? e : null;
			}
		}
	}, a = typeof document < "u" ? document.documentElement : null, o = e?.element ?? e, s = o instanceof Node ? o : null;
	if (!s) return () => {};
	let c = typeof MutationObserver < "u" && a ? new MutationObserver((e) => {
		for (let t of e) {
			let e = t.target;
			if (e === s || e instanceof Node && e.contains(s)) {
				i();
				return;
			}
			let n = [...Array.from(t?.addedNodes || []), ...Array.from(t?.removedNodes || [])];
			for (let e of n) if (e === s || e instanceof Node && e.contains(s)) {
				i();
				return;
			}
		}
	}) : null;
	return c && a && c.observe(a, {
		childList: !0,
		subtree: !0
	}), queueMicrotask(() => i()), () => {
		r = !0, c?.disconnect?.(), n?.(), n = null;
	};
}, ta = (e) => {
	let t = typeof e == "string" ? e.trim() : "";
	if (!t) return !0;
	for (let e of t.split(";")) {
		let t = e.trim();
		if (!t) continue;
		let n = t.indexOf(":");
		if (n < 0 || t.slice(n + 1).trim().length > 0) return !1;
	}
	return !0;
}, na = (e) => {
	if (e == null) return;
	let t = e.getAttribute("style");
	t != null && ta(t) && (e.removeAttribute("style"), e.style.cssText = "");
}, ra = (e, t) => {
	ta(t) ? (e.style.cssText = "", e.removeAttribute("style")) : e.style.cssText = t;
}, ia = /* @__PURE__ */ new WeakMap(), aa = /* @__PURE__ */ new WeakMap(), oa = {
	logAll(e) {
		return () => console.log("attributes:", [...e?.attributes].map((e) => ({
			name: e.name,
			value: e.value
		})));
	},
	append(e) {
		return (...t) => e?.append?.(...[...t || []]?.map?.((e) => e?.element ?? e) || t);
	},
	current(e) {
		return e;
	}
}, sa = class {
	direction = "children";
	selector;
	index = 0;
	_eventMap = /* @__PURE__ */ new WeakMap();
	constructor(e, t = 0, n = "children") {
		this.index = t, this.selector = e, this.direction = n;
	}
	_observeDOMChange(e, t, n) {
		return typeof t == "string" ? et(e, t, n) : null;
	}
	_observeAttributes(e, t, n) {
		return typeof this.selector == "string" ? $e(e, this.selector, t, n) : Qe(e ?? this.selector, t, n);
	}
	_getArray(e) {
		if (typeof e == "function" && (e = this.selector || e?.(this.selector)), !this.selector) return [e];
		if (typeof this.selector == "string") {
			let t = typeof e?.matches == "function" && e?.element != null && e?.matches?.(this.selector) ? [e] : [];
			if (this.direction == "children") {
				let n = typeof e?.querySelectorAll == "function" && e?.element != null ? [...e?.querySelectorAll?.(this.selector)] : [];
				return n?.length >= 1 ? [...n] : t;
			} else if (this.direction == "parent") {
				let n = e?.closest?.(this.selector);
				return n ? [n] : t;
			}
			return t;
		}
		return Array.isArray(this.selector) ? this.selector : [this.selector];
	}
	_getSelected(e) {
		let t = e?.self ?? e, n = this._selector(e);
		if (typeof n == "string") {
			if (this.direction == "children") return t?.matches?.(n) ? t : t?.querySelector?.(n);
			if (this.direction == "parent") return t?.matches?.(n) ? t : t?.closest?.(n);
		}
		return t == (n?.element ?? n) ? n?.element ?? n : null;
	}
	_redirectToBubble(e) {
		return typeof this._selector() == "string" && {
			pointerenter: "pointerover",
			pointerleave: "pointerout",
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			focus: "focusin",
			blur: "focusout"
		}?.[e] || e;
	}
	_addEventListener(e, t, n, r) {
		let i = this._selector(e);
		if (typeof i != "string") return i?.addEventListener?.(t, n, r), n;
		let a = this._redirectToBubble(t), o = e?.self ?? e, s = (t) => {
			let r = this._selector(e), i = t?.currentTarget ?? o, a = null;
			if (t?.composedPath && typeof t.composedPath == "function") {
				let e = t.composedPath();
				for (let n of e) if (n instanceof HTMLElement || n instanceof Element) {
					let e = n?.element ?? n;
					if (typeof r == "string") {
						if (Ve(e, r, t)) {
							a = e;
							break;
						}
					} else if (Be(r, e, t)) {
						a = e;
						break;
					}
				}
			}
			a ||= (a = t?.target ?? this._getSelected(e) ?? i, a?.element ?? a), typeof r == "string" ? Be(i, Ve(a, r, t), t) && n?.call?.(a, t) : Be(i, r, t) && Be(r, a, t) && n?.call?.(a, t);
		};
		return o?.addEventListener?.(a, s, r), this._eventMap.getOrInsert(o, /* @__PURE__ */ new Map()).getOrInsert(a, /* @__PURE__ */ new WeakMap()).set(n, {
			wrap: s,
			option: r
		}), s;
	}
	_removeEventListener(e, t, n, r) {
		let i = this._selector(e);
		if (typeof i != "string") return i?.removeEventListener?.(t, n, r), n;
		let a = e?.self ?? e, o = this._redirectToBubble(t), s = this._eventMap.get(a);
		if (!s) return;
		let c = s.get(o), l = c?.get?.(n);
		a?.removeEventListener?.(o, l?.wrap ?? n, r ?? l?.option ?? {}), c?.delete?.(n), c?.size == 0 && s?.delete?.(o), s.size == 0 && this._eventMap.delete(a);
	}
	_selector(e) {
		return typeof this.selector == "string" && typeof e?.selector == "string" ? ((e?.selector || "") + " " + this.selector)?.trim?.() : this.selector;
	}
	get(e, t, n) {
		let r = this._getArray(e), i = r.length > 0 ? r[this.index] : this._getSelected(e);
		if (t in oa) return oa?.[t]?.(i);
		if (t == "length" && r?.length != null) return r?.length;
		if (t == "_updateSelector") return (e) => this.selector = e || this.selector;
		if (["style", "attributeStyleMap"].indexOf(t) >= 0) {
			let n = e?.self ?? e, r = this._selector(e), a = typeof r == "string" ? Ct(r, "ux-query", n) : i;
			return t == "attributeStyleMap" ? a?.styleMap ?? a?.attributeStyleMap : a?.[t];
		}
		if (t == "self") return e?.self ?? e;
		if (t == "selector") return this._selector(e);
		if (t == "observeAttr") return (t, n) => this._observeAttributes(e, t, n);
		if (t == "DOMChange") return (t) => this._observeDOMChange(e, this.selector, t);
		if (t == "addEventListener") return (t, n, r) => this._addEventListener(e, t, n, r);
		if (t == "removeEventListener") return (t, n, r) => this._removeEventListener(e, t, n, r);
		if (t == "getAttribute") return (t) => {
			let n = this._getArray(e), r = n.length > 0 ? n[this.index] : this._getSelected(e), i = ia?.get?.(e)?.get?.(this.selector) ?? r;
			return K?.get?.(i)?.get?.(O)?.has?.(t) ? K?.get?.(i)?.get?.(O)?.get?.(t)?.[0] : r?.getAttribute?.(t);
		};
		if (t == "setAttribute") return (t, n) => {
			let r = this._getArray(e), i = r.length > 0 ? r[this.index] : this._getSelected(e);
			return typeof n == "object" && (n?.value != null || "value" in n) ? q(i, t, n, O, null, !0) : i?.setAttribute?.(t, n);
		};
		if (t == "removeAttribute") return (t) => {
			let n = this._getArray(e), r = n.length > 0 ? n[this.index] : this._getSelected(e), i = ia?.get?.(e)?.get?.(this.selector) ?? r;
			return K?.get?.(i)?.get?.(O)?.has?.(t) ? K?.get?.(i)?.get?.(O)?.get?.(t)?.[1]?.() : r?.removeAttribute?.(t);
		};
		if (t == "hasAttribute") return (t) => {
			let n = this._getArray(e), r = n.length > 0 ? n[this.index] : this._getSelected(e), i = ia?.get?.(e)?.get?.(this.selector) ?? r;
			return K?.get?.(i)?.get?.(O)?.has?.(t) ? !0 : r?.hasAttribute?.(t);
		};
		if (t == "element") {
			if (r?.length <= 1) return i?.element ?? i;
			let e = document.createDocumentFragment();
			return e.append(...r), e;
		}
		if (t == Symbol.toPrimitive && (this.selector?.includes?.("input") || this.selector?.matches?.("input"))) return (e) => e == "number" ? (i?.element ?? i)?.valueAsNumber ?? parseFloat((i?.element ?? i)?.value) : e == "string" ? String((i?.element ?? i)?.value ?? i?.element ?? i) : e == "boolean" ? (i?.element ?? i)?.checked : (i?.element ?? i)?.checked ?? (i?.element ?? i)?.value ?? i?.element ?? i;
		if (t == "checked" && (this.selector?.includes?.("input") || this.selector?.matches?.("input"))) return (i?.element ?? i)?.checked;
		if (t == "value" && (this.selector?.includes?.("input") || this.selector?.matches?.("input"))) return (i?.element ?? i)?.valueAsNumber ?? (i?.element ?? i)?.valueAsDate ?? (i?.element ?? i)?.value ?? (i?.element ?? i)?.checked;
		if (t == Dn && (this.selector?.includes?.("input") || this.selector?.matches?.("input"))) return (t) => {
			let n = i?.value, r = [(e) => {
				let r = this._getSelected(e?.target);
				t?.(r?.value, "value", n), n = r?.value;
			}, { passive: !0 }];
			return this._addEventListener(e, "change", ...r), () => this._removeEventListener(e, "change", ...r);
		};
		if (t == "deref" && (typeof i == "object" || typeof i == "function") && i != null) {
			let e = new WeakRef(i);
			return () => e?.deref?.()?.element ?? e?.deref?.();
		}
		if (typeof t == "string" && /^\d+$/.test(t)) return r[parseInt(t)];
		let a = i;
		return a?.[t] == null ? r?.[t] == null ? typeof e?.[t] == "function" ? e?.[t].bind(a) : e?.[t] : typeof r[t] == "function" ? r[t].bind(r) : r[t] : typeof a[t] == "function" ? a[t].bind(a) : a[t];
	}
	set(e, t, n) {
		let r = this._getArray(e), i = r.length > 0 ? r[this.index] : this._getSelected(e);
		return typeof t == "string" && /^\d+$/.test(t) || r[t] != null ? !1 : (i && (i[t] = n), !0);
	}
	has(e, t) {
		let n = this._getArray(e), r = n.length > 0 ? n[this.index] : this._getSelected(e);
		return typeof t == "string" && /^\d+$/.test(t) && n[parseInt(t)] != null || n[t] != null || r && t in r;
	}
	deleteProperty(e, t) {
		let n = this._getArray(e), r = n.length > 0 ? n[this.index] : this._getSelected(e);
		return r && t in r ? (delete r[t], !0) : !1;
	}
	ownKeys(e) {
		let t = this._getArray(e), n = t.length > 0 ? t[this.index] : this._getSelected(e), r = /* @__PURE__ */ new Set();
		return t.forEach((e, t) => r.add(t.toString())), Object.getOwnPropertyNames(t).forEach((e) => r.add(e)), n && Object.getOwnPropertyNames(n).forEach((e) => r.add(e)), Array.from(r);
	}
	defineProperty(e, t, n) {
		let r = this._getArray(e), i = r.length > 0 ? r[this.index] : this._getSelected(e);
		return i ? (Object.defineProperty(i, t, n), !0) : !1;
	}
	apply(e, t, n) {
		return n[0] ||= this.selector, this.selector = e?.apply?.(t, n) || this.selector, new Proxy(e, this);
	}
}, J = (e, t = document.documentElement, n = 0, r = "children") => {
	if ((e?.element ?? e) instanceof HTMLElement) {
		let t = e?.element ?? e;
		return aa.getOrInsert(t, new Proxy(t, new sa("", n, r)));
	}
	if (typeof e == "function") {
		let t = e;
		return aa.getOrInsert(t, new Proxy(t, new sa("", n, r)));
	}
	return t == null || typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || t === void 0 ? null : ia?.get?.(t)?.has?.(e) ? ia?.get?.(t)?.get?.(e) : ia?.getOrInsert?.(t, /* @__PURE__ */ new Map())?.getOrInsertComputed?.(e, () => new Proxy(t, new sa(e, n, r)));
}, ca = (e) => y(e) ? [] : Array.isArray(e) ? e.map((e, t) => [t, e]) : e instanceof Map ? Array.from(e.entries()) : e instanceof Set ? Array.from(e.values()) : Array.from(Object.entries(e)), la = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(t), r = new WeakRef(e);
	if (typeof t == "object" || typeof t == "function") {
		ca(t).forEach(([e, t]) => {
			O(r?.deref?.(), e, t);
		});
		let i = W(t, (e, t) => {
			O(r?.deref?.(), t, e), Zi(r?.deref?.(), e, t, O, n, !0);
		});
		F(t, Symbol.dispose, i), F(e, Symbol.dispose, i);
	} else console.warn("Invalid attributes object:", t);
}, ua = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(t), r = new WeakRef(e);
	if (typeof t == "object" || typeof t == "function") {
		ca(t).forEach(([e, t]) => {
			O(r?.deref?.(), "aria-" + (e?.toString?.() || e || ""), t);
		});
		let i = W(t, (e, t) => {
			O(r?.deref?.(), "aria-" + (t?.toString?.() || t || ""), e, !0), Zi(r, e, t, O, n, !0);
		});
		F(t, Symbol.dispose, i), F(e, Symbol.dispose, i);
	} else console.warn("Invalid ARIA object:", t);
	return e;
}, da = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(t), r = new WeakRef(e);
	if (typeof t == "object" || typeof t == "function") {
		ca(t).forEach(([e, t]) => {
			sn(r?.deref?.(), e, t);
		});
		let i = W(t, (e, t) => {
			sn(r?.deref?.(), t, e), Zi(r?.deref?.(), e, t, sn, n);
		});
		F(t, Symbol.dispose, i), F(e, Symbol.dispose, i);
	} else console.warn("Invalid dataset object:", t);
	return e;
}, fa = (e, t) => {
	if (!t) return e;
	if (typeof t == "string") ra(e, t);
	else if (typeof t?.value == "string") W([t, "value"], (t) => {
		ra(e, t ?? "");
	});
	else if (typeof t == "object" || typeof t == "function") {
		let n = new WeakRef(t), r = new WeakRef(e);
		ca(t).forEach(([e, t]) => {
			ln(r?.deref?.(), e, t);
		});
		let i = W(t, (e, t) => {
			ln(r?.deref?.(), t, e), Zi(r?.deref?.(), e, t, ln, n?.deref?.());
		});
		F(t, Symbol.dispose, i), F(e, Symbol.dispose, i);
	} else console.warn("Invalid styles object:", t);
	return e;
}, pa = async (e, t) => fa(e, await t?.(e)), ma = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(t), r = new WeakRef(e), i = (e) => {
		let n = J("input", e?.target);
		n?.value != null && x(n?.value, t?.value) && (t.value = n?.value), n?.valueAsNumber != null && x(n?.valueAsNumber, t?.valueAsNumber) && (t.valueAsNumber = n?.valueAsNumber), n?.checked != null && x(n?.checked, t?.checked) && (t.checked = n?.checked);
	};
	ca(t).forEach(([e, t]) => {
		on(r?.deref?.(), e, t);
	});
	let a = W(t, (e, t) => {
		let i = r.deref();
		i && (t == "checked" ? Me(i, e) : q(i, t, e, on, n?.deref?.(), !0));
	});
	return F(t, Symbol.dispose, a), F(e, Symbol.dispose, a), e.addEventListener("change", i), e;
}, ha = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(e);
	ca(t).forEach(([t, n]) => {
		let r = e;
		n === void 0 || n == null ? r.classList.contains(n) && r.classList.remove(n) : r.classList.contains(n) || r.classList.add(n);
	});
	let r = Yr(t, (e) => {
		let t = n?.deref?.();
		t && (e === void 0 || e == null ? t.classList.contains(e) && t.classList.remove(e) : t.classList.contains(e) || t.classList.add(e));
	});
	return F(t, Symbol.dispose, r), F(e, Symbol.dispose, r), e;
}, ga = (e = null, t, n = !0) => {
	let r = [], i = () => {
		r?.forEach?.(([e, t]) => e?.(...t)), r?.splice?.(0, r?.length);
	};
	return (a, o, s, c, l = null) => {
		let u = w(l) ?? w(e), d = Y(a, t, o, u), f = Y(s, t, o, u), p = w(d?.parentElement ?? f?.parentElement) ?? u;
		if (!p) return;
		e != p && (e = p);
		let m = Ne(p, f);
		([
			"add",
			"set",
			"delete"
		].indexOf(c || "") >= 0 || !c) && (d == null && f != null || c == "delete" ? r?.push?.([Ua, [
			p,
			f,
			null,
			m >= 0 ? m : o
		]]) : d != null && f == null || c == "add" ? r?.push?.([za, [
			p,
			d,
			null,
			o
		]]) : (d != null && f != null || c == "set") && r?.push?.([Ha, [
			p,
			d,
			null,
			m >= 0 ? m : o,
			f
		]])), (c && c != "get" && [
			"add",
			"set",
			"delete"
		].indexOf(c) >= 0 || !c && !n) && i?.();
	};
}, _a = (e) => ((e instanceof Map || e instanceof Set) && (e = Array.from(e?.values?.())), e), va = (e, t = [], n) => {
	if (!t || !e) return e;
	n = (t?.[Vi] ? t?.mapper : n) ?? n, t = (t?.[Vi] ? t?.children : t) ?? t;
	let r = Array.from(t?.keys?.() || []), i = _a(t)?.map?.((t, i) => Y(t, n, r?.[i] ?? i, e));
	return Wa(e, i), i?.forEach?.((t) => za(e, t)), e;
}, ya = class {
	#e = document.createComment("");
	#t;
	#n;
	#r = null;
	#i = null;
	#a = {};
	#o;
	#s = null;
	#c = null;
	#l = null;
	makeUpdater(e = null) {
		e && (this.#i?.(), this.#i = null, this.#r = null, this.#r ??= ga(e, null, !1), this.#i ??= W?.([this.#t, "value"], this._onUpdate.bind(this)));
	}
	get boundParent() {
		return this.#l;
	}
	set boundParent(e) {
		e instanceof HTMLElement && w(e) && e != this.#l && (this.#l = e, this.makeUpdater(e), this.#o &&= (this.#o?.parentNode != null && this.#o?.remove?.(), null), this.element);
	}
	constructor(e, t = (e) => e, n = null) {
		this.#e = document.createComment(""), r(t) && (typeof e == "function" || typeof e == "object") && !r(e) && ([e, t] = [t, e]), !n && typeof t == "object" && t && !r(t) && (n = t), this.#s = (t == null ? null : typeof t == "function" ? t : typeof t == "object" ? t?.mapper : null) ?? ((e) => e), this.#o = null, this.#t = (r(e) ? e : t?.(e, -1)) ?? e, this.#n = document.createDocumentFragment();
		let i = {
			removeNotExistsWhenHasPrimitives: !0,
			uniquePrimitives: !0,
			preMap: !0
		}, a = (w(n) ? null : n) || {};
		this.#a = Object.assign(i, a), this.boundParent = w(this.#a?.boundParent) ?? w(n) ?? null;
	}
	$getNodeBy(e, t) {
		let n = y(r(t) ? t?.value : t) ? this.#c ??= Ga(t) : Y(t, t == e ? null : this.#s, -1, e);
		return this.#c != null && (y(t) || r(t)) && (this.#c.textContent = "" + (t?.value ?? (y(t) ? t : ""))), n;
	}
	$getNode(e, t = !0) {
		let n = y(this.#t?.value) ? this.#c ??= Ga(this.#t) : Y(this.#t?.value, e == this.#t?.value ? null : this.#s, -1, e);
		return this.#c != null && (y(this.#t) || r(this.#t)) && (this.#c.textContent = "" + (y(this.#t) ? this.#t : this.#t?.value ?? "")), n != null && t && (this.#o = n), n;
	}
	get [Vi]() {
		return !0;
	}
	elementForPotentialParent(e) {
		return Promise.try(() => {
			let t = this.$getNode(e);
			if (!(!t || !e || t?.contains?.(e) || e == t) && e instanceof HTMLElement && w(e)) if (Array.from(e?.children).find((e) => e === t)) this.boundParent = e;
			else {
				let n = new MutationObserver((r) => {
					for (let i of r) i.type === "childList" && i.addedNodes.length > 0 && Array.from(i.addedNodes || []).find((e) => e === t) && (this.boundParent = e, n.disconnect());
				});
				n.observe(e, { childList: !0 });
			}
		})?.catch?.(console.warn.bind(console)), this.element;
	}
	get self() {
		let e = this.$getNode(this.boundParent) ?? this.#e, t = w(e?.parentElement) ? e?.parentElement : this.boundParent;
		return this.boundParent ??= w(t) ?? this.boundParent, queueMicrotask(() => {
			let t = w(e?.parentElement) ? e?.parentElement : this.boundParent;
			this.boundParent ??= w(t) ?? this.boundParent;
		}), t ?? this.boundParent ?? e;
	}
	get element() {
		let e = this.$getNode(this.boundParent) ?? this.#e, t = w(e?.parentElement) ? e?.parentElement : this.boundParent;
		return this.boundParent ??= w(t) ?? this.boundParent, queueMicrotask(() => {
			let t = w(e?.parentElement) ? e?.parentElement : this.boundParent;
			this.boundParent ??= w(t) ?? this.boundParent;
		}), e;
	}
	_onUpdate(e, t, n, r) {
		if (y(n) && y(e)) return;
		let i = y(n) ? this.#o : this.$getNodeBy(this.boundParent, n), a = this.$getNode(this.boundParent, !1) ?? this.#e;
		(i && !i?.parentNode || this.#o?.parentNode) && (i = this.#o ?? i);
		let o = this.#r?.(a, Ne(this.boundParent, i), i, r, this.boundParent);
		return a != null && a != this.#o ? this.#o = a : a == null && i != this.#o && (this.#o = i), o;
	}
}, ba = (e) => (typeof e == "object" || typeof e == "function" || typeof e == "symbol") && e != null, xa = (e, t, n = null) => {
	let i = null;
	if (e instanceof HTMLElement) return J(e);
	if (e == null) return document.createComment(":NULL:");
	let a = (typeof t == "function" ? t(e, -1) : e) ?? e;
	if (y(a)) return i ??= Ga(a);
	if (i != null && y(a) && (i.textContent = "" + a), a != null && r(a)) {
		if (y(a?.value)) return a?.value == null ? document.createComment(":NULL:") : i ??= Ga(a?.value);
		if (typeof a == "object" || typeof a == "function") return wa.getOrInsertComputed(ba(e) ? e : a, () => new ya(e, t, n));
	}
	return Y(a, null, -1, n);
}, Sa = (e, t) => (t && t != e && !e?.contains?.(t) && w(t) ? e?.elementForPotentialParent?.(t) : null) ?? e?.element, Ca = (e, t) => Sa(e, t) ?? (r(e) && T(e?.value) ? e?.value : e), wa = /* @__PURE__ */ new WeakMap(), Ta = /* @__PURE__ */ new WeakMap(), Ea = (e) => y(e) ? e : r(e) && y(e?.value) ? Ta?.get(e) : wa?.get?.(e), Da = /* @__PURE__ */ new WeakMap(), Oa = (e, t) => {
	if (Da?.has?.(e)) return Da?.get?.(e);
	let n = document.createComment(":PROMISE:");
	return e?.then?.((r) => {
		let i = typeof t == "function" ? t(r) : r;
		Da?.set?.(e, i), queueMicrotask(() => {
			try {
				if (typeof n?.replaceWith == "function") {
					if (!n?.isConnected) return;
					T(i) && n?.replaceWith?.(i);
				} else n?.isConnected && T(i) && n?.parentNode?.replaceChild?.(n, i);
			} catch {
				if (!n?.isConnected) return;
				n?.remove?.();
			}
		});
	}), n;
}, ka = (e, t, n = -1, i) => t == null ? ((e instanceof WeakRef || typeof e?.deref == "function") && (e = e.deref()), e instanceof Promise || typeof e?.then == "function" ? Oa(e, (e) => ka(e, t, n, i)) : T(e) && !e?.element || T(e?.element) ? e : r(e) ? (e instanceof HTMLElement ? J : xa)(e) : typeof e == "object" && e ? Ea(e) : typeof e == "function" ? ka(e?.(), t, n, i) : y(e) && e != null ? Ga(e) : document.createComment(":NULL:")) : e = ka(t?.(e, n), null, -1, i), Aa = (e, t) => Ca(e, t) ?? T(e), ja = (e, t, n = -1, i) => t == null ? ((e instanceof WeakRef || typeof e?.deref == "function") && (e = e.deref()), e instanceof Promise || typeof e?.then == "function" ? Oa(e, (e) => Y(e, t, n, i)) : T(e) && !e?.element ? e : T(e?.element) ? Ca(e, i) : r(e) ? (e instanceof HTMLElement ? J : xa)(e)?.element : typeof e == "object" && e ? Ea(e) : typeof e == "function" ? Y(e?.(), t, n, i) : y(e) && e != null ? Ga(e) : document.createComment(":NULL:")) : e = Y(t?.(e, n), null, -1, i), Ma = (e) => (typeof e == "object" || typeof e == "function" || typeof e == "symbol") && e != null, Na = /* @__PURE__ */ new WeakSet(), Pa = (e, t, n = -1, r) => {
	if ((e instanceof WeakRef || typeof e?.deref == "function") && (e = e.deref()), e instanceof Promise || typeof e?.then == "function") return Oa(e, (e) => Pa(e, t, n, r));
	if (Ma(e) && !T(e)) {
		if (wa.has(e)) {
			let i = Ea(e) ?? ka(e, t, n, r);
			return Aa(i instanceof WeakRef ? i?.deref?.() : i, r);
		}
		let i = ka(e, t, n, r);
		return !t && i != null && i != e && Ma(e) && !T(e) && wa.set(e, i), Aa(i, r);
	}
	return ja(e, t, n, r);
}, Y = (e, t, n = -1, r) => {
	if (Ma(e) && Na.has(e)) return Ea(e) ?? T(e);
	Ma(e) && Na.add(e);
	let i = Pa(e, t, n, r);
	return Ma(e) && Na.delete(e), i;
}, Fa = (e, t, n = -1) => {
	T(t) && t != null && t?.parentNode != e && (Number.isInteger(n) && n >= 0 && n < e?.childNodes?.length ? e?.insertBefore?.(t, e?.childNodes?.[n]) : e?.append?.(t));
}, Ia = (e, t, n = -1) => {
	if (!(!T(t) || e == t || t?.parentNode == e)) {
		if (t = t?._onUpdate ? Sa(t, e) : t, !t?.parentNode && T(t)) {
			Fa(e, t, n);
			return;
		}
		e?.parentNode != t?.parentNode && T(t) && Fa(e, t, n);
	}
}, La = (e) => ((e instanceof Map || e instanceof Set) && (e = Array.from(e?.values?.())), e), Ra = (e, t, n, r = -1) => {
	let i = t?.length ?? 0;
	if (Array.isArray(Mn(t)) || t instanceof Map || t instanceof Set) {
		let i = La(t)?.map?.((t, r) => Y(t, n, r, e))?.filter?.((e) => e != null), a = document.createDocumentFragment();
		i?.forEach?.((e) => Ia(a, e)), Ia(e, a, r);
	} else {
		let a = Y(t, n, i, e);
		a != null && Ia(e, a, r);
	}
}, za = (e, t, n, r = -1) => {
	n != null && (t = n?.(t, r)), t?.children && Array.isArray(Mn(t?.children)) && (t?.[Hi] || t?.[Vi]) ? Ra(e, t?.children, null, r) : Ra(e, t, null, r);
}, Ba = (e, t, n = -1) => !e || t?.parentNode == e && t?.parentNode != null ? t : t?.parentNode != e && !w(t?.parentNode) && Number.isInteger(n) && n >= 0 && Array.from(e?.childNodes || [])?.length > n ? e.childNodes?.[n] : t, Va = (e, t, n) => {
	if (t?.parentNode) if (t?.parentNode == n?.parentNode) if (e = t?.parentNode ?? e, t.nextSibling === n) e.insertBefore(n, t);
	else if (n.nextSibling === t) e.insertBefore(t, n);
	else {
		let r = t.nextSibling;
		e.replaceChild(n, t), e.insertBefore(t, r);
	}
	else t?.replaceWith?.(n);
}, Ha = (e, t, n, r = -1, i) => {
	n != null && (t = n?.(t, r)), e ||= i?.parentNode;
	let a = Ba(e, Y(i, n, r), r);
	if (a instanceof Text && typeof t == "string") a.textContent = t;
	else if (t != null) {
		let n = Y(t);
		a?.parentNode == e && a != n && a instanceof Text && n instanceof Text ? a?.textContent != n?.textContent && (a.textContent = n?.textContent?.trim?.() ?? "") : a?.parentNode == e && a != n && a != null && a?.parentNode != null ? Va(e, a, n) : (a?.parentNode != e || a?.parentNode == null) && za(e, n, null, r);
	}
}, Ua = (e, t, n, r = -1) => {
	let i = Y(t, n);
	if (e ||= i?.parentNode, Array.from(e?.childNodes ?? [])?.length < 1) return;
	let a = Ba(e, i, r);
	return a?.parentNode == e && a?.remove?.(), e;
}, Wa = (e, t, n) => {
	let r = Array.from(Mn(t) || [])?.map?.((e, t) => Y(e, n, t));
	return Array.from(e.childNodes).forEach((e) => {
		r?.find?.((t) => !x?.(t, e)) || e?.remove?.();
	}), e;
}, Ga = (e) => y(e) && e != null ? document.createTextNode(e) : e == null ? document.createComment(":NULL:") : Ta.getOrInsertComputed(e, () => {
	let t = document.createTextNode(((r(e) ? e?.value : e) ?? "")?.trim?.() ?? "");
	return W([e, "value"], (e) => {
		t.textContent = ("" + (e?.innerText ?? e?.textContent ?? e?.value ?? e ?? ""))?.trim?.() ?? "";
	}), t;
}), Ka = (e) => ((e instanceof Map || e instanceof Set) && (e = Array.from(e?.values?.())), e), qa = class {
	#e;
	#t;
	#n;
	#r;
	#i;
	#a = null;
	#o = null;
	#s = {};
	#c = document.createComment("");
	#l = /* @__PURE__ */ new Map();
	#u = null;
	makeUpdater(e = null) {
		e && (this.#o?.(), this.#o = null, this.#a = null, this.#a ??= ga(e, this.mapper.bind(this), Array.isArray(this.#e)), this.#o ??= Yr?.(this.#e, this._onUpdate.bind(this)));
	}
	get boundParent() {
		return this.#u;
	}
	set boundParent(e) {
		e instanceof HTMLElement && w(e) && e != this.#u && (this.#u = e, this.makeUpdater(e), this.element);
	}
	constructor(t, n = (e) => e, r = null) {
		e(n) && (typeof t == "function" || typeof t == "object") && !e(t) && ([t, n] = [n, t]), !r && typeof n == "object" && n && !e(n) && (r = n), this.#c = document.createComment(""), this.#r = /* @__PURE__ */ new WeakMap(), this.#i = /* @__PURE__ */ new Map(), this.#n = (n == null ? null : typeof n == "function" ? n : typeof n == "object" ? n?.mapper : null) ?? ((e) => e), this.#e = (e(t) ? t : t?.iterator ?? n?.iterator ?? t) ?? [], this.#t = document.createDocumentFragment();
		let i = {
			removeNotExistsWhenHasPrimitives: !0,
			uniquePrimitives: !0,
			preMap: !0
		}, a = (w(r) ? null : r) || {};
		this.#s = Object.assign(i, a), this.boundParent = w(this.#s?.boundParent) ?? w(r) ?? null, this.boundParent || this.#s.preMap && (va(this.#t, this.#e, this.mapper.bind(this)), this.#t.childNodes.length === 0 && this.#t.appendChild(this.#c));
	}
	get [Vi]() {
		return !0;
	}
	elementForPotentialParent(e) {
		return Promise.try(() => {
			let t = Y(this.#e?.[0], this.mapper.bind(this), 0);
			if (!(!t || !e || t?.contains?.(e) || e == t) && e instanceof HTMLElement && w(e)) if (Array.from(e?.children).find((e) => e === t)) this.boundParent = e;
			else {
				let n = new MutationObserver((r) => {
					for (let i of r) i.type === "childList" && i.addedNodes.length > 0 && Array.from(i.addedNodes || []).find((e) => e === t) && (this.boundParent = e, n.disconnect());
				});
				n.observe(e, { childList: !0 });
			}
		})?.catch?.(console.warn.bind(console)), this.element;
	}
	get children() {
		return Ka(this.#e);
	}
	get self() {
		let e = Y(this.#e?.[0], this.mapper.bind(this), 0), t = w(e?.parentElement) ? e?.parentElement : this.boundParent;
		return this.boundParent ??= w(t) ?? this.boundParent, queueMicrotask(() => {
			let t = w(e?.parentElement) ? e?.parentElement : this.boundParent;
			this.boundParent ??= w(t) ?? this.boundParent;
		}), t ?? this.boundParent ?? va(this.#t, this.#e, this.mapper.bind(this));
	}
	get element() {
		let e = this.#t?.childNodes?.length > 0 ? this.#t : Y(this.#e?.[0], this.mapper.bind(this), 0), t = w(e?.parentElement) ? e?.parentElement : this.boundParent;
		return this.boundParent ??= w(t) ?? this.boundParent, queueMicrotask(() => {
			let t = w(e?.parentElement) ? e?.parentElement : this.boundParent;
			this.boundParent ??= w(t) ?? this.boundParent;
		}), e;
	}
	get mapper() {
		return (...e) => {
			if (e?.[0] == null) return null;
			if (e?.[0] instanceof Node) return e?.[0];
			if (e?.[0] instanceof Promise || typeof e?.[0]?.then == "function") return null;
			if (!((e?.[1] == null || e?.[1] < 0 || typeof e?.[1] != "number" || !m(e?.[1])) && (Array.isArray(this.#e) || this.#e instanceof Set))) {
				if (e?.[0] != null && (typeof e?.[0] == "object" || typeof e?.[0] == "function" || typeof e?.[0] == "symbol")) return this.#r.getOrInsert(e?.[0], this.#n(...e));
				if (e?.[0] != null && this.#e instanceof Set) return this.#i.getOrInsert(e?.[0], this.#n(...e));
				if (e?.[0] != null && this.#e instanceof Map) return typeof e?.[0] == "object" || typeof e?.[0] == "function" || typeof e?.[0] == "symbol" ? this.#r.getOrInsert(e?.[0], this.#n(...e)) : typeof e?.[1] == "object" || typeof e?.[1] == "function" || typeof e?.[1] == "symbol" ? this.#r.getOrInsert(e?.[1], this.#n(...e)) : this.#i.getOrInsert(e?.[1], this.#n(...e));
				if (e?.[0] != null) return this.#s?.uniquePrimitives && y(e?.[0]) ? this.#i.getOrInsert(e?.[0], this.#n(...e)) : this.#n(...e);
			}
		};
	}
	_onUpdate(e, t, n, r = "") {
		if (r == "add" || e != null && n == null) {
			if (this.#l.has(t)) return;
			let e = xa(jr(this.#e, t), (...e) => ((e?.[1] == null || e?.[1] < 0) && (e[1] = t ?? e?.[1]), this.mapper(...e)));
			this.#l.set(t, e), za(this.boundParent, e, null, t);
		}
		if (r == "delete" || e == null && n != null) {
			let e = this.#l.get(t);
			e && Ua(this.boundParent, e, null, t), this.#l.delete(t);
		}
	}
	*[Symbol.iterator]() {
		let e = 0;
		if (this.#e) for (let t of this.#e) yield this.mapper(t, e++);
	}
}, Ja = (e, t, n = null) => new qa(e, t, n), Ya = (e, t = document.documentElement) => {
	if (e?.value == null) return J(e, t);
	let n = J(e?.value, t);
	return W(e, (e, t) => n?._updateSelector(e)), n;
}, Xa = (e) => {
	if (typeof e == "string") {
		let t = Ya(Pe(e));
		return t?.element ?? t;
	} else if (e instanceof HTMLElement || e instanceof Element || e instanceof DocumentFragment || e instanceof Document || e instanceof Node) return e;
	else return null;
}, Za = (e, t = {}, n) => {
	let r = Y(typeof e == "string" ? Xa(e) : e, null, -1);
	return r && n && Ja(n, (e) => e, r), r && t && (t.ctrls != null && Ki(r, t.ctrls), t.attributes != null && la(r, t.attributes), t.properties != null && ma(r, t.properties), t.classList != null && ha(r, t.classList), t.behaviors != null && Lt(r, t.behaviors), t.dataset != null && da(r, t.dataset), t.stores != null && Vt(r, t.stores), t.mixins != null && Ht(r, t.mixins), t.style != null && fa(r, t.style), t.aria != null && ua(r, t.aria), "value" in t && q(r, "value", t.value, on, t, !0), "placeholder" in t && q(r, "placeholder", t.placeholder, on, t, !0), t.is != null && q(r, "is", t.is, O, t, !0), t.role != null && q(r, "role", t.role, on, t), t.slot != null && q(r, "slot", t.slot, on, t), t.part != null && q(r, "part", t.part, O, t, !0), t.name != null && q(r, "name", t.name, O, t, !0), t.type != null && q(r, "type", t.type, O, t, !0), t.icon != null && q(r, "icon", t.icon, O, t, !0), t.inert != null && q(r, "inert", t.inert, O, t, !0), t.hidden != null && q(r, "hidden", t.visible ?? t.hidden, an, t), t.on != null && ze(r, t.on), t.rules != null && t.rules.forEach?.((e) => pa(r, e))), J(r);
};
//#endregion
//#region ../../projects/lur.e/src/lure/misc/Normalizer.ts
function Qa(e, t = 4) {
	let n = 0;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		if (i === " ") n += 1;
		else if (i === "	") n += t - n % t;
		else break;
	}
	return n;
}
function $a(e, t, n = 4) {
	let r = 0, i = 0;
	for (; i < e.length && r < t;) {
		let t = e[i];
		if (t === " ") r += 1, i++;
		else if (t === "	") r += n - r % n, i++;
		else break;
	}
	return e.slice(i);
}
function eo(e) {
	return e.includes("\r\n") ? "\r\n" : e.includes("\r") ? "\r" : "\n";
}
function to(e, t) {
	for (e = Math.abs(e), t = Math.abs(t); t;) [e, t] = [t, e % t];
	return e;
}
function no(e, { ignoreFirstLine: t = !0, tabWidth: n = 4 } = {}) {
	let r = e.split(/\r\n|\n|\r/), i = +!!t, a = [];
	for (let e = i; e < r.length; e++) {
		let t = r[e];
		t.trim() !== "" && a.push(Qa(t, n));
	}
	if (a.length === 0) return {
		min: 0,
		step: 0,
		allEven: !0,
		allDiv4: !0
	};
	let o = Math.min(...a), s = a.map((e) => e - o).filter((e) => e > 0), c = 0;
	for (let e of s) c = c ? to(c, e) : e;
	let l = a.every((e) => e % 2 == 0), u = a.every((e) => e % 4 == 0);
	return c = c === 0 ? u ? 4 : l ? 2 : 1 : c % 4 == 0 ? 4 : c % 2 == 0 ? 2 : 1, {
		min: o,
		step: c,
		allEven: l,
		allDiv4: u
	};
}
function ro(e, t, n = "floor", r = 4) {
	if (!t || t <= 1) return e;
	let i = Qa(e, r);
	if (i === 0) return e;
	let a;
	a = n === "nearest" ? Math.round(i / t) * t : n === "ceil" ? Math.ceil(i / t) * t : Math.floor(i / t) * t;
	let o = i - a;
	return o > 0 ? $a(e, o, r) : o < 0 ? " ".repeat(-o) + e : e;
}
function io(e, { scope: t = "void-only" } = {}) {
	if (!e || typeof e != "string") return e;
	let n = new Set([
		"area",
		"base",
		"br",
		"col",
		"embed",
		"hr",
		"img",
		"input",
		"link",
		"meta",
		"param",
		"source",
		"track",
		"wbr"
	]), r = "", i = 0, a = e.length;
	for (; i < a;) {
		let o = e[i];
		if (o !== "<") {
			r += o, i++;
			continue;
		}
		if (e.startsWith("<!--", i)) {
			let t = e.indexOf("-->", i + 4);
			if (t === -1) {
				r += e.slice(i);
				break;
			}
			r += e.slice(i, t + 3), i = t + 3;
			continue;
		}
		if (e[i + 1] === "!" || e[i + 1] === "?") {
			let t = e.indexOf(">", i + 2);
			if (t === -1) {
				r += e.slice(i);
				break;
			}
			r += e.slice(i, t + 1), i = t + 1;
			continue;
		}
		if (e[i + 1] === "/") {
			let t = e.indexOf(">", i + 2);
			if (t === -1) {
				r += e.slice(i);
				break;
			}
			r += e.slice(i, t + 1), i = t + 1;
			continue;
		}
		let s = i + 1;
		for (; s < a && /\s/.test(e[s]);) s++;
		let c = s;
		for (; s < a && /[A-Za-z0-9:-]/.test(e[s]);) s++;
		let l = e.slice(c, s).toLowerCase(), u = s, d = null;
		for (; u < a;) {
			let t = e[u];
			if (d) t === d && (d = null), u++;
			else if (t === "\"" || t === "'") d = t, u++;
			else if (t === ">") break;
			else u++;
		}
		if (u >= a) {
			r += e.slice(i);
			break;
		}
		let f = e.slice(i, u + 1);
		if (!(t === "all" || t === "input-only" && l === "input" || t === "void-only" && n.has(l))) {
			r += f, i = u + 1;
			continue;
		}
		let p = "", m = null, ee = !1;
		for (let e = 0; e < f.length; e++) {
			let t = f[e];
			if (m) {
				p += t, t === m && (m = null);
				continue;
			}
			if (t === "\"" || t === "'") {
				m = t, p += t, ee = !1;
				continue;
			}
			if (t === "\n" || t === "\r" || t === "	" || t === " ") {
				ee ||= (p += " ", !0);
				continue;
			}
			p += t, ee = !1;
		}
		p = p.replace(/\s*(\/?)\s*>$/, "$1>"), r += p, i = u + 1;
	}
	return r;
}
function ao(e, { preserveCommentGaps: t = !0 } = {}) {
	if (!e || typeof e != "string") return e;
	if (!t) return e.replace(/>\s+</g, "><");
	let n = e;
	return n = n.replace(/-->([^\S\r\n]+)<!--/g, "--><!--").replace(/-->([^\S\r\n]+)</g, "--><").replace(/>([^\S\r\n]+)<!--/g, "><!--"), n = n.replace(/>\s+</g, "><"), n = n.replace(RegExp("", "g"), " "), n;
}
function oo(e, { normalizeIndent: t = !0, ignoreFirstLine: n = !0, tabWidth: r = 4, alignStep: i = "auto", quantize: a = "none" } = {}) {
	if (!e || typeof e != "string" || e.indexOf("<") === -1) return e;
	e = e?.trim?.();
	let o = [], s = e.replace(/<(pre|textarea|script|style)\b[\s\S]*?<\/\1>/gi, (e) => `\u0000${o.push(e) - 1}\u0000`), c = eo(s), l = s.split(/\r\n|\n|\r/), u = +!!n, { min: d, step: f } = no(s, {
		ignoreFirstLine: n,
		tabWidth: r
	});
	if (t && d > 0) for (let e = u; e < l.length; e++) {
		let t = l[e];
		t.trim() !== "" && (l[e] = $a(t, d, r));
	}
	let p = i === "auto" ? f : i;
	if (a !== "none" && p > 1) for (let e = u; e < l.length; e++) {
		let t = l[e];
		t.trim() !== "" && (l[e] = ro(t, p, a, r));
	}
	let m = l.join(c);
	return m = io(m, { scope: "void-only" }), m = ao(m), m.replace(/\u0000(\d+)\u0000/g, (e, t) => o[+t])?.trim?.();
}
function so(e, ...t) {
	let n = t?.[0] ?? "", r = e.indexOf(n);
	if (r < 0) {
		let e = t?.join?.("") ?? "";
		return /<([A-Za-z\/!?])[\w\W]*$/.test(e) && !/>[\w\W]*$/.test(e);
	}
	let i = e.slice(0, r + 1).join(""), a = !1, o = !1, s = !1;
	for (let e = 0; e < i.length; e++) {
		let t = i[e], n = i[e + 1] ?? "";
		if (!a) {
			t === "<" && /[A-Za-z\/!?]/.test(n) && (a = !0, o = !1, s = !1);
			continue;
		}
		if (!o && !s) {
			if (t === "\"") {
				s = !0;
				continue;
			}
			if (t === "'") {
				o = !0;
				continue;
			}
			if (t === ">") {
				a = !1;
				continue;
			}
		} else if (s) {
			if (t === "\"") {
				s = !1;
				continue;
			}
		} else if (o && t === "'") {
			o = !1;
			continue;
		}
	}
	return a;
}
//#endregion
//#region ../../projects/lur.e/src/lure/misc/Syntax.ts
var co = /* @__PURE__ */ new WeakMap(), lo = (e) => {
	let t = e.match(/^([a-zA-Z0-9\-]+)?(?:#([a-zA-Z0-9\-_]+))?((?:\.[a-zA-Z0-9\-_]+)*)$/);
	if (!t) return {
		tag: e,
		id: null,
		className: null
	};
	let [, n = "div", r, i] = t;
	return {
		tag: n,
		id: r,
		className: i ? i.replace(/\./g, " ").trim() : null
	};
}, uo = (e) => {
	if (typeof e != "string" || !e?.trim?.()) return -1;
	let t = e.match(/^#\{(\d+)\}$/);
	if (t) return parseInt(t[1] ?? "-1", 10);
	let n = e.match(/#\{(\d+)\}/);
	return n ? parseInt(n[1] ?? "-1", 10) : -1;
}, fo = (e, t, n, r) => {
	if (!e) return e;
	if (e != null) {
		let n = [], r = (t) => {
			let r = Array.from(e?.attributes || []).find((e) => e.name == t && e.value?.includes?.("#{"));
			if (r) {
				let e = [t, uo(r?.value) ?? -1];
				return n.push(e), e;
			}
			return [t, -1];
		};
		[
			"dataset",
			"style",
			"classList",
			"visible",
			"aria",
			"value",
			"placeholder",
			"ref"
		].forEach((e) => r(e));
		let i = (t, n) => {
			let r = [];
			for (let i of Array.from(e?.attributes || [])) {
				let e = Array.isArray(t) ? t?.some?.((e) => e == "") : t == "", a = (Array.isArray(t) ? t.find((e) => i.name?.startsWith?.(e)) : t = i.name?.startsWith?.(t) ? t : "") ?? "", o = i.name.trim()?.replace?.(a, ""), s = i.value?.includes?.("#{") && i.value?.includes?.("}"), c = uo(i?.value), l = Array.isArray(n) ? n?.some?.((e) => o?.startsWith?.(e)) : n == o;
				s && (a == "" && e || a != "") && c >= 0 && !l && r.push([o, c]);
			}
			return r;
		}, a = (t, n, r = "") => {
			let i = /* @__PURE__ */ new Map();
			for (let a of Array.from(e?.attributes || [])) {
				let e = Array.isArray(t) ? t?.some?.((e) => e == "") : t == "", o = (Array.isArray(t) ? t.find((e) => a.name?.startsWith?.(e)) : t = a.name?.startsWith?.(t) ? t : "") ?? "", s = a.name.trim()?.replace?.(o, ""), c = a.value?.includes?.("#{") && a.value?.includes?.("}"), l = uo(a?.value) ?? -1, u = Array.isArray(n) ? n?.some?.((e) => s?.startsWith?.(e)) : n == s, d = (Array.isArray(r) ? r?.some?.((e) => a.name === e) : a.name === r) && r !== "";
				if (c && (o == "" && e || o != "" || d) && l >= 0 && !u) {
					let e = d ? a.name : s;
					i.has(e) || i.set(e, []), i.get(e)?.push(l);
				}
			}
			return Array.from(i.entries());
		}, o = i(["attr:", ""], [
			"ref",
			"value",
			"placeholder"
		]), s = i(["prop:"], []), c = a(["on:", "@"], [], ""), l = a(["ref:"], [], ["ref"]), u = Object.fromEntries(n?.filter?.((e) => e[1] >= 0)?.map?.((e) => [e[0], t?.[e[1]] ?? null]) ?? []);
		u.attributes = Object.fromEntries(o?.filter?.((e) => e[1] >= 0)?.map?.((e) => [e[0], t?.[e[1]] ?? null]) ?? []), u.properties = Object.fromEntries(s?.filter?.((e) => e[1] >= 0)?.map?.((e) => [e[0], t?.[e[1]] ?? null]) ?? []), u.on = Object.fromEntries(c?.filter?.((e) => e[1]?.some?.((e) => e >= 0))?.map?.((e) => [e[0], e[1]?.map?.((e) => t?.[e]).filter((e) => e != null)]) ?? []);
		let d = n?.find?.((e) => e[0] == "ref" && e[1] >= 0)?.[1];
		if (d != null && d >= 0) {
			let n = t?.[d];
			typeof n == "function" ? n?.(e) : typeof n == "object" && n && (n.value = e);
		}
		l?.forEach?.((n) => {
			(n?.[1]?.filter?.((e) => e != null && e >= 0)?.map?.((e) => t?.[e])?.filter?.((e) => e != null))?.forEach?.((t) => {
				typeof t == "function" ? t?.(e) : typeof t == "object" && t && (t.value = e);
			});
		}), ((e) => {
			if (e == null) return;
			let t = (e) => o?.some?.((t) => t[0] == e) || n?.some?.((t) => t[0] == e) || e?.startsWith?.("ref:") || e == "ref";
			for (let n of Array.from(e?.attributes || [])) (n.value?.includes?.("#{") && n.value?.includes?.("}") && t(n.name) || n.value?.startsWith?.("#{") && n.value?.endsWith?.("}") || n.name?.includes?.(":") || n.name?.includes?.("ref:") || n.name == "ref") && e?.removeAttribute?.(n.name);
			for (let t of Array.from(e?.attributes || [])) typeof t.value == "string" && /#\{\d+\}/.test(t.value) && e?.removeAttribute?.(t.name);
		})(e), na(e), co?.has?.(e) || co?.set?.(e, Za(e, u));
	}
	return co?.get?.(e) ?? e;
}, po = (e, ...t) => {
	let n = [];
	for (let r = 0; r < e?.length; r++) {
		let i = e?.[r], a = t?.[r];
		n.push(vo(i)), n.push(a);
	}
	if (n?.length <= 1) return Y(n?.[0], null, 0);
	let r = document.createDocumentFragment();
	return r.append(...n?.filter?.((e) => e != null)?.map?.((e, t) => Y(e, null, t))?.filter?.((e) => e != null)), r;
};
function mo(e, ...t) {
	return e?.at?.(0)?.trim?.()?.startsWith?.("<") && e?.at?.(-1)?.trim?.()?.endsWith?.(">") ? _o({ createElement: null })(e, ...t) : po(e, ...t);
}
var ho = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement && e != document.body), go = (e, t, n) => {
	n != null && (n.boundParent = e);
	let i = Y(n, null, -1, e);
	T(i) ? i?.parentNode != e && !i?.contains?.(e) && i != null && t?.replaceWith?.(r(i) && (typeof i?.value == "object" || typeof i?.value == "function") && T(i?.value) ? i?.value : i) : t?.remove?.();
};
function _o({ createElement: e = null } = {}) {
	return function(e, ...t) {
		let n = [], r = [], i = [];
		for (let a = 0; a < e.length; a++) if (n.push(e?.[a] || ""), a < t.length) if (e[a]?.trim()?.endsWith?.("<")) {
			let e = lo(t?.[a]);
			n.push(e.tag || "div"), e.id && n.push(` id="${e.id}"`), e.className && n.push(` class="${e.className}"`);
		} else {
			let o = so(e, e?.[a] || "", e?.[a + 1] || ""), s = /[\w:\-\.\]]\s*=\s*$/.test(e[a]?.trim?.() ?? "") || e[a]?.trim?.()?.endsWith?.("="), c = e[a]?.trim?.()?.match?.(/['"]$/), l = e[a + 1]?.trim?.()?.match?.(/^['"]/) ?? c, u = c && l, d = s;
			if ((d || u) && o) {
				let e = d && !u, r = i.length;
				n.push((typeof t?.[a] == "string" ? t?.[a]?.trim?.() != "" : t?.[a] != null) ? e ? `"#{${r}}"` : `#{${r}}` : ""), i.push(t?.[a]);
			} else if (!o) {
				let e = r.length;
				n.push((typeof t?.[a] == "string" ? t?.[a]?.trim?.() != "" : t?.[a] != null) ? y(t?.[a]) ? String(t?.[a])?.trim?.() : `<!--o:${e}-->` : ""), r.push(t?.[a]);
			}
		}
		let a = oo(n.join("").trim()), o = /* @__PURE__ */ new WeakMap(), s = new DOMParser().parseFromString(a, "text/html"), c = (s instanceof HTMLTemplateElement || s?.matches?.("template") ? s : s.querySelector("template"))?.content ?? s.body ?? s, l = document.createDocumentFragment(), u = Array.from(c.childNodes)?.filter((e) => e instanceof Node).map((e) => (!ho(e?.parentNode) && e?.parentNode != l && (e?.remove?.(), e != null && l?.append?.(e)), e)), d = [];
		return u.forEach((e) => {
			let t = e ? document.createTreeWalker(e, NodeFilter.SHOW_ALL, null) : null;
			do {
				let e = t?.currentNode;
				d.push(e);
			} while (t?.nextNode?.());
		}), d?.filter?.((e) => e?.nodeType == Node.COMMENT_NODE)?.forEach?.((e) => {
			if (e?.nodeValue?.trim?.()?.includes?.("o:") && Number.isInteger(parseInt(e?.nodeValue?.trim?.()?.slice?.(2) ?? "-1"))) {
				let t = r?.[parseInt(e?.nodeValue?.trim?.()?.slice?.(2) ?? "-1") ?? -1];
				if (t == null || t === void 0 || (typeof t == "string" ? t : null)?.trim?.() == "") e?.remove?.();
				else {
					let n = e?.parentNode;
					Array.isArray(t) || t instanceof Map || t instanceof Set ? go?.(n, e, t = Ja(t, null, n)) : t != null && go?.(n, e, t);
				}
			}
			e?.isConnected && e?.remove?.();
		}), d?.filter((e) => e.nodeType == Node.ELEMENT_NODE)?.map?.((e) => {
			fo(e, i, r, o);
		}), Array.from(l?.childNodes)?.length > 1 ? l : l?.childNodes?.[0];
	};
}
var vo = (e, ...t) => {
	if (typeof e == "string") {
		if (e?.trim?.()?.startsWith?.("<") && e?.trim?.()?.endsWith?.(">")) {
			let t = new DOMParser().parseFromString(oo(e?.trim?.()), "text/html"), n = t.querySelector("template")?.content ?? t.body;
			if (n instanceof HTMLBodyElement) {
				let e = document.createDocumentFragment();
				return e.append(...Array.from(n.childNodes ?? [])), Array.from(e.childNodes)?.length > 1 ? e : e?.childNodes?.[0];
			}
			if (n instanceof DocumentFragment) return n;
			if (n?.childNodes?.length > 1) {
				let e = document.createDocumentFragment();
				return e.append(...Array.from(n?.childNodes ?? [])), e;
			}
			return n?.childNodes?.[0] ?? new Text(e);
		}
		return new Text(e);
	} else if (typeof e == "function") return vo(e?.());
	else if (Array.isArray(e) && t) return mo(e, ...t);
	else if (e instanceof Node) return e;
	return Y(e);
}, yo = /* @__PURE__ */ new Map(), bo = /* @__PURE__ */ new WeakMap(), xo = /* @__PURE__ */ new WeakMap(), So = /* @__PURE__ */ new WeakMap(), Co = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), wo = (e) => {
	let t = Co(e);
	return [
		"border-box",
		"content-box",
		"device-pixel-content-box"
	].indexOf(t) >= 0 ? t : null;
}, To = (e) => {
	let t = Co(e);
	return t?.startsWith?.("inline") ? "inline" : t?.startsWith?.("block") ? "block" : null;
}, Eo = Symbol.for("@render@"), Do = Symbol.for("@defKeys@"), Oo = typeof document < "u" ? document?.createElement?.("style") : null, ko = (e, t, n) => e == "attr" ? Ti.bind(null, t, n || "") : e == "media" ? Ni : e == "query" ? (e) => J?.(n || e || "", t) : e == "query-shadow" ? (e) => J?.(n || e || "", t?.shadowRoot ?? t) : e == "localStorage" ? Oi : e == "inline-size" ? ki.bind(null, t, "inline", wo(n) || "border-box") : e == "content-box" ? ki.bind(null, t, To(n) || "inline", "content-box") : e == "block-size" ? ki.bind(null, t, "block", wo(n) || "border-box") : e == "border-box" ? ki.bind(null, t, To(n) || "inline", "border-box") : e == "scroll" ? ji.bind(null, t, To(n) || "inline") : e == "device-pixel-content-box" ? ki.bind(null, t, To(n) || "inline", "device-pixel-content-box") : e == "checked" ? Ai.bind(null, t) : e == "value" ? Ei.bind(null, t) : e == "value-as-number" ? Di.bind(null, t) : jr;
Oo && typeof document < "u" && document.querySelector?.("head")?.appendChild?.(Oo);
var Ao = (e) => e == "query" || e == "query-shadow" ? "input" : e == "media" ? !1 : e == "localStorage" || e == "attr" ? null : e == "inline-size" || e == "block-size" || e == "border-box" || e == "content-box" || e == "scroll" || e == "device-pixel-content-box" ? 0 : e == "checked" ? !1 : e == "value" ? "" : e == "value-as-number" ? 0 : null;
Oo && (Oo.innerHTML = "@layer ux-preload {\n        :host { display: none; }\n    }");
function jo(e) {
	let t = e.prototype ?? Object.getPrototypeOf(e) ?? e, n = t?.$init ?? e?.$init;
	return t.$init = function(...e) {
		n?.call?.(this, ...e);
		let t = {}, r = Object.getPrototypeOf(this) ?? this;
		for (; r;) {
			if (Object.hasOwn(r, Do)) {
				let e = Object.assign({}, Object.getOwnPropertyDescriptors(r), r[Do] ?? {});
				for (let n of Object.keys(e)) n in t || (t[n] = e[n]);
			}
			r = Object.getPrototypeOf(r);
		}
		for (let [e, n] of Object.entries(t)) {
			let t = this[e];
			n != null && Object.defineProperty(this, e, n);
			try {
				this[e] = t || this[e];
			} catch {}
		}
		return this;
	}, e;
}
function Mo(e, t) {
	return function(n, r) {
		let i = globalThis?.customElements;
		try {
			if (!i || !e || typeof i.get != "function" || typeof i.define != "function") return n;
			let r = i.get(e);
			if (r) return r;
			i?.define?.(e, n, t);
		} catch (t) {
			if (t?.name === "NotSupportedError" || /has already been used|already been defined/i.test(t?.message || "")) return i?.get?.(e) ?? n;
			throw t;
		}
		return n;
	};
}
function No(e = {}) {
	let { attribute: t, source: n, name: r, from: i } = e;
	return function(e, a) {
		let o = typeof t == "string" ? t : r ?? a;
		if (t !== !1 && o != null) {
			let t = e.constructor;
			t.observedAttributes ||= [], t.observedAttributes.indexOf(o) < 0 && t.observedAttributes.push(o);
		}
		Object.hasOwn(e, Do) || (e[Do] = {}), e[Do][a] = {
			get() {
				let e = this, t = e[Eo], o = i ? i instanceof HTMLElement ? i : typeof i == "string" ? J?.(i, e) : e : e, s = xo.get(e), c = s?.get?.(a);
				return c == null && n != null && (s || xo.set(e, s = /* @__PURE__ */ new Map()), s?.has?.(a) || s?.set?.(a, c = ko(n, o, r || a)?.(Ao(n)))), t ? c : c?.element instanceof HTMLElement ? c?.element : (typeof c == "object" || typeof c == "function") && (c?.value != null || "value" in c) ? c?.value : c;
			},
			set(e) {
				let t = this, o = i ? i instanceof HTMLElement ? i : typeof i == "string" ? J?.(i, t) : t : t, s = xo.get(t), c = s?.get?.(a);
				if (c == null && n != null) {
					if (s || xo.set(t, s = /* @__PURE__ */ new Map()), !s?.has?.(a)) {
						let t = (typeof e == "object" || typeof e == "function" ? e?.value : null) ?? e ?? Ao(n);
						s?.set?.(a, c = ko(n, o, r || a)?.(t));
					}
				} else if (typeof c == "object" || typeof c == "function") try {
					typeof e == "object" && e && (e?.value == null && !("value" in e) || typeof e?.value == "object" || typeof e?.value == "function") ? Object.assign(c, e?.value ?? e) : c.value = (typeof e == "object" || typeof e == "function" ? e?.value : null) ?? e;
				} catch (e) {
					console.warn("Error setting property value:", e);
				}
			},
			enumerable: !0,
			configurable: !0
		};
	};
}
var X = /* @__PURE__ */ new WeakMap(), Po = (e, t) => {
	let n = X.get(e);
	n || X.set(e, n = []), t && n.indexOf(t) < 0 && n.push(t), e.shadowRoot && (e.shadowRoot.adoptedStyleSheets = [...e.shadowRoot.adoptedStyleSheets || [], ...n.filter((t) => !e.shadowRoot.adoptedStyleSheets?.includes(t))]);
}, Fo = (e, t) => {
	if (!t) return null;
	let n = t;
	if (typeof t == "function") try {
		let r = new WeakRef(e);
		n = t.call(e, r);
	} catch (e) {
		return console.warn("Error calling styles function:", e), null;
	}
	if (n && typeof CSSStyleSheet < "u" && n instanceof CSSStyleSheet) return Po(e, n), null;
	if (n instanceof Promise) return n.then((t) => {
		t instanceof CSSStyleSheet ? Po(e, t) : t != null && Fo(e, t);
	}).catch((e) => {
		console.warn("Error loading adopted stylesheet:", e);
	}), null;
	if (typeof n == "string" || n instanceof Blob || n instanceof File) {
		let t = jt(n, "");
		if (t) {
			let n = X.get(e);
			n || X.set(e, n = []);
			let r = (t) => {
				t && n.indexOf(t) < 0 && n.push(t), e.shadowRoot && (e.shadowRoot.adoptedStyleSheets = [...e.shadowRoot.adoptedStyleSheets || [], ...n.filter((t) => !e.shadowRoot.adoptedStyleSheets?.includes(t))]);
			};
			return t instanceof Promise ? (t.then(r).catch((e) => {
				console.warn("Error loading adopted stylesheet:", e);
			}), null) : (r(t), null);
		}
	}
	let r = typeof t == "function" || typeof t == "object" ? bo : yo, i = r.get(t), a = i?.styleElement, o = i?.vars;
	if (!i) {
		let i = "", s = [];
		typeof n == "string" ? i = n || "" : typeof n == "object" && n && (n instanceof HTMLStyleElement ? a = n : (i = typeof n.css == "string" ? n.css : typeof n == "string" ? n : String(n), s = n?.props ?? s, o = n?.vars ?? o)), !a && i && (a = Dt(i, e, "ux-layer")), r.set(t, {
			css: i,
			props: s,
			vars: o,
			styleElement: a
		});
	}
	return a;
}, Io = (e) => !(e instanceof HTMLDivElement || e instanceof HTMLImageElement || e instanceof HTMLVideoElement || e instanceof HTMLCanvasElement) && !(e?.hasAttribute?.("is") || e?.getAttribute?.("is") != null);
function Lo(e) {
	let t = globalThis.HTMLElement ?? class {}, n = e ?? t, r = So.get(n);
	if (r) return r;
	class i extends n {
		#e;
		#t;
		#n = !1;
		styleLibs = [];
		adoptedStyleSheets = [];
		get styles() {}
		get initialAttributes() {}
		styleLayers() {
			return [];
		}
		render(e) {
			return document.createElement("slot");
		}
		constructor(...e) {
			if (super(...e), Io(this)) {
				let e = Zt(this.shadowRoot ?? this.createShadowRoot?.() ?? this.attachShadow({ mode: "open" })), t = this.#t ??= Oo?.cloneNode?.(!0), n = e.querySelector("style[data-type=\"ux-layer\"]");
				n ? n.after(t) : e.prepend(t);
			}
			this.styleLibs ??= [];
		}
		$makeLayers() {
			return `@layer ${[
				"ux-preload",
				"ux-layer",
				...this.styleLayers?.() ?? []
			].join?.(",") ?? ""};`;
		}
		onInitialize(e) {
			return this;
		}
		onRender(e) {
			return this;
		}
		getProperty(e) {
			let t = this[Eo];
			this[Eo] = !0;
			let n = this[e];
			return this[Eo] = t, t || delete this[Eo], n;
		}
		loadStyleLibrary(e) {
			let t = this.shadowRoot, n = typeof e == "function" ? e?.(t) : e;
			if (n instanceof HTMLStyleElement) this.styleLibs?.push?.(n), this.#e?.isConnected ? this.#e?.before?.(n) : this.shadowRoot?.prepend?.(n);
			else if (n instanceof CSSStyleSheet) {
				let e = X.get(this);
				e || X.set(this, e = []), e.indexOf(n) < 0 && e.push(n), t && (t.adoptedStyleSheets = [...t.adoptedStyleSheets || [], ...e.filter((e) => !t.adoptedStyleSheets?.includes(e))]);
			} else {
				let e = jt(n, "ux-layer"), r = X.get(this);
				r || X.set(this, r = []);
				let i = (e) => {
					e && r.indexOf(e) < 0 && r.push(e), t && (t.adoptedStyleSheets = [...t.adoptedStyleSheets || [], ...r.filter((e) => !t.adoptedStyleSheets?.includes(e))]);
				};
				e instanceof Promise ? e.then(i).catch(() => {}) : e && i(e);
			}
			return this;
		}
		createShadowRoot() {
			return this.shadowRoot ?? this.attachShadow({ mode: "open" });
		}
		connectedCallback() {
			super.connectedCallback && super.connectedCallback();
			let e = new WeakRef(this);
			if (!this.#n) {
				this.#n = !0;
				let t = Io(this) ? this.createShadowRoot?.() ?? this.shadowRoot ?? this.attachShadow({ mode: "open" }) : this.shadowRoot, n = this.constructor, r = this.$init ?? n.prototype?.$init;
				typeof r == "function" && r.call(this);
				let i = typeof this.initialAttributes == "function" ? this.initialAttributes() : this.initialAttributes;
				if (ke(this, i), this.onInitialize?.call(this, e), this[Eo] = !0, Io(this) && t) {
					let n = this.render?.call?.(this, e) ?? document.createElement("slot"), r = Fo(this, this.styles);
					r instanceof HTMLStyleElement && (this.#e = r);
					let i = [
						vo`<style data-type="ux-layer" prop:innerHTML=${this.$makeLayers()}></style>`,
						this.#t,
						...this.styleLibs.map((e) => e.cloneNode?.(!0)) || [],
						r,
						n
					].filter((e) => e != null && T(e));
					t.append(...i);
					let a = X.get(this) || [];
					a.length > 0 && (t.adoptedStyleSheets = [...a.filter((e) => !t.adoptedStyleSheets?.includes(e)), ...new Set([...t.adoptedStyleSheets || []])]);
				}
				this.onRender?.call?.(this, e), delete this[Eo], t && Zt(t);
			}
		}
		disconnectedCallback() {
			super.disconnectedCallback && super.disconnectedCallback();
		}
		adoptedCallback() {
			super.adoptedCallback && super.adoptedCallback();
		}
		attributeChangedCallback(e, t, n) {
			super.attributeChangedCallback && super.attributeChangedCallback(e, t, n);
		}
	}
	let a = jo(i);
	return So.set(n, a), console.log("result", a), a;
}
//#endregion
//#region ../../projects/lur.e/src/interactive/controllers/LazyEvents.ts
var Ro = /* @__PURE__ */ new WeakMap(), zo = (e, t) => `${e}|c:${t?.capture ? "1" : "0"}|p:${t?.passive ? "1" : "0"}`, Bo = (e, t, n, r = {}) => {
	if (!e || typeof e.addEventListener != "function") return () => {};
	let i = {
		capture: !!r.capture,
		passive: !!r.passive
	}, a = zo(t, i), o = Ro.get(e);
	o || (o = /* @__PURE__ */ new Map(), Ro.set(e, o));
	let s = o.get(a);
	if (!s) {
		let n = /* @__PURE__ */ new Set(), r = (e) => {
			for (let t of Array.from(n)) try {
				t(e);
			} catch (e) {
				console.warn(e);
			}
		};
		o.set(a, s = {
			handlers: n,
			listener: r,
			options: i
		}), e.addEventListener(t, r, i);
	}
	return s.handlers.add(n), () => {
		let r = Ro.get(e), i = r?.get(a);
		i && (i.handlers.delete(n), !(i.handlers.size > 0) && (e.removeEventListener(t, i.listener, i.options), r?.delete(a), r && r.size === 0 && Ro.delete(e)));
	};
}, Vo = /* @__PURE__ */ new WeakMap(), Ho = (e) => {
	let t = e?.element ?? e;
	return t instanceof HTMLElement ? t : null;
}, Uo = (e, t, n) => e ? e === "handled" ? n : t : !1, Wo = (e, t, n = {
	capture: !0,
	passive: !1
}, r = {}) => {
	let i = e;
	if (!i || typeof i.addEventListener != "function") return (e, t) => () => {};
	let a = {
		capture: !!n.capture,
		passive: !!n.passive
	}, o = r.strategy ?? "closest", s = `${t}|c:${a.capture ? "1" : "0"}|p:${a.passive ? "1" : "0"}|s:${o}|pd:${String(r.preventDefault ?? "")}|sp:${String(r.stopPropagation ?? "")}|sip:${String(r.stopImmediatePropagation ?? "")}`, c = Vo.get(i);
	c || (c = /* @__PURE__ */ new Map(), Vo.set(i, c));
	let l = c.get(s);
	if (!l) {
		let e = /* @__PURE__ */ new Map();
		l = {
			targets: e,
			unbindGlobal: null,
			options: a,
			strategy: o,
			config: r,
			dispatch: (t) => {
				let n = !1, i = !1, a = (e) => {
					if (!(!e || e.size === 0)) {
						n = !0;
						for (let n of Array.from(e)) n(t) && (i = !0);
					}
				}, s = t?.composedPath?.();
				if (Array.isArray(s)) if (o === "closest") for (let t of s) {
					let n = Ho(t);
					if (!n) continue;
					let r = e.get(n);
					if (r) {
						a(r);
						break;
					}
				}
				else for (let t of s) {
					let n = Ho(t);
					n && a(e.get(n));
				}
				else {
					let n = Ho(t?.target);
					for (; n;) {
						let t = e.get(n);
						if (t && (a(t), o === "closest")) break;
						let r = n.getRootNode?.();
						n = n.parentElement || (r instanceof ShadowRoot ? r.host : null);
					}
				}
				Uo(r.preventDefault, n, i) && t?.preventDefault?.(), Uo(r.stopImmediatePropagation, n, i) && t?.stopImmediatePropagation?.(), Uo(r.stopPropagation, n, i) && t?.stopPropagation?.();
			}
		}, c.set(s, l);
	}
	return (e, n) => {
		let r = Ho(e);
		if (!r) return () => {};
		l.targets.size === 0 && !l.unbindGlobal && (l.unbindGlobal = Bo(i, t, l.dispatch, l.options));
		let a = l.targets.get(r);
		return a || (a = /* @__PURE__ */ new Set(), l.targets.set(r, a)), a.add(n), () => {
			let t = Vo.get(i), r = t?.get(s);
			if (!r) return;
			let a = Ho(e);
			if (!a) return;
			let o = r.targets.get(a);
			o && (o.delete(n), o.size === 0 && r.targets.delete(a), r.targets.size === 0 && (r.unbindGlobal?.(), r.unbindGlobal = null, t?.delete(s), t && t.size === 0 && Vo.delete(i)));
		};
	};
}, Go = typeof document < "u" ? document?.documentElement : null, Ko = (e, t, n) => {
	if (e?.deref?.() != null) return e.deref()[t] = n;
};
function qo(e = null, t = H(!1), n = [
	"pointerdown",
	"click",
	"contextmenu",
	"scroll"
], r = document?.documentElement) {
	if (!r) return () => {};
	let i = new WeakRef(t), a = typeof t == "function" ? t : (t) => {
		(!(e?.contains?.(t?.target) || t?.target == (e?.element ?? e)) || !e) && Ko(i, "value", !1);
	}, o = n.map((e) => Bo(r, e, a, {
		capture: !1,
		passive: !1
	})), s = () => o.forEach((e) => e?.());
	return F(t, Symbol.dispose, s), s;
}
var Jo = (e, t) => ((n) => {
	let r = n;
	if (t ??= r?.target ?? t, !t.dataset.dragging) {
		let n = [r.clientX, r.clientY];
		r?.pointerId >= 0 && t?.setPointerCapture?.(r?.pointerId);
		let i = ((i) => {
			let a = i;
			if (a?.preventDefault?.(), a?.pointerId == r?.pointerId) {
				let o = [i.clientX, i.clientY], c = [o[0] - n[0], o[1] - n[1]];
				Math.hypot(...c) > 2 && (t?.style?.setProperty?.("will-change", "inset, transform, translate, z-index"), s?.(a), e?.(r));
			}
		}), a = ((e) => {
			let n = e;
			n?.pointerId == r?.pointerId && (t?.releasePointerCapture?.(r?.pointerId), s?.(n));
		}), o = {
			pointermove: i,
			pointercancel: a,
			pointerup: a
		}, s = ((e) => {
			e?.pointerId == r?.pointerId && c?.forEach((e) => e?.());
		}), c = Re(Go, o);
	}
}), Yo = (e, t) => {
	let n, r;
	if (e instanceof Pi) n = e.x?.value ?? 0, r = e.y?.value ?? 0;
	else if (Array.isArray(e) && e.length >= 2) n = e[0] ?? 0, r = e[1] ?? 0;
	else return Fi(0, 0);
	if (!isFinite(n) || !isFinite(r)) return Fi(0, 0);
	let i = Math.max(1, t[0] || 1), a = Math.max(1, t[1] || 1);
	return Fi(Math.max(0, Math.min(Math.floor(n), i - 1)), Math.max(0, Math.min(Math.floor(r), a - 1)));
}, Xo = /* @__PURE__ */ new WeakMap(), Zo = /* @__PURE__ */ new Map(), Qo = (e, t = 0) => {
	if (Zo.has(t)) return;
	let n = () => {
		Zo.delete(t), o?.forEach?.((e) => e?.()), s?.forEach?.((e) => e?.());
	}, r = (e) => {
		e?.pointerId == t || e?.pointerId == null || t == null || t < 0 ? (e.preventDefault(), Zo.set(t, !0), n()) : Zo.delete(t);
	}, i = [r, { once: !0 }], a = [r, {
		once: !0,
		capture: !0
	}], o = Re(document.documentElement, {
		click: a,
		pointerdown: a,
		contextmenu: a
	}), s = Re(e, {
		click: i,
		pointerdown: i,
		contextmenu: i
	});
	setTimeout(n, 10);
}, $o = null;
$o = typeof PointerEvent < "u" ? class extends PointerEvent {
	#e;
	constructor(e, t) {
		super(e, t), this.#e = t?.holding;
	}
	get holding() {
		return this.#e;
	}
	get event() {
		return this.#e?.event;
	}
	get result() {
		return this.#e?.result;
	}
	get shifting() {
		return this.#e?.shifting;
	}
	get modified() {
		return this.#e?.modified;
	}
	get canceled() {
		return this.#e?.canceled;
	}
	get duration() {
		return this.#e?.duration;
	}
	get element() {
		return this.#e?.element?.deref?.() ?? null;
	}
	get propertyName() {
		return this.#e?.propertyName ?? "drag";
	}
} : class {
	#e;
	constructor(e, t) {
		this.#e = t?.holding;
	}
	get holding() {
		return this.#e;
	}
};
var es = (e, t = {
	pointerId: 0,
	pointerType: "mouse"
}, { shifting: n = [0, 0], result: r = [{ value: 0 }, { value: 0 }] } = {}) => {
	let i = .01, a = performance.now(), o, s = () => {
		var e = (o = performance.now()) - a;
		return i += (e - i) / 100, a = o, i;
	}, c = {
		result: r,
		movement: [...t?.movement || [0, 0]],
		shifting: [...n],
		modified: [...n],
		canceled: !1,
		duration: i,
		element: new WeakRef(e),
		client: null
	}, l = [((n) => {
		if (t?.pointerId == n?.pointerId && (n?.preventDefault?.(), Fe(n?.target, e))) {
			let t = [...n?.client || [n?.clientX || 0, n?.clientY || 0]];
			c.duration = s(), c.movement = [...c.client ? [t?.[0] - (c.client?.[0] || 0), t?.[1] - (c.client?.[1] || 0)] : [0, 0]], c.client = t, c.shifting[0] += c.movement[0] || 0, c.shifting[1] += c.movement[1] || 0, c.modified[0] = (c.shifting[0] ?? c.modified[0]) || 0, c.modified[1] = (c.shifting[1] ?? c.modified[1]) || 0, e?.dispatchEvent?.(new $o("m-dragging", {
				...n,
				bubbles: !0,
				holding: c,
				event: n
			})), c?.result?.[0] != null && (c.result[0].value = c.modified[0] || 0), c?.result?.[1] != null && (c.result[1].value = c.modified[1] || 0), c?.result?.[2] != null && (c.result[2].value = 0);
		}
	}), { capture: !0 }], u = Promise.withResolvers(), d = [((n) => {
		if (t?.pointerId == n?.pointerId) {
			let i = e?.element || e;
			if (Fe(n?.target, i) || n?.currentTarget?.contains?.(i) || n?.target == i) {
				n?.type == "pointerup" && Qo(i, n?.pointerId), queueMicrotask(() => u?.resolve?.(r)), f?.forEach?.((e) => e?.()), i?.releaseCapturePointer?.(n?.pointerId), i?.dispatchEvent?.(new $o("m-dragend", {
					...n,
					bubbles: !0,
					holding: c,
					event: n
				})), c.canceled = !0;
				try {
					t.pointerId = -1;
				} catch {}
			}
		}
	}), { capture: !0 }], f = null;
	return Qo(e, t?.pointerId), queueMicrotask(() => {
		e?.dispatchEvent?.(new $o("m-dragstart", {
			...t,
			bubbles: !0,
			holding: c,
			event: t
		})) ? (e?.setPointerCapture?.(t?.pointerId), f = Re(e, {
			pointermove: l,
			pointercancel: d,
			pointerup: d
		}), f?.push?.(...Re(document.documentElement, {
			pointercancel: d,
			pointerup: d
		}))) : c.canceled = !0;
	}), u?.promise ?? r;
}, ts = (e, t = () => {}, n = [{ value: 0 }, { value: 0 }], r = [0, 0]) => {
	if (!n) return;
	let i = (i, a) => es(a ?? e, i, {
		result: n,
		shifting: typeof r == "function" ? r?.(n) : r
	})?.then?.(t);
	if (typeof e?.addEventListener == "function") E(e, "pointerdown", i);
	else if (typeof e == "function") e(i);
	else throw Error("bindDraggable: elementOrEventListener is not a function or an object with addEventListener");
	return {
		draggable: n,
		dispose: () => {
			typeof e?.removeEventListener == "function" && Le(e, "pointerdown", i);
		},
		process: i
	};
}, ns = {
	anyPointer: !0,
	mouseImmediate: !0,
	minHoldTime: 100,
	maxHoldTime: 2e3,
	maxOffsetRadius: 10
}, rs = [(e) => {
	e.preventDefault(), e.stopPropagation();
}, { once: !0 }], is = class {
	#e;
	#t;
	constructor(e, t = { ...ns }, n) {
		if ((this.#e = e)["@control"] = this, this.#t = /* @__PURE__ */ new Set(), !e) throw Error("Element is null...");
		t ||= { ...ns };
		let r = { ...t };
		Object.assign(t, ns, r), t && this.longPress(t, n);
	}
	defaultHandler(e, t) {
		return t?.deref()?.dispatchEvent?.(new PointerEvent("long-press", {
			...e,
			bubbles: !0
		}));
	}
	longPress(e = { ...ns }, t) {
		let n = document.documentElement, r = new WeakRef(this.#e);
		this.holding = {
			actionState: this.initializeActionState(),
			options: e,
			fx: t || ((e) => this.defaultHandler(e, r))
		};
		let i = (e) => this.onPointerDown(this.holding, e, r), a = (e) => this.onPointerMove(this.holding, e), o = (e) => this.onPointerUp(this.holding, e);
		Re(n, {
			pointerdown: i,
			pointermove: a,
			pointerup: o,
			pointercancel: o
		});
	}
	initializeActionState() {
		return {
			timerId: null,
			immediateTimerId: null,
			pointerId: -1,
			startCoord: [0, 0],
			lastCoord: [0, 0],
			isReadyForLongPress: !1,
			cancelCallback: () => {},
			cancelPromiseResolver: null,
			cancelPromiseRejector: null
		};
	}
	preventFromClicking(e, t) {
		this.#t.has(t.pointerId) || (this.#t.add(t.pointerId), e?.addEventListener?.("click", ...rs), e?.addEventListener?.("contextmenu", ...rs));
	}
	releasePreventing(e, t) {
		this.#t.has(t) && (this.#t.delete(t), e?.removeEventListener?.("click", ...rs), e?.removeEventListener?.("contextmenu", ...rs));
	}
	onPointerDown(e, t, n) {
		if (!this.isValidTarget(e, t.target, n) || !(e.options?.anyPointer || t?.pointerType == "touch")) return;
		t.preventDefault(), this.resetAction(e, e.actionState);
		let { actionState: r } = e;
		r.pointerId = t.pointerId, r.startCoord = [t.clientX, t.clientY], r.lastCoord = [...r.startCoord];
		let i = Promise.withResolvers();
		if (r.cancelPromiseResolver = i.resolve, r.cancelPromiseRejector = i.reject, r.cancelCallback = () => {
			clearTimeout(r.timerId), clearTimeout(r.immediateTimerId), r.isReadyForLongPress = !1, i.resolve(), this.resetAction(e, r);
		}, e.options?.mouseImmediate && t.pointerType === "mouse") return e.fx?.(t), r.cancelCallback();
		r.timerId = setTimeout(() => {
			r.isReadyForLongPress = !0;
		}, e.options?.minHoldTime), r.immediateTimerId = setTimeout(() => {
			this.isInPlace(e) && (this.preventFromClicking(e, t), e.fx?.(t), r.cancelCallback());
		}, e.options?.maxHoldTime), Promise.race([i.promise, new Promise((e, t) => setTimeout(() => t(/* @__PURE__ */ Error("Timeout")), 3e3))]).catch(console.warn);
	}
	onPointerMove(e, t) {
		let { actionState: n } = e;
		if (t.pointerId === n.pointerId) {
			if (n.lastCoord = [t.clientX, t.clientY], !this.isInPlace(e)) return n.cancelCallback();
			this.preventFromClicking(e, t), n.startCoord = [t.clientX, t.clientY];
		}
	}
	resetAction(e, t) {
		this.releasePreventing(e, t.pointerId), t.pointerId = -1, t.cancelPromiseResolver = null, t.cancelPromiseRejector = null, t.isReadyForLongPress = !1, t.cancelCallback = null;
	}
	onPointerUp(e, t) {
		let { actionState: n } = e;
		t.pointerId === n.pointerId && (n.lastCoord = [t.clientX, t.clientY], n.isReadyForLongPress && this.isInPlace(e) && (e.fx?.(t), this.preventFromClicking(e, t)), n.cancelCallback(), this.resetAction(e, n));
	}
	holding = {
		fx: null,
		options: {},
		actionState: {}
	};
	hasParent(e, t) {
		for (; e;) {
			if (e === t) return !0;
			e = e.parentElement;
		}
	}
	isInPlace(e) {
		let { actionState: t } = e, [n, r] = t.startCoord, [i, a] = t.lastCoord;
		return Math.hypot(i - n, a - r) <= e.options?.maxOffsetRadius;
	}
	isValidTarget(e, t, n) {
		let r = n?.deref?.();
		return r && (this.hasParent(t, r) || t === r) && (!e.options?.handler || t.matches(e.options?.handler));
	}
}, as = (e, t) => {
	let n = J("[data-id]", e?.target, 0, "parent")?.getAttribute?.("data-id"), r = t?.items?.find?.((e) => e?.some?.((e) => e?.id == n))?.find?.((e) => e?.id == n);
	(r?.action ?? t?.defaultAction)?.(t?.openedWith?.initiator, r, t?.openedWith?.event ?? e), t?.openedWith?.close?.();
	let i = cs(t?.openedWith?.element);
	i != null && (i.value = !1);
}, os = /* @__PURE__ */ new WeakMap(), ss = typeof document < "u" && document?.documentElement ? Wo(document.documentElement, "contextmenu", {
	capture: !0,
	passive: !1
}, {
	strategy: "closest",
	preventDefault: "handled",
	stopImmediatePropagation: "handled"
}) : (e, t) => () => {}, cs = (e) => e == null ? null : os?.getOrInsertComputed?.(e, () => Mi(e, !1)), ls = (e, t) => {
	let n = E(e, "click", (e) => {
		as(e, t);
	}, { composed: !0 });
	return () => n?.();
}, us = (e = document) => {
	let t = J("ui-modal[type=\"contextmenu\"]", e);
	return t || (t = vo`<ui-modal type="contextmenu"></ui-modal>`, (e instanceof Document ? e.body : e).append(t)), t;
}, ds = (e, t, n, r) => (i) => {
	let a = !1, o = r || us(), s = cs(o), c = i?.target ?? e ?? document.elementFromPoint(i?.clientX || 0, i?.clientY || 0), l = {
		event: i,
		initiator: c,
		trigger: e,
		menu: o,
		ctxMenuDesc: n
	};
	if (n.context = l, n?.onBeforeOpen?.(l) === !1) return a;
	let u = n?.buildItems?.(l);
	if (Array.isArray(u) && u.length && (n.items = u), s?.value && i?.type !== "contextmenu") return s.value = !1, n?.openedWith?.close?.(), a;
	if (c && s) {
		a = !0, o.innerHTML = "", s.value = !0, o?.append?.(...n?.items?.map?.((e, t) => {
			let r = e?.map?.((e) => vo`<li data-id=${e?.id || ""}><ui-icon icon=${e?.icon || ""}></ui-icon><span>${e?.label || ""}</span></li>`), i = e?.length > 1 && t !== (n?.items?.length || 0) - 1 ? vo`<li class="ctx-menu-separator"></li>` : null;
			return [...r, i];
		})?.flat?.()?.filter?.((e) => !!e) || []);
		let e = $i?.(o, t?.(i, c)), r = ls(o, n), l = qo?.(o, (e) => {
			let t = o;
			if (!(o?.contains?.(e?.target ?? null) || e?.target == (t?.element ?? t)) || !e?.target) {
				n?.openedWith?.close?.();
				let e = cs(o);
				e != null && (e.value = !1);
			}
		}, [
			"click",
			"pointerdown",
			"scroll"
		]), u = ss(o, () => !0);
		n.openedWith = {
			initiator: c,
			element: o,
			event: i,
			context: n?.context,
			close() {
				s.value = !1, n.openedWith = null, r?.(), e?.(), l?.(), u?.(), n._backUnreg &&= (n._backUnreg(), null);
			}
		}, !n._backUnreg && s && (n._backUnreg = oi(o, s, () => {
			n?.openedWith?.close?.();
		}));
	}
	return a;
}, fs = (e, t, n) => {
	let r = ds(e, (e) => [
		e?.clientX,
		e?.clientY,
		200
	], t, n), i = ea(e, () => ss(e, r));
	return () => {
		i?.();
	};
}, ps = "rs-clipboard", ms = 256e3, hs = 2e6, gs = 12e3, _s = (e) => {
	if (typeof globalThis.requestAnimationFrame == "function") {
		globalThis.requestAnimationFrame(e);
		return;
	}
	if (typeof MessageChannel < "u") {
		let t = new MessageChannel();
		t.port1.onmessage = () => e(), t.port2.postMessage(void 0);
		return;
	}
	if (typeof setTimeout == "function") {
		setTimeout(() => e(), 16);
		return;
	}
	if (typeof queueMicrotask == "function") {
		queueMicrotask(() => e());
		return;
	}
	e();
}, vs = (e) => {
	if (e == null) return "";
	if (typeof e == "string") return e;
	try {
		return JSON.stringify(e, null, 2);
	} catch {
		return String(e);
	}
}, ys = (e, t) => Promise.race([e.then(() => "ok").catch(() => "error"), new Promise((e) => {
	globalThis.setTimeout(() => e("timeout"), t);
})]), bs = async (e) => {
	let t = vs(e);
	if (!t.trim()) return {
		ok: !1,
		error: "Empty content"
	};
	if (t.length > hs) return {
		ok: !1,
		error: "Content too large to copy safely"
	};
	let n = t.trim();
	return new Promise((e) => {
		_s(() => {
			typeof document < "u" && document.hasFocus && !document.hasFocus() && globalThis?.focus?.(), (async () => {
				let t = async () => {
					if (typeof navigator > "u" || !navigator.clipboard?.writeText) return !1;
					let e = await ys(navigator.clipboard.writeText(n), gs);
					return e === "ok" ? !0 : (e === "timeout" && console.warn("[Clipboard] writeText timed out"), !1);
				};
				try {
					if (await t()) {
						e({
							ok: !0,
							data: n,
							method: "clipboard-api"
						});
						return;
					}
				} catch (e) {
					console.warn("[Clipboard] Direct write failed:", e);
				}
				if (n.length > ms) {
					e({
						ok: !1,
						error: "Content too large for fallback copy"
					});
					return;
				}
				try {
					if (typeof document < "u") {
						let e = document.createElement("textarea");
						e.value = n, e.style.cssText = "position:fixed;left:-9999px;top:-9999px;opacity:0;pointer-events:none;", document.body.appendChild(e), e.select(), e.remove();
					}
				} catch (e) {
					console.warn("[Clipboard] Legacy execCommand failed:", e);
				}
				e({
					ok: !1,
					error: "All clipboard methods failed"
				});
			})();
		});
	});
}, xs = async (e, t) => {
	let n = e.trim(), r = (t ?? n).trim();
	return n ? new Promise((e) => {
		_s(() => {
			typeof document < "u" && document.hasFocus && !document.hasFocus() && globalThis?.focus?.(), (async () => {
				try {
					if (typeof navigator < "u" && navigator.clipboard?.write) {
						let t = new Blob([n], { type: "text/html" }), i = new Blob([r], { type: "text/plain" });
						return await navigator.clipboard.write([new ClipboardItem({
							"text/html": t,
							"text/plain": i
						})]), e({
							ok: !0,
							data: n,
							method: "clipboard-api"
						});
					}
				} catch (e) {
					console.warn("[Clipboard] HTML write failed:", e);
				}
				e(await bs(r));
			})();
		});
	}) : {
		ok: !1,
		error: "Empty content"
	};
}, Ss = async (e) => new Promise((t) => {
	_s(async () => {
		typeof document < "u" && document.hasFocus && !document.hasFocus() && globalThis?.focus?.();
		try {
			let n;
			if (n = typeof e == "string" ? (e.startsWith("data:"), await (await fetch(e)).blob()) : e, typeof navigator < "u" && navigator.clipboard?.write) {
				let e = n.type === "image/png" ? n : await Cs(n);
				await navigator.clipboard.write([new ClipboardItem({ [e.type]: e })]), t({
					ok: !0,
					method: "clipboard-api"
				});
				return;
			}
		} catch (e) {
			console.warn("[Clipboard] Image write failed:", e);
		}
		t({
			ok: !1,
			error: "Image clipboard not supported"
		});
	});
}), Cs = async (e) => new Promise((t, n) => {
	if (typeof document > "u") {
		n(/* @__PURE__ */ Error("No document context"));
		return;
	}
	let r = new Image(), i = URL.createObjectURL(e);
	r.onload = () => {
		let e = document.createElement("canvas");
		e.width = r.naturalWidth, e.height = r.naturalHeight;
		let a = e.getContext("2d");
		if (!a) {
			URL.revokeObjectURL(i), n(/* @__PURE__ */ Error("Canvas context failed"));
			return;
		}
		a.drawImage(r, 0, 0), e.toBlob((e) => {
			URL.revokeObjectURL(i), e ? t(e) : n(/* @__PURE__ */ Error("PNG conversion failed"));
		}, "image/png");
	}, r.onerror = () => {
		URL.revokeObjectURL(i), n(/* @__PURE__ */ Error("Image load failed"));
	}, r.src = i;
}), ws = async (e, t = {}) => {
	let { type: n, showFeedback: r = !1, silentOnError: i = !1 } = t;
	return new Promise((t) => {
		_s(async () => {
			let a;
			a = e instanceof Blob ? e.type.startsWith("image/") ? await Ss(e) : await bs(await e.text()) : n === "html" || typeof e == "string" && e.trim().startsWith("<") ? await xs(String(e)) : n === "image" ? await Ss(e) : await bs(vs(e)), r && (a.ok || !i) && Ts(a), t(a);
		});
	});
}, Ts = (e) => {
	try {
		let t = new BroadcastChannel("rs-toast");
		t.postMessage({
			type: "show-toast",
			options: {
				message: e.ok ? "Copied to clipboard" : e.error || "Copy failed",
				kind: e.ok ? "success" : "error",
				duration: 2e3
			}
		}), t.close();
	} catch (e) {
		console.warn("[Clipboard] Feedback broadcast failed:", e);
	}
}, Es = null, Ds = 0, Os = null, ks = Promise.resolve(), As = () => {
	if (typeof BroadcastChannel > "u") return () => {};
	if (Ds === 0) {
		let e = new BroadcastChannel(ps), t = (e) => {
			if (e.data?.type !== "copy") return;
			let t = e.data.options || {}, n = e.data.data;
			ks = ks.then(async () => {
				try {
					await ws(n, {
						...t,
						showFeedback: t.showFeedback !== !1,
						silentOnError: t.silentOnError === !0
					});
				} catch (e) {
					console.warn("[Clipboard] Broadcast copy failed:", e);
				}
			});
		};
		e.addEventListener("message", t), Es = e, Os = t;
	}
	return Ds++, () => {
		if (Ds--, Ds <= 0) {
			let e = Es, t = Os;
			e && t && (e.removeEventListener("message", t), e.close()), Es = null, Os = null, Ds = 0;
		}
	};
}, js = () => As(), Ms = (e, t) => {
	let n = /* @__PURE__ */ new Set(), r = e?.target || document.activeElement || document.body;
	if (r instanceof HTMLInputElement || r instanceof HTMLTextAreaElement || r.isContentEditable) return [];
	let i = r;
	for (; i;) typeof i[t] == "function" && n.add(i), i.operativeInstance && typeof i.operativeInstance[t] == "function" && n.add(i.operativeInstance), i = i.shadowRoot && i.shadowRoot.host ? i.shadowRoot.host : i.parentElement || i.getRootNode()?.host;
	if (e.currentTarget instanceof Node || typeof document < "u") {
		let r = e.currentTarget instanceof Node ? e.currentTarget instanceof Document ? e.currentTarget.body : e.currentTarget : document.body;
		if (r) {
			let e = document.createTreeWalker(r, NodeFilter.SHOW_ELEMENT, { acceptNode(e) {
				return typeof e[t] == "function" || e.operativeInstance && typeof e.operativeInstance[t] == "function" ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
			} });
			for (; e.nextNode();) {
				let r = e.currentNode;
				typeof r[t] == "function" && n.add(r), r.operativeInstance && typeof r.operativeInstance[t] == "function" && n.add(r.operativeInstance);
			}
		}
	}
	return Array.from(n);
}, Ns = (e, t) => {
	let n = Ms(e, t);
	for (let r of n) r[t]?.(e);
}, Ps = !1, Fs = () => {
	typeof window > "u" || Ps || (Ps = !0, Bo(window, "copy", (e) => Ns(e, "onCopy"), {
		capture: !1,
		passive: !0
	}), Bo(window, "cut", (e) => Ns(e, "onCut"), {
		capture: !1,
		passive: !0
	}), Bo(window, "paste", (e) => Ns(e, "onPaste"), {
		capture: !1,
		passive: !1
	}));
}, Is = "cw-oriented-desktop-layout-v1", Ls = `${Is}.draft`, Rs = (e) => {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}, zs = (e, t) => {
	try {
		localStorage.setItem(e, t);
	} catch {}
}, Bs = (e) => {
	try {
		localStorage.removeItem(e);
	} catch {}
};
function Vs(e, t, n) {
	let r = {
		v: 2,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		columns: e,
		rows: t,
		items: n
	};
	return JSON.stringify(r);
}
function Hs(e) {
	try {
		let t = JSON.parse(e);
		if (!t || typeof t != "object") return null;
		let n = t.items;
		if (!Array.isArray(n)) return null;
		let r = Math.max(0, Number(t.columns)), i = Math.max(0, Number(t.rows));
		return t.v === 2 && Number.isFinite(r) && Number.isFinite(i) ? {
			v: 2,
			updatedAt: String(t.updatedAt || (/* @__PURE__ */ new Date()).toISOString()),
			columns: r || 6,
			rows: i || 8,
			items: n
		} : {
			v: 2,
			updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
			columns: Number.isFinite(r) && r > 0 ? r : 6,
			rows: Number.isFinite(i) && i > 0 ? i : 8,
			items: n
		};
	} catch {
		return null;
	}
}
function Us() {
	let e = Rs(Is), t = Rs(Ls);
	if (!e) return t;
	if (!t) return e;
	let n = Hs(e), r = Hs(t);
	if (!n) return t;
	if (!r) return e;
	let i = Date.parse(n.updatedAt || ""), a = Date.parse(r.updatedAt || "");
	return Number.isFinite(a) && Number.isFinite(i) && a > i ? t : e;
}
function Ws(e, t, n) {
	zs(Is, Vs(e, t, n)), Bs(Ls);
}
function Gs(e, t, n) {
	zs(Ls, Vs(e, t, n));
}
//#endregion
//#region ../../projects/lur.e/src/interactive/modules/DesktopItemIconCodec.ts
var Ks = /^https:\/\/www\.google\.com\/s2\/favicons\?[^#]*domain=([^&]+)/i, qs = (e) => {
	let t = String(e || "").trim();
	return t ? t.startsWith("https://") ? `S${t.slice(8)}` : t.startsWith("http://") ? `H${t.slice(7)}` : `R${t}` : "";
}, Js = (e) => {
	let t = String(e || "").trim();
	return t ? t.startsWith("S") ? `https://${t.slice(1)}` : t.startsWith("H") ? `http://${t.slice(1)}` : t.startsWith("R") ? t.slice(1) : t : "";
}, Ys = (e) => {
	let t = String(e || "").trim().toLowerCase().replace(/\.$/, "");
	return t ? `g:${t}` : "";
}, Xs = (e) => {
	let t = String(e || "").trim();
	if (!t) return "";
	try {
		return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(t.replace(/^\./, ""))}&sz=128`;
	} catch {
		return "";
	}
}, Zs = (e, t, n) => {
	let r = String(e || "").trim();
	if (/^(data:|blob:)/i.test(r)) return "";
	if (r.startsWith("g:")) {
		let e = r.slice(2).trim().toLowerCase();
		return e ? `g:${e}` : "";
	}
	let i = r.match(Ks);
	if (i) try {
		let e = decodeURIComponent(i[1]).toLowerCase();
		return e ? `g:${e}` : "";
	} catch {
		return "";
	}
	if (/^https?:\/\//i.test(r) && r.length < 2048) return r;
	if (!r && String(n || "") === "open-link" && t) try {
		let e = new URL(String(t), window.location.href);
		if (/^https?:$/i.test(e.protocol)) return Ys(e.hostname);
	} catch {}
	return "";
}, Qs = (e) => {
	let t = String(e || "").trim();
	return !t || /^(data:|blob:)/i.test(t) ? "" : t.startsWith("g:") ? Xs(t.slice(2)) : t;
}, $s = (e, t, n) => {
	let r = String(e || "").trim();
	if (/^(data:|blob:)/i.test(r)) return "";
	if (r.startsWith("g:")) return r;
	let i = r.match(Ks);
	if (i) try {
		let e = decodeURIComponent(i[1]).toLowerCase();
		return e ? `g:${e}` : "";
	} catch {
		return "";
	}
	if (String(t || "") === "open-link" && n) try {
		let e = new URL(String(n), window.location.href);
		if (/^https?:$/i.test(e.protocol)) return Ys(e.hostname);
	} catch {}
	return /^https?:\/\//i.test(r) && r.length < 2048 ? r : "";
}, ec = "cw-sdi", tc = (e) => {
	let t = e.href ? qs(e.href) : "", n = $s(String(e.iconSrc || ""), e.action, e.href);
	return JSON.stringify({
		k: ec,
		v: 1,
		i: {
			id: e.id,
			l: e.label,
			n: e.icon,
			c: e.cell,
			a: e.action || "open-view",
			w: e.viewId,
			...t ? { u: t } : {},
			...n ? { g: n } : {},
			...e.shape ? { s: e.shape } : {}
		}
	});
}, nc = (e) => {
	if (!e || typeof e != "object") return null;
	let t = e;
	if (t.k !== "cw-sdi" || !t.i || typeof t.i != "object") return null;
	let n = t.i, r = n.c, i = Array.isArray(r) ? Number(r[0]) : NaN, a = Array.isArray(r) ? Number(r[1]) : NaN, o = typeof n.u == "string" ? n.u : "", s = o ? Js(o) : "", c = String(n.a || (s ? "open-link" : "open-view"));
	return {
		id: String(n.id || ""),
		label: String(n.l ?? "Item"),
		icon: String(n.n ?? "sparkle"),
		iconSrc: typeof n.g == "string" ? String(n.g) : "",
		viewId: String(n.w ?? (c === "open-link" ? "home" : "viewer")),
		cell: [Number.isFinite(i) ? i : 0, Number.isFinite(a) ? a : 0],
		action: c,
		href: s,
		shape: n.s
	};
}, rc = (e) => e ? e instanceof Map ? Array.from(e.entries()) : Array.isArray(e) ? e.map((e, t) => Array.isArray(e) && e.length === 2 ? e : [t, e]) : e instanceof Set ? Array.from(e.values()).map((e, t) => [t, e]) : typeof e == "object" ? Object.entries(e) : [] : [], ic = Object.prototype.hasOwnProperty, ac = (e) => !e || typeof e != "object" || Array.isArray(e) ? !1 : !(e instanceof Map) && !(e instanceof Set), oc = (e, t) => {
	if (e && typeof e == "object") {
		if ("id" in e && e.id != null) return e.id;
		if ("key" in e && e.key != null) return e.key;
	}
	return t;
}, sc = (e, t, n) => e ?? oc(t) ?? n, cc = (e, t) => {
	for (let n of Object.keys(t)) {
		let r = t[n], i = e[n];
		if (ac(i) && ac(r)) {
			cc(i, r);
			continue;
		}
		i !== r && (e[n] = r);
	}
	return e;
}, lc = (e, t) => {
	if (e === t) return e;
	let n = t && typeof t == "object";
	return e instanceof Map && n || e instanceof Set && n || Array.isArray(e) && n ? (uc(e, t), e) : ac(e) && ac(t) ? (cc(e, t), e) : t;
}, uc = (e, t) => {
	if (!e || !t) return e;
	let n = rc(t);
	if (!n.length) return e;
	if (e instanceof Set) {
		let t = /* @__PURE__ */ new Map();
		for (let n of e.values()) {
			let e = oc(n);
			e != null && t.set(e, n);
		}
		let r = /* @__PURE__ */ new Set();
		for (let [i, a] of n) {
			let n = sc(i, a);
			if (n == null) {
				e.has(a) || e.add(a);
				continue;
			}
			let o = t.has(n), s = o ? t.get(n) : void 0;
			if (o) {
				let r = lc(s, a);
				r !== s && (e.delete(s), e.add(r), t.set(n, r));
			} else e.add(a), t.set(n, a);
			r.add(n);
		}
		if (r.size) for (let t of Array.from(e.values())) {
			let n = oc(t);
			n != null && !r.has(n) && e.delete(t);
		}
		return e;
	}
	if (e instanceof Map) {
		let t = new Map(n);
		for (let n of Array.from(e.keys())) t.has(n) || e.delete(n);
		for (let [n, r] of t.entries()) if (e.has(n)) {
			let t = e.get(n), i = lc(t, r);
			i !== t && e.set(n, i);
		} else e.set(n, r);
		return e;
	}
	if (Array.isArray(e)) {
		let t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new WeakMap();
		e.forEach((e, n) => {
			t.add(n);
			let a = oc(e, n);
			a != null && !r.has(a) && r.set(a, n), e && typeof e == "object" && i.set(e, n);
		});
		let a = (e) => {
			if (e != null && t.has(e)) return t.delete(e), e;
		}, o = () => {
			let e = t.values().next();
			if (e.done) return;
			let n = e.value;
			return t.delete(n), n;
		}, s = 0, c = 0;
		for (let [t, l] of n) {
			let n = sc(t, l, c++), u = a(n == null ? void 0 : r.get(n));
			u == null && l && typeof l == "object" && (u = a(i.get(l))), u ??= o();
			let d = u == null ? void 0 : e[u], f = d === void 0 ? l : lc(d, l);
			s < e.length ? e[s] !== f && (e[s] = f) : e.push(f), s++;
		}
		for (; e.length > s;) e.pop();
		return e;
	}
	if (typeof e == "object") {
		let t = new Set(n.map(([e]) => String(e)));
		for (let n of Object.keys(e)) t.has(n) || delete e[n];
		for (let [t, r] of n) {
			let n = String(t);
			if (ic.call(e, n)) {
				let t = e[n], i = lc(t, r);
				i !== t && (e[n] = i);
			} else e[n] = r;
		}
		return e;
	}
	return e;
}, dc = (e, t = "id") => {
	if (e && (e instanceof Set || Array.isArray(e))) {
		let n = Array.from(e?.values?.() || []).map((e) => [e?.[t], e]).filter((e) => e?.[0] != null);
		return uc(e, new Map(n));
	}
	return e;
}, fc = () => typeof chrome < "u" && chrome?.storage?.local, pc = (e, t, n, r = (e) => jn(e), i = "id", a = 6e3) => {
	let o = null;
	o = dc(t?.() || {}, i), fc() ? chrome.storage.local.get([e], (t) => {
		if (t[e]) {
			let r = n(S.parse(t?.[e] || "{}"));
			uc(o, r);
		}
	}) : typeof localStorage < "u" && (localStorage.getItem(e) ? (o = n(S.parse(localStorage.getItem(e) || "{}")), dc(o, i)) : localStorage.setItem(e, S.stringify(r(o))));
	let s = (t) => {
		let n = S.stringify(r(dc(o, i)));
		fc() ? chrome.storage.local.set({ [e]: n }) : typeof localStorage < "u" && localStorage.setItem(e, n);
	};
	if (je(s, a), typeof window < "u" && typeof document < "u") {
		let t = [
			E(document, "visibilitychange", (e) => {
				document.visibilityState === "hidden" && s(e);
			}),
			E(window, "beforeunload", (e) => s(e)),
			E(window, "pagehide", (e) => s(e)),
			E(window, "storage", (t) => {
				t.storageArea == localStorage && t.key == e && uc(o, n(S.parse(t?.newValue || S.stringify(r(dc(o, i))))));
			})
		];
		F(o, Symbol.dispose, () => t.forEach((e) => e?.()));
	}
	if (fc() && chrome.storage.onChanged.addListener((t, r) => {
		if (r === "local" && t[e]) {
			let r = t[e].newValue;
			r && uc(o, n(S.parse(r)));
		}
	}), o && typeof o == "object") try {
		Object.defineProperty(o, "$save", {
			value: s,
			configurable: !0,
			enumerable: !1,
			writable: !0
		});
	} catch {
		o.$save = s;
	}
	return o;
};
//#endregion
//#region ../../projects/lur.e/src/interactive/modules/ScrollBar.ts
De();
try {
	CSS.registerProperty({
		name: "--percent-x",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--percent-y",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--scroll-coef",
		syntax: "<number>",
		inherits: !0,
		initialValue: "1"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--determinant",
		syntax: "<number>",
		inherits: !0,
		initialValue: "0"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--scroll-size",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--content-size",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--clamped-size",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--thumb-size",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--max-offset",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	});
} catch {}
try {
	CSS.registerProperty({
		name: "--max-size",
		syntax: "<length-percentage>",
		inherits: !0,
		initialValue: "0px"
	});
} catch {}
//#endregion
//#region ../../projects/lur.e/src/design/color/DynamicEngine.ts
var mc = (e, t = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e({
	didTimeout: !1,
	timeRemaining: () => 0
}), 0), hc = "electronBridge";
function gc(e) {
	if (typeof e != "string") return null;
	let t = e.trim().toLowerCase();
	if (t === "transparent") return 0;
	if (t.startsWith("#")) {
		let e = t;
		if (e.length === 4 || e.length === 7) return 1;
		if (e.length === 5) {
			let t = e[4], n = t + t;
			return vc(parseInt(n, 16) / 255, 0, 1);
		}
		if (e.length === 9) {
			let t = e.slice(7, 9);
			return vc(parseInt(t, 16) / 255, 0, 1);
		}
		return null;
	}
	let n = t.match(/^([a-z-]+)\((.*)\)$/i);
	if (!n) return null;
	n[1];
	let r = n[2].trim();
	{
		let e = r.lastIndexOf("/");
		if (e !== -1) {
			let t = _c(r.slice(e + 1).trim());
			return t == null ? null : vc(t, 0, 1);
		}
	}
	if (r.includes(",")) {
		let e = r.split(",").map((e) => e.trim());
		if (e.length >= 4) {
			let t = _c(e[3]);
			return t == null ? null : vc(t, 0, 1);
		}
		return 1;
	}
	return 1;
}
function _c(e) {
	if (!e) return null;
	if (e.endsWith("%")) {
		let t = parseFloat(e);
		return Number.isNaN(t) ? null : t / 100;
	}
	let t = parseFloat(e);
	return Number.isNaN(t) ? null : t;
}
function vc(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
var yc = (e) => !e || e == null ? 0 : (gc?.(e) || 0) > .1, bc = (e, t = 1e3, ...n) => {
	mc(async () => {
		if (!(!e || typeof e != "function")) for (;;) await Promise.try(e, ...n), await new Promise((e) => setTimeout(e, t)), await new Promise((e) => mc(e, 100)), await new Promise((e) => requestAnimationFrame(e));
	}, 1e3);
}, xc = () => {
	if (typeof document > "u") return null;
	try {
		let e = document.querySelectorAll("[data-shell]");
		for (let t of e) {
			let e = t.shadowRoot;
			if (!e) continue;
			let n = e.querySelector(".app-shell__nav, .app-shell__toolbar");
			if (!n) continue;
			let r = getComputedStyle(n).backgroundColor;
			if (yc(r)) return r;
		}
	} catch {}
	return null;
}, Sc = () => {
	if (typeof document > "u" || !globalThis.matchMedia?.("(display-mode: window-controls-overlay)")?.matches) return null;
	let e = document.createElement("div");
	e.setAttribute("data-wco-theme-probe", "true"), e.style.cssText = [
		"position:fixed",
		"visibility:hidden",
		"pointer-events:none",
		"z-index:-2147483648",
		"left:env(titlebar-area-x,0px)",
		"top:env(titlebar-area-y,0px)",
		"width:env(titlebar-area-width,0px)",
		"height:env(titlebar-area-height,0px)"
	].join(";"), document.documentElement.appendChild(e);
	try {
		let t = e.getBoundingClientRect();
		if (t.width < 1 || t.height < 1) return null;
		let n = Cc(Math.floor(t.left + Math.min(40, t.width * .2)), Math.floor(t.top + t.height * .5));
		return yc(n) ? n : null;
	} finally {
		e.remove();
	}
}, Cc = (e, t, n = null) => {
	let r = Array.from(document.elementsFromPoint(e, t))?.filter?.((e) => e instanceof HTMLElement && e != n && (e?.dataset?.alpha == null ? !0 : parseFloat(e?.dataset?.alpha) > .01) && e?.checkVisibility?.({
		contentVisibilityAuto: !0,
		opacityProperty: !0,
		visibilityProperty: !0
	}) && e?.matches?.(":not([data-hidden])") && e?.style?.getPropertyValue("display") != "none").map((e) => {
		let t = getComputedStyle?.(e);
		return {
			element: e,
			zIndex: parseInt(t?.zIndex || "0", 10) || 0,
			color: t?.backgroundColor || "transparent"
		};
	}).sort((e, t) => Math.sign(t.zIndex - e.zIndex)).filter(({ color: e }) => yc(e));
	return r?.[0]?.element instanceof HTMLElement && r?.[0]?.color || "transparent";
}, wc = (e) => {
	let t = e?.getBoundingClientRect();
	if (t) {
		let n = .5 * (Ge?.() || 1);
		return Cc((t.left + t.right) * n, (t.top + t.bottom) * n, e);
	}
}, Tc = (e = document.documentElement) => {
	let t = e?.querySelector?.("meta[data-theme-color]") ?? e?.querySelector?.("meta[name=\"theme-color\"]");
	!t && e == document.documentElement && (t = document.createElement("meta"), t.setAttribute("name", "theme-color"), t.setAttribute("data-theme-color", ""), t.setAttribute("content", "transparent"), document.head.appendChild(t));
	let n = xc(), r = n ? null : Sc(), i = Math.max(8, Math.floor(globalThis.innerWidth * .12)), a = !n && !r ? Cc(i, 20) : null, o = n || r || (a && yc(a) ? a : null);
	o && o !== "transparent" && (t || window?.electronBridge) && e == document.documentElement && t?.setAttribute?.("content", o);
}, Ec = (e = document.documentElement) => {
	e.querySelectorAll("body, body > *, body > * > *").forEach((e) => {
		e && wc(e);
	});
}, Dc = (e = document.documentElement) => {
	let t = "__LURE_DYNAMIC_THEME_STARTED__";
	if (globalThis?.[t]) return;
	globalThis[t] = !0, matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({}) => Ec(e));
	let n = () => {
		Tc(e), Ec(e);
	};
	E(e, "u2-appear", () => mc(n, 100)), E(e, "u2-hidden", () => mc(n, 100)), E(e, "u2-theme-change", () => mc(n, 100)), E(window, "load", () => mc(n, 100)), E(document, "visibilitychange", () => mc(n, 100)), bc(n, 500);
}, Oc = async () => {
	Tc(), Ec();
}, kc = () => {
	typeof document > "u" || globalThis?.__LURE_AUTO_THEME_ENGINE__ === !0 && (requestAnimationFrame(() => Oc?.()), Dc?.());
};
kc();
//#endregion
//#region ../../projects/lur.e/src/utils/opfs/OPFS.uniform.worker.ts?worker
function Ac(e) {
	return new Worker("/assets/OPFS.uniform.worker-DZLd9eQQ.js", { name: e?.name });
}
//#endregion
//#region ../../projects/lur.e/src/utils/opfs/OPFS.ts
var jc = null, Mc = typeof ServiceWorkerGlobalScope < "u" && self instanceof ServiceWorkerGlobalScope, Nc = "opfs-sw-bridge-v1", Pc = /* @__PURE__ */ new Map(), Fc = null, Ic = null, Lc = 0, Rc = () => {
	if (!Mc) return null;
	if (Ic) return Ic;
	try {
		return typeof BroadcastChannel > "u" ? null : (Ic = new BroadcastChannel(Nc), Ic);
	} catch {
		return null;
	}
}, zc = (e, t = {}, n = 2500) => {
	let r = Rc();
	if (!r) return Promise.reject(/* @__PURE__ */ Error("SW OPFS bridge is unavailable"));
	let i = `sw-opfs-${Date.now()}-${++Lc}`;
	return new Promise((a, o) => {
		let s = null, c = (e) => {
			let t = e?.data || {};
			!t || typeof t != "object" || t?.type === "opfs-sw-response" && String(t?.requestId || "") === i && (r.removeEventListener("message", c), s && clearTimeout(s), t?.ok ? a(t?.result) : o(Error(String(t?.error || "Unknown bridge error"))));
		};
		r.addEventListener("message", c), s = setTimeout(() => {
			r.removeEventListener("message", c), o(/* @__PURE__ */ Error("SW OPFS bridge timeout"));
		}, n), r.postMessage({
			type: "opfs-sw-request",
			requestId: i,
			action: e,
			payload: t
		});
	});
}, Bc = () => Fc || (Fc = new Promise(async (e) => {
	if (typeof Worker < "u" && !Mc) try {
		let t = await ae({
			name: "opfs-worker",
			script: Ac
		});
		jc = new se("opfs-worker", async () => t, {
			timeout: 3e4,
			retries: 3,
			batching: !0,
			compression: !1
		}), e(jc);
	} catch (t) {
		console.warn("OPFSUniformWorker instantiation failed, falling back to main thread...", t), jc = null, e(null);
	}
	else jc = null, e(null);
}), Fc), Z = {
	readDirectory: async ({ rootId: e, path: t, create: n }) => {
		try {
			let e = await navigator.storage.getDirectory(), r = (t || "").trim().replace(/\/+/g, "/").split("/").filter((e) => e), i = e;
			for (let e of r) i = await i.getDirectoryHandle(e, { create: n });
			let a = [];
			for await (let [e, t] of i.entries()) a.push([e, t]);
			return a;
		} catch (e) {
			return console.warn("Direct readDirectory error:", e), [];
		}
	},
	readFile: async ({ rootId: e, path: t, type: n }) => {
		try {
			let e = await navigator.storage.getDirectory(), r = (t || "").trim().replace(/\/+/g, "/").split("/").filter((e) => e), i = r.pop(), a = e;
			for (let e of r) a = await a.getDirectoryHandle(e, { create: !1 });
			let o = await (await a.getFileHandle(i, { create: !1 })).getFile();
			return n === "text" ? await o.text() : n === "arrayBuffer" ? await o.arrayBuffer() : o;
		} catch (e) {
			return console.warn("Direct readFile error:", e), null;
		}
	},
	writeFile: async ({ rootId: e, path: t, data: n }) => {
		try {
			let e = await navigator.storage.getDirectory(), r = (t || "").trim().replace(/\/+/g, "/").split("/").filter((e) => e), i = r.pop(), a = e;
			for (let e of r) a = await a.getDirectoryHandle(e, { create: !0 });
			let o = await (await a.getFileHandle(i, { create: !0 })).createWritable();
			return await o.write(n), await o.close(), !0;
		} catch (e) {
			return console.warn("Direct writeFile error:", e), !1;
		}
	},
	remove: async ({ rootId: e, path: t, recursive: n }) => {
		try {
			let e = await navigator.storage.getDirectory(), r = (t || "").trim().replace(/\/+/g, "/").split("/").filter((e) => e), i = r.pop(), a = e;
			for (let e of r) a = await a.getDirectoryHandle(e, { create: !1 });
			return await a.removeEntry(i, { recursive: n }), !0;
		} catch {
			return !1;
		}
	},
	copy: async ({ from: e, to: t }) => {
		try {
			let n = async (e, t) => {
				if (e.kind === "directory") for await (let [r, i] of e.entries()) if (i.kind === "directory") await n(i, await t.getDirectoryHandle(r, { create: !0 }));
				else {
					let e = await i.getFile(), n = await (await t.getFileHandle(r, { create: !0 })).createWritable();
					await n.write(e), await n.close();
				}
				else {
					let n = await e.getFile(), r = await t.createWritable();
					await r.write(n), await r.close();
				}
			};
			return await n(e, t), !0;
		} catch (e) {
			return console.warn("Direct copy error:", e), !1;
		}
	},
	observe: async () => !1,
	unobserve: async () => !0,
	mount: async () => !0,
	unmount: async () => !0
}, Vc = (e, t = {}, n = []) => Mc && Z[e] ? zc(e, t).catch(() => Z[e](t)) : new Promise(async (n, r) => {
	try {
		let i = await Bc();
		if (!i) return Z[e] ? n(Z[e](t)) : r(/* @__PURE__ */ Error("No worker channel available"));
		let a;
		try {
			a = await i.request(e, t);
		} catch (r) {
			if (Z[e]) return n(Z[e](t));
			throw r;
		}
		if (a === !1 && (e === "writeFile" || e === "remove" || e === "copy") && Z[e]) return n(Z[e](t));
		n(a);
	} catch (i) {
		if (Z[e]) try {
			return n(Z[e](t));
		} catch (e) {
			return r(e);
		}
		r(i);
	}
}), Hc = (e) => {
	if (typeof e != "string") return e;
	e = e?.trim?.() || e, e?.endsWith?.("/") || (e = e?.trim?.()?.split?.("/")?.slice(0, -1)?.join?.("/")?.trim?.() || e);
	let t = e?.trim()?.endsWith("/") ? e : e + "/";
	return t?.startsWith("/") ? t : "/" + t;
}, Uc = {
	startIn: "documents",
	multiple: !1,
	types: [{
		description: "files",
		accept: { "application/*": [
			".txt",
			".md",
			".html",
			".htm",
			".css",
			".js",
			".json",
			".csv",
			".xml",
			".jpg",
			".jpeg",
			".png",
			".gif",
			".webp",
			".svg",
			".ico",
			".mp3",
			".wav",
			".mp4",
			".webm",
			".pdf",
			".zip",
			".rar",
			".7z"
		] }
	}]
}, Wc = new Map([
	["/", async () => await navigator?.storage?.getDirectory?.()],
	["/user/", async () => await navigator?.storage?.getDirectory?.()],
	["/assets/", async () => (console.warn("Backend related API not implemented!"), null)]
]), Gc = /* @__PURE__ */ new Map();
async function Kc(e, t = "") {
	(e == null || e == null || e?.trim?.()?.length == 0) && (e = "/user/");
	let n = typeof e == "string" ? e?.trim?.()?.replace?.(/^\//, "")?.trim?.()?.split?.("/")?.filter?.((e) => !!e?.trim?.())?.at?.(0) : null;
	if (n && (typeof localStorage < "u" && JSON.parse(localStorage?.getItem?.("opfs.mounted") || "[]").includes(n) && (e = Gc?.get(n)), e ||= await Wc?.get?.(`/${n}/`)?.() ?? await navigator.storage.getDirectory()), e instanceof FileSystemDirectoryHandle) return e;
	let r = t?.trim?.() || "/", i = r.startsWith("/") ? r : "/" + r, a = null, o = 0;
	for (let [e, t] of Wc.entries()) i.startsWith(e) && e.length > o && (a = t, o = e.length);
	try {
		return (a ? await a() : null) || await navigator?.storage?.getDirectory?.();
	} catch (e) {
		return console.warn("Failed to resolve root handle, falling back to OPFS root:", e), await navigator?.storage?.getDirectory?.();
	}
}
function qc(e = "", t) {
	if (!t?.trim()) return e;
	let n = t.trim();
	if (n.startsWith("/")) return n;
	let r = e.split("/").filter((e) => e?.trim()), i = n.split("/").filter((e) => e?.trim());
	for (let e of i) if (e === ".") continue;
	else e === ".." ? r.length > 0 && r.pop() : r.push(e);
	return "/" + r.join("/");
}
async function Jc(e, t, n = "") {
	let r = qc(n, t);
	return {
		rootHandle: await Kc(e, r),
		resolvedPath: r
	};
}
function Q(e, t, n) {
	return e?.(t, n), null;
}
function $(e, t) {
	console.trace(`[${e}] ${t}`);
}
function Yc(e) {
	return e?.trim()?.endsWith?.("/") ? "directory" : "file";
}
function Xc(e) {
	return {
		txt: "text/plain",
		md: "text/markdown",
		html: "text/html",
		htm: "text/html",
		css: "text/css",
		js: "application/javascript",
		json: "application/json",
		csv: "text/csv",
		xml: "application/xml",
		jpg: "image/jpeg",
		jpeg: "image/jpeg",
		png: "image/png",
		gif: "image/gif",
		webp: "image/webp",
		svg: "image/svg+xml",
		ico: "image/x-icon",
		mp3: "audio/mpeg",
		wav: "audio/wav",
		mp4: "video/mp4",
		webm: "video/webm",
		pdf: "application/pdf",
		zip: "application/zip",
		rar: "application/vnd.rar",
		"7z": "application/x-7z-compressed"
	}[e?.split?.(".")?.pop?.()?.toLowerCase?.()] || "application/octet-stream";
}
var Zc = (e) => e?.trim?.()?.split?.(".")?.[1]?.trim?.()?.length > 0;
async function Qc(e, t, { create: n = !1, basePath: r = "" } = {}, i = $) {
	try {
		let { rootHandle: i, resolvedPath: a } = await Jc(e, t, r), o = C(a).split("/").filter((e) => !!e?.trim?.());
		o.length > 0 && Zc(o[o.length - 1]?.trim?.()) && o?.pop?.();
		let s = i;
		if (o?.length > 0) {
			for (let e of o) if (s = await s?.getDirectoryHandle?.(e, { create: n }), !s) break;
		}
		return s;
	} catch (e) {
		return Q(i, "error", `getDirectoryHandle: ${e.message}`);
	}
}
async function $c(e, t, { create: n = !1, basePath: r = "" } = {}, i = $) {
	try {
		let { rootHandle: a, resolvedPath: o } = await Jc(e, t, r), s = C(o), c = s.split("/").filter((e) => !!e?.trim?.());
		if (c?.length == 0) return null;
		let l = c.length > 0 ? c[c.length - 1]?.trim?.()?.replace?.(/\s+/g, "-") : "", u = c.length > 1 ? c?.slice(0, -1)?.join?.("/")?.trim?.()?.replace?.(/\s+/g, "-") : "";
		return s?.trim?.()?.endsWith?.("/") ? null : (await Qc(a, u, {
			create: n,
			basePath: r
		}, i))?.getFileHandle?.(l, { create: n });
	} catch (e) {
		return Q(i, "error", `getFileHandle: ${e.message}`);
	}
}
async function el(e, t, n = {}, r = $) {
	try {
		let { rootHandle: i, resolvedPath: a } = await Jc(e, t, n?.basePath || "");
		if (Yc(a) == "directory") {
			let e = await Qc(i, a?.trim?.()?.replace?.(/\/$/, ""), n, r);
			if (e) return {
				type: "directory",
				handle: e
			};
		} else {
			let e = await $c(i, a, n, r);
			if (e) return {
				type: "file",
				handle: e
			};
		}
		return null;
	} catch (e) {
		return Q(r, "error", `getHandler: ${e.message}`);
	}
}
var tl = /* @__PURE__ */ new Map();
function nl(e, t, n = { create: !1 }, r = $) {
	let i = "", a = U(/* @__PURE__ */ new Map()), o = (async () => {
		try {
			let { rootHandle: r, resolvedPath: a } = await Jc(e, t, n?.basePath || "");
			return i = `${r?.name || "root"}:${a}`, {
				rootHandle: r,
				resolvedPath: a
			};
		} catch {
			return {
				rootHandle: null,
				resolvedPath: ""
			};
		}
	})().then(async ({ rootHandle: e, resolvedPath: t }) => {
		if (!t) return null;
		let o = tl.get(i);
		if (o) return o.refCount++, a = o.mapCache, o;
		let s = U(/* @__PURE__ */ new Map());
		a = s;
		let c = te(), l = Qc(e, t, n, r), u = async () => {
			let r = await Vc("readDirectory", {
				rootId: "",
				path: C(t),
				create: n.create
			}, e ? [e] : []);
			if (!r) return s;
			let i = new Map(r);
			for (let e of s.keys()) i.has(e) || s.delete(e);
			for (let [e, t] of i) s.has(e) || s.set(e, t);
			return s;
		}, d = () => {
			Vc("unobserve", { id: c }), Pc.delete(c), tl.delete(i);
		};
		Pc.set(c, (e) => {
			for (let t of e) t?.name && (t.type === "modified" || t.type === "created" || t.type === "appeared" ? s.set(t.name, t.handle) : (t.type === "deleted" || t.type === "disappeared") && s.delete(t.name));
		}), Vc("observe", {
			rootId: "",
			path: C(t),
			id: c
		}, e ? [e] : []), u();
		let f = {
			mapCache: s,
			dirHandle: l,
			resolvePath: t,
			observationId: c,
			refCount: 1,
			cleanup: d,
			updateCache: u
		};
		tl.set(i, f);
		let p = await Promise.all(await Array.fromAsync((await l)?.entries?.() ?? []));
		for (let [e, t] of p) s.has(e) || s.set(e, t);
		return {
			...f,
			mapCache: s
		};
	}), s = !1, c = () => {
		s || (s = !0, o.then((e) => {
			e && (e.refCount--, e.refCount <= 0 && e.cleanup());
		}).catch(console.warn));
	}, l = new Proxy(function() {}, {
		get(e, t) {
			if (!(t === Symbol.toStringTag || t === Symbol.iterator || t === "toString" || t === "valueOf" || t === "inspect" || t === "constructor" || t === "__proto__" || t === "prototype")) {
				if (t === "dispose") return c;
				if (t === "getMap") return () => a;
				if (t === "entries") return () => a.entries();
				if (t === "keys") return () => a.keys();
				if (t === "values") return () => a.values();
				if (t === Symbol.iterator) return () => a[Symbol.iterator]();
				if (t === "size") return a.size;
				if (t === "has") return (e) => a.has(e);
				if (t === "get") return (e) => a.get(e);
				if (t === "entries") return () => a.entries();
				if (t === "keys") return () => a.keys();
				if (t === "values") return () => a.values();
				if (t === "refresh") return () => o.then((e) => e?.updateCache?.()).then(() => l);
				if (t === "then" || t === "catch" || t === "finally") {
					let e = o.then(() => !0);
					return e[t].bind(e);
				}
				return (...e) => o.then(async (n) => {
					if (!n) return;
					let r = await n.dirHandle, i = r?.[t];
					return typeof i == "function" ? i.apply(r, e) : i;
				});
			}
		},
		ownKeys() {
			return Array.from(a.keys());
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return l;
}
async function rl(e, t, n = {}, r = $) {
	try {
		let { rootHandle: r, resolvedPath: i } = await Jc(e, t, n?.basePath || "");
		return await Vc("readFile", {
			rootId: "",
			path: C(i),
			type: "blob"
		}, r ? [r] : []);
	} catch (e) {
		return Q(r, "error", `readFile: ${e.message}`);
	}
}
async function il(e, t, n, r = $) {
	if (n instanceof FileSystemFileHandle && (n = await n.getFile()), n instanceof FileSystemDirectoryHandle) {
		let r = await Qc(await Kc(e), t + (t?.trim?.()?.endsWith?.("/") ? "" : "/") + (n?.name || "")?.trim?.()?.replace?.(/\s+/g, "-"), { create: !0 });
		return await fl(n, r, {})?.catch?.(console.warn.bind(console));
	} else try {
		let { rootHandle: r, resolvedPath: i } = await Jc(e, t, "");
		return await Vc("writeFile", {
			rootId: "",
			path: C(i),
			data: n
		}, r ? [r] : []) !== !1;
	} catch (e) {
		return Q(r, "error", `writeFile: ${e.message}`);
	}
}
async function al(e, t, n = { recursive: !0 }, r = $) {
	try {
		let { rootHandle: r, resolvedPath: i } = await Jc(e, t, n?.basePath || ""), a = we(i), o = !1;
		for (let e of a) if (o = await Vc("remove", {
			rootId: "",
			path: e,
			recursive: n.recursive
		}, r ? [r] : []), o !== !1) return !0;
		return o !== !1;
	} catch (e) {
		return Q(r, "error", `removeFile: ${e.message}`);
	}
}
async function ol(e, t, n = {}, r = $) {
	try {
		return al(e, t, {
			recursive: !0,
			...n
		}, r);
	} catch (e) {
		return Q(r, "error", `remove: ${e.message}`);
	}
}
var sl = async (e, t) => {
	if (e instanceof FileSystemFileHandle && (e = await e.getFile()), typeof e == "string" && (e = await cl(e)), t ??= e?.name, !t) return;
	if ("msSaveOrOpenBlob" in self.navigator && self.navigator.msSaveOrOpenBlob(e, t), e instanceof FileSystemDirectoryHandle) {
		let t = await showDirectoryPicker?.({ mode: "readwrite" })?.catch?.(console.warn.bind(console));
		return e && t ? (t = await Qc(t, e?.name || "", { create: !0 })?.catch?.(console.warn.bind(console)) || t, await fl(e, t, {})?.catch?.(console.warn.bind(console))) : void 0;
	}
	let n = await (self?.showOpenFilePicker ? new Promise((e) => e({
		showOpenFilePicker: self?.showOpenFilePicker?.bind?.(window),
		showSaveFilePicker: self?.showSaveFilePicker?.bind?.(window)
	})) : import(
		/* @vite-ignore */
		"../../../../../subsystem/fest/polyfill/showOpenFilePicker.mjs"
));
	if (window?.showSaveFilePicker) {
		let r = await (await n?.showSaveFilePicker?.({ suggestedName: t })?.catch?.(console.warn.bind(console)))?.createWritable?.({ keepExistingData: !0 })?.catch?.(console.warn.bind(console));
		await r?.write?.(e)?.catch?.(console.warn.bind(console)), await r?.close?.()?.catch?.(console.warn.bind(console));
	} else {
		let n = document.createElement("a");
		try {
			n.href = URL.createObjectURL(e);
		} catch (e) {
			console.warn(e);
		}
		n.download = t, document.body.appendChild(n), n.click(), setTimeout(function() {
			document.body.removeChild(n), globalThis.URL.revokeObjectURL(n.href);
		}, 0);
	}
}, cl = async (e = "", t = !1) => {
	let n = (typeof e == "string" ? e : e?.url || "").trim();
	if (!n) return null;
	let r = n;
	try {
		r = new URL(n, location?.origin || self?.location?.origin || "http://localhost").pathname || n;
	} catch {}
	let i = r?.trim?.() || "/";
	if (i?.startsWith?.("/user")) {
		let e = C(i), n = await navigator?.storage?.getDirectory?.();
		if (!n) return null;
		let r = await $c(n, e, { create: !!t }).catch(() => null);
		return r ? t ? r?.createWritable?.() : r?.getFile?.() : null;
	}
	if (t) return null;
	try {
		let e = String(location?.origin || self?.location?.origin || "").trim(), t = i.startsWith("/") ? new URL(i, e || "http://localhost").toString() : n, r = await fetch(t), a = await r?.blob()?.catch?.(console.warn.bind(console)), o = r?.headers?.get?.("Last-Modified"), s = o ? Date.parse(o) : 0;
		if (a) {
			let e = i?.substring?.(i?.lastIndexOf?.("/") + 1) || "resource";
			return new File([a], e, {
				type: a?.type,
				lastModified: isNaN(s) ? 0 : s
			});
		}
	} catch (e) {
		return Q($, "error", `provide: ${e.message}`);
	}
	return null;
}, ll = async (e, t = "/user/"?.trim?.()?.replace?.(/\s+/g, "-"), n) => {
	let r = await Kc(null), i = Hc(C(t))?.replace?.("/user", "")?.trim?.();
	e = e instanceof File ? e : new File([e], te() + "." + (e?.type?.split?.("/")?.[1] || "tmp"));
	let a = i + (e?.name || "wallpaper")?.trim?.()?.replace?.(/\s+/g, "-");
	return await il(r, a, e), n?.set?.("/user" + a?.trim?.()?.replace?.(/\s+/g, "-"), e), "/user" + a?.trim?.();
}, ul = async (e = "/user/"?.trim?.()?.replace?.(/\s+/g, "-"), t) => {
	let n = "showOpenFilePicker";
	return e = C(e), (window?.[n]?.bind?.(window) ?? (await import("./showOpenFilePicker-DC8OBFeo.js"))?.[n])({
		...Uc,
		multiple: !0
	})?.then?.(async (n = []) => {
		for (let r of n) await ll(r instanceof File ? r : await r?.getFile?.(), e, t);
	});
}, dl = typeof Image < "u" ? new Image() : null;
if (dl) {
	dl.decoding = "async", dl.width = 24, dl.height = 24;
	try {
		dl.src = URL.createObjectURL(new Blob(["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 384 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z\"/></svg>"], { type: "image/svg+xml" }));
	} catch {}
}
var fl = async (e, t, n = {}, r = $) => Vc("copy", {
	from: e,
	to: t
}, [e, t]), pl = (e, t = "/user/", n = null, r) => {
	let i = [], a = Array.from(e?.items ?? []), o = Array.from(e?.files ?? []), s = Array.isArray(e) ? e : [...e?.[Symbol.iterator] ? e : [e]];
	return Promise.try(async () => {
		let c = await Kc(n), l = async (e) => {
			let n;
			if (e.kind === "file" || e.kind === "directory") try {
				n = await e.getAsFileSystemHandle?.();
			} catch {}
			if (n) {
				if (n.kind === "directory") {
					let e = await Qc(c, t + (n.name || "").trim().replace(/\s+/g, "-"), { create: !0 });
					e && i.push(fl(n, e, { create: !0 }));
				} else {
					let e = await n.getFile(), a = t + (e.name || n.name).trim().replace(/\s+/g, "-");
					i.push(il(c, a, e).then(() => r?.(e, a)));
				}
				return;
			}
			if (e.kind === "file" || e instanceof File) {
				let n = e instanceof File ? e : e.getAsFile();
				if (n) {
					let e = t + n.name.trim().replace(/\s+/g, "-");
					i.push(il(c, e, n).then(() => r?.(n, e)));
				}
				return;
			}
		};
		if (a?.length > 0) for (let e of a) await l(e);
		if (o?.length > 0) for (let e of o) await l(e);
		if (s?.length > 0) for (let e of s) await l(e);
		let u = e?.getData?.("text/uri-list") || e?.getData?.("text/plain");
		if (u && typeof u == "string") {
			let e = u.split(/\r?\n/).filter(Boolean);
			for (let n of e) if (!n.startsWith("file://")) if (n.startsWith("/user/")) {
				let e = n.trim();
				i.push(Promise.try(async () => {
					let n = await el(c, e);
					if (n?.handle) {
						let i = e.split("/").filter(Boolean).pop();
						if (n.type === "directory") {
							let e = await Qc(c, t + i, { create: !0 });
							await fl(n.handle, e, { create: !0 });
						} else {
							let e = await n.handle.getFile(), a = t + i;
							await il(c, a, e), r?.(e, a);
						}
					}
				}));
			} else i.push(Promise.try(async () => {
				let e = await cl(n);
				if (e) {
					let n = t + e.name;
					await il(c, n, e), r?.(e, n);
				}
			}));
		}
		if (s?.[0] instanceof ClipboardItem) {
			for (let e of s) for (let n of e.types) if (n.startsWith("image/") || n.startsWith("text/")) {
				let a = await e.getType(n), o = n.split("/")[1].split("+")[0] || "txt", s = new File([a], `clipboard-${Date.now()}.${o}`, { type: n }), l = t + s.name;
				i.push(il(c, l, s).then(() => r?.(s, l)));
			}
		}
		await Promise.allSettled(i).catch(console.warn.bind(console));
	});
}, ml = "application/octet-stream", hl = /^data:(?<mime>[^;,]+)?(?<params>(?:;[^,]*)*?),(?<data>[\s\S]*)$/i;
function gl() {
	return typeof Uint8Array.fromBase64 == "function";
}
function _l(e) {
	try {
		return decodeURIComponent(e);
	} catch {
		return e;
	}
}
function vl(e) {
	return /%[0-9A-Fa-f]{2}/.test(e) || e.includes("+");
}
function yl(e) {
	let t = e.buffer;
	if (t instanceof ArrayBuffer) return t.slice(e.byteOffset, e.byteOffset + e.byteLength);
	let n = new ArrayBuffer(e.byteLength);
	return new Uint8Array(n).set(e), n;
}
function bl(e) {
	let t = (e || "").trim();
	if (!t.toLowerCase().startsWith("data:")) return null;
	let n = t.match(hl);
	return n?.groups ? {
		mimeType: (n.groups.mime || ml).trim() || ml,
		isBase64: (n.groups.params || "").toLowerCase().includes(";base64"),
		data: n.groups.data ?? ""
	} : null;
}
function xl(e, t = {}) {
	let n = t.alphabet || "base64", r = t.lastChunkHandling || "loose", i = (e || "").trim();
	if (gl()) return Uint8Array.fromBase64(i, {
		alphabet: n,
		lastChunkHandling: r
	});
	let a = n === "base64url" ? i.replace(/-/g, "+").replace(/_/g, "/") : i, o = (4 - a.length % 4) % 4, s = a + "=".repeat(o), c = typeof atob == "function" ? atob(s) : "", l = new Uint8Array(c.length);
	for (let e = 0; e < c.length; e++) l[e] = c.charCodeAt(e);
	return l;
}
async function Sl(e) {
	let t = await e.arrayBuffer();
	return new Uint8Array(t);
}
function Cl(e) {
	let t = (e || "").trim();
	if (!t) return {
		isBase64: !1,
		alphabet: "base64"
	};
	let n = /[-_]/.test(t) && !/[+/]/.test(t) ? "base64url" : "base64", r = (n === "base64url" ? t.replace(/-/g, "+").replace(/_/g, "/") : t).replace(/[\r\n\s]/g, "");
	return !/^[A-Za-z0-9+/]*={0,2}$/.test(r) || r.length < 8 ? {
		isBase64: !1,
		alphabet: n
	} : {
		isBase64: !0,
		alphabet: n
	};
}
function wl(e) {
	try {
		return typeof URL > "u" ? !1 : typeof URL.canParse == "function" ? URL.canParse(e) : (new URL(e), !0);
	} catch {
		return !1;
	}
}
function Tl(e) {
	let t = (e || "").toLowerCase().split(";")[0].trim();
	if (!t) return "bin";
	let n = {
		"text/plain": "txt",
		"text/markdown": "md",
		"text/html": "html",
		"application/json": "json",
		"application/xml": "xml",
		"image/jpeg": "jpg",
		"image/png": "png",
		"image/webp": "webp",
		"image/gif": "gif",
		"image/svg+xml": "svg",
		"application/pdf": "pdf"
	};
	if (n[t]) return n[t];
	let r = t.indexOf("/");
	if (r <= 0 || r >= t.length - 1) return "bin";
	let i = t.slice(r + 1);
	return i.includes("+") && (i = i.split("+")[0]), i.includes(".") && (i = i.split(".").pop() || i), i || "bin";
}
function El(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n++) t ^= e[n], t = Math.imul(t, 16777619);
	return (t >>> 0).toString(16).padStart(8, "0").repeat(8);
}
async function Dl(e) {
	try {
		let t = globalThis.crypto?.subtle;
		if (!t) return El(e);
		let n = await t.digest("SHA-256", e), r = new Uint8Array(n);
		return Array.from(r, (e) => e.toString(16).padStart(2, "0")).join("");
	} catch {
		return El(e);
	}
}
function Ol(e) {
	return Cl(e).isBase64;
}
async function kl(e, t = {}) {
	let n = t.maxBytes ?? 50 * 1024 * 1024, r = (t.namePrefix || "asset").trim() || "asset", i = t.preserveFileName ?? !1, a = "text", o, s = null;
	if (e instanceof File) a = "file", s = e, o = t.mimeType && t.mimeType !== e.type ? new Blob([await e.arrayBuffer()], { type: t.mimeType }) : e;
	else if (e instanceof Blob) a = "blob", o = t.mimeType && t.mimeType !== e.type ? new Blob([await e.arrayBuffer()], { type: t.mimeType }) : e;
	else {
		let r = (e instanceof URL ? e.toString() : String(e ?? "")).trim(), i = bl(r), s = t.uriComponent || vl(r) ? _l(r) : r;
		a = i ? "data-url" : wl(r) ? "url" : Ol(r) ? "base64" : s !== r && (bl(s) || Ol(s) || wl(s)) ? "uri" : "text", o = await jl(a === "uri" ? s : r, {
			mimeType: t.mimeType,
			uriComponent: t.uriComponent,
			isBase64: a === "base64" ? !0 : void 0,
			maxBytes: n
		});
	}
	let c = await Sl(o);
	if (c.byteLength > n) throw Error(`Data too large: ${c.byteLength} bytes`);
	let l = await Dl(c), u = (t.mimeType || o.type || ml).trim() || ml, d = Tl(u), f = t.filename || `${r}-${l.slice(0, 16)}.${d}`, p = i && s?.name ? s.name : f, m = s && i && !t.mimeType ? s : new File([o], p, { type: u });
	return {
		hash: l,
		name: m.name,
		type: m.type || u,
		size: m.size,
		source: a,
		file: m
	};
}
async function Al(e, t = {}) {
	let n = t.maxBytes ?? 50 * 1024 * 1024, r = (e ?? "").trim(), i = bl(r);
	if (i) {
		let e = t.mimeType || i.mimeType || ml, r = t.uriComponent || vl(i.data) ? _l(i.data) : i.data;
		if (t.isBase64 ?? i.isBase64) {
			let i = xl(r, {
				alphabet: t.base64?.alphabet || "base64",
				lastChunkHandling: t.base64?.lastChunkHandling || "loose"
			});
			if (i.byteLength > n) throw Error(`Decoded data too large: ${i.byteLength} bytes`);
			let a = new Blob([yl(i)], { type: e });
			return t.asFile ? new File([a], t.filename || "file", { type: e }) : a;
		}
		let a = new Blob([r], { type: e });
		return t.asFile ? new File([a], t.filename || "file", { type: e }) : a;
	}
	try {
		if (typeof URL < "u" && URL.canParse?.(r)) {
			let e = await (await fetch(r)).blob(), n = t.mimeType || e.type || ml, i = e.type === n ? e : new Blob([await e.arrayBuffer()], { type: n });
			return t.asFile ? new File([i], t.filename || "file", { type: n }) : i;
		}
	} catch {}
	let a = t.uriComponent || vl(r) ? _l(r) : r, o = Cl(a), s = t.isBase64 ?? o.isBase64, c = t.mimeType || (s ? ml : "text/plain;charset=utf-8");
	if (s) {
		let e = xl(a, {
			alphabet: t.base64?.alphabet || o.alphabet,
			lastChunkHandling: t.base64?.lastChunkHandling || "loose"
		});
		if (e.byteLength > n) throw Error(`Decoded data too large: ${e.byteLength} bytes`);
		let r = new Blob([yl(e)], { type: c });
		return t.asFile ? new File([r], t.filename || "file", { type: c }) : r;
	}
	let l = new Blob([a], { type: c });
	return t.asFile ? new File([l], t.filename || "file", { type: c }) : l;
}
async function jl(e, t = {}) {
	return await Al(e, {
		...t,
		asFile: !1
	});
}
//#endregion
//#region ../../projects/lur.e/src/utils/opfs/WriteFileSmart-v2.ts
var Ml = null, Nl = () => (Ml ||= import("./src-Ce6CttgD.js").then((e) => ({
	readFile: e.readFile,
	writeFile: e.writeFile
})), Ml), Pl = (e, t = !0) => {
	let n = String(e || "").trim();
	return t && (n = n.toLowerCase()), n = n.replace(/\s+/g, "-"), n = n.replace(/[^a-z0-9_.\-+#&]/g, "-"), n = n.replace(/-+/g, "-"), n;
}, Fl = (e = "") => e ? e.includes("json") ? "json" : e.includes("markdown") ? "md" : e.includes("plain") ? "txt" : e === "image/jpeg" || e === "image/jpg" ? "jpg" : e === "image/png" ? "png" : e.startsWith("image/") ? e.split("/").pop() || "" : e.includes("html") ? "html" : "" : "", Il = (e) => String(e || "").split("/").filter(Boolean), Ll = (e) => e.endsWith("/") ? e : e + "/", Rl = (e, t = !0) => (t ? "/" : "") + e.filter(Boolean).join("/"), zl = (e) => Rl(Il(e).map((e) => Pl(e))), Bl = [
	"id",
	"_id",
	"key",
	"slug",
	"name"
], Vl = (e) => Object.prototype.toString.call(e) === "[object Object]";
function Hl(e, t) {
	let n = Array.isArray(t.arrayKey) ? t.arrayKey : t.arrayKey ? [t.arrayKey] : Bl, r = [], i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
	for (let t of e) if (t != null) if (Vl(t)) {
		let e;
		for (let r of n) if (r in t && t[r] != null) {
			e = String(t[r]);
			break;
		}
		if (e != null) a.has(e) || (a.set(e, t), r.push(t));
		else {
			let e = Wl(t);
			o.has(e) || (o.add(e), r.push(t));
		}
	} else if (Array.isArray(t)) {
		let e = Wl(t);
		o.has(e) || (o.add(e), r.push(t));
	} else i.has(t) || (i.add(t), r.push(t));
	return r;
}
function Ul(e, t, n) {
	if (Array.isArray(e) && Array.isArray(t)) switch (n.arrayStrategy) {
		case "replace": return t.slice();
		case "concat": return e.concat(t);
		default: return Hl(e.concat(t), { arrayKey: n.arrayKey });
	}
	if (Vl(e) && Vl(t)) {
		let r = { ...e };
		for (let i of Object.keys(t)) i in e ? r[i] = Ul(e[i], t[i], n) : r[i] = t[i];
		return r;
	}
	return t;
}
function Wl(e) {
	if (!Vl(e)) return JSON.stringify(e);
	let t = Object.keys(e).sort(), n = {};
	for (let r of t) n[r] = e[r];
	return JSON.stringify(n);
}
async function Gl(e) {
	return await e.text();
}
async function Kl(e, t) {
	try {
		let { readFile: n } = await Nl(), r = await n(e, t)?.catch?.(console.warn.bind(console));
		if (!r) return null;
		let i = await Gl(r);
		return i?.trim() ? S.parse(i) : null;
	} catch {
		return null;
	}
}
var ql = async (e, t, n, r = {}) => {
	let { writeFile: i } = await Nl(), { forceExt: a, ensureJson: o, toLower: s = !0, sanitize: c = !0, mergeJson: l, arrayStrategy: u = "union", arrayKey: d, jsonSpace: f = 2 } = r, p = String(t || "").trim(), m = p.endsWith("/"), ee = !m && Il(p).length > 0 && p.includes("."), h = m ? p : ee ? p.split("/").slice(0, -1).join("/") : p, g = ee ? p.split("/").pop() || "" : n?.name || "";
	h ||= "/", g ||= Date.now() + "";
	let te = g.lastIndexOf("."), ne = te > 0 ? g.slice(0, te) : g, _ = a || (o ? "json" : te > 0 ? g.slice(te + 1) : Fl(n?.type || "")) || "";
	c && (h = zl(h), ne = Pl(ne, s));
	let re = _ ? `${ne}.${_}` : ne, v = Ll(h) + re;
	if (l !== !1 && (o || _.toLowerCase() === "json" || n?.type === "application/json")) try {
		let t;
		if (n instanceof File || n instanceof Blob) {
			let e = await Gl(n);
			t = e?.trim() ? S.parse(e) : {};
		} else t = n;
		let r = await Kl(e, v)?.catch?.(console.warn.bind(console)), a = r == null ? t : Ul(r, t, {
			arrayStrategy: u,
			arrayKey: d
		}), o = JSON.stringify(a, void 0, f), s = await i(e, v, new File([o], re, { type: "application/json" }))?.catch?.(console.warn.bind(console));
		return typeof document < "u" && document?.dispatchEvent?.(new CustomEvent("rs-fs-changed", {
			detail: s,
			bubbles: !0,
			composed: !0,
			cancelable: !0
		})), s;
	} catch (e) {
		console.warn("writeFileSmart JSON merge failed, falling back to raw write:", e);
	}
	let y;
	if (n instanceof File) if (n.name === re) y = n;
	else {
		let e = n.type || (_ ? `application/${_}` : "application/octet-stream"), t = await n.arrayBuffer();
		y = new File([t], re, { type: e });
	}
	else {
		let e = n.type || (_ ? `application/${_}` : "application/octet-stream");
		y = new File([await n.arrayBuffer()], re, { type: e });
	}
	let b = await i(e, v, y)?.catch?.(console.warn.bind(console));
	return typeof document < "u" && document?.dispatchEvent?.(new CustomEvent("rs-fs-changed", {
		detail: b,
		bubbles: !0,
		composed: !0,
		cancelable: !0
	})), b;
}, Jl = (e = "", t = "") => {
	let n = t.endsWith("/") ? t : `${t}/`;
	return e.startsWith(n);
}, Yl = new BroadcastChannel("rs-fs"), Xl = /* @__PURE__ */ new Map();
Yl.addEventListener("close", () => Xl.clear()), Yl.addEventListener("message", (e) => {
	let t = e?.data;
	if (!t || t.type !== "commit-result" && t.type !== "commit-to-clipboard") return;
	let n = t?.results ?? [];
	if (!(!Array.isArray(n) || !n.length)) {
		for (let [e, t] of Xl.entries()) if (t.size && n.some((t) => Jl(t?.path, e))) for (let e of t) try {
			e();
		} catch (e) {
			console.warn(e);
		}
	}
});
//#endregion
export { Qs as $, Qr as $n, Ha as $t, nl as A, ji as An, E as Ar, Xo as At, Oc as B, hi as Bn, Fo as Bt, Xc as C, Pi as Cn, Mt as Cr, fs as Ct, Zc as D, Oi as Dn, qe as Dr, is as Dt, pl as E, Ai as En, Je as Er, ds as Et, al as F, yi as Fn, Wo as Ft, hc as G, wi as Gn, _o as Gt, Ec as H, mi as Hn, jo as Ht, Jc as I, Si as In, Bo as It, pc as J, ei as Jn, Ya as Jt, Cc as K, Ci as Kn, Xa as Kt, Kc as L, pi as Ln, Lo as Lt, cl as M, Di as Mn, De as Mr, Yo as Mt, rl as N, Ei as Nn, Ce as Nr, qo as Nt, Wc as O, G as On, Ve as Or, ts as Ot, ol as P, Mi as Pn, be as Pr, Jo as Pt, $s as Q, ai as Qn, Ua as Qt, ul as R, gi as Rn, Mo as Rt, el as S, Li as Sn, Ot as Sr, ls as St, Q as T, Ti as Tn, Xe as Tr, as as Tt, Tc as U, xi as Un, vo as Ut, kc as V, _i as Vn, No as Vt, Dc as W, bi as Wn, mo as Wt, uc as X, oi as Xn, Ga as Xt, dc as Y, ii as Yn, Ja as Yt, ec as Z, si as Zn, za as Zt, Bc as _, Ki as _n, un as _r, As as _t, kl as a, Ui as an, kr as ar, tc as at, Qc as b, zi as bn, jt as br, Ss as bt, Al as c, qi as cn, An as cr, Is as ct, $ as d, Bi as dn, yn as dr, Us as dt, xa as en, $r as er, Xs as et, Yc as f, Gi as fn, bn as fr, Gs as ft, ll as g, K as gn, dn as gr, Fs as gt, sl as h, q as hn, pn as hr, js as ht, Ol as i, na as in, U as ir, nc as it, Vc as j, ki as jn, He as jr, es as jt, qc as k, Ni as kn, Oe as kr, Qo as kt, fl as l, Hi as ln, jn as lr, Hs as lt, tl as m, ea as mn, fn as mr, ws as mt, Sl as n, ra as nn, H as nr, Zs as nt, bl as o, Vi as on, jr as or, Js as ot, Z as p, Zi as pn, vn as pr, Ws as pt, wc as q, vi as qn, Za as qt, xl as r, ta as rn, V as rr, qs as rt, jl as s, Ji as sn, Er as sr, Ls as st, ql as t, J as tn, W as tr, Ys as tt, Gc as u, Xi as un, M as ur, Vs as ut, Uc as v, Yi as vn, ln as vr, vs as vt, dl as w, Fi as wn, wt as wr, us as wt, $c as x, Ri as xn, Dt as xr, bs as xt, Hc as y, $i as yn, rn as yr, xs as yt, il as z, ci as zn, Io as zt };
