import { $ as e, A as t, B as n, D as r, E as i, G as a, K as o, L as s, M as c, N as l, O as u, P as d, Q as f, R as p, V as m, X as ee, Z as h, at as g, b as _, d as te, et as v, f as y, g as ne, h as re, it as ie, j as ae, l as oe, n as b, nt as se, q as x, r as ce, rt as le, s as ue, st as de, tt as fe, v as pe, w as me, x as S } from "./src-CFwTR5EZ.js";
import { t as C } from "./jsox-CIxBzsI5.js";
import { o as he, s as ge } from "./src-CDxLeNWW.js";
//#region ../../projects/dom.ts/src/agate/Properties.ts
var _e = /* @__PURE__ */ new Set();
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
	if (!(!t || _e.has(t))) try {
		CSS.registerProperty(e);
	} catch (e) {
		String(e?.name || "").toLowerCase() !== "invalidmodificationerror" && console.warn(e);
	} finally {
		_e.add(t);
	}
});
//#endregion
//#region ../../projects/dom.ts/src/agate/Utils.ts
var ve = () => ({
	didTimeout: !1,
	timeRemaining: () => 0
}), ye = (e, t = 1e3) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e(ve()), 0), be = () => {
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
}, xe = (e = be()) => (t) => e.shedule(t);
typeof document < "u" && document?.documentElement;
var Se = (e, t = {}) => {
	if (!(!t || typeof t != "object" || !e)) return Array.from(Object.entries(t)).map(([t, n]) => {
		let r = e.getAttribute(t);
		n == null ? e.removeAttribute(t) : n != r && e.setAttribute(t, r == "" ? n ?? r : r ?? n);
	});
}, Ce = /* @__PURE__ */ new Map(), we = (e, t = 1e3, ...n) => {
	let r = {
		running: !0,
		cancel: () => {
			r.running = !1;
		}
	};
	return ye(async () => {
		if (!(!e || typeof e != "function")) {
			for (; r.running;) await Promise.all([Promise.try(e, ...n), new Promise((e) => setTimeout(e, t))]).catch?.(console.warn.bind(console)), await Promise.any([new Promise((e) => ye(e, t)), new Promise((e) => setTimeout(e, t))]);
			r.cancel = () => {};
		}
	}, { timeout: t }), r?.cancel;
};
typeof requestAnimationFrame < "u" && requestAnimationFrame(async () => {
	for (;;) Ce.forEach((e) => e?.()), await new Promise((e) => requestAnimationFrame(e));
});
var Te = (e, t, n) => {
	t != null && e.checked != t && (e?.type == "checkbox" || e?.type == "radio" && !e?.checked ? (e?.click?.(), n?.preventDefault?.()) : (e.checked = !!t, e?.dispatchEvent?.(new Event("change", {
		bubbles: !0,
		cancelable: !0
	}))));
}, w = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement) ? e : null, Ee = (e, t) => e == null || t == null ? -1 : Array.from(e?.childNodes ?? [])?.indexOf?.(t) ?? -1, De = (e) => {
	if (e == ":fragment:") return document.createDocumentFragment();
	let t = document.createElement.bind(document);
	for (var n = t("div"), r, i = ""; e && (r = e.match("^(?:(-?[_a-zA-Z]+[_a-zA-Z0-9-]*))|^#(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\.(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)|^\\[(-?[_a-zA-Z]+[_a-zA-Z0-9-]*)(?:([*$|~^]?=)([\"'])((?:(?=(\\\\?))\\8.)*?)\\6)?\\]"));) r[1] && (n = t(r[1])), r[2] && (n.id = r[2]), r[3] && (i += " " + r[3]), r[4] && n.setAttribute(r[4], r[7] || ""), e = e.slice(r[0].length);
	return i && (n.className = i.slice(1)), n;
}, T = (e) => e != null && (e instanceof Node || e instanceof Text || e instanceof Element || e instanceof Comment || e instanceof HTMLElement || e instanceof DocumentFragment) ? e : null, Oe = (e, t) => {
	for (; e;) {
		if (!(e?.element ?? e)) return !1;
		if ((e?.element ?? e) === (t?.element ?? t)) return !0;
		e = e.parentElement ?? (e.parentNode == e?.getRootNode?.({ composed: !0 }) ? e?.getRootNode?.({ composed: !0 })?.host : e?.parentNode);
	}
}, ke = {};
function E(e, t, n, r = ke) {
	e?.addEventListener?.(t, n, r);
	let i = typeof e == "object" || typeof e == "function" && !e?.deref ? new WeakRef(e) : e;
	return () => i?.deref?.()?.removeEventListener?.(t, n, r);
}
function Ae(e, t, n, r = ke) {
	e?.removeEventListener?.(t, n, r);
}
var je = (e, t) => (e = e instanceof WeakRef ? e.deref() : e, [...Object.entries(t)]?.map?.(([t, n]) => Array.isArray(n) ? E(e, t, ...n) : E(e, t, n))), Me = (e, t) => {
	if (t) {
		let n = t;
		return n = t instanceof Map ? [...t.entries()] : [...Object.entries(t)], n.map(([t, n]) => ((m(n) ? [...n] : n) ?? [])?.map?.((n) => E(e, t, n)));
	}
}, Ne = (e, t, n) => {
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
}, Pe = (e, t, n) => {
	if (n?.composedPath && typeof n.composedPath == "function") {
		let e = n.composedPath();
		for (let n of e) if ((n instanceof HTMLElement || n instanceof Element) && n.matches?.(t)) return n;
	}
	let r = e?.matches?.(t) ? e : null, i = (e?.getRootNode({ composed: !0 }) ?? e?.parentElement?.getRootNode({ composed: !0 }))?.host, a = i?.matches?.(t) ? i : null, o = e?.closest?.(t) ?? r?.closest?.(t) ?? a?.closest?.(t) ?? null;
	return r ?? o ?? a;
}, Fe = (e, t, n = "parent") => {
	if (!e || e.checkVisibility && !e.checkVisibility({
		checkOpacity: !0,
		checkVisibilityCSS: !0
	}) || !e.checkVisibility && e.offsetParent === null && e.style.position !== "fixed") return !1;
	let r = document.activeElement;
	for (; r && r.shadowRoot && r.shadowRoot.activeElement;) r = r.shadowRoot.activeElement;
	let i = r === e || Oe(r, e), a = e.matches(":hover");
	if (!i && !a && !t) return !1;
	if (t) {
		if (typeof t == "string") {
			if (n === "parent") return !!Pe(e, t);
			{
				let n = !!Pe(i ? r : e.querySelector(":hover") || e, t);
				return e?.querySelector?.(t) != null || e?.matches?.(t) || n;
			}
		} else if (t instanceof HTMLElement) return n === "parent" ? Oe(e, t) || !1 : Oe(t, e) || !1;
	}
	return !0;
}, Ie = /* @__PURE__ */ new WeakMap(), Le = (e = document.documentElement) => Ie.getOrInsertComputed(e, () => {
	let t = (e?.matches?.(".ui-orientbox") ? e : null) || e?.closest?.(".ui-orientbox") || document.body;
	if (t?.zoom) return t?.zoom || 1;
	if (e?.currentCSSZoom) return e?.currentCSSZoom || 1;
}), Re = (e = document.documentElement) => (e?.currentCSSZoom == null ? Le(e) : 1) || 1, ze = (e = document.documentElement) => {
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
var Be = {
	"portrait-primary": 0,
	"landscape-primary": 1,
	"portrait-secondary": 2,
	"landscape-secondary": 3
}, Ve = () => {
	let e = screen?.orientation?.type || "portrait-primary";
	return globalThis.matchMedia("((display-mode: fullscreen) or (display-mode: standalone) or (display-mode: window-controls-overlay))").matches || (matchMedia("(orientation: portrait)").matches ? e = e.replace("landscape", "portrait") : matchMedia("(orientation: landscape)").matches && (e = e.replace("portrait", "landscape"))), e;
};
new OffscreenCanvas(1, 1).getContext("2d");
//#endregion
//#region ../../projects/dom.ts/src/agate/LauncherGrid.ts
var He = (e, t) => {
	let n = parseInt(e.getAttribute("data-grid-columns") || "", 10), r = parseInt(e.getAttribute("data-grid-rows") || "", 10), i = ue(t ?? [4, 8]);
	return [Number.isFinite(n) && n > 0 ? n : i[0], Number.isFinite(r) && r > 0 ? r : i[1]];
}, Ue = (e, t, n, r = "floor") => {
	if (!e) return [0, 0];
	let i = e.getBoundingClientRect?.();
	if (!i) return [0, 0];
	let a = He(e, n?.layout), o = ze(e), s = globalThis.getComputedStyle?.(e), c = parseFloat(s?.paddingLeft) || 0, l = parseFloat(s?.paddingTop) || 0, u = parseFloat(s?.paddingRight) || 0, d = parseFloat(s?.paddingBottom) || 0, f = Math.max(1, (i.width || e.clientWidth || 1) - c - u), p = Math.max(1, (i.height || e.clientHeight || 1) - l - d);
	return oe([(t?.[0] || 0) - i.left - c, (t?.[1] || 0) - i.top - l], [f, p], a, o, {
		mode: r,
		redirect: {
			item: n?.item,
			list: n?.list,
			items: n?.items
		}
	});
}, We = (e) => (typeof e?.current == "object" && (e = e?.element ?? e?.current ?? (typeof e?.self == "object" ? e?.self : null) ?? e), e), Ge = (e, t, n) => {
	if (typeof e?.selector == "string") return Ke(e, e?.selector, t, n);
	let r = new Set((t.split(",") || [t]).map((e) => e.trim())), i = new MutationObserver((e, t) => {
		for (let i of e) i.attributeName && r.has(i.attributeName) && n(i, t);
	});
	return (e?.element ?? e) instanceof Node && i.observe(e = We(e), {
		attributes: !0,
		attributeOldValue: !0,
		attributeFilter: [...r]
	}), r.forEach((t) => n({
		target: e,
		type: "attributes",
		attributeName: t,
		oldValue: e?.getAttribute?.(t)
	}, i)), i;
}, Ke = (e, t, n, r) => {
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
	return a.observe(e = We(e), {
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
}, qe = (e, t = "*", n = (e, t) => {}) => {
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
	(e?.element ?? e) instanceof Node && l.observe(e = We(e), {
		childList: !0,
		subtree: !0
	});
	let d = Array.from(e.querySelectorAll(t));
	return d.length > 0 && n?.({ addedNodes: d }, l), l;
}, Je = () => typeof globalThis < "u" && typeof globalThis.CSSStyleSheet == "function", Ye = (e) => typeof e == "string" && /@import\b/i.test(e), Xe = "DOM", Ze = typeof document < "u" ? document.createElement("style") : null;
Ze && (typeof document < "u" && document.querySelector("head")?.appendChild?.(Ze), Ze.dataset.owner = Xe);
var Qe = (e, t, n = "") => {
	e[0][e[1]] = e[1] == "innerHTML" ? `@import url("${t}") ${n && typeof n == "string" ? `layer(${n})` : ""};` : t;
}, $e = typeof CSSStyleValue < "u" && typeof CSSUnitValue < "u", et = (e) => $e && e instanceof CSSStyleValue, tt = (e) => $e && e instanceof CSSUnitValue, nt = (e, t, n, r = "") => {
	if (!(!e || !t)) {
		if (n == null) {
			e.getPropertyValue(t) !== "" && e.removeProperty(t);
			return;
		}
		e.getPropertyValue(t) !== n && e.setProperty(t, n, r);
	}
}, rt = (e, t, r, i = "") => {
	if (!e || !t) return e;
	let a = ae(t), o = e.style, s = e.attributeStyleMap ?? e.styleMap;
	if (!$e || !s) return it(e, t, r, i);
	let c = n(r) && !(et(r) || tt(r)) ? r?.value : r;
	if (c == null) return s.delete?.(a), o && nt(o, a, null, i), e;
	if (et(c)) {
		let t = s.get(a);
		if (tt(c) && tt(t)) {
			if (t.value === c.value && t.unit === c.unit) return e;
		} else if (t === c) return e;
		return s.set(a, c), e;
	}
	if (typeof c == "number") if (CSS?.number && !a.startsWith("--")) {
		let t = CSS.number(c), n = s.get(a);
		return tt(n) && n.value === t.value && n.unit === t.unit || s.set(a, t), e;
	} else return nt(o, a, String(c), i), e;
	if (typeof c == "string" && !et(c)) {
		let t = de(c);
		if (typeof t == "number" && CSS?.number && !a.startsWith("--")) {
			let n = CSS.number(t), r = s.get(a);
			return tt(r) && r.value === n.value && r.unit === n.unit || s.set(a, n), e;
		} else return nt(o, a, c, i), e;
	}
	return nt(o, a, String(c), i), e;
}, it = (e, t, r, i = "") => {
	if (!e || !t) return e;
	let a = ae(t), o = e.style;
	if (!o) return e;
	let s = n(r) && !(et(r) || tt(r)) ? r?.value : r;
	return typeof s == "string" && !et(s) && (s = de(s) ?? s), s == null ? (nt(o, a, null, i), e) : (et(s), nt(o, a, String(s), i), e);
}, at = (e, t) => typeof e?.then == "function" ? e?.then?.(t) : t(e), ot = /* @__PURE__ */ new WeakMap(), st = /* @__PURE__ */ new Map(), ct = (e) => {
	if (!e) return null;
	if (st.has(e)) return st.get(e);
	if (e instanceof Blob || e instanceof File) {
		if (ot.has(e)) return ot.get(e);
		let t = URL.createObjectURL(e);
		return ot.set(e, t), st.set(t, t), t;
	}
	if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
		let t = fetch(e?.replace?.("?url", "?raw"), {
			cache: "force-cache",
			mode: "same-origin",
			priority: "high"
		})?.then?.(async (t) => {
			let n = await t.blob(), r = URL.createObjectURL(n);
			return ot.set(n, r), st.set(e, r), st.set(r, r), r;
		});
		return st.set(e, t), t;
	}
	if (typeof e == "string") {
		let t = new Blob([e], { type: "text/css" }), n = URL.createObjectURL(t);
		return ot.set(t, n), st.set(n, n), n;
	}
	return e;
}, lt = /* @__PURE__ */ new Map(), ut = /* @__PURE__ */ new WeakMap(), dt = (e) => {
	if (!e) return "";
	if (lt.has(e)) return lt.get(e) ?? "";
	if (e instanceof Blob || e instanceof File) {
		if (ut.has(e)) return ut.get(e) ?? "";
		let t = e?.text?.()?.then?.((t) => (ut.set(e, t), t));
		return ut.set(e, t), t;
	}
	if (URL.canParse(e) || e?.trim?.()?.startsWith?.("./")) {
		let t = fetch(e?.replace?.("?url", "?raw"), {
			cache: "force-cache",
			mode: "same-origin",
			priority: "high"
		})?.then?.(async (t) => {
			let n = await t.text();
			return lt.set(e, n), n;
		});
		return lt.set(e, t), t;
	}
	return typeof e == "string" && lt.set(e, e), e;
}, ft = /* @__PURE__ */ new Map(), pt = /* @__PURE__ */ new WeakMap(), mt = /* @__PURE__ */ new Map(), ht = /* @__PURE__ */ new WeakMap(), gt = (e, t = "ux-query", n = null) => {
	if (!e || !Je()) return null;
	let r = n instanceof ShadowRoot ? n : n?.getRootNode ? n.getRootNode({ composed: !0 }) : null, i = r instanceof ShadowRoot, a = i ? r.adoptedStyleSheets : typeof document < "u" ? document.adoptedStyleSheets : null;
	if (!a) return null;
	let o = `${t || ""}:${e}`, s;
	if (i) {
		let e = pt.get(r);
		e || (e = /* @__PURE__ */ new Map(), pt.set(r, e)), s = e.get(o), s || (s = new CSSStyleSheet(), e.set(o, s), a.includes(s) || a.push(s));
	} else s = ft.get(o), s || (s = new CSSStyleSheet(), ft.set(o, s), a.includes(s) || a.push(s));
	if (t) {
		let n;
		if (i) {
			let e = ht.get(r);
			e || (e = /* @__PURE__ */ new Map(), ht.set(r, e)), n = e.get(t);
		} else n = mt.get(t);
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
				let e = ht.get(r);
				e || (e = /* @__PURE__ */ new Map(), ht.set(r, e)), e.set(t, n);
			} else mt.set(t, n);
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
}, _t = (e, t, n, r = "") => $e ? rt(e, t, n, r) : it(e, t, n, r), vt = (e, t, n = "", r) => {
	let i = ct(e), a = typeof e == "string" && URL.canParse(e) ? e : i;
	return t?.[0] && (t[0].fetchPriority = "high"), t && a && typeof a == "string" && Qe(t, a, n), t?.[0] && (!URL.canParse(e) || r) && t?.[0] instanceof HTMLLinkElement, at(i, (e) => {
		t?.[0] && e && (Qe(t, e, n), t?.[0].setAttribute("loaded", ""));
	})?.catch?.((e) => {
		console.warn("Failed to load style sheet:", e);
	});
}, yt = (e) => {
	let t = typeof document < "u" ? document.createElement("link") : null;
	return t && (t.fetchPriority = "high"), t ? (Object.assign(t, {
		rel: "stylesheet",
		type: "text/css",
		crossOrigin: "same-origin"
	}), t.dataset.owner = Xe, vt(e, [t, "href"]), typeof document < "u" && document.head.append(t), t) : null;
}, bt = (e, t = typeof document < "u" ? document?.head : null, n = "") => {
	let r = t?.querySelector?.("head") ?? t;
	if (typeof HTMLHeadElement < "u" && r instanceof HTMLHeadElement) return yt(e);
	let i = typeof document < "u" ? document.createElement("style") : null;
	return i ? (i.dataset.owner = Xe, vt(e, [i, "innerHTML"], n), r?.prepend?.(i), i) : null;
}, xt = (e) => wt(e, ""), D = /* @__PURE__ */ new Map(), St = /* @__PURE__ */ new WeakMap(), Ct = (e, t) => {
	if (!e || !t) return !1;
	try {
		return e.replaceSync(t), !0;
	} catch (e) {
		let t = String(e?.message || "").toLowerCase();
		return t.includes("@import rules are not allowed") || t.includes("@import") && t.includes("not allowed") || console.warn("[DOM] Failed to apply adopted stylesheet:", e), !1;
	}
}, wt = (e, t = null) => {
	if (!Je()) return typeof e == "string" && bt(e, void 0, t || ""), null;
	if (typeof e == "string" && Ye(e)) return bt(e, void 0, t || ""), null;
	if (typeof e == "string" && D?.has?.(e)) {
		let t = D.get(e);
		return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(t) && document.adoptedStyleSheets.push(t), t;
	}
	if ((e instanceof Blob || e instanceof File) && St?.has?.(e)) {
		let t = St.get(e);
		return typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(t) && document.adoptedStyleSheets.push(t), t;
	}
	if (!e) return null;
	let n = typeof e == "string" ? D.getOrInsertComputed(e, (e) => new CSSStyleSheet()) : St.getOrInsertComputed(e, (e) => new CSSStyleSheet());
	if (typeof document < "u" && document.adoptedStyleSheets && !document.adoptedStyleSheets.includes(n) && document.adoptedStyleSheets.push(n), typeof e == "string" && !URL.canParse(e)) {
		let r = t ? `@layer ${t} { ${e} }` : e;
		return D.set(e, n), Ct(n, r) || (Tt(n), D.delete(e), bt(e)), n;
	} else at(dt(e), (r) => {
		if (D.set(r, n), r) return Ye(r) ? (Tt(n), D.delete(r), St.delete(e), bt(r, void 0, t || ""), n) : (Ct(n, t ? `@layer ${t} { ${r} }` : r) || (Tt(n), D.delete(r), St.delete(e), bt(r, void 0, t || "")), n);
	});
	return n;
}, Tt = (e) => {
	if (!e) return !1;
	let t = typeof e == "string" ? D.get(e) : e;
	if (!t || typeof document > "u") return !1;
	let n = document.adoptedStyleSheets, r = n.indexOf(t);
	return r === -1 ? !1 : (n.splice(r, 1), !0);
}, Et = (e, t) => {
	if ("computedStyleMap" in e) {
		let n = e?.computedStyleMap?.()?.get(t);
		return n instanceof CSSUnitValue ? n?.value || 0 : n?.toString?.();
	}
	if (e instanceof HTMLElement) {
		let n = getComputedStyle?.(e, "");
		return parseFloat(n?.getPropertyValue?.(t)?.replace?.("px", "")) || 0;
	}
	return parseFloat((e?.style ?? e).getPropertyValue?.(t)?.replace?.("px", "")) || 0;
}, Dt = (e, t) => t == "inline" ? Et(e, "padding-inline-start") + Et(e, "padding-inline-end") : Et(e, "padding-block-start") + Et(e, "padding-block-end"), Ot = /* @__PURE__ */ new WeakMap(), kt = (e, t, n) => (new WeakRef(e), t.has(n) || t.add(n), e), At = (e, t) => {
	if (e) {
		if (t) {
			let n = Ot.getOrInsert(e, /* @__PURE__ */ new Set());
			[...t?.values?.() || []].map((t) => kt(e, n, t));
		}
		return e;
	}
}, jt = /* @__PURE__ */ new Map(), Mt = (e, t) => {
	let n = [...e.entries() || []];
	return new Map(n?.map?.(([e, n]) => [e, n?.get?.(t)])?.filter?.(([e, t]) => !!t) || []);
}, Nt = (e, t, n) => {
	let r = jt.get(t);
	return r || (r = /* @__PURE__ */ new WeakMap(), jt.set(t, r)), r.has(e) || r.set(e, n), e;
}, Pt = (e, t) => {
	if (!(!e || !t)) {
		for (let [n, r] of t.entries()) Nt(e, n, r);
		return e;
	}
}, Ft = (e, t) => {
	if (e) {
		if (t) {
			let n = O?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
			O?.has?.(e) || O?.set?.(e, n), [...t?.values?.() || []].map((t) => Lt(e, t, n));
		}
		return e;
	}
}, It = (e) => ({
	storeSet: Mt(jt, e),
	mixinSet: O?.get?.(e),
	behaviorSet: Ot?.get?.(e)
}), Lt = (e, t, n) => {
	let r = new WeakRef(e);
	return n ||= O?.get?.(e), n?.has?.(t) || (n?.add?.(t), Rt?.get?.(t)?.add?.(e), t.name && e?.setAttribute?.("data-mixin", [...e?.getAttribute?.("data-mixin")?.split?.(" ") || [], t.name].filter((e) => !!e).join(" ")), t?.connect?.(r, t, It(e))), e;
}, O = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new WeakMap(), Vt = (e, t) => {
	typeof t == "string" && (t = zt?.get?.(t));
	let n = new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]), r = new Set([...n].map((e) => zt?.get?.(e)).filter((e) => !!e)), i = O?.get?.(e) ?? /* @__PURE__ */ new WeakSet();
	Rt?.has?.(t) || Rt?.set?.(t, /* @__PURE__ */ new WeakSet()), O?.has?.(e) || O?.set?.(e, i);
	let a = new WeakRef(e);
	i?.has?.(t) || (r.has(t) || t?.disconnect?.(a, t, It(e)), (r.has(t) || !Rt?.get?.(t)?.has?.(e)) && (t?.connect?.(a, t, It(e)), n.add(Bt?.get?.(t)), i?.add?.(t), e?.setAttribute?.("data-mixin", [...n].filter((e) => !!e).join(" "))), Rt?.get?.(t)?.add?.(e)), i?.has?.(t) && (r.has(t) || (i?.delete?.(t), t?.disconnect?.(a, t, It(e))));
}, Ht = /* @__PURE__ */ new Set(), Ut = (e = typeof document < "u" ? document : null) => {
	if (e) return Ht?.has?.(e) || (Ht?.add?.(e), Ke(e, "*", "data-mixin", (e) => Wt(e.target)), qe(e, "[data-mixin]", (e) => {
		for (let t of e.addedNodes) t instanceof HTMLElement && Wt(t);
	})), e;
}, Wt = (e) => {
	let t = new Set([...e?.getAttribute?.("data-mixin")?.split?.(" ") || []]);
	[...new Set([...t].map((e) => zt?.get?.(e)).filter((e) => !!e))]?.map?.((t) => Vt(e, t));
}, Gt = (e, t) => {
	e.forEach((e) => t ? Vt(e, t) : Wt(e));
}, Kt = (e) => {
	for (let t of Ht) Gt(t?.querySelectorAll?.("[data-mixin]"), e);
}, qt = new FinalizationRegistry((e) => {
	zt?.delete?.(e);
}), Jt = (e, t) => {
	if (!Bt?.has?.(t)) {
		let n = e?.trim?.();
		n && (Bt?.set?.(t, n), zt?.set?.(n, t), qt?.register?.(t, n), Kt(t));
	}
};
Ut(typeof document < "u" ? document : null);
var Yt = class {
	constructor(e = null) {
		e && Jt(e, this);
	}
	connect(e, t, n) {
		return this;
	}
	disconnect(e, t, n) {
		return this;
	}
	storeForElement(e) {
		return jt.get(this.name || "")?.get?.(e);
	}
	relatedForElement(e) {
		return It(e);
	}
	get elements() {
		return Rt?.get?.(this);
	}
	get storage() {
		return jt?.get?.(this.name || "");
	}
	get name() {
		return Bt?.get?.(this);
	}
}, Xt = (e, t, r) => {
	let i = r;
	n(r) && (r = r.value);
	let a = (r = fe(r)) != null && r !== !1;
	return me(i, () => {
		e instanceof HTMLInputElement ? e.hidden = !a : a ? e?.removeAttribute?.("data-hidden") : e?.setAttribute?.("data-hidden", "");
	}), e;
}, Zt = (t, r, i) => {
	if (!(r = typeof r == "string" ? e(r) : r) || !t || [
		"style",
		"dataset",
		"attributeStyleMap",
		"styleMap",
		"computedStyleMap"
	].indexOf(r || "") != -1) return t;
	let a = i;
	return n(i) && (i = i.value), t?.[r] === i || t?.[r] !== i && me(a, () => {
		i == null ? delete t[r] : t[r] = i;
	}), t;
}, Qt = (t, r, i) => {
	let a = t?.dataset;
	if (!r || !t || !a) return t;
	let o = i;
	return n(i) && (i = i?.value), r = e(r), a?.[r] === (i = fe(i)) || (i == null || i === !1 ? delete a[r] : me(o, () => {
		typeof i != "object" && typeof i != "function" ? a[r] = String(i) : delete a[r];
	})), t;
}, $t = (e, t) => e.style.removeProperty(ae(t)), en = (e, t, r) => {
	let i = e?.style;
	return !t || typeof t != "string" || !e || !i || me(r, () => {
		ee(r) || n(r) || f(r) ? _t(e, t, r) : r ?? $t(e, t);
	}), e;
}, k = (e, t, r) => {
	if (!t || !e) return e;
	let i = r;
	return n(r) && (r = r.value), t = ae(t), e?.getAttribute?.(t) === (r = fe(r)) || me(i, () => {
		typeof r != "object" && typeof r != "function" && r != null && (typeof r != "boolean" || r == 1) ? e?.setAttribute?.(t, String(r)) : e?.removeAttribute?.(t);
	}), e;
};
//#endregion
//#region ../../projects/dom.ts/src/mixin/junction/types.ts
function tn(e, t) {
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
var nn = {
	start: "junction-select:start",
	move: "junction-select:move",
	end: "junction-select:end",
	cancel: "junction-select:cancel"
}, rn = {
	start: "junction-drag:start",
	move: "junction-drag:move",
	end: "junction-drag:end"
}, an = {
	start: "junction-resize:start",
	move: "junction-resize:move",
	end: "junction-resize:end"
}, on = /* @__PURE__ */ new WeakMap(), A = (e, t, n) => {
	let r = on.get(e) ?? /* @__PURE__ */ new Map(), i = r.get(t) ?? [];
	i.push(n), r.set(t, i), on.set(e, r);
}, sn = (e, t) => {
	let n = on.get(e), r = n?.get(t);
	if (r) {
		for (let e of r) try {
			e();
		} catch {}
		n.delete(t), n.size === 0 && on.delete(e);
	}
}, cn = (e, t) => {
	let n = globalThis.getComputedStyle?.(e)?.getPropertyValue?.(t)?.trim?.() ?? "", r = parseFloat(n);
	return Number.isFinite(r) ? r : 0;
}, ln = (e, t, n) => {
	let r = e.getAttribute(t)?.trim();
	if (!r) return n;
	let i = e.querySelector(r);
	return i instanceof HTMLElement ? i : n;
}, un = class extends Yt {
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
			let e = tn(i, a);
			if (e.width < 1 && e.height < 1) {
				n.style.display = "none";
				return;
			}
			n.style.display = "block", n.style.left = `${e.left}px`, n.style.top = `${e.top}px`, n.style.width = `${e.width}px`, n.style.height = `${e.height}px`;
		}, c = (e) => {
			e.button === 0 && (e.target?.closest?.("[data-junction-ignore-select], [data-junction-drag-handle], [data-junction-resize-handle], button, a, input, textarea, select") || (e.target === t || t.contains(e.target)) && (r = !0, i = o(e), a = { ...i }, t.setPointerCapture(e.pointerId), t.dispatchEvent(new CustomEvent(nn.start, {
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
			let n = tn(i, a);
			t.dispatchEvent(new CustomEvent(nn.move, {
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
			let n = tn(i, a);
			t.dispatchEvent(new CustomEvent(nn.end, {
				bubbles: !0,
				detail: {
					a: { ...i },
					b: { ...a },
					box: n,
					host: t
				}
			}));
		};
		return A(t, "ui-junction-select", () => {
			n.remove();
		}), A(t, "ui-junction-select", E(t, "pointerdown", c)), A(t, "ui-junction-select", E(t, "pointermove", l)), A(t, "ui-junction-select", E(t, "pointerup", (e) => {
			r && u(e);
		})), A(t, "ui-junction-select", E(t, "pointercancel", (e) => {
			if (r) {
				r = !1, n.style.display = "none";
				try {
					t.releasePointerCapture(e.pointerId);
				} catch {}
				t.dispatchEvent(new CustomEvent(nn.cancel, {
					bubbles: !0,
					detail: { host: t }
				}));
			}
		})), this;
	}
	disconnect(e) {
		let t = e?.deref?.();
		return t && sn(t, "ui-junction-select"), this;
	}
}, dn = class extends Yt {
	constructor() {
		super("ui-junction-drag");
	}
	connect(e) {
		let t = e?.deref?.();
		if (!t) return this;
		_t(t, "--jx-drag-x", cn(t, "--jx-drag-x")), _t(t, "--jx-drag-y", cn(t, "--jx-drag-y"));
		let n = t.style.transform;
		(!t.style.transform || t.style.transform === "none") && (t.style.transform = "translate3d(calc(var(--jx-drag-x, 0) * 1px), calc(var(--jx-drag-y, 0) * 1px), 0)");
		let r = ln(t, "data-junction-drag-handle", t), i = !1, a = 0, o = 0, s = 0, c = 0, l = (e) => {
			e.button === 0 && (e.target !== r && !r.contains(e.target) || (i = !0, a = e.clientX, o = e.clientY, s = cn(t, "--jx-drag-x"), c = cn(t, "--jx-drag-y"), r.setPointerCapture(e.pointerId), t.dispatchEvent(new CustomEvent(rn.start, {
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
			_t(t, "--jx-drag-x", l), _t(t, "--jx-drag-y", u), t.dispatchEvent(new CustomEvent(rn.move, {
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
				t.dispatchEvent(new CustomEvent(rn.end, {
					bubbles: !0,
					detail: {
						host: t,
						x: cn(t, "--jx-drag-x"),
						y: cn(t, "--jx-drag-y")
					}
				}));
			}
		};
		return A(t, "ui-junction-drag", () => {
			t.style.transform = n;
		}), A(t, "ui-junction-drag", E(r, "pointerdown", l)), A(t, "ui-junction-drag", E(r, "pointermove", u)), A(t, "ui-junction-drag", E(r, "pointerup", d)), A(t, "ui-junction-drag", E(r, "pointercancel", d)), this;
	}
	disconnect(e) {
		let t = e?.deref?.();
		return t && sn(t, "ui-junction-drag"), this;
	}
}, fn = class extends Yt {
	constructor() {
		super("ui-junction-resize");
	}
	connect(e) {
		let t = e?.deref?.();
		if (!t) return this;
		let n = ln(t, "data-junction-resize-handle", t), r = !1, i = 0, a = 0, o = 0, s = 0, c = Math.max(120, parseFloat(t.getAttribute("data-junction-resize-min-w") || "") || 120), l = Math.max(80, parseFloat(t.getAttribute("data-junction-resize-min-h") || "") || 80), u = (e) => {
			e.button === 0 && (e.target !== n && !n.contains(e.target) || (r = !0, i = e.clientX, a = e.clientY, o = t.offsetWidth, s = t.offsetHeight, n.setPointerCapture(e.pointerId), t.dispatchEvent(new CustomEvent(an.start, {
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
			t.style.width = `${n}px`, t.style.height = `${u}px`, t.dispatchEvent(new CustomEvent(an.move, {
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
				t.dispatchEvent(new CustomEvent(an.end, {
					bubbles: !0,
					detail: {
						host: t,
						width: t.offsetWidth,
						height: t.offsetHeight
					}
				}));
			}
		};
		return A(t, "ui-junction-resize", E(n, "pointerdown", u)), A(t, "ui-junction-resize", E(n, "pointermove", d)), A(t, "ui-junction-resize", E(n, "pointerup", f)), A(t, "ui-junction-resize", E(n, "pointercancel", f)), this;
	}
	disconnect(e) {
		let t = e?.deref?.();
		return t && sn(t, "ui-junction-resize"), this;
	}
};
new un(), new dn(), new fn(), Symbol.observable ||= Symbol.for("observable"), Symbol.subscribe ||= Symbol.for("subscribe"), Symbol.unsubscribe ||= Symbol.for("unsubscribe");
var j = Symbol.for("@value"), M = Symbol.for("@extract"), N = Symbol.for("@origin"), pn = Symbol.for("@registry"), mn = Symbol.for("@behavior"), hn = Symbol.for("@promise"), gn = Symbol.for("@trigger-less"), P = Symbol.for("@trigger-lock"), _n = Symbol.for("@trigger-control"), vn = Symbol.for("@trigger"), yn = Symbol.for("@subscribe"), bn = Symbol.for("@isNotEqual"), xn = Symbol.for("@realProp"), Sn = /* @__PURE__ */ new WeakMap(), Cn = (e) => {
	let t = typeof e == "object" || typeof e == "function" ? e?.[M] ?? e : e, n = (e) => Cn(e);
	return Array.isArray(t) ? t?.map?.(n) || Array.from(t || [])?.map?.(n) || [] : t instanceof Map || t instanceof WeakMap ? new Map(Array.from(t?.entries?.() || [])?.map?.(([e, t]) => [e, Cn(t)])) : t instanceof Set || t instanceof WeakSet ? new Set(Array.from(t?.values?.() || [])?.map?.(n)) : t != null && typeof t == "function" || typeof t == "object" ? Object.fromEntries(Array.from(Object.entries(t || {}) || [])?.filter?.(([e]) => e != M && e != N && e != pn)?.map?.(([e, t]) => [e, Cn(t)])) : t;
}, wn = (e) => e?.[M] ?? e?.["@target"] ?? e, F = (e, t = !1) => {
	let r = e;
	if (x(e) || typeof e == "symbol") return e;
	if (e != null && (e instanceof WeakRef || "deref" in e && typeof e?.deref == "function") && (e = e?.deref?.()), e != null && (typeof e == "object" || typeof e == "function")) {
		e = wn(e);
		let i = t && n(e) && e?.value;
		if (i != null && (typeof i == "object" || typeof i == "function") && (e = i), r != e) return F(e, t);
	}
	return e;
}, Tn = (e) => e != null && typeof e.then == "function", En = (e, t) => x(e) || typeof e == "function" ? t?.(e) : Tn(e) ? e.then(t) : e?.promise && Tn(e.promise) ? e.promise.then(t) : t?.(e), Dn = /* @__PURE__ */ new WeakMap(), On = new FinalizationRegistry((e) => {
	e?.forEach?.((e) => e?.());
});
function I(e, t, n) {
	!n || typeof n != "function" || typeof e != "object" && typeof e != "function" || (t == Symbol.dispose ? Dn?.getOrInsertComputed?.(e, () => {
		let t = /* @__PURE__ */ new Set();
		return (typeof e == "object" || typeof e == "function") && (On.register(e, t), Dn.set(e, t), e[Symbol.dispose] ??= () => t.forEach((e) => {
			e?.();
		})), t;
	})?.add?.(n) : e[t] = function(...r) {
		let i = e?.[t];
		typeof i == "function" && i.apply(this, r), n.apply(this, r);
	});
}
//#endregion
//#region ../../projects/object.ts/src/core/Subscript.ts
var kn = /* @__PURE__ */ new WeakMap(), An = (e, t, n) => kn.getOrInsert(e, () => {
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
}), L = /* @__PURE__ */ new WeakMap(), jn = /* @__PURE__ */ new Map(), Mn = /* @__PURE__ */ new WeakMap(), Nn = (e, t) => {
	let n = e?.[M] ?? e, r = L.get(n);
	return r ? r.bindSource(n) : (r = new Kn(n), L.set(n, r)), t;
}, Pn = (e, t) => (e = F(e?.[M] ?? e), typeof e == "symbol" || !(typeof e == "object" || typeof e == "function") || e == null ? e : Mn.getOrInsertComputed(e, () => new Proxy(e, Nn(e, t)))), Fn = Symbol.for("@allProps"), In = new Set(["*", "all"]), Ln = new Map([
	["set", ["setter", "@set"]],
	["add", ["@add"]],
	["delete", ["@delete"]],
	["invalidate", ["@invalidate"]],
	["manual", ["@manual"]],
	["custom", ["@custom"]],
	["setAll", ["@setAll"]],
	["addAll", ["@addAll"]],
	["deleteAll", ["@deleteAll", "@clear"]]
]), Rn = new Map(Array.from(Ln.entries()).flatMap(([e, t]) => t.map((t) => [t, e]))), zn = (e = "set") => {
	if (e == null) return e;
	let t = String(e || "set");
	return Rn.get(t) ?? t;
}, Bn = (e) => {
	let t = e == null ? "all" : String(zn(e) ?? "all");
	return [t, ...Ln.get(t) ?? []];
}, Vn = (e = ["*"]) => new Set([...Hn(e)].flatMap((e) => [e, ...Ln.get(e) ?? []])), Hn = (e = ["*"]) => {
	let t = typeof e == "string" ? [e] : Array.from(e ?? ["*"]), n = new Set(t.map((e) => {
		let t = String(e || "*");
		return In.has(t) ? t : String(zn(t) ?? t);
	}));
	return n.size ? n : new Set(["*"]);
}, Un = (e, t) => {
	let n = e instanceof Set ? e : Hn(e);
	return [...In].some((e) => n.has(e)) || Bn(t).some((e) => n.has(e));
}, Wn = (e) => !!e && typeof e == "object" && !Array.isArray(e) && ("affectTypes" in e || "triggers" in e || "triggerImmediately" in e), Gn = (e = ["*"]) => {
	if (Wn(e)) return {
		affectTypes: Hn(e.affectTypes ?? e.triggers ?? ["*"]),
		triggerImmediately: e.triggerImmediately !== !1
	};
	let t = Hn(e);
	return {
		affectTypes: t,
		triggerImmediately: Un(t, "initial")
	};
}, Kn = class {
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
			return An(e, t, n);
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
		r = zn(r) ?? r;
		let a = this.#t, o = a?.size ? Array.from(a.entries()).map(([a, o]) => {
			if ((o.prop === e || o.prop === Fn || o.prop === null) && Un(o.triggers, r)) return this.$safeExec(a, t, e, n, r, ...i);
		}).filter((e) => e && typeof e.then == "function") : [];
		if (jn.size) {
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
			for (let [e, t] of jn.entries()) if (Un(t, r)) {
				let t = this.$safeExec(e, a);
				t && typeof t.then == "function" && o.push(t);
			}
		}
		return o.length ? Promise.allSettled(o) : void 0;
	}
	wrap(e) {
		return Array.isArray(e) ? Pn(e, this) : e;
	}
	get triggerControl() {
		return this.#s;
	}
	isTriggerEnabled(e) {
		return !Un(this.#o, "all") && !Bn(e).some((e) => this.#o.has(e));
	}
	setTriggersEnabled(e = ["*"], t = !0) {
		let n = Vn(e);
		for (let e of n) t ? this.#o.delete(e) : this.#o.add(e);
	}
	withTriggers(e, t, n) {
		let r = [...Vn(e)], i = new Map(r.map((e) => [e, this.#o.has(e)])), a = () => {
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
		let r = Gn(n);
		return this.#t.set(e, {
			prop: t || Fn,
			triggers: r.affectTypes
		}), () => this.unaffected(e, t || Fn);
	}
	unaffected(e, t) {
		if (e != null && typeof e == "function") {
			let n = this.#t, r = n?.get(e);
			if (r && (r.prop == t || t == null || t == Fn)) return n.delete(e), () => this.affected(e, t || Fn, r.triggers);
		}
		return this.#t.clear();
	}
	trigger(e, t, n, r = "set", ...i) {
		if (typeof e == "symbol" || (r === void 0 && (r = "set"), r = zn(r) ?? r, !this.isTriggerEnabled(r))) return;
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
}, qn = new Set([
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
]), Jn = (e, t) => {
	if (!qn.has(t)) return null;
	let n = z(e, t);
	return typeof n == "function" ? y(e, n) : n;
}, R = /* @__PURE__ */ new WeakMap();
function Yn(e, t) {
	let n = !0;
	try {
		R?.getOrInsert?.(e, /* @__PURE__ */ new Set())?.add?.(t), R?.get?.(e)?.has?.(t) && (n = !0), n = typeof Reflect.getOwnPropertyDescriptor(e, t)?.get == "function";
	} catch {
		n = !0;
	} finally {
		R?.get?.(e)?.delete?.(t);
	}
	return n;
}
var Xn = (e, t) => {
	if (x(e)) return e;
	let n = z(e, t);
	if (n == null && t != "value") {
		let r = z(e, "value");
		return r != null && !x(r) ? Xn(r, t) : n;
	} else if (t == "value" && n != null && !x(n) && typeof n != "function") return Xn(n, t) ?? n ?? e;
	return n ?? e;
}, Zn = (e, t, n) => {
	if (e == null) return !1;
	let r = __safeSetGuard.getOrInsert(e, /* @__PURE__ */ new Set());
	return r?.has?.(t) ? !1 : (r?.add?.(t), Reflect.set(e, t, n));
}, z = (e, t, n) => {
	let r;
	if (e == null) return e;
	let i = R.getOrInsert(e, /* @__PURE__ */ new Set());
	if (i?.has?.(t)) return null;
	if (!Yn(e, t)) r ??= Reflect.get(e, t, n ?? e);
	else {
		i?.add?.(t);
		try {
			r = Reflect.get(e, t, n ?? e);
		} catch {
			r = void 0;
		} finally {
			i.delete(t), i?.size === 0 && R?.delete?.(e);
		}
	}
	return typeof r == "function" ? y(e, r) : r;
}, B = (e, t) => Object.prototype.hasOwnProperty.call(e, t), Qn = (e, t = !1) => !!e && typeof e == "object" && !Array.isArray(e) && (B(e, "key") || B(e, "name") || B(e, "oldValue") || B(e, "old") || B(e, "op") || B(e, "trigger") || t && B(e, "value")), $n = (e, t, n) => B(e, t) ? e[t] : t == "oldValue" && B(e, "old") ? e.old : n(), er = (e, t = "manual") => zn(e.trigger ?? e.op ?? t), tr = (e) => typeof e == "string" || typeof e == "number" || typeof e == "symbol", nr = (e) => {
	let t = z(e, xn) ?? z(e, "realProp");
	return tr(t) ? t : null;
}, rr = (e, t) => t == "value" ? nr(e) ?? t : t, ir = (e, t) => {
	let n = nr(e);
	return n != null && t == n ? z(e, "value") ?? z(e, j) ?? z(e, t) : t == null ? void 0 : z(e, t);
}, ar = (e, t) => {
	let n = (e, n, r) => (Qn(n) || (r ??= n), t(Qn(e) ? e : Qn(n, !0) ? {
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
}, or = (e, t, n) => {
	if (e == null || x(e)) return e;
	if (([
		"deref",
		"bind",
		"@target",
		N,
		M,
		pn
	]?.indexOf(t) < 0 ? z(e, t)?.bind?.(e) : null) != null) return null;
	if ([M, N].indexOf(t) >= 0) return z(e, t) ?? e;
	if (t == j) return z(e, t) ?? z(e, "value");
	if (t == pn) return n;
	if (t == _n) return n?.triggerControl;
	if (t == Symbol.observable) return n?.compatible;
	if (t == Symbol.subscribe) return (t, n, r) => W(n == null ? e : [e, n], t, r);
	if (t == Symbol.iterator || t == Symbol.asyncIterator) return z(e, t);
	if (t == Symbol.dispose) return (t) => {
		z(e, Symbol.dispose)?.(t), Ur(t == null ? e : [e, t]);
	};
	if (t == Symbol.asyncDispose) return (t) => {
		z(e, Symbol.asyncDispose)?.(t), Ur(t == null ? e : [e, t]);
	};
	if (t == Symbol.unsubscribe) return (t) => Ur(t == null ? e : [e, t]);
	if (typeof t == "symbol" && (t in e || z(e, t) != null)) return z(e, t);
}, sr = (e, t, n) => {
	if (t == "subscribe") return n?.compatible?.[t] ?? ((t) => {
		if (typeof t == "function") return W(e, t);
		if ("next" in t && t?.next != null) {
			let n = W(e, t?.next), r = t?.complete;
			return t.complete = (...e) => (n?.(), r?.(...e)), t.complete;
		}
	});
}, cr = class {
	#e;
	#t;
	#n;
	constructor(e, t, n) {
		this.#e = e, this.#t = t, this.#n = n;
	}
	get(e, t, n) {
		return Jn(e, t) ?? Reflect.get(e, t, n);
	}
	apply(e, t, n) {
		let r = [], i = [], a = [], o = [...this.#t], s = -1, c = Reflect.apply(e, t || this.#t, n);
		if (this.#n?.[P]) return Array.isArray(c) ? hr(c) : c;
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
				for (let e = 0; e < o.length; e++) S(o[e], this.#t[e]) && a.push([
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
		let l = L.get(this.#t);
		return r?.length == 1 ? l?.trigger?.(s, r[0], null, r[0] == null ? "add" : "set") : r?.length > 1 && (l?.trigger?.(s, r, null, "addAll"), r.forEach((e, t) => l?.trigger?.(s + t, e, null, e == null ? "add" : "set"))), a?.length == 1 ? l?.trigger?.(a[0]?.[0] ?? s, a[0]?.[1], a[0]?.[2], a[0]?.[2] == null ? "add" : "set") : a?.length > 1 && (l?.trigger?.(s, a, o, "setAll"), a.forEach((e, t) => l?.trigger?.(e?.[0] ?? s + t, e?.[1], e?.[2], e?.[2] == null ? "add" : "set"))), i?.length == 1 ? l?.trigger?.(s, null, i[0], i[0] == null ? "add" : "delete") : i?.length > 1 && (l?.trigger?.(s, null, i, "deleteAll"), i.forEach((e, t) => l?.trigger?.(s + t, null, e, e == null ? "add" : "delete"))), c == e ? new Proxy(c, this.#n) : Array.isArray(c) ? hr(c) : c;
	}
}, lr = (e, t, n, r) => {
	let i = Number.isInteger(n) && Number.isInteger(r) && r < n ? t.slice(r, n) : [];
	if (!e[P] && n !== r) {
		let e = L.get(t);
		i.length === 1 ? e?.trigger?.(r, null, i[0], "delete") : i.length > 1 && (e?.trigger?.(r, null, i, "deleteAll"), i.forEach((t, n) => e?.trigger?.(r + n, null, t, "delete")));
		let a = Number.isInteger(n) && Number.isInteger(r) && r > n ? r - n : 0;
		if (a === 1) e?.trigger?.(n, void 0, null, "add");
		else if (a > 1) {
			let t = Array(a).fill(void 0);
			e?.trigger?.(n, t, null, "addAll"), t.forEach((t, r) => e?.trigger?.(n + r, void 0, null, "add"));
		}
	}
}, ur = class {
	[P];
	constructor() {}
	has(e, t) {
		return Reflect.has(e, t);
	}
	get(e, t, n) {
		let r = Jn(e, t);
		if (r != null) return r;
		if ([
			M,
			N,
			"@target",
			"deref"
		].indexOf(t) >= 0 && z(e, t) != null && z(e, t) != e) return typeof z(e, t) == "function" ? z(e, t)?.bind?.(e) : z(e, t);
		let i = L?.get?.(e), a = or(e, t, i);
		if (a != null) return a;
		let o = sr(e, t, i);
		if (o != null) return o;
		if (t == gn) return v.call(this, this);
		if (t == vn) return ar(i, (t) => {
			let n = t.key ?? t.name ?? 0, r = $n(t, "value", () => z(e, n)), a = $n(t, "oldValue", () => void 0);
			return i?.trigger?.(n, r, a, er(t, "manual"));
		});
		if (t == "@target" || t == M) return e;
		if (t == "x") return () => e?.x ?? e?.[0];
		if (t == "y") return () => e?.y ?? e?.[1];
		if (t == "z") return () => e?.z ?? e?.[2];
		if (t == "w") return () => e?.w ?? e?.[3];
		if (t == "r") return () => e?.r ?? e?.[0];
		if (t == "g") return () => e?.g ?? e?.[1];
		if (t == "b") return () => e?.b ?? e?.[2];
		if (t == "a") return () => e?.a ?? e?.[3];
		let s = z(e, t) ?? (t == "value" ? z(e, j) : null);
		return typeof s == "function" ? new Proxy(typeof s == "function" ? s?.bind?.(e) : s, new cr(t, e, this)) : s;
	}
	set(e, t, n) {
		if (typeof t != "symbol" && Number.isInteger(parseInt(t)) && (t = parseInt(t) ?? t), t == P && n) return this[P] = !!n, !0;
		if (t == P && !n) return delete this[P], !0;
		let r = z(e, t), i = [
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
		return c = o >= 0 ? Reflect.set(e, o, n) : s >= 0 ? Reflect.set(e, s, n) : Reflect.set(e, t, n), t == "length" && S(r, n) && lr(this, e, r, n), !this[P] && typeof t != "symbol" && S(r, n) && L?.get?.(e)?.trigger?.(t, n, r, "set"), c;
	}
	deleteProperty(e, t) {
		if (typeof t != "symbol" && Number.isInteger(parseInt(t)) && (t = parseInt(t) ?? t), t == P) return delete this[P], !0;
		let n = z(e, t), r = Reflect.deleteProperty(e, t);
		return !this[P] && t != "length" && t != P && typeof t != "symbol" && n != null && L.get(e)?.trigger?.(t, t, n, "delete"), r;
	}
}, dr = class {
	[P];
	constructor() {}
	get(e, t, r) {
		if ([
			M,
			N,
			"@target",
			"deref",
			"then",
			"catch",
			"finally"
		].indexOf(t) >= 0 && z(e, t) != null && z(e, t) != e) return typeof z(e, t) == "function" ? y(e, z(e, t)) : z(e, t);
		let i = L.get(e) ?? L.get(z(e, "value") ?? e);
		return or(e, t, i) ?? (z(e, t) == null && t != "value" && n(e) && z(e, "value") != null && (typeof z(e, "value") == "object" || typeof z(e, "value") == "function") && z(z(e, "value"), t) != null && (e = z(e, "value") ?? e), sr(e, t, i) ?? (t == gn ? v.call(this, this) : t == vn ? ar(i, (t) => {
			let n = rr(e, t.key ?? t.name ?? nr(e) ?? "value"), r = $n(t, "value", () => ir(e, n)), a = $n(t, "oldValue", () => n == "value" || n == nr(e) ? z(e, j) : void 0);
			return i?.trigger?.(n, r, a, er(t, "manual"));
		}) : t == Symbol.toPrimitive ? (n) => {
			let r = Xn(e, t);
			return z(r, t) ? z(r, t)?.(n) : x(r) ? g(r, n) : x(z(r, "value")) ? g(z(r, "value"), n) : g(z(r, "value") ?? r, n);
		} : t == Symbol.toStringTag ? () => {
			let n = Xn(e, t);
			return z(n, t) ? z(n, t)?.() : x(n) ? String(n ?? "") || "" : x(z(n, "value")) ? String(z(n, "value") ?? "") || "" : String(z(n, "value") ?? n ?? "") || "";
		} : t == "toString" ? () => {
			let n = Xn(e, t);
			return z(n, t) ? z(n, t)?.() : z(n, Symbol.toStringTag) ? z(n, Symbol.toStringTag)?.() : x(n) ? String(n ?? "") || "" : x(z(n, "value")) ? String(z(n, "value") ?? "") || "" : String(z(n, "value") ?? n ?? "") || "";
		} : t == "valueOf" ? () => {
			let n = Xn(e, t);
			return z(n, t) ? z(n, t)?.() : z(n, Symbol.toPrimitive) ? z(n, Symbol.toPrimitive)?.() : x(n) ? n : x(z(n, "value")) ? z(n, "value") : z(n, "value") ?? n;
		} : typeof t == "symbol" && (t in e || z(e, t) != null) ? z(e, t) : Xn(e, t)));
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
			R?.getOrInsert?.(e, /* @__PURE__ */ new Set())?.add?.(t), R?.get?.(e)?.has?.(t) && (n = void 0), n = Reflect.getOwnPropertyDescriptor(e, t);
		} catch {
			n = void 0;
		} finally {
			R?.get?.(e)?.delete?.(t);
		}
		return n;
	}
	has(e, t) {
		return t in e;
	}
	set(e, t, r) {
		return Jn(e, t) ?? se(r, (i) => {
			let a = Jn(i, t);
			if (a != null) return a;
			if (t == P && r) return this[P] = !!r, !0;
			if (t == P && !r) return delete this[P], !0;
			let o = e;
			if (z(e, t) == null && t != "value" && n(e) && z(e, "value") != null && (typeof z(e, "value") == "object" || typeof z(e, "value") == "function") && z(z(e, "value"), t) != null && (e = z(e, "value") ?? e), typeof t == "symbol" && !(z(e, t) != null && t in e)) return;
			let s = rr(e, t), c = t == "value" ? z(e, j) ?? z(e, t) : z(e, t);
			e[t] = i;
			let l = z(e, t) ?? i;
			return !this[P] && typeof t != "symbol" && (z(e, bn) ?? S)?.(c, l) && (L.get(e) ?? L.get(o))?.trigger?.(s, i, c), !0;
		});
	}
	defineProperty(e, t, r) {
		let i = Jn(e, t);
		if (i != null) return i;
		if (t == P && r.value) return this[P] = !!r.value, !0;
		if (t == P && !r.value) return delete this[P], !0;
		if (z(e, t) == null && t != "value" && n(e) && z(e, "value") != null && (typeof z(e, "value") == "object" || typeof z(e, "value") == "function") && z(z(e, "value"), t) != null && (e = z(e, "value") ?? e), r.get == null && r.set == null) return Reflect.defineProperty(e, t, r);
		let a = z(e, t), o = Reflect.defineProperty(e, t, {
			get: r.get,
			set: r.set,
			enumerable: r.enumerable ?? !0,
			configurable: r.configurable ?? !0
		});
		return Zn(e, t, a), o;
	}
	deleteProperty(e, t) {
		if (t == P) return delete this[P], !0;
		z(e, t) == null && t != "value" && n(e) && z(e, "value") != null && (typeof z(e, "value") == "object" || typeof z(e, "value") == "function") && z(z(e, "value"), t) != null && (e = z(e, "value") ?? e);
		let r = z(e, t), i = Reflect.deleteProperty(e, t);
		return !this[P] && t != P && typeof t != "symbol" && L.get(e)?.trigger?.(t, null, r, "delete"), i;
	}
}, fr = class {
	[P];
	constructor() {}
	get(e, t, n) {
		if ([
			M,
			N,
			"@target",
			"deref"
		].indexOf(t) >= 0 && z(e, t) != null && z(e, t) != e) return typeof z(e, t) == "function" ? y(e, z(e, t)) : z(e, t);
		let r = L.get(e), i = or(e, t, r);
		if (i != null) return i;
		let a = sr(e, t, r);
		if (a != null) return a;
		e = z(e, M) ?? z(e, N) ?? e;
		let o = y(e, z(e, t));
		return typeof t == "symbol" && (t in e || z(e, t) != null) ? o : t == gn ? v.call(this, this) : t == vn ? ar(r, (t) => {
			let n = t.key ?? t.name;
			if (n == null) return;
			let i = $n(t, "value", () => e.get(n));
			if (i == null && !B(t, "value")) return;
			let a = $n(t, "oldValue", () => void 0);
			return r?.trigger?.(n, i, a, er(t, "manual"));
		}) : t == "clear" ? () => {
			let t = Array.from(e?.entries?.() || []), n = o();
			return t.forEach(([t, n]) => {
				!this[P] && n && L.get(e)?.trigger?.(t, null, n, "delete");
			}), n;
		} : t == "delete" ? (t, n = null) => {
			let r = e.get(t), i = o(t);
			return !this[P] && r && L.get(e)?.trigger?.(t, null, r, "delete"), i;
		} : t == "set" ? (t, n) => le(n, (r) => {
			let i = e.get(t), a = o(t, n);
			return S(i, a) && (this[P] || L.get(e)?.trigger?.(t, a, i, i == null ? "add" : "set")), a;
		}) : o;
	}
	set(e, t, n) {
		return t == P ? (this[P] = !!n, !0) : t == P && !n ? (delete this[P], !0) : Reflect.set(e, t, n);
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
			R?.getOrInsert?.(e, /* @__PURE__ */ new Set())?.add?.(t), R?.get?.(e)?.has?.(t) && (n = void 0), n = Reflect.getOwnPropertyDescriptor(e, t);
		} catch {
			n = void 0;
		} finally {
			R?.get?.(e)?.delete?.(t);
		}
		return n;
	}
	deleteProperty(e, t) {
		return t == P ? (delete this[P], !0) : Reflect.deleteProperty(e, t);
	}
}, pr = class {
	[P] = !1;
	constructor() {}
	get(e, t, n) {
		if ([
			M,
			N,
			"@target",
			"deref"
		].indexOf(t) >= 0 && z(e, t) != null && z(e, t) != e) return typeof z(e, t) == "function" ? y(e, z(e, t)) : z(e, t);
		let r = L.get(e), i = or(e, t, r);
		if (i != null) return i;
		let a = sr(e, t, r);
		if (a != null) return a;
		e = z(e, M) ?? z(e, N) ?? e;
		let o = y(e, z(e, t));
		return typeof t == "symbol" && (t in e || z(e, t) != null) ? o : t == gn ? v.call(this, this) : t == vn ? ar(r, (t) => {
			let n = t.key ?? t.name;
			if (n == null) return;
			let i = $n(t, "value", () => e.has(n)), a = $n(t, "oldValue", () => void 0);
			return r?.trigger?.(n, i, a, er(t, "manual"));
		}) : t == "clear" ? () => {
			let t = Array.from(e?.values?.() || []), n = o();
			return t.forEach((t) => {
				!this[P] && t && L.get(e)?.trigger?.(null, null, t, "delete");
			}), n;
		} : t == "delete" ? (t) => {
			let n = e.has(t) ? t : null, r = o(t);
			return !this[P] && n && L.get(e)?.trigger?.(t, null, n, "delete"), r;
		} : t == "add" ? (t) => {
			let n = e.has(t) ? t : null, r = o(t);
			return S(n, t) && !this[P] && !n && L.get(e)?.trigger?.(t, t, n, "add"), r;
		} : o;
	}
	set(e, t, n) {
		return t == P && n ? (this[P] = !!n, !0) : t == P && !n ? (delete this[P], !0) : Reflect.set(e, t, n);
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
			R?.getOrInsert?.(e, /* @__PURE__ */ new Set())?.add?.(t), R?.get?.(e)?.has?.(t) && (n = void 0), n = Reflect.getOwnPropertyDescriptor(e, t);
		} catch {
			n = void 0;
		} finally {
			R?.get?.(e)?.delete?.(t);
		}
		return n;
	}
	deleteProperty(e, t) {
		return t == P ? (delete this[P], !0) : Reflect.deleteProperty(e, t);
	}
}, mr = (e) => !!((typeof e == "object" || typeof e == "function") && e != null && (e?.[M] || e?.[yn])), hr = (e) => mr(e) ? e : Pn(e, new ur()), gr = (e) => mr(e) ? e : Pn(e, new dr()), _r = (e) => mr(e) ? e : Pn(e, new fr()), vr = (e) => mr(e) ? e : Pn(e, new pr()), V = (e, t) => {
	let n = e instanceof Promise || typeof e?.then == "function", r = U({
		[hn]: n ? e : null,
		[j]: n ? 0 : Number(F(e) || 0) || 0,
		[mn]: t,
		[Symbol?.toStringTag]() {
			return String(this?.[j] ?? "") || "";
		},
		[Symbol?.toPrimitive](e) {
			return g((typeof this?.[j] == "object" ? this?.[j]?.value || 0 : this?.[j]) ?? 0, e);
		},
		set value(e) {
			this[j] = (e != null && !Number.isNaN(e) ? Number(e) : this[j]) || 0;
		},
		get value() {
			return Number(this[j] || 0) || 0;
		}
	});
	return e?.then?.((e) => r.value = e), r;
}, yr = (e, t) => {
	let n = e instanceof Promise || typeof e?.then == "function", r = U({
		[hn]: n ? e : null,
		[j]: (n ? "" : String(F(typeof e == "number" ? String(e) : e || ""))) ?? "",
		[mn]: t,
		[Symbol?.toStringTag]() {
			return String(this?.[j] ?? "") ?? "";
		},
		[Symbol?.toPrimitive](e) {
			return g(this?.[j] ?? "", e);
		},
		set value(e) {
			this[j] = String(typeof e == "number" ? String(e) : e || "") ?? "";
		},
		get value() {
			return String(this[j] ?? "") ?? "";
		}
	});
	return e?.then?.((e) => r.value = e), r;
}, H = (e, t) => {
	let n = e instanceof Promise || typeof e?.then == "function", r = U({
		[hn]: n ? e : null,
		[j]: (n ? !1 : (F(e) == null ? !1 : typeof F(e) == "string" ? !0 : !!F(e)) || !1) || !1,
		[mn]: t,
		[Symbol?.toStringTag]() {
			return String(this?.[j] ?? "") || "";
		},
		[Symbol?.toPrimitive](e) {
			return g(!!this?.[j] || !1, e);
		},
		set value(e) {
			this[j] = (e == null ? this[j] : typeof e == "string" ? !0 : !!e) || !1;
		},
		get value() {
			return this[j] || !1;
		}
	});
	return e?.then?.((e) => r.value = e), r;
}, br = (e, t) => {
	let n = e instanceof Promise || typeof e?.then == "function", r = U({
		[hn]: n ? e : null,
		[mn]: t,
		[Symbol?.toStringTag]() {
			return String(this.value ?? "") || "";
		},
		[Symbol?.toPrimitive](e) {
			return g(this.value, e);
		},
		value: n ? null : F(e)
	});
	return e?.then?.((e) => r.value = e), W(e, (e) => {
		r?.[vn]?.();
	}), r;
}, xr = (e, t) => {
	if (e == null || typeof e != "object" && typeof e != "function") return e;
	try {
		Object.defineProperty(e, xn, {
			value: t,
			writable: !0,
			configurable: !0
		});
	} catch {
		try {
			e[xn] = t;
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
}, Sr = (e, t = "value", r, i) => {
	if (x(e) || !e) return e;
	if (Array.isArray(e) && !pe(e?.[1], e) && (Array.isArray(e?.[0]) || typeof e?.[0] == "object" || typeof e?.[0] == "function") && (e = e?.[0]), (t ??= Array.isArray(e) ? null : "value") == null || pe(t, e)) return;
	if (t && n(e?.[t]) && Tr(e?.[t])) return xr(Er(e?.[t]), t);
	if (t && typeof e?.getProperty == "function" && Tr(e?.getProperty?.(t))) return xr(e?.getProperty?.(t), t);
	let a = U({
		[j]: e[t] ??= r ?? e[t],
		[mn]: i,
		[Symbol?.toStringTag]() {
			return String(e?.[t] ?? this[j] ?? "") || "";
		},
		[Symbol?.toPrimitive](n) {
			return g(e?.[t], n);
		},
		set value(n) {
			a[u] = !0, e[t] = this[j] = n ?? l(e[t]), a[u] = !1;
		},
		get value() {
			return this[j] = e?.[t] ?? this[j];
		}
	});
	xr(a, t);
	let o = W(e, (e, n, r, i) => {
		n === t && a?.[vn]?.({
			key: t,
			value: e,
			oldValue: r,
			trigger: i
		});
	});
	return I(a, Symbol.dispose, o), a;
}, Cr = (e, t) => {
	switch (typeof e) {
		case "boolean": return H(e, t);
		case "number": return V(e, t);
		case "string": return yr(e, t);
		case "object": if (e != null) return br(U(e), t);
		default: return br(e, t);
	}
}, wr = (e, t = "value", n) => {
	let r = Tr(e) ? e : Cr(e, n);
	return t == null ? r : Sr(r, t, n);
};
function U(e, t) {
	if (e == null || typeof e == "symbol" || !(typeof e == "object" || typeof e == "function") || mr(e) || (e = F?.(e)) == null || e instanceof Promise || e instanceof WeakRef || mr(e)) return e;
	let n = e;
	if (n == null || typeof n == "symbol" || !(typeof n == "object" || typeof n == "function") || n instanceof Promise || n instanceof WeakRef) return n;
	let r = n;
	return Array.isArray(n) ? (r = hr(n), r) : n instanceof Map ? (r = _r(n), r) : n instanceof Set ? (r = vr(n), r) : ((typeof n == "function" || typeof n == "object") && (r = gr(n)), r);
}
var Tr = (e) => typeof HTMLInputElement < "u" && e instanceof HTMLInputElement ? !0 : !!((typeof e == "object" || typeof e == "function") && e != null && (e?.[M] || e?.[yn] || L?.has?.(e))), Er = (e) => Tr(e) ? U(e) : null, Dr = /* @__PURE__ */ new WeakMap(), Or = (e) => {
	if (!(typeof e == "symbol" || e == null || !(typeof e == "object" || typeof e == "function"))) return e;
}, kr = "initial", Ar = (e) => {
	let t = e?.[xn] ?? e?.realProp;
	return _(t) ? t : null;
}, jr = (e, t) => {
	let n = Ar(e);
	return n != null && (t == null || t == "value") ? n : t;
}, Mr = (e, t) => t != null && t == Ar(e) ? e?.value : e?.[t], Nr = (e, t, n, r) => {
	if (t != null && t == Ar(e)) {
		let r = Mr(e, t);
		if (r != null) return n?.(r, t, null, "set");
	}
	return ne(e, t, n, r);
}, Pr = (e, t, n) => {
	let r = Gn(t);
	if (n == kr) {
		if (!r.triggerImmediately) return;
	} else if (!Un(r.affectTypes, n)) return;
	return (t, r, i, ...a) => e?.(t, r, i, n, ...a);
}, Fr = (e, t, n, r = ["*"]) => {
	if (!e || !Or(e)) return;
	let i = t == Symbol.iterator ? null : jr(e, t), a = e?.[pn] ?? L.get(e);
	e = e?.[M] ?? e, queueMicrotask(() => {
		let t = Pr(n, r, kr);
		t && (i != null && i != Symbol.iterator ? Nr(e, i, t, null) : re(e, t, null));
	});
	let o = a?.affected?.(n, i, r);
	return e?.[Symbol.dispose] ? o : (I(o, Symbol.dispose, o), I(o, Symbol.asyncDispose, o), I(e, Symbol.dispose, o), I(e, Symbol.asyncDispose, o), o);
}, Ir = (e, t, n, r = ["*"]) => {
	let i = Gn(r).affectTypes, a = {}, o = e?.value, s = (e) => {
		let t = e?.target?.value;
		Un(i, "set") && n?.(t, "value", o, "set", e), o = t;
	};
	return e?.addEventListener?.("change", s, a), () => e?.removeEventListener?.("change", s, a);
}, Lr = (e) => Array.isArray(e) && e?.length == 2 && Or(e?.[0]) && (_(e?.[1]) || e?.[1] == Symbol.iterator), Rr = (e, t, n, r = ["*"]) => {
	let i = _(e?.[1]) ? e?.[1] : null;
	return W(e?.[0], i, n, r);
}, zr = (e, t, n, r = ["*"]) => e?.then?.((e) => W?.(e, t, n, r))?.catch?.((e) => (console.warn(e), null)), W = (e, t, n = () => {}, r) => {
	if (typeof t == "function" ? (r = n, n = t, t = null) : t = jr(e, t), (typeof n == "object" || Array.isArray(n)) && (r = n, n = () => {}), (x(e) || typeof e == "symbol") && Gn(r).triggerImmediately) return te(globalThis?.Promise?.try?.(() => n?.(e, null, null, null, kr)));
	if (typeof e?.[yn] == "function") return e?.[yn]?.(n, t, r);
	if (Or(e)) {
		let i = e;
		if (Dr?.has?.(e = e?.[M] ?? e)) return Dr?.get?.(e)?.(i, t, n, r);
		if (Tr(i) || Lr(e) && Tr(e?.[0])) return Tn(e) ? Dr?.getOrInsert?.(e, zr)?.(e, t, n, r) : Lr(e) ? Dr?.getOrInsert?.(e, Rr)?.(e, t, n, r) : typeof HTMLInputElement < "u" && e instanceof HTMLInputElement ? Dr?.getOrInsert?.(e, Ir)?.(e, t, n, r) : Dr?.getOrInsert?.(e, Fr)?.(i, t, n, r);
		{
			let i = Pr(n, r, kr);
			return i ? te(globalThis?.Promise?.try?.(() => Lr(e) ? Nr?.(e?.[0], e?.[1], i, null) : t != null && t != Symbol.iterator ? Nr?.(e, t, i, null) : re?.(e, i, null))) : void 0;
		}
	}
}, Br = class {
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
}, Vr = new Br();
function Hr(e, t, r = ["*"]) {
	if (!e) return;
	if (Vr.has([e, t])) return Vr.get([e, t]);
	let i = (n, i, a, o) => {
		if (i == "value") {
			let i = (a?.value ?? a)?.entries?.(), o = e?.value ?? n?.value ?? n;
			if (i) for (let [e, n] of i) {
				let r = n ?? (a?.value ?? a)?.[e] ?? null, i = o?.[e];
				r == null && i != null ? t(i, e, null, "add") : r != null && i == null ? t(null, e, r, "delete") : S(r, i) && t(i, e, r, "set");
			}
			return Hr(n ?? e?.value, t, r);
		}
		return i == null ? void 0 : e[i];
	};
	return Vr.getOrInsertComputed([e, t], () => e instanceof Set ? W([Wr(e), Symbol.iterator], t, r) : e instanceof Map ? W(e, t, r) : n(e) ? W(e, i, r) : Array.isArray(e) && !(e?.length == 2 && _(e?.[1]) && Tr(e?.[0])) ? W([e, Symbol.iterator], t, r) : W(e, t, r));
}
function Ur(e, t) {
	return En(e, (e) => {
		let n = Array.isArray(e) && e?.length == 2 && ["object", "function"].indexOf(typeof e?.[0]) >= 0 && _(e?.[1]), r = n ? e?.[1] : null;
		e = n && r != null ? e?.[0] ?? e : e;
		let i = typeof e == "object" || typeof e == "function" ? e?.[M] ?? e : e;
		(e?.[pn] ?? L.get(i))?.unaffected?.(t, r);
	});
}
//#endregion
//#region ../../projects/object.ts/src/core/Assigned.ts
var Wr = (e) => {
	let t = U([]);
	return t.push(...Array.from(e?.values?.() || [])), I(t, Symbol.dispose, W(e, (e, n, r) => {
		if (S(e, r)) if (r == null && e != null) t.push(e);
		else if (r != null && e == null) {
			let e = t.indexOf(r);
			e >= 0 && t.splice(e, 1);
		} else {
			let n = t.indexOf(r);
			n >= 0 && S(t[n], e) && (t[n] = e);
		}
	})), t;
}, Gr = U({
	index: 0,
	length: 0,
	action: "MANUAL",
	view: "",
	canBack: !1,
	canForward: !1,
	entries: []
});
typeof history < "u" && history.pushState.bind(history), typeof history < "u" && history.replaceState.bind(history), typeof history < "u" && history.go.bind(history), typeof history < "u" && history.forward.bind(history), typeof history < "u" && history.back.bind(history);
var Kr = (e, t = !1) => {
	let n = e.startsWith("#") ? e : `#${e}`;
	if (t && Gr?.index > 0) {
		let e = Gr?.entries?.[Gr?.index - 1];
		if (e && e.view === n) {
			history.back();
			return;
		}
	}
	t ? (Gr?.entries?.[Gr.index]?.view !== n || Gr?.entries?.[Gr.index]?.view) && history?.replaceState?.(null, "", n) : history?.pushState?.(null, "", n);
}, qr = /* @__PURE__ */ function(e) {
	return e[e.CONTEXT_MENU = 100] = "CONTEXT_MENU", e[e.DROPDOWN = 90] = "DROPDOWN", e[e.MODAL = 80] = "MODAL", e[e.DIALOG = 70] = "DIALOG", e[e.SIDEBAR = 60] = "SIDEBAR", e[e.OVERLAY = 50] = "OVERLAY", e[e.PANEL = 40] = "PANEL", e[e.TOAST = 30] = "TOAST", e[e.TASK = 20] = "TASK", e[e.VIEW = 10] = "VIEW", e[e.DEFAULT = 0] = "DEFAULT", e;
}({}), Jr = /* @__PURE__ */ new Map(), Yr = {}, Xr = () => `closeable-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`, Zr = (e) => {
	let t = e.id || Xr(), n = Object.assign(e, { id: t });
	return n?.hashId ?? (n.hashId = t), Jr.set(t, n), Yr.debug && console.log("[BackNav] Registered:", t, "priority:", e.priority), () => Qr(t);
}, Qr = (e) => {
	let t = Jr.delete(e);
	return Yr.debug && t && console.log("[BackNav] Unregistered:", e), t;
}, $r = (e, t, n) => Zr({
	id: `ctx-menu-${e.id || Xr()}`,
	priority: qr.CONTEXT_MENU,
	element: new WeakRef(e),
	group: "context-menu",
	isActive: () => t.value === !0,
	close: () => (t.value = !1, n?.(), !1)
}), ei = (e, t, n) => Zr({
	id: `modal-${e.id || Xr()}`,
	priority: qr.MODAL,
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
}), ti = /* @__PURE__ */ new Map(), ni = (e) => {
	if (!e) return;
	if (typeof e == "function") return e;
	let t = e;
	if (typeof t?.disconnect == "function") return () => t.disconnect?.();
	if (typeof t?.unsubscribe == "function") return () => t.unsubscribe?.();
}, ri = (e, t) => {
	let n = e?.[_n];
	return typeof n?.without == "function" ? n.without(["setter", "set"], t) : me(e, t);
}, ii = (e, t, n = "value") => !e || !(typeof e == "object" || typeof e == "function") ? t : S(e[n], t) ? ri(e, () => {
	e[n] = t;
}) : t, ai = (e, t, n = "input") => {
	let r = t?.target ?? e;
	return r?.matches?.(n) ? r : r?.querySelector?.(n) ?? e;
}, oi = (e, t) => {
	let n = Array.isArray(e) ? e : [e];
	return ({ source: e, commit: r }) => {
		let i = e?.element ?? e?.self ?? e;
		if (!i?.addEventListener) return;
		let a = (e) => r(e);
		return n.forEach((e) => i.addEventListener(e, a, t)), () => n.forEach((e) => i.removeEventListener?.(e, a, t));
	};
}, si = (e) => ({ source: t, commit: n }) => {
	let r = t?.element ?? t?.self ?? t;
	if (!r || typeof MutationObserver > "u") return;
	let i = new MutationObserver((t) => {
		(!e || t.some((t) => t.type == "attributes" && t.attributeName == e)) && n(t);
	});
	return i.observe(r, {
		attributes: !0,
		attributeFilter: e ? [e] : void 0
	}), () => i.disconnect();
}, ci = (e) => {
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
			return e.store ? e.store(i, s) : ii(r.ref, i, o);
		},
		trigger(e, t = n) {
			let i = r.get(e, t);
			return r.store(i, e, t);
		},
		bind() {
			r.unbind(), e.bindImmediately && r.trigger();
			let i = ni(e.trigger?.({
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
}, li = (e, t, n, r) => {
	if (n != null) return ti.has(n) && (ti.get(n)?.[0]?.(), ti.delete(n)), ti.getOrInsertComputed?.(n, () => {
		let i = (e ?? localStorage).getItem(n) ?? r?.value ?? r, a = h(t) ? t : yr(i);
		a.value ??= i;
		let o = new WeakRef(a), s = W([a, "value"], (t) => {
			me(o?.deref?.(), () => {
				(e ?? localStorage).setItem(n, t);
			});
		}), c = (t) => {
			t.storageArea == (e ?? localStorage) && t.key == n && S(a.value, t.newValue) && (a.value = t.newValue);
		};
		return addEventListener("storage", c), [() => {
			s?.(), removeEventListener("storage", c);
		}, a];
	});
}, ui = (e, t, n) => {
	if (n == null) return;
	let r = e ?? matchMedia(n), i = r?.matches || !1, a = h(t) ? t : H(i);
	a.value ??= i;
	let o = (e) => a.value = e.matches;
	return r?.addEventListener?.("change", o), () => {
		r?.removeEventListener?.("change", o);
	};
}, di = (e, t, n) => {
	if (e == null) return;
	let r = n?.value ?? (typeof n == "object" ? null : n) ?? e?.getAttribute?.("data-hidden") == null, i = ci({
		source: e,
		ref: h(t) ? t : H(!!r),
		getter: ({ event: e }) => e?.type != "u2-hidden",
		setter: (e, { source: t }) => Xt(t, "data-hidden", e),
		trigger: oi(["u2-hidden", "u2-appear"], { passive: !0 })
	}).bind();
	return () => i.unbind();
}, fi = (e, t, n, r) => {
	let i = e?.getAttribute?.(n) ?? (typeof r == "boolean" ? r ? "" : null : s(r));
	if (!e) return;
	let o = h(t) ? t : yr(i);
	a(o) && !fe(o.value) && (o.value = fe(i) ?? o.value ?? "");
	let c = ci({
		source: e,
		ref: o,
		getter: ({ source: e }) => e?.getAttribute?.(n),
		setter: (e, { source: t }) => k(t, n, fe(e)),
		trigger: si(n)
	}).bind();
	return () => c.unbind();
}, pi = (e, t, n, r) => {
	let i = r == "border-box" ? e?.[n == "inline" ? "offsetWidth" : "offsetHeight"] : e?.[n == "inline" ? "clientWidth" : "clientHeight"] - Dt(e, n), o = h(t) ? t : V(i);
	a(o) && (o.value ||= (i ?? o.value) || 1);
	let s = new ResizeObserver((e) => {
		a(o) && (r == "border-box" && (o.value = n == "inline" ? e[0].borderBoxSize[0].inlineSize : e[0].borderBoxSize[0].blockSize), r == "content-box" && (o.value = n == "inline" ? e[0].contentBoxSize[0].inlineSize : e[0].contentBoxSize[0].blockSize), r == "device-pixel-content-box" && (o.value = n == "inline" ? e[0].devicePixelContentBoxSize[0].inlineSize : e[0].devicePixelContentBoxSize[0].blockSize));
	});
	return (e?.element ?? e?.self ?? e) instanceof HTMLElement && s?.observe?.(e?.element ?? e?.self ?? e, { box: r }), () => s?.disconnect?.();
}, mi = (e, t, n, r) => {
	r != null && typeof (r?.value ?? r) == "number" && e?.scrollTo?.({ [n == "block" ? "top" : "left"]: r?.value ?? r });
	let i = e?.[n == "block" ? "scrollTop" : "scrollLeft"], o = h(t) ? t : V(i || 0);
	a(o) && (o.value ||= (i ?? o.value) || 1), o.value ||= (i ?? o.value) || 0;
	let s = n == "block" ? "scrollTop" : "scrollLeft", c = n == "block" ? "top" : "left", l = ci({
		source: e,
		ref: o,
		getter: ({ source: e }) => e?.[s] || 0,
		setter: (e, { source: t }) => {
			Math.abs((t?.[s] || 0) - Number(e || 0)) > .001 && t?.scrollTo?.({ [c]: Number(e || 0) });
		},
		trigger: oi("scroll", { passive: !0 })
	}).bind();
	return () => l.unbind();
}, hi = (e, t) => {
	let n = !!e?.checked || !1, r = h(t) ? t : H(n);
	a(r) && r.value !== n && (r.value = n);
	let i = ci({
		source: (e?.type == "radio" ? e?.closest?.("input[type='radio']") : e) ?? e,
		ref: r,
		getter: ({ source: t, event: n }) => ai(t, n, "input[type=\"checkbox\"], input:checked")?.checked ?? e?.checked ?? r?.value,
		setter: (t) => {
			e && e?.checked != t && Te(e, t);
		},
		trigger: oi([
			"click",
			"input",
			"change"
		])
	}).bind();
	return () => i.unbind();
}, gi = (e, t) => {
	if (x(e) || !e || !(e instanceof Node || e?.element instanceof Node)) return;
	let n = e?.value ?? "", r = h(t) ? t : yr(n);
	a(r) && !fe(r.value) && (r.value = fe(n) ?? r.value ?? "");
	let o = ci({
		source: e,
		ref: r,
		getter: ({ source: e, event: t }) => ai(e, t)?.value ?? e?.value ?? r?.value ?? "",
		setter: (e, { source: t }) => {
			let n = i(e);
			t && S(t?.value, n) && (t.value = n ?? "", t?.dispatchEvent?.(new Event("change", { bubbles: !0 })));
		},
		trigger: oi([
			"click",
			"input",
			"change"
		])
	}).bind();
	return () => o.unbind();
}, _i = (e, t) => {
	if (x(e) || !e || !(e instanceof Node || e?.element instanceof Node)) return;
	let n = Number(e?.valueAsNumber) || 0, r = h(t) ? t : V(n);
	a(r) && !r.value && n && (r.value = n);
	let i = ci({
		source: e,
		ref: r,
		getter: ({ source: e, event: t }) => Number(ai(e, t)?.valueAsNumber || e?.valueAsNumber || 0) || 0,
		setter: (e, { source: t }) => {
			t && (t.type == "range" || t.type == "number") && typeof t?.valueAsNumber == "number" && S(t?.valueAsNumber, e) && (t.valueAsNumber = Number(e), t?.dispatchEvent?.(new Event("change", { bubbles: !0 })));
		},
		trigger: oi([
			"click",
			"input",
			"change"
		])
	}).bind();
	return () => i.unbind();
}, G = (e, t, n, ...r) => {
	if (n == fi || n == k) {
		let t = K?.get?.(e)?.get?.(k)?.get?.(r[0])?.[0];
		if (t) return t;
	}
	let i = (t ?? wr)?.(null), a = n?.(e, i, ...r), o = a && typeof a == "object" && typeof a?.unbind == "function" ? a : null, s = o?.ref ?? i, c = o ? () => o.unbind() : a;
	return c && s && I(s, Symbol.dispose, c), s;
}, vi = (e, ...t) => G(e, yr, fi, ...t), yi = (e, ...t) => G(e, yr, gi, ...t), bi = (e, ...t) => G(e, V, _i, ...t), xi = (...e) => {
	if (ti.has(e[0])) return ti.get(e[0])?.[1];
	let t = li, n = (yr ?? wr)?.(null), [r, i] = t?.(null, n, ...e);
	return r && n && I(n, Symbol.dispose, r), n;
}, Si = (e, ...t) => G(e, V, pi, ...t), Ci = (e, ...t) => G(e, H, hi, ...t), wi = (e, ...t) => G(e, V, mi, ...t), Ti = (e, ...t) => G(e, H, di, ...t), Ei = (...e) => G(null, H, ui, ...e), Di = class e {
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
}, Oi = (e = 0, t = 0) => new Di(e, t), ki = (e) => {
	let t = [], n = (e) => {
		e && typeof e == "object" && "value" in e ? t.push(e) : Array.isArray(e) ? e.forEach(n) : e && typeof e == "object" && Object.values(e).forEach(n);
	};
	return n(e), t;
}, Ai = (e, t) => {
	let n = () => e.map((e) => e && typeof e == "object" && "value" in e ? e.value : e), r = t(...n());
	if (typeof r == "number") {
		let i = V(r), a = () => {
			i.value = t(...n());
		};
		return ki(e).forEach((e) => W(e, a)), i;
	}
	let i = r, a = () => {
		i = t(...n());
	};
	return ki(e).forEach((e) => W(e, a)), i;
}, ji = class {
	static add(e, t, n = "px") {
		return Ai([e, t], () => `calc(${e.value}${n} + ${t.value}${n})`);
	}
	static subtract(e, t, n = "px") {
		return Ai([e, t], () => `calc(${e.value}${n} - ${t.value}${n})`);
	}
	static multiply(e, t) {
		return Ai([e, t], () => `calc(${e.value} * ${t.value})`);
	}
	static divide(e, t) {
		return Ai([e, t], () => `calc(${e.value} / ${t.value})`);
	}
	static clamp(e, t, n, r = "px") {
		return Ai([
			e,
			t,
			n
		], () => `clamp(${t.value}${r}, ${e.value}${r}, ${n.value}${r})`);
	}
	static min(e, t, n = "px") {
		return Ai([e, t], () => `min(${e.value}${n}, ${t.value}${n})`);
	}
	static max(e, t, n = "px") {
		return Ai([e, t], () => `max(${e.value}${n}, ${t.value}${n})`);
	}
}, Mi = class {
	static width = V(typeof window < "u" ? window?.innerWidth : 0);
	static height = V(typeof window < "u" ? window?.innerHeight : 0);
	static init() {
		typeof window < "u" && window?.addEventListener?.("resize", () => {
			this.width.value = window?.innerWidth, this.height.value = window?.innerHeight;
		});
	}
	static center() {
		return {
			x: ji.divide(this.width, V(2)),
			y: ji.divide(this.height, V(2))
		};
	}
};
Mi.init();
//#endregion
//#region ../../projects/lur.e/src/lure/core/Binding.ts
var K = new Br(), Ni = new FinalizationRegistry((e) => e?.()), Pi = Symbol.for("@mapped"), Fi = Symbol.for("@virtual"), Ii = Symbol.for("@behavior"), Li = (e) => !!e && typeof e == "object" && "ref" in e && typeof e?.unbind == "function", Ri = (e, t) => {
	if (Li(t)) {
		t.bind?.();
		let n = () => t.unbind?.();
		return I(e, Symbol.dispose, n), n;
	}
	let n = {
		click: t,
		input: t,
		change: t
	};
	t?.({ target: e });
	let r = p?.(e, "addEventListener", n);
	return I(e, Symbol.dispose, r), r;
}, zi = (e, t) => {
	if (t) for (let n of t) Ri(e, n);
	return e;
}, Bi = (e, t, n = "value") => {
	let a = ie(e), o = ie(t), s = (e) => {
		r(o, "value", d(a)?.[n ?? "value"] ?? i(d(o)));
	}, c = {
		click: s,
		input: s,
		change: s
	};
	return s?.({ target: e }), p?.(e, "addEventListener", c), r(o, "value", e?.[n ?? "value"] ?? i(d(t))), () => p?.(e, "removeEventListener", c);
}, Vi = (e, t, n = "") => {
	ie(e);
	let a = ie(t), o = ae(n);
	return Ge(e, o, (e) => {
		if (e.type == "attributes" && e.attributeName == o) {
			let t = e?.target?.getAttribute?.(e.attributeName), n = d(a), o = i(n);
			S(e.oldValue, t) && n != null && (typeof n == "object" || typeof n == "function") && (S(o, t) || o == null) && r(n, "value", t);
		}
	});
}, Hi = (e, t, n) => {
	let r = K.get([e, t]);
	if (r) {
		let e = r[n]?.[1];
		delete r[n], e?.();
	}
}, Ui = (e, t, n, r) => {
	let i = K.getOrInsertComputed([e, t], () => ({}));
	return i?.[n]?.[1]?.(), i[n] = r, !0;
}, Wi = (e, t, n, r, a, o) => {
	let s = Li(t) ? t : null;
	s && (s.bind?.(), t = s.ref);
	let c = ie(e);
	if (e = d(c), !e || !(e instanceof Node || e?.element instanceof Node)) return;
	let l;
	l && l?.abort?.(), l = new AbortController();
	let u = ie(t);
	r?.(e, n, t);
	let f = W?.([t, "value"], (e, t, o) => {
		let s = d(u), f = d(a), p = d(c), m = i(s) ?? i(e);
		(!f || f?.[n] == s) && (typeof s?.[Ii] == "function" ? s?.[Ii]?.((t = e) => r(p, n, m), [
			e,
			n,
			o
		], [
			l?.signal,
			n,
			c
		]) : r(p, n, m));
	}), p = null;
	typeof o == "boolean" && o && (r == k && (p = Vi(e, t, n)), r == Zt && (p = Bi(e, t, n))), typeof o == "function" && (p = o(e, n, t));
	let m = () => {
		p?.disconnect?.(), p != null && typeof p == "function" && p?.(), s?.unbind?.(), f?.(), l?.abort?.(), Hi?.(e, r, n);
	};
	if (I(t, Symbol.dispose, m), Ni.register(e, m), !Ui(e, r, n, [t, m])) return m;
}, q = (e, t, n, r, i, a) => (r(e, t, Li(n) ? n.ref : n), Wi(e, n, t, r, i, a)), Gi = (e) => typeof e == "number" && Number.isFinite(e) ? `${e}px` : e, Ki = (e, t) => {
	if (!e) return () => {};
	let n = [q(e, "--client-x", Gi(t?.[0]), en), q(e, "--client-y", Gi(t?.[1]), en)];
	return t?.[2] != null && n.push(q(e, "--anchor-width", Gi(t?.[2]), en)), t?.[3] != null && n.push(q(e, "--anchor-height", Gi(t?.[3]), en)), () => n?.forEach?.((e) => e?.());
}, qi = (e, t) => {
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
}, Ji = (e) => {
	let t = typeof e == "string" ? e.trim() : "";
	if (!t) return !0;
	for (let e of t.split(";")) {
		let t = e.trim();
		if (!t) continue;
		let n = t.indexOf(":");
		if (n < 0 || t.slice(n + 1).trim().length > 0) return !1;
	}
	return !0;
}, Yi = (e) => {
	if (e == null) return;
	let t = e.getAttribute("style");
	t != null && Ji(t) && (e.removeAttribute("style"), e.style.cssText = "");
}, Xi = (e, t) => {
	Ji(t) ? (e.style.cssText = "", e.removeAttribute("style")) : e.style.cssText = t;
}, Zi = /* @__PURE__ */ new WeakMap(), Qi = /* @__PURE__ */ new WeakMap(), $i = {
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
}, ea = class {
	direction = "children";
	selector;
	index = 0;
	_eventMap = /* @__PURE__ */ new WeakMap();
	constructor(e, t = 0, n = "children") {
		this.index = t, this.selector = e, this.direction = n;
	}
	_observeDOMChange(e, t, n) {
		return typeof t == "string" ? qe(e, t, n) : null;
	}
	_observeAttributes(e, t, n) {
		return typeof this.selector == "string" ? Ke(e, this.selector, t, n) : Ge(e ?? this.selector, t, n);
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
						if (Pe(e, r, t)) {
							a = e;
							break;
						}
					} else if (Ne(r, e, t)) {
						a = e;
						break;
					}
				}
			}
			a ||= (a = t?.target ?? this._getSelected(e) ?? i, a?.element ?? a), typeof r == "string" ? Ne(i, Pe(a, r, t), t) && n?.call?.(a, t) : Ne(i, r, t) && Ne(r, a, t) && n?.call?.(a, t);
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
		if (t in $i) return $i?.[t]?.(i);
		if (t == "length" && r?.length != null) return r?.length;
		if (t == "_updateSelector") return (e) => this.selector = e || this.selector;
		if (["style", "attributeStyleMap"].indexOf(t) >= 0) {
			let n = e?.self ?? e, r = this._selector(e), a = typeof r == "string" ? gt(r, "ux-query", n) : i;
			return t == "attributeStyleMap" ? a?.styleMap ?? a?.attributeStyleMap : a?.[t];
		}
		if (t == "self") return e?.self ?? e;
		if (t == "selector") return this._selector(e);
		if (t == "observeAttr") return (t, n) => this._observeAttributes(e, t, n);
		if (t == "DOMChange") return (t) => this._observeDOMChange(e, this.selector, t);
		if (t == "addEventListener") return (t, n, r) => this._addEventListener(e, t, n, r);
		if (t == "removeEventListener") return (t, n, r) => this._removeEventListener(e, t, n, r);
		if (t == "getAttribute") return (t) => {
			let n = this._getArray(e), r = n.length > 0 ? n[this.index] : this._getSelected(e), i = Zi?.get?.(e)?.get?.(this.selector) ?? r;
			return K?.get?.(i)?.get?.(k)?.has?.(t) ? K?.get?.(i)?.get?.(k)?.get?.(t)?.[0] : r?.getAttribute?.(t);
		};
		if (t == "setAttribute") return (t, n) => {
			let r = this._getArray(e), i = r.length > 0 ? r[this.index] : this._getSelected(e);
			return typeof n == "object" && (n?.value != null || "value" in n) ? q(i, t, n, k, null, !0) : i?.setAttribute?.(t, n);
		};
		if (t == "removeAttribute") return (t) => {
			let n = this._getArray(e), r = n.length > 0 ? n[this.index] : this._getSelected(e), i = Zi?.get?.(e)?.get?.(this.selector) ?? r;
			return K?.get?.(i)?.get?.(k)?.has?.(t) ? K?.get?.(i)?.get?.(k)?.get?.(t)?.[1]?.() : r?.removeAttribute?.(t);
		};
		if (t == "hasAttribute") return (t) => {
			let n = this._getArray(e), r = n.length > 0 ? n[this.index] : this._getSelected(e), i = Zi?.get?.(e)?.get?.(this.selector) ?? r;
			return K?.get?.(i)?.get?.(k)?.has?.(t) ? !0 : r?.hasAttribute?.(t);
		};
		if (t == "element") {
			if (r?.length <= 1) return i?.element ?? i;
			let e = document.createDocumentFragment();
			return e.append(...r), e;
		}
		if (t == Symbol.toPrimitive && (this.selector?.includes?.("input") || this.selector?.matches?.("input"))) return (e) => e == "number" ? (i?.element ?? i)?.valueAsNumber ?? parseFloat((i?.element ?? i)?.value) : e == "string" ? String((i?.element ?? i)?.value ?? i?.element ?? i) : e == "boolean" ? (i?.element ?? i)?.checked : (i?.element ?? i)?.checked ?? (i?.element ?? i)?.value ?? i?.element ?? i;
		if (t == "checked" && (this.selector?.includes?.("input") || this.selector?.matches?.("input"))) return (i?.element ?? i)?.checked;
		if (t == "value" && (this.selector?.includes?.("input") || this.selector?.matches?.("input"))) return (i?.element ?? i)?.valueAsNumber ?? (i?.element ?? i)?.valueAsDate ?? (i?.element ?? i)?.value ?? (i?.element ?? i)?.checked;
		if (t == yn && (this.selector?.includes?.("input") || this.selector?.matches?.("input"))) return (t) => {
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
		return Qi.getOrInsert(t, new Proxy(t, new ea("", n, r)));
	}
	if (typeof e == "function") {
		let t = e;
		return Qi.getOrInsert(t, new Proxy(t, new ea("", n, r)));
	}
	return t == null || typeof t == "string" || typeof t == "number" || typeof t == "boolean" || typeof t == "symbol" || t === void 0 ? null : Zi?.get?.(t)?.has?.(e) ? Zi?.get?.(t)?.get?.(e) : Zi?.getOrInsert?.(t, /* @__PURE__ */ new Map())?.getOrInsertComputed?.(e, () => new Proxy(t, new ea(e, n, r)));
}, ta = (e) => x(e) ? [] : Array.isArray(e) ? e.map((e, t) => [t, e]) : e instanceof Map ? Array.from(e.entries()) : e instanceof Set ? Array.from(e.values()) : Array.from(Object.entries(e)), na = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(t), r = new WeakRef(e);
	if (typeof t == "object" || typeof t == "function") {
		ta(t).forEach(([e, t]) => {
			k(r?.deref?.(), e, t);
		});
		let i = W(t, (e, t) => {
			k(r?.deref?.(), t, e), Wi(r?.deref?.(), e, t, k, n, !0);
		});
		I(t, Symbol.dispose, i), I(e, Symbol.dispose, i);
	} else console.warn("Invalid attributes object:", t);
}, ra = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(t), r = new WeakRef(e);
	if (typeof t == "object" || typeof t == "function") {
		ta(t).forEach(([e, t]) => {
			k(r?.deref?.(), "aria-" + (e?.toString?.() || e || ""), t);
		});
		let i = W(t, (e, t) => {
			k(r?.deref?.(), "aria-" + (t?.toString?.() || t || ""), e, !0), Wi(r, e, t, k, n, !0);
		});
		I(t, Symbol.dispose, i), I(e, Symbol.dispose, i);
	} else console.warn("Invalid ARIA object:", t);
	return e;
}, ia = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(t), r = new WeakRef(e);
	if (typeof t == "object" || typeof t == "function") {
		ta(t).forEach(([e, t]) => {
			Qt(r?.deref?.(), e, t);
		});
		let i = W(t, (e, t) => {
			Qt(r?.deref?.(), t, e), Wi(r?.deref?.(), e, t, Qt, n);
		});
		I(t, Symbol.dispose, i), I(e, Symbol.dispose, i);
	} else console.warn("Invalid dataset object:", t);
	return e;
}, aa = (e, t) => {
	if (!t) return e;
	if (typeof t == "string") Xi(e, t);
	else if (typeof t?.value == "string") W([t, "value"], (t) => {
		Xi(e, t ?? "");
	});
	else if (typeof t == "object" || typeof t == "function") {
		let n = new WeakRef(t), r = new WeakRef(e);
		ta(t).forEach(([e, t]) => {
			en(r?.deref?.(), e, t);
		});
		let i = W(t, (e, t) => {
			en(r?.deref?.(), t, e), Wi(r?.deref?.(), e, t, en, n?.deref?.());
		});
		I(t, Symbol.dispose, i), I(e, Symbol.dispose, i);
	} else console.warn("Invalid styles object:", t);
	return e;
}, oa = async (e, t) => aa(e, await t?.(e)), sa = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(t), r = new WeakRef(e), i = (e) => {
		let n = J("input", e?.target);
		n?.value != null && S(n?.value, t?.value) && (t.value = n?.value), n?.valueAsNumber != null && S(n?.valueAsNumber, t?.valueAsNumber) && (t.valueAsNumber = n?.valueAsNumber), n?.checked != null && S(n?.checked, t?.checked) && (t.checked = n?.checked);
	};
	ta(t).forEach(([e, t]) => {
		Zt(r?.deref?.(), e, t);
	});
	let a = W(t, (e, t) => {
		let i = r.deref();
		i && (t == "checked" ? Te(i, e) : q(i, t, e, Zt, n?.deref?.(), !0));
	});
	return I(t, Symbol.dispose, a), I(e, Symbol.dispose, a), e.addEventListener("change", i), e;
}, ca = (e, t) => {
	if (!t) return e;
	let n = new WeakRef(e);
	ta(t).forEach(([t, n]) => {
		let r = e;
		n === void 0 || n == null ? r.classList.contains(n) && r.classList.remove(n) : r.classList.contains(n) || r.classList.add(n);
	});
	let r = Hr(t, (e) => {
		let t = n?.deref?.();
		t && (e === void 0 || e == null ? t.classList.contains(e) && t.classList.remove(e) : t.classList.contains(e) || t.classList.add(e));
	});
	return I(t, Symbol.dispose, r), I(e, Symbol.dispose, r), e;
}, la = (e = null, t, n = !0) => {
	let r = [], i = () => {
		r?.forEach?.(([e, t]) => e?.(...t)), r?.splice?.(0, r?.length);
	};
	return (a, o, s, c, l = null) => {
		let u = w(l) ?? w(e), d = Y(a, t, o, u), f = Y(s, t, o, u), p = w(d?.parentElement ?? f?.parentElement) ?? u;
		if (!p) return;
		e != p && (e = p);
		let m = Ee(p, f);
		([
			"add",
			"set",
			"delete"
		].indexOf(c || "") >= 0 || !c) && (d == null && f != null || c == "delete" ? r?.push?.([Ia, [
			p,
			f,
			null,
			m >= 0 ? m : o
		]]) : d != null && f == null || c == "add" ? r?.push?.([Ma, [
			p,
			d,
			null,
			o
		]]) : (d != null && f != null || c == "set") && r?.push?.([Fa, [
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
}, ua = (e) => ((e instanceof Map || e instanceof Set) && (e = Array.from(e?.values?.())), e), da = (e, t = [], n) => {
	if (!t || !e) return e;
	n = (t?.[Pi] ? t?.mapper : n) ?? n, t = (t?.[Pi] ? t?.children : t) ?? t;
	let r = Array.from(t?.keys?.() || []), i = ua(t)?.map?.((t, i) => Y(t, n, r?.[i] ?? i, e));
	return La(e, i), i?.forEach?.((t) => Ma(e, t)), e;
}, fa = class {
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
		e && (this.#i?.(), this.#i = null, this.#r = null, this.#r ??= la(e, null, !1), this.#i ??= W?.([this.#t, "value"], this._onUpdate.bind(this)));
	}
	get boundParent() {
		return this.#l;
	}
	set boundParent(e) {
		e instanceof HTMLElement && w(e) && e != this.#l && (this.#l = e, this.makeUpdater(e), this.#o &&= (this.#o?.parentNode != null && this.#o?.remove?.(), null), this.element);
	}
	constructor(e, t = (e) => e, r = null) {
		this.#e = document.createComment(""), n(t) && (typeof e == "function" || typeof e == "object") && !n(e) && ([e, t] = [t, e]), !r && typeof t == "object" && t && !n(t) && (r = t), this.#s = (t == null ? null : typeof t == "function" ? t : typeof t == "object" ? t?.mapper : null) ?? ((e) => e), this.#o = null, this.#t = (n(e) ? e : t?.(e, -1)) ?? e, this.#n = document.createDocumentFragment();
		let i = {
			removeNotExistsWhenHasPrimitives: !0,
			uniquePrimitives: !0,
			preMap: !0
		}, a = (w(r) ? null : r) || {};
		this.#a = Object.assign(i, a), this.boundParent = w(this.#a?.boundParent) ?? w(r) ?? null;
	}
	$getNodeBy(e, t) {
		let r = x(n(t) ? t?.value : t) ? this.#c ??= Ra(t) : Y(t, t == e ? null : this.#s, -1, e);
		return this.#c != null && (x(t) || n(t)) && (this.#c.textContent = "" + (t?.value ?? (x(t) ? t : ""))), r;
	}
	$getNode(e, t = !0) {
		let r = x(this.#t?.value) ? this.#c ??= Ra(this.#t) : Y(this.#t?.value, e == this.#t?.value ? null : this.#s, -1, e);
		return this.#c != null && (x(this.#t) || n(this.#t)) && (this.#c.textContent = "" + (x(this.#t) ? this.#t : this.#t?.value ?? "")), r != null && t && (this.#o = r), r;
	}
	get [Pi]() {
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
		if (x(n) && x(e)) return;
		let i = x(n) ? this.#o : this.$getNodeBy(this.boundParent, n), a = this.$getNode(this.boundParent, !1) ?? this.#e;
		(i && !i?.parentNode || this.#o?.parentNode) && (i = this.#o ?? i);
		let o = this.#r?.(a, Ee(this.boundParent, i), i, r, this.boundParent);
		return a != null && a != this.#o ? this.#o = a : a == null && i != this.#o && (this.#o = i), o;
	}
}, pa = (e) => (typeof e == "object" || typeof e == "function" || typeof e == "symbol") && e != null, ma = (e, t, r = null) => {
	let i = null;
	if (e instanceof HTMLElement) return J(e);
	if (e == null) return document.createComment(":NULL:");
	let a = (typeof t == "function" ? t(e, -1) : e) ?? e;
	if (x(a)) return i ??= Ra(a);
	if (i != null && x(a) && (i.textContent = "" + a), a != null && n(a)) {
		if (x(a?.value)) return a?.value == null ? document.createComment(":NULL:") : i ??= Ra(a?.value);
		if (typeof a == "object" || typeof a == "function") return _a.getOrInsertComputed(pa(e) ? e : a, () => new fa(e, t, r));
	}
	return Y(a, null, -1, r);
}, ha = (e, t) => (t && t != e && !e?.contains?.(t) && w(t) ? e?.elementForPotentialParent?.(t) : null) ?? e?.element, ga = (e, t) => ha(e, t) ?? (n(e) && T(e?.value) ? e?.value : e), _a = /* @__PURE__ */ new WeakMap(), va = /* @__PURE__ */ new WeakMap(), ya = (e) => x(e) ? e : n(e) && x(e?.value) ? va?.get(e) : _a?.get?.(e), ba = /* @__PURE__ */ new WeakMap(), xa = (e, t) => {
	if (ba?.has?.(e)) return ba?.get?.(e);
	let n = document.createComment(":PROMISE:");
	return e?.then?.((r) => {
		let i = typeof t == "function" ? t(r) : r;
		ba?.set?.(e, i), queueMicrotask(() => {
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
}, Sa = (e, t, r = -1, i) => t == null ? ((e instanceof WeakRef || typeof e?.deref == "function") && (e = e.deref()), e instanceof Promise || typeof e?.then == "function" ? xa(e, (e) => Sa(e, t, r, i)) : T(e) && !e?.element || T(e?.element) ? e : n(e) ? (e instanceof HTMLElement ? J : ma)(e) : typeof e == "object" && e ? ya(e) : typeof e == "function" ? Sa(e?.(), t, r, i) : x(e) && e != null ? Ra(e) : document.createComment(":NULL:")) : e = Sa(t?.(e, r), null, -1, i), Ca = (e, t) => ga(e, t) ?? T(e), wa = (e, t, r = -1, i) => t == null ? ((e instanceof WeakRef || typeof e?.deref == "function") && (e = e.deref()), e instanceof Promise || typeof e?.then == "function" ? xa(e, (e) => Y(e, t, r, i)) : T(e) && !e?.element ? e : T(e?.element) ? ga(e, i) : n(e) ? (e instanceof HTMLElement ? J : ma)(e)?.element : typeof e == "object" && e ? ya(e) : typeof e == "function" ? Y(e?.(), t, r, i) : x(e) && e != null ? Ra(e) : document.createComment(":NULL:")) : e = Y(t?.(e, r), null, -1, i), Ta = (e) => (typeof e == "object" || typeof e == "function" || typeof e == "symbol") && e != null, Ea = /* @__PURE__ */ new WeakSet(), Da = (e, t, n = -1, r) => {
	if ((e instanceof WeakRef || typeof e?.deref == "function") && (e = e.deref()), e instanceof Promise || typeof e?.then == "function") return xa(e, (e) => Da(e, t, n, r));
	if (Ta(e) && !T(e)) {
		if (_a.has(e)) {
			let i = ya(e) ?? Sa(e, t, n, r);
			return Ca(i instanceof WeakRef ? i?.deref?.() : i, r);
		}
		let i = Sa(e, t, n, r);
		return !t && i != null && i != e && Ta(e) && !T(e) && _a.set(e, i), Ca(i, r);
	}
	return wa(e, t, n, r);
}, Y = (e, t, n = -1, r) => {
	if (Ta(e) && Ea.has(e)) return ya(e) ?? T(e);
	Ta(e) && Ea.add(e);
	let i = Da(e, t, n, r);
	return Ta(e) && Ea.delete(e), i;
}, Oa = (e, t, n = -1) => {
	T(t) && t != null && t?.parentNode != e && (Number.isInteger(n) && n >= 0 && n < e?.childNodes?.length ? e?.insertBefore?.(t, e?.childNodes?.[n]) : e?.append?.(t));
}, ka = (e, t, n = -1) => {
	if (!(!T(t) || e == t || t?.parentNode == e)) {
		if (t = t?._onUpdate ? ha(t, e) : t, !t?.parentNode && T(t)) {
			Oa(e, t, n);
			return;
		}
		e?.parentNode != t?.parentNode && T(t) && Oa(e, t, n);
	}
}, Aa = (e) => ((e instanceof Map || e instanceof Set) && (e = Array.from(e?.values?.())), e), ja = (e, t, n, r = -1) => {
	let i = t?.length ?? 0;
	if (Array.isArray(wn(t)) || t instanceof Map || t instanceof Set) {
		let i = Aa(t)?.map?.((t, r) => Y(t, n, r, e))?.filter?.((e) => e != null), a = document.createDocumentFragment();
		i?.forEach?.((e) => ka(a, e)), ka(e, a, r);
	} else {
		let a = Y(t, n, i, e);
		a != null && ka(e, a, r);
	}
}, Ma = (e, t, n, r = -1) => {
	n != null && (t = n?.(t, r)), t?.children && Array.isArray(wn(t?.children)) && (t?.[Fi] || t?.[Pi]) ? ja(e, t?.children, null, r) : ja(e, t, null, r);
}, Na = (e, t, n = -1) => !e || t?.parentNode == e && t?.parentNode != null ? t : t?.parentNode != e && !w(t?.parentNode) && Number.isInteger(n) && n >= 0 && Array.from(e?.childNodes || [])?.length > n ? e.childNodes?.[n] : t, Pa = (e, t, n) => {
	if (t?.parentNode) if (t?.parentNode == n?.parentNode) if (e = t?.parentNode ?? e, t.nextSibling === n) e.insertBefore(n, t);
	else if (n.nextSibling === t) e.insertBefore(t, n);
	else {
		let r = t.nextSibling;
		e.replaceChild(n, t), e.insertBefore(t, r);
	}
	else t?.replaceWith?.(n);
}, Fa = (e, t, n, r = -1, i) => {
	n != null && (t = n?.(t, r)), e ||= i?.parentNode;
	let a = Na(e, Y(i, n, r), r);
	if (a instanceof Text && typeof t == "string") a.textContent = t;
	else if (t != null) {
		let n = Y(t);
		a?.parentNode == e && a != n && a instanceof Text && n instanceof Text ? a?.textContent != n?.textContent && (a.textContent = n?.textContent?.trim?.() ?? "") : a?.parentNode == e && a != n && a != null && a?.parentNode != null ? Pa(e, a, n) : (a?.parentNode != e || a?.parentNode == null) && Ma(e, n, null, r);
	}
}, Ia = (e, t, n, r = -1) => {
	let i = Y(t, n);
	if (e ||= i?.parentNode, Array.from(e?.childNodes ?? [])?.length < 1) return;
	let a = Na(e, i, r);
	return a?.parentNode == e && a?.remove?.(), e;
}, La = (e, t, n) => {
	let r = Array.from(wn(t) || [])?.map?.((e, t) => Y(e, n, t));
	return Array.from(e.childNodes).forEach((e) => {
		r?.find?.((t) => !S?.(t, e)) || e?.remove?.();
	}), e;
}, Ra = (e) => x(e) && e != null ? document.createTextNode(e) : e == null ? document.createComment(":NULL:") : va.getOrInsertComputed(e, () => {
	let t = document.createTextNode(((n(e) ? e?.value : e) ?? "")?.trim?.() ?? "");
	return W([e, "value"], (e) => {
		t.textContent = ("" + (e?.innerText ?? e?.textContent ?? e?.value ?? e ?? ""))?.trim?.() ?? "";
	}), t;
}), za = (e) => ((e instanceof Map || e instanceof Set) && (e = Array.from(e?.values?.())), e), Ba = class {
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
		e && (this.#o?.(), this.#o = null, this.#a = null, this.#a ??= la(e, this.mapper.bind(this), Array.isArray(this.#e)), this.#o ??= Hr?.(this.#e, this._onUpdate.bind(this)));
	}
	get boundParent() {
		return this.#u;
	}
	set boundParent(e) {
		e instanceof HTMLElement && w(e) && e != this.#u && (this.#u = e, this.makeUpdater(e), this.element);
	}
	constructor(e, t = (e) => e, n = null) {
		o(t) && (typeof e == "function" || typeof e == "object") && !o(e) && ([e, t] = [t, e]), !n && typeof t == "object" && t && !o(t) && (n = t), this.#c = document.createComment(""), this.#r = /* @__PURE__ */ new WeakMap(), this.#i = /* @__PURE__ */ new Map(), this.#n = (t == null ? null : typeof t == "function" ? t : typeof t == "object" ? t?.mapper : null) ?? ((e) => e), this.#e = (o(e) ? e : e?.iterator ?? t?.iterator ?? e) ?? [], this.#t = document.createDocumentFragment();
		let r = {
			removeNotExistsWhenHasPrimitives: !0,
			uniquePrimitives: !0,
			preMap: !0
		}, i = (w(n) ? null : n) || {};
		this.#s = Object.assign(r, i), this.boundParent = w(this.#s?.boundParent) ?? w(n) ?? null, this.boundParent || this.#s.preMap && (da(this.#t, this.#e, this.mapper.bind(this)), this.#t.childNodes.length === 0 && this.#t.appendChild(this.#c));
	}
	get [Pi]() {
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
		return za(this.#e);
	}
	get self() {
		let e = Y(this.#e?.[0], this.mapper.bind(this), 0), t = w(e?.parentElement) ? e?.parentElement : this.boundParent;
		return this.boundParent ??= w(t) ?? this.boundParent, queueMicrotask(() => {
			let t = w(e?.parentElement) ? e?.parentElement : this.boundParent;
			this.boundParent ??= w(t) ?? this.boundParent;
		}), t ?? this.boundParent ?? da(this.#t, this.#e, this.mapper.bind(this));
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
			if (!((e?.[1] == null || e?.[1] < 0 || typeof e?.[1] != "number" || !c(e?.[1])) && (Array.isArray(this.#e) || this.#e instanceof Set))) {
				if (e?.[0] != null && (typeof e?.[0] == "object" || typeof e?.[0] == "function" || typeof e?.[0] == "symbol")) return this.#r.getOrInsert(e?.[0], this.#n(...e));
				if (e?.[0] != null && this.#e instanceof Set) return this.#i.getOrInsert(e?.[0], this.#n(...e));
				if (e?.[0] != null && this.#e instanceof Map) return typeof e?.[0] == "object" || typeof e?.[0] == "function" || typeof e?.[0] == "symbol" ? this.#r.getOrInsert(e?.[0], this.#n(...e)) : typeof e?.[1] == "object" || typeof e?.[1] == "function" || typeof e?.[1] == "symbol" ? this.#r.getOrInsert(e?.[1], this.#n(...e)) : this.#i.getOrInsert(e?.[1], this.#n(...e));
				if (e?.[0] != null) return this.#s?.uniquePrimitives && x(e?.[0]) ? this.#i.getOrInsert(e?.[0], this.#n(...e)) : this.#n(...e);
			}
		};
	}
	_onUpdate(e, t, n, r = "") {
		if (r == "add" || e != null && n == null) {
			if (this.#l.has(t)) return;
			let e = ma(wr(this.#e, t), (...e) => ((e?.[1] == null || e?.[1] < 0) && (e[1] = t ?? e?.[1]), this.mapper(...e)));
			this.#l.set(t, e), Ma(this.boundParent, e, null, t);
		}
		if (r == "delete" || e == null && n != null) {
			let e = this.#l.get(t);
			e && Ia(this.boundParent, e, null, t), this.#l.delete(t);
		}
	}
	*[Symbol.iterator]() {
		let e = 0;
		if (this.#e) for (let t of this.#e) yield this.mapper(t, e++);
	}
}, Va = (e, t, n = null) => new Ba(e, t, n), Ha = (e, t = document.documentElement) => {
	if (e?.value == null) return J(e, t);
	let n = J(e?.value, t);
	return W(e, (e, t) => n?._updateSelector(e)), n;
}, Ua = (e) => {
	if (typeof e == "string") {
		let t = Ha(De(e));
		return t?.element ?? t;
	} else if (e instanceof HTMLElement || e instanceof Element || e instanceof DocumentFragment || e instanceof Document || e instanceof Node) return e;
	else return null;
}, Wa = (e, t = {}, n) => {
	let r = Y(typeof e == "string" ? Ua(e) : e, null, -1);
	return r && n && Va(n, (e) => e, r), r && t && (t.ctrls != null && zi(r, t.ctrls), t.attributes != null && na(r, t.attributes), t.properties != null && sa(r, t.properties), t.classList != null && ca(r, t.classList), t.behaviors != null && At(r, t.behaviors), t.dataset != null && ia(r, t.dataset), t.stores != null && Pt(r, t.stores), t.mixins != null && Ft(r, t.mixins), t.style != null && aa(r, t.style), t.aria != null && ra(r, t.aria), "value" in t && q(r, "value", t.value, Zt, t, !0), "placeholder" in t && q(r, "placeholder", t.placeholder, Zt, t, !0), t.is != null && q(r, "is", t.is, k, t, !0), t.role != null && q(r, "role", t.role, Zt, t), t.slot != null && q(r, "slot", t.slot, Zt, t), t.part != null && q(r, "part", t.part, k, t, !0), t.name != null && q(r, "name", t.name, k, t, !0), t.type != null && q(r, "type", t.type, k, t, !0), t.icon != null && q(r, "icon", t.icon, k, t, !0), t.inert != null && q(r, "inert", t.inert, k, t, !0), t.hidden != null && q(r, "hidden", t.visible ?? t.hidden, Xt, t), t.on != null && Me(r, t.on), t.rules != null && t.rules.forEach?.((e) => oa(r, e))), J(r);
};
//#endregion
//#region ../../projects/lur.e/src/lure/misc/Normalizer.ts
function Ga(e, t = 4) {
	let n = 0;
	for (let r = 0; r < e.length; r++) {
		let i = e[r];
		if (i === " ") n += 1;
		else if (i === "	") n += t - n % t;
		else break;
	}
	return n;
}
function Ka(e, t, n = 4) {
	let r = 0, i = 0;
	for (; i < e.length && r < t;) {
		let t = e[i];
		if (t === " ") r += 1, i++;
		else if (t === "	") r += n - r % n, i++;
		else break;
	}
	return e.slice(i);
}
function qa(e) {
	return e.includes("\r\n") ? "\r\n" : e.includes("\r") ? "\r" : "\n";
}
function Ja(e, t) {
	for (e = Math.abs(e), t = Math.abs(t); t;) [e, t] = [t, e % t];
	return e;
}
function Ya(e, { ignoreFirstLine: t = !0, tabWidth: n = 4 } = {}) {
	let r = e.split(/\r\n|\n|\r/), i = +!!t, a = [];
	for (let e = i; e < r.length; e++) {
		let t = r[e];
		t.trim() !== "" && a.push(Ga(t, n));
	}
	if (a.length === 0) return {
		min: 0,
		step: 0,
		allEven: !0,
		allDiv4: !0
	};
	let o = Math.min(...a), s = a.map((e) => e - o).filter((e) => e > 0), c = 0;
	for (let e of s) c = c ? Ja(c, e) : e;
	let l = a.every((e) => e % 2 == 0), u = a.every((e) => e % 4 == 0);
	return c = c === 0 ? u ? 4 : l ? 2 : 1 : c % 4 == 0 ? 4 : c % 2 == 0 ? 2 : 1, {
		min: o,
		step: c,
		allEven: l,
		allDiv4: u
	};
}
function Xa(e, t, n = "floor", r = 4) {
	if (!t || t <= 1) return e;
	let i = Ga(e, r);
	if (i === 0) return e;
	let a;
	a = n === "nearest" ? Math.round(i / t) * t : n === "ceil" ? Math.ceil(i / t) * t : Math.floor(i / t) * t;
	let o = i - a;
	return o > 0 ? Ka(e, o, r) : o < 0 ? " ".repeat(-o) + e : e;
}
function Za(e, { scope: t = "void-only" } = {}) {
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
function Qa(e, { preserveCommentGaps: t = !0 } = {}) {
	if (!e || typeof e != "string") return e;
	if (!t) return e.replace(/>\s+</g, "><");
	let n = e;
	return n = n.replace(/-->([^\S\r\n]+)<!--/g, "--><!--").replace(/-->([^\S\r\n]+)</g, "--><").replace(/>([^\S\r\n]+)<!--/g, "><!--"), n = n.replace(/>\s+</g, "><"), n = n.replace(RegExp("", "g"), " "), n;
}
function $a(e, { normalizeIndent: t = !0, ignoreFirstLine: n = !0, tabWidth: r = 4, alignStep: i = "auto", quantize: a = "none" } = {}) {
	if (!e || typeof e != "string" || e.indexOf("<") === -1) return e;
	e = e?.trim?.();
	let o = [], s = e.replace(/<(pre|textarea|script|style)\b[\s\S]*?<\/\1>/gi, (e) => `\u0000${o.push(e) - 1}\u0000`), c = qa(s), l = s.split(/\r\n|\n|\r/), u = +!!n, { min: d, step: f } = Ya(s, {
		ignoreFirstLine: n,
		tabWidth: r
	});
	if (t && d > 0) for (let e = u; e < l.length; e++) {
		let t = l[e];
		t.trim() !== "" && (l[e] = Ka(t, d, r));
	}
	let p = i === "auto" ? f : i;
	if (a !== "none" && p > 1) for (let e = u; e < l.length; e++) {
		let t = l[e];
		t.trim() !== "" && (l[e] = Xa(t, p, a, r));
	}
	let m = l.join(c);
	return m = Za(m, { scope: "void-only" }), m = Qa(m), m.replace(/\u0000(\d+)\u0000/g, (e, t) => o[+t])?.trim?.();
}
function eo(e, ...t) {
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
var to = /* @__PURE__ */ new WeakMap(), no = (e) => {
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
}, ro = (e) => {
	if (typeof e != "string" || !e?.trim?.()) return -1;
	let t = e.match(/^#\{(\d+)\}$/);
	if (t) return parseInt(t[1] ?? "-1", 10);
	let n = e.match(/#\{(\d+)\}/);
	return n ? parseInt(n[1] ?? "-1", 10) : -1;
}, io = (e, t, n, r) => {
	if (!e) return e;
	if (e != null) {
		let n = [], r = (t) => {
			let r = Array.from(e?.attributes || []).find((e) => e.name == t && e.value?.includes?.("#{"));
			if (r) {
				let e = [t, ro(r?.value) ?? -1];
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
				let e = Array.isArray(t) ? t?.some?.((e) => e == "") : t == "", a = (Array.isArray(t) ? t.find((e) => i.name?.startsWith?.(e)) : t = i.name?.startsWith?.(t) ? t : "") ?? "", o = i.name.trim()?.replace?.(a, ""), s = i.value?.includes?.("#{") && i.value?.includes?.("}"), c = ro(i?.value), l = Array.isArray(n) ? n?.some?.((e) => o?.startsWith?.(e)) : n == o;
				s && (a == "" && e || a != "") && c >= 0 && !l && r.push([o, c]);
			}
			return r;
		}, a = (t, n, r = "") => {
			let i = /* @__PURE__ */ new Map();
			for (let a of Array.from(e?.attributes || [])) {
				let e = Array.isArray(t) ? t?.some?.((e) => e == "") : t == "", o = (Array.isArray(t) ? t.find((e) => a.name?.startsWith?.(e)) : t = a.name?.startsWith?.(t) ? t : "") ?? "", s = a.name.trim()?.replace?.(o, ""), c = a.value?.includes?.("#{") && a.value?.includes?.("}"), l = ro(a?.value) ?? -1, u = Array.isArray(n) ? n?.some?.((e) => s?.startsWith?.(e)) : n == s, d = (Array.isArray(r) ? r?.some?.((e) => a.name === e) : a.name === r) && r !== "";
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
		})(e), Yi(e), to?.has?.(e) || to?.set?.(e, Wa(e, u));
	}
	return to?.get?.(e) ?? e;
}, ao = (e, ...t) => {
	let n = [];
	for (let r = 0; r < e?.length; r++) {
		let i = e?.[r], a = t?.[r];
		n.push(uo(i)), n.push(a);
	}
	if (n?.length <= 1) return Y(n?.[0], null, 0);
	let r = document.createDocumentFragment();
	return r.append(...n?.filter?.((e) => e != null)?.map?.((e, t) => Y(e, null, t))?.filter?.((e) => e != null)), r;
};
function oo(e, ...t) {
	return e?.at?.(0)?.trim?.()?.startsWith?.("<") && e?.at?.(-1)?.trim?.()?.endsWith?.(">") ? lo({ createElement: null })(e, ...t) : ao(e, ...t);
}
var so = (e) => e != null && e instanceof HTMLElement && !(e instanceof DocumentFragment || e instanceof HTMLBodyElement && e != document.body), co = (e, t, r) => {
	r != null && (r.boundParent = e);
	let i = Y(r, null, -1, e);
	T(i) ? i?.parentNode != e && !i?.contains?.(e) && i != null && t?.replaceWith?.(n(i) && (typeof i?.value == "object" || typeof i?.value == "function") && T(i?.value) ? i?.value : i) : t?.remove?.();
};
function lo({ createElement: e = null } = {}) {
	return function(e, ...t) {
		let n = [], r = [], i = [];
		for (let a = 0; a < e.length; a++) if (n.push(e?.[a] || ""), a < t.length) if (e[a]?.trim()?.endsWith?.("<")) {
			let e = no(t?.[a]);
			n.push(e.tag || "div"), e.id && n.push(` id="${e.id}"`), e.className && n.push(` class="${e.className}"`);
		} else {
			let o = eo(e, e?.[a] || "", e?.[a + 1] || ""), s = /[\w:\-\.\]]\s*=\s*$/.test(e[a]?.trim?.() ?? "") || e[a]?.trim?.()?.endsWith?.("="), c = e[a]?.trim?.()?.match?.(/['"]$/), l = e[a + 1]?.trim?.()?.match?.(/^['"]/) ?? c, u = c && l, d = s;
			if ((d || u) && o) {
				let e = d && !u, r = i.length;
				n.push((typeof t?.[a] == "string" ? t?.[a]?.trim?.() != "" : t?.[a] != null) ? e ? `"#{${r}}"` : `#{${r}}` : ""), i.push(t?.[a]);
			} else if (!o) {
				let e = r.length;
				n.push((typeof t?.[a] == "string" ? t?.[a]?.trim?.() != "" : t?.[a] != null) ? x(t?.[a]) ? String(t?.[a])?.trim?.() : `<!--o:${e}-->` : ""), r.push(t?.[a]);
			}
		}
		let a = $a(n.join("").trim()), o = /* @__PURE__ */ new WeakMap(), s = new DOMParser().parseFromString(a, "text/html"), c = (s instanceof HTMLTemplateElement || s?.matches?.("template") ? s : s.querySelector("template"))?.content ?? s.body ?? s, l = document.createDocumentFragment(), u = Array.from(c.childNodes)?.filter((e) => e instanceof Node).map((e) => (!so(e?.parentNode) && e?.parentNode != l && (e?.remove?.(), e != null && l?.append?.(e)), e)), d = [];
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
					Array.isArray(t) || t instanceof Map || t instanceof Set ? co?.(n, e, t = Va(t, null, n)) : t != null && co?.(n, e, t);
				}
			}
			e?.isConnected && e?.remove?.();
		}), d?.filter((e) => e.nodeType == Node.ELEMENT_NODE)?.map?.((e) => {
			io(e, i, r, o);
		}), Array.from(l?.childNodes)?.length > 1 ? l : l?.childNodes?.[0];
	};
}
var uo = (e, ...t) => {
	if (typeof e == "string") {
		if (e?.trim?.()?.startsWith?.("<") && e?.trim?.()?.endsWith?.(">")) {
			let t = new DOMParser().parseFromString($a(e?.trim?.()), "text/html"), n = t.querySelector("template")?.content ?? t.body;
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
	} else if (typeof e == "function") return uo(e?.());
	else if (Array.isArray(e) && t) return oo(e, ...t);
	else if (e instanceof Node) return e;
	return Y(e);
}, fo = /* @__PURE__ */ new Map(), po = /* @__PURE__ */ new WeakMap(), mo = /* @__PURE__ */ new WeakMap(), ho = /* @__PURE__ */ new WeakMap(), go = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), _o = (e) => {
	let t = go(e);
	return [
		"border-box",
		"content-box",
		"device-pixel-content-box"
	].indexOf(t) >= 0 ? t : null;
}, vo = (e) => {
	let t = go(e);
	return t?.startsWith?.("inline") ? "inline" : t?.startsWith?.("block") ? "block" : null;
}, yo = Symbol.for("@render@"), bo = Symbol.for("@defKeys@"), xo = typeof document < "u" ? document?.createElement?.("style") : null, So = (e, t, n) => e == "attr" ? vi.bind(null, t, n || "") : e == "media" ? Ei : e == "query" ? (e) => J?.(n || e || "", t) : e == "query-shadow" ? (e) => J?.(n || e || "", t?.shadowRoot ?? t) : e == "localStorage" ? xi : e == "inline-size" ? Si.bind(null, t, "inline", _o(n) || "border-box") : e == "content-box" ? Si.bind(null, t, vo(n) || "inline", "content-box") : e == "block-size" ? Si.bind(null, t, "block", _o(n) || "border-box") : e == "border-box" ? Si.bind(null, t, vo(n) || "inline", "border-box") : e == "scroll" ? wi.bind(null, t, vo(n) || "inline") : e == "device-pixel-content-box" ? Si.bind(null, t, vo(n) || "inline", "device-pixel-content-box") : e == "checked" ? Ci.bind(null, t) : e == "value" ? yi.bind(null, t) : e == "value-as-number" ? bi.bind(null, t) : wr;
xo && typeof document < "u" && document.querySelector?.("head")?.appendChild?.(xo);
var Co = (e) => e == "query" || e == "query-shadow" ? "input" : e == "media" ? !1 : e == "localStorage" || e == "attr" ? null : e == "inline-size" || e == "block-size" || e == "border-box" || e == "content-box" || e == "scroll" || e == "device-pixel-content-box" ? 0 : e == "checked" ? !1 : e == "value" ? "" : e == "value-as-number" ? 0 : null;
xo && (xo.innerHTML = "@layer ux-preload {\n        :host { display: none; }\n    }");
function wo(e) {
	let t = e.prototype ?? Object.getPrototypeOf(e) ?? e, n = t?.$init ?? e?.$init;
	return t.$init = function(...e) {
		n?.call?.(this, ...e);
		let t = {}, r = Object.getPrototypeOf(this) ?? this;
		for (; r;) {
			if (Object.hasOwn(r, bo)) {
				let e = Object.assign({}, Object.getOwnPropertyDescriptors(r), r[bo] ?? {});
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
function To(e, t) {
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
function Eo(e = {}) {
	let { attribute: t, source: n, name: r, from: i } = e;
	return function(e, a) {
		let o = typeof t == "string" ? t : r ?? a;
		if (t !== !1 && o != null) {
			let t = e.constructor;
			t.observedAttributes ||= [], t.observedAttributes.indexOf(o) < 0 && t.observedAttributes.push(o);
		}
		Object.hasOwn(e, bo) || (e[bo] = {}), e[bo][a] = {
			get() {
				let e = this, t = e[yo], o = i ? i instanceof HTMLElement ? i : typeof i == "string" ? J?.(i, e) : e : e, s = mo.get(e), c = s?.get?.(a);
				return c == null && n != null && (s || mo.set(e, s = /* @__PURE__ */ new Map()), s?.has?.(a) || s?.set?.(a, c = So(n, o, r || a)?.(Co(n)))), t ? c : c?.element instanceof HTMLElement ? c?.element : (typeof c == "object" || typeof c == "function") && (c?.value != null || "value" in c) ? c?.value : c;
			},
			set(e) {
				let t = this, o = i ? i instanceof HTMLElement ? i : typeof i == "string" ? J?.(i, t) : t : t, s = mo.get(t), c = s?.get?.(a);
				if (c == null && n != null) {
					if (s || mo.set(t, s = /* @__PURE__ */ new Map()), !s?.has?.(a)) {
						let t = (typeof e == "object" || typeof e == "function" ? e?.value : null) ?? e ?? Co(n);
						s?.set?.(a, c = So(n, o, r || a)?.(t));
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
var X = /* @__PURE__ */ new WeakMap(), Do = (e, t) => {
	let n = X.get(e);
	n || X.set(e, n = []), t && n.indexOf(t) < 0 && n.push(t), e.shadowRoot && (e.shadowRoot.adoptedStyleSheets = [...e.shadowRoot.adoptedStyleSheets || [], ...n.filter((t) => !e.shadowRoot.adoptedStyleSheets?.includes(t))]);
}, Oo = (e, t) => {
	if (!t) return null;
	let n = t;
	if (typeof t == "function") try {
		let r = new WeakRef(e);
		n = t.call(e, r);
	} catch (e) {
		return console.warn("Error calling styles function:", e), null;
	}
	if (n && typeof CSSStyleSheet < "u" && n instanceof CSSStyleSheet) return Do(e, n), null;
	if (n instanceof Promise) return n.then((t) => {
		t instanceof CSSStyleSheet ? Do(e, t) : t != null && Oo(e, t);
	}).catch((e) => {
		console.warn("Error loading adopted stylesheet:", e);
	}), null;
	if (typeof n == "string" || n instanceof Blob || n instanceof File) {
		let t = wt(n, "");
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
	let r = typeof t == "function" || typeof t == "object" ? po : fo, i = r.get(t), a = i?.styleElement, o = i?.vars;
	if (!i) {
		let i = "", s = [];
		typeof n == "string" ? i = n || "" : typeof n == "object" && n && (n instanceof HTMLStyleElement ? a = n : (i = typeof n.css == "string" ? n.css : typeof n == "string" ? n : String(n), s = n?.props ?? s, o = n?.vars ?? o)), !a && i && (a = bt(i, e, "ux-layer")), r.set(t, {
			css: i,
			props: s,
			vars: o,
			styleElement: a
		});
	}
	return a;
}, ko = (e) => !(e instanceof HTMLDivElement || e instanceof HTMLImageElement || e instanceof HTMLVideoElement || e instanceof HTMLCanvasElement) && !(e?.hasAttribute?.("is") || e?.getAttribute?.("is") != null);
function Ao(e) {
	let t = globalThis.HTMLElement ?? class {}, n = e ?? t, r = ho.get(n);
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
			if (super(...e), ko(this)) {
				let e = Ut(this.shadowRoot ?? this.createShadowRoot?.() ?? this.attachShadow({ mode: "open" })), t = this.#t ??= xo?.cloneNode?.(!0), n = e.querySelector("style[data-type=\"ux-layer\"]");
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
			let t = this[yo];
			this[yo] = !0;
			let n = this[e];
			return this[yo] = t, t || delete this[yo], n;
		}
		loadStyleLibrary(e) {
			let t = this.shadowRoot, n = typeof e == "function" ? e?.(t) : e;
			if (n instanceof HTMLStyleElement) this.styleLibs?.push?.(n), this.#e?.isConnected ? this.#e?.before?.(n) : this.shadowRoot?.prepend?.(n);
			else if (n instanceof CSSStyleSheet) {
				let e = X.get(this);
				e || X.set(this, e = []), e.indexOf(n) < 0 && e.push(n), t && (t.adoptedStyleSheets = [...t.adoptedStyleSheets || [], ...e.filter((e) => !t.adoptedStyleSheets?.includes(e))]);
			} else {
				let e = wt(n, "ux-layer"), r = X.get(this);
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
				let t = ko(this) ? this.createShadowRoot?.() ?? this.shadowRoot ?? this.attachShadow({ mode: "open" }) : this.shadowRoot, n = this.constructor, r = this.$init ?? n.prototype?.$init;
				typeof r == "function" && r.call(this);
				let i = typeof this.initialAttributes == "function" ? this.initialAttributes() : this.initialAttributes;
				if (Se(this, i), this.onInitialize?.call(this, e), this[yo] = !0, ko(this) && t) {
					let n = this.render?.call?.(this, e) ?? document.createElement("slot"), r = Oo(this, this.styles);
					r instanceof HTMLStyleElement && (this.#e = r);
					let i = [
						uo`<style data-type="ux-layer" prop:innerHTML=${this.$makeLayers()}></style>`,
						this.#t,
						...this.styleLibs.map((e) => e.cloneNode?.(!0)) || [],
						r,
						n
					].filter((e) => e != null && T(e));
					t.append(...i);
					let a = X.get(this) || [];
					a.length > 0 && (t.adoptedStyleSheets = [...a.filter((e) => !t.adoptedStyleSheets?.includes(e)), ...new Set([...t.adoptedStyleSheets || []])]);
				}
				this.onRender?.call?.(this, e), delete this[yo], t && Ut(t);
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
	let a = wo(i);
	return ho.set(n, a), console.log("result", a), a;
}
//#endregion
//#region ../../projects/lur.e/src/interactive/controllers/LazyEvents.ts
var jo = /* @__PURE__ */ new WeakMap(), Mo = (e, t) => `${e}|c:${t?.capture ? "1" : "0"}|p:${t?.passive ? "1" : "0"}`, No = (e, t, n, r = {}) => {
	if (!e || typeof e.addEventListener != "function") return () => {};
	let i = {
		capture: !!r.capture,
		passive: !!r.passive
	}, a = Mo(t, i), o = jo.get(e);
	o || (o = /* @__PURE__ */ new Map(), jo.set(e, o));
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
		let r = jo.get(e), i = r?.get(a);
		i && (i.handlers.delete(n), !(i.handlers.size > 0) && (e.removeEventListener(t, i.listener, i.options), r?.delete(a), r && r.size === 0 && jo.delete(e)));
	};
}, Po = /* @__PURE__ */ new WeakMap(), Fo = (e) => {
	let t = e?.element ?? e;
	return t instanceof HTMLElement ? t : null;
}, Io = (e, t, n) => e ? e === "handled" ? n : t : !1, Lo = (e, t, n = {
	capture: !0,
	passive: !1
}, r = {}) => {
	let i = e;
	if (!i || typeof i.addEventListener != "function") return (e, t) => () => {};
	let a = {
		capture: !!n.capture,
		passive: !!n.passive
	}, o = r.strategy ?? "closest", s = `${t}|c:${a.capture ? "1" : "0"}|p:${a.passive ? "1" : "0"}|s:${o}|pd:${String(r.preventDefault ?? "")}|sp:${String(r.stopPropagation ?? "")}|sip:${String(r.stopImmediatePropagation ?? "")}`, c = Po.get(i);
	c || (c = /* @__PURE__ */ new Map(), Po.set(i, c));
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
					let n = Fo(t);
					if (!n) continue;
					let r = e.get(n);
					if (r) {
						a(r);
						break;
					}
				}
				else for (let t of s) {
					let n = Fo(t);
					n && a(e.get(n));
				}
				else {
					let n = Fo(t?.target);
					for (; n;) {
						let t = e.get(n);
						if (t && (a(t), o === "closest")) break;
						let r = n.getRootNode?.();
						n = n.parentElement || (r instanceof ShadowRoot ? r.host : null);
					}
				}
				Io(r.preventDefault, n, i) && t?.preventDefault?.(), Io(r.stopImmediatePropagation, n, i) && t?.stopImmediatePropagation?.(), Io(r.stopPropagation, n, i) && t?.stopPropagation?.();
			}
		}, c.set(s, l);
	}
	return (e, n) => {
		let r = Fo(e);
		if (!r) return () => {};
		l.targets.size === 0 && !l.unbindGlobal && (l.unbindGlobal = No(i, t, l.dispatch, l.options));
		let a = l.targets.get(r);
		return a || (a = /* @__PURE__ */ new Set(), l.targets.set(r, a)), a.add(n), () => {
			let t = Po.get(i), r = t?.get(s);
			if (!r) return;
			let a = Fo(e);
			if (!a) return;
			let o = r.targets.get(a);
			o && (o.delete(n), o.size === 0 && r.targets.delete(a), r.targets.size === 0 && (r.unbindGlobal?.(), r.unbindGlobal = null, t?.delete(s), t && t.size === 0 && Po.delete(i)));
		};
	};
}, Ro = typeof document < "u" ? document?.documentElement : null, zo = (e, t, n) => {
	if (e?.deref?.() != null) return e.deref()[t] = n;
};
function Bo(e = null, t = H(!1), n = [
	"pointerdown",
	"click",
	"contextmenu",
	"scroll"
], r = document?.documentElement) {
	if (!r) return () => {};
	let i = new WeakRef(t), a = typeof t == "function" ? t : (t) => {
		(!(e?.contains?.(t?.target) || t?.target == (e?.element ?? e)) || !e) && zo(i, "value", !1);
	}, o = n.map((e) => No(r, e, a, {
		capture: !1,
		passive: !1
	})), s = () => o.forEach((e) => e?.());
	return I(t, Symbol.dispose, s), s;
}
var Vo = (e, t) => ((n) => {
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
		}), c = je(Ro, o);
	}
}), Ho = (e, t) => {
	let n, r;
	if (e instanceof Di) n = e.x?.value ?? 0, r = e.y?.value ?? 0;
	else if (Array.isArray(e) && e.length >= 2) n = e[0] ?? 0, r = e[1] ?? 0;
	else return Oi(0, 0);
	if (!isFinite(n) || !isFinite(r)) return Oi(0, 0);
	let i = Math.max(1, t[0] || 1), a = Math.max(1, t[1] || 1);
	return Oi(Math.max(0, Math.min(Math.floor(n), i - 1)), Math.max(0, Math.min(Math.floor(r), a - 1)));
}, Uo = /* @__PURE__ */ new WeakMap(), Wo = /* @__PURE__ */ new Map(), Go = (e, t = 0) => {
	if (Wo.has(t)) return;
	let n = () => {
		Wo.delete(t), o?.forEach?.((e) => e?.()), s?.forEach?.((e) => e?.());
	}, r = (e) => {
		e?.pointerId == t || e?.pointerId == null || t == null || t < 0 ? (e.preventDefault(), Wo.set(t, !0), n()) : Wo.delete(t);
	}, i = [r, { once: !0 }], a = [r, {
		once: !0,
		capture: !0
	}], o = je(document.documentElement, {
		click: a,
		pointerdown: a,
		contextmenu: a
	}), s = je(e, {
		click: i,
		pointerdown: i,
		contextmenu: i
	});
	setTimeout(n, 10);
}, Ko = null;
Ko = typeof PointerEvent < "u" ? class extends PointerEvent {
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
var qo = (e, t = {
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
		if (t?.pointerId == n?.pointerId && (n?.preventDefault?.(), Oe(n?.target, e))) {
			let t = [...n?.client || [n?.clientX || 0, n?.clientY || 0]];
			c.duration = s(), c.movement = [...c.client ? [t?.[0] - (c.client?.[0] || 0), t?.[1] - (c.client?.[1] || 0)] : [0, 0]], c.client = t, c.shifting[0] += c.movement[0] || 0, c.shifting[1] += c.movement[1] || 0, c.modified[0] = (c.shifting[0] ?? c.modified[0]) || 0, c.modified[1] = (c.shifting[1] ?? c.modified[1]) || 0, e?.dispatchEvent?.(new Ko("m-dragging", {
				...n,
				bubbles: !0,
				holding: c,
				event: n
			})), c?.result?.[0] != null && (c.result[0].value = c.modified[0] || 0), c?.result?.[1] != null && (c.result[1].value = c.modified[1] || 0), c?.result?.[2] != null && (c.result[2].value = 0);
		}
	}), { capture: !0 }], u = Promise.withResolvers(), d = [((n) => {
		if (t?.pointerId == n?.pointerId) {
			let i = e?.element || e;
			if (Oe(n?.target, i) || n?.currentTarget?.contains?.(i) || n?.target == i) {
				n?.type == "pointerup" && Go(i, n?.pointerId), queueMicrotask(() => u?.resolve?.(r)), f?.forEach?.((e) => e?.()), i?.releaseCapturePointer?.(n?.pointerId), i?.dispatchEvent?.(new Ko("m-dragend", {
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
	return Go(e, t?.pointerId), queueMicrotask(() => {
		e?.dispatchEvent?.(new Ko("m-dragstart", {
			...t,
			bubbles: !0,
			holding: c,
			event: t
		})) ? (e?.setPointerCapture?.(t?.pointerId), f = je(e, {
			pointermove: l,
			pointercancel: d,
			pointerup: d
		}), f?.push?.(...je(document.documentElement, {
			pointercancel: d,
			pointerup: d
		}))) : c.canceled = !0;
	}), u?.promise ?? r;
}, Jo = (e, t = () => {}, n = [{ value: 0 }, { value: 0 }], r = [0, 0]) => {
	if (!n) return;
	let i = (i, a) => qo(a ?? e, i, {
		result: n,
		shifting: typeof r == "function" ? r?.(n) : r
	})?.then?.(t);
	if (typeof e?.addEventListener == "function") E(e, "pointerdown", i);
	else if (typeof e == "function") e(i);
	else throw Error("bindDraggable: elementOrEventListener is not a function or an object with addEventListener");
	return {
		draggable: n,
		dispose: () => {
			typeof e?.removeEventListener == "function" && Ae(e, "pointerdown", i);
		},
		process: i
	};
}, Yo = {
	anyPointer: !0,
	mouseImmediate: !0,
	minHoldTime: 100,
	maxHoldTime: 2e3,
	maxOffsetRadius: 10
}, Xo = [(e) => {
	e.preventDefault(), e.stopPropagation();
}, { once: !0 }], Zo = class {
	#e;
	#t;
	constructor(e, t = { ...Yo }, n) {
		if ((this.#e = e)["@control"] = this, this.#t = /* @__PURE__ */ new Set(), !e) throw Error("Element is null...");
		t ||= { ...Yo };
		let r = { ...t };
		Object.assign(t, Yo, r), t && this.longPress(t, n);
	}
	defaultHandler(e, t) {
		return t?.deref()?.dispatchEvent?.(new PointerEvent("long-press", {
			...e,
			bubbles: !0
		}));
	}
	longPress(e = { ...Yo }, t) {
		let n = document.documentElement, r = new WeakRef(this.#e);
		this.holding = {
			actionState: this.initializeActionState(),
			options: e,
			fx: t || ((e) => this.defaultHandler(e, r))
		};
		let i = (e) => this.onPointerDown(this.holding, e, r), a = (e) => this.onPointerMove(this.holding, e), o = (e) => this.onPointerUp(this.holding, e);
		je(n, {
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
		this.#t.has(t.pointerId) || (this.#t.add(t.pointerId), e?.addEventListener?.("click", ...Xo), e?.addEventListener?.("contextmenu", ...Xo));
	}
	releasePreventing(e, t) {
		this.#t.has(t) && (this.#t.delete(t), e?.removeEventListener?.("click", ...Xo), e?.removeEventListener?.("contextmenu", ...Xo));
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
}, Qo = (e, t) => {
	let n = J("[data-id]", e?.target, 0, "parent")?.getAttribute?.("data-id"), r = t?.items?.find?.((e) => e?.some?.((e) => e?.id == n))?.find?.((e) => e?.id == n);
	(r?.action ?? t?.defaultAction)?.(t?.openedWith?.initiator, r, t?.openedWith?.event ?? e), t?.openedWith?.close?.();
	let i = ts(t?.openedWith?.element);
	i != null && (i.value = !1);
}, $o = /* @__PURE__ */ new WeakMap(), es = typeof document < "u" && document?.documentElement ? Lo(document.documentElement, "contextmenu", {
	capture: !0,
	passive: !1
}, {
	strategy: "closest",
	preventDefault: "handled",
	stopImmediatePropagation: "handled"
}) : (e, t) => () => {}, ts = (e) => e == null ? null : $o?.getOrInsertComputed?.(e, () => Ti(e, !1)), ns = (e, t) => {
	let n = E(e, "click", (e) => {
		Qo(e, t);
	}, { composed: !0 });
	return () => n?.();
}, rs = (e = document) => {
	let t = J("ui-modal[type=\"contextmenu\"]", e);
	return t || (t = uo`<ui-modal type="contextmenu"></ui-modal>`, (e instanceof Document ? e.body : e).append(t)), t;
}, is = (e, t, n, r) => (i) => {
	let a = !1, o = r || rs(), s = ts(o), c = i?.target ?? e ?? document.elementFromPoint(i?.clientX || 0, i?.clientY || 0), l = {
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
			let r = e?.map?.((e) => uo`<li data-id=${e?.id || ""}><ui-icon icon=${e?.icon || ""} icon-style="duotone"></ui-icon><span>${e?.label || ""}</span></li>`), i = e?.length > 1 && t !== (n?.items?.length || 0) - 1 ? uo`<li class="ctx-menu-separator"></li>` : null;
			return [...r, i];
		})?.flat?.()?.filter?.((e) => !!e) || []);
		let e = Ki?.(o, t?.(i, c)), r = ns(o, n), l = Bo?.(o, (e) => {
			let t = o;
			if (!(o?.contains?.(e?.target ?? null) || e?.target == (t?.element ?? t)) || !e?.target) {
				n?.openedWith?.close?.();
				let e = ts(o);
				e != null && (e.value = !1);
			}
		}, [
			"click",
			"pointerdown",
			"scroll"
		]), u = es(o, () => !0);
		n.openedWith = {
			initiator: c,
			element: o,
			event: i,
			context: n?.context,
			close() {
				s.value = !1, n.openedWith = null, r?.(), e?.(), l?.(), u?.(), n._backUnreg &&= (n._backUnreg(), null);
			}
		}, !n._backUnreg && s && (n._backUnreg = $r(o, s, () => {
			n?.openedWith?.close?.();
		}));
	}
	return a;
}, as = (e, t, n) => {
	let r = is(e, (e) => [
		e?.clientX,
		e?.clientY,
		200
	], t, n), i = qi(e, () => es(e, r));
	return () => {
		i?.();
	};
}, os = "rs-clipboard", ss = 256e3, cs = 2e6, ls = 12e3, us = (e) => {
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
}, ds = (e) => {
	if (e == null) return "";
	if (typeof e == "string") return e;
	try {
		return JSON.stringify(e, null, 2);
	} catch {
		return String(e);
	}
}, fs = (e, t) => Promise.race([e.then(() => "ok").catch(() => "error"), new Promise((e) => {
	globalThis.setTimeout(() => e("timeout"), t);
})]), ps = async (e) => {
	let t = ds(e);
	if (!t.trim()) return {
		ok: !1,
		error: "Empty content"
	};
	if (t.length > cs) return {
		ok: !1,
		error: "Content too large to copy safely"
	};
	let n = t.trim();
	return new Promise((e) => {
		us(() => {
			typeof document < "u" && document.hasFocus && !document.hasFocus() && globalThis?.focus?.(), (async () => {
				let t = async () => {
					if (typeof navigator > "u" || !navigator.clipboard?.writeText) return !1;
					let e = await fs(navigator.clipboard.writeText(n), ls);
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
				if (n.length > ss) {
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
}, ms = async (e, t) => {
	let n = e.trim(), r = (t ?? n).trim();
	return n ? new Promise((e) => {
		us(() => {
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
				e(await ps(r));
			})();
		});
	}) : {
		ok: !1,
		error: "Empty content"
	};
}, hs = async (e) => new Promise((t) => {
	us(async () => {
		typeof document < "u" && document.hasFocus && !document.hasFocus() && globalThis?.focus?.();
		try {
			let n;
			if (n = typeof e == "string" ? (e.startsWith("data:"), await (await fetch(e)).blob()) : e, typeof navigator < "u" && navigator.clipboard?.write) {
				let e = n.type === "image/png" ? n : await gs(n);
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
}), gs = async (e) => new Promise((t, n) => {
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
}), _s = async (e, t = {}) => {
	let { type: n, showFeedback: r = !1, silentOnError: i = !1 } = t;
	return new Promise((t) => {
		us(async () => {
			let a;
			a = e instanceof Blob ? e.type.startsWith("image/") ? await hs(e) : await ps(await e.text()) : n === "html" || typeof e == "string" && e.trim().startsWith("<") ? await ms(String(e)) : n === "image" ? await hs(e) : await ps(ds(e)), r && (a.ok || !i) && vs(a), t(a);
		});
	});
}, vs = (e) => {
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
}, ys = null, bs = 0, xs = null, Ss = Promise.resolve(), Cs = () => {
	if (typeof BroadcastChannel > "u") return () => {};
	if (bs === 0) {
		let e = new BroadcastChannel(os), t = (e) => {
			if (e.data?.type !== "copy") return;
			let t = e.data.options || {}, n = e.data.data;
			Ss = Ss.then(async () => {
				try {
					await _s(n, {
						...t,
						showFeedback: t.showFeedback !== !1,
						silentOnError: t.silentOnError === !0
					});
				} catch (e) {
					console.warn("[Clipboard] Broadcast copy failed:", e);
				}
			});
		};
		e.addEventListener("message", t), ys = e, xs = t;
	}
	return bs++, () => {
		if (bs--, bs <= 0) {
			let e = ys, t = xs;
			e && t && (e.removeEventListener("message", t), e.close()), ys = null, xs = null, bs = 0;
		}
	};
}, ws = () => Cs(), Ts = (e, t) => {
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
}, Es = (e, t) => {
	let n = Ts(e, t);
	for (let r of n) r[t]?.(e);
}, Ds = !1, Os = () => {
	typeof window > "u" || Ds || (Ds = !0, No(window, "copy", (e) => Es(e, "onCopy"), {
		capture: !1,
		passive: !0
	}), No(window, "cut", (e) => Es(e, "onCut"), {
		capture: !1,
		passive: !0
	}), No(window, "paste", (e) => Es(e, "onPaste"), {
		capture: !1,
		passive: !1
	}));
}, ks = "cw-oriented-desktop-layout-v1", As = `${ks}.draft`, js = (e) => {
	try {
		return localStorage.getItem(e);
	} catch {
		return null;
	}
}, Ms = (e, t) => {
	try {
		localStorage.setItem(e, t);
	} catch {}
}, Ns = (e) => {
	try {
		localStorage.removeItem(e);
	} catch {}
};
function Ps(e, t, n) {
	let r = {
		v: 2,
		updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
		columns: e,
		rows: t,
		items: n
	};
	return JSON.stringify(r);
}
function Fs(e) {
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
function Is() {
	let e = js(ks), t = js(As);
	if (!e) return t;
	if (!t) return e;
	let n = Fs(e), r = Fs(t);
	if (!n) return t;
	if (!r) return e;
	let i = Date.parse(n.updatedAt || ""), a = Date.parse(r.updatedAt || "");
	return Number.isFinite(a) && Number.isFinite(i) && a > i ? t : e;
}
function Ls(e, t, n) {
	Ms(ks, Ps(e, t, n)), Ns(As);
}
function Rs(e, t, n) {
	Ms(As, Ps(e, t, n));
}
//#endregion
//#region ../../projects/lur.e/src/interactive/modules/DesktopItemIconCodec.ts
var zs = /^https:\/\/www\.google\.com\/s2\/favicons\?[^#]*domain=([^&]+)/i, Bs = (e) => {
	let t = String(e || "").trim();
	return t ? t.startsWith("https://") ? `S${t.slice(8)}` : t.startsWith("http://") ? `H${t.slice(7)}` : `R${t}` : "";
}, Vs = (e) => {
	let t = String(e || "").trim();
	return t ? t.startsWith("S") ? `https://${t.slice(1)}` : t.startsWith("H") ? `http://${t.slice(1)}` : t.startsWith("R") ? t.slice(1) : t : "";
}, Hs = (e) => {
	let t = String(e || "").trim().toLowerCase().replace(/\.$/, "");
	return t ? `g:${t}` : "";
}, Us = (e) => {
	let t = String(e || "").trim();
	if (!t) return "";
	try {
		return `https://www.google.com/s2/favicons?domain=${encodeURIComponent(t.replace(/^\./, ""))}&sz=128`;
	} catch {
		return "";
	}
}, Ws = (e, t, n) => {
	let r = String(e || "").trim();
	if (/^(data:|blob:)/i.test(r)) return "";
	if (r.startsWith("g:")) {
		let e = r.slice(2).trim().toLowerCase();
		return e ? `g:${e}` : "";
	}
	let i = r.match(zs);
	if (i) try {
		let e = decodeURIComponent(i[1]).toLowerCase();
		return e ? `g:${e}` : "";
	} catch {
		return "";
	}
	if (/^https?:\/\//i.test(r) && r.length < 2048) return r;
	if (!r && String(n || "") === "open-link" && t) try {
		let e = new URL(String(t), window.location.href);
		if (/^https?:$/i.test(e.protocol)) return Hs(e.hostname);
	} catch {}
	return "";
}, Gs = (e) => {
	let t = String(e || "").trim();
	return !t || /^(data:|blob:)/i.test(t) ? "" : t.startsWith("g:") ? Us(t.slice(2)) : t;
}, Ks = (e, t, n) => {
	let r = String(e || "").trim();
	if (/^(data:|blob:)/i.test(r)) return "";
	if (r.startsWith("g:")) return r;
	let i = r.match(zs);
	if (i) try {
		let e = decodeURIComponent(i[1]).toLowerCase();
		return e ? `g:${e}` : "";
	} catch {
		return "";
	}
	if (String(t || "") === "open-link" && n) try {
		let e = new URL(String(n), window.location.href);
		if (/^https?:$/i.test(e.protocol)) return Hs(e.hostname);
	} catch {}
	return /^https?:\/\//i.test(r) && r.length < 2048 ? r : "";
}, qs = "cw-sdi", Js = (e) => {
	let t = e.href ? Bs(e.href) : "", n = Ks(String(e.iconSrc || ""), e.action, e.href);
	return JSON.stringify({
		k: qs,
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
}, Ys = (e) => {
	if (!e || typeof e != "object") return null;
	let t = e;
	if (t.k !== "cw-sdi" || !t.i || typeof t.i != "object") return null;
	let n = t.i, r = n.c, i = Array.isArray(r) ? Number(r[0]) : NaN, a = Array.isArray(r) ? Number(r[1]) : NaN, o = typeof n.u == "string" ? n.u : "", s = o ? Vs(o) : "", c = String(n.a || (s ? "open-link" : "open-view"));
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
}, Xs = (e) => e ? e instanceof Map ? Array.from(e.entries()) : Array.isArray(e) ? e.map((e, t) => Array.isArray(e) && e.length === 2 ? e : [t, e]) : e instanceof Set ? Array.from(e.values()).map((e, t) => [t, e]) : typeof e == "object" ? Object.entries(e) : [] : [], Zs = Object.prototype.hasOwnProperty, Qs = (e) => !e || typeof e != "object" || Array.isArray(e) ? !1 : !(e instanceof Map) && !(e instanceof Set), $s = (e, t) => {
	if (e && typeof e == "object") {
		if ("id" in e && e.id != null) return e.id;
		if ("key" in e && e.key != null) return e.key;
	}
	return t;
}, ec = (e, t, n) => e ?? $s(t) ?? n, tc = (e, t) => {
	for (let n of Object.keys(t)) {
		let r = t[n], i = e[n];
		if (Qs(i) && Qs(r)) {
			tc(i, r);
			continue;
		}
		i !== r && (e[n] = r);
	}
	return e;
}, nc = (e, t) => {
	if (e === t) return e;
	let n = t && typeof t == "object";
	return e instanceof Map && n || e instanceof Set && n || Array.isArray(e) && n ? (rc(e, t), e) : Qs(e) && Qs(t) ? (tc(e, t), e) : t;
}, rc = (e, t) => {
	if (!e || !t) return e;
	let n = Xs(t);
	if (!n.length) return e;
	if (e instanceof Set) {
		let t = /* @__PURE__ */ new Map();
		for (let n of e.values()) {
			let e = $s(n);
			e != null && t.set(e, n);
		}
		let r = /* @__PURE__ */ new Set();
		for (let [i, a] of n) {
			let n = ec(i, a);
			if (n == null) {
				e.has(a) || e.add(a);
				continue;
			}
			let o = t.has(n), s = o ? t.get(n) : void 0;
			if (o) {
				let r = nc(s, a);
				r !== s && (e.delete(s), e.add(r), t.set(n, r));
			} else e.add(a), t.set(n, a);
			r.add(n);
		}
		if (r.size) for (let t of Array.from(e.values())) {
			let n = $s(t);
			n != null && !r.has(n) && e.delete(t);
		}
		return e;
	}
	if (e instanceof Map) {
		let t = new Map(n);
		for (let n of Array.from(e.keys())) t.has(n) || e.delete(n);
		for (let [n, r] of t.entries()) if (e.has(n)) {
			let t = e.get(n), i = nc(t, r);
			i !== t && e.set(n, i);
		} else e.set(n, r);
		return e;
	}
	if (Array.isArray(e)) {
		let t = /* @__PURE__ */ new Set(), r = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new WeakMap();
		e.forEach((e, n) => {
			t.add(n);
			let a = $s(e, n);
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
			let n = ec(t, l, c++), u = a(n == null ? void 0 : r.get(n));
			u == null && l && typeof l == "object" && (u = a(i.get(l))), u ??= o();
			let d = u == null ? void 0 : e[u], f = d === void 0 ? l : nc(d, l);
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
			if (Zs.call(e, n)) {
				let t = e[n], i = nc(t, r);
				i !== t && (e[n] = i);
			} else e[n] = r;
		}
		return e;
	}
	return e;
}, ic = (e, t = "id") => {
	if (e && (e instanceof Set || Array.isArray(e))) {
		let n = Array.from(e?.values?.() || []).map((e) => [e?.[t], e]).filter((e) => e?.[0] != null);
		return rc(e, new Map(n));
	}
	return e;
}, ac = () => typeof chrome < "u" && chrome?.storage?.local, oc = (e, t, n, r = (e) => Cn(e), i = "id", a = 6e3) => {
	let o = null;
	o = ic(t?.() || {}, i), ac() ? chrome.storage.local.get([e], (t) => {
		if (t[e]) {
			let r = n(C.parse(t?.[e] || "{}"));
			rc(o, r);
		}
	}) : typeof localStorage < "u" && (localStorage.getItem(e) ? (o = n(C.parse(localStorage.getItem(e) || "{}")), ic(o, i)) : localStorage.setItem(e, C.stringify(r(o))));
	let s = (t) => {
		let n = C.stringify(r(ic(o, i)));
		ac() ? chrome.storage.local.set({ [e]: n }) : typeof localStorage < "u" && localStorage.setItem(e, n);
	};
	if (we(s, a), typeof window < "u" && typeof document < "u") {
		let t = [
			E(document, "visibilitychange", (e) => {
				document.visibilityState === "hidden" && s(e);
			}),
			E(window, "beforeunload", (e) => s(e)),
			E(window, "pagehide", (e) => s(e)),
			E(window, "storage", (t) => {
				t.storageArea == localStorage && t.key == e && rc(o, n(C.parse(t?.newValue || C.stringify(r(ic(o, i))))));
			})
		];
		I(o, Symbol.dispose, () => t.forEach((e) => e?.()));
	}
	if (ac() && chrome.storage.onChanged.addListener((t, r) => {
		if (r === "local" && t[e]) {
			let r = t[e].newValue;
			r && rc(o, n(C.parse(r)));
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
be();
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
var sc = (e, t = 100) => typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(e, { timeout: t }) : setTimeout(() => e({
	didTimeout: !1,
	timeRemaining: () => 0
}), 0), cc = "electronBridge";
function lc(e) {
	if (typeof e != "string") return null;
	let t = e.trim().toLowerCase();
	if (t === "transparent") return 0;
	if (t.startsWith("#")) {
		let e = t;
		if (e.length === 4 || e.length === 7) return 1;
		if (e.length === 5) {
			let t = e[4], n = t + t;
			return dc(parseInt(n, 16) / 255, 0, 1);
		}
		if (e.length === 9) {
			let t = e.slice(7, 9);
			return dc(parseInt(t, 16) / 255, 0, 1);
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
			let t = uc(r.slice(e + 1).trim());
			return t == null ? null : dc(t, 0, 1);
		}
	}
	if (r.includes(",")) {
		let e = r.split(",").map((e) => e.trim());
		if (e.length >= 4) {
			let t = uc(e[3]);
			return t == null ? null : dc(t, 0, 1);
		}
		return 1;
	}
	return 1;
}
function uc(e) {
	if (!e) return null;
	if (e.endsWith("%")) {
		let t = parseFloat(e);
		return Number.isNaN(t) ? null : t / 100;
	}
	let t = parseFloat(e);
	return Number.isNaN(t) ? null : t;
}
function dc(e, t, n) {
	return Math.min(n, Math.max(t, e));
}
var fc = (e) => !e || e == null ? 0 : (lc?.(e) || 0) > .1, pc = (e, t = 1e3, ...n) => {
	sc(async () => {
		if (!(!e || typeof e != "function")) for (;;) await Promise.try(e, ...n), await new Promise((e) => setTimeout(e, t)), await new Promise((e) => sc(e, 100)), await new Promise((e) => requestAnimationFrame(e));
	}, 1e3);
}, mc = () => {
	if (typeof document > "u") return null;
	try {
		let e = document.querySelectorAll("[data-shell]");
		for (let t of e) {
			let e = t.shadowRoot;
			if (!e) continue;
			let n = e.querySelector(".app-shell__nav, .app-shell__toolbar");
			if (!n) continue;
			let r = getComputedStyle(n).backgroundColor;
			if (fc(r)) return r;
		}
	} catch {}
	return null;
}, hc = () => {
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
		let n = gc(Math.floor(t.left + Math.min(40, t.width * .2)), Math.floor(t.top + t.height * .5));
		return fc(n) ? n : null;
	} finally {
		e.remove();
	}
}, gc = (e, t, n = null) => {
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
	}).sort((e, t) => Math.sign(t.zIndex - e.zIndex)).filter(({ color: e }) => fc(e));
	return r?.[0]?.element instanceof HTMLElement && r?.[0]?.color || "transparent";
}, _c = (e) => {
	let t = e?.getBoundingClientRect();
	if (t) {
		let n = .5 * (Re?.() || 1);
		return gc((t.left + t.right) * n, (t.top + t.bottom) * n, e);
	}
}, vc = (e = document.documentElement) => {
	let t = e?.querySelector?.("meta[data-theme-color]") ?? e?.querySelector?.("meta[name=\"theme-color\"]");
	!t && e == document.documentElement && (t = document.createElement("meta"), t.setAttribute("name", "theme-color"), t.setAttribute("data-theme-color", ""), t.setAttribute("content", "transparent"), document.head.appendChild(t));
	let n = mc(), r = n ? null : hc(), i = Math.max(8, Math.floor(globalThis.innerWidth * .12)), a = !n && !r ? gc(i, 20) : null, o = n || r || (a && fc(a) ? a : null);
	o && o !== "transparent" && (t || window?.electronBridge) && e == document.documentElement && t?.setAttribute?.("content", o);
}, yc = (e = document.documentElement) => {
	e.querySelectorAll("body, body > *, body > * > *").forEach((e) => {
		e && _c(e);
	});
}, bc = (e = document.documentElement) => {
	let t = "__LURE_DYNAMIC_THEME_STARTED__";
	if (globalThis?.[t]) return;
	globalThis[t] = !0, matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({}) => yc(e));
	let n = () => {
		vc(e), yc(e);
	};
	E(e, "u2-appear", () => sc(n, 100)), E(e, "u2-hidden", () => sc(n, 100)), E(e, "u2-theme-change", () => sc(n, 100)), E(window, "load", () => sc(n, 100)), E(document, "visibilitychange", () => sc(n, 100)), pc(n, 500);
}, xc = async () => {
	vc(), yc();
}, Sc = () => {
	typeof document > "u" || globalThis?.__LURE_AUTO_THEME_ENGINE__ === !0 && (requestAnimationFrame(() => xc?.()), bc?.());
};
Sc();
//#endregion
//#region ../../projects/lur.e/src/utils/opfs/OPFS.uniform.worker.ts?worker
function Cc(e) {
	return new Worker("/assets/OPFS.uniform.worker-DZLd9eQQ.js", { name: e?.name });
}
//#endregion
//#region ../../projects/lur.e/src/utils/opfs/OPFS.ts
var wc = null, Tc = typeof ServiceWorkerGlobalScope < "u" && self instanceof ServiceWorkerGlobalScope, Ec = "opfs-sw-bridge-v1", Dc = /* @__PURE__ */ new Map(), Oc = null, kc = null, Ac = 0, jc = () => {
	if (!Tc) return null;
	if (kc) return kc;
	try {
		return typeof BroadcastChannel > "u" ? null : (kc = new BroadcastChannel(Ec), kc);
	} catch {
		return null;
	}
}, Mc = (e, t = {}, n = 2500) => {
	let r = jc();
	if (!r) return Promise.reject(/* @__PURE__ */ Error("SW OPFS bridge is unavailable"));
	let i = `sw-opfs-${Date.now()}-${++Ac}`;
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
}, Nc = () => Oc || (Oc = new Promise(async (e) => {
	if (typeof Worker < "u" && !Tc) try {
		let t = await he({
			name: "opfs-worker",
			script: Cc
		});
		wc = new ge("opfs-worker", async () => t, {
			timeout: 3e4,
			retries: 3,
			batching: !0,
			compression: !1
		}), e(wc);
	} catch (t) {
		console.warn("OPFSUniformWorker instantiation failed, falling back to main thread...", t), wc = null, e(null);
	}
	else wc = null, e(null);
}), Oc), Z = {
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
}, Pc = (e, t = {}, n = []) => Tc && Z[e] ? Mc(e, t).catch(() => Z[e](t)) : new Promise(async (n, r) => {
	try {
		let i = await Nc();
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
}), Fc = (e) => {
	if (typeof e != "string") return e;
	e = e?.trim?.() || e, e?.endsWith?.("/") || (e = e?.trim?.()?.split?.("/")?.slice(0, -1)?.join?.("/")?.trim?.() || e);
	let t = e?.trim()?.endsWith("/") ? e : e + "/";
	return t?.startsWith("/") ? t : "/" + t;
}, Ic = {
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
}, Lc = new Map([
	["/", async () => await navigator?.storage?.getDirectory?.()],
	["/user/", async () => await navigator?.storage?.getDirectory?.()],
	["/assets/", async () => (console.warn("Backend related API not implemented!"), null)]
]), Rc = /* @__PURE__ */ new Map();
async function zc(e, t = "") {
	(e == null || e == null || e?.trim?.()?.length == 0) && (e = "/user/");
	let n = typeof e == "string" ? e?.trim?.()?.replace?.(/^\//, "")?.trim?.()?.split?.("/")?.filter?.((e) => !!e?.trim?.())?.at?.(0) : null;
	if (n && (typeof localStorage < "u" && JSON.parse(localStorage?.getItem?.("opfs.mounted") || "[]").includes(n) && (e = Rc?.get(n)), e ||= await Lc?.get?.(`/${n}/`)?.() ?? await navigator.storage.getDirectory()), e instanceof FileSystemDirectoryHandle) return e;
	let r = t?.trim?.() || "/", i = r.startsWith("/") ? r : "/" + r, a = null, o = 0;
	for (let [e, t] of Lc.entries()) i.startsWith(e) && e.length > o && (a = t, o = e.length);
	try {
		return (a ? await a() : null) || await navigator?.storage?.getDirectory?.();
	} catch (e) {
		return console.warn("Failed to resolve root handle, falling back to OPFS root:", e), await navigator?.storage?.getDirectory?.();
	}
}
function Bc(e = "", t) {
	if (!t?.trim()) return e;
	let n = t.trim();
	if (n.startsWith("/")) return n;
	let r = e.split("/").filter((e) => e?.trim()), i = n.split("/").filter((e) => e?.trim());
	for (let e of i) if (e === ".") continue;
	else e === ".." ? r.length > 0 && r.pop() : r.push(e);
	return "/" + r.join("/");
}
async function Vc(e, t, n = "") {
	let r = Bc(n, t);
	return {
		rootHandle: await zc(e, r),
		resolvedPath: r
	};
}
function Q(e, t, n) {
	return e?.(t, n), null;
}
function $(e, t) {
	console.trace(`[${e}] ${t}`);
}
function Hc(e) {
	return e?.trim()?.endsWith?.("/") ? "directory" : "file";
}
function Uc(e) {
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
var Wc = (e) => e?.trim?.()?.split?.(".")?.[1]?.trim?.()?.length > 0;
async function Gc(e, t, { create: n = !1, basePath: r = "" } = {}, i = $) {
	try {
		let { rootHandle: i, resolvedPath: a } = await Vc(e, t, r), o = b(a).split("/").filter((e) => !!e?.trim?.());
		o.length > 0 && Wc(o[o.length - 1]?.trim?.()) && o?.pop?.();
		let s = i;
		if (o?.length > 0) {
			for (let e of o) if (s = await s?.getDirectoryHandle?.(e, { create: n }), !s) break;
		}
		return s;
	} catch (e) {
		return Q(i, "error", `getDirectoryHandle: ${e.message}`);
	}
}
async function Kc(e, t, { create: n = !1, basePath: r = "" } = {}, i = $) {
	try {
		let { rootHandle: a, resolvedPath: o } = await Vc(e, t, r), s = b(o), c = s.split("/").filter((e) => !!e?.trim?.());
		if (c?.length == 0) return null;
		let l = c.length > 0 ? c[c.length - 1]?.trim?.()?.replace?.(/\s+/g, "-") : "", u = c.length > 1 ? c?.slice(0, -1)?.join?.("/")?.trim?.()?.replace?.(/\s+/g, "-") : "";
		return s?.trim?.()?.endsWith?.("/") ? null : (await Gc(a, u, {
			create: n,
			basePath: r
		}, i))?.getFileHandle?.(l, { create: n });
	} catch (e) {
		return Q(i, "error", `getFileHandle: ${e.message}`);
	}
}
async function qc(e, t, n = {}, r = $) {
	try {
		let { rootHandle: i, resolvedPath: a } = await Vc(e, t, n?.basePath || "");
		if (Hc(a) == "directory") {
			let e = await Gc(i, a?.trim?.()?.replace?.(/\/$/, ""), n, r);
			if (e) return {
				type: "directory",
				handle: e
			};
		} else {
			let e = await Kc(i, a, n, r);
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
var Jc = /* @__PURE__ */ new Map();
function Yc(e, n, r = { create: !1 }, i = $) {
	let a = "", o = U(/* @__PURE__ */ new Map()), s = (async () => {
		try {
			let { rootHandle: t, resolvedPath: i } = await Vc(e, n, r?.basePath || "");
			return a = `${t?.name || "root"}:${i}`, {
				rootHandle: t,
				resolvedPath: i
			};
		} catch {
			return {
				rootHandle: null,
				resolvedPath: ""
			};
		}
	})().then(async ({ rootHandle: e, resolvedPath: n }) => {
		if (!n) return null;
		let s = Jc.get(a);
		if (s) return s.refCount++, o = s.mapCache, s;
		let c = U(/* @__PURE__ */ new Map());
		o = c;
		let l = t(), u = Gc(e, n, r, i), d = async () => {
			let t = await Pc("readDirectory", {
				rootId: "",
				path: b(n),
				create: r.create
			}, e ? [e] : []);
			if (!t) return c;
			let i = new Map(t);
			for (let e of c.keys()) i.has(e) || c.delete(e);
			for (let [e, t] of i) c.has(e) || c.set(e, t);
			return c;
		}, f = () => {
			Pc("unobserve", { id: l }), Dc.delete(l), Jc.delete(a);
		};
		Dc.set(l, (e) => {
			for (let t of e) t?.name && (t.type === "modified" || t.type === "created" || t.type === "appeared" ? c.set(t.name, t.handle) : (t.type === "deleted" || t.type === "disappeared") && c.delete(t.name));
		}), Pc("observe", {
			rootId: "",
			path: b(n),
			id: l
		}, e ? [e] : []), d();
		let p = {
			mapCache: c,
			dirHandle: u,
			resolvePath: n,
			observationId: l,
			refCount: 1,
			cleanup: f,
			updateCache: d
		};
		Jc.set(a, p);
		let m = await Promise.all(await Array.fromAsync((await u)?.entries?.() ?? []));
		for (let [e, t] of m) c.has(e) || c.set(e, t);
		return {
			...p,
			mapCache: c
		};
	}), c = !1, l = () => {
		c || (c = !0, s.then((e) => {
			e && (e.refCount--, e.refCount <= 0 && e.cleanup());
		}).catch(console.warn));
	}, u = new Proxy(function() {}, {
		get(e, t) {
			if (!(t === Symbol.toStringTag || t === Symbol.iterator || t === "toString" || t === "valueOf" || t === "inspect" || t === "constructor" || t === "__proto__" || t === "prototype")) {
				if (t === "dispose") return l;
				if (t === "getMap") return () => o;
				if (t === "entries") return () => o.entries();
				if (t === "keys") return () => o.keys();
				if (t === "values") return () => o.values();
				if (t === Symbol.iterator) return () => o[Symbol.iterator]();
				if (t === "size") return o.size;
				if (t === "has") return (e) => o.has(e);
				if (t === "get") return (e) => o.get(e);
				if (t === "entries") return () => o.entries();
				if (t === "keys") return () => o.keys();
				if (t === "values") return () => o.values();
				if (t === "refresh") return () => s.then((e) => e?.updateCache?.()).then(() => u);
				if (t === "then" || t === "catch" || t === "finally") {
					let e = s.then(() => !0);
					return e[t].bind(e);
				}
				return (...e) => s.then(async (n) => {
					if (!n) return;
					let r = await n.dirHandle, i = r?.[t];
					return typeof i == "function" ? i.apply(r, e) : i;
				});
			}
		},
		ownKeys() {
			return Array.from(o.keys());
		},
		getOwnPropertyDescriptor() {
			return {
				enumerable: !0,
				configurable: !0
			};
		}
	});
	return u;
}
async function Xc(e, t, n = {}, r = $) {
	try {
		let { rootHandle: r, resolvedPath: i } = await Vc(e, t, n?.basePath || "");
		return await Pc("readFile", {
			rootId: "",
			path: b(i),
			type: "blob"
		}, r ? [r] : []);
	} catch (e) {
		return Q(r, "error", `readFile: ${e.message}`);
	}
}
async function Zc(e, t, n, r = $) {
	if (n instanceof FileSystemFileHandle && (n = await n.getFile()), n instanceof FileSystemDirectoryHandle) {
		let r = await Gc(await zc(e), t + (t?.trim?.()?.endsWith?.("/") ? "" : "/") + (n?.name || "")?.trim?.()?.replace?.(/\s+/g, "-"), { create: !0 });
		return await al(n, r, {})?.catch?.(console.warn.bind(console));
	} else try {
		let { rootHandle: r, resolvedPath: i } = await Vc(e, t, "");
		return await Pc("writeFile", {
			rootId: "",
			path: b(i),
			data: n
		}, r ? [r] : []) !== !1;
	} catch (e) {
		return Q(r, "error", `writeFile: ${e.message}`);
	}
}
async function Qc(e, t, n = { recursive: !0 }, r = $) {
	try {
		let { rootHandle: r, resolvedPath: i } = await Vc(e, t, n?.basePath || ""), a = ce(i), o = !1;
		for (let e of a) if (o = await Pc("remove", {
			rootId: "",
			path: e,
			recursive: n.recursive
		}, r ? [r] : []), o !== !1) return !0;
		return o !== !1;
	} catch (e) {
		return Q(r, "error", `removeFile: ${e.message}`);
	}
}
async function $c(e, t, n = {}, r = $) {
	try {
		return Qc(e, t, {
			recursive: !0,
			...n
		}, r);
	} catch (e) {
		return Q(r, "error", `remove: ${e.message}`);
	}
}
var el = async (e, t) => {
	if (e instanceof FileSystemFileHandle && (e = await e.getFile()), typeof e == "string" && (e = await tl(e)), t ??= e?.name, !t) return;
	if ("msSaveOrOpenBlob" in self.navigator && self.navigator.msSaveOrOpenBlob(e, t), e instanceof FileSystemDirectoryHandle) {
		let t = await showDirectoryPicker?.({ mode: "readwrite" })?.catch?.(console.warn.bind(console));
		return e && t ? (t = await Gc(t, e?.name || "", { create: !0 })?.catch?.(console.warn.bind(console)) || t, await al(e, t, {})?.catch?.(console.warn.bind(console))) : void 0;
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
}, tl = async (e = "", t = !1) => {
	let n = (typeof e == "string" ? e : e?.url || "").trim();
	if (!n) return null;
	let r = n;
	try {
		r = new URL(n, location?.origin || self?.location?.origin || "http://localhost").pathname || n;
	} catch {}
	let i = r?.trim?.() || "/";
	if (i?.startsWith?.("/user")) {
		let e = b(i), n = await navigator?.storage?.getDirectory?.();
		if (!n) return null;
		let r = await Kc(n, e, { create: !!t }).catch(() => null);
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
}, nl = async (e, n = "/user/"?.trim?.()?.replace?.(/\s+/g, "-"), r) => {
	let i = await zc(null), a = Fc(b(n))?.replace?.("/user", "")?.trim?.();
	e = e instanceof File ? e : new File([e], t() + "." + (e?.type?.split?.("/")?.[1] || "tmp"));
	let o = a + (e?.name || "wallpaper")?.trim?.()?.replace?.(/\s+/g, "-");
	return await Zc(i, o, e), r?.set?.("/user" + o?.trim?.()?.replace?.(/\s+/g, "-"), e), "/user" + o?.trim?.();
}, rl = async (e = "/user/"?.trim?.()?.replace?.(/\s+/g, "-"), t) => {
	let n = "showOpenFilePicker";
	return e = b(e), (window?.[n]?.bind?.(window) ?? (await import("./showOpenFilePicker-Bds7q5gH.js"))?.[n])({
		...Ic,
		multiple: !0
	})?.then?.(async (n = []) => {
		for (let r of n) await nl(r instanceof File ? r : await r?.getFile?.(), e, t);
	});
}, il = typeof Image < "u" ? new Image() : null;
if (il) {
	il.decoding = "async", il.width = 24, il.height = 24;
	try {
		il.src = URL.createObjectURL(new Blob(["<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 384 512\"><!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--><path d=\"M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z\"/></svg>"], { type: "image/svg+xml" }));
	} catch {}
}
var al = async (e, t, n = {}, r = $) => Pc("copy", {
	from: e,
	to: t
}, [e, t]), ol = (e, t = "/user/", n = null, r) => {
	let i = [], a = Array.from(e?.items ?? []), o = Array.from(e?.files ?? []), s = Array.isArray(e) ? e : [...e?.[Symbol.iterator] ? e : [e]];
	return Promise.try(async () => {
		let c = await zc(n), l = async (e) => {
			let n;
			if (e.kind === "file" || e.kind === "directory") try {
				n = await e.getAsFileSystemHandle?.();
			} catch {}
			if (n) {
				if (n.kind === "directory") {
					let e = await Gc(c, t + (n.name || "").trim().replace(/\s+/g, "-"), { create: !0 });
					e && i.push(al(n, e, { create: !0 }));
				} else {
					let e = await n.getFile(), a = t + (e.name || n.name).trim().replace(/\s+/g, "-");
					i.push(Zc(c, a, e).then(() => r?.(e, a)));
				}
				return;
			}
			if (e.kind === "file" || e instanceof File) {
				let n = e instanceof File ? e : e.getAsFile();
				if (n) {
					let e = t + n.name.trim().replace(/\s+/g, "-");
					i.push(Zc(c, e, n).then(() => r?.(n, e)));
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
					let n = await qc(c, e);
					if (n?.handle) {
						let i = e.split("/").filter(Boolean).pop();
						if (n.type === "directory") {
							let e = await Gc(c, t + i, { create: !0 });
							await al(n.handle, e, { create: !0 });
						} else {
							let e = await n.handle.getFile(), a = t + i;
							await Zc(c, a, e), r?.(e, a);
						}
					}
				}));
			} else i.push(Promise.try(async () => {
				let e = await tl(n);
				if (e) {
					let n = t + e.name;
					await Zc(c, n, e), r?.(e, n);
				}
			}));
		}
		if (s?.[0] instanceof ClipboardItem) {
			for (let e of s) for (let n of e.types) if (n.startsWith("image/") || n.startsWith("text/")) {
				let a = await e.getType(n), o = n.split("/")[1].split("+")[0] || "txt", s = new File([a], `clipboard-${Date.now()}.${o}`, { type: n }), l = t + s.name;
				i.push(Zc(c, l, s).then(() => r?.(s, l)));
			}
		}
		await Promise.allSettled(i).catch(console.warn.bind(console));
	});
}, sl = "application/octet-stream", cl = /^data:(?<mime>[^;,]+)?(?<params>(?:;[^,]*)*?),(?<data>[\s\S]*)$/i;
function ll() {
	return typeof Uint8Array.fromBase64 == "function";
}
function ul(e) {
	try {
		return decodeURIComponent(e);
	} catch {
		return e;
	}
}
function dl(e) {
	return /%[0-9A-Fa-f]{2}/.test(e) || e.includes("+");
}
function fl(e) {
	let t = e.buffer;
	if (t instanceof ArrayBuffer) return t.slice(e.byteOffset, e.byteOffset + e.byteLength);
	let n = new ArrayBuffer(e.byteLength);
	return new Uint8Array(n).set(e), n;
}
function pl(e) {
	let t = (e || "").trim();
	if (!t.toLowerCase().startsWith("data:")) return null;
	let n = t.match(cl);
	return n?.groups ? {
		mimeType: (n.groups.mime || sl).trim() || sl,
		isBase64: (n.groups.params || "").toLowerCase().includes(";base64"),
		data: n.groups.data ?? ""
	} : null;
}
function ml(e, t = {}) {
	let n = t.alphabet || "base64", r = t.lastChunkHandling || "loose", i = (e || "").trim();
	if (ll()) return Uint8Array.fromBase64(i, {
		alphabet: n,
		lastChunkHandling: r
	});
	let a = n === "base64url" ? i.replace(/-/g, "+").replace(/_/g, "/") : i, o = (4 - a.length % 4) % 4, s = a + "=".repeat(o), c = typeof atob == "function" ? atob(s) : "", l = new Uint8Array(c.length);
	for (let e = 0; e < c.length; e++) l[e] = c.charCodeAt(e);
	return l;
}
async function hl(e) {
	let t = await e.arrayBuffer();
	return new Uint8Array(t);
}
function gl(e) {
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
function _l(e) {
	try {
		return typeof URL > "u" ? !1 : typeof URL.canParse == "function" ? URL.canParse(e) : (new URL(e), !0);
	} catch {
		return !1;
	}
}
function vl(e) {
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
function yl(e) {
	let t = 2166136261;
	for (let n = 0; n < e.length; n++) t ^= e[n], t = Math.imul(t, 16777619);
	return (t >>> 0).toString(16).padStart(8, "0").repeat(8);
}
async function bl(e) {
	try {
		let t = globalThis.crypto?.subtle;
		if (!t) return yl(e);
		let n = await t.digest("SHA-256", e), r = new Uint8Array(n);
		return Array.from(r, (e) => e.toString(16).padStart(2, "0")).join("");
	} catch {
		return yl(e);
	}
}
function xl(e) {
	return gl(e).isBase64;
}
async function Sl(e, t = {}) {
	let n = t.maxBytes ?? 50 * 1024 * 1024, r = (t.namePrefix || "asset").trim() || "asset", i = t.preserveFileName ?? !1, a = "text", o, s = null;
	if (e instanceof File) a = "file", s = e, o = t.mimeType && t.mimeType !== e.type ? new Blob([await e.arrayBuffer()], { type: t.mimeType }) : e;
	else if (e instanceof Blob) a = "blob", o = t.mimeType && t.mimeType !== e.type ? new Blob([await e.arrayBuffer()], { type: t.mimeType }) : e;
	else {
		let r = (e instanceof URL ? e.toString() : String(e ?? "")).trim(), i = pl(r), s = t.uriComponent || dl(r) ? ul(r) : r;
		a = i ? "data-url" : _l(r) ? "url" : xl(r) ? "base64" : s !== r && (pl(s) || xl(s) || _l(s)) ? "uri" : "text", o = await wl(a === "uri" ? s : r, {
			mimeType: t.mimeType,
			uriComponent: t.uriComponent,
			isBase64: a === "base64" ? !0 : void 0,
			maxBytes: n
		});
	}
	let c = await hl(o);
	if (c.byteLength > n) throw Error(`Data too large: ${c.byteLength} bytes`);
	let l = await bl(c), u = (t.mimeType || o.type || sl).trim() || sl, d = vl(u), f = t.filename || `${r}-${l.slice(0, 16)}.${d}`, p = i && s?.name ? s.name : f, m = s && i && !t.mimeType ? s : new File([o], p, { type: u });
	return {
		hash: l,
		name: m.name,
		type: m.type || u,
		size: m.size,
		source: a,
		file: m
	};
}
async function Cl(e, t = {}) {
	let n = t.maxBytes ?? 50 * 1024 * 1024, r = (e ?? "").trim(), i = pl(r);
	if (i) {
		let e = t.mimeType || i.mimeType || sl, r = t.uriComponent || dl(i.data) ? ul(i.data) : i.data;
		if (t.isBase64 ?? i.isBase64) {
			let i = ml(r, {
				alphabet: t.base64?.alphabet || "base64",
				lastChunkHandling: t.base64?.lastChunkHandling || "loose"
			});
			if (i.byteLength > n) throw Error(`Decoded data too large: ${i.byteLength} bytes`);
			let a = new Blob([fl(i)], { type: e });
			return t.asFile ? new File([a], t.filename || "file", { type: e }) : a;
		}
		let a = new Blob([r], { type: e });
		return t.asFile ? new File([a], t.filename || "file", { type: e }) : a;
	}
	try {
		if (typeof URL < "u" && URL.canParse?.(r)) {
			let e = await (await fetch(r)).blob(), n = t.mimeType || e.type || sl, i = e.type === n ? e : new Blob([await e.arrayBuffer()], { type: n });
			return t.asFile ? new File([i], t.filename || "file", { type: n }) : i;
		}
	} catch {}
	let a = t.uriComponent || dl(r) ? ul(r) : r, o = gl(a), s = t.isBase64 ?? o.isBase64, c = t.mimeType || (s ? sl : "text/plain;charset=utf-8");
	if (s) {
		let e = ml(a, {
			alphabet: t.base64?.alphabet || o.alphabet,
			lastChunkHandling: t.base64?.lastChunkHandling || "loose"
		});
		if (e.byteLength > n) throw Error(`Decoded data too large: ${e.byteLength} bytes`);
		let r = new Blob([fl(e)], { type: c });
		return t.asFile ? new File([r], t.filename || "file", { type: c }) : r;
	}
	let l = new Blob([a], { type: c });
	return t.asFile ? new File([l], t.filename || "file", { type: c }) : l;
}
async function wl(e, t = {}) {
	return await Cl(e, {
		...t,
		asFile: !1
	});
}
//#endregion
//#region ../../projects/lur.e/src/utils/opfs/WriteFileSmart-v2.ts
var Tl = null, El = () => (Tl ||= import("./src-BOVkPDgs.js").then((e) => ({
	readFile: e.readFile,
	writeFile: e.writeFile
})), Tl), Dl = (e, t = !0) => {
	let n = String(e || "").trim();
	return t && (n = n.toLowerCase()), n = n.replace(/\s+/g, "-"), n = n.replace(/[^a-z0-9_.\-+#&]/g, "-"), n = n.replace(/-+/g, "-"), n;
}, Ol = (e = "") => e ? e.includes("json") ? "json" : e.includes("markdown") ? "md" : e.includes("plain") ? "txt" : e === "image/jpeg" || e === "image/jpg" ? "jpg" : e === "image/png" ? "png" : e.startsWith("image/") ? e.split("/").pop() || "" : e.includes("html") ? "html" : "" : "", kl = (e) => String(e || "").split("/").filter(Boolean), Al = (e) => e.endsWith("/") ? e : e + "/", jl = (e, t = !0) => (t ? "/" : "") + e.filter(Boolean).join("/"), Ml = (e) => jl(kl(e).map((e) => Dl(e))), Nl = [
	"id",
	"_id",
	"key",
	"slug",
	"name"
], Pl = (e) => Object.prototype.toString.call(e) === "[object Object]";
function Fl(e, t) {
	let n = Array.isArray(t.arrayKey) ? t.arrayKey : t.arrayKey ? [t.arrayKey] : Nl, r = [], i = /* @__PURE__ */ new Set(), a = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set();
	for (let t of e) if (t != null) if (Pl(t)) {
		let e;
		for (let r of n) if (r in t && t[r] != null) {
			e = String(t[r]);
			break;
		}
		if (e != null) a.has(e) || (a.set(e, t), r.push(t));
		else {
			let e = Ll(t);
			o.has(e) || (o.add(e), r.push(t));
		}
	} else if (Array.isArray(t)) {
		let e = Ll(t);
		o.has(e) || (o.add(e), r.push(t));
	} else i.has(t) || (i.add(t), r.push(t));
	return r;
}
function Il(e, t, n) {
	if (Array.isArray(e) && Array.isArray(t)) switch (n.arrayStrategy) {
		case "replace": return t.slice();
		case "concat": return e.concat(t);
		default: return Fl(e.concat(t), { arrayKey: n.arrayKey });
	}
	if (Pl(e) && Pl(t)) {
		let r = { ...e };
		for (let i of Object.keys(t)) i in e ? r[i] = Il(e[i], t[i], n) : r[i] = t[i];
		return r;
	}
	return t;
}
function Ll(e) {
	if (!Pl(e)) return JSON.stringify(e);
	let t = Object.keys(e).sort(), n = {};
	for (let r of t) n[r] = e[r];
	return JSON.stringify(n);
}
async function Rl(e) {
	return await e.text();
}
async function zl(e, t) {
	try {
		let { readFile: n } = await El(), r = await n(e, t)?.catch?.(console.warn.bind(console));
		if (!r) return null;
		let i = await Rl(r);
		return i?.trim() ? C.parse(i) : null;
	} catch {
		return null;
	}
}
var Bl = async (e, t, n, r = {}) => {
	let { writeFile: i } = await El(), { forceExt: a, ensureJson: o, toLower: s = !0, sanitize: c = !0, mergeJson: l, arrayStrategy: u = "union", arrayKey: d, jsonSpace: f = 2 } = r, p = String(t || "").trim(), m = p.endsWith("/"), ee = !m && kl(p).length > 0 && p.includes("."), h = m ? p : ee ? p.split("/").slice(0, -1).join("/") : p, g = ee ? p.split("/").pop() || "" : n?.name || "";
	h ||= "/", g ||= Date.now() + "";
	let _ = g.lastIndexOf("."), te = _ > 0 ? g.slice(0, _) : g, v = a || (o ? "json" : _ > 0 ? g.slice(_ + 1) : Ol(n?.type || "")) || "";
	c && (h = Ml(h), te = Dl(te, s));
	let y = v ? `${te}.${v}` : te, ne = Al(h) + y;
	if (l !== !1 && (o || v.toLowerCase() === "json" || n?.type === "application/json")) try {
		let t;
		if (n instanceof File || n instanceof Blob) {
			let e = await Rl(n);
			t = e?.trim() ? C.parse(e) : {};
		} else t = n;
		let r = await zl(e, ne)?.catch?.(console.warn.bind(console)), a = r == null ? t : Il(r, t, {
			arrayStrategy: u,
			arrayKey: d
		}), o = JSON.stringify(a, void 0, f), s = await i(e, ne, new File([o], y, { type: "application/json" }))?.catch?.(console.warn.bind(console));
		return typeof document < "u" && document?.dispatchEvent?.(new CustomEvent("rs-fs-changed", {
			detail: s,
			bubbles: !0,
			composed: !0,
			cancelable: !0
		})), s;
	} catch (e) {
		console.warn("writeFileSmart JSON merge failed, falling back to raw write:", e);
	}
	let re;
	if (n instanceof File) if (n.name === y) re = n;
	else {
		let e = n.type || (v ? `application/${v}` : "application/octet-stream"), t = await n.arrayBuffer();
		re = new File([t], y, { type: e });
	}
	else {
		let e = n.type || (v ? `application/${v}` : "application/octet-stream");
		re = new File([await n.arrayBuffer()], y, { type: e });
	}
	let ie = await i(e, ne, re)?.catch?.(console.warn.bind(console));
	return typeof document < "u" && document?.dispatchEvent?.(new CustomEvent("rs-fs-changed", {
		detail: ie,
		bubbles: !0,
		composed: !0,
		cancelable: !0
	})), ie;
}, Vl = (e = "", t = "") => {
	let n = t.endsWith("/") ? t : `${t}/`;
	return e.startsWith(n);
}, Hl = new BroadcastChannel("rs-fs"), Ul = /* @__PURE__ */ new Map();
Hl.addEventListener("close", () => Ul.clear()), Hl.addEventListener("message", (e) => {
	let t = e?.data;
	if (!t || t.type !== "commit-result" && t.type !== "commit-to-clipboard") return;
	let n = t?.results ?? [];
	if (!(!Array.isArray(n) || !n.length)) {
		for (let [e, t] of Ul.entries()) if (t.size && n.some((t) => Vl(t?.path, e))) for (let e of t) try {
			e();
		} catch (e) {
			console.warn(e);
		}
	}
});
//#endregion
export { Gs as $, Gr as $n, Fa as $t, Yc as A, wi as An, E as Ar, Uo as At, xc as B, ci as Bn, Oo as Bt, Uc as C, Di as Cn, Tt as Cr, as as Ct, Wc as D, xi as Dn, Be as Dr, Zo as Dt, ol as E, Ci as En, Ve as Er, is as Et, Qc as F, fi as Fn, Lo as Ft, cc as G, _i as Gn, lo as Gt, yc as H, si as Hn, wo as Ht, Vc as I, hi as In, No as It, oc as J, qr as Jn, Ha as Jt, gc as K, gi as Kn, Ua as Kt, zc as L, oi as Ln, Ao as Lt, tl as M, bi as Mn, be as Mr, Ho as Mt, Xc as N, yi as Nn, Bo as Nt, Lc as O, G as On, Pe as Or, Jo as Ot, $c as P, Ti as Pn, Vo as Pt, Ks as Q, Qr as Qn, Ia as Qt, rl as R, li as Rn, To as Rt, qc as S, Ai as Sn, xt as Sr, ns as St, Q as T, vi as Tn, Ue as Tr, Qo as Tt, vc as U, mi as Un, uo as Ut, Sc as V, ui as Vn, Eo as Vt, bc as W, pi as Wn, oo as Wt, rc as X, $r as Xn, Ra as Xt, ic as Y, Zr as Yn, Va as Yt, qs as Z, ei as Zn, Ma as Zt, Nc as _, zi as _n, tn as _r, Cs as _t, Sl as a, Ii as an, Sr as ar, Js as at, Gc as b, Mi as bn, wt as br, hs as bt, Cl as c, Bi as cn, Sn as cr, ks as ct, $ as d, Ni as dn, dn as dr, Is as dt, ma as en, Kr as er, Us as et, Hc as f, Ri as fn, fn as fr, Rs as ft, nl as g, K as gn, nn as gr, Os as gt, el as h, q as hn, an as hr, ws as ht, xl as i, Yi as in, U as ir, Ys as it, Pc as j, Si as jn, Fe as jr, qo as jt, Bc as k, Ei as kn, xe as kr, Go as kt, al as l, Fi as ln, Cn as lr, Fs as lt, Jc as m, qi as mn, rn as mr, _s as mt, hl as n, Xi as nn, H as nr, Ws as nt, pl as o, Pi as on, wr as or, Vs as ot, Z as p, Wi as pn, un as pr, Ls as pt, _c as q, di as qn, Wa as qt, ml as r, Ji as rn, V as rr, Bs as rt, wl as s, Vi as sn, yr as sr, As as st, Bl as t, J as tn, W as tr, Hs as tt, Rc as u, Ui as un, N as ur, Ps as ut, Ic as v, Hi as vn, en as vr, ds as vt, il as w, Oi as wn, _t as wr, rs as wt, Kc as x, ji as xn, bt as xr, ps as xt, Fc as y, Ki as yn, Yt as yr, ms as yt, Zc as z, ti as zn, ko as zt };
