import { n as e } from "./src-DNKfArm8.js";
//#region ../../projects/subsystem/runtime/admin-doors.ts
var t = /* @__PURE__ */ e({
	openAdminDoorFromCore: () => r,
	resolveAdminDoorUrls: () => n
});
function n() {
	let e = globalThis.location?.origin ?? "";
	return {
		http: e.replace(/^https:/, "http:"),
		https: e.replace(/^http:/, "https:")
	};
}
function r() {
	let e = n().https || n().http;
	e && globalThis.open?.(e, "_blank", "noopener,noreferrer");
}
//#endregion
export { r as n, n as r, t };
