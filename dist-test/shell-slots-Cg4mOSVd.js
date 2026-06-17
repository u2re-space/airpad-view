//#region ../../projects/subsystem/src/boot/shell-slots.ts
var e = {
	underlying: "underlying",
	overlay: "overlay",
	content: ""
}, t = [
	"cw-shell-base",
	"cw-shell-window",
	"cw-shell-tabbed",
	"cw-shell-minimal",
	"cw-shell-environment",
	"env-shell-container",
	"cw-shell-content",
	"cw-shell-immersive",
	"cw-shell-faint"
].join(",");
function n(e) {
	if (!(e instanceof Element) || typeof e.closest != "function") return null;
	let n = e.closest(t)?.shadowRoot?.querySelector?.("[data-shell-overlays]") ?? null;
	return n instanceof HTMLElement ? n : null;
}
function r(e) {
	return typeof document > "u" ? void 0 : (e ? n(e) : null) || document.querySelector("[data-app-layer=\"overlay\"]") || document.querySelector(".basic-app") || document.body;
}
//#endregion
export { r as n, e as t };
