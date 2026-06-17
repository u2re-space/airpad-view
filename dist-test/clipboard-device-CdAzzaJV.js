//#region ../../projects/subsystem/src/routing/native/clipboard-device.ts
var e = () => {
	try {
		let e = globalThis.Capacitor;
		return typeof e?.isNativePlatform == "function" && !!e.isNativePlatform();
	} catch {
		return !1;
	}
}, t = () => e();
async function n(t) {
	let n = String(t ?? "");
	if (e()) try {
		let { Clipboard: e } = await import(
			/* @vite-ignore */
			"@capacitor/clipboard"
);
		await e.write({ string: n });
		return;
	} catch {}
	if (globalThis.navigator?.clipboard?.writeText) {
		await globalThis.navigator.clipboard.writeText(n);
		return;
	}
	throw Error("Clipboard write unavailable");
}
async function r() {
	if (e()) try {
		let { Clipboard: e } = await import(
			/* @vite-ignore */
			"@capacitor/clipboard"
), t = (await e.read())?.value;
		if (typeof t == "string") return t;
	} catch {}
	if (globalThis.navigator?.clipboard?.readText) return String(await globalThis.navigator.clipboard.readText());
	throw Error("Clipboard read unavailable");
}
async function i() {
	if (e()) try {
		let { NativeSettings: e, AndroidSettings: t, IOSSettings: n } = await import(
			/* @vite-ignore */
			"capacitor-native-settings"
);
		await e.open({
			optionAndroid: t.AppNotification,
			optionIOS: n.AppNotification
		});
	} catch {}
}
async function a() {
	if (e()) try {
		let { NativeSettings: e, AndroidSettings: t, IOSSettings: n } = await import(
			/* @vite-ignore */
			"capacitor-native-settings"
);
		await e.open({
			optionAndroid: t.ApplicationDetails,
			optionIOS: n.App
		});
	} catch {}
}
//#endregion
export { n as a, r as i, a as n, i as r, t };
