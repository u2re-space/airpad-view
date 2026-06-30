import { Ut as e, tr as t } from "./src-C-qx_Mx3.js";
import "./src-Be-NRxK4.js";
import { f as n } from "./views-AD17wavT.js";
import { t as r } from "./shells-BGvuhMHO.js";
import { t as i } from "./shell-slots-Cg4mOSVd.js";
//#region ../../shells/minimal-shell/src/minimal.scss?inline
var a = "@charset \"UTF-8\";\n/* Minimal shell: layered tokens + nav/content grid, WCO-safe, shadow slot views. */\n/*\n * Markdown viewer theme bridge for shells that render views inside an open shadow root (cw-shell-minimal, cw-shell-immersive).\n *\n * WHY: Document-level rules such as `html[data-theme=\"light\"] .cw-view-viewer-shell` and `:root:has([data-view=\"viewer\"])`\n * never match nodes inside shadow trees — selectors cannot descend from `html` through the shadow boundary.\n *\n * IMPORTANT: View hosts (`cw-view-*`) are assigned to `<slot name=\"view\">`. They are **not** descendants of `.app-shell`\n * in the shadow tree's selector model — plain `:host ... [data-view=\"viewer\"]` from the shell sheet **does not match**\n * slotted nodes. Use `::slotted(...)` so tokens are applied to the real host element; custom properties then **inherit**\n * into each view's shadow root (toolbar, prose) without piercingShadow manually.\n */\n@layer shell.tokens, shell.base, shell.components, shell.utilities, shell.markdown-host-theme, shell.overrides;\n@layer shell.tokens {\n  :where(:root, .app-shell, .app-shell[data-style=minimal]):has(.app-shell, .app-shell[data-style=minimal]) {\n    color-scheme: light dark;\n    /* colors */\n    --shell-bg: light-dark(var(--color-surface), var(--color-surface));\n    --shell-fg: light-dark(var(--color-on-surface), var(--color-on-surface));\n    --shell-nav-bg: light-dark(var(--color-surface-container-high), var(--color-surface-container-high));\n    --shell-nav-fg: light-dark(var(--color-on-surface), var(--color-on-surface));\n    --shell-nav-border: light-dark(var(--color-outline-variant), var(--color-outline-variant));\n    --shell-btn-hover: light-dark(var(--color-surface-container, var(--color-surface-container)), var(--color-surface-container, var(--color-surface-container)));\n    --shell-btn-active-bg: light-dark(var(--color-surface-container-low, var(--color-surface-container-low)), var(--color-surface-container-low, var(--color-surface-container-low)));\n    --shell-btn-active-fg: light-dark(var(--color-on-surface), var(--color-on-surface));\n    --shell-status-bg: light-dark(var(--color-surface-container-low, var(--color-surface-container-low)), var(--color-surface-container-low, var(--color-surface-container-low)));\n    --shell-status-fg: light-dark(var(--color-on-surface), var(--color-on-surface));\n    /* layout */\n    --shell-nav-height: var(--shell-nav-height-base, 48px);\n    --shell-sidebar-width: 0;\n    --shell-status-height: 24px;\n    --shell-padding: 0;\n  }\n  :is(:root, html):has([data-shell=minimal][data-theme=dark]) {\n    --shell-bg: var(--color-surface);\n    --shell-fg: var(--color-on-surface);\n    --shell-nav-bg: var(--color-surface-container-high);\n    --shell-nav-fg: var(--color-on-surface);\n    --shell-nav-border: var(--color-outline-variant);\n  }\n  /* cw-shell-minimal :host — `.app-shell` is in shadow; use `:host` only. */\n  :host {\n    --shell-bg: light-dark(var(--color-surface), var(--color-surface));\n    --shell-nav-bg: light-dark(var(--color-surface-container-high), var(--color-surface-container-high));\n  }\n  :host([data-theme=dark]) {\n    --shell-bg: var(--color-surface);\n    --shell-nav-bg: var(--color-surface-container-high);\n  }\n}\n@layer shell.base {\n  /* Match toolbar chrome; avoids host vs .app-shell__nav mismatch when meta/theme updates */\n  :host {\n    background-color: var(--shell-nav-bg);\n  }\n  :where(.app-shell, .app-shell[data-style=minimal]) {\n    position: absolute;\n    inset: 0;\n    display: grid;\n    /* Single chrome column: nav + main live inside `.app-shell__viewport` (shared layer stack with underlying/overlays). */\n    grid-template-rows: [viewport-row] minmax(0, 1fr);\n    grid-template-columns: minmax(0, 1fr);\n    /* stretch: center shrink-wraps grid items (viewer chrome looked like a small floating island in CRX). */\n    align-items: stretch;\n    justify-items: stretch;\n    justify-content: start;\n    gap: 0;\n    padding: 0;\n    margin: 0;\n    inline-size: stretch;\n    block-size: stretch;\n    max-inline-size: stretch;\n    max-block-size: stretch;\n    min-inline-size: 0;\n    min-block-size: 0;\n    overflow: hidden;\n    background: var(--color-background);\n    background-color: var(--shell-bg);\n    color: var(--shell-fg);\n    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, \"Helvetica Neue\", Arial, BlinkMacSystemFont, \"Segoe UI\", sans-serif;\n    color-scheme: light dark;\n    contain: strict;\n    -webkit-tap-highlight-color: transparent;\n    transition: background-color 0.2s ease, color 0.2s ease;\n    border-radius: 0px;\n  }\n  :where(.app-shell, .app-shell[data-style=minimal])[data-theme=light] {\n    color-scheme: light;\n  }\n  :where(.app-shell, .app-shell[data-style=minimal])[data-theme=dark] {\n    color-scheme: dark;\n  }\n  @media print {\n    :where(.app-shell, .app-shell[data-style=minimal]) {\n      display: contents !important;\n    }\n  }\n}\n@layer shell.components {\n  :where(.app-shell, .app-shell[data-style=minimal]) {\n    border-radius: 0px;\n  }\n  :where(.app-shell, .app-shell[data-style=minimal]) .loading-spinner {\n    inline-size: 32px;\n    block-size: 32px;\n    border: 3px solid rgba(128, 128, 128, 0.2);\n    border-block-start-color: var(--shell-btn-active-fg);\n    border-radius: 50%;\n    animation: app-shell-spin 0.8s linear infinite;\n  }\n  :where(.app-shell, .app-shell[data-style=minimal]) slot {\n    display: contents !important;\n  }\n  .app-shell__nav {\n    grid-row: shell-nav-row;\n    grid-column: 1;\n    position: relative;\n    z-index: 1;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-shrink: 0;\n    gap: var(--gap-sm, 0.5rem);\n    box-sizing: border-box;\n    /* At least one row of toolbar; grow to cover WCO title-bar band when taller */\n    min-block-size: max(var(--shell-nav-height) + max(env(safe-area-inset-top, 0px), env(titlebar-area-y, 0px)), env(titlebar-area-y, 0px) + env(titlebar-area-height, 0px));\n    block-size: auto;\n    padding-block-start: max(env(safe-area-inset-top, 0px), env(titlebar-area-y, 0px));\n    padding-block-end: 0;\n    padding-inline-start: max(env(safe-area-inset-left, 0px), env(titlebar-area-x, 0px), var(--space-md, 0.75rem));\n    padding-inline-end: max(env(safe-area-inset-right, 0px), max(0px, 100vi - env(titlebar-area-x, 0px) - env(titlebar-area-width, 100vi)), var(--space-md, 0.75rem));\n    margin: 0;\n    background: var(--shell-nav-bg);\n    background-color: var(--shell-nav-bg);\n    border-block-end: 1px solid var(--shell-nav-border);\n    transition: background-color var(--motion-normal, 0.2s ease), border-color var(--motion-normal, 0.2s ease);\n    border-radius: 0px;\n  }\n  .app-shell__nav select {\n    min-block-size: 0px !important;\n    block-size: fit-content !important;\n    max-block-size: min(2rem, 100%) !important;\n    box-sizing: border-box !important;\n    padding-block: 0.125rem !important;\n  }\n  .app-shell__nav-left,\n  .app-shell__nav-right {\n    display: flex;\n    align-items: center;\n  }\n  .app-shell__nav-left select,\n  .app-shell__nav-right select {\n    min-block-size: 0px !important;\n    block-size: fit-content !important;\n    max-block-size: min(2rem, 100%) !important;\n    box-sizing: border-box !important;\n    padding-block: 0.125rem !important;\n  }\n  .app-shell__nav-left {\n    gap: var(--gap-xs, 0.25rem);\n  }\n  .app-shell__nav-right {\n    gap: var(--gap-sm, 0.5rem);\n  }\n  .app-shell__nav-right > * {\n    display: flex;\n    align-items: center;\n    gap: var(--gap-xs, 0.25rem);\n  }\n  /* CWS / cwsp: reach :8434 when there is no address bar (PWA, embedded). */\n  .app-shell__admin-door {\n    flex-shrink: 0;\n    font-size: 0.7rem;\n    font-weight: 700;\n    letter-spacing: 0.04em;\n    padding: 0.3rem 0.5rem;\n    border-radius: var(--radius-sm, 6px);\n    border: 1px solid color-mix(in srgb, var(--color-error, #c62828) 40%, var(--shell-nav-border));\n    background: color-mix(in srgb, var(--color-error, #c62828) 16%, var(--shell-nav-bg));\n    color: color-mix(in srgb, var(--color-error, #b71c1c) 70%, var(--shell-nav-fg));\n    cursor: pointer;\n    -webkit-tap-highlight-color: transparent;\n    transition: background-color 0.15s ease, border-color 0.15s ease;\n  }\n  .app-shell__admin-door:hover {\n    background: color-mix(in srgb, var(--color-error, #c62828) 24%, var(--shell-nav-bg));\n  }\n  .app-shell__admin-door:active {\n    background: color-mix(in srgb, var(--color-error, #c62828) 30%, var(--shell-nav-bg));\n  }\n  /*\n   * WCO: drag empty chrome to move the window; keep controls clickable.\n   * https://developer.mozilla.org/en-US/docs/Web/API/Window_Controls_Overlay_API\n   */\n  @media (display-mode: window-controls-overlay) {\n    :where(.app-shell, .app-shell[data-style=minimal]) .app-shell__nav {\n      -webkit-app-region: drag;\n      app-region: drag;\n    }\n    :where(.app-shell, .app-shell[data-style=minimal]) .app-shell__nav-left,\n    :where(.app-shell, .app-shell[data-style=minimal]) .app-shell__nav-right {\n      -webkit-app-region: no-drag;\n      app-region: no-drag;\n    }\n  }\n  /* Icon-only theme cycle (replaces <select>); matches nav button hit target */\n  .shell-theme-cycle-btn {\n    padding-inline: var(--space-sm, 0.5rem);\n    min-inline-size: 2.5rem;\n    justify-content: center;\n  }\n  .shell-theme-cycle-btn ui-icon {\n    margin: 0;\n  }\n  .app-shell__nav-btn {\n    display: flex;\n    align-items: center;\n    gap: var(--gap-sm, 0.5rem);\n    padding: var(--space-xs, 0.5rem) var(--space-md, 0.75rem);\n    border: none;\n    border-radius: var(--radius-lg, 8px);\n    background: transparent;\n    color: var(--shell-fg);\n    font-size: var(--text-sm, 0.875rem);\n    font-weight: var(--font-weight-medium, 500);\n    cursor: pointer;\n    transition: background-color var(--motion-fast, 0.15s ease), color var(--motion-fast, 0.15s ease);\n    white-space: nowrap;\n    user-select: none;\n    line-height: normal;\n    block-size: max-content;\n    min-block-size: 2.5rem;\n    flex-shrink: 0;\n  }\n  .app-shell__nav-btn ui-icon {\n    --icon-size: clamp(1.25rem, 5.5vmin, 1.75rem);\n    font-size: var(--icon-size);\n    opacity: 0.8;\n    flex-shrink: 0;\n    min-inline-size: 1.25rem;\n    min-block-size: 1.25rem;\n  }\n  .app-shell__nav-btn:hover {\n    background-color: var(--shell-btn-hover);\n  }\n  .app-shell__nav-btn:active {\n    background-color: var(--shell-btn-active-bg);\n    color: var(--shell-btn-active-fg);\n  }\n  .app-shell__nav-btn:focus-visible {\n    outline: 2px solid var(--shell-btn-active-fg);\n    outline-offset: 2px;\n    box-shadow: var(--focus-ring, none);\n  }\n  .app-shell__nav-btn.active {\n    background-color: var(--shell-btn-active-bg);\n    color: var(--shell-btn-active-fg);\n  }\n  .app-shell__nav-btn.active ui-icon {\n    opacity: 1;\n  }\n  /* Stacked layers: underlying (absolute) → chrome grid (nav + main, z-index 1) → overlays (absolute).\n   * `display: contents` on slots lifts slotted views into this grid when applicable. */\n  .app-shell__viewport {\n    grid-row: viewport-row;\n    display: grid;\n    grid-template-rows: [shell-nav-row] auto [shell-main-row] minmax(0, 1fr);\n    grid-template-columns: minmax(0, 1fr);\n    position: relative;\n    min-inline-size: 0;\n    min-block-size: 0;\n    overflow: hidden;\n    isolation: isolate;\n    align-self: stretch;\n  }\n  .app-shell__underlying {\n    /* Full viewport bleed behind nav + main; does not consume grid rows (`position: absolute`). */\n    position: absolute;\n    inset: 0;\n    z-index: 0;\n    pointer-events: none;\n    overflow: hidden;\n    min-inline-size: 0;\n    min-block-size: 0;\n  }\n  .app-shell__underlying > slot::slotted(*) {\n    pointer-events: auto;\n  }\n  .app-shell__overlays {\n    position: absolute;\n    inset: 0;\n    z-index: 10000;\n    pointer-events: none;\n    overflow: visible;\n  }\n  .app-shell__overlays > slot::slotted(*) {\n    pointer-events: auto;\n  }\n  .app-shell__overlays > * {\n    pointer-events: auto;\n  }\n  .app-shell__content {\n    container-type: size;\n    /* layout + style: avoid `strict` paint containment fighting view/token repaints after async theme loads */\n    contain: layout style;\n    grid-row: shell-main-row;\n    grid-column: 1;\n    position: relative;\n    z-index: 1;\n    /* Chrome column: optional boot loader row + minmax main (grid boxes for slotted views via `display: contents` on `<slot>`). */\n    display: grid;\n    grid-template-rows: auto minmax(0, 1fr);\n    grid-template-columns: minmax(0, 1fr);\n    inline-size: stretch;\n    block-size: stretch;\n    max-inline-size: stretch;\n    max-block-size: stretch;\n    min-inline-size: 0;\n    min-block-size: 0;\n    padding: 0;\n    margin: 0;\n    border: none 0px transparent;\n    /* Explicit main surface — avoids transparent flashes vs nav / host during theme-color churn */\n    background: var(--shell-bg);\n    background-color: var(--shell-bg);\n    overflow: auto;\n    scrollbar-width: thin;\n    scrollbar-color: var(--shell-scrollbar, rgba(128, 128, 128, 0.3)) transparent;\n    box-sizing: border-box;\n    border-radius: 0px;\n  }\n  .app-shell__content slot:not([name])::slotted([data-view=explorer]) {\n    display: flex !important;\n    flex-direction: column !important;\n    min-block-size: 0 !important;\n    block-size: 100% !important;\n    max-block-size: 100% !important;\n    overflow: hidden !important;\n  }\n  .app-shell__content {\n    /*\n     * Default-slot views live in light DOM; descendant selectors do not cross shadow — use ::slotted.\n     */\n  }\n  .app-shell__content slot:not([name])::slotted([data-view]) {\n    grid-row: 2;\n    position: absolute;\n    inset: 0;\n    overflow: auto;\n    scrollbar-width: thin;\n    inline-size: stretch;\n    block-size: stretch;\n    min-inline-size: 0;\n    min-block-size: fit-content;\n  }\n  .app-shell__content slot:not([name])::slotted([data-view=settings]),\n  .app-shell__content slot:not([name])::slotted(.view-settings),\n  .app-shell__content slot:not([name])::slotted([data-view=network]),\n  .app-shell__content slot:not([name])::slotted(.cw-network-view-host) {\n    overflow: hidden;\n    min-block-size: 0;\n    block-size: 100%;\n    max-block-size: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  .app-shell__content {\n    /*\n     * WHY: Some view hosts override `hidden` or stack absolutely — force inert stacking\n     * so the inactive view cannot intercept scroll/pointer (minimal single-slot shell).\n     */\n  }\n  .app-shell__content > [data-view][hidden],\n  .app-shell__content slot:not([name])::slotted([hidden]),\n  .app-shell__content slot:not([name])::slotted([data-view][hidden]) {\n    display: none !important;\n    pointer-events: none !important;\n    visibility: hidden !important;\n  }\n  .app-shell__content slot:not([name])::slotted(*) {\n    grid-row: 2;\n    min-block-size: 0;\n    min-inline-size: 0;\n    overflow: auto;\n  }\n  .app-shell__content::-webkit-scrollbar {\n    inline-size: 8px;\n  }\n  .app-shell__content::-webkit-scrollbar-track {\n    background: transparent;\n  }\n  .app-shell__content::-webkit-scrollbar-thumb {\n    background-color: rgba(128, 128, 128, 0.4);\n    border-radius: 4px;\n  }\n  .app-shell__status {\n    position: fixed;\n    inset-block-end: var(--space-2xl, 1.5rem);\n    inset-inline-start: 50%;\n    z-index: 9999;\n    padding: var(--space-md, 0.75rem) var(--space-xl, 1.5rem);\n    background-color: var(--shell-status-bg);\n    color: var(--shell-status-fg);\n    border-radius: var(--radius-lg, 8px);\n    font-size: var(--text-sm, 0.875rem);\n    font-weight: var(--font-weight-medium, 500);\n    box-shadow: var(--elev-3, 0 4px 12px rgba(0, 0, 0, 0.15));\n    transform: translateX(-50%);\n    animation: app-shell-status-enter 0.2s ease-out;\n  }\n  .app-shell__status:empty, .app-shell__status[hidden] {\n    display: none;\n  }\n  .app-shell__loading {\n    position: absolute;\n    inset: 0;\n    z-index: 20;\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: var(--space-lg, 1rem);\n    inline-size: stretch;\n    block-size: stretch;\n    max-inline-size: stretch;\n    max-block-size: stretch;\n    min-inline-size: 0;\n    min-block-size: 0;\n    padding: var(--space-2xl, 2rem);\n  }\n  .app-shell__loading .loading-spinner {\n    inline-size: 32px;\n    block-size: 32px;\n    border: 3px solid var(--color-outline-variant);\n    border-top-color: var(--color-primary);\n    border-radius: 50%;\n    animation: app-shell-spin 0.8s linear infinite;\n  }\n}\n@layer shell.utilities {\n  @keyframes app-shell-spin {\n    to {\n      transform: rotate(1turn);\n    }\n  }\n  @keyframes app-shell-status-enter {\n    from {\n      opacity: 0;\n      transform: translate(-50%, 0.5rem);\n    }\n    to {\n      opacity: 1;\n      transform: translate(-50%, 0);\n    }\n  }\n}\n@layer shell.markdown-host-theme {\n  /* WHY: Viewer/markdown theme selectors scoped under `html[…]` do not pierce this shadow root. */\n  /* Pin viewer surface tokens on the slotted light-DOM host — survives late `:root` / Veela token updates */\n  :host([data-theme=light]) ::slotted([data-view=viewer]) {\n    color-scheme: light;\n    --view-bg: #f4f6fa;\n    --view-fg: #1a1a1a;\n    --view-toolbar-bg: rgba(0, 0, 0, 0.06);\n    --view-btn-hover-bg: rgba(0, 0, 0, 0.07);\n    --view-code-bg: #f0f2f5;\n    --view-blockquote-bg: rgba(0, 0, 0, 0.03);\n    --color-on-surface: #2d3748;\n    --color-primary: #2563eb;\n    /* Toolbar row (inherited into viewer shadow — replaces nested .view-viewer__toolbar rules) */\n    --viewer-toolbar-row-fill: #e8ecf4;\n    --view-picon-fill: #1e293b;\n    --view-picon-fill-hover: #2563eb;\n    --color-surface-container-high: rgb(0 0 0 / 0.1);\n  }\n  :host([data-theme=dark]) ::slotted([data-view=viewer]) {\n    color-scheme: dark;\n    --view-bg: #0b0d12;\n    --view-fg: #e8eaef;\n    --view-toolbar-bg: rgba(255, 255, 255, 0.06);\n    --view-btn-hover-bg: rgba(255, 255, 255, 0.08);\n    --view-code-bg: #161a22;\n    --view-blockquote-bg: rgba(255, 255, 255, 0.04);\n    --color-on-surface: #c4c9d4;\n    --color-primary: #8ab4ff;\n    --viewer-toolbar-row-fill: #151f2e;\n    --view-picon-fill: #e5e7eb;\n    --view-picon-fill-hover: var(--color-primary-hover, #93c5fd);\n    --color-surface-container-high: rgb(255 255 255 / 0.14);\n  }\n  /*\n   * Prose that stays in light DOM under the viewer host (slotted / adopted nodes).\n   * Descendant combinator after ::slotted is valid for elements under the assigned node.\n   */\n  :host([data-theme=light]) ::slotted([data-view=viewer]) :where(.markdown-body, [data-render-target].markdown-body) {\n    --color-surface: #ffffff;\n    --color-on-surface: #1a1a1a;\n    color-scheme: light;\n  }\n  :host([data-theme=dark]) ::slotted([data-view=viewer]) :where(.markdown-body, [data-render-target].markdown-body) {\n    --color-surface: #121212;\n    --color-on-surface: #e8eaef;\n    color-scheme: dark;\n  }\n}\n@layer shell.overrides {\n  @media (max-width: 640px) {\n    .app-shell__nav-label {\n      display: none;\n    }\n  }\n  /* Narrow viewports: keep ≥44px touch targets; do not shrink icons (was ~20px caps). */\n  @media (max-width: 768px) {\n    :where(.app-shell, .app-shell[data-style=minimal]) {\n      --shell-nav-height: 52px;\n    }\n    .app-shell__nav {\n      gap: var(--gap-xs, 0.35rem);\n    }\n    .app-shell__nav-btn {\n      min-block-size: 2.75rem;\n      padding: var(--space-sm, 0.5rem) var(--space-sm, 0.65rem);\n    }\n    .app-shell__nav-btn ui-icon {\n      --icon-size: clamp(1.35rem, 6vmin, 1.85rem);\n      font-size: var(--icon-size);\n      min-inline-size: 1.35rem;\n      min-block-size: 1.35rem;\n    }\n  }\n  @media print {\n    .app-shell__viewport {\n      display: contents !important;\n    }\n    .app-shell__underlying,\n    .app-shell__overlays {\n      display: none !important;\n    }\n    .app-shell__content {\n      overflow: visible;\n      contain: none;\n      display: contents !important;\n    }\n    .app-shell__content::-webkit-scrollbar {\n      display: none;\n    }\n    .app-shell__content > [data-view],\n    .app-shell__content slot:not([name])::slotted([data-view]) {\n      position: static !important;\n      inset: auto !important;\n      overflow: visible !important;\n      inline-size: auto !important;\n      block-size: auto !important;\n      max-block-size: none !important;\n      min-block-size: 0 !important;\n    }\n    [data-cw-view-host=true],\n    [data-cw-view-host=true] > .cw-view-element__mount,\n    .cw-view-viewer-shell,\n    .cw-view-viewer__prose,\n    [data-cw-viewer-prose],\n    md-view,\n    markdown-viewer,\n    .markdown-body,\n    .markdown-viewer-content,\n    .result-content {\n      overflow: visible !important;\n      contain: none !important;\n      container-type: normal !important;\n      block-size: auto !important;\n      max-block-size: none !important;\n    }\n    .app-shell__nav,\n    .app-shell__status {\n      display: none !important;\n    }\n  }\n}", o = [
	{
		id: "viewer",
		name: "Markdown",
		icon: "eye"
	},
	{
		id: "explorer",
		name: "Explorer",
		icon: "folder"
	},
	{
		id: "workcenter",
		name: "Work Center",
		icon: "lightning"
	},
	{
		id: "network",
		name: "Network",
		icon: "wifi-high"
	},
	{
		id: "airpad",
		name: "AirPad",
		icon: "hand-pointing"
	},
	{
		id: "settings",
		name: "Settings",
		icon: "gear"
	},
	{
		id: "history",
		name: "History",
		icon: "clock-counter-clockwise"
	}
].filter((e) => n(e.id)), s = new Set(o.map((e) => e.id));
function c(e) {
	return s.has(e);
}
var l = class extends r {
	id = "minimal";
	name = "Minimal";
	layout = {
		hasSidebar: !1,
		hasToolbar: !0,
		hasTabs: !1,
		supportsMultiView: !1,
		supportsWindowing: !1
	};
	createLayout() {
		let t = e`
            <div class="app-shell" data-shell="minimal">
                <div class="app-shell__viewport">
                    <div class="app-shell__underlying">
                        <slot name="${i.underlying}"></slot>
                    </div>
                    <nav class="app-shell__nav" role="navigation" aria-label="Main navigation">
                        <div class="app-shell__nav-left" data-nav-left>
                            ${this.renderNavButtons()}
                        </div>
                        <div class="app-shell__nav-right" data-shell-toolbar>
                            <!-- View-specific toolbar actions go here -->
                        </div>
                    </nav>
                    <main class="app-shell__content" data-shell-content role="main">
                        <div class="app-shell__loading">
                            <div class="loading-spinner"></div>
                            <span>Loading...</span>
                        </div>
                        <slot></slot>
                    </main>
                    <div class="app-shell__overlays" data-shell-overlays>
                        <slot name="${i.overlay}"></slot>
                    </div>
                </div>
                <div class="app-shell__status" data-shell-status hidden aria-live="polite"></div>
            </div>
        `;
		return this.setupNavClickHandlers(t), this.setupAdminDoorButton(t), t;
	}
	setupAdminDoorButton(t) {
		let n = t.querySelector("[data-shell-toolbar]");
		if (!n || n.querySelector("[data-admin-door]")) return;
		let r = e`
            <button
                type="button"
                class="app-shell__admin-door"
                data-admin-door
                aria-label="Open server admin (HTTPS)"
                title="Server admin (HTTPS :8434). Configure origins in Settings → Server."
            >ADM</button>
        `;
		n.appendChild(r), r.addEventListener("click", () => {
			import("./Settings-DoiAXxHI.js").then(({ loadSettings: e }) => e()).then((e) => import("./admin-doors-5YXXx4lp.js").then((e) => e.t).then(({ openAdminDoorFromCore: t }) => {
				t(e.core, "https");
			})).catch((e) => console.warn("[MinimalShell] admin door:", e));
		});
	}
	renderNavButtons() {
		let t = document.createDocumentFragment();
		for (let n of o) {
			let r = e`
                <button
                    class="app-shell__nav-btn"
                    data-view="${n.id}"
                    type="button"
                    title="${n.name}"
                >
                    <ui-icon icon="${n.icon}" icon-style="duotone"></ui-icon>
                    <span class="app-shell__nav-label">${n.name}</span>
                </button>
            `;
			t.appendChild(r);
		}
		return t;
	}
	setupNavClickHandlers(e) {
		let n = e.querySelector("[data-nav-left]");
		n && (n.addEventListener("click", (e) => {
			let t = e.target.closest("[data-view]");
			if (!t) return;
			let n = t.dataset.view;
			n && c(n) && this.navigate(n);
		}), t(this.currentView, (e) => {
			this.updateActiveNavButton(n, e);
		}));
	}
	updateActiveNavButton(e, t) {
		e.querySelectorAll("[data-view]").forEach((e) => {
			let n = e.dataset.view === t;
			e.classList.toggle("active", n), e.setAttribute("aria-current", n ? "page" : "false");
		});
	}
	getStylesheet() {
		return a;
	}
	renderView(e) {
		if (!this.contentContainer || !this.rootElement) {
			console.warn(`[${this.id}] No content container available`);
			return;
		}
		this.contentContainer.setAttribute("data-current-view", this.currentView.value);
		let t = this.navigationState.previousView;
		if (t && t !== this.currentView.value && this.loadedViews.has(t)) {
			let e = this.loadedViews.get(t);
			e.element.removeAttribute("data-view"), e.element.hidden = !0, this.rootElement.contains(e.element) && e.element.remove();
		}
		e.setAttribute("data-view", this.currentView.value), e.hidden = !1, e.removeAttribute("slot"), this.rootElement.contains(e) || this.rootElement.appendChild(e);
		let n = this.contentContainer.querySelector(".app-shell__loading");
		n && (n.hidden = !0), this.currentViewElement = e;
	}
	applyTheme(e) {
		let t = this.rootElement?.shadowRoot?.querySelector(".app-shell");
		t && (t.dataset.theme = this.resolveShellColorScheme(e)), super.applyTheme(e);
	}
	async mount(e) {
		await super.mount(e), this.setupPopstateNavigation(), import("./capacitor-permissions-pK-YmII-.js").then((e) => e.ensureCapacitorPermissions()).catch(() => {}), import("./capacitor-share-intent-C1TyRq7o.js").then((e) => e.installCapacitorShareIntentBridge()).catch(() => {});
	}
};
function u(e) {
	return new l();
}
//#endregion
export { l as MinimalShell, u as createShell, u as default };
