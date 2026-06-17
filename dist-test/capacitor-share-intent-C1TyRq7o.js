import { o as e } from "./cws-bridge-BVaPzxvD.js";
import { n as t } from "./capacitor-permissions-1LEZL9Oy.js";
//#region ../../projects/subsystem/src/boot/capacitor-share-intent.ts
var n = (e) => {
	if (e == null) return "";
	if (typeof e == "string") {
		let t = e.trim();
		if (!t) return "";
		try {
			let e = JSON.parse(t);
			return String(e?.text || t).trim();
		} catch {
			return t;
		}
	}
	return String(e.text || "").trim();
}, r = (e) => {
	let t = e.cwsp && typeof e.cwsp == "object" ? e.cwsp : {}, n = String(t.shareIntentDestinationIds || t.destinationNodeIds || "*").trim() || "*";
	return n === "*" || n.toLowerCase() === "any" ? ["*"] : n.split(/[;,]/).map((e) => e.trim()).filter(Boolean);
}, i = !1, a = () => {
	!t() || i || e() || (i = !0, window.addEventListener("cws:shareIntent", (e) => {
		(async () => {
			let t = n(e.detail);
			if (!t) return;
			let [{ loadSettings: i }, a] = await Promise.all([import("./Settings-DoiAXxHI.js"), import("./websocket-DOcnQ6On.js")]), o = r(i());
			a.connectWS(), a.sendCoordinatorAct("clipboard:update", {
				text: t,
				source: "android-share"
			}, o);
		})().catch(() => {});
	}));
};
//#endregion
export { a as installCapacitorShareIntentBridge };
