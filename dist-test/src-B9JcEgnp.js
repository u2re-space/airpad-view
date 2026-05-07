import { Cr as e, Ut as t, br as n, ir as r } from "./src-BoL7goZG.js";
import { r as i } from "./channel-actions-UyALGbaW.js";
import { i as a, n as o } from "./storage-Bo8p2gMW.js";
import { t as s } from "./clipboard-DVOr4eiu.js";
//#region ../history-view/src/scss/history.scss?inline
var c = "/**\n * History View Styles\n */\n@layer view.history {\n  :is(html, body):has([data-view=history]) {\n    --view-layout: \"flex\";\n    --view-content-max-width: 1000px;\n  }\n  .view-history {\n    display: flex;\n    flex-direction: column;\n    block-size: 100%;\n    padding: 1.5rem;\n    background-color: var(--view-bg, var(--color-surface, #ffffff));\n    color: var(--view-fg, var(--color-on-surface, #1a1a1a));\n  }\n  .view-history__header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-block-end: 1.5rem;\n  }\n  .view-history__header h1 {\n    margin: 0;\n    font-size: 1.5rem;\n    font-weight: 700;\n  }\n  .view-history__clear-btn {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding: 0.5rem 0.75rem;\n    border: none;\n    border-radius: 6px;\n    background: transparent;\n    color: #d32f2f;\n    font-size: 0.8125rem;\n    font-weight: 500;\n    cursor: pointer;\n  }\n  .view-history__clear-btn:hover {\n    background-color: rgba(211, 47, 47, 0.1);\n  }\n  .view-history__list {\n    flex: 1;\n    overflow-y: auto;\n  }\n  .view-history__empty {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    block-size: 100%;\n    color: var(--view-fg);\n    opacity: 0.4;\n  }\n  .view-history__empty p {\n    margin: 0;\n    font-size: 1rem;\n  }\n  .view-history__item {\n    padding: 1rem;\n    margin-block-end: 0.75rem;\n    border-radius: 8px;\n    background-color: var(--view-item-bg, rgba(0, 0, 0, 0.02));\n    border-inline-start: 3px solid var(--color-primary, #007acc);\n  }\n  .view-history__item.error {\n    border-inline-start-color: #d32f2f;\n  }\n  .view-history__item-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-block-end: 0.5rem;\n  }\n  .view-history__item-action {\n    font-weight: 600;\n    font-size: 0.875rem;\n  }\n  .view-history__item-time {\n    font-size: 0.75rem;\n    color: var(--view-fg);\n    opacity: 0.6;\n  }\n  .view-history__item-desc {\n    margin: 0;\n    font-size: 0.875rem;\n    color: var(--view-fg);\n    opacity: 0.8;\n  }\n  .view-history__item-error {\n    margin: 0.5rem 0 0 0;\n    font-size: 0.8125rem;\n    color: #d32f2f;\n  }\n  .view-history__item-actions {\n    display: flex;\n    gap: 0.5rem;\n    margin-block-start: 0.75rem;\n  }\n  .view-history__action-btn {\n    display: flex;\n    align-items: center;\n    gap: 0.375rem;\n    padding: 0.375rem 0.625rem;\n    border: none;\n    border-radius: 4px;\n    background-color: rgba(0, 0, 0, 0.05);\n    color: var(--view-fg);\n    font-size: 0.75rem;\n    cursor: pointer;\n  }\n  .view-history__action-btn:hover {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n}", l = "rs-history", u = class {
	id = "history";
	name = "History";
	icon = "clock-counter-clockwise";
	options;
	shellContext;
	element = null;
	entries = r([]);
	_sheet = null;
	lifecycle = {
		onUnmount: () => {
			try {
				this._sheet && e(this._sheet);
			} catch {}
			this._sheet = null;
		},
		onShow: () => {
			this._sheet ??= n(c), this.loadHistory();
		},
		onHide: () => {
			try {
				this._sheet && e(this._sheet);
			} catch {}
			this._sheet = null;
		}
	};
	constructor(e = {}) {
		this.options = e, this.shellContext = e.shellContext;
	}
	render(e) {
		return e && (this.options = {
			...this.options,
			...e
		}, this.shellContext = e.shellContext || this.shellContext), this.loadHistory(), this.element = t`
            <div class="view-history">
                <div class="view-history__header">
                    <h1>History</h1>
                    <button class="view-history__clear-btn" data-action="clear" type="button">
                        <ui-icon icon="trash" icon-style="duotone"></ui-icon>
                        <span>Clear History</span>
                    </button>
                </div>
                <div class="view-history__list" data-history-list>
                    ${this.renderEntries()}
                </div>
            </div>
        `, this.setupEventHandlers(), this.element;
	}
	getToolbar() {
		return null;
	}
	renderEntries() {
		if (this.entries.length === 0) return t`
                <div class="view-history__empty">
                    <ui-icon icon="clock-counter-clockwise" icon-style="duotone" size="48"></ui-icon>
                    <p>No history yet</p>
                </div>
            `;
		let e = document.createDocumentFragment();
		for (let n of [...this.entries].reverse()) {
			let r = t`
                <div class="view-history__item ${n.ok ? "" : "error"}" data-entry="${n.id}">
                    <div class="view-history__item-header">
                        <span class="view-history__item-action">${n.action}</span>
                        <span class="view-history__item-time">${this.formatTime(n.timestamp)}</span>
                    </div>
                    <p class="view-history__item-desc">${n.description}</p>
                    ${n.error ? t`<p class="view-history__item-error">${n.error}</p>` : ""}
                    ${n.content ? t`
                        <div class="view-history__item-actions">
                            <button class="view-history__action-btn" data-action="copy" data-id="${n.id}" type="button">
                                <ui-icon icon="copy" icon-style="duotone" size="14"></ui-icon>
                                Copy
                            </button>
                            <button class="view-history__action-btn" data-action="view" data-id="${n.id}" type="button">
                                <ui-icon icon="eye" icon-style="duotone" size="14"></ui-icon>
                                View
                            </button>
                        </div>
                    ` : ""}
                </div>
            `;
			e.appendChild(r);
		}
		return e;
	}
	setupEventHandlers() {
		this.element && this.element.addEventListener("click", async (e) => {
			let t = e.target.closest("[data-action]");
			if (!t) return;
			let n = t.dataset.action, r = t.dataset.id;
			if (n === "clear") this.clearHistory();
			else if (n === "copy" && r) {
				let e = this.entries.find((e) => e.id === r);
				if (e?.content) try {
					let t = await s(e.content);
					if (!t.ok) throw Error(t.error || "Clipboard write failed");
					this.showMessage("Copied to clipboard");
				} catch {
					this.showMessage("Failed to copy");
				}
			} else if (n === "view" && r) {
				let e = this.entries.find((e) => e.id === r);
				e?.content && this.shellContext?.navigate("viewer", { content: e.content });
			}
		});
	}
	loadHistory() {
		let e = o(l, []);
		this.entries.length = 0, this.entries.push(...e), this.updateList();
	}
	reloadHistory() {
		this.loadHistory();
	}
	clearHistory() {
		this.entries.length = 0, a(l, []), this.updateList(), this.showMessage("History cleared");
	}
	updateList() {
		let e = this.element?.querySelector("[data-history-list]");
		if (!e) return;
		e.replaceChildren();
		let t = this.renderEntries();
		typeof t != "string" && e.appendChild(t);
	}
	formatTime(e) {
		let t = new Date(e), n = /* @__PURE__ */ new Date();
		return t.toDateString() === n.toDateString() ? t.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		}) : t.toLocaleDateString([], {
			month: "short",
			day: "numeric"
		}) + " " + t.toLocaleTimeString([], {
			hour: "2-digit",
			minute: "2-digit"
		});
	}
	showMessage(e) {
		this.shellContext?.showMessage(e);
	}
	invokeChannelApi(e, t) {
		if (e === i.Reload || e === i.Refresh) return this.reloadHistory(), !0;
	}
	canHandleMessage() {
		return !1;
	}
	async handleMessage() {}
};
function d(e) {
	return new u(e);
}
var f = d;
//#endregion
export { u as HistoryView, f as createHistoryView, d as createView, d as default };
