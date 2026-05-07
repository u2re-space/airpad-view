//#region src/utils/utils.ts
var e = null;
function t(t) {
	e = t;
}
function n() {
	return e;
}
function r() {
	return e?.ownerDocument ?? (typeof document < "u" ? document : null);
}
function i(t) {
	let n = e;
	if (!n) return null;
	try {
		return n.querySelector(`#${CSS.escape(t)}`);
	} catch {
		return null;
	}
}
function a(t) {
	return e ? e.querySelector(t) : null;
}
var o = () => i("wsStatus"), s = () => i("airStatus"), c = () => i("aiStatus"), l = () => i("logContainer"), u = () => i("voiceText"), d = () => i("vkStatus"), f = () => i("btnConnect"), p = () => i("airButton"), m = () => i("aiButton"), h = () => i("airNeighborButton"), g = () => i("btnCut"), _ = () => i("btnCopy"), v = () => i("btnPaste"), y = () => i("clipboardPreview");
function b(t) {
	let n = e?.ownerDocument ?? (typeof document < "u" ? document : null);
	if (!n) {
		console.log("[LOG]", t);
		return;
	}
	let r = n.createElement("div");
	r.textContent = `[${(/* @__PURE__ */ new Date()).toLocaleTimeString()}] ${t}`;
	let i = l();
	i && (i.appendChild(r), i.scrollTop = i.scrollHeight), console.log("[LOG]", t);
}
//#endregion
export { a as _, s as a, f as c, v as d, y as f, b as g, o as h, h as i, _ as l, u as m, c as n, n as o, d as p, p as r, r as s, m as t, g as u, t as v };
