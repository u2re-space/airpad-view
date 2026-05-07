import { n as e } from "./SettingsTypes-BMR8vm8-.js";
//#region ../../projects/subsystem/src/other/config/RuntimeSettings.ts
var t, n = null;
async function r() {
	if (n) return n;
	let { loadSettings: e } = await import("./Settings-DI63CTRU.js").then((e) => e.t);
	return n = e, n;
}
var i = async () => {
	try {
		return await (t ?? await r())() || e;
	} catch {
		return e;
	}
};
//#endregion
export { i as getRuntimeSettings };
