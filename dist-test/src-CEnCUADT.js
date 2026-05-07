import { A as e, Cr as t, M as n, Ut as r, a as i, br as a, i as o, o as s, or as c, r as l, tr as u } from "./src-BoL7goZG.js";
import { t as d } from "./registry-COxTrl-W.js";
import { t as f } from "./settings-config-DYOSsuGM.js";
import { a as p, n as m } from "./channel-actions-UyALGbaW.js";
import { n as h } from "./types-BLPyqMSs.js";
import { n as g, t as _ } from "./src-BIgixmr1.js";
import { n as v } from "./channel-mixin-CGqsdyBK.js";
import { i as y, n as b, t as x } from "./view-ingress-validation-BajFgsTW.js";
import { t as S } from "./view-transport-DYG8Ej0e.js";
import { t as C } from "./purify.es-LA6kif_Y.js";
import { t as w } from "./auto-render-BO52ZEke.js";
//#region ../markdown-view/src/theme.ts
function T(e) {
	return e === "light" || e === "dark" ? e : typeof globalThis.matchMedia == "function" && globalThis.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
}
function E(e) {
	if (e === "light" || e === "dark" || e === "system") return e;
	if (typeof e == "string") {
		let t = e.trim().toLowerCase();
		if (t === "light" || t === "dark" || t === "system") return t;
	}
}
function D(e) {
	if (e != null) {
		if (typeof e == "string") return E(e.trim());
		if (typeof e == "object") {
			let t = e;
			return E(t.colorScheme ?? t.scheme ?? t.theme);
		}
	}
}
function O(e) {
	if (e) return e.colorScheme ? e.colorScheme : E(e.params?.colorScheme ?? e.params?.theme);
}
//#endregion
//#region ../markdown-view/src/index.scss?inline
var k = "@charset \"UTF-8\";\n@function --hsv(--src-color <color>) returns <color> {\n  result: hsl(from var(--src-color, black) h calc(calc((calc(l / 100) - calc(calc(l / 100) * (1 - calc(s / 100) / 2))) / clamp(0.0001, min(calc(calc(l / 100) * (1 - calc(s / 100) / 2)), calc(1 - calc(calc(l / 100) * (1 - calc(s / 100) / 2)))), 1)) * 100) calc(calc(calc(l / 100) * (1 - calc(s / 100) / 2)) * 100) / alpha);\n}\n/* ai-refactor: optimized/refactored at 2026-02-13T02:50:43Z */\n/* ==========================================================================\n    Meta / Declarations\n   ========================================================================== */\n/* ==========================================================================\n    Tokens / Mixins (global, not layered)\n   ========================================================================== */\n/* ai-refactor: optimized/refactored at 2026-02-13T00:48:23Z */\n@layer tokens, base, layout, utilities, shells, shell, views, view, viewer, components, ux-layer, markdown, essentials, print, print-breaks, overrides;\n@layer tokens {\n  :root,\n  :host,\n  :scope {\n    color-scheme: light dark;\n    --color-primary: #5a7fff;\n    --color-on-primary: #ffffff;\n    --color-secondary: #6b7280;\n    --color-on-secondary: #ffffff;\n    --color-tertiary: #64748b;\n    --color-on-tertiary: #ffffff;\n    --color-error: #ef4444;\n    --color-on-error: #ffffff;\n    --color-success: #4caf50;\n    --color-warning: #ff9800;\n    --color-info: #2196f3;\n    --color-background: #fafbfc;\n    --color-on-background: #1e293b;\n    --color-surface: #fafbfc;\n    --color-on-surface: #1e293b;\n    --color-surface-variant: #f1f5f9;\n    --color-on-surface-variant: #64748b;\n    --color-outline: #cbd5e1;\n    --color-outline-variant: #94a3b8;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 96%, var(--color-primary) 4%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 75%, transparent);\n    --space-xs: 0.25rem;\n    --space-sm: 0.5rem;\n    --space-md: 0.75rem;\n    --space-lg: 1rem;\n    --space-xl: 1.25rem;\n    --space-2xl: 1.5rem;\n    --padding-xs: var(--space-xs);\n    --padding-sm: var(--space-sm);\n    --padding-md: var(--space-md);\n    --padding-lg: var(--space-lg);\n    --padding-xl: var(--space-xl);\n    --padding-2xl: var(--space-2xl);\n    --padding-3xl: 2rem;\n    --padding-4xl: 2.5rem;\n    --padding-5xl: 3rem;\n    --padding-6xl: 4rem;\n    --padding-7xl: 5rem;\n    --padding-8xl: 6rem;\n    --padding-9xl: 8rem;\n    --gap-xs: var(--space-xs);\n    --gap-sm: var(--space-sm);\n    --gap-md: var(--space-md);\n    --gap-lg: var(--space-lg);\n    --gap-xl: var(--space-xl);\n    --gap-2xl: var(--space-2xl);\n    --radius-none: 0;\n    --radius-sm: 0.25rem;\n    --radius-default: 0.25rem;\n    --radius-md: 0.375rem;\n    --radius-lg: 0.5rem;\n    --radius-xl: 0.75rem;\n    --radius-2xl: 1rem;\n    --radius-3xl: 1.5rem;\n    --radius-full: 9999px;\n    --elev-0: none;\n    --elev-1: 0 1px 1px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1);\n    --elev-2: 0 2px 6px rgba(0, 0, 0, 0.12), 0 8px 24px rgba(0, 0, 0, 0.08);\n    --elev-3: 0 6px 16px rgba(0, 0, 0, 0.14), 0 18px 48px rgba(0, 0, 0, 0.1);\n    --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);\n    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);\n    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);\n    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);\n    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);\n    --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.1);\n    --shadow-inset: inset 0 2px 4px rgba(0, 0, 0, 0.06);\n    --shadow-inset-strong: inset 0 4px 8px rgba(0, 0, 0, 0.12);\n    --shadow-none: 0 0 #0000;\n    --text-xs: 0.8rem;\n    --text-sm: 0.9rem;\n    --text-base: 1rem;\n    --text-lg: 1.1rem;\n    --text-xl: 1.25rem;\n    --text-2xl: 1.6rem;\n    --text-3xl: 2rem;\n    --font-size-xs: 0.75rem;\n    --font-size-sm: 0.875rem;\n    --font-size-base: 1rem;\n    --font-size-lg: 1.125rem;\n    --font-size-xl: 1.25rem;\n    --font-weight-normal: 400;\n    --font-weight-medium: 500;\n    --font-weight-semibold: 600;\n    --font-weight-bold: 700;\n    --font-family: \"Roboto\", ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;\n    --font-family-mono: \"Roboto Mono\", \"SF Mono\", Monaco, Inconsolata, \"Fira Code\", monospace;\n    --font-sans: var(--font-family);\n    --font-mono: var(--font-family-mono);\n    --leading-tight: 1.2;\n    --leading-normal: 1.5;\n    --leading-relaxed: 1.8;\n    --transition-fast: 120ms cubic-bezier(0.2, 0, 0, 1);\n    --transition-normal: 160ms cubic-bezier(0.2, 0, 0, 1);\n    --transition-slow: 200ms cubic-bezier(0.2, 0, 0, 1);\n    --motion-fast: var(--transition-fast);\n    --motion-normal: var(--transition-normal);\n    --motion-slow: var(--transition-slow);\n    --focus-ring: 0 0 0 3px color-mix(in oklab, var(--color-primary) 35%, transparent);\n    --z-base: 0;\n    --z-dropdown: 100;\n    --z-sticky: 200;\n    --z-fixed: 300;\n    --z-modal-backdrop: 400;\n    --z-modal: 500;\n    --z-popover: 600;\n    --z-tooltip: 700;\n    --z-toast: 800;\n    --z-max: 9999;\n    --view-bg: var(--color-surface);\n    --view-fg: var(--color-on-surface);\n    --view-border: var(--color-outline-variant);\n    --view-input-bg: light-dark(#ffffff, var(--color-surface-container-high));\n    --view-files-bg: light-dark(rgba(0, 0, 0, 0.02), var(--color-surface-container-low));\n    --view-file-bg: light-dark(rgba(0, 0, 0, 0.03), var(--color-surface-container-lowest, var(--color-surface-container-low)));\n    --view-results-bg: light-dark(rgba(0, 0, 0, 0.01), var(--color-surface-container-low));\n    --view-result-bg: light-dark(rgba(0, 0, 0, 0.03), var(--color-surface-container-lowest, var(--color-surface-container-low)));\n    --color-surface-elevated: var(--color-surface-container);\n    --color-surface-hover: var(--color-surface-container-low);\n    --color-surface-active: var(--color-surface-container-high);\n    --color-on-surface-muted: var(--color-on-surface-variant);\n    --color-background-alt: var(--color-surface-variant);\n    --color-primary-hover: color-mix(in oklab, var(--color-primary) 80%, black);\n    --color-primary-active: color-mix(in oklab, var(--color-primary) 65%, black);\n    --color-accent: var(--color-secondary);\n    --color-accent-hover: color-mix(in oklab, var(--color-secondary) 80%, black);\n    --color-on-accent: var(--color-on-secondary);\n    --color-border-hover: var(--color-outline-variant);\n    --color-border-strong: var(--color-outline);\n    --color-border-focus: var(--color-primary);\n    --color-text: var(--color-on-surface);\n    --color-text-secondary: var(--color-on-surface-variant);\n    --color-text-muted: color-mix(in oklab, var(--color-on-surface) 50%, var(--color-surface));\n    --color-text-disabled: color-mix(in oklab, var(--color-on-surface) 38%, var(--color-surface));\n    --color-text-inverse: var(--color-on-primary);\n    --color-link: var(--color-primary);\n    --color-link-hover: color-mix(in oklab, var(--color-primary) 80%, black);\n    --color-success-light: color-mix(in oklab, var(--color-success) 60%, white);\n    --color-success-dark: color-mix(in oklab, var(--color-success) 70%, black);\n    --color-warning-light: color-mix(in oklab, var(--color-warning) 60%, white);\n    --color-warning-dark: color-mix(in oklab, var(--color-warning) 70%, black);\n    --color-error-light: color-mix(in oklab, var(--color-error) 60%, white);\n    --color-error-dark: color-mix(in oklab, var(--color-error) 70%, black);\n    --color-info-light: color-mix(in oklab, var(--color-info) 60%, white);\n    --color-info-dark: color-mix(in oklab, var(--color-info) 70%, black);\n    --color-bg: var(--color-surface, var(--color-surface));\n    --color-bg-alt: var(--color-surface-variant, var(--color-surface-variant));\n    --color-fg: var(--color-on-surface, var(--color-on-surface));\n    --color-fg-muted: var(--color-on-surface-variant, var(--color-on-surface-variant));\n    --btn-height-sm: 2rem;\n    --btn-height-md: 2.5rem;\n    --btn-height-lg: 3rem;\n    --btn-padding-x-sm: var(--space-md);\n    --btn-padding-x-md: var(--space-lg);\n    --btn-padding-x-lg: 1.5rem;\n    --btn-radius: var(--radius-md);\n    --btn-font-weight: var(--font-weight-medium);\n    --input-height-sm: 2rem;\n    --input-height-md: 2.5rem;\n    --input-height-lg: 3rem;\n    --input-padding-x: var(--space-md);\n    --input-radius: var(--radius-md);\n    --input-border-color: var(--color-border, var(--color-border));\n    --input-focus-ring-color: var(--color-primary);\n    --input-focus-ring-width: 2px;\n    --card-padding: var(--space-lg);\n    --card-radius: var(--radius-lg);\n    --card-shadow: var(--shadow-sm);\n    --card-border-color: var(--color-border, var(--color-border));\n    --modal-backdrop-bg: light-dark(rgb(0 0 0 / 0.5), rgb(0 0 0 / 0.7));\n    --modal-bg: var(--color-surface, var(--color-surface));\n    --modal-radius: var(--radius-xl);\n    --modal-shadow: var(--shadow-xl);\n    --modal-padding: 1.5rem;\n    --toast-font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif);\n    --toast-font-size: var(--font-size-base, 1rem);\n    --toast-font-weight: var(--font-weight-medium, 500);\n    --toast-letter-spacing: 0.01em;\n    --toast-line-height: 1.4;\n    --toast-white-space: nowrap;\n    --toast-pointer-events: auto;\n    --toast-user-select: none;\n    --toast-cursor: default;\n    --toast-opacity: 0;\n    --toast-transform: translateY(100%) scale(0.9);\n    --toast-transition: opacity 160ms ease-out, transform 160ms cubic-bezier(0.16, 1, 0.3, 1), background-color 100ms ease;\n    --toast-text: var(--color-on-surface, var(--color-on-surface, light-dark(#ffffff, #000000)));\n    --toast-bg: color-mix(in oklab, var(--color-surface-elevated, var(--color-surface-container-high, var(--color-surface, light-dark(#fafbfc, #1e293b)))) 90%, var(--color-on-surface, var(--color-on-surface, light-dark(#000000, #ffffff))));\n    --toast-radius: var(--radius-lg);\n    --toast-shadow: var(--shadow-lg);\n    --toast-padding: var(--space-lg);\n    --sidebar-width: 280px;\n    --sidebar-collapsed-width: 64px;\n    --nav-height: 56px;\n    --nav-height-compact: 48px;\n    --status-height: 24px;\n    --status-bg: var(--color-surface-elevated, var(--color-surface-container-high));\n    --status-font-size: var(--text-xs);\n  }\n  @media (prefers-color-scheme: dark) {\n    :root,\n    :host,\n    :scope {\n      --color-primary: #7ca7ff;\n      --color-on-primary: #0f172a;\n      --color-secondary: #94a3b8;\n      --color-on-secondary: #1e293b;\n      --color-tertiary: #94a3b8;\n      --color-on-tertiary: #0f172a;\n      --color-error: #f87171;\n      --color-on-error: #450a0a;\n      --color-success: #66bb6a;\n      --color-warning: #ffa726;\n      --color-info: #42a5f5;\n      --color-background: #0f1419;\n      --color-on-background: #f1f5f9;\n      --color-surface: #0f1419;\n      --color-on-surface: #f1f5f9;\n      --color-surface-variant: #1e293b;\n      --color-on-surface-variant: #cbd5e1;\n      --color-outline: #475569;\n      --color-outline-variant: #334155;\n      --color-surface-container-low: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n      --color-surface-container: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n      --color-surface-container-high: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n      --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 80%, var(--color-primary) 20%);\n      --color-border: color-mix(in oklab, var(--color-outline-variant) 70%, transparent);\n    }\n  }\n  [data-theme=light] {\n    color-scheme: light;\n    --color-primary: #5a7fff;\n    --color-on-primary: #ffffff;\n    --color-secondary: #6b7280;\n    --color-on-secondary: #ffffff;\n    --color-tertiary: #64748b;\n    --color-on-tertiary: #ffffff;\n    --color-error: #ef4444;\n    --color-on-error: #ffffff;\n    --color-success: #4caf50;\n    --color-warning: #ff9800;\n    --color-info: #2196f3;\n    --color-background: #fafbfc;\n    --color-on-background: #1e293b;\n    --color-surface: #fafbfc;\n    --color-on-surface: #1e293b;\n    --color-surface-variant: #f1f5f9;\n    --color-on-surface-variant: #64748b;\n    --color-outline: #cbd5e1;\n    --color-outline-variant: #94a3b8;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 96%, var(--color-primary) 4%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 75%, transparent);\n  }\n  [data-theme=dark] {\n    color-scheme: dark;\n    --color-primary: #7ca7ff;\n    --color-on-primary: #0f172a;\n    --color-secondary: #94a3b8;\n    --color-on-secondary: #1e293b;\n    --color-tertiary: #94a3b8;\n    --color-on-tertiary: #0f172a;\n    --color-error: #f87171;\n    --color-on-error: #450a0a;\n    --color-success: #66bb6a;\n    --color-warning: #ffa726;\n    --color-info: #42a5f5;\n    --color-background: #0f1419;\n    --color-on-background: #f1f5f9;\n    --color-surface: #0f1419;\n    --color-on-surface: #f1f5f9;\n    --color-surface-variant: #1e293b;\n    --color-on-surface-variant: #cbd5e1;\n    --color-outline: #475569;\n    --color-outline-variant: #334155;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 80%, var(--color-primary) 20%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 70%, transparent);\n  }\n  @media (prefers-reduced-motion: reduce) {\n    :root {\n      --transition-fast: 0ms;\n      --transition-normal: 0ms;\n      --transition-slow: 0ms;\n      --motion-fast: 0ms;\n      --motion-normal: 0ms;\n      --motion-slow: 0ms;\n    }\n  }\n  @media (prefers-contrast: high) {\n    :root {\n      --color-border: var(--color-border, var(--color-outline));\n      --color-border-hover: color-mix(in oklab, var(--color-border, var(--color-outline)) 80%, var(--color-on-surface, var(--color-on-surface)));\n      --color-text-secondary: var(--color-on-surface, var(--color-on-surface));\n      --color-text-muted: var(--color-on-surface-variant, var(--color-on-surface-variant));\n    }\n  }\n  @media print {\n    :root {\n      --view-padding: 0;\n      --view-content-max-width: 100%;\n      --view-bg: white;\n      --view-fg: black;\n      --view-heading-color: black;\n      --view-link-color: black;\n    }\n    :root:has([data-view=viewer]) {\n      --view-code-bg: #f5f5f5;\n      --view-code-fg: black;\n      --view-blockquote-bg: #f5f5f5;\n    }\n  }\n}\n/**\n * Unified CSS Custom Property Registration System\n * \n * This module consolidates property registration logic used across the library.\n * It provides a single source of truth for @property declarations via the\n * CSS Properties and Values API (CSS Houdini).\n * \n * Used by:\n * - lib/core/_properties.scss (orientation, transform, layout properties)\n * - lib/basic/_typed-properties.scss (UI component properties)\n * - lib/advanced/design/ (MD3 design properties)\n */\n/* stylelint-disable scss/function-no-unknown */\n@layer utilities {\n  .m-0 {\n    margin: 0;\n  }\n  .mb-0 {\n    margin-block: 0;\n  }\n  .mi-0 {\n    margin-inline: 0;\n  }\n  .p-0 {\n    padding: 0;\n  }\n  .pb-0 {\n    padding-block: 0;\n  }\n  .pi-0 {\n    padding-inline: 0;\n  }\n  .gap-0 {\n    gap: 0;\n  }\n  .inset-0 {\n    inset: 0;\n  }\n  .m-xs {\n    margin: 0.25rem;\n  }\n  .mb-xs {\n    margin-block: 0.25rem;\n  }\n  .mi-xs {\n    margin-inline: 0.25rem;\n  }\n  .p-xs {\n    padding: 0.25rem;\n  }\n  .pb-xs {\n    padding-block: 0.25rem;\n  }\n  .pi-xs {\n    padding-inline: 0.25rem;\n  }\n  .gap-xs {\n    gap: 0.25rem;\n  }\n  .inset-xs {\n    inset: 0.25rem;\n  }\n  .m-sm {\n    margin: 0.5rem;\n  }\n  .mb-sm {\n    margin-block: 0.5rem;\n  }\n  .mi-sm {\n    margin-inline: 0.5rem;\n  }\n  .p-sm {\n    padding: 0.5rem;\n  }\n  .pb-sm {\n    padding-block: 0.5rem;\n  }\n  .pi-sm {\n    padding-inline: 0.5rem;\n  }\n  .gap-sm {\n    gap: 0.5rem;\n  }\n  .inset-sm {\n    inset: 0.5rem;\n  }\n  .m-md {\n    margin: 0.75rem;\n  }\n  .mb-md {\n    margin-block: 0.75rem;\n  }\n  .mi-md {\n    margin-inline: 0.75rem;\n  }\n  .p-md {\n    padding: 0.75rem;\n  }\n  .pb-md {\n    padding-block: 0.75rem;\n  }\n  .pi-md {\n    padding-inline: 0.75rem;\n  }\n  .gap-md {\n    gap: 0.75rem;\n  }\n  .inset-md {\n    inset: 0.75rem;\n  }\n  .m-lg {\n    margin: 1rem;\n  }\n  .mb-lg {\n    margin-block: 1rem;\n  }\n  .mi-lg {\n    margin-inline: 1rem;\n  }\n  .p-lg {\n    padding: 1rem;\n  }\n  .pb-lg {\n    padding-block: 1rem;\n  }\n  .pi-lg {\n    padding-inline: 1rem;\n  }\n  .gap-lg {\n    gap: 1rem;\n  }\n  .inset-lg {\n    inset: 1rem;\n  }\n  .m-xl {\n    margin: 1.25rem;\n  }\n  .mb-xl {\n    margin-block: 1.25rem;\n  }\n  .mi-xl {\n    margin-inline: 1.25rem;\n  }\n  .p-xl {\n    padding: 1.25rem;\n  }\n  .pb-xl {\n    padding-block: 1.25rem;\n  }\n  .pi-xl {\n    padding-inline: 1.25rem;\n  }\n  .gap-xl {\n    gap: 1.25rem;\n  }\n  .inset-xl {\n    inset: 1.25rem;\n  }\n  .m-2xl {\n    margin: 1.5rem;\n  }\n  .mb-2xl {\n    margin-block: 1.5rem;\n  }\n  .mi-2xl {\n    margin-inline: 1.5rem;\n  }\n  .p-2xl {\n    padding: 1.5rem;\n  }\n  .pb-2xl {\n    padding-block: 1.5rem;\n  }\n  .pi-2xl {\n    padding-inline: 1.5rem;\n  }\n  .gap-2xl {\n    gap: 1.5rem;\n  }\n  .inset-2xl {\n    inset: 1.5rem;\n  }\n  .m-3xl {\n    margin: 2rem;\n  }\n  .mb-3xl {\n    margin-block: 2rem;\n  }\n  .mi-3xl {\n    margin-inline: 2rem;\n  }\n  .p-3xl {\n    padding: 2rem;\n  }\n  .pb-3xl {\n    padding-block: 2rem;\n  }\n  .pi-3xl {\n    padding-inline: 2rem;\n  }\n  .gap-3xl {\n    gap: 2rem;\n  }\n  .inset-3xl {\n    inset: 2rem;\n  }\n  .text-xs {\n    font-size: 0.75rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-sm {\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-base {\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-lg {\n    font-size: 1.125rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-xl {\n    font-size: 1.25rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-2xl {\n    font-size: 1.5rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .font-thin {\n    font-weight: 100;\n  }\n  .font-light {\n    font-weight: 300;\n  }\n  .font-normal {\n    font-weight: 400;\n  }\n  .font-medium {\n    font-weight: 500;\n  }\n  .font-semibold {\n    font-weight: 600;\n  }\n  .font-bold {\n    font-weight: 700;\n  }\n  .text-start {\n    text-align: start;\n  }\n  .text-center {\n    text-align: center;\n  }\n  .text-end {\n    text-align: end;\n  }\n  .text-primary {\n    color: #1e293b, #f1f5f9;\n  }\n  .text-secondary {\n    color: #64748b, #94a3b8;\n  }\n  .text-muted {\n    color: #94a3b8, #64748b;\n  }\n  .text-disabled {\n    color: #cbd5e1, #475569;\n  }\n  .block,\n  .vu-block {\n    display: block;\n  }\n  .inline,\n  .vu-inline {\n    display: inline;\n  }\n  .inline-block {\n    display: inline-block;\n  }\n  .flex,\n  .vu-flex {\n    display: flex;\n  }\n  .inline-flex {\n    display: inline-flex;\n  }\n  .grid,\n  .vu-grid {\n    display: grid;\n  }\n  .hidden,\n  .vu-hidden {\n    display: none;\n  }\n  .flex-row {\n    flex-direction: row;\n  }\n  .flex-col {\n    flex-direction: column;\n  }\n  .flex-wrap {\n    flex-wrap: wrap;\n  }\n  .flex-nowrap {\n    flex-wrap: nowrap;\n  }\n  .items-start {\n    align-items: flex-start;\n  }\n  .items-center {\n    align-items: center;\n  }\n  .items-end {\n    align-items: flex-end;\n  }\n  .items-stretch {\n    align-items: stretch;\n  }\n  .justify-start {\n    justify-content: flex-start;\n  }\n  .justify-center {\n    justify-content: center;\n  }\n  .justify-end {\n    justify-content: flex-end;\n  }\n  .justify-between {\n    justify-content: space-between;\n  }\n  .justify-around {\n    justify-content: space-around;\n  }\n  .grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .h-auto,\n  .block-size-auto {\n    block-size: auto;\n  }\n  .h-full,\n  .block-size-full {\n    block-size: 100%;\n  }\n  .h-screen {\n    block-size: 100vh;\n  }\n  .w-auto,\n  .inline-size-auto {\n    inline-size: auto;\n  }\n  .w-full,\n  .inline-size-full {\n    inline-size: 100%;\n  }\n  .w-screen {\n    inline-size: 100vw;\n  }\n  .min-h-0,\n  .min-block-size-0 {\n    min-block-size: 0;\n  }\n  .min-w-0,\n  .min-inline-size-0 {\n    min-inline-size: 0;\n  }\n  .max-h-full,\n  .max-block-size-full {\n    max-block-size: 100%;\n  }\n  .max-w-full,\n  .max-inline-size-full {\n    max-inline-size: 100%;\n  }\n  .static {\n    position: static;\n  }\n  .relative {\n    position: relative;\n  }\n  .absolute {\n    position: absolute;\n  }\n  .fixed {\n    position: fixed;\n  }\n  .sticky {\n    position: sticky;\n  }\n  .bg-surface {\n    background-color: #fafbfc, #0f1419;\n  }\n  .bg-surface-container {\n    background-color: #f1f5f9, #1e293b;\n  }\n  .bg-surface-container-high {\n    background-color: #e2e8f0, #334155;\n  }\n  .bg-primary {\n    background-color: #5a7fff, #7ca7ff;\n  }\n  .bg-secondary {\n    background-color: #6b7280, #94a3b8;\n  }\n  .border {\n    border: 1px solid #cbd5e1, #475569;\n  }\n  .border-2 {\n    border: 2px solid #cbd5e1, #475569;\n  }\n  .border-primary {\n    border: 1px solid #5a7fff, #7ca7ff;\n  }\n  .border-secondary {\n    border: 1px solid #6b7280, #94a3b8;\n  }\n  .rounded-none {\n    border-radius: 0;\n  }\n  .rounded-sm {\n    border-radius: 0.25rem;\n  }\n  .rounded-md {\n    border-radius: 0.375rem;\n  }\n  .rounded-lg {\n    border-radius: 0.5rem;\n  }\n  .rounded-full {\n    border-radius: 9999px;\n  }\n  .shadow-xs {\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  }\n  .shadow-sm {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  }\n  .shadow-md {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  }\n  .shadow-lg {\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  }\n  .shadow-xl {\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  }\n  .cursor-pointer {\n    cursor: pointer;\n  }\n  .cursor-default {\n    cursor: default;\n  }\n  .cursor-not-allowed {\n    cursor: not-allowed;\n  }\n  .select-none {\n    user-select: none;\n  }\n  .select-text {\n    user-select: text;\n  }\n  .select-all {\n    user-select: all;\n  }\n  .visible {\n    visibility: visible;\n  }\n  .invisible {\n    visibility: hidden;\n  }\n  .collapse,\n  .vs-collapsed {\n    visibility: collapse;\n  }\n  .opacity-0 {\n    opacity: 0;\n  }\n  .opacity-25 {\n    opacity: 0.25;\n  }\n  .opacity-50 {\n    opacity: 0.5;\n  }\n  .opacity-75 {\n    opacity: 0.75;\n  }\n  .opacity-100 {\n    opacity: 1;\n  }\n  @container (max-width: 320px) {\n    .hidden\\@xs {\n      display: none;\n    }\n  }\n  @container (max-width: 640px) {\n    .hidden\\@sm {\n      display: none;\n    }\n  }\n  @container (max-width: 768px) {\n    .hidden\\@md {\n      display: none;\n    }\n  }\n  @container (max-width: 1024px) {\n    .hidden\\@lg {\n      display: none;\n    }\n  }\n  @container (min-width: 320px) {\n    .block\\@xs {\n      display: block;\n    }\n  }\n  @container (min-width: 640px) {\n    .block\\@sm {\n      display: block;\n    }\n  }\n  @container (min-width: 768px) {\n    .block\\@md {\n      display: block;\n    }\n  }\n  @container (min-width: 1024px) {\n    .block\\@lg {\n      display: block;\n    }\n  }\n  @container (max-width: 320px) {\n    .text-sm\\@xs {\n      font-size: 0.875rem;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0;\n    }\n  }\n  @container (min-width: 640px) {\n    .text-base\\@sm {\n      font-size: 1rem;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0;\n    }\n  }\n  .icon-xs {\n    --icon-size: 0.75rem;\n  }\n  .icon-sm {\n    --icon-size: 0.875rem;\n  }\n  .icon-md {\n    --icon-size: 1rem;\n  }\n  .icon-lg {\n    --icon-size: 1.25rem;\n  }\n  .icon-xl {\n    --icon-size: 1.5rem;\n  }\n  .center-absolute {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  .center-flex {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: nowrap;\n  }\n  .interactive {\n    cursor: pointer;\n    touch-action: manipulation;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .interactive:focus-visible {\n    outline: 2px solid #dbeafe, #1e40af;\n    outline-offset: 2px;\n  }\n  .interactive:disabled, .interactive[aria-disabled=true] {\n    cursor: not-allowed;\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  .focus-ring:focus-visible {\n    outline: 2px solid #dbeafe, #1e40af;\n    outline-offset: 2px;\n  }\n  .truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .truncate-2 {\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .truncate-3 {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .aspect-square {\n    aspect-ratio: 1;\n  }\n  .aspect-video {\n    aspect-ratio: 16 / 9;\n  }\n  .margin-block-0 {\n    margin-block: 0;\n  }\n  .margin-block-sm {\n    margin-block: var(--space-sm);\n  }\n  .margin-block-md {\n    margin-block: var(--space-md);\n  }\n  .margin-block-lg {\n    margin-block: var(--space-lg);\n  }\n  .margin-inline-0 {\n    margin-inline: 0;\n  }\n  .margin-inline-sm {\n    margin-inline: var(--space-sm);\n  }\n  .margin-inline-md {\n    margin-inline: var(--space-md);\n  }\n  .margin-inline-lg {\n    margin-inline: var(--space-lg);\n  }\n  .margin-inline-auto {\n    margin-inline: auto;\n  }\n  .padding-block-0 {\n    padding-block: 0;\n  }\n  .padding-block-sm {\n    padding-block: var(--space-sm);\n  }\n  .padding-block-md {\n    padding-block: var(--space-md);\n  }\n  .padding-block-lg {\n    padding-block: var(--space-lg);\n  }\n  .padding-inline-0 {\n    padding-inline: 0;\n  }\n  .padding-inline-sm {\n    padding-inline: var(--space-sm);\n  }\n  .padding-inline-md {\n    padding-inline: var(--space-md);\n  }\n  .padding-inline-lg {\n    padding-inline: var(--space-lg);\n  }\n  .pointer-events-none {\n    pointer-events: none;\n  }\n  .pointer-events-auto {\n    pointer-events: auto;\n  }\n  .line-clamp-1 {\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .line-clamp-2 {\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .line-clamp-3 {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .vs-active {\n    --state-active: 1;\n  }\n  .vs-disabled {\n    pointer-events: none;\n    opacity: 0.5;\n  }\n  .vs-loading {\n    cursor: wait;\n  }\n  .vs-error {\n    color: var(--color-error, #dc3545);\n  }\n  .vs-success {\n    color: var(--color-success, #28a745);\n  }\n  .vs-hidden {\n    display: none !important;\n  }\n  .vl-container,\n  .container {\n    inline-size: 100%;\n    max-inline-size: var(--container-max, 1200px);\n    margin-inline: auto;\n  }\n  .vl-container {\n    padding-inline: var(--space-md);\n  }\n  .container {\n    padding-inline: var(--space-lg);\n  }\n  .vl-grid {\n    display: grid;\n    gap: var(--gap-md);\n  }\n  .vl-stack {\n    display: flex;\n    flex-direction: column;\n    gap: var(--gap-md);\n  }\n  .vl-cluster {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--gap-sm);\n    align-items: center;\n  }\n  .vl-center {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .vu-sr-only {\n    position: absolute;\n    inline-size: 1px;\n    block-size: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n  }\n  .vc-surface {\n    background-color: var(--color-surface);\n    color: var(--color-on-surface);\n  }\n  .vc-surface-variant {\n    background-color: var(--color-surface-variant);\n    color: var(--color-on-surface-variant);\n  }\n  .vc-primary {\n    background-color: var(--color-primary);\n    color: var(--color-on-primary);\n  }\n  .vc-secondary {\n    background-color: var(--color-secondary);\n    color: var(--color-on-secondary);\n  }\n  .vc-elevated {\n    box-shadow: var(--elev-1);\n  }\n  .vc-elevated-2 {\n    box-shadow: var(--elev-2);\n  }\n  .vc-elevated-3 {\n    box-shadow: var(--elev-3);\n  }\n  .vc-rounded {\n    border-radius: var(--radius-md);\n  }\n  .vc-rounded-sm {\n    border-radius: var(--radius-sm);\n  }\n  .vc-rounded-lg {\n    border-radius: var(--radius-lg);\n  }\n  .vc-rounded-full {\n    border-radius: var(--radius-full, 9999px);\n  }\n  .card {\n    background: var(--color-bg);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-lg);\n    padding: var(--space-lg);\n    box-shadow: var(--shadow-sm);\n  }\n  .stack > * + * {\n    margin-block-start: var(--space-md);\n  }\n  .stack-sm > * + * {\n    margin-block-start: var(--space-sm);\n  }\n  .stack-lg > * + * {\n    margin-block-start: var(--space-lg);\n  }\n  @media print {\n    .print-hidden {\n      display: none !important;\n    }\n    .print-visible {\n      display: block !important;\n    }\n    .print-break-before {\n      page-break-before: always;\n    }\n    .print-break-after {\n      page-break-after: always;\n    }\n    .print-break-inside-avoid {\n      page-break-inside: avoid;\n    }\n  }\n  @media (prefers-reduced-motion: reduce) {\n    .transition-fast,\n    .transition-normal,\n    .transition-slow {\n      transition: none;\n    }\n    * {\n      animation-duration: 0.01ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01ms !important;\n    }\n  }\n  @media (prefers-contrast: high) {\n    .text-primary {\n      color: var(--color-on-surface);\n    }\n    .text-secondary,\n    .text-muted,\n    .text-disabled {\n      color: var(--color-on-surface-variant);\n    }\n    .border {\n      border-width: 2px;\n    }\n    .border-top {\n      border-top-width: 2px;\n    }\n    .border-bottom {\n      border-bottom-width: 2px;\n    }\n    .border-left {\n      border-left-width: 2px;\n    }\n    .border-right {\n      border-right-width: 2px;\n    }\n  }\n}\n@property --value {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: true;\n}\n@property --relate {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: true;\n}\n@property --drag-x {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: false;\n}\n@property --drag-y {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: false;\n}\n@property --order {\n  syntax: \"<integer>\";\n  initial-value: 1;\n  inherits: true;\n}\n@property --content-inline-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 100%;\n  inherits: true;\n}\n@property --content-block-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 100%;\n  inherits: true;\n}\n@property --icon-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 16px;\n  inherits: true;\n}\n@property --icon-color {\n  syntax: \"<color>\";\n  initial-value: rgba(0, 0, 0, 0);\n  inherits: true;\n}\n@property --icon-padding {\n  syntax: \"<length-percentage>\";\n  initial-value: 0px;\n  inherits: true;\n}\n@property --icon-image {\n  syntax: \"<image>\";\n  initial-value: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));\n  inherits: true;\n}\n@layer ux-classes {\n  .grid-rows > ::slotted(*) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  .grid-rows > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-rows > ::slotted(*) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  .grid-rows > * {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  .grid-rows > * {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-rows > * {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  :host(.grid-rows) ::slotted(*) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  :host(.grid-rows) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-rows) ::slotted(*) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  .grid-rows {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-rows {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows {\n    grid-auto-rows: minmax(0px, max-content);\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  :host(.grid-rows) {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-rows) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows) {\n    grid-auto-rows: minmax(0px, max-content);\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  .grid-columns > ::slotted(*) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  .grid-columns > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-columns > ::slotted(*) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  .grid-columns > * {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  .grid-columns > * {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-columns > * {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  .grid-columns {\n    --display: inline-grid;\n    --flow: row;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-columns {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-columns {\n    grid-auto-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  :host(.grid-columns) {\n    --display: inline-grid;\n    --flow: row;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-columns) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-columns) {\n    grid-auto-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  .flex-columns > ::slotted(*) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  .flex-columns > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.flex-columns) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  :host(.flex-columns) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  .flex-columns > * {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  .flex-columns > * {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.flex-columns) ::slotted(*) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  :host(.flex-columns) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .flex-columns {\n    --display: inline-flex;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .flex-columns {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.flex-columns) {\n    --display: inline-flex;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.flex-columns) {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-layered > ::slotted(*) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > ::slotted(*) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) ::slotted(::slotted(*)) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) ::slotted(::slotted(*)) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered > * {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > * > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) ::slotted(*) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) ::slotted(*) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-layered {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-layered) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-layered) {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows-3c > ::slotted(*) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) ::slotted(::slotted(*)) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c > * {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) ::slotted(*) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows-3c) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows-3c > ::slotted(*:last-child) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  :host(.grid-rows-3c) ::slotted(::slotted(*:last-child)) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  .grid-rows-3c > *:last-child {\n    grid-column: var(--order, 1)/3 span;\n  }\n  :host(.grid-rows-3c) ::slotted(*:last-child) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  .grid-rows-3c {\n    --order: sibling-index();\n  }\n  .grid-rows-3c {\n    grid-column: var(--order, 1)/var(--order, 1) span;\n  }\n  .grid-rows-3c {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows-3c) {\n    --order: sibling-index();\n  }\n  :host(.grid-rows-3c) {\n    grid-column: var(--order, 1)/var(--order, 1) span;\n  }\n  :host(.grid-rows-3c) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .stretch-inline {\n    inline-size: 100%;\n    inline-size: -webkit-fill-available;\n    inline-size: stretch;\n  }\n  :host(.stretch-inline) {\n    inline-size: 100%;\n    inline-size: -webkit-fill-available;\n    inline-size: stretch;\n  }\n  .stretch-block {\n    block-size: 100%;\n    block-size: -webkit-fill-available;\n    block-size: stretch;\n  }\n  :host(.stretch-block) {\n    block-size: 100%;\n    block-size: -webkit-fill-available;\n    block-size: stretch;\n  }\n  .content-inline-size {\n    padding-inline: max(100% - (100% - var(--content-inline-size, 100%) * 0.5), 0px);\n  }\n  :host(.content-inline-size) {\n    padding-inline: max(100% - (100% - var(--content-inline-size, 100%) * 0.5), 0px);\n  }\n  .content-block-size {\n    padding-block: max(100% - (100% - var(--content-block-size, 100%) * 0.5), 0px);\n  }\n  :host(.content-block-size) {\n    padding-block: max(100% - (100% - var(--content-block-size, 100%) * 0.5), 0px);\n  }\n  .ux-anchor {\n    inset-inline-start: max(var(--client-x, 0px), 0px);\n    inset-block-start: max(var(--client-y, 0px), 0px);\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    writing-mode: horizontal-tb;\n    translate: 0% 0% 0%;\n    transform: none;\n  }\n  .ux-anchor {\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--client-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--client-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n  }\n  @supports (position-anchor: --example) {\n    .ux-anchor {\n      position-anchor: var(--anchor-group);\n      inset-inline-start: anchor(var(--anchor-group) start);\n      inset-block-start: anchor(var(--anchor-group) end);\n      inline-size: anchor-size(var(--anchor-group) self-inline);\n    }\n  }\n  :host(.ux-anchor) {\n    inset-inline-start: max(var(--client-x, 0px), 0px);\n    inset-block-start: max(var(--client-y, 0px), 0px);\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    writing-mode: horizontal-tb;\n    translate: 0% 0% 0%;\n    transform: none;\n  }\n  :host(.ux-anchor) {\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--client-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--client-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n  }\n  @supports (position-anchor: --example) {\n    :host(.ux-anchor) {\n      position-anchor: var(--anchor-group);\n      inset-inline-start: anchor(var(--anchor-group) start);\n      inset-block-start: anchor(var(--anchor-group) end);\n      inline-size: anchor-size(var(--anchor-group) self-inline);\n    }\n  }\n  .ux-anchor {\n    --shift-x: var(--client-x, 0px);\n    --shift-y: var(--client-y, 0px);\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    inset-inline-start: max(var(--shift-x), 0px);\n    inset-block-start: max(var(--shift-y), var(--status-bar-padding, 0px));\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    translate: 0% 0% 0%;\n    writing-mode: horizontal-tb;\n    transform: none;\n  }\n  :host(.ux-anchor) {\n    --shift-x: var(--client-x, 0px);\n    --shift-y: var(--client-y, 0px);\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    inset-inline-start: max(var(--shift-x), 0px);\n    inset-block-start: max(var(--shift-y), var(--status-bar-padding, 0px));\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    translate: 0% 0% 0%;\n    writing-mode: horizontal-tb;\n    transform: none;\n  }\n  .layered-wrap {\n    background-color: transparent;\n    display: inline grid;\n    inline-size: max-content;\n    block-size: max-content;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    z-index: calc(var(--z-index, 0) + 1);\n    overflow: visible;\n  }\n  .layered-wrap > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.layered-wrap) {\n    background-color: transparent;\n    display: inline grid;\n    inline-size: max-content;\n    block-size: max-content;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    z-index: calc(var(--z-index, 0) + 1);\n    overflow: visible;\n  }\n  :host(.layered-wrap) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n}\n@layer components {\n  ui-icon {\n    --icon-color: currentColor;\n    --icon-size: 1rem;\n    --icon-padding: 0.125rem;\n    display: inline-grid;\n    place-content: center;\n    place-items: center;\n    color: var(--icon-color);\n    aspect-ratio: 1;\n  }\n  ui-icon {\n    vertical-align: middle;\n    margin-inline-end: 0.125rem;\n  }\n  ui-icon:last-child {\n    margin-inline-end: 0;\n  }\n}\n@layer tokens, base, layout, utilities, shells, shell, views, view, viewer, components, ux-layer, markdown, essentials, print, print-breaks, view-transitions, overrides;\n@layer viewer.tokens {\n  :root:has([data-view=viewer]),\n  html:has([data-view=viewer]) {\n    /* layout */\n    --view-layout: \"flex\";\n    --view-content-max-width: 800px;\n    --view-padding: clamp(1rem, 3cqw, 1.75rem);\n    /* typography */\n    --view-font-size-base: 1rem;\n    --view-line-height-base: 1.6;\n    --view-prose-font-size: var(--text-base);\n    --view-prose-line-height: 1.75;\n    --view-prose-heading-margin: var(--space-6);\n    /*\n     * WHY: No `color-scheme` here — `syncBrowserChromeTheme` / Settings already set `html` color-scheme\n     * + `data-theme`. Forcing `light dark` let UA pick dark while the shell was light (minimal `.app-shell`),\n     * splitting toolbar/markdown from nav.\n     */\n    /* toolbar control hit targets */\n    --view-toolbar-btn-pad-block: 0.4rem;\n    --view-toolbar-btn-pad-inline: 0.65rem;\n    /* units */\n    --view-code-font-size: 0.9em;\n  }\n}\n@layer viewer.base {\n  /*\n   * Shell = column flex. Typical tree: .cw-view-viewer-shell > .view-viewer >\n   *   toolbar + .view-viewer__content[data-viewer-content] > pre[raw] + prose[data-render-target].\n   * Web-component host may use shadow slots; same __content wrapper in both cases.\n   */\n  .cw-view-viewer-shell {\n    --viewer-shell-container-type: inline-size;\n    --viewer-shell-contain: layout style paint;\n    --viewer-shell-inline-size: 100%;\n    --viewer-shell-block-size: 100%;\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    inline-size: var(--viewer-shell-inline-size, 100%);\n    block-size: var(--viewer-shell-block-size, 100%);\n    max-inline-size: none;\n    max-block-size: none;\n    min-block-size: max(100%, 100cqb);\n    min-inline-size: 0;\n    container-type: var(--viewer-shell-container-type, inline-size);\n    contain: var(--viewer-shell-contain, layout style paint);\n    contain-intrinsic-size: auto 1000px;\n    isolation: isolate;\n  }\n  .view-viewer {\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    background-color: var(--view-bg);\n    color: var(--view-fg);\n    min-block-size: max(100%, 100cqb);\n    min-inline-size: 0;\n    block-size: max-content;\n    inline-size: 100%;\n    max-block-size: stretch;\n    overflow: hidden;\n  }\n  .cw-view-viewer-shell:not([data-raw]) .view-viewer {\n    flex: 1 1 auto;\n    min-block-size: 0;\n    min-inline-size: 0;\n  }\n  /* Standalone: raw lives in .view-viewer__content; grow view-viewer when showing raw */\n  .cw-view-viewer-shell[data-raw]:not(:has(.cw-view-viewer__slot-default)) .view-viewer {\n    flex: 1 1 auto;\n    min-block-size: 0;\n    min-inline-size: 0;\n  }\n  /* Web component: shell’s only block child is .view-viewer; it fills height */\n  .cw-view-viewer-shell:has(.cw-view-viewer__slot-default) .view-viewer {\n    flex: 1 1 auto;\n    min-block-size: 0;\n    min-inline-size: 0;\n  }\n  /* Slot wrappers stack inside __content; __content is the flex grow + clip region */\n  .cw-view-viewer-shell:has(.cw-view-viewer__slot-default) .view-viewer__content {\n    flex: 1 1 auto;\n    min-block-size: 0;\n    min-inline-size: 0;\n    block-size: 100%;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n  }\n  .cw-view-viewer-shell:has(.cw-view-viewer__slot-default):not([data-raw]) .cw-view-viewer__slot-raw {\n    display: none !important;\n  }\n  .cw-view-viewer-shell:has(.cw-view-viewer__slot-default)[data-raw] .cw-view-viewer__slot-default {\n    display: none !important;\n  }\n  .cw-view-viewer-shell:has(.cw-view-viewer__slot-default):not([data-raw]) .cw-view-viewer__slot-default {\n    flex: 1 1 auto;\n    min-block-size: 0;\n    min-inline-size: 0;\n    block-size: 100%;\n    inline-size: 100%;\n    box-sizing: border-box;\n    overflow-block: auto;\n    overflow-inline: hidden;\n    overscroll-behavior: contain;\n  }\n  .cw-view-viewer-shell:has(.cw-view-viewer__slot-default):not([data-raw]) .cw-view-viewer__slot-default > slot {\n    display: block;\n    block-size: 100%;\n    inline-size: 100%;\n    min-block-size: 0;\n    min-inline-size: 0;\n  }\n  .cw-view-viewer-shell:has(.cw-view-viewer__slot-default):not([data-raw]) .cw-view-viewer__slot-default > slot::slotted([data-render-target]) {\n    display: block;\n    block-size: 100%;\n    inline-size: 100%;\n    max-block-size: none;\n    min-block-size: 0;\n    min-inline-size: 0;\n    overflow-block: auto;\n    overflow-inline: hidden;\n    overscroll-behavior: contain;\n  }\n  .cw-view-viewer-shell:has(.cw-view-viewer__slot-default)[data-raw] .cw-view-viewer__slot-raw {\n    flex: 1 1 auto;\n    min-block-size: 0;\n    min-inline-size: 0;\n    block-size: 100%;\n    inline-size: 100%;\n    box-sizing: border-box;\n    overflow-block: auto;\n    overflow-inline: hidden;\n    overscroll-behavior: contain;\n  }\n  /* Standalone: in raw mode hide rendered prose (pre stays in __content). Never hide __content — prose lives inside it. */\n  .cw-view-viewer-shell:not(:has(.cw-view-viewer__slot-default))[data-raw] .cw-view-viewer__prose {\n    display: none !important;\n  }\n  .cw-view-viewer-shell:not(:has(.cw-view-viewer__slot-default)):not([data-raw]) .cw-view-viewer__prose {\n    flex: 1 1 auto;\n    min-block-size: 0;\n    min-inline-size: 0;\n    block-size: 100%;\n    inline-size: 100%;\n    box-sizing: border-box;\n    overflow-block: auto;\n    overflow-inline: hidden;\n    overscroll-behavior: contain;\n  }\n  .cw-view-viewer-shell:not(:has(.cw-view-viewer__slot-default))[data-raw] .view-viewer__content {\n    flex: 1 1 auto;\n    min-block-size: 0;\n    min-inline-size: 0;\n    block-size: 100%;\n    inline-size: 100%;\n  }\n}\n@layer viewer.components {\n  /*\n   * Nested toolbar host must always stretch full row inside view-viewer.\n   * If it shrink-wraps, left/right groups wrap into two toolbar rows.\n   */\n  .view-viewer > cw-markdown-toolbar-frame {\n    display: block;\n    box-sizing: border-box;\n    inline-size: 100%;\n    min-inline-size: 0;\n    min-block-size: 0;\n    flex: 0 0 auto;\n  }\n  /* Compact toolbar: tight rhythm, icon-led controls (theme tokens when present). */\n  .view-viewer__toolbar {\n    /*\n     * Toolbar icons: ui-icon (fest/icon) static duotone map and --icon-color.\n     * Override on `.view-viewer`, shell, or host:\n     *   --view-picon-fill, --view-picon-fill-hover, --view-picon-fill-active, --view-picon-fill-disabled\n     */\n    --view-toolbar-icon-size: 1.25rem;\n    --view-toolbar-ph-icon-size: var(--view-toolbar-icon-size);\n    --view-picon-fill: var(--color-on-surface, var(--view-fg));\n    --view-picon-fill-hover: var(--color-primary, var(--color-on-surface, var(--view-fg)));\n    --view-picon-fill-active: color-mix(\n        in oklab,\n        var(--color-on-surface, var(--view-fg)) 82%,\n        var(--color-primary, #007acc) 18%\n    );\n    --view-picon-fill-disabled: color-mix(in oklab, var(--color-on-surface, var(--view-fg)) 40%, transparent);\n    --view-toolbar-row-pad-block: 0.2rem;\n    --view-toolbar-row-pad-inline: 0.2rem;\n    --view-toolbar-gap: 0.125rem;\n    position: relative;\n    display: grid;\n    grid-template-columns: max-content minmax(0, 1fr) max-content;\n    align-items: center;\n    gap: var(--view-toolbar-gap);\n    min-block-size: 2rem;\n    padding: 0.2rem 0.75rem;\n    background: var(--view-toolbar-bg, var(--color-surface-container-high));\n    border-block-end: none;\n    box-shadow: 0 10px 28px -22px color-mix(in oklab, var(--view-fg) 16%, transparent);\n    flex-shrink: 0;\n    overflow-inline: auto;\n    overflow-block: hidden;\n    scrollbar-width: none;\n    scrollbar-color: transparent transparent;\n    -webkit-overflow-scrolling: touch;\n    container-type: inline-size;\n    contain: layout style paint;\n    box-sizing: border-box;\n    inline-size: 100%;\n    min-inline-size: 0;\n    max-inline-size: 100%;\n    white-space: nowrap;\n  }\n  .view-viewer__toolbar button.view-viewer__btn > ui-icon.view-viewer__toolbar-icon {\n    order: -1;\n    box-sizing: border-box;\n    vertical-align: middle;\n    --icon-size: var(--view-toolbar-ph-icon-size, 1.25rem);\n    --icon-padding: 0;\n    --icon-color: var(--view-picon-fill);\n    pointer-events: none;\n    transition: color var(--motion-fast, 0.12s ease);\n    min-inline-size: max-content;\n    min-block-size: max-content;\n    inline-size: 1rem;\n    block-size: 1rem;\n    aspect-ratio: 1/1;\n  }\n  .view-viewer__toolbar::before {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, transparent 100%);\n    pointer-events: none;\n  }\n  .view-viewer__toolbar > * {\n    position: relative;\n    z-index: 1;\n  }\n  .view-viewer__toolbar::-webkit-scrollbar {\n    display: none;\n  }\n  @container (max-inline-size: 1024px) {\n    .view-viewer__toolbar {\n      min-block-size: 2.125rem;\n      padding: 0.15rem 0.15rem;\n    }\n  }\n  @container (max-inline-size: 768px) {\n    .view-viewer__toolbar {\n      min-block-size: 2.25rem;\n      padding: 0.15rem 0.15rem;\n    }\n  }\n  .view-viewer__toolbar-center {\n    flex: 1 1 auto;\n    min-inline-size: 0;\n    min-block-size: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-inline: 0.35rem;\n    pointer-events: none;\n  }\n  .view-viewer__toolbar-title {\n    display: block;\n    max-inline-size: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: var(--text-sm, 0.8125rem);\n    font-weight: var(--font-weight-medium, 500);\n    line-height: 1.25;\n    letter-spacing: 0.02em;\n    color: color-mix(in oklab, var(--color-on-surface, var(--view-fg)) 88%, transparent);\n    text-align: center;\n  }\n  .view-viewer__toolbar-title:empty {\n    display: none;\n  }\n  .view-viewer__toolbar-left,\n  .view-viewer__toolbar-right {\n    display: flex;\n    flex-shrink: 0;\n    flex-grow: 0;\n    flex-basis: max-content;\n    flex-wrap: nowrap;\n    gap: 0.15rem;\n    padding: 0.1rem 0;\n    align-items: center;\n    min-inline-size: 0;\n    inline-size: max-content;\n    max-inline-size: 100%;\n    overflow: hidden;\n  }\n  .view-viewer__toolbar-left {\n    justify-content: flex-start;\n  }\n  .view-viewer__toolbar-right {\n    justify-content: flex-end;\n  }\n  .view-viewer__btn {\n    display: inline-flex;\n    align-items: safe center;\n    justify-content: safe center;\n    align-content: safe center;\n    justify-items: safe center;\n    gap: 0.3rem;\n    min-block-size: max-content;\n    padding-block: var(--view-toolbar-btn-pad-block, 0.375rem);\n    padding-inline: var(--view-toolbar-btn-pad-inline, 0.5625rem);\n    border: none;\n    border-radius: var(--view-toolbar-btn-radius, 0.625rem);\n    background: var(--color-surface, transparent);\n    color: var(--color-on-surface, var(--view-fg));\n    font-family: inherit;\n    font-size: var(--text-xs, 0.75rem);\n    font-weight: var(--font-weight-medium, 500);\n    line-height: 1.2;\n    letter-spacing: 0.01em;\n    white-space: nowrap;\n    cursor: pointer;\n    appearance: none;\n    -webkit-tap-highlight-color: transparent;\n    box-sizing: border-box;\n    flex-shrink: 0;\n    flex-basis: max-content;\n    flex-grow: 0;\n    contain: none;\n    container-type: normal;\n    transition: background-color var(--motion-fast, 0.12s ease), color var(--motion-fast, 0.12s ease), box-shadow var(--motion-fast, 0.12s ease);\n    overflow: visible;\n    inline-size: max-content;\n    min-inline-size: max-content;\n    /* Labels secondary to icons (typo fix: priority = icons > text). */\n  }\n  .view-viewer__btn span {\n    max-inline-size: none;\n    flex-basis: max-content;\n    flex-grow: 1;\n    overflow: hidden;\n    inline-size: max-content;\n    min-inline-size: max-content;\n    text-overflow: ellipsis;\n    font-size: 0.625rem;\n    font-weight: 400;\n    line-height: 1.15;\n    letter-spacing: 0.03em;\n    text-transform: uppercase;\n    display: inline-block;\n    opacity: 0.88;\n    flex-shrink: 0;\n  }\n  .view-viewer__btn:hover {\n    background: var(--color-surface-container-high, var(--view-btn-hover-bg));\n  }\n  .view-viewer__btn:hover span {\n    opacity: 1;\n  }\n  .view-viewer__btn:hover > ui-icon.view-viewer__toolbar-icon {\n    --icon-color: var(--view-picon-fill-hover);\n  }\n  .view-viewer__btn:active {\n    background: color-mix(in oklab, var(--color-surface-container-high, var(--view-btn-hover-bg)) 92%, var(--color-on-surface, currentColor) 8%);\n  }\n  .view-viewer__btn:active > ui-icon.view-viewer__toolbar-icon {\n    --icon-color: var(--view-picon-fill-active);\n  }\n  .view-viewer__btn:disabled > ui-icon.view-viewer__toolbar-icon {\n    --icon-color: var(--view-picon-fill-disabled);\n    opacity: 0.55;\n  }\n  .view-viewer__btn:focus-visible {\n    outline: none;\n    box-shadow: var(--focus-ring, 0 0 0 2px var(--color-primary, #007acc));\n  }\n  @container (max-inline-size: 1024px) {\n    .view-viewer__btn {\n      gap: 0.2rem;\n      padding-block: max(0.3rem, var(--view-toolbar-btn-pad-block, 0.375rem));\n      padding-inline: max(0.45rem, var(--view-toolbar-btn-pad-inline, 0.5625rem));\n      min-block-size: 1.75rem;\n    }\n  }\n  @container (max-inline-size: 768px) {\n    .view-viewer__btn {\n      gap: 0;\n      min-block-size: 1.875rem;\n      min-inline-size: 1.875rem;\n      padding-block: var(--view-toolbar-btn-pad-block, 0.4rem);\n      padding-inline: var(--view-toolbar-btn-pad-block, 0.4rem);\n    }\n    .view-viewer__btn span {\n      display: none;\n    }\n  }\n  .view-viewer__md-loading {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n    padding: 1.25rem 1rem;\n    color: var(--view-fg);\n    opacity: 0.9;\n    font-size: 0.9rem;\n  }\n  .view-viewer__md-loading::before {\n    content: \"\";\n    inline-size: 1.25rem;\n    block-size: 1.25rem;\n    border: 2px solid var(--view-border);\n    border-block-start-color: var(--view-link-color);\n    border-radius: 50%;\n    animation: view-spin 0.75s linear infinite;\n    flex-shrink: 0;\n  }\n  .view-viewer__content {\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    inline-size: 100%;\n    min-inline-size: 0;\n    padding: 0;\n    background-color: var(--view-bg);\n    block-size: stretch;\n    flex-grow: 1;\n  }\n  .view-viewer__content.dragover {\n    background-color: rgba(0, 122, 204, 0.05);\n    outline: 2px dashed rgba(0, 122, 204, 0.3);\n    outline-offset: -8px;\n  }\n  /* Standalone / non–slot-mode: __content is the scrollport */\n  .cw-view-viewer-shell:not(:has(.cw-view-viewer__slot-default)) .view-viewer__content {\n    flex: 1 1 auto;\n    min-block-size: 0;\n    overflow-block: auto;\n    overflow-inline: hidden;\n    overscroll-behavior: contain;\n  }\n  .cw-view-viewer-shell.dragover {\n    background-color: rgba(0, 122, 204, 0.05);\n    outline: 2px dashed rgba(0, 122, 204, 0.3);\n    outline-offset: -8px;\n  }\n  /* Shell / critical CSS may set user-select:none on broad ancestors — keep prose selectable and context menus usable. */\n  .cw-view-viewer-shell [data-render-target],\n  .cw-view-viewer-shell [data-render-target] * {\n    pointer-events: auto;\n    user-select: text;\n    -webkit-user-select: text;\n    -webkit-touch-callout: default;\n  }\n  /* Slotted prose lives in cw-view-viewer light DOM (not under .cw-view-viewer-shell in the tree). */\n  cw-view-viewer [data-render-target],\n  cw-view-viewer [data-render-target] * {\n    pointer-events: auto;\n    user-select: text;\n    -webkit-user-select: text;\n    -webkit-touch-callout: default;\n  }\n  /*\n   * Prose mount: column flex so outline stays above and .view-viewer__md-root fills remaining block-size.\n   * Shell-without-host uses .cw-view-viewer-shell only — include that path (not just cw-view-viewer …).\n   */\n  .cw-view-viewer-shell .view-viewer__content > [data-render-target],\n  cw-view-viewer [data-render-target] {\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 auto;\n    align-self: stretch;\n    box-sizing: border-box;\n    min-block-size: 0;\n    min-inline-size: 0;\n    block-size: auto;\n    max-block-size: none;\n    overflow-block: auto;\n    overflow-inline: hidden;\n    overscroll-behavior: contain;\n  }\n  /* Prose chrome: comfortable inset + large first heading (reference layout). */\n  .cw-view-viewer-shell .markdown-viewer-raw,\n  .cw-view-viewer-shell pre[data-raw-target] {\n    margin: 0;\n    padding: var(--view-padding);\n    color: var(--view-fg);\n    background-color: var(--view-bg);\n    border: none;\n    font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, monospace;\n    font-size: 0.8125rem;\n    line-height: 1.5;\n    white-space: pre-wrap;\n    word-break: break-word;\n  }\n  .cw-view-viewer-shell .cw-view-viewer__prose.markdown-body,\n  .cw-view-viewer-shell [data-render-target].markdown-body {\n    padding: var(--view-padding);\n    color: var(--view-fg);\n    background-color: var(--view-bg);\n  }\n  cw-view-viewer [data-render-target].markdown-body,\n  cw-view-viewer [data-render-target].cw-view-viewer__prose {\n    padding: var(--view-padding);\n    color: var(--view-fg);\n    background-color: var(--view-bg);\n  }\n  .cw-view-viewer-shell .markdown-body h1,\n  cw-view-viewer .markdown-body h1 {\n    color: var(--view-fg);\n    font-weight: 600;\n    font-size: clamp(1.5rem, 4.5cqw, 2.125rem);\n    letter-spacing: -0.02em;\n    line-height: 1.2;\n    margin-block: 0 0.75em;\n  }\n}\n@layer viewer.utilities {\n  @keyframes view-spin {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  @media print {\n    .cw-view-viewer-shell {\n      display: block !important;\n      block-size: max-content !important;\n      inline-size: 100% !important;\n      overflow: visible !important;\n      max-block-size: none !important;\n      min-block-size: max(100%, 100cqb) !important;\n    }\n    .view-viewer {\n      display: block !important;\n      min-block-size: max(100%, 100cqb) !important;\n      block-size: max-content !important;\n      inline-size: 100% !important;\n      overflow: visible !important;\n      background: transparent !important;\n      color: #000 !important;\n      max-block-size: none !important;\n    }\n    .view-viewer__toolbar {\n      display: none !important;\n    }\n    .view-viewer__content {\n      display: block !important;\n      padding: 0 !important;\n      overflow: visible !important;\n      block-size: max-content !important;\n      inline-size: 100% !important;\n      max-block-size: none !important;\n      min-block-size: max(100%, 100cqb) !important;\n    }\n    .cw-view-viewer__prose {\n      display: block !important;\n      block-size: max-content !important;\n      inline-size: 100% !important;\n      overflow: visible !important;\n      contain: none !important;\n      max-block-size: none !important;\n      min-block-size: max(100%, 100cqb) !important;\n    }\n    .cw-view-viewer__slot-raw,\n    .cw-view-viewer__slot-default {\n      display: block !important;\n      block-size: max-content !important;\n      inline-size: 100% !important;\n      overflow: visible !important;\n      max-block-size: none !important;\n      min-block-size: max(100%, 100cqb) !important;\n    }\n    [data-render-target],\n    .markdown-body,\n    .markdown-viewer-content,\n    .result-content {\n      display: block !important;\n      visibility: visible !important;\n      opacity: 1 !important;\n      overflow: visible !important;\n      block-size: max-content !important;\n      max-block-size: none !important;\n      min-block-size: max(100%, 100cqb) !important;\n      inline-size: 100% !important;\n      color: #000 !important;\n      background: transparent !important;\n    }\n  }\n}\n@layer layer.view.common, layer.view.viewer;\n@layer layer.view.common {\n  :where([data-cw-view-host=true]) {\n    display: block;\n    inline-size: 100%;\n    block-size: 100%;\n    min-inline-size: 0;\n    min-block-size: 0;\n  }\n}\n@layer layer.view.viewer {\n  .cw-view-viewer-shell {\n    display: flex;\n    flex-direction: column;\n    inline-size: 100%;\n    block-size: 100%;\n    min-inline-size: 0;\n    min-block-size: max(100%, 100cqb);\n    max-block-size: none;\n  }\n  .view-viewer {\n    display: grid;\n    grid-template-rows: [toolbar-row] max-content [content-row] minmax(0, 1fr);\n    flex: 1 1 0%;\n    inline-size: 100%;\n    block-size: 100%;\n    min-inline-size: 0;\n    min-block-size: 0;\n    color: var(--view-fg, var(--color-on-surface, light-dark(#1a1a1a, #e5e7eb)));\n    background: var(--view-bg, var(--color-surface, light-dark(#f4f6fa, #060d17)));\n  }\n  .view-viewer__toolbar {\n    grid-row: toolbar-row;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n    padding: 0.45rem 0.65rem;\n    border-block-end: none;\n    box-shadow: 0 12px 32px -20px color-mix(in oklab, #000 45%, transparent);\n    background: var(--view-toolbar-bg, light-dark(color-mix(in oklab, var(--color-surface-container, #e2e8f0) 88%, transparent), color-mix(in oklab, var(--color-surface-container, #0f1a2b) 88%, transparent)));\n    min-inline-size: 100%;\n    box-sizing: border-box;\n  }\n  .view-viewer__toolbar-left,\n  .view-viewer__toolbar-right {\n    display: inline-flex;\n    align-items: center;\n    gap: 0.4rem;\n    min-inline-size: 0;\n  }\n  .view-viewer__toolbar-center {\n    flex: 1 1 auto;\n    min-inline-size: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding-inline: 0.35rem;\n    pointer-events: none;\n  }\n  .view-viewer__toolbar-title {\n    display: block;\n    max-inline-size: 100%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 0.8125rem;\n    font-weight: 500;\n    line-height: 1.25;\n    color: color-mix(in oklab, var(--color-on-surface, light-dark(#334155, #e5e7eb)) 88%, transparent);\n    text-align: center;\n  }\n  .view-viewer__toolbar-title:empty {\n    display: none;\n  }\n  .view-viewer__toolbar-group {\n    display: inline-flex;\n    align-items: center;\n    gap: 0.25rem;\n    min-inline-size: 0;\n  }\n  .view-viewer__btn {\n    display: inline-flex;\n    align-items: center;\n    gap: 0.35rem;\n    padding-block: var(--view-toolbar-btn-pad-block, 0.4375rem);\n    padding-inline: var(--view-toolbar-btn-pad-inline, 0.6875rem);\n    border: none;\n    border-radius: var(--view-toolbar-btn-radius, 0.625rem);\n    background: color-mix(in oklab, var(--color-on-surface, light-dark(#334155, #e5e7eb)) 6%, transparent);\n    color: color-mix(in oklab, var(--color-on-surface, light-dark(#334155, #e5e7eb)) 82%, transparent);\n    font: inherit;\n    font-size: 0.78rem;\n    line-height: 1;\n    cursor: pointer;\n    white-space: nowrap;\n    transition: background-color var(--motion-fast, 0.14s ease), color var(--motion-fast, 0.14s ease);\n  }\n  .view-viewer__btn:hover {\n    background: color-mix(in oklab, var(--color-on-surface, light-dark(#334155, #e5e7eb)) 11%, transparent);\n    color: var(--color-on-surface, light-dark(#0f172a, #f8fafc));\n  }\n  .view-viewer__toolbar-icon {\n    inline-size: 1rem;\n    block-size: 1rem;\n  }\n  .view-viewer__content {\n    grid-row: content-row;\n    position: relative;\n    inline-size: 100%;\n    min-inline-size: 0;\n    min-block-size: 0;\n    overflow: auto;\n    /* Prose / raw apply their own inset via viewer tokens (--view-padding). */\n    padding: 0;\n  }\n}\n@layer view.viewer {\n  .viewer-loading-indicator {\n    position: absolute;\n    inset-block-start: var(--padding-md);\n    inset-inline-end: var(--padding-md);\n    display: flex;\n    align-items: center;\n    gap: var(--gap-sm);\n    padding: var(--padding-xs) var(--padding-sm);\n    border-radius: var(--radius-md);\n    background-color: oklch(from var(--surface-container-high) l c h/0.9);\n    backdrop-filter: blur(8px);\n    z-index: 100;\n    opacity: 0;\n    pointer-events: none;\n    transform: translateY(-4px);\n    transition: opacity var(--transition-fast), transform var(--transition-fast);\n  }\n  .viewer-loading-indicator[data-state=loading] {\n    opacity: 1;\n    transform: translateY(0);\n    pointer-events: auto;\n  }\n  .viewer-loading-indicator .loading-spinner {\n    inline-size: 1rem;\n    block-size: 1rem;\n    border: 2px solid oklch(from var(--primary) l c h/0.2);\n    border-block-start-color: var(--primary);\n    border-radius: var(--radius-full);\n    animation: viewer-spinner 0.8s linear infinite;\n  }\n  .viewer-loading-indicator .loading-text {\n    font-family: var(--font-family-base);\n  }\n  .viewer-loading-indicator .loading-text:where(:-webkit-autofill, :autofill, :-webkit-autofill:hover, :-webkit-autofill:focus, :-webkit-autofill:active) {\n    font-family: var(--font-family-base);\n  }\n  .viewer-loading-indicator .loading-text {\n    color: var(--on-surface-variant);\n  }\n  .viewer-section {\n    position: relative;\n  }\n  .viewer-section[data-loading-state=loading]::before {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(90deg, transparent 0%, oklch(from var(--primary) l c h/0.05) 50%, transparent 100%);\n    background-size: 200% 100%;\n    animation: viewer-skeleton-shimmer 1.5s ease-in-out infinite;\n    pointer-events: none;\n    z-index: 1;\n    border-radius: inherit;\n  }\n  .viewer-section[data-loading-state=loaded] .viewer-tab-content-body {\n    animation: viewer-fade-in 0.3s ease-out;\n  }\n  .viewer-section[data-loading-state=error]::after {\n    content: attr(data-error);\n    position: absolute;\n    inset-block-end: var(--padding-md);\n    inset-inline: var(--padding-md);\n    padding: var(--padding-sm) var(--padding-md);\n    background-color: oklch(from var(--error) l c h/0.1);\n    color: var(--error);\n    border-radius: var(--radius-md);\n    font-family: var(--font-family-base);\n  }\n  .viewer-section[data-loading-state=error]::after:where(:-webkit-autofill, :autofill, :-webkit-autofill:hover, :-webkit-autofill:focus, :-webkit-autofill:active) {\n    font-family: var(--font-family-base);\n  }\n  .viewer-section[data-loading-state=error]::after {\n    text-align: center;\n    z-index: 100;\n  }\n  [data-type=tasks],\n  [data-type=contacts],\n  [data-type=bonuses],\n  [data-type=services] {\n    grid-auto-rows: minmax(0px, max-content);\n    grid-auto-flow: row;\n    column-fill: balance;\n    align-items: start;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n    overflow-y: auto;\n    perspective: 1000;\n    transform: translateZ(0px);\n    content-visibility: auto;\n    contain: strict;\n    inline-size: stretch;\n    max-inline-size: stretch;\n  }\n  [data-type=tasks] > *,\n  [data-type=contacts] > *,\n  [data-type=bonuses] > *,\n  [data-type=services] > * {\n    animation: viewer-slide-in 0.25s ease-out backwards;\n  }\n  [data-type=tasks] > *:nth-child(1),\n  [data-type=contacts] > *:nth-child(1),\n  [data-type=bonuses] > *:nth-child(1),\n  [data-type=services] > *:nth-child(1) {\n    animation-delay: 30ms;\n  }\n  [data-type=tasks] > *:nth-child(2),\n  [data-type=contacts] > *:nth-child(2),\n  [data-type=bonuses] > *:nth-child(2),\n  [data-type=services] > *:nth-child(2) {\n    animation-delay: 60ms;\n  }\n  [data-type=tasks] > *:nth-child(3),\n  [data-type=contacts] > *:nth-child(3),\n  [data-type=bonuses] > *:nth-child(3),\n  [data-type=services] > *:nth-child(3) {\n    animation-delay: 90ms;\n  }\n  [data-type=tasks] > *:nth-child(4),\n  [data-type=contacts] > *:nth-child(4),\n  [data-type=bonuses] > *:nth-child(4),\n  [data-type=services] > *:nth-child(4) {\n    animation-delay: 120ms;\n  }\n  [data-type=tasks] > *:nth-child(5),\n  [data-type=contacts] > *:nth-child(5),\n  [data-type=bonuses] > *:nth-child(5),\n  [data-type=services] > *:nth-child(5) {\n    animation-delay: 150ms;\n  }\n  [data-type=tasks] > *:nth-child(6),\n  [data-type=contacts] > *:nth-child(6),\n  [data-type=bonuses] > *:nth-child(6),\n  [data-type=services] > *:nth-child(6) {\n    animation-delay: 180ms;\n  }\n  [data-type=tasks] > *:nth-child(7),\n  [data-type=contacts] > *:nth-child(7),\n  [data-type=bonuses] > *:nth-child(7),\n  [data-type=services] > *:nth-child(7) {\n    animation-delay: 210ms;\n  }\n  [data-type=tasks] > *:nth-child(8),\n  [data-type=contacts] > *:nth-child(8),\n  [data-type=bonuses] > *:nth-child(8),\n  [data-type=services] > *:nth-child(8) {\n    animation-delay: 240ms;\n  }\n  [data-type=tasks] > *:nth-child(9),\n  [data-type=contacts] > *:nth-child(9),\n  [data-type=bonuses] > *:nth-child(9),\n  [data-type=services] > *:nth-child(9) {\n    animation-delay: 270ms;\n  }\n  [data-type=tasks] > *:nth-child(10),\n  [data-type=contacts] > *:nth-child(10),\n  [data-type=bonuses] > *:nth-child(10),\n  [data-type=services] > *:nth-child(10) {\n    animation-delay: 300ms;\n  }\n  [data-type=tasks] > *:nth-child(11),\n  [data-type=contacts] > *:nth-child(11),\n  [data-type=bonuses] > *:nth-child(11),\n  [data-type=services] > *:nth-child(11) {\n    animation-delay: 330ms;\n  }\n  [data-type=tasks] > *:nth-child(12),\n  [data-type=contacts] > *:nth-child(12),\n  [data-type=bonuses] > *:nth-child(12),\n  [data-type=services] > *:nth-child(12) {\n    animation-delay: 360ms;\n  }\n  section {\n    background-color: transparent;\n  }\n  ui-file-manager {\n    background-color: oklch(from --c2-surface(0.15, var(--current, currentColor)) l c h/0.9);\n    backdrop-filter: blur(1rem);\n  }\n  ui-tabbed-box {\n    inline-size: stretch;\n    block-size: stretch;\n    gap: 0px;\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  @container (max-inline-size: 1024px) {\n    ui-tabbed-box {\n      order: 3;\n      grid-column: 1/-1;\n    }\n  }\n  ui-tabbed-box[data-loading=loading] .viewer-tab-content {\n    opacity: 0.7;\n    pointer-events: none;\n  }\n  ui-tabbed-box .viewer-tab-content {\n    display: grid;\n    gap: var(--gap-xs);\n    border-radius: 0px;\n    padding: var(--padding-sm);\n    --md3-elevation-level: 1;\n    overflow-y: auto;\n  }\n  ui-tabbed-box .viewer-tab-content {\n    min-inline-size: 0px;\n    min-block-size: 0px;\n    max-inline-size: stretch;\n    max-block-size: none;\n    inline-size: stretch;\n    block-size: stretch;\n    box-sizing: border-box;\n    box-shadow: none;\n    perspective: 1000;\n    transform: translateZ(0px);\n    content-visibility: auto;\n    contain: strict;\n    overflow-x: hidden;\n    scrollbar-gutter: auto;\n    touch-action: manipulation;\n    pointer-events: auto;\n    align-content: start;\n    overflow-wrap: break-word;\n    text-overflow: ellipsis;\n    transition: opacity var(--transition-normal);\n    background-color: oklch(from --c2-surface(0.15, var(--current, currentColor)) l c h/0.9);\n    backdrop-filter: blur(1rem);\n  }\n  ui-tabbed-box .viewer-tab-content:empty::after {\n    content: \"No items to display\";\n    display: flex;\n    place-content: center;\n    place-items: center;\n    min-block-size: 120px;\n    color: var(--on-surface-variant);\n    font-family: var(--font-family-base);\n  }\n  ui-tabbed-box .viewer-tab-content:empty::after:where(:-webkit-autofill, :autofill, :-webkit-autofill:hover, :-webkit-autofill:focus, :-webkit-autofill:active) {\n    font-family: var(--font-family-base);\n  }\n  ui-tabbed-box .viewer-tab-content:empty::after {\n    opacity: 0.6;\n  }\n  ui-tabbed-box .viewer-tab-content .viewer-tab-content-header {\n    font-family: var(--font-family-base);\n    text-align: center;\n  }\n  ui-tabbed-box .viewer-tab-content .viewer-tab-content-header:where(:-webkit-autofill, :autofill, :-webkit-autofill:hover, :-webkit-autofill:focus, :-webkit-autofill:active) {\n    font-family: var(--font-family-base);\n  }\n  ui-tabbed-box .viewer-tab-content .viewer-tab-content-header {\n    color: color-mix(in oklch, var(--on-surface, currentColor) var(--surface-opacity-muted, 8%), transparent);\n    padding: var(--padding-xs);\n    border-radius: var(--radius-sm);\n    background-color: transparent;\n    pointer-events: none;\n  }\n  ui-tabbed-box .viewer-tab-content .viewer-tab-content-body {\n    display: grid;\n    gap: var(--gap-xs);\n    pointer-events: none;\n    block-size: max-content;\n    min-inline-size: 0px;\n    max-inline-size: stretch;\n    min-block-size: 0px;\n    max-block-size: none;\n    inline-size: stretch;\n    box-shadow: none;\n    perspective: 1000;\n    transform: translateZ(0px);\n    content-visibility: auto;\n  }\n  ui-tabbed-box .viewer-tab-content .viewer-tab-content-body > * {\n    animation: viewer-slide-in 0.2s ease-out backwards;\n  }\n  ui-tabbed-box .viewer-tab-content .viewer-tab-content-body > *:nth-child(1) {\n    animation-delay: 40ms;\n  }\n  ui-tabbed-box .viewer-tab-content .viewer-tab-content-body > *:nth-child(2) {\n    animation-delay: 80ms;\n  }\n  ui-tabbed-box .viewer-tab-content .viewer-tab-content-body > *:nth-child(3) {\n    animation-delay: 120ms;\n  }\n  ui-tabbed-box .viewer-tab-content .viewer-tab-content-body > *:nth-child(4) {\n    animation-delay: 160ms;\n  }\n  ui-tabbed-box .viewer-tab-content .viewer-tab-content-body > *:nth-child(5) {\n    animation-delay: 200ms;\n  }\n  ui-tabbed-box .viewer-tab-content .viewer-tab-content-body > *:nth-child(6) {\n    animation-delay: 240ms;\n  }\n  ui-tabbed-box .viewer-tab-content .viewer-tab-content-body > *:nth-child(7) {\n    animation-delay: 280ms;\n  }\n  ui-tabbed-box .viewer-tab-content .viewer-tab-content-body > *:nth-child(8) {\n    animation-delay: 320ms;\n  }\n  ui-tabbed-box .viewer-tab-content .viewer-tab-content-body[data-load-state=loading]:empty {\n    min-block-size: 80px;\n    display: grid;\n    place-content: center;\n  }\n  ui-tabbed-box .viewer-tab-content .viewer-tab-content-body[data-load-state=loading]:empty::after {\n    content: \"\";\n    inline-size: 32px;\n    block-size: 32px;\n    border: 2px solid oklch(from var(--primary) l c h/0.2);\n    border-block-start-color: var(--primary);\n    border-radius: var(--radius-full);\n    animation: viewer-spinner 0.8s linear infinite;\n  }\n  ui-tabbed-box .viewer-tab-content .viewer-tab-content-body[data-load-state=empty]:empty, ui-tabbed-box .viewer-tab-content .viewer-tab-content-body[data-load-state=loaded]:empty {\n    min-block-size: 80px;\n    display: grid;\n    place-content: center;\n  }\n  ui-tabbed-box .viewer-tab-content .viewer-tab-content-body[data-load-state=empty]:empty::after, ui-tabbed-box .viewer-tab-content .viewer-tab-content-body[data-load-state=loaded]:empty::after {\n    content: \"No items to display\";\n    color: var(--on-surface-variant);\n    font-family: var(--font-family-base);\n  }\n  ui-tabbed-box .viewer-tab-content .viewer-tab-content-body[data-load-state=empty]:empty::after:where(:-webkit-autofill, :autofill, :-webkit-autofill:hover, :-webkit-autofill:focus, :-webkit-autofill:active), ui-tabbed-box .viewer-tab-content .viewer-tab-content-body[data-load-state=loaded]:empty::after:where(:-webkit-autofill, :autofill, :-webkit-autofill:hover, :-webkit-autofill:focus, :-webkit-autofill:active) {\n    font-family: var(--font-family-base);\n  }\n  ui-tabbed-box .viewer-tab-content .viewer-tab-content-body[data-load-state=empty]:empty::after, ui-tabbed-box .viewer-tab-content .viewer-tab-content-body[data-load-state=loaded]:empty::after {\n    opacity: 0.6;\n    animation: viewer-fade-in 0.3s ease-out;\n  }\n  ui-tabbed-box .viewer-tab-content .viewer-tab-content-body[data-load-state=pending]:empty {\n    min-block-size: 40px;\n    display: grid;\n    place-content: center;\n    opacity: 0.4;\n  }\n  .subgroup {\n    display: grid;\n    gap: var(--gap-xs);\n    pointer-events: none;\n    text-align: center;\n    animation: viewer-slide-in 0.25s ease-out backwards;\n  }\n  .subgroup .subgroup-items {\n    display: grid;\n    gap: var(--gap-xs);\n    padding: var(--padding-xs);\n    pointer-events: none;\n  }\n  .subgroup .subgroup-items > * {\n    animation: viewer-slide-in 0.2s ease-out backwards;\n  }\n  .subgroup .subgroup-items > *:nth-child(1) {\n    animation-delay: 25ms;\n  }\n  .subgroup .subgroup-items > *:nth-child(2) {\n    animation-delay: 50ms;\n  }\n  .subgroup .subgroup-items > *:nth-child(3) {\n    animation-delay: 75ms;\n  }\n  .subgroup .subgroup-items > *:nth-child(4) {\n    animation-delay: 100ms;\n  }\n  .subgroup .subgroup-items > *:nth-child(5) {\n    animation-delay: 125ms;\n  }\n  .subgroup .subgroup-items > *:nth-child(6) {\n    animation-delay: 150ms;\n  }\n  .subgroup .subgroup-items > *:nth-child(7) {\n    animation-delay: 175ms;\n  }\n  .subgroup .subgroup-items > *:nth-child(8) {\n    animation-delay: 200ms;\n  }\n  .subgroup .subgroup-items > *:nth-child(9) {\n    animation-delay: 225ms;\n  }\n  .subgroup .subgroup-items > *:nth-child(10) {\n    animation-delay: 250ms;\n  }\n  .subgroup .subgroup-items > *:nth-child(11) {\n    animation-delay: 275ms;\n  }\n  .subgroup .subgroup-items > *:nth-child(12) {\n    animation-delay: 300ms;\n  }\n  .subgroup .subgroup-items:empty {\n    display: none;\n  }\n  .subgroup .subgroup-header {\n    font-family: var(--font-family-base);\n    text-transform: uppercase;\n  }\n  .subgroup .subgroup-header:where(:-webkit-autofill, :autofill, :-webkit-autofill:hover, :-webkit-autofill:focus, :-webkit-autofill:active) {\n    font-family: var(--font-family-base);\n  }\n  .subgroup .subgroup-header {\n    color: color-mix(in oklch, var(--on-surface, currentColor) var(--text-tint-primary, 92%), transparent);\n    text-align: center;\n    padding: var(--padding-xs);\n    border-radius: var(--radius-sm);\n    border-radius: var(--radius-sm);\n    background-color: oklch(from var(--surface-color) l c h/0.6);\n    pointer-events: none;\n    inline-size: fit-content;\n    justify-self: center;\n    position: sticky;\n    inset-block-start: 0;\n    z-index: 10;\n    backdrop-filter: blur(2px);\n  }\n  .subgroup[data-collapsed=true] .subgroup-items {\n    display: none;\n    content-visibility: hidden;\n  }\n  .viewer-section,\n  .viewer-tab-content,\n  .viewer-tab-content-body {\n    scroll-behavior: smooth;\n  }\n  @media (prefers-reduced-motion: reduce) {\n    .viewer-section,\n    .viewer-tab-content,\n    .viewer-tab-content-body {\n      scroll-behavior: auto;\n    }\n    .viewer-section *, .viewer-section *::before, .viewer-section *::after,\n    .viewer-tab-content *,\n    .viewer-tab-content *::before,\n    .viewer-tab-content *::after,\n    .viewer-tab-content-body *,\n    .viewer-tab-content-body *::before,\n    .viewer-tab-content-body *::after {\n      animation-duration: 0.01ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01ms !important;\n    }\n  }\n  .viewer-tab-content-body > * {\n    content-visibility: auto;\n    contain-intrinsic-size: auto 80px;\n  }\n}\n@view-transition {\n  navigation: auto;\n}\n@layer view-transitions {\n  [data-shell-content] > [data-view]:not([hidden]) {\n    view-transition-name: active-view;\n  }\n  [data-shell] nav[role=navigation] {\n    view-transition-name: shell-nav;\n    contain: layout;\n  }\n  :root {\n    --vt-duration: 260ms;\n    --vt-easing: cubic-bezier(0.4, 0, 0.2, 1);\n    --vt-old-anim: vt-fade-out;\n    --vt-new-anim: vt-fade-in;\n  }\n  :root[data-vt-direction=forward] {\n    --vt-old-anim: vt-slide-out-left;\n    --vt-new-anim: vt-slide-in-right;\n  }\n  :root[data-vt-direction=backward] {\n    --vt-old-anim: vt-slide-out-right;\n    --vt-new-anim: vt-slide-in-left;\n  }\n  ::view-transition-old(active-view) {\n    animation: var(--vt-old-anim) var(--vt-duration) var(--vt-easing) both;\n  }\n  ::view-transition-new(active-view) {\n    animation: var(--vt-new-anim) var(--vt-duration) var(--vt-easing) both;\n  }\n  ::view-transition-old(shell-nav),\n  ::view-transition-new(shell-nav) {\n    animation: none;\n    mix-blend-mode: normal;\n  }\n  @keyframes vt-fade-in {\n    from {\n      opacity: 0;\n    }\n  }\n  @keyframes vt-fade-out {\n    to {\n      opacity: 0;\n    }\n  }\n  @keyframes vt-slide-in-right {\n    from {\n      opacity: 0;\n      transform: translateX(5%);\n    }\n  }\n  @keyframes vt-slide-out-left {\n    to {\n      opacity: 0;\n      transform: translateX(-5%);\n    }\n  }\n  @keyframes vt-slide-in-left {\n    from {\n      opacity: 0;\n      transform: translateX(-5%);\n    }\n  }\n  @keyframes vt-slide-out-right {\n    to {\n      opacity: 0;\n      transform: translateX(5%);\n    }\n  }\n  @media (prefers-reduced-motion: reduce) {\n    ::view-transition-old(active-view),\n    ::view-transition-new(active-view) {\n      animation-duration: 0.001ms !important;\n    }\n  }\n}\n@layer tokens {\n  :root {\n    /* Layout: sizes */\n    --view-nav-height-base: 56px;\n    --view-nav-height: 48px;\n    --view-sidebar-width: 240px;\n    --view-sidebar-collapsed: 64px;\n    --view-status-height: 24px;\n    --view-toolbar-height: 40px;\n    --view-tab-height: 36px;\n    --view-content-gutter: 1rem;\n    /* Layout: view */\n    --view-max-width: 100%;\n    --view-content-max-width: 960px;\n    --view-padding: var(--space-4);\n    --view-padding-x: var(--space-6);\n    --view-padding-y: var(--space-4);\n    /* Colors */\n    --view-accent: var(--color-primary);\n    --view-accent-hover: var(--color-primary-hover);\n    --view-bg: var(--color-surface);\n    --view-bg-secondary: var(--color-surface-elevated);\n    --view-border: var(--color-border);\n    --view-border-color: var(--color-border);\n    --view-divider-color: var(--color-border);\n    --view-fg: var(--color-on-surface);\n    --view-fg-muted: var(--color-on-surface-muted);\n    --view-hover-bg: var(--color-surface-hover);\n    --view-nav-bg: var(--color-surface-elevated);\n    --view-nav-border: var(--color-outline-variant);\n    --view-nav-fg: var(--color-on-surface);\n    --view-selected-bg: var(--color-surface-active);\n    --view-selected-border: var(--color-border-focus);\n    --view-sidebar-bg: var(--color-surface);\n    --view-sidebar-fg: var(--color-on-surface);\n    --view-status-bg: var(--color-surface-elevated);\n    --view-status-fg: var(--color-text-secondary);\n    /* Motion */\n    --view-transition: var(--transition-normal) var(--ease-in-out);\n  }\n  /* PWA / notch: overscroll and status-bar letterboxing pick up the same surface as the app */\n  html {\n    background-color: var(--color-background, Canvas);\n  }\n  :is(html, body):has([data-shell=minimal] [data-view=workcenter]) {\n    --view-sidebar-position: \"right\";\n    --view-toolbar-alignment: \"end\";\n  }\n  :is(html, body):has([data-shell=faint] [data-view=viewer]) {\n    --view-tab-active: true;\n  }\n  :is(:root, html):has([data-shell=faint] [data-view=viewer]) {\n    --view-content-max-width: 720px;\n    --view-padding-x: var(--space-8);\n  }\n  :is(:root, html):has([data-shell=minimal] [data-view=viewer]),\n  :is(:root, html):has([data-shell=base] [data-view=viewer]),\n  :is(:root, html):has([data-shell=immersive] [data-view=viewer]) {\n    --view-content-max-width: 800px;\n    --view-padding-x: var(--space-6);\n  }\n  :is(:root, html):has([data-shell=base] [data-view=airpad]),\n  :is(:root, html):has([data-shell=immersive] [data-view=airpad]),\n  :is(:root, html):has([data-shell=minimal] [data-view=airpad]) {\n    --view-content-max-width: none;\n    --view-padding: 0;\n    --view-padding-x: 0;\n    --view-padding-y: 0;\n  }\n  :is(:root, html):has([data-shell=raw] [data-view=home]) {\n    --view-content-max-width: 100%;\n    --view-padding: var(--space-4);\n  }\n  :is(:root, html):has([data-view=debug]) {\n    --view-content-max-width: none;\n    --view-debug-bg: #1a1a2e;\n    --view-debug-border: #333366;\n    --view-debug-fg: #00ff00;\n    --view-debug-font: var(--font-mono);\n    --view-debug-font-size: var(--text-sm);\n    --view-padding: var(--space-4);\n  }\n  @media (prefers-contrast: more) {\n    :root {\n      --view-fg: light-dark(#000, #fff);\n      --view-nav-border: light-dark(#000, #fff);\n    }\n  }\n  @media (prefers-reduced-motion: reduce) {\n    :root {\n      --transition-fast: 0s;\n      --transition-normal: 0s;\n      --transition-slow: 0s;\n    }\n  }\n  @media (max-inline-size: 768px) {\n    :root {\n      --view-padding: var(--space-3);\n      --view-padding-x: var(--space-4);\n      --view-padding-y: var(--space-3);\n    }\n    :is(:root, html):has([data-shell=faint]) {\n      --view-sidebar-width: 0;\n    }\n    :is(:root, html):has([data-shell=minimal]) {\n      --view-nav-height: 52px;\n    }\n    body:has([data-shell=faint]) {\n      margin-inline-start: 0;\n    }\n  }\n  @media (max-inline-size: 480px) {\n    :root {\n      --view-padding: var(--space-2);\n      --view-padding-x: var(--space-3);\n    }\n  }\n  @media print {\n    :root {\n      --view-bg: white;\n      --view-fg: black;\n      --view-nav-height: 0;\n      --view-sidebar-width: 0;\n      --view-status-height: 0;\n    }\n    body:has([data-shell]) {\n      margin: 0;\n      padding: 0;\n    }\n  }\n}\n@layer shell {\n  [data-shell-content] > [hidden] {\n    display: none !important;\n  }\n  [data-shell-content][data-current-view] > :not([data-view]):not(.app-shell__loading):not([data-shell-loading]):not(slot) {\n    display: none !important;\n  }\n  [data-shell-content][data-current-view=home] > [data-view]:not([data-view=home]), [data-shell-content][data-current-view=viewer] > [data-view]:not([data-view=viewer]), [data-shell-content][data-current-view=editor] > [data-view]:not([data-view=editor]), [data-shell-content][data-current-view=workcenter] > [data-view]:not([data-view=workcenter]), [data-shell-content][data-current-view=explorer] > [data-view]:not([data-view=explorer]), [data-shell-content][data-current-view=airpad] > [data-view]:not([data-view=airpad]), [data-shell-content][data-current-view=settings] > [data-view]:not([data-view=settings]), [data-shell-content][data-current-view=history] > [data-view]:not([data-view=history]), [data-shell-content][data-current-view=print] > [data-view]:not([data-view=print]) {\n    display: none !important;\n  }\n}\n@layer components {\n  .custom-instructions-editor,\n  .custom-instructions-panel {\n    display: grid;\n    gap: var(--gap-md);\n    inline-size: stretch;\n    max-inline-size: stretch;\n    text-align: start;\n  }\n  .custom-instructions-editor .cip-select-row,\n  .custom-instructions-panel .cip-select-row {\n    display: grid;\n    gap: var(--gap-xs);\n  }\n  .custom-instructions-editor .cip-select-row .cip-select,\n  .custom-instructions-panel .cip-select-row .cip-select {\n    inline-size: stretch;\n  }\n  .custom-instructions-editor .cip-list,\n  .custom-instructions-panel .cip-list {\n    display: grid;\n    gap: var(--gap-sm);\n  }\n  .custom-instructions-editor .cip-empty,\n  .custom-instructions-panel .cip-empty {\n    padding: var(--padding-lg);\n    border-radius: var(--radius-md);\n    color: color-mix(in oklch, var(--on-surface, currentColor) var(--text-tint-muted, 60%), transparent);\n    font-size: var(--font-sm);\n    text-align: center;\n  }\n  .custom-instructions-editor .cip-item,\n  .custom-instructions-panel .cip-item {\n    padding: var(--padding-md);\n    border-radius: var(--radius-md);\n  }\n  .custom-instructions-editor .cip-item.is-active,\n  .custom-instructions-panel .cip-item.is-active {\n    border: 1px solid var(--primary-opacity-default);\n  }\n  .custom-instructions-editor .cip-item .cip-item-header,\n  .custom-instructions-panel .cip-item .cip-item-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: var(--gap-md);\n  }\n  .custom-instructions-editor .cip-item .cip-item-label,\n  .custom-instructions-panel .cip-item .cip-item-label {\n    flex: 1;\n    min-inline-size: 0;\n    overflow: hidden;\n    font-size: var(--font-sm);\n    font-weight: var(--font-weight-medium);\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .custom-instructions-editor .cip-item .cip-item-actions,\n  .custom-instructions-panel .cip-item .cip-item-actions {\n    display: flex;\n    align-items: center;\n    gap: var(--gap-xs);\n    flex-shrink: 0;\n  }\n  .custom-instructions-editor .cip-item .cip-badge,\n  .custom-instructions-panel .cip-item .cip-badge {\n    padding: var(--padding-xs) var(--padding-sm);\n    border-radius: var(--radius-full);\n    background-color: var(--primary-opacity-default);\n    color: var(--on-primary, currentColor);\n    font-size: var(--font-xs);\n    font-weight: var(--font-weight-medium);\n    letter-spacing: 0.03em;\n    text-transform: uppercase;\n  }\n  .custom-instructions-editor .cip-item .cip-item-preview,\n  .custom-instructions-panel .cip-item .cip-item-preview {\n    margin-block-start: var(--gap-sm);\n    padding: var(--padding-sm);\n    border-radius: var(--radius-sm);\n    color: color-mix(in oklch, var(--on-surface, currentColor) var(--text-tint-secondary, 74%), transparent);\n    font-size: var(--font-xs);\n    line-height: 1.5;\n    word-break: break-word;\n    white-space: pre-wrap;\n  }\n  .custom-instructions-editor .cip-item .cip-edit-form,\n  .custom-instructions-panel .cip-item .cip-edit-form {\n    display: grid;\n    gap: var(--gap-sm);\n    margin-block-start: var(--gap-md);\n  }\n  .custom-instructions-editor .cip-add-form,\n  .custom-instructions-panel .cip-add-form {\n    display: grid;\n    gap: var(--gap-sm);\n    padding: var(--padding-md);\n    border: 1px dashed var(--outline-opacity-default);\n    border-radius: var(--radius-md);\n  }\n  .custom-instructions-editor .cip-form-actions,\n  .custom-instructions-panel .cip-form-actions {\n    display: flex;\n    justify-content: flex-end;\n    gap: var(--gap-xs);\n  }\n  .custom-instructions-editor .cip-toolbar,\n  .custom-instructions-panel .cip-toolbar {\n    display: flex;\n    justify-content: center;\n    gap: var(--gap-sm);\n    padding: var(--padding-sm);\n    border-radius: var(--radius-md);\n  }\n  .custom-instructions-editor .cip-input,\n  .custom-instructions-editor .cip-textarea,\n  .custom-instructions-panel .cip-input,\n  .custom-instructions-panel .cip-textarea {\n    inline-size: stretch;\n    font-family: inherit;\n  }\n  .custom-instructions-editor .cip-textarea,\n  .custom-instructions-panel .cip-textarea {\n    min-block-size: 4rem;\n    resize: vertical;\n  }\n  .custom-instructions-editor .ci-row,\n  .custom-instructions-panel .ci-row {\n    display: flex;\n    flex-direction: row;\n    gap: var(--space-sm, 4px);\n    place-content: center;\n    place-items: center;\n    justify-content: space-between;\n    align-content: stretch;\n    align-items: start;\n  }\n  .custom-instructions-editor .ci-header,\n  .custom-instructions-panel .ci-header {\n    display: grid;\n    gap: var(--spacing-xs, 4px);\n    inline-size: fit-content;\n    flex-shrink: 1;\n    flex-grow: 1;\n    flex-basis: min-content;\n    max-inline-size: max-content;\n    min-inline-size: min-content;\n    block-size: max-content;\n  }\n  .custom-instructions-editor .ci-header h4,\n  .custom-instructions-panel .ci-header h4 {\n    margin: 0;\n    color: var(--color-on-surface);\n    font-size: var(--text-sm, 13px);\n    font-weight: var(--font-weight-semibold, 600);\n  }\n  .custom-instructions-editor .ci-header .ci-desc,\n  .custom-instructions-panel .ci-header .ci-desc {\n    margin: 0;\n    color: var(--color-on-surface-variant);\n    font-size: var(--text-xs, 11px);\n    line-height: 1.5;\n    opacity: 0.8;\n  }\n  .custom-instructions-editor .ci-active-select,\n  .custom-instructions-panel .ci-active-select {\n    flex-grow: 0;\n    flex-shrink: 1;\n    min-inline-size: min-content;\n    flex-basis: min-content;\n    inline-size: fit-content;\n    max-inline-size: stretch;\n  }\n  .custom-instructions-editor .ci-active-select label,\n  .custom-instructions-panel .ci-active-select label {\n    display: grid;\n    gap: var(--spacing-xs, 6px);\n    font-size: var(--text-xs, 12px);\n    inline-size: fit-content;\n  }\n  .custom-instructions-editor .ci-active-select label span,\n  .custom-instructions-panel .ci-active-select label span {\n    color: var(--color-on-surface-variant);\n    opacity: 0.9;\n  }\n  .custom-instructions-editor .ci-active-select select,\n  .custom-instructions-panel .ci-active-select select {\n    inline-size: calc-size(max-content, clamp(8rem, size, 100%));\n    max-inline-size: stretch;\n    min-inline-size: fit-content;\n    flex-basis: fit-content;\n    flex-grow: 1;\n    flex-shrink: 1;\n  }\n  .custom-instructions-editor .ci-list,\n  .custom-instructions-panel .ci-list {\n    display: grid;\n    gap: var(--spacing-sm, 8px);\n  }\n  .custom-instructions-editor .ci-list .ci-empty,\n  .custom-instructions-panel .ci-list .ci-empty {\n    padding: var(--spacing-md, 16px);\n    border-radius: var(--radius-md, 10px);\n    background: var(--color-surface-container);\n    color: var(--color-on-surface-variant);\n    font-size: var(--text-xs, 12px);\n    text-align: center;\n    opacity: 0.7;\n  }\n  .custom-instructions-editor .ci-item,\n  .custom-instructions-panel .ci-item {\n    padding: var(--spacing-sm, 10px);\n    border: 1px solid transparent;\n    border-radius: var(--radius-md, 10px);\n    background: var(--color-surface-container);\n  }\n  .custom-instructions-editor .ci-item.active,\n  .custom-instructions-panel .ci-item.active {\n    border-color: color-mix(in oklab, var(--color-primary) 25%, transparent);\n    background: color-mix(in oklab, var(--color-primary) 8%, var(--color-surface-container));\n  }\n  .custom-instructions-editor .ci-item .ci-item-header,\n  .custom-instructions-panel .ci-item .ci-item-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: var(--spacing-xs, 8px);\n  }\n  .custom-instructions-editor .ci-item .ci-item-label,\n  .custom-instructions-panel .ci-item .ci-item-label {\n    flex: 1;\n    min-inline-size: 0;\n    overflow: hidden;\n    color: var(--color-on-surface);\n    font-size: var(--text-xs, 12px);\n    font-weight: var(--font-weight-medium, 500);\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .custom-instructions-editor .ci-item .ci-item-actions,\n  .custom-instructions-panel .ci-item .ci-item-actions {\n    display: flex;\n    align-items: center;\n    gap: var(--spacing-xs, 4px);\n    flex-shrink: 0;\n  }\n  .custom-instructions-editor .ci-item .ci-badge,\n  .custom-instructions-panel .ci-item .ci-badge {\n    padding: 2px 8px;\n    border-radius: var(--radius-sm, 6px);\n    background: var(--color-surface-container-highest);\n    color: var(--color-on-surface-variant);\n    font-size: var(--text-xs, 10px);\n    font-weight: var(--font-weight-medium, 500);\n    letter-spacing: 0.03em;\n    text-transform: uppercase;\n  }\n  .custom-instructions-editor .ci-item .ci-badge.active,\n  .custom-instructions-panel .ci-item .ci-badge.active {\n    background: color-mix(in oklab, var(--color-primary) 20%, transparent);\n    color: var(--color-primary);\n  }\n  .custom-instructions-editor .ci-item .ci-item-preview,\n  .custom-instructions-panel .ci-item .ci-item-preview {\n    margin-block-start: var(--spacing-xs, 8px);\n    padding: var(--spacing-xs, 8px);\n    border-radius: var(--radius-sm, 8px);\n    background: var(--color-surface-container-highest);\n    color: var(--color-on-surface-variant);\n    font-size: var(--text-xs, 11px);\n    line-height: 1.5;\n    word-break: break-word;\n    white-space: pre-wrap;\n  }\n  .custom-instructions-editor .ci-item .ci-edit-form,\n  .custom-instructions-panel .ci-item .ci-edit-form {\n    display: grid;\n    gap: var(--spacing-xs, 8px);\n    margin-block-start: var(--spacing-sm, 10px);\n  }\n  .custom-instructions-editor .ci-input,\n  .custom-instructions-editor .ci-textarea,\n  .custom-instructions-panel .ci-input,\n  .custom-instructions-panel .ci-textarea {\n    --view-control-padding-y: var(--spacing-xs, 8px);\n    --view-control-padding-x: var(--spacing-sm, 10px);\n    --view-control-radius: var(--radius-sm, 8px);\n    --view-control-font-size: var(--text-xs, 12px);\n    --view-control-bg: var(--color-surface-container-highest);\n    --view-control-hover-bg: var(--color-surface-container-high);\n    --view-control-focus-bg: var(--color-surface-container-high);\n    --view-control-border-color: var(--color-outline-variant);\n    --view-control-focus-border-color: var(--color-primary);\n  }\n  .custom-instructions-editor .ci-textarea,\n  .custom-instructions-panel .ci-textarea {\n    min-block-size: 60px;\n    line-height: 1.5;\n    resize: vertical;\n  }\n  .custom-instructions-editor .ci-edit-actions,\n  .custom-instructions-editor .ci-add-actions,\n  .custom-instructions-panel .ci-edit-actions,\n  .custom-instructions-panel .ci-add-actions {\n    display: flex;\n    justify-content: flex-end;\n    gap: var(--spacing-xs, 6px);\n  }\n  .custom-instructions-editor .ci-add-form,\n  .custom-instructions-panel .ci-add-form {\n    display: grid;\n    gap: var(--spacing-xs, 8px);\n    padding: var(--spacing-sm, 12px);\n    border: 1px dashed var(--color-outline-variant);\n    border-radius: var(--radius-md, 10px);\n    background: color-mix(in oklab, var(--color-surface-container-high) 50%, transparent);\n  }\n  .custom-instructions-editor .ci-actions,\n  .custom-instructions-panel .ci-actions {\n    display: flex;\n    gap: var(--spacing-xs, 8px);\n    flex-wrap: wrap;\n    place-content: center;\n    place-items: center;\n  }\n  .custom-instructions-editor .btn.tiny, .custom-instructions-editor .btn.small,\n  .custom-instructions-panel .btn.tiny,\n  .custom-instructions-panel .btn.small {\n    border: 1px solid var(--color-outline-variant);\n    background: transparent;\n    color: var(--color-on-surface);\n    cursor: pointer;\n    transition: all var(--motion-fast);\n  }\n  .custom-instructions-editor .btn.tiny:hover, .custom-instructions-editor .btn.small:hover,\n  .custom-instructions-panel .btn.tiny:hover,\n  .custom-instructions-panel .btn.small:hover {\n    background: color-mix(in oklab, var(--color-on-surface) 5%, transparent);\n  }\n  .custom-instructions-editor .btn.tiny,\n  .custom-instructions-panel .btn.tiny {\n    padding: 4px 8px;\n    border-radius: var(--radius-sm, 6px);\n    font-size: var(--text-xs, 10px);\n  }\n  .custom-instructions-editor .btn.tiny.danger,\n  .custom-instructions-panel .btn.tiny.danger {\n    border-color: var(--color-error, #c62828);\n    color: var(--color-error, #c62828);\n  }\n  .custom-instructions-editor .btn.tiny.danger:hover,\n  .custom-instructions-panel .btn.tiny.danger:hover {\n    background: color-mix(in oklab, var(--color-error, #c62828) 15%, transparent);\n  }\n  .custom-instructions-editor .btn.small,\n  .custom-instructions-panel .btn.small {\n    padding: 6px 12px;\n    border-radius: var(--radius-sm, 8px);\n    font-size: var(--text-xs, 11px);\n  }\n  .custom-instructions-editor__select,\n  .custom-instructions-editor .form-select,\n  .custom-instructions-panel__select,\n  .custom-instructions-panel .form-select {\n    cursor: pointer;\n    appearance: auto;\n  }\n  .custom-instructions-editor__checkbox,\n  .custom-instructions-editor .form-checkbox,\n  .custom-instructions-panel__checkbox,\n  .custom-instructions-panel .form-checkbox {\n    display: flex;\n    align-items: center;\n    gap: 0.625rem;\n    cursor: pointer;\n  }\n  .custom-instructions-editor__checkbox input[type=checkbox],\n  .custom-instructions-editor .form-checkbox input[type=checkbox],\n  .custom-instructions-panel__checkbox input[type=checkbox],\n  .custom-instructions-panel .form-checkbox input[type=checkbox] {\n    inline-size: 18px;\n    block-size: 18px;\n    border-radius: var(--radius-xs, 4px);\n    accent-color: var(--color-primary);\n    cursor: pointer;\n  }\n  .custom-instructions-editor__checkbox span,\n  .custom-instructions-editor .form-checkbox span,\n  .custom-instructions-panel__checkbox span,\n  .custom-instructions-panel .form-checkbox span {\n    font-size: var(--text-sm, 0.875rem);\n  }\n  .view-loading,\n  .view-error {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    padding: 2rem;\n    text-align: center;\n  }\n  .view-loading {\n    color: var(--view-fg);\n    opacity: 0.6;\n  }\n  .view-loading__spinner {\n    inline-size: 32px;\n    block-size: 32px;\n    border: 3px solid rgba(128, 128, 128, 0.2);\n    border-block-start-color: var(--color-primary, #007acc);\n    border-radius: 50%;\n    animation: view-spin 0.8s linear infinite;\n  }\n  .view-error__icon {\n    font-size: 3rem;\n  }\n  .view-error__title {\n    margin: 0;\n    color: #d32f2f;\n    font-size: 1.25rem;\n    font-weight: 600;\n  }\n  .view-error__message {\n    margin: 0;\n    color: var(--view-fg);\n    opacity: 0.7;\n  }\n  .view-error__retry {\n    padding: 0.5rem 1rem;\n    border: none;\n    border-radius: 6px;\n    background-color: var(--color-primary, #007acc);\n    color: #ffffff;\n    font-size: 0.875rem;\n    font-weight: 500;\n    cursor: pointer;\n  }\n  .view-error__retry:hover {\n    filter: brightness(1.1);\n  }\n}\n@layer base {\n  @keyframes spin {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes fadeInUp {\n    from {\n      opacity: 0;\n      transform: translateY(12px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n}\n@layer layout {\n  .toolbar {\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    min-block-size: 4rem;\n    block-size: max-content;\n    min-inline-size: fit-content;\n    max-inline-size: none;\n    inline-size: stretch;\n    padding: var(--space-md) var(--space-xl);\n    background: var(--color-surface-container-high);\n    box-shadow: var(--elev-1);\n    overflow: hidden auto;\n    contain: strict;\n    scrollbar-width: none;\n    scrollbar-color: transparent;\n    -webkit-overflow-scrolling: touch;\n    grid-row: toolbar-row;\n  }\n  .toolbar::before {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(90deg, color-mix(in oklab, var(--color-primary) 2%, transparent) 0%, transparent 50%, color-mix(in oklab, var(--color-primary) 2%, transparent) 100%);\n    pointer-events: none;\n  }\n  .toolbar > * {\n    position: relative;\n    z-index: 1;\n  }\n  .toolbar::-webkit-scrollbar {\n    display: none;\n  }\n  .toolbar .left,\n  .toolbar .right {\n    display: flex;\n    align-items: center;\n    gap: var(--space-md);\n  }\n  .toolbar .left .toolbar-btn,\n  .toolbar .right .toolbar-btn {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--space-xs);\n    min-block-size: 36px;\n    inline-size: max-content;\n    block-size: max-content;\n    min-inline-size: calc-size(fit-content, max(size, 25px) + 0.5rem + var(--icon-size, 1rem));\n    padding: var(--space-xs) var(--space-md);\n    border-radius: var(--radius-md);\n    background: var(--color-surface);\n    color: var(--color-on-surface);\n    font-size: var(--text-sm);\n    font-weight: var(--font-weight-medium);\n    white-space: nowrap;\n    cursor: pointer;\n    transition: all var(--motion-fast);\n  }\n  .toolbar .left .toolbar-btn:hover,\n  .toolbar .right .toolbar-btn:hover {\n    background: var(--color-surface-container-high);\n    transform: translateY(-1px);\n    box-shadow: var(--elev-1);\n  }\n  .toolbar .left .toolbar-btn:active,\n  .toolbar .right .toolbar-btn:active {\n    transform: translateY(0);\n    box-shadow: none;\n  }\n  .toolbar .left .toolbar-btn:focus-visible,\n  .toolbar .right .toolbar-btn:focus-visible {\n    outline: none;\n    box-shadow: var(--focus-ring);\n  }\n  .toolbar .left .toolbar-btn.toolbar-btn-icon,\n  .toolbar .right .toolbar-btn.toolbar-btn-icon {\n    padding: var(--space-xs);\n  }\n  .toolbar .left .toolbar-btn.toolbar-btn-icon ui-icon,\n  .toolbar .right .toolbar-btn.toolbar-btn-icon ui-icon {\n    transition: color var(--motion-fast);\n  }\n  .toolbar .left .toolbar-btn.toolbar-btn-icon:hover ui-icon,\n  .toolbar .right .toolbar-btn.toolbar-btn-icon:hover ui-icon {\n    color: var(--color-primary);\n  }\n  @container (max-inline-size: 1024px) {\n    .toolbar .left .toolbar-btn.toolbar-btn-icon .toolbar-btn-text,\n    .toolbar .right .toolbar-btn.toolbar-btn-icon .toolbar-btn-text {\n      display: none;\n    }\n  }\n  .toolbar .left .toolbar-btn.primary,\n  .toolbar .right .toolbar-btn.primary {\n    background: var(--color-primary);\n    color: var(--color-on-primary);\n  }\n  .toolbar .left .toolbar-btn.primary:hover,\n  .toolbar .right .toolbar-btn.primary:hover {\n    background: color-mix(in oklab, var(--color-primary) 85%, black);\n  }\n  .toolbar .left .toolbar-btn.loading,\n  .toolbar .right .toolbar-btn.loading {\n    opacity: 0.7;\n    pointer-events: none;\n  }\n  .toolbar .left .toolbar-btn.loading::after,\n  .toolbar .right .toolbar-btn.loading::after {\n    content: \"\";\n    inline-size: 14px;\n    block-size: 14px;\n    margin-inline-start: var(--space-xs);\n    border: 2px solid transparent;\n    border-block-start: 2px solid currentColor;\n    border-radius: 50%;\n    animation: spin 1s linear infinite;\n  }\n  @container (max-inline-size: 1024px) {\n    .toolbar .left,\n    .toolbar .right {\n      gap: var(--space-sm);\n    }\n    .toolbar .left .toolbar-btn,\n    .toolbar .right .toolbar-btn {\n      min-block-size: 32px;\n      min-inline-size: calc-size(fit-content, max(size, 32px) + 0.5rem + var(--icon-size, 1rem));\n      padding: 0px 0px;\n      font-size: var(--text-xs);\n    }\n  }\n  @container (max-inline-size: 768px) {\n    .toolbar .left,\n    .toolbar .right {\n      gap: var(--space-xs);\n    }\n    .toolbar .left .toolbar-btn,\n    .toolbar .right .toolbar-btn {\n      min-block-size: 28px;\n      min-inline-size: calc-size(fit-content, max(size, 28px) + 0.5rem + var(--icon-size, 1rem));\n      padding: 2px var(--space-xs);\n    }\n    .toolbar .left .toolbar-btn-icon,\n    .toolbar .right .toolbar-btn-icon {\n      padding: 4px;\n    }\n  }\n  @container (max-inline-size: 480px) {\n    .toolbar .left,\n    .toolbar .right {\n      gap: 2px;\n    }\n  }\n  @container (max-inline-size: 1024px) {\n    .toolbar {\n      min-block-size: 3.5rem;\n      padding: var(--space-sm) var(--space-lg);\n    }\n  }\n  @container (max-inline-size: 768px) {\n    .toolbar {\n      min-block-size: 3rem;\n      padding: var(--space-xs) var(--space-md);\n    }\n  }\n  @container (max-inline-size: 480px) {\n    .toolbar {\n      min-block-size: 2.75rem;\n      padding: var(--space-xs);\n      flex-direction: column;\n    }\n  }\n  .content {\n    position: relative;\n    flex: 1;\n    block-size: stretch;\n    padding: 0;\n    overflow: auto;\n    background-color: transparent;\n    box-shadow: var(--elev-1);\n    transition: all var(--motion-normal);\n    contain: strict;\n    scrollbar-width: thin;\n    scrollbar-color: var(--color-outline-variant) transparent;\n    grid-row: content-row;\n  }\n  .content::before {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    border-radius: inherit;\n    pointer-events: none;\n  }\n  .content > * {\n    position: relative;\n    z-index: 1;\n  }\n  .content:hover, .content:focus-within {\n    box-shadow: var(--elev-2);\n  }\n  .content::-webkit-scrollbar {\n    inline-size: 6px;\n    block-size: 6px;\n  }\n  .content::-webkit-scrollbar-track {\n    background: transparent;\n  }\n  .content::-webkit-scrollbar-thumb {\n    background: var(--color-outline-variant);\n    border-radius: 3px;\n  }\n  .content::-webkit-scrollbar-thumb:hover {\n    background: var(--color-outline);\n  }\n  /* Settings: fill content area; inner body scrolls; outer content does not double-scroll. */\n  .content:has(> .view-settings) {\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    min-block-size: 0;\n  }\n  .content > .view-settings {\n    flex: 1 1 auto;\n    min-block-size: 0;\n    align-self: stretch;\n  }\n  .content,\n  .view-settings,\n  .workcenter-view {\n    animation: fadeInUp 0.4s ease-out;\n    block-size: stretch;\n  }\n  .status {\n    display: flex;\n    align-items: center;\n    gap: var(--space-sm);\n    min-block-size: 20px;\n    inline-size: stretch;\n    max-inline-size: stretch;\n    padding: var(--space-sm) var(--space-xl);\n    background: var(--color-surface-container-low);\n    color: var(--color-on-surface-variant);\n    font-size: var(--text-xs);\n    font-weight: var(--font-weight-medium);\n  }\n  .status::before {\n    content: \"ℹ️\";\n    font-size: var(--text-sm);\n    opacity: 0.7;\n  }\n  .status.success ui-icon, .status.warning ui-icon, .status.error ui-icon {\n    margin-inline-end: var(--space-xs);\n  }\n  .status.success {\n    background: color-mix(in oklab, var(--color-success) 10%, var(--color-surface-container-low));\n    color: var(--color-success);\n  }\n  .status.warning {\n    background: color-mix(in oklab, var(--color-warning) 10%, var(--color-surface-container-low));\n    color: var(--color-warning);\n  }\n  .status.error {\n    background: color-mix(in oklab, var(--color-error) 10%, var(--color-surface-container-low));\n    color: var(--color-error);\n  }\n  @container (max-inline-size: 1024px) {\n    .status {\n      padding: var(--space-xs) var(--space-lg);\n    }\n  }\n  @container (max-inline-size: 768px) {\n    .status {\n      padding: var(--space-xs) var(--space-md);\n      font-size: 11px;\n    }\n  }\n  @container (max-inline-size: 480px) {\n    .status {\n      padding: var(--space-xs);\n      gap: var(--space-xs);\n    }\n  }\n  .file-input {\n    display: none;\n  }\n  @media (max-inline-size: 768px) {\n    .status {\n      padding: var(--space-xs) var(--space-md);\n      font-size: 11px;\n    }\n  }\n}\n@layer components {\n  .markdown-editor {\n    display: grid;\n    grid-template-columns: 1fr 300px;\n    gap: var(--space-xl);\n    block-size: 100%;\n  }\n  .editor-section {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-md);\n  }\n  .preview-section {\n    background: var(--color-surface-container);\n    border-radius: var(--radius-lg);\n    padding: var(--space-lg);\n    box-shadow: var(--elev-1);\n    overflow: auto;\n  }\n  .history-view {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-lg);\n    max-block-size: none;\n    overflow: auto;\n  }\n  .history-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: var(--space-lg);\n    background: var(--color-surface-container);\n    border-radius: var(--radius-xl);\n    box-shadow: var(--elev-1);\n    margin-block-end: 0;\n  }\n  .history-header h3 {\n    margin: 0;\n    font-size: var(--text-2xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-on-surface);\n  }\n  .history-header .history-actions {\n    display: flex;\n    align-items: center;\n    gap: var(--space-sm);\n  }\n  .history-header .history-actions .btn {\n    padding: var(--space-sm) var(--space-lg);\n    background: var(--color-surface-container);\n    color: var(--color-on-surface);\n    font-size: var(--text-sm);\n    font-weight: var(--font-weight-medium);\n    cursor: pointer;\n  }\n  .history-header .history-actions .btn:hover {\n    background: var(--color-surface-container-high);\n  }\n  .history-stats {\n    background: var(--color-surface-container);\n    border-radius: var(--radius-xl);\n    box-shadow: var(--elev-1);\n    padding: var(--space-lg);\n  }\n  .stats-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n    gap: var(--space-md);\n  }\n  .stats-grid .stat-item {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: var(--space-xs);\n    padding: var(--space-md);\n    background: var(--color-surface-container-low);\n    border-radius: var(--radius-lg);\n  }\n  .stats-grid .stat-item .stat-value {\n    font-size: var(--text-2xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-on-surface);\n  }\n  .stats-grid .stat-item .stat-value.success {\n    color: var(--color-primary);\n  }\n  .stats-grid .stat-item .stat-value.error {\n    color: var(--color-error, #d32f2f);\n  }\n  .stats-grid .stat-item .stat-label {\n    font-size: var(--text-sm);\n    color: var(--color-on-surface-variant);\n    text-align: center;\n  }\n  .history-list {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-sm);\n  }\n  .history-item {\n    display: flex;\n    align-items: center;\n    gap: var(--space-md);\n    padding: var(--space-lg);\n    background: var(--color-surface-container);\n    border-radius: var(--radius-xl);\n    cursor: pointer;\n    box-shadow: var(--elev-0);\n  }\n  .history-item:hover {\n    background: var(--color-surface-container-high);\n    box-shadow: var(--elev-1);\n  }\n  .history-item .meta {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    font-size: 12px;\n    opacity: 0.9;\n  }\n  .history-item .actions {\n    display: flex;\n    justify-content: flex-end;\n    gap: 8px;\n  }\n  .tag {\n    display: inline-flex;\n    align-items: center;\n    block-size: 22px;\n    padding: 0 8px;\n    border-radius: var(--radius-full);\n    background: var(--color-surface-container-high);\n    font-weight: 700;\n  }\n  .tag.ok {\n    background: color-mix(in oklab, var(--color-success) 18%, transparent);\n  }\n  .tag.fail {\n    background: color-mix(in oklab, var(--color-error) 18%, transparent);\n  }\n  .empty {\n    padding: 12px;\n    opacity: 0.8;\n  }\n  .markdown-editor-container,\n  .markdown-viewer-container {\n    display: flex;\n    flex-direction: column;\n    block-size: 100%;\n    max-block-size: none;\n    gap: var(--space-lg);\n    box-sizing: border-box;\n  }\n  .markdown-editor-container > *,\n  .markdown-viewer-container > * {\n    box-sizing: border-box;\n  }\n  .editor-header,\n  .viewer-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: var(--space-md);\n    background: var(--color-surface-container);\n  }\n  .editor-header h3,\n  .viewer-header h3 {\n    margin: 0;\n    font-size: var(--text-xl);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-on-surface);\n  }\n  .viewer-header {\n    margin-block-end: var(--space-lg);\n  }\n  .editor-actions,\n  .viewer-actions {\n    display: flex;\n    gap: var(--space-sm);\n  }\n  .editor-layout {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: var(--space-lg);\n    flex: 1;\n    min-block-size: 0;\n  }\n  .editor-panel,\n  .preview-panel {\n    display: flex;\n    flex-direction: column;\n    background: var(--color-surface-container);\n    overflow: hidden;\n  }\n  .editor-toolbar {\n    display: flex;\n    gap: var(--space-md);\n    padding: var(--space-md);\n    background: var(--color-surface-container-high);\n  }\n  .toolbar-group {\n    display: flex;\n    gap: var(--space-xs);\n  }\n  .markdown-textarea {\n    flex: 1;\n    min-block-size: 400px;\n    padding: var(--space-lg);\n    border: none;\n    background: transparent;\n    color: var(--color-on-surface);\n    font-family: var(--font-family-mono);\n    font-size: var(--text-base);\n    line-height: var(--leading-relaxed);\n    resize: none;\n    outline: none;\n  }\n  .markdown-textarea::placeholder {\n    color: var(--color-on-surface-variant);\n    opacity: 0.7;\n  }\n  .editor-footer {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: var(--space-md);\n    background: var(--color-surface-container-low);\n  }\n  .editor-stats {\n    display: flex;\n    gap: var(--space-lg);\n    font-size: var(--text-sm);\n    color: var(--color-on-surface-variant);\n  }\n  .editor-stats span {\n    font-weight: var(--font-weight-medium);\n  }\n  .editor-mode {\n    display: flex;\n    gap: var(--space-xs);\n    border-radius: var(--radius-lg);\n    overflow: hidden;\n  }\n  .editor-mode .btn {\n    border: none;\n    border-radius: 0;\n    margin: 0;\n  }\n  .editor-mode .btn.active {\n    background: var(--color-primary);\n    color: var(--color-on-primary);\n  }\n  .preview-panel .preview-header {\n    padding: var(--space-md);\n    background: var(--color-surface-container-high);\n  }\n  .preview-panel .preview-header h4 {\n    margin: 0;\n    font-size: var(--text-lg);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-on-surface);\n  }\n  .preview-panel .preview-content {\n    flex: 1;\n    padding: var(--space-lg);\n    overflow: auto;\n    background: var(--color-surface);\n  }\n  .viewer-content {\n    flex: 1;\n    padding: var(--space-lg);\n    background: var(--color-surface-container);\n    border-radius: var(--radius-xl);\n    overflow: auto;\n  }\n  .modal-overlay {\n    position: fixed;\n    inset: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1000;\n    padding: var(--space-lg);\n    background: color-mix(in oklab, black 60%, transparent);\n    backdrop-filter: blur(8px);\n  }\n  .modal-content {\n    inline-size: 100%;\n    max-inline-size: 700px;\n    max-block-size: 85vh;\n    padding: var(--space-2xl);\n    background: var(--color-surface-container-low);\n    border-radius: var(--radius-2xl);\n    overflow: auto;\n    box-shadow: var(--elev-3);\n  }\n  .modal-header,\n  .card-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-block-end: var(--space-lg);\n    padding-block-end: var(--space-md);\n  }\n  .modal-title,\n  .card-title {\n    margin: 0;\n    font-size: var(--text-xl);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-on-surface);\n    letter-spacing: 0.01em;\n  }\n  .modal-title {\n    font-size: var(--text-2xl);\n  }\n  .modal-body {\n    margin-block-end: var(--space-xl);\n  }\n  .modal-actions,\n  .card-actions {\n    display: flex;\n    justify-content: flex-end;\n    gap: var(--space-md);\n  }\n  .card {\n    background: var(--color-surface-container);\n    border-radius: var(--radius-xl);\n    padding: var(--space-xl);\n    box-shadow: var(--elev-1);\n    transition: all var(--motion-normal);\n  }\n  .card-content {\n    flex: 1;\n  }\n  .card-actions {\n    margin-block-start: var(--space-lg);\n    padding-block-start: var(--space-md);\n    gap: var(--space-sm);\n  }\n  .form-group {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-sm);\n  }\n  .form-label {\n    margin-block-end: var(--space-xs);\n    font-size: var(--text-sm);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-on-surface);\n  }\n  .form-field {\n    position: relative;\n  }\n  .form-field.error {\n    --form-field-state-color: var(--color-error);\n  }\n  .form-field.success {\n    --form-field-state-color: var(--color-success);\n  }\n  .form-field.error .form-input,\n  .form-field.error .form-textarea,\n  .form-field.error .form-select, .form-field.success .form-input,\n  .form-field.success .form-textarea,\n  .form-field.success .form-select {\n    background: color-mix(in oklab, var(--form-field-state-color) 5%, var(--color-surface-container-high));\n  }\n  .form-field.error .form-input:focus,\n  .form-field.error .form-textarea:focus,\n  .form-field.error .form-select:focus, .form-field.success .form-input:focus,\n  .form-field.success .form-textarea:focus,\n  .form-field.success .form-select:focus {\n    box-shadow: 0 0 0 3px color-mix(in oklab, var(--form-field-state-color) 35%, transparent);\n  }\n  .form-input,\n  .form-textarea,\n  .form-select,\n  .ci-input,\n  .ci-textarea,\n  .ci-select,\n  .cip-input,\n  .cip-textarea,\n  .cip-select,\n  select {\n    --_view-control-padding-y: var(--view-control-padding-y, var(--space-md));\n    --_view-control-padding-x: var(--view-control-padding-x, var(--space-lg));\n    --_view-control-radius: var(--view-control-radius, var(--radius-lg));\n    --_view-control-font-size: var(--view-control-font-size, var(--text-base));\n    --_view-control-bg: var(--view-control-bg, var(--color-surface-container-high));\n    --_view-control-hover-bg: var(--view-control-hover-bg, var(--color-surface-container-highest));\n    --_view-control-focus-bg: var(--view-control-focus-bg, var(--color-surface-container));\n    --_view-control-border-color: var(--view-control-border-color, transparent);\n    --_view-control-focus-border-color: var(--view-control-focus-border-color, transparent);\n    inline-size: 100%;\n    padding: var(--_view-control-padding-y) var(--_view-control-padding-x);\n    border: 1px solid var(--_view-control-border-color);\n    border-radius: var(--_view-control-radius);\n    outline: none;\n    background: var(--_view-control-bg);\n    color: var(--color-on-surface);\n    font-family: var(--font-family);\n    font-size: var(--_view-control-font-size);\n    font-weight: var(--font-weight-medium);\n    box-shadow: var(--elev-0);\n    accent-color: var(--color-primary);\n  }\n  .form-input:hover,\n  .form-textarea:hover,\n  .form-select:hover,\n  .ci-input:hover,\n  .ci-textarea:hover,\n  .ci-select:hover,\n  .cip-input:hover,\n  .cip-textarea:hover,\n  .cip-select:hover,\n  select:hover {\n    background: var(--_view-control-hover-bg);\n    box-shadow: var(--elev-1);\n  }\n  .form-input:focus,\n  .form-textarea:focus,\n  .form-select:focus,\n  .ci-input:focus,\n  .ci-textarea:focus,\n  .ci-select:focus,\n  .cip-input:focus,\n  .cip-textarea:focus,\n  .cip-select:focus,\n  select:focus {\n    border-color: var(--_view-control-focus-border-color);\n    box-shadow: var(--focus-ring);\n    background: var(--_view-control-focus-bg);\n  }\n  .form-input::placeholder,\n  .form-textarea::placeholder,\n  .form-select::placeholder,\n  .ci-input::placeholder,\n  .ci-textarea::placeholder,\n  .ci-select::placeholder,\n  .cip-input::placeholder,\n  .cip-textarea::placeholder,\n  .cip-select::placeholder,\n  select::placeholder {\n    color: var(--color-on-surface-variant);\n    opacity: 0.7;\n  }\n  .form-input:disabled,\n  .form-textarea:disabled,\n  .form-select:disabled,\n  .ci-input:disabled,\n  .ci-textarea:disabled,\n  .ci-select:disabled,\n  .cip-input:disabled,\n  .cip-textarea:disabled,\n  .cip-select:disabled,\n  select:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n    background: var(--color-surface-container-low);\n  }\n  button:not(.toolbar-btn),\n  .btn {\n    position: relative;\n    display: inline-flex;\n    gap: var(--space-xs);\n    border: 1px solid transparent;\n    border-radius: var(--radius-lg);\n    background: var(--color-surface-container-high);\n    color: var(--color-on-surface);\n    font-family: var(--font-family);\n    font-size: var(--text-sm);\n    font-weight: var(--font-weight-medium);\n    line-height: 1.2;\n    cursor: pointer;\n    transition: all var(--motion-fast);\n    box-shadow: var(--elev-0);\n    inline-size: max-content;\n    flex-basis: max-content;\n    min-inline-size: max-content;\n    flex-grow: 1;\n    flex-shrink: 0;\n    max-inline-size: none;\n    align-items: safe center;\n    align-content: safe center;\n    justify-content: safe center;\n    justify-items: safe center;\n  }\n  button:not(.toolbar-btn):hover,\n  .btn:hover {\n    background: var(--color-surface-container-highest);\n    box-shadow: var(--elev-1);\n  }\n  button:not(.toolbar-btn):focus-visible,\n  .btn:focus-visible {\n    outline: none;\n    box-shadow: var(--focus-ring);\n  }\n  button:not(.toolbar-btn):disabled,\n  .btn:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  .form-textarea {\n    min-block-size: 120px;\n    resize: vertical;\n    line-height: var(--leading-relaxed);\n    font-family: var(--font-family-mono);\n  }\n  .form-textarea.monospace {\n    font-family: var(--font-family-mono);\n    font-size: var(--text-sm);\n  }\n  .form-select,\n  .ci-select,\n  .cip-select,\n  select {\n    place-content: center;\n    place-items: center;\n    text-align: start;\n    cursor: pointer;\n    appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    appearance: base-select;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    text-wrap: nowrap;\n    word-break: keep-all;\n    overflow: hidden;\n    display: inline-grid;\n    padding-inline: var(--space-sm);\n    padding-inline-start: var(--space-md);\n    grid-template-columns: [content] minmax(max-content, 1fr) [icon] minmax(1.5rem, max-content);\n    grid-template-rows: minmax(0px, max-content);\n    block-size: max-content;\n    justify-items: start;\n    inline-size: max-content;\n    min-inline-size: fit-content;\n  }\n  .form-select::-ms-expand,\n  .ci-select::-ms-expand,\n  .cip-select::-ms-expand,\n  select::-ms-expand {\n    display: none;\n  }\n  .form-select option,\n  .ci-select option,\n  .cip-select option,\n  select option {\n    background: var(--color-surface);\n    color: var(--color-on-surface);\n  }\n  .form-select::picker-icon,\n  .ci-select::picker-icon,\n  .cip-select::picker-icon,\n  select::picker-icon {\n    grid-column: icon;\n    background-color: var(--color-on-surface);\n    mask-image: url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e\");\n    mask-position: center center;\n    mask-repeat: no-repeat;\n    mask-size: 1.5em 1.5em;\n    content: \"\";\n    display: inline-flex;\n    place-content: center;\n    place-items: center;\n    inline-size: 1.5em;\n    block-size: 1.5em;\n    box-sizing: border-box;\n    aspect-ratio: 1/1;\n    text-align: center;\n    overflow: hidden;\n  }\n  .form-checkbox,\n  .form-radio {\n    display: flex;\n    align-items: center;\n    gap: 0.625rem;\n    font-size: var(--text-base);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-on-surface);\n    cursor: pointer;\n  }\n  .form-checkbox span,\n  .form-radio span {\n    font-size: var(--text-sm, 0.875rem);\n  }\n  .form-checkbox input[type=checkbox],\n  .form-checkbox input[type=radio],\n  .form-radio input[type=checkbox],\n  .form-radio input[type=radio] {\n    position: relative;\n    inline-size: 20px;\n    block-size: 20px;\n    min-block-size: unset;\n    aspect-ratio: 1;\n    border: none;\n    background: var(--color-surface-container-highest);\n    cursor: pointer;\n    transition: all var(--motion-fast);\n    appearance: none;\n    accent-color: var(--color-primary);\n    box-shadow: var(--elev-0);\n  }\n  .form-checkbox input[type=checkbox]:focus,\n  .form-checkbox input[type=radio]:focus,\n  .form-radio input[type=checkbox]:focus,\n  .form-radio input[type=radio]:focus {\n    outline: none;\n    box-shadow: var(--focus-ring);\n  }\n  .form-checkbox input[type=checkbox]:disabled,\n  .form-checkbox input[type=radio]:disabled,\n  .form-radio input[type=checkbox]:disabled,\n  .form-radio input[type=radio]:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  .form-checkbox input[type=checkbox] {\n    border-radius: var(--radius-sm);\n  }\n  .form-checkbox input[type=checkbox]:checked {\n    background: var(--color-primary);\n    box-shadow: var(--elev-1);\n  }\n  .form-checkbox input[type=checkbox]:checked::after {\n    content: \"✓\";\n    position: absolute;\n    inset-block-start: 50%;\n    inset-inline-start: 50%;\n    transform: translate(-50%, -50%);\n    color: var(--color-on-primary);\n    font-size: 12px;\n    font-weight: bold;\n  }\n  .form-radio input[type=radio] {\n    border-radius: 50%;\n  }\n  .form-radio input[type=radio]:checked {\n    background: var(--color-primary);\n    box-shadow: var(--elev-1);\n  }\n  .form-radio input[type=radio]:checked::after {\n    content: \"\";\n    position: absolute;\n    inset-block-start: 50%;\n    inset-inline-start: 50%;\n    inline-size: 8px;\n    block-size: 8px;\n    border-radius: 50%;\n    background: var(--color-on-primary);\n    transform: translate(-50%, -50%);\n  }\n  .form-error,\n  .form-success,\n  .form-hint {\n    margin-block-start: var(--space-xs);\n    font-size: var(--text-sm);\n    font-weight: var(--font-weight-medium);\n  }\n  .form-error,\n  .form-success {\n    display: flex;\n    align-items: center;\n    gap: var(--space-xs);\n  }\n  .form-error {\n    color: var(--color-error);\n  }\n  .form-error::before {\n    content: \"⚠\";\n    font-size: var(--text-base);\n  }\n  .form-success {\n    color: var(--color-success);\n  }\n  .form-success::before {\n    content: \"✓\";\n    font-size: var(--text-base);\n  }\n  .form-hint {\n    color: var(--color-on-surface-variant);\n    opacity: 0.8;\n  }\n  @media (max-inline-size: 1024px) {\n    .editor-layout {\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr 1fr;\n    }\n    .editor-toolbar {\n      flex-wrap: wrap;\n    }\n    .toolbar-group {\n      flex: 1;\n      justify-content: center;\n      min-inline-size: 120px;\n    }\n    .markdown-editor {\n      grid-template-columns: 1fr;\n      grid-template-rows: 1fr auto;\n    }\n    .settings-group {\n      grid-template-columns: 1fr;\n    }\n    .editor-panel,\n    .preview-panel {\n      max-block-size: 50vh;\n    }\n  }\n  @media (max-inline-size: 768px) {\n    .editor-footer {\n      flex-direction: column;\n      align-items: stretch;\n      gap: var(--space-md);\n    }\n    .editor-stats {\n      justify-content: center;\n      flex-wrap: wrap;\n    }\n    .editor-mode {\n      justify-content: center;\n    }\n    .toolbar-group {\n      flex-direction: column;\n      align-items: stretch;\n    }\n    .toolbar-group .btn {\n      justify-content: center;\n    }\n    .modal-content {\n      padding: var(--space-lg);\n      margin: var(--space-sm);\n    }\n    .editor-header,\n    .viewer-header {\n      flex-direction: column;\n      align-items: flex-start;\n      gap: var(--space-md);\n    }\n    .editor-actions,\n    .viewer-actions {\n      inline-size: 100%;\n      justify-content: stretch;\n    }\n    .form-input,\n    .form-textarea,\n    .form-select {\n      padding: var(--space-md);\n      font-size: var(--text-sm);\n    }\n    .form-textarea {\n      min-block-size: 100px;\n    }\n    .form-checkbox,\n    .form-radio {\n      font-size: var(--text-sm);\n    }\n  }\n  @media (max-inline-size: 480px) {\n    .editor-toolbar {\n      padding: var(--space-sm);\n    }\n    .markdown-textarea {\n      padding: var(--space-md);\n      font-size: var(--text-sm);\n    }\n    .viewer-content {\n      padding: var(--space-md);\n    }\n    .history-item {\n      padding: var(--space-md);\n      flex-direction: column;\n      align-items: flex-start;\n      gap: var(--space-sm);\n    }\n    .card {\n      padding: var(--space-lg);\n    }\n    .modal-content {\n      padding: var(--space-md);\n      margin: var(--space-xs);\n    }\n    .markdown-editor-container,\n    .markdown-viewer-container {\n      padding: var(--space-sm);\n      gap: var(--space-md);\n    }\n  }\n}\n@layer utilities {\n  .grid {\n    display: grid;\n    gap: var(--space-lg);\n  }\n  .grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .grid-auto-fit {\n    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));\n  }\n  .grid-auto-fill {\n    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  }\n  .flex {\n    display: flex;\n  }\n  .flex-col {\n    flex-direction: column;\n  }\n  .flex-row {\n    flex-direction: row;\n  }\n  .flex-wrap {\n    flex-wrap: wrap;\n  }\n  .items-center {\n    align-items: center;\n  }\n  .items-start {\n    align-items: flex-start;\n  }\n  .items-end {\n    align-items: flex-end;\n  }\n  .justify-center {\n    justify-content: center;\n  }\n  .justify-between {\n    justify-content: space-between;\n  }\n  .justify-end {\n    justify-content: flex-end;\n  }\n  .gap-sm {\n    gap: var(--space-sm);\n  }\n  .gap-md {\n    gap: var(--space-md);\n  }\n  .gap-lg {\n    gap: var(--space-lg);\n  }\n  .gap-xl {\n    gap: var(--space-xl);\n  }\n  .p-sm {\n    padding: var(--space-sm);\n  }\n  .p-md {\n    padding: var(--space-md);\n  }\n  .p-lg {\n    padding: var(--space-lg);\n  }\n  .p-xl {\n    padding: var(--space-xl);\n  }\n  .m-sm {\n    margin: var(--space-sm);\n  }\n  .m-md {\n    margin: var(--space-md);\n  }\n  .m-lg {\n    margin: var(--space-lg);\n  }\n  .m-xl {\n    margin: var(--space-xl);\n  }\n  .mb-sm {\n    margin-block-end: var(--space-sm);\n  }\n  .mb-md {\n    margin-block-end: var(--space-md);\n  }\n  .mb-lg {\n    margin-block-end: var(--space-lg);\n  }\n  .mb-xl {\n    margin-block-end: var(--space-xl);\n  }\n  .mt-sm {\n    margin-block-start: var(--space-sm);\n  }\n  .mt-md {\n    margin-block-start: var(--space-md);\n  }\n  .mt-lg {\n    margin-block-start: var(--space-lg);\n  }\n  .mt-xl {\n    margin-block-start: var(--space-xl);\n  }\n  @media (max-inline-size: 1024px) {\n    .grid-cols-4,\n    .grid-cols-3 {\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n  @media (max-inline-size: 768px) {\n    .grid-cols-2,\n    .grid-cols-3,\n    .grid-cols-4 {\n      grid-template-columns: 1fr;\n    }\n  }\n}\n@layer overrides {\n  @media (max-inline-size: 768px) {\n    .toolbar {\n      padding: var(--space-sm);\n      block-size: auto;\n      min-block-size: 3rem;\n    }\n    .toolbar .left,\n    .toolbar .right {\n      flex-wrap: nowrap;\n      gap: var(--space-xs);\n      min-inline-size: 0;\n      justify-content: flex-start;\n    }\n    .toolbar .left .btn,\n    .toolbar .right .btn {\n      inline-size: max-content;\n      min-inline-size: calc-size(fit-content, max(size, 2.5rem) + 0.5rem + var(--icon-size, 1rem));\n      min-block-size: 2.5rem;\n      flex-shrink: 0;\n      font-size: var(--text-sm);\n      padding: var(--space-xs) var(--space-sm);\n    }\n  }\n  @media (max-inline-size: 768px) and (max-inline-size: 480px) {\n    .toolbar {\n      padding: var(--space-xs);\n    }\n    .toolbar .left,\n    .toolbar .right {\n      align-items: center;\n    }\n    .toolbar .left .btn,\n    .toolbar .right .btn {\n      font-size: var(--text-xs);\n      padding: var(--space-xs);\n    }\n    .toolbar .left .toolbar-btn-icon,\n    .toolbar .right .toolbar-btn-icon {\n      min-inline-size: calc-size(fit-content, max(size, 2.5rem) + 0.5rem + var(--icon-size, 1rem));\n      padding: var(--space-xs);\n    }\n    .toolbar .left .btn:not([title*=Rich])::after,\n    .toolbar .right .btn:not([title*=Voice])::after {\n      content: attr(title);\n      position: absolute;\n      inset-block-start: -2.5rem;\n      inset-inline-start: 50%;\n      transform: translateX(-50%);\n      background: var(--color-surface-container-high);\n      color: var(--color-on-surface);\n      padding: var(--space-xs);\n      border-radius: var(--radius-sm);\n      font-size: var(--text-xs);\n      white-space: nowrap;\n      opacity: 0;\n      pointer-events: none;\n      transition: opacity var(--motion-fast);\n      z-index: 1000;\n      max-inline-size: 150px;\n      word-wrap: break-word;\n      text-align: center;\n    }\n    .toolbar .left .btn:hover::after,\n    .toolbar .right .btn:hover::after,\n    .toolbar .left .btn:focus::after,\n    .toolbar .right .btn:focus::after {\n      opacity: 1;\n    }\n  }\n}\n@layer print {\n  @media print {\n    /* Print only the document content; hide desktop/background/overlay infrastructure. */\n    [data-app-layer=canvas],\n    [data-app-layer=orient],\n    [data-app-layer=overlay],\n    cw-app-dock,\n    cw-status-bar,\n    [data-window-dock],\n    [data-window-status] {\n      display: none !important;\n      visibility: hidden !important;\n      opacity: 0 !important;\n      pointer-events: none !important;\n    }\n    [data-app-layer=shell] {\n      background: transparent !important;\n      background-color: transparent !important;\n      overflow: visible !important;\n    }\n    :is(html, body):has([data-shell=base]),\n    :is(html, body):has([data-shell=immersive]),\n    :is(html, body):has([data-shell=minimal]) {\n      background: #fff !important;\n      color: #000 !important;\n      overflow: visible !important;\n    }\n    /* Keep markdown web-component content printable across all shells. */\n    [data-cw-view-host=true][data-view-id=viewer],\n    .cw-view-viewer-shell,\n    .cw-view-viewer__prose,\n    [data-cw-viewer-prose],\n    .view-viewer,\n    .view-viewer__content,\n    [data-viewer-content],\n    [data-render-target],\n    md-view,\n    markdown-viewer,\n    .markdown-body,\n    .markdown-viewer-content,\n    .result-content {\n      display: block !important;\n      visibility: visible !important;\n      opacity: 1 !important;\n      overflow: visible !important;\n      position: static !important;\n      inset: auto !important;\n      min-block-size: max(100%, 100cqb) !important;\n      inline-size: 100% !important;\n      block-size: max-content !important;\n      max-inline-size: none !important;\n      max-block-size: none !important;\n      contain: none !important;\n      container-type: normal !important;\n      content-visibility: visible !important;\n      break-before: auto !important;\n      break-after: auto !important;\n      contain: none !important;\n    }\n    .view-viewer__toolbar,\n    [data-viewer-toolbar] {\n      display: none !important;\n    }\n    /* Avoid file-manager frame clipping markdown previews/reads in print mode. */\n    ui-file-manager,\n    .view-explorer,\n    .view-explorer__content {\n      overflow: visible !important;\n      contain: none !important;\n      block-size: auto !important;\n      max-block-size: none !important;\n    }\n  }\n}\n@layer layer.view.viewer {\n  /*\n   * Markdown viewer toolbar: [left actions] · [flexible gap] · [right actions].\n   * Center column shrinks first (flex: 1 1 0); when intrinsic width exceeds the shell, the bar scrolls on the inline axis.\n   * Icon colors: --view-picon-fill* (inherited from this row).\n   */\n  .view-viewer__toolbar {\n    --view-toolbar-icon-size: 1.125rem;\n    --view-toolbar-ph-icon-size: var(--view-toolbar-icon-size);\n    --view-picon-fill: var(--color-on-surface, var(--view-fg));\n    --view-picon-fill-hover: var(--color-primary, var(--color-on-surface, var(--view-fg)));\n    --view-picon-fill-active: color-mix(\n        in oklab,\n        var(--color-on-surface, var(--view-fg)) 80%,\n        var(--color-primary, #007acc) 20%\n    );\n    --view-picon-fill-disabled: color-mix(in oklab, var(--color-on-surface, var(--view-fg)) 40%, transparent);\n    position: relative;\n    z-index: 2;\n    box-sizing: border-box;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: center;\n    justify-content: flex-start;\n    gap: var(--view-toolbar-gap, 0.5rem);\n    align-self: stretch;\n    inline-size: 100%;\n    max-inline-size: 100%;\n    min-inline-size: 0;\n    min-block-size: 2.5rem;\n    padding-block: var(--view-toolbar-pad-block);\n    padding-inline: var(--view-toolbar-pad-inline);\n    flex-shrink: 0;\n    overflow-inline: auto;\n    overflow-block: hidden;\n    overscroll-behavior-inline: contain;\n    scrollbar-width: thin;\n    scrollbar-color: color-mix(in oklab, var(--view-fg) 18%, transparent) transparent;\n    -webkit-overflow-scrolling: touch;\n    touch-action: pan-x;\n    container-type: inline-size;\n    isolation: isolate;\n    /* Prefer semantic toolbar canvas token so light/dark stays aligned with `--view-bg` (see viewer-view-tokens). */\n    background: var(--view-toolbar-bg, var(--color-surface-container-high, var(--view-toolbar-surface)));\n    border-block-end: none;\n    box-shadow: var(--view-toolbar-shadow);\n  }\n  .view-viewer__toolbar button.view-viewer__btn > ui-icon.view-viewer__toolbar-icon,\n  .view-viewer__toolbar .view-viewer__btn > ui-icon.view-viewer__toolbar-icon {\n    order: -1;\n    flex: 0 0 auto;\n    box-sizing: border-box;\n    --icon-size: var(--view-toolbar-ph-icon-size, 1.125rem);\n    --icon-padding: 0;\n    --icon-color: var(--view-picon-fill);\n    pointer-events: none;\n    transition: color var(--motion-fast, 0.12s ease);\n    inline-size: var(--view-toolbar-icon-size);\n    block-size: var(--view-toolbar-icon-size);\n    aspect-ratio: 1;\n  }\n  .view-viewer__toolbar > * {\n    position: relative;\n    z-index: 1;\n  }\n  .view-viewer__toolbar::-webkit-scrollbar {\n    block-size: 4px;\n  }\n  .view-viewer__toolbar::-webkit-scrollbar-thumb {\n    border-radius: 4px;\n    background: color-mix(in oklab, var(--view-fg) 22%, transparent);\n  }\n  @container (max-inline-size: 520px) {\n    .view-viewer__toolbar {\n      --view-toolbar-pad-inline: 0.4rem;\n      min-block-size: 2.375rem;\n    }\n  }\n  /* Absorbs space between left and right; must shrink so the row can scroll when needed */\n  .view-viewer__toolbar-center {\n    flex: 1 1 0%;\n    min-inline-size: 0;\n    min-block-size: 0;\n    align-self: stretch;\n    pointer-events: none;\n  }\n  .view-viewer__toolbar-left,\n  .view-viewer__toolbar-right {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: center;\n    gap: var(--view-toolbar-gap, 0.5rem);\n    flex: 0 0 auto;\n    box-sizing: border-box;\n  }\n  .view-viewer__toolbar-group {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    align-items: center;\n    gap: var(--view-toolbar-group-gap, 0.125rem);\n    flex: 0 0 auto;\n  }\n  .view-viewer__toolbar-left .view-viewer__toolbar-group + .view-viewer__toolbar-group {\n    padding-inline-start: calc(var(--view-toolbar-gap, 0.5rem) + 0.15rem);\n    margin-inline-start: 0;\n  }\n  .view-viewer__toolbar-right .view-viewer__toolbar-group + .view-viewer__toolbar-group {\n    padding-inline-start: calc(var(--view-toolbar-gap, 0.5rem) + 0.15rem);\n    margin-inline-start: 0;\n  }\n  .view-viewer__toolbar-left {\n    justify-content: flex-start;\n  }\n  .view-viewer__toolbar-right {\n    justify-content: flex-end;\n    padding-inline-start: calc(var(--view-toolbar-gap, 0.5rem) + 0.25rem);\n    margin-inline-start: 0;\n  }\n  button.view-viewer__btn {\n    display: inline-flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 0.375rem;\n    min-block-size: 2.125rem;\n    padding-block: var(--view-toolbar-btn-pad-block, 0.4375rem);\n    padding-inline: var(--view-toolbar-btn-pad-inline, 0.6875rem);\n    border: none;\n    border-radius: var(--view-toolbar-btn-radius, 0.625rem);\n    background: transparent;\n    color: var(--color-on-surface, var(--view-fg));\n    font-family: inherit;\n    font-size: var(--text-xs, 0.75rem);\n    font-weight: var(--font-weight-medium, 500);\n    line-height: 1.2;\n    letter-spacing: 0.01em;\n    white-space: nowrap;\n    cursor: pointer;\n    appearance: none;\n    -webkit-tap-highlight-color: transparent;\n    box-sizing: border-box;\n    flex: 0 0 auto;\n    contain: none;\n    container-type: normal;\n    transition: background-color var(--motion-fast, 0.14s ease), color var(--motion-fast, 0.14s ease), box-shadow var(--motion-fast, 0.14s ease);\n  }\n  button.view-viewer__btn span {\n    font-size: 0.6875rem;\n    font-weight: 500;\n    line-height: 1.2;\n    letter-spacing: 0.04em;\n    text-transform: uppercase;\n    opacity: 0.78;\n    flex-shrink: 0;\n  }\n  button.view-viewer__btn:hover {\n    background: color-mix(in oklab, var(--color-on-surface, var(--view-fg)) 9%, transparent);\n  }\n  button.view-viewer__btn:hover span {\n    opacity: 0.95;\n  }\n  button.view-viewer__btn:hover > ui-icon.view-viewer__toolbar-icon {\n    --icon-color: var(--view-picon-fill-hover);\n  }\n  button.view-viewer__btn:active {\n    background: color-mix(in oklab, var(--color-on-surface, var(--view-fg)) 13%, transparent);\n  }\n  button.view-viewer__btn:active > ui-icon.view-viewer__toolbar-icon {\n    --icon-color: var(--view-picon-fill-active);\n  }\n  button.view-viewer__btn:disabled > ui-icon.view-viewer__toolbar-icon {\n    --icon-color: var(--view-picon-fill-disabled);\n    opacity: 0.55;\n  }\n  button.view-viewer__btn:focus-visible {\n    outline: none;\n    box-shadow: var(--focus-ring, 0 0 0 2px color-mix(in oklab, var(--color-primary, #007acc) 45%, transparent));\n  }\n  button.view-viewer__btn[aria-pressed=true] {\n    background: color-mix(in oklab, var(--color-primary, #007acc) 16%, transparent);\n  }\n  @container (max-inline-size: 720px) {\n    button.view-viewer__btn {\n      gap: 0.25rem;\n      padding-block: 0.375rem;\n      padding-inline: 0.5625rem;\n      min-block-size: 2.25rem;\n    }\n  }\n  @container (max-inline-size: 560px) {\n    button.view-viewer__btn {\n      position: relative;\n      gap: 0;\n      min-block-size: 2.5rem;\n      min-inline-size: 2.5rem;\n      padding-block: 0.45rem;\n      padding-inline: 0.45rem;\n      border-radius: var(--view-toolbar-btn-radius, 0.75rem);\n    }\n    button.view-viewer__btn span {\n      position: absolute;\n      inline-size: 1px;\n      block-size: 1px;\n      padding: 0;\n      margin: -1px;\n      overflow: hidden;\n      clip: rect(0, 0, 0, 0);\n      white-space: nowrap;\n      border: 0;\n    }\n  }\n  .view-viewer__md-loading {\n    display: flex;\n    align-items: center;\n    gap: 0.75rem;\n    padding: 1.25rem 1rem;\n    color: var(--view-fg);\n    opacity: 0.9;\n    font-size: 0.9rem;\n  }\n  .view-viewer__md-loading::before {\n    content: \"\";\n    inline-size: 1.25rem;\n    block-size: 1.25rem;\n    border: 2px solid var(--view-border);\n    border-block-start-color: var(--view-link-color);\n    border-radius: 50%;\n    animation: view-spin 0.75s linear infinite;\n    flex-shrink: 0;\n  }\n  .view-viewer__content {\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    inline-size: 100%;\n    min-inline-size: 0;\n    grid-row: content-row;\n    padding: 0px;\n  }\n  .view-viewer__content.dragover {\n    background-color: rgba(0, 122, 204, 0.05);\n    outline: 2px dashed rgba(0, 122, 204, 0.3);\n    outline-offset: -8px;\n  }\n  /* Standalone / non–slot-mode: __content is the scrollport */\n  .cw-view-viewer-shell:not(:has(.cw-view-viewer__slot-default)) .view-viewer__content {\n    flex: 1 1 auto;\n    min-block-size: 0;\n    overflow-block: auto;\n    overflow-inline: hidden;\n    overscroll-behavior: contain;\n  }\n  .cw-view-viewer-shell.dragover {\n    background-color: rgba(0, 122, 204, 0.05);\n    outline: 2px dashed rgba(0, 122, 204, 0.3);\n    outline-offset: -8px;\n  }\n  /* Shell / critical CSS may set user-select:none on broad ancestors — keep prose selectable and context menus usable. */\n  .cw-view-viewer-shell [data-render-target],\n  .cw-view-viewer-shell [data-render-target] * {\n    pointer-events: auto;\n    user-select: text;\n    -webkit-user-select: text;\n    -webkit-touch-callout: default;\n  }\n  /* Slotted prose lives in cw-view-viewer light DOM (not under .cw-view-viewer-shell in the tree). */\n  cw-view-viewer [data-render-target],\n  cw-view-viewer [data-render-target] * {\n    pointer-events: auto;\n    user-select: text;\n    -webkit-user-select: text;\n    -webkit-touch-callout: default;\n  }\n  /*\n   * Same as viewer.components: prose fills .view-viewer__content when only .cw-view-viewer-shell wraps the UI.\n   */\n  .cw-view-viewer-shell .view-viewer__content > [data-render-target],\n  cw-view-viewer [data-render-target] {\n    display: flex;\n    flex-direction: column;\n    flex: 1 1 auto;\n    align-self: stretch;\n    box-sizing: border-box;\n    min-block-size: 0;\n    min-inline-size: 0;\n    block-size: auto;\n    max-block-size: none;\n    overflow-block: auto;\n    overflow-inline: hidden;\n    overscroll-behavior: contain;\n  }\n  /* Rendered body: outline (optional) + markdown root */\n  .cw-view-viewer-shell [data-render-target] .view-viewer__md-root,\n  cw-view-viewer [data-render-target] .view-viewer__md-root {\n    flex: 1 1 auto;\n    min-block-size: 0;\n    min-inline-size: 0;\n  }\n  .view-viewer__outline {\n    flex: 0 0 auto;\n    position: sticky;\n    inset-block-start: 0;\n    z-index: 1;\n    max-block-size: min(33vh, 14rem);\n    overflow: auto;\n    overscroll-behavior: contain;\n    margin: 0;\n    padding: 0.5rem 0.75rem 0.65rem;\n    border-block-end: 1px solid var(--view-border);\n    background: color-mix(in oklab, var(--view-bg) 92%, var(--view-toolbar-surface) 8%);\n    font-size: var(--text-xs, 0.75rem);\n    line-height: 1.35;\n  }\n  .view-viewer__outline[hidden] {\n    display: none !important;\n  }\n  .view-viewer__outline-empty {\n    opacity: 0.75;\n    font-style: italic;\n    padding: 0.15rem 0;\n  }\n  .view-viewer__outline-list {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    gap: 0.2rem;\n  }\n  .view-viewer__outline-item {\n    margin: 0;\n    padding: 0;\n  }\n  .view-viewer__outline-item a {\n    display: block;\n    color: var(--view-link-color);\n    text-decoration: none;\n    border-radius: var(--radius-sm, 4px);\n    padding: 0.2rem 0.35rem;\n    margin-inline: -0.35rem;\n  }\n  .view-viewer__outline-item a:hover {\n    color: var(--view-link-hover);\n    background: color-mix(in oklab, var(--view-btn-hover-bg) 80%, transparent);\n  }\n  .view-viewer__outline--h1 {\n    font-weight: 650;\n  }\n  .view-viewer__outline--h2 {\n    padding-inline-start: 0.35rem;\n  }\n  .view-viewer__outline--h3 {\n    padding-inline-start: 0.7rem;\n    opacity: 0.95;\n  }\n  .view-viewer__outline--h4 {\n    padding-inline-start: 1.05rem;\n    opacity: 0.9;\n  }\n  .view-viewer__outline--h5,\n  .view-viewer__outline--h6 {\n    padding-inline-start: 1.35rem;\n    opacity: 0.85;\n  }\n}\n@layer layer.view.viewer {\n  :root:has([data-view=viewer]),\n  html:has([data-view=viewer]),\n  cw-view-viewer[data-view=viewer],\n  cw-view-viewer[data-view-id=viewer] {\n    /* layout */\n    --view-layout: \"flex\";\n    --view-content-max-width: 800px;\n    --view-padding: var(--space-6);\n    /* typography */\n    --view-font-size-base: 1rem;\n    --view-line-height-base: 1.6;\n    --view-prose-font-size: var(--text-base);\n    --view-prose-line-height: 1.75;\n    --view-prose-heading-margin: var(--space-6);\n    color-scheme: light dark;\n    /*\n     * WHY: Transparent pill chrome belongs on `.view-viewer__toolbar` only. Setting `--color-surface`\n     * on `:root` leaked into minimal shell tokens (`light-dark(var(--color-surface), …)`), breaking light theme.\n     */\n    --view-bg: light-dark(#f4f6fa, #0b0d12);\n    --view-fg: var(--color-on-surface, light-dark(#1a1a1a, #e8eaef));\n    --view-border: var(\n        --color-border,\n        light-dark(rgba(0, 0, 0, 0.12), rgba(255, 255, 255, 0.07))\n    );\n    --view-toolbar-bg: light-dark(rgba(0, 0, 0, 0.03), rgba(255, 255, 255, 0.05));\n    --view-btn-hover-bg: light-dark(rgba(0, 0, 0, 0.07), rgba(255, 255, 255, 0.08));\n    --view-code-bg: light-dark(#f0f2f5, #161a22);\n    --view-code-fg: light-dark(var(--color-text, #1a1a1a), #d8dce6);\n    --view-code-border: var(\n        --color-border,\n        light-dark(rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.08))\n    );\n    --view-blockquote-border: var(\n        --color-primary,\n        light-dark(#2563eb, #5b8cff)\n    );\n    --view-blockquote-bg: light-dark(rgba(0, 0, 0, 0.03), rgba(255, 255, 255, 0.04));\n    --view-link-color: var(--color-link, light-dark(#06c, #7eb8ff));\n    --view-link-hover: var(--color-link-hover, light-dark(#005fa3, #a8d0ff));\n    /* fl-ui / toolbar controls — neutral text on canvas; pill surfaces scoped under `.view-viewer__toolbar` */\n    --color-on-surface: light-dark(#2d3748, #c4c9d4);\n    --color-primary: light-dark(#2563eb, #8ab4ff);\n    /* toolbar (see .view-viewer__toolbar) */\n    --view-toolbar-pad-block: 0.375rem;\n    --view-toolbar-pad-inline: 0.625rem;\n    --view-toolbar-gap: 0.5rem;\n    --view-toolbar-group-gap: 0.125rem;\n    --view-toolbar-divider: color-mix(in oklab, var(--view-border) 35%, transparent);\n    --view-toolbar-btn-radius: 0.625rem;\n    --view-toolbar-btn-pad-block: 0.4375rem;\n    --view-toolbar-btn-pad-inline: 0.6875rem;\n    --view-toolbar-surface: light-dark(color-mix(in oklab, var(--color-surface-container-high, #ececec) 92%, var(--color-surface, #fff) 8%), color-mix(in oklab, var(--color-surface-container-high, #2a2a2a) 88%, var(--color-surface, #121212) 12%));\n    --view-toolbar-shadow: light-dark(0 10px 28px -18px color-mix(in oklab, var(--color-on-surface, #1a1a1a) 12%, transparent), 0 14px 36px -22px color-mix(in oklab, #000 50%, transparent));\n    /* units */\n    --view-code-font-size: 0.9em;\n  }\n  /*\n   * WHY: Match resolved app theme so `light-dark()` in `--view-toolbar-bg` / prose tokens does not follow OS\n   * while `html[data-theme]` & Theme.ts already locked the product to light or dark.\n   */\n  html[data-theme=light] :where(.cw-view-viewer-shell, .view-viewer) {\n    color-scheme: light;\n  }\n  html[data-theme=dark] :where(.cw-view-viewer-shell, .view-viewer) {\n    color-scheme: dark;\n  }\n  /*\n   * WHY: Semi-transparent `light-dark()` toolbar fills composite against whatever sits behind the row; combined\n   * with token drift the bar could stay visually dark while `--color-on-surface` followed the light palette (washed-out icons).\n   * Lock opaque chrome + fg to `html[data-theme]` (same source as Theme.ts), not UA/OS scheme alone.\n   */\n  html[data-theme=light] .view-viewer .view-viewer__toolbar {\n    color-scheme: light;\n    background: var(--viewer-toolbar-row-fill, #e8ecf4);\n    --color-on-surface: #1e293b;\n    --view-picon-fill: #1e293b;\n    --view-picon-fill-hover: #2563eb;\n    --color-surface-container-high: rgb(0 0 0 / 0.1);\n  }\n  html[data-theme=dark] .view-viewer .view-viewer__toolbar {\n    color-scheme: dark;\n    background: var(--viewer-toolbar-row-fill, #151f2e);\n    --color-on-surface: #e5e7eb;\n    --view-picon-fill: #e5e7eb;\n    --view-picon-fill-hover: var(--color-primary-hover, #93c5fd);\n    --color-surface-container-high: rgb(255 255 255 / 0.14);\n  }\n  /* Pill chrome only — keeps global `--color-surface` valid for minimal/base shell tokens on `:root`. */\n  .view-viewer__toolbar {\n    --color-surface: transparent;\n  }\n}\n@layer layer.view.viewer {\n  /*\n   * Base / immersive / minimal shells: viewer chrome spans the content track (not min-content / “floating” island).\n   */\n  :is(html:has([data-shell=base]),\n  html:has([data-shell=immersive]),\n  html:has([data-shell=minimal])) cw-view-viewer[data-cw-view-host=true] {\n    display: block;\n    inline-size: 100%;\n    max-inline-size: 100%;\n  }\n}\n@layer layer.view.viewer {\n  /*\n   * Shell = column flex. Typical tree: .cw-view-viewer-shell > .view-viewer >\n   *   toolbar + .view-viewer__content[data-viewer-content] > pre[raw] + prose[data-render-target].\n   * Web-component host may use shadow slots; same __content wrapper in both cases.\n   */\n  .cw-view-viewer-shell {\n    --viewer-shell-container-type: inline-size;\n    --viewer-shell-contain: layout style paint;\n    --viewer-shell-inline-size: 100%;\n    --viewer-shell-block-size: 100%;\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    inline-size: var(--viewer-shell-inline-size, 100%);\n    block-size: var(--viewer-shell-block-size, 100%);\n    max-inline-size: 100%;\n    max-block-size: none;\n    min-block-size: 0;\n    min-inline-size: 0;\n    align-self: stretch;\n    width: 100%;\n    container-type: var(--viewer-shell-container-type, inline-size);\n    contain: var(--viewer-shell-contain, layout style paint);\n    contain-intrinsic-size: auto 1000px;\n    isolation: isolate;\n  }\n  .view-viewer {\n    display: flex;\n    flex-direction: column;\n    box-sizing: border-box;\n    background-color: var(--view-bg);\n    color: var(--view-fg);\n    min-block-size: 0;\n    min-inline-size: 0;\n    block-size: 100%;\n    inline-size: 100%;\n    overflow: hidden;\n  }\n  .cw-view-viewer-shell:not([data-raw]) .view-viewer {\n    flex: 1 1 auto;\n    min-block-size: 0;\n    min-inline-size: 0;\n  }\n  /* Standalone: raw lives in .view-viewer__content; grow view-viewer when showing raw */\n  .cw-view-viewer-shell[data-raw]:not(:has(.cw-view-viewer__slot-default)) .view-viewer {\n    flex: 1 1 auto;\n    min-block-size: 0;\n    min-inline-size: 0;\n  }\n  /* Web component: shell’s only block child is .view-viewer; it fills height */\n  .cw-view-viewer-shell:has(.cw-view-viewer__slot-default) .view-viewer {\n    flex: 1 1 auto;\n    min-block-size: 0;\n    min-inline-size: 0;\n  }\n  /* Slot wrappers stack inside __content; __content is the flex grow + clip region */\n  .cw-view-viewer-shell:has(.cw-view-viewer__slot-default) .view-viewer__content {\n    flex: 1 1 auto;\n    min-block-size: 0;\n    min-inline-size: 0;\n    block-size: 100%;\n    inline-size: 100%;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n  }\n  .cw-view-viewer-shell:has(.cw-view-viewer__slot-default):not([data-raw]) .cw-view-viewer__slot-raw {\n    display: none !important;\n  }\n  .cw-view-viewer-shell:has(.cw-view-viewer__slot-default)[data-raw] .cw-view-viewer__slot-default {\n    display: none !important;\n  }\n  .cw-view-viewer-shell:has(.cw-view-viewer__slot-default):not([data-raw]) .cw-view-viewer__slot-default {\n    flex: 1 1 auto;\n    min-block-size: 0;\n    min-inline-size: 0;\n    block-size: 100%;\n    inline-size: 100%;\n    box-sizing: border-box;\n    overflow-block: auto;\n    overflow-inline: hidden;\n    overscroll-behavior: contain;\n  }\n  .cw-view-viewer-shell:has(.cw-view-viewer__slot-default):not([data-raw]) .cw-view-viewer__slot-default > slot {\n    display: block;\n    block-size: 100%;\n    inline-size: 100%;\n    min-block-size: 0;\n    min-inline-size: 0;\n  }\n  .cw-view-viewer-shell:has(.cw-view-viewer__slot-default):not([data-raw]) .cw-view-viewer__slot-default > slot::slotted([data-render-target]) {\n    display: flex;\n    flex-direction: column;\n    block-size: 100%;\n    inline-size: 100%;\n    max-block-size: none;\n    min-block-size: 0;\n    min-inline-size: 0;\n    overflow-block: auto;\n    overflow-inline: hidden;\n    overscroll-behavior: contain;\n  }\n  .cw-view-viewer-shell:has(.cw-view-viewer__slot-default)[data-raw] .cw-view-viewer__slot-raw {\n    flex: 1 1 auto;\n    min-block-size: 0;\n    min-inline-size: 0;\n    block-size: 100%;\n    inline-size: 100%;\n    box-sizing: border-box;\n    overflow-block: auto;\n    overflow-inline: hidden;\n    overscroll-behavior: contain;\n  }\n  /* Standalone: in raw mode hide rendered prose (pre stays in __content). Never hide __content — prose lives inside it. */\n  .cw-view-viewer-shell:not(:has(.cw-view-viewer__slot-default))[data-raw] .cw-view-viewer__prose {\n    display: none !important;\n  }\n  .cw-view-viewer-shell:not(:has(.cw-view-viewer__slot-default)):not([data-raw]) .cw-view-viewer__prose {\n    flex: 1 1 auto;\n    flex-direction: column;\n    display: flex;\n    min-block-size: 0;\n    min-inline-size: 0;\n    block-size: 100%;\n    inline-size: 100%;\n    box-sizing: border-box;\n    overflow-block: auto;\n    overflow-inline: hidden;\n    overscroll-behavior: contain;\n  }\n  .cw-view-viewer-shell:not(:has(.cw-view-viewer__slot-default))[data-raw] .view-viewer__content {\n    flex: 1 1 auto;\n    min-block-size: 0;\n    min-inline-size: 0;\n    block-size: 100%;\n    inline-size: 100%;\n  }\n}\n@layer layer.view.viewer {\n  @keyframes view-spin {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  @media print {\n    @page {\n      margin: 12mm;\n    }\n    .cw-view-viewer-shell {\n      display: block !important;\n      block-size: auto !important;\n      inline-size: 100% !important;\n      overflow: visible !important;\n      contain: none !important;\n      container-type: normal !important;\n    }\n    .view-viewer {\n      display: block !important;\n      block-size: auto !important;\n      inline-size: 100% !important;\n      overflow: visible !important;\n      background: transparent !important;\n      color: #000 !important;\n    }\n    .view-viewer__toolbar {\n      display: none !important;\n    }\n    .view-viewer__outline {\n      display: none !important;\n    }\n    .view-viewer__content {\n      display: block !important;\n      padding: 0 !important;\n      overflow: visible !important;\n      block-size: auto !important;\n      inline-size: 100% !important;\n    }\n    .cw-view-viewer__prose {\n      display: block !important;\n      block-size: auto !important;\n      inline-size: 100% !important;\n      overflow: visible !important;\n      contain: none !important;\n    }\n    .cw-view-viewer__slot-raw,\n    .cw-view-viewer__slot-default {\n      display: block !important;\n      block-size: auto !important;\n      inline-size: 100% !important;\n      overflow: visible !important;\n    }\n    [data-render-target],\n    .markdown-body,\n    .markdown-viewer-content,\n    .result-content {\n      display: block !important;\n      visibility: visible !important;\n      opacity: 1 !important;\n      overflow: visible !important;\n      min-block-size: 100% !important;\n      block-size: auto !important;\n      inline-size: 100% !important;\n      color: #000 !important;\n      background: transparent !important;\n    }\n    .markdown-viewer-content,\n    [data-render-target] {\n      break-before: auto !important;\n      break-after: auto !important;\n      break-inside: auto !important;\n      page-break-before: auto !important;\n      page-break-after: auto !important;\n      page-break-inside: auto !important;\n      widows: 3;\n      orphans: 3;\n    }\n    .markdown-viewer-content h1,\n    .markdown-viewer-content h2,\n    .markdown-viewer-content h3,\n    .markdown-viewer-content h4,\n    .markdown-viewer-content h5,\n    .markdown-viewer-content h6 {\n      break-after: avoid-page;\n      page-break-after: avoid;\n      break-inside: avoid;\n      page-break-inside: avoid;\n    }\n    .markdown-viewer-content pre,\n    .markdown-viewer-content table,\n    .markdown-viewer-content blockquote,\n    .markdown-viewer-content figure,\n    .markdown-viewer-content img,\n    .markdown-viewer-content ul,\n    .markdown-viewer-content ol,\n    .markdown-viewer-content li {\n      break-inside: avoid-page;\n      page-break-inside: avoid;\n    }\n  }\n}", A = null, j = "rs-viewer-outline", M = /\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|(?<!\$)\$[^$\n]+\$|\\\([\s\S]*?\\\)/, N = 35e4, P = 96e3, F = 12e5, I = 2 * 1024 * 1024, L = 48e4, R = 6e5, z = /(^|\n)(`{3,}|~{3,})[^\n]*\n[\s\S]*?\n\2(?=\n|$)/g, B = /`[^`\n]+`/g, V = {
	USE_PROFILES: {
		html: !0,
		mathMl: !0,
		svg: !0
	},
	FORBID_TAGS: [
		"script",
		"style",
		"iframe",
		"object",
		"embed",
		"applet",
		"link",
		"meta",
		"base",
		"form",
		"noscript",
		"template"
	],
	FORBID_CONTENTS: [
		"script",
		"style",
		"iframe",
		"object",
		"embed",
		"applet",
		"noscript",
		"template"
	]
}, H = "g", U = [
	"rs-md-base",
	"rs-md-system",
	"rs-md-modules",
	"rs-md-user",
	"rs-md-print",
	"rs-md-user-print"
], W = !1, G = () => {
	if (!W) try {
		_(), g(), W = !0;
	} catch (e) {
		console.warn("[Viewer] Failed to initialize icon runtime:", e);
	}
}, K = (e) => navigator?.clipboard?.writeText?.(e) ?? Promise.resolve(void 0);
function q(e) {
	let t = [], n = "__MD_MASK_";
	return {
		masked: ((e) => e.replace(B, (e) => {
			let r = `${n}${t.length}__`;
			return t.push(e), r;
		}))(((e) => e.replace(z, (e) => {
			let r = `${n}${t.length}__`;
			return t.push(e), r;
		}))(e)),
		restore: (e) => e.replace(/__MD_MASK_(\d+)__/g, (e, n) => t[Number(n)] ?? "")
	};
}
var J = async () => A || (A = (async () => {
	let [{ marked: e }, { default: t }] = await Promise.all([import("./marked.esm-Bh9f89IO.js").then((e) => e.n), import("./src-HNzm8cTm.js").then((e) => e.n)]);
	return e?.use?.(t({
		throwOnError: !1,
		nonStandard: !0,
		output: "mathml",
		strict: !1
	}), { hooks: { preprocess: (e) => {
		if (e.length > N || !M.test(e)) return e;
		let { masked: t, restore: n } = q(e), r = document.createElement("div");
		return r.textContent = t, w(r, {
			throwOnError: !1,
			nonStandard: !0,
			output: "mathml",
			strict: !1,
			delimiters: [
				{
					left: "$$",
					right: "$$",
					display: !0
				},
				{
					left: "\\[",
					right: "\\]",
					display: !0
				},
				{
					left: "$",
					right: "$",
					display: !1
				},
				{
					left: "\\(",
					right: "\\)",
					display: !1
				}
			]
		}), n(r.innerHTML);
	} } }), async (t) => await e.parse(t ?? "");
})(), A);
function Y() {
	J().catch(() => {});
}
var X = "rs-viewer-state", Z = "# This is content", Q = "cw-view-viewer", $ = d(Q, (d) => class extends d {
	id = "viewer";
	name = "Viewer";
	icon = "eye";
	options;
	shellContext;
	element = null;
	slotProjectingHost = null;
	contentRef = c("");
	contentRefSubscriptionDispose = null;
	renderSeq = 0;
	stateManager = h(X);
	_sheet = null;
	pasteController = null;
	windowDnDController = null;
	isViewVisible = !1;
	isPointerInView = !1;
	sourceUrl = null;
	customSheet = null;
	userStyleModules = {
		screenCss: "",
		printCss: ""
	};
	markdownSettings = {
		preset: "default",
		fontFamily: "system",
		fontSizePx: 16,
		lineHeight: 1.7,
		contentMaxWidthPx: 860,
		printScale: 1,
		page: {
			size: "auto",
			orientation: "portrait",
			marginMm: 12
		},
		modules: {
			typography: !0,
			lists: !0,
			tables: !0,
			codeBlocks: !0,
			blockquotes: !0,
			media: !0,
			printBreaks: !0
		},
		plugins: {
			smartTypography: !1,
			softBreaksAsBr: !1,
			externalLinksNewTab: !0
		},
		customCss: "",
		printCss: "",
		extensions: []
	};
	markdownSettingsPromise = null;
	outlineVisible = !1;
	viewerColorScheme = "system";
	documentThemeSnapshot = null;
	disposeContentRefSubscription() {
		try {
			this.contentRefSubscriptionDispose?.();
		} catch {}
		this.contentRefSubscriptionDispose = null;
	}
	subscribeContentRefToCurrentTargets(e, t) {
		this.disposeContentRefSubscription();
		let n = u(this.contentRef, () => {
			e && t && this.renderMarkdown(this.contentRef.value, e, t), this.saveState();
		});
		this.contentRefSubscriptionDispose = typeof n == "function" ? n : null;
	}
	lifecycle = {
		onMount: () => this.onMount(),
		onUnmount: () => this.onUnmount(),
		onShow: () => this.onShow(),
		onHide: () => this.onHide(),
		onRefresh: () => this.onRefresh()
	};
	constructor(e = {}) {
		super(), this.options = e, this.shellContext = e.shellContext, this.sourceUrl = this.normalizeSourceUrl(e.source), this.applyRouteParams(e.params), this.markdownSettingsPromise = this.loadMarkdownSettings();
		try {
			this.outlineVisible = globalThis.sessionStorage?.getItem(j) === "1";
		} catch {
			this.outlineVisible = !1;
		}
		this.syncViewerColorSchemeFromOptions();
		let t = this.stateManager.load();
		if (this.contentRef.value = e.initialContent || t?.content || Z, !e.initialContent) {
			let t = (e.params?.content || "").trim();
			t && (this.contentRef.value = t);
		}
	}
	render = function(e) {
		G(), this.slotProjectingHost = null, e && (this.options = {
			...this.options,
			...e
		}, this.shellContext = e.shellContext || this.shellContext, this.applyRouteParams(e.params)), this.syncViewerColorSchemeFromOptions(), this._sheet = a(k), this.element = this.createViewerShellElement();
		let t = this.element.querySelector("[data-render-target]"), n = this.element.querySelector("[data-raw-target]");
		return this.setupEventHandlers(n || void 0), this.syncOutlineToolbarState(), this.syncToolbarDocumentTitle(), t && n && this.renderMarkdown(this.contentRef.value, t, n), this.subscribeContentRefToCurrentTargets(t, n), this.refreshDocumentTheme(), this.element;
	};
	shellNavigateHydrate(e, t) {
		if (!this.element?.isConnected) return;
		e && (this.options = {
			...this.options,
			...e
		}, this.shellContext = e.shellContext || this.shellContext, e.params !== void 0 && this.applyRouteParams(e.params), this.syncViewerColorSchemeFromOptions());
		let n = this.queryViewerSlotted("[data-render-target]"), r = this.queryViewerSlotted("[data-raw-target]");
		n && r && (this.subscribeContentRefToCurrentTargets(n, r), this.renderMarkdown(this.contentRef.value, n, r)), this.syncOutlineToolbarState(), this.syncToolbarDocumentTitle(), this.refreshDocumentTheme();
	}
	renderIntoWebComponentHost(e, t) {
		G(), t && (this.options = {
			...this.options,
			...t
		}, this.shellContext = t.shellContext || this.shellContext, this.applyRouteParams(t.params)), this.syncViewerColorSchemeFromOptions(), this.slotProjectingHost = e, this._sheet ??= a(k), this.element = this.createViewerShellElement(), e.replaceChildren(this.element);
		let n = e.querySelector("[data-raw-target]"), r = e.querySelector("[data-render-target]");
		e.setAttribute("data-view-id", "viewer"), e.toggleAttribute("data-cw-view-host", !0), this.syncAdoptedSheetsToShadow();
		let i = r, o = n;
		this.setupEventHandlers(o), this.syncOutlineToolbarState(), this.syncToolbarDocumentTitle(), i && o && this.renderMarkdown(this.contentRef.value, i, o), this.subscribeContentRefToCurrentTargets(i, o), this.refreshDocumentTheme();
	}
	getToolbar() {
		return null;
	}
	setContent(e, t, n) {
		this.contentRef.value = e, t && (this.options.filename = t), n !== void 0 && (this.sourceUrl = this.normalizeSourceUrl(n), this.options.source = n || void 0), this.syncToolbarDocumentTitle();
	}
	ingestOpenedMarkdownBody(e, t, n) {
		if (e.length > 0 && b(e)) {
			this.setContent("> This payload does not look like UTF-8 markdown (binary file or unsupported format).\n>\n> Open a `.md` / `.txt` file, paste as plain text, or attach binaries via Work Center.\n\n", t, n);
			return;
		}
		this.setContent(e, t, n ?? void 0);
	}
	getContent() {
		return this.contentRef.value;
	}
	setViewerColorScheme(e) {
		this.viewerColorScheme = e, this.options.colorScheme = e, this.refreshDocumentTheme();
	}
	refreshDocumentTheme() {
		typeof document > "u" || this.applyViewerDocumentTheme(this.viewerColorScheme);
	}
	applyViewerDocumentTheme(e) {
		let t = document.documentElement;
		if (e === "system") return;
		this.documentThemeSnapshot ||= {
			prevAttr: t.getAttribute("data-theme"),
			prevInlineCs: t.style.getPropertyValue("color-scheme")
		};
		let n = T(e);
		t.setAttribute("data-theme", n), t.style.setProperty("color-scheme", n);
	}
	restoreViewerDocumentTheme() {
		let e = this.documentThemeSnapshot;
		if (this.documentThemeSnapshot = null, !e || typeof document > "u") return;
		let t = document.documentElement;
		e.prevAttr === null || e.prevAttr === "" ? t.removeAttribute("data-theme") : t.setAttribute("data-theme", e.prevAttr), e.prevInlineCs.trim() ? t.style.setProperty("color-scheme", e.prevInlineCs) : t.style.removeProperty("color-scheme");
	}
	syncViewerColorSchemeFromOptions() {
		let e = O(this.options);
		e && (this.viewerColorScheme = e);
	}
	createViewerShellElement() {
		return r`
            <div class="cw-view-viewer-shell">
                <div class="view-viewer">
                    <div
                        class="view-viewer__toolbar"
                        data-viewer-toolbar
                        role="toolbar"
                        aria-label="Markdown document actions"
                    >
                        <div class="view-viewer__toolbar-left" role="group" aria-label="Document">
                            <button class="view-viewer__btn" data-action="open" type="button" title="Open file">
                                <ui-icon class="view-viewer__toolbar-icon" icon="folder-open" icon-style="duotone" size="20" aria-hidden="true"></ui-icon>
                                <span>Open</span>
                            </button>
                            <button class="view-viewer__btn" data-action="toggle-raw" type="button" title="Toggle raw/rendered view">
                                <ui-icon class="view-viewer__toolbar-icon" icon="code" icon-style="duotone" size="20" aria-hidden="true"></ui-icon>
                                <span>Raw</span>
                            </button>
                            <button class="view-viewer__btn" data-action="copy" type="button" title="Copy raw content">
                                <ui-icon class="view-viewer__toolbar-icon" icon="copy" icon-style="duotone" size="20" aria-hidden="true"></ui-icon>
                                <span>Copy</span>
                            </button>
                            <button class="view-viewer__btn" data-action="paste" type="button" title="Paste from clipboard (mobile-friendly)" aria-label="Paste from clipboard">
                                <ui-icon class="view-viewer__toolbar-icon" icon="clipboard-text" icon-style="duotone" size="20" aria-hidden="true"></ui-icon>
                                <span>Paste</span>
                            </button>
                            <button class="view-viewer__btn" data-action="download" type="button" title="Download as markdown">
                                <ui-icon class="view-viewer__toolbar-icon" icon="download" icon-style="duotone" size="20" aria-hidden="true"></ui-icon>
                                <span>Download</span>
                            </button>
                        </div>
                        <div class="view-viewer__toolbar-center" role="presentation">
                            <span class="view-viewer__toolbar-title" data-viewer-toolbar-title></span>
                        </div>
                        <div class="view-viewer__toolbar-right" role="group" aria-label="Output and workspace">
                            <button class="view-viewer__btn" data-action="attach" type="button" title="Attach to Work Center">
                                <ui-icon class="view-viewer__toolbar-icon" icon="paperclip" icon-style="duotone" size="20" aria-hidden="true"></ui-icon>
                                <span>Attach</span>
                            </button>
                            <button class="view-viewer__btn" data-action="open-style-settings" type="button" title="Markdown styling, modules, plugins">
                                <ui-icon class="view-viewer__toolbar-icon" icon="paint-roller" icon-style="duotone" size="20" aria-hidden="true"></ui-icon>
                                <span>Style</span>
                            </button>
                            <button class="view-viewer__btn" data-action="copy-rendered" type="button" title="Copy rendered text">
                                <ui-icon class="view-viewer__toolbar-icon" icon="text-t" icon-style="duotone" size="20" aria-hidden="true"></ui-icon>
                                <span>Copy text</span>
                            </button>
                            <button class="view-viewer__btn" data-action="export-docx" type="button" title="Export as DOCX">
                                <ui-icon class="view-viewer__toolbar-icon" icon="file-doc" icon-style="duotone" size="20" aria-hidden="true"></ui-icon>
                                <span>DOCX</span>
                            </button>
                            <button class="view-viewer__btn" data-action="print" type="button" title="Print content">
                                <ui-icon class="view-viewer__toolbar-icon" icon="printer" icon-style="duotone" size="20" aria-hidden="true"></ui-icon>
                                <span>Print</span>
                            </button>
                        </div>
                    </div>
                    <div class="view-viewer__content" data-viewer-content>
                        <pre class="markdown-viewer-raw" data-raw-target aria-label="Raw content" hidden></pre>
                        <div class="cw-view-viewer__prose markdown-body markdown-viewer-content result-content" data-render-target data-cw-viewer-prose></div>
                    </div>
                </div>
            </div>
        `;
	}
	adoptViewerStylesIntoShadowRoot(e) {
		let t = this._sheet;
		!t || e.adoptedStyleSheets === void 0 || e.adoptedStyleSheets.includes(t) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, t]);
	}
	syncAdoptedSheetsToShadow() {
		let e = this.slotProjectingHost?.shadowRoot;
		if (!e || e.adoptedStyleSheets === void 0) return;
		let t = (t) => {
			t && (e.adoptedStyleSheets.includes(t) || (e.adoptedStyleSheets = [...e.adoptedStyleSheets, t]));
		};
		t(this._sheet), t(this.customSheet ?? null);
	}
	queryViewerSlotted(e) {
		return this.slotProjectingHost?.querySelector(e) || (this.element?.querySelector(e) ?? null);
	}
	viewBranchesContain(e) {
		return e ? this.slotProjectingHost?.contains(e) ? !0 : !!this.element?.contains(e) : !1;
	}
	viewBranchesHover() {
		return !!this.slotProjectingHost?.matches(":hover") || !!this.element?.matches(":hover");
	}
	syncViewerRawMode(e) {
		let t = this.element;
		if (!t?.classList.contains("cw-view-viewer-shell")) return;
		t.toggleAttribute("data-raw", e), this.slotProjectingHost?.toggleAttribute("data-raw", e);
		let n = t.querySelector("[data-viewer-content]");
		e ? n?.setAttribute("data-raw", "") : n?.removeAttribute("data-raw");
	}
	syncOutlineToolbarState() {
		let e = (this.element?.querySelector("[data-viewer-toolbar]"))?.querySelector("[data-action=\"toggle-outline\"]");
		e && e.setAttribute("aria-pressed", this.outlineVisible ? "true" : "false");
	}
	slugifyHeadingId(e, t) {
		let n = (e || "").trim().toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9\u00c0-\u024f-]+/gi, "-").replace(/^-+|-+$/g, "") || "section", r = n, i = 0;
		for (; t.has(r);) i += 1, r = `${n}-${i}`;
		return t.add(r), r;
	}
	refreshDocumentOutline(e, t) {
		if (e.hidden = !this.outlineVisible, e.innerHTML = "", !this.outlineVisible) return;
		let n = Array.from(t.querySelectorAll("h1,h2,h3,h4,h5,h6"));
		if (n.length === 0) {
			e.innerHTML = "<div class=\"view-viewer__outline-empty\" role=\"status\">No headings in document</div>";
			return;
		}
		let r = /* @__PURE__ */ new Set(), i = document.createElement("ul");
		i.className = "view-viewer__outline-list";
		for (let e of n) {
			let t = (e.id || "").trim();
			t ? r.add(t) : (t = this.slugifyHeadingId(e.textContent || "", r), e.id = t);
			let n = document.createElement("li");
			n.className = `view-viewer__outline-item view-viewer__outline--h${e.tagName.slice(1)}`;
			let a = document.createElement("a");
			a.href = `#${t}`, a.textContent = (e.textContent || "").trim() || t, n.appendChild(a), i.appendChild(n);
		}
		e.appendChild(i);
	}
	setOutlineVisible(e) {
		this.outlineVisible = e;
		try {
			e ? globalThis.sessionStorage?.setItem(j, "1") : globalThis.sessionStorage?.removeItem(j);
		} catch {}
		let t = this.queryViewerSlotted("[data-render-target]");
		if (t) {
			let n = t.querySelector(":scope > nav.view-viewer__outline"), r = t.querySelector(":scope > .view-viewer__md-root");
			n && r ? this.refreshDocumentOutline(n, r) : n && (n.hidden = !e);
		}
		this.syncOutlineToolbarState();
	}
	renderMarkdown(e, t, n) {
		if (!t) return;
		let r = ++this.renderSeq, i = (e) => {
			let t = (e || "").trimStart().toLowerCase();
			return !!(t.startsWith("<!doctype html") || t.startsWith("<html") || t.startsWith("<head") || t.startsWith("<body") || t.startsWith("<?xml") && t.includes("<html"));
		}, a = () => {
			r === this.renderSeq && (t.removeAttribute("aria-busy"), t.removeAttribute("data-md-state"));
		};
		if (n) {
			let t = e || "", i = () => {
				r === this.renderSeq && (t.length > F ? n.textContent = `${t.slice(0, F)}\n\n… [truncated — open in editor for full source]` : n.textContent = t);
			};
			t.length > P ? globalThis.setTimeout(i, 0) : i();
		}
		if (!String(e ?? "").trim()) {
			if (r !== this.renderSeq) return;
			this.syncViewerRawMode(!1), t.hidden = !1, n && (n.hidden = !0), t.removeAttribute("aria-busy"), t.setAttribute("data-md-state", "empty"), t.innerHTML = "<div class=\"view-viewer__md-empty\" role=\"status\">Empty document</div>", this.syncToolbarDocumentTitle();
			return;
		}
		if (this.element?.querySelector(".view-viewer__content") && i(e || "")) {
			this.syncViewerRawMode(!0), n && (n.hidden = !1), t.hidden = !0, this.syncToolbarDocumentTitle(), a();
			return;
		}
		this.syncViewerRawMode(!1), t.hidden = !1, n && (n.hidden = !0), t.setAttribute("aria-busy", "true"), t.setAttribute("data-md-state", "preparing"), t.innerHTML = "<div class=\"view-viewer__md-loading\" role=\"status\">Rendering preview…</div>", queueMicrotask(() => {
			if (r === this.renderSeq) try {
				let n = (e) => {
					if (r !== this.renderSeq) return;
					let n = C?.sanitize?.((e || "")?.trim?.() || "", V) || "";
					t.replaceChildren();
					let i = document.createElement("nav");
					i.className = "view-viewer__outline", i.setAttribute("aria-label", "Document outline");
					let o = document.createElement("div");
					o.className = "view-viewer__md-root", o.innerHTML = n, t.append(i, o), this.resolveRelativeResourceUrls(o), this.applyRenderedLinkBehavior(o), this.refreshDocumentOutline(i, o), this.syncOutlineToolbarState(), this.syncToolbarDocumentTitle(o), a(), console.log("[ViewerView] Markdown rendered successfully");
				}, i = (e) => {
					r === this.renderSeq && (console.error("[ViewerView] Error rendering markdown:", e), t.innerHTML = `<div style="color: red; padding: 1rem; background: #fee; border: 1px solid #fcc; border-radius: 4px;">Error parsing markdown: ${e?.message}</div>`, a());
				}, o = this.applyMarkdownPlugins((e || "")?.trim?.() || ""), s = this.applyCustomMarkdownExtensions(o);
				J().then((e) => e(s)).then(n).catch(i);
			} catch (e) {
				console.error("[ViewerView] Error rendering markdown:", e), t.innerHTML = `<div style="color: red; padding: 1rem; background: #fee; border: 1px solid #fcc; border-radius: 4px;">Error parsing markdown: ${e?.message}</div>`, a();
			}
		});
	}
	normalizeSourceUrl(e) {
		let t = (e || "").trim();
		if (!t) return null;
		try {
			return new URL(t, globalThis.location.href).toString();
		} catch {
			return null;
		}
	}
	applyRouteParams(e) {
		if (!e) return;
		let t = String(e.detachKey || "").trim();
		if (t) try {
			let e = globalThis?.sessionStorage?.getItem?.(t) || "";
			if (e) {
				let t = JSON.parse(e), n = String(t?.content || "");
				n.trim() && (this.contentRef.value = n), t?.filename && (this.options.filename = String(t.filename));
				let r = String(t?.source || ""), i = globalThis.location !== void 0 && globalThis.location.protocol === "chrome-extension:";
				r.trim() && !(i && /^file:/i.test(r.trim())) && (this.sourceUrl = this.normalizeSourceUrl(r), this.options.source = r);
			}
			globalThis?.sessionStorage?.removeItem?.(t);
		} catch (e) {
			console.warn("[Viewer] Failed to restore detached payload:", e);
		}
		let n = e.source || e.src || e.path || e.url;
		if (n) {
			let e = String(n).trim();
			globalThis.location !== void 0 && globalThis.location.protocol === "chrome-extension:" && /^file:/i.test(e) || (this.sourceUrl = this.normalizeSourceUrl(n), this.options.source = n);
		}
		let r = e.filename || e.name;
		r && (this.options.filename = r);
		let i = String(e.content || "");
		i.trim() && (this.contentRef.value = i), this.element && this.syncToolbarDocumentTitle();
	}
	syncToolbarDocumentTitle(e) {
		let t = this.element?.querySelector("[data-viewer-toolbar-title]");
		t && (t.textContent = "", t.removeAttribute("title"));
	}
	isUnsafeProtocol(e) {
		return /^(?:javascript|vbscript|data:text\/html)/i.test((e || "").trim());
	}
	normalizeBareBase64Candidate(e) {
		let t = (e || "").trim();
		if (!t || s(t)) return null;
		let n = [
			t,
			t.replace(/[\s>]+$/g, ""),
			t.replace(/[^A-Za-z0-9+/=_-]/g, "")
		];
		for (let e of n) {
			let t = e.trim();
			if (t.length >= 8 && o(t)) return t;
		}
		return null;
	}
	sniffImageMimeFromBytes(e) {
		let t = e.byteLength;
		if (t >= 8 && e[0] === 137 && e[1] === 80 && e[2] === 78 && e[3] === 71) return "image/png";
		if (t >= 3 && e[0] === 255 && e[1] === 216 && e[2] === 255) return "image/jpeg";
		if (t >= 6 && e[0] === 71 && e[1] === 73 && e[2] === 70 && e[3] === 56) return "image/gif";
		if (t >= 12 && e[0] === 82 && e[1] === 73 && e[2] === 70 && e[3] === 70) return "image/webp";
		if (t >= 2 && e[0] === 66 && e[1] === 77) return "image/bmp";
		let n = new TextDecoder("utf-8", { fatal: !1 }).decode(e.subarray(0, Math.min(400, t))).trimStart();
		return n.startsWith("<svg") || n.startsWith("<?xml") ? "image/svg+xml" : "image/png";
	}
	coerceBareBase64ToDataUrl(e) {
		let t = this.normalizeBareBase64Candidate(e);
		if (t) try {
			let e = l(t);
			return `data:${this.sniffImageMimeFromBytes(e)};base64,${t.replace(/\s/g, "")}`;
		} catch {
			return null;
		}
	}
	resolveUrlAgainstSource(e) {
		let t = (e || "").trim();
		if (!t) return null;
		if (t.startsWith("#")) return t;
		if (this.isUnsafeProtocol(t)) return null;
		if (/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(t) || t.startsWith("//")) try {
			return new URL(t, globalThis.location.href).toString();
		} catch {
			return t;
		}
		let n = this.coerceBareBase64ToDataUrl(t);
		if (n !== void 0) return n;
		if (!this.sourceUrl) return t;
		try {
			return new URL(t, this.sourceUrl).toString();
		} catch {
			return t;
		}
	}
	resolveRelativeResourceUrls(e) {
		let t = globalThis.location?.protocol === "chrome-extension:", n = !!this.sourceUrl?.startsWith("file:"), r = (r, i, a) => {
			let o = Array.from(e.querySelectorAll(r));
			for (let e of o) {
				let r = (e.getAttribute(i) || "").trim();
				if (!r) continue;
				let o = this.resolveUrlAgainstSource(r);
				if (!o) {
					e.removeAttribute(i);
					continue;
				}
				if (t && n && /^file:/i.test(o)) {
					if (a === "link") {
						if (!(/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(r) || r.startsWith("//"))) continue;
						e.removeAttribute(i);
						continue;
					}
					e.removeAttribute(i);
					continue;
				}
				o !== r && e.setAttribute(i, o);
			}
		};
		r("img[src]", "src", "media"), r("source[src]", "src", "media"), r("video[src]", "src", "media"), r("audio[src]", "src", "media"), r("track[src]", "src", "media"), r("a[href]", "href", "link");
	}
	isLikelyMarkdownUrl(e) {
		let t = (e || "").trim();
		if (!t) return !1;
		let n = t.split("#")[0].split("?")[0];
		return /\.(?:md|markdown|mdown|mkd|mkdn|mdtxt|mdtext)$/i.test(n);
	}
	isLikelyBinaryAssetUrl(e) {
		let t = (e || "").trim();
		if (!t) return !1;
		let n = t.split("#")[0].split("?")[0];
		return /\.(?:png|jpe?g|gif|webp|bmp|svg|ico|pdf|zip|rar|7z|gz|mp4|webm|mp3|wav|ogg|avi|mov)$/i.test(n);
	}
	async fetchMarkdownFromUrl(e) {
		let t = (e || "").trim();
		if (!t || /^file:/i.test(t)) return null;
		try {
			let e = await fetch(t, {
				credentials: "include",
				cache: "no-store"
			});
			if (!e.ok) return null;
			let n = await e.text(), r = (n || "").trimStart().toLowerCase();
			return r.startsWith("<!doctype html") || r.startsWith("<html") || r.startsWith("<head") || r.startsWith("<body") ? null : n;
		} catch (e) {
			return console.warn("[ViewerView] Failed to load markdown URL:", e), null;
		}
	}
	async openMarkdownFromUrl(e, t) {
		let n = this.queryViewerSlotted("[data-render-target]");
		n && (n.setAttribute("aria-busy", "true"), n.setAttribute("data-md-state", "fetching"), n.innerHTML = "<div class=\"view-viewer__md-loading\" role=\"status\">Loading document…</div>");
		let r = this.normalizeSourceUrl(e);
		if (!r) return !1;
		let i = await this.fetchMarkdownFromUrl(r);
		return i === null ? !1 : (this.ingestOpenedMarkdownBody(i, t, r), this.showMessage(t ? `Opened ${t}` : "Opened markdown link"), !0);
	}
	setupEventHandlers(e) {
		if (!this.element) return;
		let t = this.element.querySelector("[data-viewer-toolbar]"), n = this.element.querySelector("[data-viewer-content]"), r = this.element.classList.contains("cw-view-viewer-shell") ? this.element : null, i = this.queryViewerSlotted("[data-render-target]"), a = !1;
		t?.addEventListener("click", (t) => {
			let n = t.target.closest("[data-action]");
			if (n) switch (n.dataset.action) {
				case "open":
					this.handleOpen();
					break;
				case "paste":
					this.handlePasteFromToolbar();
					break;
				case "copy":
					this.handleCopy();
					break;
				case "toggle-raw":
					a = !a, i && (i.hidden = a), e && (e.hidden = !a), this.syncViewerRawMode(a);
					break;
				case "copy-rendered":
					i && this.handleCopyRendered(i);
					break;
				case "download":
					this.handleDownload();
					break;
				case "export-docx":
					this.handleExportDocx();
					break;
				case "print":
					i && this.handlePrint(i);
					break;
				case "open-style-settings":
					this.handleOpenStyleSettings();
					break;
				case "toggle-outline":
					this.setOutlineVisible(!this.outlineVisible);
					break;
				case "attach":
					this.attachCurrentContentToWorkcenter();
					break;
			}
		});
		let o = r || n;
		o && (o.addEventListener("mouseenter", () => {
			this.isPointerInView = !0;
		}), o.addEventListener("mouseleave", () => {
			this.isPointerInView = !1;
		}), o.addEventListener("dragover", (e) => {
			e.preventDefault(), (r ?? n)?.classList.add("dragover");
		}), o.addEventListener("dragleave", () => {
			(r ?? n)?.classList.remove("dragover");
		})), this.bindWindowMarkdownDnD(r ?? n), this.pasteController?.abort(), this.pasteController = new AbortController(), document.addEventListener("paste", (e) => {
			this.handlePaste(e);
		}, { signal: this.pasteController.signal }), i?.addEventListener("click", (e) => {
			let t = e.target?.closest?.("a[href]");
			if (!t) return;
			let n = (t.getAttribute("href") || "").trim();
			if (!n || n.startsWith("#") || e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
			let r = this.resolveUrlAgainstSource(n);
			if (!r) return;
			let i = !/^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(n) && !n.startsWith("//");
			(this.isLikelyMarkdownUrl(r) || i && !this.isLikelyBinaryAssetUrl(r)) && (e.preventDefault(), this.openMarkdownFromUrl(r).then((e) => {
				e || this.showMessage("Failed to open markdown link");
			}));
		});
	}
	handleOpen() {
		let e = document.createElement("input");
		e.type = "file", e.accept = ".md,.markdown,.mdown,.mkd,.mkdn,.mdtxt,.mdtext,.txt,text/markdown,text/plain,text/md", e.onchange = async () => {
			let t = e.files?.[0];
			if (t) try {
				let e = await t.text();
				this.setContent(e, t.name, null), this.showMessage(`Opened ${t.name}`);
			} catch (e) {
				console.error("[ViewerView] Failed to read file:", e), this.showMessage("Failed to read file");
			}
		}, e.click();
	}
	async handleCopy() {
		let e = this.contentRef.value || "";
		if (!e.trim()) {
			this.showMessage("No content to copy");
			return;
		}
		try {
			let t = await Promise.race([K(e), new Promise((e) => globalThis.setTimeout(() => e({
				ok: !1,
				error: "Clipboard timeout"
			}), 3500))]);
			if (!t?.ok) throw Error(t?.error || "Clipboard write failed");
			this.showMessage("Copied raw content to clipboard"), this.options.onCopy?.(e);
		} catch (e) {
			console.error("[ViewerView] Failed to copy:", e), this.showMessage("Failed to copy to clipboard");
		}
	}
	async handleCopyRendered(e) {
		await new Promise((e) => {
			typeof requestAnimationFrame == "function" ? requestAnimationFrame(() => e()) : globalThis.setTimeout(() => e(), 0);
		});
		let t = (e.querySelector(":scope > .view-viewer__md-root")?.textContent || e?.textContent || "").trim();
		if (!t) {
			this.showMessage("No content to copy");
			return;
		}
		if (t.length > R) {
			this.showMessage("Rendered page is too large to copy as text — use Copy (raw) instead");
			return;
		}
		try {
			let e = await Promise.race([K(t), new Promise((e) => globalThis.setTimeout(() => e({
				ok: !1,
				error: "Clipboard timeout"
			}), 3500))]);
			if (!e?.ok) throw Error(e.error || "Clipboard write failed");
			this.showMessage("Copied rendered text to clipboard");
		} catch {
			this.showMessage("Failed to copy rendered text");
		}
	}
	handleDownload() {
		let e = this.contentRef.value, t = this.options.filename || `document-${Date.now()}.md`, n = new Blob([e], { type: "text/markdown;charset=utf-8" }), r = URL.createObjectURL(n), i = document.createElement("a");
		i.href = r, i.download = t, i.click(), setTimeout(() => URL.revokeObjectURL(r), 250), this.showMessage(`Downloaded ${t}`), this.options.onDownload?.(e, t);
	}
	async handleExportDocx() {
		let e = this.contentRef.value;
		if (!e.trim()) {
			this.showMessage("No content to export");
			return;
		}
		try {
			let { downloadMarkdownAsDocx: t } = await import("./docx-export-CTrK-UEK.js");
			await t(e, {
				title: this.options.filename || "Markdown Content",
				filename: `document-${Date.now()}.docx`
			}), this.showMessage("Exported as DOCX successfully");
		} catch (e) {
			console.error("[ViewerView] Failed to export DOCX:", e), this.showMessage("Failed to export as DOCX");
		}
	}
	handlePrint(e) {
		try {
			let t = this.queryViewerSlotted("[data-raw-target]"), n = t && !t.hidden ? t : e;
			if (!n || !(n.textContent || "").trim()) {
				this.showMessage("No content to print");
				return;
			}
			n.setAttribute("data-print", "true"), globalThis?.print?.(), setTimeout(() => {
				n.removeAttribute("data-print");
			}, 1e3), this.options.onPrint?.(this.contentRef.value);
		} catch (e) {
			console.error("[ViewerView] Error printing content:", e), this.showMessage("Failed to print");
		}
	}
	async navigateSingletonShell(e) {
		try {
			let { bootLoader: t } = await import("./BootLoader-3hs0IEj5.js"), n = t.getShell();
			if (n?.navigate && ![
				"window",
				"tabbed",
				"environment"
			].includes(n.id)) {
				await n.navigate(e);
				return;
			}
		} catch (e) {
			console.warn("[Viewer] BootLoader.navigate unavailable (standalone build?):", e);
		}
		await Promise.resolve(this.shellContext?.navigate?.(e));
	}
	async attachCurrentContentToWorkcenter() {
		let e = this.contentRef.value || "";
		if (!e.trim()) {
			this.showMessage("No content to attach");
			return;
		}
		let t = this.options.filename || `viewer-${Date.now()}.md`, n = {
			text: e,
			content: e,
			filename: t,
			source: "viewer-attach"
		}, r = {
			type: "content-share",
			contentType: "markdown",
			data: n
		};
		if (this.shellContext && [
			"window",
			"tabbed",
			"environment"
		].includes(this.shellContext.shellId)) try {
			requestOpenView({
				viewId: "workcenter",
				target: "window",
				body: r,
				contentType: "application/json"
			}), this.showMessage("Content attached to Work Center");
			return;
		} catch (e) {
			console.warn("[Viewer] windowed workcenter attach failed:", e);
		}
		await this.navigateSingletonShell("workcenter"), await new Promise((e) => requestAnimationFrame(() => requestAnimationFrame(() => e()))), await this.navigateSingletonShell("workcenter");
		let i = new File([e], t, { type: "text/markdown;charset=utf-8" });
		try {
			if (await S({
				type: "content-share",
				source: "viewer",
				destination: "workcenter",
				contentType: "text/markdown",
				attachments: [{
					data: i,
					source: "viewer-workcenter-attach"
				}],
				data: {
					...n,
					sourcePath: t
				},
				metadata: {
					filename: t,
					sourcePath: t
				}
			})) {
				this.showMessage("Content attached to Work Center");
				return;
			}
		} catch (e) {
			console.warn("[Viewer] protocol workcenter attach failed:", e);
		}
		try {
			let e = ViewRegistry.getLoaded("workcenter") || await ViewRegistry.load("workcenter", { shellContext: this.shellContext });
			if (e?.handleMessage) {
				await e.handleMessage({
					...r,
					data: {
						...n,
						file: i,
						files: [i]
					}
				}), this.showMessage("Content attached to Work Center");
				return;
			}
		} catch (e) {
			console.warn("[Viewer] direct workcenter attach failed:", e);
		}
		this.showMessage("Attach failed — open Work Center and try again");
	}
	handleOpenStyleSettings() {
		try {
			this.shellContext?.navigate("settings", {
				tab: "markdown",
				focus: "style"
			}), this.showMessage("Opened Markdown style settings");
		} catch (e) {
			console.warn("[Viewer] Failed to open style settings:", e), this.showMessage("Failed to open style settings");
		}
	}
	handleFileDrop(e) {
		this.ingestDroppedFiles(e.dataTransfer);
	}
	viewerAcceptsGlobalInput() {
		return !(!this.isViewVisible || this.shellContext?.navigationState?.currentView && this.shellContext.navigationState.currentView !== this.id);
	}
	bindWindowMarkdownDnD(e) {
		this.windowDnDController?.abort(), this.windowDnDController = new AbortController();
		let t = this.windowDnDController.signal, n = (e) => {
			if (!this.viewerAcceptsGlobalInput()) return !1;
			let t = e.dataTransfer?.types;
			return !(!t || !Array.from(t).includes("Files") || e.target?.closest("input, textarea, select, [contenteditable='true']"));
		};
		window.addEventListener("dragover", (t) => {
			n(t) && (t.preventDefault(), t.dataTransfer && (t.dataTransfer.dropEffect = "copy"), e?.classList.add("dragover"));
		}, {
			signal: t,
			capture: !0
		}), window.addEventListener("drop", (t) => {
			n(t) && (t.preventDefault(), t.stopPropagation(), e?.classList.remove("dragover"), this.handleFileDrop(t));
		}, {
			signal: t,
			capture: !0
		});
	}
	async ingestDroppedFiles(e) {
		if (!e) return;
		let t = e.files;
		if (t && t.length > 0) {
			let e = this.pickMarkdownOrTextFile(Array.from(t));
			if (!e) {
				this.showMessage("Drop a .md or text file");
				return;
			}
			try {
				let t = await e.text();
				this.setContent(t, e.name, null), this.showMessage(`Loaded ${e.name}`);
			} catch {
				this.showMessage("Failed to read dropped file");
			}
			return;
		}
		let n = (e.getData("text/uri-list") || "").split(/\r?\n/).find((e) => e.trim() && !e.trim().startsWith("#"))?.trim() || e.getData("text/plain")?.trim();
		if (n && /^https?:\/\//i.test(n) && this.isLikelyMarkdownUrl(n)) {
			await this.openMarkdownFromUrl(n) ? this.showMessage("Opened dropped link") : this.showMessage("Could not load dropped URL");
			return;
		}
		n && this.isLikelyMarkdownUrl(n) && this.showMessage("Dropped link must be http(s) to load in the browser");
	}
	pickMarkdownOrTextFile(e) {
		let t = [...e].sort((e, t) => !this.isMarkdownFilename(e.name) - +!this.isMarkdownFilename(t.name) || e.name.localeCompare(t.name));
		for (let e of t) if (this.isTextLikeFile(e)) return e;
		return null;
	}
	isMarkdownFilename(e) {
		return /\.(?:md|markdown|mdown|mkd|mkdn|mdtxt|mdtext)$/i.test((e || "").trim());
	}
	async handlePaste(e) {
		if (!this.shouldHandlePaste(e) || !e.clipboardData) return;
		let t = Array.from(e.clipboardData.items || []).map((e) => e.kind === "file" && e.getAsFile ? e.getAsFile() : null).filter((e) => !!e), n = t.length > 0 ? t : Array.from(e.clipboardData.files || []), r = e.clipboardData.getData("text/plain");
		n.length === 0 && (!r || !r.trim()) || (e.preventDefault(), e.stopPropagation(), await this.ingestPastedPayload(n, r));
	}
	async handlePasteFromToolbar() {
		if (!this.element || !this.viewerAcceptsGlobalInput()) {
			this.showMessage("Open the Viewer tab to paste");
			return;
		}
		if (document.visibilityState === "visible") try {
			let { files: e, text: t } = await this.readSystemClipboard();
			if (e.length === 0 && (!t || !t.trim())) {
				this.showMessage("Clipboard is empty or access denied");
				return;
			}
			await this.ingestPastedPayload(e, t);
		} catch (e) {
			console.error("[ViewerView] Paste from toolbar failed:", e), this.showMessage("Could not read clipboard — check permissions");
		}
	}
	async readSystemClipboard() {
		let e = [], t;
		if (typeof navigator > "u" || !navigator.clipboard) return {
			files: e,
			text: t
		};
		try {
			if (typeof navigator.clipboard.read == "function") {
				let n = await Promise.race([navigator.clipboard.read(), new Promise((e) => globalThis.setTimeout(() => e([]), 3500))]), r = 0;
				for (let i of n) for (let n of i.types) {
					let a = n.toLowerCase();
					if (a === "text/html") continue;
					let o;
					try {
						o = await i.getType(n);
					} catch {
						continue;
					}
					if (!o || o.size === 0) continue;
					if (a === "text/plain") {
						if (o.size > I) continue;
						let e = await o.text();
						e && (t ??= e);
						continue;
					}
					if (a.startsWith("image/")) {
						let t = a.split("/")[1] || "img";
						e.push(new File([o], `paste.${t}`, { type: n }));
						continue;
					}
					if (a === "text/markdown" || a === "text/x-markdown" || a === "text/md" || a.includes("markdown")) {
						if (o.size > I) continue;
						e.push(new File([o], `pasted-${r++}.md`, { type: "text/markdown" }));
						continue;
					}
					if (a.startsWith("text/")) {
						if (o.size > I) continue;
						e.push(new File([o], `pasted-${r++}.md`, { type: n }));
						continue;
					}
					let s = await this.sniffBlobAsUtf8MarkdownFile(o, r);
					s && (e.push(s), r++);
				}
				if (e.length > 0 || t && t.trim()) return {
					files: e,
					text: t
				};
			}
		} catch {}
		try {
			let e = await navigator.clipboard.readText();
			e && (t ??= e);
		} catch {}
		return {
			files: e,
			text: t
		};
	}
	async sniffBlobAsUtf8MarkdownFile(e, t) {
		if (e.size > 4 * 1024 * 1024) return null;
		let n = Math.min(e.size, 24576), r = e.slice(0, n), i = new Uint8Array(await r.arrayBuffer());
		if (i.length === 0 || i.includes(0)) return null;
		let a = 0;
		for (let e = 0; e < i.length; e++) {
			let t = i[e];
			(t === 9 || t === 10 || t === 13 || t >= 32 && t < 127 || t >= 160) && a++;
		}
		return a / i.length < .9 ? null : new File([e], `pasted-${t}.md`, { type: "text/markdown" });
	}
	async ingestPastedPayload(e, t) {
		if (e.length > 0) {
			let t = e.find((e) => this.isTextLikeFile(e)) || e[0];
			try {
				if (!this.isTextLikeFile(t)) {
					this.showMessage(`Unsupported file type for viewer: ${t.name || t.type || "binary file"}`);
					return;
				}
				let e = await t.text();
				this.setContent(e, t.name), this.showMessage(`Opened ${t.name || "pasted document"}`);
				return;
			} catch (e) {
				console.error("[ViewerView] Failed to read pasted file:", e), this.showMessage("Failed to read pasted file");
				return;
			}
		}
		let n = t;
		if (!(!n || !n.trim())) try {
			let e = n.trim();
			if (e.length <= L && (s(e) || o(e))) {
				let t = await i(e, {
					namePrefix: "pasted-doc",
					uriComponent: !0
				});
				if (!this.isTextLikeFile(t.file)) {
					this.showMessage("Pasted data is not a text/markdown document");
					return;
				}
				let n = await t.file.text();
				this.setContent(n, t.file.name, null), this.showMessage("Opened pasted encoded document");
				return;
			}
			this.setContent(e, void 0, null), this.showMessage("Content pasted");
		} catch (e) {
			console.error("[ViewerView] Failed to process pasted data:", e), this.showMessage("Failed to process pasted content");
		}
	}
	isTextLikeFile(e) {
		let t = (e.name || "").toLowerCase(), n = (e.type || "").toLowerCase();
		return !n || n.startsWith("text/") || n.includes("markdown") || n.includes("json") || n.includes("xml") ? !0 : [
			".md",
			".markdown",
			".mdown",
			".mkd",
			".mkdn",
			".mdtxt",
			".mdtext",
			".txt",
			".json",
			".xml",
			".html",
			".htm",
			".css",
			".js",
			".ts",
			".tsx",
			".yml",
			".yaml"
		].some((e) => t.endsWith(e));
	}
	shouldHandlePaste(e) {
		if (!this.element || !this.viewerAcceptsGlobalInput() || document.visibilityState !== "visible") return !1;
		let t = e.target;
		if (!t || t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable) return !1;
		let n = this.viewBranchesContain(document.activeElement), r = this.viewBranchesContain(t), i = this.isPointerInView || this.viewBranchesHover();
		return r || n || i;
	}
	saveState() {
		this.stateManager.save({
			content: this.contentRef.value,
			filename: this.options.filename
		});
	}
	showMessage(e) {
		this.shellContext ? this.shellContext.showMessage(e) : console.log(`[Viewer] ${e}`);
	}
	normalizeMarkdownExtensionFlags(e) {
		return (e || H).split("").filter((e, t, n) => /[dgimsuvy]/.test(e) && n.indexOf(e) === t).join("") || H;
	}
	applyCustomMarkdownExtensions(e) {
		let t = e || "", n = Array.isArray(this.markdownSettings.extensions) ? this.markdownSettings.extensions : [];
		if (n.length === 0 || !t) return t;
		let r = t;
		for (let e of n) {
			if (!e || e.enabled === !1) continue;
			let t = (e.pattern || "").trim();
			if (t) try {
				let n = new RegExp(t, this.normalizeMarkdownExtensionFlags(e.flags));
				r = r.replace(n, e.replacement ?? "");
			} catch (n) {
				console.warn("[Viewer] Skipping invalid markdown extension rule:", {
					id: e.id,
					pattern: t,
					flags: e.flags,
					error: n
				});
			}
		}
		return r;
	}
	applyMarkdownPlugins(e) {
		let t = e || "";
		return t && (this.markdownSettings.plugins.smartTypography && (t = t.replace(/\.\.\./g, "&hellip;").replace(/(^|[^\-])---([^\-]|$)/g, "$1&mdash;$2").replace(/(^|[^\-])--([^\-]|$)/g, "$1&ndash;$2")), this.markdownSettings.plugins.softBreaksAsBr && (t = t.replace(/([^\n])\n(?!\n)/g, "$1  \n")), t);
	}
	getFontFamilyFromPreset() {
		let e = this.markdownSettings.fontFamily;
		return e === "serif" ? "Georgia, Cambria, 'Times New Roman', Times, serif" : e === "mono" ? "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace" : e === "sans" ? "Inter, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" : "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";
	}
	applyRenderedLinkBehavior(e) {
		let t = Array.from(e.querySelectorAll("a[href]"));
		for (let e of t) {
			let t = (e.getAttribute("href") || "").trim();
			if (!t) continue;
			let n = t.startsWith("#"), r = /^(https?:)?\/\//i.test(t);
			this.markdownSettings.plugins.externalLinksNewTab && r && !n ? (e.target = "_blank", e.rel = "noopener noreferrer") : (e.target === "_blank" && e.removeAttribute("target"), e.rel === "noopener noreferrer" && e.removeAttribute("rel"));
		}
	}
	createLayerBlock(e, t) {
		let n = (t || "").trim();
		return n ? `@layer ${e} {\n${n}\n}` : "";
	}
	normalizeUserCssForLayer(e, t) {
		let n = (t || "").trim();
		return n ? n.startsWith("@layer") ? n : this.createLayerBlock(e, n) : "";
	}
	getPresetVariablesCss() {
		let e = this.markdownSettings.preset;
		return e === "classic" ? "\n                --md-letter-spacing: 0;\n                --md-h1-size: 2.05em;\n                --md-h2-size: 1.65em;\n                --md-p-margin: 1.05em;\n            " : e === "compact" ? "\n                --md-letter-spacing: -0.01em;\n                --md-h1-size: 1.8em;\n                --md-h2-size: 1.45em;\n                --md-p-margin: 0.72em;\n            " : e === "paper" ? "\n                --md-letter-spacing: 0.005em;\n                --md-h1-size: 2em;\n                --md-h2-size: 1.6em;\n                --md-p-margin: 0.95em;\n            " : "\n            --md-letter-spacing: 0;\n            --md-h1-size: 1.95em;\n            --md-h2-size: 1.55em;\n            --md-p-margin: 0.9em;\n        ";
	}
	buildCustomStyleText() {
		let e = this.markdownSettings.page.size || "auto", t = this.markdownSettings.page.orientation || "portrait", n = Number.isFinite(this.markdownSettings.page.marginMm) ? Math.max(5, Math.min(40, this.markdownSettings.page.marginMm)) : 12, r = Number.isFinite(this.markdownSettings.printScale) ? Math.max(.5, Math.min(1.5, this.markdownSettings.printScale)) : 1, i = Number.isFinite(this.markdownSettings.fontSizePx) ? Math.max(12, Math.min(26, this.markdownSettings.fontSizePx)) : 16, a = Number.isFinite(this.markdownSettings.lineHeight) ? Math.max(1.1, Math.min(2.2, this.markdownSettings.lineHeight)) : 1.7;
		Number.isFinite(this.markdownSettings.contentMaxWidthPx) && Math.max(500, Math.min(1400, this.markdownSettings.contentMaxWidthPx));
		let o = `
            .cw-view-viewer-shell .markdown-viewer-content {
                font-family: ${this.getFontFamilyFromPreset()};
                font-size: ${i}px;
                line-height: ${a};
                letter-spacing: var(--md-letter-spacing, 0);
                padding: 1rem 1.1rem 3rem;
            }

            .cw-view-viewer-shell .markdown-viewer-content h1 { font-size: var(--md-h1-size, 1.95em); }
            .cw-view-viewer-shell .markdown-viewer-content h2 { font-size: var(--md-h2-size, 1.55em); }
            .cw-view-viewer-shell .markdown-viewer-content p,
            .cw-view-viewer-shell .markdown-viewer-content li {
                margin-block: var(--md-p-margin, 0.9em);
            }

            .cw-view-viewer-shell .markdown-viewer-content {
                ${this.getPresetVariablesCss()}
            }
        `, s = `
            ${this.markdownSettings.modules.typography ? "" : "\n            .cw-view-viewer-shell .markdown-viewer-content .view-viewer__md-root p,\n            .cw-view-viewer-shell .markdown-viewer-content .view-viewer__md-root li,\n            .cw-view-viewer-shell .markdown-viewer-content p,\n            .cw-view-viewer-shell .markdown-viewer-content li {\n                margin-block: 0.35em;\n            }\n            .cw-view-viewer-shell .markdown-viewer-content .view-viewer__md-root h1,\n            .cw-view-viewer-shell .markdown-viewer-content .view-viewer__md-root h2,\n            .cw-view-viewer-shell .markdown-viewer-content .view-viewer__md-root h3,\n            .cw-view-viewer-shell .markdown-viewer-content h1,\n            .cw-view-viewer-shell .markdown-viewer-content h2,\n            .cw-view-viewer-shell .markdown-viewer-content h3 {\n                margin-block: 0.45em;\n            }"}

            ${this.markdownSettings.modules.lists ? "\n            .cw-view-viewer-shell .markdown-viewer-content .view-viewer__md-root ul,\n            .cw-view-viewer-shell .markdown-viewer-content .view-viewer__md-root ol {\n                margin-block: 0.65em;\n                padding-inline-start: 1.35em;\n            }\n            .cw-view-viewer-shell .markdown-viewer-content .view-viewer__md-root li {\n                margin-block: 0.28em;\n            }\n            .cw-view-viewer-shell .markdown-viewer-content .view-viewer__md-root li > ul,\n            .cw-view-viewer-shell .markdown-viewer-content .view-viewer__md-root li > ol {\n                margin-block: 0.4em;\n            }" : "\n            .cw-view-viewer-shell .markdown-viewer-content .view-viewer__md-root ul,\n            .cw-view-viewer-shell .markdown-viewer-content .view-viewer__md-root ol {\n                padding-inline-start: 1.15em;\n            }"}

            ${this.markdownSettings.modules.codeBlocks ? "\n            .cw-view-viewer-shell .markdown-viewer-content pre {\n                border-radius: 10px;\n                padding: 0.8rem 1rem;\n                overflow-x: auto;\n            }\n            .cw-view-viewer-shell .markdown-viewer-content code {\n                font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace;\n                font-size: 0.92em;\n            }" : ""}

            ${this.markdownSettings.modules.tables ? "\n            .cw-view-viewer-shell .markdown-viewer-content table {\n                inline-size: 100%;\n                border-collapse: collapse;\n                margin: 1rem 0;\n            }\n            .cw-view-viewer-shell .markdown-viewer-content th,\n            .cw-view-viewer-shell .markdown-viewer-content td {\n                border: 1px solid color-mix(in oklab, currentColor 18%, transparent);\n                padding: 0.45rem 0.6rem;\n                text-align: left;\n                vertical-align: top;\n            }" : ""}

            ${this.markdownSettings.modules.blockquotes ? "\n            .cw-view-viewer-shell .markdown-viewer-content blockquote {\n                border-inline-start: 4px solid color-mix(in oklab, currentColor 30%, transparent);\n                padding-inline: 1rem;\n                margin-inline: 0;\n            }" : ""}

            ${this.markdownSettings.modules.media ? "\n            .cw-view-viewer-shell .markdown-viewer-content img,\n            .cw-view-viewer-shell .markdown-viewer-content video {\n                max-inline-size: 100%;\n                border-radius: 8px;\n                display: block;\n                margin-inline: auto;\n            }" : ""}
        `, c = `
            @media print {
                .cw-view-viewer-shell .markdown-viewer-content {
                    zoom: ${r};
                }
                ${this.markdownSettings.modules.printBreaks ? "\n                .cw-view-viewer-shell .markdown-viewer-content h1,\n                .cw-view-viewer-shell .markdown-viewer-content h2,\n                .cw-view-viewer-shell .markdown-viewer-content h3 {\n                    break-after: avoid-page;\n                    break-inside: avoid;\n                }\n                .cw-view-viewer-shell .markdown-viewer-content pre,\n                .cw-view-viewer-shell .markdown-viewer-content table,\n                .cw-view-viewer-shell .markdown-viewer-content blockquote {\n                    break-inside: avoid;\n                }" : ""}
            }
        `, l = [this.userStyleModules.screenCss, (this.markdownSettings.customCss || "").trim()].map((e) => (e || "").trim()).filter(Boolean).join("\n\n"), u = [this.userStyleModules.printCss, (this.markdownSettings.printCss || "").trim()].map((e) => (e || "").trim()).filter(Boolean).join("\n\n"), d = e === "auto" ? "" : `@page { size: ${e} ${t}; margin: ${n}mm; }`;
		return [
			`@layer ${U.join(", ")};`,
			this.createLayerBlock("rs-md-system", o),
			this.createLayerBlock("rs-md-modules", s),
			this.normalizeUserCssForLayer("rs-md-user", l),
			this.createLayerBlock("rs-md-print", `${c}\n${d}`),
			this.normalizeUserCssForLayer("rs-md-user-print", u ? `@media print {\n${u}\n}` : "")
		].filter(Boolean).join("\n\n");
	}
	async loadUserStyleModules() {
		let t = {
			screenCss: "",
			printCss: ""
		};
		try {
			let r = e(null, "/user/styles/", { create: !0 });
			await r;
			let i = (await Array.fromAsync(r.entries?.() ?? [])).map((e) => String(e?.[0] || "").trim()).filter((e) => !!e && e.toLowerCase().endsWith(".css")).sort((e, t) => e.localeCompare(t)), a = [], o = [];
			for (let e of i) {
				let t = await n(`/user/styles/${e}`).catch(() => null), r = t ? await t.text().catch(() => "") : "";
				r.trim() && (e.toLowerCase().endsWith(".print.css") ? o.push(`/* ${e} */\n${r}`) : a.push(`/* ${e} */\n${r}`));
			}
			t.screenCss = a.join("\n\n").trim(), t.printCss = o.join("\n\n").trim();
		} catch (e) {
			console.warn("[Viewer] Failed to load /user/styles modules:", e);
		}
		this.userStyleModules = t;
	}
	applyCustomStyles() {
		this.customSheet &&= (t(this.customSheet), null);
		let e = this.buildCustomStyleText();
		if (e) {
			try {
				this.customSheet = a(e);
			} catch (e) {
				console.warn("[Viewer] Failed to load custom markdown styles:", e), this.customSheet = null;
			}
			this.syncAdoptedSheetsToShadow();
		}
	}
	markdownPipelineSignature(e) {
		return JSON.stringify({
			plugins: e.plugins,
			extensions: e.extensions
		});
	}
	async loadMarkdownSettings() {
		try {
			let e = (await f())?.appearance?.markdown, t = this.markdownPipelineSignature(this.markdownSettings), n = {
				preset: e?.preset || "default",
				fontFamily: e?.fontFamily || "system",
				fontSizePx: Number(e?.fontSizePx ?? 16),
				lineHeight: Number(e?.lineHeight ?? 1.7),
				contentMaxWidthPx: Number(e?.contentMaxWidthPx ?? 860),
				printScale: Number(e?.printScale ?? 1),
				page: {
					size: e?.page?.size || "auto",
					orientation: e?.page?.orientation || "portrait",
					marginMm: Number(e?.page?.marginMm ?? 12)
				},
				modules: {
					typography: (e?.modules?.typography ?? !0) !== !1,
					lists: (e?.modules?.lists ?? !0) !== !1,
					tables: (e?.modules?.tables ?? !0) !== !1,
					codeBlocks: (e?.modules?.codeBlocks ?? !0) !== !1,
					blockquotes: (e?.modules?.blockquotes ?? !0) !== !1,
					media: (e?.modules?.media ?? !0) !== !1,
					printBreaks: (e?.modules?.printBreaks ?? !0) !== !1
				},
				plugins: {
					smartTypography: !!e?.plugins?.smartTypography,
					softBreaksAsBr: !!e?.plugins?.softBreaksAsBr,
					externalLinksNewTab: (e?.plugins?.externalLinksNewTab ?? !0) !== !1
				},
				customCss: (e?.customCss || "").trim(),
				printCss: (e?.printCss || "").trim(),
				extensions: Array.isArray(e?.extensions) ? e.extensions : []
			}, r = this.markdownPipelineSignature(n);
			this.markdownSettings = n, await this.loadUserStyleModules(), this.applyCustomStyles(), r !== t && this.onRefresh();
		} catch (e) {
			console.warn("[Viewer] Failed to load markdown settings:", e);
		}
	}
	onMount() {
		console.log("[Viewer] Mounted"), G(), this._sheet ??= a(k), this.applyCustomStyles(), this.markdownSettingsPromise, this.isViewVisible = !0, this.refreshDocumentTheme();
	}
	onUnmount() {
		console.log("[Viewer] Unmounting"), this.disposeContentRefSubscription(), this.restoreViewerDocumentTheme(), this.saveState(), this.isViewVisible = !1, this.isPointerInView = !1, this.pasteController?.abort(), this.pasteController = null, this.windowDnDController?.abort(), this.windowDnDController = null, this.customSheet &&= (t(this.customSheet), null), t(this._sheet), this.element = null, this.slotProjectingHost = null;
	}
	onShow() {
		this._sheet ??= a(k), this.applyCustomStyles(), this.markdownSettingsPromise = this.loadMarkdownSettings(), this.isViewVisible = !0, this.refreshDocumentTheme(), console.log("[Viewer] Shown");
	}
	onHide() {
		this.saveState(), this.isViewVisible = !1, this.isPointerInView = !1, console.log("[Viewer] Hidden");
	}
	onRefresh() {
		let e = this.queryViewerSlotted("[data-render-target]"), t = this.queryViewerSlotted("[data-raw-target]");
		e && t && this.renderMarkdown(this.contentRef.value, e, t);
	}
	async invokeChannelApi(e, t) {
		let n = typeof t == "object" && t && !Array.isArray(t) ? t : {};
		switch (e) {
			case p.SetColorScheme:
			case m.SetColorScheme: {
				let e = D(n) ?? "system";
				this.setViewerColorScheme(e);
				return;
			}
			case p.AttachToWorkcenter: return this.attachCurrentContentToWorkcenter().then(() => void 0);
			case p.OpenUrl:
			case p.OpenMarkdownUrl: {
				let e = String(n.url || "");
				return e ? this.openMarkdownFromUrl(e, typeof n.filename == "string" ? n.filename : void 0) : !1;
			}
			default: return this.handleMessage({
				type: e,
				data: {
					text: typeof n.text == "string" ? n.text : void 0,
					content: typeof n.content == "string" ? n.content : void 0,
					filename: typeof n.filename == "string" ? n.filename : void 0,
					url: typeof n.url == "string" ? n.url : void 0,
					source: typeof n.source == "string" ? n.source : void 0,
					path: typeof n.path == "string" ? n.path : void 0,
					src: typeof n.src == "string" ? n.src : void 0,
					file: n.file instanceof File ? n.file : void 0,
					files: Array.isArray(n.files) ? n.files.filter((e) => e instanceof File) : void 0
				}
			}).then(() => void 0);
		}
	}
	viewIngressSupersededAfterAsync(e) {
		let t = e && typeof e == "object" && !Array.isArray(e) ? e.__ingressStamp : void 0;
		return v(this, t);
	}
	canHandleMessage(e) {
		return [
			"content-view",
			"content-load",
			"markdown-content",
			"content-share",
			"share-target-input",
			p.SetColorScheme,
			m.SetColorScheme
		].includes(e);
	}
	async handleMessage(e) {
		let t = e;
		if (t.type === p.SetColorScheme || t.type === m.SetColorScheme) {
			let e = D(t.data?.colorScheme ?? t.data?.scheme ?? t.data?.theme ?? t.data) ?? "system";
			this.setViewerColorScheme(e);
			return;
		}
		let n = ((e) => {
			if (!e) return e;
			try {
				if (globalThis.location?.protocol !== "chrome-extension:") return e;
			} catch {
				return e;
			}
			let t = { ...e };
			for (let e of [
				"url",
				"source",
				"src",
				"path"
			]) {
				let n = t[e];
				typeof n == "string" && /^file:/i.test(n.trim()) && delete t[e];
			}
			return t;
		})(t.data) ?? t.data, r = t.metadata, i = r && typeof r.source == "string" ? r.source : "", a = r && typeof r.route == "string" ? String(r.route) : "", o = i.includes("launch-queue") || a.includes("launch-queue"), s = i.includes("share-target") || a.includes("share-target") || r && typeof r == "object" && !Array.isArray(r) && String(r.shareTarget ?? "") === "1", c = o || s || t.type === "share-target-input", l = typeof n?.filename == "string" && n.filename.trim().length > 0 ? n.filename.trim() : typeof n?.hint?.filename == "string" ? String(n.hint.filename).trim() : void 0, u = n?.file instanceof File ? n.file : null;
		if (Array.isArray(n?.files) && n.files.some((e) => e instanceof File) && (u = x(n.files.filter((e) => e instanceof File), {
			hintFilename: l,
			isTextLike: (e) => this.isTextLikeFile(e)
		}) ?? u), u) {
			let e = y(u);
			e.ok || (console.warn("[Viewer] Ingress file rejected:", e.reason, u.name), u = null);
		}
		let d = c && !!u && this.isTextLikeFile(u);
		if (u && this.isTextLikeFile(u) && (c || t.type === "content-load" || t.type === "content-view" || t.type === "markdown-content") && u) try {
			let e = await u.text();
			if (this.viewIngressSupersededAfterAsync(r)) return;
			let t = n?.source || n?.src || n?.path || u.name;
			this.ingestOpenedMarkdownBody(e || "", n?.filename || u.name, t);
			return;
		} catch (e) {
			if (console.warn("[Viewer] Failed to read prioritized file payload, falling back to inline/url:", e), c) {
				let e = n?.source || n?.src || n?.path || u.name;
				this.setContent(`> Failed to read transferred file:\n> ${u.name}`, n?.filename || u.name, e);
				return;
			}
		}
		if (!d && (n?.text || n?.content)) {
			let e = n.text || n.content || "", t = n.source || n.src || n.path;
			this.ingestOpenedMarkdownBody(e, n.filename, t);
			return;
		}
		if (n?.url) {
			let e = n.source || n.src || n.path || n.url, t = await this.openMarkdownFromUrl(e, n.filename);
			if (this.viewIngressSupersededAfterAsync(r)) return;
			if (!t) {
				let t = `> Failed to load markdown from:\n> ${e}`;
				this.setContent(t, n.filename, /^file:/i.test(String(e || "").trim()) ? null : e);
			}
			return;
		}
		let f = n?.file instanceof File ? n.file : Array.isArray(n?.files) ? n?.files.find((e) => e instanceof File) ?? null : null;
		if (f ??= l && Array.isArray(n?.files) ? n.files.filter((e) => e instanceof File).find((e) => e.name === l) ?? null : null, f) {
			let e = y(f);
			if (!e.ok) {
				console.warn("[Viewer] File candidate rejected:", e.reason, f.name);
				return;
			}
			try {
				let e = await f.text();
				if (this.viewIngressSupersededAfterAsync(r)) return;
				let t = n?.source || n?.src || n?.path || f.name;
				this.ingestOpenedMarkdownBody(e || "", n?.filename || f.name, t);
			} catch (e) {
				console.warn("[Viewer] Failed to read markdown file payload:", e);
			}
		}
	}
}), ee = $;
//#endregion
export { $ as CwViewViewer, $ as ViewerView, Q as TAG, E as coerceViewerColorScheme, ee as default, D as normalizeViewerSetColorSchemePayload, T as resolveViewerColorSchemePreference, O as resolveViewerOptionsColorScheme, Y as warmViewerMarkdownEngine };
