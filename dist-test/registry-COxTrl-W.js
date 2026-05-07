//#region ../../projects/subsystem/registry.ts
var e = class extends HTMLElement {
	id = "view";
	name = "View";
	icon = "square";
	options = {};
	lifecycle = {};
	constructor(e) {
		super(), e && (this.options = e);
	}
	render(e) {
		return e && (this.options = {
			...this.options,
			...e
		}), this;
	}
};
function t(t, n) {
	let r = globalThis.customElements?.get?.(t);
	if (r) return r;
	let i = n(e);
	return globalThis.customElements?.define?.(t, i), i;
}
//#endregion
export { t };
