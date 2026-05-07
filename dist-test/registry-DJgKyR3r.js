import { c as e, d as t, u as n } from "./UniformInterop-C0jUw_HW.js";
import { c as r, o as i, t as a } from "./messaging-jUZ_A071.js";
import { r as o, t as s } from "./channel-mixin-CGqsdyBK.js";
//#region ../../projects/subsystem/src/boot/shell-preference.ts
var c = "rs-boot-shell-last-active";
function l(e) {
	return e === "faint" ? "tabbed" : e === "base" || e === "minimal" || e === "window" || e === "tabbed" || e === "environment" || e === "content" || e === "immersive" ? e : "minimal";
}
function u(e) {
	try {
		let t = {
			shell: l(e),
			t: Date.now()
		};
		globalThis.localStorage?.setItem(c, JSON.stringify(t));
	} catch {}
}
function d(e) {
	let t = l(e), n = () => u(t), r = () => u(t), i = globalThis;
	return i.addEventListener("focus", n), i.addEventListener("pointerdown", r, {
		capture: !0,
		passive: !0
	}), queueMicrotask(() => u(t)), () => {
		i.removeEventListener("focus", n), i.removeEventListener("pointerdown", r, { capture: !0 });
	};
}
//#endregion
//#region ../../projects/subsystem/src/routing/core/implicit-view-bridge.ts
function f(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	return typeof t.handleMessage == "function" && typeof t.id == "string" && t.id.trim().length > 0;
}
var p = "[data-cw-unified-pending], [data-cw-unified-mail], [data-cw-unified-defer-flush]";
function m(e) {
	if (!e?.trim()) return null;
	try {
		let t = JSON.parse(e);
		return t && typeof t == "object" ? t : null;
	} catch {
		return null;
	}
}
function h(e) {
	let t = n(String(e.destination ?? "")) || String(e.destination ?? "").trim();
	return t ? {
		id: typeof e.id == "string" ? e.id : crypto.randomUUID(),
		type: String(e.type || "content-share"),
		source: typeof e.source == "string" ? e.source : "dom-staged-unified",
		destination: t,
		contentType: typeof e.contentType == "string" ? e.contentType : void 0,
		data: e.data ?? e.payload ?? {},
		metadata: {
			timestamp: Date.now(),
			...typeof e.metadata == "object" && e.metadata ? e.metadata : {}
		}
	} : null;
}
function g(e) {
	let t = e.getAttribute("data-cw-unified-defer-flush");
	if (!t?.trim()) return null;
	let n = t.trim();
	if (n.startsWith("{")) {
		let e = m(n)?.destination;
		return typeof e == "string" ? e : null;
	}
	return n;
}
function _(e) {
	let r = g(e);
	r && (i(n(r) || t(r)).catch(() => void 0), e.removeAttribute("data-cw-unified-defer-flush"));
}
function v(e) {
	let t = m(e.getAttribute("data-cw-unified-pending"));
	if (!t) return;
	let n = h(t);
	n?.destination && (a(n.destination, n), e.removeAttribute("data-cw-unified-pending"));
}
function y(e) {
	let t = m(e.getAttribute("data-cw-unified-mail"));
	if (!t) return;
	let i = n(String(t.destination || "")) || String(t.destination || "").trim();
	i && (r({
		type: String(t.type || "dispatch"),
		destination: i,
		source: typeof t.source == "string" ? t.source : "dom-staged-mail",
		data: t.data ?? t.payload ?? {},
		contentType: typeof t.contentType == "string" ? t.contentType : void 0,
		metadata: typeof t.metadata == "object" && t.metadata ? t.metadata : {},
		purpose: Array.isArray(t.purpose) ? t.purpose : typeof t.purpose == "string" ? [t.purpose] : ["mail", "deliver"],
		op: typeof t.op == "string" ? t.op : "deliver",
		protocol: typeof t.protocol == "string" ? t.protocol : void 0
	}).catch(() => void 0), e.removeAttribute("data-cw-unified-mail"));
}
function b(e) {
	let t = /* @__PURE__ */ new Set();
	e.matches("[data-cw-unified-pending], [data-cw-unified-mail], [data-cw-unified-defer-flush]") && t.add(e);
	for (let n of e.querySelectorAll(p)) t.add(n);
	for (let e of t) e.isConnected && (_(e), v(e), y(e));
}
function x(r, a) {
	let s = a || o(String(r.id || "")), c = e(s), l = /* @__PURE__ */ new Set();
	for (let e of [s, ...c]) {
		let r = n(e) || String(e || "").trim();
		r && l.add(t(r));
	}
	(async () => {
		for (let e of l) try {
			await i(e);
		} catch {}
	})();
}
var S = /* @__PURE__ */ new WeakMap(), C = /* @__PURE__ */ new Map();
function w(e, t, n) {
	let r = !1;
	return () => {
		r || (r = !0, n(), S.delete(e), C.get(t) === e && C.delete(t));
	};
}
function T(e, n = {}) {
	if (!e.handleMessage) return () => {};
	let r = S.get(e);
	if (r) return r;
	let i = n.destination || o(String(e.id || "")), a = t(i), c = C.get(a);
	c && c !== e && S.get(c)?.();
	let l = s(e, {
		...n,
		destination: i
	});
	x(e, i);
	let u = w(e, a, l);
	return S.set(e, u), C.set(a, e), u;
}
function E(e) {
	S.get(e)?.();
}
function D(e, t) {
	let n = [e];
	for (; n.length;) {
		let e = n.pop();
		if (e.nodeType === Node.ELEMENT_NODE) {
			let r = e;
			t(r);
			let i = r.shadowRoot;
			if (i) for (let e = i.childNodes.length - 1; e >= 0; e--) n.push(i.childNodes[e]);
			for (let e = r.childNodes.length - 1; e >= 0; e--) n.push(r.childNodes[e]);
		}
	}
}
function O(e, t, n) {
	t.has(n) || (t.add(n), e.observe(n, {
		childList: !0,
		subtree: !0
	}));
}
function k(e = {}) {
	let t = e.root instanceof Document ? e.root.documentElement : e.root ?? document.documentElement;
	if (!t || typeof MutationObserver > "u") return () => {};
	let n = /* @__PURE__ */ new WeakSet(), r = () => {}, i = (e) => {
		D(e, (e) => {
			f(e) && (e.isConnected || E(e));
		});
	}, a = new MutationObserver((e) => {
		for (let t of e) t.addedNodes.forEach(r), t.removedNodes.forEach(i);
	});
	return r = (e) => {
		if (e.nodeType === Node.ELEMENT_NODE) {
			let t = e;
			t.isConnected && b(t);
		}
		D(e, (e) => {
			e.shadowRoot && O(a, n, e.shadowRoot), !(!e.isConnected || !f(e)) && T(e);
		});
	}, O(a, n, t), r(t), () => {
		a.disconnect(), D(t, (e) => {
			f(e) && E(e);
		});
	};
}
var A = {
	viewer: "viewer",
	editor: "editor",
	workcenter: "workcenter",
	explorer: "explorer",
	airpad: "airpad",
	settings: "settings",
	history: "history",
	home: "home",
	print: "print"
}, j = Object.entries(A).filter(([, e]) => !!e).map(([e]) => e), M = (e) => !!A[e];
//#endregion
//#region ../../projects/subsystem/src/routing/core/registry.ts
function N(e) {
	if (e instanceof HTMLElement) return e;
	let t = e;
	if (t && typeof t.render == "function" && typeof t.id == "string") return t;
	throw Error("View factory must return an HTMLElement or a legacy view with render() and id");
}
var P = new class {
	shells = /* @__PURE__ */ new Map();
	loadedShells = /* @__PURE__ */ new Map();
	resolveShellRegistrationKey(e) {
		return e === "base" ? "immersive" : e;
	}
	register(e) {
		this.shells.set(e.id, e);
	}
	get(e) {
		return this.shells.get(this.resolveShellRegistrationKey(e));
	}
	getAll() {
		return Array.from(this.shells.values());
	}
	async load(e, t) {
		let n = this.resolveShellRegistrationKey(e), r = this.loadedShells.get(n);
		if (r) return r;
		let i = this.shells.get(n);
		if (!i) throw Error(`Shell not found: ${n}`);
		let a = await i.loader(), o = a.default || a.createShell;
		if (typeof o != "function") throw Error(`Invalid shell module: ${n}`);
		let s = o(t);
		return this.loadedShells.set(n, s), s;
	}
	unload(e) {
		let t = this.resolveShellRegistrationKey(e), n = this.loadedShells.get(t);
		n && (n.unmount(), this.loadedShells.delete(t));
	}
	isLoaded(e) {
		return this.loadedShells.has(this.resolveShellRegistrationKey(e));
	}
	getLoaded(e) {
		return this.loadedShells.get(this.resolveShellRegistrationKey(e));
	}
}(), F = new class e {
	static isCustomElementClassCtor(e) {
		if (typeof e != "function") return !1;
		try {
			let t = e.prototype;
			return t != null && typeof HTMLElement < "u" && HTMLElement.prototype.isPrototypeOf(t);
		} catch {
			return !1;
		}
	}
	resolveViewFactory(t) {
		let n = [
			t?.default,
			t?.createView,
			t?.createAirpadView,
			t?.createWorkCenterView,
			t?.createViewerView,
			t?.createExplorerView,
			t?.createSettingsView,
			t?.createHistoryView,
			t?.createHomeView
		];
		for (let t of n) if (typeof t == "function") {
			if (e.isCustomElementClassCtor(t)) {
				let e = t;
				return ((t) => new e(t));
			}
			return t;
		}
		let r = Object.values(t || {});
		for (let e of r) if (typeof e == "function" && e.prototype && typeof e.prototype.render == "function") {
			let t = e;
			return (e) => new t(e);
		}
		return null;
	}
	views = /* @__PURE__ */ new Map();
	loadedViews = /* @__PURE__ */ new Map();
	viewReceiveCleanup = /* @__PURE__ */ new Map();
	register(e) {
		this.views.set(e.id, e);
	}
	get(e) {
		return this.views.get(e);
	}
	getAll() {
		return Array.from(this.views.values());
	}
	async load(e, t) {
		let n = this.loadedViews.get(e);
		if (n) return n;
		let r = this.views.get(e);
		if (!r) throw Error(`View not found: ${e}`);
		let i = await r.loader(), a = this.resolveViewFactory(i);
		if (!a) throw Error(`Invalid view module: ${e}`);
		let o = N(await a(t)), s = this.viewReceiveCleanup.get(e);
		return s && (s(), this.viewReceiveCleanup.delete(e)), this.loadedViews.set(e, o), this.viewReceiveCleanup.set(e, T(o, {
			destination: String(e),
			componentId: `view:${e}`
		})), o;
	}
	unload(e) {
		let t = this.loadedViews.get(e);
		t?.lifecycle?.onUnmount && t.lifecycle.onUnmount();
		let n = this.viewReceiveCleanup.get(e);
		n && (n(), this.viewReceiveCleanup.delete(e)), this.loadedViews.delete(e);
	}
	isLoaded(e) {
		return this.loadedViews.has(e);
	}
	getLoaded(e) {
		return this.loadedViews.get(e);
	}
	prefetchModule(e) {
		let t = this.views.get(e);
		t && t.loader().catch(() => {});
	}
}();
function I() {
	P.register({
		id: "immersive",
		name: "Immersive",
		description: "Chromeless immersive shell (standalone pages, extensions, embedded); legacy boot id `base` aliases here.",
		loader: () => import("./src-CkOPVvEk.js")
	}), P.register({
		id: "minimal",
		name: "Minimal",
		description: "Minimal toolbar-based navigation",
		loader: () => import("./preview-yWI3X84C.js")
	}), P.register({
		id: "content",
		name: "Content",
		description: "CRX content shell with overlay-focused layering",
		loader: () => import("./src-jJR4z6hp.js")
	}), P.register({
		id: "immersive",
		name: "Immersive",
		description: "Chromeless immersive host (extensions / embedded)",
		loader: () => import("./src-CkOPVvEk.js")
	});
}
function L() {
	F.register({
		id: "viewer",
		name: "Viewer",
		icon: "eye",
		loader: () => import("./src-CEnCUADT.js")
	}), F.register({
		id: "workcenter",
		name: "Work Center",
		icon: "lightning",
		loader: () => import("./src-BS8dVNmP.js")
	}), F.register({
		id: "settings",
		name: "Settings",
		icon: "gear",
		loader: () => import("./src-DcBBwoDC.js")
	}), F.register({
		id: "history",
		name: "History",
		icon: "clock-counter-clockwise",
		loader: () => import("./src-B9JcEgnp.js")
	}), F.register({
		id: "explorer",
		name: "Explorer",
		icon: "folder",
		loader: () => import("./src-BalDn-OO.js")
	}), F.register({
		id: "airpad",
		name: "Airpad",
		icon: "hand-pointing",
		loader: () => import("./src-DNKfArm8.js").then((e) => e.t)
	}), F.register({
		id: "editor",
		name: "Editor",
		icon: "pencil",
		loader: () => import("./src-qgYvZaWS.js")
	}), F.register({
		id: "home",
		name: "Home",
		icon: "house",
		loader: () => import("./src-rGomrveL.js")
	}), F.register({
		id: "print",
		name: "Print",
		icon: "printer",
		loader: () => import("./src-CEnCUADT.js")
	});
}
var R = {
	id: "auto",
	name: "Auto",
	colorScheme: "auto"
}, z = {
	id: "light",
	name: "Light",
	colorScheme: "light"
}, B = {
	id: "dark",
	name: "Dark",
	colorScheme: "dark"
};
function V() {
	I(), L();
}
//#endregion
export { V as a, M as c, d, R as i, k as l, F as n, z as o, B as r, j as s, P as t, c as u };
