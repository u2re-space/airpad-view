import { $ as e, At as t, Dr as n, Dt as r, Er as i, J as a, Mr as o, Mt as s, Ot as c, Pr as l, Pt as u, Q as d, Tr as f, Zn as p, at as m, br as h, dt as g, er as _, ft as v, ir as y, it as b, kr as x, lr as S, lt as C, nt as w, pt as ee, rr as T, sr as E, tr as D, tt as te, wn as ne, wr as O, yr as re } from "./src-BoL7goZG.js";
import { t as ie } from "./AssignObject-BwpT75Pb.js";
import { r as ae, t as oe } from "./ContextMenu-Bpvs_YaJ.js";
//#region ../home-view/src/ts/Interact.ts
var se = /* @__PURE__ */ new Set();
[
	{
		name: "--drag-x",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--drag-y",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--cs-drag-x",
		syntax: "<length-percentage>",
		inherits: !1,
		initialValue: "0px"
	},
	{
		name: "--cs-drag-y",
		syntax: "<length-percentage>",
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
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--resize-y",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--shift-x",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
	},
	{
		name: "--shift-y",
		syntax: "<number>",
		inherits: !1,
		initialValue: "0"
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
		name: "--cs-transition-r",
		syntax: "<length-percentage>",
		inherits: !1,
		initialValue: "0px"
	},
	{
		name: "--cs-transition-c",
		syntax: "<length-percentage>",
		inherits: !1,
		initialValue: "0px"
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
	if (typeof CSS < "u" && !se.has(e.name)) try {
		CSS.registerProperty?.(e), se.add(e.name);
	} catch {}
});
var ce = async (e, t, n = !1) => {
	let r = [t?.layout?.columns || t?.layout?.[0] || 4, t?.layout?.rows || t?.layout?.[1] || 8], { item: i, list: a, items: o } = t;
	return await new Promise((e) => queueMicrotask(() => e(!0))), D?.(i, (t, n) => {
		let s = e?.parentElement;
		r[0] = parseInt(s?.getAttribute?.("data-grid-columns") || "4") || r[0], r[1] = parseInt(s?.getAttribute?.("data-grid-rows") || "8") || r[1];
		let c = {
			item: i,
			list: a,
			items: o,
			layout: r,
			size: [s?.clientWidth, s?.clientHeight]
		};
		if (i && !i?.cell && (i.cell = ie(y([0, 0]))), n === "cell") {
			let t = l(i?.cell || [0, 0], c);
			t[0] !== i?.cell?.[0] && i?.cell && (i.cell[0] = t?.[0]), t[1] !== i?.cell?.[1] && i?.cell && (i.cell[1] = t?.[1]), O(e, "--p-cell-x", t?.[0]), O(e, "--p-cell-y", t?.[1]), O(e, "--cell-x", t?.[0]), O(e, "--cell-y", t?.[1]);
		}
	});
}, le = async (e, { layout: t, dragging: n, currentCell: i, syncDragStyles: a }, { item: o, items: d, list: p }) => {
	let m = null, h = (t, n) => {
		e.dataset.interactionState = t, e.dataset.gridCoordinateState = n;
	}, g = () => {
		m &&= (clearTimeout(m), null);
	};
	h("onHover", "source");
	let _ = () => {
		let n = e?.parentElement;
		return n ? (t[0] = parseInt(n.getAttribute?.("data-grid-columns") || "4") || t[0], t[1] = parseInt(n.getAttribute?.("data-grid-rows") || "8") || t[1], t) : t;
	}, v = () => {
		let t = e?.parentElement;
		if (!t) return null;
		let n = [..._()], r = {
			layout: {
				columns: n[0],
				rows: n[1]
			},
			item: o,
			list: p,
			items: d
		}, i = t.getBoundingClientRect(), a = e.getBoundingClientRect(), s = (a.left + a.right) / 2, c = (a.top + a.bottom) / 2;
		return s < i.left || s > i.right || c < i.top || c > i.bottom ? null : f(t, [s, c], r, "floor");
	}, y = (e, t) => {
		if (i?.[t]?.value !== e[t]) try {
			i[t].value = e[t];
		} catch {}
	}, b = (n) => {
		let r = s(l(n, {
			item: o,
			items: d,
			list: p,
			layout: t,
			size: [e?.clientWidth || 0, e?.clientHeight || 0]
		}), t), i = [r.x.value, r.y.value];
		y(i, 0), y(i, 1);
	}, x = () => {
		try {
			n[0].value = 0;
		} catch {}
		try {
			n[1].value = 0;
		} catch {}
	}, S = (t) => {
		g();
		let n = [i?.[0]?.value ?? o?.cell?.[0] ?? 0, i?.[1]?.value ?? o?.cell?.[1] ?? 0];
		if (O(e, "--p-cell-x", n[0]), O(e, "--p-cell-y", n[1]), O(e, "--cell-x", n[0]), O(e, "--cell-y", n[1]), e.setAttribute("data-dragging", ""), t && Array.isArray(t)) try {
			t[0].value = 0, t[1].value = 0;
		} catch {}
		return O(e, "--drag-settle-ms", "0ms"), a?.(!0), h("onGrab", "source"), [0, 0];
	};
	return c((t) => new r(e, {
		handler: "*",
		anyPointer: !0,
		mouseImmediate: !0,
		minHoldTime: 60 * 3600,
		maxHoldTime: 100
	}, u((r) => {
		S(n), t?.(r, e);
	})), (t) => {
		g();
		let n = v();
		return requestAnimationFrame(async () => {
			O(e, "--p-cell-x", i?.[0]?.value ?? o?.cell?.[0] ?? 0), O(e, "--p-cell-y", i?.[1]?.value ?? o?.cell?.[1] ?? 0), n && (O(e, "--cell-x", n[0]), O(e, "--cell-y", n[1]));
			let t = e.parentElement;
			if (t) {
				let n = getComputedStyle(t), r = parseFloat(n.paddingLeft) || 0, i = parseFloat(n.paddingRight) || 0, a = parseFloat(n.paddingTop) || 0, o = parseFloat(n.paddingBottom) || 0, s = Math.max(1, t.clientWidth - r - i), c = Math.max(1, t.clientHeight - a - o), l = parseFloat(n.getPropertyValue("--cs-layout-c")) || 4, u = parseFloat(n.getPropertyValue("--cs-layout-r")) || 8;
				O(e, "--cs-sw-unit-x", `${s / l}px`), O(e, "--cs-sw-unit-y", `${c / u}px`);
			}
			a?.(!0), O(e, "--drag-settle-ms", "240ms"), O(e, "will-change", "transform"), h("onRelax", "destination"), e.style.removeProperty("--cs-transition-c"), e.style.removeProperty("--cs-transition-r");
			let r = parseFloat(e.style.getPropertyValue("--drag-x") || "0") || 0, s = parseFloat(e.style.getPropertyValue("--drag-y") || "0") || 0, c = !matchMedia?.("(prefers-reduced-motion: reduce)")?.matches && (Math.abs(r) > .5 || Math.abs(s) > .5 || n != null), l = null;
			if (c) {
				let t = getComputedStyle(e), n = parseFloat(t.getPropertyValue("--cs-p-grid-c")) || 0, i = parseFloat(t.getPropertyValue("--cs-p-grid-r")) || 0, a = parseFloat(t.getPropertyValue("--cs-grid-c")) || 0, o = parseFloat(t.getPropertyValue("--cs-grid-r")) || 0;
				l = e.animate([{
					"--rv-grid-c": n,
					"--rv-grid-r": i,
					"--drag-x": r,
					"--drag-y": s,
					"--cs-drag-x": `${r}px`,
					"--cs-drag-y": `${s}px`
				}, {
					"--rv-grid-c": a,
					"--rv-grid-r": o,
					"--drag-x": 0,
					"--drag-y": 0,
					"--cs-drag-x": "0px",
					"--cs-drag-y": "0px"
				}], {
					fill: "forwards",
					duration: 240,
					easing: "cubic-bezier(0.22, 0.8, 0.3, 1)"
				});
				let c = () => l?.finish?.();
				e.addEventListener("m-dragstart", c, { once: !0 }), await l.finished.catch(console.warn.bind(console)), e.removeEventListener("m-dragstart", c);
			}
			requestAnimationFrame(() => {
				O(e, "will-change", "auto"), x(), a?.(!0), n && (b(n), O(e, "--p-cell-x", n[0]), O(e, "--p-cell-y", n[1]), O(e, "--cell-x", n[0]), O(e, "--cell-y", n[1])), l?.cancel?.(), e.removeAttribute("data-dragging"), h("onPlace", "destination"), m = setTimeout(() => {
					h("onHover", "source"), m = null;
				}, 280), e.dispatchEvent(new CustomEvent("m-dragsettled", {
					bubbles: !0,
					detail: {
						cell: n ? [n[0], n[1]] : null,
						interactionState: "onPlace",
						coordinateState: "destination"
					}
				}));
			});
		}), [0, 0];
	}, n);
};
typeof document < "u" && document?.documentElement;
var ue = (e, t) => {
	ce(e, t, !0);
	let { item: n, items: r, list: i } = t, a = [t?.layout?.columns || t?.layout?.[0] || 4, t?.layout?.rows || t?.layout?.[1] || 8], o = !!t?.immediateDragStyles, s = [T(0, x()), T(0, x())], c = [T(n?.cell?.[0] || 0), T(n?.cell?.[1] || 0)];
	O(e, "--cell-x", c?.[0]?.value || 0), O(e, "--cell-y", c?.[1]?.value || 0);
	let l = () => {
		let t = s?.[0]?.value || 0, n = s?.[1]?.value || 0;
		O(e, "--drag-x", t), O(e, "--cs-drag-x", `${t}px`), O(e, "--drag-y", n), O(e, "--cs-drag-y", `${n}px`);
	}, u = null, d = (e = !1) => {
		o || e ? (l(), u &&= (cancelAnimationFrame(u), null)) : u ||= requestAnimationFrame(() => {
			l(), u = null;
		});
	};
	D([s[0], "value"], (e, t) => {
		t === "value" && d();
	}), D([s[1], "value"], (e, t) => {
		t === "value" && d();
	});
	let f = () => {
		(Math.abs(s[0]?.value || 0) > .5 || Math.abs(s[1]?.value || 0) > .5) && (e.dataset.interactionState = "onMoving", e.dataset.gridCoordinateState = "intermediate");
	};
	return D([s[0], "value"], (e, t) => {
		t === "value" && f();
	}), D([s[1], "value"], (e, t) => {
		t === "value" && f();
	}), d(!0), D([c[0], "value"], (t, r) => {
		r === "value" && n.cell != null && t != null && O(e, "--cell-x", (n.cell[0] = t) || 0);
	}), D([c[1], "value"], (t, r) => {
		r === "value" && n.cell != null && t != null && O(e, "--cell-y", (n.cell[1] = t) || 0);
	}), e.dataset.dragResetBound || (e.dataset.dragResetBound = "1", e.addEventListener("m-dragstart", () => {
		O(e, "--drag-settle-ms", "0ms"), e.style.removeProperty("--cs-transition-c"), e.style.removeProperty("--cs-transition-r");
	})), le(e, {
		layout: a,
		currentCell: c,
		dragging: s,
		syncDragStyles: d
	}, {
		item: n,
		items: r,
		list: i
	}), c;
}, de = (e) => e === "open-view", fe = (e) => e === "open-link", pe = (e, t, n, r) => {
	if (e) {
		if (e.innerHTML = "", r) {
			let t = document.createElement("option");
			t.value = r.value, t.textContent = r.label, t.selected = n === r.value, e.append(t);
		}
		for (let r of t) {
			let t = document.createElement("option");
			t.value = r.value, t.textContent = r.label, t.selected = r.value === n, e.append(t);
		}
		if (n && !t.some((e) => e.value === n)) {
			let t = document.createElement("option");
			t.value = n, t.textContent = n, t.selected = !0, e.append(t);
		}
	}
}, me = (e) => {
	let { mode: t, initial: n, actionOptions: r, viewOptions: i, onSave: a, onDelete: o, isViewAction: s = de, isHrefAction: c = fe, registerForBackNavigation: l = !1 } = e, u = document.createElement("div");
	u.className = "rs-modal-backdrop speed-dial-editor", u.innerHTML = `
        <form class="modal-form speed-dial-editor__form">
            <header class="modal-header">
                <h2 class="modal-title">${t === "create" ? "Create shortcut" : "Edit shortcut"}</h2>
                <p class="modal-description">Configure quick access tiles for frequently used views or links.</p>
            </header>
            <div class="modal-fields">
                <label class="modal-field">
                    <span>Label</span>
                    <input name="label" type="text" minlength="1" required />
                </label>
                <label class="modal-field">
                    <span>Icon</span>
                    <input name="icon" type="text" placeholder="phosphor icon name" />
                </label>
                <label class="modal-field">
                    <span>Shape</span>
                    <select name="shape">
                        <option value="squircle">Squircle</option>
                        <option value="circle">Circle</option>
                        <option value="square">Rounded square</option>
                    </select>
                </label>
                <label class="modal-field">
                    <span>Action</span>
                    <select name="action"></select>
                </label>
                <label class="modal-field" data-field="view">
                    <span>View</span>
                    <select name="view"></select>
                </label>
                <label class="modal-field" data-field="href">
                    <span>Link</span>
                    <input name="href" type="text" inputmode="url" autocomplete="off" placeholder="https://…, mailto:…" />
                </label>
                <label class="modal-field">
                    <span>Description</span>
                    <textarea name="description" rows="2" placeholder="Optional description"></textarea>
                </label>
            </div>
            <footer class="modal-actions">
                <div class="modal-actions-left">
                    ${t === "edit" ? "<button type=\"button\" data-action=\"delete\" class=\"btn danger\">Delete</button>" : ""}
                </div>
                <div class="modal-actions-right">
                    <button type="button" data-action="cancel" class="btn secondary">Cancel</button>
                    <button type="submit" class="btn save">Save</button>
                </div>
            </footer>
        </form>
    `;
	let d = u.querySelector("form"), f = d?.querySelector("input[name=\"label\"]"), m = d?.querySelector("input[name=\"icon\"]"), h = d?.querySelector("select[name=\"shape\"]"), g = d?.querySelector("select[name=\"action\"]"), _ = d?.querySelector("select[name=\"view\"]"), v = d?.querySelector("input[name=\"href\"]"), y = d?.querySelector("textarea[name=\"description\"]"), b = d?.querySelector("[data-field=\"view\"]"), x = d?.querySelector("[data-field=\"href\"]");
	f && (f.value = String(n.label || "New shortcut")), m && (m.value = String(n.icon || "sparkle"));
	let S = String(n.shape || "squircle").toLowerCase();
	h && (h.value = [
		"circle",
		"square",
		"squircle"
	].includes(S) ? S : "squircle"), v && (v.value = String(n.href || "")), y && (y.value = String(n.description || "")), pe(g, r, String(n.action || "")), pe(_, i, String(n.view || ""), {
		value: "",
		label: "Choose view"
	});
	let C = () => {
		let e = String(g?.value || "");
		b && (b.hidden = !s(e)), x && (x.hidden = !c(e));
	}, w = null, ee = (e) => {
		e.key === "Escape" && T();
	}, T = () => {
		w?.(), w = null, document.removeEventListener("keydown", ee), u.remove();
	};
	g?.addEventListener("change", C), C(), document.addEventListener("keydown", ee), u.addEventListener("click", (e) => {
		e.target === u && T();
	}), d?.addEventListener("click", (e) => {
		let n = e.target?.dataset?.action || "";
		if (n === "cancel") {
			e.preventDefault(), T();
			return;
		}
		n === "delete" && t === "edit" && (e.preventDefault(), o?.(), T());
	}), d?.addEventListener("submit", (e) => {
		e.preventDefault(), a({
			label: String(f?.value || "").trim() || "Item",
			icon: String(m?.value || "").trim() || "sparkle",
			action: String(g?.value || "open-view"),
			view: String(_?.value || "").trim(),
			href: String(v?.value || "").trim(),
			description: String(y?.value || "").trim(),
			shape: String(h?.value || "squircle").toLowerCase()
		}), T();
	}), l && (w = p(u, void 0, T)), document.body.append(u);
}, he = "@charset \"UTF-8\";\n@function --hsv(--src-color <color>) returns <color> {\n  result: hsl(from var(--src-color, black) h calc(calc((calc(l / 100) - calc(calc(l / 100) * (1 - calc(s / 100) / 2))) / clamp(0.0001, min(calc(calc(l / 100) * (1 - calc(s / 100) / 2)), calc(1 - calc(calc(l / 100) * (1 - calc(s / 100) / 2)))), 1)) * 100) calc(calc(calc(l / 100) * (1 - calc(s / 100) / 2)) * 100) / alpha);\n}\n/* ai-refactor: optimized/refactored at 2026-02-13T02:50:43Z */\n/* ==========================================================================\n    Meta / Declarations\n   ========================================================================== */\n/* ==========================================================================\n    Tokens / Mixins (global, not layered)\n   ========================================================================== */\n/* ai-refactor: optimized/refactored at 2026-02-13T00:48:23Z */\n@layer tokens, base, layout, utilities, shells, shell, views, view, viewer, components, ux-layer, markdown, essentials, print, print-breaks, overrides;\n@layer tokens {\n  :root,\n  :host,\n  :scope {\n    color-scheme: light dark;\n    --color-primary: #5a7fff;\n    --color-on-primary: #ffffff;\n    --color-secondary: #6b7280;\n    --color-on-secondary: #ffffff;\n    --color-tertiary: #64748b;\n    --color-on-tertiary: #ffffff;\n    --color-error: #ef4444;\n    --color-on-error: #ffffff;\n    --color-success: #4caf50;\n    --color-warning: #ff9800;\n    --color-info: #2196f3;\n    --color-background: #fafbfc;\n    --color-on-background: #1e293b;\n    --color-surface: #fafbfc;\n    --color-on-surface: #1e293b;\n    --color-surface-variant: #f1f5f9;\n    --color-on-surface-variant: #64748b;\n    --color-outline: #cbd5e1;\n    --color-outline-variant: #94a3b8;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 96%, var(--color-primary) 4%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 75%, transparent);\n    --space-xs: 0.25rem;\n    --space-sm: 0.5rem;\n    --space-md: 0.75rem;\n    --space-lg: 1rem;\n    --space-xl: 1.25rem;\n    --space-2xl: 1.5rem;\n    --padding-xs: var(--space-xs);\n    --padding-sm: var(--space-sm);\n    --padding-md: var(--space-md);\n    --padding-lg: var(--space-lg);\n    --padding-xl: var(--space-xl);\n    --padding-2xl: var(--space-2xl);\n    --padding-3xl: 2rem;\n    --padding-4xl: 2.5rem;\n    --padding-5xl: 3rem;\n    --padding-6xl: 4rem;\n    --padding-7xl: 5rem;\n    --padding-8xl: 6rem;\n    --padding-9xl: 8rem;\n    --gap-xs: var(--space-xs);\n    --gap-sm: var(--space-sm);\n    --gap-md: var(--space-md);\n    --gap-lg: var(--space-lg);\n    --gap-xl: var(--space-xl);\n    --gap-2xl: var(--space-2xl);\n    --radius-none: 0;\n    --radius-sm: 0.25rem;\n    --radius-default: 0.25rem;\n    --radius-md: 0.375rem;\n    --radius-lg: 0.5rem;\n    --radius-xl: 0.75rem;\n    --radius-2xl: 1rem;\n    --radius-3xl: 1.5rem;\n    --radius-full: 9999px;\n    --elev-0: none;\n    --elev-1: 0 1px 1px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1);\n    --elev-2: 0 2px 6px rgba(0, 0, 0, 0.12), 0 8px 24px rgba(0, 0, 0, 0.08);\n    --elev-3: 0 6px 16px rgba(0, 0, 0, 0.14), 0 18px 48px rgba(0, 0, 0, 0.1);\n    --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);\n    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);\n    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);\n    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);\n    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);\n    --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.1);\n    --shadow-inset: inset 0 2px 4px rgba(0, 0, 0, 0.06);\n    --shadow-inset-strong: inset 0 4px 8px rgba(0, 0, 0, 0.12);\n    --shadow-none: 0 0 #0000;\n    --text-xs: 0.8rem;\n    --text-sm: 0.9rem;\n    --text-base: 1rem;\n    --text-lg: 1.1rem;\n    --text-xl: 1.25rem;\n    --text-2xl: 1.6rem;\n    --text-3xl: 2rem;\n    --font-size-xs: 0.75rem;\n    --font-size-sm: 0.875rem;\n    --font-size-base: 1rem;\n    --font-size-lg: 1.125rem;\n    --font-size-xl: 1.25rem;\n    --font-weight-normal: 400;\n    --font-weight-medium: 500;\n    --font-weight-semibold: 600;\n    --font-weight-bold: 700;\n    --font-family: \"Roboto\", ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;\n    --font-family-mono: \"Roboto Mono\", \"SF Mono\", Monaco, Inconsolata, \"Fira Code\", monospace;\n    --font-sans: var(--font-family);\n    --font-mono: var(--font-family-mono);\n    --leading-tight: 1.2;\n    --leading-normal: 1.5;\n    --leading-relaxed: 1.8;\n    --transition-fast: 120ms cubic-bezier(0.2, 0, 0, 1);\n    --transition-normal: 160ms cubic-bezier(0.2, 0, 0, 1);\n    --transition-slow: 200ms cubic-bezier(0.2, 0, 0, 1);\n    --motion-fast: var(--transition-fast);\n    --motion-normal: var(--transition-normal);\n    --motion-slow: var(--transition-slow);\n    --focus-ring: 0 0 0 3px color-mix(in oklab, var(--color-primary) 35%, transparent);\n    --z-base: 0;\n    --z-dropdown: 100;\n    --z-sticky: 200;\n    --z-fixed: 300;\n    --z-modal-backdrop: 400;\n    --z-modal: 500;\n    --z-popover: 600;\n    --z-tooltip: 700;\n    --z-toast: 800;\n    --z-max: 9999;\n    --view-bg: var(--color-surface);\n    --view-fg: var(--color-on-surface);\n    --view-border: var(--color-outline-variant);\n    --view-input-bg: light-dark(#ffffff, var(--color-surface-container-high));\n    --view-files-bg: light-dark(rgba(0, 0, 0, 0.02), var(--color-surface-container-low));\n    --view-file-bg: light-dark(rgba(0, 0, 0, 0.03), var(--color-surface-container-lowest, var(--color-surface-container-low)));\n    --view-results-bg: light-dark(rgba(0, 0, 0, 0.01), var(--color-surface-container-low));\n    --view-result-bg: light-dark(rgba(0, 0, 0, 0.03), var(--color-surface-container-lowest, var(--color-surface-container-low)));\n    --color-surface-elevated: var(--color-surface-container);\n    --color-surface-hover: var(--color-surface-container-low);\n    --color-surface-active: var(--color-surface-container-high);\n    --color-on-surface-muted: var(--color-on-surface-variant);\n    --color-background-alt: var(--color-surface-variant);\n    --color-primary-hover: color-mix(in oklab, var(--color-primary) 80%, black);\n    --color-primary-active: color-mix(in oklab, var(--color-primary) 65%, black);\n    --color-accent: var(--color-secondary);\n    --color-accent-hover: color-mix(in oklab, var(--color-secondary) 80%, black);\n    --color-on-accent: var(--color-on-secondary);\n    --color-border-hover: var(--color-outline-variant);\n    --color-border-strong: var(--color-outline);\n    --color-border-focus: var(--color-primary);\n    --color-text: var(--color-on-surface);\n    --color-text-secondary: var(--color-on-surface-variant);\n    --color-text-muted: color-mix(in oklab, var(--color-on-surface) 50%, var(--color-surface));\n    --color-text-disabled: color-mix(in oklab, var(--color-on-surface) 38%, var(--color-surface));\n    --color-text-inverse: var(--color-on-primary);\n    --color-link: var(--color-primary);\n    --color-link-hover: color-mix(in oklab, var(--color-primary) 80%, black);\n    --color-success-light: color-mix(in oklab, var(--color-success) 60%, white);\n    --color-success-dark: color-mix(in oklab, var(--color-success) 70%, black);\n    --color-warning-light: color-mix(in oklab, var(--color-warning) 60%, white);\n    --color-warning-dark: color-mix(in oklab, var(--color-warning) 70%, black);\n    --color-error-light: color-mix(in oklab, var(--color-error) 60%, white);\n    --color-error-dark: color-mix(in oklab, var(--color-error) 70%, black);\n    --color-info-light: color-mix(in oklab, var(--color-info) 60%, white);\n    --color-info-dark: color-mix(in oklab, var(--color-info) 70%, black);\n    --color-bg: var(--color-surface, var(--color-surface));\n    --color-bg-alt: var(--color-surface-variant, var(--color-surface-variant));\n    --color-fg: var(--color-on-surface, var(--color-on-surface));\n    --color-fg-muted: var(--color-on-surface-variant, var(--color-on-surface-variant));\n    --btn-height-sm: 2rem;\n    --btn-height-md: 2.5rem;\n    --btn-height-lg: 3rem;\n    --btn-padding-x-sm: var(--space-md);\n    --btn-padding-x-md: var(--space-lg);\n    --btn-padding-x-lg: 1.5rem;\n    --btn-radius: var(--radius-md);\n    --btn-font-weight: var(--font-weight-medium);\n    --input-height-sm: 2rem;\n    --input-height-md: 2.5rem;\n    --input-height-lg: 3rem;\n    --input-padding-x: var(--space-md);\n    --input-radius: var(--radius-md);\n    --input-border-color: var(--color-border, var(--color-border));\n    --input-focus-ring-color: var(--color-primary);\n    --input-focus-ring-width: 2px;\n    --card-padding: var(--space-lg);\n    --card-radius: var(--radius-lg);\n    --card-shadow: var(--shadow-sm);\n    --card-border-color: var(--color-border, var(--color-border));\n    --modal-backdrop-bg: light-dark(rgb(0 0 0 / 0.5), rgb(0 0 0 / 0.7));\n    --modal-bg: var(--color-surface, var(--color-surface));\n    --modal-radius: var(--radius-xl);\n    --modal-shadow: var(--shadow-xl);\n    --modal-padding: 1.5rem;\n    --toast-font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif);\n    --toast-font-size: var(--font-size-base, 1rem);\n    --toast-font-weight: var(--font-weight-medium, 500);\n    --toast-letter-spacing: 0.01em;\n    --toast-line-height: 1.4;\n    --toast-white-space: nowrap;\n    --toast-pointer-events: auto;\n    --toast-user-select: none;\n    --toast-cursor: default;\n    --toast-opacity: 0;\n    --toast-transform: translateY(100%) scale(0.9);\n    --toast-transition: opacity 160ms ease-out, transform 160ms cubic-bezier(0.16, 1, 0.3, 1), background-color 100ms ease;\n    --toast-text: var(--color-on-surface, var(--color-on-surface, light-dark(#ffffff, #000000)));\n    --toast-bg: color-mix(in oklab, var(--color-surface-elevated, var(--color-surface-container-high, var(--color-surface, light-dark(#fafbfc, #1e293b)))) 90%, var(--color-on-surface, var(--color-on-surface, light-dark(#000000, #ffffff))));\n    --toast-radius: var(--radius-lg);\n    --toast-shadow: var(--shadow-lg);\n    --toast-padding: var(--space-lg);\n    --sidebar-width: 280px;\n    --sidebar-collapsed-width: 64px;\n    --nav-height: 56px;\n    --nav-height-compact: 48px;\n    --status-height: 24px;\n    --status-bg: var(--color-surface-elevated, var(--color-surface-container-high));\n    --status-font-size: var(--text-xs);\n  }\n  @media (prefers-color-scheme: dark) {\n    :root,\n    :host,\n    :scope {\n      --color-primary: #7ca7ff;\n      --color-on-primary: #0f172a;\n      --color-secondary: #94a3b8;\n      --color-on-secondary: #1e293b;\n      --color-tertiary: #94a3b8;\n      --color-on-tertiary: #0f172a;\n      --color-error: #f87171;\n      --color-on-error: #450a0a;\n      --color-success: #66bb6a;\n      --color-warning: #ffa726;\n      --color-info: #42a5f5;\n      --color-background: #0f1419;\n      --color-on-background: #f1f5f9;\n      --color-surface: #0f1419;\n      --color-on-surface: #f1f5f9;\n      --color-surface-variant: #1e293b;\n      --color-on-surface-variant: #cbd5e1;\n      --color-outline: #475569;\n      --color-outline-variant: #334155;\n      --color-surface-container-low: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n      --color-surface-container: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n      --color-surface-container-high: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n      --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 80%, var(--color-primary) 20%);\n      --color-border: color-mix(in oklab, var(--color-outline-variant) 70%, transparent);\n    }\n  }\n  [data-theme=light] {\n    color-scheme: light;\n    --color-primary: #5a7fff;\n    --color-on-primary: #ffffff;\n    --color-secondary: #6b7280;\n    --color-on-secondary: #ffffff;\n    --color-tertiary: #64748b;\n    --color-on-tertiary: #ffffff;\n    --color-error: #ef4444;\n    --color-on-error: #ffffff;\n    --color-success: #4caf50;\n    --color-warning: #ff9800;\n    --color-info: #2196f3;\n    --color-background: #fafbfc;\n    --color-on-background: #1e293b;\n    --color-surface: #fafbfc;\n    --color-on-surface: #1e293b;\n    --color-surface-variant: #f1f5f9;\n    --color-on-surface-variant: #64748b;\n    --color-outline: #cbd5e1;\n    --color-outline-variant: #94a3b8;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 96%, var(--color-primary) 4%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 75%, transparent);\n  }\n  [data-theme=dark] {\n    color-scheme: dark;\n    --color-primary: #7ca7ff;\n    --color-on-primary: #0f172a;\n    --color-secondary: #94a3b8;\n    --color-on-secondary: #1e293b;\n    --color-tertiary: #94a3b8;\n    --color-on-tertiary: #0f172a;\n    --color-error: #f87171;\n    --color-on-error: #450a0a;\n    --color-success: #66bb6a;\n    --color-warning: #ffa726;\n    --color-info: #42a5f5;\n    --color-background: #0f1419;\n    --color-on-background: #f1f5f9;\n    --color-surface: #0f1419;\n    --color-on-surface: #f1f5f9;\n    --color-surface-variant: #1e293b;\n    --color-on-surface-variant: #cbd5e1;\n    --color-outline: #475569;\n    --color-outline-variant: #334155;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 80%, var(--color-primary) 20%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 70%, transparent);\n  }\n  @media (prefers-reduced-motion: reduce) {\n    :root {\n      --transition-fast: 0ms;\n      --transition-normal: 0ms;\n      --transition-slow: 0ms;\n      --motion-fast: 0ms;\n      --motion-normal: 0ms;\n      --motion-slow: 0ms;\n    }\n  }\n  @media (prefers-contrast: high) {\n    :root {\n      --color-border: var(--color-border, var(--color-outline));\n      --color-border-hover: color-mix(in oklab, var(--color-border, var(--color-outline)) 80%, var(--color-on-surface, var(--color-on-surface)));\n      --color-text-secondary: var(--color-on-surface, var(--color-on-surface));\n      --color-text-muted: var(--color-on-surface-variant, var(--color-on-surface-variant));\n    }\n  }\n  @media print {\n    :root {\n      --view-padding: 0;\n      --view-content-max-width: 100%;\n      --view-bg: white;\n      --view-fg: black;\n      --view-heading-color: black;\n      --view-link-color: black;\n    }\n    :root:has([data-view=viewer]) {\n      --view-code-bg: #f5f5f5;\n      --view-code-fg: black;\n      --view-blockquote-bg: #f5f5f5;\n    }\n  }\n}\n/**\n * Unified CSS Custom Property Registration System\n * \n * This module consolidates property registration logic used across the library.\n * It provides a single source of truth for @property declarations via the\n * CSS Properties and Values API (CSS Houdini).\n * \n * Used by:\n * - lib/core/_properties.scss (orientation, transform, layout properties)\n * - lib/basic/_typed-properties.scss (UI component properties)\n * - lib/advanced/design/ (MD3 design properties)\n */\n/* stylelint-disable scss/function-no-unknown */\n@layer utilities {\n  .m-0 {\n    margin: 0;\n  }\n  .mb-0 {\n    margin-block: 0;\n  }\n  .mi-0 {\n    margin-inline: 0;\n  }\n  .p-0 {\n    padding: 0;\n  }\n  .pb-0 {\n    padding-block: 0;\n  }\n  .pi-0 {\n    padding-inline: 0;\n  }\n  .gap-0 {\n    gap: 0;\n  }\n  .inset-0 {\n    inset: 0;\n  }\n  .m-xs {\n    margin: 0.25rem;\n  }\n  .mb-xs {\n    margin-block: 0.25rem;\n  }\n  .mi-xs {\n    margin-inline: 0.25rem;\n  }\n  .p-xs {\n    padding: 0.25rem;\n  }\n  .pb-xs {\n    padding-block: 0.25rem;\n  }\n  .pi-xs {\n    padding-inline: 0.25rem;\n  }\n  .gap-xs {\n    gap: 0.25rem;\n  }\n  .inset-xs {\n    inset: 0.25rem;\n  }\n  .m-sm {\n    margin: 0.5rem;\n  }\n  .mb-sm {\n    margin-block: 0.5rem;\n  }\n  .mi-sm {\n    margin-inline: 0.5rem;\n  }\n  .p-sm {\n    padding: 0.5rem;\n  }\n  .pb-sm {\n    padding-block: 0.5rem;\n  }\n  .pi-sm {\n    padding-inline: 0.5rem;\n  }\n  .gap-sm {\n    gap: 0.5rem;\n  }\n  .inset-sm {\n    inset: 0.5rem;\n  }\n  .m-md {\n    margin: 0.75rem;\n  }\n  .mb-md {\n    margin-block: 0.75rem;\n  }\n  .mi-md {\n    margin-inline: 0.75rem;\n  }\n  .p-md {\n    padding: 0.75rem;\n  }\n  .pb-md {\n    padding-block: 0.75rem;\n  }\n  .pi-md {\n    padding-inline: 0.75rem;\n  }\n  .gap-md {\n    gap: 0.75rem;\n  }\n  .inset-md {\n    inset: 0.75rem;\n  }\n  .m-lg {\n    margin: 1rem;\n  }\n  .mb-lg {\n    margin-block: 1rem;\n  }\n  .mi-lg {\n    margin-inline: 1rem;\n  }\n  .p-lg {\n    padding: 1rem;\n  }\n  .pb-lg {\n    padding-block: 1rem;\n  }\n  .pi-lg {\n    padding-inline: 1rem;\n  }\n  .gap-lg {\n    gap: 1rem;\n  }\n  .inset-lg {\n    inset: 1rem;\n  }\n  .m-xl {\n    margin: 1.25rem;\n  }\n  .mb-xl {\n    margin-block: 1.25rem;\n  }\n  .mi-xl {\n    margin-inline: 1.25rem;\n  }\n  .p-xl {\n    padding: 1.25rem;\n  }\n  .pb-xl {\n    padding-block: 1.25rem;\n  }\n  .pi-xl {\n    padding-inline: 1.25rem;\n  }\n  .gap-xl {\n    gap: 1.25rem;\n  }\n  .inset-xl {\n    inset: 1.25rem;\n  }\n  .m-2xl {\n    margin: 1.5rem;\n  }\n  .mb-2xl {\n    margin-block: 1.5rem;\n  }\n  .mi-2xl {\n    margin-inline: 1.5rem;\n  }\n  .p-2xl {\n    padding: 1.5rem;\n  }\n  .pb-2xl {\n    padding-block: 1.5rem;\n  }\n  .pi-2xl {\n    padding-inline: 1.5rem;\n  }\n  .gap-2xl {\n    gap: 1.5rem;\n  }\n  .inset-2xl {\n    inset: 1.5rem;\n  }\n  .m-3xl {\n    margin: 2rem;\n  }\n  .mb-3xl {\n    margin-block: 2rem;\n  }\n  .mi-3xl {\n    margin-inline: 2rem;\n  }\n  .p-3xl {\n    padding: 2rem;\n  }\n  .pb-3xl {\n    padding-block: 2rem;\n  }\n  .pi-3xl {\n    padding-inline: 2rem;\n  }\n  .gap-3xl {\n    gap: 2rem;\n  }\n  .inset-3xl {\n    inset: 2rem;\n  }\n  .text-xs {\n    font-size: 0.75rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-sm {\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-base {\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-lg {\n    font-size: 1.125rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-xl {\n    font-size: 1.25rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-2xl {\n    font-size: 1.5rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .font-thin {\n    font-weight: 100;\n  }\n  .font-light {\n    font-weight: 300;\n  }\n  .font-normal {\n    font-weight: 400;\n  }\n  .font-medium {\n    font-weight: 500;\n  }\n  .font-semibold {\n    font-weight: 600;\n  }\n  .font-bold {\n    font-weight: 700;\n  }\n  .text-start {\n    text-align: start;\n  }\n  .text-center {\n    text-align: center;\n  }\n  .text-end {\n    text-align: end;\n  }\n  .text-primary {\n    color: #1e293b, #f1f5f9;\n  }\n  .text-secondary {\n    color: #64748b, #94a3b8;\n  }\n  .text-muted {\n    color: #94a3b8, #64748b;\n  }\n  .text-disabled {\n    color: #cbd5e1, #475569;\n  }\n  .block,\n  .vu-block {\n    display: block;\n  }\n  .inline,\n  .vu-inline {\n    display: inline;\n  }\n  .inline-block {\n    display: inline-block;\n  }\n  .flex,\n  .vu-flex {\n    display: flex;\n  }\n  .inline-flex {\n    display: inline-flex;\n  }\n  .grid,\n  .vu-grid {\n    display: grid;\n  }\n  .hidden,\n  .vu-hidden {\n    display: none;\n  }\n  .flex-row {\n    flex-direction: row;\n  }\n  .flex-col {\n    flex-direction: column;\n  }\n  .flex-wrap {\n    flex-wrap: wrap;\n  }\n  .flex-nowrap {\n    flex-wrap: nowrap;\n  }\n  .items-start {\n    align-items: flex-start;\n  }\n  .items-center {\n    align-items: center;\n  }\n  .items-end {\n    align-items: flex-end;\n  }\n  .items-stretch {\n    align-items: stretch;\n  }\n  .justify-start {\n    justify-content: flex-start;\n  }\n  .justify-center {\n    justify-content: center;\n  }\n  .justify-end {\n    justify-content: flex-end;\n  }\n  .justify-between {\n    justify-content: space-between;\n  }\n  .justify-around {\n    justify-content: space-around;\n  }\n  .grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .h-auto,\n  .block-size-auto {\n    block-size: auto;\n  }\n  .h-full,\n  .block-size-full {\n    block-size: 100%;\n  }\n  .h-screen {\n    block-size: 100vh;\n  }\n  .w-auto,\n  .inline-size-auto {\n    inline-size: auto;\n  }\n  .w-full,\n  .inline-size-full {\n    inline-size: 100%;\n  }\n  .w-screen {\n    inline-size: 100vw;\n  }\n  .min-h-0,\n  .min-block-size-0 {\n    min-block-size: 0;\n  }\n  .min-w-0,\n  .min-inline-size-0 {\n    min-inline-size: 0;\n  }\n  .max-h-full,\n  .max-block-size-full {\n    max-block-size: 100%;\n  }\n  .max-w-full,\n  .max-inline-size-full {\n    max-inline-size: 100%;\n  }\n  .static {\n    position: static;\n  }\n  .relative {\n    position: relative;\n  }\n  .absolute {\n    position: absolute;\n  }\n  .fixed {\n    position: fixed;\n  }\n  .sticky {\n    position: sticky;\n  }\n  .bg-surface {\n    background-color: #fafbfc, #0f1419;\n  }\n  .bg-surface-container {\n    background-color: #f1f5f9, #1e293b;\n  }\n  .bg-surface-container-high {\n    background-color: #e2e8f0, #334155;\n  }\n  .bg-primary {\n    background-color: #5a7fff, #7ca7ff;\n  }\n  .bg-secondary {\n    background-color: #6b7280, #94a3b8;\n  }\n  .border {\n    border: 1px solid #cbd5e1, #475569;\n  }\n  .border-2 {\n    border: 2px solid #cbd5e1, #475569;\n  }\n  .border-primary {\n    border: 1px solid #5a7fff, #7ca7ff;\n  }\n  .border-secondary {\n    border: 1px solid #6b7280, #94a3b8;\n  }\n  .rounded-none {\n    border-radius: 0;\n  }\n  .rounded-sm {\n    border-radius: 0.25rem;\n  }\n  .rounded-md {\n    border-radius: 0.375rem;\n  }\n  .rounded-lg {\n    border-radius: 0.5rem;\n  }\n  .rounded-full {\n    border-radius: 9999px;\n  }\n  .shadow-xs {\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  }\n  .shadow-sm {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  }\n  .shadow-md {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  }\n  .shadow-lg {\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  }\n  .shadow-xl {\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  }\n  .cursor-pointer {\n    cursor: pointer;\n  }\n  .cursor-default {\n    cursor: default;\n  }\n  .cursor-not-allowed {\n    cursor: not-allowed;\n  }\n  .select-none {\n    user-select: none;\n  }\n  .select-text {\n    user-select: text;\n  }\n  .select-all {\n    user-select: all;\n  }\n  .visible {\n    visibility: visible;\n  }\n  .invisible {\n    visibility: hidden;\n  }\n  .collapse,\n  .vs-collapsed {\n    visibility: collapse;\n  }\n  .opacity-0 {\n    opacity: 0;\n  }\n  .opacity-25 {\n    opacity: 0.25;\n  }\n  .opacity-50 {\n    opacity: 0.5;\n  }\n  .opacity-75 {\n    opacity: 0.75;\n  }\n  .opacity-100 {\n    opacity: 1;\n  }\n  @container (max-width: 320px) {\n    .hidden\\@xs {\n      display: none;\n    }\n  }\n  @container (max-width: 640px) {\n    .hidden\\@sm {\n      display: none;\n    }\n  }\n  @container (max-width: 768px) {\n    .hidden\\@md {\n      display: none;\n    }\n  }\n  @container (max-width: 1024px) {\n    .hidden\\@lg {\n      display: none;\n    }\n  }\n  @container (min-width: 320px) {\n    .block\\@xs {\n      display: block;\n    }\n  }\n  @container (min-width: 640px) {\n    .block\\@sm {\n      display: block;\n    }\n  }\n  @container (min-width: 768px) {\n    .block\\@md {\n      display: block;\n    }\n  }\n  @container (min-width: 1024px) {\n    .block\\@lg {\n      display: block;\n    }\n  }\n  @container (max-width: 320px) {\n    .text-sm\\@xs {\n      font-size: 0.875rem;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0;\n    }\n  }\n  @container (min-width: 640px) {\n    .text-base\\@sm {\n      font-size: 1rem;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0;\n    }\n  }\n  .icon-xs {\n    --icon-size: 0.75rem;\n  }\n  .icon-sm {\n    --icon-size: 0.875rem;\n  }\n  .icon-md {\n    --icon-size: 1rem;\n  }\n  .icon-lg {\n    --icon-size: 1.25rem;\n  }\n  .icon-xl {\n    --icon-size: 1.5rem;\n  }\n  .center-absolute {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  .center-flex {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: nowrap;\n  }\n  .interactive {\n    cursor: pointer;\n    touch-action: manipulation;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .interactive:focus-visible {\n    outline: 2px solid #dbeafe, #1e40af;\n    outline-offset: 2px;\n  }\n  .interactive:disabled, .interactive[aria-disabled=true] {\n    cursor: not-allowed;\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  .focus-ring:focus-visible {\n    outline: 2px solid #dbeafe, #1e40af;\n    outline-offset: 2px;\n  }\n  .truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .truncate-2 {\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .truncate-3 {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .aspect-square {\n    aspect-ratio: 1;\n  }\n  .aspect-video {\n    aspect-ratio: 16 / 9;\n  }\n  .margin-block-0 {\n    margin-block: 0;\n  }\n  .margin-block-sm {\n    margin-block: var(--space-sm);\n  }\n  .margin-block-md {\n    margin-block: var(--space-md);\n  }\n  .margin-block-lg {\n    margin-block: var(--space-lg);\n  }\n  .margin-inline-0 {\n    margin-inline: 0;\n  }\n  .margin-inline-sm {\n    margin-inline: var(--space-sm);\n  }\n  .margin-inline-md {\n    margin-inline: var(--space-md);\n  }\n  .margin-inline-lg {\n    margin-inline: var(--space-lg);\n  }\n  .margin-inline-auto {\n    margin-inline: auto;\n  }\n  .padding-block-0 {\n    padding-block: 0;\n  }\n  .padding-block-sm {\n    padding-block: var(--space-sm);\n  }\n  .padding-block-md {\n    padding-block: var(--space-md);\n  }\n  .padding-block-lg {\n    padding-block: var(--space-lg);\n  }\n  .padding-inline-0 {\n    padding-inline: 0;\n  }\n  .padding-inline-sm {\n    padding-inline: var(--space-sm);\n  }\n  .padding-inline-md {\n    padding-inline: var(--space-md);\n  }\n  .padding-inline-lg {\n    padding-inline: var(--space-lg);\n  }\n  .pointer-events-none {\n    pointer-events: none;\n  }\n  .pointer-events-auto {\n    pointer-events: auto;\n  }\n  .line-clamp-1 {\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .line-clamp-2 {\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .line-clamp-3 {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .vs-active {\n    --state-active: 1;\n  }\n  .vs-disabled {\n    pointer-events: none;\n    opacity: 0.5;\n  }\n  .vs-loading {\n    cursor: wait;\n  }\n  .vs-error {\n    color: var(--color-error, #dc3545);\n  }\n  .vs-success {\n    color: var(--color-success, #28a745);\n  }\n  .vs-hidden {\n    display: none !important;\n  }\n  .vl-container,\n  .container {\n    inline-size: 100%;\n    max-inline-size: var(--container-max, 1200px);\n    margin-inline: auto;\n  }\n  .vl-container {\n    padding-inline: var(--space-md);\n  }\n  .container {\n    padding-inline: var(--space-lg);\n  }\n  .vl-grid {\n    display: grid;\n    gap: var(--gap-md);\n  }\n  .vl-stack {\n    display: flex;\n    flex-direction: column;\n    gap: var(--gap-md);\n  }\n  .vl-cluster {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--gap-sm);\n    align-items: center;\n  }\n  .vl-center {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .vu-sr-only {\n    position: absolute;\n    inline-size: 1px;\n    block-size: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n  }\n  .vc-surface {\n    background-color: var(--color-surface);\n    color: var(--color-on-surface);\n  }\n  .vc-surface-variant {\n    background-color: var(--color-surface-variant);\n    color: var(--color-on-surface-variant);\n  }\n  .vc-primary {\n    background-color: var(--color-primary);\n    color: var(--color-on-primary);\n  }\n  .vc-secondary {\n    background-color: var(--color-secondary);\n    color: var(--color-on-secondary);\n  }\n  .vc-elevated {\n    box-shadow: var(--elev-1);\n  }\n  .vc-elevated-2 {\n    box-shadow: var(--elev-2);\n  }\n  .vc-elevated-3 {\n    box-shadow: var(--elev-3);\n  }\n  .vc-rounded {\n    border-radius: var(--radius-md);\n  }\n  .vc-rounded-sm {\n    border-radius: var(--radius-sm);\n  }\n  .vc-rounded-lg {\n    border-radius: var(--radius-lg);\n  }\n  .vc-rounded-full {\n    border-radius: var(--radius-full, 9999px);\n  }\n  .card {\n    background: var(--color-bg);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-lg);\n    padding: var(--space-lg);\n    box-shadow: var(--shadow-sm);\n  }\n  .stack > * + * {\n    margin-block-start: var(--space-md);\n  }\n  .stack-sm > * + * {\n    margin-block-start: var(--space-sm);\n  }\n  .stack-lg > * + * {\n    margin-block-start: var(--space-lg);\n  }\n  @media print {\n    .print-hidden {\n      display: none !important;\n    }\n    .print-visible {\n      display: block !important;\n    }\n    .print-break-before {\n      page-break-before: always;\n    }\n    .print-break-after {\n      page-break-after: always;\n    }\n    .print-break-inside-avoid {\n      page-break-inside: avoid;\n    }\n  }\n  @media (prefers-reduced-motion: reduce) {\n    .transition-fast,\n    .transition-normal,\n    .transition-slow {\n      transition: none;\n    }\n    * {\n      animation-duration: 0.01ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01ms !important;\n    }\n  }\n  @media (prefers-contrast: high) {\n    .text-primary {\n      color: var(--color-on-surface);\n    }\n    .text-secondary,\n    .text-muted,\n    .text-disabled {\n      color: var(--color-on-surface-variant);\n    }\n    .border {\n      border-width: 2px;\n    }\n    .border-top {\n      border-top-width: 2px;\n    }\n    .border-bottom {\n      border-bottom-width: 2px;\n    }\n    .border-left {\n      border-left-width: 2px;\n    }\n    .border-right {\n      border-right-width: 2px;\n    }\n  }\n}\n@property --value {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: true;\n}\n@property --relate {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: true;\n}\n@property --drag-x {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: false;\n}\n@property --drag-y {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: false;\n}\n@property --order {\n  syntax: \"<integer>\";\n  initial-value: 1;\n  inherits: true;\n}\n@property --content-inline-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 100%;\n  inherits: true;\n}\n@property --content-block-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 100%;\n  inherits: true;\n}\n@property --icon-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 16px;\n  inherits: true;\n}\n@property --icon-color {\n  syntax: \"<color>\";\n  initial-value: rgba(0, 0, 0, 0);\n  inherits: true;\n}\n@property --icon-padding {\n  syntax: \"<length-percentage>\";\n  initial-value: 0px;\n  inherits: true;\n}\n@property --icon-image {\n  syntax: \"<image>\";\n  initial-value: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));\n  inherits: true;\n}\n@layer ux-classes {\n  .grid-rows > ::slotted(*) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  .grid-rows > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-rows > ::slotted(*) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  .grid-rows > * {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  .grid-rows > * {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-rows > * {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  :host(.grid-rows) ::slotted(*) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  :host(.grid-rows) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-rows) ::slotted(*) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  .grid-rows {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-rows {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows {\n    grid-auto-rows: minmax(0px, max-content);\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  :host(.grid-rows) {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-rows) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows) {\n    grid-auto-rows: minmax(0px, max-content);\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  .grid-columns > ::slotted(*) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  .grid-columns > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-columns > ::slotted(*) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  .grid-columns > * {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  .grid-columns > * {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-columns > * {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  .grid-columns {\n    --display: inline-grid;\n    --flow: row;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-columns {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-columns {\n    grid-auto-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  :host(.grid-columns) {\n    --display: inline-grid;\n    --flow: row;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-columns) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-columns) {\n    grid-auto-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  .flex-columns > ::slotted(*) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  .flex-columns > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.flex-columns) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  :host(.flex-columns) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  .flex-columns > * {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  .flex-columns > * {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.flex-columns) ::slotted(*) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  :host(.flex-columns) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .flex-columns {\n    --display: inline-flex;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .flex-columns {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.flex-columns) {\n    --display: inline-flex;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.flex-columns) {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-layered > ::slotted(*) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > ::slotted(*) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) ::slotted(::slotted(*)) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) ::slotted(::slotted(*)) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered > * {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > * > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) ::slotted(*) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) ::slotted(*) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-layered {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-layered) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-layered) {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows-3c > ::slotted(*) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) ::slotted(::slotted(*)) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c > * {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) ::slotted(*) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows-3c) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows-3c > ::slotted(*:last-child) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  :host(.grid-rows-3c) ::slotted(::slotted(*:last-child)) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  .grid-rows-3c > *:last-child {\n    grid-column: var(--order, 1)/3 span;\n  }\n  :host(.grid-rows-3c) ::slotted(*:last-child) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  .grid-rows-3c {\n    --order: sibling-index();\n  }\n  .grid-rows-3c {\n    grid-column: var(--order, 1)/var(--order, 1) span;\n  }\n  .grid-rows-3c {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows-3c) {\n    --order: sibling-index();\n  }\n  :host(.grid-rows-3c) {\n    grid-column: var(--order, 1)/var(--order, 1) span;\n  }\n  :host(.grid-rows-3c) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .stretch-inline {\n    inline-size: 100%;\n    inline-size: -webkit-fill-available;\n    inline-size: stretch;\n  }\n  :host(.stretch-inline) {\n    inline-size: 100%;\n    inline-size: -webkit-fill-available;\n    inline-size: stretch;\n  }\n  .stretch-block {\n    block-size: 100%;\n    block-size: -webkit-fill-available;\n    block-size: stretch;\n  }\n  :host(.stretch-block) {\n    block-size: 100%;\n    block-size: -webkit-fill-available;\n    block-size: stretch;\n  }\n  .content-inline-size {\n    padding-inline: max(100% - (100% - var(--content-inline-size, 100%) * 0.5), 0px);\n  }\n  :host(.content-inline-size) {\n    padding-inline: max(100% - (100% - var(--content-inline-size, 100%) * 0.5), 0px);\n  }\n  .content-block-size {\n    padding-block: max(100% - (100% - var(--content-block-size, 100%) * 0.5), 0px);\n  }\n  :host(.content-block-size) {\n    padding-block: max(100% - (100% - var(--content-block-size, 100%) * 0.5), 0px);\n  }\n  .ux-anchor {\n    inset-inline-start: max(var(--client-x, 0px), 0px);\n    inset-block-start: max(var(--client-y, 0px), 0px);\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    writing-mode: horizontal-tb;\n    translate: 0% 0% 0%;\n    transform: none;\n  }\n  .ux-anchor {\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--client-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--client-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n  }\n  @supports (position-anchor: --example) {\n    .ux-anchor {\n      position-anchor: var(--anchor-group);\n      inset-inline-start: anchor(var(--anchor-group) start);\n      inset-block-start: anchor(var(--anchor-group) end);\n      inline-size: anchor-size(var(--anchor-group) self-inline);\n    }\n  }\n  :host(.ux-anchor) {\n    inset-inline-start: max(var(--client-x, 0px), 0px);\n    inset-block-start: max(var(--client-y, 0px), 0px);\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    writing-mode: horizontal-tb;\n    translate: 0% 0% 0%;\n    transform: none;\n  }\n  :host(.ux-anchor) {\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--client-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--client-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n  }\n  @supports (position-anchor: --example) {\n    :host(.ux-anchor) {\n      position-anchor: var(--anchor-group);\n      inset-inline-start: anchor(var(--anchor-group) start);\n      inset-block-start: anchor(var(--anchor-group) end);\n      inline-size: anchor-size(var(--anchor-group) self-inline);\n    }\n  }\n  .ux-anchor {\n    --shift-x: var(--client-x, 0px);\n    --shift-y: var(--client-y, 0px);\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    inset-inline-start: max(var(--shift-x), 0px);\n    inset-block-start: max(var(--shift-y), var(--status-bar-padding, 0px));\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    translate: 0% 0% 0%;\n    writing-mode: horizontal-tb;\n    transform: none;\n  }\n  :host(.ux-anchor) {\n    --shift-x: var(--client-x, 0px);\n    --shift-y: var(--client-y, 0px);\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    inset-inline-start: max(var(--shift-x), 0px);\n    inset-block-start: max(var(--shift-y), var(--status-bar-padding, 0px));\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    translate: 0% 0% 0%;\n    writing-mode: horizontal-tb;\n    transform: none;\n  }\n  .layered-wrap {\n    background-color: transparent;\n    display: inline grid;\n    inline-size: max-content;\n    block-size: max-content;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    z-index: calc(var(--z-index, 0) + 1);\n    overflow: visible;\n  }\n  .layered-wrap > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.layered-wrap) {\n    background-color: transparent;\n    display: inline grid;\n    inline-size: max-content;\n    block-size: max-content;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    z-index: calc(var(--z-index, 0) + 1);\n    overflow: visible;\n  }\n  :host(.layered-wrap) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n}\n@layer components {\n  ui-icon {\n    --icon-color: currentColor;\n    --icon-size: 1rem;\n    --icon-padding: 0.125rem;\n    display: inline-grid;\n    place-content: center;\n    place-items: center;\n    color: var(--icon-color);\n    aspect-ratio: 1;\n  }\n  ui-icon {\n    vertical-align: middle;\n    margin-inline-end: 0.125rem;\n  }\n  ui-icon:last-child {\n    margin-inline-end: 0;\n  }\n}\n/* WHY: Veela `compute_grid_item_cell` / `compute_orient_grid_layout` reference `--get-oriented-*` CSS functions; they are defined here, not in the Veela barrel. Without this import, `--cs-grid-*` never resolves and every `.ui-ws-item` stacks in cell (1,1). */\n/* NOTE: `make-func` lives in Veela (not `src/lib`); the old path was invalid. */\n@function --get-oriented-size-num(--orient <number>: 0, --osx <number>: 0, --osy <number>: 0, --axis-to-return <number>: 0 ) returns <number> {\n  --go-orient: round(nearest, var(--orient, 0), 1);\n  --go-axis: clamp(0, round(nearest, var(--axis-to-return, 0), 1), 1);\n  --go-axis-inline: calc(1 - var(--go-axis, 0));\n  --go-axis-block: var(--go-axis, 0);\n  --go-swap-raw: mod(var(--go-orient), 2);\n  --go-swap: clamp(0, round(nearest, var(--go-swap-raw), 1), 1);\n  --go-swap-inline: calc(1 - var(--go-swap, 0));\n  --go-primary: var(--osx, 0);\n  --go-secondary: var(--osy, 0);\n  --go-inline: calc(\n      var(--go-primary) * var(--go-swap-inline) +\n      var(--go-secondary) * var(--go-swap)\n  );\n  --go-block: calc(\n      var(--go-secondary) * var(--go-swap-inline) +\n      var(--go-primary) * var(--go-swap)\n  );\n  result: calc(var(--go-inline) * var(--go-axis-inline) + var(--go-block) * var(--go-axis-block));\n}\n@function --get-oriented-size(--orient <number>: 0, --osx <length-percentage>: 0px, --osy <length-percentage>: 0px, --axis-to-return <number>: 0 ) returns <length-percentage> {\n  --go-orient: mod(round(nearest, var(--orient, 0), 1), 4);\n  --go-axis: clamp(0, round(nearest, var(--axis-to-return, 0), 1), 1);\n  --go-axis-inline: calc(1 - var(--go-axis, 0));\n  --go-axis-block: var(--go-axis, 0);\n  --go-swap-raw: mod(var(--go-orient, 0), 2);\n  --go-swap: clamp(0, round(nearest, var(--go-swap-raw, 0), 1), 1);\n  --go-swap-inline: calc(1 - var(--go-swap, 0));\n  --go-primary: var(--osx, 0px);\n  --go-secondary: var(--osy, 0px);\n  --go-inline: calc(var(--go-primary) * var(--go-swap-inline) + var(--go-secondary) * var(--go-swap));\n  --go-block: calc(var(--go-secondary) * var(--go-swap-inline) + var(--go-primary) * var(--go-swap));\n  result: calc(var(--go-inline) * var(--go-axis-inline) + var(--go-block) * var(--go-axis-block));\n}\n@function --get-oriented-vector(--orient <number>: 0, --ocx <length-percentage>: 0px, --ocy <length-percentage>: 0px, --axis-to-return <number>: 0 ) returns <length-percentage> {\n  --go-orient: mod(round(nearest, var(--orient, 0), 1), 4);\n  --go-axis: clamp(0, round(nearest, var(--axis-to-return, 0), 1), 1);\n  --go-axis-inline: calc(1 - var(--go-axis, 0));\n  --go-axis-block: var(--go-axis, 0);\n  --go-swap-raw: mod(var(--go-orient, 0), 2);\n  --go-swap: clamp(0, round(nearest, var(--go-swap-raw, 0), 1), 1);\n  --go-swap-inline: calc(1 - var(--go-swap, 0));\n  --go-primary-direct: var(--ocx, 0px);\n  --go-secondary-direct: var(--ocy, 0px);\n  --go-inline-direct: calc(\n      var(--go-primary-direct) * var(--go-swap-inline) +\n      var(--go-secondary-direct) * var(--go-swap)\n  );\n  --go-block-direct: calc(\n      var(--go-secondary-direct) * var(--go-swap-inline) +\n      var(--go-primary-direct) * var(--go-swap)\n  );\n  --go-inline-inverted: calc(0px - var(--go-inline-direct));\n  --go-block-inverted: calc(0px - var(--go-block-direct));\n  --go-rev-inline: clamp(0, calc(var(--go-orient) - 1), 1);\n  --go-rev-block: clamp(0, calc((1 - abs(calc(var(--go-orient) - 1.5))) * 2), 1);\n  --go-inline: calc(var(--go-inline-direct) * (1 - var(--go-rev-inline)) + var(--go-inline-inverted) * var(--go-rev-inline));\n  --go-block: calc(var(--go-block-direct) * (1 - var(--go-rev-block)) + var(--go-block-inverted) * var(--go-rev-block));\n  result: calc(var(--go-inline) * var(--go-axis-inline) + var(--go-block) * var(--go-axis-block));\n}\n@function --get-oriented-coord-num(--orient <number>: 0, --ocx <number>: 0, --ocy <number>: 0, --osx <number>: 0, --osy <number>: 0, --axis-to-return <number>: 0 ) returns <number> {\n  --go-orient: mod(round(nearest, var(--orient, 0), 1), 4);\n  --go-axis: clamp(0, round(nearest, var(--axis-to-return, 0), 1), 1);\n  --go-axis-inline: calc(1 - var(--go-axis, 0));\n  --go-axis-block: var(--go-axis, 0);\n  --go-swap-raw: mod(var(--go-orient, 0), 2);\n  --go-swap: clamp(0, round(nearest, var(--go-swap-raw, 0), 1), 1);\n  --go-swap-inline: calc(1 - var(--go-swap, 0));\n  --go-primary-direct: var(--ocx, 0);\n  --go-secondary-direct: var(--ocy, 0);\n  --go-primary-size: var(--osx, 0);\n  --go-secondary-size: var(--osy, 0);\n  --go-inline-direct: calc(\n      var(--go-primary-direct) * var(--go-swap-inline) +\n      var(--go-secondary-direct) * var(--go-swap)\n  );\n  --go-block-direct: calc(\n      var(--go-secondary-direct) * var(--go-swap-inline) +\n      var(--go-primary-direct) * var(--go-swap)\n  );\n  --go-inline-size: calc(\n      var(--go-primary-size) * var(--go-swap-inline) +\n      var(--go-secondary-size) * var(--go-swap)\n  );\n  --go-block-size: calc(\n      var(--go-secondary-size) * var(--go-swap-inline) +\n      var(--go-primary-size) * var(--go-swap)\n  );\n  --go-inline-inverted: calc(\n      var(--go-inline-size, calc(var(--go-inline-direct) + var(--go-inline-direct))) -\n      var(--go-inline-direct)\n  );\n  --go-block-inverted: calc(\n      var(--go-block-size, calc(var(--go-block-direct) + var(--go-block-direct))) -\n      var(--go-block-direct)\n  );\n  --go-rev-inline: clamp(0, calc(var(--go-orient) - 1), 1);\n  --go-rev-block: clamp(\n      0,\n      calc((1 - abs(calc(var(--go-orient) - 1.5))) * 2),\n      1\n  );\n  --go-inline: calc(\n      var(--go-inline-direct) * (1 - var(--go-rev-inline)) +\n      var(--go-inline-inverted) * var(--go-rev-inline)\n  );\n  --go-block: calc(\n      var(--go-block-direct) * (1 - var(--go-rev-block)) +\n      var(--go-block-inverted) * var(--go-rev-block)\n  );\n  result: calc(var(--go-inline) * var(--go-axis-inline) + var(--go-block) * var(--go-axis-block));\n}\n@function --get-oriented-coordinate(--orient <number>: 0, --ocx <length-percentage>: 0px, --ocy <length-percentage>: 0px, --osx <length-percentage>: 0px, --osy <length-percentage>: 0px, --axis-to-return <number>: 0 ) returns <length-percentage> {\n  --go-orient: mod(round(nearest, var(--orient, 0), 1), 4);\n  --go-axis: clamp(0, round(nearest, var(--axis-to-return, 0), 1), 1);\n  --go-axis-inline: calc(1 - var(--go-axis, 0));\n  --go-axis-block: var(--go-axis, 0);\n  --go-swap-raw: mod(var(--go-orient, 0), 2);\n  --go-swap: clamp(0, round(nearest, var(--go-swap-raw, 0), 1), 1);\n  --go-swap-inline: calc(1 - var(--go-swap, 0));\n  --go-primary-direct: var(--ocx, 0px);\n  --go-secondary-direct: var(--ocy, 0px);\n  --go-primary-size: var(--osx, 0px);\n  --go-secondary-size: var(--osy, 0px);\n  --go-inline-direct: calc(\n      var(--go-primary-direct) * var(--go-swap-inline) +\n      var(--go-secondary-direct) * var(--go-swap)\n  );\n  --go-block-direct: calc(\n      var(--go-secondary-direct) * var(--go-swap-inline) +\n      var(--go-primary-direct) * var(--go-swap)\n  );\n  --go-inline-size: calc(\n      var(--go-primary-size) * var(--go-swap-inline) +\n      var(--go-secondary-size) * var(--go-swap)\n  );\n  --go-block-size: calc(\n      var(--go-secondary-size) * var(--go-swap-inline) +\n      var(--go-primary-size) * var(--go-swap)\n  );\n  --go-inline-inverted: calc(\n      var(--go-inline-size, calc(var(--go-inline-direct) + var(--go-inline-direct))) -\n      var(--go-inline-direct)\n  );\n  --go-block-inverted: calc(\n      var(--go-block-size, calc(var(--go-block-direct) + var(--go-block-direct))) -\n      var(--go-block-direct)\n  );\n  --go-rev-inline: clamp(0, calc(var(--go-orient) - 1), 1);\n  --go-rev-block: clamp(\n      0,\n      calc((1 - abs(calc(var(--go-orient) - 1.5))) * 2),\n      1\n  );\n  --go-inline: calc(\n      var(--go-inline-direct) * (1 - var(--go-rev-inline)) +\n      var(--go-inline-inverted) * var(--go-rev-inline)\n  );\n  --go-block: calc(\n      var(--go-block-direct) * (1 - var(--go-rev-block)) +\n      var(--go-block-inverted) * var(--go-rev-block)\n  );\n  result: calc(var(--go-inline) * var(--go-axis-inline) + var(--go-block) * var(--go-axis-block));\n}\n@layer views {\n  ui-window-frame,\n  ui-modal,\n  .ui-grid-item {\n    --opacity: 1;\n    --scale: 1;\n    --rotate: 0deg;\n    --translate-x: 0%;\n    --translate-y: 0%;\n    isolation: isolate;\n    content-visibility: auto;\n    transform-origin: 50% 50%;\n    transform-style: flat;\n    transform-box: fill-box;\n    translate: 0% 0% 0%;\n    opacity: var(--opacity, 1);\n    rotate: 0deg;\n    scale: 1;\n  }\n  .speed-dial-root {\n    display: grid;\n    grid-row: 1/-1;\n    grid-column: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    pointer-events: auto;\n    min-inline-size: 0px;\n    min-block-size: 0px;\n    max-inline-size: 100%;\n    max-block-size: 100%;\n    inline-size: 100%;\n    block-size: 100%;\n    box-sizing: border-box;\n    inset: 0;\n    position: absolute;\n    background-color: transparent;\n    overflow: hidden;\n    border-radius: 0px;\n  }\n  .speed-dial-root > * {\n    grid-row: 1/-1;\n    grid-column: 1/-1;\n  }\n  /* WHY: veela `.ui-orientbox` uses `pointer-events: none` for touch routing; desktop needs full-area context menu / paste. */\n  .speed-dial-root.app-oriented-desktop.ui-orientbox {\n    pointer-events: auto;\n  }\n  /* Includes `app-oriented-desktop__grid`; parent `ui-orientbox` supplies `--orient`; this grid’s `compute_orient_grid_layout` publishes `--cs-layout-*` into `--sd-inherit-*` for items. */\n  .speed-dial-grid {\n    --grid-cols: 4;\n    --grid-rows: 8;\n    grid-row: 1/-1;\n    grid-column: 1/-1;\n    padding: var(--padding-lg);\n  }\n  .speed-dial-grid[data-grid-columns=\"4\"] {\n    --grid-cols: 4;\n  }\n  .speed-dial-grid[data-grid-columns=\"5\"] {\n    --grid-cols: 5;\n  }\n  .speed-dial-grid[data-grid-columns=\"6\"] {\n    --grid-cols: 6;\n  }\n  .speed-dial-grid[data-grid-columns=\"7\"] {\n    --grid-cols: 7;\n  }\n  .speed-dial-grid[data-grid-columns=\"8\"] {\n    --grid-cols: 8;\n  }\n  .speed-dial-grid[data-grid-rows=\"6\"] {\n    --grid-rows: 6;\n  }\n  .speed-dial-grid[data-grid-rows=\"7\"] {\n    --grid-rows: 7;\n  }\n  .speed-dial-grid[data-grid-rows=\"8\"] {\n    --grid-rows: 8;\n  }\n  .speed-dial-grid[data-grid-rows=\"9\"] {\n    --grid-rows: 9;\n  }\n  .speed-dial-grid[data-grid-rows=\"10\"] {\n    --grid-rows: 10;\n  }\n  .speed-dial-grid[data-grid-rows=\"11\"] {\n    --grid-rows: 11;\n  }\n  .speed-dial-grid[data-grid-rows=\"12\"] {\n    --grid-rows: 12;\n  }\n  .speed-dial-grid {\n    --layout-c: var(--grid-cols, 4);\n    --layout-r: var(--grid-rows, 8);\n    /* WHY: Unregistered inheriting bridge — closest grid parent passes logical + orient-swapped track counts to `.ui-ws-item` (registered `--layout-*` / `--cs-layout-*` may not inherit). */\n    --sd-inherit-layout-c: var(--layout-c, 4);\n    --sd-inherit-layout-r: var(--layout-r, 8);\n    --sd-inherit-cs-layout-c: var(--cs-layout-c, var(--layout-c, 4));\n    --sd-inherit-cs-layout-r: var(--cs-layout-r, var(--layout-r, 8));\n    /* WHY: Without {@link compute_orient_grid_layout} + {@link compute_grid_item_cell}, `--cs-grid-*` stays 0 and every tile stacks in cell (1,1). */\n  }\n  .speed-dial-grid {\n    --os-layout-c: var(--layout-c, 4);\n    --os-layout-r: var(--layout-r, 8);\n    --cs-layout-c: --get-oriented-size-num(var(--orient, 0), var(--os-layout-c, 4), var(--os-layout-r, 8), 0);\n    --cs-layout-r: --get-oriented-size-num(var(--orient, 0), var(--os-layout-c, 4), var(--os-layout-r, 8), 1);\n  }\n  .speed-dial-grid {\n    display: grid;\n    position: relative;\n    container-type: size;\n    box-sizing: border-box;\n    inline-size: stretch;\n    block-size: stretch;\n    min-inline-size: 0;\n    min-block-size: 0;\n    gap: 0;\n    place-content: start;\n    place-items: center;\n    grid-template-columns: repeat(var(--cs-layout-c, 4), minmax(0, 1fr));\n    grid-template-rows: repeat(var(--cs-layout-r, 8), minmax(0, 1fr));\n    border-radius: 0px;\n  }\n  .speed-dial-grid[data-grid-layer=icons] {\n    z-index: 1;\n    background: transparent !important;\n    pointer-events: none;\n    isolation: isolate;\n    contain: layout style;\n  }\n  .speed-dial-grid[data-grid-layer=icons]:has([data-dragging]) {\n    z-index: 3;\n  }\n  .speed-dial-grid[data-grid-layer=labels] {\n    z-index: 2;\n    background: transparent !important;\n    pointer-events: none !important;\n    isolation: isolate;\n    contain: layout style;\n  }\n  .speed-dial-grid .ui-ws-item {\n    /* WHY: Veela registers `--layout-c`/`--layout-r` with `inherits: false`; items used initial 1×1 grid and every tile landed in the same cell (overlapping icons/labels). */\n    --layout-c: inherit;\n    --layout-r: inherit;\n    /* WHY: `v2-coord-num` maps logical `--cell-x`/`--cell-y` into physical `cs-grid-*` using `--orient` from the launcher / `ui-orientbox` host; without inherit, items see initial `0` and placement ignores rotation. */\n  }\n  .speed-dial-grid .ui-ws-item {\n    --orient: inherit;\n  }\n  .speed-dial-grid .ui-ws-item {\n    --cs-sw-unit-x: calc(var(--cs-size-x, 100cqi) / var(--cs-layout-c, 1));\n    --cs-sw-unit-y: calc(var(--cs-size-y, 100cqb) / var(--cs-layout-r, 1));\n  }\n  .speed-dial-grid .ui-ws-item {\n    --cs-transition-c: 0px;\n    --cs-transition-r: 0px;\n  }\n  .speed-dial-grid .ui-ws-item[data-dragging] {\n    --cs-transition-c: calc((var(--rv-grid-c, 0) - var(--cs-grid-c, 0)) * var(--cs-sw-unit-x, 1px));\n    --cs-transition-r: calc((var(--rv-grid-r, 0) - var(--cs-grid-r, 0)) * var(--cs-sw-unit-y, 1px));\n  }\n  .speed-dial-grid .ui-ws-item {\n    --p-cell-x: var(--cell-x);\n    --p-cell-y: var(--cell-y);\n    --f-col: clamp(1, var(--layout-c, 4), 16);\n    --f-row: clamp(1, var(--layout-r, 8), 16);\n    --grid-c: clamp(0, var(--cell-x), var(--f-col) - 1);\n    --grid-r: clamp(0, var(--cell-y), var(--f-row) - 1);\n    --p-grid-c: clamp(0, var(--p-cell-x), var(--f-col) - 1);\n    --p-grid-r: clamp(0, var(--p-cell-y), var(--f-row) - 1);\n    --fc-cell-x: clamp(0, var(--cs-grid-c, 0), var(--f-col) - 1);\n    --fc-cell-y: clamp(0, var(--cs-grid-r, 0), var(--f-row) - 1);\n    --fp-cell-x: clamp(0, var(--cs-p-grid-c, 0), var(--f-col) - 1);\n    --fp-cell-y: clamp(0, var(--cs-p-grid-r, 0), var(--f-row) - 1);\n    --dir-x: calc(var(--cs-grid-c, 0) - var(--cs-p-grid-c, 0));\n    --dir-y: calc(var(--cs-grid-r, 0) - var(--cs-p-grid-r, 0));\n  }\n  .speed-dial-grid .ui-ws-item {\n    --rv-grid-c: var(--cs-grid-c, 1);\n    --rv-grid-r: var(--cs-grid-r, 1);\n  }\n  .speed-dial-grid .ui-ws-item[data-dragging] {\n    --rv-grid-c: var(--cs-p-grid-c, 1);\n    --rv-grid-r: var(--cs-p-grid-r, 1);\n  }\n  .speed-dial-grid .ui-ws-item {\n    --os-grid-c: var(--grid-c, 1);\n    --os-grid-r: var(--grid-r, 1);\n    --cs-grid-c: --get-oriented-coord-num(var(--orient, 0), var(--os-grid-c, 1), var(--os-grid-r, 1), calc(var(--f-col, 1) - 1), calc(var(--f-row, 1) - 1), 0);\n    --cs-grid-r: --get-oriented-coord-num(var(--orient, 0), var(--os-grid-c, 1), var(--os-grid-r, 1), calc(var(--f-col, 1) - 1), calc(var(--f-row, 1) - 1), 1);\n  }\n  .speed-dial-grid .ui-ws-item {\n    --os-p-grid-c: var(--p-cell-x, 0);\n    --os-p-grid-r: var(--p-cell-y, 0);\n    --cs-p-grid-c: --get-oriented-coord-num(var(--orient, 0), var(--os-p-grid-c, 0), var(--os-p-grid-r, 0), calc(var(--f-col, 1) - 1), calc(var(--f-row, 1) - 1), 0);\n    --cs-p-grid-r: --get-oriented-coord-num(var(--orient, 0), var(--os-p-grid-c, 0), var(--os-p-grid-r, 0), calc(var(--f-col, 1) - 1), calc(var(--f-row, 1) - 1), 1);\n  }\n  .speed-dial-grid .ui-ws-item {\n    --ox-c-unit: calc(var(--os-size-x, 100cqi) / var(--os-layout-c, 1));\n    --ox-r-unit: calc(var(--os-size-y, 100cqb) / var(--os-layout-r, 1));\n    --os-inset-x: calc((var(--grid-c, 1) + 0.5) * var(--ox-c-unit, 1px));\n    --os-inset-y: calc((var(--grid-r, 1) + 0.5) * var(--ox-r-unit, 1px));\n  }\n  .speed-dial-grid .ui-ws-item {\n    /* WHY: Override mixin `--f-col`/`--f-row` (see `--sd-inherit-*` on `.speed-dial-grid`). */\n    --f-col: clamp(1, var(--sd-inherit-layout-c, var(--layout-c, 4)), 16);\n    --f-row: clamp(1, var(--sd-inherit-layout-r, var(--layout-r, 8)), 16);\n    --drag-x: 0;\n    --drag-y: 0;\n    --cs-drag-x: calc(var(--drag-x, 0) * 1px);\n    --cs-drag-y: calc(var(--drag-y, 0) * 1px);\n    --tile-size: clamp(3.2rem, 7.5vmin, 4.6rem);\n    grid-column: clamp(1, 1 + round(nearest, var(--cs-grid-c, 0), 1), var(--sd-inherit-cs-layout-c, var(--cs-layout-c, 4)));\n    grid-row: clamp(1, 1 + round(nearest, var(--cs-grid-r, 0), 1), var(--sd-inherit-cs-layout-r, var(--cs-layout-r, 8)));\n    position: relative;\n    display: grid;\n    place-content: center;\n    place-items: center;\n    place-self: center;\n    aspect-ratio: 1/1;\n    min-inline-size: var(--tile-size);\n    min-block-size: var(--tile-size);\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    background-color: transparent;\n    pointer-events: auto;\n    touch-action: none;\n    user-select: none;\n    -webkit-user-select: none;\n    -webkit-tap-highlight-color: transparent;\n    contain: none;\n    overflow: visible;\n    z-index: 1;\n    filter: none;\n    transform: translate3d(calc(var(--cs-drag-x, 0px) + var(--cs-transition-c, 0px)), calc(var(--cs-drag-y, 0px) + var(--cs-transition-r, 0px)), 0px);\n    transform-origin: 50% 50%;\n    transition: transform var(--drag-settle-ms, 200ms) cubic-bezier(0.22, 0.8, 0.3, 1), scale 180ms var(--ease-out, ease-out), filter 180ms var(--ease-out, ease-out);\n  }\n  .speed-dial-grid .ui-ws-item:hover {\n    scale: 1.06;\n  }\n  .speed-dial-grid .ui-ws-item:hover .ui-ws-item-icon {\n    background: color-mix(in oklab, var(--color-surface-container-high, #1f2937) 60%, transparent);\n    box-shadow: 0 10px 36px -10px color-mix(in oklab, #000 40%, transparent);\n  }\n  .speed-dial-grid .ui-ws-item:active {\n    scale: 0.94;\n  }\n  .speed-dial-grid .ui-ws-item .ui-ws-item-icon {\n    display: grid;\n    transition: background-color 200ms ease, box-shadow 200ms ease;\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n    aspect-ratio: 1/1;\n    pointer-events: auto;\n    position: relative;\n    text-align: center;\n    place-content: center;\n    place-items: center;\n    line-height: 0;\n    overflow: hidden;\n    contain: layout style;\n    cursor: pointer;\n    inline-size: var(--tile-size);\n    block-size: var(--tile-size);\n    min-inline-size: fit-content;\n    min-block-size: fit-content;\n    max-inline-size: 100%;\n    max-block-size: 100%;\n    padding: 0.8rem;\n    background: color-mix(in oklab, var(--color-surface-container, #111827) 56%, transparent);\n    border: none;\n    box-shadow: 0 6px 24px -8px color-mix(in oklab, #000 38%, transparent);\n    backdrop-filter: blur(16px) saturate(1.2);\n    -webkit-backdrop-filter: blur(16px) saturate(1.2);\n    filter: none;\n    border-radius: 22%;\n  }\n  .speed-dial-grid .ui-ws-item .ui-ws-item-icon[data-shape=circle] {\n    border-radius: 50%;\n  }\n  .speed-dial-grid .ui-ws-item .ui-ws-item-icon[data-shape=square] {\n    border-radius: max(0.55rem, 14%);\n  }\n  .speed-dial-grid .ui-ws-item .ui-ws-item-icon[data-shape=squircle] {\n    border-radius: 22%;\n  }\n  .speed-dial-grid .ui-ws-item .ui-ws-item-icon .ui-ws-item-icon-image {\n    position: absolute;\n    inset: 0.45rem;\n    inline-size: calc(100% - 0.9rem);\n    block-size: calc(100% - 0.9rem);\n    object-fit: contain;\n    object-position: center;\n    pointer-events: none;\n    z-index: 3;\n    filter: drop-shadow(0 1px 3px rgba(0, 0, 0, 0.2));\n  }\n  .speed-dial-grid .ui-ws-item .ui-ws-item-icon ui-icon {\n    --icon-size: clamp(1.6rem, 60%, 2.4rem);\n    /* WHY: Phosphor pipeline reads `--icon-color`; bridge Veela/M3 tokens for light + dark shells. */\n    --icon-color: var(\n        --on-surface-variant,\n        var(--color-on-surface-variant, var(--on-surface-color, var(--color-on-surface, currentColor)))\n    );\n    color: var(--icon-color, currentColor);\n    aspect-ratio: 1/1;\n    max-inline-size: var(--icon-size, 1.8rem);\n    max-block-size: var(--icon-size, 1.8rem);\n    min-inline-size: fit-content;\n    min-block-size: fit-content;\n    inline-size: var(--icon-size, 1.8rem);\n    block-size: var(--icon-size, 1.8rem);\n    object-fit: contain;\n    object-position: center;\n    line-height: 0;\n    z-index: 2;\n    pointer-events: none;\n    filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1333333333));\n  }\n  .speed-dial-grid .ui-ws-item .ui-ws-item-label {\n    position: absolute;\n    inset-inline: 0;\n    inset-block-start: 100%;\n    pointer-events: none;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    padding-block-start: 0.35rem;\n    color: var(--on-surface-color, currentColor);\n    background: transparent;\n    white-space: nowrap;\n    overflow: visible;\n    filter: none;\n  }\n  .speed-dial-grid .ui-ws-item .ui-ws-item-label span {\n    display: inline-flex;\n    place-content: center;\n    place-items: center;\n    font-size: 0.72rem;\n    font-weight: 500;\n    letter-spacing: 0.01em;\n    color: color-mix(in oklab, var(--on-surface-color, currentColor) 90%, transparent);\n    white-space: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    padding-block: 0.15rem;\n    padding-inline: 0.4rem;\n    max-inline-size: min(100%, 9rem);\n    inline-size: max-content;\n    border-radius: 6px;\n    pointer-events: none;\n    text-align: center;\n    line-height: 1.25;\n    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);\n    border: none;\n    background: transparent;\n    backdrop-filter: none;\n    -webkit-backdrop-filter: none;\n    box-shadow: none;\n  }\n  .speed-dial-grid .ui-ws-item:active {\n    will-change: transform;\n  }\n  .speed-dial-grid .ui-ws-item[data-interaction-state=onGrab], .speed-dial-grid .ui-ws-item[data-interaction-state=onMoving] {\n    will-change: transform;\n    cursor: grabbing;\n    z-index: 120;\n    transition: none !important;\n    transform: translate3d(calc(var(--cs-drag-x, 0px) + var(--cs-transition-c, 0px)), calc(var(--cs-drag-y, 0px) + var(--cs-transition-r, 0px)), 0px) !important;\n  }\n  .speed-dial-grid .ui-ws-item[data-interaction-state=onGrab] .ui-ws-item-label, .speed-dial-grid .ui-ws-item[data-interaction-state=onMoving] .ui-ws-item-label {\n    opacity: 1;\n    pointer-events: none;\n  }\n  .speed-dial-grid .ui-ws-item[data-interaction-state=onRelax] {\n    will-change: transform;\n    z-index: 120;\n    transform: translate3d(calc(var(--cs-drag-x, 0px) + var(--cs-transition-c, 0px)), calc(var(--cs-drag-y, 0px) + var(--cs-transition-r, 0px)), 0px) !important;\n  }\n  .speed-dial-grid .ui-ws-item[data-interaction-state=onPlace] {\n    will-change: transform;\n    z-index: 120;\n    transition: transform var(--drag-settle-ms, 240ms) cubic-bezier(0.22, 0.8, 0.3, 1), filter var(--transition-fast) var(--ease-out) !important;\n    transform: translate3d(calc(var(--cs-drag-x, 0px) + var(--cs-transition-c, 0px)), calc(var(--cs-drag-y, 0px) + var(--cs-transition-r, 0px)), 0px) !important;\n  }\n  .speed-dial-grid .ui-ws-item[data-layer=labels] {\n    z-index: 0;\n    filter: none;\n    background: transparent !important;\n    pointer-events: none !important;\n    transition: transform var(--drag-settle-ms, 240ms) cubic-bezier(0.22, 0.8, 0.3, 1);\n  }\n  .speed-dial-grid .ui-ws-item[data-layer=labels] .ui-ws-item-label {\n    background: transparent !important;\n    pointer-events: none !important;\n  }\n  .speed-dial-grid .ui-ws-item[data-layer=labels] .ui-ws-item-label span {\n    pointer-events: none !important;\n  }\n  .speed-dial-grid .ui-ws-item[data-layer=labels][data-interaction-state=onLabelDocked] {\n    transform: none !important;\n    transition: none !important;\n    cursor: default;\n  }\n  .speed-dial-grid .ui-ws-item[data-layer=labels][data-interaction-state=onGrab], .speed-dial-grid .ui-ws-item[data-layer=labels][data-interaction-state=onMoving] {\n    transition: none !important;\n  }\n  .speed-dial-grid .ui-ws-item[data-layer=icons] {\n    z-index: 99;\n    filter: none;\n    touch-action: none;\n  }\n  .speed-dial-grid .ui-ws-item[data-layer=icons][data-interaction-state=onGrab], .speed-dial-grid .ui-ws-item[data-layer=icons][data-interaction-state=onMoving], .speed-dial-grid .ui-ws-item[data-layer=icons][data-interaction-state=onRelax] {\n    z-index: 120;\n  }\n  @container (max-width: 28rem) {\n    .speed-dial-root.app-oriented-desktop .speed-dial-grid.app-oriented-desktop__grid--labels,\n    .speed-dial-root.app-oriented-desktop .speed-dial-grid.app-oriented-desktop__grid--icons {\n      padding-inline: clamp(0.35rem, 3.2cqw, var(--padding-lg));\n      padding-block: clamp(0.35rem, 2.8cqh, var(--padding-lg));\n    }\n  }\n  @container (max-height: 29rem) {\n    .speed-dial-root.app-oriented-desktop .speed-dial-grid.app-oriented-desktop__grid--labels,\n    .speed-dial-root.app-oriented-desktop .speed-dial-grid.app-oriented-desktop__grid--icons {\n      padding-block: clamp(0.3rem, 2.2cqh, var(--padding-md));\n    }\n  }\n  @container (max-width: 28rem) {\n    .speed-dial-root.app-oriented-desktop .ui-ws-item {\n      --tile-size: clamp(2.6rem, 11cqmin, 4.2rem);\n    }\n    .speed-dial-root.app-oriented-desktop .ui-ws-item .ui-ws-item-icon {\n      padding: 0.65rem;\n    }\n  }\n  .speed-dial-editor {\n    position: fixed;\n    inset: 0;\n    z-index: 1200;\n    display: grid;\n    place-items: center;\n    background: color-mix(in oklab, #020617 58%, transparent);\n    backdrop-filter: blur(8px) saturate(1.05);\n    -webkit-backdrop-filter: blur(8px) saturate(1.05);\n    pointer-events: auto;\n    padding: 1rem;\n  }\n  .speed-dial-editor__form {\n    inline-size: min(100%, 980px);\n    margin-inline: auto;\n    border-radius: 18px;\n    border: none;\n    background: color-mix(in oklab, var(--color-surface, #0b1220) 88%, #000);\n    color: var(--color-on-surface, #e2e8f0);\n    display: grid;\n    grid-template-rows: auto minmax(0, 1fr) auto;\n    max-block-size: min(86vh, 760px);\n    overflow: hidden;\n    box-shadow: 0 24px 64px -28px color-mix(in oklab, #000 65%, transparent), 0 0 0 1px color-mix(in oklab, var(--color-outline-variant, #334155) 35%, transparent) inset;\n  }\n  .speed-dial-editor__form .modal-header {\n    display: grid;\n    gap: 0.4rem;\n    padding: 1rem 1rem 0.75rem;\n    border-block-end: none;\n    box-shadow: 0 1px 0 color-mix(in oklab, var(--color-outline-variant, #334155) 28%, transparent);\n  }\n  .speed-dial-editor__form .modal-title {\n    margin: 0;\n    font-size: 1.2rem;\n    font-weight: 650;\n    line-height: 1.25;\n  }\n  .speed-dial-editor__form .modal-description {\n    margin: 0;\n    font-size: 0.86rem;\n    line-height: 1.35;\n    color: color-mix(in oklab, var(--color-on-surface, #e2e8f0) 72%, transparent);\n  }\n  .speed-dial-editor__form .modal-fields {\n    display: grid;\n    gap: 0.75rem;\n    padding: 0.9rem 1rem 1rem;\n    overflow: auto;\n    min-block-size: 0;\n    align-content: start;\n  }\n  .speed-dial-editor__form .modal-field {\n    display: grid;\n    gap: 0.35rem;\n  }\n  .speed-dial-editor__form .modal-field > span {\n    font-size: 0.84rem;\n    color: color-mix(in oklab, var(--color-on-surface, #e2e8f0) 76%, transparent);\n  }\n  .speed-dial-editor__form :is(input, select, textarea) {\n    inline-size: 100%;\n    min-inline-size: 0;\n    border-radius: 8px;\n    border: 1px solid color-mix(in oklab, var(--color-outline-variant, #334155) 75%, transparent);\n    background: color-mix(in oklab, var(--color-surface-container-low, #101827) 88%, transparent);\n    color: var(--color-on-surface, #e2e8f0);\n    padding: 0.55rem 0.7rem;\n    outline: none;\n    appearance: none;\n  }\n  .speed-dial-editor__form textarea {\n    resize: vertical;\n    min-block-size: 4.4rem;\n  }\n  .speed-dial-editor__form :is(input, select, textarea):focus {\n    border-color: color-mix(in oklab, var(--color-primary, #3b82f6) 64%, #fff 8%);\n    box-shadow: 0 0 0 2px color-mix(in oklab, var(--color-primary, #3b82f6) 26%, transparent);\n  }\n  .speed-dial-editor__form .modal-actions {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n    padding: 0.75rem 1rem;\n    border-block-start: 1px solid color-mix(in oklab, var(--color-outline-variant, #334155) 64%, transparent);\n    background: color-mix(in oklab, var(--color-surface-container, #172032) 42%, transparent);\n  }\n  .speed-dial-editor__form :is(.modal-actions-left, .modal-actions-right) {\n    display: inline-flex;\n    gap: 0.5rem;\n    align-items: center;\n  }\n  .speed-dial-editor__form .btn {\n    border-radius: 8px;\n    border: 1px solid color-mix(in oklab, var(--color-outline-variant, #334155) 72%, transparent);\n    padding: 0.46rem 0.86rem;\n    font-size: 0.86rem;\n    line-height: 1.2;\n    cursor: pointer;\n    color: var(--color-on-surface, #e2e8f0);\n    background: color-mix(in oklab, var(--color-surface-container, #172032) 62%, transparent);\n  }\n  .speed-dial-editor__form .btn.secondary {\n    background: color-mix(in oklab, var(--color-surface-container, #172032) 48%, transparent);\n  }\n  .speed-dial-editor__form .btn.save {\n    border-color: color-mix(in oklab, var(--color-primary, #3b82f6) 60%, transparent);\n    background: color-mix(in oklab, var(--color-primary, #3b82f6) 40%, #0b1220);\n    color: #fff;\n  }\n  .speed-dial-editor__form .btn.danger {\n    border-color: color-mix(in oklab, var(--color-error, #ef4444) 64%, transparent);\n    background: color-mix(in oklab, var(--color-error, #ef4444) 28%, #1f0a0a);\n    color: #fff;\n  }\n  .speed-dial-editor__form .btn:hover {\n    filter: brightness(1.08);\n  }\n  .speed-dial-editor__form [hidden] {\n    display: none !important;\n  }\n  @media (max-width: 820px) {\n    .speed-dial-editor {\n      place-items: center;\n    }\n    .speed-dial-editor__form {\n      inline-size: 100%;\n      max-block-size: 94vh;\n    }\n  }\n}\n@layer view.home {\n  :root:has([data-view=home]),\n  html:has([data-view=home]) {\n    /* colors */\n    --view-home-bg: linear-gradient(135deg, light-dark(#f8f9fa, #1b1f24) 0%, light-dark(#e9ecef, #0f1216) 100%);\n    --view-fg: light-dark(#1a1a1a, #e9ecef);\n    --view-border: light-dark(rgba(0, 0, 0, 0.08), rgba(255, 255, 255, 0.12));\n    --view-card-bg: light-dark(#ffffff, #1a1f26);\n    --view-primary: light-dark(#007acc, #66b7ff);\n    /* layout */\n    --view-layout: \"flex\";\n    --view-padding: var(--space-8);\n    --view-content-max-width: 1200px;\n    --view-hero-padding: var(--space-16);\n    --view-card-gap: var(--space-6);\n  }\n  .view-home {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    block-size: 100%;\n    padding: 2rem;\n    background: var(--view-home-bg);\n    color: var(--view-fg);\n    overflow-y: auto;\n  }\n  .view-home__content {\n    text-align: center;\n    max-inline-size: 800px;\n  }\n  .view-home__header {\n    margin-block-end: 3rem;\n  }\n  .view-home__title {\n    margin: 0;\n    font-size: 3rem;\n    font-weight: 800;\n    background: linear-gradient(135deg, var(--view-primary) 0%, light-dark(#0059a6, #3a8ad6) 100%);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    background-clip: text;\n  }\n  .view-home__subtitle {\n    margin: 0.5rem 0 0;\n    font-size: 1.125rem;\n    color: var(--view-fg);\n    opacity: 0.7;\n  }\n  .view-home__actions {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 1rem;\n  }\n  .view-home__action {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 0.75rem;\n    padding: 1.5rem;\n    border: 1px solid var(--view-border);\n    border-radius: 16px;\n    background-color: var(--view-card-bg);\n    color: var(--view-fg);\n    text-align: center;\n    cursor: pointer;\n    transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;\n  }\n  .view-home__action ui-icon {\n    opacity: 0.8;\n    color: var(--view-primary);\n  }\n  .view-home__action:hover {\n    transform: translateY(-4px);\n    box-shadow: 0 8px 24px light-dark(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));\n    border-color: var(--view-primary);\n  }\n  .view-home__action:hover ui-icon {\n    opacity: 1;\n  }\n  .view-home__action:focus-visible {\n    outline: 2px solid var(--view-primary);\n    outline-offset: 2px;\n  }\n  .view-home__action-title {\n    font-size: 1rem;\n    font-weight: 600;\n  }\n  .view-home__action-desc {\n    font-size: 0.8125rem;\n    opacity: 0.6;\n  }\n  /* Base/minimal shell home should behave as desktop grid host. */\n  .view-home--grid {\n    position: relative;\n    display: grid;\n    grid-template-columns: minmax(0, 1fr);\n    grid-template-rows: minmax(0, 1fr);\n    align-items: stretch;\n    justify-items: stretch;\n    block-size: 100%;\n    inline-size: 100%;\n    padding: 0;\n    overflow: hidden;\n    background: transparent;\n  }\n  .view-home--grid .speed-dial-root {\n    position: absolute;\n    inset: 0;\n    inline-size: 100%;\n    block-size: 100%;\n    max-inline-size: 100%;\n    max-block-size: 100%;\n    overflow: hidden;\n  }\n  @container (max-width: 768px) {\n    .view-home {\n      --view-hero-padding: var(--space-8);\n      --view-card-gap: var(--space-4);\n    }\n  }\n  @container (max-width: 480px) {\n    .view-home__actions {\n      grid-template-columns: 1fr;\n    }\n  }\n}";
new class extends re {
	constructor(e) {
		super(e);
	}
	connect(e) {
		let r = e?.deref?.() ?? e;
		r.classList.add("ui-orientbox");
		let a = T(1), o = T(n?.[i()] || 0);
		r.style.setProperty("--zoom", a.value), r.style.setProperty("--orient", o.value), Object.defineProperty(r, "size", { get: () => s }), Object.defineProperty(r, "zoom", {
			get: () => parseFloat(a.value) || 1,
			set: (e) => {
				a.value = e, r.style.setProperty("--zoom", e);
			}
		}), Object.defineProperty(r, "orient", {
			get: () => parseInt(o.value) || 0,
			set: (e) => {
				o.value = e, r.style.setProperty("--orient", e);
			}
		});
		let s = ne(r.clientWidth, r.clientHeight);
		return new ResizeObserver((e) => {
			for (let t of e) if (t?.contentBoxSize) {
				let e = t?.contentBoxSize?.[0];
				s.x.value = e?.inlineSize || s.x.value || 0, s.y.value = e?.blockSize || s.y.value || 0;
			}
		}).observe(r, { box: "content-box" }), t.set(r, {
			pointerMap: /* @__PURE__ */ new Map(),
			pointerCache: /* @__PURE__ */ new Map()
		}), this;
	}
}("ui-orientbox");
//#endregion
//#region ../../../node_modules/culori/src/rgb/parseNumber.js
var ge = (e, t) => {
	if (typeof e == "number") {
		if (t === 3) return {
			mode: "rgb",
			r: (e >> 8 & 15 | e >> 4 & 240) / 255,
			g: (e >> 4 & 15 | e & 240) / 255,
			b: (e & 15 | e << 4 & 240) / 255
		};
		if (t === 4) return {
			mode: "rgb",
			r: (e >> 12 & 15 | e >> 8 & 240) / 255,
			g: (e >> 8 & 15 | e >> 4 & 240) / 255,
			b: (e >> 4 & 15 | e & 240) / 255,
			alpha: (e & 15 | e << 4 & 240) / 255
		};
		if (t === 6) return {
			mode: "rgb",
			r: (e >> 16 & 255) / 255,
			g: (e >> 8 & 255) / 255,
			b: (e & 255) / 255
		};
		if (t === 8) return {
			mode: "rgb",
			r: (e >> 24 & 255) / 255,
			g: (e >> 16 & 255) / 255,
			b: (e >> 8 & 255) / 255,
			alpha: (e & 255) / 255
		};
	}
}, _e = {
	aliceblue: 15792383,
	antiquewhite: 16444375,
	aqua: 65535,
	aquamarine: 8388564,
	azure: 15794175,
	beige: 16119260,
	bisque: 16770244,
	black: 0,
	blanchedalmond: 16772045,
	blue: 255,
	blueviolet: 9055202,
	brown: 10824234,
	burlywood: 14596231,
	cadetblue: 6266528,
	chartreuse: 8388352,
	chocolate: 13789470,
	coral: 16744272,
	cornflowerblue: 6591981,
	cornsilk: 16775388,
	crimson: 14423100,
	cyan: 65535,
	darkblue: 139,
	darkcyan: 35723,
	darkgoldenrod: 12092939,
	darkgray: 11119017,
	darkgreen: 25600,
	darkgrey: 11119017,
	darkkhaki: 12433259,
	darkmagenta: 9109643,
	darkolivegreen: 5597999,
	darkorange: 16747520,
	darkorchid: 10040012,
	darkred: 9109504,
	darksalmon: 15308410,
	darkseagreen: 9419919,
	darkslateblue: 4734347,
	darkslategray: 3100495,
	darkslategrey: 3100495,
	darkturquoise: 52945,
	darkviolet: 9699539,
	deeppink: 16716947,
	deepskyblue: 49151,
	dimgray: 6908265,
	dimgrey: 6908265,
	dodgerblue: 2003199,
	firebrick: 11674146,
	floralwhite: 16775920,
	forestgreen: 2263842,
	fuchsia: 16711935,
	gainsboro: 14474460,
	ghostwhite: 16316671,
	gold: 16766720,
	goldenrod: 14329120,
	gray: 8421504,
	green: 32768,
	greenyellow: 11403055,
	grey: 8421504,
	honeydew: 15794160,
	hotpink: 16738740,
	indianred: 13458524,
	indigo: 4915330,
	ivory: 16777200,
	khaki: 15787660,
	lavender: 15132410,
	lavenderblush: 16773365,
	lawngreen: 8190976,
	lemonchiffon: 16775885,
	lightblue: 11393254,
	lightcoral: 15761536,
	lightcyan: 14745599,
	lightgoldenrodyellow: 16448210,
	lightgray: 13882323,
	lightgreen: 9498256,
	lightgrey: 13882323,
	lightpink: 16758465,
	lightsalmon: 16752762,
	lightseagreen: 2142890,
	lightskyblue: 8900346,
	lightslategray: 7833753,
	lightslategrey: 7833753,
	lightsteelblue: 11584734,
	lightyellow: 16777184,
	lime: 65280,
	limegreen: 3329330,
	linen: 16445670,
	magenta: 16711935,
	maroon: 8388608,
	mediumaquamarine: 6737322,
	mediumblue: 205,
	mediumorchid: 12211667,
	mediumpurple: 9662683,
	mediumseagreen: 3978097,
	mediumslateblue: 8087790,
	mediumspringgreen: 64154,
	mediumturquoise: 4772300,
	mediumvioletred: 13047173,
	midnightblue: 1644912,
	mintcream: 16121850,
	mistyrose: 16770273,
	moccasin: 16770229,
	navajowhite: 16768685,
	navy: 128,
	oldlace: 16643558,
	olive: 8421376,
	olivedrab: 7048739,
	orange: 16753920,
	orangered: 16729344,
	orchid: 14315734,
	palegoldenrod: 15657130,
	palegreen: 10025880,
	paleturquoise: 11529966,
	palevioletred: 14381203,
	papayawhip: 16773077,
	peachpuff: 16767673,
	peru: 13468991,
	pink: 16761035,
	plum: 14524637,
	powderblue: 11591910,
	purple: 8388736,
	rebeccapurple: 6697881,
	red: 16711680,
	rosybrown: 12357519,
	royalblue: 4286945,
	saddlebrown: 9127187,
	salmon: 16416882,
	sandybrown: 16032864,
	seagreen: 3050327,
	seashell: 16774638,
	sienna: 10506797,
	silver: 12632256,
	skyblue: 8900331,
	slateblue: 6970061,
	slategray: 7372944,
	slategrey: 7372944,
	snow: 16775930,
	springgreen: 65407,
	steelblue: 4620980,
	tan: 13808780,
	teal: 32896,
	thistle: 14204888,
	tomato: 16737095,
	turquoise: 4251856,
	violet: 15631086,
	wheat: 16113331,
	white: 16777215,
	whitesmoke: 16119285,
	yellow: 16776960,
	yellowgreen: 10145074
}, ve = (e) => ge(_e[e.toLowerCase()], 6), ye = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, be = (e) => {
	let t;
	return (t = e.match(ye)) ? ge(parseInt(t[1], 16), t[1].length) : void 0;
}, k = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)";
`${k}`;
var xe = `${k}%`;
`${k}`;
var Se = `(?:${k}%|${k})`, Ce = `(?:${k}%|${k}|none)`, we = `(?:${k}(deg|grad|rad|turn)|${k})`;
`${k}${k}`;
var Te = "\\s*,\\s*";
RegExp("^" + Ce + "$");
//#endregion
//#region ../../../node_modules/culori/src/rgb/parseRgbLegacy.js
var Ee = RegExp(`^rgba?\\(\\s*${k}${Te}${k}${Te}${k}\\s*(?:,\\s*${Se}\\s*)?\\)$`), De = RegExp(`^rgba?\\(\\s*${xe}${Te}${xe}${Te}${xe}\\s*(?:,\\s*${Se}\\s*)?\\)$`), Oe = (e) => {
	let t = { mode: "rgb" }, n;
	if (n = e.match(Ee)) n[1] !== void 0 && (t.r = n[1] / 255), n[2] !== void 0 && (t.g = n[2] / 255), n[3] !== void 0 && (t.b = n[3] / 255);
	else if (n = e.match(De)) n[1] !== void 0 && (t.r = n[1] / 100), n[2] !== void 0 && (t.g = n[2] / 100), n[3] !== void 0 && (t.b = n[3] / 100);
	else return;
	return n[4] === void 0 ? n[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +n[5]))) : t.alpha = Math.max(0, Math.min(1, n[4] / 100)), t;
}, ke = (e, t) => e === void 0 ? void 0 : typeof e == "object" ? e.mode === void 0 ? t ? {
	...e,
	mode: t
} : void 0 : e : Xe(e), Ae = (e = "rgb") => (t) => (t = ke(t, e)) === void 0 ? void 0 : t.mode === e ? t : A[t.mode][e] ? A[t.mode][e](t) : e === "rgb" ? A[t.mode].rgb(t) : A.rgb[e](A[t.mode].rgb(t)), A = {}, je = {}, Me = [], Ne = {}, Pe = (e) => e, j = (e) => (A[e.mode] = {
	...A[e.mode],
	...e.toMode
}, Object.keys(e.fromMode || {}).forEach((t) => {
	A[t] || (A[t] = {}), A[t][e.mode] = e.fromMode[t];
}), e.ranges ||= {}, e.difference ||= {}, e.channels.forEach((t) => {
	if (e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t]) throw Error(`Missing interpolator for: ${t}`);
	typeof e.interpolate[t] == "function" && (e.interpolate[t] = { use: e.interpolate[t] }), e.interpolate[t].fixup || (e.interpolate[t].fixup = Pe);
}), je[e.mode] = e, (e.parse || []).forEach((t) => {
	Ie(t, e.mode);
}), Ae(e.mode)), Fe = (e) => je[e], Ie = (e, t) => {
	if (typeof e == "string") {
		if (!t) throw Error("'mode' required when 'parser' is a string");
		Ne[e] = t;
	} else typeof e == "function" && Me.indexOf(e) < 0 && Me.push(e);
}, Le = /[^\x00-\x7F]|[a-zA-Z_]/, Re = /[^\x00-\x7F]|[-\w]/, M = {
	Function: "function",
	Ident: "ident",
	Number: "number",
	Percentage: "percentage",
	ParenClose: ")",
	None: "none",
	Hue: "hue",
	Alpha: "alpha"
}, N = 0;
function ze(e) {
	let t = e[N], n = e[N + 1];
	return t === "-" || t === "+" ? /\d/.test(n) || n === "." && /\d/.test(e[N + 2]) : t === "." ? /\d/.test(n) : /\d/.test(t);
}
function Be(e) {
	if (N >= e.length) return !1;
	let t = e[N];
	if (Le.test(t)) return !0;
	if (t === "-") {
		if (e.length - N < 2) return !1;
		let t = e[N + 1];
		return !!(t === "-" || Le.test(t));
	}
	return !1;
}
var Ve = {
	deg: 1,
	rad: 180 / Math.PI,
	grad: 9 / 10,
	turn: 360
};
function He(e) {
	let t = "";
	if ((e[N] === "-" || e[N] === "+") && (t += e[N++]), t += Ue(e), e[N] === "." && /\d/.test(e[N + 1]) && (t += e[N++] + Ue(e)), (e[N] === "e" || e[N] === "E") && ((e[N + 1] === "-" || e[N + 1] === "+") && /\d/.test(e[N + 2]) ? t += e[N++] + e[N++] + Ue(e) : /\d/.test(e[N + 1]) && (t += e[N++] + Ue(e))), Be(e)) {
		let n = We(e);
		return n === "deg" || n === "rad" || n === "turn" || n === "grad" ? {
			type: M.Hue,
			value: t * Ve[n]
		} : void 0;
	}
	return e[N] === "%" ? (N++, {
		type: M.Percentage,
		value: +t
	}) : {
		type: M.Number,
		value: +t
	};
}
function Ue(e) {
	let t = "";
	for (; /\d/.test(e[N]);) t += e[N++];
	return t;
}
function We(e) {
	let t = "";
	for (; N < e.length && Re.test(e[N]);) t += e[N++];
	return t;
}
function Ge(e) {
	let t = We(e);
	return e[N] === "(" ? (N++, {
		type: M.Function,
		value: t
	}) : t === "none" ? {
		type: M.None,
		value: void 0
	} : {
		type: M.Ident,
		value: t
	};
}
function Ke(e = "") {
	let t = e.trim(), n = [], r;
	for (N = 0; N < t.length;) {
		if (r = t[N++], r === "\n" || r === "	" || r === " ") {
			for (; N < t.length && (t[N] === "\n" || t[N] === "	" || t[N] === " ");) N++;
			continue;
		}
		if (r === ",") return;
		if (r === ")") {
			n.push({ type: M.ParenClose });
			continue;
		}
		if (r === "+") {
			if (N--, ze(t)) {
				n.push(He(t));
				continue;
			}
			return;
		}
		if (r === "-") {
			if (N--, ze(t)) {
				n.push(He(t));
				continue;
			}
			if (Be(t)) {
				n.push({
					type: M.Ident,
					value: We(t)
				});
				continue;
			}
			return;
		}
		if (r === ".") {
			if (N--, ze(t)) {
				n.push(He(t));
				continue;
			}
			return;
		}
		if (r === "/") {
			for (; N < t.length && (t[N] === "\n" || t[N] === "	" || t[N] === " ");) N++;
			let e;
			if (ze(t) && (e = He(t), e.type !== M.Hue)) {
				n.push({
					type: M.Alpha,
					value: e
				});
				continue;
			}
			if (Be(t) && We(t) === "none") {
				n.push({
					type: M.Alpha,
					value: {
						type: M.None,
						value: void 0
					}
				});
				continue;
			}
			return;
		}
		if (/\d/.test(r)) {
			N--, n.push(He(t));
			continue;
		}
		if (Le.test(r)) {
			N--, n.push(Ge(t));
			continue;
		}
		return;
	}
	return n;
}
function qe(e) {
	e._i = 0;
	let t = e[e._i++];
	if (!t || t.type !== M.Function || t.value !== "color" || (t = e[e._i++], t.type !== M.Ident)) return;
	let n = Ne[t.value];
	if (!n) return;
	let r = { mode: n }, i = Je(e, !1);
	if (!i) return;
	let a = Fe(n).channels;
	for (let e = 0, t, n; e < a.length; e++) t = i[e], n = a[e], t.type !== M.None && (r[n] = t.type === M.Number ? t.value : t.value / 100, n === "alpha" && (r[n] = Math.max(0, Math.min(1, r[n]))));
	return r;
}
function Je(e, t) {
	let n = [], r;
	for (; e._i < e.length;) {
		if (r = e[e._i++], r.type === M.None || r.type === M.Number || r.type === M.Alpha || r.type === M.Percentage || t && r.type === M.Hue) {
			n.push(r);
			continue;
		}
		if (r.type === M.ParenClose) {
			if (e._i < e.length) return;
			continue;
		}
		return;
	}
	if (!(n.length < 3 || n.length > 4)) {
		if (n.length === 4) {
			if (n[3].type !== M.Alpha) return;
			n[3] = n[3].value;
		}
		return n.length === 3 && n.push({
			type: M.None,
			value: void 0
		}), n.every((e) => e.type !== M.Alpha) ? n : void 0;
	}
}
function Ye(e, t) {
	e._i = 0;
	let n = e[e._i++];
	if (!n || n.type !== M.Function) return;
	let r = Je(e, t);
	if (r) return r.unshift(n.value), r;
}
var Xe = (e) => {
	if (typeof e != "string") return;
	let t = Ke(e), n = t ? Ye(t, !0) : void 0, r, i = 0, a = Me.length;
	for (; i < a;) if ((r = Me[i++](e, n)) !== void 0) return r;
	return t ? qe(t) : void 0;
};
//#endregion
//#region ../../../node_modules/culori/src/rgb/parseRgb.js
function Ze(e, t) {
	if (!t || t[0] !== "rgb" && t[0] !== "rgba") return;
	let n = { mode: "rgb" }, [, r, i, a, o] = t;
	if (!(r.type === M.Hue || i.type === M.Hue || a.type === M.Hue)) return r.type !== M.None && (n.r = r.type === M.Number ? r.value / 255 : r.value / 100), i.type !== M.None && (n.g = i.type === M.Number ? i.value / 255 : i.value / 100), a.type !== M.None && (n.b = a.type === M.Number ? a.value / 255 : a.value / 100), o.type !== M.None && (n.alpha = Math.min(1, Math.max(0, o.type === M.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region ../../../node_modules/culori/src/rgb/parseTransparent.js
var Qe = (e) => e === "transparent" ? {
	mode: "rgb",
	r: 0,
	g: 0,
	b: 0,
	alpha: 0
} : void 0, $e = (e, t, n) => e + n * (t - e), et = (e) => {
	let t = [];
	for (let n = 0; n < e.length - 1; n++) {
		let r = e[n], i = e[n + 1];
		r === void 0 && i === void 0 ? t.push(void 0) : r !== void 0 && i !== void 0 ? t.push([r, i]) : t.push(r === void 0 ? [i, i] : [r, r]);
	}
	return t;
}, P = ((e) => (t) => {
	let n = et(t);
	return (t) => {
		let r = t * n.length, i = t >= 1 ? n.length - 1 : Math.max(Math.floor(r), 0), a = n[i];
		return a === void 0 ? void 0 : e(a[0], a[1], r - i);
	};
})($e), F = (e) => {
	let t = !1, n = e.map((e) => e === void 0 ? 1 : (t = !0, e));
	return t ? n : e;
}, I = {
	mode: "rgb",
	channels: [
		"r",
		"g",
		"b",
		"alpha"
	],
	parse: [
		Ze,
		be,
		Oe,
		ve,
		Qe,
		"srgb"
	],
	serialize: "srgb",
	interpolate: {
		r: P,
		g: P,
		b: P,
		alpha: {
			use: P,
			fixup: F
		}
	},
	gamut: !0,
	white: {
		r: 1,
		g: 1,
		b: 1
	},
	black: {
		r: 0,
		g: 0,
		b: 0
	}
}, tt = (e = 0) => Math.abs(e) ** (563 / 256) * Math.sign(e), nt = (e) => {
	let t = tt(e.r), n = tt(e.g), r = tt(e.b), i = {
		mode: "xyz65",
		x: .5766690429101305 * t + .1855582379065463 * n + .1882286462349947 * r,
		y: .297344975250536 * t + .6273635662554661 * n + .0752914584939979 * r,
		z: .0270313613864123 * t + .0706888525358272 * n + .9913375368376386 * r
	};
	return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, rt = (e) => Math.abs(e) ** (256 / 563) * Math.sign(e), it = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = {
		mode: "a98",
		r: rt(e * 2.0415879038107465 - t * .5650069742788597 - .3447313507783297 * n),
		g: rt(e * -.9692436362808798 + t * 1.8759675015077206 + .0415550574071756 * n),
		b: rt(e * .0134442806320312 - t * .1183623922310184 + 1.0151749943912058 * n)
	};
	return r !== void 0 && (i.alpha = r), i;
}, at = (e = 0) => {
	let t = Math.abs(e);
	return t <= .04045 ? e / 12.92 : (Math.sign(e) || 1) * ((t + .055) / 1.055) ** 2.4;
}, L = ({ r: e, g: t, b: n, alpha: r }) => {
	let i = {
		mode: "lrgb",
		r: at(e),
		g: at(t),
		b: at(n)
	};
	return r !== void 0 && (i.alpha = r), i;
}, R = (e) => {
	let { r: t, g: n, b: r, alpha: i } = L(e), a = {
		mode: "xyz65",
		x: .4123907992659593 * t + .357584339383878 * n + .1804807884018343 * r,
		y: .2126390058715102 * t + .715168678767756 * n + .0721923153607337 * r,
		z: .0193308187155918 * t + .119194779794626 * n + .9505321522496607 * r
	};
	return i !== void 0 && (a.alpha = i), a;
}, ot = (e = 0) => {
	let t = Math.abs(e);
	return t > .0031308 ? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - .055) : e * 12.92;
}, z = ({ r: e, g: t, b: n, alpha: r }, i = "rgb") => {
	let a = {
		mode: i,
		r: ot(e),
		g: ot(t),
		b: ot(n)
	};
	return r !== void 0 && (a.alpha = r), a;
}, B = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = z({
		r: e * 3.2409699419045226 - t * 1.537383177570094 - .4986107602930034 * n,
		g: e * -.9692436362808796 + t * 1.8759675015077204 + .0415550574071756 * n,
		b: e * .0556300796969936 - t * .2039769588889765 + 1.0569715142428784 * n
	});
	return r !== void 0 && (i.alpha = r), i;
}, st = {
	...I,
	mode: "a98",
	parse: ["a98-rgb"],
	serialize: "a98-rgb",
	fromMode: {
		rgb: (e) => it(R(e)),
		xyz65: it
	},
	toMode: {
		rgb: (e) => B(nt(e)),
		xyz65: nt
	}
}, V = (e) => (e %= 360) < 0 ? e + 360 : e, ct = (e, t) => e.map((n, r, i) => {
	if (n === void 0) return n;
	let a = V(n);
	return r === 0 || e[r - 1] === void 0 ? a : t(a - V(i[r - 1]));
}).reduce((e, t) => !e.length || t === void 0 || e[e.length - 1] === void 0 ? (e.push(t), e) : (e.push(t + e[e.length - 1]), e), []), H = (e) => ct(e, (e) => Math.abs(e) <= 180 ? e : e - 360 * Math.sign(e)), U = [
	-.14861,
	1.78277,
	-.29227,
	-.90649,
	1.97294,
	0
], lt = Math.PI / 180, ut = 180 / Math.PI, dt = U[3] * U[4], ft = U[1] * U[4], pt = U[1] * U[2] - U[0] * U[3], mt = ({ r: e, g: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = (pt * n + e * dt - t * ft) / (pt + dt - ft), a = n - i, o = (U[4] * (t - i) - U[2] * a) / U[3], s = {
		mode: "cubehelix",
		l: i,
		s: i === 0 || i === 1 ? void 0 : Math.sqrt(a * a + o * o) / (U[4] * i * (1 - i))
	};
	return s.s && (s.h = Math.atan2(o, a) * ut - 120), r !== void 0 && (s.alpha = r), s;
}, ht = ({ h: e, s: t, l: n, alpha: r }) => {
	let i = { mode: "rgb" };
	e = (e === void 0 ? 0 : e + 120) * lt, n === void 0 && (n = 0);
	let a = t === void 0 ? 0 : t * n * (1 - n), o = Math.cos(e), s = Math.sin(e);
	return i.r = n + a * (U[0] * o + U[1] * s), i.g = n + a * (U[2] * o + U[3] * s), i.b = n + a * (U[4] * o + U[5] * s), r !== void 0 && (i.alpha = r), i;
}, gt = (e, t) => {
	if (e.h === void 0 || t.h === void 0 || !e.s || !t.s) return 0;
	let n = V(e.h), r = V(t.h), i = Math.sin((r - n + 360) / 2 * Math.PI / 180);
	return 2 * Math.sqrt(e.s * t.s) * i;
}, _t = (e, t) => {
	if (e.h === void 0 || t.h === void 0) return 0;
	let n = V(e.h), r = V(t.h);
	return Math.abs(r - n) > 180 ? n - (r - 360 * Math.sign(r - n)) : r - n;
}, vt = (e, t) => {
	if (e.h === void 0 || t.h === void 0 || !e.c || !t.c) return 0;
	let n = V(e.h), r = V(t.h), i = Math.sin((r - n + 360) / 2 * Math.PI / 180);
	return 2 * Math.sqrt(e.c * t.c) * i;
}, W = (e) => {
	let t = e.reduce((e, t) => {
		if (t !== void 0) {
			let n = t * Math.PI / 180;
			e.sin += Math.sin(n), e.cos += Math.cos(n);
		}
		return e;
	}, {
		sin: 0,
		cos: 0
	}), n = Math.atan2(t.sin, t.cos) * 180 / Math.PI;
	return n < 0 ? 360 + n : n;
}, yt = {
	mode: "cubehelix",
	channels: [
		"h",
		"s",
		"l",
		"alpha"
	],
	parse: ["--cubehelix"],
	serialize: "--cubehelix",
	ranges: {
		h: [0, 360],
		s: [0, 4.614],
		l: [0, 1]
	},
	fromMode: { rgb: mt },
	toMode: { rgb: ht },
	interpolate: {
		h: {
			use: P,
			fixup: H
		},
		s: P,
		l: P,
		alpha: {
			use: P,
			fixup: F
		}
	},
	difference: { h: gt },
	average: { h: W }
}, G = ({ l: e, a: t, b: n, alpha: r }, i = "lch") => {
	t === void 0 && (t = 0), n === void 0 && (n = 0);
	let a = Math.sqrt(t * t + n * n), o = {
		mode: i,
		l: e,
		c: a
	};
	return a && (o.h = V(Math.atan2(n, t) * 180 / Math.PI)), r !== void 0 && (o.alpha = r), o;
}, K = ({ l: e, c: t, h: n, alpha: r }, i = "lab") => {
	n === void 0 && (n = 0);
	let a = {
		mode: i,
		l: e,
		a: t ? t * Math.cos(n / 180 * Math.PI) : 0,
		b: t ? t * Math.sin(n / 180 * Math.PI) : 0
	};
	return r !== void 0 && (a.alpha = r), a;
}, bt = 29 ** 3 / 3 ** 3, xt = 6 ** 3 / 29 ** 3, q = {
	X: .3457 / .3585,
	Y: 1,
	Z: .2958 / .3585
}, J = {
	X: .3127 / .329,
	Y: 1,
	Z: .3583 / .329
}, St = (e) => e ** 3 > xt ? e ** 3 : (116 * e - 16) / bt, Ct = ({ l: e, a: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = (e + 16) / 116, a = t / 500 + i, o = i - n / 200, s = {
		mode: "xyz65",
		x: St(a) * J.X,
		y: St(i) * J.Y,
		z: St(o) * J.Z
	};
	return r !== void 0 && (s.alpha = r), s;
}, wt = (e) => B(Ct(e)), Tt = (e) => e > xt ? Math.cbrt(e) : (bt * e + 16) / 116, Et = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Tt(e / J.X), a = Tt(t / J.Y), o = Tt(n / J.Z), s = {
		mode: "lab65",
		l: 116 * a - 16,
		a: 500 * (i - a),
		b: 200 * (a - o)
	};
	return r !== void 0 && (s.alpha = r), s;
}, Dt = (e) => {
	let t = Et(R(e));
	return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, Ot = 26 / 180 * Math.PI, kt = Math.cos(Ot), At = Math.sin(Ot), jt = 100 / Math.log(139 / 100), Mt = ({ l: e, c: t, h: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = {
		mode: "lab65",
		l: (Math.exp(e * 1 / jt) - 1) / .0039
	}, a = (Math.exp(.0435 * t * 1 * 1) - 1) / .075, o = a * Math.cos(n / 180 * Math.PI - Ot), s = a * Math.sin(n / 180 * Math.PI - Ot);
	return i.a = o * kt - s / .83 * At, i.b = o * At + s / .83 * kt, r !== void 0 && (i.alpha = r), i;
}, Nt = ({ l: e, a: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = t * kt + n * At, a = .83 * (n * kt - t * At), o = Math.sqrt(i * i + a * a), s = {
		mode: "dlch",
		l: jt / 1 * Math.log(1 + .0039 * e),
		c: Math.log(1 + .075 * o) / (.0435 * 1 * 1)
	};
	return s.c && (s.h = V((Math.atan2(a, i) + Ot) / Math.PI * 180)), r !== void 0 && (s.alpha = r), s;
}, Pt = (e) => Mt(G(e, "dlch")), Ft = (e) => K(Nt(e), "dlab"), It = {
	mode: "dlab",
	parse: ["--din99o-lab"],
	serialize: "--din99o-lab",
	toMode: {
		lab65: Pt,
		rgb: (e) => wt(Pt(e))
	},
	fromMode: {
		lab65: Ft,
		rgb: (e) => Ft(Dt(e))
	},
	channels: [
		"l",
		"a",
		"b",
		"alpha"
	],
	ranges: {
		l: [0, 100],
		a: [-40.09, 45.501],
		b: [-40.469, 44.344]
	},
	interpolate: {
		l: P,
		a: P,
		b: P,
		alpha: {
			use: P,
			fixup: F
		}
	}
}, Lt = {
	mode: "dlch",
	parse: ["--din99o-lch"],
	serialize: "--din99o-lch",
	toMode: {
		lab65: Mt,
		dlab: (e) => K(e, "dlab"),
		rgb: (e) => wt(Mt(e))
	},
	fromMode: {
		lab65: Nt,
		dlab: (e) => G(e, "dlch"),
		rgb: (e) => Nt(Dt(e))
	},
	channels: [
		"l",
		"c",
		"h",
		"alpha"
	],
	ranges: {
		l: [0, 100],
		c: [0, 51.484],
		h: [0, 360]
	},
	interpolate: {
		l: P,
		c: P,
		h: {
			use: P,
			fixup: H
		},
		alpha: {
			use: P,
			fixup: F
		}
	},
	difference: { h: vt },
	average: { h: W }
};
//#endregion
//#region ../../../node_modules/culori/src/hsi/convertHsiToRgb.js
function Rt({ h: e, s: t, i: n, alpha: r }) {
	e = V(e === void 0 ? 0 : e), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.abs(e / 60 % 2 - 1), a;
	switch (Math.floor(e / 60)) {
		case 0:
			a = {
				r: n * (1 + t * (3 / (2 - i) - 1)),
				g: n * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
				b: n * (1 - t)
			};
			break;
		case 1:
			a = {
				r: n * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
				g: n * (1 + t * (3 / (2 - i) - 1)),
				b: n * (1 - t)
			};
			break;
		case 2:
			a = {
				r: n * (1 - t),
				g: n * (1 + t * (3 / (2 - i) - 1)),
				b: n * (1 + t * (3 * (1 - i) / (2 - i) - 1))
			};
			break;
		case 3:
			a = {
				r: n * (1 - t),
				g: n * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
				b: n * (1 + t * (3 / (2 - i) - 1))
			};
			break;
		case 4:
			a = {
				r: n * (1 + t * (3 * (1 - i) / (2 - i) - 1)),
				g: n * (1 - t),
				b: n * (1 + t * (3 / (2 - i) - 1))
			};
			break;
		case 5:
			a = {
				r: n * (1 + t * (3 / (2 - i) - 1)),
				g: n * (1 - t),
				b: n * (1 + t * (3 * (1 - i) / (2 - i) - 1))
			};
			break;
		default: a = {
			r: n * (1 - t),
			g: n * (1 - t),
			b: n * (1 - t)
		};
	}
	return a.mode = "rgb", r !== void 0 && (a.alpha = r), a;
}
//#endregion
//#region ../../../node_modules/culori/src/hsi/convertRgbToHsi.js
function zt({ r: e, g: t, b: n, alpha: r }) {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.max(e, t, n), a = Math.min(e, t, n), o = {
		mode: "hsi",
		s: e + t + n === 0 ? 0 : 1 - 3 * a / (e + t + n),
		i: (e + t + n) / 3
	};
	return i - a !== 0 && (o.h = (i === e ? (t - n) / (i - a) + (t < n) * 6 : i === t ? (n - e) / (i - a) + 2 : (e - t) / (i - a) + 4) * 60), r !== void 0 && (o.alpha = r), o;
}
//#endregion
//#region ../../../node_modules/culori/src/hsi/definition.js
var Bt = {
	mode: "hsi",
	toMode: { rgb: Rt },
	parse: ["--hsi"],
	serialize: "--hsi",
	fromMode: { rgb: zt },
	channels: [
		"h",
		"s",
		"i",
		"alpha"
	],
	ranges: { h: [0, 360] },
	gamut: "rgb",
	interpolate: {
		h: {
			use: P,
			fixup: H
		},
		s: P,
		i: P,
		alpha: {
			use: P,
			fixup: F
		}
	},
	difference: { h: gt },
	average: { h: W }
};
//#endregion
//#region ../../../node_modules/culori/src/hsl/convertHslToRgb.js
function Vt({ h: e, s: t, l: n, alpha: r }) {
	e = V(e === void 0 ? 0 : e), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = n + t * (n < .5 ? n : 1 - n), a = i - (i - n) * 2 * Math.abs(e / 60 % 2 - 1), o;
	switch (Math.floor(e / 60)) {
		case 0:
			o = {
				r: i,
				g: a,
				b: 2 * n - i
			};
			break;
		case 1:
			o = {
				r: a,
				g: i,
				b: 2 * n - i
			};
			break;
		case 2:
			o = {
				r: 2 * n - i,
				g: i,
				b: a
			};
			break;
		case 3:
			o = {
				r: 2 * n - i,
				g: a,
				b: i
			};
			break;
		case 4:
			o = {
				r: a,
				g: 2 * n - i,
				b: i
			};
			break;
		case 5:
			o = {
				r: i,
				g: 2 * n - i,
				b: a
			};
			break;
		default: o = {
			r: 2 * n - i,
			g: 2 * n - i,
			b: 2 * n - i
		};
	}
	return o.mode = "rgb", r !== void 0 && (o.alpha = r), o;
}
//#endregion
//#region ../../../node_modules/culori/src/hsl/convertRgbToHsl.js
function Ht({ r: e, g: t, b: n, alpha: r }) {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.max(e, t, n), a = Math.min(e, t, n), o = {
		mode: "hsl",
		s: i === a ? 0 : (i - a) / (1 - Math.abs(i + a - 1)),
		l: .5 * (i + a)
	};
	return i - a !== 0 && (o.h = (i === e ? (t - n) / (i - a) + (t < n) * 6 : i === t ? (n - e) / (i - a) + 2 : (e - t) / (i - a) + 4) * 60), r !== void 0 && (o.alpha = r), o;
}
//#endregion
//#region ../../../node_modules/culori/src/util/hue.js
var Ut = (e, t) => {
	switch (t) {
		case "deg": return +e;
		case "rad": return e / Math.PI * 180;
		case "grad": return e / 10 * 9;
		case "turn": return e * 360;
	}
}, Wt = RegExp(`^hsla?\\(\\s*${we}${Te}${xe}${Te}${xe}\\s*(?:,\\s*${Se}\\s*)?\\)$`), Gt = (e) => {
	let t = e.match(Wt);
	if (!t) return;
	let n = { mode: "hsl" };
	return t[3] === void 0 ? t[1] !== void 0 && t[2] !== void 0 && (n.h = Ut(t[1], t[2])) : n.h = +t[3], t[4] !== void 0 && (n.s = Math.min(Math.max(0, t[4] / 100), 1)), t[5] !== void 0 && (n.l = Math.min(Math.max(0, t[5] / 100), 1)), t[6] === void 0 ? t[7] !== void 0 && (n.alpha = Math.max(0, Math.min(1, +t[7]))) : n.alpha = Math.max(0, Math.min(1, t[6] / 100)), n;
};
//#endregion
//#region ../../../node_modules/culori/src/hsl/parseHsl.js
function Kt(e, t) {
	if (!t || t[0] !== "hsl" && t[0] !== "hsla") return;
	let n = { mode: "hsl" }, [, r, i, a, o] = t;
	if (r.type !== M.None) {
		if (r.type === M.Percentage) return;
		n.h = r.value;
	}
	if (i.type !== M.None) {
		if (i.type === M.Hue) return;
		n.s = i.value / 100;
	}
	if (a.type !== M.None) {
		if (a.type === M.Hue) return;
		n.l = a.value / 100;
	}
	return o.type !== M.None && (n.alpha = Math.min(1, Math.max(0, o.type === M.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region ../../../node_modules/culori/src/hsl/definition.js
var qt = {
	mode: "hsl",
	toMode: { rgb: Vt },
	fromMode: { rgb: Ht },
	channels: [
		"h",
		"s",
		"l",
		"alpha"
	],
	ranges: { h: [0, 360] },
	gamut: "rgb",
	parse: [Kt, Gt],
	serialize: (e) => `hsl(${e.h === void 0 ? "none" : e.h} ${e.s === void 0 ? "none" : e.s * 100 + "%"} ${e.l === void 0 ? "none" : e.l * 100 + "%"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
	interpolate: {
		h: {
			use: P,
			fixup: H
		},
		s: P,
		l: P,
		alpha: {
			use: P,
			fixup: F
		}
	},
	difference: { h: gt },
	average: { h: W }
};
//#endregion
//#region ../../../node_modules/culori/src/hsv/convertHsvToRgb.js
function Jt({ h: e, s: t, v: n, alpha: r }) {
	e = V(e === void 0 ? 0 : e), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.abs(e / 60 % 2 - 1), a;
	switch (Math.floor(e / 60)) {
		case 0:
			a = {
				r: n,
				g: n * (1 - t * i),
				b: n * (1 - t)
			};
			break;
		case 1:
			a = {
				r: n * (1 - t * i),
				g: n,
				b: n * (1 - t)
			};
			break;
		case 2:
			a = {
				r: n * (1 - t),
				g: n,
				b: n * (1 - t * i)
			};
			break;
		case 3:
			a = {
				r: n * (1 - t),
				g: n * (1 - t * i),
				b: n
			};
			break;
		case 4:
			a = {
				r: n * (1 - t * i),
				g: n * (1 - t),
				b: n
			};
			break;
		case 5:
			a = {
				r: n,
				g: n * (1 - t),
				b: n * (1 - t * i)
			};
			break;
		default: a = {
			r: n * (1 - t),
			g: n * (1 - t),
			b: n * (1 - t)
		};
	}
	return a.mode = "rgb", r !== void 0 && (a.alpha = r), a;
}
//#endregion
//#region ../../../node_modules/culori/src/hsv/convertRgbToHsv.js
function Yt({ r: e, g: t, b: n, alpha: r }) {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.max(e, t, n), a = Math.min(e, t, n), o = {
		mode: "hsv",
		s: i === 0 ? 0 : 1 - a / i,
		v: i
	};
	return i - a !== 0 && (o.h = (i === e ? (t - n) / (i - a) + (t < n) * 6 : i === t ? (n - e) / (i - a) + 2 : (e - t) / (i - a) + 4) * 60), r !== void 0 && (o.alpha = r), o;
}
//#endregion
//#region ../../../node_modules/culori/src/hsv/definition.js
var Xt = {
	mode: "hsv",
	toMode: { rgb: Jt },
	parse: ["--hsv"],
	serialize: "--hsv",
	fromMode: { rgb: Yt },
	channels: [
		"h",
		"s",
		"v",
		"alpha"
	],
	ranges: { h: [0, 360] },
	gamut: "rgb",
	interpolate: {
		h: {
			use: P,
			fixup: H
		},
		s: P,
		v: P,
		alpha: {
			use: P,
			fixup: F
		}
	},
	difference: { h: gt },
	average: { h: W }
};
//#endregion
//#region ../../../node_modules/culori/src/hwb/convertHwbToRgb.js
function Zt({ h: e, w: t, b: n, alpha: r }) {
	if (t === void 0 && (t = 0), n === void 0 && (n = 0), t + n > 1) {
		let e = t + n;
		t /= e, n /= e;
	}
	return Jt({
		h: e,
		s: n === 1 ? 1 : 1 - t / (1 - n),
		v: 1 - n,
		alpha: r
	});
}
//#endregion
//#region ../../../node_modules/culori/src/hwb/convertRgbToHwb.js
function Qt(e) {
	let t = Yt(e);
	if (t === void 0) return;
	let n = t.s === void 0 ? 0 : t.s, r = t.v === void 0 ? 0 : t.v, i = {
		mode: "hwb",
		w: (1 - n) * r,
		b: 1 - r
	};
	return t.h !== void 0 && (i.h = t.h), t.alpha !== void 0 && (i.alpha = t.alpha), i;
}
//#endregion
//#region ../../../node_modules/culori/src/hwb/parseHwb.js
function $t(e, t) {
	if (!t || t[0] !== "hwb") return;
	let n = { mode: "hwb" }, [, r, i, a, o] = t;
	if (r.type !== M.None) {
		if (r.type === M.Percentage) return;
		n.h = r.value;
	}
	if (i.type !== M.None) {
		if (i.type === M.Hue) return;
		n.w = i.value / 100;
	}
	if (a.type !== M.None) {
		if (a.type === M.Hue) return;
		n.b = a.value / 100;
	}
	return o.type !== M.None && (n.alpha = Math.min(1, Math.max(0, o.type === M.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region ../../../node_modules/culori/src/hwb/definition.js
var en = {
	mode: "hwb",
	toMode: { rgb: Zt },
	fromMode: { rgb: Qt },
	channels: [
		"h",
		"w",
		"b",
		"alpha"
	],
	ranges: { h: [0, 360] },
	gamut: "rgb",
	parse: [$t],
	serialize: (e) => `hwb(${e.h === void 0 ? "none" : e.h} ${e.w === void 0 ? "none" : e.w * 100 + "%"} ${e.b === void 0 ? "none" : e.b * 100 + "%"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
	interpolate: {
		h: {
			use: P,
			fixup: H
		},
		w: P,
		b: P,
		alpha: {
			use: P,
			fixup: F
		}
	},
	difference: { h: _t },
	average: { h: W }
}, tn = .1593017578125, nn = 78.84375, rn = .8359375, an = 18.8515625, on = 18.6875;
function sn(e) {
	if (e < 0) return 0;
	let t = e ** (1 / nn);
	return 1e4 * (Math.max(0, t - rn) / (an - on * t)) ** (1 / tn);
}
function cn(e) {
	if (e < 0) return 0;
	let t = (e / 1e4) ** tn;
	return ((rn + an * t) / (1 + on * t)) ** +nn;
}
//#endregion
//#region ../../../node_modules/culori/src/itp/convertItpToXyz65.js
var ln = (e) => Math.max(e / 203, 0), un = ({ i: e, t, p: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = sn(e + .008609037037932761 * t + .11102962500302593 * n), a = sn(e - .00860903703793275 * t - .11102962500302599 * n), o = sn(e + .5600313357106791 * t - .32062717498731885 * n), s = {
		mode: "xyz65",
		x: ln(2.070152218389422 * i - 1.3263473389671556 * a + .2066510476294051 * o),
		y: ln(.3647385209748074 * i + .680566024947227 * a - .0453045459220346 * o),
		z: ln(-.049747207535812 * i - .0492609666966138 * a + 1.1880659249923042 * o)
	};
	return r !== void 0 && (s.alpha = r), s;
}, dn = (e = 0) => Math.max(e * 203, 0), fn = ({ x: e, y: t, z: n, alpha: r }) => {
	let i = dn(e), a = dn(t), o = dn(n), s = cn(.3592832590121217 * i + .6976051147779502 * a - .0358915932320289 * o), c = cn(-.1920808463704995 * i + 1.1004767970374323 * a + .0753748658519118 * o), l = cn(.0070797844607477 * i + .0748396662186366 * a + .8433265453898765 * o), u = {
		mode: "itp",
		i: .5 * s + .5 * c,
		t: 1.61376953125 * s - 3.323486328125 * c + 1.709716796875 * l,
		p: 4.378173828125 * s - 4.24560546875 * c - .132568359375 * l
	};
	return r !== void 0 && (u.alpha = r), u;
}, pn = {
	mode: "itp",
	channels: [
		"i",
		"t",
		"p",
		"alpha"
	],
	parse: ["--ictcp"],
	serialize: "--ictcp",
	toMode: {
		xyz65: un,
		rgb: (e) => B(un(e))
	},
	fromMode: {
		xyz65: fn,
		rgb: (e) => fn(R(e))
	},
	ranges: {
		i: [0, .581],
		t: [-.369, .272],
		p: [-.164, .331]
	},
	interpolate: {
		i: P,
		t: P,
		p: P,
		alpha: {
			use: P,
			fixup: F
		}
	}
}, mn = 134.03437499999998, hn = 16295499532821565e-27, gn = (e) => {
	if (e < 0) return 0;
	let t = (e / 1e4) ** tn;
	return ((rn + an * t) / (1 + on * t)) ** +mn;
}, _n = (e = 0) => Math.max(e * 203, 0), vn = ({ x: e, y: t, z: n, alpha: r }) => {
	e = _n(e), t = _n(t), n = _n(n);
	let i = 1.15 * e - .15 * n, a = .66 * t + .34 * e, o = gn(.41478972 * i + .579999 * a + .014648 * n), s = gn(-.20151 * i + 1.120649 * a + .0531008 * n), c = gn(-.0166008 * i + .2648 * a + .6684799 * n), l = (o + s) / 2, u = {
		mode: "jab",
		j: .44 * l / (1 - .56 * l) - hn,
		a: 3.524 * o - 4.066708 * s + .542708 * c,
		b: .199076 * o + 1.096799 * s - 1.295875 * c
	};
	return r !== void 0 && (u.alpha = r), u;
}, yn = 134.03437499999998, bn = 16295499532821565e-27, xn = (e) => {
	if (e < 0) return 0;
	let t = e ** (1 / yn);
	return 1e4 * ((rn - t) / (on * t - an)) ** (1 / tn);
}, Sn = (e) => e / 203, Cn = ({ j: e, a: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = (e + bn) / (.44 + .56 * (e + bn)), a = xn(i + .13860504 * t + .058047316 * n), o = xn(i - .13860504 * t - .058047316 * n), s = xn(i - .096019242 * t - .8118919 * n), c = {
		mode: "xyz65",
		x: Sn(1.661373024652174 * a - .914523081304348 * o + .23136208173913045 * s),
		y: Sn(-.3250758611844533 * a + 1.571847026732543 * o - .21825383453227928 * s),
		z: Sn(-.090982811 * a - .31272829 * o + 1.5227666 * s)
	};
	return r !== void 0 && (c.alpha = r), c;
}, wn = (e) => {
	let t = vn(R(e));
	return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, Tn = (e) => B(Cn(e)), En = {
	mode: "jab",
	channels: [
		"j",
		"a",
		"b",
		"alpha"
	],
	parse: ["--jzazbz"],
	serialize: "--jzazbz",
	fromMode: {
		rgb: wn,
		xyz65: vn
	},
	toMode: {
		rgb: Tn,
		xyz65: Cn
	},
	ranges: {
		j: [0, .222],
		a: [-.109, .129],
		b: [-.185, .134]
	},
	interpolate: {
		j: P,
		a: P,
		b: P,
		alpha: {
			use: P,
			fixup: F
		}
	}
}, Dn = ({ j: e, a: t, b: n, alpha: r }) => {
	t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.sqrt(t * t + n * n), a = {
		mode: "jch",
		j: e,
		c: i
	};
	return i && (a.h = V(Math.atan2(n, t) * 180 / Math.PI)), r !== void 0 && (a.alpha = r), a;
}, On = ({ j: e, c: t, h: n, alpha: r }) => {
	n === void 0 && (n = 0);
	let i = {
		mode: "jab",
		j: e,
		a: t ? t * Math.cos(n / 180 * Math.PI) : 0,
		b: t ? t * Math.sin(n / 180 * Math.PI) : 0
	};
	return r !== void 0 && (i.alpha = r), i;
}, kn = {
	mode: "jch",
	parse: ["--jzczhz"],
	serialize: "--jzczhz",
	toMode: {
		jab: On,
		rgb: (e) => Tn(On(e))
	},
	fromMode: {
		rgb: (e) => Dn(wn(e)),
		jab: Dn
	},
	channels: [
		"j",
		"c",
		"h",
		"alpha"
	],
	ranges: {
		j: [0, .221],
		c: [0, .19],
		h: [0, 360]
	},
	interpolate: {
		h: {
			use: P,
			fixup: H
		},
		c: P,
		j: P,
		alpha: {
			use: P,
			fixup: F
		}
	},
	difference: { h: vt },
	average: { h: W }
}, An = 29 ** 3 / 3 ** 3, jn = 6 ** 3 / 29 ** 3, Mn = (e) => e ** 3 > jn ? e ** 3 : (116 * e - 16) / An, Nn = ({ l: e, a: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = (e + 16) / 116, a = t / 500 + i, o = i - n / 200, s = {
		mode: "xyz50",
		x: Mn(a) * q.X,
		y: Mn(i) * q.Y,
		z: Mn(o) * q.Z
	};
	return r !== void 0 && (s.alpha = r), s;
}, Pn = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = z({
		r: e * 3.1341359569958707 - t * 1.6173863321612538 - .4906619460083532 * n,
		g: e * -.978795502912089 + t * 1.916254567259524 + .03344273116131949 * n,
		b: e * .07195537988411677 - t * .2289768264158322 + 1.405386058324125 * n
	});
	return r !== void 0 && (i.alpha = r), i;
}, Fn = (e) => Pn(Nn(e)), In = (e) => {
	let { r: t, g: n, b: r, alpha: i } = L(e), a = {
		mode: "xyz50",
		x: .436065742824811 * t + .3851514688337912 * n + .14307845442264197 * r,
		y: .22249319175623702 * t + .7168870538238823 * n + .06061979053616537 * r,
		z: .013923904500943465 * t + .09708128566574634 * n + .7140993584005155 * r
	};
	return i !== void 0 && (a.alpha = i), a;
}, Ln = (e) => e > jn ? Math.cbrt(e) : (An * e + 16) / 116, Rn = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Ln(e / q.X), a = Ln(t / q.Y), o = Ln(n / q.Z), s = {
		mode: "lab",
		l: 116 * a - 16,
		a: 500 * (i - a),
		b: 200 * (a - o)
	};
	return r !== void 0 && (s.alpha = r), s;
}, zn = (e) => {
	let t = Rn(In(e));
	return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
};
//#endregion
//#region ../../../node_modules/culori/src/lab/parseLab.js
function Bn(e, t) {
	if (!t || t[0] !== "lab") return;
	let n = { mode: "lab" }, [, r, i, a, o] = t;
	if (!(r.type === M.Hue || i.type === M.Hue || a.type === M.Hue)) return r.type !== M.None && (n.l = Math.min(Math.max(0, r.value), 100)), i.type !== M.None && (n.a = i.type === M.Number ? i.value : i.value * 125 / 100), a.type !== M.None && (n.b = a.type === M.Number ? a.value : a.value * 125 / 100), o.type !== M.None && (n.alpha = Math.min(1, Math.max(0, o.type === M.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region ../../../node_modules/culori/src/lab/definition.js
var Vn = {
	mode: "lab",
	toMode: {
		xyz50: Nn,
		rgb: Fn
	},
	fromMode: {
		xyz50: Rn,
		rgb: zn
	},
	channels: [
		"l",
		"a",
		"b",
		"alpha"
	],
	ranges: {
		l: [0, 100],
		a: [-125, 125],
		b: [-125, 125]
	},
	parse: [Bn],
	serialize: (e) => `lab(${e.l === void 0 ? "none" : e.l} ${e.a === void 0 ? "none" : e.a} ${e.b === void 0 ? "none" : e.b}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
	interpolate: {
		l: P,
		a: P,
		b: P,
		alpha: {
			use: P,
			fixup: F
		}
	}
}, Hn = {
	...Vn,
	mode: "lab65",
	parse: ["--lab-d65"],
	serialize: "--lab-d65",
	toMode: {
		xyz65: Ct,
		rgb: wt
	},
	fromMode: {
		xyz65: Et,
		rgb: Dt
	},
	ranges: {
		l: [0, 100],
		a: [-125, 125],
		b: [-125, 125]
	}
};
//#endregion
//#region ../../../node_modules/culori/src/lch/parseLch.js
function Un(e, t) {
	if (!t || t[0] !== "lch") return;
	let n = { mode: "lch" }, [, r, i, a, o] = t;
	if (r.type !== M.None) {
		if (r.type === M.Hue) return;
		n.l = Math.min(Math.max(0, r.value), 100);
	}
	if (i.type !== M.None && (n.c = Math.max(0, i.type === M.Number ? i.value : i.value * 150 / 100)), a.type !== M.None) {
		if (a.type === M.Percentage) return;
		n.h = a.value;
	}
	return o.type !== M.None && (n.alpha = Math.min(1, Math.max(0, o.type === M.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region ../../../node_modules/culori/src/lch/definition.js
var Wn = {
	mode: "lch",
	toMode: {
		lab: K,
		rgb: (e) => Fn(K(e))
	},
	fromMode: {
		rgb: (e) => G(zn(e)),
		lab: G
	},
	channels: [
		"l",
		"c",
		"h",
		"alpha"
	],
	ranges: {
		l: [0, 100],
		c: [0, 150],
		h: [0, 360]
	},
	parse: [Un],
	serialize: (e) => `lch(${e.l === void 0 ? "none" : e.l} ${e.c === void 0 ? "none" : e.c} ${e.h === void 0 ? "none" : e.h}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
	interpolate: {
		h: {
			use: P,
			fixup: H
		},
		c: P,
		l: P,
		alpha: {
			use: P,
			fixup: F
		}
	},
	difference: { h: vt },
	average: { h: W }
}, Gn = {
	...Wn,
	mode: "lch65",
	parse: ["--lch-d65"],
	serialize: "--lch-d65",
	toMode: {
		lab65: (e) => K(e, "lab65"),
		rgb: (e) => wt(K(e, "lab65"))
	},
	fromMode: {
		rgb: (e) => G(Dt(e), "lch65"),
		lab65: (e) => G(e, "lch65")
	},
	ranges: {
		l: [0, 100],
		c: [0, 150],
		h: [0, 360]
	}
}, Kn = ({ l: e, u: t, v: n, alpha: r }) => {
	t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.sqrt(t * t + n * n), a = {
		mode: "lchuv",
		l: e,
		c: i
	};
	return i && (a.h = V(Math.atan2(n, t) * 180 / Math.PI)), r !== void 0 && (a.alpha = r), a;
}, qn = ({ l: e, c: t, h: n, alpha: r }) => {
	n === void 0 && (n = 0);
	let i = {
		mode: "luv",
		l: e,
		u: t ? t * Math.cos(n / 180 * Math.PI) : 0,
		v: t ? t * Math.sin(n / 180 * Math.PI) : 0
	};
	return r !== void 0 && (i.alpha = r), i;
}, Jn = (e, t, n) => 4 * e / (e + 15 * t + 3 * n), Yn = (e, t, n) => 9 * t / (e + 15 * t + 3 * n), Xn = Jn(q.X, q.Y, q.Z), Zn = Yn(q.X, q.Y, q.Z), Qn = (e) => e <= jn ? An * e : 116 * Math.cbrt(e) - 16, $n = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Qn(t / q.Y), a = Jn(e, t, n), o = Yn(e, t, n);
	!isFinite(a) || !isFinite(o) ? i = a = o = 0 : (a = 13 * i * (a - Xn), o = 13 * i * (o - Zn));
	let s = {
		mode: "luv",
		l: i,
		u: a,
		v: o
	};
	return r !== void 0 && (s.alpha = r), s;
}, er = (e, t, n) => 4 * e / (e + 15 * t + 3 * n), tr = (e, t, n) => 9 * t / (e + 15 * t + 3 * n), nr = er(q.X, q.Y, q.Z), rr = tr(q.X, q.Y, q.Z), ir = ({ l: e, u: t, v: n, alpha: r }) => {
	if (e === void 0 && (e = 0), e === 0) return {
		mode: "xyz50",
		x: 0,
		y: 0,
		z: 0
	};
	t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = t / (13 * e) + nr, a = n / (13 * e) + rr, o = q.Y * (e <= 8 ? e / An : ((e + 16) / 116) ** 3), s = {
		mode: "xyz50",
		x: 9 * i * o / (4 * a),
		y: o,
		z: o * (12 - 3 * i - 20 * a) / (4 * a)
	};
	return r !== void 0 && (s.alpha = r), s;
}, ar = {
	mode: "lchuv",
	toMode: {
		luv: qn,
		rgb: (e) => Pn(ir(qn(e)))
	},
	fromMode: {
		rgb: (e) => Kn($n(In(e))),
		luv: Kn
	},
	channels: [
		"l",
		"c",
		"h",
		"alpha"
	],
	parse: ["--lchuv"],
	serialize: "--lchuv",
	ranges: {
		l: [0, 100],
		c: [0, 176.956],
		h: [0, 360]
	},
	interpolate: {
		h: {
			use: P,
			fixup: H
		},
		c: P,
		l: P,
		alpha: {
			use: P,
			fixup: F
		}
	},
	difference: { h: vt },
	average: { h: W }
}, or = {
	...I,
	mode: "lrgb",
	toMode: { rgb: z },
	fromMode: { rgb: L },
	parse: ["srgb-linear"],
	serialize: "srgb-linear"
}, sr = {
	mode: "luv",
	toMode: {
		xyz50: ir,
		rgb: (e) => Pn(ir(e))
	},
	fromMode: {
		xyz50: $n,
		rgb: (e) => $n(In(e))
	},
	channels: [
		"l",
		"u",
		"v",
		"alpha"
	],
	parse: ["--luv"],
	serialize: "--luv",
	ranges: {
		l: [0, 100],
		u: [-84.936, 175.042],
		v: [-125.882, 87.243]
	},
	interpolate: {
		l: P,
		u: P,
		v: P,
		alpha: {
			use: P,
			fixup: F
		}
	}
}, cr = ({ r: e, g: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = Math.cbrt(.412221469470763 * e + .5363325372617348 * t + .0514459932675022 * n), a = Math.cbrt(.2119034958178252 * e + .6806995506452344 * t + .1073969535369406 * n), o = Math.cbrt(.0883024591900564 * e + .2817188391361215 * t + .6299787016738222 * n), s = {
		mode: "oklab",
		l: .210454268309314 * i + .7936177747023054 * a - .0040720430116193 * o,
		a: 1.9779985324311684 * i - 2.42859224204858 * a + .450593709617411 * o,
		b: .0259040424655478 * i + .7827717124575296 * a - .8086757549230774 * o
	};
	return r !== void 0 && (s.alpha = r), s;
}, lr = (e) => {
	let t = cr(L(e));
	return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
}, ur = ({ l: e, a: t, b: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = (e + .3963377773761749 * t + .2158037573099136 * n) ** 3, a = (e - .1055613458156586 * t - .0638541728258133 * n) ** 3, o = (e - .0894841775298119 * t - 1.2914855480194092 * n) ** 3, s = {
		mode: "lrgb",
		r: 4.076741636075957 * i - 3.3077115392580616 * a + .2309699031821044 * o,
		g: -1.2684379732850317 * i + 2.6097573492876887 * a - .3413193760026573 * o,
		b: -.0041960761386756 * i - .7034186179359362 * a + 1.7076146940746117 * o
	};
	return r !== void 0 && (s.alpha = r), s;
}, dr = (e) => z(ur(e));
//#endregion
//#region ../../../node_modules/culori/src/okhsl/helpers.js
function fr(e) {
	let t = .206, n = .03, r = (1 + t) / (1 + n);
	return .5 * (r * e - t + Math.sqrt((r * e - t) * (r * e - t) + 4 * n * r * e));
}
function pr(e) {
	let t = .206, n = .03;
	return (1 + t) / (1 + n), (e * e + t * e) / (1.170873786407767 * (e + n));
}
function mr(e, t) {
	let n, r, i, a, o, s, c, l;
	-1.88170328 * e - .80936493 * t > 1 ? (n = 1.19086277, r = 1.76576728, i = .59662641, a = .75515197, o = .56771245, s = 4.0767416621, c = -3.3077115913, l = .2309699292) : 1.81444104 * e - 1.19445276 * t > 1 ? (n = .73956515, r = -.45954404, i = .08285427, a = .1254107, o = .14503204, s = -1.2684380046, c = 2.6097574011, l = -.3413193965) : (n = 1.35733652, r = -.00915799, i = -1.1513021, a = -.50559606, o = .00692167, s = -.0041960863, c = -.7034186147, l = 1.707614701);
	let u = n + r * e + i * t + a * e * e + o * e * t, d = .3963377774 * e + .2158037573 * t, f = -.1055613458 * e - .0638541728 * t, p = -.0894841775 * e - 1.291485548 * t;
	{
		let e = 1 + u * d, t = 1 + u * f, n = 1 + u * p, r = e * e * e, i = t * t * t, a = n * n * n, o = 3 * d * e * e, m = 3 * f * t * t, h = 3 * p * n * n, g = 6 * d * d * e, _ = 6 * f * f * t, v = 6 * p * p * n, y = s * r + c * i + l * a, b = s * o + c * m + l * h, x = s * g + c * _ + l * v;
		u -= y * b / (b * b - .5 * y * x);
	}
	return u;
}
function hr(e, t) {
	let n = mr(e, t), r = ur({
		l: 1,
		a: n * e,
		b: n * t
	}), i = Math.cbrt(1 / Math.max(r.r, r.g, r.b));
	return [i, i * n];
}
function gr(e, t, n, r, i, a = null) {
	a ||= hr(e, t);
	let o;
	if ((n - i) * a[1] - (a[0] - i) * r <= 0) o = a[1] * i / (r * a[0] + a[1] * (i - n));
	else {
		o = a[1] * (i - 1) / (r * (a[0] - 1) + a[1] * (i - n));
		{
			let a = n - i, s = r, c = .3963377774 * e + .2158037573 * t, l = -.1055613458 * e - .0638541728 * t, u = -.0894841775 * e - 1.291485548 * t, d = a + s * c, f = a + s * l, p = a + s * u;
			{
				let e = i * (1 - o) + o * n, t = o * r, a = e + t * c, s = e + t * l, m = e + t * u, h = a * a * a, g = s * s * s, _ = m * m * m, v = 3 * d * a * a, y = 3 * f * s * s, b = 3 * p * m * m, x = 6 * d * d * a, S = 6 * f * f * s, C = 6 * p * p * m, w = 4.0767416621 * h - 3.3077115913 * g + .2309699292 * _ - 1, ee = 4.0767416621 * v - 3.3077115913 * y + .2309699292 * b, T = 4.0767416621 * x - 3.3077115913 * S + .2309699292 * C, E = ee / (ee * ee - .5 * w * T), D = -w * E, te = -1.2684380046 * h + 2.6097574011 * g - .3413193965 * _ - 1, ne = -1.2684380046 * v + 2.6097574011 * y - .3413193965 * b, O = -1.2684380046 * x + 2.6097574011 * S - .3413193965 * C, re = ne / (ne * ne - .5 * te * O), ie = -te * re, ae = -.0041960863 * h - .7034186147 * g + 1.707614701 * _ - 1, oe = -.0041960863 * v - .7034186147 * y + 1.707614701 * b, se = -.0041960863 * x - .7034186147 * S + 1.707614701 * C, ce = oe / (oe * oe - .5 * ae * se), le = -ae * ce;
				D = E >= 0 ? D : 1e6, ie = re >= 0 ? ie : 1e6, le = ce >= 0 ? le : 1e6, o += Math.min(D, Math.min(ie, le));
			}
		}
	}
	return o;
}
function _r(e, t, n = null) {
	n ||= hr(e, t);
	let r = n[0], i = n[1];
	return [i / r, i / (1 - r)];
}
function vr(e, t, n) {
	let r = hr(t, n), i = gr(t, n, e, 1, e, r), a = _r(t, n, r), o = .11516993 + 1 / (7.4477897 + 4.1590124 * n + t * (-2.19557347 + 1.75198401 * n + t * (-2.13704948 - 10.02301043 * n + t * (-4.24894561 + 5.38770819 * n + 4.69891013 * t)))), s = .11239642 + 1 / (1.6132032 - .68124379 * n + t * (.40370612 + .90148123 * n + t * (-.27087943 + .6122399 * n + t * (.00299215 - .45399568 * n - .14661872 * t)))), c = i / Math.min(e * a[0], (1 - e) * a[1]), l = e * o, u = (1 - e) * s, d = .9 * c * Math.sqrt(Math.sqrt(1 / (1 / (l * l * l * l) + 1 / (u * u * u * u))));
	return l = e * .4, u = (1 - e) * .8, [
		Math.sqrt(1 / (1 / (l * l) + 1 / (u * u))),
		d,
		i
	];
}
//#endregion
//#region ../../../node_modules/culori/src/okhsl/convertOklabToOkhsl.js
function yr(e) {
	let t = e.l === void 0 ? 0 : e.l, n = e.a === void 0 ? 0 : e.a, r = e.b === void 0 ? 0 : e.b, i = {
		mode: "okhsl",
		l: fr(t)
	};
	e.alpha !== void 0 && (i.alpha = e.alpha);
	let a = Math.sqrt(n * n + r * r);
	if (!a) return i.s = 0, i;
	let [o, s, c] = vr(t, n / a, r / a), l;
	if (a < s) {
		let e = .8 * o, t = 1 - e / s;
		l = (a - 0) / (e + t * (a - 0)) * .8;
	} else {
		let e = s, t = .2 * s * s * 1.25 * 1.25 / o, n = 1 - t / (c - s);
		l = .8 + .2 * ((a - e) / (t + n * (a - e)));
	}
	return l && (i.s = l, i.h = V(Math.atan2(r, n) * 180 / Math.PI)), i;
}
//#endregion
//#region ../../../node_modules/culori/src/okhsl/convertOkhslToOklab.js
function br(e) {
	let t = e.h === void 0 ? 0 : e.h, n = e.s === void 0 ? 0 : e.s, r = e.l === void 0 ? 0 : e.l, i = {
		mode: "oklab",
		l: pr(r)
	};
	if (e.alpha !== void 0 && (i.alpha = e.alpha), !n || r === 1) return i.a = i.b = 0, i;
	let a = Math.cos(t / 180 * Math.PI), o = Math.sin(t / 180 * Math.PI), [s, c, l] = vr(i.l, a, o), u, d, f, p;
	n < .8 ? (u = 1.25 * n, d = 0, f = .8 * s, p = 1 - f / c) : (u = 5 * (n - .8), d = c, f = .2 * c * c * 1.25 * 1.25 / s, p = 1 - f / (l - c));
	let m = d + u * f / (1 - p * u);
	return i.a = m * a, i.b = m * o, i;
}
//#endregion
//#region ../../../node_modules/culori/src/okhsl/modeOkhsl.js
var xr = {
	...qt,
	mode: "okhsl",
	channels: [
		"h",
		"s",
		"l",
		"alpha"
	],
	parse: ["--okhsl"],
	serialize: "--okhsl",
	fromMode: {
		oklab: yr,
		rgb: (e) => yr(lr(e))
	},
	toMode: {
		oklab: br,
		rgb: (e) => dr(br(e))
	}
};
//#endregion
//#region ../../../node_modules/culori/src/okhsv/convertOklabToOkhsv.js
function Sr(e) {
	let t = e.l === void 0 ? 0 : e.l, n = e.a === void 0 ? 0 : e.a, r = e.b === void 0 ? 0 : e.b, i = Math.sqrt(n * n + r * r), a = i ? n / i : 1, o = i ? r / i : 1, [s, c] = _r(a, o), l = .5, u = 1 - l / s, d = c / (i + t * c), f = d * t, p = d * i, m = pr(f), h = p * m / f, g = ur({
		l: m,
		a: a * h,
		b: o * h
	}), _ = Math.cbrt(1 / Math.max(g.r, g.g, g.b, 0));
	t /= _, i = i / _ * fr(t) / t, t = fr(t);
	let v = {
		mode: "okhsv",
		s: i ? (l + c) * p / (c * l + c * u * p) : 0,
		v: t ? t / f : 0
	};
	return v.s && (v.h = V(Math.atan2(r, n) * 180 / Math.PI)), e.alpha !== void 0 && (v.alpha = e.alpha), v;
}
//#endregion
//#region ../../../node_modules/culori/src/okhsv/convertOkhsvToOklab.js
function Cr(e) {
	let t = { mode: "oklab" };
	e.alpha !== void 0 && (t.alpha = e.alpha);
	let n = e.h === void 0 ? 0 : e.h, r = e.s === void 0 ? 0 : e.s, i = e.v === void 0 ? 0 : e.v, a = Math.cos(n / 180 * Math.PI), o = Math.sin(n / 180 * Math.PI), [s, c] = _r(a, o), l = .5, u = 1 - l / s, d = 1 - r * l / (l + c - c * u * r), f = r * c * l / (l + c - c * u * r), p = pr(d), m = f * p / d, h = ur({
		l: p,
		a: a * m,
		b: o * m
	}), g = Math.cbrt(1 / Math.max(h.r, h.g, h.b, 0)), _ = pr(i * d), v = f * _ / d;
	return t.l = _ * g, t.a = v * a * g, t.b = v * o * g, t;
}
//#endregion
//#region ../../../node_modules/culori/src/okhsv/modeOkhsv.js
var wr = {
	...Xt,
	mode: "okhsv",
	channels: [
		"h",
		"s",
		"v",
		"alpha"
	],
	parse: ["--okhsv"],
	serialize: "--okhsv",
	fromMode: {
		oklab: Sr,
		rgb: (e) => Sr(lr(e))
	},
	toMode: {
		oklab: Cr,
		rgb: (e) => dr(Cr(e))
	}
};
//#endregion
//#region ../../../node_modules/culori/src/oklab/parseOklab.js
function Tr(e, t) {
	if (!t || t[0] !== "oklab") return;
	let n = { mode: "oklab" }, [, r, i, a, o] = t;
	if (!(r.type === M.Hue || i.type === M.Hue || a.type === M.Hue)) return r.type !== M.None && (n.l = Math.min(Math.max(0, r.type === M.Number ? r.value : r.value / 100), 1)), i.type !== M.None && (n.a = i.type === M.Number ? i.value : i.value * .4 / 100), a.type !== M.None && (n.b = a.type === M.Number ? a.value : a.value * .4 / 100), o.type !== M.None && (n.alpha = Math.min(1, Math.max(0, o.type === M.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region ../../../node_modules/culori/src/oklab/definition.js
var Er = {
	...Vn,
	mode: "oklab",
	toMode: {
		lrgb: ur,
		rgb: dr
	},
	fromMode: {
		lrgb: cr,
		rgb: lr
	},
	ranges: {
		l: [0, 1],
		a: [-.4, .4],
		b: [-.4, .4]
	},
	parse: [Tr],
	serialize: (e) => `oklab(${e.l === void 0 ? "none" : e.l} ${e.a === void 0 ? "none" : e.a} ${e.b === void 0 ? "none" : e.b}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
};
//#endregion
//#region ../../../node_modules/culori/src/oklch/parseOklch.js
function Dr(e, t) {
	if (!t || t[0] !== "oklch") return;
	let n = { mode: "oklch" }, [, r, i, a, o] = t;
	if (r.type !== M.None) {
		if (r.type === M.Hue) return;
		n.l = Math.min(Math.max(0, r.type === M.Number ? r.value : r.value / 100), 1);
	}
	if (i.type !== M.None && (n.c = Math.max(0, i.type === M.Number ? i.value : i.value * .4 / 100)), a.type !== M.None) {
		if (a.type === M.Percentage) return;
		n.h = a.value;
	}
	return o.type !== M.None && (n.alpha = Math.min(1, Math.max(0, o.type === M.Number ? o.value : o.value / 100))), n;
}
//#endregion
//#region ../../../node_modules/culori/src/oklch/definition.js
var Or = {
	...Wn,
	mode: "oklch",
	toMode: {
		oklab: (e) => K(e, "oklab"),
		rgb: (e) => dr(K(e, "oklab"))
	},
	fromMode: {
		rgb: (e) => G(lr(e), "oklch"),
		oklab: (e) => G(e, "oklch")
	},
	parse: [Dr],
	serialize: (e) => `oklch(${e.l === void 0 ? "none" : e.l} ${e.c === void 0 ? "none" : e.c} ${e.h === void 0 ? "none" : e.h}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
	ranges: {
		l: [0, 1],
		c: [0, .4],
		h: [0, 360]
	}
}, kr = (e) => {
	let { r: t, g: n, b: r, alpha: i } = L(e), a = {
		mode: "xyz65",
		x: .486570948648216 * t + .265667693169093 * n + .1982172852343625 * r,
		y: .2289745640697487 * t + .6917385218365062 * n + .079286914093745 * r,
		z: 0 * t + .0451133818589026 * n + 1.043944368900976 * r
	};
	return i !== void 0 && (a.alpha = i), a;
}, Ar = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = z({
		r: e * 2.4934969119414263 - t * .9313836179191242 - .402710784450717 * n,
		g: e * -.8294889695615749 + t * 1.7626640603183465 + .0236246858419436 * n,
		b: e * .0358458302437845 - t * .0761723892680418 + .9568845240076871 * n
	}, "p3");
	return r !== void 0 && (i.alpha = r), i;
}, jr = {
	...I,
	mode: "p3",
	parse: ["display-p3"],
	serialize: "display-p3",
	fromMode: {
		rgb: (e) => Ar(R(e)),
		xyz65: Ar
	},
	toMode: {
		rgb: (e) => B(kr(e)),
		xyz65: kr
	}
}, Mr = (e) => {
	let t = Math.abs(e);
	return t >= 1 / 512 ? Math.sign(e) * t ** (1 / 1.8) : 16 * e;
}, Nr = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = {
		mode: "prophoto",
		r: Mr(e * 1.3457868816471585 - t * .2555720873797946 - .0511018649755453 * n),
		g: Mr(e * -.5446307051249019 + t * 1.5082477428451466 + .0205274474364214 * n),
		b: Mr(e * 0 + t * 0 + 1.2119675456389452 * n)
	};
	return r !== void 0 && (i.alpha = r), i;
}, Pr = (e = 0) => {
	let t = Math.abs(e);
	return t >= 16 / 512 ? Math.sign(e) * t ** 1.8 : e / 16;
}, Fr = (e) => {
	let t = Pr(e.r), n = Pr(e.g), r = Pr(e.b), i = {
		mode: "xyz50",
		x: .7977666449006423 * t + .1351812974005331 * n + .0313477341283922 * r,
		y: .2880748288194013 * t + .7118352342418731 * n + 899369387256e-16 * r,
		z: 0 * t + 0 * n + .8251046025104602 * r
	};
	return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Ir = {
	...I,
	mode: "prophoto",
	parse: ["prophoto-rgb"],
	serialize: "prophoto-rgb",
	fromMode: {
		xyz50: Nr,
		rgb: (e) => Nr(In(e))
	},
	toMode: {
		xyz50: Fr,
		rgb: (e) => Pn(Fr(e))
	}
}, Lr = 1.09929682680944, Rr = .018053968510807, zr = (e) => {
	let t = Math.abs(e);
	return t > Rr ? (Math.sign(e) || 1) * (Lr * t ** .45 - (Lr - 1)) : 4.5 * e;
}, Br = ({ x: e, y: t, z: n, alpha: r }) => {
	e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
	let i = {
		mode: "rec2020",
		r: zr(e * 1.7166511879712683 - t * .3556707837763925 - .2533662813736599 * n),
		g: zr(e * -.6666843518324893 + t * 1.6164812366349395 + .0157685458139111 * n),
		b: zr(e * .0176398574453108 - t * .0427706132578085 + .9421031212354739 * n)
	};
	return r !== void 0 && (i.alpha = r), i;
}, Vr = 1.09929682680944, Hr = .018053968510807, Ur = (e = 0) => {
	let t = Math.abs(e);
	return t < Hr * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * ((t + Vr - 1) / Vr) ** (1 / .45);
}, Wr = (e) => {
	let t = Ur(e.r), n = Ur(e.g), r = Ur(e.b), i = {
		mode: "xyz65",
		x: .6369580483012911 * t + .1446169035862083 * n + .1688809751641721 * r,
		y: .262700212011267 * t + .6779980715188708 * n + .059301716469862 * r,
		z: 0 * t + .0280726930490874 * n + 1.0609850577107909 * r
	};
	return e.alpha !== void 0 && (i.alpha = e.alpha), i;
}, Gr = {
	...I,
	mode: "rec2020",
	fromMode: {
		xyz65: Br,
		rgb: (e) => Br(R(e))
	},
	toMode: {
		xyz65: Wr,
		rgb: (e) => B(Wr(e))
	},
	parse: ["rec2020"],
	serialize: "rec2020"
}, Y = .0037930732552754493, Kr = Math.cbrt(Y), qr = (e) => Math.cbrt(e) - Kr, Jr = (e) => {
	let { r: t, g: n, b: r, alpha: i } = L(e), a = qr(.3 * t + .622 * n + .078 * r + Y), o = qr(.23 * t + .692 * n + .078 * r + Y), s = qr(.2434226892454782 * t + .2047674442449682 * n + .5518098665095535 * r + Y), c = {
		mode: "xyb",
		x: (a - o) / 2,
		y: (a + o) / 2,
		b: s - (a + o) / 2
	};
	return i !== void 0 && (c.alpha = i), c;
}, Yr = (e) => (e + Kr) ** 3, Xr = {
	mode: "xyb",
	channels: [
		"x",
		"y",
		"b",
		"alpha"
	],
	parse: ["--xyb"],
	serialize: "--xyb",
	toMode: { rgb: ({ x: e, y: t, b: n, alpha: r }) => {
		e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
		let i = Yr(e + t) - Y, a = Yr(t - e) - Y, o = Yr(n + t) - Y, s = z({
			r: 11.031566904639861 * i - 9.866943908131562 * a - .16462299650829934 * o,
			g: -3.2541473810744237 * i + 4.418770377582723 * a - .16462299650829934 * o,
			b: -3.6588512867136815 * i + 2.7129230459360922 * a + 1.9459282407775895 * o
		});
		return r !== void 0 && (s.alpha = r), s;
	} },
	fromMode: { rgb: Jr },
	ranges: {
		x: [-.0154, .0281],
		y: [0, .8453],
		b: [-.2778, .388]
	},
	interpolate: {
		x: P,
		y: P,
		b: P,
		alpha: {
			use: P,
			fixup: F
		}
	}
}, Zr = {
	mode: "xyz50",
	parse: ["xyz-d50"],
	serialize: "xyz-d50",
	toMode: {
		rgb: Pn,
		lab: Rn
	},
	fromMode: {
		rgb: In,
		lab: Nn
	},
	channels: [
		"x",
		"y",
		"z",
		"alpha"
	],
	ranges: {
		x: [0, .964],
		y: [0, .999],
		z: [0, .825]
	},
	interpolate: {
		x: P,
		y: P,
		z: P,
		alpha: {
			use: P,
			fixup: F
		}
	}
}, Qr = {
	mode: "xyz65",
	toMode: {
		rgb: B,
		xyz50: (e) => {
			let { x: t, y: n, z: r, alpha: i } = e;
			t === void 0 && (t = 0), n === void 0 && (n = 0), r === void 0 && (r = 0);
			let a = {
				mode: "xyz50",
				x: 1.0479298208405488 * t + .0229467933410191 * n - .0501922295431356 * r,
				y: .0296278156881593 * t + .990434484573249 * n - .0170738250293851 * r,
				z: -.0092430581525912 * t + .0150551448965779 * n + .7518742899580008 * r
			};
			return i !== void 0 && (a.alpha = i), a;
		}
	},
	fromMode: {
		rgb: R,
		xyz50: (e) => {
			let { x: t, y: n, z: r, alpha: i } = e;
			t === void 0 && (t = 0), n === void 0 && (n = 0), r === void 0 && (r = 0);
			let a = {
				mode: "xyz65",
				x: .9554734527042182 * t - .0230985368742614 * n + .0632593086610217 * r,
				y: -.0283697069632081 * t + 1.0099954580058226 * n + .021041398966943 * r,
				z: .0123140016883199 * t - .0205076964334779 * n + 1.3303659366080753 * r
			};
			return i !== void 0 && (a.alpha = i), a;
		}
	},
	ranges: {
		x: [0, .95],
		y: [0, 1],
		z: [0, 1.088]
	},
	channels: [
		"x",
		"y",
		"z",
		"alpha"
	],
	parse: ["xyz", "xyz-d65"],
	serialize: "xyz-d65",
	interpolate: {
		x: P,
		y: P,
		z: P,
		alpha: {
			use: P,
			fixup: F
		}
	}
}, $r = {
	mode: "yiq",
	toMode: { rgb: ({ y: e, i: t, q: n, alpha: r }) => {
		e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
		let i = {
			mode: "rgb",
			r: e + .95608445 * t + .6208885 * n,
			g: e - .27137664 * t - .6486059 * n,
			b: e - 1.10561724 * t + 1.70250126 * n
		};
		return r !== void 0 && (i.alpha = r), i;
	} },
	fromMode: { rgb: ({ r: e, g: t, b: n, alpha: r }) => {
		e === void 0 && (e = 0), t === void 0 && (t = 0), n === void 0 && (n = 0);
		let i = {
			mode: "yiq",
			y: .29889531 * e + .58662247 * t + .11448223 * n,
			i: .59597799 * e - .2741761 * t - .32180189 * n,
			q: .21147017 * e - .52261711 * t + .31114694 * n
		};
		return r !== void 0 && (i.alpha = r), i;
	} },
	channels: [
		"y",
		"i",
		"q",
		"alpha"
	],
	parse: ["--yiq"],
	serialize: "--yiq",
	ranges: {
		i: [-.595, .595],
		q: [-.522, .522]
	},
	interpolate: {
		y: P,
		i: P,
		q: P,
		alpha: {
			use: P,
			fixup: F
		}
	}
};
j(st), j(yt), j(It), j(Lt), j(Bt), j(qt), j(Xt), j(en), j(pn), j(En), j(kn), j(Vn), j(Hn), j(Wn), j(Gn), j(ar), j(or), j(sr), j(xr), j(wr), j(Er), j(Or), j(jr), j(Ir), j(Gr), j(I), j(Xr), j(Zr), j(Qr), j($r);
//#endregion
//#region ../../projects/image.ts/src/canvas/Canvas.ts
var ei = /* @__PURE__ */ new WeakMap(), ti = o(), ni = (e) => e?.naturalWidth || e?.width || 1, ri = (e) => e?.naturalHeight || e?.height || 1, ii = (e, t, n = 1, r, i = 0) => {
	let a = e.canvas;
	e.translate(a.width / 2, a.height / 2), e.rotate((-i || 0) * (Math.PI * .5)), e.rotate((1 - r) * (Math.PI / 2)), e.translate(-(ni(t) / 2) * n, -(ri(t) / 2) * n);
}, ai = (e) => (!ei.has(e) && (e instanceof Blob || e instanceof File || e instanceof OffscreenCanvas || e instanceof ImageBitmap || e instanceof Image) && ei.set(e, createImageBitmap(e)), ei.get(e)), oi = /* @__PURE__ */ new WeakMap(), si = (e, t) => oi?.getOrInsertComputed?.(e, () => e?.bind?.(t)), ci = null;
ci = typeof HTMLCanvasElement < "u" ? class extends HTMLCanvasElement {
	static observedAttributes = ["data-src", "data-orient"];
	ctx = null;
	image = null;
	#e = [1, 1];
	#t = "";
	#n = "";
	get #i() {
		return parseInt(this.getAttribute("data-orient") || "0") || 0;
	}
	set #i(e) {
		this.setAttribute("data-orient", e.toString());
	}
	attributeChangedCallback(e, t, n) {
		e == "data-src" && this.#a(n), e == "data-orient" && this.#o(this.#n);
	}
	connectedCallback() {
		let e = this.parentNode;
		this.style.setProperty("max-inline-size", "min(100%, min(100cqi, 100dvi))"), this.style.setProperty("max-block-size", "min(100%, min(100cqb, 100dvb))"), this.#e = [Math.min(Math.min(Math.max(this.clientWidth || e?.clientWidth || 1, 1), e?.clientWidth || 1) * (this.currentCSSZoom || 1), screen?.width || 1) * (devicePixelRatio || 1), Math.min(Math.min(Math.max(this.clientHeight || e?.clientHeight || 1, 1), e?.clientHeight || 1) * (this.currentCSSZoom || 1), screen?.height || 1) * (devicePixelRatio || 1)], this.#a(this.#t = this.dataset.src || this.#t);
	}
	constructor() {
		super();
		let e = this, t = this.parentNode, n = () => {
			let e = this.#e;
			this.#e = [Math.min(Math.min(Math.max(this.clientWidth || t?.clientWidth || 1, 1), t?.clientWidth || 1) * (this.currentCSSZoom || 1), screen?.width || 1) * (devicePixelRatio || 1), Math.min(Math.min(Math.max(this.clientHeight || t?.clientHeight || 1, 1), t?.clientHeight || 1) * (this.currentCSSZoom || 1), screen?.height || 1) * (devicePixelRatio || 1)], (e?.[0] != this.#e[0] || e?.[1] != this.#e[1]) && this.#o(this.#n);
		};
		ti?.shedule?.(() => {
			this.ctx = e.getContext("2d", {
				alpha: !0,
				desynchronized: !0,
				powerPreference: "high-performance",
				preserveDrawingBuffer: !0
			}), this.inert = !0, this.style.objectFit = "cover", this.style.objectPosition = "center", this.classList.add("u-canvas"), this.classList.add("u2-canvas"), this.classList.add("ui-canvas"), this.style.setProperty("max-inline-size", "min(100%, min(100cqi, 100dvi))"), this.style.setProperty("max-block-size", "min(100%, min(100cqb, 100dvb))"), n(), new ResizeObserver((e) => {
				for (let t of e) {
					let e = t?.devicePixelContentBoxSize?.[0];
					if (e) {
						let t = this.#e;
						this.#e = [Math.max(e.inlineSize || this.width, 1), Math.max(e.blockSize || this.height, 1)], (t?.[0] != this.#e[0] || t?.[1] != this.#e[1]) && this.#o(this.#n);
					}
				}
			}).observe(this, { box: "device-pixel-content-box" }), this.#a(this.#t = this.dataset.src || this.#t);
		});
	}
	async $useImageAsSource(e, t) {
		t ||= this.#t;
		let n = e instanceof ImageBitmap ? e : await ai(e).catch(console.warn.bind(console));
		return n && t == this.#t && (this.image = n, this.#o(t)), e;
	}
	$renderPass(e) {
		let t = this, n = this.ctx, r = this.image;
		if (r && n && (e == this.#t || !e)) {
			e && (this.#n = e), this.width != this.#e[0] && (this.width = this.#e[0]), this.height != this.#e[1] && (this.height = this.#e[1]), this.style.aspectRatio = `${this.width || 1} / ${this.height || 1}`;
			let i = this.#i % 2 || 0, a = +(ni(r) <= ri(r)), o = Math.max(t[["height", "width"][i]] / (a ? ri(r) : ni(r)), t[["width", "height"][i]] / (a ? ni(r) : ri(r)));
			n.save(), n.clearRect(0, 0, t.width, t.height), ii(n, r, o, a, this.#i), n.drawImage(r, 0, 0, r.width * o, r.height * o), n.restore();
		}
	}
	#a(e) {
		let t = e || this.#t;
		return this.#t = t, fetch(e, {
			cache: "force-cache",
			mode: "same-origin",
			priority: "high"
		})?.then?.(async (e) => this.$useImageAsSource(await e.blob(), t)?.catch(console.warn.bind(console)))?.catch?.(console.warn.bind(console));
	}
	#o(e) {
		let t = this.ctx;
		this.image && t && (e == this.#t || !e) && ti?.shedule?.(si(this.$renderPass, this));
	}
} : class {
	constructor() {}
	$renderPass(e) {}
	$useImageAsSource(e, t) {
		return e;
	}
	ctx = null;
	image = null;
};
try {
	customElements.define("ui-canvas", ci, { extends: "canvas" });
} catch {}
//#endregion
//#region ../../projects/image.ts/src/canvas/Canvas-2.ts
var li = "rs-wallpaper-image", ui = "/assets/wallpaper.jpg", di = (e) => {
	let t = String(e || "").trim() || ui;
	try {
		localStorage.setItem(li, t);
	} catch {}
	document.querySelectorAll("[data-app-layer=\"canvas\"] canvas[is=\"ui-canvas\"]").forEach((e) => e.setAttribute("data-src", t));
}, fi = null;
function pi(e) {
	fi = typeof e == "function" ? e : null;
}
function mi() {
	return fi;
}
//#endregion
//#region ../../shells/window-frame/src/views/markdown-view-window.ts
var hi = "viewer", gi = new Set([
	"markdown",
	"markdown-view",
	"markdown-viewer",
	"reader",
	"env-viewer"
]);
function _i(e) {
	let t = String(e ?? "").trim().toLowerCase();
	t = t.replace(/^#/, "");
	let n = /^todo:\s*(.*)$/i.exec(t);
	return n && (t = String(n[1] ?? "").trim().toLowerCase()), t = t.replace(/\s+/g, ""), t ? t === "viewer" || gi.has(t) ? hi : t : "";
}
//#endregion
//#region ../home-view/src/ts/launcher-state.ts
var vi = [
	{
		view: "home",
		label: "Home",
		icon: "house-line"
	},
	{
		view: "viewer",
		label: "Markdown",
		icon: "article"
	},
	{
		view: "task",
		label: "Plan",
		icon: "calendar-dots"
	},
	{
		view: "event",
		label: "Events",
		icon: "calendar-star"
	},
	{
		view: "bonus",
		label: "Bonuses",
		icon: "ticket"
	},
	{
		view: "person",
		label: "Contacts",
		icon: "address-book"
	},
	{
		view: "explorer",
		label: "Explorer",
		icon: "books"
	},
	{
		view: "settings",
		label: "Settings",
		icon: "gear-six"
	}
], yi = "cw::workspace::speed-dial", bi = `${yi}::meta`, xi = (e) => {
	if (typeof structuredClone == "function") try {
		return structuredClone(S(e));
	} catch {}
	try {
		return JSON.parse(JSON.stringify(S(e)));
	} catch {
		return e;
	}
}, Si = () => typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `sd-${Date.now().toString(36)}-${Math.floor(Math.random() * 1e3)}`, Ci = [
	{
		id: "shortcut-docs",
		cell: y([0, 1]),
		icon: "book-open-text",
		label: "Docs",
		action: "open-link",
		meta: {
			href: "https://github.com/fest-live",
			description: "Project documentation"
		}
	},
	{
		id: "shortcut-roadmap",
		cell: y([1, 1]),
		icon: "signpost",
		label: "Roadmap",
		action: "open-link",
		meta: {
			href: "https://github.com/u2re-space/unite-2.man",
			description: "Manifest notes"
		}
	},
	{
		id: "shortcut-fest-live",
		cell: y([2, 1]),
		icon: "github-logo",
		label: "Fest Live",
		action: "open-link",
		meta: {
			href: "https://github.com/fest-live",
			description: "Fest Live Organization"
		}
	},
	{
		id: "shortcut-l2ne-dev",
		cell: y([3, 1]),
		icon: "user",
		label: "L2NE Dev",
		action: "open-link",
		meta: {
			href: "https://github.com/L2NE-dev",
			description: "L2NE Developer Profile"
		}
	},
	{
		id: "shortcut-u2re-space",
		cell: y([0, 2]),
		icon: "planet",
		label: "U2RE Space",
		action: "open-link",
		meta: {
			href: "https://github.com/u2re-space/",
			description: "U2RE Space Organization"
		}
	},
	{
		id: "shortcut-telegram",
		cell: y([1, 2]),
		icon: "telegram-logo",
		label: "Telegram",
		action: "open-link",
		meta: {
			href: "https://t.me/u2re_space",
			description: "U2RE Space Telegram"
		}
	}
], wi = [
	{
		id: "shortcut-explorer",
		cell: y([2, 0]),
		icon: "books",
		label: "Explorer",
		action: "open-view",
		meta: { view: "explorer" }
	},
	{
		id: "shortcut-settings",
		cell: y([3, 0]),
		icon: "gear-six",
		label: "Settings",
		action: "open-view",
		meta: { view: "settings" }
	},
	...Ci
], { records: Ti, metaEntries: Ei } = ((e) => {
	let t = [], n = [];
	return e.forEach((e) => {
		let { meta: r, ...i } = e;
		t.push(i);
		let a = {
			action: e.action,
			...r || {}
		};
		n.push([e.id, a]);
	}), {
		records: t,
		metaEntries: n
	};
})(wi), Di = [], Oi = (e) => e && Array.isArray(e) && e.length >= 2 ? y([Number(e[0]) || 0, Number(e[1]) || 0]) : y([0, 0]), ki = (e = {}) => ie(y({
	action: e.action || "open-view",
	view: e.view || "",
	href: e.href || "",
	description: e.description || "",
	entityType: e.entityType || "",
	tags: Array.isArray(e.tags) ? [...e.tags] : [],
	...e
})), Ai = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let [n, r] of e) t.set(n, ki(r));
	return t;
}, ji = (e) => e ? e instanceof Map ? Array.from(e.entries()) : Array.isArray(e) ? e.map((e) => e && typeof e == "object" && "id" in e ? [e.id, e.meta || e] : null).filter(Boolean) : typeof e == "object" ? Object.entries(e) : [] : [], Mi = (e) => {
	let t = {};
	return e?.forEach((e, n) => {
		t[n] = xi(e ?? {});
	}), t;
}, Ni = () => Ai(Ei), Pi = (e) => {
	let t = ji(e);
	return Ai(t.length ? t : Ei);
}, Fi = (e, t) => e && typeof e == "object" && "value" in e ? e.value ?? t : e ?? t, Ii = (e) => ({
	id: e.id,
	cell: y([e.cell?.[0] ?? 0, e.cell?.[1] ?? 0]),
	icon: Fi(e.icon, "sparkle"),
	label: Fi(e.label, "Shortcut"),
	action: e.action
}), Li = (e) => y({
	id: e.id || Si(),
	cell: y(Oi(e.cell)),
	icon: E(e.icon || "sparkle"),
	label: E(e.label || "Shortcut"),
	action: e.action || "open-view"
}), Ri = () => y(Ti.map(Li)), zi = (e) => y((Array.isArray(e) && e.length ? e : wi).map((e) => {
	let { meta: t, ...n } = e;
	return t ? Di.push([e.id, {
		action: e.action,
		...t
	}]) : Di.push([e.id, { action: e.action }]), n;
}).map(Li)), Bi = (e) => e.map(Ii), Vi = a(bi, Ni, Pi, Mi), Hi = a(yi, Ri, zi, Bi), Ui = () => Hi?.$save?.(), Wi = () => Vi?.$save?.(), Gi = (e) => e ? Vi?.get?.(e) ?? null : null, Ki = (e, t = {}) => {
	let n = Vi?.get?.(e);
	return n || (n = ki(t), Vi?.set?.(e, n), Wi()), t?.action && n.action !== t.action && (n.action = t.action), n;
}, qi = (e) => {
	if (!e) return !1;
	let t = e.action || "open-view", n = Ki(e.id, { action: t });
	return n.action === t ? !1 : (n.action = t, !0);
};
Di.length && (Di.forEach(([e, t]) => {
	let n = Ki(e, t);
	Object.assign(n, t);
}), Di.length = 0, Wi()), (() => {
	let e = !1;
	Hi?.forEach?.((t) => {
		qi(t) && (e = !0);
	}), e && Wi();
})(), (() => {
	let e = !1;
	Ci.forEach((t) => {
		if (Hi?.find?.((e) => e?.id === t.id)) {
			let n = Gi(t.id);
			if (t.meta && n) {
				let r = String(t.meta.href ?? "");
				r !== String(n.href ?? "") && (n.href = r, e = !0);
				let i = String(t.meta.description ?? "");
				i !== String(n.description ?? "") && (n.description = i, e = !0);
			} else t.meta && !n && (Ki(t.id, t.meta), e = !0);
		} else {
			let n = Li(t);
			t.label && n.label && typeof n.label == "object" && "value" in n.label && (n.label.value = t.label), t.icon && n.icon && typeof n.icon == "object" && "value" in n.icon && (n.icon.value = t.icon), Hi.push(y(n)), Ki(n.id, t.meta), e = !0;
		}
	}), e && (Ui(), Wi());
})(), a("cw::workspace::wallpaper", () => y({
	src: "/assets/wallpaper.jpg",
	opacity: 1,
	blur: 0
}), (e) => y(e || {
	src: "/assets/wallpaper.jpg",
	opacity: 1,
	blur: 0
}), (e) => ({ ...e }));
var X = a("cw::workspace::grid-layout", () => y({
	columns: 4,
	rows: 8,
	shape: "square"
}), (e) => y(e || {
	columns: 4,
	rows: 8,
	shape: "square"
}), (e) => ({ ...e })), Ji = () => X?.$save?.(), Yi = (e) => {
	let t = e?.grid || X, n = t?.columns ?? 4, r = t?.rows ?? 8, i = t?.shape ?? "square";
	X && (X.columns = n, X.rows = r, X.shape = i, Ji()), !(typeof document > "u") && (document.querySelectorAll(".speed-dial-grid").forEach((e) => {
		let t = e;
		t.dataset.gridColumns = String(n), t.dataset.gridRows = String(r), t.dataset.gridShape = i;
	}), document.documentElement.dataset.gridColumns = String(n), document.documentElement.dataset.gridRows = String(r), document.documentElement.dataset.gridShape = i);
};
if (typeof globalThis < "u" && typeof document < "u") {
	let e = () => Yi();
	typeof requestAnimationFrame == "function" ? requestAnimationFrame(e) : queueMicrotask(e);
}
//#endregion
//#region ../home-view/src/ts/action-registry.ts
function Xi(e) {
	let t = String(e ?? "").trim();
	if (!t) return "";
	let n = t.toLowerCase().replace(/^#/, ""), r = vi.find((e) => String(e.view).toLowerCase() === n || String(e.label).trim().toLowerCase() === n);
	return r ? String(r.view) : _i(t) || t.replace(/^#/, "").trim();
}
//#endregion
//#region ../home-view/src/ts/OrientDesktop.ts
var Zi = null, Qi = () => {
	Zi ||= h(he);
}, $i = 280, ea = "cw-speed-dial-item", ta = "cw-speed-dial-registry", na = /(https?:\/\/[^\s<>"']+)/i, ra = [{
	value: "open-view",
	label: "Open view"
}, {
	value: "open-link",
	label: "Open link"
}], Z = (e) => {
	let t = String(e || "").toLowerCase();
	return t === "circle" || t === "square" || t === "squircle" ? t : "squircle";
}, ia = (e) => e.length ? new Set(e.map((e) => Z(e.shape))).size === 1 ? Z(e[0].shape) : "mixed" : "squircle", Q = {
	columns: 4,
	rows: 8,
	items: [
		{
			id: "viewer",
			label: "Markdown",
			icon: "article",
			viewId: "viewer",
			cell: [0, 0],
			action: "open-view",
			shape: "squircle"
		},
		{
			id: "explorer",
			label: "Explorer",
			icon: "books",
			viewId: "explorer",
			cell: [1, 0],
			action: "open-view",
			shape: "squircle"
		},
		{
			id: "settings",
			label: "Settings",
			icon: "gear-six",
			viewId: "settings",
			cell: [2, 0],
			action: "open-view",
			shape: "squircle"
		},
		{
			id: "airpad",
			label: "AirPad",
			icon: "paper-plane-tilt",
			viewId: "airpad",
			cell: [3, 0],
			action: "open-view",
			shape: "squircle"
		}
	]
}, aa = new Set(Q.items.map((e) => e.id)), oa = (e = "item") => typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `${e}-${Date.now().toString(36)}-${Math.floor(Math.random() * 1e4)}`, sa = (e, t, n) => [Math.max(0, Math.min(t - 1, Math.round(e[0]))), Math.max(0, Math.min(n - 1, Math.round(e[1])))], ca = (e) => `${e[0]}:${e[1]}`, la = (e, t, n, r) => {
	let i = sa(e, n, r);
	if (!t.has(ca(i))) return i;
	let a = Math.max(n, r);
	for (let e = 1; e <= a; e += 1) for (let a = Math.max(0, i[1] - e); a <= Math.min(r - 1, i[1] + e); a += 1) for (let r = Math.max(0, i[0] - e); r <= Math.min(n - 1, i[0] + e); r += 1) {
		if (!(Math.abs(r - i[0]) === e || Math.abs(a - i[1]) === e)) continue;
		let n = [r, a];
		if (!t.has(ca(n))) return n;
	}
	return i;
}, ua = (e, t, n) => {
	let r = /* @__PURE__ */ new Set();
	for (let i of e) {
		let e = la(i.cell, r, t, n);
		i.cell = e, r.add(ca(e));
	}
	return e;
}, da = (e, t, n) => {
	let r = String(e?.id || "").trim();
	if (!r || r === "home") return null;
	let i = String(e?.action || (e?.href ? "open-link" : "open-view")), a = {
		id: r,
		label: String(e?.label || "Item"),
		icon: String(e?.icon || (i === "open-link" ? "link" : "sparkle")),
		iconSrc: w(e?.iconSrc, e?.href, i),
		viewId: String(e?.viewId || "home"),
		cell: sa([Number(e?.cell?.[0] || 0), Number(e?.cell?.[1] || 0)], t, n),
		action: i === "open-link" ? "open-link" : "open-view",
		href: e?.href ? String(e.href) : "",
		shape: Z(e?.shape)
	};
	return a.action === "open-link" && (a.viewId = "home"), a;
}, fa = () => {
	try {
		let e = g();
		if (!e) return {
			...Q,
			items: [...Q.items]
		};
		let t = C(e);
		if (!t) return {
			...Q,
			items: [...Q.items]
		};
		let n = Math.max(4, Math.min(8, Number(t.columns || Q.columns))), r = Math.max(6, Math.min(12, Number(t.rows || Q.rows))), i = [...Q.items], a = ua((Array.isArray(t.items) && t.items.length ? t.items : i).map((e) => da(e, n, r)).filter((e) => !!e), n, r);
		return {
			columns: n,
			rows: r,
			items: a.length ? a : ua(i.map((e) => da({
				...e,
				cell: [e.cell[0], e.cell[1]]
			}, n, r)).filter((e) => !!e), n, r)
		};
	} catch {
		return {
			...Q,
			items: [...Q.items]
		};
	}
}, $ = (e, t) => {
	e.style.setProperty("--cell-x", String(t[0])), e.style.setProperty("--cell-y", String(t[1])), e.style.setProperty("--p-cell-x", String(t[0])), e.style.setProperty("--p-cell-y", String(t[1]));
}, pa = (e) => {
	let t = Array.from(e.clipboardData?.items || []);
	for (let e of t) if (e.type?.startsWith("image/")) {
		let t = e.getAsFile();
		if (t) return t;
	}
	return null;
}, ma = (e) => Array.from(e.dataTransfer?.files || []).find((e) => e.type?.startsWith("image/")) || null, ha = (e) => new Promise((t, n) => {
	let r = new FileReader();
	r.onload = () => t(String(r.result || "")), r.onerror = () => n(r.error || /* @__PURE__ */ Error("Failed to read image")), r.readAsDataURL(e);
}), ga = async (e) => {
	if (!e?.type?.startsWith("image/")) return !1;
	let t = await ha(e);
	return t ? (di(t), !0) : !1;
}, _a = (e) => {
	let t = String(e || "").trim();
	if (!t) return null;
	let n = (() => {
		try {
			return new URL(t);
		} catch {
			return null;
		}
	})();
	if (n && /^https?:$/i.test(n.protocol)) return n;
	let r = t.match(na);
	if (!r?.[1]) return null;
	try {
		let e = new URL(r[1]);
		return /^https?:$/i.test(e.protocol) ? e : null;
	} catch {
		return null;
	}
}, va = (e) => {
	let t = String(e || "").trim();
	if (!t) return null;
	try {
		let e = new DOMParser().parseFromString(t, "text/html").querySelector("a[href]")?.getAttribute("href") || "";
		if (!e) return null;
		let n = new URL(e, window.location.href);
		return /^https?:$/i.test(n.protocol) ? n : null;
	} catch {
		return null;
	}
}, ya = (e, t, n = "") => {
	let r = String(n || "").trim() || e.hostname.replace(/^www\./, "") || "Link";
	return {
		id: oa("link"),
		label: r,
		icon: "link",
		iconSrc: te(e.hostname),
		viewId: "home",
		cell: t,
		action: "open-link",
		href: e.href,
		shape: "squircle"
	};
}, ba = (e, t) => {
	let n = _a(e);
	return n ? ya(n, t) : null;
}, xa = (e, t, n, r) => {
	if (!e) return [];
	let i = e;
	return (Array.isArray(i?.items) ? i.items : Array.isArray(e) ? e : i?.item ? [i.item] : [e]).map((e, i) => da({
		...e || {},
		id: String(e?.id || oa("import")),
		cell: e?.cell ?? [r[0], r[1] + i]
	}, t, n)).filter((e) => !!e);
}, Sa = (e, t, n, r, i) => {
	let a = String(e || "").trim(), o = String(t || "").trim();
	if (a.startsWith("{") || a.startsWith("[")) try {
		let e = JSON.parse(a);
		if (e?.k === "cw-sdi") {
			let t = b(e);
			if (t?.id) return xa({ items: [t] }, n, r, i);
		}
		if (e?.kind === ea || e?.kind === ta || e?.items || e?.item || Array.isArray(e)) return xa(e, n, r, i);
	} catch {}
	let s = va(o);
	if (s) return [ya(s, i, (() => {
		try {
			let e = new DOMParser().parseFromString(o, "text/html").querySelector("a[href]")?.textContent || "";
			return String(e || "").trim();
		} catch {
			return "";
		}
	})())];
	let c = ba(a, i);
	return c ? [c] : [];
}, Ca = (e) => e.map((e) => ({
	...e,
	iconSrc: d(e.iconSrc || "", e.action, e.href)
})), wa = (e) => JSON.stringify({
	kind: ta,
	version: 1,
	columns: e.columns,
	rows: e.rows,
	items: Ca(e.items)
}, null, 2), Ta = (e, t) => {
	let n = new Blob([t], { type: "application/json" }), r = URL.createObjectURL(n), i = document.createElement("a");
	i.href = r, i.download = e, i.click(), setTimeout(() => URL.revokeObjectURL(r), 1e3);
}, Ea = (e) => {
	if (e.action === "open-link") {
		if (!e.href) return;
		window.open(e.href, "_blank", "noopener,noreferrer");
		return;
	}
	let t = Oa(e.viewId, hi), n = mi();
	if (n) {
		n(t, {
			source: "home",
			itemId: e.id
		});
		return;
	}
	console.warn("[OrientDesktop] No view opener registered; using hash fallback for:", t), _(`#${t}`);
}, Da = (e) => {
	let t = String(e || "").trim();
	return t ? t.toLowerCase() === "viewer" ? "Markdown" : t.charAt(0).toUpperCase() + t.slice(1) : "View";
}, Oa = (e, t) => {
	let n = String(e ?? "").trim();
	return n && Xi(n) || t;
}, ka = [
	hi,
	"explorer",
	"settings",
	"airpad",
	"workcenter",
	"history",
	"editor"
].map((e) => ({
	value: e,
	label: Da(e)
})), Aa = (t) => {
	if (!t || t.dataset.desktopMounted === "true") return;
	t.dataset.desktopMounted = "true", Qi();
	let r = fa(), a = new Map(r.items.map((e) => [e.id, e])), o = r.items.map((e) => e.id), s = null, c = document.createElement("div");
	c.className = "speed-dial-root app-oriented-desktop ui-orientbox", c.setAttribute("data-mixin", "ui-orientbox"), c.style.position = "absolute", c.style.inset = "0", c.style.pointerEvents = "auto", c.style.background = "transparent", c.style.display = "grid", c.tabIndex = 0;
	let l = () => {
		let e = n?.[i()] ?? 0;
		c.style.setProperty("--orient", String(e));
	};
	l(), screen.orientation?.addEventListener?.("change", l), window.addEventListener("resize", l);
	let u = (e) => {
		e.style.setProperty("--layout-c", String(r.columns)), e.style.setProperty("--layout-r", String(r.rows));
	}, d = document.createElement("div");
	d.className = "speed-dial-grid speed-dial-grid--labels ui-launcher-grid app-oriented-desktop__grid app-oriented-desktop__grid--labels", d.dataset.gridLayer = "icons", d.setAttribute("data-grid-columns", String(r.columns)), d.setAttribute("data-grid-rows", String(r.rows)), u(d), d.dataset.dialStack = "shapes";
	let p = document.createElement("div");
	p.className = "speed-dial-grid speed-dial-grid--icons ui-launcher-grid app-oriented-desktop__grid app-oriented-desktop__grid--icons", p.dataset.gridLayer = "labels", p.setAttribute("data-grid-columns", String(r.columns)), p.setAttribute("data-grid-rows", String(r.rows)), u(p), p.dataset.dialStack = "text", c.append(d, p), t.appendChild(c);
	let h = () => {
		let e = ia(r.items);
		d.setAttribute("data-grid-shape", e), p.setAttribute("data-grid-shape", e);
	};
	h();
	let g = () => {
		s !== null && (clearTimeout(s), s = null), ee(r.columns, r.rows, Ca(r.items)), h();
	}, _ = () => {
		s !== null && clearTimeout(s), s = setTimeout(() => {
			s = null, v(r.columns, r.rows, Ca(r.items));
		}, 400);
	}, y = 0, b = /* @__PURE__ */ new Map(), x = /* @__PURE__ */ new Map(), S = (e) => String(e || "").replace(/[&<>"']/g, (e) => ({
		"&": "&amp;",
		"<": "&lt;",
		">": "&gt;",
		"\"": "&quot;",
		"'": "&#39;"
	})[e] || e), C = (e = "") => {
		let t = /* @__PURE__ */ new Set();
		for (let n of r.items) e && n.id === e || t.add(ca(n.cell));
		return t;
	}, w = (e, t) => {
		e.cell = sa(t, r.columns, r.rows);
		let n = b.get(e.id), i = x.get(e.id);
		n && $(n, e.cell), i && $(i, e.cell);
	}, T = (e, t, n = "") => {
		let i = la(t, C(n), r.columns, r.rows);
		return w(e, i), i;
	}, E = (e, t) => {
		let n = 0;
		for (let i = 0; i < e.length; i += 1) {
			let s = e[i];
			if (!s) continue;
			let c = da({
				...s,
				id: s.id || oa("item"),
				cell: s.cell || [t[0], t[1] + i]
			}, r.columns, r.rows);
			!c || a.has(c.id) || (c.cell = la(c.cell, C(), r.columns, r.rows), r.items.push(c), a.set(c.id, c), o.push(c.id), ce(c), n += 1);
		}
		return n > 0 && g(), n;
	}, D = (t) => {
		let n = b.get(t.id), r = x.get(t.id);
		if (r) {
			let e = r.querySelector(".ui-ws-item-label span");
			e && (e.textContent = t.label || "Item"), $(r, t.cell);
		}
		if (n) {
			let r = n.querySelector(".ui-ws-item-icon");
			if (r) {
				r.dataset.shape = Z(t.shape);
				let n = r.querySelector(".ui-ws-item-icon-image"), i = r.querySelector("ui-icon"), a = e(t.iconSrc || "");
				if (a) if (i?.remove(), n) n.src = a;
				else {
					let e = document.createElement("img");
					e.className = "ui-ws-item-icon-image", e.alt = "", e.loading = "lazy", e.decoding = "async", e.referrerPolicy = "no-referrer", e.src = a, e.addEventListener("error", () => e.remove()), r.insertBefore(e, r.firstChild);
				}
				else n && n.remove(), i || (i = document.createElement("ui-icon"), r.appendChild(i)), i.setAttribute("icon", t.icon || "sparkle");
			}
			$(n, t.cell);
		}
	}, ne = (e, t) => f(d, [e, t], {
		layout: {
			columns: r.columns,
			rows: r.rows
		},
		items: a,
		list: o,
		item: {
			id: "__menu__",
			cell: [0, 0]
		}
	}, "round"), O = async (e) => {
		try {
			if (navigator.clipboard?.read) {
				let t = await navigator.clipboard.read();
				for (let n of t) {
					if (n.types.includes("image/png") || n.types.includes("image/jpeg") || n.types.includes("image/webp")) {
						let e = n.types.find((e) => e.startsWith("image/"));
						if (!e) continue;
						let t = await n.getType(e);
						if (await ga(new File([t], "wallpaper", { type: t.type }))) return !0;
					}
					let t = n.types.includes("text/plain") ? "text/plain" : "", i = n.types.includes("text/html") ? "text/html" : "", a = Sa(t ? await (await n.getType(t)).text() : "", i ? await (await n.getType(i)).text() : "", r.columns, r.rows, e);
					if (a.length) return E(a, e) > 0;
				}
			}
			return E(Sa(await navigator.clipboard.readText(), "", r.columns, r.rows, e), e) > 0;
		} catch {
			return !1;
		}
	}, re = (t) => {
		let n = document.createElement("div");
		n.className = "ui-ws-item", n.dataset.desktopId = t.id, n.dataset.layer = "icons", n.setAttribute("draggable", "false"), $(n, t.cell), u(n);
		let r = document.createElement("div");
		r.className = "ui-ws-item-icon shaped", r.dataset.shape = Z(t.shape);
		let i = e(t.iconSrc || "");
		if (i) {
			let e = document.createElement("img");
			e.className = "ui-ws-item-icon-image", e.alt = "", e.loading = "lazy", e.decoding = "async", e.referrerPolicy = "no-referrer", e.src = i, e.addEventListener("error", () => e.remove()), r.appendChild(e);
		} else {
			let e = document.createElement("ui-icon");
			e.setAttribute("icon", t.icon || "sparkle"), r.appendChild(e);
		}
		return n.appendChild(r), n;
	}, ie = (e) => {
		let t = document.createElement("div");
		return t.className = "ui-ws-item", t.dataset.desktopId = e.id, t.dataset.layer = "labels", t.style.pointerEvents = "none", t.style.background = "transparent", $(t, e.cell), u(t), t.innerHTML = `<div class="ui-ws-item-label"><span>${S(e.label)}</span></div>`, t;
	}, se = (e) => {
		let t = r.items.findIndex((t) => t.id === e);
		if (t === -1) return;
		c.dataset.dialDraggingId === e && (c.dataset.dialDraggingId = ""), r.items.splice(t, 1), a.delete(e);
		let n = o.indexOf(e);
		n >= 0 && o.splice(n, 1), b.get(e)?.remove(), x.get(e)?.remove(), b.delete(e), x.delete(e), ua(r.items, r.columns, r.rows), g();
	}, ce = (e) => {
		let t = re(e), n = ie(e);
		b.set(e.id, t), x.set(e.id, n), d.appendChild(t), p.appendChild(n);
		let i = t.querySelector(".ui-ws-item-icon");
		i && (i.style.pointerEvents = "auto", i.style.touchAction = "none"), ue(t, {
			layout: [r.columns, r.rows],
			items: a,
			list: o,
			item: e,
			immediateDragStyles: !0
		}), t.addEventListener("m-dragstart", () => {
			oe(), c.dataset.dialDraggingId = e.id, t.dataset.interactionState = "onGrab", t.dataset.gridCoordinateState = "source";
			let n = x.get(e.id);
			n && (n.dataset.interactionState = "onLabelDocked", n.dataset.gridCoordinateState = "source", $(n, e.cell), n.style.setProperty("--drag-x", "0"), n.style.setProperty("--drag-y", "0"), n.style.setProperty("--cs-drag-x", "0px"), n.style.setProperty("--cs-drag-y", "0px"));
		}), t.addEventListener("m-dragging", () => {
			_(), t.dataset.interactionState = "onMoving", t.dataset.gridCoordinateState = "intermediate";
		}), t.addEventListener("m-dragend", () => {
			y = performance.now() + $i, t.dataset.interactionState = "onRelax", t.dataset.gridCoordinateState = "destination";
			let n = x.get(e.id);
			n && (n.dataset.interactionState = "onLabelDocked", n.dataset.gridCoordinateState = "source");
		}), t.addEventListener("m-dragsettled", (n) => {
			let r = n?.detail?.cell || null, i = T(e, r ? [r[0], r[1]] : [e.cell[0], e.cell[1]], e.id), a = x.get(e.id);
			a && (a.dataset.interactionState = "onPlace", a.dataset.gridCoordinateState = "destination", a.style.setProperty("--drag-x", "0"), a.style.setProperty("--drag-y", "0"), a.style.setProperty("--cs-drag-x", "0px"), a.style.setProperty("--cs-drag-y", "0px"), $(a, i)), t.dataset.interactionState = "onPlace", t.dataset.gridCoordinateState = "destination", t.style.setProperty("--drag-x", "0"), t.style.setProperty("--drag-y", "0"), t.style.setProperty("--cs-drag-x", "0px"), t.style.setProperty("--cs-drag-y", "0px"), $(t, i), g(), c.dataset.dialDraggingId = "", setTimeout(() => {
				t.dataset.interactionState = "onHover", t.dataset.gridCoordinateState = "source";
				let n = x.get(e.id);
				n && (n.dataset.interactionState = "onHover", n.dataset.gridCoordinateState = "source");
			}, 280);
		}), (i ?? t).addEventListener("click", (t) => {
			t.preventDefault(), t.stopPropagation(), !(performance.now() < y) && Ea(e);
		});
	}, le = async (e) => O(e), de = (e, t) => {
		let n = !e, r = t?.seed || {}, i = t?.suggestedCell || [0, 0], o = e || {
			id: oa("item"),
			label: r.label || "New shortcut",
			icon: r.icon || "sparkle",
			iconSrc: "",
			viewId: Oa(r.viewId, hi),
			cell: i,
			action: r.action || "open-view",
			href: r.href || "",
			shape: Z(r.shape)
		};
		me({
			mode: n ? "create" : "edit",
			registerForBackNavigation: !0,
			initial: {
				label: o.label || "Item",
				icon: o.icon || "sparkle",
				action: o.action || "open-view",
				view: o.viewId || "",
				href: o.href || "",
				description: String(r.description || ""),
				shape: Z(o.shape)
			},
			actionOptions: ra,
			viewOptions: ka,
			onSave: (e) => {
				let t = String(e.action || "open-view"), r = String(e.href || "").trim();
				if (o.label = String(e.label || "Item").trim() || "Item", o.icon = String(e.icon || "sparkle").trim() || "sparkle", o.action = t, o.href = t === "open-link" ? r : "", o.viewId = t === "open-link" ? "home" : Oa(e.view, hi), o.shape = Z(e.shape), t === "open-link" && r) try {
					let e = new URL(r, window.location.href);
					o.iconSrc = /^https?:$/i.test(e.protocol) ? te(e.hostname) : "";
				} catch {
					o.iconSrc = "";
				}
				else o.iconSrc = "";
				if (n) E([o], i);
				else {
					let e = a.get(o.id);
					e && (Object.assign(e, o), a.set(e.id, e), D(e), g());
				}
			},
			onDelete: n ? void 0 : () => {
				se(o.id);
			}
		});
	}, fe = (e, t, n) => {
		let i = t ? [
			{
				id: "open",
				label: "Open",
				icon: t.action === "open-link" ? "arrow-square-out" : "play",
				action: () => Ea(t)
			},
			{
				id: "actions",
				label: "Actions",
				icon: "dots-three",
				action: () => {},
				children: [...t.action === "open-link" && t.href ? [{
					id: "copy-link",
					label: "Copy link",
					icon: "link",
					action: async () => {
						try {
							await navigator.clipboard.writeText(t.href || "");
						} catch {}
					}
				}, {
					id: "open-link-new-window",
					label: "Open link in new tab",
					icon: "arrow-square-out",
					action: () => {
						t.href && window.open(t.href, "_blank", "noopener,noreferrer");
					}
				}] : [], {
					id: "copy-item-json",
					label: "Copy item (compact JSON)",
					icon: "clipboard-text",
					action: async () => {
						try {
							await navigator.clipboard.writeText(m(t));
						} catch {}
					}
				}]
			},
			{
				id: "manage",
				label: "Manage",
				icon: "wrench",
				action: () => {},
				children: [{
					id: "edit",
					label: "Edit Properties",
					icon: "pencil-simple-line",
					action: () => de(t, { suggestedCell: t.cell })
				}, {
					id: "remove",
					label: "Remove",
					icon: "trash",
					danger: !0,
					disabled: aa.has(t.id),
					action: () => se(t.id)
				}]
			}
		] : [
			{
				id: "new",
				label: "New",
				icon: "plus",
				action: () => {},
				children: [
					{
						id: "create-shortcut",
						label: "Create shortcut",
						icon: "plus",
						action: () => de(void 0, { suggestedCell: n })
					},
					{
						id: "paste-link",
						label: "Paste shortcut",
						icon: "clipboard",
						action: async () => {
							await le(n);
						}
					},
					{
						id: "create-link-shortcut",
						label: "Create link shortcut",
						icon: "link",
						action: () => {
							de(void 0, {
								suggestedCell: n,
								seed: {
									action: "open-link",
									label: "New link",
									icon: "link",
									href: "",
									description: ""
								}
							});
						}
					}
				]
			},
			{
				id: "registry",
				label: "Registry",
				icon: "database",
				action: () => {},
				children: [
					{
						id: "copy-registry-json",
						label: "Copy registry JSON",
						icon: "clipboard-text",
						action: async () => {
							try {
								await navigator.clipboard.writeText(wa(r));
							} catch {}
						}
					},
					{
						id: "export-registry-json",
						label: "Export registry",
						icon: "download-simple",
						action: () => {
							let e = /* @__PURE__ */ new Date();
							Ta(`cw-home-registry-${`${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, "0")}-${String(e.getDate()).padStart(2, "0")}`}.json`, wa(r));
						}
					},
					{
						id: "import-registry-json",
						label: "Import from clipboard",
						icon: "upload-simple",
						action: async () => {
							await O(n);
						}
					}
				]
			},
			{
				id: "open",
				label: "Open",
				icon: "squares-four",
				action: () => {},
				children: [{
					id: "open-explorer",
					label: "Explorer",
					icon: "books",
					action: () => {}
				}, {
					id: "open-settings",
					label: "Settings",
					icon: "gear-six",
					action: () => {}
				}]
			},
			{
				id: "wallpaper",
				label: "Wallpaper",
				icon: "image",
				action: () => {},
				children: [{
					id: "change-wallpaper",
					label: "Choose image",
					icon: "image",
					action: async () => {
						let e = document.createElement("input");
						e.type = "file", e.accept = "image/*", e.onchange = async () => {
							let t = e.files?.[0];
							t && await ga(t);
						}, e.click();
					}
				}]
			}
		];
		ae({
			x: e.clientX,
			y: e.clientY,
			items: i,
			compact: !0
		});
	}, pe = async (e) => {
		let t = pa(e);
		if (t) {
			e.preventDefault(), e.stopPropagation(), await ga(t);
			return;
		}
		let n = Sa(e.clipboardData?.getData("text/plain") || "", e.clipboardData?.getData("text/html") || "", r.columns, r.rows, [0, 0]);
		n.length && (e.preventDefault(), e.stopPropagation(), E(n, [0, 0]));
	};
	c.addEventListener("pointerdown", () => c.focus()), c.addEventListener("dragover", (e) => {
		e.preventDefault();
	}), c.addEventListener("drop", async (e) => {
		let t = ma(e);
		if (t) {
			e.preventDefault(), e.stopPropagation(), await ga(t);
			return;
		}
		let n = e.dataTransfer?.getData("text/plain") || "", i = e.dataTransfer?.getData("text/html") || "", a = Sa([e.dataTransfer?.getData("text/uri-list") || "", n].filter(Boolean).join("\n").trim(), i, r.columns, r.rows, [0, 0]);
		if (!a.length) {
			let t = Array.from(e.dataTransfer?.files || []).find((e) => e.type === "text/plain" || e.type === "text/html");
			if (t) {
				let e = await t.text();
				a = Sa(e, t.type === "text/html" ? e : "", r.columns, r.rows, [0, 0]);
			}
		}
		a.length && (e.preventDefault(), e.stopPropagation(), E(a, [0, 0]));
	}), c.addEventListener("paste", (e) => {
		pe(e);
	}), c.addEventListener("contextmenu", (e) => {
		e.preventDefault();
		let t = (e.target?.closest?.(".ui-ws-item[data-desktop-id]"))?.dataset.desktopId || "";
		fe(e, t && a.get(t) || null, ne(e.clientX, e.clientY));
	});
	for (let e of r.items) ce(e);
}, ja = class {
	id = "home";
	name = "Home";
	icon = "house";
	options;
	shellContext;
	element = null;
	lifecycle = { onUnmount: () => {
		pi(null), this.element = null;
	} };
	constructor(e = {}) {
		this.options = e, this.shellContext = e.shellContext;
	}
	getToolbar() {
		throw Error("Method not implemented.");
	}
	canHandleMessage(e) {
		throw Error("Method not implemented.");
	}
	handleMessage(e) {
		throw Error("Method not implemented.");
	}
	shellNavigateHydrate(e, t) {
		throw Error("Method not implemented.");
	}
	accessKey;
	accessKeyLabel;
	autocapitalize;
	autocorrect;
	dir;
	draggable;
	hidden;
	inert;
	innerText;
	lang;
	offsetHeight;
	offsetLeft;
	offsetParent;
	offsetTop;
	offsetWidth;
	outerText;
	popover;
	spellcheck;
	title;
	translate;
	writingSuggestions;
	attachInternals() {
		throw Error("Method not implemented.");
	}
	click() {
		throw Error("Method not implemented.");
	}
	hidePopover() {
		throw Error("Method not implemented.");
	}
	showPopover() {
		throw Error("Method not implemented.");
	}
	togglePopover(e) {
		throw Error("Method not implemented.");
	}
	addEventListener(e, t, n) {
		throw Error("Method not implemented.");
	}
	removeEventListener(e, t, n) {
		throw Error("Method not implemented.");
	}
	attributes;
	get classList() {
		throw Error("Method not implemented.");
	}
	set classList(e) {
		throw Error("Method not implemented.");
	}
	className;
	clientHeight;
	clientLeft;
	clientTop;
	clientWidth;
	currentCSSZoom;
	innerHTML;
	localName;
	namespaceURI;
	onfullscreenchange;
	onfullscreenerror;
	outerHTML;
	ownerDocument;
	get part() {
		throw Error("Method not implemented.");
	}
	set part(e) {
		throw Error("Method not implemented.");
	}
	prefix;
	scrollHeight;
	scrollLeft;
	scrollTop;
	scrollWidth;
	shadowRoot;
	slot;
	tagName;
	attachShadow(e) {
		throw Error("Method not implemented.");
	}
	checkVisibility(e) {
		throw Error("Method not implemented.");
	}
	closest(e) {
		throw Error("Method not implemented.");
	}
	computedStyleMap() {
		throw Error("Method not implemented.");
	}
	getAttribute(e) {
		throw Error("Method not implemented.");
	}
	getAttributeNS(e, t) {
		throw Error("Method not implemented.");
	}
	getAttributeNames() {
		throw Error("Method not implemented.");
	}
	getAttributeNode(e) {
		throw Error("Method not implemented.");
	}
	getAttributeNodeNS(e, t) {
		throw Error("Method not implemented.");
	}
	getBoundingClientRect() {
		throw Error("Method not implemented.");
	}
	getClientRects() {
		throw Error("Method not implemented.");
	}
	getElementsByClassName(e) {
		throw Error("Method not implemented.");
	}
	getElementsByTagName(e) {
		throw Error("Method not implemented.");
	}
	getElementsByTagNameNS(e, t) {
		throw Error("Method not implemented.");
	}
	getHTML(e) {
		throw Error("Method not implemented.");
	}
	hasAttribute(e) {
		throw Error("Method not implemented.");
	}
	hasAttributeNS(e, t) {
		throw Error("Method not implemented.");
	}
	hasAttributes() {
		throw Error("Method not implemented.");
	}
	hasPointerCapture(e) {
		throw Error("Method not implemented.");
	}
	insertAdjacentElement(e, t) {
		throw Error("Method not implemented.");
	}
	insertAdjacentHTML(e, t) {
		throw Error("Method not implemented.");
	}
	insertAdjacentText(e, t) {
		throw Error("Method not implemented.");
	}
	matches(e) {
		throw Error("Method not implemented.");
	}
	releasePointerCapture(e) {
		throw Error("Method not implemented.");
	}
	removeAttribute(e) {
		throw Error("Method not implemented.");
	}
	removeAttributeNS(e, t) {
		throw Error("Method not implemented.");
	}
	removeAttributeNode(e) {
		throw Error("Method not implemented.");
	}
	requestFullscreen(e) {
		throw Error("Method not implemented.");
	}
	requestPointerLock(e) {
		throw Error("Method not implemented.");
	}
	scroll(e, t) {
		throw Error("Method not implemented.");
	}
	scrollBy(e, t) {
		throw Error("Method not implemented.");
	}
	scrollIntoView(e) {
		throw Error("Method not implemented.");
	}
	scrollTo(e, t) {
		throw Error("Method not implemented.");
	}
	setAttribute(e, t) {
		throw Error("Method not implemented.");
	}
	setAttributeNS(e, t, n) {
		throw Error("Method not implemented.");
	}
	setAttributeNode(e) {
		throw Error("Method not implemented.");
	}
	setAttributeNodeNS(e) {
		throw Error("Method not implemented.");
	}
	setHTMLUnsafe(e) {
		throw Error("Method not implemented.");
	}
	setPointerCapture(e) {
		throw Error("Method not implemented.");
	}
	toggleAttribute(e, t) {
		throw Error("Method not implemented.");
	}
	webkitMatchesSelector(e) {
		throw Error("Method not implemented.");
	}
	get textContent() {
		throw Error("Method not implemented.");
	}
	set textContent(e) {
		throw Error("Method not implemented.");
	}
	baseURI;
	childNodes;
	firstChild;
	isConnected;
	lastChild;
	nextSibling;
	nodeName;
	nodeType;
	nodeValue;
	parentElement;
	parentNode;
	previousSibling;
	appendChild(e) {
		throw Error("Method not implemented.");
	}
	cloneNode(e) {
		throw Error("Method not implemented.");
	}
	compareDocumentPosition(e) {
		throw Error("Method not implemented.");
	}
	contains(e) {
		throw Error("Method not implemented.");
	}
	getRootNode(e) {
		throw Error("Method not implemented.");
	}
	hasChildNodes() {
		throw Error("Method not implemented.");
	}
	insertBefore(e, t) {
		throw Error("Method not implemented.");
	}
	isDefaultNamespace(e) {
		throw Error("Method not implemented.");
	}
	isEqualNode(e) {
		throw Error("Method not implemented.");
	}
	isSameNode(e) {
		throw Error("Method not implemented.");
	}
	lookupNamespaceURI(e) {
		throw Error("Method not implemented.");
	}
	lookupPrefix(e) {
		throw Error("Method not implemented.");
	}
	normalize() {
		throw Error("Method not implemented.");
	}
	removeChild(e) {
		throw Error("Method not implemented.");
	}
	replaceChild(e, t) {
		throw Error("Method not implemented.");
	}
	ELEMENT_NODE;
	ATTRIBUTE_NODE;
	TEXT_NODE;
	CDATA_SECTION_NODE;
	ENTITY_REFERENCE_NODE;
	ENTITY_NODE;
	PROCESSING_INSTRUCTION_NODE;
	COMMENT_NODE;
	DOCUMENT_NODE;
	DOCUMENT_TYPE_NODE;
	DOCUMENT_FRAGMENT_NODE;
	NOTATION_NODE;
	DOCUMENT_POSITION_DISCONNECTED;
	DOCUMENT_POSITION_PRECEDING;
	DOCUMENT_POSITION_FOLLOWING;
	DOCUMENT_POSITION_CONTAINS;
	DOCUMENT_POSITION_CONTAINED_BY;
	DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
	dispatchEvent(e) {
		throw Error("Method not implemented.");
	}
	ariaActiveDescendantElement;
	ariaAtomic;
	ariaAutoComplete;
	ariaBrailleLabel;
	ariaBrailleRoleDescription;
	ariaBusy;
	ariaChecked;
	ariaColCount;
	ariaColIndex;
	ariaColIndexText;
	ariaColSpan;
	ariaControlsElements;
	ariaCurrent;
	ariaDescribedByElements;
	ariaDescription;
	ariaDetailsElements;
	ariaDisabled;
	ariaErrorMessageElements;
	ariaExpanded;
	ariaFlowToElements;
	ariaHasPopup;
	ariaHidden;
	ariaInvalid;
	ariaKeyShortcuts;
	ariaLabel;
	ariaLabelledByElements;
	ariaLevel;
	ariaLive;
	ariaModal;
	ariaMultiLine;
	ariaMultiSelectable;
	ariaOrientation;
	ariaOwnsElements;
	ariaPlaceholder;
	ariaPosInSet;
	ariaPressed;
	ariaReadOnly;
	ariaRelevant;
	ariaRequired;
	ariaRoleDescription;
	ariaRowCount;
	ariaRowIndex;
	ariaRowIndexText;
	ariaRowSpan;
	ariaSelected;
	ariaSetSize;
	ariaSort;
	ariaValueMax;
	ariaValueMin;
	ariaValueNow;
	ariaValueText;
	role;
	animate(e, t) {
		throw Error("Method not implemented.");
	}
	getAnimations(e) {
		throw Error("Method not implemented.");
	}
	after(...e) {
		throw Error("Method not implemented.");
	}
	before(...e) {
		throw Error("Method not implemented.");
	}
	remove() {
		throw Error("Method not implemented.");
	}
	replaceWith(...e) {
		throw Error("Method not implemented.");
	}
	nextElementSibling;
	previousElementSibling;
	childElementCount;
	children;
	firstElementChild;
	lastElementChild;
	append(...e) {
		throw Error("Method not implemented.");
	}
	prepend(...e) {
		throw Error("Method not implemented.");
	}
	querySelector(e) {
		throw Error("Method not implemented.");
	}
	querySelectorAll(e) {
		throw Error("Method not implemented.");
	}
	replaceChildren(...e) {
		throw Error("Method not implemented.");
	}
	assignedSlot;
	attributeStyleMap;
	get style() {
		throw Error("Method not implemented.");
	}
	set style(e) {
		throw Error("Method not implemented.");
	}
	contentEditable;
	enterKeyHint;
	inputMode;
	isContentEditable;
	onabort;
	onanimationcancel;
	onanimationend;
	onanimationiteration;
	onanimationstart;
	onauxclick;
	onbeforeinput;
	onbeforematch;
	onbeforetoggle;
	onblur;
	oncancel;
	oncanplay;
	oncanplaythrough;
	onchange;
	onclick;
	onclose;
	oncontextlost;
	oncontextmenu;
	oncontextrestored;
	oncopy;
	oncuechange;
	oncut;
	ondblclick;
	ondrag;
	ondragend;
	ondragenter;
	ondragleave;
	ondragover;
	ondragstart;
	ondrop;
	ondurationchange;
	onemptied;
	onended;
	onerror;
	onfocus;
	onformdata;
	ongotpointercapture;
	oninput;
	oninvalid;
	onkeydown;
	onkeypress;
	onkeyup;
	onload;
	onloadeddata;
	onloadedmetadata;
	onloadstart;
	onlostpointercapture;
	onmousedown;
	onmouseenter;
	onmouseleave;
	onmousemove;
	onmouseout;
	onmouseover;
	onmouseup;
	onpaste;
	onpause;
	onplay;
	onplaying;
	onpointercancel;
	onpointerdown;
	onpointerenter;
	onpointerleave;
	onpointermove;
	onpointerout;
	onpointerover;
	onpointerrawupdate;
	onpointerup;
	onprogress;
	onratechange;
	onreset;
	onresize;
	onscroll;
	onscrollend;
	onsecuritypolicyviolation;
	onseeked;
	onseeking;
	onselect;
	onselectionchange;
	onselectstart;
	onslotchange;
	onstalled;
	onsubmit;
	onsuspend;
	ontimeupdate;
	ontoggle;
	ontouchcancel;
	ontouchend;
	ontouchmove;
	ontouchstart;
	ontransitioncancel;
	ontransitionend;
	ontransitionrun;
	ontransitionstart;
	onvolumechange;
	onwaiting;
	onwebkitanimationend;
	onwebkitanimationiteration;
	onwebkitanimationstart;
	onwebkittransitionend;
	onwheel;
	autofocus;
	dataset;
	nonce;
	tabIndex;
	blur() {
		throw Error("Method not implemented.");
	}
	focus(e) {
		throw Error("Method not implemented.");
	}
	dispatchShellRoute(e, t) {
		let n = Xi(e);
		if (!n) return;
		let r = this.shellContext;
		if (!r) {
			console.warn("[HomeView] No shellContext; cannot open:", n);
			return;
		}
		typeof r.openView == "function" ? Promise.resolve(r.openView(n, t)).catch((e) => console.warn("[HomeView] shellContext.openView failed", n, e)) : typeof r.navigate == "function" ? Promise.resolve(r.navigate(n, t)).catch((e) => console.warn("[HomeView] shellContext.navigate failed", n, e)) : console.warn("[HomeView] shellContext has no navigate/openView; cannot open:", n);
	}
	render(e) {
		e && (this.options = {
			...this.options,
			...e
		}, this.shellContext = e.shellContext ?? this.shellContext);
		let t = document.createElement("section");
		return t.className = "view-home env-home-workspace", t.dataset.view = "home", t.id = "home", pi((e, t) => {
			this.dispatchShellRoute(e, { params: t });
		}), Aa(t), this.element = t, t;
	}
	invokeChannelApi(e, t) {
		if (e !== HomeChannelAction.Navigate && e !== HomeChannelAction.OpenView) return;
		let n = typeof t == "string" ? t : t && typeof t == "object" && "viewId" in t ? String(t.viewId) : "";
		return n.trim() ? (this.dispatchShellRoute(n.trim()), !0) : !1;
	}
};
function Ma(e) {
	return new ja(e);
}
var Na = Ma;
//#endregion
export { ja as HomeView, Na as createHomeView, Ma as createView, Ma as default, Aa as initializeOrientedDesktop };
