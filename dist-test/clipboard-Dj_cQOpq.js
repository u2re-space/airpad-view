//#region ../../projects/subsystem/runtime/clipboard.ts
async function e(e) {
	try {
		return await globalThis.navigator?.clipboard?.writeText?.(e), {
			ok: !0,
			text: e
		};
	} catch (t) {
		return {
			ok: !1,
			text: e,
			error: t
		};
	}
}
//#endregion
export { e as t };
