import { Ct as e, Or as t, Ut as n } from "./src-BoL7goZG.js";
//#region ../explorer-view/src/ts/ContextMenu.ts
var r = 320, i = 220, a = !1, o = 0, s = null, c = null, l = [], u = /* @__PURE__ */ new Map(), d = /* @__PURE__ */ new Map(), f = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Map();
typeof CSS < "u" && (CSS.supports("position-anchor: --cw-anchor-test") || CSS.supports("anchor-name: --cw-anchor-test"));
var m = () => {
	if (a) return;
	a = !0;
	let e = document.createElement("style");
	e.id = "cw-unified-context-menu-style", e.textContent = "\n        /* WHY: Menu is mounted on body/overlay — use app design tokens (Veela) when present, else light-dark(). */\n        .cw-context-menu-layer {\n            position: fixed;\n            inset: 0;\n            z-index: 2000;\n            pointer-events: none;\n        }\n\n        .cw-context-menu {\n            position: fixed;\n            min-inline-size: 220px;\n            max-inline-size: min(320px, calc(100vw - 24px));\n            padding: 0.4rem;\n            border-radius: 14px;\n            border: 1px solid color-mix(in oklab, var(--color-outline, light-dark(rgba(15, 23, 42, 0.12), rgba(255, 255, 255, 0.08))) 100%, transparent);\n            color-scheme: light dark;\n            background: color-mix(\n                in oklab,\n                var(--color-surface-container, var(--color-surface-elevated, var(--color-surface, light-dark(#f1f5f9, #1e293b)))) 96%,\n                transparent\n            );\n            box-shadow:\n                var(\n                    --elev-3,\n                    light-dark(\n                        0 14px 36px rgba(15, 23, 42, 0.12),\n                        0 14px 36px rgba(0, 0, 0, 0.45)\n                    )\n                ),\n                0 0 0 1px color-mix(in oklab, var(--color-on-surface, light-dark(#0f172a, #f8fafc)) 7%, transparent);\n            backdrop-filter: blur(14px);\n            pointer-events: auto;\n            user-select: none;\n        }\n\n        .cw-context-menu.cw-context-menu--compact {\n            min-inline-size: 188px;\n            padding: 0.3rem;\n        }\n\n        .cw-context-menu__list {\n            list-style: none;\n            margin: 0;\n            padding: 0;\n            display: flex;\n            flex-direction: column;\n            gap: 0.2rem;\n            justify-items: stretch;\n            text-align: left;\n        }\n\n        .cw-context-menu__item {\n            inline-size: 100%;\n            display: grid;\n            grid-template-columns: 1.375rem minmax(0, 1fr) auto;\n            align-items: center;\n            gap: 0.55rem;\n            border: 0;\n            border-radius: 10px;\n            background: transparent;\n            color: var(--color-on-surface, light-dark(#0f172a, #e8eaed));\n            padding: 0.5rem 0.6rem;\n            min-block-size: 2.35rem;\n            font-size: 0.8125rem;\n            line-height: 1.25;\n            text-align: start !important;\n            cursor: pointer;\n            justify-items: start;\n        }\n\n        .cw-context-menu__item:hover,\n        .cw-context-menu__item:focus-visible {\n            outline: none;\n            background: color-mix(in oklab, var(--color-on-surface, light-dark(#0f172a, #ffffff)) 8%, transparent);\n        }\n\n        .cw-context-menu__item[disabled] {\n            opacity: 0.45;\n            cursor: default;\n        }\n\n        .cw-context-menu__item--danger {\n            color: var(--color-error, light-dark(#b91c1c, #fca5a5));\n        }\n\n        .cw-context-menu__icon {\n            justify-self: center;\n            inline-size: 1.375rem;\n            block-size: 1.375rem;\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n        }\n\n        .cw-context-menu__icon ui-icon {\n            --icon-size: 1.125rem;\n            pointer-events: none;\n        }\n\n        .cw-context-menu__label {\n            justify-self: stretch;\n            text-align: start !important;\n            white-space: nowrap;\n            overflow: hidden;\n            text-overflow: ellipsis;\n            min-inline-size: 0;\n        }\n\n        .cw-context-menu__chevron {\n            justify-self: end;\n            opacity: 0.72;\n            display: inline-flex;\n            align-items: center;\n            justify-content: center;\n        }\n\n        .cw-context-menu__chevron ui-icon {\n            --icon-size: 0.85rem;\n            pointer-events: none;\n        }\n    ", document.head.appendChild(e);
}, h = () => document.querySelector("[data-app-layer=\"overlay\"]") || document.body, g = () => {
	for (let e of l) try {
		e();
	} catch {}
	l = [];
}, _ = (e) => {
	for (let [t, n] of Array.from(f.entries())) t >= e && (clearTimeout(n), f.delete(t));
	for (let [t, n] of Array.from(p.entries())) t >= e && (clearTimeout(n), p.delete(t));
}, v = (e, t, n) => {
	e.style.left = `${t}px`, e.style.top = `${n}px`;
	let r = e.getBoundingClientRect(), i = Math.max(8, window.innerWidth - r.width - 8), a = Math.max(8, window.innerHeight - r.height - 8);
	e.style.left = `${Math.min(Math.max(8, t), i)}px`, e.style.top = `${Math.min(Math.max(8, n), a)}px`;
}, y = (e) => {
	_(e);
	for (let [t, n] of Array.from(u.entries())) t >= e && (n.remove(), u.delete(t), d.delete(t));
}, b = (e, t) => {
	let n = t.getBoundingClientRect();
	v(e, Math.round(n.right + 4), Math.round(n.top));
}, x = (e) => {
	for (let [t, n] of Array.from(p.entries())) t >= e && (clearTimeout(n), p.delete(t));
}, S = (e, t, n, a) => {
	let l = document.createElement("div");
	l.className = `cw-context-menu${t ? " cw-context-menu--compact" : ""}`, l.setAttribute("role", "menu"), l.dataset.menuDepth = String(n);
	let m = document.createElement("ul");
	m.className = "cw-context-menu__list", l.appendChild(m);
	let h = (e, n, r) => {
		if (a !== o || !c?.isConnected || !s?.isConnected || (y(r), !e.children?.length)) return;
		let i = S(e.children, t, r, a);
		i.classList.add("cw-context-menu--submenu"), s.appendChild(i), u.set(r, i), d.set(r, n), b(i, n);
	}, g = (e, t, n) => {
		let i = f.get(n);
		i && clearTimeout(i), x(n);
		let a = setTimeout(() => {
			f.delete(n), h(e, t, n);
		}, r);
		f.set(n, a);
	}, _ = (e) => {
		let t = p.get(e);
		t && clearTimeout(t);
		let n = setTimeout(() => {
			p.delete(e), y(e);
		}, i);
		p.set(e, n);
	};
	for (let t of e) {
		let e = document.createElement("button");
		e.type = "button", e.className = `cw-context-menu__item${t.danger ? " cw-context-menu__item--danger" : ""}`, e.setAttribute("role", "menuitem"), e.disabled = !!t.disabled;
		let r = !!t.children?.length;
		if (e.innerHTML = `
            <span class="cw-context-menu__icon">${t.icon ? `<ui-icon icon="${t.icon}"></ui-icon>` : ""}</span>
            <span class="cw-context-menu__label">${t.label}</span>
            <span class="cw-context-menu__chevron">${r ? "<ui-icon icon=\"caret-right\"></ui-icon>" : ""}</span>
        `, r) {
			let r = n + 1;
			e.setAttribute("aria-haspopup", "menu"), e.addEventListener("pointerenter", () => g(t, e, r)), e.addEventListener("pointerleave", () => _(r)), e.addEventListener("click", (n) => {
				if (n.preventDefault(), n.stopPropagation(), a !== o || !c?.isConnected) return;
				x(r);
				let i = u.get(r), s = d.get(r);
				if (i?.isConnected && s === e) {
					y(r);
					return;
				}
				h(t, e, r);
			});
		} else e.addEventListener("click", async (e) => {
			e.preventDefault(), e.stopPropagation(), !(a !== o || !c?.isConnected) && (C(), !t.disabled && await t.action());
		});
		let i = document.createElement("li");
		i.appendChild(e), m.appendChild(i);
	}
	return l.addEventListener("pointerenter", () => x(n)), l.addEventListener("pointerleave", () => {
		if (n > 0) {
			let e = p.get(n);
			e && clearTimeout(e);
			let t = setTimeout(() => {
				p.delete(n), y(n);
			}, i);
			p.set(n, t);
		}
	}), l;
}, C = () => {
	g(), _(0), y(1), u.clear(), d.clear(), c?.remove(), c = null, s?.remove(), s = null, o += 1;
}, w = (e) => {
	let t = (e.items || []).filter((e) => e && e.id && e.label);
	if (!t.length) {
		C();
		return;
	}
	m(), C();
	let n = o, r = h();
	r.style.pointerEvents = r.style.pointerEvents || "none";
	let i = document.createElement("div");
	i.className = "cw-context-menu-layer", s = i, r.appendChild(i);
	let a = S(t, !!e.compact, 0, n);
	c = a, i.appendChild(a), v(a, e.x, e.y);
	let u = (e) => {
		if (n !== o || !s?.isConnected) return;
		let t = e.target;
		t && s.contains(t) || C();
	}, d = (e) => {
		if (n !== o || !c?.isConnected) return;
		let t = e.target;
		if (!t) return;
		let r = t.closest?.(".cw-context-menu__item");
		if (!r) {
			y(1);
			return;
		}
		r.getAttribute("aria-haspopup") !== "menu" && y(1);
	}, f = (e) => {
		n === o && e.key === "Escape" && C();
	}, p = () => C();
	document.addEventListener("pointerdown", u, { capture: !0 }), document.addEventListener("contextmenu", u, { capture: !0 }), document.addEventListener("keydown", f), a.addEventListener("click", d, { capture: !0 }), window.addEventListener("resize", p, { passive: !0 }), window.addEventListener("blur", p, { passive: !0 }), l.push(() => document.removeEventListener("pointerdown", u, { capture: !0 })), l.push(() => document.removeEventListener("contextmenu", u, { capture: !0 })), l.push(() => document.removeEventListener("keydown", f)), l.push(() => a.removeEventListener("click", d, { capture: !0 })), l.push(() => window.removeEventListener("resize", p)), l.push(() => window.removeEventListener("blur", p));
}, T = new FinalizationRegistry((e) => {}), E = () => [
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
], D = () => [
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
], O = () => {
	let e = n`<ul class="round-decor ctx-menu ux-anchor" style="position: fixed; z-index: 99999;" data-hidden></ul>`, t = document.querySelector("[data-app-layer=\"overlay\"]"), r = document.querySelector(".basic-app");
	return (t || r || document.body).append(e), e;
}, k = async (n, r, i) => {
	let a = {
		openedWith: null,
		items: [E(), D()],
		defaultAction: (e, n, a) => {
			let o = Array.from(a?.composedPath?.() || []).find((e) => e?.classList?.contains?.("row")) || t(e, ".row");
			r?.((i?.value ?? i)?.find?.((e) => e?.name === o?.getAttribute?.("data-id")), n?.id, a);
		}
	}, o = n, s = O();
	return e(o, a, s), T.register(o, s), s;
};
//#endregion
export { k as n, w as r, C as t };
