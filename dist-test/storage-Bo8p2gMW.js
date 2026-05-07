//#region ../../projects/subsystem/runtime/storage.ts
var e = {
	EXPLORER_PATH: "rs-explorer-path",
	SETTINGS: "rs-settings"
}, t = () => {
	try {
		return globalThis.localStorage ?? null;
	} catch {
		return null;
	}
};
function n(e, n) {
	let r = t()?.getItem(String(e));
	if (!r) return n;
	try {
		return JSON.parse(r);
	} catch {
		return n;
	}
}
function r(e, n) {
	t()?.setItem(String(e), JSON.stringify(n));
}
function i(e, n = "") {
	return t()?.getItem(String(e)) ?? n;
}
function a(e, n) {
	t()?.setItem(String(e), n);
}
//#endregion
export { a, r as i, n, i as r, e as t };
