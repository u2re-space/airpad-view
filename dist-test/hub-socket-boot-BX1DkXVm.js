import { F as e, M as t, O as n, P as r, f as i } from "./config-CdEaAxAm.js";
import { g as a } from "./Settings-BAxgoWK0.js";
//#region ../../projects/subsystem/src/boot/hub-socket-boot.ts
var o = 12e3, s = !1, c = 0;
function l() {
	return globalThis.__CWS_NATIVE__ === !0 && e();
}
function u() {
	return !(l() || !r() && !t() || !n().trim());
}
function d() {
	if (s || typeof window > "u" || typeof document > "u") return;
	s = !0, document.addEventListener("visibilitychange", () => {
		document.visibilityState === "hidden" && (c = Date.now());
	});
	let e = (e) => {
		globalThis.setTimeout(e, 280);
	}, t = () => {
		u() && (async () => {
			let { connectWS: e, getWS: t, initWebSocket: n, isWSConnected: r, reconnectTransportAfterLifecycleResume: i } = await import("./websocket-DOcnQ6On.js");
			n(null);
			let a = !!t()?.connected;
			if (c > 0 && Date.now() - c >= o && (a || r())) {
				i("visibility");
				return;
			}
			!a && !r() && e();
		})();
	}, n = (e) => {
		u() && (async () => {
			let { initWebSocket: t, reconnectTransportAfterLifecycleResume: n } = await import("./websocket-DOcnQ6On.js");
			t(null), n(e);
		})();
	};
	document.addEventListener("visibilitychange", () => {
		document.visibilityState === "visible" && e(t);
	}), window.addEventListener("online", () => e(() => n("online"))), window.addEventListener("pageshow", (t) => {
		t.persisted && e(() => n("bfcache"));
	});
}
async function f(e) {
	if (d(), await a(e) || (i(e), l()) || !r() && !t() || !n().trim()) return;
	let { initWebSocket: o, connectWS: s } = await import("./websocket-DOcnQ6On.js");
	o(null), s();
}
//#endregion
export { l as n, f as t };
