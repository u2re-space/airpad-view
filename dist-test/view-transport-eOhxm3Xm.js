//#region ../../projects/subsystem/runtime/view-transport.ts
async function e(e) {
	return globalThis.dispatchEvent?.(new CustomEvent("view:protocol-message", { detail: e })), !0;
}
//#endregion
export { e as t };
