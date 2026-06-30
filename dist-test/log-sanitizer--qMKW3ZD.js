//#region ../../projects/subsystem/runtime/log-sanitizer.ts
function e(e) {
	if (typeof e == "string") return e.slice(0, 240);
	try {
		return JSON.stringify(e)?.slice(0, 240) ?? "";
	} catch {
		return String(e);
	}
}
//#endregion
export { e as t };
