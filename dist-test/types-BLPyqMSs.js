//#region ../../projects/subsystem/types.ts
var e = (e) => {
	if (!e) return null;
	try {
		return JSON.parse(e);
	} catch {
		return null;
	}
};
function t(t, n = globalThis.localStorage) {
	return {
		load: () => e(n?.getItem?.(t) ?? null),
		save: (e) => {
			n?.setItem?.(t, JSON.stringify(e));
		},
		clear: () => {
			n?.removeItem?.(t);
		}
	};
}
function n(e) {
	if (typeof e != "function" || typeof HTMLElement > "u") return !1;
	let t = e.prototype;
	return !!(t && HTMLElement.prototype.isPrototypeOf(t));
}
function r(e) {
	return !!(e && typeof e == "object" && typeof e.render == "function");
}
function i(e) {
	return typeof HTMLElement < "u" && e instanceof HTMLElement;
}
function a(e, t = {}) {
	let a = [
		e.createView,
		e.createHomeView,
		e.createMarkdownViewer,
		e.createViewerView,
		e.createExplorerView,
		e.createEditorView,
		e.createHistoryView,
		e.createSettingsView,
		e.createWorkCenterView,
		e.createAirpadView,
		e.default
	];
	for (let e of a) if (e) {
		if (r(e) || i(e)) return e;
		if (n(e)) return new e();
		if (typeof e == "function") return e(t);
	}
	throw Error("View module must export default/createView or a named create*View factory");
}
function o(e, t = {}) {
	if (typeof HTMLElement < "u" && e instanceof HTMLElement) {
		let n = e;
		if (typeof n.render == "function") {
			let e = n.render(t);
			if (e instanceof HTMLElement) return e;
		}
		return e;
	}
	if (r(e)) return e.render(t);
	throw Error("renderViewInstance: unsupported view");
}
//#endregion
export { t as n, o as r, a as t };
