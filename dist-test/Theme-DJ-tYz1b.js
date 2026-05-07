import { t as e } from "./settings-config-DYOSsuGM.js";
import { n as t } from "./state-storage-BZjAnIE5.js";
//#region ../../projects/subsystem/src/other/utils/Theme.ts
var n = (e) => {
	let t = e.trim();
	if (!t || t === "transparent") return null;
	let n = t.match(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i);
	if (n) {
		let e = n[1];
		return e.length === 3 && (e = e[0] + e[0] + e[1] + e[1] + e[2] + e[2]), `#${e.toLowerCase()}`;
	}
	let r = t.match(/^rgba?\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)(?:\s*,\s*([\d.]+))?\s*\)$/i);
	if (!r) return null;
	let i = r[4] === void 0 ? 1 : Number(r[4]);
	return !Number.isFinite(i) || i < .98 ? null : `#${[
		Math.max(0, Math.min(255, Math.round(Number(r[1])))),
		Math.max(0, Math.min(255, Math.round(Number(r[2])))),
		Math.max(0, Math.min(255, Math.round(Number(r[3]))))
	].map((e) => e.toString(16).padStart(2, "0")).join("")}`;
}, r = () => {
	if (typeof document > "u") return null;
	let e = document.querySelectorAll("[data-shell]");
	for (let t of e) {
		let e = t.shadowRoot;
		if (!e) continue;
		let r = e.querySelector(".app-shell__nav, .app-shell__toolbar");
		if (!r) continue;
		let i = getComputedStyle(r).backgroundColor, a = n(i);
		if (a) return a;
	}
	return null;
}, i = (e) => e === "dark" || e === "light" ? e : globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.matches ? "dark" : "light", a = (e) => {
	switch (e) {
		case "small": return "14px";
		case "large": return "18px";
		default: return "16px";
	}
}, o = (e) => {
	try {
		document.querySelectorAll("[data-shell]").forEach((t) => {
			let n = t;
			n.dataset.theme = e, n.style.colorScheme = e;
			let r = n.shadowRoot?.querySelector?.(".app-shell");
			r && (r.dataset.theme = e, r.style.colorScheme = e);
		});
	} catch {}
}, s = (e, t) => {
	if (typeof document > "u") return;
	let n = document.documentElement, i = t === "dark" ? "dark" : t === "light" ? "light" : "auto";
	n.setAttribute("data-scheme", i), n.setAttribute("data-theme", e), n.style.colorScheme = e;
	try {
		let t = document.body;
		t && (t.style.colorScheme = e);
	} catch {}
	try {
		document.querySelectorAll("[data-shell='content']").forEach((t) => {
			t.style.colorScheme = e;
		});
	} catch {}
	if (globalThis?.__LURE_DYNAMIC_THEME_PRIORITY__ !== !0) {
		let t = () => {
			if (globalThis?.__LURE_DYNAMIC_THEME_PRIORITY__ === !0) return;
			let t = document.querySelector("meta[name=\"theme-color\"]");
			if (!t) return;
			let n = r(), i = e === "dark" ? "#0f1419" : "#007acc";
			t.setAttribute("content", n ?? i);
		};
		t(), requestAnimationFrame(t);
	}
	o(e);
}, c = (e) => {
	if (typeof document > "u") return;
	let n = document.documentElement, r = e.appearance?.theme || "auto";
	s(i(r), r), n.style.fontSize = a(e.appearance?.fontSize), e.appearance?.color && (document.body.style.setProperty("--current", e.appearance.color), document.body.style.setProperty("--primary", e.appearance.color), n.style.setProperty("--current", e.appearance.color), n.style.setProperty("--primary", e.appearance.color)), e.grid && t(e);
}, l = () => {
	if (typeof document > "u") return;
	let t = async () => {
		try {
			c(await e());
		} catch {}
		try {
			document.documentElement.offsetHeight;
		} catch {}
	};
	(async () => {
		await t(), queueMicrotask(() => {
			t();
		}), requestAnimationFrame(() => {
			t();
			try {
				document.documentElement.dispatchEvent(new CustomEvent("u2-theme-change", { bubbles: !0 }));
			} catch {}
			requestAnimationFrame(() => {
				t();
				let e = globalThis.requestIdleCallback;
				typeof e == "function" ? e(() => {
					t();
				}, { timeout: 200 }) : globalThis.setTimeout(() => {
					t();
				}, 50);
			});
		});
	})();
}, u = async () => {
	try {
		if (typeof document > "u") return;
		c(await e()), globalThis.matchMedia?.("(prefers-color-scheme: dark)")?.addEventListener?.("change", async () => {
			c(await e());
		});
	} catch (e) {
		console.warn("Failed to init theme", e);
	}
};
//#endregion
export { r as a, l as i, n, s as o, u as r, c as t };
