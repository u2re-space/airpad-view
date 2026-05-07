//#region ../../projects/subsystem/src/boot/toast.ts
var e = {
	containerId: "rs-toast-layer",
	position: "bottom",
	maxToasts: 5,
	zIndex: 2147483647
}, t = 3e3, n = 200, r = 400, i = "", a = 0, o = (t) => `${t.kind || "info"}\0${t.position || e.position}\0${t.message}`, s = (e, t, n) => {
	for (let r of Array.from(e?.children ?? [])) if (r instanceof HTMLElement && r.classList.contains("rs-toast") && r.getAttribute("data-kind") === n && r.textContent === t) return !0;
	return !1;
}, c = "\n@layer viewer-toast {\n    .rs-toast-layer {\n        position: fixed;\n        z-index: var(--shell-toast-z, 2147483647);\n        pointer-events: none;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding: 1rem;\n        gap: 0.5rem;\n        max-block-size: 80dvb;\n        overflow: hidden;\n        box-sizing: border-box;\n    }\n\n    .rs-toast-layer[data-position=\"bottom\"],\n    .rs-toast-layer:not([data-position]) {\n        inset-block-end: 10dvb;\n        inset-inline: 0;\n        justify-content: flex-end;\n    }\n\n    .rs-toast-layer[data-position=\"top\"] {\n        inset-block-start: 10dvb;\n        inset-inline: 0;\n        justify-content: flex-start;\n    }\n\n    .rs-toast-layer[data-position=\"top-left\"] {\n        inset-block-start: 10dvb;\n        inset-inline-start: 0;\n        align-items: flex-start;\n    }\n\n    .rs-toast-layer[data-position=\"top-right\"] {\n        inset-block-start: 10dvb;\n        inset-inline-end: 0;\n        align-items: flex-end;\n    }\n\n    .rs-toast-layer[data-position=\"bottom-left\"] {\n        inset-block-end: 10dvb;\n        inset-inline-start: 0;\n        align-items: flex-start;\n    }\n\n    .rs-toast-layer[data-position=\"bottom-right\"] {\n        inset-block-end: 10dvb;\n        inset-inline-end: 0;\n        align-items: flex-end;\n    }\n\n    .rs-toast {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        gap: 0.5rem;\n        padding: 0.5rem 1rem;\n        max-inline-size: min(90vw, 32rem);\n        inline-size: fit-content;\n\n        border-radius: var(--toast-radius, 0.5rem);\n        background-color: var(--toast-bg, light-dark(#fafbfc, #1e293b));\n        box-shadow: var(--toast-shadow, 0 6px 14px rgba(0, 0, 0, 0.45));\n        backdrop-filter: blur(12px) saturate(140%);\n        color: var(--toast-text, light-dark(#000000, #ffffff));\n\n        font-family: var(--toast-font-family, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif);\n        font-size: var(--toast-font-size, 0.875rem);\n        font-weight: var(--toast-font-weight, 500);\n        letter-spacing: 0.01em;\n        line-height: 1.4;\n        white-space: pre-wrap;\n        overflow-wrap: anywhere;\n        word-break: break-word;\n\n        pointer-events: auto;\n        user-select: none;\n        cursor: default;\n\n        opacity: 0;\n        transform: translateY(100%) scale(0.9);\n        transition:\n            opacity 160ms ease-out,\n            transform 160ms cubic-bezier(0.16, 1, 0.3, 1),\n            background-color 100ms ease;\n    }\n\n    .rs-toast[data-visible] {\n        opacity: 1;\n        transform: translateY(0) scale(1);\n    }\n\n    .rs-toast:active {\n        transform: scale(0.98);\n    }\n\n    .rs-toast[data-kind=\"success\"] {\n        --toast-bg: var(--color-success, var(--color-success, #22c55e));\n    }\n\n    .rs-toast[data-kind=\"warning\"] {\n        --toast-bg: var(--color-warning, var(--color-warning, #f59e0b));\n    }\n\n    .rs-toast[data-kind=\"error\"] {\n        --toast-bg: var(--color-error, var(--color-error, #ef4444));\n    }\n\n    @media (prefers-reduced-motion: reduce) {\n        .rs-toast,\n        .rs-toast[data-visible] {\n            transition-duration: 0ms;\n            transform: none;\n        }\n    }\n\n    @media print {\n        .rs-toast-layer, .rs-toast {\n            display: none !important;\n            visibility: hidden !important;\n            opacity: 0 !important;\n            pointer-events: none !important;\n            position: absolute !important;\n            inset: 0 !important;\n            z-index: -1 !important;\n            inline-size: 0 !important;\n            block-size: 0 !important;\n            max-inline-size: 0 !important;\n            max-block-size: 0 !important;\n            min-inline-size: 0 !important;\n            min-block-size: 0 !important;\n            margin: 0 !important;\n            padding: 0 !important;\n            border: none !important;\n            overflow: hidden !important;\n        }\n    }\n}\n", l = /* @__PURE__ */ new WeakSet(), u = /* @__PURE__ */ new Map(), d = (e = document) => {
	if (l.has(e)) return;
	let t = e.createElement("style");
	t.id = "__rs-toast-styles__", t.textContent = c, (e.head || e.documentElement).appendChild(t), l.add(e);
}, f = (e, t = document) => {
	let n = `${e.containerId}-${e.position}`;
	if (u.has(n)) {
		let e = u.get(n);
		if (e.isConnected) return e;
		u.delete(n);
	}
	d(t);
	let r = t.getElementById(e.containerId);
	return r || (r = t.createElement("div"), r.id = e.containerId, r.className = "rs-toast-layer", r.setAttribute("aria-live", "polite"), r.setAttribute("aria-atomic", "true"), (t.body || t.documentElement).appendChild(r)), r.setAttribute("data-position", e.position), r.style.setProperty("--shell-toast-z", String(e.zIndex)), u.set(n, r), r;
}, p = (e) => {
	try {
		let t = new BroadcastChannel("rs-toast");
		t.postMessage({
			type: "show-toast",
			options: e
		}), t.close();
	} catch (e) {
		console.warn("[Toast] Broadcast failed:", e);
	}
}, m = (c) => {
	let l = typeof c == "string" ? { message: c } : c, { message: d, kind: m = "info", duration: h = t, persistent: g = !1, position: _ = e.position, onClick: v } = l;
	if (!d) return null;
	let y = o(l), b = Date.now();
	if (y === i && b - a < r) return null;
	if (typeof document > "u") return i = y, a = b, p(l), null;
	let x = {
		...e,
		position: _
	}, S = f(x);
	if (s(S, d, m)) return i = y, a = b, null;
	for (i = y, a = b; S.children.length >= x.maxToasts;) S.firstChild?.remove();
	let C = document.createElement("div");
	C.className = "rs-toast", C.setAttribute("data-kind", m), C.setAttribute("role", m === "error" || m === "warning" ? "alert" : "status"), C.setAttribute("aria-live", m === "error" ? "assertive" : "polite"), C.textContent = d, S.appendChild(C), globalThis?.requestAnimationFrame?.(() => {
		C.setAttribute("data-visible", "");
	});
	let w = null, T = () => {
		w !== null && (globalThis.clearTimeout(w), w = null), C.removeAttribute("data-visible"), globalThis?.setTimeout?.(() => {
			if (C.remove(), !S.childElementCount) {
				let e = `${x.containerId}-${x.position}`;
				u.delete(e);
			}
		}, n);
	};
	return g || (w = globalThis?.setTimeout?.(T, h)), C.addEventListener("click", () => {
		v?.(), T();
	}), C.addEventListener("pointerdown", () => {
		w !== null && (globalThis.clearTimeout(w), w = null), T();
	}, { once: !0 }), C;
}, h = () => {
	if (typeof BroadcastChannel > "u") return () => {};
	let e = new BroadcastChannel("rs-toast"), t = (e) => {
		e.data?.type === "show-toast" && e.data?.options && m(e.data.options);
	};
	return e.addEventListener("message", t), () => {
		e.removeEventListener("message", t), e.close();
	};
}, g = () => h();
//#endregion
export { m as n, g as t };
