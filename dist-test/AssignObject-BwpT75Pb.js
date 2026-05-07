import { cr as e, ur as t } from "./src-BoL7goZG.js";
import { h as n } from "./src-CJkOASls.js";
//#region ../../projects/object.ts/src/wrap/AssignObject.ts
var r = class {
	constructor() {}
	deleteProperty(e, t) {
		return Reflect.deleteProperty(e, t);
	}
	construct(e, t, n) {
		return Reflect.construct(e, t, n);
	}
	apply(e, t, n) {
		return Reflect.apply(e, t, n);
	}
	has(e, t) {
		return Reflect.has(e, t);
	}
	set(e, t, r) {
		return n(e, r, t), !0;
	}
	get(e, t, n) {
		return typeof t == "symbol" ? e?.[t] ?? e : Reflect.get(e, t, n);
	}
}, i = (n) => {
	if (n?.[t] || e.has(n)) return n;
	let i = new Proxy(n, new r());
	return e.set(i, n), i;
};
//#endregion
export { i as t };
