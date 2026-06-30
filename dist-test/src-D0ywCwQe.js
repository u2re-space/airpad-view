import { ImmersiveShell as e, t } from "./src-eoMwrL16.js";
//#region ../../shells/content-shell/src/content-overrides.scss?inline
var n = "/* WHY: Host + chrome are non-targets; slotted views and overlay children use `pointer-events: auto`. */\n@layer shell.overrides {\n  :host([data-shell=content]) {\n    pointer-events: none;\n    background: transparent;\n  }\n  :host([data-shell=content]):has(> .app-shell) {\n    --shell-bg: transparent;\n  }\n  :host([data-shell=content]) .app-shell,\n  :host([data-shell=content]) .app-shell__viewport,\n  :host([data-shell=content]) .app-shell__content {\n    pointer-events: none;\n  }\n  /* Nav chrome is part of the viewport stack; keep it targetable while host/viewport pass through. */\n  :host([data-shell=content]) .app-shell__nav {\n    pointer-events: auto;\n  }\n  /* Light-DOM view roots (default / unnamed slot) stay clickable; empty shell remains pass-through. */\n  :host([data-shell=content]) ::slotted([data-view]) {\n    pointer-events: auto;\n  }\n  /*\n   * Optional: set `data-content-views=\"hidden\"` on the shell host to keep routed views invisible\n   * until a tool (e.g. snipping) sets `data-content-views=\"visible\"`.\n   */\n  :host([data-shell=content][data-content-views=hidden]) ::slotted([data-view]) {\n    visibility: hidden;\n    opacity: 0;\n    pointer-events: none;\n  }\n  /* Dialogs / menus / tooltips: light-DOM `slot=\"overlay\"` or shadow-appended nodes under overlays. */\n  :host([data-shell=content]) .app-shell__overlays > *,\n  :host([data-shell=content]) .app-shell__overlays > slot::slotted(*) {\n    pointer-events: auto;\n  }\n}", r = class extends e {
	layout = {
		hasSidebar: !1,
		hasToolbar: !1,
		hasTabs: !1,
		supportsMultiView: !0,
		supportsWindowing: !0
	};
	id = "content";
	name = "Content";
	includeUnderlyingSlot() {
		return !1;
	}
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
