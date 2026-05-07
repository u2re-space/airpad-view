import { Cr as e, Ut as t, br as n, or as r } from "./src-BoL7goZG.js";
import { n as i } from "./types-BLPyqMSs.js";
//#region ../editor-view/src/editor.scss?inline
var a = "/**\n * Editor View Styles\n */\n@layer view.editor {\n  :is(html, body):has([data-view=editor]) {\n    --view-layout: \"flex\";\n    --view-content-max-width: none;\n  }\n  .view-editor {\n    display: flex;\n    flex-direction: column;\n    block-size: 100%;\n    background-color: var(--view-bg, var(--color-surface, #ffffff));\n    color: var(--view-fg, var(--color-on-surface, #1a1a1a));\n  }\n  .view-editor__toolbar {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 0.5rem;\n    padding: 0.5rem 1rem;\n    background-color: var(--view-toolbar-bg, rgba(0, 0, 0, 0.02));\n    border-block-end: 1px solid var(--view-border, rgba(0, 0, 0, 0.08));\n    flex-shrink: 0;\n  }\n  .view-editor__toolbar-left,\n  .view-editor__toolbar-right {\n    display: flex;\n    align-items: center;\n    gap: 0.25rem;\n  }\n  .view-editor__btn {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    padding: 0.5rem 0.75rem;\n    border: none;\n    border-radius: 6px;\n    background: transparent;\n    color: var(--view-fg);\n    font-size: 0.8125rem;\n    font-weight: 500;\n    cursor: pointer;\n    transition: background-color 0.15s ease;\n  }\n  .view-editor__btn ui-icon {\n    font-size: 1rem;\n    opacity: 0.7;\n  }\n  @media (max-width: 640px) {\n    .view-editor__btn span {\n      display: none;\n    }\n  }\n  .view-editor__btn:hover {\n    background-color: rgba(0, 0, 0, 0.06);\n  }\n  .view-editor__content {\n    flex: 1;\n    display: flex;\n    overflow: hidden;\n  }\n  .view-editor__textarea {\n    flex: 1;\n    padding: 1.5rem 2rem;\n    border: none;\n    background-color: var(--view-editor-bg, #fafafa);\n    color: var(--view-fg);\n    font-family: \"SF Mono\", \"Fira Code\", \"JetBrains Mono\", Consolas, monospace;\n    font-size: 0.9375rem;\n    line-height: 1.6;\n    resize: none;\n  }\n  .view-editor__textarea:focus {\n    outline: none;\n  }\n  .view-editor__textarea::placeholder {\n    color: var(--view-fg);\n    opacity: 0.4;\n  }\n  @media print {\n    .view-editor__toolbar {\n      display: none;\n    }\n    .view-editor__textarea {\n      padding: 0;\n    }\n  }\n}", o = "rs-editor-state", s = "# New Document\n\nStart writing here...", c = class {
	id = "editor";
	name = "Editor";
	icon = "pencil";
	options;
	shellContext;
	element = null;
	contentRef = r("");
	stateManager = i(o);
	textarea = null;
	_sheet = null;
	lifecycle = {
		onMount: () => this.onMount(),
		onUnmount: () => this.saveState(),
		onShow: () => {
			this._sheet ??= n(a);
		},
		onHide: () => {
			try {
				this._sheet && e(this._sheet);
			} catch {}
			this._sheet = null, this.saveState();
		}
	};
	constructor(e = {}) {
		this.options = e, this.shellContext = e.shellContext;
		let t = this.stateManager.load();
		this.contentRef.value = e.initialContent || t?.content || s;
	}
	render(e) {
		return e && (this.options = {
			...this.options,
			...e
		}, this.shellContext = e.shellContext || this.shellContext), this.element = t`
            <div class="view-editor">
                <div class="view-editor__toolbar">
                    <div class="view-editor__toolbar-left">
                        <button class="view-editor__btn" data-action="open" type="button" title="Open file">
                            <ui-icon icon="folder-open" icon-style="duotone"></ui-icon>
                            <span>Open</span>
                        </button>
                        <button class="view-editor__btn" data-action="save" type="button" title="Save file">
                            <ui-icon icon="floppy-disk" icon-style="duotone"></ui-icon>
                            <span>Save</span>
                        </button>
                    </div>
                    <div class="view-editor__toolbar-right">
                        <button class="view-editor__btn" data-action="preview" type="button" title="Preview">
                            <ui-icon icon="eye" icon-style="duotone"></ui-icon>
                            <span>Preview</span>
                        </button>
                        <button class="view-editor__btn" data-action="copy" type="button" title="Copy all">
                            <ui-icon icon="copy" icon-style="duotone"></ui-icon>
                            <span>Copy</span>
                        </button>
                    </div>
                </div>
                <div class="view-editor__content">
                    <textarea
                        class="view-editor__textarea"
                        placeholder="Start writing markdown..."
                        data-editor-input
                    >${this.contentRef.value}</textarea>
                </div>
            </div>
        `, this.textarea = this.element.querySelector("[data-editor-input]"), this.setupEventHandlers(), this.element;
	}
	getToolbar() {
		return null;
	}
	setContent(e) {
		this.contentRef.value = e, this.textarea && (this.textarea.value = e);
	}
	getContent() {
		return this.contentRef.value;
	}
	setupEventHandlers() {
		this.element && (this.textarea?.addEventListener("input", () => {
			this.contentRef.value = this.textarea?.value || "", this.options.onContentChange?.(this.contentRef.value);
		}), this.element.addEventListener("click", async (e) => {
			let t = e.target.closest("[data-action]");
			if (t) switch (t.dataset.action) {
				case "open":
					this.handleOpen();
					break;
				case "save":
					this.handleSave();
					break;
				case "preview":
					this.handlePreview();
					break;
				case "copy":
					await this.handleCopy();
					break;
			}
		}));
	}
	handleOpen() {
		let e = document.createElement("input");
		e.type = "file", e.accept = ".md,.markdown,.txt,text/markdown,text/plain", e.onchange = async () => {
			let t = e.files?.[0];
			if (t) try {
				let e = await t.text();
				this.setContent(e), this.options.filename = t.name, this.showMessage(`Opened ${t.name}`);
			} catch {
				this.showMessage("Failed to open file");
			}
		}, e.click();
	}
	handleSave() {
		let e = this.contentRef.value, t = this.options.filename || "document.md", n = new Blob([e], { type: "text/markdown;charset=utf-8" }), r = URL.createObjectURL(n), i = document.createElement("a");
		i.href = r, i.download = t, i.click(), setTimeout(() => URL.revokeObjectURL(r), 250), this.options.onSave?.(e), this.showMessage(`Saved ${t}`);
	}
	handlePreview() {
		this.shellContext?.navigate("viewer");
	}
	async handleCopy() {
		try {
			let e = await writeClipboardText(this.contentRef.value);
			if (!e.ok) throw Error(e.error || "Clipboard write failed");
			this.showMessage("Copied to clipboard");
		} catch {
			this.showMessage("Failed to copy");
		}
	}
	saveState() {
		this.stateManager.save({
			content: this.contentRef.value,
			filename: this.options.filename
		});
	}
	onMount() {
		console.log("[Editor] Mounted");
	}
	showMessage(e) {
		this.shellContext?.showMessage(e);
	}
	async invokeChannelApi(e, t) {
		let n = typeof t == "object" && t && !Array.isArray(t) ? t : {}, r = typeof n.text == "string" ? n.text : typeof n.content == "string" ? n.content : typeof t == "string" ? t : "";
		return e === EditorChannelAction.SetContent || e === EditorChannelAction.ContentLoad || e === EditorChannelAction.ContentEdit ? (r && this.setContent(r), !0) : (await this.handleMessage({
			type: e,
			data: {
				text: r,
				content: r
			}
		}), !0);
	}
	canHandleMessage(e) {
		return ["content-edit", "content-load"].includes(e);
	}
	async handleMessage(e) {
		let t = e;
		(t.data?.text || t.data?.content) && this.setContent(t.data.text || t.data.content || "");
	}
};
function l(e) {
	return new c(e);
}
var u = l;
//#endregion
export { c as EditorView, u as createEditorView, l as createView, l as default };
