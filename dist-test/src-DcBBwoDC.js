import { Cr as e, Ut as t, br as n, ir as r, or as i } from "./src-BoL7goZG.js";
import { i as a } from "./config-BynrmT5f.js";
import { s as o } from "./messaging-jUZ_A071.js";
import { n as s, t as c } from "./settings-config-DYOSsuGM.js";
import { i as l } from "./channel-actions-UyALGbaW.js";
import { n as u, r as d } from "./admin-doors-DuI7Haui.js";
import { t as f } from "./instruction-templates-BX9wnZos.js";
import { t as p } from "./Theme-DJ-tYz1b.js";
import "./theme-BYaDcyUn.js";
import { t as m } from "./SettingsTypes-BMR8vm8-.js";
import "./Settings-DI63CTRU.js";
import { a as ee, t as te } from "./storage-Bo8p2gMW.js";
import { a as h, n as g, o as _, r as v, s as ne, t as y } from "./custom-instructions-XrDlU2xQ.js";
//#region ../settings-view/src/scss/Settings.scss?inline
var b = "@charset \"UTF-8\";\n/* Settings view — self-contained stylesheet.\n * INVARIANT: Works inside open shadow roots: no reliance on `html:has(...)`, `:root:has(...)`,\n * or `html[data-active-view]` for paint. Uses inherited `color-scheme` + `light-dark()` fallbacks\n * wherever `--color-*` Veela tokens are absent on first paint.\n */\n@layer settings-view {\n  .view-settings {\n    color-scheme: inherit;\n    /* ── semantic tokens (Veela when inherited, else self-sufficient) ── */\n    --sv-bg: var(--color-surface, light-dark(#eef1f6, #0f1318));\n    --sv-fg: var(--color-on-surface, light-dark(#12151a, #e8edf2));\n    --sv-muted: var(--color-on-surface-variant, light-dark(#5c6570, #a8b0bc));\n    --sv-outline: var(--color-outline-variant, light-dark(#c5cdd8, #3d4755));\n    --sv-surface-1: var(--color-surface-container-low, light-dark(#ffffff, #171c24));\n    --sv-surface-2: var(--color-surface-container, light-dark(#f4f6fa, #1c232d));\n    --sv-primary: var(--color-primary, #007acc);\n    --sv-on-primary: var(--color-on-primary, #ffffff);\n    --sv-danger: var(--color-error, #d32f2f);\n    --sv-divider: color-mix(in oklab, var(--sv-outline) 35%, transparent);\n    --sv-ring: color-mix(in oklab, var(--sv-outline) 55%, transparent);\n    --sv-elev: 0 2px 14px color-mix(in oklab, var(--sv-fg) 5%, transparent);\n    box-sizing: border-box;\n    display: grid;\n    grid-template-rows: auto minmax(0, 1fr) auto;\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0;\n    inline-size: 100%;\n    block-size: 100%;\n    max-block-size: 100%;\n    min-block-size: 0;\n    margin: 0;\n    padding: clamp(0.5rem, 2cqi, 1rem);\n    overflow: hidden;\n    text-align: start;\n    font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif;\n    background-color: var(--sv-bg);\n    color: var(--sv-fg);\n  }\n  .view-settings *,\n  .view-settings *::before,\n  .view-settings *::after {\n    box-sizing: border-box;\n  }\n  .view-settings :where(select, input, textarea, option, button) {\n    pointer-events: auto;\n    font-family: inherit;\n  }\n  .view-settings textarea {\n    container-type: inline-size;\n    resize: vertical;\n    inline-size: 100%;\n    max-inline-size: 100%;\n  }\n  .view-settings h2,\n  .view-settings h3 {\n    margin: 0;\n    text-align: start;\n    color: var(--sv-fg);\n  }\n  .view-settings h2 {\n    font-size: 1.25rem;\n    font-weight: 700;\n    letter-spacing: -0.02em;\n  }\n  .view-settings h3 {\n    font-size: 0.94rem;\n    font-weight: 600;\n    letter-spacing: -0.01em;\n  }\n  .view-settings {\n    /* ── screen chrome ── */\n  }\n  .view-settings .settings-screen__top {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.75rem;\n    padding-block-end: 0.875rem;\n    border-block-end: 1px solid var(--sv-divider);\n    flex-shrink: 0;\n    min-inline-size: 0;\n  }\n  .view-settings .settings-screen__title {\n    font-weight: 600;\n    letter-spacing: -0.015em;\n    font-size: clamp(1.05rem, 2.5cqi, 1.35rem);\n  }\n  @media (min-width: 720px) {\n    .view-settings .settings-screen__top {\n      flex-direction: row;\n      flex-wrap: wrap;\n      align-items: center;\n      justify-content: space-between;\n    }\n    .view-settings .settings-screen__top .settings-tab-actions {\n      flex: 1;\n      justify-content: flex-end;\n    }\n  }\n  .view-settings .settings-screen__body {\n    min-block-size: 0;\n    min-inline-size: 0;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    overscroll-behavior: contain;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding-block: 0.75rem;\n    scrollbar-width: thin;\n    scrollbar-color: var(--sv-outline) transparent;\n  }\n  .view-settings .settings-screen__body::-webkit-scrollbar {\n    inline-size: 6px;\n  }\n  .view-settings .settings-screen__body::-webkit-scrollbar-thumb {\n    background: color-mix(in oklab, var(--sv-outline) 45%, transparent);\n    border-radius: 99px;\n  }\n  .view-settings .settings-screen__footer {\n    inline-size: stretch;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 0.5rem;\n    flex-wrap: wrap;\n    flex-shrink: 0;\n    padding-block: 0.75rem;\n    padding-inline: 0.25rem;\n    border-block-start: 1px solid var(--sv-divider);\n    background: color-mix(in oklab, var(--sv-surface-1) 85%, var(--sv-bg));\n    box-shadow: 0 -10px 28px color-mix(in oklab, var(--sv-fg) 4%, transparent);\n  }\n  .view-settings {\n    /* ── tabs ── */\n  }\n  .view-settings .settings-tab-actions {\n    display: flex;\n    flex-wrap: nowrap;\n    gap: 0.375rem;\n    align-items: center;\n    inline-size: stretch;\n    max-inline-size: stretch;\n    overflow-x: auto;\n    scrollbar-width: thin;\n    scrollbar-color: var(--sv-outline) transparent;\n    container-type: inline-size;\n    /* CRX / layered shells: ensure the tab strip participates in hit-testing */\n    pointer-events: auto;\n    position: relative;\n    z-index: 1;\n  }\n  .view-settings .settings-tab-btn {\n    pointer-events: auto;\n    cursor: pointer;\n    padding: 0.5rem 0.875rem;\n    min-block-size: 2.5rem;\n    border: none;\n    border-radius: 999px;\n    background: color-mix(in oklab, var(--sv-surface-2) 94%, transparent);\n    color: var(--sv-muted);\n    font-size: 0.75rem;\n    font-weight: 500;\n    transition: background-color 0.12s ease, color 0.12s ease, box-shadow 0.12s ease;\n    box-shadow: 0 0 0 1px color-mix(in oklab, var(--sv-outline) 14%, transparent);\n    white-space: nowrap;\n  }\n  .view-settings .settings-tab-btn:hover {\n    background: color-mix(in oklab, var(--sv-surface-2) 100%, transparent);\n    color: var(--sv-fg);\n  }\n  .view-settings .settings-tab-btn.is-active {\n    background: var(--sv-primary);\n    color: var(--sv-on-primary);\n    box-shadow: 0 2px 12px color-mix(in oklab, var(--sv-primary) 28%, transparent), 0 0 0 1px color-mix(in oklab, var(--sv-primary) 40%, transparent);\n  }\n  .view-settings .settings-tab-panel {\n    display: none;\n  }\n  .view-settings .settings-tab-panel.is-active {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.75rem;\n    min-inline-size: 0;\n  }\n  .view-settings {\n    /* ── cards & forms ── */\n  }\n  .view-settings .card {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n    padding: 1rem;\n    inline-size: stretch;\n    border: none;\n    border-radius: 16px;\n    background: color-mix(in oklab, var(--sv-surface-2) 92%, var(--sv-bg));\n    box-shadow: var(--sv-elev), 0 0 0 1px color-mix(in oklab, var(--sv-outline) 14%, transparent);\n  }\n  @container (max-inline-size: 480px) {\n    .view-settings .card {\n      padding: 0.875rem;\n      border-radius: 14px;\n    }\n  }\n  .view-settings .settings-panel-form {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n    inline-size: stretch;\n  }\n  .view-settings .field {\n    display: grid;\n    grid-auto-flow: row;\n    gap: 0.375rem;\n    inline-size: stretch;\n    font-size: 0.75rem;\n    margin: 0;\n  }\n  .view-settings .field > span {\n    font-size: 0.75rem;\n    font-weight: 500;\n    color: var(--sv-muted);\n  }\n  .view-settings .field.checkbox {\n    grid-auto-flow: column;\n    grid-auto-columns: max-content 1fr;\n    align-items: center;\n    gap: 0.625rem;\n  }\n  .view-settings .field-hint {\n    margin: 0 0 0.75rem;\n    font-size: 0.85em;\n    line-height: 1.45;\n    color: var(--sv-muted);\n    opacity: 0.95;\n  }\n  .view-settings .form-input,\n  .view-settings .form-select {\n    display: block;\n    inline-size: 100%;\n    min-block-size: 2.5rem;\n    padding: 0.5rem 0.65rem;\n    border-radius: 10px;\n    border: 1px solid color-mix(in oklab, var(--sv-outline) 45%, transparent);\n    background: var(--sv-surface-1);\n    color: var(--sv-fg);\n    font-size: 0.875rem;\n    line-height: 1.25;\n    outline: none;\n    transition: border-color 0.12s ease, box-shadow 0.12s ease;\n  }\n  .view-settings .form-input:focus-visible,\n  .view-settings .form-select:focus-visible {\n    border-color: color-mix(in oklab, var(--sv-primary) 55%, var(--sv-outline));\n    box-shadow: 0 0 0 3px color-mix(in oklab, var(--sv-primary) 22%, transparent);\n  }\n  .view-settings select.form-select,\n  .view-settings select.form-input {\n    appearance: none;\n    padding-inline-end: 2rem;\n    background-image: linear-gradient(45deg, transparent 50%, var(--sv-muted) 50%), linear-gradient(135deg, var(--sv-muted) 50%, transparent 50%);\n    background-position: calc(100% - 14px) calc(50% - 2px), calc(100% - 9px) calc(50% - 2px);\n    background-size: 5px 5px;\n    background-repeat: no-repeat;\n  }\n  .view-settings {\n    /* ── buttons ── */\n  }\n  .view-settings .btn {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.35rem;\n    padding: 0.5rem 1.125rem;\n    min-block-size: 2.5rem;\n    border: none;\n    border-radius: 999px;\n    background: color-mix(in oklab, var(--sv-surface-2) 90%, transparent);\n    color: var(--sv-fg);\n    font-size: 0.8125rem;\n    font-weight: 500;\n    cursor: pointer;\n    transition: background-color 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;\n    box-shadow: 0 0 0 1px color-mix(in oklab, var(--sv-outline) 12%, transparent);\n  }\n  .view-settings .btn:hover {\n    background: color-mix(in oklab, var(--sv-fg) 6%, var(--sv-surface-2));\n  }\n  .view-settings .btn.primary {\n    background: var(--sv-primary);\n    color: var(--sv-on-primary);\n    box-shadow: 0 2px 12px color-mix(in oklab, var(--sv-primary) 26%, transparent), 0 0 0 1px color-mix(in oklab, var(--sv-primary) 45%, transparent);\n  }\n  .view-settings .btn.primary:hover {\n    filter: brightness(1.06);\n  }\n  .view-settings .btn.btn-sm, .view-settings .btn.small {\n    padding: 0.35rem 0.65rem;\n    min-block-size: 2rem;\n    font-size: 0.75rem;\n  }\n  .view-settings .btn.btn-danger {\n    color: var(--sv-on-primary);\n    background: color-mix(in oklab, var(--sv-danger) 92%, #000);\n    box-shadow: 0 0 0 1px color-mix(in oklab, var(--sv-danger) 35%, transparent);\n  }\n  .view-settings .btn.btn-danger:hover {\n    filter: brightness(1.08);\n  }\n  .view-settings .btn.tiny {\n    min-block-size: 2rem;\n    padding: 0.3rem 0.5rem;\n    font-size: 0.72rem;\n  }\n  .view-settings .note,\n  .view-settings .ext-note {\n    font-size: 0.75rem;\n    color: var(--sv-muted);\n    opacity: 0.92;\n    flex: 0 1 auto;\n    max-inline-size: 100%;\n    display: block;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    pointer-events: none;\n  }\n  .view-settings .ext-note {\n    line-height: 1.4;\n  }\n  .view-settings .ext-note code {\n    padding: 2px 6px;\n    border-radius: 4px;\n    font-size: 0.68rem;\n    background: color-mix(in oklab, var(--sv-surface-2) 80%, var(--sv-bg));\n    color: var(--sv-fg);\n  }\n  .view-settings {\n    /* ── checkboxes ── */\n  }\n  .view-settings .form-checkbox input[type=checkbox],\n  .view-settings label.field.checkbox input[type=checkbox] {\n    inline-size: 1.15rem;\n    block-size: 1.15rem;\n    accent-color: var(--sv-primary);\n    flex-shrink: 0;\n  }\n  .view-settings {\n    /* ── MCP ── */\n  }\n  .view-settings .mcp-section {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .view-settings .mcp-actions {\n    margin-block-start: 0.5rem;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n  }\n  .view-settings .mcp-row {\n    display: grid;\n    gap: 0.5rem;\n    padding: 0.75rem;\n    border-radius: 12px;\n    background: color-mix(in oklab, var(--sv-surface-2) 88%, var(--sv-bg));\n    box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--sv-outline) 12%, transparent);\n  }\n  .view-settings .mcp-row .field {\n    margin: 0;\n  }\n  .view-settings .mcp-empty-note {\n    margin: 0;\n    color: var(--sv-muted);\n    font-size: 0.75rem;\n  }\n  .view-settings {\n    /* ── spoiler / details ── */\n  }\n  .view-settings .settings-spoiler {\n    border-radius: 12px;\n    border: 1px solid color-mix(in oklab, var(--sv-outline) 22%, transparent);\n    background: color-mix(in oklab, var(--sv-surface-1) 55%, transparent);\n    padding: 0.25rem 0.5rem;\n  }\n  .view-settings .settings-spoiler summary {\n    cursor: pointer;\n    font-size: 0.8rem;\n    font-weight: 600;\n    padding: 0.35rem 0.25rem;\n    color: var(--sv-fg);\n  }\n  .view-settings .settings-spoiler .settings-panel-form {\n    padding-block-end: 0.25rem;\n  }\n  .view-settings {\n    /* ── legacy / demo shell (index.ts) ── */\n  }\n  .view-settings .view-settings__content {\n    inline-size: 100%;\n    max-inline-size: clamp(640px, 90%, 800px);\n  }\n  .view-settings .view-settings__section {\n    display: flex;\n    flex-direction: column;\n    margin-block-end: 2rem;\n    padding-block-end: 2rem;\n    border-block-end: 1px solid var(--sv-divider);\n  }\n  .view-settings .view-settings__section:last-of-type {\n    border-block-end: none;\n  }\n  .view-settings .view-settings__group {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .view-settings .view-settings__label {\n    display: flex;\n    flex-direction: column;\n    gap: 0.375rem;\n  }\n  .view-settings .view-settings__label > span {\n    font-size: 0.8125rem;\n    font-weight: 500;\n  }\n  .view-settings .view-settings__select,\n  .view-settings .view-settings__input {\n    min-block-size: 2.5rem;\n    padding: 0.45rem 0.6rem;\n    border-radius: 10px;\n    border: 1px solid color-mix(in oklab, var(--sv-outline) 45%, transparent);\n    background: var(--sv-surface-1);\n    color: var(--sv-fg);\n    font-size: 0.875rem;\n  }\n  .view-settings .view-settings__checkbox {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    font-size: 0.8125rem;\n  }\n  .view-settings .view-settings__actions {\n    display: flex;\n    gap: 0.75rem;\n    margin-block-start: 1.5rem;\n  }\n  .view-settings .view-settings__btn {\n    padding: 0.55rem 1.1rem;\n    border-radius: 8px;\n    border: 1px solid color-mix(in oklab, var(--sv-outline) 40%, transparent);\n    background: transparent;\n    color: var(--sv-fg);\n    cursor: pointer;\n  }\n  .view-settings .view-settings__btn--primary {\n    background: var(--sv-primary);\n    border-color: color-mix(in oklab, var(--sv-primary) 30%, #000);\n    color: var(--sv-on-primary);\n  }\n  .view-settings .view-settings__btn--primary:hover {\n    filter: brightness(1.06);\n  }\n  .view-settings {\n    /* ── custom instructions (panel + editor variants) ── */\n  }\n  .view-settings .custom-instructions-panel,\n  .view-settings .custom-instructions-editor {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .view-settings .cip-select-row,\n  .view-settings .ci-row {\n    display: flex;\n    flex-direction: column;\n    gap: 0.35rem;\n  }\n  .view-settings .ci-header {\n    margin-block-end: 0.25rem;\n  }\n  .view-settings .ci-header h4 {\n    margin: 0 0 0.25rem;\n    font-size: 0.88rem;\n  }\n  .view-settings .ci-desc {\n    margin: 0;\n    font-size: 0.78rem;\n    color: var(--sv-muted);\n    line-height: 1.45;\n  }\n  .view-settings .ci-active-select {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n  .view-settings .ci-select,\n  .view-settings .cip-select {\n    min-block-size: 2.35rem;\n    padding: 0.4rem 0.55rem;\n    border-radius: 10px;\n    border: 1px solid color-mix(in oklab, var(--sv-outline) 40%, transparent);\n    background: var(--sv-surface-1);\n    color: var(--sv-fg);\n    font-size: 0.8rem;\n  }\n  .view-settings .cip-list,\n  .view-settings .ci-list {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .view-settings .cip-item,\n  .view-settings .ci-item {\n    padding: 0.65rem 0.75rem;\n    border-radius: 12px;\n    background: var(--sv-surface-1);\n    border: 1px solid color-mix(in oklab, var(--sv-outline) 16%, transparent);\n  }\n  .view-settings .cip-item.is-active, .view-settings .cip-item.active,\n  .view-settings .ci-item.is-active,\n  .view-settings .ci-item.active {\n    border-color: color-mix(in oklab, var(--sv-primary) 35%, transparent);\n    box-shadow: 0 0 0 1px color-mix(in oklab, var(--sv-primary) 18%, transparent);\n  }\n  .view-settings .cip-item-header,\n  .view-settings .ci-item-header {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 0.5rem;\n  }\n  .view-settings .cip-item-label,\n  .view-settings .ci-item-label {\n    font-weight: 600;\n    font-size: 0.8rem;\n  }\n  .view-settings .cip-item-actions,\n  .view-settings .ci-item-actions {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.35rem;\n    justify-content: flex-end;\n  }\n  .view-settings .cip-badge,\n  .view-settings .ci-badge {\n    font-size: 0.65rem;\n    padding: 0.15rem 0.4rem;\n    border-radius: 999px;\n    background: color-mix(in oklab, var(--sv-primary) 16%, transparent);\n    color: var(--sv-fg);\n  }\n  .view-settings .cip-item-preview,\n  .view-settings .ci-item-preview {\n    font-size: 0.75rem;\n    color: var(--sv-muted);\n    margin-block-start: 0.35rem;\n    line-height: 1.45;\n  }\n  .view-settings .cip-edit-form,\n  .view-settings .ci-edit-form {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    margin-block-start: 0.5rem;\n  }\n  .view-settings .cip-form-actions,\n  .view-settings .cip-toolbar,\n  .view-settings .ci-actions,\n  .view-settings .ci-add-actions,\n  .view-settings .ci-edit-actions {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n    align-items: center;\n  }\n  .view-settings .cip-input,\n  .view-settings .cip-textarea,\n  .view-settings .ci-input,\n  .view-settings .ci-textarea,\n  .view-settings .field-control {\n    inline-size: 100%;\n    border-radius: 10px;\n    border: 1px solid color-mix(in oklab, var(--sv-outline) 40%, transparent);\n    background: var(--sv-surface-1);\n    color: var(--sv-fg);\n    padding: 0.45rem 0.55rem;\n    font-size: 0.8125rem;\n  }\n  .view-settings .cip-textarea,\n  .view-settings .ci-textarea {\n    min-block-size: 5rem;\n  }\n  .view-settings .cip-empty,\n  .view-settings .ci-empty {\n    font-size: 0.8rem;\n    color: var(--sv-muted);\n    padding: 0.75rem;\n    text-align: center;\n  }\n  .view-settings .field-label {\n    font-size: 0.72rem;\n    font-weight: 600;\n    color: var(--sv-muted);\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n  }\n  .view-settings {\n    /* ── touch targets & responsive footer ── */\n  }\n  @container (max-inline-size: 1024px) {\n    .view-settings {\n      padding: 0.65rem;\n    }\n  }\n  @container (max-inline-size: 560px) {\n    .view-settings .settings-tab-actions {\n      gap: 0.3rem;\n    }\n    .view-settings .settings-tab-btn {\n      min-block-size: 2.65rem;\n      padding-inline: 0.7rem;\n    }\n  }\n  @container (max-inline-size: 480px) {\n    .view-settings {\n      padding: 0.45rem;\n    }\n    .view-settings .settings-screen__title {\n      display: none;\n    }\n    .view-settings .settings-screen__body {\n      padding-block: 0.5rem;\n      gap: 0.75rem;\n    }\n    .view-settings .settings-screen__footer {\n      flex-direction: column-reverse;\n      align-items: stretch;\n      gap: 0.5rem;\n    }\n    .view-settings .settings-screen__footer .btn.primary {\n      inline-size: 100%;\n      justify-content: center;\n      min-block-size: 2.75rem;\n    }\n    .view-settings .settings-screen__footer .note {\n      white-space: normal;\n      text-align: center;\n    }\n  }\n}";
//#endregion
//#region ../../projects/subsystem/runtime/boot.ts
async function re(e, t) {
	globalThis.dispatchEvent?.(new CustomEvent("view:navigate", { detail: {
		viewId: e,
		options: t
	} }));
}
//#endregion
//#region ../settings-view/src/ts/settings-utils.ts
var x = [
	"en",
	"ru",
	"en-GB",
	"en-US"
], ie = (e) => e === "en" ? "English (generic)" : e === "ru" ? "Russian" : e === "en-GB" ? "English (UK)" : "English (US)", S = (e) => {
	let t = (e || "").trim();
	return t ? t === "ru" || t.startsWith("ru-") ? "ru" : t === "en-GB" ? "en-GB" : t === "en-US" ? "en-US" : t === "en" || t.startsWith("en-") ? "en" : null : null;
}, ae = () => {
	let e = /* @__PURE__ */ new Set(), t = typeof navigator < "u" ? [...navigator.languages || [], navigator.language] : [];
	for (let n of t) {
		let t = S(n);
		t && e.add(t);
	}
	for (let t of x) e.add(t);
	return Array.from(e);
}, oe = () => {
	let e = new Set(["ru", "en"]), t = typeof navigator < "u" ? [...navigator.languages || [], navigator.language] : [];
	for (let n of t) {
		let t = (n || "").trim();
		!t || t === "en" || t === "ru" || e.add(t);
	}
	return Array.from(e);
}, C = (e, t) => {
	let n = Number((e || "").trim());
	return Number.isFinite(n) ? n : t;
}, se = (e, t, n, r) => {
	let i = Number.parseFloat((e || "").trim());
	return Number.isFinite(i) ? Math.max(n, Math.min(r, i)) : t;
}, w = (e, t = "") => e ? e.value.trim() : t, T = (e, t) => e ? !!e.checked : t, ce = (e) => {
	if (typeof e.composedPath == "function") {
		for (let t of e.composedPath()) if (t instanceof Element) return t;
	}
	let t = e.target;
	return t instanceof Element ? t : t instanceof Text ? t.parentElement : null;
}, le = (e) => {
	let n = {
		id: (e?.id || `mcp-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`).trim(),
		serverLabel: (e?.serverLabel || "").trim(),
		origin: (e?.origin || "").trim(),
		clientKey: (e?.clientKey || "").trim(),
		secretKey: (e?.secretKey || "").trim()
	};
	return t`<div class="field mcp-row" data-mcp-id=${n.id}>
            <label class="field">
              <span>Server Label</span>
              <input class="form-input" type="text" data-mcp-field="serverLabel" autocomplete="off" value="${n.serverLabel}" />
            </label>
            <label class="field">
              <span>Origin</span>
              <input class="form-input" type="url" data-mcp-field="origin" autocomplete="off" placeholder="https://server.example" value="${n.origin}" />
            </label>
            <label class="field">
              <span>Client Key</span>
              <input class="form-input" type="text" data-mcp-field="clientKey" autocomplete="off" value="${n.clientKey}" />
            </label>
            <label class="field">
              <span>Secret Key</span>
              <input class="form-input" type="password" data-mcp-field="secretKey" autocomplete="off" placeholder="sk-..." value="${n.secretKey}" />
            </label>
            <button class="btn btn-danger" type="button" data-action="remove-mcp-server">Remove</button>
          </div>`;
}, ue = (e) => {
	if (!e) return [];
	let t = Array.from(e.querySelectorAll("[data-mcp-id]")), n = [];
	for (let e of t) {
		let t = e.getAttribute("data-mcp-id") || `mcp-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`, r = e.querySelector("[data-mcp-field=\"serverLabel\"]")?.value?.trim() || "", i = e.querySelector("[data-mcp-field=\"origin\"]")?.value?.trim() || "", a = e.querySelector("[data-mcp-field=\"clientKey\"]")?.value?.trim() || "", o = e.querySelector("[data-mcp-field=\"secretKey\"]")?.value?.trim() || "";
		r && n.push({
			id: t,
			serverLabel: r,
			origin: i,
			clientKey: a,
			secretKey: o
		});
	}
	return n;
}, de = (e, n) => {
	if (!e) return;
	e.replaceChildren();
	let r = Array.isArray(n) ? n : [];
	if (!r.length) {
		e.appendChild(t`<p class="mcp-empty-note">No MCP servers configured.</p>`);
		return;
	}
	r.forEach((t) => e.appendChild(le(t)));
}, fe = () => t`<footer class="settings-screen__footer">
        <button class="btn primary" type="button" data-action="save">Save</button>
        <span class="note" data-note></span>
    </footer>`, pe = () => t`<header class="settings-screen__top">
        <h2 class="settings-screen__title">Settings</h2>
        <div class="settings-tab-actions" data-settings-tabs data-active-tab="ai" role="tablist" aria-label="Settings categories">
        <button class="settings-tab-btn" type="button" role="tab" data-action="switch-settings-tab" data-tab="appearance" aria-selected="false">Appearance</button>
        <button class="settings-tab-btn" type="button" role="tab" data-action="switch-settings-tab" data-tab="markdown" aria-selected="false">Markdown</button>
        <button class="settings-tab-btn is-active" type="button" role="tab" data-action="switch-settings-tab" data-tab="ai" aria-selected="true">AI</button>
        <button class="settings-tab-btn" type="button" role="tab" data-action="switch-settings-tab" data-tab="mcp" aria-selected="false">MCP</button>
        <button class="settings-tab-btn" type="button" role="tab" data-action="switch-settings-tab" data-tab="server" aria-selected="false">Server</button>
        <button class="settings-tab-btn" type="button" role="tab" data-action="switch-settings-tab" data-tab="instructions" aria-selected="false">Instructions</button>
        <button class="settings-tab-btn" type="button" role="tab" data-action="switch-settings-tab" data-tab="extension" aria-selected="false" data-extension-tab hidden>Extension</button>
        </div>
    </header>`, me = () => t`<section class="card settings-tab-panel" data-tab-panel="appearance">
      <h3>Appearance</h3>
      <label class="field">
        <span>Theme</span>
        <select class="form-select" data-field="appearance.theme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="auto">Auto</option>
        </select>
        <span>Font Size</span>
        <select class="form-select" data-field="appearance.fontSize">
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>
    </section>`, he = () => t`<section class="card settings-tab-panel" data-tab-panel="markdown">
      <h3>Markdown Viewer</h3>
      <label class="field">
        <span>Style preset</span>
        <select class="form-select" data-field="appearance.markdown.preset">
          <option value="default">Default</option>
          <option value="classic">Classic</option>
          <option value="compact">Compact</option>
          <option value="paper">Paper</option>
        </select>
      </label>
      <label class="field">
        <span>Font family</span>
        <select class="form-select" data-field="appearance.markdown.fontFamily">
          <option value="system">System UI</option>
          <option value="sans">Sans</option>
          <option value="serif">Serif</option>
          <option value="mono">Monospace</option>
        </select>
      </label>
      <label class="field">
        <span>Font size (px)</span>
        <input class="form-input" type="number" inputmode="numeric" min="12" max="26" step="1" data-field="appearance.markdown.fontSizePx" />
      </label>
      <label class="field">
        <span>Line height</span>
        <input class="form-input" type="number" inputmode="decimal" min="1.1" max="2.2" step="0.05" data-field="appearance.markdown.lineHeight" />
      </label>
      <label class="field">
        <span>Content max width (px)</span>
        <input class="form-input" type="number" inputmode="numeric" min="500" max="1400" step="10" data-field="appearance.markdown.contentMaxWidthPx" />
      </label>
      <label class="field">
        <span>Print scale</span>
        <input class="form-input" type="number" inputmode="decimal" min="0.5" max="1.5" step="0.05" data-field="appearance.markdown.printScale" />
      </label>
      <label class="field">
        <span>Page size</span>
        <select class="form-select" data-field="appearance.markdown.page.size">
          <option value="auto">Auto</option>
          <option value="A4">A4</option>
          <option value="Letter">Letter</option>
          <option value="Legal">Legal</option>
          <option value="A5">A5</option>
        </select>
      </label>
      <label class="field">
        <span>Page orientation</span>
        <select class="form-select" data-field="appearance.markdown.page.orientation">
          <option value="portrait">Portrait</option>
          <option value="landscape">Landscape</option>
        </select>
      </label>
      <label class="field">
        <span>Page margins (mm)</span>
        <input class="form-input" type="number" inputmode="numeric" min="5" max="40" step="1" data-field="appearance.markdown.page.marginMm" />
      </label>
      <h4>Style modules</h4>
      <p class="field-hint" style="margin: 0 0 0.5rem; opacity: 0.85; font-size: 0.9em;">Grouped by what they affect in the viewer. All are on by default.</p>
      <fieldset class="field-group" style="border: 0; padding: 0; margin: 0 0 1rem;">
        <legend class="field" style="font-weight: 600; margin-bottom: 0.35rem;">Type &amp; layout</legend>
        <label class="field checkbox form-checkbox">
          <input type="checkbox" data-field="appearance.markdown.modules.typography" />
          <span>Typography (paragraphs, headings)</span>
        </label>
        <label class="field checkbox form-checkbox">
          <input type="checkbox" data-field="appearance.markdown.modules.lists" />
          <span>Lists (bullets &amp; numbering)</span>
        </label>
      </fieldset>
      <fieldset class="field-group" style="border: 0; padding: 0; margin: 0 0 1rem;">
        <legend class="field" style="font-weight: 600; margin-bottom: 0.35rem;">Blocks &amp; media</legend>
        <label class="field checkbox form-checkbox">
          <input type="checkbox" data-field="appearance.markdown.modules.tables" />
          <span>Tables</span>
        </label>
        <label class="field checkbox form-checkbox">
          <input type="checkbox" data-field="appearance.markdown.modules.codeBlocks" />
          <span>Code blocks</span>
        </label>
        <label class="field checkbox form-checkbox">
          <input type="checkbox" data-field="appearance.markdown.modules.blockquotes" />
          <span>Blockquotes</span>
        </label>
        <label class="field checkbox form-checkbox">
          <input type="checkbox" data-field="appearance.markdown.modules.media" />
          <span>Images &amp; video</span>
        </label>
      </fieldset>
      <fieldset class="field-group" style="border: 0; padding: 0; margin: 0 0 1rem;">
        <legend class="field" style="font-weight: 600; margin-bottom: 0.35rem;">Print</legend>
        <label class="field checkbox form-checkbox">
          <input type="checkbox" data-field="appearance.markdown.modules.printBreaks" />
          <span>Print breaks (avoid splits inside headings, tables, …)</span>
        </label>
      </fieldset>
      <h4>Rendering plugins</h4>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="appearance.markdown.plugins.smartTypography" />
        <span>Smart typography</span>
      </label>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="appearance.markdown.plugins.softBreaksAsBr" />
        <span>Soft line breaks as BR</span>
      </label>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="appearance.markdown.plugins.externalLinksNewTab" />
        <span>Open external links in new tab</span>
      </label>
      <label class="field">
        <span>Custom CSS (screen/view)</span>
        <textarea class="form-input" rows="8" data-field="appearance.markdown.customCss" placeholder=".markdown-viewer-content h1 { color: var(--color-primary); }"></textarea>
      </label>
      <label class="field">
        <span>Custom CSS (print only)</span>
        <textarea class="form-input" rows="8" data-field="appearance.markdown.printCss" placeholder=".markdown-viewer-content { font-size: 12pt; line-height: 1.5; }"></textarea>
      </label>
      <label class="field">
        <span>Markdown extensions (JSON rules)</span>
        <textarea class="form-input" rows="10" data-field="appearance.markdown.extensions" placeholder='[
  {
    "id": "highlight",
    "pattern": "==(.+?)==",
    "replacement": "<mark>$1</mark>",
    "flags": "g",
    "enabled": true
  }
]'></textarea>
      </label>
      <div class="mcp-actions">
        <button class="btn" type="button" data-action="open-user-styles">Open <code>/user/styles/</code> in Explorer</button>
        <button class="btn" type="button" data-action="open-assets-readonly">Open <code>/assets/</code> (read-only) in Explorer</button>
      </div>
      <p class="mcp-empty-note">Rules are regex replacements applied before markdown parsing. Invalid JSON is rejected on save. Custom CSS supports explicit <code>@layer</code> blocks for advanced interop.</p>
    </section>`, ge = () => t`<section class="card settings-tab-panel is-active" data-tab-panel="ai">
      <h3>AI</h3>
      <form class="settings-panel-form" novalidate onsubmit="return false">
      <label class="field">
        <span>Base URL</span>
        <input placeholder="https://api.proxyapi.ru/openai/v1" class="form-input" type="url" inputmode="url" autocomplete="off" data-field="ai.baseUrl" />
      </label>
      <label class="field">
        <span>API Key</span>
        <input placeholder="sk-..." class="form-input" type="password" autocomplete="off" data-field="ai.apiKey"/>
      </label>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="ui.showKey" />
        <span>Show API key</span>
      </label>
      <label class="field">
        <span>Model</span>
        <select class="form-select" data-field="ai.model"></select>
      </label>
      <label class="field" data-field-group="ai.customModel">
        <span>Custom model identifier</span>
        <input placeholder="provider/model-or-id" class="form-input" type="text" autocomplete="off" data-field="ai.customModel"/>
      </label>
      <label class="field">
        <span>Default reasoning effort</span>
        <select class="form-select" data-field="ai.defaultReasoningEffort">
            <option value="none">None</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
        </select>
      </label>
      <details class="settings-spoiler" data-advanced-ai-spoiler>
        <summary>Advanced AI settings</summary>
        <div>
          
          <label class="field">
            <span>Default verbosity</span>
            <select class="form-select" data-field="ai.defaultVerbosity">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </label>
          <label class="field">
            <span>Max output tokens</span>
            <input placeholder="400000" class="form-input" type="number" inputmode="numeric" data-field="ai.maxOutputTokens" />
          </label>
          <label class="field">
            <span>Context truncation</span>
            <select class="form-select" data-field="ai.contextTruncation">
              <option value="disabled">Disabled</option>
              <option value="auto">Auto</option>
            </select>
          </label>
          <label class="field">
            <span>Prompt cache retention</span>
            <select class="form-select" data-field="ai.promptCacheRetention">
              <option value="in-memory">In-memory</option>
              <option value="24h">24h</option>
            </select>
          </label>
          <label class="field">
            <span>Max tool calls</span>
            <input placeholder="8" class="form-input" type="number" inputmode="numeric" data-field="ai.maxToolCalls" />
          </label>
          <label class="field checkbox form-checkbox">
            <input type="checkbox" data-field="ai.parallelToolCalls" />
            <span>Allow parallel tool calls</span>
          </label>
          <label class="field">
            <span>Timeout low (ms)</span>
            <input placeholder="60000" class="form-input" type="number" inputmode="numeric" data-field="ai.requestTimeout.low" />
          </label>
          <label class="field">
            <span>Timeout medium (ms)</span>
            <input placeholder="300000" class="form-input" type="number" inputmode="numeric" data-field="ai.requestTimeout.medium" />
          </label>
          <label class="field">
            <span>Timeout high (ms)</span>
            <input placeholder="900000" class="form-input" type="number" inputmode="numeric" data-field="ai.requestTimeout.high" />
          </label>
          <label class="field">
            <span>Max retries</span>
            <input placeholder="2" class="form-input" type="number" inputmode="numeric" data-field="ai.maxRetries" />
          </label>
        </div>
      </details>
      <label class="field">
        <span>Share target mode</span>
        <select class="form-select" data-field="ai.shareTargetMode">
          <option value="recognize">Recognize and copy</option>
          <option value="analyze">Analyze and store</option>
        </select>
      </label>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="ai.autoProcessShared" />
        <span>Auto AI on Share Target / File Open (and copy to clipboard)</span>
      </label>
      <label class="field">
        <span>Response language</span>
        <select class="form-select" data-field="ai.responseLanguage"></select>
      </label>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="ai.translateResults" />
        <span>Translate results</span>
      </label>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="ai.generateSvgGraphics" />
        <span>Generate SVG graphics</span>
      </label>
      <label class="field">
        <span>Speech Recognition language</span>
        <select class="form-select" data-field="speech.language"></select>
      </label>
      </form>
    </section>`, _e = () => t`<section class="card settings-tab-panel" data-tab-panel="mcp">
      <h3>MCP</h3>
      <div class="mcp-section" data-mcp-section></div>
      <div class="mcp-actions">
        <button class="btn" type="button" data-action="add-mcp-server">Add MCP server</button>
      </div>
    </section>`, ve = () => t`<section class="card settings-tab-panel" data-tab-panel="server">
      <h3>Server</h3>
      <p class="field-hint" style="margin: 0 0 0.75rem; opacity: 0.88; font-size: 0.9em;">
        Connect to the hub with server URL and client id. Optional client identifier token and TLS options below.
      </p>
      <h4>Endpoint and identity</h4>
      <form class="settings-panel-form" novalidate onsubmit="return false">
      <label class="field">
        <span>Server URL</span>
        <input class="form-input" type="url" inputmode="url" autocomplete="off" placeholder="https://192.168.0.200:8443" data-field="core.endpointUrl" />
      </label>
      <label class="field">
        <span>Associated device / client ID</span>
        <input class="form-input" type="text" autocomplete="off" data-field="core.userId" placeholder="L-192.168.0.196" />
      </label>
      <label class="field">
        <span>Client identifier token</span>
        <input class="form-input" type="password" autocomplete="off" data-field="core.userKey" placeholder="Endpoint-issued key" />
      </label>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="core.socket.allowAccessTokenWithoutUserKey" />
        <span>Allow access / control token without associated client identifier token</span>
      </label>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="core.allowInsecureTls" />
        <span>Allow self-signed / insecure TLS</span>
      </label>
      </form>
    </section>`, E = (e = {}) => {
	let n = r({
		instructions: [],
		activeId: "",
		editingId: null,
		newLabel: "",
		newInstruction: "",
		isAdding: !1
	}), i = t`<div class="custom-instructions-editor">
        <div class="ci-row">
            <div class="ci-header">
                <h4>Custom Instructions</h4>
                <p class="ci-desc">Define custom instructions for AI operations. These can be activated for "Recognize & Copy" and selected in the Work Center.</p>
            </div>

            <div class="ci-active-select">
                <label>
                    <span>Active instruction:</span>
                    <select class="ci-select" data-action="select-active">
                        <option value="">None (use default)</option>
                    </select>
                </label>
            </div>
        </div>

        <div class="ci-list" data-list></div>

        <div class="ci-add-form" data-add-form hidden>
            <input type="text" class="ci-input" data-field="label" placeholder="Instruction label..." />
            <textarea class="ci-textarea" data-field="instruction" placeholder="Enter your custom instruction..." rows="4"></textarea>
            <div class="ci-add-actions">
                <button class="btn small primary" type="button" data-action="save-new">Add</button>
                <button class="btn small" type="button" data-action="cancel-add">Cancel</button>
            </div>
        </div>

        <div class="ci-actions">
            <button class="btn small" type="button" data-action="add">+ Add Instruction</button>
            <button class="btn small" type="button" data-action="add-templates">Add Templates</button>
        </div>
    </div>`, a = i.querySelector("[data-list]"), o = i.querySelector("[data-action='select-active']"), s = i.querySelector("[data-add-form]"), c = i.querySelector("[data-field='label']"), l = i.querySelector("[data-field='instruction']"), u = () => {
		a.replaceChildren();
		let r = n.instructions ?? [];
		if (!r.length) {
			a.append(t`<div class="ci-empty">No custom instructions. Add one or use templates.</div>`);
			return;
		}
		for (let i of r) {
			let r = n.editingId === i.id, o = n.activeId === i.id, s = t`<div class="ci-item ${o ? "active" : ""}" data-id="${i.id}">
                <div class="ci-item-header">
                    <span class="ci-item-label">${i.label}</span>
                    <div class="ci-item-actions">
                        ${o ? t`<span class="ci-badge active">Active</span>` : t`<button class="btn tiny" type="button" data-action="activate">Use</button>`}
                        <button class="btn tiny" type="button" data-action="edit">Edit</button>
                        <button class="btn tiny danger" type="button" data-action="delete">×</button>
                    </div>
                </div>
                ${r ? t`<div class="ci-edit-form">
                        <input type="text" class="ci-input" data-edit-field="label" value="${i.label}" />
                        <textarea class="ci-textarea" data-edit-field="instruction" rows="4">${i.instruction}</textarea>
                        <div class="ci-edit-actions">
                            <button class="btn small primary" type="button" data-action="save-edit">Save</button>
                            <button class="btn small" type="button" data-action="cancel-edit">Cancel</button>
                        </div>
                    </div>` : t`<div class="ci-item-preview">${p(i.instruction, 120)}</div>`}
            </div>`;
			s.addEventListener("click", (t) => {
				let r = t.target.closest("[data-action]")?.getAttribute("data-action");
				if (r === "activate" && _(i.id).then(m).then(() => e.onUpdate?.()), r === "edit" && (n.editingId = i.id, u()), r === "delete" && confirm(`Delete "${i.label}"?`) && v(i.id).then(m).then(() => e.onUpdate?.()), r === "save-edit") {
					let t = s.querySelector("[data-edit-field='label']"), r = s.querySelector("[data-edit-field='instruction']");
					ne(i.id, {
						label: t.value.trim() || i.label,
						instruction: r.value.trim()
					}).then(() => (n.editingId = null, m())).then(() => e.onUpdate?.());
				}
				r === "cancel-edit" && (n.editingId = null, u());
			}), a.append(s);
		}
	}, d = () => {
		o.replaceChildren(), o.append(t`<option value="">None (use default)</option>`);
		for (let e of n.instructions ?? []) {
			let r = t`<option value="${e.id}">${e.label}</option>`;
			e.id === n.activeId && (r.selected = !0), o.append(r);
		}
	}, p = (e, t) => !e || e.length <= t ? e || "" : e.slice(0, t).trim() + "…", m = async () => {
		let e = await h(), t = Array.isArray(e) ? {
			instructions: e,
			activeId: "",
			activeInstruction: null
		} : e;
		n.instructions = t?.instructions ?? [], n.activeId = t?.activeId ?? "", u(), d();
	};
	return i.addEventListener("click", (t) => {
		let r = t.target.closest("[data-action]")?.getAttribute("data-action");
		if (r === "add" && (n.isAdding = !0, s.hidden = !1, c.value = "", l.value = "", c.focus()), r === "cancel-add" && (n.isAdding = !1, s.hidden = !0), r === "save-new") {
			let t = c.value.trim(), r = l.value.trim();
			if (!r) {
				l.focus();
				return;
			}
			y(t || "Custom", r).then((e) => {
				if (e) return n.isAdding = !1, s.hidden = !0, m();
			}).then(() => e.onUpdate?.());
		}
		if (r === "add-templates") {
			let t = new Set((n.instructions ?? []).map((e) => e.label.trim().toLowerCase())), r = f.filter((e) => !t.has(e.label.trim().toLowerCase()));
			if (!r.length) {
				alert("All templates are already added.");
				return;
			}
			g(r.map((e) => ({
				label: e.label,
				instruction: e.instruction,
				enabled: e.enabled
			}))).then(m).then(() => e.onUpdate?.());
		}
	}), o.addEventListener("change", () => {
		_(o.value || null).then(m).then(() => e.onUpdate?.());
	}), m(), i;
}, ye = (e) => t`<section class="card settings-tab-panel" data-tab-panel="instructions" data-section="instructions">
      <h3>Recognition Instructions</h3>
      <div data-custom-instructions="editor">
        ${E({ onUpdate: () => e("Instructions updated.") })}
      </div>
    </section>`, be = () => t`<section class="card settings-tab-panel" data-tab-panel="extension" data-section="extension" hidden>
      <h3>Extension</h3>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="core.ntpEnabled" />
        <span>Enable New Tab Page (offline Basic)</span>
      </label>
    </section>`, D = (e) => {
	let n = null, r = (e) => {
		n && (n.textContent = e, e && setTimeout(() => n && (n.textContent = ""), 1500));
	}, i = t`<div class="view-settings">
    ${pe()}
    <div class="settings-screen__body">
      ${me()}
      ${he()}
      ${ge()}
      ${_e()}
      ${ve()}
      ${ye(r)}
      ${be()}
    </div>
    ${fe()}
  </div>`, l = (e) => i.querySelector(e);
	n = i.querySelector("[data-note]");
	let f = l("[data-field=\"ai.baseUrl\"]"), h = l("[data-field=\"ai.apiKey\"]"), g = l("[data-field=\"ui.showKey\"]"), _ = l("[data-field=\"ai.model\"]"), v = l("[data-field=\"ai.customModel\"]"), ne = i.querySelector("[data-field-group=\"ai.customModel\"]"), y = l("[data-field=\"ai.defaultReasoningEffort\"]"), b = l("[data-field=\"ai.defaultVerbosity\"]"), x = l("[data-field=\"ai.maxOutputTokens\"]"), S = l("[data-field=\"ai.contextTruncation\"]"), E = l("[data-field=\"ai.promptCacheRetention\"]"), D = l("[data-field=\"ai.maxToolCalls\"]"), O = l("[data-field=\"ai.parallelToolCalls\"]"), k = l("[data-field=\"ai.requestTimeout.low\"]"), A = l("[data-field=\"ai.requestTimeout.medium\"]"), xe = l("[data-field=\"ai.requestTimeout.high\"]"), Se = l("[data-field=\"ai.maxRetries\"]"), Ce = l("[data-field=\"ai.shareTargetMode\"]"), j = () => {
		let e = (_?.value || "").trim() === "custom";
		ne && (ne.hidden = !e), v && (v.disabled = !e);
	};
	if (_) {
		_.replaceChildren();
		for (let e of m) {
			let t = document.createElement("option");
			t.value = e, t.textContent = e, _.append(t);
		}
		let e = document.createElement("option");
		e.value = "custom", e.textContent = "Custom...", _.append(e), _.addEventListener("change", j);
	}
	v?.addEventListener("focus", () => {
		_ && (_.value = "custom", j());
	});
	let we = l("[data-field=\"ai.autoProcessShared\"]"), M = l("[data-field=\"ai.responseLanguage\"]"), Te = l("[data-field=\"ai.translateResults\"]"), Ee = l("[data-field=\"ai.generateSvgGraphics\"]"), N = l("[data-field=\"speech.language\"]"), P = l("[data-field=\"appearance.theme\"]"), De = l("[data-field=\"appearance.fontSize\"]"), Oe = l("[data-field=\"appearance.markdown.preset\"]"), ke = l("[data-field=\"appearance.markdown.fontFamily\"]"), Ae = l("[data-field=\"appearance.markdown.fontSizePx\"]"), je = l("[data-field=\"appearance.markdown.lineHeight\"]"), Me = l("[data-field=\"appearance.markdown.contentMaxWidthPx\"]"), Ne = l("[data-field=\"appearance.markdown.printScale\"]"), Pe = l("[data-field=\"appearance.markdown.page.size\"]"), Fe = l("[data-field=\"appearance.markdown.page.orientation\"]"), Ie = l("[data-field=\"appearance.markdown.page.marginMm\"]"), Le = l("[data-field=\"appearance.markdown.modules.typography\"]"), Re = l("[data-field=\"appearance.markdown.modules.lists\"]"), ze = l("[data-field=\"appearance.markdown.modules.tables\"]"), Be = l("[data-field=\"appearance.markdown.modules.codeBlocks\"]"), Ve = l("[data-field=\"appearance.markdown.modules.blockquotes\"]"), He = l("[data-field=\"appearance.markdown.modules.media\"]"), Ue = l("[data-field=\"appearance.markdown.modules.printBreaks\"]"), We = l("[data-field=\"appearance.markdown.plugins.smartTypography\"]"), Ge = l("[data-field=\"appearance.markdown.plugins.softBreaksAsBr\"]"), Ke = l("[data-field=\"appearance.markdown.plugins.externalLinksNewTab\"]"), qe = i.querySelector("[data-field=\"appearance.markdown.customCss\"]"), Je = i.querySelector("[data-field=\"appearance.markdown.printCss\"]"), Ye = i.querySelector("[data-field=\"appearance.markdown.extensions\"]"), Xe = l("[data-field=\"core.ntpEnabled\"]"), F = l("[data-field=\"core.mode\"]"), I = l("[data-field=\"core.endpointUrl\"]"), L = l("[data-field=\"core.userId\"]"), R = l("[data-field=\"core.userKey\"]"), z = l("[data-field=\"core.preferBackendSync\"]"), B = l("[data-field=\"core.encrypt\"]"), V = l("[data-field=\"core.appClientId\"]"), H = l("[data-field=\"core.allowInsecureTls\"]"), U = l("[data-field=\"core.ops.allowUnencrypted\"]"), W = l("[data-field=\"core.admin.httpsOrigin\"]"), G = l("[data-field=\"core.admin.httpOrigin\"]"), K = l("[data-field=\"core.admin.path\"]"), q = l("[data-field=\"core.useCoreIdentityForAirPad\"]"), J = l("[data-field=\"core.socket.accessToken\"]"), Y = l("[data-field=\"core.socket.routeTarget\"]"), X = l("[data-field=\"core.socket.clientAccessToken\"]"), Z = l("[data-field=\"core.socket.allowAccessTokenWithoutUserKey\"]"), Ze = l("[data-field=\"shell.maintainHubSocketConnection\"]"), Qe = l("[data-field=\"shell.clipboardBroadcastTargets\"]"), $e = l("[data-field=\"shell.pushLocalClipboardToLan\"]"), et = l("[data-field=\"shell.clipboardPushIntervalMs\"]"), tt = l("[data-field=\"shell.enableRemoteClipboardBridge\"]"), nt = l("[data-field=\"shell.acceptInboundClipboardData\"]"), rt = l("[data-field=\"shell.clipboardInboundAllowIds\"]"), it = l("[data-field=\"shell.accessTokenBypassesClipboardAllowlist\"]"), at = l("[data-field=\"shell.clipboardShareDestinationIds\"]"), ot = l("[data-field=\"shell.applyRemoteClipboardToDevice\"]"), st = l("[data-field=\"shell.acceptContactsBridgeData\"]"), ct = l("[data-field=\"shell.acceptSmsBridgeData\"]"), lt = l("[data-field=\"shell.enableNativeSms\"]"), ut = l("[data-field=\"shell.enableNativeContacts\"]"), dt = i.querySelector("[data-admin-preview]"), Q = i.querySelector("[data-mcp-section]"), ft = i.querySelector("[data-section=\"extension\"]"), pt = i.querySelector("[data-extension-tab]");
	if (M) {
		M.replaceChildren();
		let e = document.createElement("option");
		e.value = "auto", e.textContent = "Auto-detect", M.append(e);
		let t = document.createElement("option");
		t.value = "follow", t.textContent = "Follow source/context", M.append(t);
		for (let e of oe()) {
			let t = document.createElement("option");
			t.value = e, t.textContent = e === "ru" ? "Russian" : e === "en" ? "English" : e, M.append(t);
		}
	}
	if (N) {
		N.replaceChildren();
		for (let e of ae()) {
			let t = document.createElement("option");
			t.value = e, t.textContent = ie(e), N.append(t);
		}
	}
	i.addEventListener("input", (e) => {
		e.target?.matches?.("[data-field^=\"core.\"]") && gt();
	}), i.addEventListener("change", (e) => {
		e.target?.matches?.("[data-field^=\"core.\"]") && gt();
	});
	let mt = (e) => {
		let t = e || "ai";
		i.querySelector("[data-settings-tabs]")?.setAttribute("data-active-tab", t);
		let n = i.querySelectorAll("[data-action=\"switch-settings-tab\"][data-tab]");
		for (let e of Array.from(n)) {
			let n = e, r = n.getAttribute("data-tab") === t;
			n.classList.toggle("is-active", r), n.setAttribute("aria-selected", String(r));
		}
		let r = i.querySelectorAll("[data-tab-panel]");
		for (let e of Array.from(r)) {
			let n = e, r = n.getAttribute("data-tab-panel") === t;
			r && (n.hidden = !1), n.classList.toggle("is-active", r);
		}
	};
	for (let e of i.querySelectorAll("[data-settings-tabs] button[type=\"button\"][data-action=\"switch-settings-tab\"][data-tab]")) e.addEventListener("click", (t) => {
		t.preventDefault(), t.stopPropagation(), mt(e.getAttribute("data-tab") || "ai");
	});
	let ht = (e) => {
		let t = (e || "").trim().toLowerCase();
		return t ? t === "style" || t === "styles" || t === "styling" ? "markdown" : new Set([
			"appearance",
			"markdown",
			"ai",
			"mcp",
			"server",
			"instructions",
			"extension"
		]).has(t) ? t : "ai" : "ai";
	}, $ = () => ({
		mode: F?.value || "native",
		endpointUrl: I?.value?.trim() || "",
		userId: L?.value?.trim() || "",
		userKey: R?.value?.trim() || "",
		encrypt: !!B?.checked,
		preferBackendSync: (z?.checked ?? !0) !== !1,
		appClientId: V?.value?.trim() || "",
		allowInsecureTls: !!H?.checked,
		useCoreIdentityForAirPad: (q?.checked ?? !0) !== !1,
		socket: {
			accessToken: J?.value?.trim() || "",
			routeTarget: Y?.value?.trim() || "",
			selfId: "",
			clientAccessToken: X?.value?.trim() || "",
			allowAccessTokenWithoutUserKey: !!Z?.checked
		},
		admin: {
			httpsOrigin: W?.value?.trim() || "",
			httpOrigin: G?.value?.trim() || "",
			path: K?.value?.trim() || "/"
		},
		ops: { allowUnencrypted: !!U?.checked }
	}), gt = () => {
		if (!dt) return;
		let e = d($());
		dt.textContent = `Resolved: ${e.https} · ${e.http}`;
	}, _t = (e) => {
		try {
			ee(te.EXPLORER_PATH, e), re("explorer"), o({
				type: "content-explorer",
				destination: "explorer",
				data: {
					action: "view",
					path: e
				},
				metadata: { source: "settings" }
			}), r(`Explorer: ${e}`);
		} catch (e) {
			console.warn("[Settings] Failed to open explorer path:", e), r("Failed to open Explorer path.");
		}
	};
	if (Promise.resolve(c()).then((t) => {
		f && (f.value = (t?.ai?.baseUrl || "").trim()), h && (h.value = (t?.ai?.apiKey || "").trim());
		let n = (t?.ai?.model || "gpt-5.4").trim(), r = (t?.ai?.customModel || "").trim();
		if (_) {
			let e = m.includes(n);
			n === "custom" || !e && n ? (_.value = "custom", v && (v.value = r || n)) : (_.value = e ? n : "gpt-5.4", v && (v.value = r)), j();
		}
		if (y && (y.value = t?.ai?.defaultReasoningEffort || "medium"), b && (b.value = t?.ai?.defaultVerbosity || "medium"), x && (x.value = String(t?.ai?.maxOutputTokens ?? 4e5)), S && (S.value = t?.ai?.contextTruncation || "disabled"), E && (E.value = t?.ai?.promptCacheRetention || "in-memory"), D && (D.value = String(t?.ai?.maxToolCalls ?? 8)), O && (O.checked = (t?.ai?.parallelToolCalls ?? !0) !== !1), k && (k.value = String(t?.ai?.requestTimeout?.low ?? 6e4)), A && (A.value = String(t?.ai?.requestTimeout?.medium ?? 3e5)), xe && (xe.value = String(t?.ai?.requestTimeout?.high ?? 9e5)), Se && (Se.value = String(t?.ai?.maxRetries ?? 2)), Ce && (Ce.value = t?.ai?.shareTargetMode || "recognize"), we && (we.checked = (t?.ai?.autoProcessShared ?? !0) !== !1), M && (M.value = t?.ai?.responseLanguage || "auto"), Te && (Te.checked = !!t?.ai?.translateResults), Ee && (Ee.checked = !!t?.ai?.generateSvgGraphics), N && (N.value = t?.speech?.language || "en-US"), P && (P.value = t?.appearance?.theme || "auto"), De && (De.value = t?.appearance?.fontSize || "medium"), Oe && (Oe.value = t?.appearance?.markdown?.preset || "default"), ke && (ke.value = t?.appearance?.markdown?.fontFamily || "system"), Ae && (Ae.value = String(t?.appearance?.markdown?.fontSizePx ?? 16)), je && (je.value = String(t?.appearance?.markdown?.lineHeight ?? 1.7)), Me && (Me.value = String(t?.appearance?.markdown?.contentMaxWidthPx ?? 860)), Ne && (Ne.value = String(t?.appearance?.markdown?.printScale ?? 1)), Pe && (Pe.value = t?.appearance?.markdown?.page?.size || "auto"), Fe && (Fe.value = t?.appearance?.markdown?.page?.orientation || "portrait"), Ie && (Ie.value = String(t?.appearance?.markdown?.page?.marginMm ?? 12)), Le && (Le.checked = (t?.appearance?.markdown?.modules?.typography ?? !0) !== !1), Re && (Re.checked = (t?.appearance?.markdown?.modules?.lists ?? !0) !== !1), ze && (ze.checked = (t?.appearance?.markdown?.modules?.tables ?? !0) !== !1), Be && (Be.checked = (t?.appearance?.markdown?.modules?.codeBlocks ?? !0) !== !1), Ve && (Ve.checked = (t?.appearance?.markdown?.modules?.blockquotes ?? !0) !== !1), He && (He.checked = (t?.appearance?.markdown?.modules?.media ?? !0) !== !1), Ue && (Ue.checked = (t?.appearance?.markdown?.modules?.printBreaks ?? !0) !== !1), We && (We.checked = !!t?.appearance?.markdown?.plugins?.smartTypography), Ge && (Ge.checked = !!t?.appearance?.markdown?.plugins?.softBreaksAsBr), Ke && (Ke.checked = (t?.appearance?.markdown?.plugins?.externalLinksNewTab ?? !0) !== !1), qe && (qe.value = (t?.appearance?.markdown?.customCss || "").trim()), Je && (Je.value = (t?.appearance?.markdown?.printCss || "").trim()), Ye) {
			let e = Array.isArray(t?.appearance?.markdown?.extensions) ? t.appearance?.markdown?.extensions : [];
			Ye.value = e.length > 0 ? JSON.stringify(e, null, 2) : "";
		}
		if (Xe && (Xe.checked = !!t?.core?.ntpEnabled), F && (F.value = t?.core?.mode || "native"), I && (I.value = (t?.core?.endpointUrl || "").trim()), L && (L.value = (t?.core?.userId || "").trim()), R && (R.value = (t?.core?.userKey || "").trim()), z && (z.checked = (t?.core?.preferBackendSync ?? !0) !== !1), B && (B.checked = !!t?.core?.encrypt), V && (V.value = (t?.core?.appClientId || "").trim()), q && (q.checked = (t?.core?.useCoreIdentityForAirPad ?? !0) !== !1), J && (J.value = (t?.core?.socket?.accessToken || t?.core?.socket?.airpadAuthToken || "").trim()), Y && (Y.value = (t?.core?.socket?.routeTarget || t?.core?.socket?.selfId || "").trim()), X && (X.value = (t?.core?.socket?.clientAccessToken || "").trim()), Z && (Z.checked = (t?.core?.socket?.allowAccessTokenWithoutUserKey ?? !1) === !0), H && (H.checked = !!t?.core?.allowInsecureTls), U && (U.checked = !!t?.core?.ops?.allowUnencrypted), W && (W.value = (t?.core?.admin?.httpsOrigin || "").trim()), G && (G.value = (t?.core?.admin?.httpOrigin || "").trim()), K && (K.value = (t?.core?.admin?.path || "/").trim() || "/"), Ze && (Ze.checked = !!t?.shell?.maintainHubSocketConnection), Qe && (Qe.value = (t?.shell?.clipboardBroadcastTargets || "").trim()), $e && ($e.checked = !!t?.shell?.pushLocalClipboardToLan), et) {
			let e = Number(t?.shell?.clipboardPushIntervalMs);
			et.value = String(Number.isFinite(e) && e >= 800 ? Math.min(Math.round(e), 6e4) : 2e3);
		}
		tt && (tt.checked = (t?.shell?.enableRemoteClipboardBridge ?? !0) !== !1), nt && (nt.checked = (t?.shell?.acceptInboundClipboardData ?? !0) !== !1), rt && (rt.value = (t?.shell?.clipboardInboundAllowIds || "").trim()), it && (it.checked = (t?.shell?.accessTokenBypassesClipboardAllowlist ?? !1) === !0), at && (at.value = (t?.shell?.clipboardShareDestinationIds || "").trim()), ot && (ot.checked = (t?.shell?.applyRemoteClipboardToDevice ?? !0) !== !1), st && (st.checked = (t?.shell?.acceptContactsBridgeData ?? !1) === !0), ct && (ct.checked = (t?.shell?.acceptSmsBridgeData ?? !1) === !0), lt && (lt.checked = (t?.shell?.enableNativeSms ?? !0) !== !1), ut && (ut.checked = (t?.shell?.enableNativeContacts ?? !0) !== !1), gt(), de(Q, Array.isArray(t?.ai?.mcp) ? t.ai.mcp : []), a(t), p(t), e.onTheme?.(t?.appearance?.theme || "auto");
	}).catch(() => {
		de(Q, []);
	}), g?.addEventListener("change", () => {
		!h || !g || (h.type = g.checked ? "text" : "password");
	}), P?.addEventListener("change", () => {
		let t = P.value || "auto";
		(async () => {
			try {
				let e = await c();
				p({
					...e,
					appearance: {
						...e.appearance || {},
						theme: t
					}
				});
			} catch {
				p({ appearance: {
					theme: t,
					fontSize: "medium"
				} });
			}
			e.onTheme?.(t);
		})();
	}), i.addEventListener("click", (t) => {
		let n = ce(t);
		if (n?.closest?.("button[data-action=\"add-mcp-server\"]") && Q) {
			Q.querySelector(".mcp-empty-note")?.remove(), Q.appendChild(le({
				id: `mcp-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
				serverLabel: "",
				origin: "",
				clientKey: "",
				secretKey: ""
			}));
			return;
		}
		let i = n?.closest?.("button[data-action=\"remove-mcp-server\"]");
		if (i) {
			i.closest(".mcp-row")?.remove(), Q && !Q.querySelector("[data-mcp-id]") && de(Q, []);
			return;
		}
		if (n?.closest?.("button[data-action=\"open-user-styles\"]")) {
			_t("/user/styles/");
			return;
		}
		if (n?.closest?.("button[data-action=\"open-assets-readonly\"]")) {
			_t("/assets/");
			return;
		}
		if (n?.closest?.("button[data-action=\"open-admin-https\"]")) {
			u($(), "https");
			return;
		}
		if (n?.closest?.("button[data-action=\"open-admin-http\"]")) {
			u($(), "http");
			return;
		}
		if (n?.closest?.("button[data-action=\"copy-admin-https\"]")) {
			let e = d($());
			navigator.clipboard?.writeText?.(e.https).then(() => r("HTTPS admin URL copied."), () => r("Copy failed."));
			return;
		}
		if (n?.closest?.("button[data-action=\"copy-admin-http\"]")) {
			let e = d($());
			navigator.clipboard?.writeText?.(e.http).then(() => r("HTTP admin URL copied."), () => r("Copy failed."));
			return;
		}
		if (n?.closest?.("button[data-action=\"open-native-app-settings\"]")) {
			import("./clipboard-device-D70e8O5e.js").then((e) => e.openAppClipboardRelatedSettings()).then(() => r("App settings opened (native shell only).")).catch(() => r("Native settings unavailable in this context."));
			return;
		}
		if (n?.closest?.("button[data-action=\"open-native-notification-settings\"]")) {
			import("./clipboard-device-D70e8O5e.js").then((e) => e.openNativeNotificationSettings?.()).then(() => r("Notification settings opened (native shell only).")).catch(() => r("Native settings unavailable in this context."));
			return;
		}
		n?.closest?.("button[data-action=\"save\"]") && (async () => {
			let t = await c(), n = [], i = Ye?.value?.trim() || "";
			if (i) try {
				let e = JSON.parse(i);
				if (!Array.isArray(e)) throw Error("Markdown extensions JSON must be an array.");
				n = e;
			} catch (e) {
				mt("markdown"), r(e?.message || "Invalid Markdown extensions JSON.");
				return;
			}
			let a = await s({
				ai: {
					baseUrl: f?.value?.trim?.() || "",
					apiKey: h?.value?.trim?.() || "",
					model: _?.value || "gpt-5.4",
					customModel: _?.value === "custom" && v?.value?.trim?.() || "",
					defaultReasoningEffort: y?.value || "medium",
					defaultVerbosity: b?.value || "medium",
					maxOutputTokens: C(x?.value, 4e5),
					contextTruncation: S?.value || "disabled",
					promptCacheRetention: E?.value || "in-memory",
					maxToolCalls: C(D?.value, 8),
					parallelToolCalls: (O?.checked ?? !0) !== !1,
					requestTimeout: {
						low: C(k?.value, 6e4),
						medium: C(A?.value, 3e5),
						high: C(xe?.value, 9e5)
					},
					maxRetries: C(Se?.value, 2),
					shareTargetMode: Ce?.value || "recognize",
					autoProcessShared: (we?.checked ?? !0) !== !1,
					responseLanguage: M?.value || "auto",
					translateResults: !!Te?.checked,
					generateSvgGraphics: !!Ee?.checked,
					mcp: ue(Q)
				},
				speech: { language: N?.value || "en-US" },
				core: {
					...t.core,
					ntpEnabled: T(Xe, !!t.core?.ntpEnabled),
					mode: w(F, t.core?.mode || "native") || "native",
					endpointUrl: w(I, t.core?.endpointUrl || ""),
					userId: w(L, t.core?.userId || ""),
					userKey: w(R, t.core?.userKey || ""),
					encrypt: T(B, !!t.core?.encrypt),
					preferBackendSync: T(z, (t.core?.preferBackendSync ?? !0) !== !1),
					appClientId: w(V, t.core?.appClientId || ""),
					allowInsecureTls: T(H, !!t.core?.allowInsecureTls),
					useCoreIdentityForAirPad: T(q, (t.core?.useCoreIdentityForAirPad ?? !0) !== !1),
					socket: (() => {
						let e = { ...t.core?.socket || {} };
						return delete e.airpadAuthToken, {
							...e,
							accessToken: w(J, t.core?.socket?.accessToken || t.core?.socket?.airpadAuthToken || ""),
							routeTarget: w(Y, t.core?.socket?.routeTarget || ""),
							selfId: "",
							clientAccessToken: w(X, t.core?.socket?.clientAccessToken || ""),
							allowAccessTokenWithoutUserKey: T(Z, !!t.core?.socket?.allowAccessTokenWithoutUserKey)
						};
					})(),
					admin: {
						...t.core?.admin || {},
						httpsOrigin: w(W, t.core?.admin?.httpsOrigin || ""),
						httpOrigin: w(G, t.core?.admin?.httpOrigin || ""),
						path: w(K, t.core?.admin?.path || "/") || "/"
					},
					ops: {
						...t.core?.ops || {},
						allowUnencrypted: T(U, !!t.core?.ops?.allowUnencrypted)
					}
				},
				shell: {
					...t.shell || {},
					maintainHubSocketConnection: T(Ze, !!t.shell?.maintainHubSocketConnection),
					clipboardBroadcastTargets: w(Qe, t.shell?.clipboardBroadcastTargets || ""),
					pushLocalClipboardToLan: T($e, !!t.shell?.pushLocalClipboardToLan),
					clipboardPushIntervalMs: (() => {
						let e = et?.value, n = C(e, t.shell?.clipboardPushIntervalMs ?? 2e3);
						return Math.min(6e4, Math.max(800, Math.round(n)));
					})(),
					enableRemoteClipboardBridge: T(tt, (t.shell?.enableRemoteClipboardBridge ?? !0) !== !1),
					acceptInboundClipboardData: T(nt, (t.shell?.acceptInboundClipboardData ?? !0) !== !1),
					clipboardInboundAllowIds: w(rt, t.shell?.clipboardInboundAllowIds || ""),
					accessTokenBypassesClipboardAllowlist: T(it, !!t.shell?.accessTokenBypassesClipboardAllowlist),
					clipboardShareDestinationIds: w(at, t.shell?.clipboardShareDestinationIds || ""),
					applyRemoteClipboardToDevice: T(ot, (t.shell?.applyRemoteClipboardToDevice ?? !0) !== !1),
					acceptContactsBridgeData: T(st, !!t.shell?.acceptContactsBridgeData),
					acceptSmsBridgeData: T(ct, !!t.shell?.acceptSmsBridgeData),
					enableNativeSms: T(lt, (t.shell?.enableNativeSms ?? !0) !== !1),
					enableNativeContacts: T(ut, (t.shell?.enableNativeContacts ?? !0) !== !1)
				},
				appearance: {
					theme: P?.value || "auto",
					fontSize: De?.value || "medium",
					markdown: {
						preset: Oe?.value || "default",
						fontFamily: ke?.value || "system",
						fontSizePx: C(Ae?.value, 16),
						lineHeight: se(je?.value, 1.7, 1.1, 2.2),
						contentMaxWidthPx: C(Me?.value, 860),
						printScale: se(Ne?.value, 1, .5, 1.5),
						page: {
							size: Pe?.value || "auto",
							orientation: Fe?.value || "portrait",
							marginMm: C(Ie?.value, 12)
						},
						modules: {
							typography: (Le?.checked ?? !0) !== !1,
							lists: (Re?.checked ?? !0) !== !1,
							tables: (ze?.checked ?? !0) !== !1,
							codeBlocks: (Be?.checked ?? !0) !== !1,
							blockquotes: (Ve?.checked ?? !0) !== !1,
							media: (He?.checked ?? !0) !== !1,
							printBreaks: (Ue?.checked ?? !0) !== !1
						},
						plugins: {
							smartTypography: !!We?.checked,
							softBreaksAsBr: !!Ge?.checked,
							externalLinksNewTab: (Ke?.checked ?? !0) !== !1
						},
						customCss: qe?.value || "",
						printCss: Je?.value || "",
						extensions: n || []
					}
				}
			});
			import("./hub-socket-boot-BIA8z69L.js").then((e) => e.applyHubSocketFromSettings(a)), p(a), e.onTheme?.(a.appearance?.theme || "auto"), r("Saved.");
		})().catch((e) => r(String(e)));
	}), e.isExtension) {
		ft && (ft.hidden = !1), pt && (pt.hidden = !1);
		let e = t`<div class="ext-note">Extension mode: settings are stored in <code>chrome.storage.local</code>.</div>`;
		i.append(e);
	}
	return mt(ht(e.initialTab)), j(), i;
}, O = {
	appearance: {
		theme: "auto",
		fontSize: "medium"
	},
	ai: { autoProcess: !0 },
	general: {
		autosave: !0,
		notifications: !0
	}
}, k = class {
	id = "settings";
	name = "Settings";
	icon = "gear";
	options;
	shellContext;
	element = null;
	settings = i(O);
	_sheet = null;
	_shadowSheet = null;
	_styleEl = null;
	lifecycle = {
		onUnmount: () => {
			this.clearSettingsStylesheet();
		},
		onShow: () => {
			this.applySettingsStylesheet();
		},
		onHide: () => {
			this.clearSettingsStylesheet();
		}
	};
	constructor(e = {}) {
		this.options = e, this.shellContext = e.shellContext;
	}
	render(e) {
		return e && (this.options = {
			...this.options,
			...e
		}, this.shellContext = e.shellContext || this.shellContext), this.loadSettings(), this.element = D({
			isExtension: globalThis.chrome !== void 0 && !!globalThis.chrome?.runtime?.id,
			initialTab: e?.params?.tab || e?.params?.focus,
			onTheme: (e) => {
				this.options.onThemeChange?.(e);
			}
		}), this.element;
	}
	getToolbar() {
		return null;
	}
	setupEventHandlers() {}
	loadSettings() {
		this.settings.value = { ...O };
	}
	saveSettings() {
		this.options.onSettingsChange?.(this.settings.value);
	}
	resetSettings() {
		this.settings.value = { ...O }, this.updateUI();
	}
	updateUI() {
		if (!this.element) return;
		let e = this.element.querySelectorAll("[data-setting]");
		for (let t of e) {
			let [e, n] = t.dataset.setting.split("."), r = this.settings.value[e][n];
			t.type === "checkbox" ? t.checked = !!r : t.value = r || "";
		}
	}
	showMessage(e) {
		this.shellContext?.showMessage(e);
	}
	applySettingsStylesheet() {
		if (this._sheet || this._shadowSheet || this._styleEl) return;
		let e = this.element;
		if (!e?.isConnected) return;
		let t = "@charset \"UTF-8\";\n/* Settings view — self-contained stylesheet.\n * INVARIANT: Works inside open shadow roots: no reliance on `html:has(...)`, `:root:has(...)`,\n * or `html[data-active-view]` for paint. Uses inherited `color-scheme` + `light-dark()` fallbacks\n * wherever `--color-*` Veela tokens are absent on first paint.\n */\n@layer settings-view {\n  .view-settings {\n    color-scheme: inherit;\n    /* ── semantic tokens (Veela when inherited, else self-sufficient) ── */\n    --sv-bg: var(--color-surface, light-dark(#eef1f6, #0f1318));\n    --sv-fg: var(--color-on-surface, light-dark(#12151a, #e8edf2));\n    --sv-muted: var(--color-on-surface-variant, light-dark(#5c6570, #a8b0bc));\n    --sv-outline: var(--color-outline-variant, light-dark(#c5cdd8, #3d4755));\n    --sv-surface-1: var(--color-surface-container-low, light-dark(#ffffff, #171c24));\n    --sv-surface-2: var(--color-surface-container, light-dark(#f4f6fa, #1c232d));\n    --sv-primary: var(--color-primary, #007acc);\n    --sv-on-primary: var(--color-on-primary, #ffffff);\n    --sv-danger: var(--color-error, #d32f2f);\n    --sv-divider: color-mix(in oklab, var(--sv-outline) 35%, transparent);\n    --sv-ring: color-mix(in oklab, var(--sv-outline) 55%, transparent);\n    --sv-elev: 0 2px 14px color-mix(in oklab, var(--sv-fg) 5%, transparent);\n    box-sizing: border-box;\n    display: grid;\n    grid-template-rows: auto minmax(0, 1fr) auto;\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0;\n    inline-size: 100%;\n    block-size: 100%;\n    max-block-size: 100%;\n    min-block-size: 0;\n    margin: 0;\n    padding: clamp(0.5rem, 2cqi, 1rem);\n    overflow: hidden;\n    text-align: start;\n    font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif;\n    background-color: var(--sv-bg);\n    color: var(--sv-fg);\n  }\n  .view-settings *,\n  .view-settings *::before,\n  .view-settings *::after {\n    box-sizing: border-box;\n  }\n  .view-settings :where(select, input, textarea, option, button) {\n    pointer-events: auto;\n    font-family: inherit;\n  }\n  .view-settings textarea {\n    container-type: inline-size;\n    resize: vertical;\n    inline-size: 100%;\n    max-inline-size: 100%;\n  }\n  .view-settings h2,\n  .view-settings h3 {\n    margin: 0;\n    text-align: start;\n    color: var(--sv-fg);\n  }\n  .view-settings h2 {\n    font-size: 1.25rem;\n    font-weight: 700;\n    letter-spacing: -0.02em;\n  }\n  .view-settings h3 {\n    font-size: 0.94rem;\n    font-weight: 600;\n    letter-spacing: -0.01em;\n  }\n  .view-settings {\n    /* ── screen chrome ── */\n  }\n  .view-settings .settings-screen__top {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.75rem;\n    padding-block-end: 0.875rem;\n    border-block-end: 1px solid var(--sv-divider);\n    flex-shrink: 0;\n    min-inline-size: 0;\n  }\n  .view-settings .settings-screen__title {\n    font-weight: 600;\n    letter-spacing: -0.015em;\n    font-size: clamp(1.05rem, 2.5cqi, 1.35rem);\n  }\n  @media (min-width: 720px) {\n    .view-settings .settings-screen__top {\n      flex-direction: row;\n      flex-wrap: wrap;\n      align-items: center;\n      justify-content: space-between;\n    }\n    .view-settings .settings-screen__top .settings-tab-actions {\n      flex: 1;\n      justify-content: flex-end;\n    }\n  }\n  .view-settings .settings-screen__body {\n    min-block-size: 0;\n    min-inline-size: 0;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    overscroll-behavior: contain;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding-block: 0.75rem;\n    scrollbar-width: thin;\n    scrollbar-color: var(--sv-outline) transparent;\n  }\n  .view-settings .settings-screen__body::-webkit-scrollbar {\n    inline-size: 6px;\n  }\n  .view-settings .settings-screen__body::-webkit-scrollbar-thumb {\n    background: color-mix(in oklab, var(--sv-outline) 45%, transparent);\n    border-radius: 99px;\n  }\n  .view-settings .settings-screen__footer {\n    inline-size: stretch;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 0.5rem;\n    flex-wrap: wrap;\n    flex-shrink: 0;\n    padding-block: 0.75rem;\n    padding-inline: 0.25rem;\n    border-block-start: 1px solid var(--sv-divider);\n    background: color-mix(in oklab, var(--sv-surface-1) 85%, var(--sv-bg));\n    box-shadow: 0 -10px 28px color-mix(in oklab, var(--sv-fg) 4%, transparent);\n  }\n  .view-settings {\n    /* ── tabs ── */\n  }\n  .view-settings .settings-tab-actions {\n    display: flex;\n    flex-wrap: nowrap;\n    gap: 0.375rem;\n    align-items: center;\n    inline-size: stretch;\n    max-inline-size: stretch;\n    overflow-x: auto;\n    scrollbar-width: thin;\n    scrollbar-color: var(--sv-outline) transparent;\n    container-type: inline-size;\n    /* CRX / layered shells: ensure the tab strip participates in hit-testing */\n    pointer-events: auto;\n    position: relative;\n    z-index: 1;\n  }\n  .view-settings .settings-tab-btn {\n    pointer-events: auto;\n    cursor: pointer;\n    padding: 0.5rem 0.875rem;\n    min-block-size: 2.5rem;\n    border: none;\n    border-radius: 999px;\n    background: color-mix(in oklab, var(--sv-surface-2) 94%, transparent);\n    color: var(--sv-muted);\n    font-size: 0.75rem;\n    font-weight: 500;\n    transition: background-color 0.12s ease, color 0.12s ease, box-shadow 0.12s ease;\n    box-shadow: 0 0 0 1px color-mix(in oklab, var(--sv-outline) 14%, transparent);\n    white-space: nowrap;\n  }\n  .view-settings .settings-tab-btn:hover {\n    background: color-mix(in oklab, var(--sv-surface-2) 100%, transparent);\n    color: var(--sv-fg);\n  }\n  .view-settings .settings-tab-btn.is-active {\n    background: var(--sv-primary);\n    color: var(--sv-on-primary);\n    box-shadow: 0 2px 12px color-mix(in oklab, var(--sv-primary) 28%, transparent), 0 0 0 1px color-mix(in oklab, var(--sv-primary) 40%, transparent);\n  }\n  .view-settings .settings-tab-panel {\n    display: none;\n  }\n  .view-settings .settings-tab-panel.is-active {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.75rem;\n    min-inline-size: 0;\n  }\n  .view-settings {\n    /* ── cards & forms ── */\n  }\n  .view-settings .card {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n    padding: 1rem;\n    inline-size: stretch;\n    border: none;\n    border-radius: 16px;\n    background: color-mix(in oklab, var(--sv-surface-2) 92%, var(--sv-bg));\n    box-shadow: var(--sv-elev), 0 0 0 1px color-mix(in oklab, var(--sv-outline) 14%, transparent);\n  }\n  @container (max-inline-size: 480px) {\n    .view-settings .card {\n      padding: 0.875rem;\n      border-radius: 14px;\n    }\n  }\n  .view-settings .settings-panel-form {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n    inline-size: stretch;\n  }\n  .view-settings .field {\n    display: grid;\n    grid-auto-flow: row;\n    gap: 0.375rem;\n    inline-size: stretch;\n    font-size: 0.75rem;\n    margin: 0;\n  }\n  .view-settings .field > span {\n    font-size: 0.75rem;\n    font-weight: 500;\n    color: var(--sv-muted);\n  }\n  .view-settings .field.checkbox {\n    grid-auto-flow: column;\n    grid-auto-columns: max-content 1fr;\n    align-items: center;\n    gap: 0.625rem;\n  }\n  .view-settings .field-hint {\n    margin: 0 0 0.75rem;\n    font-size: 0.85em;\n    line-height: 1.45;\n    color: var(--sv-muted);\n    opacity: 0.95;\n  }\n  .view-settings .form-input,\n  .view-settings .form-select {\n    display: block;\n    inline-size: 100%;\n    min-block-size: 2.5rem;\n    padding: 0.5rem 0.65rem;\n    border-radius: 10px;\n    border: 1px solid color-mix(in oklab, var(--sv-outline) 45%, transparent);\n    background: var(--sv-surface-1);\n    color: var(--sv-fg);\n    font-size: 0.875rem;\n    line-height: 1.25;\n    outline: none;\n    transition: border-color 0.12s ease, box-shadow 0.12s ease;\n  }\n  .view-settings .form-input:focus-visible,\n  .view-settings .form-select:focus-visible {\n    border-color: color-mix(in oklab, var(--sv-primary) 55%, var(--sv-outline));\n    box-shadow: 0 0 0 3px color-mix(in oklab, var(--sv-primary) 22%, transparent);\n  }\n  .view-settings select.form-select,\n  .view-settings select.form-input {\n    appearance: none;\n    padding-inline-end: 2rem;\n    background-image: linear-gradient(45deg, transparent 50%, var(--sv-muted) 50%), linear-gradient(135deg, var(--sv-muted) 50%, transparent 50%);\n    background-position: calc(100% - 14px) calc(50% - 2px), calc(100% - 9px) calc(50% - 2px);\n    background-size: 5px 5px;\n    background-repeat: no-repeat;\n  }\n  .view-settings {\n    /* ── buttons ── */\n  }\n  .view-settings .btn {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.35rem;\n    padding: 0.5rem 1.125rem;\n    min-block-size: 2.5rem;\n    border: none;\n    border-radius: 999px;\n    background: color-mix(in oklab, var(--sv-surface-2) 90%, transparent);\n    color: var(--sv-fg);\n    font-size: 0.8125rem;\n    font-weight: 500;\n    cursor: pointer;\n    transition: background-color 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;\n    box-shadow: 0 0 0 1px color-mix(in oklab, var(--sv-outline) 12%, transparent);\n  }\n  .view-settings .btn:hover {\n    background: color-mix(in oklab, var(--sv-fg) 6%, var(--sv-surface-2));\n  }\n  .view-settings .btn.primary {\n    background: var(--sv-primary);\n    color: var(--sv-on-primary);\n    box-shadow: 0 2px 12px color-mix(in oklab, var(--sv-primary) 26%, transparent), 0 0 0 1px color-mix(in oklab, var(--sv-primary) 45%, transparent);\n  }\n  .view-settings .btn.primary:hover {\n    filter: brightness(1.06);\n  }\n  .view-settings .btn.btn-sm, .view-settings .btn.small {\n    padding: 0.35rem 0.65rem;\n    min-block-size: 2rem;\n    font-size: 0.75rem;\n  }\n  .view-settings .btn.btn-danger {\n    color: var(--sv-on-primary);\n    background: color-mix(in oklab, var(--sv-danger) 92%, #000);\n    box-shadow: 0 0 0 1px color-mix(in oklab, var(--sv-danger) 35%, transparent);\n  }\n  .view-settings .btn.btn-danger:hover {\n    filter: brightness(1.08);\n  }\n  .view-settings .btn.tiny {\n    min-block-size: 2rem;\n    padding: 0.3rem 0.5rem;\n    font-size: 0.72rem;\n  }\n  .view-settings .note,\n  .view-settings .ext-note {\n    font-size: 0.75rem;\n    color: var(--sv-muted);\n    opacity: 0.92;\n    flex: 0 1 auto;\n    max-inline-size: 100%;\n    display: block;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    pointer-events: none;\n  }\n  .view-settings .ext-note {\n    line-height: 1.4;\n  }\n  .view-settings .ext-note code {\n    padding: 2px 6px;\n    border-radius: 4px;\n    font-size: 0.68rem;\n    background: color-mix(in oklab, var(--sv-surface-2) 80%, var(--sv-bg));\n    color: var(--sv-fg);\n  }\n  .view-settings {\n    /* ── checkboxes ── */\n  }\n  .view-settings .form-checkbox input[type=checkbox],\n  .view-settings label.field.checkbox input[type=checkbox] {\n    inline-size: 1.15rem;\n    block-size: 1.15rem;\n    accent-color: var(--sv-primary);\n    flex-shrink: 0;\n  }\n  .view-settings {\n    /* ── MCP ── */\n  }\n  .view-settings .mcp-section {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .view-settings .mcp-actions {\n    margin-block-start: 0.5rem;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n  }\n  .view-settings .mcp-row {\n    display: grid;\n    gap: 0.5rem;\n    padding: 0.75rem;\n    border-radius: 12px;\n    background: color-mix(in oklab, var(--sv-surface-2) 88%, var(--sv-bg));\n    box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--sv-outline) 12%, transparent);\n  }\n  .view-settings .mcp-row .field {\n    margin: 0;\n  }\n  .view-settings .mcp-empty-note {\n    margin: 0;\n    color: var(--sv-muted);\n    font-size: 0.75rem;\n  }\n  .view-settings {\n    /* ── spoiler / details ── */\n  }\n  .view-settings .settings-spoiler {\n    border-radius: 12px;\n    border: 1px solid color-mix(in oklab, var(--sv-outline) 22%, transparent);\n    background: color-mix(in oklab, var(--sv-surface-1) 55%, transparent);\n    padding: 0.25rem 0.5rem;\n  }\n  .view-settings .settings-spoiler summary {\n    cursor: pointer;\n    font-size: 0.8rem;\n    font-weight: 600;\n    padding: 0.35rem 0.25rem;\n    color: var(--sv-fg);\n  }\n  .view-settings .settings-spoiler .settings-panel-form {\n    padding-block-end: 0.25rem;\n  }\n  .view-settings {\n    /* ── legacy / demo shell (index.ts) ── */\n  }\n  .view-settings .view-settings__content {\n    inline-size: 100%;\n    max-inline-size: clamp(640px, 90%, 800px);\n  }\n  .view-settings .view-settings__section {\n    display: flex;\n    flex-direction: column;\n    margin-block-end: 2rem;\n    padding-block-end: 2rem;\n    border-block-end: 1px solid var(--sv-divider);\n  }\n  .view-settings .view-settings__section:last-of-type {\n    border-block-end: none;\n  }\n  .view-settings .view-settings__group {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .view-settings .view-settings__label {\n    display: flex;\n    flex-direction: column;\n    gap: 0.375rem;\n  }\n  .view-settings .view-settings__label > span {\n    font-size: 0.8125rem;\n    font-weight: 500;\n  }\n  .view-settings .view-settings__select,\n  .view-settings .view-settings__input {\n    min-block-size: 2.5rem;\n    padding: 0.45rem 0.6rem;\n    border-radius: 10px;\n    border: 1px solid color-mix(in oklab, var(--sv-outline) 45%, transparent);\n    background: var(--sv-surface-1);\n    color: var(--sv-fg);\n    font-size: 0.875rem;\n  }\n  .view-settings .view-settings__checkbox {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    font-size: 0.8125rem;\n  }\n  .view-settings .view-settings__actions {\n    display: flex;\n    gap: 0.75rem;\n    margin-block-start: 1.5rem;\n  }\n  .view-settings .view-settings__btn {\n    padding: 0.55rem 1.1rem;\n    border-radius: 8px;\n    border: 1px solid color-mix(in oklab, var(--sv-outline) 40%, transparent);\n    background: transparent;\n    color: var(--sv-fg);\n    cursor: pointer;\n  }\n  .view-settings .view-settings__btn--primary {\n    background: var(--sv-primary);\n    border-color: color-mix(in oklab, var(--sv-primary) 30%, #000);\n    color: var(--sv-on-primary);\n  }\n  .view-settings .view-settings__btn--primary:hover {\n    filter: brightness(1.06);\n  }\n  .view-settings {\n    /* ── custom instructions (panel + editor variants) ── */\n  }\n  .view-settings .custom-instructions-panel,\n  .view-settings .custom-instructions-editor {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .view-settings .cip-select-row,\n  .view-settings .ci-row {\n    display: flex;\n    flex-direction: column;\n    gap: 0.35rem;\n  }\n  .view-settings .ci-header {\n    margin-block-end: 0.25rem;\n  }\n  .view-settings .ci-header h4 {\n    margin: 0 0 0.25rem;\n    font-size: 0.88rem;\n  }\n  .view-settings .ci-desc {\n    margin: 0;\n    font-size: 0.78rem;\n    color: var(--sv-muted);\n    line-height: 1.45;\n  }\n  .view-settings .ci-active-select {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n  .view-settings .ci-select,\n  .view-settings .cip-select {\n    min-block-size: 2.35rem;\n    padding: 0.4rem 0.55rem;\n    border-radius: 10px;\n    border: 1px solid color-mix(in oklab, var(--sv-outline) 40%, transparent);\n    background: var(--sv-surface-1);\n    color: var(--sv-fg);\n    font-size: 0.8rem;\n  }\n  .view-settings .cip-list,\n  .view-settings .ci-list {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .view-settings .cip-item,\n  .view-settings .ci-item {\n    padding: 0.65rem 0.75rem;\n    border-radius: 12px;\n    background: var(--sv-surface-1);\n    border: 1px solid color-mix(in oklab, var(--sv-outline) 16%, transparent);\n  }\n  .view-settings .cip-item.is-active, .view-settings .cip-item.active,\n  .view-settings .ci-item.is-active,\n  .view-settings .ci-item.active {\n    border-color: color-mix(in oklab, var(--sv-primary) 35%, transparent);\n    box-shadow: 0 0 0 1px color-mix(in oklab, var(--sv-primary) 18%, transparent);\n  }\n  .view-settings .cip-item-header,\n  .view-settings .ci-item-header {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 0.5rem;\n  }\n  .view-settings .cip-item-label,\n  .view-settings .ci-item-label {\n    font-weight: 600;\n    font-size: 0.8rem;\n  }\n  .view-settings .cip-item-actions,\n  .view-settings .ci-item-actions {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.35rem;\n    justify-content: flex-end;\n  }\n  .view-settings .cip-badge,\n  .view-settings .ci-badge {\n    font-size: 0.65rem;\n    padding: 0.15rem 0.4rem;\n    border-radius: 999px;\n    background: color-mix(in oklab, var(--sv-primary) 16%, transparent);\n    color: var(--sv-fg);\n  }\n  .view-settings .cip-item-preview,\n  .view-settings .ci-item-preview {\n    font-size: 0.75rem;\n    color: var(--sv-muted);\n    margin-block-start: 0.35rem;\n    line-height: 1.45;\n  }\n  .view-settings .cip-edit-form,\n  .view-settings .ci-edit-form {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    margin-block-start: 0.5rem;\n  }\n  .view-settings .cip-form-actions,\n  .view-settings .cip-toolbar,\n  .view-settings .ci-actions,\n  .view-settings .ci-add-actions,\n  .view-settings .ci-edit-actions {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n    align-items: center;\n  }\n  .view-settings .cip-input,\n  .view-settings .cip-textarea,\n  .view-settings .ci-input,\n  .view-settings .ci-textarea,\n  .view-settings .field-control {\n    inline-size: 100%;\n    border-radius: 10px;\n    border: 1px solid color-mix(in oklab, var(--sv-outline) 40%, transparent);\n    background: var(--sv-surface-1);\n    color: var(--sv-fg);\n    padding: 0.45rem 0.55rem;\n    font-size: 0.8125rem;\n  }\n  .view-settings .cip-textarea,\n  .view-settings .ci-textarea {\n    min-block-size: 5rem;\n  }\n  .view-settings .cip-empty,\n  .view-settings .ci-empty {\n    font-size: 0.8rem;\n    color: var(--sv-muted);\n    padding: 0.75rem;\n    text-align: center;\n  }\n  .view-settings .field-label {\n    font-size: 0.72rem;\n    font-weight: 600;\n    color: var(--sv-muted);\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n  }\n  .view-settings {\n    /* ── touch targets & responsive footer ── */\n  }\n  @container (max-inline-size: 1024px) {\n    .view-settings {\n      padding: 0.65rem;\n    }\n  }\n  @container (max-inline-size: 560px) {\n    .view-settings .settings-tab-actions {\n      gap: 0.3rem;\n    }\n    .view-settings .settings-tab-btn {\n      min-block-size: 2.65rem;\n      padding-inline: 0.7rem;\n    }\n  }\n  @container (max-inline-size: 480px) {\n    .view-settings {\n      padding: 0.45rem;\n    }\n    .view-settings .settings-screen__title {\n      display: none;\n    }\n    .view-settings .settings-screen__body {\n      padding-block: 0.5rem;\n      gap: 0.75rem;\n    }\n    .view-settings .settings-screen__footer {\n      flex-direction: column-reverse;\n      align-items: stretch;\n      gap: 0.5rem;\n    }\n    .view-settings .settings-screen__footer .btn.primary {\n      inline-size: 100%;\n      justify-content: center;\n      min-block-size: 2.75rem;\n    }\n    .view-settings .settings-screen__footer .note {\n      white-space: normal;\n      text-align: center;\n    }\n  }\n}", r = e.getRootNode();
		if (r instanceof ShadowRoot) try {
			let e = new CSSStyleSheet();
			e.replaceSync(t), r.adoptedStyleSheets = [...r.adoptedStyleSheets, e], this._shadowSheet = {
				sheet: e,
				root: r
			};
		} catch (e) {
			console.warn("[SettingsView] Shadow stylesheet adoption failed; using <style> fallback", e);
			let n = document.createElement("style");
			n.setAttribute("data-settings-view-css", ""), n.textContent = t, r.appendChild(n), this._styleEl = n;
		}
		else this._sheet = n(b);
	}
	clearSettingsStylesheet() {
		try {
			if (this._styleEl) {
				this._styleEl.remove(), this._styleEl = null;
				return;
			}
			if (this._shadowSheet) {
				let { sheet: e, root: t } = this._shadowSheet;
				t.adoptedStyleSheets = t.adoptedStyleSheets.filter((t) => t !== e), this._shadowSheet = null;
				return;
			}
			this._sheet &&= (e(this._sheet), null);
		} catch {}
	}
	canHandleMessage(e) {
		return e === "settings-update";
	}
	async handleMessage(e) {
		let t = e;
		t.data && (this.settings.value = {
			...this.settings.value,
			...t.data
		}, this.updateUI());
	}
	invokeChannelApi(e, t) {
		if (e === l.Patch || e === l.SettingsUpdate) return this.handleMessage({ data: t }), (async () => {
			try {
				let [{ loadSettings: e }, { applyTheme: n }] = await Promise.all([import("./settings-config-C0VzCau4.js"), import("./theme-BYaDcyUn.js").then((e) => e.t)]), r = await e(), i = t;
				n({
					...r,
					...i,
					appearance: {
						...r.appearance || {},
						...i.appearance || {}
					}
				});
			} catch (e) {
				console.warn("[SettingsView] channel applyTheme failed:", e);
			}
		})(), !0;
	}
};
function A(e) {
	return new k(e);
}
//#endregion
export { k as SettingsView, A as createView, A as default };
