import { A as e, Ar as t, C as n, Cr as r, E as i, Lt as a, M as o, N as s, Nr as c, P as l, R as u, Rt as d, Sr as f, Ut as p, Vt as m, ar as ee, b as te, br as ne, gt as re, h, hn as ie, ir as g, jr as _, or as v, tr as y, vr as ae, x as b, y as x, z as oe } from "./src-BoL7goZG.js";
import { t as se } from "./registry-COxTrl-W.js";
import { n as S } from "./channel-actions-UyALGbaW.js";
import { t as ce } from "./src-BIgixmr1.js";
import { a as le, i as ue, o as de, r as fe, s as pe, t as me } from "./state-storage-BZjAnIE5.js";
import { a as C, r as he, t as w } from "./storage-Bo8p2gMW.js";
import { t as T } from "./view-transport-DYG8Ej0e.js";
import { t as E } from "./decorate-DiJXSbCl.js";
import { n as ge } from "./ContextMenu-Bpvs_YaJ.js";
//#region ../explorer-view/src/inject.ts
function D(...e) {
	let t = e.filter(Boolean);
	if (t.length) return {
		extraBackgroundMenuItems: (e) => t.flatMap((t) => t.extraBackgroundMenuItems?.(e) ?? []),
		contextActionHandlers: t.reduce((e, t) => ({
			...e,
			...t.contextActionHandlers ?? {}
		}), {}),
		onWire: (e, n) => {
			for (let r of t) r.onWire?.(e, n);
		}
	};
}
var O;
function _e(e) {
	O = e;
}
function k() {
	return O;
}
//#endregion
//#region ../explorer-view/src/utils.ts
var ve = (e, t, n) => {
	let r = document.createElement("div");
	r.className = "rs-explorer-context-menu", r.setAttribute("role", "menu");
	let i = () => {
		document.removeEventListener("click", a, !0), document.removeEventListener("keydown", o, !0), r.remove();
	}, a = (e) => {
		r.contains(e.target) || i();
	}, o = (e) => {
		e.key === "Escape" && (e.preventDefault(), i());
	};
	for (let e of n) {
		let t = document.createElement("button");
		t.type = "button", t.className = "rs-explorer-context-menu__item", t.textContent = e.label, t.addEventListener("click", () => {
			e.action(), i();
		}), r.append(t);
	}
	document.body.append(r), r.style.setProperty("position", "fixed"), r.style.setProperty("margin", "0"), r.style.setProperty("box-sizing", "border-box"), r.style.setProperty("z-index", "10050");
	let s = globalThis.innerWidth, c = globalThis.innerHeight, l = e, u = t, d = r.getBoundingClientRect();
	l + d.width > s - 8 && (l = Math.max(8, s - d.width - 8)), u + d.height > c - 8 && (u = Math.max(8, c - d.height - 8)), r.style.left = `${l}px`, r.style.top = `${u}px`, requestAnimationFrame(() => {
		let e = r.getBoundingClientRect(), t = l, n = u;
		t + e.width > s - 8 && (t = Math.max(8, s - e.width - 8)), n + e.height > c - 8 && (n = Math.max(8, c - e.height - 8)), r.style.left = `${t}px`, r.style.top = `${n}px`;
	}), queueMicrotask(() => {
		document.addEventListener("click", a, !0);
	}), document.addEventListener("keydown", o, !0);
}, A = (e) => {
	let t = String(e?.viewId || "").trim().toLowerCase();
	if (!t) return;
	let n = e?.target || "window", r = n === "base" ? "immersive" : n;
	globalThis?.dispatchEvent?.(new CustomEvent("cw:view-open-request", { detail: {
		viewId: t,
		target: r,
		params: e?.params || {}
	} }));
}, ye = new Set([
	"md",
	"markdown",
	"txt",
	"text",
	"json",
	"xml",
	"yml",
	"yaml",
	"html",
	"htm",
	"css",
	"js",
	"mjs",
	"cjs",
	"ts",
	"tsx",
	"jsx",
	"log",
	"ini",
	"conf",
	"cfg",
	"csv"
]), be = (e) => {
	let t = Math.random().toString(36).slice(2, 8), n = Date.now().toString(36);
	return `explorer-${String(e || "root").replace(/[^a-z0-9_-]/gi, "-").slice(0, 18) || "root"}-${n}-${t}`;
}, xe = (e = "") => {
	let t = String(e).trim().toLowerCase(), n = t.lastIndexOf(".");
	return n <= 0 || n >= t.length - 1 ? "" : t.slice(n + 1);
}, j = (e) => {
	if (!e) return !1;
	let t = String(e.type || "").toLowerCase();
	return !t || t.startsWith("text/") || t.includes("markdown") || t.includes("json") || t.includes("xml") ? !0 : ye.has(xe(e.name || ""));
}, M = (e) => {
	let t = Math.random().toString(36).slice(2, 8), n = Date.now().toString(36);
	return `viewer-${String(e || "viewer").replace(/[^a-z0-9_-]/gi, "-").slice(0, 18) || "viewer"}-${n}-${t}`;
}, Se = () => {
	let e = new Set(Array.from(pe ?? []).map((e) => `${Math.round(e?.cell?.[0] || 0)}:${Math.round(e?.cell?.[1] || 0)}`));
	for (let t = 0; t < 12; t += 1) for (let n = 0; n < 8; n += 1) {
		let r = `${n}:${t}`;
		if (!e.has(r)) return [n, t];
	}
	return [0, 0];
};
//#endregion
//#region ../explorer-view/src/runtime.ts
function Ce(e, t) {
	if (t && t.trim()) {
		e.path = t.trim();
		return;
	}
	let n = String(he(w.EXPLORER_PATH, "/user/") || "").trim();
	e.path = !n || n === "/" ? "/user/" : n;
}
function we(e, t, n, r) {
	let i = { signal: r }, a = (e) => t.shellContext?.showMessage?.(e), o = async (e, t, n = "window") => {
		let r = e?.file;
		if (!r || !j(r)) return !1;
		let i = String(t || "");
		if (n === "base" || n === "immersive") return A({
			viewId: "viewer",
			target: "immersive",
			params: {
				src: i,
				filename: r.name || "",
				processId: M(i)
			}
		}), !0;
		let o = M(i);
		A({
			viewId: "viewer",
			target: "window",
			params: {
				processId: o,
				src: i,
				filename: r.name || ""
			}
		});
		try {
			await T({
				type: "content-view",
				source: "explorer",
				destination: "viewer",
				contentType: r.type || "text/plain",
				attachments: [{
					data: r,
					source: "explorer-viewer-open"
				}],
				data: {
					filename: r.name,
					path: i,
					source: i
				},
				metadata: {
					processId: o,
					openTarget: "window"
				}
			}) || a("Viewer is not ready yet, retrying in background");
		} catch (e) {
			console.warn("[Explorer] Failed to send viewer payload:", e);
		}
		return !0;
	}, s = async (t, n) => {
		let r = t?.file;
		if (!r) {
			a("No file selected");
			return;
		}
		let i = `${e?.path || "/"}${t?.name || r.name}`;
		A(n === "headless" ? {
			viewId: "workcenter",
			target: "headless",
			params: {
				queue: "1",
				mode: "headless",
				sourcePath: i
			}
		} : n === "active" ? {
			viewId: "workcenter",
			target: "window"
		} : {
			viewId: "workcenter",
			target: "window",
			params: {
				minimized: "1",
				queue: "1",
				sourcePath: i
			}
		}), await T({
			type: "content-share",
			source: "explorer",
			destination: "workcenter",
			contentType: r.type || "application/octet-stream",
			attachments: [{
				data: r,
				source: "explorer-workcenter-attach"
			}],
			data: {
				filename: r.name,
				path: i,
				source: "explorer-attach",
				queued: n !== "active"
			},
			metadata: {
				queueState: n === "active" ? "awaiting" : n === "queued" ? "pending" : "queued",
				mode: n,
				sourcePath: i
			}
		}) ? a(n === "active" ? `Attached ${r.name} to Work Center` : `Queued ${r.name} for Work Center (${n})`) : a("Work Center queue is unavailable");
	}, c = (t) => {
		let n = t?.file, r = String(t?.name || n?.name || "").trim();
		if (!r) {
			a("Nothing to pin");
			return;
		}
		let i = `${e?.path || "/"}${r}`, o = fe(g(Se()));
		o.label.value = r, o.icon.value = t?.kind === "directory" ? "folder" : "file-text", o.action = "open-link", me(o);
		let s = ue(o.id, { action: "open-link" });
		s.action = "open-link", s.href = i, s.description = `Pinned from Explorer: ${i}`, le(), de(), a(`Pinned ${r} to Home`);
	}, l = (t) => `${e?.path || "/"}${t?.name || ""}`, u = {
		view: async (e) => {
			await o(e, l(e), "window");
		},
		"view-base": async (e) => {
			await o(e, l(e), "base");
		},
		"attach-workcenter": (e) => s(e, "active"),
		"attach-workcenter-queued": (e) => s(e, "queued"),
		"attach-workcenter-headless": (e) => s(e, "headless"),
		"pin-home": (e) => c(e),
		...n?.contextActionHandlers ?? {}
	}, d = async (e) => {
		let { item: t, path: n } = e.detail || {};
		t?.kind !== "file" || !t?.file || await o(t, n, "window") || A({
			viewId: "workcenter",
			target: "window"
		});
	};
	e.addEventListener("open-item", d, i), e.addEventListener("open", d, i), e.addEventListener("rs-open", d, i);
	let f = () => {
		C(w.EXPLORER_PATH, e.path || "/user/");
	};
	e.addEventListener("entries-updated", f, i), e.addEventListener("rs-navigate", f, i), e.addEventListener("context-action", async (e) => {
		let t = e.detail || {}, n = String(t.action || ""), r = t.item;
		if (!n) return;
		let i = u[n];
		i && await i(r);
	}, i), e.addEventListener("contextmenu", (r) => {
		if ((r.composedPath?.() || []).some((e) => {
			let t = e;
			return !t || typeof t.classList?.contains != "function" ? !1 : t.classList.contains("row") || t.classList.contains("action-btn") || t.classList.contains("ctx-menu");
		})) return;
		r.preventDefault();
		let i = e?.path || "/", a = n?.extraBackgroundMenuItems?.({ path: i }) ?? [];
		ve(r.clientX, r.clientY, [
			{
				id: "refresh",
				label: "Refresh",
				icon: "arrows-clockwise",
				action: () => {
					e.navigate(i);
				}
			},
			{
				id: "open-new-explorer",
				label: "New Explorer window",
				icon: "books",
				action: () => A({
					viewId: "explorer",
					target: "window",
					params: {
						path: i,
						processId: be(i)
					}
				})
			},
			{
				id: "open-home",
				label: "Go to Home",
				icon: "house",
				action: () => t.shellContext?.navigate?.("home")
			},
			...a
		]);
	}, i);
}
function Te(e, t, n) {
	let r = { signal: n }, i = (e) => t.shellContext?.showMessage?.(e), a = e.querySelector("[data-fallback-files]"), o = e.querySelector("[data-action=\"pick-files\"]"), s = e.querySelector("[data-action=\"open-workcenter\"]");
	if (!o || !a) return;
	let c = document.createElement("input");
	c.type = "file", c.multiple = !0, c.accept = ".md,.markdown,.txt,.json,.xml,.yaml,.yml,.csv,.log,text/*", c.style.display = "none", e.append(c), o.addEventListener("click", () => c.click(), r), s?.addEventListener("click", () => A({
		viewId: "workcenter",
		target: "window"
	}), r), c.addEventListener("change", async () => {
		let e = Array.from(c.files || []);
		if (a.replaceChildren(), e.length === 0) return;
		for (let t of e) {
			let e = document.createElement("li");
			e.textContent = t.name, a.append(e);
		}
		let t = e.find((e) => j(e));
		t && (A({
			viewId: "viewer",
			target: "window"
		}), await T({
			type: "content-view",
			source: "explorer-fallback",
			destination: "viewer",
			contentType: t.type || "text/plain",
			attachments: [{
				data: t,
				source: "explorer-fallback"
			}],
			data: {
				filename: t.name,
				source: "explorer-fallback"
			}
		}) || i("Viewer is not ready yet"));
	}, r);
}
function N(e, t) {
	let n = D(k(), t.inject), r = new AbortController(), { signal: i } = r, a = e.querySelector("ui-file-manager");
	return n?.onWire?.(a, e), a ? (Ce(a, t.initialPath ?? null), we(a, t, n, i), {
		cleanup: () => {
			C(w.EXPLORER_PATH, a.path || "/user/"), r.abort();
		},
		fileManager: a
	}) : (Te(e, t, i), {
		cleanup: () => r.abort(),
		fileManager: null
	});
}
//#endregion
//#region ../explorer-view/src/theme.ts
function P() {
	if (typeof document > "u") return null;
	let e = document.documentElement?.getAttribute("data-theme");
	return e === "light" || e === "dark" ? e : null;
}
function F(e) {
	return e === "light" || e === "dark" ? e : P() || (typeof globalThis.matchMedia == "function" && globalThis.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
}
function I(e, t) {
	if (!e) return;
	let n = F(t ?? void 0);
	e.dataset.explorerColorScheme = n, e.style.setProperty("color-scheme", n);
}
function L(e, t) {
	let n = () => ({ disconnect: () => {} });
	if (!e || typeof document > "u") return n();
	let r = () => {
		e.isConnected && (t() ?? "system") === "system" && I(e, "system");
	};
	if ((t() ?? "system") !== "system") return n();
	let i = document.documentElement, a = typeof globalThis.matchMedia == "function" ? globalThis.matchMedia("(prefers-color-scheme: dark)") : null, o = new MutationObserver(r);
	try {
		o.observe(i, {
			attributes: !0,
			attributeFilter: ["data-theme"]
		});
	} catch {
		return o.disconnect(), n();
	}
	return a?.addEventListener("change", r), r(), { disconnect: () => {
		o.disconnect(), a?.removeEventListener("change", r);
	} };
}
//#endregion
//#region ../explorer-view/src/ts/UIElement.ts
var R = class extends a() {
	theme = "default";
	render = function() {
		return p`<slot></slot>`;
	};
	constructor() {
		super();
	}
	onRender() {
		return super.onRender();
	}
	connectedCallback() {
		return super.connectedCallback?.() ?? this;
	}
	onInitialize() {
		let e = super.onInitialize() ?? this;
		return e.loadStyleLibrary(ce()), e;
	}
};
E([m({ source: "attr" })], R.prototype, "theme", void 0), R = E([d("ui-element")], R);
//#endregion
//#region ../explorer-view/src/scss/FileManagerContent.scss?inline
var Ee = "@charset \"UTF-8\";\n/* ai-refactor: optimized/refactored at 2026-02-13T00:45:15Z */\n/* ai-refactor: optimized/refactored at 2026-02-13T00:45:12Z */\n@layer tokens, base, layout, utilities, shells, shell, views, view, viewer, components, ux-layer, markdown, essentials, print, print-breaks, overrides;\n@layer components {\n  button,\n  .btn {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--space-sm);\n    padding-block: 0px;\n    padding-inline: 0px;\n    font-size: var(--font-size-sm);\n    font-weight: 500;\n    border-radius: var(--radius-md);\n    background: var(--color-bg-alt);\n    color: var(--color-fg);\n    border: 1px solid var(--color-border);\n    cursor: pointer;\n    transition: all var(--transition-fast);\n  }\n  button:hover:not(:disabled),\n  .btn:hover:not(:disabled) {\n    background: var(--color-border);\n  }\n  button:focus-visible,\n  .btn:focus-visible {\n    outline: 2px solid var(--color-primary);\n    outline-offset: 2px;\n  }\n  button:disabled,\n  .btn:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  .btn {\n    --ui-bg: var(--color-surface-container-high);\n    --ui-fg: var(--color-on-surface);\n    --ui-bg-hover: var(--color-surface-container-highest);\n    --ui-ring: var(--color-primary);\n    --ui-radius: var(--radius-lg);\n    --ui-pad-y: var(--space-sm);\n    --ui-pad-x: var(--space-lg);\n    --ui-font-size: var(--text-sm);\n    --ui-font-weight: var(--font-weight-semibold);\n    --ui-min-h: 40px;\n    --ui-opacity: 1;\n    appearance: none;\n    border: none;\n    background: var(--ui-bg);\n    color: var(--ui-fg);\n    border-radius: var(--ui-radius);\n    padding: max(var(--ui-pad-y, 0px), 0px) max(var(--ui-pad-x, 0px), 0px);\n    font-size: var(--ui-font-size);\n    font-weight: var(--ui-font-weight);\n    letter-spacing: 0.01em;\n    line-height: 1.2;\n    block-size: calc-size(fit-content, max(var(--ui-min-h), size));\n    transition: background-color var(--motion-fast), box-shadow var(--motion-fast), transform var(--motion-fast);\n    box-shadow: var(--elev-0);\n    user-select: none;\n    touch-action: manipulation;\n    pointer-events: auto;\n    gap: var(--space-xs);\n    text-transform: none;\n    opacity: var(--ui-opacity);\n    min-block-size: fit-content;\n    min-inline-size: calc-size(fit-content, size + 0.5rem + var(--icon-size, 1rem));\n    max-inline-size: none;\n    max-block-size: stretch;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    text-wrap: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    text-align: center;\n    text-decoration: none;\n    text-shadow: none;\n    text-rendering: auto;\n    contain: none;\n    container-type: normal;\n    place-items: center;\n    place-content: center;\n    justify-content: safe center;\n    justify-items: safe center;\n    align-content: safe center;\n    align-items: safe center;\n  }\n  .btn > ui-icon {\n    flex-shrink: 0;\n    pointer-events: none;\n    color: inherit;\n    align-self: center;\n    vertical-align: middle;\n  }\n  @media (max-width: 480px) {\n    .btn.btn-icon {\n      font-size: 0px !important;\n      aspect-ratio: 1/1;\n      block-size: fit-content;\n      max-block-size: stretch;\n      min-inline-size: 0px;\n      max-inline-size: fit-content;\n      gap: 0px;\n    }\n    .btn.btn-icon .btn-text,\n    .btn.btn-icon span:not(.sr-only) {\n      display: none !important;\n    }\n  }\n  .btn:hover {\n    background: var(--ui-bg-hover);\n    box-shadow: var(--elev-1);\n    transform: translateY(-1px);\n  }\n  .btn:active {\n    transform: translateY(0);\n    box-shadow: var(--elev-0);\n  }\n  .btn:focus-visible {\n    outline: none;\n    box-shadow: 0 0 0 3px color-mix(in oklab, var(--ui-ring) 35%, transparent);\n  }\n  .btn:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n    transform: none !important;\n  }\n  .btn:disabled:hover {\n    background: var(--color-surface-container-high);\n    box-shadow: var(--elev-0);\n  }\n  .btn.primary, .btn.active {\n    --ui-bg: var(--color-primary);\n    --ui-fg: var(--color-on-primary);\n    --ui-ring: var(--color-primary);\n  }\n  .btn.primary {\n    --ui-bg-hover: color-mix(in oklab, var(--color-primary) 90%, black);\n  }\n  .btn.active {\n    box-shadow: var(--elev-1);\n  }\n  .btn.small {\n    --ui-pad-y: var(--space-xs);\n    --ui-pad-x: var(--space-md);\n    --ui-font-size: var(--text-xs);\n    --ui-min-h: 32px;\n    --ui-radius: var(--radius-md);\n  }\n  .btn.icon-btn {\n    inline-size: 40px;\n    block-size: 40px;\n    --ui-pad-y: 0px;\n    --ui-pad-x: 0px;\n    --ui-radius: 9999px;\n    --ui-font-size: var(--text-lg);\n  }\n  .btn[data-action=open-md], .btn[data-action=export-md], .btn[data-action=export-docx] {\n    --ui-font-size: 12px;\n    --ui-pad-x: 8px;\n    --ui-pad-y: 0px;\n    --ui-min-h: 28px;\n  }\n  .btn:is([data-action=view-markdown-viewer],\n  [data-action=view-markdown-editor],\n  [data-action=view-rich-editor],\n  [data-action=view-settings],\n  [data-action=view-history],\n  [data-action=view-workcenter]) {\n    --ui-font-size: 13px;\n    --ui-font-weight: 500;\n    --ui-pad-x: 12px;\n    --ui-pad-y: 0px;\n    --ui-min-h: 32px;\n    --ui-radius: 16px;\n    text-transform: capitalize;\n  }\n  .btn:is([data-action=view-markdown-viewer],\n  [data-action=view-markdown-editor],\n  [data-action=view-rich-editor],\n  [data-action=view-settings],\n  [data-action=view-history],\n  [data-action=view-workcenter][data-current],\n  [data-action=view-workcenter].active) {\n    --ui-bg: var(--color-surface-container-highest);\n    --ui-fg: var(--color-primary);\n    --ui-ring: var(--color-primary);\n  }\n  .btn:is([data-action=toggle-edit],\n  [data-action=snip],\n  [data-action=solve],\n  [data-action=code],\n  [data-action=css],\n  [data-action=voice],\n  [data-action=edit-templates],\n  [data-action=recognize],\n  [data-action=analyze],\n  [data-action=select-files],\n  [data-action=clear-prompt],\n  [data-action=view-full-history]) {\n    --ui-font-size: 12px;\n    --ui-pad-x: 8px;\n    --ui-pad-y: 0px;\n    --ui-min-h: 28px;\n    --ui-radius: 14px;\n  }\n  .btn:has(> ui-icon):not(:has(> *:not(ui-icon))), .btn:has(> span:only-of-type:empty) {\n    font-size: 0px !important;\n    aspect-ratio: 1/1;\n    block-size: fit-content;\n    max-block-size: stretch;\n    min-inline-size: 0px;\n    max-inline-size: fit-content;\n    gap: 0px;\n    overflow: visible;\n  }\n  .btn:has(> ui-icon):not(:has(> *:not(ui-icon))) span:not(.sr-only), .btn:has(> span:only-of-type:empty) span:not(.sr-only) {\n    display: none !important;\n  }\n  .btn-primary {\n    background: var(--color-primary);\n    color: white;\n    border-color: var(--color-primary);\n  }\n  .btn-primary:hover:not(:disabled) {\n    background: var(--color-primary-hover);\n    border-color: var(--color-primary-hover);\n  }\n  @media (max-inline-size: 768px) {\n    .btn {\n      --ui-pad-y: var(--space-xs);\n      --ui-pad-x: var(--space-md);\n      --ui-font-size: var(--text-xs);\n      --ui-min-h: 36px;\n    }\n  }\n  @media (max-inline-size: 480px) {\n    .btn {\n      --ui-pad-y: var(--space-xs);\n      --ui-pad-x: var(--space-xs);\n      --ui-font-size: var(--text-xs);\n      --ui-min-h: 32px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n    .btn.btn-icon {\n      overflow: visible;\n    }\n  }\n  @media (prefers-reduced-motion: reduce) {\n    .btn {\n      transition: none;\n      transform: none !important;\n    }\n    .btn:hover, .btn:active {\n      transform: none !important;\n    }\n  }\n}\n@layer utilities {\n  .round-decor {\n    --background-tone-shift: 0;\n    padding-block: 0.25rem;\n    border-radius: 0.25rem;\n    overflow: hidden;\n  }\n  .round-decor:empty {\n    padding: 0;\n    display: none;\n    pointer-events: none;\n    visibility: collapse;\n  }\n  .time-format {\n    display: inline-flex;\n    flex-direction: row;\n    place-content: center;\n    place-items: center;\n    place-self: center;\n    padding: 0.125rem;\n    font: 500 0.9em \"InterVariable\", \"Inter\", \"Fira Mono\", \"Menlo\", \"Consolas\", monospace;\n    font-optical-sizing: auto;\n    font-variant-numeric: tabular-nums;\n    font-kerning: auto;\n    font-stretch: condensed;\n    font-width: condensed;\n    letter-spacing: -0.05em;\n    text-wrap: nowrap;\n    text-align: center;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n  .ui-ws-item {\n    cursor: pointer;\n    user-select: none;\n    pointer-events: auto;\n  }\n  .ui-ws-item span {\n    pointer-events: none;\n    aspect-ratio: 1/1;\n    inline-size: fit-content;\n    block-size: fit-content;\n    display: inline;\n  }\n  .ui-ws-item:active, .ui-ws-item:has(:active) {\n    will-change: inset, translate, transform, opacity, z-index;\n    cursor: grabbing;\n  }\n}\n@layer essentials {\n  @media print {\n    .ctx-menu, .ux-anchor, .component-loading, .component-error {\n      display: none !important;\n      visibility: hidden !important;\n      opacity: 0 !important;\n      pointer-events: none !important;\n      position: absolute !important;\n      inset: 0 !important;\n      z-index: -1 !important;\n      inline-size: 0 !important;\n      block-size: 0 !important;\n      max-inline-size: 0 !important;\n      max-block-size: 0 !important;\n      min-inline-size: 0 !important;\n      min-block-size: 0 !important;\n      margin: 0 !important;\n      padding: 0 !important;\n      border: none !important;\n      overflow: hidden !important;\n    }\n  }\n  @media screen {\n    :root, :host, :scope {\n      --font-family: \"InterVariable\", \"Inter\", \"Helvetica Neue\", \"Helvetica\", \"Calibri\", \"Roboto\", ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;\n    }\n    ui-window-frame,\n    ui-modal,\n    .ui-grid-item {\n      --opacity: 1;\n      --scale: 1;\n      --rotate: 0deg;\n      --translate-x: 0%;\n      --translate-y: 0%;\n      isolation: isolate;\n      content-visibility: auto;\n      transform-origin: 50% 50%;\n      transform-style: flat;\n      transform-box: fill-box;\n      translate: 0% 0% 0%;\n      opacity: var(--opacity, 1);\n      rotate: 0deg;\n      scale: 1;\n    }\n    .ctx-menu {\n      --font-family: \"InterVariable\", \"Inter\", \"Helvetica Neue\", \"Helvetica\", \"Calibri\", \"Roboto\", ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;\n      /*\n       * WHY: Menus are appended to `body` / overlay, outside `.view-explorer`, so app color\n       * tokens are often missing — without fallbacks text can match background (dark on dark).\n       */\n      color-scheme: light dark;\n    }\n    .ctx-menu,\n    .ctx-menu * {\n      visibility: visible;\n      content-visibility: visible;\n    }\n    .ctx-menu {\n      position: fixed;\n      z-index: 99999;\n      inline-size: max-content;\n      min-inline-size: 160px;\n      max-inline-size: min(240px, 100cqi);\n      block-size: fit-content;\n      padding: 0.25rem 0;\n      border: 1px solid var(--color-outline-variant, light-dark(#c9ced8, #474e5e));\n      border-radius: var(--radius-md, 10px);\n      background-color: var(--color-surface, light-dark(#f6f8fc, #1b2029));\n      color: var(--color-on-surface, light-dark(#12151c, #eceff7));\n      font-size: 0.875rem;\n      font-weight: 400;\n      box-shadow: 0 10px 28px light-dark(rgba(15, 23, 42, 0.14), rgba(0, 0, 0, 0.42)), 0 0 0 1px light-dark(rgba(15, 23, 42, 0.08), rgba(255, 255, 255, 0.07));\n      opacity: 1;\n      visibility: visible;\n      pointer-events: auto;\n      transform: scale3d(var(--scale, 1), var(--scale, 1), 1) translate3d(var(--translate-x, 0px), var(--translate-y, 0px), 0px);\n      transition: opacity 0.15s ease-out, visibility 0.15s ease-out, transform 0.15s ease-out;\n      font-family: var(--font-family, 'system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif') !important;\n      text-align: start;\n      display: flex;\n      flex-direction: column;\n      align-items: stretch;\n    }\n    .ctx-menu[data-hidden] {\n      opacity: 0;\n      visibility: hidden;\n      pointer-events: none;\n    }\n    .ctx-menu > * {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-start;\n      text-align: start;\n      inline-size: stretch;\n      min-block-size: 2rem;\n      gap: 0.5rem;\n      padding: 0.375rem 0.75rem;\n      border: none;\n      border-radius: var(--radius-sm, 8px);\n      outline: none;\n      position: relative;\n      background-color: transparent;\n      color: var(--color-on-surface, light-dark(#12151c, #eceff7));\n      cursor: pointer;\n      text-wrap: nowrap;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden;\n      pointer-events: auto;\n      transition: background-color 0.15s ease, color 0.15s ease;\n      font-family: var(--font-family, 'system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif') !important;\n    }\n    .ctx-menu > *:hover {\n      background-color: var(--color-surface-container-high, light-dark(#e8ecf4, #2a3140));\n      color: var(--color-on-surface, light-dark(#12151c, #eceff7));\n    }\n    .ctx-menu > *:active {\n      background-color: var(--color-surface-container-highest, light-dark(#dde3ee, #343b4d));\n      color: var(--color-on-surface, light-dark(#12151c, #eceff7));\n    }\n    .ctx-menu > *:focus-visible {\n      outline: 2px solid var(--color-primary, light-dark(#1d6fd1, #7eb8ff));\n      outline-offset: 1px;\n      background-color: var(--color-surface-container-high, light-dark(#e8ecf4, #2a3140));\n    }\n    .ctx-menu > *:not(.ctx-menu-separator) {\n      gap: 0.5rem;\n    }\n    .ctx-menu > * > * {\n      pointer-events: none;\n    }\n    .ctx-menu > * > span {\n      flex: 1 1 auto;\n      min-inline-size: 0;\n      text-align: start !important;\n      user-select: none;\n      pointer-events: none;\n      font-size: 0.875rem;\n      font-weight: 400;\n      line-height: 1.25;\n      color: inherit;\n    }\n    .ctx-menu > * > ui-icon {\n      --icon-size: 1rem;\n      flex-shrink: 0;\n      inline-size: var(--icon-size);\n      block-size: var(--icon-size);\n      color: var(--color-on-surface-variant, light-dark(#545c6f, #b4bfd4));\n      user-select: none;\n      pointer-events: none;\n    }\n    .ctx-menu > .ctx-menu-separator, .ctx-menu.ctx-menu-separator {\n      min-block-size: auto;\n      block-size: 1px;\n      margin: 0.125rem 0.375rem;\n      padding: 0;\n      background-color: var(--color-outline-variant, light-dark(#c9ced8, #474e5e));\n      opacity: 0.55;\n      pointer-events: none;\n    }\n    .ctx-menu {\n      /*\n       * `.grid-rows` applies subgrid + place(center) to children, which centers\n       * label text per row. Context menus must stay flex rows with start-aligned labels.\n       */\n    }\n    .ctx-menu.grid-rows {\n      display: flex !important;\n      flex-direction: column;\n      align-items: stretch;\n      grid-template-columns: unset !important;\n      grid-auto-rows: unset !important;\n    }\n    .ctx-menu.grid-rows > *:not(.ctx-menu-separator) {\n      display: flex !important;\n      flex-flow: row nowrap !important;\n      align-items: center !important;\n      justify-content: flex-start !important;\n      grid-column: unset !important;\n      grid-row: unset !important;\n      grid-template-columns: unset !important;\n      grid-template-rows: unset !important;\n      place-content: unset !important;\n      place-items: unset !important;\n    }\n    .ux-anchor {\n      --shift-x: var(--client-x, 0px);\n      --shift-y: var(--client-y, 0px);\n      --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n      --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n      inset-inline-start: max(var(--shift-x), 0px);\n      inset-block-start: max(var(--shift-y), var(--status-bar-padding, 0px));\n      inset-inline-end: auto;\n      inset-block-end: auto;\n      direction: ltr;\n      writing-mode: horizontal-tb;\n      translate: 0% 0% 0%;\n      transform: none;\n    }\n    .component-loading,\n    .component-error {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 2rem;\n      gap: 1rem;\n      color: var(--text-secondary, light-dark(#666, #aaa));\n    }\n    .component-loading .loading-spinner {\n      inline-size: 2rem;\n      block-size: 2rem;\n      border: 2px solid var(--border, light-dark(#ddd, #444));\n      border-block-start: 2px solid var(--primary, light-dark(#007bff, #5fa8ff));\n      border-radius: 50%;\n      animation: spin 1s linear infinite;\n    }\n    .component-error {\n      text-align: center;\n    }\n    .component-error h3 {\n      margin: 0;\n      color: var(--error, light-dark(#dc3545, #ff6b6b));\n    }\n    .component-error p {\n      margin: 0;\n    }\n    ui-icon {\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      inline-size: var(--icon-size, 1.25rem);\n      block-size: var(--icon-size, 1.25rem);\n      min-inline-size: var(--icon-size, 1.25rem);\n      min-block-size: var(--icon-size, 1.25rem);\n      color: currentColor;\n      fill: currentColor;\n      flex-shrink: 0;\n      vertical-align: middle;\n      opacity: 1;\n      visibility: visible;\n      /* When a parent uses font-size: 0 for layout, keep raster/mask math stable */\n      font-size: 1rem;\n    }\n    ui-icon svg,\n    ui-icon img {\n      inline-size: 100%;\n      block-size: 100%;\n      color: inherit;\n      fill: currentColor;\n    }\n    :is(button, .btn) > ui-icon {\n      color: inherit;\n    }\n    .file-picker {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      min-block-size: 300px;\n      padding: 2rem;\n      text-align: center;\n    }\n    .file-picker .file-picker-header {\n      margin-block-end: 2rem;\n    }\n    .file-picker .file-picker-header h2 {\n      margin: 0 0 0.5rem 0;\n      color: var(--color-on-surface);\n      font-size: 1.5rem;\n      font-weight: 600;\n    }\n    .file-picker .file-picker-header p {\n      margin: 0;\n      color: var(--color-on-surface-variant);\n      font-size: 0.9rem;\n    }\n    .file-picker .file-picker-actions {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      gap: 1rem;\n      margin-block-end: 2rem;\n    }\n    .file-picker .file-picker-actions .btn {\n      display: flex;\n      align-items: center;\n      gap: 0.5rem;\n      padding: 0.75rem 1.5rem;\n      border: 1px solid transparent;\n      border-radius: var(--radius-md);\n      font-weight: 500;\n      transition: all 0.2s ease;\n    }\n    .file-picker .file-picker-actions .btn:hover {\n      transform: translateY(-1px);\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    }\n    .file-picker .file-picker-actions .btn.btn-primary {\n      background: var(--color-primary);\n      color: var(--color-on-primary);\n      border-color: var(--color-primary);\n    }\n    .file-picker .file-picker-actions .btn:not(.btn-primary) {\n      background: var(--color-surface-container);\n      color: var(--color-on-surface);\n      border-color: var(--color-outline-variant);\n    }\n    .file-picker .file-picker-info {\n      max-inline-size: 400px;\n    }\n    .file-picker .file-picker-info p {\n      margin: 0.25rem 0;\n      font-size: 0.85rem;\n      color: var(--color-on-surface-variant);\n    }\n    .file-picker .file-picker-info p strong {\n      color: var(--color-on-surface);\n    }\n  }\n}\n@layer ux-file-manager-content {\n  /* Tighter actions track + explicit parent columns so subgrid rows align with the header */\n  :host(ui-file-manager-content), :host(ui-file-manager-content) :where(*) {\n    overflow: hidden;\n    scrollbar-width: none;\n    scrollbar-color: transparent transparent;\n    scrollbar-gutter: auto;\n  }\n  :host(ui-file-manager-content) {\n    perspective: 1000;\n    display: block;\n    inline-size: stretch;\n    block-size: stretch;\n    overflow: auto;\n    scrollbar-width: none;\n    scrollbar-color: transparent transparent;\n    scrollbar-gutter: auto;\n    grid-column: 1/-1;\n    z-index: 1;\n    position: relative;\n    contain: none;\n    isolation: isolate;\n    container-type: size;\n    touch-action: manipulation;\n    pointer-events: auto;\n    border-radius: 0;\n    margin: 0;\n    background-color: var(--color-surface, light-dark(#f7f8fc, #1a1d24));\n    color: var(--color-on-surface, light-dark(#1a1c1f, #e8eaed));\n  }\n  :host(ui-file-manager-content) {\n    /* Grid with subgrid columns */\n  }\n  :host(ui-file-manager-content) .fm-grid {\n    display: grid;\n    grid-template-columns: [icon] minmax(0px, 2.5rem) [name] minmax(0px, 1fr) [size] minmax(4.5rem, 6rem) [date] minmax(0px, 7.5rem) [actions] minmax(6.75rem, max-content);\n    grid-template-rows: auto minmax(0, 1fr);\n    row-gap: 0;\n    align-content: start;\n    inline-size: stretch;\n    min-block-size: 0;\n    block-size: 100%;\n    overflow: hidden;\n    scrollbar-width: none;\n    scrollbar-color: transparent transparent;\n    scrollbar-gutter: auto;\n    touch-action: manipulation;\n    pointer-events: none;\n  }\n  @container (inline-size <= 600px) {\n    :host(ui-file-manager-content) .fm-grid {\n      grid-template-columns: [icon] minmax(0px, 2.5rem) [name] minmax(0px, 1fr) [size] minmax(4.5rem, 6rem) [date] minmax(0px, 0px) [actions] minmax(6.75rem, max-content);\n    }\n  }\n  :host(ui-file-manager-content) .fm-grid-rows {\n    display: grid;\n    grid-template-columns: subgrid;\n    grid-auto-rows: 2.625rem;\n    grid-column: 1/-1;\n    align-content: start;\n    gap: 0.25rem;\n    overflow: auto;\n    scrollbar-gutter: stable;\n    min-block-size: 0;\n    scrollbar-width: thin;\n    scrollbar-color: color-mix(in oklab, var(--color-on-surface) 22%, transparent) transparent;\n    inline-size: stretch;\n    block-size: stretch;\n    z-index: 1;\n    /* WHY: Match host — avoid blank grid rows under transformed DWM / floating window ancestors. */\n    content-visibility: visible;\n    contain-intrinsic-size: 1px 2.625rem;\n    contain: strict;\n    touch-action: manipulation;\n    pointer-events: auto;\n  }\n  :host(ui-file-manager-content) .fm-grid-rows slot {\n    display: contents !important;\n  }\n  :host(ui-file-manager-content) :where(.row) {\n    background-color: color-mix(in oklab, var(--color-on-surface, #fff) 3%, transparent);\n    color: var(--color-on-surface);\n    display: grid;\n    grid-template-rows: minmax(0, 2.625rem) !important;\n    grid-column: 1/-1;\n    order: var(--order, 1) !important;\n    min-block-size: 0;\n    inline-size: stretch;\n    place-content: center;\n    place-items: center;\n    place-self: stretch;\n    justify-items: start;\n    padding: 0 0.65rem;\n    border-radius: 0.625rem;\n    border: none;\n    cursor: pointer;\n    pointer-events: auto;\n    touch-action: manipulation;\n    block-size: 2.625rem;\n    user-drag: none;\n    -webkit-user-drag: none;\n    text-align: start;\n    text-wrap: nowrap;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    letter-spacing: normal;\n    overflow: hidden;\n    gap: 0.35rem;\n    flex-wrap: nowrap;\n  }\n  @media (hover: hover) and (pointer: fine) {\n    :host(ui-file-manager-content) :where(.row) {\n      user-drag: element;\n      -webkit-user-drag: element;\n    }\n  }\n  :host(ui-file-manager-content) :where(.row) ui-icon {\n    inline-size: 1.25rem;\n    block-size: 1.25rem;\n    flex-shrink: 0;\n    place-content: center;\n    place-items: center;\n  }\n  :host(ui-file-manager-content) :where(.row) a, :host(ui-file-manager-content) :where(.row) span {\n    background-color: transparent !important;\n  }\n  :host(ui-file-manager-content) :where(.row) > * {\n    background-color: transparent !important;\n    min-block-size: 0;\n    block-size: auto;\n  }\n  :host(ui-file-manager-content) .row:hover {\n    background-color: color-mix(in oklab, var(--color-on-surface) 8%, transparent);\n  }\n  :host(ui-file-manager-content) .row:active {\n    background-color: color-mix(in oklab, var(--color-on-surface) 11%, transparent);\n  }\n  :host(ui-file-manager-content) .row:focus-visible {\n    outline: 2px solid var(--color-primary, #3794ff);\n    outline-offset: -2px;\n  }\n  :host(ui-file-manager-content) .c {\n    min-inline-size: 0;\n    display: flex;\n    flex-direction: row;\n    text-align: start;\n    text-wrap: nowrap;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    inline-size: auto;\n    place-content: center;\n    place-items: center;\n    justify-content: start;\n    color: inherit;\n    min-block-size: 0;\n    block-size: auto;\n  }\n  :host(ui-file-manager-content) .icon {\n    grid-column: icon;\n    place-content: center;\n    place-items: center;\n  }\n  :host(ui-file-manager-content) .name {\n    grid-column: name;\n    inline-size: stretch;\n  }\n  :host(ui-file-manager-content) .size {\n    grid-column: size;\n    justify-content: end;\n    text-align: end;\n  }\n  :host(ui-file-manager-content) .date {\n    grid-column: date;\n    justify-content: end;\n    text-align: end;\n  }\n  :host(ui-file-manager-content) .actions {\n    grid-column: actions;\n  }\n  :host(ui-file-manager-content) .row, :host(ui-file-manager-content) ::slotted(.row), :host(ui-file-manager-content) .fm-grid, :host(ui-file-manager-content) .fm-grid-header {\n    grid-template-columns: [icon] minmax(0px, 2.5rem) [name] minmax(0px, 1fr) [size] minmax(4.5rem, 6rem) [date] minmax(0px, 7.5rem) [actions] minmax(6.75rem, max-content);\n  }\n  @container (inline-size <= 600px) {\n    :host(ui-file-manager-content) .row, :host(ui-file-manager-content) ::slotted(.row), :host(ui-file-manager-content) .fm-grid, :host(ui-file-manager-content) .fm-grid-header {\n      grid-template-columns: [icon] minmax(0px, 2.5rem) [name] minmax(0px, 1fr) [size] minmax(4.5rem, 6rem) [date] minmax(0px, 0px) [actions] minmax(6.75rem, max-content);\n    }\n    :host(ui-file-manager-content) .date {\n      display: none !important;\n    }\n  }\n  :host(ui-file-manager-content) .actions {\n    background-color: color-mix(in oklab, var(--color-on-surface, #fff) 5%, transparent);\n    color: var(--color-on-surface);\n    pointer-events: none;\n    padding: 0.2rem;\n    max-inline-size: stretch;\n    border-radius: 999px;\n    border: none;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    place-content: center;\n    place-items: center;\n    place-self: center;\n    justify-content: flex-end;\n    justify-self: end;\n    inline-size: max-content;\n    block-size: 2.125rem;\n    gap: 0.15rem;\n    overflow: visible;\n  }\n  :host(ui-file-manager-content) .action-btn {\n    background-color: transparent;\n    color: var(--color-on-surface);\n    pointer-events: auto;\n    appearance: none;\n    border: none;\n    padding: 0;\n    border-radius: 999px;\n    cursor: pointer;\n    inline-size: 1.85rem;\n    block-size: 1.85rem;\n    min-inline-size: 1.85rem;\n    min-block-size: 1.85rem;\n    flex-shrink: 0;\n    aspect-ratio: 1;\n    display: inline-flex;\n    place-content: center;\n    place-items: center;\n    transition: background 0.14s ease, transform 0.1s ease;\n    position: relative;\n    overflow: hidden;\n    box-shadow: none;\n  }\n  :host(ui-file-manager-content) .action-btn:hover {\n    background-color: color-mix(in oklab, var(--color-on-surface) 12%, transparent);\n  }\n  :host(ui-file-manager-content) .action-btn:active {\n    transform: scale(0.94);\n  }\n  :host(ui-file-manager-content) .action-btn:focus-visible {\n    outline: 2px solid color-mix(in oklab, var(--color-primary, #3794ff) 55%, transparent);\n    outline-offset: 1px;\n  }\n  :host(ui-file-manager-content) .action-btn ui-icon {\n    inline-size: 1.0625rem;\n    block-size: 1.0625rem;\n    min-inline-size: 1.0625rem;\n    min-block-size: 1.0625rem;\n  }\n  :host(ui-file-manager-content) .fm-grid-header {\n    position: sticky !important;\n    display: grid;\n    grid-column: 1/-1;\n    inset-block-start: 0;\n    z-index: 8;\n    padding: 0.4rem 0.65rem;\n    border-radius: 0;\n    border: none;\n    box-shadow: 0 1px 0 color-mix(in oklab, var(--color-on-surface, #fff) 6%, transparent);\n    background: color-mix(in oklab, var(--color-on-surface, #fff) 3.5%, transparent);\n    font-size: 0.6875rem;\n    font-weight: 600;\n    letter-spacing: 0.04em;\n    text-transform: uppercase;\n    color: var(--color-on-surface-variant);\n    opacity: 1;\n    gap: 0.35rem;\n    min-block-size: 2rem;\n    place-content: center;\n    place-items: center;\n    justify-content: start;\n    justify-items: start;\n    text-align: start;\n    touch-action: manipulation;\n    pointer-events: auto;\n  }\n  :host(ui-file-manager-content) .fm-grid-header > * {\n    inline-size: auto;\n  }\n  :host(ui-file-manager-content) .fm-grid-header .c {\n    font-weight: 600;\n  }\n  :host(ui-file-manager-content) .fm-grid-header .icon {\n    grid-column: icon;\n  }\n  :host(ui-file-manager-content) .fm-grid-header .name {\n    grid-column: name;\n    inline-size: stretch;\n  }\n  :host(ui-file-manager-content) .fm-grid-header .size {\n    grid-column: size;\n    justify-content: end;\n    text-align: end;\n  }\n  :host(ui-file-manager-content) .fm-grid-header .date {\n    grid-column: date;\n    justify-content: end;\n    text-align: end;\n  }\n  :host(ui-file-manager-content) .fm-grid-header .actions {\n    grid-column: actions;\n    inline-size: stretch;\n    block-size: fit-content;\n    box-shadow: none;\n    padding: 0;\n    max-inline-size: stretch;\n    border-radius: 0;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    place-content: center;\n    place-items: center;\n    text-wrap: nowrap;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    gap: 0.25rem;\n    justify-content: flex-end;\n    justify-items: end;\n    justify-self: end;\n    text-align: end;\n  }\n}", De = /* @__PURE__ */ new WeakMap(), z = () => new Promise((e) => {
	if (typeof requestAnimationFrame == "function") {
		requestAnimationFrame(() => e());
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
}), B = "/assets/", Oe = [
	"/assets/crossword.css",
	"/assets/icons/",
	"/assets/imgs/",
	"/assets/wallpapers/"
], V = [
	"thin",
	"light",
	"regular",
	"bold",
	"fill",
	"duotone"
], ke = [
	"copy",
	"clipboard",
	"trash",
	"folder",
	"folder-open",
	"download",
	"upload",
	"arrow-up",
	"arrow-clockwise",
	"code",
	"eye",
	"gear",
	"printer",
	"file-doc",
	"file-text",
	"lightning",
	"pencil",
	"clock-counter-clockwise"
], H = (e) => {
	let t = (e || "/").trim() || "/", n = t.startsWith("/") ? t : `/${t}`;
	return n.endsWith("/") ? n : `${n}/`;
}, U = (e) => H(e).startsWith(B), W = (e) => H(e) === "/", G = (e) => U(e) || W(e), Ae = (e) => H(e).startsWith("/assets/icons/"), K = (e) => c(H(e)), je = (e) => {
	let t = H(e), n = /* @__PURE__ */ new Set();
	if (!Ae(t)) return [];
	n.add("/assets/icons/"), n.add("/assets/icons/phosphor/"), n.add("/assets/icons/duotone/");
	for (let e of V) n.add(`/assets/icons/phosphor/${e}/`), n.add(`/assets/icons/${e}/`);
	let r = (e) => {
		for (let t of ke) n.add(`${e}${t}.svg`);
	};
	if ((t === "/assets/icons/" || t === "/assets/icons/duotone/") && r("/assets/icons/duotone/"), t.startsWith("/assets/icons/phosphor/")) {
		let e = t.split("/").filter(Boolean);
		if (e.length >= 4) {
			let t = e[3];
			V.includes(t) && r(`/assets/icons/phosphor/${t}/`);
		}
	}
	if (t.startsWith("/assets/icons/")) {
		let e = t.split("/").filter(Boolean);
		if (e.length >= 3) {
			let t = e[2];
			V.includes(t) && r(`/assets/icons/${t}/`);
		}
	}
	return Array.from(n);
}, Me = class {
	#e = v([]);
	#t = v(!1);
	#n = v("");
	#r = null;
	#i = null;
	#a = !1;
	#o = null;
	#s = null;
	#c = null;
	#l = v(!1);
	host = null;
	pathRef = v("/");
	get path() {
		return this.pathRef?.value || "/";
	}
	set path(e) {
		this.pathRef && (this.pathRef.value = e || "/");
	}
	get entries() {
		return this.#e;
	}
	get readonly() {
		return this.#l?.value === !0;
	}
	constructor() {
		this.#e = v([]), this.pathRef ??= v("/"), y(this.pathRef, (e) => {
			this.#l.value = G(e || "/"), this.loadPath(e || "/");
		}), navigator?.storage?.getDirectory?.()?.then?.((e) => {
			this.#r = e, this.refreshList(this.path || "/");
		});
	}
	async listAssetEntries(e) {
		let t = H(e), r = new Set(Oe);
		for (let e of je(t)) r.add(e);
		try {
			let e = await caches.keys();
			for (let t of e) try {
				let e = await (await caches.open(t)).keys();
				for (let t of e) {
					let e = new URL(t.url).pathname;
					e.startsWith(B) && r.add(e);
				}
			} catch {}
		} catch {}
		let i = /* @__PURE__ */ new Set(), a = [];
		for (let e of r) {
			let n = e.startsWith("/") ? e : `/${e}`;
			if (!n.startsWith(t)) continue;
			let r = n.slice(t.length);
			if (!r) continue;
			let [o, ...s] = r.split("/").filter(Boolean);
			o && (s.length > 0 || n.endsWith("/") ? i.add(o) : a.push(o));
		}
		let o = Array.from(i).sort((e, t) => e.localeCompare(t)).map((e) => g({
			name: e,
			kind: "directory"
		})), s = Array.from(new Set(a)).filter((e) => !i.has(e)).sort((e, t) => e.localeCompare(t)).map((e) => {
			let t = g({
				name: e,
				kind: "file"
			});
			return t.type = n?.(e), t;
		});
		return [...o, ...s];
	}
	listVirtualRootEntries() {
		return [g({
			name: "user",
			kind: "directory"
		}), g({
			name: "assets",
			kind: "directory"
		})];
	}
	detachDirectoryObservers() {
		this.#c &&= (clearTimeout(this.#c), null), typeof this.#s == "function" && (this.#s(), this.#s = null), this.#i?.dispose && this.#i.dispose(), this.#i = null;
	}
	async collectDirectoryEntries() {
		let e = await this.#i?.entries?.(), t = [];
		if (Array.isArray(e)) t = e;
		else if (e && typeof e[Symbol.iterator] == "function") t = Array.from(e);
		else if (e && typeof e[Symbol.asyncIterator] == "function") for await (let n of e) t.push(n);
		return (await Promise.all((t || []).map(async (e) => Promise.try(async () => {
			let [t, r] = e;
			return De?.getOrInsertComputed?.(r, async () => {
				let e = r?.kind || (t?.endsWith?.("/") ? "directory" : "file"), i = g({
					name: t,
					kind: e,
					handle: r
				});
				if (e === "file") {
					i.type = n?.(t);
					try {
						let e = await r?.getFile?.();
						i.file = e, i.size = e?.size, i.lastModified = e?.lastModified, i.type = e?.type || i.type;
					} catch {}
				}
				return i;
			});
		})?.catch?.(console.warn.bind(console)))))?.filter?.((e) => e != null) || [];
	}
	async getDirectoryHandleByPath(e, t = !1) {
		let n = this.#r || await navigator?.storage?.getDirectory?.();
		if (!n) return null;
		let r = H(e).split("/").filter(Boolean), i = n;
		for (let e of r) i = await i.getDirectoryHandle(e, { create: t });
		return i;
	}
	normalizeUserRelativePath(e) {
		let t = H(e);
		return t === "/user/" ? "/" : t.startsWith("/user/") ? t.slice(5) : t;
	}
	async getOpfsRootHandle() {
		return this.#r = this.#r || await navigator?.storage?.getDirectory?.(), this.#r;
	}
	async getUserDirHandle(e, t = !1) {
		let n = await this.getOpfsRootHandle();
		if (!n) return null;
		let r = this.normalizeUserRelativePath(e).split("/").filter(Boolean), i = n;
		for (let e of r) i = await i.getDirectoryHandle(e, { create: t });
		return i;
	}
	async writeUserFile(e, t = this.path) {
		let n = await this.getUserDirHandle(t, !0);
		if (!n) return;
		let r = (e?.name || `file-${Date.now()}`).trim().replace(/\s+/g, "-"), i = await (await n.getFileHandle(r, { create: !0 })).createWritable();
		await i.write(e), await i.close();
	}
	async ingestFileIntoWorkspace(e, t) {
		await this.writeUserFile(e, t ?? this.path);
	}
	async removeUserEntry(e, t = !0) {
		let n = await this.getOpfsRootHandle();
		if (!n) return !1;
		let r = this.normalizeUserRelativePath(e).replace(/\/+$/g, "").split("/").filter(Boolean);
		if (!r.length) return !1;
		let i = r.pop(), a = n;
		for (let e of r) a = await a.getDirectoryHandle(e, { create: !1 });
		return await a.removeEntry(i, { recursive: t }), !0;
	}
	async renameUserFile(e, t) {
		let n = await this.getOpfsRootHandle();
		if (!n) return;
		let r = this.normalizeUserRelativePath(e).replace(/\/+$/g, "").split("/").filter(Boolean);
		if (!r.length) return;
		let i = r.pop(), a = n;
		for (let e of r) a = await a.getDirectoryHandle(e, { create: !1 });
		let o = await (await a.getFileHandle(i, { create: !1 })).getFile(), s = (t || "").trim().replace(/\s+/g, "-");
		if (!s || s === i) return;
		let c = await (await a.getFileHandle(s, { create: !0 })).createWritable();
		await c.write(o), await c.close(), await a.removeEntry(i);
	}
	async extractFilesFromData(e) {
		let t = [], n = Date.now(), r = (e) => {
			let t = (e || "").toLowerCase();
			return t.includes("css") ? "css" : t.includes("json") ? "json" : t.includes("markdown") ? "md" : t.includes("svg") ? "svg" : t.includes("png") ? "png" : t.includes("jpeg") || t.includes("jpg") ? "jpg" : t.includes("gif") ? "gif" : t.includes("webp") ? "webp" : t.includes("plain") ? "txt" : "bin";
		}, i = Array.from(e?.files ?? []).filter((e) => e instanceof File);
		t.push(...i);
		let a = Array.from(e?.items ?? []);
		for (let e of a) {
			if (e?.kind === "file" && typeof e?.getAsFile == "function") {
				let n = e.getAsFile();
				n instanceof File && t.push(n);
				continue;
			}
			let i = Array.from(e?.types ?? []);
			if (typeof e?.getType == "function" && i.length > 0) {
				let a = String(i[0] || "");
				try {
					let i = await e.getType(a);
					if (!i) continue;
					let o = r(i.type || a);
					t.push(new File([i], `clipboard-${n}-${t.length}.${o}`, {
						type: i.type || a,
						lastModified: n
					}));
				} catch {}
			}
		}
		return t;
	}
	async readEntriesFromDirectory(e) {
		if (!e) return [];
		let t = [];
		for await (let [r, i] of e.entries()) {
			let e = i?.kind || (r?.endsWith?.("/") ? "directory" : "file"), a = g({
				name: r,
				kind: e,
				handle: i
			});
			if (e === "file") {
				a.type = n?.(r);
				try {
					let e = await i?.getFile?.();
					a.file = e, a.size = e?.size, a.lastModified = e?.lastModified, a.type = e?.type || a.type;
				} catch {}
			}
			t.push(a);
		}
		return t;
	}
	async listUserEntriesDirect(e, t = !1) {
		let n = H(e), r = n.replace(/^\/user\/?/, "/"), i = n, a = [], o = (e) => {
			e && (a.includes(e) || a.push(e));
		};
		o(await this.getDirectoryHandleByPath(r, !1).catch(() => null)), i !== r && o(await this.getDirectoryHandleByPath(i, !1).catch(() => null)), !a.length && t && o(await this.getDirectoryHandleByPath(r, !0).catch(() => null));
		let s = /* @__PURE__ */ new Map();
		for (let e of a) {
			let t = await this.readEntriesFromDirectory(e);
			for (let e of t) {
				if (!e?.name) continue;
				let t = `${e.kind}:${e.name}`;
				s.has(t) || s.set(t, e);
			}
		}
		return Array.from(s.values());
	}
	applyEntries(e) {
		let t = /* @__PURE__ */ new Map();
		for (let n of e || []) {
			if (!n || !n.name) continue;
			let e = `${n.kind}:${n.name}`;
			t.has(e) || t.set(e, n);
		}
		this.#e.value = Array.from(t.values()), this.dispatchEvent(new CustomEvent("entries-updated", {
			detail: {
				path: this.path,
				count: t.size
			},
			bubbles: !0,
			composed: !0
		}));
	}
	async itemAction(e) {
		let t = this, n = {
			path: (t.path || "/") + e?.name,
			item: e,
			originalEvent: null
		}, r = new CustomEvent("open-item", {
			detail: n,
			bubbles: !0,
			composed: !0,
			cancelable: !0
		});
		if (this.host?.dispatchEvent(r), !r.defaultPrevented) if (e?.kind === "directory") t.path = (t.path?.endsWith?.("/") ? t.path : t.path + "/") + e?.name + "/";
		else {
			let r = (t.path || "/") + (e?.name || "");
			!e?.file && U(r) && (e.file = await o(r).catch(() => null), e.file && (e.size = e.file.size, e.lastModified = e.file.lastModified, e.type = e.file.type || e.type));
			let i = new CustomEvent("open", {
				detail: n,
				bubbles: !0,
				composed: !0
			});
			this.host?.dispatchEvent(i);
		}
	}
	async requestUse() {}
	async refreshList(e = this.path) {
		return await this.loadPath(e), this;
	}
	async loadPath(t = this.path) {
		if (this.#a) return typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(() => this.loadPath(t), { timeout: 1e3 }) : globalThis.setTimeout(() => this.loadPath(t), 0);
		this.#a = !0;
		try {
			this.#t.value = !0, this.#n.value = "";
			let n = H(t?.value || t || this.path || "/");
			if (this.detachDirectoryObservers(), W(n)) return this.applyEntries(this.listVirtualRootEntries()), this;
			if (U(n)) return this.applyEntries(await this.listAssetEntries(n)), this;
			if (K(n)) {
				let e = await this.listUserEntriesDirect(n, !0);
				return this.applyEntries(e), this;
			}
			try {
				this.#i = e(this.#r, n, { create: !1 }), await this.#i;
			} catch (t) {
				if (!K(n)) throw t;
				this.#i = e(this.#r, n, { create: !0 }), await this.#i;
			}
			console.log("rel", n);
			let r = async () => {
				let e = await this.collectDirectoryEntries();
				e?.length != null && e?.length >= 0 && typeof e?.length == "number" && this.applyEntries(e);
			};
			await r()?.catch?.(console.warn.bind(console)), this.#s = y(await this.#i?.getMap?.() ?? [], () => {
				this.#c && clearTimeout(this.#c), this.#c = setTimeout(() => r(), 50);
			});
		} catch (e) {
			this.#n.value = e?.message || String(e || ""), this.applyEntries([]), console.warn(e);
		} finally {
			this.#t.value = !1, this.#a = !1;
		}
		return this;
	}
	onRowClick = (e, t) => {
		t.preventDefault(), this.itemAction(e);
	};
	onRowDblClick = (e, t) => {
		t.preventDefault(), this.itemAction(e);
	};
	onRowDragStart = (e, t) => {
		if (!t.dataTransfer) return;
		t.dataTransfer.effectAllowed = "copyMove";
		let n = (this.path || "/") + (e?.name || "");
		t.dataTransfer.setData("text/plain", n), t.dataTransfer.setData("text/uri-list", n), e?.file && (t.dataTransfer.setData("DownloadURL", e?.file?.type + ":" + e?.file?.name + ":" + URL.createObjectURL(e?.file)), t.dataTransfer.items.add(e?.file));
	};
	async onMenuAction(e, t, n) {
		try {
			let n = e?.name;
			if (!t) return;
			let r = (this.path || "/") + (n || "");
			switch (t) {
				case "delete":
				case "rename":
				case "movePath":
					if (this.readonly || G(r)) {
						this.dispatchEvent(new CustomEvent("readonly-blocked", {
							detail: {
								action: t,
								path: r
							},
							bubbles: !0,
							composed: !0
						}));
						break;
					}
					if (t === "delete") {
						K(r) ? await this.removeUserEntry(r, !0) : await l(this.#r, r), await this.refreshList(this.path);
						break;
					}
					if (t === "rename") {
						if (e?.kind === "file") {
							let e = prompt("Rename to:", n);
							e && e !== n && (K(r) ? await this.renameUserFile(r ?? "", e ?? "") : await this.renameFile(r ?? "", e ?? ""), await this.refreshList(this.path));
						}
						break;
					}
					break;
				case "open":
					await this.itemAction(e);
					break;
				case "view":
					this.dispatchEvent(new CustomEvent("context-action", { detail: {
						action: "view",
						item: e
					} }));
					break;
				case "attach-workcenter":
					this.dispatchEvent(new CustomEvent("context-action", { detail: {
						action: "attach-workcenter",
						item: e
					} }));
					break;
				case "download":
					Promise.try(async () => {
						if (U(r)) {
							let e = await o(r);
							e && await h(e);
							return;
						}
						e?.kind === "file" ? await h(await b(this.#r, r, { create: !1 })) : await h(await te(this.#r, r, { create: !1 }));
					}).catch(console.warn);
					break;
				case "copyPath":
					this.#o = {
						items: [r],
						cut: !1
					};
					try {
						await z(), await navigator.clipboard?.writeText?.(r);
					} catch {}
					break;
				case "copy":
					this.#o = {
						items: [r],
						cut: !1
					};
					try {
						await z(), await navigator.clipboard?.writeText?.(r);
					} catch {}
					break;
			}
		} catch (e) {
			console.warn(e), this.#n.value = e?.message || String(e || "");
		}
	}
	async renameFile(e, t) {
		let n = await (await b(this.#r, e, { create: !1 }))?.getFile?.();
		n && (await b(this.#r, t, { create: !0 }).catch(() => null), await oe(this.#r, this.path + t, n), await l(this.#r, this.path + e));
	}
	async requestUpload() {
		if (!(this.readonly || G(this.path))) try {
			let e = window?.showOpenFilePicker;
			if (e && K(this.path)) {
				let t = await e({ multiple: !0 }).catch(() => []);
				for (let e of t || []) {
					let t = await e?.getFile?.();
					t instanceof File && await this.writeUserFile(t, this.path);
				}
			} else await u(this.path, null);
			await this.refreshList(this.path);
		} catch (e) {
			console.warn(e);
		}
	}
	async requestPaste() {
		if (!(this.readonly || G(this.path))) try {
			try {
				await z();
				let e = await navigator.clipboard.read();
				if (e && e.length > 0) {
					let t = await this.extractFilesFromData(e);
					if (t.length > 0 && K(this.path)) {
						for (let e of t) await this.writeUserFile(e, this.path);
						await this.refreshList(this.path);
						return;
					}
				}
			} catch {}
			let e = "";
			try {
				await z(), e = await navigator.clipboard?.readText?.();
			} catch {}
			let t = this.#o?.items || [];
			if (e) {
				await i({ getData: (t) => t === "text/plain" ? e : "" }, this.path || "/"), await this.refreshList(this.path);
				return;
			}
			if (t.length > 0) {
				let e = t.join("\n");
				if (K(this.path) && t.every((e) => String(e || "").startsWith("/user/"))) {
					for (let e of t) {
						let t = await s(this.#r, e).catch(() => null);
						t instanceof File && (await this.writeUserFile(t, this.path), this.#o?.cut && await this.removeUserEntry(e, !0).catch(() => null));
					}
					this.#o?.cut && (this.#o = null);
				} else await i({ getData: (t) => t === "text/plain" ? e : "" }, this.path || "/");
				await this.refreshList(this.path);
			}
		} catch (e) {
			console.warn(e);
		}
	}
	onPaste(e) {
		if (!(this.readonly || G(this.path))) {
			if (e.preventDefault(), e.clipboardData || e.dataTransfer) {
				Promise.try(async () => {
					let t = e.clipboardData || e.dataTransfer, n = await this.extractFilesFromData(t);
					if (n.length > 0 && K(this.path)) for (let e of n) await this.writeUserFile(e, this.path);
					else await i(t, this.path || "/");
					await this.refreshList(this.path);
				}).catch(console.warn);
				return;
			}
			this.requestPaste();
		}
	}
	onCopy(e) {}
	async onDrop(e) {
		if (!(this.readonly || G(this.path)) && (e.preventDefault(), e.clipboardData || e.dataTransfer)) {
			let t = e.clipboardData || e.dataTransfer, n = await this.extractFilesFromData(t);
			if (n.length > 0 && K(this.path)) for (let e of n) await this.writeUserFile(e, this.path);
			else await i(t, this.path || "/");
			await this.refreshList(this.path);
			return;
		}
	}
	dispatchEvent(e) {
		this.host?.dispatchEvent(e);
	}
}, q = (e, t = "file") => e ? e.startsWith("image/") ? "image" : e.startsWith("audio/") ? "music" : e.startsWith("video/") ? "video" : e === "application/pdf" ? "file-text" : e.includes("zip") || e.includes("7z") || e.includes("rar") ? "file-archive" : e.includes("json") ? "brackets-curly" : e.includes("csv") ? "file-spreadsheet" : e.includes("xml") ? "code" : e.startsWith("text/") ? "file-text" : t : t, Ne = {
	md: "file-text",
	txt: "file-text",
	pdf: "file-pdf",
	doc: "file-doc",
	docx: "file-doc",
	png: "file-image",
	jpg: "file-image",
	jpeg: "file-image",
	gif: "file-image",
	svg: "file-image",
	webp: "file-image",
	js: "file-js",
	ts: "file-ts",
	jsx: "file-jsx",
	tsx: "file-tsx",
	html: "file-html",
	css: "file-css",
	scss: "file-css",
	json: "file-json",
	zip: "file-zip",
	tar: "file-zip",
	gz: "file-zip",
	rar: "file-zip",
	mp3: "file-audio",
	wav: "file-audio",
	mp4: "file-video",
	mov: "file-video",
	webm: "file-video"
}, Pe = (e) => Ne[e.split(".").pop()?.toLowerCase() || ""] || "file", Fe = (e, t) => typeof e == "string" ? e === "directory" ? "folder" : q(t || e || "") : e?.kind === "directory" ? "folder" : q(e?.type) || Pe(e?.name || ""), J = /* @__PURE__ */ new Map(), Ie = (e) => {
	if (e == null) return "";
	let t = e instanceof Date ? e.getTime() : e;
	if (J.has(t)) return J.get(t);
	let n = new Date(t).toLocaleString("en-US", {
		dateStyle: "short",
		timeStyle: "short"
	});
	return J.set(t, n), n;
};
//#endregion
//#region ../explorer-view/src/ts/FileManagerContent.ts
re();
var Le = f(Ee), Y = class extends R {
	gridRowsEl;
	gridEl;
	operativeInstance = null;
	operativeInstanceRef = v(null);
	#e = null;
	get entries() {
		return this.operativeInstance?.entries ?? [];
	}
	get path() {
		return this.operativeInstance?.path || "/";
	}
	set path(e) {
		this.operativeInstance && (this.operativeInstance.path = e || "/");
	}
	get pathRef() {
		return this.operativeInstance?.pathRef;
	}
	refreshList() {
		this.gridRowsEl && (this.gridRowsEl.innerHTML = ""), this.gridEl && (this.gridEl.innerHTML = ""), this.operativeInstance && this.operativeInstance.refreshList(this.path || "/").then(() => this.syncRows()).catch(console.warn);
	}
	onInitialize() {
		return super.onInitialize() ?? this;
	}
	bindDropHandlers() {
		let e = this;
		e && (t(e, "dragover", (e) => {
			_(e?.target, "ui-file-manager-content, ui-file-manager") && (e?.preventDefault?.(), e.dataTransfer && (e.dataTransfer.dropEffect = "copy"));
		}), t(e, "drop", (e) => {
			_(e?.target, "ui-file-manager-content, ui-file-manager") && (e?.preventDefault?.(), e?.stopPropagation?.(), this.operativeInstance?.onDrop?.(e));
		}));
	}
	onPaste(e) {
		_(e?.target, "ui-file-manager-content, ui-file-manager") && this.operativeInstance && this.operativeInstance.onPaste(e);
	}
	onCopy(e) {
		_(e?.target, "ui-file-manager-content, ui-file-manager") && this.operativeInstance && this.operativeInstance.onCopy(e);
	}
	byFirstTwoLetterOrName(e) {
		return ((e?.substring?.(0, 2)?.toUpperCase?.())?.charCodeAt?.(0) || 65) - 65;
	}
	constructor() {
		super(), this.operativeInstance ??= new Me(), this.operativeInstance.host = this, this.addEventListener("entries-updated", () => this.syncRows()), this.refreshList();
	}
	syncRows() {
		let e = this.#e;
		(!e || !e.isConnected) && (e = this.shadowRoot?.querySelector?.(".fm-grid:last-of-type .fm-grid-rows") ?? null, this.#e = e);
		let t = this.operativeInstance;
		if (!e || !t) return;
		let n = t.entries, r = Array.isArray(n) ? n : Array.isArray(n?.value) ? n.value : [], i = Array.isArray(r) ? r : [], a = /* @__PURE__ */ new Set();
		e.innerHTML = "";
		let o = document.createDocumentFragment();
		for (let e of i) {
			if (!e || typeof e != "object" || e.name == null) continue;
			let n = `${e.kind}:${e.name}`;
			a.has(n) || (a.add(n), o.append(this.makeListElement(e, t)));
		}
		e.append(o);
	}
	makeListElement(e, t) {
		let n = t, r = e?.kind === "file" || e?.file, i = p`<div draggable="${r}" class="row c2-surface"
            on:click=${(t) => requestAnimationFrame(() => n.onRowClick?.(e, t))}
            on:dblclick=${(t) => requestAnimationFrame(() => n.onRowDblClick?.(e, t))}
            on:dragstart=${(t) => n.onRowDragStart?.(e, t)}
            data-id=${e?.name || ""}
        >
            <div style="pointer-events: none; background-color: transparent;" class="c icon"><ui-icon icon=${Fe(e)} /></div>
            <div style="pointer-events: none; background-color: transparent;" class="c name" title=${e?.name || ""}>${e?.name || ""}</div>
            <div style="pointer-events: none; background-color: transparent;" class="c size">${r ? e?.size ?? "" : ""}</div>
            <div style="pointer-events: none; background-color: transparent;" class="c date">${r ? Ie(e?.lastModified ?? 0) : ""}</div>
            <div style="pointer-events: none; background-color: transparent;" class="c actions">
                <button class="action-btn" title="Copy Path" on:click=${(t) => {
			t.stopPropagation(), requestAnimationFrame(() => n.onMenuAction?.(e, "copyPath", t));
		}}>
                    <ui-icon icon="copy" />
                </button>
                <button class="action-btn" title="Copy" on:click=${(t) => {
			t.stopPropagation(), requestAnimationFrame(() => n.onMenuAction?.(e, "copy", t));
		}}>
                    <ui-icon icon="clipboard" />
                </button>
                <button class="action-btn" title="Delete" on:click=${(t) => {
			t.stopPropagation(), requestAnimationFrame(() => n.onMenuAction?.(e, "delete", t));
		}}>
                    <ui-icon icon="trash" />
                </button>
            </div>
        </div>`;
		return ie(i, "--order", this.byFirstTwoLetterOrName(e?.name ?? ""), ae), i;
	}
	styles = () => Le;
	render = function() {
		let e = this, t = p`<div class="fm-grid-header">
            <div class="c icon">@</div>
            <div class="c name">Name</div>
            <div class="c size">Size</div>
            <div class="c date">Modified</div>
            <div class="c actions">Actions</div>
        </div>`, n = e.operativeInstance;
		if (!n) return "";
		let r = p`<div class="fm-grid-rows" style="will-change: contents;"></div>`;
		return this.#e = r, ge?.(r, n.onMenuAction.bind(n), e.entries), queueMicrotask(() => {
			e.bindDropHandlers();
			let t = e.shadowRoot, n = Array.from(t?.querySelectorAll?.(".fm-grid") || []);
			if (n.length > 1) {
				let t = n.at(-1);
				for (let e of n) e !== t && e.remove();
				e.#e = t.querySelector(".fm-grid-rows");
			}
			e.syncRows();
		}), p`<div class="fm-grid" part="grid">
            ${t}
            ${r}
        </div>`;
	};
};
E([m({
	source: "query-shadow",
	name: ".fm-grid-rows"
})], Y.prototype, "gridRowsEl", void 0), E([m({
	source: "query-shadow",
	name: ".fm-grid"
})], Y.prototype, "gridEl", void 0), Y = E([d("ui-file-manager-content")], Y);
var Re = Y, ze = f("@charset \"UTF-8\";\n/* ai-refactor: optimized/refactored at 2026-02-13T00:45:15Z */\n/* ai-refactor: optimized/refactored at 2026-02-13T00:45:12Z */\n@layer tokens, base, layout, utilities, shells, shell, views, view, viewer, components, ux-layer, markdown, essentials, print, print-breaks, overrides;\n@layer components {\n  button,\n  .btn {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--space-sm);\n    padding-block: 0px;\n    padding-inline: 0px;\n    font-size: var(--font-size-sm);\n    font-weight: 500;\n    border-radius: var(--radius-md);\n    background: var(--color-bg-alt);\n    color: var(--color-fg);\n    border: 1px solid var(--color-border);\n    cursor: pointer;\n    transition: all var(--transition-fast);\n  }\n  button:hover:not(:disabled),\n  .btn:hover:not(:disabled) {\n    background: var(--color-border);\n  }\n  button:focus-visible,\n  .btn:focus-visible {\n    outline: 2px solid var(--color-primary);\n    outline-offset: 2px;\n  }\n  button:disabled,\n  .btn:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  .btn {\n    --ui-bg: var(--color-surface-container-high);\n    --ui-fg: var(--color-on-surface);\n    --ui-bg-hover: var(--color-surface-container-highest);\n    --ui-ring: var(--color-primary);\n    --ui-radius: var(--radius-lg);\n    --ui-pad-y: var(--space-sm);\n    --ui-pad-x: var(--space-lg);\n    --ui-font-size: var(--text-sm);\n    --ui-font-weight: var(--font-weight-semibold);\n    --ui-min-h: 40px;\n    --ui-opacity: 1;\n    appearance: none;\n    border: none;\n    background: var(--ui-bg);\n    color: var(--ui-fg);\n    border-radius: var(--ui-radius);\n    padding: max(var(--ui-pad-y, 0px), 0px) max(var(--ui-pad-x, 0px), 0px);\n    font-size: var(--ui-font-size);\n    font-weight: var(--ui-font-weight);\n    letter-spacing: 0.01em;\n    line-height: 1.2;\n    block-size: calc-size(fit-content, max(var(--ui-min-h), size));\n    transition: background-color var(--motion-fast), box-shadow var(--motion-fast), transform var(--motion-fast);\n    box-shadow: var(--elev-0);\n    user-select: none;\n    touch-action: manipulation;\n    pointer-events: auto;\n    gap: var(--space-xs);\n    text-transform: none;\n    opacity: var(--ui-opacity);\n    min-block-size: fit-content;\n    min-inline-size: calc-size(fit-content, size + 0.5rem + var(--icon-size, 1rem));\n    max-inline-size: none;\n    max-block-size: stretch;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    text-wrap: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    text-align: center;\n    text-decoration: none;\n    text-shadow: none;\n    text-rendering: auto;\n    contain: none;\n    container-type: normal;\n    place-items: center;\n    place-content: center;\n    justify-content: safe center;\n    justify-items: safe center;\n    align-content: safe center;\n    align-items: safe center;\n  }\n  .btn > ui-icon {\n    flex-shrink: 0;\n    pointer-events: none;\n    color: inherit;\n    align-self: center;\n    vertical-align: middle;\n  }\n  @media (max-width: 480px) {\n    .btn.btn-icon {\n      font-size: 0px !important;\n      aspect-ratio: 1/1;\n      block-size: fit-content;\n      max-block-size: stretch;\n      min-inline-size: 0px;\n      max-inline-size: fit-content;\n      gap: 0px;\n    }\n    .btn.btn-icon .btn-text,\n    .btn.btn-icon span:not(.sr-only) {\n      display: none !important;\n    }\n  }\n  .btn:hover {\n    background: var(--ui-bg-hover);\n    box-shadow: var(--elev-1);\n    transform: translateY(-1px);\n  }\n  .btn:active {\n    transform: translateY(0);\n    box-shadow: var(--elev-0);\n  }\n  .btn:focus-visible {\n    outline: none;\n    box-shadow: 0 0 0 3px color-mix(in oklab, var(--ui-ring) 35%, transparent);\n  }\n  .btn:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n    transform: none !important;\n  }\n  .btn:disabled:hover {\n    background: var(--color-surface-container-high);\n    box-shadow: var(--elev-0);\n  }\n  .btn.primary, .btn.active {\n    --ui-bg: var(--color-primary);\n    --ui-fg: var(--color-on-primary);\n    --ui-ring: var(--color-primary);\n  }\n  .btn.primary {\n    --ui-bg-hover: color-mix(in oklab, var(--color-primary) 90%, black);\n  }\n  .btn.active {\n    box-shadow: var(--elev-1);\n  }\n  .btn.small {\n    --ui-pad-y: var(--space-xs);\n    --ui-pad-x: var(--space-md);\n    --ui-font-size: var(--text-xs);\n    --ui-min-h: 32px;\n    --ui-radius: var(--radius-md);\n  }\n  .btn.icon-btn {\n    inline-size: 40px;\n    block-size: 40px;\n    --ui-pad-y: 0px;\n    --ui-pad-x: 0px;\n    --ui-radius: 9999px;\n    --ui-font-size: var(--text-lg);\n  }\n  .btn[data-action=open-md], .btn[data-action=export-md], .btn[data-action=export-docx] {\n    --ui-font-size: 12px;\n    --ui-pad-x: 8px;\n    --ui-pad-y: 0px;\n    --ui-min-h: 28px;\n  }\n  .btn:is([data-action=view-markdown-viewer],\n  [data-action=view-markdown-editor],\n  [data-action=view-rich-editor],\n  [data-action=view-settings],\n  [data-action=view-history],\n  [data-action=view-workcenter]) {\n    --ui-font-size: 13px;\n    --ui-font-weight: 500;\n    --ui-pad-x: 12px;\n    --ui-pad-y: 0px;\n    --ui-min-h: 32px;\n    --ui-radius: 16px;\n    text-transform: capitalize;\n  }\n  .btn:is([data-action=view-markdown-viewer],\n  [data-action=view-markdown-editor],\n  [data-action=view-rich-editor],\n  [data-action=view-settings],\n  [data-action=view-history],\n  [data-action=view-workcenter][data-current],\n  [data-action=view-workcenter].active) {\n    --ui-bg: var(--color-surface-container-highest);\n    --ui-fg: var(--color-primary);\n    --ui-ring: var(--color-primary);\n  }\n  .btn:is([data-action=toggle-edit],\n  [data-action=snip],\n  [data-action=solve],\n  [data-action=code],\n  [data-action=css],\n  [data-action=voice],\n  [data-action=edit-templates],\n  [data-action=recognize],\n  [data-action=analyze],\n  [data-action=select-files],\n  [data-action=clear-prompt],\n  [data-action=view-full-history]) {\n    --ui-font-size: 12px;\n    --ui-pad-x: 8px;\n    --ui-pad-y: 0px;\n    --ui-min-h: 28px;\n    --ui-radius: 14px;\n  }\n  .btn:has(> ui-icon):not(:has(> *:not(ui-icon))), .btn:has(> span:only-of-type:empty) {\n    font-size: 0px !important;\n    aspect-ratio: 1/1;\n    block-size: fit-content;\n    max-block-size: stretch;\n    min-inline-size: 0px;\n    max-inline-size: fit-content;\n    gap: 0px;\n    overflow: visible;\n  }\n  .btn:has(> ui-icon):not(:has(> *:not(ui-icon))) span:not(.sr-only), .btn:has(> span:only-of-type:empty) span:not(.sr-only) {\n    display: none !important;\n  }\n  .btn-primary {\n    background: var(--color-primary);\n    color: white;\n    border-color: var(--color-primary);\n  }\n  .btn-primary:hover:not(:disabled) {\n    background: var(--color-primary-hover);\n    border-color: var(--color-primary-hover);\n  }\n  @media (max-inline-size: 768px) {\n    .btn {\n      --ui-pad-y: var(--space-xs);\n      --ui-pad-x: var(--space-md);\n      --ui-font-size: var(--text-xs);\n      --ui-min-h: 36px;\n    }\n  }\n  @media (max-inline-size: 480px) {\n    .btn {\n      --ui-pad-y: var(--space-xs);\n      --ui-pad-x: var(--space-xs);\n      --ui-font-size: var(--text-xs);\n      --ui-min-h: 32px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n    .btn.btn-icon {\n      overflow: visible;\n    }\n  }\n  @media (prefers-reduced-motion: reduce) {\n    .btn {\n      transition: none;\n      transform: none !important;\n    }\n    .btn:hover, .btn:active {\n      transform: none !important;\n    }\n  }\n}\n@layer utilities {\n  .round-decor {\n    --background-tone-shift: 0;\n    padding-block: 0.25rem;\n    border-radius: 0.25rem;\n    overflow: hidden;\n  }\n  .round-decor:empty {\n    padding: 0;\n    display: none;\n    pointer-events: none;\n    visibility: collapse;\n  }\n  .time-format {\n    display: inline-flex;\n    flex-direction: row;\n    place-content: center;\n    place-items: center;\n    place-self: center;\n    padding: 0.125rem;\n    font: 500 0.9em \"InterVariable\", \"Inter\", \"Fira Mono\", \"Menlo\", \"Consolas\", monospace;\n    font-optical-sizing: auto;\n    font-variant-numeric: tabular-nums;\n    font-kerning: auto;\n    font-stretch: condensed;\n    font-width: condensed;\n    letter-spacing: -0.05em;\n    text-wrap: nowrap;\n    text-align: center;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n  .ui-ws-item {\n    cursor: pointer;\n    user-select: none;\n    pointer-events: auto;\n  }\n  .ui-ws-item span {\n    pointer-events: none;\n    aspect-ratio: 1/1;\n    inline-size: fit-content;\n    block-size: fit-content;\n    display: inline;\n  }\n  .ui-ws-item:active, .ui-ws-item:has(:active) {\n    will-change: inset, translate, transform, opacity, z-index;\n    cursor: grabbing;\n  }\n}\n@layer essentials {\n  @media print {\n    .ctx-menu, .ux-anchor, .component-loading, .component-error {\n      display: none !important;\n      visibility: hidden !important;\n      opacity: 0 !important;\n      pointer-events: none !important;\n      position: absolute !important;\n      inset: 0 !important;\n      z-index: -1 !important;\n      inline-size: 0 !important;\n      block-size: 0 !important;\n      max-inline-size: 0 !important;\n      max-block-size: 0 !important;\n      min-inline-size: 0 !important;\n      min-block-size: 0 !important;\n      margin: 0 !important;\n      padding: 0 !important;\n      border: none !important;\n      overflow: hidden !important;\n    }\n  }\n  @media screen {\n    :root, :host, :scope {\n      --font-family: \"InterVariable\", \"Inter\", \"Helvetica Neue\", \"Helvetica\", \"Calibri\", \"Roboto\", ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;\n    }\n    ui-window-frame,\n    ui-modal,\n    .ui-grid-item {\n      --opacity: 1;\n      --scale: 1;\n      --rotate: 0deg;\n      --translate-x: 0%;\n      --translate-y: 0%;\n      isolation: isolate;\n      content-visibility: auto;\n      transform-origin: 50% 50%;\n      transform-style: flat;\n      transform-box: fill-box;\n      translate: 0% 0% 0%;\n      opacity: var(--opacity, 1);\n      rotate: 0deg;\n      scale: 1;\n    }\n    .ctx-menu {\n      --font-family: \"InterVariable\", \"Inter\", \"Helvetica Neue\", \"Helvetica\", \"Calibri\", \"Roboto\", ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;\n      /*\n       * WHY: Menus are appended to `body` / overlay, outside `.view-explorer`, so app color\n       * tokens are often missing — without fallbacks text can match background (dark on dark).\n       */\n      color-scheme: light dark;\n    }\n    .ctx-menu,\n    .ctx-menu * {\n      visibility: visible;\n      content-visibility: visible;\n    }\n    .ctx-menu {\n      position: fixed;\n      z-index: 99999;\n      inline-size: max-content;\n      min-inline-size: 160px;\n      max-inline-size: min(240px, 100cqi);\n      block-size: fit-content;\n      padding: 0.25rem 0;\n      border: 1px solid var(--color-outline-variant, light-dark(#c9ced8, #474e5e));\n      border-radius: var(--radius-md, 10px);\n      background-color: var(--color-surface, light-dark(#f6f8fc, #1b2029));\n      color: var(--color-on-surface, light-dark(#12151c, #eceff7));\n      font-size: 0.875rem;\n      font-weight: 400;\n      box-shadow: 0 10px 28px light-dark(rgba(15, 23, 42, 0.14), rgba(0, 0, 0, 0.42)), 0 0 0 1px light-dark(rgba(15, 23, 42, 0.08), rgba(255, 255, 255, 0.07));\n      opacity: 1;\n      visibility: visible;\n      pointer-events: auto;\n      transform: scale3d(var(--scale, 1), var(--scale, 1), 1) translate3d(var(--translate-x, 0px), var(--translate-y, 0px), 0px);\n      transition: opacity 0.15s ease-out, visibility 0.15s ease-out, transform 0.15s ease-out;\n      font-family: var(--font-family, 'system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif') !important;\n      text-align: start;\n      display: flex;\n      flex-direction: column;\n      align-items: stretch;\n    }\n    .ctx-menu[data-hidden] {\n      opacity: 0;\n      visibility: hidden;\n      pointer-events: none;\n    }\n    .ctx-menu > * {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-start;\n      text-align: start;\n      inline-size: stretch;\n      min-block-size: 2rem;\n      gap: 0.5rem;\n      padding: 0.375rem 0.75rem;\n      border: none;\n      border-radius: var(--radius-sm, 8px);\n      outline: none;\n      position: relative;\n      background-color: transparent;\n      color: var(--color-on-surface, light-dark(#12151c, #eceff7));\n      cursor: pointer;\n      text-wrap: nowrap;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden;\n      pointer-events: auto;\n      transition: background-color 0.15s ease, color 0.15s ease;\n      font-family: var(--font-family, 'system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif') !important;\n    }\n    .ctx-menu > *:hover {\n      background-color: var(--color-surface-container-high, light-dark(#e8ecf4, #2a3140));\n      color: var(--color-on-surface, light-dark(#12151c, #eceff7));\n    }\n    .ctx-menu > *:active {\n      background-color: var(--color-surface-container-highest, light-dark(#dde3ee, #343b4d));\n      color: var(--color-on-surface, light-dark(#12151c, #eceff7));\n    }\n    .ctx-menu > *:focus-visible {\n      outline: 2px solid var(--color-primary, light-dark(#1d6fd1, #7eb8ff));\n      outline-offset: 1px;\n      background-color: var(--color-surface-container-high, light-dark(#e8ecf4, #2a3140));\n    }\n    .ctx-menu > *:not(.ctx-menu-separator) {\n      gap: 0.5rem;\n    }\n    .ctx-menu > * > * {\n      pointer-events: none;\n    }\n    .ctx-menu > * > span {\n      flex: 1 1 auto;\n      min-inline-size: 0;\n      text-align: start !important;\n      user-select: none;\n      pointer-events: none;\n      font-size: 0.875rem;\n      font-weight: 400;\n      line-height: 1.25;\n      color: inherit;\n    }\n    .ctx-menu > * > ui-icon {\n      --icon-size: 1rem;\n      flex-shrink: 0;\n      inline-size: var(--icon-size);\n      block-size: var(--icon-size);\n      color: var(--color-on-surface-variant, light-dark(#545c6f, #b4bfd4));\n      user-select: none;\n      pointer-events: none;\n    }\n    .ctx-menu > .ctx-menu-separator, .ctx-menu.ctx-menu-separator {\n      min-block-size: auto;\n      block-size: 1px;\n      margin: 0.125rem 0.375rem;\n      padding: 0;\n      background-color: var(--color-outline-variant, light-dark(#c9ced8, #474e5e));\n      opacity: 0.55;\n      pointer-events: none;\n    }\n    .ctx-menu {\n      /*\n       * `.grid-rows` applies subgrid + place(center) to children, which centers\n       * label text per row. Context menus must stay flex rows with start-aligned labels.\n       */\n    }\n    .ctx-menu.grid-rows {\n      display: flex !important;\n      flex-direction: column;\n      align-items: stretch;\n      grid-template-columns: unset !important;\n      grid-auto-rows: unset !important;\n    }\n    .ctx-menu.grid-rows > *:not(.ctx-menu-separator) {\n      display: flex !important;\n      flex-flow: row nowrap !important;\n      align-items: center !important;\n      justify-content: flex-start !important;\n      grid-column: unset !important;\n      grid-row: unset !important;\n      grid-template-columns: unset !important;\n      grid-template-rows: unset !important;\n      place-content: unset !important;\n      place-items: unset !important;\n    }\n    .ux-anchor {\n      --shift-x: var(--client-x, 0px);\n      --shift-y: var(--client-y, 0px);\n      --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n      --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n      inset-inline-start: max(var(--shift-x), 0px);\n      inset-block-start: max(var(--shift-y), var(--status-bar-padding, 0px));\n      inset-inline-end: auto;\n      inset-block-end: auto;\n      direction: ltr;\n      writing-mode: horizontal-tb;\n      translate: 0% 0% 0%;\n      transform: none;\n    }\n    .component-loading,\n    .component-error {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 2rem;\n      gap: 1rem;\n      color: var(--text-secondary, light-dark(#666, #aaa));\n    }\n    .component-loading .loading-spinner {\n      inline-size: 2rem;\n      block-size: 2rem;\n      border: 2px solid var(--border, light-dark(#ddd, #444));\n      border-block-start: 2px solid var(--primary, light-dark(#007bff, #5fa8ff));\n      border-radius: 50%;\n      animation: spin 1s linear infinite;\n    }\n    .component-error {\n      text-align: center;\n    }\n    .component-error h3 {\n      margin: 0;\n      color: var(--error, light-dark(#dc3545, #ff6b6b));\n    }\n    .component-error p {\n      margin: 0;\n    }\n    ui-icon {\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      inline-size: var(--icon-size, 1.25rem);\n      block-size: var(--icon-size, 1.25rem);\n      min-inline-size: var(--icon-size, 1.25rem);\n      min-block-size: var(--icon-size, 1.25rem);\n      color: currentColor;\n      fill: currentColor;\n      flex-shrink: 0;\n      vertical-align: middle;\n      opacity: 1;\n      visibility: visible;\n      /* When a parent uses font-size: 0 for layout, keep raster/mask math stable */\n      font-size: 1rem;\n    }\n    ui-icon svg,\n    ui-icon img {\n      inline-size: 100%;\n      block-size: 100%;\n      color: inherit;\n      fill: currentColor;\n    }\n    :is(button, .btn) > ui-icon {\n      color: inherit;\n    }\n    .file-picker {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      min-block-size: 300px;\n      padding: 2rem;\n      text-align: center;\n    }\n    .file-picker .file-picker-header {\n      margin-block-end: 2rem;\n    }\n    .file-picker .file-picker-header h2 {\n      margin: 0 0 0.5rem 0;\n      color: var(--color-on-surface);\n      font-size: 1.5rem;\n      font-weight: 600;\n    }\n    .file-picker .file-picker-header p {\n      margin: 0;\n      color: var(--color-on-surface-variant);\n      font-size: 0.9rem;\n    }\n    .file-picker .file-picker-actions {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      gap: 1rem;\n      margin-block-end: 2rem;\n    }\n    .file-picker .file-picker-actions .btn {\n      display: flex;\n      align-items: center;\n      gap: 0.5rem;\n      padding: 0.75rem 1.5rem;\n      border: 1px solid transparent;\n      border-radius: var(--radius-md);\n      font-weight: 500;\n      transition: all 0.2s ease;\n    }\n    .file-picker .file-picker-actions .btn:hover {\n      transform: translateY(-1px);\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    }\n    .file-picker .file-picker-actions .btn.btn-primary {\n      background: var(--color-primary);\n      color: var(--color-on-primary);\n      border-color: var(--color-primary);\n    }\n    .file-picker .file-picker-actions .btn:not(.btn-primary) {\n      background: var(--color-surface-container);\n      color: var(--color-on-surface);\n      border-color: var(--color-outline-variant);\n    }\n    .file-picker .file-picker-info {\n      max-inline-size: 400px;\n    }\n    .file-picker .file-picker-info p {\n      margin: 0.25rem 0;\n      font-size: 0.85rem;\n      color: var(--color-on-surface-variant);\n    }\n    .file-picker .file-picker-info p strong {\n      color: var(--color-on-surface);\n    }\n  }\n}\n@layer ux-file-manager {\n  :host(ui-file-manager), :host(ui-file-manager) :where(*) {\n    box-sizing: border-box;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n  }\n  :host(ui-file-manager) {\n    perspective: 1000;\n    container-type: inline-size;\n    display: grid;\n    inline-size: stretch;\n    block-size: stretch;\n    min-block-size: 0;\n    min-inline-size: 0;\n    /* WHY: `content-visibility: auto` can skip painting when ancestors use transform/stacking\n     * (e.g. `.wf-frame-body { transform: translateZ(0) }`), so lists “vanish” in window frames. */\n    content-visibility: visible;\n    border-radius: 0;\n    overflow: hidden;\n    margin: 0;\n    line-height: normal;\n    max-block-size: none;\n    max-inline-size: none;\n    flex-grow: 1;\n    background-color: var(--color-surface, light-dark(#f7f8fc, #1a1d24));\n    color: var(--color-on-surface, light-dark(#1a1c1f, #e8eaed));\n  }\n  :host(ui-file-manager) .fm-root {\n    gap: 0;\n    display: grid;\n    grid-template-columns: [content-col] minmax(0px, 1fr);\n    grid-template-rows: auto minmax(0px, 1fr);\n    inline-size: stretch;\n    block-size: stretch;\n    min-block-size: 0;\n    overflow: hidden;\n  }\n  :host(ui-file-manager) .fm-toolbar {\n    grid-column: 1/-1;\n    display: grid;\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n    grid-template-rows: minmax(0px, 1fr);\n    grid-auto-flow: column;\n    place-content: center;\n    place-items: center;\n    gap: 0.625rem;\n    border-radius: 0;\n    padding: 0.5rem 0.75rem;\n    line-height: normal;\n    background: var(--color-surface, light-dark(#f7f8fc, #1a1d24));\n    box-shadow: 0 1px 0 color-mix(in oklab, var(--color-on-surface, #fff) 6%, transparent);\n  }\n  :host(ui-file-manager) .fm-toolbar button, :host(ui-file-manager) .fm-toolbar input {\n    background-color: transparent;\n    color: var(--color-on-surface);\n  }\n  :host(ui-file-manager) .fm-toolbar input {\n    inline-size: stretch;\n    block-size: stretch;\n    border: none;\n    outline: none;\n    padding: 0.45rem 0.85rem;\n    overflow: auto;\n    border-radius: 999px;\n    font: 0.8125rem/1.35 var(--explorer-font-mono, ui-monospace, \"Cascadia Code\", \"SF Mono\", Consolas, monospace);\n    background: color-mix(in oklab, var(--color-on-surface, #fff) 6%, transparent);\n  }\n  :host(ui-file-manager) .fm-toolbar input:focus-visible {\n    box-shadow: 0 0 0 2px color-mix(in oklab, var(--color-primary, #3794ff) 45%, transparent);\n  }\n  :host(ui-file-manager) .fm-toolbar .btn {\n    transition: background 0.14s ease, transform 0.1s ease;\n    appearance: none;\n    border: 0;\n    padding: 0;\n    border-radius: 999px;\n    cursor: pointer;\n    inline-size: 2.5rem;\n    block-size: 2.5rem;\n    aspect-ratio: 1/1;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    background: transparent;\n  }\n  :host(ui-file-manager) .fm-toolbar .btn ui-icon {\n    inline-size: 1.25rem;\n    block-size: 1.25rem;\n    flex-shrink: 0;\n  }\n  :host(ui-file-manager) .fm-toolbar .btn:hover {\n    background: color-mix(in oklab, var(--color-on-surface) 9%, transparent);\n  }\n  :host(ui-file-manager) .fm-toolbar .btn:active {\n    transform: scale(0.96);\n  }\n  :host(ui-file-manager) .fm-toolbar .btn:focus-visible {\n    outline: 2px solid color-mix(in oklab, var(--color-primary, #3794ff) 55%, transparent);\n    outline-offset: 1px;\n  }\n  :host(ui-file-manager) .fm-toolbar > * {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    gap: 0.2rem;\n    block-size: fit-content;\n    min-block-size: stretch;\n    align-items: center;\n  }\n  :host(ui-file-manager) .fm-toolbar .fm-toolbar-left {\n    grid-column: 1;\n  }\n  :host(ui-file-manager) .fm-toolbar .fm-toolbar-left, :host(ui-file-manager) .fm-toolbar .fm-toolbar-right {\n    padding: 0.2rem;\n    border-radius: 999px;\n    background: color-mix(in oklab, var(--color-on-surface, #fff) 5.5%, transparent);\n  }\n  :host(ui-file-manager) .fm-toolbar .fm-toolbar-center {\n    grid-column: 2;\n    flex-grow: 1;\n    inline-size: stretch;\n    block-size: fit-content;\n    min-block-size: 2.5rem;\n    border-radius: 999px;\n    padding: 0;\n    overflow: hidden;\n    place-content: stretch;\n    place-items: stretch;\n    justify-content: start;\n    background: color-mix(in oklab, var(--color-on-surface, #fff) 5.5%, transparent);\n  }\n  :host(ui-file-manager) .fm-toolbar .fm-toolbar-center > * {\n    inline-size: stretch;\n    block-size: stretch;\n  }\n  :host(ui-file-manager) .fm-toolbar .fm-toolbar-center input {\n    padding-inline: 0.9rem;\n    inline-size: stretch;\n    background: transparent;\n  }\n  :host(ui-file-manager) .fm-toolbar .fm-toolbar-right {\n    grid-column: 3;\n  }\n  :host(ui-file-manager) .fm-sidebar {\n    grid-row: 2;\n    grid-column: sidebar-col;\n    align-content: start;\n    gap: 0.5rem;\n    padding: 0.5rem;\n    border-radius: 0.5rem;\n    line-height: normal;\n    justify-content: start;\n    justify-items: start;\n    text-align: start;\n    display: none;\n  }\n  :host(ui-file-manager) .fm-sidebar .sec {\n    display: grid;\n    gap: 0.25rem;\n    place-content: start;\n    place-items: start;\n    justify-content: start;\n    justify-items: start;\n  }\n  :host(ui-file-manager) .fm-sidebar .sec-title {\n    font-weight: 600;\n    opacity: 0.8;\n    padding-block: 0.25rem;\n    place-self: start;\n  }\n  :host(ui-file-manager) .fm-sidebar .link {\n    text-align: start;\n    appearance: none;\n    border: 0;\n    padding: 0.25rem 0.375rem;\n    border-radius: 0.375rem;\n    cursor: pointer;\n    line-height: normal;\n  }\n  :host(ui-file-manager) .fm-content {\n    grid-row: 2;\n    grid-column: content-col;\n    inline-size: stretch;\n    block-size: stretch;\n    min-block-size: 0;\n    overflow: hidden;\n    border-radius: 0;\n    padding: 0 0.35rem 0.45rem;\n    scrollbar-width: thin;\n    scrollbar-color: color-mix(in oklab, var(--color-on-surface) 22%, transparent) transparent;\n  }\n  :host(ui-file-manager) .status {\n    padding: 0.5rem;\n    opacity: 0.8;\n  }\n  :host(ui-file-manager) .status.error {\n    color: var(--error-color, crimson);\n  }\n  @container (inline-size < 520px) {\n    :host(ui-file-manager) .fm-content {\n      grid-column: 1/-1;\n    }\n    :host(ui-file-manager) .fm-root {\n      grid-column: 1/-1;\n    }\n    :host(ui-file-manager) .fm-grid {\n      grid-column: 1/-1;\n    }\n    :host(ui-file-manager) .fm-root[data-with-sidebar=true] {\n      grid-template-columns: [content-col] minmax(0px, 1fr);\n    }\n    :host(ui-file-manager) .fm-sidebar {\n      display: none !important;\n    }\n  }\n}"), X = class extends R {
	gridRowsEl;
	gridEl;
	sidebar = "auto";
	inlineSize;
	styles = () => ze;
	#e = null;
	constructor() {
		super();
	}
	get content() {
		return this?.querySelector?.("ui-file-manager-content");
	}
	get operative() {
		return this.content?.operativeInstance;
	}
	get pathRef() {
		return this.operative?.pathRef;
	}
	get path() {
		return this.content?.path || this.operative?.path || "/";
	}
	set path(e) {
		this.content && (this.content.path = e || "/"), this.operative && (this.operative.path = e || "/");
	}
	get input() {
		return this?.shadowRoot?.querySelector?.("input[name=\"address\"]");
	}
	get inputValue() {
		return this.input?.value || "/";
	}
	set inputValue(e) {
		this.input && (this.input.value = e || "/");
	}
	onInitialize() {
		let e = super.onInitialize() ?? this, t = Array.from(e.querySelectorAll("ui-file-manager-content")), n = t[0] ?? document.createElement("ui-file-manager-content");
		if (t.length || e.append(n), t.length > 1) for (let e of t.slice(1)) e?.remove?.();
		return queueMicrotask(() => {
			this.#e?.(), this.#e = null, this.pathRef && (this.#e = y(this.pathRef, (e) => {
				let t = this?.shadowRoot?.querySelector?.("input[name=\"address\"]");
				t && t instanceof HTMLInputElement && t.value != e && (t.value = e || "/");
			}));
		}), e;
	}
	onRender() {
		super.onRender();
		let e = new WeakRef(this);
		t(this, "keydown", (t) => {
			if (t.key === "Enter") {
				let t = e.deref(), n = (t?.querySelector?.("input[name=\"address\"]"))?.value?.trim?.() || "";
				n && t?.navigate(n);
			}
		});
	}
	get showSidebar() {
		let e = String(this.sidebar ?? "auto").toLowerCase();
		return e === "true" || e === "1" ? !0 : e === "false" || e === "0" ? !1 : (ee(this, "inlineSize")?.value ?? this.inlineSize ?? 0) >= 720;
	}
	async navigate(e) {
		this.path = x(e) || this.path || "/";
		let t = this?.shadowRoot?.querySelector?.("input[name=\"address\"]");
		t && t instanceof HTMLInputElement && t.value != this.path && (t.value = this.path || "/");
	}
	async goUp() {
		let e = (this.path || this.content?.path || "/").replace(/\/+$/g, "").split("/").filter(Boolean);
		if (e.length <= 1) {
			this.navigate(this.path = "/");
			return;
		}
		let t = x("/" + e.slice(0, -1).join("/") + "/");
		this.navigate(this.path = t || "/");
	}
	requestUpload() {
		this.operative?.requestUpload?.();
	}
	requestPaste() {
		this.operative?.requestPaste?.();
	}
	requestUse() {
		this.operative?.requestUse?.();
	}
	render = function() {
		let e = this, t = e.showSidebar, n = p`<div part="content" class="fm-content"><slot></slot></div>`;
		return p`<div part="root" class="fm-root" data-with-sidebar=${t}>${p`<div part="toolbar" class="fm-toolbar">
            <div class="fm-toolbar-left">
                <button class="btn" title="Up" on:click=${() => requestAnimationFrame(() => e.goUp())}><ui-icon icon="arrow-up"/></button>
                <button class="btn" title="Refresh" on:click=${() => requestAnimationFrame(() => e.navigate(e.inputValue || e.path || "/"))}><ui-icon icon="arrow-clockwise"/></button>
            </div>
            <div class="fm-toolbar-center"><form style="display: contents;" onsubmit="return false;">
                <input class="address c2-surface" autocomplete="off" type="text" name="address" value=${e.path || "/"} />
            </form></div>
            <div class="fm-toolbar-right">
                <button class="btn" title="Add" on:click=${() => requestAnimationFrame(() => e.requestUpload?.())}><ui-icon icon="upload"/></button>
                <button class="btn" title="Paste" on:click=${() => requestAnimationFrame(() => e.requestPaste?.())}><ui-icon icon="clipboard"/></button>
                <button class="btn" title="Use" on:click=${() => requestAnimationFrame(() => e.requestUse?.())}><ui-icon icon="hand-withdraw"/></button>
            </div>
        </div>`}${n}</div>`;
	};
};
E([m({
	source: "query-shadow",
	name: ".fm-grid-rows"
})], X.prototype, "gridRowsEl", void 0), E([m({
	source: "query-shadow",
	name: ".fm-grid"
})], X.prototype, "gridEl", void 0), E([m({
	source: "attr",
	name: "sidebar"
})], X.prototype, "sidebar", void 0), E([m({ source: "inline-size" })], X.prototype, "inlineSize", void 0), X = E([d("ui-file-manager")], X);
//#endregion
//#region ../explorer-view/src/index.scss?inline
var Be = "@charset \"UTF-8\";\n/* FL-UI file-manager chrome, scoped to the standalone explorer view. */\n@layer ux-file-manager {\n  :host(ui-file-manager), :host(ui-file-manager) :where(*) {\n    box-sizing: border-box;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n  }\n  :host(ui-file-manager) {\n    perspective: 1000;\n    container-type: inline-size;\n    display: grid;\n    inline-size: stretch;\n    block-size: stretch;\n    min-block-size: 0;\n    min-inline-size: 0;\n    /* WHY: `content-visibility: auto` can skip painting when ancestors use transform/stacking\n     * (e.g. `.wf-frame-body { transform: translateZ(0) }`), so lists “vanish” in window frames. */\n    content-visibility: visible;\n    border-radius: 0;\n    overflow: hidden;\n    margin: 0;\n    line-height: normal;\n    max-block-size: none;\n    max-inline-size: none;\n    flex-grow: 1;\n    background-color: var(--color-surface, light-dark(#f7f8fc, #1a1d24));\n    color: var(--color-on-surface, light-dark(#1a1c1f, #e8eaed));\n  }\n  :host(ui-file-manager) .fm-root {\n    gap: 0;\n    display: grid;\n    grid-template-columns: [content-col] minmax(0px, 1fr);\n    grid-template-rows: auto minmax(0px, 1fr);\n    inline-size: stretch;\n    block-size: stretch;\n    min-block-size: 0;\n    overflow: hidden;\n  }\n  :host(ui-file-manager) .fm-toolbar {\n    grid-column: 1/-1;\n    display: grid;\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n    grid-template-rows: minmax(0px, 1fr);\n    grid-auto-flow: column;\n    place-content: center;\n    place-items: center;\n    gap: 0.625rem;\n    border-radius: 0;\n    padding: 0.5rem 0.75rem;\n    line-height: normal;\n    background: var(--color-surface, light-dark(#f7f8fc, #1a1d24));\n    box-shadow: 0 1px 0 color-mix(in oklab, var(--color-on-surface, #fff) 6%, transparent);\n  }\n  :host(ui-file-manager) .fm-toolbar button, :host(ui-file-manager) .fm-toolbar input {\n    background-color: transparent;\n    color: var(--color-on-surface);\n  }\n  :host(ui-file-manager) .fm-toolbar input {\n    inline-size: stretch;\n    block-size: stretch;\n    border: none;\n    outline: none;\n    padding: 0.45rem 0.85rem;\n    overflow: auto;\n    border-radius: 999px;\n    font: 0.8125rem/1.35 var(--explorer-font-mono, ui-monospace, \"Cascadia Code\", \"SF Mono\", Consolas, monospace);\n    background: color-mix(in oklab, var(--color-on-surface, #fff) 6%, transparent);\n  }\n  :host(ui-file-manager) .fm-toolbar input:focus-visible {\n    box-shadow: 0 0 0 2px color-mix(in oklab, var(--color-primary, #3794ff) 45%, transparent);\n  }\n  :host(ui-file-manager) .fm-toolbar .btn {\n    transition: background 0.14s ease, transform 0.1s ease;\n    appearance: none;\n    border: 0;\n    padding: 0;\n    border-radius: 999px;\n    cursor: pointer;\n    inline-size: 2.5rem;\n    block-size: 2.5rem;\n    aspect-ratio: 1/1;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    background: transparent;\n  }\n  :host(ui-file-manager) .fm-toolbar .btn ui-icon {\n    inline-size: 1.25rem;\n    block-size: 1.25rem;\n    flex-shrink: 0;\n  }\n  :host(ui-file-manager) .fm-toolbar .btn:hover {\n    background: color-mix(in oklab, var(--color-on-surface) 9%, transparent);\n  }\n  :host(ui-file-manager) .fm-toolbar .btn:active {\n    transform: scale(0.96);\n  }\n  :host(ui-file-manager) .fm-toolbar .btn:focus-visible {\n    outline: 2px solid color-mix(in oklab, var(--color-primary, #3794ff) 55%, transparent);\n    outline-offset: 1px;\n  }\n  :host(ui-file-manager) .fm-toolbar > * {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    gap: 0.2rem;\n    block-size: fit-content;\n    min-block-size: stretch;\n    align-items: center;\n  }\n  :host(ui-file-manager) .fm-toolbar .fm-toolbar-left {\n    grid-column: 1;\n  }\n  :host(ui-file-manager) .fm-toolbar .fm-toolbar-left, :host(ui-file-manager) .fm-toolbar .fm-toolbar-right {\n    padding: 0.2rem;\n    border-radius: 999px;\n    background: color-mix(in oklab, var(--color-on-surface, #fff) 5.5%, transparent);\n  }\n  :host(ui-file-manager) .fm-toolbar .fm-toolbar-center {\n    grid-column: 2;\n    flex-grow: 1;\n    inline-size: stretch;\n    block-size: fit-content;\n    min-block-size: 2.5rem;\n    border-radius: 999px;\n    padding: 0;\n    overflow: hidden;\n    place-content: stretch;\n    place-items: stretch;\n    justify-content: start;\n    background: color-mix(in oklab, var(--color-on-surface, #fff) 5.5%, transparent);\n  }\n  :host(ui-file-manager) .fm-toolbar .fm-toolbar-center > * {\n    inline-size: stretch;\n    block-size: stretch;\n  }\n  :host(ui-file-manager) .fm-toolbar .fm-toolbar-center input {\n    padding-inline: 0.9rem;\n    inline-size: stretch;\n    background: transparent;\n  }\n  :host(ui-file-manager) .fm-toolbar .fm-toolbar-right {\n    grid-column: 3;\n  }\n  :host(ui-file-manager) .fm-sidebar {\n    grid-row: 2;\n    grid-column: sidebar-col;\n    align-content: start;\n    gap: 0.5rem;\n    padding: 0.5rem;\n    border-radius: 0.5rem;\n    line-height: normal;\n    justify-content: start;\n    justify-items: start;\n    text-align: start;\n    display: none;\n  }\n  :host(ui-file-manager) .fm-sidebar .sec {\n    display: grid;\n    gap: 0.25rem;\n    place-content: start;\n    place-items: start;\n    justify-content: start;\n    justify-items: start;\n  }\n  :host(ui-file-manager) .fm-sidebar .sec-title {\n    font-weight: 600;\n    opacity: 0.8;\n    padding-block: 0.25rem;\n    place-self: start;\n  }\n  :host(ui-file-manager) .fm-sidebar .link {\n    text-align: start;\n    appearance: none;\n    border: 0;\n    padding: 0.25rem 0.375rem;\n    border-radius: 0.375rem;\n    cursor: pointer;\n    line-height: normal;\n  }\n  :host(ui-file-manager) .fm-content {\n    grid-row: 2;\n    grid-column: content-col;\n    inline-size: stretch;\n    block-size: stretch;\n    min-block-size: 0;\n    overflow: hidden;\n    border-radius: 0;\n    padding: 0 0.35rem 0.45rem;\n    scrollbar-width: thin;\n    scrollbar-color: color-mix(in oklab, var(--color-on-surface) 22%, transparent) transparent;\n  }\n  :host(ui-file-manager) .status {\n    padding: 0.5rem;\n    opacity: 0.8;\n  }\n  :host(ui-file-manager) .status.error {\n    color: var(--error-color, crimson);\n  }\n  @container (inline-size < 520px) {\n    :host(ui-file-manager) .fm-content {\n      grid-column: 1/-1;\n    }\n    :host(ui-file-manager) .fm-root {\n      grid-column: 1/-1;\n    }\n    :host(ui-file-manager) .fm-grid {\n      grid-column: 1/-1;\n    }\n    :host(ui-file-manager) .fm-root[data-with-sidebar=true] {\n      grid-template-columns: [content-col] minmax(0px, 1fr);\n    }\n    :host(ui-file-manager) .fm-sidebar {\n      display: none !important;\n    }\n  }\n}\n@layer ux-file-manager-content {\n  /* Tighter actions track + explicit parent columns so subgrid rows align with the header */\n  :host(ui-file-manager-content), :host(ui-file-manager-content) :where(*) {\n    overflow: hidden;\n    scrollbar-width: none;\n    scrollbar-color: transparent transparent;\n    scrollbar-gutter: auto;\n  }\n  :host(ui-file-manager-content) {\n    perspective: 1000;\n    display: block;\n    inline-size: stretch;\n    block-size: stretch;\n    overflow: auto;\n    scrollbar-width: none;\n    scrollbar-color: transparent transparent;\n    scrollbar-gutter: auto;\n    grid-column: 1/-1;\n    z-index: 1;\n    position: relative;\n    contain: none;\n    isolation: isolate;\n    container-type: size;\n    touch-action: manipulation;\n    pointer-events: auto;\n    border-radius: 0;\n    margin: 0;\n    background-color: var(--color-surface, light-dark(#f7f8fc, #1a1d24));\n    color: var(--color-on-surface, light-dark(#1a1c1f, #e8eaed));\n  }\n  :host(ui-file-manager-content) {\n    /* Grid with subgrid columns */\n  }\n  :host(ui-file-manager-content) .fm-grid {\n    display: grid;\n    grid-template-columns: [icon] minmax(0px, 2.5rem) [name] minmax(0px, 1fr) [size] minmax(4.5rem, 6rem) [date] minmax(0px, 7.5rem) [actions] minmax(6.75rem, max-content);\n    grid-template-rows: auto minmax(0, 1fr);\n    row-gap: 0;\n    align-content: start;\n    inline-size: stretch;\n    min-block-size: 0;\n    block-size: 100%;\n    overflow: hidden;\n    scrollbar-width: none;\n    scrollbar-color: transparent transparent;\n    scrollbar-gutter: auto;\n    touch-action: manipulation;\n    pointer-events: none;\n  }\n  @container (inline-size <= 600px) {\n    :host(ui-file-manager-content) .fm-grid {\n      grid-template-columns: [icon] minmax(0px, 2.5rem) [name] minmax(0px, 1fr) [size] minmax(4.5rem, 6rem) [date] minmax(0px, 0px) [actions] minmax(6.75rem, max-content);\n    }\n  }\n  :host(ui-file-manager-content) .fm-grid-rows {\n    display: grid;\n    grid-template-columns: subgrid;\n    grid-auto-rows: 2.625rem;\n    grid-column: 1/-1;\n    align-content: start;\n    gap: 0.25rem;\n    overflow: auto;\n    scrollbar-gutter: stable;\n    min-block-size: 0;\n    scrollbar-width: thin;\n    scrollbar-color: color-mix(in oklab, var(--color-on-surface) 22%, transparent) transparent;\n    inline-size: stretch;\n    block-size: stretch;\n    z-index: 1;\n    /* WHY: Match host — avoid blank grid rows under transformed DWM / floating window ancestors. */\n    content-visibility: visible;\n    contain-intrinsic-size: 1px 2.625rem;\n    contain: strict;\n    touch-action: manipulation;\n    pointer-events: auto;\n  }\n  :host(ui-file-manager-content) .fm-grid-rows slot {\n    display: contents !important;\n  }\n  :host(ui-file-manager-content) :where(.row) {\n    background-color: color-mix(in oklab, var(--color-on-surface, #fff) 3%, transparent);\n    color: var(--color-on-surface);\n    display: grid;\n    grid-template-rows: minmax(0, 2.625rem) !important;\n    grid-column: 1/-1;\n    order: var(--order, 1) !important;\n    min-block-size: 0;\n    inline-size: stretch;\n    place-content: center;\n    place-items: center;\n    place-self: stretch;\n    justify-items: start;\n    padding: 0 0.65rem;\n    border-radius: 0.625rem;\n    border: none;\n    cursor: pointer;\n    pointer-events: auto;\n    touch-action: manipulation;\n    block-size: 2.625rem;\n    user-drag: none;\n    -webkit-user-drag: none;\n    text-align: start;\n    text-wrap: nowrap;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    letter-spacing: normal;\n    overflow: hidden;\n    gap: 0.35rem;\n    flex-wrap: nowrap;\n  }\n  @media (hover: hover) and (pointer: fine) {\n    :host(ui-file-manager-content) :where(.row) {\n      user-drag: element;\n      -webkit-user-drag: element;\n    }\n  }\n  :host(ui-file-manager-content) :where(.row) ui-icon {\n    inline-size: 1.25rem;\n    block-size: 1.25rem;\n    flex-shrink: 0;\n    place-content: center;\n    place-items: center;\n  }\n  :host(ui-file-manager-content) :where(.row) a, :host(ui-file-manager-content) :where(.row) span {\n    background-color: transparent !important;\n  }\n  :host(ui-file-manager-content) :where(.row) > * {\n    background-color: transparent !important;\n    min-block-size: 0;\n    block-size: auto;\n  }\n  :host(ui-file-manager-content) .row:hover {\n    background-color: color-mix(in oklab, var(--color-on-surface) 8%, transparent);\n  }\n  :host(ui-file-manager-content) .row:active {\n    background-color: color-mix(in oklab, var(--color-on-surface) 11%, transparent);\n  }\n  :host(ui-file-manager-content) .row:focus-visible {\n    outline: 2px solid var(--color-primary, #3794ff);\n    outline-offset: -2px;\n  }\n  :host(ui-file-manager-content) .c {\n    min-inline-size: 0;\n    display: flex;\n    flex-direction: row;\n    text-align: start;\n    text-wrap: nowrap;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    inline-size: auto;\n    place-content: center;\n    place-items: center;\n    justify-content: start;\n    color: inherit;\n    min-block-size: 0;\n    block-size: auto;\n  }\n  :host(ui-file-manager-content) .icon {\n    grid-column: icon;\n    place-content: center;\n    place-items: center;\n  }\n  :host(ui-file-manager-content) .name {\n    grid-column: name;\n    inline-size: stretch;\n  }\n  :host(ui-file-manager-content) .size {\n    grid-column: size;\n    justify-content: end;\n    text-align: end;\n  }\n  :host(ui-file-manager-content) .date {\n    grid-column: date;\n    justify-content: end;\n    text-align: end;\n  }\n  :host(ui-file-manager-content) .actions {\n    grid-column: actions;\n  }\n  :host(ui-file-manager-content) .row, :host(ui-file-manager-content) ::slotted(.row), :host(ui-file-manager-content) .fm-grid, :host(ui-file-manager-content) .fm-grid-header {\n    grid-template-columns: [icon] minmax(0px, 2.5rem) [name] minmax(0px, 1fr) [size] minmax(4.5rem, 6rem) [date] minmax(0px, 7.5rem) [actions] minmax(6.75rem, max-content);\n  }\n  @container (inline-size <= 600px) {\n    :host(ui-file-manager-content) .row, :host(ui-file-manager-content) ::slotted(.row), :host(ui-file-manager-content) .fm-grid, :host(ui-file-manager-content) .fm-grid-header {\n      grid-template-columns: [icon] minmax(0px, 2.5rem) [name] minmax(0px, 1fr) [size] minmax(4.5rem, 6rem) [date] minmax(0px, 0px) [actions] minmax(6.75rem, max-content);\n    }\n    :host(ui-file-manager-content) .date {\n      display: none !important;\n    }\n  }\n  :host(ui-file-manager-content) .actions {\n    background-color: color-mix(in oklab, var(--color-on-surface, #fff) 5%, transparent);\n    color: var(--color-on-surface);\n    pointer-events: none;\n    padding: 0.2rem;\n    max-inline-size: stretch;\n    border-radius: 999px;\n    border: none;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    place-content: center;\n    place-items: center;\n    place-self: center;\n    justify-content: flex-end;\n    justify-self: end;\n    inline-size: max-content;\n    block-size: 2.125rem;\n    gap: 0.15rem;\n    overflow: visible;\n  }\n  :host(ui-file-manager-content) .action-btn {\n    background-color: transparent;\n    color: var(--color-on-surface);\n    pointer-events: auto;\n    appearance: none;\n    border: none;\n    padding: 0;\n    border-radius: 999px;\n    cursor: pointer;\n    inline-size: 1.85rem;\n    block-size: 1.85rem;\n    min-inline-size: 1.85rem;\n    min-block-size: 1.85rem;\n    flex-shrink: 0;\n    aspect-ratio: 1;\n    display: inline-flex;\n    place-content: center;\n    place-items: center;\n    transition: background 0.14s ease, transform 0.1s ease;\n    position: relative;\n    overflow: hidden;\n    box-shadow: none;\n  }\n  :host(ui-file-manager-content) .action-btn:hover {\n    background-color: color-mix(in oklab, var(--color-on-surface) 12%, transparent);\n  }\n  :host(ui-file-manager-content) .action-btn:active {\n    transform: scale(0.94);\n  }\n  :host(ui-file-manager-content) .action-btn:focus-visible {\n    outline: 2px solid color-mix(in oklab, var(--color-primary, #3794ff) 55%, transparent);\n    outline-offset: 1px;\n  }\n  :host(ui-file-manager-content) .action-btn ui-icon {\n    inline-size: 1.0625rem;\n    block-size: 1.0625rem;\n    min-inline-size: 1.0625rem;\n    min-block-size: 1.0625rem;\n  }\n  :host(ui-file-manager-content) .fm-grid-header {\n    position: sticky !important;\n    display: grid;\n    grid-column: 1/-1;\n    inset-block-start: 0;\n    z-index: 8;\n    padding: 0.4rem 0.65rem;\n    border-radius: 0;\n    border: none;\n    box-shadow: 0 1px 0 color-mix(in oklab, var(--color-on-surface, #fff) 6%, transparent);\n    background: color-mix(in oklab, var(--color-on-surface, #fff) 3.5%, transparent);\n    font-size: 0.6875rem;\n    font-weight: 600;\n    letter-spacing: 0.04em;\n    text-transform: uppercase;\n    color: var(--color-on-surface-variant);\n    opacity: 1;\n    gap: 0.35rem;\n    min-block-size: 2rem;\n    place-content: center;\n    place-items: center;\n    justify-content: start;\n    justify-items: start;\n    text-align: start;\n    touch-action: manipulation;\n    pointer-events: auto;\n  }\n  :host(ui-file-manager-content) .fm-grid-header > * {\n    inline-size: auto;\n  }\n  :host(ui-file-manager-content) .fm-grid-header .c {\n    font-weight: 600;\n  }\n  :host(ui-file-manager-content) .fm-grid-header .icon {\n    grid-column: icon;\n  }\n  :host(ui-file-manager-content) .fm-grid-header .name {\n    grid-column: name;\n    inline-size: stretch;\n  }\n  :host(ui-file-manager-content) .fm-grid-header .size {\n    grid-column: size;\n    justify-content: end;\n    text-align: end;\n  }\n  :host(ui-file-manager-content) .fm-grid-header .date {\n    grid-column: date;\n    justify-content: end;\n    text-align: end;\n  }\n  :host(ui-file-manager-content) .fm-grid-header .actions {\n    grid-column: actions;\n    inline-size: stretch;\n    block-size: fit-content;\n    box-shadow: none;\n    padding: 0;\n    max-inline-size: stretch;\n    border-radius: 0;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    place-content: center;\n    place-items: center;\n    text-wrap: nowrap;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    gap: 0.25rem;\n    justify-content: flex-end;\n    justify-items: end;\n    justify-self: end;\n    text-align: end;\n  }\n}\n/* ai-refactor: optimized/refactored at 2026-02-13T00:45:15Z */\n/* ai-refactor: optimized/refactored at 2026-02-13T00:45:12Z */\n@layer tokens, base, layout, utilities, shells, shell, views, view, viewer, components, ux-layer, markdown, essentials, print, print-breaks, overrides;\n@layer components {\n  button,\n  .btn {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--space-sm);\n    padding-block: 0px;\n    padding-inline: 0px;\n    font-size: var(--font-size-sm);\n    font-weight: 500;\n    border-radius: var(--radius-md);\n    background: var(--color-bg-alt);\n    color: var(--color-fg);\n    border: 1px solid var(--color-border);\n    cursor: pointer;\n    transition: all var(--transition-fast);\n  }\n  button:hover:not(:disabled),\n  .btn:hover:not(:disabled) {\n    background: var(--color-border);\n  }\n  button:focus-visible,\n  .btn:focus-visible {\n    outline: 2px solid var(--color-primary);\n    outline-offset: 2px;\n  }\n  button:disabled,\n  .btn:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  .btn {\n    --ui-bg: var(--color-surface-container-high);\n    --ui-fg: var(--color-on-surface);\n    --ui-bg-hover: var(--color-surface-container-highest);\n    --ui-ring: var(--color-primary);\n    --ui-radius: var(--radius-lg);\n    --ui-pad-y: var(--space-sm);\n    --ui-pad-x: var(--space-lg);\n    --ui-font-size: var(--text-sm);\n    --ui-font-weight: var(--font-weight-semibold);\n    --ui-min-h: 40px;\n    --ui-opacity: 1;\n    appearance: none;\n    border: none;\n    background: var(--ui-bg);\n    color: var(--ui-fg);\n    border-radius: var(--ui-radius);\n    padding: max(var(--ui-pad-y, 0px), 0px) max(var(--ui-pad-x, 0px), 0px);\n    font-size: var(--ui-font-size);\n    font-weight: var(--ui-font-weight);\n    letter-spacing: 0.01em;\n    line-height: 1.2;\n    block-size: calc-size(fit-content, max(var(--ui-min-h), size));\n    transition: background-color var(--motion-fast), box-shadow var(--motion-fast), transform var(--motion-fast);\n    box-shadow: var(--elev-0);\n    user-select: none;\n    touch-action: manipulation;\n    pointer-events: auto;\n    gap: var(--space-xs);\n    text-transform: none;\n    opacity: var(--ui-opacity);\n    min-block-size: fit-content;\n    min-inline-size: calc-size(fit-content, size + 0.5rem + var(--icon-size, 1rem));\n    max-inline-size: none;\n    max-block-size: stretch;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    text-wrap: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    text-align: center;\n    text-decoration: none;\n    text-shadow: none;\n    text-rendering: auto;\n    contain: none;\n    container-type: normal;\n    place-items: center;\n    place-content: center;\n    justify-content: safe center;\n    justify-items: safe center;\n    align-content: safe center;\n    align-items: safe center;\n  }\n  .btn > ui-icon {\n    flex-shrink: 0;\n    pointer-events: none;\n    color: inherit;\n    align-self: center;\n    vertical-align: middle;\n  }\n  @media (max-width: 480px) {\n    .btn.btn-icon {\n      font-size: 0px !important;\n      aspect-ratio: 1/1;\n      block-size: fit-content;\n      max-block-size: stretch;\n      min-inline-size: 0px;\n      max-inline-size: fit-content;\n      gap: 0px;\n    }\n    .btn.btn-icon .btn-text,\n    .btn.btn-icon span:not(.sr-only) {\n      display: none !important;\n    }\n  }\n  .btn:hover {\n    background: var(--ui-bg-hover);\n    box-shadow: var(--elev-1);\n    transform: translateY(-1px);\n  }\n  .btn:active {\n    transform: translateY(0);\n    box-shadow: var(--elev-0);\n  }\n  .btn:focus-visible {\n    outline: none;\n    box-shadow: 0 0 0 3px color-mix(in oklab, var(--ui-ring) 35%, transparent);\n  }\n  .btn:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n    transform: none !important;\n  }\n  .btn:disabled:hover {\n    background: var(--color-surface-container-high);\n    box-shadow: var(--elev-0);\n  }\n  .btn.primary, .btn.active {\n    --ui-bg: var(--color-primary);\n    --ui-fg: var(--color-on-primary);\n    --ui-ring: var(--color-primary);\n  }\n  .btn.primary {\n    --ui-bg-hover: color-mix(in oklab, var(--color-primary) 90%, black);\n  }\n  .btn.active {\n    box-shadow: var(--elev-1);\n  }\n  .btn.small {\n    --ui-pad-y: var(--space-xs);\n    --ui-pad-x: var(--space-md);\n    --ui-font-size: var(--text-xs);\n    --ui-min-h: 32px;\n    --ui-radius: var(--radius-md);\n  }\n  .btn.icon-btn {\n    inline-size: 40px;\n    block-size: 40px;\n    --ui-pad-y: 0px;\n    --ui-pad-x: 0px;\n    --ui-radius: 9999px;\n    --ui-font-size: var(--text-lg);\n  }\n  .btn[data-action=open-md], .btn[data-action=export-md], .btn[data-action=export-docx] {\n    --ui-font-size: 12px;\n    --ui-pad-x: 8px;\n    --ui-pad-y: 0px;\n    --ui-min-h: 28px;\n  }\n  .btn:is([data-action=view-markdown-viewer],\n  [data-action=view-markdown-editor],\n  [data-action=view-rich-editor],\n  [data-action=view-settings],\n  [data-action=view-history],\n  [data-action=view-workcenter]) {\n    --ui-font-size: 13px;\n    --ui-font-weight: 500;\n    --ui-pad-x: 12px;\n    --ui-pad-y: 0px;\n    --ui-min-h: 32px;\n    --ui-radius: 16px;\n    text-transform: capitalize;\n  }\n  .btn:is([data-action=view-markdown-viewer],\n  [data-action=view-markdown-editor],\n  [data-action=view-rich-editor],\n  [data-action=view-settings],\n  [data-action=view-history],\n  [data-action=view-workcenter][data-current],\n  [data-action=view-workcenter].active) {\n    --ui-bg: var(--color-surface-container-highest);\n    --ui-fg: var(--color-primary);\n    --ui-ring: var(--color-primary);\n  }\n  .btn:is([data-action=toggle-edit],\n  [data-action=snip],\n  [data-action=solve],\n  [data-action=code],\n  [data-action=css],\n  [data-action=voice],\n  [data-action=edit-templates],\n  [data-action=recognize],\n  [data-action=analyze],\n  [data-action=select-files],\n  [data-action=clear-prompt],\n  [data-action=view-full-history]) {\n    --ui-font-size: 12px;\n    --ui-pad-x: 8px;\n    --ui-pad-y: 0px;\n    --ui-min-h: 28px;\n    --ui-radius: 14px;\n  }\n  .btn:has(> ui-icon):not(:has(> *:not(ui-icon))), .btn:has(> span:only-of-type:empty) {\n    font-size: 0px !important;\n    aspect-ratio: 1/1;\n    block-size: fit-content;\n    max-block-size: stretch;\n    min-inline-size: 0px;\n    max-inline-size: fit-content;\n    gap: 0px;\n    overflow: visible;\n  }\n  .btn:has(> ui-icon):not(:has(> *:not(ui-icon))) span:not(.sr-only), .btn:has(> span:only-of-type:empty) span:not(.sr-only) {\n    display: none !important;\n  }\n  .btn-primary {\n    background: var(--color-primary);\n    color: white;\n    border-color: var(--color-primary);\n  }\n  .btn-primary:hover:not(:disabled) {\n    background: var(--color-primary-hover);\n    border-color: var(--color-primary-hover);\n  }\n  @media (max-inline-size: 768px) {\n    .btn {\n      --ui-pad-y: var(--space-xs);\n      --ui-pad-x: var(--space-md);\n      --ui-font-size: var(--text-xs);\n      --ui-min-h: 36px;\n    }\n  }\n  @media (max-inline-size: 480px) {\n    .btn {\n      --ui-pad-y: var(--space-xs);\n      --ui-pad-x: var(--space-xs);\n      --ui-font-size: var(--text-xs);\n      --ui-min-h: 32px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n    .btn.btn-icon {\n      overflow: visible;\n    }\n  }\n  @media (prefers-reduced-motion: reduce) {\n    .btn {\n      transition: none;\n      transform: none !important;\n    }\n    .btn:hover, .btn:active {\n      transform: none !important;\n    }\n  }\n}\n@layer utilities {\n  .round-decor {\n    --background-tone-shift: 0;\n    padding-block: 0.25rem;\n    border-radius: 0.25rem;\n    overflow: hidden;\n  }\n  .round-decor:empty {\n    padding: 0;\n    display: none;\n    pointer-events: none;\n    visibility: collapse;\n  }\n  .time-format {\n    display: inline-flex;\n    flex-direction: row;\n    place-content: center;\n    place-items: center;\n    place-self: center;\n    padding: 0.125rem;\n    font: 500 0.9em \"InterVariable\", \"Inter\", \"Fira Mono\", \"Menlo\", \"Consolas\", monospace;\n    font-optical-sizing: auto;\n    font-variant-numeric: tabular-nums;\n    font-kerning: auto;\n    font-stretch: condensed;\n    font-width: condensed;\n    letter-spacing: -0.05em;\n    text-wrap: nowrap;\n    text-align: center;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n  .ui-ws-item {\n    cursor: pointer;\n    user-select: none;\n    pointer-events: auto;\n  }\n  .ui-ws-item span {\n    pointer-events: none;\n    aspect-ratio: 1/1;\n    inline-size: fit-content;\n    block-size: fit-content;\n    display: inline;\n  }\n  .ui-ws-item:active, .ui-ws-item:has(:active) {\n    will-change: inset, translate, transform, opacity, z-index;\n    cursor: grabbing;\n  }\n}\n@layer essentials {\n  @media print {\n    .ctx-menu, .ux-anchor, .component-loading, .component-error {\n      display: none !important;\n      visibility: hidden !important;\n      opacity: 0 !important;\n      pointer-events: none !important;\n      position: absolute !important;\n      inset: 0 !important;\n      z-index: -1 !important;\n      inline-size: 0 !important;\n      block-size: 0 !important;\n      max-inline-size: 0 !important;\n      max-block-size: 0 !important;\n      min-inline-size: 0 !important;\n      min-block-size: 0 !important;\n      margin: 0 !important;\n      padding: 0 !important;\n      border: none !important;\n      overflow: hidden !important;\n    }\n  }\n  @media screen {\n    :root, :host, :scope {\n      --font-family: \"InterVariable\", \"Inter\", \"Helvetica Neue\", \"Helvetica\", \"Calibri\", \"Roboto\", ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;\n    }\n    ui-window-frame,\n    ui-modal,\n    .ui-grid-item {\n      --opacity: 1;\n      --scale: 1;\n      --rotate: 0deg;\n      --translate-x: 0%;\n      --translate-y: 0%;\n      isolation: isolate;\n      content-visibility: auto;\n      transform-origin: 50% 50%;\n      transform-style: flat;\n      transform-box: fill-box;\n      translate: 0% 0% 0%;\n      opacity: var(--opacity, 1);\n      rotate: 0deg;\n      scale: 1;\n    }\n    .ctx-menu {\n      --font-family: \"InterVariable\", \"Inter\", \"Helvetica Neue\", \"Helvetica\", \"Calibri\", \"Roboto\", ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;\n      /*\n       * WHY: Menus are appended to `body` / overlay, outside `.view-explorer`, so app color\n       * tokens are often missing — without fallbacks text can match background (dark on dark).\n       */\n      color-scheme: light dark;\n    }\n    .ctx-menu,\n    .ctx-menu * {\n      visibility: visible;\n      content-visibility: visible;\n    }\n    .ctx-menu {\n      position: fixed;\n      z-index: 99999;\n      inline-size: max-content;\n      min-inline-size: 160px;\n      max-inline-size: min(240px, 100cqi);\n      block-size: fit-content;\n      padding: 0.25rem 0;\n      border: 1px solid var(--color-outline-variant, light-dark(#c9ced8, #474e5e));\n      border-radius: var(--radius-md, 10px);\n      background-color: var(--color-surface, light-dark(#f6f8fc, #1b2029));\n      color: var(--color-on-surface, light-dark(#12151c, #eceff7));\n      font-size: 0.875rem;\n      font-weight: 400;\n      box-shadow: 0 10px 28px light-dark(rgba(15, 23, 42, 0.14), rgba(0, 0, 0, 0.42)), 0 0 0 1px light-dark(rgba(15, 23, 42, 0.08), rgba(255, 255, 255, 0.07));\n      opacity: 1;\n      visibility: visible;\n      pointer-events: auto;\n      transform: scale3d(var(--scale, 1), var(--scale, 1), 1) translate3d(var(--translate-x, 0px), var(--translate-y, 0px), 0px);\n      transition: opacity 0.15s ease-out, visibility 0.15s ease-out, transform 0.15s ease-out;\n      font-family: var(--font-family, 'system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif') !important;\n      text-align: start;\n      display: flex;\n      flex-direction: column;\n      align-items: stretch;\n    }\n    .ctx-menu[data-hidden] {\n      opacity: 0;\n      visibility: hidden;\n      pointer-events: none;\n    }\n    .ctx-menu > * {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-start;\n      text-align: start;\n      inline-size: stretch;\n      min-block-size: 2rem;\n      gap: 0.5rem;\n      padding: 0.375rem 0.75rem;\n      border: none;\n      border-radius: var(--radius-sm, 8px);\n      outline: none;\n      position: relative;\n      background-color: transparent;\n      color: var(--color-on-surface, light-dark(#12151c, #eceff7));\n      cursor: pointer;\n      text-wrap: nowrap;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden;\n      pointer-events: auto;\n      transition: background-color 0.15s ease, color 0.15s ease;\n      font-family: var(--font-family, 'system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif') !important;\n    }\n    .ctx-menu > *:hover {\n      background-color: var(--color-surface-container-high, light-dark(#e8ecf4, #2a3140));\n      color: var(--color-on-surface, light-dark(#12151c, #eceff7));\n    }\n    .ctx-menu > *:active {\n      background-color: var(--color-surface-container-highest, light-dark(#dde3ee, #343b4d));\n      color: var(--color-on-surface, light-dark(#12151c, #eceff7));\n    }\n    .ctx-menu > *:focus-visible {\n      outline: 2px solid var(--color-primary, light-dark(#1d6fd1, #7eb8ff));\n      outline-offset: 1px;\n      background-color: var(--color-surface-container-high, light-dark(#e8ecf4, #2a3140));\n    }\n    .ctx-menu > *:not(.ctx-menu-separator) {\n      gap: 0.5rem;\n    }\n    .ctx-menu > * > * {\n      pointer-events: none;\n    }\n    .ctx-menu > * > span {\n      flex: 1 1 auto;\n      min-inline-size: 0;\n      text-align: start !important;\n      user-select: none;\n      pointer-events: none;\n      font-size: 0.875rem;\n      font-weight: 400;\n      line-height: 1.25;\n      color: inherit;\n    }\n    .ctx-menu > * > ui-icon {\n      --icon-size: 1rem;\n      flex-shrink: 0;\n      inline-size: var(--icon-size);\n      block-size: var(--icon-size);\n      color: var(--color-on-surface-variant, light-dark(#545c6f, #b4bfd4));\n      user-select: none;\n      pointer-events: none;\n    }\n    .ctx-menu > .ctx-menu-separator, .ctx-menu.ctx-menu-separator {\n      min-block-size: auto;\n      block-size: 1px;\n      margin: 0.125rem 0.375rem;\n      padding: 0;\n      background-color: var(--color-outline-variant, light-dark(#c9ced8, #474e5e));\n      opacity: 0.55;\n      pointer-events: none;\n    }\n    .ctx-menu {\n      /*\n       * `.grid-rows` applies subgrid + place(center) to children, which centers\n       * label text per row. Context menus must stay flex rows with start-aligned labels.\n       */\n    }\n    .ctx-menu.grid-rows {\n      display: flex !important;\n      flex-direction: column;\n      align-items: stretch;\n      grid-template-columns: unset !important;\n      grid-auto-rows: unset !important;\n    }\n    .ctx-menu.grid-rows > *:not(.ctx-menu-separator) {\n      display: flex !important;\n      flex-flow: row nowrap !important;\n      align-items: center !important;\n      justify-content: flex-start !important;\n      grid-column: unset !important;\n      grid-row: unset !important;\n      grid-template-columns: unset !important;\n      grid-template-rows: unset !important;\n      place-content: unset !important;\n      place-items: unset !important;\n    }\n    .ux-anchor {\n      --shift-x: var(--client-x, 0px);\n      --shift-y: var(--client-y, 0px);\n      --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n      --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n      inset-inline-start: max(var(--shift-x), 0px);\n      inset-block-start: max(var(--shift-y), var(--status-bar-padding, 0px));\n      inset-inline-end: auto;\n      inset-block-end: auto;\n      direction: ltr;\n      writing-mode: horizontal-tb;\n      translate: 0% 0% 0%;\n      transform: none;\n    }\n    .component-loading,\n    .component-error {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 2rem;\n      gap: 1rem;\n      color: var(--text-secondary, light-dark(#666, #aaa));\n    }\n    .component-loading .loading-spinner {\n      inline-size: 2rem;\n      block-size: 2rem;\n      border: 2px solid var(--border, light-dark(#ddd, #444));\n      border-block-start: 2px solid var(--primary, light-dark(#007bff, #5fa8ff));\n      border-radius: 50%;\n      animation: spin 1s linear infinite;\n    }\n    .component-error {\n      text-align: center;\n    }\n    .component-error h3 {\n      margin: 0;\n      color: var(--error, light-dark(#dc3545, #ff6b6b));\n    }\n    .component-error p {\n      margin: 0;\n    }\n    ui-icon {\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      inline-size: var(--icon-size, 1.25rem);\n      block-size: var(--icon-size, 1.25rem);\n      min-inline-size: var(--icon-size, 1.25rem);\n      min-block-size: var(--icon-size, 1.25rem);\n      color: currentColor;\n      fill: currentColor;\n      flex-shrink: 0;\n      vertical-align: middle;\n      opacity: 1;\n      visibility: visible;\n      /* When a parent uses font-size: 0 for layout, keep raster/mask math stable */\n      font-size: 1rem;\n    }\n    ui-icon svg,\n    ui-icon img {\n      inline-size: 100%;\n      block-size: 100%;\n      color: inherit;\n      fill: currentColor;\n    }\n    :is(button, .btn) > ui-icon {\n      color: inherit;\n    }\n    .file-picker {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      min-block-size: 300px;\n      padding: 2rem;\n      text-align: center;\n    }\n    .file-picker .file-picker-header {\n      margin-block-end: 2rem;\n    }\n    .file-picker .file-picker-header h2 {\n      margin: 0 0 0.5rem 0;\n      color: var(--color-on-surface);\n      font-size: 1.5rem;\n      font-weight: 600;\n    }\n    .file-picker .file-picker-header p {\n      margin: 0;\n      color: var(--color-on-surface-variant);\n      font-size: 0.9rem;\n    }\n    .file-picker .file-picker-actions {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      gap: 1rem;\n      margin-block-end: 2rem;\n    }\n    .file-picker .file-picker-actions .btn {\n      display: flex;\n      align-items: center;\n      gap: 0.5rem;\n      padding: 0.75rem 1.5rem;\n      border: 1px solid transparent;\n      border-radius: var(--radius-md);\n      font-weight: 500;\n      transition: all 0.2s ease;\n    }\n    .file-picker .file-picker-actions .btn:hover {\n      transform: translateY(-1px);\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    }\n    .file-picker .file-picker-actions .btn.btn-primary {\n      background: var(--color-primary);\n      color: var(--color-on-primary);\n      border-color: var(--color-primary);\n    }\n    .file-picker .file-picker-actions .btn:not(.btn-primary) {\n      background: var(--color-surface-container);\n      color: var(--color-on-surface);\n      border-color: var(--color-outline-variant);\n    }\n    .file-picker .file-picker-info {\n      max-inline-size: 400px;\n    }\n    .file-picker .file-picker-info p {\n      margin: 0.25rem 0;\n      font-size: 0.85rem;\n      color: var(--color-on-surface-variant);\n    }\n    .file-picker .file-picker-info p strong {\n      color: var(--color-on-surface);\n    }\n  }\n}\n/* -------------------------------------------------------------------------- */\n/* Explorer view — layout shell + tokens for <ui-file-manager> (light DOM).   */\n/* -------------------------------------------------------------------------- */\n@layer view-explorer {\n  @layer tokens {\n    /*\n     * Optional shell hook — when embedded with `data-view`, tune layout hints.\n     */\n    :root:has([data-view=explorer]),\n    html:has([data-view=explorer]) {\n      --view-layout: \"flex\";\n      --view-content-max-width: none;\n    }\n    .view-explorer {\n      --view-border: color-mix(in oklab, var(--color-outline-variant, #888) 45%, transparent);\n      --view-fg-muted: color-mix(in oklab, var(--color-on-surface, #ccc) 72%, transparent);\n      --view-hover-bg: color-mix(in oklab, var(--color-primary, #3794ff) 12%, transparent);\n      --view-selected-bg: color-mix(in oklab, var(--color-primary, #3794ff) 18%, transparent);\n      --view-selected-border: var(--color-primary, #3794ff);\n      --explorer-menu-radius: 0.75rem;\n      --explorer-menu-pad: 0.35rem;\n      /*\n       * Font stacks — shell may override `--font-family`; standalone demo stays readable without app CSS.\n       */\n      --explorer-font-sans:\n          var(--font-family, \"InterVariable\", \"Inter\", \"Segoe UI Variable\", ui-sans-serif, system-ui, -apple-system,\n          BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif);\n      --explorer-font-mono:\n          ui-monospace, \"Cascadia Code\", \"Cascadia Mono\", \"SF Mono\", Menlo, Consolas, \"DejaVu Sans Mono\", monospace;\n    }\n    /*\n     * Material-like fallbacks when the host omits semantic tokens — split by resolved scheme.\n     * `applyExplorerColorScheme()` sets `data-explorer-color-scheme` on `.view-explorer`.\n     */\n    .view-explorer[data-explorer-color-scheme=light] {\n      --color-surface: #f7f8fc;\n      --color-on-surface: #1a1c1f;\n      --color-on-surface-variant: #44474f;\n      --color-primary: #1362c3;\n      --color-on-primary: #ffffff;\n      --color-outline-variant: #c3c7d1;\n      --color-surface-container: #eaecef;\n      --color-surface-container-high: #e1e4eb;\n      --color-surface-container-highest: #d7dae4;\n      --color-error: #ba1a1a;\n      --error-color: #ba1a1a;\n    }\n    .view-explorer[data-explorer-color-scheme=dark] {\n      --color-surface: #1a1d24;\n      --color-on-surface: #e8eaed;\n      --color-on-surface-variant: #c4c6d0;\n      --color-primary: #6eb4ff;\n      --color-on-primary: #08294a;\n      --color-outline-variant: #5a5f6a;\n      --color-surface-container: #272a31;\n      --color-surface-container-high: #31353d;\n      --color-surface-container-highest: #3b404b;\n      --color-error: #ffb4ab;\n      --error-color: #ffb4ab;\n    }\n  }\n  @layer shell {\n    /*\n     * Minimal shell uses min-block-size: fit-content on [data-view], which\n     * prevents the file grid from receiving a bounded height — keep explorer\n     * flex-fill and scroll inside the file manager.\n     */\n    :where(.app-shell__content) > [data-view=explorer] {\n      display: flex !important;\n      flex-direction: column !important;\n      min-block-size: 0 !important;\n      block-size: 100% !important;\n      max-block-size: 100% !important;\n      overflow: hidden !important;\n    }\n    :host:has(.view-explorer) {\n      display: flex;\n      flex-direction: column;\n      contain: layout style;\n      block-size: 100%;\n      min-block-size: 0;\n      font-family: var(--font-family, var(--explorer-font-sans, system-ui, sans-serif));\n      font-size: 0.875rem;\n      line-height: 1.5;\n      color: var(--color-on-surface, var(--view-fg, light-dark(#1a1c1f, #e8eaed)));\n      background: var(--color-surface, var(--view-bg, light-dark(#f7f8fc, #1a1d24)));\n    }\n    cw-view-explorer {\n      display: flex;\n      flex-direction: column;\n      flex: 1 1 0;\n      min-block-size: 0;\n      min-inline-size: 0;\n      block-size: 100%;\n      inline-size: 100%;\n      box-sizing: border-box;\n    }\n    .view-explorer {\n      display: flex;\n      flex-direction: column;\n      flex: 1 1 0;\n      block-size: 100%;\n      inline-size: 100%;\n      min-block-size: 0;\n      min-inline-size: 0;\n      font-family: var(--font-family, var(--explorer-font-sans, system-ui, sans-serif));\n      background: var(--color-surface, var(--view-bg));\n      color: var(--color-on-surface, var(--view-fg));\n      border: none;\n      border-radius: 0;\n      overflow: hidden;\n    }\n    .view-explorer__content {\n      flex: 1 1 0;\n      display: flex;\n      flex-direction: column;\n      overflow: hidden;\n      min-block-size: 0;\n      min-inline-size: 0;\n      box-sizing: border-box;\n      padding: 0;\n      margin: 0;\n      background: transparent;\n      color: inherit;\n    }\n    .view-explorer__content > ui-file-manager {\n      flex: 1 1 0;\n      min-block-size: 0;\n      min-inline-size: 0;\n      block-size: 100%;\n      inline-size: 100%;\n    }\n  }\n  @layer components {\n    .view-explorer__loading,\n    .view-explorer__error {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      gap: 1rem;\n      block-size: 100%;\n    }\n    .view-explorer__loading {\n      color: var(--color-on-surface);\n      opacity: 0.65;\n    }\n    .view-explorer__spinner {\n      inline-size: 32px;\n      block-size: 32px;\n      border: 3px solid var(--view-border, color-mix(in oklab, var(--color-on-surface, #888) 18%, transparent));\n      border-block-start-color: var(--color-primary, #3794ff);\n      border-radius: 50%;\n      animation: rs-spin 0.8s linear infinite;\n    }\n    .view-explorer__error p {\n      margin: 0;\n      color: var(--color-error, #f2b8b5);\n    }\n    .view-explorer__error button {\n      padding: 0.5rem 1rem;\n      border: none;\n      border-radius: 0.375rem;\n      background: var(--color-primary, #3794ff);\n      color: var(--color-on-primary, #fff);\n      cursor: pointer;\n    }\n    .view-explorer__error button:hover {\n      filter: brightness(1.08);\n    }\n    .view-explorer__fallback {\n      display: flex;\n      flex-direction: column;\n      gap: 0.75rem;\n      padding: 1rem 1.125rem;\n      block-size: 100%;\n      overflow: auto;\n      box-sizing: border-box;\n    }\n    .view-explorer__fallback h3 {\n      margin: 0;\n      font-size: 1rem;\n      font-weight: 600;\n    }\n    .view-explorer__fallback p {\n      margin: 0;\n      color: var(--view-fg-muted, var(--color-on-surface-variant));\n      font-size: 0.875rem;\n      line-height: 1.45;\n    }\n    .view-explorer__fallback-actions {\n      display: flex;\n      gap: 0.5rem;\n      flex-wrap: wrap;\n    }\n    .view-explorer__fallback-actions button {\n      padding: 0.5rem 1rem;\n      border: none;\n      border-radius: 999px;\n      background: color-mix(in oklab, var(--color-on-surface, #fff) 8%, transparent);\n      color: inherit;\n      cursor: pointer;\n      font-size: 0.8125rem;\n      font-weight: 500;\n    }\n    .view-explorer__fallback-actions button:hover {\n      background: color-mix(in oklab, var(--color-on-surface, #fff) 13%, transparent);\n    }\n    .view-explorer__fallback-actions button:focus-visible {\n      outline: 2px solid color-mix(in oklab, var(--color-primary, #3794ff) 60%, transparent);\n      outline-offset: 1px;\n    }\n    .view-explorer__fallback-files {\n      margin: 0.5rem 0 0;\n      padding-inline-start: 1.125rem;\n      display: grid;\n      gap: 0.35rem;\n      font-size: 0.8125rem;\n      color: var(--color-on-surface-variant);\n    }\n    /* Empty-path context menu — floating panel, no hard border */\n    .rs-explorer-context-menu {\n      position: fixed;\n      z-index: 10050;\n      min-inline-size: 12rem;\n      padding: var(--explorer-menu-pad, 0.35rem);\n      border-radius: var(--explorer-menu-radius, 0.75rem);\n      border: 1px solid color-mix(in oklab, var(--color-outline, light-dark(rgba(15, 23, 42, 0.14), rgba(255, 255, 255, 0.08))) 100%, transparent);\n      color-scheme: light dark;\n      background: color-mix(in oklab, var(--color-surface-container-high, var(--color-surface-container, var(--color-surface, light-dark(#e2e8f0, #334155)))) 94%, transparent);\n      color: var(--color-on-surface, light-dark(#0f172a, #e8eaed));\n      box-shadow: var(--elev-3, light-dark(0 8px 26px rgba(15, 23, 42, 0.12), 0 8px 26px rgba(0, 0, 0, 0.28))), 0 0 0 1px color-mix(in oklab, var(--color-on-surface, light-dark(#0f172a, #fff)) 7%, transparent);\n      backdrop-filter: blur(12px);\n      font-family: var(--font-family, var(--explorer-font-sans, system-ui, sans-serif));\n      display: flex;\n      flex-direction: column;\n      gap: 0.2rem;\n    }\n    .rs-explorer-context-menu__item {\n      display: flex;\n      align-items: center;\n      justify-content: flex-start;\n      gap: 0.5rem;\n      inline-size: 100%;\n      text-align: start;\n      padding: 0.5rem 0.7rem;\n      border: none;\n      border-radius: calc(var(--explorer-menu-radius, 0.75rem) - 0.15rem);\n      background: transparent;\n      color: inherit;\n      font: inherit;\n      font-size: 0.8125rem;\n      line-height: 1.25;\n      cursor: pointer;\n      min-block-size: 2.25rem;\n      box-sizing: border-box;\n    }\n    .rs-explorer-context-menu__item:hover {\n      background: color-mix(in oklab, var(--color-on-surface, #fff) 9%, transparent);\n    }\n    .rs-explorer-context-menu__item:focus-visible {\n      outline: 2px solid color-mix(in oklab, var(--color-primary, #3794ff) 65%, transparent);\n      outline-offset: 0;\n    }\n  }\n  @layer animations {\n    @keyframes rs-spin {\n      to {\n        transform: rotate(360deg);\n      }\n    }\n  }\n}";
//#endregion
//#region ../explorer-view/src/index.ts
function Z(e) {
	if (e === "light" || e === "dark" || e === "system") return e;
	if (typeof e == "string") {
		let t = e.trim().toLowerCase();
		if (t === "light" || t === "dark" || t === "system") return t;
	}
}
function Q(e) {
	if (!e) return;
	let t = e;
	return t.colorScheme ? t.colorScheme : Z(t.params?.colorScheme ?? t.params?.theme);
}
function $(e) {
	if (e != null) {
		if (typeof e == "string") return Z(e.trim());
		if (typeof e == "object") {
			let t = e;
			return Z(t.colorScheme ?? t.scheme ?? t.theme);
		}
	}
}
function Ve() {
	let e = document.createElement("div");
	e.className = "view-explorer", e.setAttribute("data-view", "explorer"), e.setAttribute("aria-label", "File explorer");
	let t = document.createElement("div");
	t.className = "view-explorer__content", t.setAttribute("data-explorer-content", "");
	let n = document.createElement("ui-file-manager");
	return n.setAttribute("view-mode", "list"), t.append(n), e.append(t), e;
}
function He() {
	let e = document.createElement("div");
	e.className = "view-explorer", e.setAttribute("data-view", "explorer"), e.setAttribute("aria-label", "File explorer (fallback)");
	let t = document.createElement("div");
	return t.className = "view-explorer__content", t.setAttribute("data-explorer-content", ""), t.innerHTML = "\n        <div class=\"view-explorer__fallback\">\n            <h3>Explorer fallback mode</h3>\n            <p>File manager component is unavailable; use local files below.</p>\n            <div class=\"view-explorer__fallback-actions\">\n                <button type=\"button\" data-action=\"pick-files\">Open files</button>\n                <button type=\"button\" data-action=\"open-workcenter\">Open Work Center</button>\n            </div>\n            <ul class=\"view-explorer__fallback-files\" data-fallback-files></ul>\n        </div>", e.append(t), e;
}
var Ue = "cw-view-explorer", We = se(Ue, (e) => class extends e {
	id = "explorer";
	name = "Explorer";
	icon = "folder";
	explorerRoot = null;
	explorerCleanup = null;
	wiredFileManager = null;
	initialPath = null;
	explorerInject;
	_sheet = null;
	themeSync = null;
	lifecycle = {
		onMount: () => {
			this.attachExplorerWire();
		},
		onUnmount: () => {
			this.themeSync?.disconnect(), this.themeSync = null, this.detachExplorerWire(), r(this._sheet), this._sheet = null;
		},
		onShow: () => {
			this._sheet ??= ne(Be), this.syncExplorerThemeSubscription(), !this.explorerCleanup && this.explorerRoot && this.attachExplorerWire();
		},
		onHide: () => {
			this.themeSync?.disconnect(), this.themeSync = null, this.detachExplorerWire();
			try {
				this._sheet && r(this._sheet);
			} catch {}
			this._sheet = null;
		}
	};
	constructor(e) {
		if (super(), e) {
			this.options = e, this.explorerInject = e.explorerInject, e.params?.path && (this.initialPath = String(e.params.path));
			let t = Z(e.params?.colorScheme ?? e.params?.theme);
			!e.colorScheme && t && (this.options.colorScheme = t);
		}
	}
	setExplorerColorScheme(e) {
		this.options.colorScheme = e, I(this.explorerRoot, e), this.syncExplorerThemeSubscription();
	}
	syncExplorerThemeSubscription() {
		this.themeSync?.disconnect(), this.themeSync = null, this.explorerRoot && (this.themeSync = L(this.explorerRoot, () => this.options.colorScheme ?? "system"));
	}
	render = (e) => {
		if (e) {
			this.options = {
				...this.options,
				...e
			};
			let t = e?.params?.path;
			t && (this.initialPath = String(t));
			let n = e?.explorerInject;
			n !== void 0 && (this.explorerInject = n);
		}
		this.explorerCleanup && (this.themeSync?.disconnect(), this.themeSync = null, this.detachExplorerWire()), this.explorerRoot = customElements.get("ui-file-manager") ? Ve() : He();
		let t = Q(e) ?? Q(this.options);
		return I(this.explorerRoot, t ?? "system"), this.syncExplorerThemeSubscription(), this.explorerRoot;
	};
	getToolbar() {
		return null;
	}
	canHandleMessage(e) {
		return [
			"file-save",
			"navigate-path",
			"content-explorer",
			S.SetColorScheme
		].includes(e);
	}
	async handleMessage(e) {
		let t = e;
		if (t.type === S.SetColorScheme) {
			let e = $(t.data?.colorScheme ?? t.data?.scheme ?? t.data?.theme) ?? "system";
			this.setExplorerColorScheme(e);
			return;
		}
		if (t.data?.file instanceof File) {
			await this.saveIncomingFileToWorkspace(t.data.file, t.data.path || t.data.into);
			return;
		}
		let n = t.data?.path || t.data?.into;
		n && this.wiredFileManager && this.wiredFileManager.navigate(n);
	}
	async saveIncomingFileToWorkspace(e, t) {
		let n = this.wiredFileManager?.operative;
		return n?.ingestFileIntoWorkspace ? (await n.ingestFileIntoWorkspace(e, t), !0) : !1;
	}
	navigateExplorer(e) {
		let t = String(e || "").trim();
		if (!(!t || !this.wiredFileManager)) return this.wiredFileManager.navigate(t);
	}
	getExplorerFileManager() {
		return this.wiredFileManager;
	}
	getExplorerShellRoot() {
		return this.explorerRoot;
	}
	invokeChannelApi(e, t) {
		let n = () => {
			if (typeof t == "string") return t.trim();
			if (t && typeof t == "object") {
				let e = t, n = e.path ?? e.into ?? e.target;
				return typeof n == "string" ? n.trim() : "";
			}
			return "";
		};
		switch (e) {
			case S.NavigatePath:
			case S.ContentExplorer:
			case S.Navigate: {
				let e = n();
				return e ? (this.navigateExplorer(e), !0) : !1;
			}
			case S.GetPath: return this.wiredFileManager?.path ?? null;
			case S.FileSave:
			case "file-save": {
				let e = t && typeof t == "object" ? t : {}, n = e.file instanceof File ? e.file : null, r = typeof e.path == "string" ? e.path : typeof e.into == "string" ? e.into : void 0;
				return n ? this.saveIncomingFileToWorkspace(n, r) : !1;
			}
			case S.RequestUse: return this.wiredFileManager?.requestUse?.(), !0;
			case S.RequestUpload: return this.wiredFileManager?.requestUpload?.(), !0;
			case S.RequestPaste: return this.wiredFileManager?.requestPaste?.(), !0;
			case S.SetColorScheme: {
				let e = $(t) ?? "system";
				return this.setExplorerColorScheme(e), !0;
			}
			case "get-color-scheme": {
				let e = this.options;
				return e.colorScheme ?? Q(e) ?? "system";
			}
			default: return this.handleMessage({
				type: e,
				data: typeof t == "object" && t ? t : { path: n() || void 0 }
			}).then(() => !0);
		}
	}
	attachExplorerWire() {
		if (!this.explorerRoot) return;
		let e = this.options, { cleanup: t, fileManager: n } = N(this.explorerRoot, {
			shellContext: e?.shellContext,
			initialPath: this.initialPath,
			inject: this.explorerInject
		});
		this.explorerCleanup = t, this.wiredFileManager = n;
	}
	detachExplorerWire() {
		this.explorerCleanup?.(), this.explorerCleanup = null, this.wiredFileManager = null;
	}
});
function Ge(e) {
	return new We(e);
}
//#endregion
export { We as CwViewExplorer, X as FileManager, Re as FileManagerContent, Ue as TAG, I as applyExplorerColorScheme, Ge as createExplorerView, Ge as default, k as getRegisteredExplorerInject, D as mergeExplorerInject, P as readAppDataTheme, _e as registerExplorerInject, F as resolveExplorerColorSchemePreference, L as subscribeExplorerSystemTheme, N as wireExplorerSubtree };
