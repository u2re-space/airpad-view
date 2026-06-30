//#region ../../projects/subsystem/src/routing/core/views.ts
var e = "viewer", t = "editor", n = "workcenter", r = "explorer", i = "settings", a = "history", o = "home", s = "print", c = "airpad", l = "network", u = {
	network: l,
	airpad: c,
	settings: i,
	viewer: e,
	editor: t,
	workcenter: n,
	explorer: r,
	history: a,
	home: o,
	print: s
}, d = (() => {
	let e = "";
	try {
		let t = globalThis?.location?.search;
		if (t) {
			let n = new URLSearchParams(t);
			e = String(n.get("views") || n.get("enabledViews") || "");
		}
	} catch {}
	if (!e) try {
		e = String(globalThis?.localStorage?.getItem?.("rs-enabled-views") ?? "");
	} catch {}
	if (!e) try {
		e = "";
	} catch {}
	if (!e) try {
		e = String(globalThis?.process?.env?.VITE_ENABLED_VIEWS ?? "");
	} catch {}
	let t = e.split(/[\s,;]+/).map((e) => e.trim().toLowerCase()).filter(Boolean);
	if (!t.length) return null;
	t.push("settings");
	try {
		let e = globalThis?.location?.search;
		e && new URLSearchParams(e).get("views") && globalThis?.localStorage?.setItem?.("rs-enabled-views", Array.from(new Set(t)).join(","));
	} catch {}
	return new Set(t);
})(), f = {
	viewer: typeof __RS_VIEW_VIEWER__ < "u" ? __RS_VIEW_VIEWER__ : void 0,
	editor: typeof __RS_VIEW_EDITOR__ < "u" ? __RS_VIEW_EDITOR__ : void 0,
	workcenter: typeof __RS_VIEW_WORKCENTER__ < "u" ? __RS_VIEW_WORKCENTER__ : void 0,
	explorer: typeof __RS_VIEW_EXPLORER__ < "u" ? __RS_VIEW_EXPLORER__ : void 0,
	settings: typeof __RS_VIEW_SETTINGS__ < "u" ? __RS_VIEW_SETTINGS__ : void 0,
	history: typeof __RS_VIEW_HISTORY__ < "u" ? __RS_VIEW_HISTORY__ : void 0,
	home: typeof __RS_VIEW_HOME__ < "u" ? __RS_VIEW_HOME__ : void 0,
	print: typeof __RS_VIEW_PRINT__ < "u" ? __RS_VIEW_PRINT__ : void 0,
	airpad: typeof __RS_VIEW_AIRPAD__ < "u" ? __RS_VIEW_AIRPAD__ : void 0,
	network: typeof __RS_VIEW_NETWORK__ < "u" ? __RS_VIEW_NETWORK__ : void 0
}, p = (e) => f[String(e).toLowerCase()] !== !1, m = (e) => !d || d.has(String(e).toLowerCase()), h = (e) => p(e) && m(e), g = Object.entries(u).filter(([e, t]) => !!t && h(e)).map(([e]) => e), _ = (e) => !!u[e] && h(e);
//#endregion
export { a, s as c, n as d, _ as f, r as i, i as l, c as n, o, t as r, l as s, g as t, e as u };
