import { n as e } from "./SettingsTypes-DAv90T5n.js";
//#region ../../projects/subsystem/src/other/config/RuntimeSettings.ts
var t, n = null;
async function r() {
	if (n) return n;
	let { loadSettings: e } = await import("./Settings-DoiAXxHI.js");
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
