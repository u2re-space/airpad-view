import { ImmersiveShell as e, t } from "./src-CkOPVvEk.js";
//#region ../../shells/content-shell/src/content-overrides.scss?inline
var n = "/* WHY: Host + chrome are non-targets; slotted views and overlay children use `pointer-events: auto`. */\n@layer shell.overrides {\n  :host([data-shell=content]) {\n    pointer-events: none;\n    background: transparent;\n  }\n  :host([data-shell=content]):has(> .app-shell) {\n    --shell-bg: transparent;\n  }\n  :host([data-shell=content]) .app-shell,\n  :host([data-shell=content]) .app-shell__viewport,\n  :host([data-shell=content]) .app-shell__content {\n    pointer-events: none;\n  }\n  /* Light-DOM view roots (`slot=\"view\"`) stay clickable; empty shell remains pass-through. */\n  :host([data-shell=content]) ::slotted([data-view]) {\n    pointer-events: auto;\n  }\n  /* Dialogs / modals under `[data-shell-overlays]` */\n  :host([data-shell=content]) .app-shell__overlays > * {\n    pointer-events: auto;\n  }\n}", r = class extends e {
	layout = {
		hasSidebar: !1,
		hasToolbar: !1,
		hasTabs: !1,
		supportsMultiView: !0,
		supportsWindowing: !0
	};
	id = "content";
	name = "Content";
	getStylesheet() {
		return `${t}${n}`;
	}
	renderView(e) {
		super.renderView(e), e.style.pointerEvents = "auto";
	}
	async mount(e) {
		await super.mount(e);
		let t = this.rootElement;
		t && (t.style.pointerEvents = "none");
		let n = t?.shadowRoot?.querySelector(".app-shell__viewport");
		n && (n.style.pointerEvents = "none"), this.contentContainer && (this.contentContainer.style.pointerEvents = "none"), this.overlayContainer && (this.overlayContainer.style.pointerEvents = "none");
	}
};
function i(e) {
	return new r();
}
//#endregion
export { r as ContentShell, i as createShell, i as default };
