import { n as e } from "./src-BLeKz4Uk.js";
import { t, u as n } from "./cws-bridge-BVaPzxvD.js";
//#region ../../projects/subsystem/src/boot/frontend-debug-capture.ts
var r = /* @__PURE__ */ e({
	getFrontendDebugApi: () => v,
	initFrontendDebugCapture: () => _
}), i = 800, a = 2500, o = () => {
	try {
		return /^(1|true|yes|on)$/i.test("") ? !0 : globalThis.localStorage?.getItem("cws-frontend-debug") === "1";
	} catch {
		return !1;
	}
}, s = [], c = [], l = !1, u = (e) => {
	if (e == null) return "";
	if (typeof e == "string") return e;
	if (e instanceof Error) return `${e.name}: ${e.message}`;
	try {
		return JSON.stringify(e);
	} catch {
		return String(e);
	}
}, d = (e) => {
	if (!e.length) return { msg: "" };
	let t = u(e[0]);
	if (e.length === 1) return { msg: t };
	let n = e.slice(1).map(u).filter(Boolean);
	return {
		msg: n.length ? `${t} ${n.join(" ")}` : t,
		data: e.length > 1 ? e.slice(1) : void 0
	};
}, f = (e, t, n, r) => {
	let a = {
		ts: Date.now(),
		level: e,
		scope: t,
		msg: n,
		data: r
	};
	s.push(a), s.length > i && s.splice(0, s.length - i), c.push(a), c.length > 200 && c.splice(0, c.length - 200), p();
}, p = () => {
	setTimeout(() => {
		m();
	}, a);
}, m = async () => {
	if (!c.length || !n.isNativePlatform?.()) return;
	if (!g.enabled) {
		c.length = 0;
		return;
	}
	let e = c.splice(0, c.length);
	try {
		await t.invoke({
			channel: "debug:append",
			payload: {
				entries: e,
				peer: "L-192.168.0.196",
				source: "webview"
			}
		});
	} catch {}
}, h = () => {
	for (let e of [
		"log",
		"info",
		"warn",
		"error",
		"debug"
	]) {
		let t = console[e]?.bind(console);
		t && (console[e] = (...n) => {
			try {
				let { msg: t, data: r } = d(n);
				f(e, "console", t, r);
			} catch {}
			t(...n);
		});
	}
}, g = {
	entries: s,
	max: i,
	enabled: !0,
	tail(e = 120) {
		let t = Math.max(1, Math.min(e, s.length));
		return s.slice(s.length - t);
	},
	clear() {
		s.length = 0, c.length = 0;
	},
	log(e, t, n, r) {
		f(t, e, n, r);
	},
	async flush() {
		await m();
	}
}, _ = () => {
	if (l) return g;
	l = !0, globalThis.__CWSP_FRONTEND_DEBUG__ = g;
	let e = o();
	return e && h(), globalThis.addEventListener?.("error", (e) => {
		let t = e.error instanceof Error ? e.error : void 0;
		f("error", "window", t?.stack || t?.message || String(e.message || "error"));
	}), globalThis.addEventListener?.("unhandledrejection", (e) => {
		f("error", "promise", u(e.reason));
	}), g.enabled = e, g.log("boot", "info", `frontend-debug ready native=${!!n.isNativePlatform?.()} verbose=${e}`), g;
}, v = () => globalThis.__CWSP_FRONTEND_DEBUG__;
//#endregion
export { v as n, _ as r, r as t };
