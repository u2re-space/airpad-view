import { Ct as e, Or as t, Ut as n } from "./src-C-qx_Mx3.js";
import { n as r } from "./shell-slots-Cg4mOSVd.js";
//#region ../explorer-view/src/ts/ContextMenu.ts
var i = "2147483640", a = 320, o = 220, s = !1, c = 0, l = null, u = null, d = [], f = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map(), m = /* @__PURE__ */ new Map(), h = /* @__PURE__ */ new Map();
typeof CSS < "u" && (CSS.supports("position-anchor: --cw-anchor-test") || CSS.supports("anchor-name: --cw-anchor-test"));
var g = "important";
function _(e, t) {
	let n = typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: light)").matches;
	e.style.setProperty("position", "fixed", g), e.style.setProperty("box-sizing", "border-box", g), e.style.setProperty("min-width", t ? "188px" : "220px", g), e.style.setProperty("max-width", "min(320px, calc(100vw - 24px))", g), e.style.setProperty("padding", t ? "0.3rem" : "0.4rem", g), e.style.setProperty("border-radius", "14px", g), e.style.setProperty("pointer-events", "auto", g), e.style.setProperty("-webkit-backdrop-filter", "none", g), e.style.setProperty("backdrop-filter", "none", g), n ? (e.style.setProperty("border", "1px solid rgba(15, 23, 42, 0.14)", g), e.style.setProperty("background", "rgba(241, 245, 249, 0.98)", g), e.style.setProperty("color", "#0f172a", g), e.style.setProperty("box-shadow", "0 14px 36px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.06)", g)) : (e.style.setProperty("border", "1px solid rgba(255, 255, 255, 0.1)", g), e.style.setProperty("background", "rgba(15, 23, 42, 0.97)", g), e.style.setProperty("color", "#e8eaed", g), e.style.setProperty("box-shadow", "0 14px 36px rgba(0, 0, 0, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.06)", g));
}
function v(e) {
	e.style.setProperty("list-style", "none", g), e.style.setProperty("list-style-type", "none", g), e.style.setProperty("margin", "0", g), e.style.setProperty("padding", "0", g), e.style.setProperty("display", "flex", g), e.style.setProperty("flex-direction", "column", g), e.style.setProperty("align-items", "stretch", g), e.style.setProperty("gap", "0.2rem", g), e.style.setProperty("width", "100%", g), e.style.setProperty("box-sizing", "border-box", g), e.style.setProperty("text-align", "left", g);
}
function y(e) {
	e.style.setProperty("list-style", "none", g), e.style.setProperty("list-style-type", "none", g), e.style.setProperty("margin", "0", g), e.style.setProperty("padding", "0", g), e.style.setProperty("width", "100%", g), e.style.setProperty("display", "block", g), e.style.setProperty("box-sizing", "border-box", g);
}
function b(e, t) {
	let n = typeof matchMedia < "u" && matchMedia("(prefers-color-scheme: light)").matches;
	e.style.setProperty("appearance", "none", g), e.style.setProperty("-webkit-appearance", "none", g), e.style.setProperty("box-sizing", "border-box", g), e.style.setProperty("width", "100%", g), e.style.setProperty("max-width", "100%", g), e.style.setProperty("margin", "0", g), e.style.setProperty("display", "grid", g), e.style.setProperty("grid-template-columns", "1.375rem minmax(0, 1fr) auto", g), e.style.setProperty("align-items", "center", g), e.style.setProperty("justify-items", "start", g), e.style.setProperty("gap", "0.55rem", g), e.style.setProperty("border-style", "none", g), e.style.setProperty("border-width", "0", g), e.style.setProperty("outline", "none", g), e.style.setProperty("border-radius", "10px", g), e.style.setProperty("padding", "0.5rem 0.6rem", g), e.style.setProperty("min-height", "2.35rem", g), e.style.setProperty("font-family", "inherit", g), e.style.setProperty("font-size", "0.8125rem", g), e.style.setProperty("font-weight", "400", g), e.style.setProperty("line-height", "1.25", g), e.style.setProperty("text-align", "start", g), e.style.setProperty("cursor", "pointer", g), e.style.setProperty("background", "none", g), e.style.setProperty("background-color", "transparent", g), e.style.setProperty("background-image", "none", g), e.style.setProperty("box-shadow", "none", g), e.style.setProperty("transition", "none", g), t ? n ? e.style.setProperty("color", "#b91c1c", g) : e.style.setProperty("color", "#fca5a5", g) : e.style.setProperty("color", "inherit", g);
}
var x = () => {
	if (s) return;
	s = !0;
	let e = document.createElement("style");
	e.id = "cw-unified-context-menu-style", e.textContent = `
        .cw-context-menu-layer {
            position: fixed;
            inset: 0;
            z-index: var(--cw-context-menu-layer-z, ${i});
            pointer-events: none;
        }

        .cw-context-menu {
            position: fixed;
            box-sizing: border-box;
            min-width: 220px;
            max-width: min(320px, calc(100vw - 24px));
            padding: 0.4rem;
            border-radius: 14px;
            color-scheme: light dark;
            font-family: var(--cw-context-menu-font, ui-sans-serif, system-ui, sans-serif);
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(15, 23, 42, 0.97);
            color: #e8eaed;
            box-shadow:
                0 14px 36px rgba(0, 0, 0, 0.45),
                0 0 0 1px rgba(255, 255, 255, 0.06);
            backdrop-filter: none;
            -webkit-backdrop-filter: none;
            pointer-events: auto;
            user-select: none;
        }

        @media (prefers-color-scheme: light) {
            .cw-context-menu {
                border: 1px solid rgba(15, 23, 42, 0.14);
                background: rgba(241, 245, 249, 0.98);
                color: #0f172a;
                box-shadow:
                    0 14px 36px rgba(15, 23, 42, 0.12),
                    0 0 0 1px rgba(15, 23, 42, 0.06);
            }
        }

        .cw-context-menu.cw-context-menu--compact {
            min-width: 188px;
            padding: 0.3rem;
        }

        .cw-context-menu__list {
            list-style: none !important;
            list-style-type: none !important;
            margin: 0 !important;
            padding: 0 !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 0.2rem;
            width: 100%;
            box-sizing: border-box;
            text-align: left;
        }

        .cw-context-menu__list > li {
            list-style: none !important;
            list-style-type: none !important;
            margin: 0 !important;
            padding: 0 !important;
            width: 100%;
            box-sizing: border-box;
            display: block !important;
        }

        /*
         * INVARIANT: one horizontal row per item (icon | label | chevron).
         * Rows stay transparent inside the slab; FL-UI host button styling must not turn each row into its own gray chip.
         */
        button.cw-context-menu__item,
        .cw-context-menu button.cw-context-menu__item {
            appearance: none !important;
            -webkit-appearance: none !important;
            box-sizing: border-box !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            display: grid !important;
            grid-template-columns: 1.375rem minmax(0, 1fr) auto !important;
            align-items: center !important;
            justify-items: start !important;
            justify-content: start !important;
            flex-direction: row !important;
            gap: 0.55rem !important;
            border: none !important;
            border-radius: 10px !important;
            padding: 0.5rem 0.6rem !important;
            min-height: 2.35rem !important;
            font: inherit !important;
            font-size: 0.8125rem !important;
            font-weight: 400 !important;
            line-height: 1.25 !important;
            text-align: start !important;
            cursor: pointer !important;
            background: transparent !important;
            color: inherit !important;
            box-shadow: none !important;
            transition: none !important;
        }

        button.cw-context-menu__item:hover,
        .cw-context-menu button.cw-context-menu__item:hover,
        button.cw-context-menu__item:focus-visible,
        .cw-context-menu button.cw-context-menu__item:focus-visible {
            outline: none !important;
            background: rgba(255, 255, 255, 0.08) !important;
        }

        @media (prefers-color-scheme: light) {
            button.cw-context-menu__item:hover,
            .cw-context-menu button.cw-context-menu__item:hover,
            button.cw-context-menu__item:focus-visible,
            .cw-context-menu button.cw-context-menu__item:focus-visible {
                background: rgba(15, 23, 42, 0.08) !important;
            }
        }

        button.cw-context-menu__item[disabled],
        .cw-context-menu button.cw-context-menu__item[disabled] {
            opacity: 0.45 !important;
            cursor: default !important;
        }

        .cw-context-menu__item--danger {
            color: #fca5a5 !important;
        }

        @media (prefers-color-scheme: light) {
            .cw-context-menu__item--danger {
                color: #b91c1c !important;
            }
        }

        .cw-context-menu__icon {
            justify-self: center !important;
            width: 1.375rem !important;
            height: 1.375rem !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
        }

        /*
         * WHY:
         * 1) Inherited registered icon-color can be fully transparent — force currentColor.
         * 2) Phosphor min-size uses min(var(--icon-size), 100%); when percentage base is cyclic/0,
         *    mask ::before collapses — lock an explicit px box matching --icon-size.
         */
        .cw-context-menu__icon ui-icon,
        .cw-context-menu__chevron ui-icon {
            flex: 0 0 auto !important;
            flex-shrink: 0 !important;
            box-sizing: border-box !important;
            width: var(--icon-size, 1.125rem) !important;
            height: var(--icon-size, 1.125rem) !important;
            min-width: var(--icon-size, 1.125rem) !important;
            min-height: var(--icon-size, 1.125rem) !important;
            min-inline-size: var(--icon-size, 1.125rem) !important;
            min-block-size: var(--icon-size, 1.125rem) !important;
            inline-size: var(--icon-size, 1.125rem) !important;
            block-size: var(--icon-size, 1.125rem) !important;
            max-inline-size: var(--icon-size, 1.125rem) !important;
            max-block-size: var(--icon-size, 1.125rem) !important;
            --icon-padding: 0px !important;
            color: inherit !important;
            --icon-color: currentColor !important;
            overflow: visible !important;
            pointer-events: none !important;
        }

        .cw-context-menu__icon ui-icon {
            --icon-size: 1.125rem !important;
        }

        .cw-context-menu__label {
            justify-self: stretch !important;
            text-align: start !important;
            white-space: nowrap !important;
            overflow: hidden !important;
            text-overflow: ellipsis !important;
            min-width: 0 !important;
        }

        .cw-context-menu__chevron {
            justify-self: end !important;
            opacity: 0.72 !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
        }

        .cw-context-menu__chevron ui-icon {
            --icon-size: 0.85rem !important;
        }

        @supports (color: color-mix(in oklab, white 50%, black)) {
            .cw-context-menu {
                border: 1px solid color-mix(in oklab, var(--wf-md-outline-variant, transparent) 100%, transparent);
                background: color-mix(in oklab, var(--wf-md-surf-container, rgba(30, 41, 59, 0.92)) 96%, transparent);
                color: var(--wf-md-on-surface, var(--color-on-surface, inherit));
                box-shadow:
                    var(--elev-3, 0 14px 36px rgba(0, 0, 0, 0.45)),
                    0 0 0 1px color-mix(in oklab, var(--wf-md-on-surface, #fff) 7%, transparent);
            }
            button.cw-context-menu__item:hover,
            .cw-context-menu button.cw-context-menu__item:hover,
            button.cw-context-menu__item:focus-visible,
            .cw-context-menu button.cw-context-menu__item:focus-visible {
                background: color-mix(in oklab, var(--wf-md-on-surface, #fff) 8%, transparent) !important;
            }
        }
    `, document.head.appendChild(e);
};
function S(e) {
	if (typeof customElements < "u" && typeof customElements.upgrade == "function") try {
		customElements.upgrade(e);
	} catch {}
	for (let t of e.querySelectorAll("ui-icon")) {
		let e = t;
		typeof e.updateIcon == "function" && e.updateIcon.call(t);
	}
}
function C(e, t) {
	let n = document.createElement("ui-icon");
	n.setAttribute("icon", t), n.setAttribute("icon-style", "duotone"), e.append(n);
}
var w = () => {
	for (let e of d) try {
		e();
	} catch {}
	d = [];
}, T = (e) => {
	for (let [t, n] of Array.from(m.entries())) t >= e && (clearTimeout(n), m.delete(t));
	for (let [t, n] of Array.from(h.entries())) t >= e && (clearTimeout(n), h.delete(t));
}, E = (e, t, n) => {
	e.style.left = `${t}px`, e.style.top = `${n}px`;
	let r = e.getBoundingClientRect(), i = Math.max(8, window.innerWidth - r.width - 8), a = Math.max(8, window.innerHeight - r.height - 8);
	e.style.left = `${Math.min(Math.max(8, t), i)}px`, e.style.top = `${Math.min(Math.max(8, n), a)}px`;
}, D = (e) => {
	T(e);
	for (let [t, n] of Array.from(f.entries())) t >= e && (n.remove(), f.delete(t), p.delete(t));
}, O = (e, t) => {
	let n = t.getBoundingClientRect();
	E(e, Math.round(n.right + 4), Math.round(n.top));
}, k = (e) => {
	for (let [t, n] of Array.from(h.entries())) t >= e && (clearTimeout(n), h.delete(t));
}, A = (e, t, n, r) => {
	let i = document.createElement("div");
	i.className = `cw-context-menu${t ? " cw-context-menu--compact" : ""}`, i.setAttribute("role", "menu"), i.dataset.menuDepth = String(n), i.style.zIndex = String(n + 1);
	let s = document.createElement("ul");
	s.className = "cw-context-menu__list", v(s), i.appendChild(s);
	let d = (e, n, i) => {
		if (r !== c || !u?.isConnected || !l?.isConnected || (D(i), !e.children?.length)) return;
		let a = A(e.children, t, i, r);
		a.classList.add("cw-context-menu--submenu"), l.appendChild(a), f.set(i, a), p.set(i, n), O(a, n);
	}, g = (e, t, n) => {
		let r = m.get(n);
		r && clearTimeout(r), k(n);
		let i = setTimeout(() => {
			m.delete(n), d(e, t, n);
		}, a);
		m.set(n, i);
	}, x = (e) => {
		let t = h.get(e);
		t && clearTimeout(t);
		let n = setTimeout(() => {
			h.delete(e), D(e);
		}, o);
		h.set(e, n);
	};
	for (let t of e) {
		let e = document.createElement("button");
		e.type = "button", e.className = `cw-context-menu__item${t.danger ? " cw-context-menu__item--danger" : ""}`, e.setAttribute("role", "menuitem"), e.disabled = !!t.disabled;
		let i = !!t.children?.length, a = document.createElement("span");
		a.className = "cw-context-menu__icon", t.icon && C(a, t.icon);
		let o = document.createElement("span");
		o.className = "cw-context-menu__label", o.textContent = t.label;
		let l = document.createElement("span");
		if (l.className = "cw-context-menu__chevron", i && C(l, "caret-right"), e.append(a, o, l), b(e, !!t.danger), i) {
			let i = n + 1;
			e.setAttribute("aria-haspopup", "menu"), e.addEventListener("pointerenter", () => g(t, e, i)), e.addEventListener("pointerleave", () => x(i)), e.addEventListener("click", (n) => {
				if (n.preventDefault(), n.stopPropagation(), r !== c || !u?.isConnected) return;
				k(i);
				let a = f.get(i), o = p.get(i);
				if (a?.isConnected && o === e) {
					D(i);
					return;
				}
				d(t, e, i);
			});
		} else e.addEventListener("click", async (e) => {
			e.preventDefault(), e.stopPropagation(), !(r !== c || !u?.isConnected) && (j(), !t.disabled && await t.action());
		});
		let m = document.createElement("li");
		y(m), m.appendChild(e), s.appendChild(m);
	}
	return _(i, t), i.addEventListener("pointerenter", () => k(n)), i.addEventListener("pointerleave", () => {
		if (n > 0) {
			let e = h.get(n);
			e && clearTimeout(e);
			let t = setTimeout(() => {
				h.delete(n), D(n);
			}, o);
			h.set(n, t);
		}
	}), i;
}, j = () => {
	w(), T(0), D(1), f.clear(), p.clear(), u?.remove(), u = null, l?.remove(), l = null, c += 1;
}, M = (e) => {
	let t = (e.items || []).filter((e) => e && e.id && e.label);
	if (!t.length) {
		j();
		return;
	}
	x(), j();
	let n = c, i = e.resolveOverlayMountPoint?.(e.anchor ?? null) ?? r(e.anchor ?? null);
	i !== document.body && (i.style.pointerEvents = i.style.pointerEvents || "none");
	let a = document.createElement("div");
	a.className = "cw-context-menu-layer", l = a, i.appendChild(a);
	let o = A(t, !!e.compact, 0, n);
	u = o, a.appendChild(o), E(o, e.x, e.y), queueMicrotask(() => {
		n !== c || !o.isConnected || (S(o), requestAnimationFrame(() => {
			n !== c || !o.isConnected || S(o);
		}));
	});
	let s = (e) => {
		if (!l?.isConnected || !u) return !1;
		let t = typeof e.composedPath == "function" ? e.composedPath() : [], n = Array.isArray(t) && t.length ? t : [];
		for (let e of n) if (e instanceof Element && (e === l || e === u || l.contains(e) || e.classList?.contains?.("cw-context-menu") || e.closest?.(".cw-context-menu"))) return !0;
		let r = e.target;
		return !!(r instanceof Node && l.contains(r) || r instanceof Element && r.closest?.(".cw-context-menu"));
	}, f = (e) => {
		n !== c || !l?.isConnected || s(e) || j();
	}, p = (e) => {
		if (n !== c || !u?.isConnected) return;
		let t = e.target;
		if (!t) return;
		let r = t.closest?.(".cw-context-menu__item");
		if (!r && typeof e.composedPath == "function") {
			for (let t of e.composedPath()) if (t instanceof Element && t.classList?.contains?.("cw-context-menu__item")) {
				r = t;
				break;
			}
		}
		if (!r) {
			D(1);
			return;
		}
		r.getAttribute("aria-haspopup") !== "menu" && D(1);
	}, m = (e) => {
		n === c && e.key === "Escape" && j();
	}, h = () => j();
	queueMicrotask(() => {
		n === c && (document.addEventListener("pointerdown", f, { capture: !0 }), document.addEventListener("contextmenu", f, { capture: !0 }), document.addEventListener("keydown", m), o.addEventListener("click", p, { capture: !0 }), window.addEventListener("resize", h, { passive: !0 }), window.addEventListener("blur", h, { passive: !0 }), d.push(() => document.removeEventListener("pointerdown", f, { capture: !0 })), d.push(() => document.removeEventListener("contextmenu", f, { capture: !0 })), d.push(() => document.removeEventListener("keydown", m)), d.push(() => o.removeEventListener("click", p, { capture: !0 })), d.push(() => window.removeEventListener("resize", h)), d.push(() => window.removeEventListener("blur", h)));
	});
}, N = new FinalizationRegistry((e) => {}), P = () => [
	{
		id: "open",
		label: "Open",
		icon: "function"
	},
	{
		id: "view",
		label: "View",
		icon: "eye"
	},
	{
		id: "view-base",
		label: "View (Base tab)",
		icon: "arrow-square-out"
	},
	{
		id: "attach-workcenter",
		label: "Attach to Work Center",
		icon: "lightning"
	},
	{
		id: "attach-workcenter-queued",
		label: "Queue attach (pending)",
		icon: "clock-counter-clockwise"
	},
	{
		id: "attach-workcenter-headless",
		label: "Queue attach (headless)",
		icon: "wave-sine"
	},
	{
		id: "pin-home",
		label: "Pin to Home Screen",
		icon: "push-pin-simple"
	},
	{
		id: "download",
		label: "Download",
		icon: "download"
	}
], F = () => [
	{
		id: "delete",
		label: "Delete",
		icon: "trash"
	},
	{
		id: "rename",
		label: "Rename",
		icon: "pencil"
	},
	{
		id: "copyPath",
		label: "Copy Path",
		icon: "copy"
	},
	{
		id: "movePath",
		label: "Move Path",
		icon: "hand-withdraw"
	}
], I = (e) => {
	let t = n`<ul class="round-decor ctx-menu ux-anchor" style="position: fixed; z-index: 99999;" data-hidden></ul>`;
	return r(e ?? null).append(t), t;
}, L = async (n, r, i) => {
	let a = {
		openedWith: null,
		items: [P(), F()],
		defaultAction: (e, n, a) => {
			let o = Array.from(a?.composedPath?.() || []).find((e) => e?.classList?.contains?.("row")) || t(e, ".row");
			r?.((i?.value ?? i)?.find?.((e) => e?.name === o?.getAttribute?.("data-id")), n?.id, a);
		}
	}, o = n, s = I(o);
	return e(o, a, s), N.register(o, s), s;
};
//#endregion
export { L as n, M as r, j as t };
