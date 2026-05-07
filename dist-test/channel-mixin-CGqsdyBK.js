import { t as e } from "./src-CJkOASls.js";
import { c as t, d as n, f as r, i, l as a, n as o, o as s, r as c } from "./UniformInterop-C0jUw_HW.js";
import { a as l, i as u, r as d, u as f } from "./messaging-jUZ_A071.js";
import "./ShareTargetGateway-CwZjbIw5.js";
import { r as p } from "./view-ingress-validation-BajFgsTW.js";
//#region ../../projects/subsystem/src/routing/channel/ServiceChannels.ts
var m = {
	workcenter: {
		broadcastName: c.WORK_CENTER,
		routeHash: s.WORKCENTER,
		component: i.WORK_CENTER,
		description: "AI work center for processing files and content"
	},
	settings: {
		broadcastName: c.SETTINGS,
		routeHash: s.SETTINGS,
		component: i.SETTINGS,
		description: "Application settings and configuration"
	},
	viewer: {
		broadcastName: c.MARKDOWN_VIEWER,
		routeHash: s.MARKDOWN_VIEWER,
		component: i.MARKDOWN_VIEWER,
		description: "Content viewer for markdown and files"
	},
	explorer: {
		broadcastName: c.FILE_EXPLORER,
		routeHash: s.FILE_EXPLORER,
		component: i.FILE_EXPLORER,
		description: "File explorer and browser"
	},
	airpad: {
		broadcastName: "rs-airpad",
		routeHash: "#airpad",
		component: "airpad",
		description: "Touch-friendly input pad"
	},
	print: {
		broadcastName: c.PRINT_CHANNEL,
		routeHash: s.PRINT,
		component: i.BASIC_PRINT,
		description: "Print preview and export"
	},
	history: {
		broadcastName: c.HISTORY_CHANNEL,
		routeHash: s.HISTORY,
		component: i.HISTORY,
		description: "Action history and undo/redo"
	},
	editor: {
		broadcastName: "rs-editor",
		routeHash: s.MARKDOWN_EDITOR,
		component: i.MARKDOWN_EDITOR,
		description: "Content editor"
	},
	home: {
		broadcastName: "rs-home",
		routeHash: "#home",
		component: "home",
		description: "Home/landing view"
	}
}, h = null;
function g() {
	return h ||= e({
		channels: m,
		logPrefix: "[ServiceChannels]"
	}), h;
}
var _ = g(), v = {
	viewer: [
		"content-view",
		"content-load",
		"markdown-content"
	],
	workcenter: [
		"content-attach",
		"file-attach",
		"share-target-input",
		"content-share"
	],
	explorer: [
		"file-save",
		"navigate-path",
		"content-explorer"
	],
	editor: ["content-load", "content-edit"],
	settings: ["settings-update"],
	history: ["history-update"],
	home: ["home-update"],
	airpad: ["content-load"],
	print: ["content-view"]
}, y = (e) => n(e), b = (e, t) => {
	let n = [t, ...v[e.id] || []];
	for (let t of n) if (t && (!e.canHandleMessage || e.canHandleMessage(t))) return t;
	return null;
}, x = (e, t) => {
	let n = b(e, t.type);
	if (!n) return null;
	let r = typeof t.id == "string" && t.id.trim() ? t.id : void 0;
	return {
		...r ? { id: r } : {},
		type: n,
		data: t.data,
		metadata: t.metadata
	};
};
//#endregion
//#region ../../projects/subsystem/src/routing/core/view-api.ts
function S(e, t) {
	if (typeof BroadcastChannel > "u") return () => {};
	let i = new BroadcastChannel(r(n(e)));
	return i.addEventListener("message", t), () => {
		i.removeEventListener("message", t), i.close();
	};
}
//#endregion
//#region ../../projects/subsystem/src/routing/core/view-inbound-timing.ts
function C(e) {
	try {
		if (typeof HTMLElement < "u" && e instanceof HTMLElement) return e;
	} catch {}
	return null;
}
function w(e) {
	if (!e || typeof e != "object") return !1;
	let t = e, n = (e) => typeof File < "u" && e instanceof File || typeof Blob < "u" && e instanceof Blob;
	if (n(t.file) || n(t.blob)) return !0;
	let r = t.files;
	if (Array.isArray(r) && r.some((e) => n(e))) return !0;
	let i = t.attachments;
	if (Array.isArray(i)) for (let e of i) {
		if (!e || typeof e != "object") continue;
		let t = e.data;
		if (n(t)) return !0;
	}
	return !1;
}
function T(e) {
	if (!e || typeof e != "object") return !1;
	let t = e;
	if (w(t)) return !0;
	let n = t.data;
	if (n && typeof n == "object" && w(n)) return !0;
	let r = t.attachments;
	if (Array.isArray(r)) for (let e of r) {
		if (!e || typeof e != "object") continue;
		let t = e.data;
		if (typeof File < "u" && t instanceof File || typeof Blob < "u" && t instanceof Blob) return !0;
	}
	return !1;
}
var E = new Set([
	"content-share",
	"share-target-input",
	"share-target-result",
	"content-attach",
	"file-attach"
]);
function D(e, t) {
	return E.has(String(t || "").toLowerCase()) ? T(e) : !1;
}
var O = new Set([
	"settings-update",
	"history-update",
	"home-update"
]);
function k(e, t) {
	return !O.has(String(t || "").toLowerCase());
}
async function A() {
	await new Promise((e) => requestAnimationFrame(() => e())), await new Promise((e) => queueMicrotask(e));
}
async function j() {
	await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(e))), await new Promise((e) => queueMicrotask(e));
}
var M = 220, N = 280, P = 160, F = 90;
async function I(e, t = M) {
	let n = C(e);
	if (!n || n.isConnected) return;
	let r = typeof document < "u" && document.documentElement instanceof HTMLElement ? document.documentElement : null;
	r && await new Promise((e) => {
		let i = !1, a = () => {
			if (!i) {
				i = !0;
				try {
					o.disconnect();
				} catch {}
				clearTimeout(s), e();
			}
		}, o = new MutationObserver(() => {
			n.isConnected && a();
		});
		o.observe(r, {
			childList: !0,
			subtree: !0
		});
		let s = setTimeout(a, t);
	});
}
var L = ["[data-render-target]", "[data-raw-target]"];
function R(e) {
	for (let t of L) try {
		if (e.querySelector(t) || e.shadowRoot?.querySelector(t)) return !0;
	} catch {}
	return !1;
}
function z(e, t) {
	let n = String(e || "").toLowerCase();
	return n === "content-load" || n === "markdown-content" || n === "content-view" ? !0 : D(t, e);
}
async function B(e, t = N) {
	let n = C(e);
	n && (R(n) || await new Promise((e) => {
		let r = !1, i = [], a = () => {
			if (!r) {
				r = !0;
				for (let e of i) try {
					e.disconnect();
				} catch {}
				clearTimeout(c), e();
			}
		}, o = () => {
			R(n) && a();
		}, s = (e) => {
			let t = new MutationObserver(o);
			t.observe(e, {
				childList: !0,
				subtree: !0
			}), i.push(t);
		};
		s(n), n.shadowRoot && s(n.shadowRoot);
		let c = setTimeout(a, t);
		o();
	}));
}
async function V(e, t = P) {
	let n = C(e);
	if (n?.isConnected) try {
		let e = typeof n.getAnimations == "function" ? n.getAnimations.bind(n) : null, r = e ? e({ subtree: !0 }).filter((e) => e.playState === "running") : [];
		if (r.length === 0) return;
		await Promise.race([Promise.all(r.map((e) => typeof e?.finished?.then == "function" ? e.finished.catch(() => void 0) : Promise.resolve())), new Promise((e) => setTimeout(e, t))]);
	} catch {}
}
async function H(e, t, n) {
	let r = C(e), i = z(n, t);
	if (r?.isConnected && (!i || R(r))) {
		await A(), await V(e, F);
		return;
	}
	await j(), await I(e, M), i && await B(e, N), await V(e, P), await A();
}
var U = /* @__PURE__ */ new WeakMap();
function W(e, t) {
	let n = (U.get(e) ?? Promise.resolve()).then(() => t()).catch((t) => {
		console.warn("[ViewIngress] delivery failed:", e?.id, t);
	});
	return U.set(e, n), n;
}
//#endregion
//#region ../../projects/subsystem/src/routing/core/channel-mixin.ts
var G = /* @__PURE__ */ new WeakMap(), K = (e) => {
	let t = (G.get(e) ?? 0) + 1;
	return G.set(e, t), t;
}, q = /* @__PURE__ */ new Map(), J = 600, Y = "__ingressStamp";
function X(e, t) {
	return typeof t != "number" || !Number.isFinite(t) ? !1 : (G.get(e) ?? 0) !== t;
}
function Z(e, t) {
	let n = e.metadata && typeof e.metadata == "object" && !Array.isArray(e.metadata) ? e.metadata : {};
	return {
		...e,
		metadata: {
			...n,
			[Y]: t
		}
	};
}
var Q = (e) => {
	for (let [t, n] of q) e - n > J && q.delete(t);
}, $ = async (e, t) => {
	let r = typeof t.id == "string" ? t.id.trim() : "";
	if (r) {
		let t = n(y(String(e.id || ""))), i = Date.now();
		Q(i);
		let a = `${t}::${r}`, o = q.get(a);
		if (o !== void 0 && i - o < J) return;
		q.set(a, i);
	}
	let i = x(e, t);
	if (!i) return;
	let a = p(t, i.type);
	if (!a.ok) {
		console.warn("[ViewIngress] Skipped malformed envelope:", a.reason, i.type);
		return;
	}
	let o = K(e);
	await W(e, async () => {
		G.get(e) === o && (k(t, i.type) && await H(e, t, i.type), G.get(e) === o && await e.handleMessage?.(Z(i, o)));
	});
};
function ee(e, r = {}) {
	if (!e.handleMessage) return () => {};
	let i = r.destination || y(String(e.id || "")), s = r.componentId || `view:${e.id}`, c = t(i), p = {
		canHandle: (e) => a(e.destination, i),
		handle: async (t) => {
			await $(e, t);
		}
	}, m = /* @__PURE__ */ new Set();
	for (let e of c) {
		let t = `${s}:${e}`;
		u(t, e), l(e, p);
		let n = d(t);
		if (n.length > 0) for (let e of n) m.has(e.id) || (m.add(e.id), p.handle(e));
	}
	let h = S(n(i), (t) => {
		let r = t.data;
		if (!(!r || typeof r != "object")) {
			if (r.type === "view-transfer" && r.message && typeof r.message == "object") {
				$(e, o(r.message));
				return;
			}
			if (r.type === "view-post") {
				let t = n(r.viewId);
				if (t !== n(String(e.id || i))) return;
				let a = {
					id: typeof r.id == "string" ? String(r.id) : crypto.randomUUID(),
					type: "view-post",
					destination: t,
					source: "view-channel",
					data: {
						bodyText: String(r.bodyText || ""),
						contentType: String(r.contentType || ""),
						viewId: t
					},
					metadata: {
						source: "view-channel",
						destination: t
					}
				}, o = K(e);
				W(e, async () => {
					G.get(e) === o && (k(a, "view-post") && await H(e, a, "view-post"), G.get(e) === o && await e.handleMessage?.(Z({
						type: "view-post",
						data: {
							bodyText: String(r.bodyText || ""),
							contentType: String(r.contentType || ""),
							viewId: t
						},
						metadata: a.metadata
					}, o)));
				});
			}
		}
	});
	return () => {
		for (let e of c) f(e, p);
		h();
	};
}
//#endregion
export { _ as i, X as n, y as r, ee as t };
