import { Cr as e, Ut as t, ir as n, or as r } from "./src-C-qx_Mx3.js";
import { f as i } from "./config-CdEaAxAm.js";
import { g as a } from "./cwsp-endpoint-resolve-DtbuqyNS.js";
import { t as o } from "./SettingsTypes-DAv90T5n.js";
import { c as s, h as c, p as l, u } from "./Settings-BAxgoWK0.js";
import { s as d } from "./messaging-DTqWl-L-.js";
import { a as f } from "./channel-actions-k77dxast.js";
import { a as p, c as m, i as h, l as g, n as _, o as ee, r as v, s as y, t as b, u as x } from "./register-builtin-contributions-DiZ8Tc3v.js";
import { n as S, r as te } from "./admin-doors-5YXXx4lp.js";
import { n as C } from "./capacitor-permissions-1LEZL9Oy.js";
import { t as ne } from "./instruction-templates-C7Si04Df.js";
import { t as w } from "./Theme-CdcoWri7.js";
import "./theme-DbFndQdi.js";
import { f as T } from "./views-AD17wavT.js";
import { a as re, t as ie } from "./storage-lN1pTVHb.js";
import { a as ae, n as oe, o as E, r as D, s as O, t as k } from "./custom-instructions-DFS-KejK.js";
//#endregion
//#region ../settings-view/src/ts/settings-styles-attach.ts
var A = "data-settings-view-css", se = (e) => {
	let t = String(e || "").trim(), n = t.match(/^@layer\s+settings-view\s*\{([\s\S]*)\}\s*$/);
	return n && (t = n[1].trim()), t;
}, j = "\n.view-settings{display:grid!important;grid-template-rows:auto minmax(0,1fr) auto!important;block-size:100%!important;min-block-size:0!important;overflow:hidden!important;color:#e8edf2!important;background:#0f1318!important}\n.view-settings .settings-screen__body{display:flex!important;flex-direction:column!important;min-block-size:0!important;overflow:auto!important;-webkit-overflow-scrolling:touch}\n.view-settings [data-tab-panel]:not([hidden]){display:flex!important;flex-direction:column!important;gap:.75rem!important}\n.view-settings [data-tab-panel][hidden]{display:none!important}\n.view-settings .field,.view-settings .form-input,.view-settings .form-select{pointer-events:auto!important;color:inherit!important}\n", M = (e) => {
	if (!e?.classList?.contains("view-settings") || e.querySelector(`style[${A}]`)) return;
	let t = se("@charset \"UTF-8\";\n/* Settings view — self-contained stylesheet.\n * INVARIANT: Works inside open shadow roots: no reliance on `html:has(...)`, `:root:has(...)`,\n * or `html[data-active-view]` for paint. Uses inherited `color-scheme` + `light-dark()` fallbacks\n * wherever `--color-*` Veela tokens are absent on first paint.\n */\n@layer settings-view {\n  .view-settings {\n    color-scheme: inherit;\n    /* ── semantic tokens (Veela when inherited, else self-sufficient) ── */\n    --sv-bg: var(--color-surface, light-dark(#eef1f6, #0f1318));\n    --sv-fg: var(--color-on-surface, light-dark(#12151a, #e8edf2));\n    --sv-muted: var(--color-on-surface-variant, light-dark(#5c6570, #a8b0bc));\n    --sv-outline: var(--color-outline-variant, light-dark(#c5cdd8, #3d4755));\n    --sv-surface-1: var(--color-surface-container-low, light-dark(#ffffff, #171c24));\n    --sv-surface-2: var(--color-surface-container, light-dark(#f4f6fa, #1c232d));\n    --sv-primary: var(--color-primary, #007acc);\n    --sv-on-primary: var(--color-on-primary, #ffffff);\n    --sv-danger: var(--color-error, #d32f2f);\n    --sv-divider: color-mix(in oklab, var(--sv-outline) 35%, transparent);\n    --sv-ring: color-mix(in oklab, var(--sv-outline) 55%, transparent);\n    --sv-elev: 0 2px 14px color-mix(in oklab, var(--sv-fg) 5%, transparent);\n    box-sizing: border-box;\n    display: grid;\n    grid-template-rows: auto minmax(0, 1fr) auto;\n    grid-template-columns: minmax(0, 1fr);\n    gap: 0;\n    inline-size: 100%;\n    block-size: 100%;\n    max-block-size: 100%;\n    min-block-size: 0;\n    margin: 0;\n    padding: clamp(0.5rem, 2cqi, 1rem);\n    overflow: hidden;\n    text-align: start;\n    font-family: system-ui, -apple-system, \"Segoe UI\", Roboto, sans-serif;\n    background-color: var(--sv-bg);\n    color: var(--sv-fg);\n  }\n  .view-settings *,\n  .view-settings *::before,\n  .view-settings *::after {\n    box-sizing: border-box;\n  }\n  .view-settings :where(select, input, textarea, option, button) {\n    pointer-events: auto;\n    font-family: inherit;\n  }\n  .view-settings textarea {\n    container-type: inline-size;\n    resize: vertical;\n    inline-size: 100%;\n    max-inline-size: 100%;\n  }\n  .view-settings h2,\n  .view-settings h3 {\n    margin: 0;\n    text-align: start;\n    color: var(--sv-fg);\n  }\n  .view-settings h2 {\n    font-size: 1.25rem;\n    font-weight: 700;\n    letter-spacing: -0.02em;\n  }\n  .view-settings h3 {\n    font-size: 0.94rem;\n    font-weight: 600;\n    letter-spacing: -0.01em;\n  }\n  .view-settings {\n    /* ── screen chrome ── */\n  }\n  .view-settings .settings-screen__top {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.75rem;\n    padding-block-end: 0.875rem;\n    border-block-end: 1px solid var(--sv-divider);\n    flex-shrink: 0;\n    min-inline-size: 0;\n  }\n  .view-settings .settings-screen__title {\n    font-weight: 600;\n    letter-spacing: -0.015em;\n    font-size: clamp(1.05rem, 2.5cqi, 1.35rem);\n  }\n  @media (min-width: 720px) {\n    .view-settings .settings-screen__top {\n      flex-direction: row;\n      flex-wrap: wrap;\n      align-items: center;\n      justify-content: space-between;\n    }\n    .view-settings .settings-screen__top .settings-tab-actions {\n      flex: 1;\n      justify-content: flex-end;\n    }\n  }\n  .view-settings .settings-screen__body {\n    min-block-size: 0;\n    min-inline-size: 0;\n    overflow: auto;\n    -webkit-overflow-scrolling: touch;\n    overscroll-behavior: contain;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    padding-block: 0.75rem;\n    scrollbar-width: thin;\n    scrollbar-color: var(--sv-outline) transparent;\n  }\n  .view-settings .settings-screen__body::-webkit-scrollbar {\n    inline-size: 6px;\n  }\n  .view-settings .settings-screen__body::-webkit-scrollbar-thumb {\n    background: color-mix(in oklab, var(--sv-outline) 45%, transparent);\n    border-radius: 99px;\n  }\n  .view-settings .settings-screen__footer {\n    inline-size: stretch;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: 0.5rem;\n    flex-wrap: wrap;\n    flex-shrink: 0;\n    padding-block: 0.75rem;\n    padding-inline: 0.25rem;\n    border-block-start: 1px solid var(--sv-divider);\n    background: color-mix(in oklab, var(--sv-surface-1) 85%, var(--sv-bg));\n    box-shadow: 0 -10px 28px color-mix(in oklab, var(--sv-fg) 4%, transparent);\n  }\n  .view-settings {\n    /* ── tabs ── */\n  }\n  .view-settings .settings-tab-actions {\n    display: flex;\n    flex-wrap: nowrap;\n    gap: 0.375rem;\n    align-items: center;\n    inline-size: stretch;\n    max-inline-size: stretch;\n    overflow-x: auto;\n    scrollbar-width: thin;\n    scrollbar-color: var(--sv-outline) transparent;\n    container-type: inline-size;\n    /* CRX / layered shells: ensure the tab strip participates in hit-testing */\n    pointer-events: auto;\n    position: relative;\n    z-index: 1;\n  }\n  .view-settings .settings-tab-btn {\n    pointer-events: auto;\n    cursor: pointer;\n    padding: 0.5rem 0.875rem;\n    min-block-size: 2.5rem;\n    border: none;\n    border-radius: 999px;\n    background: color-mix(in oklab, var(--sv-surface-2) 94%, transparent);\n    color: var(--sv-muted);\n    font-size: 0.75rem;\n    font-weight: 500;\n    transition: background-color 0.12s ease, color 0.12s ease, box-shadow 0.12s ease;\n    box-shadow: 0 0 0 1px color-mix(in oklab, var(--sv-outline) 14%, transparent);\n    white-space: nowrap;\n  }\n  .view-settings .settings-tab-btn:hover {\n    background: color-mix(in oklab, var(--sv-surface-2) 100%, transparent);\n    color: var(--sv-fg);\n  }\n  .view-settings .settings-tab-btn.is-active {\n    background: var(--sv-primary);\n    color: var(--sv-on-primary);\n    box-shadow: 0 2px 12px color-mix(in oklab, var(--sv-primary) 28%, transparent), 0 0 0 1px color-mix(in oklab, var(--sv-primary) 40%, transparent);\n  }\n  .view-settings .settings-tab-panel {\n    display: none;\n  }\n  .view-settings .settings-tab-panel:not([hidden]), .view-settings .settings-tab-panel.is-active:not([hidden]) {\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.75rem;\n    min-inline-size: 0;\n  }\n  .view-settings .settings-tab-panel[hidden] {\n    display: none !important;\n  }\n  .view-settings {\n    /* ── cards & forms ── */\n  }\n  .view-settings .card {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n    padding: 1rem;\n    inline-size: stretch;\n    border: none;\n    border-radius: 16px;\n    background: color-mix(in oklab, var(--sv-surface-2) 92%, var(--sv-bg));\n    box-shadow: var(--sv-elev), 0 0 0 1px color-mix(in oklab, var(--sv-outline) 14%, transparent);\n  }\n  @container (max-inline-size: 480px) {\n    .view-settings .card {\n      padding: 0.875rem;\n      border-radius: 14px;\n    }\n  }\n  .view-settings .settings-panel-form {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n    inline-size: stretch;\n  }\n  .view-settings .field {\n    display: grid;\n    grid-auto-flow: row;\n    gap: 0.375rem;\n    inline-size: stretch;\n    font-size: 0.75rem;\n    margin: 0;\n  }\n  .view-settings .field > span {\n    font-size: 0.75rem;\n    font-weight: 500;\n    color: var(--sv-muted);\n  }\n  .view-settings .field.checkbox {\n    grid-auto-flow: column;\n    grid-auto-columns: max-content 1fr;\n    align-items: center;\n    gap: 0.625rem;\n  }\n  .view-settings .field-hint {\n    margin: 0 0 0.75rem;\n    font-size: 0.85em;\n    line-height: 1.45;\n    color: var(--sv-muted);\n    opacity: 0.95;\n  }\n  .view-settings .form-input,\n  .view-settings .form-select {\n    display: block;\n    inline-size: 100%;\n    min-block-size: 2.5rem;\n    padding: 0.5rem 0.65rem;\n    border-radius: 10px;\n    border: 1px solid color-mix(in oklab, var(--sv-outline) 45%, transparent);\n    background: var(--sv-surface-1);\n    color: var(--sv-fg);\n    font-size: 0.875rem;\n    line-height: 1.25;\n    outline: none;\n    transition: border-color 0.12s ease, box-shadow 0.12s ease;\n  }\n  .view-settings .form-input:focus-visible,\n  .view-settings .form-select:focus-visible {\n    border-color: color-mix(in oklab, var(--sv-primary) 55%, var(--sv-outline));\n    box-shadow: 0 0 0 3px color-mix(in oklab, var(--sv-primary) 22%, transparent);\n  }\n  .view-settings select.form-select,\n  .view-settings select.form-input {\n    appearance: none;\n    padding-inline-end: 2rem;\n    background-image: linear-gradient(45deg, transparent 50%, var(--sv-muted) 50%), linear-gradient(135deg, var(--sv-muted) 50%, transparent 50%);\n    background-position: calc(100% - 14px) calc(50% - 2px), calc(100% - 9px) calc(50% - 2px);\n    background-size: 5px 5px;\n    background-repeat: no-repeat;\n  }\n  .view-settings {\n    /* ── buttons ── */\n  }\n  .view-settings .btn {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: 0.35rem;\n    padding: 0.5rem 1.125rem;\n    min-block-size: 2.5rem;\n    border: none;\n    border-radius: 999px;\n    background: color-mix(in oklab, var(--sv-surface-2) 90%, transparent);\n    color: var(--sv-fg);\n    font-size: 0.8125rem;\n    font-weight: 500;\n    cursor: pointer;\n    transition: background-color 0.12s ease, box-shadow 0.12s ease, filter 0.12s ease;\n    box-shadow: 0 0 0 1px color-mix(in oklab, var(--sv-outline) 12%, transparent);\n  }\n  .view-settings .btn:hover {\n    background: color-mix(in oklab, var(--sv-fg) 6%, var(--sv-surface-2));\n  }\n  .view-settings .btn.primary {\n    background: var(--sv-primary);\n    color: var(--sv-on-primary);\n    box-shadow: 0 2px 12px color-mix(in oklab, var(--sv-primary) 26%, transparent), 0 0 0 1px color-mix(in oklab, var(--sv-primary) 45%, transparent);\n  }\n  .view-settings .btn.primary:hover {\n    filter: brightness(1.06);\n  }\n  .view-settings .btn.btn-sm, .view-settings .btn.small {\n    padding: 0.35rem 0.65rem;\n    min-block-size: 2rem;\n    font-size: 0.75rem;\n  }\n  .view-settings .btn.btn-danger {\n    color: var(--sv-on-primary);\n    background: color-mix(in oklab, var(--sv-danger) 92%, #000);\n    box-shadow: 0 0 0 1px color-mix(in oklab, var(--sv-danger) 35%, transparent);\n  }\n  .view-settings .btn.btn-danger:hover {\n    filter: brightness(1.08);\n  }\n  .view-settings .btn.tiny {\n    min-block-size: 2rem;\n    padding: 0.3rem 0.5rem;\n    font-size: 0.72rem;\n  }\n  .view-settings .note,\n  .view-settings .ext-note {\n    font-size: 0.75rem;\n    color: var(--sv-muted);\n    opacity: 0.92;\n    flex: 1 1 auto;\n    max-inline-size: 100%;\n    display: block;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: normal;\n    line-height: 1.35;\n    pointer-events: none;\n  }\n  .view-settings .note.note--ok,\n  .view-settings .ext-note.note--ok {\n    color: color-mix(in oklab, var(--sv-accent, #3ecf8e) 70%, var(--sv-fg));\n  }\n  .view-settings .note.note--warn,\n  .view-settings .ext-note.note--warn {\n    color: color-mix(in oklab, #e6a700 75%, var(--sv-fg));\n  }\n  .view-settings .note.note--err,\n  .view-settings .ext-note.note--err {\n    color: color-mix(in oklab, #e05252 80%, var(--sv-fg));\n  }\n  .view-settings .ext-note {\n    line-height: 1.4;\n  }\n  .view-settings .ext-note code {\n    padding: 2px 6px;\n    border-radius: 4px;\n    font-size: 0.68rem;\n    background: color-mix(in oklab, var(--sv-surface-2) 80%, var(--sv-bg));\n    color: var(--sv-fg);\n  }\n  .view-settings {\n    /* ── checkboxes ── */\n  }\n  .view-settings .form-checkbox input[type=checkbox],\n  .view-settings label.field.checkbox input[type=checkbox] {\n    inline-size: 1.15rem;\n    block-size: 1.15rem;\n    accent-color: var(--sv-primary);\n    flex-shrink: 0;\n  }\n  .view-settings {\n    /* ── MCP ── */\n  }\n  .view-settings .mcp-section {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .view-settings .mcp-actions {\n    margin-block-start: 0.5rem;\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n  }\n  .view-settings .mcp-row {\n    display: grid;\n    gap: 0.5rem;\n    padding: 0.75rem;\n    border-radius: 12px;\n    background: color-mix(in oklab, var(--sv-surface-2) 88%, var(--sv-bg));\n    box-shadow: inset 0 0 0 1px color-mix(in oklab, var(--sv-outline) 12%, transparent);\n  }\n  .view-settings .mcp-row .field {\n    margin: 0;\n  }\n  .view-settings .mcp-empty-note {\n    margin: 0;\n    color: var(--sv-muted);\n    font-size: 0.75rem;\n  }\n  .view-settings {\n    /* ── spoiler / details ── */\n  }\n  .view-settings .settings-spoiler {\n    border-radius: 12px;\n    border: 1px solid color-mix(in oklab, var(--sv-outline) 22%, transparent);\n    background: color-mix(in oklab, var(--sv-surface-1) 55%, transparent);\n    padding: 0.25rem 0.5rem;\n  }\n  .view-settings .settings-spoiler summary {\n    cursor: pointer;\n    font-size: 0.8rem;\n    font-weight: 600;\n    padding: 0.35rem 0.25rem;\n    color: var(--sv-fg);\n  }\n  .view-settings .settings-spoiler .settings-panel-form {\n    padding-block-end: 0.25rem;\n  }\n  .view-settings {\n    /* ── legacy / demo shell (index.ts) ── */\n  }\n  .view-settings .view-settings__content {\n    inline-size: 100%;\n    max-inline-size: clamp(640px, 90%, 800px);\n  }\n  .view-settings .view-settings__section {\n    display: flex;\n    flex-direction: column;\n    margin-block-end: 2rem;\n    padding-block-end: 2rem;\n    border-block-end: 1px solid var(--sv-divider);\n  }\n  .view-settings .view-settings__section:last-of-type {\n    border-block-end: none;\n  }\n  .view-settings .view-settings__group {\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n  }\n  .view-settings .view-settings__label {\n    display: flex;\n    flex-direction: column;\n    gap: 0.375rem;\n  }\n  .view-settings .view-settings__label > span {\n    font-size: 0.8125rem;\n    font-weight: 500;\n  }\n  .view-settings .view-settings__select,\n  .view-settings .view-settings__input {\n    min-block-size: 2.5rem;\n    padding: 0.45rem 0.6rem;\n    border-radius: 10px;\n    border: 1px solid color-mix(in oklab, var(--sv-outline) 45%, transparent);\n    background: var(--sv-surface-1);\n    color: var(--sv-fg);\n    font-size: 0.875rem;\n  }\n  .view-settings .view-settings__checkbox {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    font-size: 0.8125rem;\n  }\n  .view-settings .view-settings__actions {\n    display: flex;\n    gap: 0.75rem;\n    margin-block-start: 1.5rem;\n  }\n  .view-settings .view-settings__btn {\n    padding: 0.55rem 1.1rem;\n    border-radius: 8px;\n    border: 1px solid color-mix(in oklab, var(--sv-outline) 40%, transparent);\n    background: transparent;\n    color: var(--sv-fg);\n    cursor: pointer;\n  }\n  .view-settings .view-settings__btn--primary {\n    background: var(--sv-primary);\n    border-color: color-mix(in oklab, var(--sv-primary) 30%, #000);\n    color: var(--sv-on-primary);\n  }\n  .view-settings .view-settings__btn--primary:hover {\n    filter: brightness(1.06);\n  }\n  .view-settings {\n    /* ── custom instructions (panel + editor variants) ── */\n  }\n  .view-settings .custom-instructions-panel,\n  .view-settings .custom-instructions-editor {\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n  }\n  .view-settings .cip-select-row,\n  .view-settings .ci-row {\n    display: flex;\n    flex-direction: column;\n    gap: 0.35rem;\n  }\n  .view-settings .ci-header {\n    margin-block-end: 0.25rem;\n  }\n  .view-settings .ci-header h4 {\n    margin: 0 0 0.25rem;\n    font-size: 0.88rem;\n  }\n  .view-settings .ci-desc {\n    margin: 0;\n    font-size: 0.78rem;\n    color: var(--sv-muted);\n    line-height: 1.45;\n  }\n  .view-settings .ci-active-select {\n    display: flex;\n    flex-direction: column;\n    gap: 0.25rem;\n  }\n  .view-settings .ci-select,\n  .view-settings .cip-select {\n    min-block-size: 2.35rem;\n    padding: 0.4rem 0.55rem;\n    border-radius: 10px;\n    border: 1px solid color-mix(in oklab, var(--sv-outline) 40%, transparent);\n    background: var(--sv-surface-1);\n    color: var(--sv-fg);\n    font-size: 0.8rem;\n  }\n  .view-settings .cip-list,\n  .view-settings .ci-list {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .view-settings .cip-item,\n  .view-settings .ci-item {\n    padding: 0.65rem 0.75rem;\n    border-radius: 12px;\n    background: var(--sv-surface-1);\n    border: 1px solid color-mix(in oklab, var(--sv-outline) 16%, transparent);\n  }\n  .view-settings .cip-item.is-active, .view-settings .cip-item.active,\n  .view-settings .ci-item.is-active,\n  .view-settings .ci-item.active {\n    border-color: color-mix(in oklab, var(--sv-primary) 35%, transparent);\n    box-shadow: 0 0 0 1px color-mix(in oklab, var(--sv-primary) 18%, transparent);\n  }\n  .view-settings .cip-item-header,\n  .view-settings .ci-item-header {\n    display: flex;\n    align-items: flex-start;\n    justify-content: space-between;\n    gap: 0.5rem;\n  }\n  .view-settings .cip-item-label,\n  .view-settings .ci-item-label {\n    font-weight: 600;\n    font-size: 0.8rem;\n  }\n  .view-settings .cip-item-actions,\n  .view-settings .ci-item-actions {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.35rem;\n    justify-content: flex-end;\n  }\n  .view-settings .cip-badge,\n  .view-settings .ci-badge {\n    font-size: 0.65rem;\n    padding: 0.15rem 0.4rem;\n    border-radius: 999px;\n    background: color-mix(in oklab, var(--sv-primary) 16%, transparent);\n    color: var(--sv-fg);\n  }\n  .view-settings .cip-item-preview,\n  .view-settings .ci-item-preview {\n    font-size: 0.75rem;\n    color: var(--sv-muted);\n    margin-block-start: 0.35rem;\n    line-height: 1.45;\n  }\n  .view-settings .cip-edit-form,\n  .view-settings .ci-edit-form {\n    display: flex;\n    flex-direction: column;\n    gap: 0.5rem;\n    margin-block-start: 0.5rem;\n  }\n  .view-settings .cip-form-actions,\n  .view-settings .cip-toolbar,\n  .view-settings .ci-actions,\n  .view-settings .ci-add-actions,\n  .view-settings .ci-edit-actions {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n    align-items: center;\n  }\n  .view-settings .cip-input,\n  .view-settings .cip-textarea,\n  .view-settings .ci-input,\n  .view-settings .ci-textarea,\n  .view-settings .field-control {\n    inline-size: 100%;\n    border-radius: 10px;\n    border: 1px solid color-mix(in oklab, var(--sv-outline) 40%, transparent);\n    background: var(--sv-surface-1);\n    color: var(--sv-fg);\n    padding: 0.45rem 0.55rem;\n    font-size: 0.8125rem;\n  }\n  .view-settings .cip-textarea,\n  .view-settings .ci-textarea {\n    min-block-size: 5rem;\n  }\n  .view-settings .cip-empty,\n  .view-settings .ci-empty {\n    font-size: 0.8rem;\n    color: var(--sv-muted);\n    padding: 0.75rem;\n    text-align: center;\n  }\n  .view-settings .field-label {\n    font-size: 0.72rem;\n    font-weight: 600;\n    color: var(--sv-muted);\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n  }\n  .view-settings {\n    /* ── touch targets & responsive footer ── */\n  }\n  @container (max-inline-size: 1024px) {\n    .view-settings {\n      padding: 0.65rem;\n    }\n  }\n  @container (max-inline-size: 560px) {\n    .view-settings .settings-tab-actions {\n      gap: 0.3rem;\n    }\n    .view-settings .settings-tab-btn {\n      min-block-size: 2.65rem;\n      padding-inline: 0.7rem;\n    }\n  }\n  @container (max-inline-size: 480px) {\n    .view-settings {\n      padding: 0.45rem;\n    }\n    .view-settings .settings-screen__title {\n      display: none;\n    }\n    .view-settings .settings-screen__body {\n      padding-block: 0.5rem;\n      gap: 0.75rem;\n    }\n    .view-settings .settings-screen__footer {\n      flex-direction: column-reverse;\n      align-items: stretch;\n      gap: 0.5rem;\n    }\n    .view-settings .settings-screen__footer .btn.primary {\n      inline-size: 100%;\n      justify-content: center;\n      min-block-size: 2.75rem;\n    }\n    .view-settings .settings-screen__footer .note {\n      white-space: normal;\n      text-align: center;\n    }\n  }\n}");
	t = t.trim() ? `${j}\n${t}` : j;
	let n = document.createElement("style");
	n.setAttribute(A, ""), n.textContent = t, e.insertBefore(n, e.firstChild);
}, N = (e) => {
	if (!e) return;
	let t = () => {
		if (!e.isConnected) {
			requestAnimationFrame(t);
			return;
		}
		M(e);
	};
	e.isConnected ? M(e) : requestAnimationFrame(t);
};
//#endregion
//#region ../../projects/subsystem/runtime/boot.ts
async function ce(e, t) {
	globalThis.dispatchEvent?.(new CustomEvent("view:navigate", { detail: {
		viewId: e,
		options: t
	} }));
}
//#endregion
//#region ../settings-view/src/ts/settings-utils.ts
var le = [
	"en",
	"ru",
	"en-GB",
	"en-US"
], ue = (e) => e === "en" ? "English (generic)" : e === "ru" ? "Russian" : e === "en-GB" ? "English (UK)" : "English (US)", P = (e) => {
	let t = (e || "").trim();
	return t ? t === "ru" || t.startsWith("ru-") ? "ru" : t === "en-GB" ? "en-GB" : t === "en-US" ? "en-US" : t === "en" || t.startsWith("en-") ? "en" : null : null;
}, de = () => {
	let e = /* @__PURE__ */ new Set(), t = typeof navigator < "u" ? [...navigator.languages || [], navigator.language] : [];
	for (let n of t) {
		let t = P(n);
		t && e.add(t);
	}
	for (let t of le) e.add(t);
	return Array.from(e);
}, fe = () => {
	let e = new Set(["ru", "en"]), t = typeof navigator < "u" ? [...navigator.languages || [], navigator.language] : [];
	for (let n of t) {
		let t = (n || "").trim();
		!t || t === "en" || t === "ru" || e.add(t);
	}
	return Array.from(e);
}, F = (e, t) => {
	let n = Number((e || "").trim());
	return Number.isFinite(n) ? n : t;
}, pe = (e, t, n, r) => {
	let i = Number.parseFloat((e || "").trim());
	return Number.isFinite(i) ? Math.max(n, Math.min(r, i)) : t;
}, I = (e, t = "") => e ? e.value.trim() : t, L = (e, t) => e ? !!e.checked : t, me = (e) => {
	if (typeof e.composedPath == "function") {
		for (let t of e.composedPath()) if (t instanceof Element) return t;
	}
	let t = e.target;
	return t instanceof Element ? t : t instanceof Text ? t.parentElement : null;
}, he = (e) => {
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
}, ge = (e) => {
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
}, _e = (e, n) => {
	if (!e) return;
	e.replaceChildren();
	let r = Array.isArray(n) ? n : [];
	if (!r.length) {
		e.appendChild(t`<p class="mcp-empty-note">No MCP servers configured.</p>`);
		return;
	}
	r.forEach((t) => e.appendChild(he(t)));
}, ve = () => t`<footer class="settings-screen__footer">
        <button class="btn primary" type="button" data-action="save">Save</button>
        <span class="note" data-note></span>
    </footer>`, ye = () => t`<header class="settings-screen__top">
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
    </header>`, be = () => t`<section class="card settings-tab-panel" data-tab-panel="appearance">
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
    </section>`, xe = () => t`<section class="card settings-tab-panel" data-tab-panel="markdown">
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
    </section>`, Se = () => t`<section class="card settings-tab-panel is-active" data-tab-panel="ai">
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
    </section>`, Ce = () => t`<section class="card settings-tab-panel" data-tab-panel="mcp">
      <h3>MCP</h3>
      <div class="mcp-section" data-mcp-section></div>
      <div class="mcp-actions">
        <button class="btn" type="button" data-action="add-mcp-server">Add MCP server</button>
      </div>
    </section>`, we = () => t`<section class="card settings-tab-panel" data-tab-panel="server">
      <h3>Server</h3>
      <p class="field-hint" style="margin: 0 0 0.75rem; opacity: 0.88; font-size: 0.9em;">
        Connect to the hub with server URL and client id. Optional client identifier token and TLS options below.
      </p>
      <h4>Endpoint and identity</h4>
      <form class="settings-panel-form" novalidate onsubmit="return false">
      <label class="field">
        <span>Server URL</span>
        <input class="form-input" type="text" inputmode="url" autocomplete="off" placeholder="192.168.0.200" data-field="core.endpointUrl" />
      </label>
      <p class="field-hint">IP or domain only — port and protocol are auto-discovered (8434, 443, 8080, …).</p>
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
    </section>`, Te = (e = {}) => {
	let r = n({
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
		let n = r.instructions ?? [];
		if (!n.length) {
			a.append(t`<div class="ci-empty">No custom instructions. Add one or use templates.</div>`);
			return;
		}
		for (let i of n) {
			let n = r.editingId === i.id, o = r.activeId === i.id, s = t`<div class="ci-item ${o ? "active" : ""}" data-id="${i.id}">
                <div class="ci-item-header">
                    <span class="ci-item-label">${i.label}</span>
                    <div class="ci-item-actions">
                        ${o ? t`<span class="ci-badge active">Active</span>` : t`<button class="btn tiny" type="button" data-action="activate">Use</button>`}
                        <button class="btn tiny" type="button" data-action="edit">Edit</button>
                        <button class="btn tiny danger" type="button" data-action="delete">×</button>
                    </div>
                </div>
                ${n ? t`<div class="ci-edit-form">
                        <input type="text" class="ci-input" data-edit-field="label" value="${i.label}" />
                        <textarea class="ci-textarea" data-edit-field="instruction" rows="4">${i.instruction}</textarea>
                        <div class="ci-edit-actions">
                            <button class="btn small primary" type="button" data-action="save-edit">Save</button>
                            <button class="btn small" type="button" data-action="cancel-edit">Cancel</button>
                        </div>
                    </div>` : t`<div class="ci-item-preview">${f(i.instruction, 120)}</div>`}
            </div>`;
			s.addEventListener("click", (t) => {
				let n = t.target.closest("[data-action]")?.getAttribute("data-action");
				if (n === "activate" && E(i.id).then(p).then(() => e.onUpdate?.()), n === "edit" && (r.editingId = i.id, u()), n === "delete" && confirm(`Delete "${i.label}"?`) && D(i.id).then(p).then(() => e.onUpdate?.()), n === "save-edit") {
					let t = s.querySelector("[data-edit-field='label']"), n = s.querySelector("[data-edit-field='instruction']");
					O(i.id, {
						label: t.value.trim() || i.label,
						instruction: n.value.trim()
					}).then(() => (r.editingId = null, p())).then(() => e.onUpdate?.());
				}
				n === "cancel-edit" && (r.editingId = null, u());
			}), a.append(s);
		}
	}, d = () => {
		o.replaceChildren(), o.append(t`<option value="">None (use default)</option>`);
		for (let e of r.instructions ?? []) {
			let n = t`<option value="${e.id}">${e.label}</option>`;
			e.id === r.activeId && (n.selected = !0), o.append(n);
		}
	}, f = (e, t) => !e || e.length <= t ? e || "" : e.slice(0, t).trim() + "…", p = async () => {
		let e = await ae(), t = Array.isArray(e) ? {
			instructions: e,
			activeId: "",
			activeInstruction: null
		} : e;
		r.instructions = t?.instructions ?? [], r.activeId = t?.activeId ?? "", u(), d();
	};
	return i.addEventListener("click", (t) => {
		let n = t.target.closest("[data-action]")?.getAttribute("data-action");
		if (n === "add" && (r.isAdding = !0, s.hidden = !1, c.value = "", l.value = "", c.focus()), n === "cancel-add" && (r.isAdding = !1, s.hidden = !0), n === "save-new") {
			let t = c.value.trim(), n = l.value.trim();
			if (!n) {
				l.focus();
				return;
			}
			k(t || "Custom", n).then((e) => {
				if (e) return r.isAdding = !1, s.hidden = !0, p();
			}).then(() => e.onUpdate?.());
		}
		if (n === "add-templates") {
			let t = new Set((r.instructions ?? []).map((e) => e.label.trim().toLowerCase())), n = ne.filter((e) => !t.has(e.label.trim().toLowerCase()));
			if (!n.length) {
				alert("All templates are already added.");
				return;
			}
			oe(n.map((e) => ({
				label: e.label,
				instruction: e.instruction,
				enabled: e.enabled
			}))).then(p).then(() => e.onUpdate?.());
		}
	}), o.addEventListener("change", () => {
		E(o.value || null).then(p).then(() => e.onUpdate?.());
	}), p(), i;
}, Ee = (e) => t`<section class="card settings-tab-panel" data-tab-panel="instructions" data-section="instructions">
      <h3>Recognition Instructions</h3>
      <div data-custom-instructions="editor">
        ${Te({ onUpdate: () => e("Instructions updated.") })}
      </div>
    </section>`, De = () => t`<section class="card settings-tab-panel" data-tab-panel="extension" data-section="extension" hidden>
      <h3>Extension</h3>
      <label class="field checkbox form-checkbox">
        <input type="checkbox" data-field="core.ntpEnabled" />
        <span>Enable New Tab Page (offline Basic)</span>
      </label>
    </section>`, Oe = (e) => e.isExtension || e.surface === "crx" ? "extension" : (e.surface === "capacitor" || e.surface === "native") && !(T("workcenter") || T("viewer") || T("explorer")) ? "cwsp-mobile" : "full", R = [
	"appearance",
	"markdown",
	"ai",
	"mcp",
	"server",
	"instructions",
	"extension"
], ke = (e, t) => {
	if (t === "cwsp-mobile") for (let t of R) e.querySelector(`[data-tab-panel="${t}"]`)?.remove(), e.querySelector(`[data-action="switch-settings-tab"][data-tab="${t}"]`)?.remove();
}, Ae = (e) => e === "cwsp-mobile" ? "cwsp" : e === "extension" ? "extension" : "ai", je = (e, t) => !!e.querySelector(`[data-tab-panel="${t}"]`), Me = "[data-settings-tabs]", Ne = ".settings-screen__body", Pe = () => {
	try {
		let e = globalThis;
		if (e?.chrome?.runtime?.id) return "crx";
		if (e?.Capacitor?.isNativePlatform?.()) return "capacitor";
		if (e?.__CWS_NATIVE__ === !0) return "native";
		if (typeof document < "u") return "web";
	} catch {}
	return "unknown";
}, z = (e, t) => {
	if (e.requiresView && !T(e.requiresView)) return !1;
	let n = e.surfaces;
	return !(n?.length && !n.includes(t.surface) || e.excludeSurfaces?.includes(t.surface));
}, B = (e) => g().filter((t) => z(t, e)), Fe = (e, t) => {
	let n = e.querySelector(Me), r = e.querySelector(Ne);
	if (!(!n || !r)) for (let i of B(t)) {
		if (e.querySelector(`[data-tab-panel="${i.id}"]`)) continue;
		let a = document.createElement("button");
		a.className = "settings-tab-btn", a.type = "button", a.role = "tab", a.setAttribute("data-action", "switch-settings-tab"), a.setAttribute("data-tab", i.id), a.setAttribute("data-contributed-tab", ""), a.setAttribute("aria-selected", "false"), a.textContent = i.label;
		let o = n.querySelector("[data-extension-tab]");
		o ? n.insertBefore(a, o) : n.appendChild(a);
		let s = null;
		try {
			s = i.render(t);
		} catch (e) {
			console.warn(`[settings] contribution '${i.id}' render failed:`, e);
		}
		if (!s) continue;
		let c;
		s.matches?.("[data-tab-panel]") ? (c = s, c.classList.add("card", "settings-tab-panel"), c.setAttribute("data-tab-panel", i.id), c.setAttribute("data-contributed-panel", ""), c.hidden = !0) : (c = document.createElement("section"), c.className = "card settings-tab-panel", c.setAttribute("data-tab-panel", i.id), c.setAttribute("data-contributed-panel", ""), c.hidden = !0, c.appendChild(s)), r.appendChild(c);
	}
}, V = (e, t, n) => {
	for (let r of B(t)) {
		let t = e.querySelector(`[data-tab-panel="${r.id}"]`);
		t && n(r, t);
	}
}, Ie = (e, t, n) => {
	V(e, n, (e, r) => {
		try {
			e.manualFields || y(r, t), e.load?.(t, r, n);
		} catch (t) {
			console.warn(`[settings] contribution '${e.id}' load failed:`, t);
		}
	});
}, Le = (e, t, n) => {
	V(e, n, (e, r) => {
		try {
			e.manualFields || m(r, t), e.save?.(t, r, n);
		} catch (t) {
			console.warn(`[settings] contribution '${e.id}' save failed:`, t);
		}
	});
}, Re = (e) => B(e).map((e) => e.id), H = () => {
	try {
		let e = globalThis.Capacitor;
		return typeof e?.isNativePlatform == "function" && !!e.isNativePlatform();
	} catch {
		return !1;
	}
}, ze = async (e) => {
	let t = e.core;
	if (!t || typeof t != "object") return;
	let n = typeof t.endpointUrl == "string" ? t.endpointUrl : "", r = typeof t.ops?.directUrl == "string" ? t.ops.directUrl : "";
	if (!n.trim() && !r.trim()) return;
	let i = H() ? {
		discover: !1,
		timeoutMs: 1500
	} : { timeoutMs: 3e3 }, o = await a({
		relayHttpsUrl: n,
		directHttpsUrl: r
	}, i);
	o.relayHttpsUrl !== void 0 && (t.endpointUrl = o.relayHttpsUrl), o.directHttpsUrl !== void 0 && (t.ops = {
		...t.ops || {},
		directUrl: o.directHttpsUrl
	});
}, U = () => {
	try {
		let e = globalThis?.Capacitor;
		return e && typeof e == "object" ? e : null;
	} catch {
		return null;
	}
}, W = (e) => {
	let t = U()?.Plugins?.[e];
	return t && typeof t == "object" ? t : null;
}, G = async (e, ...t) => {
	try {
		return typeof e == "function" ? await e(...t) : void 0;
	} catch (e) {
		console.warn("[capacitor-settings-permissions]", e);
		return;
	}
}, Be = async (e) => {
	let t = [], n = [], r = !1;
	if (!C()) return {
		lines: t,
		results: n,
		prompted: r
	};
	let i = e.shell || {}, a = i.acceptContactsBridgeData === !0, o = i.acceptSmsBridgeData === !0, s = (i.bridgeDaemonEnabled ?? !0) !== !1, c = (i.enableRemoteClipboardBridge ?? !0) !== !1, l = s || c, u = s || c, d = W("CwsPlatform");
	if (a || o || l || u) if (d?.requestSettingsPermissions) {
		let e = await G(d.requestSettingsPermissions, {
			contacts: a,
			sms: o,
			notifications: l,
			overlay: u
		}), i = !1;
		if (e && typeof e == "object") {
			i = e.prompted === !0, r = i;
			let t = e.results;
			if (Array.isArray(t)) for (let e of t) e && typeof e == "object" && n.push({
				permission: String(e.permission ?? ""),
				granted: !!e.granted
			});
		}
		let s = n.filter((e) => e.granted === !1);
		s.length ? t.push(`Permission denied: ${s.map((e) => e.permission).filter(Boolean).join(", ")}`) : i && t.push("Runtime permissions requested");
	} else {
		let e = W("DevicePermissions") || W("Permissions"), n = [];
		a && n.push("READ_CONTACTS"), o && n.push("READ_SMS"), l && n.push("POST_NOTIFICATIONS"), e?.requestPermissions && n.length && (await G(e.requestPermissions, { permissions: n }), t.push("Runtime permissions requested (legacy plugin)"));
	}
	return s && d?.startCwspBridge ? (await G(d.startCwspBridge), t.push("CWSP foreground service started")) : !s && d?.stopCwspBridge && (await G(d.stopCwspBridge), t.push("CWSP foreground service stopped")), {
		lines: t,
		results: n,
		prompted: r
	};
}, K = (e) => {
	let n = null, r = null, a = () => {
		let e = Pe();
		return e === "capacitor" || e === "native" ? 8e3 : 2500;
	}, f = (e, t) => {
		n && (r &&= (clearTimeout(r), null), n.textContent = e, n.classList.remove("note--ok", "note--warn", "note--err"), t?.tone === "ok" && n.classList.add("note--ok"), t?.tone === "warn" && n.classList.add("note--warn"), t?.tone === "err" && n.classList.add("note--err"), e && !t?.persist && (r = setTimeout(() => {
			n && (n.textContent = "", n.classList.remove("note--ok", "note--warn", "note--err"));
		}, a())));
	}, p = t`<div class="view-settings" data-view="settings">
    ${ye()}
    <div class="settings-screen__body">
      ${be()}
      ${xe()}
      ${Se()}
      ${Ce()}
      ${we()}
      ${Ee(f)}
      ${De()}
    </div>
    ${ve()}
  </div>`;
	N(p), b();
	let m = {
		isExtension: e.isExtension,
		surface: Pe()
	}, h = Oe(m);
	Fe(p, m), ke(p, h), h === "full" && (m.surface === "capacitor" || m.surface === "native") && (p.querySelector("[data-tab-panel=\"server\"]")?.remove(), p.querySelector("[data-action=\"switch-settings-tab\"][data-tab=\"server\"]")?.remove());
	let g = (e) => je(p, e), _ = (e) => p.querySelector(e);
	n = p.querySelector("[data-note]");
	let ee = _("[data-field=\"ai.baseUrl\"]"), v = _("[data-field=\"ai.apiKey\"]"), y = _("[data-field=\"ui.showKey\"]"), x = _("[data-field=\"ai.model\"]"), C = _("[data-field=\"ai.customModel\"]"), ne = p.querySelector("[data-field-group=\"ai.customModel\"]"), T = _("[data-field=\"ai.defaultReasoningEffort\"]"), ae = _("[data-field=\"ai.defaultVerbosity\"]"), oe = _("[data-field=\"ai.maxOutputTokens\"]"), E = _("[data-field=\"ai.contextTruncation\"]"), D = _("[data-field=\"ai.promptCacheRetention\"]"), O = _("[data-field=\"ai.maxToolCalls\"]"), k = _("[data-field=\"ai.parallelToolCalls\"]"), A = _("[data-field=\"ai.requestTimeout.low\"]"), se = _("[data-field=\"ai.requestTimeout.medium\"]"), j = _("[data-field=\"ai.requestTimeout.high\"]"), M = _("[data-field=\"ai.maxRetries\"]"), le = _("[data-field=\"ai.shareTargetMode\"]"), P = () => {
		let e = (x?.value || "").trim() === "custom";
		ne && (ne.hidden = !e), C && (C.disabled = !e);
	};
	if (x) {
		x.replaceChildren();
		for (let e of o) {
			let t = document.createElement("option");
			t.value = e, t.textContent = e, x.append(t);
		}
		let e = document.createElement("option");
		e.value = "custom", e.textContent = "Custom...", x.append(e), x.addEventListener("change", P);
	}
	C?.addEventListener("focus", () => {
		x && (x.value = "custom", P());
	});
	let Te = _("[data-field=\"ai.autoProcessShared\"]"), R = _("[data-field=\"ai.responseLanguage\"]"), Me = _("[data-field=\"ai.translateResults\"]"), Ne = _("[data-field=\"ai.generateSvgGraphics\"]"), z = _("[data-field=\"speech.language\"]"), B = _("[data-field=\"appearance.theme\"]"), V = _("[data-field=\"appearance.fontSize\"]"), H = _("[data-field=\"appearance.markdown.preset\"]"), U = _("[data-field=\"appearance.markdown.fontFamily\"]"), W = _("[data-field=\"appearance.markdown.fontSizePx\"]"), G = _("[data-field=\"appearance.markdown.lineHeight\"]"), K = _("[data-field=\"appearance.markdown.contentMaxWidthPx\"]"), q = _("[data-field=\"appearance.markdown.printScale\"]"), J = _("[data-field=\"appearance.markdown.page.size\"]"), Y = _("[data-field=\"appearance.markdown.page.orientation\"]"), Ve = _("[data-field=\"appearance.markdown.page.marginMm\"]"), He = _("[data-field=\"appearance.markdown.modules.typography\"]"), Ue = _("[data-field=\"appearance.markdown.modules.lists\"]"), We = _("[data-field=\"appearance.markdown.modules.tables\"]"), Ge = _("[data-field=\"appearance.markdown.modules.codeBlocks\"]"), Ke = _("[data-field=\"appearance.markdown.modules.blockquotes\"]"), qe = _("[data-field=\"appearance.markdown.modules.media\"]"), Je = _("[data-field=\"appearance.markdown.modules.printBreaks\"]"), Ye = _("[data-field=\"appearance.markdown.plugins.smartTypography\"]"), Xe = _("[data-field=\"appearance.markdown.plugins.softBreaksAsBr\"]"), Ze = _("[data-field=\"appearance.markdown.plugins.externalLinksNewTab\"]"), Qe = p.querySelector("[data-field=\"appearance.markdown.customCss\"]"), $e = p.querySelector("[data-field=\"appearance.markdown.printCss\"]"), et = p.querySelector("[data-field=\"appearance.markdown.extensions\"]"), tt = _("[data-field=\"core.ntpEnabled\"]"), nt = _("[data-field=\"core.mode\"]"), rt = _("[data-field=\"core.endpointUrl\"]"), it = _("[data-field=\"core.userId\"]"), at = _("[data-field=\"core.userKey\"]"), ot = _("[data-field=\"core.preferBackendSync\"]"), X = _("[data-field=\"core.encrypt\"]"), st = _("[data-field=\"core.appClientId\"]"), ct = _("[data-field=\"core.allowInsecureTls\"]"), lt = _("[data-field=\"core.ops.allowUnencrypted\"]"), ut = _("[data-field=\"core.admin.httpsOrigin\"]"), dt = _("[data-field=\"core.admin.httpOrigin\"]"), ft = _("[data-field=\"core.admin.path\"]"), pt = _("[data-field=\"core.useCoreIdentityForAirPad\"]"), mt = _("[data-field=\"core.socket.accessToken\"]"), ht = _("[data-field=\"core.socket.routeTarget\"]"), gt = _("[data-field=\"core.socket.clientAccessToken\"]"), _t = _("[data-field=\"core.socket.allowAccessTokenWithoutUserKey\"]"), vt = _("[data-field=\"shell.maintainHubSocketConnection\"]"), yt = _("[data-field=\"shell.clipboardBroadcastTargets\"]"), bt = _("[data-field=\"shell.pushLocalClipboardToLan\"]"), xt = _("[data-field=\"shell.clipboardPushIntervalMs\"]"), St = _("[data-field=\"shell.enableRemoteClipboardBridge\"]"), Ct = _("[data-field=\"shell.acceptInboundClipboardData\"]"), wt = _("[data-field=\"shell.clipboardInboundAllowIds\"]"), Tt = _("[data-field=\"shell.accessTokenBypassesClipboardAllowlist\"]"), Et = _("[data-field=\"shell.clipboardShareDestinationIds\"]"), Dt = _("[data-field=\"shell.applyRemoteClipboardToDevice\"]"), Ot = _("[data-field=\"shell.acceptContactsBridgeData\"]"), kt = _("[data-field=\"shell.acceptSmsBridgeData\"]"), At = _("[data-field=\"shell.enableNativeSms\"]"), jt = _("[data-field=\"shell.enableNativeContacts\"]"), Mt = p.querySelector("[data-admin-preview]"), Z = p.querySelector("[data-mcp-section]"), Nt = p.querySelector("[data-section=\"extension\"]"), Pt = p.querySelector("[data-extension-tab]");
	if (R) {
		R.replaceChildren();
		let e = document.createElement("option");
		e.value = "auto", e.textContent = "Auto-detect", R.append(e);
		let t = document.createElement("option");
		t.value = "follow", t.textContent = "Follow source/context", R.append(t);
		for (let e of fe()) {
			let t = document.createElement("option");
			t.value = e, t.textContent = e === "ru" ? "Russian" : e === "en" ? "English" : e, R.append(t);
		}
	}
	if (z) {
		z.replaceChildren();
		for (let e of de()) {
			let t = document.createElement("option");
			t.value = e, t.textContent = ue(e), z.append(t);
		}
	}
	p.addEventListener("input", (e) => {
		e.target?.matches?.("[data-field^=\"core.\"]") && It();
	}), p.addEventListener("change", (e) => {
		e.target?.matches?.("[data-field^=\"core.\"]") && It();
	});
	let Q = (e) => {
		let t = Ae(h), n = e || t;
		p.querySelector(`[data-tab-panel="${n}"]`) || (n = p.querySelector("[data-tab-panel]")?.getAttribute("data-tab-panel") || t), p.querySelector("[data-settings-tabs]")?.setAttribute("data-active-tab", n);
		let r = p.querySelectorAll("[data-action=\"switch-settings-tab\"][data-tab]");
		for (let e of Array.from(r)) {
			let t = e, r = t.getAttribute("data-tab") === n;
			t.classList.toggle("is-active", r), t.setAttribute("aria-selected", String(r));
		}
		let i = p.querySelectorAll("[data-tab-panel]");
		for (let e of Array.from(i)) {
			let t = e, r = t.getAttribute("data-tab-panel") === n;
			r ? t.removeAttribute("hidden") : t.hidden = !0, t.classList.toggle("is-active", r);
		}
		N(p);
	};
	for (let e of p.querySelectorAll("[data-settings-tabs] button[type=\"button\"][data-action=\"switch-settings-tab\"][data-tab]")) e.addEventListener("click", (t) => {
		t.preventDefault(), t.stopPropagation(), Q(e.getAttribute("data-tab") || Ae(h));
	});
	let Ft = (e) => {
		let t = Ae(h), n = (e || "").trim().toLowerCase();
		return n ? n === "style" || n === "styles" || n === "styling" ? g("markdown") ? "markdown" : t : new Set([
			...g("appearance") ? ["appearance"] : [],
			...g("markdown") ? ["markdown"] : [],
			...g("ai") ? ["ai"] : [],
			...g("mcp") ? ["mcp"] : [],
			...g("server") ? ["server"] : [],
			...g("instructions") ? ["instructions"] : [],
			...g("extension") ? ["extension"] : [],
			...Re(m)
		]).has(n) ? n : t : t;
	}, $ = () => ({
		mode: nt?.value || "native",
		endpointUrl: rt?.value?.trim() || "",
		userId: it?.value?.trim() || "",
		userKey: at?.value?.trim() || "",
		encrypt: !!X?.checked,
		preferBackendSync: (ot?.checked ?? !0) !== !1,
		appClientId: st?.value?.trim() || "",
		allowInsecureTls: !!ct?.checked,
		useCoreIdentityForAirPad: (pt?.checked ?? !0) !== !1,
		socket: {
			accessToken: mt?.value?.trim() || "",
			routeTarget: ht?.value?.trim() || "",
			selfId: "",
			clientAccessToken: gt?.value?.trim() || "",
			allowAccessTokenWithoutUserKey: !!_t?.checked
		},
		admin: {
			httpsOrigin: ut?.value?.trim() || "",
			httpOrigin: dt?.value?.trim() || "",
			path: ft?.value?.trim() || "/"
		},
		ops: { allowUnencrypted: !!lt?.checked }
	}), It = () => {
		if (!Mt) return;
		let e = te($());
		Mt.textContent = `Resolved: ${e.https} · ${e.http}`;
	}, Lt = (e) => {
		try {
			re(ie.EXPLORER_PATH, e), ce("explorer"), d({
				type: "content-explorer",
				destination: "explorer",
				data: {
					action: "view",
					path: e
				},
				metadata: { source: "settings" }
			}), f(`Explorer: ${e}`);
		} catch (e) {
			console.warn("[Settings] Failed to open explorer path:", e), f("Failed to open Explorer path.");
		}
	};
	if (Promise.resolve((async () => ((m.surface === "capacitor" || m.surface === "native") && await s().catch(() => null), l()))()).then((t) => {
		ee && (ee.value = (t?.ai?.baseUrl || "").trim()), v && (v.value = (t?.ai?.apiKey || "").trim());
		let n = (t?.ai?.model || "gpt-5.4").trim(), r = (t?.ai?.customModel || "").trim();
		if (x) {
			let e = o.includes(n);
			n === "custom" || !e && n ? (x.value = "custom", C && (C.value = r || n)) : (x.value = e ? n : "gpt-5.4", C && (C.value = r)), P();
		}
		if (T && (T.value = t?.ai?.defaultReasoningEffort || "medium"), ae && (ae.value = t?.ai?.defaultVerbosity || "medium"), oe && (oe.value = String(t?.ai?.maxOutputTokens ?? 4e5)), E && (E.value = t?.ai?.contextTruncation || "disabled"), D && (D.value = t?.ai?.promptCacheRetention || "in-memory"), O && (O.value = String(t?.ai?.maxToolCalls ?? 8)), k && (k.checked = (t?.ai?.parallelToolCalls ?? !0) !== !1), A && (A.value = String(t?.ai?.requestTimeout?.low ?? 6e4)), se && (se.value = String(t?.ai?.requestTimeout?.medium ?? 3e5)), j && (j.value = String(t?.ai?.requestTimeout?.high ?? 9e5)), M && (M.value = String(t?.ai?.maxRetries ?? 2)), le && (le.value = t?.ai?.shareTargetMode || "recognize"), Te && (Te.checked = (t?.ai?.autoProcessShared ?? !0) !== !1), R && (R.value = t?.ai?.responseLanguage || "auto"), Me && (Me.checked = !!t?.ai?.translateResults), Ne && (Ne.checked = !!t?.ai?.generateSvgGraphics), z && (z.value = t?.speech?.language || "en-US"), B && (B.value = t?.appearance?.theme || "auto"), V && (V.value = t?.appearance?.fontSize || "medium"), H && (H.value = t?.appearance?.markdown?.preset || "default"), U && (U.value = t?.appearance?.markdown?.fontFamily || "system"), W && (W.value = String(t?.appearance?.markdown?.fontSizePx ?? 16)), G && (G.value = String(t?.appearance?.markdown?.lineHeight ?? 1.7)), K && (K.value = String(t?.appearance?.markdown?.contentMaxWidthPx ?? 860)), q && (q.value = String(t?.appearance?.markdown?.printScale ?? 1)), J && (J.value = t?.appearance?.markdown?.page?.size || "auto"), Y && (Y.value = t?.appearance?.markdown?.page?.orientation || "portrait"), Ve && (Ve.value = String(t?.appearance?.markdown?.page?.marginMm ?? 12)), He && (He.checked = (t?.appearance?.markdown?.modules?.typography ?? !0) !== !1), Ue && (Ue.checked = (t?.appearance?.markdown?.modules?.lists ?? !0) !== !1), We && (We.checked = (t?.appearance?.markdown?.modules?.tables ?? !0) !== !1), Ge && (Ge.checked = (t?.appearance?.markdown?.modules?.codeBlocks ?? !0) !== !1), Ke && (Ke.checked = (t?.appearance?.markdown?.modules?.blockquotes ?? !0) !== !1), qe && (qe.checked = (t?.appearance?.markdown?.modules?.media ?? !0) !== !1), Je && (Je.checked = (t?.appearance?.markdown?.modules?.printBreaks ?? !0) !== !1), Ye && (Ye.checked = !!t?.appearance?.markdown?.plugins?.smartTypography), Xe && (Xe.checked = !!t?.appearance?.markdown?.plugins?.softBreaksAsBr), Ze && (Ze.checked = (t?.appearance?.markdown?.plugins?.externalLinksNewTab ?? !0) !== !1), Qe && (Qe.value = (t?.appearance?.markdown?.customCss || "").trim()), $e && ($e.value = (t?.appearance?.markdown?.printCss || "").trim()), et) {
			let e = Array.isArray(t?.appearance?.markdown?.extensions) ? t.appearance?.markdown?.extensions : [];
			et.value = e.length > 0 ? JSON.stringify(e, null, 2) : "";
		}
		if (tt && (tt.checked = !!t?.core?.ntpEnabled), nt && (nt.value = t?.core?.mode || "native"), rt && (rt.value = (t?.core?.endpointUrl || "").trim()), it && (it.value = (t?.core?.userId || "").trim()), at && (at.value = (t?.core?.userKey || "").trim()), ot && (ot.checked = (t?.core?.preferBackendSync ?? !0) !== !1), X && (X.checked = !!t?.core?.encrypt), st && (st.value = (t?.core?.appClientId || "").trim()), pt && (pt.checked = (t?.core?.useCoreIdentityForAirPad ?? !0) !== !1), mt && (mt.value = (t?.core?.socket?.accessToken || t?.core?.socket?.airpadAuthToken || "").trim()), ht && (ht.value = (t?.core?.socket?.routeTarget || t?.core?.socket?.selfId || "").trim()), gt && (gt.value = (t?.core?.socket?.clientAccessToken || "").trim()), _t && (_t.checked = (t?.core?.socket?.allowAccessTokenWithoutUserKey ?? !1) === !0), ct && (ct.checked = !!t?.core?.allowInsecureTls), lt && (lt.checked = !!t?.core?.ops?.allowUnencrypted), ut && (ut.value = (t?.core?.admin?.httpsOrigin || "").trim()), dt && (dt.value = (t?.core?.admin?.httpOrigin || "").trim()), ft && (ft.value = (t?.core?.admin?.path || "/").trim() || "/"), vt && (vt.checked = !!t?.shell?.maintainHubSocketConnection), yt && (yt.value = (t?.shell?.clipboardBroadcastTargets || "").trim()), bt && (bt.checked = !!t?.shell?.pushLocalClipboardToLan), xt) {
			let e = Number(t?.shell?.clipboardPushIntervalMs);
			xt.value = String(Number.isFinite(e) && e >= 800 ? Math.min(Math.round(e), 6e4) : 2e3);
		}
		St && (St.checked = (t?.shell?.enableRemoteClipboardBridge ?? !0) !== !1), Ct && (Ct.checked = (t?.shell?.acceptInboundClipboardData ?? !0) !== !1), wt && (wt.value = (t?.shell?.clipboardInboundAllowIds || "").trim()), Tt && (Tt.checked = (t?.shell?.accessTokenBypassesClipboardAllowlist ?? !1) === !0), Et && (Et.value = (t?.shell?.clipboardShareDestinationIds || "").trim()), Dt && (Dt.checked = (t?.shell?.applyRemoteClipboardToDevice ?? !0) !== !1), Ot && (Ot.checked = (t?.shell?.acceptContactsBridgeData ?? !1) === !0), kt && (kt.checked = (t?.shell?.acceptSmsBridgeData ?? !1) === !0), At && (At.checked = (t?.shell?.enableNativeSms ?? !0) !== !1), jt && (jt.checked = (t?.shell?.enableNativeContacts ?? !0) !== !1), It(), _e(Z, Array.isArray(t?.ai?.mcp) ? t.ai.mcp : []), i(t), w(t), Ie(p, t, m), e.onTheme?.(t?.appearance?.theme || "auto");
	}).catch(() => {
		_e(Z, []);
	}), y?.addEventListener("change", () => {
		!v || !y || (v.type = y.checked ? "text" : "password");
	}), B?.addEventListener("change", () => {
		let t = B.value || "auto";
		(async () => {
			try {
				let e = await l();
				w({
					...e,
					appearance: {
						...e.appearance || {},
						theme: t
					}
				});
			} catch {
				w({ appearance: {
					theme: t,
					fontSize: "medium"
				} });
			}
			e.onTheme?.(t);
		})();
	}), p.addEventListener("click", (t) => {
		let n = me(t);
		if (n?.closest?.("button[data-action=\"add-mcp-server\"]") && Z) {
			Z.querySelector(".mcp-empty-note")?.remove(), Z.appendChild(he({
				id: `mcp-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
				serverLabel: "",
				origin: "",
				clientKey: "",
				secretKey: ""
			}));
			return;
		}
		let r = n?.closest?.("button[data-action=\"remove-mcp-server\"]");
		if (r) {
			r.closest(".mcp-row")?.remove(), Z && !Z.querySelector("[data-mcp-id]") && _e(Z, []);
			return;
		}
		if (n?.closest?.("button[data-action=\"open-user-styles\"]")) {
			Lt("/user/styles/");
			return;
		}
		if (n?.closest?.("button[data-action=\"open-assets-readonly\"]")) {
			Lt("/assets/");
			return;
		}
		if (n?.closest?.("button[data-action=\"open-admin-https\"]")) {
			S($(), "https");
			return;
		}
		if (n?.closest?.("button[data-action=\"open-admin-http\"]")) {
			S($(), "http");
			return;
		}
		if (n?.closest?.("button[data-action=\"copy-admin-https\"]")) {
			let e = te($());
			navigator.clipboard?.writeText?.(e.https).then(() => f("HTTPS admin URL copied."), () => f("Copy failed."));
			return;
		}
		if (n?.closest?.("button[data-action=\"copy-admin-http\"]")) {
			let e = te($());
			navigator.clipboard?.writeText?.(e.http).then(() => f("HTTP admin URL copied."), () => f("Copy failed."));
			return;
		}
		if (n?.closest?.("button[data-action=\"open-native-app-settings\"]")) {
			import("./clipboard-device-DTZt_Phq.js").then((e) => e.openAppClipboardRelatedSettings()).then(() => f("App settings opened (native shell only).")).catch(() => f("Native settings unavailable in this context."));
			return;
		}
		if (n?.closest?.("button[data-action=\"open-native-notification-settings\"]")) {
			import("./clipboard-device-DTZt_Phq.js").then((e) => e.openNativeNotificationSettings?.()).then(() => f("Notification settings opened (native shell only).")).catch(() => f("Native settings unavailable in this context."));
			return;
		}
		n?.closest?.("button[data-action=\"save\"]") && (async () => {
			f("Saving…", { tone: "warn" });
			let t = await l(), n = t.appearance?.markdown?.extensions || [], r = g("markdown") && et?.value?.trim() || "";
			if (r) try {
				let e = JSON.parse(r);
				if (!Array.isArray(e)) throw Error("Markdown extensions JSON must be an array.");
				n = e;
			} catch (e) {
				Q("markdown"), f(e?.message || "Invalid Markdown extensions JSON.");
				return;
			}
			let i = {
				...t,
				ai: g("ai") ? {
					baseUrl: ee?.value?.trim?.() || "",
					apiKey: v?.value?.trim?.() || "",
					model: x?.value || "gpt-5.4",
					customModel: x?.value === "custom" && C?.value?.trim?.() || "",
					defaultReasoningEffort: T?.value || "medium",
					defaultVerbosity: ae?.value || "medium",
					maxOutputTokens: F(oe?.value, 4e5),
					contextTruncation: E?.value || "disabled",
					promptCacheRetention: D?.value || "in-memory",
					maxToolCalls: F(O?.value, 8),
					parallelToolCalls: (k?.checked ?? !0) !== !1,
					requestTimeout: {
						low: F(A?.value, 6e4),
						medium: F(se?.value, 3e5),
						high: F(j?.value, 9e5)
					},
					maxRetries: F(M?.value, 2),
					shareTargetMode: le?.value || "recognize",
					autoProcessShared: (Te?.checked ?? !0) !== !1,
					responseLanguage: R?.value || "auto",
					translateResults: !!Me?.checked,
					generateSvgGraphics: !!Ne?.checked,
					mcp: g("mcp") ? ge(Z) : t.ai?.mcp || [],
					customInstructions: t.ai?.customInstructions || [],
					activeInstructionId: t.ai?.activeInstructionId || ""
				} : t.ai || {},
				speech: g("ai") ? { language: z?.value || "en-US" } : t.speech || {},
				core: g("server") ? {
					...t.core,
					ntpEnabled: L(tt, !!t.core?.ntpEnabled),
					mode: I(nt, t.core?.mode || "native") || "native",
					endpointUrl: I(rt, t.core?.endpointUrl || ""),
					userId: I(it, t.core?.userId || ""),
					userKey: I(at, t.core?.userKey || ""),
					encrypt: L(X, !!t.core?.encrypt),
					preferBackendSync: L(ot, (t.core?.preferBackendSync ?? !0) !== !1),
					appClientId: I(st, t.core?.appClientId || ""),
					allowInsecureTls: L(ct, !!t.core?.allowInsecureTls),
					useCoreIdentityForAirPad: L(pt, (t.core?.useCoreIdentityForAirPad ?? !0) !== !1),
					socket: (() => {
						let e = { ...t.core?.socket || {} };
						return delete e.airpadAuthToken, {
							...e,
							accessToken: I(mt, t.core?.socket?.accessToken || t.core?.socket?.airpadAuthToken || ""),
							routeTarget: I(ht, t.core?.socket?.routeTarget || ""),
							selfId: "",
							clientAccessToken: I(gt, t.core?.socket?.clientAccessToken || ""),
							allowAccessTokenWithoutUserKey: L(_t, !!t.core?.socket?.allowAccessTokenWithoutUserKey)
						};
					})(),
					admin: {
						...t.core?.admin || {},
						httpsOrigin: I(ut, t.core?.admin?.httpsOrigin || ""),
						httpOrigin: I(dt, t.core?.admin?.httpOrigin || ""),
						path: I(ft, t.core?.admin?.path || "/") || "/"
					},
					ops: {
						...t.core?.ops || {},
						allowUnencrypted: L(lt, !!t.core?.ops?.allowUnencrypted)
					}
				} : { ...t.core || {} },
				shell: g("server") ? {
					...t.shell || {},
					maintainHubSocketConnection: L(vt, !!t.shell?.maintainHubSocketConnection),
					clipboardBroadcastTargets: I(yt, t.shell?.clipboardBroadcastTargets || ""),
					pushLocalClipboardToLan: L(bt, !!t.shell?.pushLocalClipboardToLan),
					clipboardPushIntervalMs: (() => {
						let e = xt?.value, n = F(e, t.shell?.clipboardPushIntervalMs ?? 2e3);
						return Math.min(6e4, Math.max(800, Math.round(n)));
					})(),
					enableRemoteClipboardBridge: L(St, (t.shell?.enableRemoteClipboardBridge ?? !0) !== !1),
					acceptInboundClipboardData: L(Ct, (t.shell?.acceptInboundClipboardData ?? !0) !== !1),
					clipboardInboundAllowIds: I(wt, t.shell?.clipboardInboundAllowIds || ""),
					accessTokenBypassesClipboardAllowlist: L(Tt, !!t.shell?.accessTokenBypassesClipboardAllowlist),
					clipboardShareDestinationIds: I(Et, t.shell?.clipboardShareDestinationIds || ""),
					applyRemoteClipboardToDevice: L(Dt, (t.shell?.applyRemoteClipboardToDevice ?? !0) !== !1),
					acceptContactsBridgeData: L(Ot, !!t.shell?.acceptContactsBridgeData),
					acceptSmsBridgeData: L(kt, !!t.shell?.acceptSmsBridgeData),
					enableNativeSms: L(At, (t.shell?.enableNativeSms ?? !0) !== !1),
					enableNativeContacts: L(jt, (t.shell?.enableNativeContacts ?? !0) !== !1)
				} : { ...t.shell || {} },
				appearance: g("appearance") || g("markdown") ? {
					theme: B?.value || "auto",
					fontSize: V?.value || "medium",
					markdown: {
						preset: H?.value || "default",
						fontFamily: U?.value || "system",
						fontSizePx: F(W?.value, 16),
						lineHeight: pe(G?.value, 1.7, 1.1, 2.2),
						contentMaxWidthPx: F(K?.value, 860),
						printScale: pe(q?.value, 1, .5, 1.5),
						page: {
							size: J?.value || "auto",
							orientation: Y?.value || "portrait",
							marginMm: F(Ve?.value, 12)
						},
						modules: {
							typography: (He?.checked ?? !0) !== !1,
							lists: (Ue?.checked ?? !0) !== !1,
							tables: (We?.checked ?? !0) !== !1,
							codeBlocks: (Ge?.checked ?? !0) !== !1,
							blockquotes: (Ke?.checked ?? !0) !== !1,
							media: (qe?.checked ?? !0) !== !1,
							printBreaks: (Je?.checked ?? !0) !== !1
						},
						plugins: {
							smartTypography: !!Ye?.checked,
							softBreaksAsBr: !!Xe?.checked,
							externalLinksNewTab: (Ze?.checked ?? !0) !== !1
						},
						customCss: Qe?.value || "",
						printCss: $e?.value || "",
						extensions: n || []
					}
				} : t.appearance || {}
			};
			Le(p, i, m), await ze(i);
			let a = i, o = m.surface === "capacitor" || m.surface === "native" ? Be(a).catch((e) => (console.warn("[Settings] native permission flow failed:", e), {
				lines: [],
				results: []
			})) : Promise.resolve({
				lines: [],
				results: []
			}), s = await c(a);
			if (!s) {
				f("Settings save returned no data.", { tone: "err" });
				return;
			}
			Ie(p, s, m);
			let d = u(), h = await o, _ = h.lines, y = h.results.some((e) => e.granted === !1);
			import("./hub-socket-boot-J7ej9BAR.js").then((e) => e.applyHubSocketFromSettings(s)), w(s), e.onTheme?.(s.appearance?.theme || "auto");
			let b = ["Saved locally"];
			d.nativeSynced === !0 ? b.push("synced to Android") : d.nativeSynced === !1 && !y ? console.warn("[Settings] native settings patch:", d.nativeError || "not confirmed") : d.nativeSynced === !1 && b.push(`native sync failed${d.nativeError ? `: ${d.nativeError}` : ""}`), _.length && b.push(..._);
			let S = "ok";
			y && (S = "warn"), f(b.join(" · "), { tone: S });
		})().catch((e) => f(String(e), { tone: "err" }));
	}), e.isExtension) {
		Nt && (Nt.hidden = !1), Pt && (Pt.hidden = !1);
		let e = t`<div class="ext-note">Extension mode: settings are stored in <code>chrome.storage.local</code>.</div>`;
		p.append(e);
	}
	let Rt = Ft(e.initialTab);
	if (Q(Rt), !p.querySelector(`[data-tab-panel="${Rt}"]:not([hidden])`)) {
		let e = p.querySelector("[data-tab-panel]");
		e && Q(e.getAttribute("data-tab-panel") || Rt);
	}
	P();
	let zt = p.querySelectorAll("[data-tab-panel]").length, Bt = p.querySelectorAll("[data-action=\"switch-settings-tab\"][data-tab]").length;
	try {
		globalThis.__CWSP_FRONTEND_DEBUG__?.log("settings-view", "info", `mounted profile=${h} surface=${m.surface} tabs=${Bt} panels=${zt} active=${p.querySelector("[data-settings-tabs]")?.getAttribute("data-active-tab")}`);
	} catch {}
	if (zt === 0) {
		let e = document.createElement("section");
		e.className = "card settings-tab-panel", e.setAttribute("data-tab-panel", "cwsp"), e.innerHTML = "<h3>CWSP</h3><p class=\"field-hint\">Settings panels failed to mount. Check logcat tag CwspWebView or __CWSP_FRONTEND_DEBUG__.tail().</p>", p.querySelector(".settings-screen__body")?.appendChild(e), Q("cwsp");
	}
	return p.addEventListener("cwsp-settings-resync", () => {
		N(p), Q(p.querySelector("[data-settings-tabs]")?.getAttribute("data-active-tab") || Rt);
	}), p;
}, q = {
	appearance: {
		theme: "auto",
		fontSize: "medium"
	},
	ai: { autoProcess: !0 },
	general: {
		autosave: !0,
		notifications: !0
	}
}, J = class {
	id = "settings";
	name = "Settings";
	icon = "gear";
	options;
	shellContext;
	element = null;
	settings = r(q);
	_sheet = null;
	_shadowSheet = null;
	_styleEl = null;
	lifecycle = {
		onUnmount: () => {
			this.clearSettingsStylesheet();
		},
		onShow: () => {
			this.applySettingsStylesheet(), this.element?.dispatchEvent(new CustomEvent("cwsp-settings-resync", { bubbles: !1 }));
		},
		onHide: () => {}
	};
	constructor(e = {}) {
		this.options = e, this.shellContext = e.shellContext;
	}
	render(e) {
		return e && (this.options = {
			...this.options,
			...e
		}, this.shellContext = e.shellContext || this.shellContext), this.loadSettings(), this.element = K({
			isExtension: globalThis.chrome !== void 0 && !!globalThis.chrome?.runtime?.id,
			initialTab: e?.params?.tab || e?.params?.focus,
			onTheme: (e) => {
				this.options.onThemeChange?.(e);
			}
		}), queueMicrotask(() => N(this.element)), this.element;
	}
	getToolbar() {
		return null;
	}
	setupEventHandlers() {}
	loadSettings() {
		this.settings.value = { ...q };
	}
	saveSettings() {
		this.options.onSettingsChange?.(this.settings.value);
	}
	resetSettings() {
		this.settings.value = { ...q }, this.updateUI();
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
		N(this.element);
	}
	clearSettingsStylesheet() {
		try {
			if (this.element?.querySelector("style[data-settings-view-css]")?.remove(), this._styleEl &&= (this._styleEl.remove(), null), this._shadowSheet) {
				let { sheet: e, root: t } = this._shadowSheet;
				t.adoptedStyleSheets = t.adoptedStyleSheets.filter((t) => t !== e), this._shadowSheet = null;
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
		if (e === f.Patch || e === f.SettingsUpdate) return this.handleMessage({ data: t }), (async () => {
			try {
				let [{ loadSettings: e }, { applyTheme: n }] = await Promise.all([import("./Settings-DoiAXxHI.js"), import("./theme-DbFndQdi.js").then((e) => e.t)]), r = await e(), i = t;
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
function Y(e) {
	return new J(e);
}
//#endregion
export { J as SettingsView, K as createSettingsView, Y as createView, Y as default, g as getSettingsContributions, ee as registerAirpadSettingsContribution, b as registerBuiltinSettingsContributions, p as registerCwspSettingsContribution, h as registerDeviceSettingsContribution, v as registerReaderSettingsContribution, x as registerSettingsContribution, _ as registerWorkcenterSettingsContribution };
