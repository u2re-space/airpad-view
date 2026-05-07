import { br as e } from "./src-BoL7goZG.js";
import { C as t, i as n, v as r, w as i } from "./config-BynrmT5f.js";
import "./state-storage-BZjAnIE5.js";
import { t as a } from "./Theme-DJ-tYz1b.js";
import { a as o, i as s, l as c, o as l, r as u, t as d, u as f } from "./registry-DJgKyR3r.js";
import { i as p } from "./channel-mixin-CGqsdyBK.js";
import { initCwsNativeBridge as m, isCapacitorCwsNativeShell as h } from "./cws-bridge-BnvQqqE6.js";
import { n as g } from "./SettingsTypes-BMR8vm8-.js";
import { i as _, n as v } from "./Settings-DI63CTRU.js";
//#region ../../projects/subsystem/src/routing/core/layer-manager.ts
var y = [
	{
		name: "ux-normalize",
		category: "system",
		order: 0,
		description: "Veela normalize layer"
	},
	{
		name: "layer.reset",
		category: "system",
		order: 0,
		description: "CSS reset rules"
	},
	{
		name: "layer.normalize",
		category: "system",
		order: 10,
		description: "Normalize browser defaults"
	},
	{
		name: "tokens",
		category: "system",
		order: 20,
		description: "Legacy tokens layer"
	},
	{
		name: "ux-tokens",
		category: "system",
		order: 20,
		description: "Veela token layer"
	},
	{
		name: "layer.tokens",
		category: "system",
		order: 20,
		description: "CSS custom properties (variables)"
	},
	{
		name: "base",
		category: "system",
		order: 30,
		description: "Legacy base layer"
	},
	{
		name: "ux-base",
		category: "system",
		order: 30,
		description: "Veela base layer"
	},
	{
		name: "layout",
		category: "system",
		order: 40,
		description: "Legacy layout layer"
	},
	{
		name: "ux-layout",
		category: "system",
		order: 40,
		description: "Veela layout layer"
	},
	{
		name: "components",
		category: "system",
		order: 50,
		description: "Legacy components layer"
	},
	{
		name: "ux-components",
		category: "system",
		order: 50,
		description: "Veela components layer"
	},
	{
		name: "utilities",
		category: "system",
		order: 60,
		description: "Legacy utilities layer"
	},
	{
		name: "ux-utilities",
		category: "system",
		order: 60,
		description: "Veela utilities layer"
	},
	{
		name: "ux-theme",
		category: "system",
		order: 70,
		description: "Veela theme layer"
	},
	{
		name: "ux-overrides",
		category: "system",
		order: 80,
		description: "Veela overrides layer"
	},
	{
		name: "layer.properties.shell",
		category: "system",
		order: 30,
		description: "Shell context custom properties"
	},
	{
		name: "layer.properties.views",
		category: "system",
		order: 35,
		description: "View context custom properties"
	},
	{
		name: "layer.runtime.base",
		category: "runtime",
		order: 100,
		description: "Veela runtime base styles"
	},
	{
		name: "layer.runtime.components",
		category: "runtime",
		order: 110,
		description: "Reusable component styles"
	},
	{
		name: "layer.runtime.forms",
		category: "runtime",
		order: 115,
		description: "Form element base styles"
	},
	{
		name: "layer.runtime.utilities",
		category: "runtime",
		order: 120,
		description: "Utility classes"
	},
	{
		name: "layer.runtime.animations",
		category: "runtime",
		order: 130,
		description: "Keyframes and animation definitions"
	},
	{
		name: "layer.boot",
		category: "runtime",
		order: 140,
		description: "Boot/choice screen styles"
	},
	{
		name: "boot.tokens",
		category: "runtime",
		order: 142,
		description: "Boot tokens layer"
	},
	{
		name: "boot.base",
		category: "runtime",
		order: 144,
		description: "Boot base layer"
	},
	{
		name: "boot.components",
		category: "runtime",
		order: 146,
		description: "Boot components layer"
	},
	{
		name: "boot.responsive",
		category: "runtime",
		order: 148,
		description: "Boot responsive adjustments"
	},
	{
		name: "layer.shell.common",
		category: "shell",
		order: 200,
		description: "Shared shell styles"
	},
	{
		name: "shell.tokens",
		category: "shell",
		order: 202,
		description: "Legacy shell tokens"
	},
	{
		name: "shell.base",
		category: "shell",
		order: 204,
		description: "Legacy shell base"
	},
	{
		name: "shell.components",
		category: "shell",
		order: 206,
		description: "Legacy shell components"
	},
	{
		name: "shell.utilities",
		category: "shell",
		order: 208,
		description: "Legacy shell utilities"
	},
	{
		name: "shell.overrides",
		category: "shell",
		order: 209,
		description: "Legacy shell overrides"
	},
	{
		name: "layer.shell.raw",
		category: "shell",
		order: 210,
		description: "Raw shell (minimal)"
	},
	{
		name: "layer.shell.minimal",
		category: "shell",
		order: 220,
		description: "Minimal shell (toolbar navigation)"
	},
	{
		name: "layer.shell.minimal.layout",
		category: "shell",
		order: 222,
		description: "Minimal shell layout rules"
	},
	{
		name: "layer.shell.minimal.components",
		category: "shell",
		order: 224,
		description: "Minimal shell component styles"
	},
	{
		name: "layer.shell.window",
		category: "shell",
		order: 226,
		description: "Window shell (desktop/process frames)"
	},
	{
		name: "layer.shell.faint",
		category: "shell",
		order: 230,
		description: "Faint shell (tabbed sidebar)"
	},
	{
		name: "layer.shell.faint.layout",
		category: "shell",
		order: 232,
		description: "Faint shell layout"
	},
	{
		name: "layer.shell.faint.sidebar",
		category: "shell",
		order: 234,
		description: "Faint shell sidebar"
	},
	{
		name: "layer.shell.faint.toolbar",
		category: "shell",
		order: 236,
		description: "Faint shell toolbar"
	},
	{
		name: "layer.shell.faint.forms",
		category: "shell",
		order: 238,
		description: "Faint shell form components"
	},
	{
		name: "layer.view.common",
		category: "view",
		order: 300,
		description: "Shared view styles"
	},
	{
		name: "layer.view.viewer",
		category: "view",
		order: 310,
		description: "Markdown viewer"
	},
	{
		name: "layer.view.workcenter",
		category: "view",
		order: 320,
		description: "Work center (AI prompts)"
	},
	{
		name: "layer.view.workcenter.keyframes",
		category: "view",
		order: 322,
		description: "Work center animations"
	},
	{
		name: "view.workcenter",
		category: "view",
		order: 324,
		description: "Work center styles (legacy name)"
	},
	{
		name: "view.workcenter.animations",
		category: "view",
		order: 326,
		description: "Work center animations (legacy name)"
	},
	{
		name: "layer.view.settings",
		category: "view",
		order: 330,
		description: "Settings view"
	},
	{
		name: "layer.view.explorer",
		category: "view",
		order: 340,
		description: "File explorer"
	},
	{
		name: "layer.view.history",
		category: "view",
		order: 350,
		description: "History view"
	},
	{
		name: "layer.view.editor",
		category: "view",
		order: 360,
		description: "Editor view"
	},
	{
		name: "layer.view.editor.markdown",
		category: "view",
		order: 362,
		description: "Markdown editor sublayer"
	},
	{
		name: "layer.view.editor.quill",
		category: "view",
		order: 364,
		description: "Quill editor sublayer"
	},
	{
		name: "layer.view.airpad",
		category: "view",
		order: 370,
		description: "Airpad (touch input)"
	},
	{
		name: "view.airpad",
		category: "view",
		order: 371,
		description: "Airpad SCSS @layer view.airpad (alias)"
	},
	{
		name: "layer.view.home",
		category: "view",
		order: 380,
		description: "Home/landing view"
	},
	{
		name: "layer.view.print",
		category: "view",
		order: 390,
		description: "Print view"
	},
	{
		name: "view-explorer",
		category: "view",
		order: 392,
		description: "Explorer legacy layered scope"
	},
	{
		name: "view-transitions",
		category: "override",
		order: 850,
		description: "View Transition API named targets and keyframes"
	},
	{
		name: "layer.override.theme",
		category: "override",
		order: 900,
		description: "Theme customizations"
	},
	{
		name: "layer.override.print",
		category: "override",
		order: 910,
		description: "Print media styles"
	},
	{
		name: "layer.override.a11y",
		category: "override",
		order: 920,
		description: "Accessibility enhancements"
	}
], b = !1;
function x() {
	if (b) {
		console.debug("[LayerManager] Already initialized");
		return;
	}
	if (typeof document > "u") {
		console.warn("[LayerManager] No document available (SSR context?)");
		return;
	}
	let e = [...y].sort((e, t) => e.order - t.order).map((e) => e.name), t = `@layer ${e.join(", ")};`, n = document.createElement("style");
	n.id = "css-layer-init", n.setAttribute("data-layer-manager", "true"), n.textContent = t;
	let r = document.head;
	r.insertBefore(n, r.firstChild), b = !0, console.log(`[LayerManager] Initialized ${e.length} layers`);
}
//#endregion
//#region ../../projects/veela.css/src/scss/core/index.scss?inline
var S = "@function --hsv(--src-color <color>) returns <color> {\n  result: hsl(from var(--src-color, black) h calc(calc((calc(l / 100) - calc(calc(l / 100) * (1 - calc(s / 100) / 2))) / clamp(0.0001, min(calc(calc(l / 100) * (1 - calc(s / 100) / 2)), calc(1 - calc(calc(l / 100) * (1 - calc(s / 100) / 2)))), 1)) * 100) calc(calc(calc(l / 100) * (1 - calc(s / 100) / 2)) * 100) / alpha);\n}\n/* ai-refactor: optimized/refactored at 2026-02-13T02:50:43Z */\n/* ==========================================================================\n    Meta / Declarations\n   ========================================================================== */\n/* ==========================================================================\n    Tokens / Mixins (global, not layered)\n   ========================================================================== */\n/* ai-refactor: optimized/refactored at 2026-02-13T00:48:23Z */\n@layer tokens, base, layout, utilities, shells, shell, views, view, viewer, components, ux-layer, markdown, essentials, print, print-breaks, overrides;\n@layer tokens {\n  :root,\n  :host,\n  :scope {\n    color-scheme: light dark;\n    --color-primary: #5a7fff;\n    --color-on-primary: #ffffff;\n    --color-secondary: #6b7280;\n    --color-on-secondary: #ffffff;\n    --color-tertiary: #64748b;\n    --color-on-tertiary: #ffffff;\n    --color-error: #ef4444;\n    --color-on-error: #ffffff;\n    --color-success: #4caf50;\n    --color-warning: #ff9800;\n    --color-info: #2196f3;\n    --color-background: #fafbfc;\n    --color-on-background: #1e293b;\n    --color-surface: #fafbfc;\n    --color-on-surface: #1e293b;\n    --color-surface-variant: #f1f5f9;\n    --color-on-surface-variant: #64748b;\n    --color-outline: #cbd5e1;\n    --color-outline-variant: #94a3b8;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 96%, var(--color-primary) 4%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 75%, transparent);\n    --space-xs: 0.25rem;\n    --space-sm: 0.5rem;\n    --space-md: 0.75rem;\n    --space-lg: 1rem;\n    --space-xl: 1.25rem;\n    --space-2xl: 1.5rem;\n    --padding-xs: var(--space-xs);\n    --padding-sm: var(--space-sm);\n    --padding-md: var(--space-md);\n    --padding-lg: var(--space-lg);\n    --padding-xl: var(--space-xl);\n    --padding-2xl: var(--space-2xl);\n    --padding-3xl: 2rem;\n    --padding-4xl: 2.5rem;\n    --padding-5xl: 3rem;\n    --padding-6xl: 4rem;\n    --padding-7xl: 5rem;\n    --padding-8xl: 6rem;\n    --padding-9xl: 8rem;\n    --gap-xs: var(--space-xs);\n    --gap-sm: var(--space-sm);\n    --gap-md: var(--space-md);\n    --gap-lg: var(--space-lg);\n    --gap-xl: var(--space-xl);\n    --gap-2xl: var(--space-2xl);\n    --radius-none: 0;\n    --radius-sm: 0.25rem;\n    --radius-default: 0.25rem;\n    --radius-md: 0.375rem;\n    --radius-lg: 0.5rem;\n    --radius-xl: 0.75rem;\n    --radius-2xl: 1rem;\n    --radius-3xl: 1.5rem;\n    --radius-full: 9999px;\n    --elev-0: none;\n    --elev-1: 0 1px 1px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1);\n    --elev-2: 0 2px 6px rgba(0, 0, 0, 0.12), 0 8px 24px rgba(0, 0, 0, 0.08);\n    --elev-3: 0 6px 16px rgba(0, 0, 0, 0.14), 0 18px 48px rgba(0, 0, 0, 0.1);\n    --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);\n    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);\n    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);\n    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);\n    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);\n    --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.1);\n    --shadow-inset: inset 0 2px 4px rgba(0, 0, 0, 0.06);\n    --shadow-inset-strong: inset 0 4px 8px rgba(0, 0, 0, 0.12);\n    --shadow-none: 0 0 #0000;\n    --text-xs: 0.8rem;\n    --text-sm: 0.9rem;\n    --text-base: 1rem;\n    --text-lg: 1.1rem;\n    --text-xl: 1.25rem;\n    --text-2xl: 1.6rem;\n    --text-3xl: 2rem;\n    --font-size-xs: 0.75rem;\n    --font-size-sm: 0.875rem;\n    --font-size-base: 1rem;\n    --font-size-lg: 1.125rem;\n    --font-size-xl: 1.25rem;\n    --font-weight-normal: 400;\n    --font-weight-medium: 500;\n    --font-weight-semibold: 600;\n    --font-weight-bold: 700;\n    --font-family: \"Roboto\", ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;\n    --font-family-mono: \"Roboto Mono\", \"SF Mono\", Monaco, Inconsolata, \"Fira Code\", monospace;\n    --font-sans: var(--font-family);\n    --font-mono: var(--font-family-mono);\n    --leading-tight: 1.2;\n    --leading-normal: 1.5;\n    --leading-relaxed: 1.8;\n    --transition-fast: 120ms cubic-bezier(0.2, 0, 0, 1);\n    --transition-normal: 160ms cubic-bezier(0.2, 0, 0, 1);\n    --transition-slow: 200ms cubic-bezier(0.2, 0, 0, 1);\n    --motion-fast: var(--transition-fast);\n    --motion-normal: var(--transition-normal);\n    --motion-slow: var(--transition-slow);\n    --focus-ring: 0 0 0 3px color-mix(in oklab, var(--color-primary) 35%, transparent);\n    --z-base: 0;\n    --z-dropdown: 100;\n    --z-sticky: 200;\n    --z-fixed: 300;\n    --z-modal-backdrop: 400;\n    --z-modal: 500;\n    --z-popover: 600;\n    --z-tooltip: 700;\n    --z-toast: 800;\n    --z-max: 9999;\n    --view-bg: var(--color-surface);\n    --view-fg: var(--color-on-surface);\n    --view-border: var(--color-outline-variant);\n    --view-input-bg: light-dark(#ffffff, var(--color-surface-container-high));\n    --view-files-bg: light-dark(rgba(0, 0, 0, 0.02), var(--color-surface-container-low));\n    --view-file-bg: light-dark(rgba(0, 0, 0, 0.03), var(--color-surface-container-lowest, var(--color-surface-container-low)));\n    --view-results-bg: light-dark(rgba(0, 0, 0, 0.01), var(--color-surface-container-low));\n    --view-result-bg: light-dark(rgba(0, 0, 0, 0.03), var(--color-surface-container-lowest, var(--color-surface-container-low)));\n    --color-surface-elevated: var(--color-surface-container);\n    --color-surface-hover: var(--color-surface-container-low);\n    --color-surface-active: var(--color-surface-container-high);\n    --color-on-surface-muted: var(--color-on-surface-variant);\n    --color-background-alt: var(--color-surface-variant);\n    --color-primary-hover: color-mix(in oklab, var(--color-primary) 80%, black);\n    --color-primary-active: color-mix(in oklab, var(--color-primary) 65%, black);\n    --color-accent: var(--color-secondary);\n    --color-accent-hover: color-mix(in oklab, var(--color-secondary) 80%, black);\n    --color-on-accent: var(--color-on-secondary);\n    --color-border-hover: var(--color-outline-variant);\n    --color-border-strong: var(--color-outline);\n    --color-border-focus: var(--color-primary);\n    --color-text: var(--color-on-surface);\n    --color-text-secondary: var(--color-on-surface-variant);\n    --color-text-muted: color-mix(in oklab, var(--color-on-surface) 50%, var(--color-surface));\n    --color-text-disabled: color-mix(in oklab, var(--color-on-surface) 38%, var(--color-surface));\n    --color-text-inverse: var(--color-on-primary);\n    --color-link: var(--color-primary);\n    --color-link-hover: color-mix(in oklab, var(--color-primary) 80%, black);\n    --color-success-light: color-mix(in oklab, var(--color-success) 60%, white);\n    --color-success-dark: color-mix(in oklab, var(--color-success) 70%, black);\n    --color-warning-light: color-mix(in oklab, var(--color-warning) 60%, white);\n    --color-warning-dark: color-mix(in oklab, var(--color-warning) 70%, black);\n    --color-error-light: color-mix(in oklab, var(--color-error) 60%, white);\n    --color-error-dark: color-mix(in oklab, var(--color-error) 70%, black);\n    --color-info-light: color-mix(in oklab, var(--color-info) 60%, white);\n    --color-info-dark: color-mix(in oklab, var(--color-info) 70%, black);\n    --color-bg: var(--color-surface, var(--color-surface));\n    --color-bg-alt: var(--color-surface-variant, var(--color-surface-variant));\n    --color-fg: var(--color-on-surface, var(--color-on-surface));\n    --color-fg-muted: var(--color-on-surface-variant, var(--color-on-surface-variant));\n    --btn-height-sm: 2rem;\n    --btn-height-md: 2.5rem;\n    --btn-height-lg: 3rem;\n    --btn-padding-x-sm: var(--space-md);\n    --btn-padding-x-md: var(--space-lg);\n    --btn-padding-x-lg: 1.5rem;\n    --btn-radius: var(--radius-md);\n    --btn-font-weight: var(--font-weight-medium);\n    --input-height-sm: 2rem;\n    --input-height-md: 2.5rem;\n    --input-height-lg: 3rem;\n    --input-padding-x: var(--space-md);\n    --input-radius: var(--radius-md);\n    --input-border-color: var(--color-border, var(--color-border));\n    --input-focus-ring-color: var(--color-primary);\n    --input-focus-ring-width: 2px;\n    --card-padding: var(--space-lg);\n    --card-radius: var(--radius-lg);\n    --card-shadow: var(--shadow-sm);\n    --card-border-color: var(--color-border, var(--color-border));\n    --modal-backdrop-bg: light-dark(rgb(0 0 0 / 0.5), rgb(0 0 0 / 0.7));\n    --modal-bg: var(--color-surface, var(--color-surface));\n    --modal-radius: var(--radius-xl);\n    --modal-shadow: var(--shadow-xl);\n    --modal-padding: 1.5rem;\n    --toast-font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif);\n    --toast-font-size: var(--font-size-base, 1rem);\n    --toast-font-weight: var(--font-weight-medium, 500);\n    --toast-letter-spacing: 0.01em;\n    --toast-line-height: 1.4;\n    --toast-white-space: nowrap;\n    --toast-pointer-events: auto;\n    --toast-user-select: none;\n    --toast-cursor: default;\n    --toast-opacity: 0;\n    --toast-transform: translateY(100%) scale(0.9);\n    --toast-transition: opacity 160ms ease-out, transform 160ms cubic-bezier(0.16, 1, 0.3, 1), background-color 100ms ease;\n    --toast-text: var(--color-on-surface, var(--color-on-surface, light-dark(#ffffff, #000000)));\n    --toast-bg: color-mix(in oklab, var(--color-surface-elevated, var(--color-surface-container-high, var(--color-surface, light-dark(#fafbfc, #1e293b)))) 90%, var(--color-on-surface, var(--color-on-surface, light-dark(#000000, #ffffff))));\n    --toast-radius: var(--radius-lg);\n    --toast-shadow: var(--shadow-lg);\n    --toast-padding: var(--space-lg);\n    --sidebar-width: 280px;\n    --sidebar-collapsed-width: 64px;\n    --nav-height: 56px;\n    --nav-height-compact: 48px;\n    --status-height: 24px;\n    --status-bg: var(--color-surface-elevated, var(--color-surface-container-high));\n    --status-font-size: var(--text-xs);\n  }\n  @media (prefers-color-scheme: dark) {\n    :root,\n    :host,\n    :scope {\n      --color-primary: #7ca7ff;\n      --color-on-primary: #0f172a;\n      --color-secondary: #94a3b8;\n      --color-on-secondary: #1e293b;\n      --color-tertiary: #94a3b8;\n      --color-on-tertiary: #0f172a;\n      --color-error: #f87171;\n      --color-on-error: #450a0a;\n      --color-success: #66bb6a;\n      --color-warning: #ffa726;\n      --color-info: #42a5f5;\n      --color-background: #0f1419;\n      --color-on-background: #f1f5f9;\n      --color-surface: #0f1419;\n      --color-on-surface: #f1f5f9;\n      --color-surface-variant: #1e293b;\n      --color-on-surface-variant: #cbd5e1;\n      --color-outline: #475569;\n      --color-outline-variant: #334155;\n      --color-surface-container-low: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n      --color-surface-container: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n      --color-surface-container-high: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n      --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 80%, var(--color-primary) 20%);\n      --color-border: color-mix(in oklab, var(--color-outline-variant) 70%, transparent);\n    }\n  }\n  [data-theme=light] {\n    color-scheme: light;\n    --color-primary: #5a7fff;\n    --color-on-primary: #ffffff;\n    --color-secondary: #6b7280;\n    --color-on-secondary: #ffffff;\n    --color-tertiary: #64748b;\n    --color-on-tertiary: #ffffff;\n    --color-error: #ef4444;\n    --color-on-error: #ffffff;\n    --color-success: #4caf50;\n    --color-warning: #ff9800;\n    --color-info: #2196f3;\n    --color-background: #fafbfc;\n    --color-on-background: #1e293b;\n    --color-surface: #fafbfc;\n    --color-on-surface: #1e293b;\n    --color-surface-variant: #f1f5f9;\n    --color-on-surface-variant: #64748b;\n    --color-outline: #cbd5e1;\n    --color-outline-variant: #94a3b8;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 96%, var(--color-primary) 4%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 75%, transparent);\n  }\n  [data-theme=dark] {\n    color-scheme: dark;\n    --color-primary: #7ca7ff;\n    --color-on-primary: #0f172a;\n    --color-secondary: #94a3b8;\n    --color-on-secondary: #1e293b;\n    --color-tertiary: #94a3b8;\n    --color-on-tertiary: #0f172a;\n    --color-error: #f87171;\n    --color-on-error: #450a0a;\n    --color-success: #66bb6a;\n    --color-warning: #ffa726;\n    --color-info: #42a5f5;\n    --color-background: #0f1419;\n    --color-on-background: #f1f5f9;\n    --color-surface: #0f1419;\n    --color-on-surface: #f1f5f9;\n    --color-surface-variant: #1e293b;\n    --color-on-surface-variant: #cbd5e1;\n    --color-outline: #475569;\n    --color-outline-variant: #334155;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 80%, var(--color-primary) 20%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 70%, transparent);\n  }\n  @media (prefers-reduced-motion: reduce) {\n    :root {\n      --transition-fast: 0ms;\n      --transition-normal: 0ms;\n      --transition-slow: 0ms;\n      --motion-fast: 0ms;\n      --motion-normal: 0ms;\n      --motion-slow: 0ms;\n    }\n  }\n  @media (prefers-contrast: high) {\n    :root {\n      --color-border: var(--color-border, var(--color-outline));\n      --color-border-hover: color-mix(in oklab, var(--color-border, var(--color-outline)) 80%, var(--color-on-surface, var(--color-on-surface)));\n      --color-text-secondary: var(--color-on-surface, var(--color-on-surface));\n      --color-text-muted: var(--color-on-surface-variant, var(--color-on-surface-variant));\n    }\n  }\n  @media print {\n    :root {\n      --view-padding: 0;\n      --view-content-max-width: 100%;\n      --view-bg: white;\n      --view-fg: black;\n      --view-heading-color: black;\n      --view-link-color: black;\n    }\n    :root:has([data-view=viewer]) {\n      --view-code-bg: #f5f5f5;\n      --view-code-fg: black;\n      --view-blockquote-bg: #f5f5f5;\n    }\n  }\n}\n/**\n * Unified CSS Custom Property Registration System\n * \n * This module consolidates property registration logic used across the library.\n * It provides a single source of truth for @property declarations via the\n * CSS Properties and Values API (CSS Houdini).\n * \n * Used by:\n * - lib/core/_properties.scss (orientation, transform, layout properties)\n * - lib/basic/_typed-properties.scss (UI component properties)\n * - lib/advanced/design/ (MD3 design properties)\n */\n/* stylelint-disable scss/function-no-unknown */\n@layer utilities {\n  .m-0 {\n    margin: 0;\n  }\n  .mb-0 {\n    margin-block: 0;\n  }\n  .mi-0 {\n    margin-inline: 0;\n  }\n  .p-0 {\n    padding: 0;\n  }\n  .pb-0 {\n    padding-block: 0;\n  }\n  .pi-0 {\n    padding-inline: 0;\n  }\n  .gap-0 {\n    gap: 0;\n  }\n  .inset-0 {\n    inset: 0;\n  }\n  .m-xs {\n    margin: 0.25rem;\n  }\n  .mb-xs {\n    margin-block: 0.25rem;\n  }\n  .mi-xs {\n    margin-inline: 0.25rem;\n  }\n  .p-xs {\n    padding: 0.25rem;\n  }\n  .pb-xs {\n    padding-block: 0.25rem;\n  }\n  .pi-xs {\n    padding-inline: 0.25rem;\n  }\n  .gap-xs {\n    gap: 0.25rem;\n  }\n  .inset-xs {\n    inset: 0.25rem;\n  }\n  .m-sm {\n    margin: 0.5rem;\n  }\n  .mb-sm {\n    margin-block: 0.5rem;\n  }\n  .mi-sm {\n    margin-inline: 0.5rem;\n  }\n  .p-sm {\n    padding: 0.5rem;\n  }\n  .pb-sm {\n    padding-block: 0.5rem;\n  }\n  .pi-sm {\n    padding-inline: 0.5rem;\n  }\n  .gap-sm {\n    gap: 0.5rem;\n  }\n  .inset-sm {\n    inset: 0.5rem;\n  }\n  .m-md {\n    margin: 0.75rem;\n  }\n  .mb-md {\n    margin-block: 0.75rem;\n  }\n  .mi-md {\n    margin-inline: 0.75rem;\n  }\n  .p-md {\n    padding: 0.75rem;\n  }\n  .pb-md {\n    padding-block: 0.75rem;\n  }\n  .pi-md {\n    padding-inline: 0.75rem;\n  }\n  .gap-md {\n    gap: 0.75rem;\n  }\n  .inset-md {\n    inset: 0.75rem;\n  }\n  .m-lg {\n    margin: 1rem;\n  }\n  .mb-lg {\n    margin-block: 1rem;\n  }\n  .mi-lg {\n    margin-inline: 1rem;\n  }\n  .p-lg {\n    padding: 1rem;\n  }\n  .pb-lg {\n    padding-block: 1rem;\n  }\n  .pi-lg {\n    padding-inline: 1rem;\n  }\n  .gap-lg {\n    gap: 1rem;\n  }\n  .inset-lg {\n    inset: 1rem;\n  }\n  .m-xl {\n    margin: 1.25rem;\n  }\n  .mb-xl {\n    margin-block: 1.25rem;\n  }\n  .mi-xl {\n    margin-inline: 1.25rem;\n  }\n  .p-xl {\n    padding: 1.25rem;\n  }\n  .pb-xl {\n    padding-block: 1.25rem;\n  }\n  .pi-xl {\n    padding-inline: 1.25rem;\n  }\n  .gap-xl {\n    gap: 1.25rem;\n  }\n  .inset-xl {\n    inset: 1.25rem;\n  }\n  .m-2xl {\n    margin: 1.5rem;\n  }\n  .mb-2xl {\n    margin-block: 1.5rem;\n  }\n  .mi-2xl {\n    margin-inline: 1.5rem;\n  }\n  .p-2xl {\n    padding: 1.5rem;\n  }\n  .pb-2xl {\n    padding-block: 1.5rem;\n  }\n  .pi-2xl {\n    padding-inline: 1.5rem;\n  }\n  .gap-2xl {\n    gap: 1.5rem;\n  }\n  .inset-2xl {\n    inset: 1.5rem;\n  }\n  .m-3xl {\n    margin: 2rem;\n  }\n  .mb-3xl {\n    margin-block: 2rem;\n  }\n  .mi-3xl {\n    margin-inline: 2rem;\n  }\n  .p-3xl {\n    padding: 2rem;\n  }\n  .pb-3xl {\n    padding-block: 2rem;\n  }\n  .pi-3xl {\n    padding-inline: 2rem;\n  }\n  .gap-3xl {\n    gap: 2rem;\n  }\n  .inset-3xl {\n    inset: 2rem;\n  }\n  .text-xs {\n    font-size: 0.75rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-sm {\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-base {\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-lg {\n    font-size: 1.125rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-xl {\n    font-size: 1.25rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-2xl {\n    font-size: 1.5rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .font-thin {\n    font-weight: 100;\n  }\n  .font-light {\n    font-weight: 300;\n  }\n  .font-normal {\n    font-weight: 400;\n  }\n  .font-medium {\n    font-weight: 500;\n  }\n  .font-semibold {\n    font-weight: 600;\n  }\n  .font-bold {\n    font-weight: 700;\n  }\n  .text-start {\n    text-align: start;\n  }\n  .text-center {\n    text-align: center;\n  }\n  .text-end {\n    text-align: end;\n  }\n  .text-primary {\n    color: #1e293b, #f1f5f9;\n  }\n  .text-secondary {\n    color: #64748b, #94a3b8;\n  }\n  .text-muted {\n    color: #94a3b8, #64748b;\n  }\n  .text-disabled {\n    color: #cbd5e1, #475569;\n  }\n  .block,\n  .vu-block {\n    display: block;\n  }\n  .inline,\n  .vu-inline {\n    display: inline;\n  }\n  .inline-block {\n    display: inline-block;\n  }\n  .flex,\n  .vu-flex {\n    display: flex;\n  }\n  .inline-flex {\n    display: inline-flex;\n  }\n  .grid,\n  .vu-grid {\n    display: grid;\n  }\n  .hidden,\n  .vu-hidden {\n    display: none;\n  }\n  .flex-row {\n    flex-direction: row;\n  }\n  .flex-col {\n    flex-direction: column;\n  }\n  .flex-wrap {\n    flex-wrap: wrap;\n  }\n  .flex-nowrap {\n    flex-wrap: nowrap;\n  }\n  .items-start {\n    align-items: flex-start;\n  }\n  .items-center {\n    align-items: center;\n  }\n  .items-end {\n    align-items: flex-end;\n  }\n  .items-stretch {\n    align-items: stretch;\n  }\n  .justify-start {\n    justify-content: flex-start;\n  }\n  .justify-center {\n    justify-content: center;\n  }\n  .justify-end {\n    justify-content: flex-end;\n  }\n  .justify-between {\n    justify-content: space-between;\n  }\n  .justify-around {\n    justify-content: space-around;\n  }\n  .grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .h-auto,\n  .block-size-auto {\n    block-size: auto;\n  }\n  .h-full,\n  .block-size-full {\n    block-size: 100%;\n  }\n  .h-screen {\n    block-size: 100vh;\n  }\n  .w-auto,\n  .inline-size-auto {\n    inline-size: auto;\n  }\n  .w-full,\n  .inline-size-full {\n    inline-size: 100%;\n  }\n  .w-screen {\n    inline-size: 100vw;\n  }\n  .min-h-0,\n  .min-block-size-0 {\n    min-block-size: 0;\n  }\n  .min-w-0,\n  .min-inline-size-0 {\n    min-inline-size: 0;\n  }\n  .max-h-full,\n  .max-block-size-full {\n    max-block-size: 100%;\n  }\n  .max-w-full,\n  .max-inline-size-full {\n    max-inline-size: 100%;\n  }\n  .static {\n    position: static;\n  }\n  .relative {\n    position: relative;\n  }\n  .absolute {\n    position: absolute;\n  }\n  .fixed {\n    position: fixed;\n  }\n  .sticky {\n    position: sticky;\n  }\n  .bg-surface {\n    background-color: #fafbfc, #0f1419;\n  }\n  .bg-surface-container {\n    background-color: #f1f5f9, #1e293b;\n  }\n  .bg-surface-container-high {\n    background-color: #e2e8f0, #334155;\n  }\n  .bg-primary {\n    background-color: #5a7fff, #7ca7ff;\n  }\n  .bg-secondary {\n    background-color: #6b7280, #94a3b8;\n  }\n  .border {\n    border: 1px solid #cbd5e1, #475569;\n  }\n  .border-2 {\n    border: 2px solid #cbd5e1, #475569;\n  }\n  .border-primary {\n    border: 1px solid #5a7fff, #7ca7ff;\n  }\n  .border-secondary {\n    border: 1px solid #6b7280, #94a3b8;\n  }\n  .rounded-none {\n    border-radius: 0;\n  }\n  .rounded-sm {\n    border-radius: 0.25rem;\n  }\n  .rounded-md {\n    border-radius: 0.375rem;\n  }\n  .rounded-lg {\n    border-radius: 0.5rem;\n  }\n  .rounded-full {\n    border-radius: 9999px;\n  }\n  .shadow-xs {\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  }\n  .shadow-sm {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  }\n  .shadow-md {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  }\n  .shadow-lg {\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  }\n  .shadow-xl {\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  }\n  .cursor-pointer {\n    cursor: pointer;\n  }\n  .cursor-default {\n    cursor: default;\n  }\n  .cursor-not-allowed {\n    cursor: not-allowed;\n  }\n  .select-none {\n    user-select: none;\n  }\n  .select-text {\n    user-select: text;\n  }\n  .select-all {\n    user-select: all;\n  }\n  .visible {\n    visibility: visible;\n  }\n  .invisible {\n    visibility: hidden;\n  }\n  .collapse,\n  .vs-collapsed {\n    visibility: collapse;\n  }\n  .opacity-0 {\n    opacity: 0;\n  }\n  .opacity-25 {\n    opacity: 0.25;\n  }\n  .opacity-50 {\n    opacity: 0.5;\n  }\n  .opacity-75 {\n    opacity: 0.75;\n  }\n  .opacity-100 {\n    opacity: 1;\n  }\n  @container (max-width: 320px) {\n    .hidden\\@xs {\n      display: none;\n    }\n  }\n  @container (max-width: 640px) {\n    .hidden\\@sm {\n      display: none;\n    }\n  }\n  @container (max-width: 768px) {\n    .hidden\\@md {\n      display: none;\n    }\n  }\n  @container (max-width: 1024px) {\n    .hidden\\@lg {\n      display: none;\n    }\n  }\n  @container (min-width: 320px) {\n    .block\\@xs {\n      display: block;\n    }\n  }\n  @container (min-width: 640px) {\n    .block\\@sm {\n      display: block;\n    }\n  }\n  @container (min-width: 768px) {\n    .block\\@md {\n      display: block;\n    }\n  }\n  @container (min-width: 1024px) {\n    .block\\@lg {\n      display: block;\n    }\n  }\n  @container (max-width: 320px) {\n    .text-sm\\@xs {\n      font-size: 0.875rem;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0;\n    }\n  }\n  @container (min-width: 640px) {\n    .text-base\\@sm {\n      font-size: 1rem;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0;\n    }\n  }\n  .icon-xs {\n    --icon-size: 0.75rem;\n  }\n  .icon-sm {\n    --icon-size: 0.875rem;\n  }\n  .icon-md {\n    --icon-size: 1rem;\n  }\n  .icon-lg {\n    --icon-size: 1.25rem;\n  }\n  .icon-xl {\n    --icon-size: 1.5rem;\n  }\n  .center-absolute {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  .center-flex {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: nowrap;\n  }\n  .interactive {\n    cursor: pointer;\n    touch-action: manipulation;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .interactive:focus-visible {\n    outline: 2px solid #dbeafe, #1e40af;\n    outline-offset: 2px;\n  }\n  .interactive:disabled, .interactive[aria-disabled=true] {\n    cursor: not-allowed;\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  .focus-ring:focus-visible {\n    outline: 2px solid #dbeafe, #1e40af;\n    outline-offset: 2px;\n  }\n  .truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .truncate-2 {\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .truncate-3 {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .aspect-square {\n    aspect-ratio: 1;\n  }\n  .aspect-video {\n    aspect-ratio: 16 / 9;\n  }\n  .margin-block-0 {\n    margin-block: 0;\n  }\n  .margin-block-sm {\n    margin-block: var(--space-sm);\n  }\n  .margin-block-md {\n    margin-block: var(--space-md);\n  }\n  .margin-block-lg {\n    margin-block: var(--space-lg);\n  }\n  .margin-inline-0 {\n    margin-inline: 0;\n  }\n  .margin-inline-sm {\n    margin-inline: var(--space-sm);\n  }\n  .margin-inline-md {\n    margin-inline: var(--space-md);\n  }\n  .margin-inline-lg {\n    margin-inline: var(--space-lg);\n  }\n  .margin-inline-auto {\n    margin-inline: auto;\n  }\n  .padding-block-0 {\n    padding-block: 0;\n  }\n  .padding-block-sm {\n    padding-block: var(--space-sm);\n  }\n  .padding-block-md {\n    padding-block: var(--space-md);\n  }\n  .padding-block-lg {\n    padding-block: var(--space-lg);\n  }\n  .padding-inline-0 {\n    padding-inline: 0;\n  }\n  .padding-inline-sm {\n    padding-inline: var(--space-sm);\n  }\n  .padding-inline-md {\n    padding-inline: var(--space-md);\n  }\n  .padding-inline-lg {\n    padding-inline: var(--space-lg);\n  }\n  .pointer-events-none {\n    pointer-events: none;\n  }\n  .pointer-events-auto {\n    pointer-events: auto;\n  }\n  .line-clamp-1 {\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .line-clamp-2 {\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .line-clamp-3 {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .vs-active {\n    --state-active: 1;\n  }\n  .vs-disabled {\n    pointer-events: none;\n    opacity: 0.5;\n  }\n  .vs-loading {\n    cursor: wait;\n  }\n  .vs-error {\n    color: var(--color-error, #dc3545);\n  }\n  .vs-success {\n    color: var(--color-success, #28a745);\n  }\n  .vs-hidden {\n    display: none !important;\n  }\n  .vl-container,\n  .container {\n    inline-size: 100%;\n    max-inline-size: var(--container-max, 1200px);\n    margin-inline: auto;\n  }\n  .vl-container {\n    padding-inline: var(--space-md);\n  }\n  .container {\n    padding-inline: var(--space-lg);\n  }\n  .vl-grid {\n    display: grid;\n    gap: var(--gap-md);\n  }\n  .vl-stack {\n    display: flex;\n    flex-direction: column;\n    gap: var(--gap-md);\n  }\n  .vl-cluster {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--gap-sm);\n    align-items: center;\n  }\n  .vl-center {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .vu-sr-only {\n    position: absolute;\n    inline-size: 1px;\n    block-size: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n  }\n  .vc-surface {\n    background-color: var(--color-surface);\n    color: var(--color-on-surface);\n  }\n  .vc-surface-variant {\n    background-color: var(--color-surface-variant);\n    color: var(--color-on-surface-variant);\n  }\n  .vc-primary {\n    background-color: var(--color-primary);\n    color: var(--color-on-primary);\n  }\n  .vc-secondary {\n    background-color: var(--color-secondary);\n    color: var(--color-on-secondary);\n  }\n  .vc-elevated {\n    box-shadow: var(--elev-1);\n  }\n  .vc-elevated-2 {\n    box-shadow: var(--elev-2);\n  }\n  .vc-elevated-3 {\n    box-shadow: var(--elev-3);\n  }\n  .vc-rounded {\n    border-radius: var(--radius-md);\n  }\n  .vc-rounded-sm {\n    border-radius: var(--radius-sm);\n  }\n  .vc-rounded-lg {\n    border-radius: var(--radius-lg);\n  }\n  .vc-rounded-full {\n    border-radius: var(--radius-full, 9999px);\n  }\n  .card {\n    background: var(--color-bg);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-lg);\n    padding: var(--space-lg);\n    box-shadow: var(--shadow-sm);\n  }\n  .stack > * + * {\n    margin-block-start: var(--space-md);\n  }\n  .stack-sm > * + * {\n    margin-block-start: var(--space-sm);\n  }\n  .stack-lg > * + * {\n    margin-block-start: var(--space-lg);\n  }\n  @media print {\n    .print-hidden {\n      display: none !important;\n    }\n    .print-visible {\n      display: block !important;\n    }\n    .print-break-before {\n      page-break-before: always;\n    }\n    .print-break-after {\n      page-break-after: always;\n    }\n    .print-break-inside-avoid {\n      page-break-inside: avoid;\n    }\n  }\n  @media (prefers-reduced-motion: reduce) {\n    .transition-fast,\n    .transition-normal,\n    .transition-slow {\n      transition: none;\n    }\n    * {\n      animation-duration: 0.01ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01ms !important;\n    }\n  }\n  @media (prefers-contrast: high) {\n    .text-primary {\n      color: var(--color-on-surface);\n    }\n    .text-secondary,\n    .text-muted,\n    .text-disabled {\n      color: var(--color-on-surface-variant);\n    }\n    .border {\n      border-width: 2px;\n    }\n    .border-top {\n      border-top-width: 2px;\n    }\n    .border-bottom {\n      border-bottom-width: 2px;\n    }\n    .border-left {\n      border-left-width: 2px;\n    }\n    .border-right {\n      border-right-width: 2px;\n    }\n  }\n}\n@property --value {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: true;\n}\n@property --relate {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: true;\n}\n@property --drag-x {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: false;\n}\n@property --drag-y {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: false;\n}\n@property --order {\n  syntax: \"<integer>\";\n  initial-value: 1;\n  inherits: true;\n}\n@property --content-inline-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 100%;\n  inherits: true;\n}\n@property --content-block-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 100%;\n  inherits: true;\n}\n@property --icon-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 16px;\n  inherits: true;\n}\n@property --icon-color {\n  syntax: \"<color>\";\n  initial-value: rgba(0, 0, 0, 0);\n  inherits: true;\n}\n@property --icon-padding {\n  syntax: \"<length-percentage>\";\n  initial-value: 0px;\n  inherits: true;\n}\n@property --icon-image {\n  syntax: \"<image>\";\n  initial-value: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));\n  inherits: true;\n}\n@layer ux-classes {\n  .grid-rows > ::slotted(*) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  .grid-rows > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-rows > ::slotted(*) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  .grid-rows > * {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  .grid-rows > * {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-rows > * {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  :host(.grid-rows) ::slotted(*) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  :host(.grid-rows) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-rows) ::slotted(*) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  .grid-rows {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-rows {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows {\n    grid-auto-rows: minmax(0px, max-content);\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  :host(.grid-rows) {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-rows) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows) {\n    grid-auto-rows: minmax(0px, max-content);\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  .grid-columns > ::slotted(*) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  .grid-columns > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-columns > ::slotted(*) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  .grid-columns > * {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  .grid-columns > * {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-columns > * {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  .grid-columns {\n    --display: inline-grid;\n    --flow: row;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-columns {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-columns {\n    grid-auto-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  :host(.grid-columns) {\n    --display: inline-grid;\n    --flow: row;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-columns) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-columns) {\n    grid-auto-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  .flex-columns > ::slotted(*) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  .flex-columns > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.flex-columns) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  :host(.flex-columns) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  .flex-columns > * {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  .flex-columns > * {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.flex-columns) ::slotted(*) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  :host(.flex-columns) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .flex-columns {\n    --display: inline-flex;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .flex-columns {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.flex-columns) {\n    --display: inline-flex;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.flex-columns) {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-layered > ::slotted(*) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > ::slotted(*) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) ::slotted(::slotted(*)) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) ::slotted(::slotted(*)) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered > * {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > * > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) ::slotted(*) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) ::slotted(*) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-layered {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-layered) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-layered) {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows-3c > ::slotted(*) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) ::slotted(::slotted(*)) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c > * {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) ::slotted(*) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows-3c) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows-3c > ::slotted(*:last-child) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  :host(.grid-rows-3c) ::slotted(::slotted(*:last-child)) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  .grid-rows-3c > *:last-child {\n    grid-column: var(--order, 1)/3 span;\n  }\n  :host(.grid-rows-3c) ::slotted(*:last-child) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  .grid-rows-3c {\n    --order: sibling-index();\n  }\n  .grid-rows-3c {\n    grid-column: var(--order, 1)/var(--order, 1) span;\n  }\n  .grid-rows-3c {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows-3c) {\n    --order: sibling-index();\n  }\n  :host(.grid-rows-3c) {\n    grid-column: var(--order, 1)/var(--order, 1) span;\n  }\n  :host(.grid-rows-3c) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .stretch-inline {\n    inline-size: 100%;\n    inline-size: -webkit-fill-available;\n    inline-size: stretch;\n  }\n  :host(.stretch-inline) {\n    inline-size: 100%;\n    inline-size: -webkit-fill-available;\n    inline-size: stretch;\n  }\n  .stretch-block {\n    block-size: 100%;\n    block-size: -webkit-fill-available;\n    block-size: stretch;\n  }\n  :host(.stretch-block) {\n    block-size: 100%;\n    block-size: -webkit-fill-available;\n    block-size: stretch;\n  }\n  .content-inline-size {\n    padding-inline: max(100% - (100% - var(--content-inline-size, 100%) * 0.5), 0px);\n  }\n  :host(.content-inline-size) {\n    padding-inline: max(100% - (100% - var(--content-inline-size, 100%) * 0.5), 0px);\n  }\n  .content-block-size {\n    padding-block: max(100% - (100% - var(--content-block-size, 100%) * 0.5), 0px);\n  }\n  :host(.content-block-size) {\n    padding-block: max(100% - (100% - var(--content-block-size, 100%) * 0.5), 0px);\n  }\n  .ux-anchor {\n    inset-inline-start: max(var(--client-x, 0px), 0px);\n    inset-block-start: max(var(--client-y, 0px), 0px);\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    writing-mode: horizontal-tb;\n    translate: 0% 0% 0%;\n    transform: none;\n  }\n  .ux-anchor {\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--client-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--client-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n  }\n  @supports (position-anchor: --example) {\n    .ux-anchor {\n      position-anchor: var(--anchor-group);\n      inset-inline-start: anchor(var(--anchor-group) start);\n      inset-block-start: anchor(var(--anchor-group) end);\n      inline-size: anchor-size(var(--anchor-group) self-inline);\n    }\n  }\n  :host(.ux-anchor) {\n    inset-inline-start: max(var(--client-x, 0px), 0px);\n    inset-block-start: max(var(--client-y, 0px), 0px);\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    writing-mode: horizontal-tb;\n    translate: 0% 0% 0%;\n    transform: none;\n  }\n  :host(.ux-anchor) {\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--client-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--client-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n  }\n  @supports (position-anchor: --example) {\n    :host(.ux-anchor) {\n      position-anchor: var(--anchor-group);\n      inset-inline-start: anchor(var(--anchor-group) start);\n      inset-block-start: anchor(var(--anchor-group) end);\n      inline-size: anchor-size(var(--anchor-group) self-inline);\n    }\n  }\n  .ux-anchor {\n    --shift-x: var(--client-x, 0px);\n    --shift-y: var(--client-y, 0px);\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    inset-inline-start: max(var(--shift-x), 0px);\n    inset-block-start: max(var(--shift-y), var(--status-bar-padding, 0px));\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    translate: 0% 0% 0%;\n    writing-mode: horizontal-tb;\n    transform: none;\n  }\n  :host(.ux-anchor) {\n    --shift-x: var(--client-x, 0px);\n    --shift-y: var(--client-y, 0px);\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    inset-inline-start: max(var(--shift-x), 0px);\n    inset-block-start: max(var(--shift-y), var(--status-bar-padding, 0px));\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    translate: 0% 0% 0%;\n    writing-mode: horizontal-tb;\n    transform: none;\n  }\n  .layered-wrap {\n    background-color: transparent;\n    display: inline grid;\n    inline-size: max-content;\n    block-size: max-content;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    z-index: calc(var(--z-index, 0) + 1);\n    overflow: visible;\n  }\n  .layered-wrap > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.layered-wrap) {\n    background-color: transparent;\n    display: inline grid;\n    inline-size: max-content;\n    block-size: max-content;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    z-index: calc(var(--z-index, 0) + 1);\n    overflow: visible;\n  }\n  :host(.layered-wrap) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n}\n@layer components {\n  ui-icon {\n    --icon-color: currentColor;\n    --icon-size: 1rem;\n    --icon-padding: 0.125rem;\n    display: inline-grid;\n    place-content: center;\n    place-items: center;\n    color: var(--icon-color);\n    aspect-ratio: 1;\n  }\n  ui-icon {\n    vertical-align: middle;\n    margin-inline-end: 0.125rem;\n  }\n  ui-icon:last-child {\n    margin-inline-end: 0;\n  }\n}", C = "@function --hsv(--src-color <color>) returns <color> {\n  result: hsl(from var(--src-color, black) h calc(calc((calc(l / 100) - calc(calc(l / 100) * (1 - calc(s / 100) / 2))) / clamp(0.0001, min(calc(calc(l / 100) * (1 - calc(s / 100) / 2)), calc(1 - calc(calc(l / 100) * (1 - calc(s / 100) / 2)))), 1)) * 100) calc(calc(calc(l / 100) * (1 - calc(s / 100) / 2)) * 100) / alpha);\n}\n/* ai-refactor: optimized/refactored at 2026-02-13T02:50:43Z */\n/* ==========================================================================\n    Meta / Declarations\n   ========================================================================== */\n/* ==========================================================================\n    Tokens / Mixins (global, not layered)\n   ========================================================================== */\n/* ai-refactor: optimized/refactored at 2026-02-13T00:48:23Z */\n@layer tokens, base, layout, utilities, shells, shell, views, view, viewer, components, ux-layer, markdown, essentials, print, print-breaks, overrides;\n@layer tokens {\n  :root,\n  :host,\n  :scope {\n    color-scheme: light dark;\n    --color-primary: #5a7fff;\n    --color-on-primary: #ffffff;\n    --color-secondary: #6b7280;\n    --color-on-secondary: #ffffff;\n    --color-tertiary: #64748b;\n    --color-on-tertiary: #ffffff;\n    --color-error: #ef4444;\n    --color-on-error: #ffffff;\n    --color-success: #4caf50;\n    --color-warning: #ff9800;\n    --color-info: #2196f3;\n    --color-background: #fafbfc;\n    --color-on-background: #1e293b;\n    --color-surface: #fafbfc;\n    --color-on-surface: #1e293b;\n    --color-surface-variant: #f1f5f9;\n    --color-on-surface-variant: #64748b;\n    --color-outline: #cbd5e1;\n    --color-outline-variant: #94a3b8;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 96%, var(--color-primary) 4%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 75%, transparent);\n    --space-xs: 0.25rem;\n    --space-sm: 0.5rem;\n    --space-md: 0.75rem;\n    --space-lg: 1rem;\n    --space-xl: 1.25rem;\n    --space-2xl: 1.5rem;\n    --padding-xs: var(--space-xs);\n    --padding-sm: var(--space-sm);\n    --padding-md: var(--space-md);\n    --padding-lg: var(--space-lg);\n    --padding-xl: var(--space-xl);\n    --padding-2xl: var(--space-2xl);\n    --padding-3xl: 2rem;\n    --padding-4xl: 2.5rem;\n    --padding-5xl: 3rem;\n    --padding-6xl: 4rem;\n    --padding-7xl: 5rem;\n    --padding-8xl: 6rem;\n    --padding-9xl: 8rem;\n    --gap-xs: var(--space-xs);\n    --gap-sm: var(--space-sm);\n    --gap-md: var(--space-md);\n    --gap-lg: var(--space-lg);\n    --gap-xl: var(--space-xl);\n    --gap-2xl: var(--space-2xl);\n    --radius-none: 0;\n    --radius-sm: 0.25rem;\n    --radius-default: 0.25rem;\n    --radius-md: 0.375rem;\n    --radius-lg: 0.5rem;\n    --radius-xl: 0.75rem;\n    --radius-2xl: 1rem;\n    --radius-3xl: 1.5rem;\n    --radius-full: 9999px;\n    --elev-0: none;\n    --elev-1: 0 1px 1px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1);\n    --elev-2: 0 2px 6px rgba(0, 0, 0, 0.12), 0 8px 24px rgba(0, 0, 0, 0.08);\n    --elev-3: 0 6px 16px rgba(0, 0, 0, 0.14), 0 18px 48px rgba(0, 0, 0, 0.1);\n    --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);\n    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);\n    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);\n    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);\n    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);\n    --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.1);\n    --shadow-inset: inset 0 2px 4px rgba(0, 0, 0, 0.06);\n    --shadow-inset-strong: inset 0 4px 8px rgba(0, 0, 0, 0.12);\n    --shadow-none: 0 0 #0000;\n    --text-xs: 0.8rem;\n    --text-sm: 0.9rem;\n    --text-base: 1rem;\n    --text-lg: 1.1rem;\n    --text-xl: 1.25rem;\n    --text-2xl: 1.6rem;\n    --text-3xl: 2rem;\n    --font-size-xs: 0.75rem;\n    --font-size-sm: 0.875rem;\n    --font-size-base: 1rem;\n    --font-size-lg: 1.125rem;\n    --font-size-xl: 1.25rem;\n    --font-weight-normal: 400;\n    --font-weight-medium: 500;\n    --font-weight-semibold: 600;\n    --font-weight-bold: 700;\n    --font-family: \"Roboto\", ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;\n    --font-family-mono: \"Roboto Mono\", \"SF Mono\", Monaco, Inconsolata, \"Fira Code\", monospace;\n    --font-sans: var(--font-family);\n    --font-mono: var(--font-family-mono);\n    --leading-tight: 1.2;\n    --leading-normal: 1.5;\n    --leading-relaxed: 1.8;\n    --transition-fast: 120ms cubic-bezier(0.2, 0, 0, 1);\n    --transition-normal: 160ms cubic-bezier(0.2, 0, 0, 1);\n    --transition-slow: 200ms cubic-bezier(0.2, 0, 0, 1);\n    --motion-fast: var(--transition-fast);\n    --motion-normal: var(--transition-normal);\n    --motion-slow: var(--transition-slow);\n    --focus-ring: 0 0 0 3px color-mix(in oklab, var(--color-primary) 35%, transparent);\n    --z-base: 0;\n    --z-dropdown: 100;\n    --z-sticky: 200;\n    --z-fixed: 300;\n    --z-modal-backdrop: 400;\n    --z-modal: 500;\n    --z-popover: 600;\n    --z-tooltip: 700;\n    --z-toast: 800;\n    --z-max: 9999;\n    --view-bg: var(--color-surface);\n    --view-fg: var(--color-on-surface);\n    --view-border: var(--color-outline-variant);\n    --view-input-bg: light-dark(#ffffff, var(--color-surface-container-high));\n    --view-files-bg: light-dark(rgba(0, 0, 0, 0.02), var(--color-surface-container-low));\n    --view-file-bg: light-dark(rgba(0, 0, 0, 0.03), var(--color-surface-container-lowest, var(--color-surface-container-low)));\n    --view-results-bg: light-dark(rgba(0, 0, 0, 0.01), var(--color-surface-container-low));\n    --view-result-bg: light-dark(rgba(0, 0, 0, 0.03), var(--color-surface-container-lowest, var(--color-surface-container-low)));\n    --color-surface-elevated: var(--color-surface-container);\n    --color-surface-hover: var(--color-surface-container-low);\n    --color-surface-active: var(--color-surface-container-high);\n    --color-on-surface-muted: var(--color-on-surface-variant);\n    --color-background-alt: var(--color-surface-variant);\n    --color-primary-hover: color-mix(in oklab, var(--color-primary) 80%, black);\n    --color-primary-active: color-mix(in oklab, var(--color-primary) 65%, black);\n    --color-accent: var(--color-secondary);\n    --color-accent-hover: color-mix(in oklab, var(--color-secondary) 80%, black);\n    --color-on-accent: var(--color-on-secondary);\n    --color-border-hover: var(--color-outline-variant);\n    --color-border-strong: var(--color-outline);\n    --color-border-focus: var(--color-primary);\n    --color-text: var(--color-on-surface);\n    --color-text-secondary: var(--color-on-surface-variant);\n    --color-text-muted: color-mix(in oklab, var(--color-on-surface) 50%, var(--color-surface));\n    --color-text-disabled: color-mix(in oklab, var(--color-on-surface) 38%, var(--color-surface));\n    --color-text-inverse: var(--color-on-primary);\n    --color-link: var(--color-primary);\n    --color-link-hover: color-mix(in oklab, var(--color-primary) 80%, black);\n    --color-success-light: color-mix(in oklab, var(--color-success) 60%, white);\n    --color-success-dark: color-mix(in oklab, var(--color-success) 70%, black);\n    --color-warning-light: color-mix(in oklab, var(--color-warning) 60%, white);\n    --color-warning-dark: color-mix(in oklab, var(--color-warning) 70%, black);\n    --color-error-light: color-mix(in oklab, var(--color-error) 60%, white);\n    --color-error-dark: color-mix(in oklab, var(--color-error) 70%, black);\n    --color-info-light: color-mix(in oklab, var(--color-info) 60%, white);\n    --color-info-dark: color-mix(in oklab, var(--color-info) 70%, black);\n    --color-bg: var(--color-surface, var(--color-surface));\n    --color-bg-alt: var(--color-surface-variant, var(--color-surface-variant));\n    --color-fg: var(--color-on-surface, var(--color-on-surface));\n    --color-fg-muted: var(--color-on-surface-variant, var(--color-on-surface-variant));\n    --btn-height-sm: 2rem;\n    --btn-height-md: 2.5rem;\n    --btn-height-lg: 3rem;\n    --btn-padding-x-sm: var(--space-md);\n    --btn-padding-x-md: var(--space-lg);\n    --btn-padding-x-lg: 1.5rem;\n    --btn-radius: var(--radius-md);\n    --btn-font-weight: var(--font-weight-medium);\n    --input-height-sm: 2rem;\n    --input-height-md: 2.5rem;\n    --input-height-lg: 3rem;\n    --input-padding-x: var(--space-md);\n    --input-radius: var(--radius-md);\n    --input-border-color: var(--color-border, var(--color-border));\n    --input-focus-ring-color: var(--color-primary);\n    --input-focus-ring-width: 2px;\n    --card-padding: var(--space-lg);\n    --card-radius: var(--radius-lg);\n    --card-shadow: var(--shadow-sm);\n    --card-border-color: var(--color-border, var(--color-border));\n    --modal-backdrop-bg: light-dark(rgb(0 0 0 / 0.5), rgb(0 0 0 / 0.7));\n    --modal-bg: var(--color-surface, var(--color-surface));\n    --modal-radius: var(--radius-xl);\n    --modal-shadow: var(--shadow-xl);\n    --modal-padding: 1.5rem;\n    --toast-font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif);\n    --toast-font-size: var(--font-size-base, 1rem);\n    --toast-font-weight: var(--font-weight-medium, 500);\n    --toast-letter-spacing: 0.01em;\n    --toast-line-height: 1.4;\n    --toast-white-space: nowrap;\n    --toast-pointer-events: auto;\n    --toast-user-select: none;\n    --toast-cursor: default;\n    --toast-opacity: 0;\n    --toast-transform: translateY(100%) scale(0.9);\n    --toast-transition: opacity 160ms ease-out, transform 160ms cubic-bezier(0.16, 1, 0.3, 1), background-color 100ms ease;\n    --toast-text: var(--color-on-surface, var(--color-on-surface, light-dark(#ffffff, #000000)));\n    --toast-bg: color-mix(in oklab, var(--color-surface-elevated, var(--color-surface-container-high, var(--color-surface, light-dark(#fafbfc, #1e293b)))) 90%, var(--color-on-surface, var(--color-on-surface, light-dark(#000000, #ffffff))));\n    --toast-radius: var(--radius-lg);\n    --toast-shadow: var(--shadow-lg);\n    --toast-padding: var(--space-lg);\n    --sidebar-width: 280px;\n    --sidebar-collapsed-width: 64px;\n    --nav-height: 56px;\n    --nav-height-compact: 48px;\n    --status-height: 24px;\n    --status-bg: var(--color-surface-elevated, var(--color-surface-container-high));\n    --status-font-size: var(--text-xs);\n  }\n  @media (prefers-color-scheme: dark) {\n    :root,\n    :host,\n    :scope {\n      --color-primary: #7ca7ff;\n      --color-on-primary: #0f172a;\n      --color-secondary: #94a3b8;\n      --color-on-secondary: #1e293b;\n      --color-tertiary: #94a3b8;\n      --color-on-tertiary: #0f172a;\n      --color-error: #f87171;\n      --color-on-error: #450a0a;\n      --color-success: #66bb6a;\n      --color-warning: #ffa726;\n      --color-info: #42a5f5;\n      --color-background: #0f1419;\n      --color-on-background: #f1f5f9;\n      --color-surface: #0f1419;\n      --color-on-surface: #f1f5f9;\n      --color-surface-variant: #1e293b;\n      --color-on-surface-variant: #cbd5e1;\n      --color-outline: #475569;\n      --color-outline-variant: #334155;\n      --color-surface-container-low: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n      --color-surface-container: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n      --color-surface-container-high: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n      --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 80%, var(--color-primary) 20%);\n      --color-border: color-mix(in oklab, var(--color-outline-variant) 70%, transparent);\n    }\n  }\n  [data-theme=light] {\n    color-scheme: light;\n    --color-primary: #5a7fff;\n    --color-on-primary: #ffffff;\n    --color-secondary: #6b7280;\n    --color-on-secondary: #ffffff;\n    --color-tertiary: #64748b;\n    --color-on-tertiary: #ffffff;\n    --color-error: #ef4444;\n    --color-on-error: #ffffff;\n    --color-success: #4caf50;\n    --color-warning: #ff9800;\n    --color-info: #2196f3;\n    --color-background: #fafbfc;\n    --color-on-background: #1e293b;\n    --color-surface: #fafbfc;\n    --color-on-surface: #1e293b;\n    --color-surface-variant: #f1f5f9;\n    --color-on-surface-variant: #64748b;\n    --color-outline: #cbd5e1;\n    --color-outline-variant: #94a3b8;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 96%, var(--color-primary) 4%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 75%, transparent);\n  }\n  [data-theme=dark] {\n    color-scheme: dark;\n    --color-primary: #7ca7ff;\n    --color-on-primary: #0f172a;\n    --color-secondary: #94a3b8;\n    --color-on-secondary: #1e293b;\n    --color-tertiary: #94a3b8;\n    --color-on-tertiary: #0f172a;\n    --color-error: #f87171;\n    --color-on-error: #450a0a;\n    --color-success: #66bb6a;\n    --color-warning: #ffa726;\n    --color-info: #42a5f5;\n    --color-background: #0f1419;\n    --color-on-background: #f1f5f9;\n    --color-surface: #0f1419;\n    --color-on-surface: #f1f5f9;\n    --color-surface-variant: #1e293b;\n    --color-on-surface-variant: #cbd5e1;\n    --color-outline: #475569;\n    --color-outline-variant: #334155;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 80%, var(--color-primary) 20%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 70%, transparent);\n  }\n  @media (prefers-reduced-motion: reduce) {\n    :root {\n      --transition-fast: 0ms;\n      --transition-normal: 0ms;\n      --transition-slow: 0ms;\n      --motion-fast: 0ms;\n      --motion-normal: 0ms;\n      --motion-slow: 0ms;\n    }\n  }\n  @media (prefers-contrast: high) {\n    :root {\n      --color-border: var(--color-border, var(--color-outline));\n      --color-border-hover: color-mix(in oklab, var(--color-border, var(--color-outline)) 80%, var(--color-on-surface, var(--color-on-surface)));\n      --color-text-secondary: var(--color-on-surface, var(--color-on-surface));\n      --color-text-muted: var(--color-on-surface-variant, var(--color-on-surface-variant));\n    }\n  }\n  @media print {\n    :root {\n      --view-padding: 0;\n      --view-content-max-width: 100%;\n      --view-bg: white;\n      --view-fg: black;\n      --view-heading-color: black;\n      --view-link-color: black;\n    }\n    :root:has([data-view=viewer]) {\n      --view-code-bg: #f5f5f5;\n      --view-code-fg: black;\n      --view-blockquote-bg: #f5f5f5;\n    }\n  }\n}\n/**\n * Unified CSS Custom Property Registration System\n * \n * This module consolidates property registration logic used across the library.\n * It provides a single source of truth for @property declarations via the\n * CSS Properties and Values API (CSS Houdini).\n * \n * Used by:\n * - lib/core/_properties.scss (orientation, transform, layout properties)\n * - lib/basic/_typed-properties.scss (UI component properties)\n * - lib/advanced/design/ (MD3 design properties)\n */\n/* stylelint-disable scss/function-no-unknown */\n@layer utilities {\n  .m-0 {\n    margin: 0;\n  }\n  .mb-0 {\n    margin-block: 0;\n  }\n  .mi-0 {\n    margin-inline: 0;\n  }\n  .p-0 {\n    padding: 0;\n  }\n  .pb-0 {\n    padding-block: 0;\n  }\n  .pi-0 {\n    padding-inline: 0;\n  }\n  .gap-0 {\n    gap: 0;\n  }\n  .inset-0 {\n    inset: 0;\n  }\n  .m-xs {\n    margin: 0.25rem;\n  }\n  .mb-xs {\n    margin-block: 0.25rem;\n  }\n  .mi-xs {\n    margin-inline: 0.25rem;\n  }\n  .p-xs {\n    padding: 0.25rem;\n  }\n  .pb-xs {\n    padding-block: 0.25rem;\n  }\n  .pi-xs {\n    padding-inline: 0.25rem;\n  }\n  .gap-xs {\n    gap: 0.25rem;\n  }\n  .inset-xs {\n    inset: 0.25rem;\n  }\n  .m-sm {\n    margin: 0.5rem;\n  }\n  .mb-sm {\n    margin-block: 0.5rem;\n  }\n  .mi-sm {\n    margin-inline: 0.5rem;\n  }\n  .p-sm {\n    padding: 0.5rem;\n  }\n  .pb-sm {\n    padding-block: 0.5rem;\n  }\n  .pi-sm {\n    padding-inline: 0.5rem;\n  }\n  .gap-sm {\n    gap: 0.5rem;\n  }\n  .inset-sm {\n    inset: 0.5rem;\n  }\n  .m-md {\n    margin: 0.75rem;\n  }\n  .mb-md {\n    margin-block: 0.75rem;\n  }\n  .mi-md {\n    margin-inline: 0.75rem;\n  }\n  .p-md {\n    padding: 0.75rem;\n  }\n  .pb-md {\n    padding-block: 0.75rem;\n  }\n  .pi-md {\n    padding-inline: 0.75rem;\n  }\n  .gap-md {\n    gap: 0.75rem;\n  }\n  .inset-md {\n    inset: 0.75rem;\n  }\n  .m-lg {\n    margin: 1rem;\n  }\n  .mb-lg {\n    margin-block: 1rem;\n  }\n  .mi-lg {\n    margin-inline: 1rem;\n  }\n  .p-lg {\n    padding: 1rem;\n  }\n  .pb-lg {\n    padding-block: 1rem;\n  }\n  .pi-lg {\n    padding-inline: 1rem;\n  }\n  .gap-lg {\n    gap: 1rem;\n  }\n  .inset-lg {\n    inset: 1rem;\n  }\n  .m-xl {\n    margin: 1.25rem;\n  }\n  .mb-xl {\n    margin-block: 1.25rem;\n  }\n  .mi-xl {\n    margin-inline: 1.25rem;\n  }\n  .p-xl {\n    padding: 1.25rem;\n  }\n  .pb-xl {\n    padding-block: 1.25rem;\n  }\n  .pi-xl {\n    padding-inline: 1.25rem;\n  }\n  .gap-xl {\n    gap: 1.25rem;\n  }\n  .inset-xl {\n    inset: 1.25rem;\n  }\n  .m-2xl {\n    margin: 1.5rem;\n  }\n  .mb-2xl {\n    margin-block: 1.5rem;\n  }\n  .mi-2xl {\n    margin-inline: 1.5rem;\n  }\n  .p-2xl {\n    padding: 1.5rem;\n  }\n  .pb-2xl {\n    padding-block: 1.5rem;\n  }\n  .pi-2xl {\n    padding-inline: 1.5rem;\n  }\n  .gap-2xl {\n    gap: 1.5rem;\n  }\n  .inset-2xl {\n    inset: 1.5rem;\n  }\n  .m-3xl {\n    margin: 2rem;\n  }\n  .mb-3xl {\n    margin-block: 2rem;\n  }\n  .mi-3xl {\n    margin-inline: 2rem;\n  }\n  .p-3xl {\n    padding: 2rem;\n  }\n  .pb-3xl {\n    padding-block: 2rem;\n  }\n  .pi-3xl {\n    padding-inline: 2rem;\n  }\n  .gap-3xl {\n    gap: 2rem;\n  }\n  .inset-3xl {\n    inset: 2rem;\n  }\n  .text-xs {\n    font-size: 0.75rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-sm {\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-base {\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-lg {\n    font-size: 1.125rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-xl {\n    font-size: 1.25rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-2xl {\n    font-size: 1.5rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .font-thin {\n    font-weight: 100;\n  }\n  .font-light {\n    font-weight: 300;\n  }\n  .font-normal {\n    font-weight: 400;\n  }\n  .font-medium {\n    font-weight: 500;\n  }\n  .font-semibold {\n    font-weight: 600;\n  }\n  .font-bold {\n    font-weight: 700;\n  }\n  .text-start {\n    text-align: start;\n  }\n  .text-center {\n    text-align: center;\n  }\n  .text-end {\n    text-align: end;\n  }\n  .text-primary {\n    color: #1e293b, #f1f5f9;\n  }\n  .text-secondary {\n    color: #64748b, #94a3b8;\n  }\n  .text-muted {\n    color: #94a3b8, #64748b;\n  }\n  .text-disabled {\n    color: #cbd5e1, #475569;\n  }\n  .block,\n  .vu-block {\n    display: block;\n  }\n  .inline,\n  .vu-inline {\n    display: inline;\n  }\n  .inline-block {\n    display: inline-block;\n  }\n  .flex,\n  .vu-flex {\n    display: flex;\n  }\n  .inline-flex {\n    display: inline-flex;\n  }\n  .grid,\n  .vu-grid {\n    display: grid;\n  }\n  .hidden,\n  .vu-hidden {\n    display: none;\n  }\n  .flex-row {\n    flex-direction: row;\n  }\n  .flex-col {\n    flex-direction: column;\n  }\n  .flex-wrap {\n    flex-wrap: wrap;\n  }\n  .flex-nowrap {\n    flex-wrap: nowrap;\n  }\n  .items-start {\n    align-items: flex-start;\n  }\n  .items-center {\n    align-items: center;\n  }\n  .items-end {\n    align-items: flex-end;\n  }\n  .items-stretch {\n    align-items: stretch;\n  }\n  .justify-start {\n    justify-content: flex-start;\n  }\n  .justify-center {\n    justify-content: center;\n  }\n  .justify-end {\n    justify-content: flex-end;\n  }\n  .justify-between {\n    justify-content: space-between;\n  }\n  .justify-around {\n    justify-content: space-around;\n  }\n  .grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .h-auto,\n  .block-size-auto {\n    block-size: auto;\n  }\n  .h-full,\n  .block-size-full {\n    block-size: 100%;\n  }\n  .h-screen {\n    block-size: 100vh;\n  }\n  .w-auto,\n  .inline-size-auto {\n    inline-size: auto;\n  }\n  .w-full,\n  .inline-size-full {\n    inline-size: 100%;\n  }\n  .w-screen {\n    inline-size: 100vw;\n  }\n  .min-h-0,\n  .min-block-size-0 {\n    min-block-size: 0;\n  }\n  .min-w-0,\n  .min-inline-size-0 {\n    min-inline-size: 0;\n  }\n  .max-h-full,\n  .max-block-size-full {\n    max-block-size: 100%;\n  }\n  .max-w-full,\n  .max-inline-size-full {\n    max-inline-size: 100%;\n  }\n  .static {\n    position: static;\n  }\n  .relative {\n    position: relative;\n  }\n  .absolute {\n    position: absolute;\n  }\n  .fixed {\n    position: fixed;\n  }\n  .sticky {\n    position: sticky;\n  }\n  .bg-surface {\n    background-color: #fafbfc, #0f1419;\n  }\n  .bg-surface-container {\n    background-color: #f1f5f9, #1e293b;\n  }\n  .bg-surface-container-high {\n    background-color: #e2e8f0, #334155;\n  }\n  .bg-primary {\n    background-color: #5a7fff, #7ca7ff;\n  }\n  .bg-secondary {\n    background-color: #6b7280, #94a3b8;\n  }\n  .border {\n    border: 1px solid #cbd5e1, #475569;\n  }\n  .border-2 {\n    border: 2px solid #cbd5e1, #475569;\n  }\n  .border-primary {\n    border: 1px solid #5a7fff, #7ca7ff;\n  }\n  .border-secondary {\n    border: 1px solid #6b7280, #94a3b8;\n  }\n  .rounded-none {\n    border-radius: 0;\n  }\n  .rounded-sm {\n    border-radius: 0.25rem;\n  }\n  .rounded-md {\n    border-radius: 0.375rem;\n  }\n  .rounded-lg {\n    border-radius: 0.5rem;\n  }\n  .rounded-full {\n    border-radius: 9999px;\n  }\n  .shadow-xs {\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  }\n  .shadow-sm {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  }\n  .shadow-md {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  }\n  .shadow-lg {\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  }\n  .shadow-xl {\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  }\n  .cursor-pointer {\n    cursor: pointer;\n  }\n  .cursor-default {\n    cursor: default;\n  }\n  .cursor-not-allowed {\n    cursor: not-allowed;\n  }\n  .select-none {\n    user-select: none;\n  }\n  .select-text {\n    user-select: text;\n  }\n  .select-all {\n    user-select: all;\n  }\n  .visible {\n    visibility: visible;\n  }\n  .invisible {\n    visibility: hidden;\n  }\n  .collapse,\n  .vs-collapsed {\n    visibility: collapse;\n  }\n  .opacity-0 {\n    opacity: 0;\n  }\n  .opacity-25 {\n    opacity: 0.25;\n  }\n  .opacity-50 {\n    opacity: 0.5;\n  }\n  .opacity-75 {\n    opacity: 0.75;\n  }\n  .opacity-100 {\n    opacity: 1;\n  }\n  @container (max-width: 320px) {\n    .hidden\\@xs {\n      display: none;\n    }\n  }\n  @container (max-width: 640px) {\n    .hidden\\@sm {\n      display: none;\n    }\n  }\n  @container (max-width: 768px) {\n    .hidden\\@md {\n      display: none;\n    }\n  }\n  @container (max-width: 1024px) {\n    .hidden\\@lg {\n      display: none;\n    }\n  }\n  @container (min-width: 320px) {\n    .block\\@xs {\n      display: block;\n    }\n  }\n  @container (min-width: 640px) {\n    .block\\@sm {\n      display: block;\n    }\n  }\n  @container (min-width: 768px) {\n    .block\\@md {\n      display: block;\n    }\n  }\n  @container (min-width: 1024px) {\n    .block\\@lg {\n      display: block;\n    }\n  }\n  @container (max-width: 320px) {\n    .text-sm\\@xs {\n      font-size: 0.875rem;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0;\n    }\n  }\n  @container (min-width: 640px) {\n    .text-base\\@sm {\n      font-size: 1rem;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0;\n    }\n  }\n  .icon-xs {\n    --icon-size: 0.75rem;\n  }\n  .icon-sm {\n    --icon-size: 0.875rem;\n  }\n  .icon-md {\n    --icon-size: 1rem;\n  }\n  .icon-lg {\n    --icon-size: 1.25rem;\n  }\n  .icon-xl {\n    --icon-size: 1.5rem;\n  }\n  .center-absolute {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  .center-flex {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: nowrap;\n  }\n  .interactive {\n    cursor: pointer;\n    touch-action: manipulation;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .interactive:focus-visible {\n    outline: 2px solid #dbeafe, #1e40af;\n    outline-offset: 2px;\n  }\n  .interactive:disabled, .interactive[aria-disabled=true] {\n    cursor: not-allowed;\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  .focus-ring:focus-visible {\n    outline: 2px solid #dbeafe, #1e40af;\n    outline-offset: 2px;\n  }\n  .truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .truncate-2 {\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .truncate-3 {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .aspect-square {\n    aspect-ratio: 1;\n  }\n  .aspect-video {\n    aspect-ratio: 16 / 9;\n  }\n  .margin-block-0 {\n    margin-block: 0;\n  }\n  .margin-block-sm {\n    margin-block: var(--space-sm);\n  }\n  .margin-block-md {\n    margin-block: var(--space-md);\n  }\n  .margin-block-lg {\n    margin-block: var(--space-lg);\n  }\n  .margin-inline-0 {\n    margin-inline: 0;\n  }\n  .margin-inline-sm {\n    margin-inline: var(--space-sm);\n  }\n  .margin-inline-md {\n    margin-inline: var(--space-md);\n  }\n  .margin-inline-lg {\n    margin-inline: var(--space-lg);\n  }\n  .margin-inline-auto {\n    margin-inline: auto;\n  }\n  .padding-block-0 {\n    padding-block: 0;\n  }\n  .padding-block-sm {\n    padding-block: var(--space-sm);\n  }\n  .padding-block-md {\n    padding-block: var(--space-md);\n  }\n  .padding-block-lg {\n    padding-block: var(--space-lg);\n  }\n  .padding-inline-0 {\n    padding-inline: 0;\n  }\n  .padding-inline-sm {\n    padding-inline: var(--space-sm);\n  }\n  .padding-inline-md {\n    padding-inline: var(--space-md);\n  }\n  .padding-inline-lg {\n    padding-inline: var(--space-lg);\n  }\n  .pointer-events-none {\n    pointer-events: none;\n  }\n  .pointer-events-auto {\n    pointer-events: auto;\n  }\n  .line-clamp-1 {\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .line-clamp-2 {\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .line-clamp-3 {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .vs-active {\n    --state-active: 1;\n  }\n  .vs-disabled {\n    pointer-events: none;\n    opacity: 0.5;\n  }\n  .vs-loading {\n    cursor: wait;\n  }\n  .vs-error {\n    color: var(--color-error, #dc3545);\n  }\n  .vs-success {\n    color: var(--color-success, #28a745);\n  }\n  .vs-hidden {\n    display: none !important;\n  }\n  .vl-container,\n  .container {\n    inline-size: 100%;\n    max-inline-size: var(--container-max, 1200px);\n    margin-inline: auto;\n  }\n  .vl-container {\n    padding-inline: var(--space-md);\n  }\n  .container {\n    padding-inline: var(--space-lg);\n  }\n  .vl-grid {\n    display: grid;\n    gap: var(--gap-md);\n  }\n  .vl-stack {\n    display: flex;\n    flex-direction: column;\n    gap: var(--gap-md);\n  }\n  .vl-cluster {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--gap-sm);\n    align-items: center;\n  }\n  .vl-center {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .vu-sr-only {\n    position: absolute;\n    inline-size: 1px;\n    block-size: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n  }\n  .vc-surface {\n    background-color: var(--color-surface);\n    color: var(--color-on-surface);\n  }\n  .vc-surface-variant {\n    background-color: var(--color-surface-variant);\n    color: var(--color-on-surface-variant);\n  }\n  .vc-primary {\n    background-color: var(--color-primary);\n    color: var(--color-on-primary);\n  }\n  .vc-secondary {\n    background-color: var(--color-secondary);\n    color: var(--color-on-secondary);\n  }\n  .vc-elevated {\n    box-shadow: var(--elev-1);\n  }\n  .vc-elevated-2 {\n    box-shadow: var(--elev-2);\n  }\n  .vc-elevated-3 {\n    box-shadow: var(--elev-3);\n  }\n  .vc-rounded {\n    border-radius: var(--radius-md);\n  }\n  .vc-rounded-sm {\n    border-radius: var(--radius-sm);\n  }\n  .vc-rounded-lg {\n    border-radius: var(--radius-lg);\n  }\n  .vc-rounded-full {\n    border-radius: var(--radius-full, 9999px);\n  }\n  .card {\n    background: var(--color-bg);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-lg);\n    padding: var(--space-lg);\n    box-shadow: var(--shadow-sm);\n  }\n  .stack > * + * {\n    margin-block-start: var(--space-md);\n  }\n  .stack-sm > * + * {\n    margin-block-start: var(--space-sm);\n  }\n  .stack-lg > * + * {\n    margin-block-start: var(--space-lg);\n  }\n  @media print {\n    .print-hidden {\n      display: none !important;\n    }\n    .print-visible {\n      display: block !important;\n    }\n    .print-break-before {\n      page-break-before: always;\n    }\n    .print-break-after {\n      page-break-after: always;\n    }\n    .print-break-inside-avoid {\n      page-break-inside: avoid;\n    }\n  }\n  @media (prefers-reduced-motion: reduce) {\n    .transition-fast,\n    .transition-normal,\n    .transition-slow {\n      transition: none;\n    }\n    * {\n      animation-duration: 0.01ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01ms !important;\n    }\n  }\n  @media (prefers-contrast: high) {\n    .text-primary {\n      color: var(--color-on-surface);\n    }\n    .text-secondary,\n    .text-muted,\n    .text-disabled {\n      color: var(--color-on-surface-variant);\n    }\n    .border {\n      border-width: 2px;\n    }\n    .border-top {\n      border-top-width: 2px;\n    }\n    .border-bottom {\n      border-bottom-width: 2px;\n    }\n    .border-left {\n      border-left-width: 2px;\n    }\n    .border-right {\n      border-right-width: 2px;\n    }\n  }\n}\n@property --value {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: true;\n}\n@property --relate {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: true;\n}\n@property --drag-x {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: false;\n}\n@property --drag-y {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: false;\n}\n@property --order {\n  syntax: \"<integer>\";\n  initial-value: 1;\n  inherits: true;\n}\n@property --content-inline-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 100%;\n  inherits: true;\n}\n@property --content-block-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 100%;\n  inherits: true;\n}\n@property --icon-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 16px;\n  inherits: true;\n}\n@property --icon-color {\n  syntax: \"<color>\";\n  initial-value: rgba(0, 0, 0, 0);\n  inherits: true;\n}\n@property --icon-padding {\n  syntax: \"<length-percentage>\";\n  initial-value: 0px;\n  inherits: true;\n}\n@property --icon-image {\n  syntax: \"<image>\";\n  initial-value: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));\n  inherits: true;\n}\n@layer ux-classes {\n  .grid-rows > ::slotted(*) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  .grid-rows > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-rows > ::slotted(*) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  .grid-rows > * {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  .grid-rows > * {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-rows > * {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  :host(.grid-rows) ::slotted(*) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  :host(.grid-rows) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-rows) ::slotted(*) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  .grid-rows {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-rows {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows {\n    grid-auto-rows: minmax(0px, max-content);\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  :host(.grid-rows) {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-rows) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows) {\n    grid-auto-rows: minmax(0px, max-content);\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  .grid-columns > ::slotted(*) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  .grid-columns > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-columns > ::slotted(*) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  .grid-columns > * {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  .grid-columns > * {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-columns > * {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  .grid-columns {\n    --display: inline-grid;\n    --flow: row;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-columns {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-columns {\n    grid-auto-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  :host(.grid-columns) {\n    --display: inline-grid;\n    --flow: row;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-columns) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-columns) {\n    grid-auto-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  .flex-columns > ::slotted(*) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  .flex-columns > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.flex-columns) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  :host(.flex-columns) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  .flex-columns > * {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  .flex-columns > * {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.flex-columns) ::slotted(*) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  :host(.flex-columns) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .flex-columns {\n    --display: inline-flex;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .flex-columns {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.flex-columns) {\n    --display: inline-flex;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.flex-columns) {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-layered > ::slotted(*) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > ::slotted(*) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) ::slotted(::slotted(*)) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) ::slotted(::slotted(*)) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered > * {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > * > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) ::slotted(*) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) ::slotted(*) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-layered {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-layered) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-layered) {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows-3c > ::slotted(*) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) ::slotted(::slotted(*)) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c > * {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) ::slotted(*) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows-3c) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows-3c > ::slotted(*:last-child) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  :host(.grid-rows-3c) ::slotted(::slotted(*:last-child)) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  .grid-rows-3c > *:last-child {\n    grid-column: var(--order, 1)/3 span;\n  }\n  :host(.grid-rows-3c) ::slotted(*:last-child) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  .grid-rows-3c {\n    --order: sibling-index();\n  }\n  .grid-rows-3c {\n    grid-column: var(--order, 1)/var(--order, 1) span;\n  }\n  .grid-rows-3c {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows-3c) {\n    --order: sibling-index();\n  }\n  :host(.grid-rows-3c) {\n    grid-column: var(--order, 1)/var(--order, 1) span;\n  }\n  :host(.grid-rows-3c) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .stretch-inline {\n    inline-size: 100%;\n    inline-size: -webkit-fill-available;\n    inline-size: stretch;\n  }\n  :host(.stretch-inline) {\n    inline-size: 100%;\n    inline-size: -webkit-fill-available;\n    inline-size: stretch;\n  }\n  .stretch-block {\n    block-size: 100%;\n    block-size: -webkit-fill-available;\n    block-size: stretch;\n  }\n  :host(.stretch-block) {\n    block-size: 100%;\n    block-size: -webkit-fill-available;\n    block-size: stretch;\n  }\n  .content-inline-size {\n    padding-inline: max(100% - (100% - var(--content-inline-size, 100%) * 0.5), 0px);\n  }\n  :host(.content-inline-size) {\n    padding-inline: max(100% - (100% - var(--content-inline-size, 100%) * 0.5), 0px);\n  }\n  .content-block-size {\n    padding-block: max(100% - (100% - var(--content-block-size, 100%) * 0.5), 0px);\n  }\n  :host(.content-block-size) {\n    padding-block: max(100% - (100% - var(--content-block-size, 100%) * 0.5), 0px);\n  }\n  .ux-anchor {\n    inset-inline-start: max(var(--client-x, 0px), 0px);\n    inset-block-start: max(var(--client-y, 0px), 0px);\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    writing-mode: horizontal-tb;\n    translate: 0% 0% 0%;\n    transform: none;\n  }\n  .ux-anchor {\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--client-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--client-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n  }\n  @supports (position-anchor: --example) {\n    .ux-anchor {\n      position-anchor: var(--anchor-group);\n      inset-inline-start: anchor(var(--anchor-group) start);\n      inset-block-start: anchor(var(--anchor-group) end);\n      inline-size: anchor-size(var(--anchor-group) self-inline);\n    }\n  }\n  :host(.ux-anchor) {\n    inset-inline-start: max(var(--client-x, 0px), 0px);\n    inset-block-start: max(var(--client-y, 0px), 0px);\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    writing-mode: horizontal-tb;\n    translate: 0% 0% 0%;\n    transform: none;\n  }\n  :host(.ux-anchor) {\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--client-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--client-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n  }\n  @supports (position-anchor: --example) {\n    :host(.ux-anchor) {\n      position-anchor: var(--anchor-group);\n      inset-inline-start: anchor(var(--anchor-group) start);\n      inset-block-start: anchor(var(--anchor-group) end);\n      inline-size: anchor-size(var(--anchor-group) self-inline);\n    }\n  }\n  .ux-anchor {\n    --shift-x: var(--client-x, 0px);\n    --shift-y: var(--client-y, 0px);\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    inset-inline-start: max(var(--shift-x), 0px);\n    inset-block-start: max(var(--shift-y), var(--status-bar-padding, 0px));\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    translate: 0% 0% 0%;\n    writing-mode: horizontal-tb;\n    transform: none;\n  }\n  :host(.ux-anchor) {\n    --shift-x: var(--client-x, 0px);\n    --shift-y: var(--client-y, 0px);\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    inset-inline-start: max(var(--shift-x), 0px);\n    inset-block-start: max(var(--shift-y), var(--status-bar-padding, 0px));\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    translate: 0% 0% 0%;\n    writing-mode: horizontal-tb;\n    transform: none;\n  }\n  .layered-wrap {\n    background-color: transparent;\n    display: inline grid;\n    inline-size: max-content;\n    block-size: max-content;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    z-index: calc(var(--z-index, 0) + 1);\n    overflow: visible;\n  }\n  .layered-wrap > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.layered-wrap) {\n    background-color: transparent;\n    display: inline grid;\n    inline-size: max-content;\n    block-size: max-content;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    z-index: calc(var(--z-index, 0) + 1);\n    overflow: visible;\n  }\n  :host(.layered-wrap) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n}\n@layer components {\n  ui-icon {\n    --icon-color: currentColor;\n    --icon-size: 1rem;\n    --icon-padding: 0.125rem;\n    display: inline-grid;\n    place-content: center;\n    place-items: center;\n    color: var(--icon-color);\n    aspect-ratio: 1;\n  }\n  ui-icon {\n    vertical-align: middle;\n    margin-inline-end: 0.125rem;\n  }\n  ui-icon:last-child {\n    margin-inline-end: 0;\n  }\n}", w = null;
async function T(t) {
	if (w === t) return;
	console.log("[Veela] Loading variant:", t);
	let n = async (t) => {
		typeof t == "string" && t.length && await e(t);
	};
	if (t === "core") {
		await n(S), w = t;
		return;
	}
	await n(C), w = t;
}
//#endregion
//#region ../../projects/subsystem/src/styles.ts
var E = {
	"vl-advanced": {
		id: "vl-advanced",
		name: "Veela Advanced",
		description: "Full-featured CSS framework with design tokens and effects",
		variant: "advanced",
		initFn: async () => {
			try {
				await T("advanced"), console.log("[Styles] Veela Advanced loaded");
			} catch {}
		}
	},
	"vl-basic": {
		id: "vl-basic",
		name: "Veela Basic Styles",
		description: "Lightweight minimal styling for basic functionality",
		variant: "basic",
		initFn: async () => {
			try {
				await T("basic"), console.log("[Styles] Veela Basic Styles loaded");
			} catch (e) {
				console.warn("[Styles] Failed to load Veela Basic Styles:", e);
			}
		}
	},
	"vl-beercss": {
		id: "vl-beercss",
		name: "Veela BeerCSS",
		description: "Beer CSS compatible styling with Material Design 3",
		variant: "beercss",
		initFn: async () => {
			try {
				await T("beercss"), console.log("[Styles] Veela BeerCSS loaded");
			} catch (e) {
				console.warn("[Styles] Failed to load Veela BeerCSS:", e);
			}
		}
	},
	"vl-core": {
		id: "vl-core",
		name: "Veela Core",
		description: "Shared foundation styles for all veela variants",
		variant: "core",
		initFn: async () => {
			try {
				await T("core"), console.log("[Styles] Veela Core loaded");
			} catch (e) {
				console.warn("[Styles] Failed to load Veela Core:", e);
			}
		}
	},
	raw: {
		id: "raw",
		name: "Raw",
		description: "No styling framework, browser defaults",
		variant: "core",
		initFn: async () => {
			console.log("[Styles] Raw mode - no styles loaded");
		}
	}
}, D = null;
async function O(e) {
	let t = E[e] || E["vl-basic"];
	if (!t) throw Error(`Unknown style system: ${e}`);
	if (D === e) {
		console.log(`[Styles] Style system '${e}' already loaded`);
		return;
	}
	console.log(`[Styles] Loading style system: ${t.name}`), t.initFn && await t.initFn(), D = e, console.log(`[Styles] Style system ${t.name} loaded`);
}
//#endregion
//#region ../../projects/subsystem/src/boot/hub-socket-boot.ts
async function k(e) {
	if (await _(e) || (n(e), h() && i()) || !t() || !r().trim()) return;
	let { initWebSocket: a, connectWS: o } = await import("./websocket-CeyFKyvH.js");
	a(null), o();
}
//#endregion
//#region ../../projects/subsystem/src/boot/BootLoader.ts
var A = (e) => e === "faint" ? "tabbed" : e === "base" ? "immersive" : e, j = {
	raw: {
		name: "Raw (No Framework)",
		stylesheets: [],
		description: "No CSS framework, raw browser defaults",
		recommendedShells: ["immersive"]
	},
	"vl-core": {
		name: "Core (Shared Foundation)",
		stylesheets: [],
		description: "Shared foundation styles for all veela variants",
		recommendedShells: ["immersive", "minimal"]
	},
	"vl-basic": {
		name: "Basic Veela Styles",
		stylesheets: [],
		description: "Minimal styling for basic functionality",
		recommendedShells: [
			"window",
			"tabbed",
			"minimal",
			"environment",
			"immersive",
			"content"
		]
	},
	"vl-advanced": {
		name: "Advanced (Full-Featured Styling)",
		stylesheets: [],
		description: "Full-featured styling with design tokens and effects",
		recommendedShells: [
			"tabbed",
			"minimal",
			"environment"
		]
	},
	"vl-beercss": {
		name: "BeerCSS (Beer CSS Compatible)",
		stylesheets: [],
		description: "Beer CSS compatible styling with Material Design 3",
		recommendedShells: ["tabbed"]
	}
}, M = class t {
	static instance;
	state = {
		phase: "idle",
		styleSystem: null,
		shell: null,
		view: null,
		error: null
	};
	stateChangeHandlers = /* @__PURE__ */ new Set();
	shellInstance = null;
	implicitBridgeCleanup = null;
	phaseHandlers = /* @__PURE__ */ new Map();
	constructor() {
		o();
	}
	static getInstance() {
		return t.instance ||= new t(), t.instance;
	}
	async boot(e, t) {
		console.log("[BootLoader] Starting boot sequence:", t);
		try {
			if (this.shellInstance) try {
				this.implicitBridgeCleanup?.(), this.implicitBridgeCleanup = null, d.unload(this.shellInstance.id);
			} catch (e) {
				console.warn("[BootLoader] Failed to unload previous shell:", e);
			} finally {
				this.shellInstance = null;
			}
			x(), m().catch(() => {});
			let n = await v().catch((e) => (console.warn("[BootLoader] Failed to load settings:", e), null));
			n && k(n).catch(() => void 0), a(n ?? g);
			try {
				let { initIngressPWA: e } = await import("./sw-handling-BpkW2tLF.js");
				await e();
			} catch (e) {
				console.warn("[BootLoader] Share-target / service worker ingress failed (non-fatal):", e);
			}
			await this.loadStyles(t.styleSystem);
			let r = this.resolveThemeFromSettings(n), i = await this.loadShell(t.shell, e);
			return i.setTheme(t.theme || r), await i.mount(e), this.implicitBridgeCleanup?.(), this.implicitBridgeCleanup = c(), t.channels && t.channels.length > 0 && await this.initChannels(t.channels, t.channelPriorityId), t.skipInitialNavigate ? this.dismissShellLoadingSpinner(i) : await i.navigate(t.defaultView), this.setPhase("ready"), t.rememberChoice && this.savePreferences(t), console.log("[BootLoader] Boot complete"), i;
		} catch (e) {
			throw console.error("[BootLoader] Boot failed:", e), this.updateState({
				phase: "error",
				error: e
			}), e;
		}
	}
	resolveThemeFromSettings(e) {
		let t = e?.appearance?.theme || "auto";
		return t === "dark" ? u : t === "light" ? l : s;
	}
	dismissShellLoadingSpinner(e) {
		try {
			let t = e.getElement().shadowRoot?.querySelector(".app-shell__loading");
			t && (t.hidden = !0);
		} catch {}
	}
	async loadStyles(t) {
		this.setPhase("styles"), console.log(`[BootLoader] Loading style system: ${t}`);
		let n = j[t] || j["vl-basic"];
		try {
			await O(t);
		} catch (e) {
			throw console.error(`[BootLoader] Failed to load style system: ${t}`, e), e;
		}
		for (let t of n.stylesheets) try {
			await e(t);
		} catch (e) {
			console.warn(`[BootLoader] Failed to load stylesheet: ${t}`, e);
		}
		this.updateState({ styleSystem: t }), console.log(`[BootLoader] Style system ${t} loaded`);
	}
	async loadShell(e, t) {
		this.setPhase("shell");
		let n = A(e);
		n !== e && console.warn(`[BootLoader] Shell "${e}" is temporarily disabled, redirecting to "${n}"`), console.log(`[BootLoader] Loading shell: ${n}`);
		let r = await d.load(n, t);
		return this.shellInstance = r, this.updateState({ shell: n }), console.log(`[BootLoader] Shell ${n} loaded`), r;
	}
	async initChannels(e, t) {
		this.setPhase("channels");
		let n = [...new Set(e)];
		if (n.length === 0) return;
		let r = (t && n.includes(t) ? t : null) ?? n[0], i = n.filter((e) => e !== r);
		console.log("[BootLoader] Initializing primary channel:", r, i.length ? `(+${i.length} deferred)` : "");
		try {
			await p.initChannel(r);
		} catch (e) {
			console.warn(`[BootLoader] Failed to init primary channel ${r}:`, e);
		}
		if (i.length === 0) {
			console.log("[BootLoader] Channels initialized");
			return;
		}
		let a = () => {
			(async () => {
				for (let e of i) try {
					await p.initChannel(e);
				} catch (t) {
					console.warn(`[BootLoader] Failed to init channel ${e}:`, t);
				}
				console.log("[BootLoader] Deferred channels initialized:", i);
			})();
		};
		typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(a, { timeout: 5e3 }) : globalThis.setTimeout?.(a, 0);
	}
	updateState(e) {
		Object.assign(this.state, e), this.notifyStateChange();
	}
	setPhase(e) {
		this.updateState({ phase: e });
		let t = this.phaseHandlers.get(e);
		if (t) for (let e of t) try {
			e(this.state);
		} catch (e) {
			console.error("[BootLoader] Phase handler error:", e);
		}
	}
	notifyStateChange() {
		for (let e of this.stateChangeHandlers) try {
			e(this.state);
		} catch (e) {
			console.error("[BootLoader] State handler error:", e);
		}
	}
	onStateChange(e) {
		return this.stateChangeHandlers.add(e), () => {
			this.stateChangeHandlers.delete(e);
		};
	}
	onPhase(e, t) {
		return this.phaseHandlers.has(e) || this.phaseHandlers.set(e, /* @__PURE__ */ new Set()), this.phaseHandlers.get(e).add(t), () => {
			this.phaseHandlers.get(e)?.delete(t);
		};
	}
	getState() {
		return { ...this.state };
	}
	getShell() {
		return this.shellInstance;
	}
	savePreferences(e) {
		try {
			let t = A(e.shell);
			localStorage.setItem("rs-boot-style", e.styleSystem), localStorage.setItem("rs-boot-shell", t), localStorage.setItem("rs-boot-view", e.defaultView), localStorage.setItem("rs-boot-remember", "1");
		} catch (e) {
			console.warn("[BootLoader] Failed to save preferences:", e);
		}
	}
	loadPreferences() {
		try {
			if (localStorage.getItem("rs-boot-remember") !== "1") return null;
			let e = A(localStorage.getItem("rs-boot-shell") || "minimal");
			return {
				styleSystem: localStorage.getItem("rs-boot-style") || void 0,
				shell: e,
				defaultView: localStorage.getItem("rs-boot-view") || void 0
			};
		} catch {
			return null;
		}
	}
	clearPreferences() {
		try {
			localStorage.removeItem("rs-boot-style"), localStorage.removeItem("rs-boot-shell"), localStorage.removeItem("rs-boot-view"), localStorage.removeItem("rs-boot-remember"), localStorage.removeItem(f);
		} catch {}
	}
}.getInstance();
//#endregion
export { M as bootLoader, M as default };
