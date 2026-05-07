import { J as e, ir as t, lr as n, sr as r } from "./src-BoL7goZG.js";
import { t as i } from "./AssignObject-BwpT75Pb.js";
import { t as a } from "./jsox-D0iVxCRU.js";
//#region ../../projects/subsystem/src/other/utils/Runtime.ts
var o = (e) => {
	if (typeof globalThis?.requestAnimationFrame == "function") {
		globalThis.requestAnimationFrame(e);
		return;
	}
	globalThis.setTimeout(e, 0);
}, s = "cw::workspace::speed-dial", c = `${s}::meta`, l = (e) => typeof structuredClone == "function" ? structuredClone(n(e)) : a.parse(a.stringify(e)), u = () => typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : `sd-${Date.now().toString(36)}-${Math.floor(Math.random() * 1e3)}`, d = [
	{
		id: "shortcut-docs",
		cell: t([0, 1]),
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
		cell: t([1, 1]),
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
		cell: t([2, 1]),
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
		cell: t([3, 1]),
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
		cell: t([0, 2]),
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
		cell: t([1, 2]),
		icon: "telegram-logo",
		label: "Telegram",
		action: "open-link",
		meta: {
			href: "https://t.me/u2re_space",
			description: "U2RE Space Telegram"
		}
	}
], f = [
	{
		id: "shortcut-explorer",
		cell: t([2, 0]),
		icon: "books",
		label: "Explorer",
		action: "open-view",
		meta: { view: "explorer" }
	},
	{
		id: "shortcut-settings",
		cell: t([3, 0]),
		icon: "gear-six",
		label: "Settings",
		action: "open-view",
		meta: { view: "settings" }
	},
	...d
], { records: p, metaEntries: m } = ((e) => {
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
})(f), h = [], g = (e) => e && Array.isArray(e) && e.length >= 2 ? t([Number(e[0]) || 0, Number(e[1]) || 0]) : t([0, 0]), _ = (e = {}) => i(t({
	action: e.action || "open-view",
	view: e.view || "",
	href: e.href || "",
	description: e.description || "",
	entityType: e.entityType || "",
	tags: Array.isArray(e.tags) ? [...e.tags] : [],
	...e
})), v = (e) => {
	let t = /* @__PURE__ */ new Map();
	for (let [n, r] of e) t.set(n, _(r));
	return t;
}, y = (e) => e ? e instanceof Map ? Array.from(e.entries()) : Array.isArray(e) ? e.map((e) => e && typeof e == "object" && "id" in e ? [e.id, e.meta || e] : null).filter(Boolean) : typeof e == "object" ? Object.entries(e) : [] : [], b = (e) => {
	let t = {};
	return e?.forEach((e, n) => {
		t[n] = l(e ?? {});
	}), t;
}, x = () => v(m), S = (e) => {
	let t = y(e);
	return v(t.length ? t : m);
}, C = (e, t) => e && typeof e == "object" && "value" in e ? e.value ?? t : e ?? t, w = (e) => ({
	id: e.id,
	cell: t([e.cell?.[0] ?? 0, e.cell?.[1] ?? 0]),
	icon: C(e.icon, "sparkle"),
	label: C(e.label, "Shortcut"),
	action: e.action
}), T = (e) => t({
	id: e.id || u(),
	cell: t(g(e.cell)),
	icon: r(e.icon || "sparkle"),
	label: r(e.label || "Shortcut"),
	action: e.action || "open-view"
}), E = () => t(p.map(T)), D = (e) => t((Array.isArray(e) && e.length ? e : f).map((e) => {
	let { meta: t, ...n } = e;
	return t ? h.push([e.id, {
		action: e.action,
		...t
	}]) : h.push([e.id, { action: e.action }]), n;
}).map(T)), O = (e) => e.map(w), k = e(c, x, S, b), A = e(s, E, D, O), j = () => A?.$save?.(), M = () => k?.$save?.(), N = (e) => e ? k?.get?.(e) ?? null : null, P = (e, t = {}) => {
	let n = k?.get?.(e);
	return n || (n = _(t), k?.set?.(e, n), M()), t?.action && n.action !== t.action && (n.action = t.action), n;
}, F = (e) => {
	if (!e) return !1;
	let t = e.action || "open-view", n = P(e.id, { action: t });
	return n.action === t ? !1 : (n.action = t, !0);
};
h.length && (h.forEach(([e, t]) => {
	let n = P(e, t);
	Object.assign(n, t);
}), h.length = 0, M()), (() => {
	let e = !1;
	A?.forEach?.((t) => {
		F(t) && (e = !0);
	}), e && M();
})(), (() => {
	let e = !1;
	d.forEach((n) => {
		if (A?.find?.((e) => e?.id === n.id)) {
			let t = N(n.id);
			n.meta && t ? (n.meta.href !== t.href && (t.href = n.meta.href, e = !0), n.meta.description !== t.description && (t.description = n.meta.description, e = !0)) : n.meta && !t && (P(n.id, n.meta), e = !0);
		} else {
			let r = T(n);
			n.label && r.label && typeof r.label == "object" && "value" in r.label && (r.label.value = n.label), n.icon && r.icon && typeof r.icon == "object" && "value" in r.icon && (r.icon.value = n.icon), A.push(t(r)), P(r.id, n.meta), e = !0;
		}
	}), e && (j(), M());
})();
var I = (e = t([0, 0])) => {
	let n = T({
		id: u(),
		cell: e,
		icon: "sparkle",
		label: "New shortcut",
		action: "open-link"
	});
	return P(n.id, {
		action: n.action,
		href: "",
		description: ""
	}), n;
}, L = (e) => {
	A?.push?.(t(e));
	let n = F(e);
	return j(), n && M(), e;
};
e("cw::workspace::wallpaper", () => t({
	src: "/assets/wallpaper.jpg",
	opacity: 1,
	blur: 0
}), (e) => t(e || {
	src: "/assets/wallpaper.jpg",
	opacity: 1,
	blur: 0
}), (e) => ({ ...e }));
var R = e("cw::workspace::grid-layout", () => t({
	columns: 4,
	rows: 8,
	shape: "square"
}), (e) => t(e || {
	columns: 4,
	rows: 8,
	shape: "square"
}), (e) => ({ ...e })), z = () => R?.$save?.(), B = (e) => {
	let t = e?.grid || R, n = t?.columns ?? 4, r = t?.rows ?? 8, i = t?.shape ?? "square";
	R && (R.columns = n, R.rows = r, R.shape = i, z()), !(typeof document > "u") && (document.querySelectorAll(".speed-dial-grid").forEach((e) => {
		let t = e;
		t.dataset.gridColumns = String(n), t.dataset.gridRows = String(r), t.dataset.gridShape = i;
	}), document.documentElement.dataset.gridColumns = String(n), document.documentElement.dataset.gridRows = String(r), document.documentElement.dataset.gridShape = i);
};
typeof globalThis < "u" && typeof document < "u" && o(() => B());
//#endregion
export { j as a, P as i, B as n, M as o, I as r, A as s, L as t };
