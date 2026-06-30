//#region ../../projects/subsystem/src/boot/capacitor-permissions.ts
var e = () => {
	try {
		let e = globalThis?.Capacitor;
		return e && typeof e == "object" ? e : null;
	} catch {
		return null;
	}
}, t = () => {
	let t = e();
	try {
		return !!(t?.isNativePlatform?.() ?? (t?.platform && t.platform !== "web"));
	} catch {
		return !1;
	}
}, n = (t) => {
	let n = e()?.Plugins?.[t];
	return n && typeof n == "object" ? n : null;
}, r = async (e, ...t) => {
	try {
		return typeof e == "function" ? await e(...t) : void 0;
	} catch {
		return;
	}
}, i = !1, a = async () => {
	if (!t()) return {
		native: !1,
		requested: []
	};
	if (i) return {
		native: !0,
		requested: []
	};
	i = !0;
	let e = [], a = n("Clipboard");
	a && (await r(a.read), e.push("clipboard"));
	let o = n("CwsPlatform");
	if (o) {
		await r(o.requestRuntimePermissions), e.push("CwsPlatform.requestRuntimePermissions");
		let t = await r(o.canDrawOverlays);
		t && typeof t == "object" && t.granted === !0 || e.push("overlay:prompt-deferred");
	} else {
		let t = n("DevicePermissions") || n("Permissions");
		t && typeof t.requestPermissions == "function" && (await r(t.requestPermissions, { permissions: ["POST_NOTIFICATIONS", "SYSTEM_ALERT_WINDOW"] }), e.push("legacy-permissions"));
	}
	let s = n("LocalNotifications");
	return s && typeof s.requestPermissions == "function" && (await r(s.requestPermissions), e.push("notifications")), {
		native: !0,
		requested: e
	};
};
//#endregion
export { t as n, a as t };
