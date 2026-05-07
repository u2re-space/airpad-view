import { Cr as e, Lt as t, Rt as n, Sr as r, Ut as i, Vt as a, a as o, br as s, i as c, o as l, xr as u } from "./src-BoL7goZG.js";
import { o as d } from "./UniformInterop-C0jUw_HW.js";
import { i as f, r as p, s as m } from "./messaging-jUZ_A071.js";
import { t as h } from "./log-sanitizer-BrG9nlWU.js";
import { t as ee } from "./src-BIgixmr1.js";
import { i as g } from "./view-ingress-validation-BajFgsTW.js";
import { t as _ } from "./decorate-DiJXSbCl.js";
import { t as v } from "./auto-render-BO52ZEke.js";
import { a as y, i as b, o as x } from "./custom-instructions-XrDlU2xQ.js";
import { t as S } from "./marked.esm-Bh9f89IO.js";
import { t as te } from "./src-HNzm8cTm.js";
import { t as ne } from "./WorkCenterState-CJR0eKaG.js";
import { t as re } from "./WorkCenterDataProcessing-DZSxxngx.js";
//#region ../workcenter-view/src/ts/WorkCenterUI.ts
var ie = class {
	container = null;
	deps;
	attachments;
	prompts;
	results;
	history;
	constructor(e, t, n, r, i) {
		this.deps = e, this.attachments = t, this.prompts = n, this.results = r, this.history = i;
	}
	setContainer(e) {
		this.container = e, this.attachments.setContainer(e), this.prompts.setContainer(e), this.results.setContainer(e), this.history.setContainer(e);
	}
	getContainer() {
		return this.container;
	}
	renderWorkCenterView(e) {
		let t = i`<div class="workcenter-view" data-view="workcenter">
      <div class="workcenter-header">
        <h2>AI Work Center</h2>
        <div class="header-controls" aria-label="AI work center output and processing options">
          <div class="control-selectors">
          <div class="format-selector">
            <label title="Output format for AI responses">Output</label>
            <select class="format-select">
              <option value="auto" ${e.outputFormat === "auto" ? "selected" : ""}>Auto</option>
              <option value="markdown" ${e.outputFormat === "markdown" ? "selected" : ""}>Markdown</option>
              <option value="json" ${e.outputFormat === "json" ? "selected" : ""}>JSON</option>
              <option value="code" ${e.outputFormat === "code" ? "selected" : ""}>Code</option>
              <option value="raw" ${e.outputFormat === "raw" ? "selected" : ""}>Raw Text</option>
              <option value="text" ${e.outputFormat === "text" ? "selected" : ""}>Plain Text</option>
              <option value="html" ${e.outputFormat === "html" ? "selected" : ""}>HTML</option>
            </select>
          </div>
          <div class="language-selector">
            <label title="Response language">Language</label>
            <select class="language-select">
              <option value="auto" ${e.selectedLanguage === "auto" ? "selected" : ""}>Auto</option>
              <option value="en" ${e.selectedLanguage === "en" ? "selected" : ""}>English</option>
              <option value="ru" ${e.selectedLanguage === "ru" ? "selected" : ""}>Русский</option>
            </select>
          </div>
          <div class="recognition-selector">
            <label title="How to recognize incoming content">Recognize</label>
            <select class="recognition-select">
              <option value="auto" ${e.recognitionFormat === "auto" ? "selected" : ""}>Auto</option>
              <option value="most-suitable" ${e.recognitionFormat === "most-suitable" ? "selected" : ""}>Most Suitable</option>
              <option value="most-optimized" ${e.recognitionFormat === "most-optimized" ? "selected" : ""}>Most Optimized</option>
              <option value="most-legibility" ${e.recognitionFormat === "most-legibility" ? "selected" : ""}>Most Legible</option>
              <option value="markdown" ${e.recognitionFormat === "markdown" ? "selected" : ""}>Markdown</option>
              <option value="html" ${e.recognitionFormat === "html" ? "selected" : ""}>HTML</option>
              <option value="text" ${e.recognitionFormat === "text" ? "selected" : ""}>Plain Text</option>
              <option value="json" ${e.recognitionFormat === "json" ? "selected" : ""}>JSON</option>
            </select>
          </div>
          <div class="processing-selector">
            <label title="Treat content as this format when processing">Process</label>
            <select class="processing-select">
              <option value="markdown" ${e.processingFormat === "markdown" ? "selected" : ""}>Markdown</option>
              <option value="html" ${e.processingFormat === "html" ? "selected" : ""}>HTML</option>
              <option value="json" ${e.processingFormat === "json" ? "selected" : ""}>JSON</option>
              <option value="text" ${e.processingFormat === "text" ? "selected" : ""}>Plain Text</option>
              <option value="typescript" ${e.processingFormat === "typescript" ? "selected" : ""}>TypeScript</option>
              <option value="javascript" ${e.processingFormat === "javascript" ? "selected" : ""}>JavaScript</option>
              <option value="python" ${e.processingFormat === "python" ? "selected" : ""}>Python</option>
              <option value="java" ${e.processingFormat === "java" ? "selected" : ""}>Java</option>
              <option value="cpp" ${e.processingFormat === "cpp" ? "selected" : ""}>C++</option>
              <option value="csharp" ${e.processingFormat === "csharp" ? "selected" : ""}>C#</option>
              <option value="php" ${e.processingFormat === "php" ? "selected" : ""}>PHP</option>
              <option value="ruby" ${e.processingFormat === "ruby" ? "selected" : ""}>Ruby</option>
              <option value="go" ${e.processingFormat === "go" ? "selected" : ""}>Go</option>
              <option value="rust" ${e.processingFormat === "rust" ? "selected" : ""}>Rust</option>
              <option value="xml" ${e.processingFormat === "xml" ? "selected" : ""}>XML</option>
              <option value="yaml" ${e.processingFormat === "yaml" ? "selected" : ""}>YAML</option>
              <option value="css" ${e.processingFormat === "css" ? "selected" : ""}>CSS</option>
              <option value="scss" ${e.processingFormat === "scss" ? "selected" : ""}>SCSS</option>
            </select>
          </div>
          </div>
        </div>
      </div>

      <div class="workcenter-content">
        <div class="workcenter-layout">

          <!-- Results & Processing Section -->
          <div class="workcenter-block results-block">
            <div class="results-section">
              ${this.renderResultsTabs(e)}
            </div>
          </div>

          <!-- Input Prompts Section -->
          <div class="workcenter-block prompts-block">
            ${this.renderInputTabs(e)}
          </div>
        </div>
      </div>
    </div>`;
		return this.container = t, this.attachments.setContainer(t), this.prompts.setContainer(t), this.results.setContainer(t), this.history.setContainer(t), this.initializeUI(e), t;
	}
	initializeUI(e) {
		this.attachments.setupDropZone(e), this.attachments.updateFileList(e), this.attachments.updateFileCounter(e), this.prompts.updatePromptFileCount(e), this.updateInputTabFileCount(e), this.updateResultsPipelineTabState(e), this.history.updateRecentHistory(e);
	}
	updateFileCounter(e) {
		this.attachments.updateFileCounter(e), this.prompts.updatePromptFileCount(e), this.updateInputTabFileCount(e);
	}
	updateFileList(e) {
		this.attachments.updateFileList(e), this.prompts.updatePromptFileCount(e), this.updateInputTabFileCount(e);
	}
	updatePromptInput(e) {
		this.prompts.updatePromptInput(e);
	}
	updateTemplateSelect(e) {
		this.prompts.updateTemplateSelect(e);
	}
	updateVoiceButton(e) {
		this.prompts.updateVoiceButton(e);
	}
	updateDataPipeline(e) {
		this.results.updateDataPipeline(e), this.updateResultsPipelineTabState(e);
	}
	updateDataCounters(e) {
		this.attachments.updateDataCounters(e);
	}
	showProcessingMessage(e) {
		this.results.showProcessingMessage(e);
	}
	showResult(e) {
		this.results.showResult(e);
	}
	showError(e) {
		this.results.showError(e);
	}
	clearResults() {
		this.results.clearResults();
	}
	revokeAllPreviewUrls(e) {
		this.attachments.revokeAllPreviewUrls(e);
	}
	renderInputTabs(e) {
		let t = e.activeInputTab || "prompt";
		return `
            <div class="input-tabs-section" data-input-tabs data-active-tab="${t}">
                <div class="wc-block-header">
                    <div class="input-tab-actions">
                        <button class="tab-btn ${t === "prompt" ? "is-active" : ""}" data-action="switch-input-tab" data-tab="prompt" aria-selected="${t === "prompt"}">Prompt</button>
                        <button class="tab-btn ${t === "attachments" ? "is-active" : ""}" data-action="switch-input-tab" data-tab="attachments" aria-selected="${t === "attachments"}">Files (${e.files.length})</button>
                    </div>
                    <h3>Work Inputs</h3>
                    <div class="file-actions">
                        <button class="btn btn-icon" data-action="select-files" title="Choose Files">
                            <ui-icon icon="folder-open" size="18" icon-style="duotone"></ui-icon>
                            <span class="btn-text">Add Files</span>
                        </button>
                        <button class="btn btn-icon" data-action="clear-all-files" title="Clear All Files">
                            <ui-icon icon="trash" size="18" icon-style="duotone"></ui-icon>
                            <span class="btn-text">Clear All</span>
                        </button>
                    </div>
                </div>
                <div class="input-tab-panels">
                    <section class="tab-panel ${t === "prompt" ? "is-active" : ""}" data-tab-panel="prompt">
                        ${this.prompts.renderPromptPanel(e)}
                    </section>
                    <section class="tab-panel ${t === "attachments" ? "is-active" : ""}" data-tab-panel="attachments">
                        ${this.attachments.renderAttachmentsSection(e)}
                    </section>
                </div>
            </div>
        `;
	}
	renderResultsTabs(e) {
		let t = !!(e.recognizedData || e.processedData && e.processedData.length > 0), n = +!!e.recognizedData + (e.processedData?.length || 0), r = e.activeResultsTab === "pipeline" && !t ? "output" : e.activeResultsTab;
		return `
            <div class="results-tabs-section" data-results-tabs data-active-tab="${r}">
                <div class="wc-block-header results-tabs-header">
                    <div class="results-tab-actions">
                        <button class="tab-btn ${r === "output" ? "is-active" : ""}" data-action="switch-results-tab" data-tab="output" aria-selected="${r === "output"}">Output</button>
                        <button class="tab-btn ${r === "pipeline" ? "is-active" : ""}" data-action="switch-results-tab" data-tab="pipeline" aria-selected="${r === "pipeline"}"${t ? "" : " disabled"}>Pipeline (${n})</button>
                        <button class="tab-btn ${r === "history" ? "is-active" : ""}" data-action="switch-results-tab" data-tab="history" aria-selected="${r === "history"}">History</button>
                    </div>
                    <h3>Results & Processing</h3>
                    ${this.results.renderOutputHeader()}
                </div>
                <div class="results-tab-panels">
                    <section class="results-tab-panel ${r === "output" ? "is-active" : ""}" data-results-tab-panel="output">
                        <div class="wc-output-section">
                            ${this.results.renderOutputContent()}
                        </div>
                    </section>
                    <section class="results-tab-panel ${r === "pipeline" ? "is-active" : ""}" data-results-tab-panel="pipeline">
                        ${t ? this.results.renderDataPipeline(e) : "<div class=\"wc-results-empty\">No data pipeline yet</div>"}
                    </section>
                    <section class="results-tab-panel ${r === "history" ? "is-active" : ""}" data-results-tab-panel="history">
                        <div class="history-section">
                            <div class="history-header">
                                <h4>Recent Activity</h4>
                                <div class="result-actions">
                                    <button class="btn btn-icon" data-action="view-action-history" title="View Action History">
                                        <ui-icon icon="history" size="18" icon-style="duotone"></ui-icon>
                                        <span class="btn-text">History</span>
                                    </button>
                                    <button class="btn" data-action="view-full-history">View All History</button>
                                </div>
                            </div>
                            <div class="recent-history" data-recent-history></div>
                            <div class="action-stats" data-action-stats style="display: none;"></div>
                        </div>
                    </section>
                </div>
            </div>
        `;
	}
	updateInputTabFileCount(e) {
		if (!this.container) return;
		let t = this.container.querySelector("[data-action=\"switch-input-tab\"][data-tab=\"attachments\"]");
		t && (t.textContent = `Files (${e.files.length})`);
	}
	updateResultsPipelineTabState(e) {
		if (!this.container) return;
		let t = !!(e.recognizedData || e.processedData && e.processedData.length > 0), n = +!!e.recognizedData + (e.processedData?.length || 0), r = this.container.querySelector("[data-results-tabs]"), i = this.container.querySelector("[data-action=\"switch-results-tab\"][data-tab=\"pipeline\"]");
		if (!r || !i) return;
		i.textContent = `Pipeline (${n})`, i.disabled = !t;
		let a = r.getAttribute("data-active-tab") || "output";
		if (!t && a === "pipeline") {
			r.setAttribute("data-active-tab", "output"), e.activeResultsTab = "output";
			let t = this.container.querySelector("[data-action=\"switch-results-tab\"][data-tab=\"output\"]");
			t && (t.classList.add("is-active"), t.setAttribute("aria-selected", "true")), i.classList.remove("is-active"), i.setAttribute("aria-selected", "false");
			let n = this.container.querySelector("[data-results-tab-panel=\"output\"]"), a = this.container.querySelector("[data-results-tab-panel=\"pipeline\"]");
			n?.classList.add("is-active"), a?.classList.remove("is-active");
		}
	}
}, ae = class {
	deps;
	constructor(e) {
		this.deps = e;
	}
	async handleDroppedContent(e, t, n) {
		switch (this.getCurrentHash()) {
			case d.SHARE_TARGET_TEXT:
				if (n === "text" || n === "html") return this.handlePastedContent(e, t, n);
				this.deps.showMessage?.("This route only accepts text content. Please paste text or use the files route for file drops.");
				return;
			case d.SHARE_TARGET_IMAGE:
				if (this.isImageContent(t) || n === "image") return this.handleImageContent(e, t, n);
				this.deps.showMessage?.("This route only accepts image content. Please drop images or use other routes for different content types.");
				return;
			case d.SHARE_TARGET_FILES: return this.handlePastedContent(e, t, n);
			case d.SHARE_TARGET_URL:
				if (this.isValidUrl(t)) return this.handlePastedContent(e, t, n);
				this.deps.showMessage?.("This route only accepts URLs. Please paste a valid URL.");
				return;
			default: return this.handlePastedContent(e, t, n);
		}
	}
	async handlePastedContent(e, t, n) {
		let r = this.getCurrentHash();
		try {
			switch (r) {
				case d.SHARE_TARGET_TEXT:
					n === "text" || n === "html" ? await this.handleTextContent(e, t, n) : this.deps.showMessage?.("This route only accepts text content");
					break;
				case d.SHARE_TARGET_URL:
					this.isValidUrl(t) ? await this.handleUrlContent(e, t) : this.deps.showMessage?.("This route only accepts valid URLs");
					break;
				case d.SHARE_TARGET_IMAGE:
					this.isImageContent(t) || this.isBase64Data(t) ? await this.handleImageContent(e, t, n) : this.deps.showMessage?.("This route only accepts image content");
					break;
				default:
					await this.handleDefaultPaste(e, t, n);
					break;
			}
		} catch (e) {
			console.error("[WorkCenter] Failed to handle pasted content:", e), this.deps.showMessage?.("Failed to process pasted content");
		}
	}
	isValidUrl(e) {
		try {
			return new URL(e), !0;
		} catch {
			return !1;
		}
	}
	isBase64Data(e) {
		let t = (e || "").trim();
		return !!l(t) || c(t);
	}
	async handleBase64Content(e, t) {
		try {
			let n = await o(t, {
				namePrefix: "pasted-data",
				uriComponent: !0
			});
			e.files.push(n.file), this.deps.showMessage?.("Encoded content decoded and added to work center");
		} catch (n) {
			console.error("[WorkCenter] Failed to decode base64 content:", n);
			let r = await o(t, {
				namePrefix: "pasted-text",
				mimeType: "text/plain;charset=utf-8"
			});
			e.files.push(r.file), this.deps.showMessage?.("Base64 content added as text to work center");
		}
	}
	addFilesFromInput(e, t) {
		let n = Array.from(t), r = this.getCurrentHash(), i = n;
		switch (r) {
			case d.SHARE_TARGET_IMAGE:
				if (i = n.filter((e) => e.type.startsWith("image/")), i.length === 0) {
					this.deps.showMessage?.("This route only accepts image files. Please drop images or use other routes for different file types.");
					return;
				}
				break;
			case d.SHARE_TARGET_TEXT:
				if (i = n.filter((e) => e.type.startsWith("text/") || e.type === "application/json" || e.type === "application/xml" || e.name.toLowerCase().endsWith(".txt") || e.name.toLowerCase().endsWith(".md") || e.name.toLowerCase().endsWith(".json") || e.name.toLowerCase().endsWith(".xml")), i.length === 0) {
					this.deps.showMessage?.("This route only accepts text files. Please drop text files or use the files route for other file types.");
					return;
				}
				break;
			case d.SHARE_TARGET_FILES:
				i = n;
				break;
			case d.SHARE_TARGET_URL:
				this.deps.showMessage?.("This route only accepts URLs. Please paste a URL instead of dropping files.");
				return;
			default:
				i = n;
				break;
		}
		if (e.files.push(...i), i.length > 0) {
			let e = i.length, t = e === 1 ? "file" : "files";
			this.deps.showMessage?.(`${e} ${t} added to work center`);
		}
	}
	removeFile(e, t) {
		return t >= 0 && t < e.files.length ? e.files.splice(t, 1)[0] : null;
	}
	clearAllFiles(e) {
		let t = [...e.files];
		return e.files.length = 0, t;
	}
	getFilesForProcessing(e) {
		return [...e.files];
	}
	hasFiles(e) {
		return e.files.length > 0;
	}
	hasTextFiles(e) {
		return e.files.some((e) => e.type.startsWith("text/") || e.type === "application/markdown" || e.name?.endsWith(".md") || e.name?.endsWith(".txt"));
	}
	determineRecognizedFormat(e) {
		return this.hasTextFiles(e), "markdown";
	}
	validateFileForUpload(e) {
		return e.size > 50 * 1024 * 1024 ? {
			valid: !1,
			reason: "File too large (max 50MB)"
		} : [
			"image/",
			"text/",
			"application/pdf",
			"application/json",
			"application/markdown",
			"application/xml"
		].some((t) => e.type.startsWith(t) || e.name.toLowerCase().endsWith(t.replace("application/", "."))) ? { valid: !0 } : {
			valid: !1,
			reason: "File type not supported"
		};
	}
	getCurrentHash() {
		return typeof globalThis < "u" ? globalThis?.location?.hash : "";
	}
	async handleTextContent(e, t, n) {
		let r = await o(t, {
			namePrefix: n === "html" ? "shared-html" : "shared-text",
			mimeType: n === "html" ? "text/html" : "text/plain;charset=utf-8"
		});
		e.files.push(r.file), this.deps.showMessage?.("Text content added to work center");
	}
	async handleUrlContent(e, t) {
		let n = await o(t, {
			namePrefix: "shared-url",
			uriComponent: !0
		});
		e.files.push(n.file), this.deps.showMessage?.("URL added to work center");
	}
	async handleImageContent(e, t, n) {
		if (this.isBase64Data(t)) await this.handleBase64Content(e, t);
		else {
			let r = await o(t, {
				namePrefix: "shared-image",
				mimeType: n === "image" ? "image/png" : "text/plain;charset=utf-8",
				uriComponent: !0
			});
			e.files.push(r.file), this.deps.showMessage?.("Image content added to work center");
		}
	}
	async handleDefaultPaste(e, t, n) {
		if (this.isValidUrl(t)) {
			let n = await o(t, {
				namePrefix: "pasted-url",
				uriComponent: !0
			});
			e.files.push(n.file), this.deps.showMessage?.("URL added to work center");
		} else if (this.isBase64Data(t)) await this.handleBase64Content(e, t);
		else {
			let r = await o(t, {
				namePrefix: `pasted-${n || "text"}`,
				mimeType: n === "html" ? "text/html" : "text/plain;charset=utf-8"
			});
			e.files.push(r.file), this.deps.showMessage?.(`${n === "html" ? "HTML" : "Text"} content added to work center`);
		}
	}
	isImageContent(e) {
		return e.startsWith("data:image/") || /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i.test(e);
	}
};
//#endregion
//#region ../../projects/subsystem/runtime/share-target.ts
async function C() {
	return null;
}
async function oe() {
	return [];
}
//#endregion
//#region ../workcenter-view/src/ts/WorkCenterShareTarget.ts
var se = class {
	deps;
	_fileOps;
	constructor(e, t) {
		this.deps = e, this._fileOps = t, this._fileOps;
	}
	initShareTargetListener(e) {
		console.log("[WorkCenter] Share target result listener initialized via unified messaging");
	}
	async processQueuedMessages(e) {
		try {
			console.log("[WorkCenter] Queued message processing handled by unified messaging");
			let t = await C({ clear: !0 });
			if (t) {
				let n = t.meta && typeof t.meta == "object" ? t.meta : {};
				await this.addShareTargetInput(e, {
					files: t.files,
					title: typeof n.title == "string" ? n.title : "",
					text: typeof n.text == "string" ? n.text : "",
					url: typeof n.url == "string" ? n.url : "",
					timestamp: typeof n.timestamp == "number" ? n.timestamp : Date.now(),
					source: "share-target-cache"
				});
			}
		} catch (e) {
			console.error("[WorkCenter] Failed to process queued messages:", e);
		}
	}
	handleShareTargetMessage(e, t) {
		let { type: n, data: r, pingId: i } = t.data || {};
		n === "ping" && i || (n === "share-target-result" && r ? (console.log("[WorkCenter] Received share target result:", h(r)), this.addShareTargetResult(e, r)) : n === "share-target-input" && r ? (console.log("[WorkCenter] Received share target input:", h(r)), this.addShareTargetInput(e, r)) : n === "ai-result" && r ? (console.log("[WorkCenter] Received AI processing result:", h(r)), this.handleAIResult(e, r)) : n === "content-cached" && r ? (console.log("[WorkCenter] Received cached content from SW:", h(r)), this.handleCachedContent(e, r)) : n === "content-received" && r && (console.log("[WorkCenter] Received content from SW:", h(r)), this.handleReceivedContent(e, r)));
	}
	async addShareTargetResult(e, t) {
		let n = {
			content: t.content || "",
			timestamp: t.timestamp || Date.now(),
			action: t.action || "Share Target Processing",
			sourceData: t.rawData,
			metadata: {
				source: t.source || "share-target",
				...t.metadata
			}
		}, { WorkCenterStateManager: r } = await import("./WorkCenterState-CJR0eKaG.js").then((e) => e.n);
		r.addProcessedStep(e, n), e.lastRawResult = t.rawData ?? t.content ?? null, r.saveState(e), this.deps.showMessage?.("Share target result added to work center"), this.deps.render?.();
	}
	async addShareTargetInput(e, t) {
		console.log("[WorkCenter] Adding share target input:", h(t));
		try {
			let n = 0, r = !1, i = (e) => `${String(e.name || "").trim().toLowerCase()}::${Number(e.size || 0)}::${String(e.type || "").trim().toLowerCase()}`, a = new Set((e.files || []).map(i)), s = (t) => {
				let n = i(t);
				return a.has(n) ? !1 : (a.add(n), e.files.push(t), !0);
			}, c = async (e) => {
				if (!e) return null;
				if (e instanceof File) return e;
				if (e instanceof Blob) return new File([e], `shared-${Date.now()}`, { type: e.type || "application/octet-stream" });
				let t = e;
				if (t?.blob instanceof Blob) {
					let e = t.blob, n = typeof t.name == "string" && t.name.trim() ? t.name : `shared-${Date.now()}`, r = Number(t.lastModified || Date.now());
					return new File([e], n, {
						type: String(t.type || e.type || "application/octet-stream"),
						lastModified: Number.isFinite(r) ? r : Date.now()
					});
				}
				return null;
			}, l = Array.isArray(t.attachments) ? t.attachments.map((e) => e?.data).filter((e) => e instanceof File || e instanceof Blob) : [], u = [...Array.isArray(t.files) ? t.files : [], ...l];
			if (u.length > 0) for (let e of u) {
				let t = await c(e);
				t && s(t) && n++;
			}
			if (n === 0 && Number(t?.fileCount || 0) > 0) try {
				let e = await C({ clear: !1 }), t = Array.isArray(e?.files) ? e.files : [];
				if (t.length > 0) for (let e of t) e instanceof File && s(e) && n++;
			} catch (e) {
				console.warn("[WorkCenter] Failed to hydrate cached share files:", e);
			}
			if (t.text && typeof t.text == "string" && t.text.trim()) {
				let e = new Blob([t.text], { type: "text/plain" });
				s(new File([e], "shared-text.txt", { type: "text/plain" })) && (n++, r = !0);
			}
			if (t.url && typeof t.url == "string") {
				let e = new Blob([t.url], { type: "text/plain" });
				s(new File([e], "shared-url.txt", { type: "text/plain" })) && n++;
			}
			if (t.base64Data && typeof t.base64Data == "string") try {
				s((await o(t.base64Data, {
					namePrefix: "shared",
					uriComponent: !0
				})).file) && n++;
			} catch (e) {
				console.warn("[WorkCenter] Failed to decode base64 data:", e);
			}
			let { WorkCenterStateManager: d } = await import("./WorkCenterState-CJR0eKaG.js").then((e) => e.n);
			d.clearRecognizedData(e), d.saveState(e), (n > 0 || r) && (e.activeInputTab = "attachments", this.deps.onFilesChanged?.());
			let f = "";
			n > 0 && (f += `${n} file(s) added to work center`), r && (f += (f ? " and " : "") + "text content added"), f && this.deps.showMessage?.(f), (n > 0 || r) && this.deps.render?.();
		} catch (e) {
			console.error("[WorkCenter] Failed to add share target input:", e), this.deps.showMessage?.("Failed to add share target input");
		}
	}
	sendShareTargetResult(e) {
		m({
			type: "share-target-result",
			source: "workcenter",
			destination: "workcenter",
			data: e,
			metadata: { priority: "high" }
		}).catch((e) => {
			console.error("[WorkCenter] Failed to send share target result:", e);
		});
	}
	sendShareTargetInput(e) {
		m({
			type: "share-target-input",
			source: "workcenter",
			destination: "workcenter",
			data: e,
			metadata: { priority: "high" }
		}).catch((e) => {
			console.error("[WorkCenter] Failed to send share target input:", e);
		});
	}
	async handleCachedContent(e, t) {
		let { cacheKey: n, context: r, content: i } = t;
		r === "share-target" && i && (console.log("[WorkCenter] Processing cached share-target content:", h(i)), await this.addShareTargetInput(e, i), await this.retrieveCachedFiles(e, n));
	}
	async handleReceivedContent(e, t) {
		let { content: n, context: r } = t;
		r === "share-target" && n && (console.log("[WorkCenter] Processing received share-target content:", h(n)), await this.addShareTargetInput(e, n));
	}
	async handleAIResult(e, t) {
		let { success: n, data: r, error: i } = t;
		if (!n) {
			console.warn("[WorkCenter] AI processing failed:", i), this.deps.showMessage?.("AI processing failed: " + (i || "Unknown error"));
			return;
		}
		if (!r) {
			console.warn("[WorkCenter] No data in AI result");
			return;
		}
		console.log("[WorkCenter] Adding AI processing result to work center");
		try {
			let t = {
				content: typeof r == "string" ? r : JSON.stringify(r, null, 2),
				timestamp: Date.now(),
				action: "AI Processing (Share Target)",
				sourceData: {
					aiResult: r,
					source: "share-target"
				},
				metadata: {
					source: "share-target-ai",
					processingType: "ai",
					resultType: typeof r
				}
			}, { WorkCenterStateManager: n } = await import("./WorkCenterState-CJR0eKaG.js").then((e) => e.n);
			n.addProcessedStep(e, t), e.lastRawResult = r, n.saveState(e), this.deps.render?.(), this.deps.showMessage?.("AI processing result added to work center"), this.deps.render && this.deps.render();
		} catch (e) {
			console.error("[WorkCenter] Failed to add AI result:", e), this.deps.showMessage?.("Failed to add AI processing result");
		}
	}
	async retrieveCachedFiles(e, t) {
		try {
			let n = await oe(t || "latest");
			if (n.length > 0) {
				let t = (e) => `${String(e.name || "").trim().toLowerCase()}::${Number(e.size || 0)}::${String(e.type || "").trim().toLowerCase()}`, r = new Set((e.files || []).map(t)), i = 0;
				for (let a of n) {
					if (!(a instanceof File)) continue;
					let n = t(a);
					r.has(n) || (r.add(n), console.log("[WorkCenter] Adding cached file:", a.name), e.files.push(a), i++);
				}
				i > 0 && (this.deps.onFilesChanged?.(), this.deps.showMessage?.(`Added ${i} cached file(s) from share-target`));
			}
		} catch (e) {
			console.warn("[WorkCenter] Failed to retrieve cached files:", e);
		}
	}
};
//#endregion
//#region ../../projects/subsystem/runtime/instruction-utils.ts
function ce(e, t) {
	let n = t?.content?.trim();
	return n ? `${n}\n\n${e}` : e;
}
//#endregion
//#region ../workcenter-view/src/ts/WorkCenterTemplates.ts
var le = class {
	deps;
	cachedInstructions = [];
	cachedActiveInstructionId = "";
	constructor(e) {
		this.deps = e;
	}
	async loadInstructions() {
		try {
			let e = await y();
			return this.cachedInstructions = e.instructions, this.cachedActiveInstructionId = e.activeId, this.cachedInstructions;
		} catch (e) {
			return console.warn("[WorkCenterTemplates] Failed to load custom instructions:", e), [];
		}
	}
	getInstructions() {
		return this.cachedInstructions;
	}
	getActiveInstructionId() {
		return this.cachedActiveInstructionId;
	}
	async getActiveInstruction() {
		if (this.cachedActiveInstructionId) {
			let e = this.getInstructionById(this.cachedActiveInstructionId);
			if (e) return e;
		}
		let e = await y();
		return this.cachedInstructions = e.instructions, this.cachedActiveInstructionId = e.activeId, e.activeInstruction;
	}
	async setActiveInstruction(e) {
		await x(e), this.cachedActiveInstructionId = e || "";
	}
	buildPromptWithInstruction(e, t) {
		return t?.instruction ? ce(e, t.instruction) : e;
	}
	getInstructionById(e) {
		return this.cachedInstructions.find((t) => t.id === e);
	}
	resolveInstruction(e) {
		if (e) {
			let t = this.getInstructionById(e);
			if (t) return t;
		}
		return this.cachedActiveInstructionId && this.getInstructionById(this.cachedActiveInstructionId) || null;
	}
	async getDefaultTemplates() {
		let { DEFAULT_INSTRUCTION_TEMPLATES: e } = await import("./instruction-templates-BX9wnZos.js").then((e) => e.n);
		return e;
	}
	renderInstructionPanel(e) {
		return "\n            <div class=\"instruction-panel\">\n              <div class=\"instruction-selector-row wide\">\n                <label class=\"instruction-label\">\n                  <ui-icon icon=\"clipboard-text\" size=\"16\" icon-style=\"duotone\"></ui-icon>\n                  <span>Instruction:</span>\n                </label>\n                <select class=\"instruction-select\" data-action=\"select-instruction\">\n                  <option value=\"\">None (default)</option>\n                </select>\n                <button class=\"btn btn-icon btn-sm\" data-action=\"refresh-instructions\" title=\"Refresh from Settings\">\n                  <ui-icon icon=\"arrows-clockwise\" size=\"14\" icon-style=\"duotone\"></ui-icon>\n                </button>\n              </div>\n              <div class=\"instruction-help\">\n                Active instruction from Settings is appended to your prompt.\n              </div>\n            </div>\n        ";
	}
	showTemplateEditor(e, t) {
		let n = i`<div class="template-editor-modal">
      <div class="modal-content">
        <div class="modal-header">
            <h3>Prompt Templates</h3>
            <p class="modal-desc">Manage prompt templates used in Work Center. These define what action to perform on the content.</p>
        </div>
        ${this.renderInstructionPanel(e)}
        <div class="template-list">
          ${e.promptTemplates.map((e, t) => i`<div class="template-item" data-index="${t}">
              <div class="template-item-header">
                <input type="text" class="template-name" value="${e.name}" data-index="${t}" placeholder="Template name...">
                <button class="btn small btn-danger remove-template" data-index="${t}" title="Remove template">
                  <ui-icon icon="trash" size="14"></ui-icon>
                </button>
              </div>
              <textarea class="template-prompt" data-index="${t}" rows="3" placeholder="Enter prompt template...">${e.prompt}</textarea>
            </div>`)}
        </div>
        <div class="modal-actions">
          <div class="modal-actions-group modal-actions-group-start">
            <button class="btn" data-action="add-template">
              <ui-icon icon="plus" size="14"></ui-icon>
              <span>Add Template</span>
            </button>
            <button class="btn" data-action="import-instructions" title="Import from Custom Instructions (Settings)">
              <ui-icon icon="download" size="14"></ui-icon>
              <span>Import from Settings</span>
            </button>
          </div>
          <div class="modal-actions-group modal-actions-group-end">
            <button class="btn primary" data-action="save-templates">Save</button>
            <button class="btn" data-action="close-editor">Close</button>
          </div>
        </div>
      </div>
    </div>`;
		n.addEventListener("click", async (r) => {
			let i = r.target, a = i.closest("[data-action]")?.getAttribute("data-action"), o = i.closest("[data-index]")?.getAttribute("data-index");
			a === "add-template" ? (this.addTemplate(e), n.remove(), this.showTemplateEditor(e, t)) : a === "save-templates" ? (await this.saveTemplates(e, n), n.remove(), this.deps.render?.()) : a === "close-editor" ? n.remove() : a === "import-instructions" ? (await this.importFromCustomInstructions(e), n.remove(), this.showTemplateEditor(e, t)) : i.classList.contains("remove-template") && o && (this.removeTemplate(e, parseInt(o)), n.remove(), this.showTemplateEditor(e, t));
		}), n.addEventListener("click", (e) => {
			e.target === n && n.remove();
		}), t.append(n);
	}
	addTemplate(e) {
		e.promptTemplates.push({
			name: "New Template",
			prompt: "Enter your prompt here..."
		});
	}
	removeTemplate(e, t) {
		t >= 0 && t < e.promptTemplates.length && e.promptTemplates.splice(t, 1);
	}
	async saveTemplates(e, t) {
		let n = t.querySelectorAll(".template-name"), r = t.querySelectorAll(".template-prompt");
		e.promptTemplates = Array.from(n).map((e, t) => ({
			name: e.value,
			prompt: r[t].value
		}));
		let { WorkCenterStateManager: i } = await import("./WorkCenterState-CJR0eKaG.js").then((e) => e.n);
		i.savePromptTemplates(e.promptTemplates), this.deps.showMessage?.("Templates saved");
	}
	async importFromCustomInstructions(e) {
		try {
			let t = await b();
			if (!t.length) {
				this.deps.showMessage?.("No custom instructions found in Settings");
				return;
			}
			let n = new Set(e.promptTemplates.map((e) => e.name)), r = 0;
			for (let i of t) n.has(i.label) || (e.promptTemplates.push({
				name: i.label,
				prompt: i.instruction
			}), r++);
			let { WorkCenterStateManager: i } = await import("./WorkCenterState-CJR0eKaG.js").then((e) => e.n);
			i.savePromptTemplates(e.promptTemplates), r > 0 ? this.deps.showMessage?.(`Imported ${r} instruction${r > 1 ? "s" : ""} as templates`) : this.deps.showMessage?.("All instructions already exist as templates");
		} catch (e) {
			console.warn("[WorkCenterTemplates] Failed to import instructions:", e), this.deps.showMessage?.("Failed to import instructions");
		}
	}
	selectTemplate(e, t) {
		e.selectedTemplate = t, t && (e.currentPrompt = t);
	}
	getTemplateByPrompt(e, t) {
		return e.promptTemplates.find((e) => e.prompt === t);
	}
	hasTemplate(e, t) {
		return e.promptTemplates.some((e) => e.prompt === t);
	}
}, w = class {
	deps;
	voiceTimeout = null;
	constructor(e) {
		this.deps = e;
	}
	async startVoiceRecording(e) {
		if (!e.voiceRecording) {
			e.voiceRecording = !0;
			try {
				let t = await this.deps.getSpeechPrompt();
				t && (e.currentPrompt = t);
			} catch (e) {
				console.warn("Voice recording failed:", e), this.deps.showMessage?.("Voice recording failed");
			} finally {
				e.voiceRecording = !1;
			}
		}
	}
	stopVoiceRecording(e) {
		e.voiceRecording = !1, this.voiceTimeout &&= (globalThis?.clearTimeout?.(this.voiceTimeout), null);
	}
	isRecording(e) {
		return e.voiceRecording;
	}
	setVoiceTimeout(e, t = 3e4) {
		this.voiceTimeout && globalThis?.clearTimeout?.(this.voiceTimeout), this.voiceTimeout = globalThis?.setTimeout?.(() => {
			e(), this.voiceTimeout = null;
		}, t);
	}
	clearVoiceTimeout() {
		this.voiceTimeout &&= (globalThis?.clearTimeout?.(this.voiceTimeout), null);
	}
}, T = { async execute(e, t, n) {
	let r = Date.now();
	return {
		type: "text",
		content: e.text || "No prompt provided.",
		input: e,
		context: t,
		options: n,
		processingTime: Date.now() - r
	};
} }, E = class {
	deps;
	ui;
	fileOps;
	dataProcessing;
	results;
	history;
	templates;
	constructor(e, t, n, r, i, a, o) {
		this.deps = e, this.ui = t, this.fileOps = n, this.dataProcessing = r, this.results = i, this.history = a, this.templates = o;
	}
	async executeUnifiedAction(e) {
		if (this.fileOps.getFilesForProcessing(e).length === 0 && !e.currentPrompt.trim() && !e.recognizedData) {
			this.deps.showMessage("Please select files or enter a prompt first");
			return;
		}
		let t = "Processing...";
		e.recognizedData ? t = `Processing ${e.recognizedData.source} content...` : this.fileOps.hasFiles(e) && (t = `Processing ${e.files.length} file${e.files.length > 1 ? "s" : ""}...`), this.results.showProcessingMessage(t);
		try {
			let t = e.currentPrompt.trim() || (e.autoAction ? this.getLastSuccessfulPrompt() : "Analyze and process the provided content intelligently");
			if (this.templates) {
				let n = this.templates.resolveInstruction(e.selectedInstruction);
				!n && !e.selectedInstruction && (n = await this.templates.getActiveInstruction()), n?.instruction && (e.selectedInstruction ||= n.id, t = this.templates.buildPromptWithInstruction(t, n));
			}
			let n = {
				type: e.recognizedData ? "text" : this.fileOps.hasFiles(e) ? "files" : "text",
				files: this.fileOps.hasFiles(e) ? [...e.files] : void 0,
				text: t,
				recognizedData: e.recognizedData || void 0,
				recognizedContent: e.recognizedData?.content || void 0
			};
			if (e.selectedTemplate && e.selectedTemplate.includes("Translate the following content to the selected language") && e.selectedLanguage !== "auto") {
				let t = e.selectedLanguage === "ru" ? "Russian" : "English";
				n.text = `Translate the following content to ${t}. Maintain the original formatting and structure where possible. If the content is already in ${t}, provide a natural rephrasing or improvement instead.`;
			} else e.selectedLanguage !== "auto" && (n.text = `${e.selectedLanguage === "ru" ? "Please respond in Russian language." : "Please respond in English language."} ${n.text}`);
			let r = {
				source: "workcenter",
				sessionId: this.generateSessionId()
			}, i;
			i = e.currentPrompt.trim() && e.currentPrompt.trim() !== "Analyze and process the provided content intelligently" ? void 0 : e.recognizedData ? "analyze" : this.fileOps.hasFiles(e) ? this.fileOps.hasTextFiles(e) ? "source" : "recognize" : "analyze";
			let a = await T.execute(n, r, {
				forceAction: i,
				recognitionFormat: e.recognitionFormat,
				processingFormat: e.processingFormat
			}), { WorkCenterStateManager: o } = await import("./WorkCenterState-CJR0eKaG.js").then((e) => e.n);
			o.saveState(e), e.lastRawResult = a.rawData;
			let s = this.dataProcessing.formatResult(a.rawData || a, e.outputFormat), c = this.ui.getContainer()?.querySelector("[data-output]");
			if (c && (c.innerHTML = `<div class="result-content">${s}</div>`), this.fileOps.hasFiles(e) && a.rawData?.ok && !e.recognizedData) {
				let t = this.fileOps.hasTextFiles(e);
				e.recognizedData = {
					content: a.content,
					timestamp: Date.now(),
					source: t ? "text" : "files",
					recognizedAs: this.fileOps.determineRecognizedFormat(e),
					metadata: { fileCount: e.files.length },
					responseId: a.responseId || "unknown"
				}, this.results.updateDataPipeline(e), this.ui.updateDataCounters(e), e.selectedTemplate && e.selectedTemplate.trim() && (console.log("[WorkCenter] Auto-processing with template:", e.selectedTemplate), setTimeout(async () => {
					await this.executeUnifiedAction(e);
				}, 100));
			} else if (e.recognizedData && a.rawData?.ok) {
				let t = {
					content: a.content,
					timestamp: Date.now(),
					action: e.currentPrompt.trim() || "additional processing",
					sourceData: e.recognizedData,
					metadata: { step: e.currentProcessingStep + 1 }
				}, { WorkCenterStateManager: n } = await import("./WorkCenterState-CJR0eKaG.js").then((e) => e.n);
				n.addProcessedStep(e, t);
			}
		} catch (e) {
			let t = e instanceof Error ? e.message : String(e);
			this.results.showError(t);
		}
		this.history.updateRecentHistory(e), this.ui.updateDataPipeline(e), this.ui.updateDataCounters(e);
	}
	getLastSuccessfulPrompt() {
		return this.history.getLastSuccessfulPrompt();
	}
	generateSessionId() {
		return `wc_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
	}
	async copyResults(e) {
		if (e.lastRawResult) try {
			await this.dataProcessing.copyResultsToClipboard(e.lastRawResult, e.outputFormat), this.deps.showMessage("Results copied to clipboard");
		} catch (e) {
			console.error("Failed to copy results:", e), this.deps.showMessage("Failed to copy results");
		}
	}
	async viewResultsInViewer(e) {
		if (!e.lastRawResult) {
			this.deps.showMessage("No results to view");
			return;
		}
		try {
			let { unifiedMessaging: t } = await import("./messaging-C_0OTCXd.js"), n = typeof e.lastRawResult == "string" ? e.lastRawResult : JSON.stringify(e.lastRawResult, null, 2);
			try {
				n = JSON.parse(n)?.data || n;
			} catch {}
			await t.sendMessage({
				id: crypto.randomUUID(),
				type: "content-view",
				source: "workcenter",
				destination: "viewer",
				contentType: e.outputFormat === "markdown" ? "markdown" : "text",
				data: {
					text: n,
					filename: `workcenter-output-${Date.now()}.${e.outputFormat === "markdown" ? "md" : e.outputFormat === "json" ? "json" : e.outputFormat === "html" ? "html" : e.outputFormat === "code" ? "ts" : "txt"}`
				},
				metadata: {
					title: "Work Center Output",
					timestamp: Date.now(),
					source: "workcenter",
					format: e.outputFormat
				}
			}), await this.navigateToViewer();
		} catch (e) {
			console.error("Failed to open output in viewer:", e), this.deps.showMessage("Failed to open output in viewer");
		}
	}
	async navigateToViewer() {
		if (this.deps.navigate) {
			await this.deps.navigate("viewer");
			return;
		}
		this.deps?.state && (this.deps.state.view = "markdown-viewer", this.deps.render?.());
	}
	clearResults(e) {
		e.lastRawResult = null, this.results.clearResults();
	}
	async saveResultsToExplorer(e) {
		if (!e.lastRawResult) {
			this.deps.showMessage("No results to save");
			return;
		}
		try {
			let { unifiedMessaging: t } = await import("./messaging-C_0OTCXd.js"), n = typeof e.lastRawResult == "string" ? e.lastRawResult : JSON.stringify(e.lastRawResult, null, 2);
			await t.sendMessage({
				id: crypto.randomUUID(),
				type: "content-save",
				source: "workcenter",
				destination: "explorer",
				data: {
					action: "save",
					text: n,
					filename: `workcenter-result-${Date.now()}.${e.outputFormat === "json" ? "json" : e.outputFormat === "html" ? "html" : e.outputFormat === "code" ? "ts" : "txt"}`,
					path: "/workcenter-results/"
				},
				metadata: {
					title: "Work Center Result",
					timestamp: Date.now(),
					source: "workcenter",
					format: e.outputFormat
				}
			}), this.deps.showMessage("Results saved to Explorer");
		} catch (e) {
			console.error("Failed to save results to explorer:", e), this.deps.showMessage("Failed to save results to Explorer");
		}
	}
}, D = class {
	deps;
	ui;
	fileOps;
	actions;
	templates;
	voice;
	shareTarget;
	history;
	attachments;
	prompts;
	state;
	container = null;
	isHandlingPaste = !1;
	constructor(e, t, n, r, i, a, o, s, c, l, u) {
		this.deps = e, this.ui = t, this.fileOps = n, this.actions = r, this.templates = i, this.voice = a, this.shareTarget = o, this.history = s, this.attachments = c, this.prompts = l, this.state = u;
	}
	setContainer(e) {
		this.container = e;
	}
	setupWorkCenterEvents() {
		this.container && (this.setupFileSelection(), this.setupPasteSupport(), this.setupTemplateSelection(), this.setupInstructionSelection(), this.setupPromptInput(), this.setupPromptDropzone(), this.setupVoiceInput(), this.setupInputTabs(), this.setupResultsTabs(), this.setupFormatSelectors(), this.setupAutoActionCheckbox(), this.setupActionButtons(), this.setupPipelineRestoration());
	}
	setupFileSelection() {
		if (!this.container) return;
		let e = Array.from(this.container.querySelectorAll("[data-action=\"select-files\"]")), t = document.createElement("input");
		t.type = "file", t.multiple = !0, t.accept = "image/*,.pdf,.txt,.md,.json,.html,.css,.js,.ts", t.style.display = "none", this.container.append(t);
		for (let n of e) n.addEventListener("click", () => t.click());
		t.addEventListener("change", async (e) => {
			let t = Array.from(e.target.files || []);
			this.fileOps.addFilesFromInput(this.state, t), this.ui.updateFileList(this.state), this.ui.updateFileCounter(this.state), this.deps.onFilesChanged?.(), t.filter((e) => e.type.startsWith("text/") || e.type === "application/markdown" || e.name.endsWith(".md") || e.name.endsWith(".txt")).length > 0 && this.state.selectedTemplate && this.state.selectedTemplate.trim() && (console.log("[WorkCenter] Auto-processing text/markdown files with template:", this.state.selectedTemplate), setTimeout(async () => {
				await this.actions.executeUnifiedAction(this.state);
			}, 100));
		});
	}
	setupPasteSupport() {
		this.container && this.container.addEventListener("paste", async (e) => {
			if (this.isHandlingPaste || !e.clipboardData) return;
			let t = e.target, n = this.isEditableTarget(t), r = this.hasClipboardFiles(e.clipboardData);
			if (n && !r) return;
			let i = !1;
			this.isHandlingPaste = !0;
			try {
				let t = [];
				for (let n of Array.from(e.clipboardData.items || [])) {
					if (n.kind !== "file" || !n.getAsFile) continue;
					let e = n.getAsFile();
					e && t.push(e);
				}
				if (t.length > 0 && (e.preventDefault(), this.fileOps.addFilesFromInput(this.state, t), this.ui.updateFileList(this.state), this.ui.updateFileCounter(this.state), this.deps.onFilesChanged?.(), i = !0), !i) {
					let t = Array.from(e.clipboardData.files || []);
					t.length > 0 && (e.preventDefault(), this.fileOps.addFilesFromInput(this.state, t), this.ui.updateFileList(this.state), this.ui.updateFileCounter(this.state), this.deps.onFilesChanged?.(), i = !0);
				}
				if (!i) {
					let t = e.clipboardData.getData("text/plain")?.trim();
					t && (e.preventDefault(), await new Promise((e) => globalThis.setTimeout(e, 0)), await this.fileOps.handlePastedContent(this.state, t, "text"), i = !0);
				}
				if (!i) {
					let t = e.clipboardData.getData("text/html");
					if (t) {
						e.preventDefault();
						let n = document.createElement("div");
						n.innerHTML = t;
						let r = n.textContent || n.innerText || "";
						r.trim() && (await new Promise((e) => globalThis.setTimeout(e, 0)), await this.fileOps.handlePastedContent(this.state, r.trim(), "html"), i = !0);
					}
				}
				i || (e.preventDefault(), this.deps.showMessage?.("Clipboard content detected but no supported payload was extracted"));
			} finally {
				this.isHandlingPaste = !1;
			}
		});
	}
	isEditableTarget(e) {
		return e instanceof HTMLElement ? e.isContentEditable || e.closest("[contenteditable=\"true\"]") ? !0 : e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement : !1;
	}
	hasClipboardFiles(e) {
		return (e.files || []).length > 0 ? !0 : Array.from(e.items || []).some((e) => e.kind === "file");
	}
	setupTemplateSelection() {
		if (!this.container) return;
		let e = this.container.querySelector(".template-select");
		e?.addEventListener("change", async () => {
			let t = e.value;
			this.templates.selectTemplate(this.state, t), t && (this.prompts.updatePromptInput(this.state), (this.state.recognizedData || this.fileOps.hasFiles(this.state)) && (console.log("[WorkCenter] Auto-processing with selected template:", t), await this.actions.executeUnifiedAction(this.state)));
			let { WorkCenterStateManager: n } = await import("./WorkCenterState-CJR0eKaG.js").then((e) => e.n);
			n.saveState(this.state);
		});
	}
	setupInstructionSelection() {
		if (!this.container) return;
		this.prompts.populateInstructionSelect(this.state).then(async () => {
			let { WorkCenterStateManager: e } = await import("./WorkCenterState-CJR0eKaG.js").then((e) => e.n);
			e.saveState(this.state);
		});
		let e = this.container.querySelector(".instruction-select");
		e?.addEventListener("change", async () => {
			let t = e.value;
			this.prompts.handleInstructionSelection(this.state, t), await this.templates.setActiveInstruction(t || null);
			let { WorkCenterStateManager: n } = await import("./WorkCenterState-CJR0eKaG.js").then((e) => e.n);
			n.saveState(this.state);
		});
	}
	setupPromptInput() {
		if (!this.container) return;
		let e = this.container.querySelector(".prompt-input");
		e && e.addEventListener("input", async () => {
			this.state.currentPrompt = e.value;
			let { WorkCenterStateManager: t } = await import("./WorkCenterState-CJR0eKaG.js").then((e) => e.n);
			t.saveState(this.state), this.state.recognizedData && e.value.trim() && (console.log("[WorkCenter] Auto-processing recognized data with manual prompt"), clearTimeout(this.container._autoProcessTimeout), this.container._autoProcessTimeout = setTimeout(async () => {
				await this.actions.executeUnifiedAction(this.state);
			}, 1e3));
		});
	}
	setupVoiceInput() {
		if (!this.container) return;
		let e = this.container.querySelector("[data-action=\"voice-input\"]");
		e && (e.addEventListener("mousedown", () => this.voice.startVoiceRecording(this.state)), e.addEventListener("mouseup", () => {
			this.voice.stopVoiceRecording(this.state), this.ui.updateVoiceButton(this.state);
		}), e.addEventListener("mouseleave", () => {
			this.voice.stopVoiceRecording(this.state), this.ui.updateVoiceButton(this.state);
		}));
	}
	setupFormatSelectors() {
		if (!this.container) return;
		let e = this.container.querySelector(".format-select");
		if (!e) return;
		e.addEventListener("change", async () => {
			let t = e.value;
			this.state.outputFormat = t;
			let { WorkCenterStateManager: n } = await import("./WorkCenterState-CJR0eKaG.js").then((e) => e.n);
			if (n.saveState(this.state), this.state.lastRawResult) {
				let e = this.container?.querySelector("[data-output]"), { WorkCenterDataProcessing: n } = await import("./WorkCenterDataProcessing-DZSxxngx.js").then((e) => e.n);
				e.innerHTML = `<div class="result-content">${new n().formatResult(this.state.lastRawResult, t)}</div>`;
			}
		});
		let t = this.container.querySelector(".language-select");
		if (!t) return;
		t.addEventListener("change", async () => {
			this.state.selectedLanguage = t.value;
			let { WorkCenterStateManager: e } = await import("./WorkCenterState-CJR0eKaG.js").then((e) => e.n);
			e.saveState(this.state);
		});
		let n = this.container.querySelector(".recognition-select");
		if (!n) return;
		n.addEventListener("change", async () => {
			this.state.recognitionFormat = n.value;
			let { WorkCenterStateManager: e } = await import("./WorkCenterState-CJR0eKaG.js").then((e) => e.n);
			e.saveState(this.state);
		});
		let r = this.container.querySelector(".processing-select");
		r && r.addEventListener("change", async () => {
			this.state.processingFormat = r.value;
			let { WorkCenterStateManager: e } = await import("./WorkCenterState-CJR0eKaG.js").then((e) => e.n);
			e.saveState(this.state);
		});
	}
	setupAutoActionCheckbox() {
		if (!this.container) return;
		let e = this.container.querySelector(".auto-action-checkbox");
		e && e.addEventListener("change", async () => {
			this.state.autoAction = e.checked;
			let { WorkCenterStateManager: t } = await import("./WorkCenterState-CJR0eKaG.js").then((e) => e.n);
			t.saveState(this.state);
		});
	}
	setupActionButtons() {
		this.container && this.container.addEventListener("click", async (e) => {
			let t = e.target, n = t.closest("[data-action]")?.getAttribute("data-action");
			if (n) switch (n) {
				case "edit-templates":
					this.templates.showTemplateEditor(this.state, this.container);
					break;
				case "refresh-instructions":
					await this.prompts.populateInstructionSelect(this.state), this.prompts.updateInstructionSelect(this.state);
					break;
				case "clear-prompt":
					this.prompts.clearPrompt(this.state);
					break;
				case "copy-results":
					await this.actions.copyResults(this.state);
					break;
				case "view-output":
					await this.actions.viewResultsInViewer(this.state);
					break;
				case "save-to-explorer":
					await this.actions.saveResultsToExplorer(this.state);
					break;
				case "clear-results":
					this.actions.clearResults(this.state);
					break;
				case "clear-all-files":
					this.attachments.clearAllFiles(this.state);
					break;
				case "view-full-history":
					this.deps.state.view = "history", this.deps.render();
					break;
				case "view-action-history":
					this.showActionHistory();
					break;
				case "execute":
					await this.actions.executeUnifiedAction(this.state);
					break;
				case "switch-input-tab":
					this.switchInputTab(String(t.closest("[data-tab]")?.getAttribute("data-tab") || "prompt"));
					break;
				case "switch-results-tab":
					this.switchResultsTab(String(t.closest("[data-tab]")?.getAttribute("data-tab") || "output"));
					break;
				case "clear-recognized":
					let { WorkCenterStateManager: e } = await import("./WorkCenterState-CJR0eKaG.js").then((e) => e.n);
					e.clearRecognizedData(this.state);
					let n = this.container?.querySelector(".wc-recognized-status");
					n && n.remove(), this.ui.updateDataPipeline(this.state);
					break;
				case "clear-pipeline":
					let { WorkCenterStateManager: r } = await import("./WorkCenterState-CJR0eKaG.js").then((e) => e.n);
					r.clearRecognizedData(this.state), this.ui.revokeAllPreviewUrls(this.state), this.state.files = [], this.ui.updateFileList(this.state), this.ui.updateFileCounter(this.state), this.deps.onFilesChanged?.();
					let i = this.container?.querySelector(".wc-recognized-status");
					i && i.remove(), this.ui.updateDataPipeline(this.state);
					break;
			}
		});
	}
	setupPipelineRestoration() {
		this.container && this.container.addEventListener("click", async (e) => {
			let t = e.target.getAttribute("data-restore-step");
			if (t !== null) {
				let e = parseInt(t);
				if (this.state.processedData && this.state.processedData[e]) {
					let t = this.state.processedData[e], n = this.container?.querySelector("[data-output]"), { WorkCenterDataProcessing: r } = await import("./WorkCenterDataProcessing-DZSxxngx.js").then((e) => e.n);
					n.innerHTML = `<div class="result-content">${new r().formatResult({ content: t.content }, this.state.outputFormat)}</div>`, this.state.lastRawResult = { data: t.content };
				}
			}
		});
	}
	setupInputTabs() {
		this.container && this.switchInputTab(this.state.activeInputTab || "prompt");
	}
	setupResultsTabs() {
		this.container && this.switchResultsTab(this.state.activeResultsTab || "output");
	}
	switchInputTab(e) {
		if (!this.container || !["prompt", "attachments"].includes(e)) return;
		this.state.activeInputTab = e, this.container.querySelector("[data-input-tabs]")?.setAttribute("data-active-tab", e);
		let t = this.container.querySelectorAll("[data-action=\"switch-input-tab\"][data-tab]");
		for (let n of Array.from(t)) {
			let t = n, r = t.getAttribute("data-tab") === e;
			t.classList.toggle("is-active", r), t.setAttribute("aria-selected", String(r));
		}
		let n = this.container.querySelectorAll("[data-tab-panel]");
		for (let t of Array.from(n)) {
			let n = t, r = n.getAttribute("data-tab-panel") === e;
			n.classList.toggle("is-active", r);
		}
		import("./WorkCenterState-CJR0eKaG.js").then((e) => e.n).then(({ WorkCenterStateManager: e }) => e.saveState(this.state)).catch(() => {});
	}
	switchResultsTab(e) {
		if (!this.container || ![
			"output",
			"pipeline",
			"history"
		].includes(e)) return;
		let t = !!(this.state.recognizedData || this.state.processedData && this.state.processedData.length > 0), n = e === "pipeline" && !t ? "output" : e;
		this.state.activeResultsTab = n, this.container.querySelector("[data-results-tabs]")?.setAttribute("data-active-tab", n);
		let r = this.container.querySelectorAll("[data-action=\"switch-results-tab\"][data-tab]");
		for (let e of Array.from(r)) {
			let t = e, r = t.getAttribute("data-tab") === n;
			t.classList.toggle("is-active", r), t.setAttribute("aria-selected", String(r));
		}
		let i = this.container.querySelectorAll("[data-results-tab-panel]");
		for (let e of Array.from(i)) {
			let t = e, r = t.getAttribute("data-results-tab-panel") === n;
			t.classList.toggle("is-active", r);
		}
		import("./WorkCenterState-CJR0eKaG.js").then((e) => e.n).then(({ WorkCenterStateManager: e }) => e.saveState(this.state)).catch(() => {});
	}
	setupPromptDropzone() {
		if (!this.container) return;
		let e = this.container.querySelector("[data-prompt-dropzone]");
		if (!e) return;
		let t = this.container.querySelector("[data-prompt-drop-hint]");
		e.addEventListener("dragover", (n) => {
			n.preventDefault(), e.classList.add("drag-over"), t?.classList.add("visible");
		}), e.addEventListener("dragleave", (n) => {
			let r = e.getBoundingClientRect(), i = n.clientX, a = n.clientY;
			(i < r.left || i > r.right || a < r.top || a > r.bottom) && (e.classList.remove("drag-over"), t?.classList.remove("visible"));
		}), e.addEventListener("drop", async (n) => {
			n.preventDefault(), e.classList.remove("drag-over"), t?.classList.remove("visible");
			let r = n.dataTransfer;
			if (!r) return;
			let i = Array.from(r.files || []);
			if (i.length > 0) {
				this.fileOps.addFilesFromInput(this.state, i), this.ui.updateFileList(this.state), this.ui.updateFileCounter(this.state), this.deps.onFilesChanged?.();
				return;
			}
			if (r.types.includes("text/plain")) {
				let e = r.getData("text/plain")?.trim();
				if (e) {
					await this.fileOps.handleDroppedContent(this.state, e, "text"), this.ui.updateFileList(this.state), this.ui.updateFileCounter(this.state), this.deps.onFilesChanged?.();
					return;
				}
			}
			if (r.types.includes("text/uri-list")) {
				let e = r.getData("text/uri-list").split("\n").filter((e) => e.trim() && !e.startsWith("#"))[0]?.trim();
				if (e) {
					await this.fileOps.handleDroppedContent(this.state, e, "url"), this.ui.updateFileList(this.state), this.ui.updateFileCounter(this.state), this.deps.onFilesChanged?.();
					return;
				}
			}
			if (r.types.includes("text/html")) {
				let e = r.getData("text/html");
				if (e) {
					let t = document.createElement("div");
					t.innerHTML = e;
					let n = (t.textContent || t.innerText || "").trim();
					if (n) {
						await this.fileOps.handleDroppedContent(this.state, n, "html"), this.ui.updateFileList(this.state), this.ui.updateFileCounter(this.state), this.deps.onFilesChanged?.();
						return;
					}
				}
			}
		});
	}
	showActionHistory() {
		this.history.showActionHistory();
	}
	isValidUrl(e) {
		try {
			return new URL(e), !0;
		} catch {
			return !1;
		}
	}
}, O = class {
	container = null;
	deps;
	dataProcessing;
	constructor(e, t) {
		this.deps = e, this.dataProcessing = t;
	}
	setContainer(e) {
		this.container = e;
	}
	showProcessingMessage(e) {
		if (!this.container) return;
		let t = this.container.querySelector("[data-output]");
		t && (t.innerHTML = `<div class="wc-loading">${e}</div>`);
	}
	showResult(e) {
		if (!this.container || !e.lastRawResult) return;
		let t = this.container.querySelector("[data-output]");
		t && (t.innerHTML = `<div class="result-content">${this.dataProcessing.formatResult(e.lastRawResult, e.outputFormat)}</div>`);
	}
	showError(e) {
		if (!this.container) return;
		let t = this.container.querySelector("[data-output]");
		t && (t.innerHTML = `<div class="error">Error: ${e}</div>`);
	}
	clearResults() {
		if (!this.container) return;
		let e = this.container.querySelector("[data-output]");
		e && (e.innerHTML = "<div class=\"wc-results-empty\">Results cleared</div>");
	}
	renderDataPipeline(e) {
		return !e.recognizedData && (!e.processedData || e.processedData.length === 0) ? "" : i`<div class="data-pipeline-section">
            <div class="pipeline-content">
              <div class="pipeline-header">
                <h3>Data Processing Pipeline</h3>
                <div class="pipeline-actions">
                  <button class="btn btn-icon" data-action="clear-pipeline" title="Clear all data">
                    <ui-icon icon="trash" size="18" icon-style="duotone"></ui-icon>
                  </button>
                </div>
              </div>
              <div class="pipeline-steps">
              ${e.recognizedData ? i`<div class="pipeline-step recognized-step">
                <div class="step-header">
                  <ui-icon icon="eye" size="16" icon-style="duotone"></ui-icon>
                  <span class="step-title">Recognized Data</span>
                  <span class="step-time">${new Date(e.recognizedData.timestamp).toLocaleTimeString()}</span>
                  <span class="step-source">${e.recognizedData.source}</span>
                  <span class="step-format">${e.recognizedData.recognizedAs}</span>
                </div>
                <div class="step-content">
                  <div class="step-preview">${e.recognizedData.content.substring(0, 100)}${e.recognizedData.content.length > 100 ? "..." : ""}</div>
                </div>
              </div>` : ""}

              ${e.processedData ? e.processedData.map((e, t) => {
			let n = e.metadata?.source === "share-target";
			return i`<div class="${n ? "pipeline-step share-target-step" : "pipeline-step processed-step"}">
                <div class="step-header">
                  <ui-icon icon="${n ? "share" : "cogs"}" size="16" icon-style="duotone"></ui-icon>
                  <span class="step-title">Step ${t + 1}: ${e.action}</span>
                  <span class="step-time">${new Date(e.timestamp).toLocaleTimeString()}</span>
                  ${n ? i`<span class="step-badge share-target-badge" title="Share Target Result">Share</span>` : ""}
                  <button class="btn small" data-restore-step="${t}">Use Result</button>
                </div>
                <div class="step-content">
                  <div class="step-preview">${e.content.substring(0, 100)}${e.content.length > 100 ? "..." : ""}</div>
                </div>
              </div>`;
		}) : ""}
              </div>
            </div>
          </div>`;
	}
	updateDataPipeline(e) {
		if (!this.container) return;
		let t = this.container.querySelector("[data-results-tab-panel=\"pipeline\"]");
		if (!t) return;
		let n = this.renderDataPipeline(e);
		typeof n == "string" ? t.innerHTML = "<div class=\"wc-results-empty\">No data pipeline yet</div>" : (t.innerHTML = "", t.appendChild(n));
	}
	updateRecognizedStatus(e) {
		if (!this.container) return;
		let t = this.container.querySelector(".wc-recognized-status");
		if (e.recognizedData) {
			if (!t) {
				let e = this.container.querySelector(".wc-file-drop-overlay");
				if (e) {
					let t = i`<div class="wc-recognized-status">
                        <ui-icon icon="check-circle" size="16" icon-style="duotone" class="status-icon"></ui-icon>
                        <span>Content recognized - ready for actions</span>
                        <button class="btn small clear-recognized" data-action="clear-recognized">Clear</button>
                    </div>`;
					e.appendChild(t);
				}
			}
		} else t && t.remove();
	}
	renderOutputHeader() {
		return "\n            <div class=\"wc-output-header\">\n                <div class=\"wc-output-actions\">\n                    <button class=\"btn btn-icon\" data-action=\"view-output\" title=\"View output in Viewer\">\n                        <ui-icon icon=\"eye\" size=\"16\" icon-style=\"duotone\"></ui-icon>\n                        <span class=\"btn-text\">View</span>\n                    </button>\n                    <button class=\"btn btn-icon\" data-action=\"copy-results\" title=\"Copy results\">\n                        <ui-icon icon=\"copy\" size=\"16\" icon-style=\"duotone\"></ui-icon>\n                        <span class=\"btn-text\">Copy</span>\n                    </button>\n                    <button class=\"btn btn-icon\" data-action=\"save-to-explorer\" title=\"Save to Explorer\">\n                        <ui-icon icon=\"floppy-disk\" size=\"16\" icon-style=\"duotone\"></ui-icon>\n                        <span class=\"btn-text\">Save</span>\n                    </button>\n                    <button class=\"btn btn-icon\" data-action=\"clear-results\" title=\"Clear results\">\n                        <ui-icon icon=\"trash\" size=\"16\" icon-style=\"duotone\"></ui-icon>\n                        <span class=\"btn-text\">Clear</span>\n                    </button>\n                </div>\n            </div>\n        ";
	}
	renderOutputContent() {
		return "\n            <div class=\"wc-output-content\" data-output>\n                <div class=\"wc-results-empty\">No results yet</div>\n            </div>\n        ";
	}
	restorePipelineStep(e, t) {
		if (this.container && e.processedData && e.processedData[t]) {
			let n = e.processedData[t], r = this.container.querySelector("[data-output]");
			r && (r.innerHTML = `<div class="result-content">${this.dataProcessing.formatResult({ content: n.content }, e.outputFormat)}</div>`, e.lastRawResult = { data: n.content });
		}
	}
	updateAllResultsUI(e) {
		this.updateDataPipeline(e), this.updateRecognizedStatus(e);
	}
}, k = class {
	container = null;
	deps;
	fileOps;
	previewUrlCache = /* @__PURE__ */ new WeakMap();
	constructor(e, t) {
		this.deps = e, this.fileOps = t;
	}
	setContainer(e) {
		this.container = e;
	}
	renderAttachmentsSection(e) {
		return `
            <div class="wc-attachments-section">
              <div class="file-attachment-area" data-file-drop-zone="" data-dropzone="">
                <div class="file-drop-zone" >
                  <div class="drop-zone-content">
                    <ui-icon icon="folder" size="4rem" icon-style="duotone" class="drop-icon"></ui-icon>
                    <div class="drop-text">Drop files here or click to select files</div>
                    <div class="drop-hint" data-drop-hint>Supports: Images, Documents, Text files, PDFs, URLs, Base64 data</div>
                  </div>
                </div>
                <div class="file-list" data-file-list></div>
                ${this.renderRecognizedStatus(e)}
              </div>
              <div class="wc-block-header wc-attachments-toolbar">
                <div class="file-stats">
                  <div class="file-counter" data-file-count>
                    <ui-icon icon="file" size="16" icon-style="duotone"></ui-icon>
                    <span class="count">${e.files.length}</span>
                    <span class="label">files attached</span>
                  </div>
                  ${e.recognizedData ? "\n                    <div class=\"data-counter recognized\">\n                      <ui-icon icon=\"eye\" size=\"16\" icon-style=\"duotone\"></ui-icon>\n                      <span>Content recognized</span>\n                    </div>\n                  " : ""}
                  ${e.processedData && e.processedData.length > 0 ? `
                    <div class="data-counter processed">
                      <ui-icon icon="cogs" size="16" icon-style="duotone"></ui-icon>
                      <span>${e.processedData.length} processing steps</span>
                    </div>
                  ` : ""}
                </div>
              </div>
            </div>
        `;
	}
	renderRecognizedStatus(e) {
		return e.recognizedData ? "\n            <div class=\"wc-recognized-status\">\n              <ui-icon icon=\"check-circle\" size=\"16\" icon-style=\"duotone\" class=\"status-icon\"></ui-icon>\n              <span>Content recognized - ready for processing</span>\n              <button class=\"btn small clear-recognized\" data-action=\"clear-recognized\">Clear</button>\n            </div>\n        " : "";
	}
	updateFileList(e) {
		if (!this.container) return;
		let t = this.container.querySelector("[data-file-list]");
		if (t) {
			if (t.innerHTML = "", e.files.length === 0) {
				t.innerHTML = "<div class=\"wc-attachments-empty\">No files attached</div>";
				return;
			}
			e.files.forEach((n, r) => {
				let i = this.createFileItem(n, r, e);
				t.append(i);
			});
		}
	}
	createFileItem(e, t, n) {
		let r = this.isImageFile(e), a = this.isMarkdownFile(e), o = r ? this.getOrCreatePreviewUrl(e) : null, s = this.formatFileSize(e.size), c = i`<div class="file-item" data-file-index="${t}">
      <div class="file-info">
        <span class="file-icon">${this.createFileIconElement(e.type)}</span>
        ${o ? i`<img class="file-preview" alt=${e.name || "image"} src=${o} loading="lazy" decoding="async" />` : ""}
        <div class="file-details">
          <span class="file-name">${e.name || "Unnamed file"}</span>
          <span class="file-size">(${s})</span>
          <span class="file-type">${this.getReadableFileType(e.type)}</span>
        </div>
        ${a ? i`<button class="btn small" data-open-md="${t}" title="Open in Markdown Viewer">Open</button>` : ""}
      </div>
      <button class="btn small remove-btn" data-remove="${t}" title="Remove file">✕</button>
    </div>`, l = c.querySelector(`[data-open-md="${t}"]`);
		return l && l.addEventListener("click", async (t) => {
			t.preventDefault(), t.stopPropagation(), await this.openMarkdownInViewer(e);
		}), c.querySelector(".remove-btn").addEventListener("click", (e) => {
			e.preventDefault(), e.stopPropagation(), this.removeFile(n, t);
		}), c;
	}
	removeFile(e, t) {
		let n = e.files[t];
		n && (this.revokePreviewUrl(n), e.files.splice(t, 1), this.updateFileList(e), this.updateFileCounter(e), this.deps.onFilesChanged?.());
	}
	setupDropZone(e) {
		if (!this.container) return;
		let t = this.container.querySelector("[data-file-drop-zone]");
		if (!t) return;
		let n = document.createElement("input");
		n.type = "file", n.multiple = !0, n.accept = "image/*,.pdf,.txt,.md,.json,.html,.css,.js,.ts", n.style.display = "none", this.container.append(n), this.updateDropHint(), t.addEventListener("click", (e) => {
			e.target?.closest("button, a, input, select, textarea, label, [data-remove], [data-open-md]") || n.click();
		}), t.addEventListener("dragover", (e) => {
			e.preventDefault(), t.classList.add("drag-over");
		}), t.addEventListener("dragleave", (e) => {
			let n = t.getBoundingClientRect(), r = e.clientX, i = e.clientY;
			(r < n.left || r > n.right || i < n.top || i > n.bottom) && t.classList.remove("drag-over");
		}), t.addEventListener("drop", async (n) => {
			n.preventDefault(), t.classList.remove("drag-over");
			let r = n.dataTransfer;
			if (!r) return;
			let i = !1, a = Array.from(r.files || []);
			if (a.length > 0 && (this.fileOps.addFilesFromInput(e, a), this.updateFileList(e), this.updateFileCounter(e), this.deps.onFilesChanged?.(), i = !0), !i && r.types.includes("text/plain")) try {
				let t = r.getData("text/plain");
				t?.trim() && (await this.fileOps.handleDroppedContent(e, t.trim(), "text"), i = !0);
			} catch (e) {
				console.warn("[WorkCenter] Failed to get dragged text:", e);
			}
			if (!i && r.types.includes("text/uri-list")) try {
				let t = r.getData("text/uri-list").split("\n").filter((e) => e.trim() && !e.startsWith("#"));
				if (t.length > 0) {
					for (let n of t) if (this.isValidUrl(n.trim())) {
						await this.fileOps.handleDroppedContent(e, n.trim(), "url");
						break;
					}
					i = !0;
				}
			} catch (e) {
				console.warn("[WorkCenter] Failed to get dragged URLs:", e);
			}
			if (!i && r.types.includes("text/html")) try {
				let t = r.getData("text/html");
				if (t) {
					let n = document.createElement("div");
					n.innerHTML = t;
					let r = n.textContent || n.innerText || "";
					r.trim() && (await this.fileOps.handleDroppedContent(e, r.trim(), "html"), i = !0);
				}
			} catch (e) {
				console.warn("[WorkCenter] Failed to get dragged HTML:", e);
			}
		}), n.addEventListener("change", async (t) => {
			let n = Array.from(t.target.files || []);
			this.fileOps.addFilesFromInput(e, n), this.updateFileList(e), this.updateFileCounter(e), this.deps.onFilesChanged?.(), n.filter((e) => e.type.startsWith("text/") || e.type === "application/markdown" || e.name?.endsWith(".md") || e.name?.endsWith(".txt")).length > 0 && e.selectedTemplate && e.selectedTemplate.trim() && (console.log("[WorkCenter] Auto-processing text/markdown files with template:", e.selectedTemplate), setTimeout(async () => {
				this.deps.showMessage?.("Files attached and ready for processing");
			}, 100));
		});
	}
	updateFileCounter(e) {
		if (!this.container) return;
		let t = this.container.querySelector("[data-file-count] .count");
		t && (t.textContent = e.files.length.toString());
	}
	updateDataCounters(e) {
		if (!this.container) return;
		let t = this.container.querySelector(".data-counter.recognized");
		if (e.recognizedData) {
			if (!t) {
				let e = this.container.querySelector(".file-stats");
				if (e) {
					let t = i`<div class="data-counter recognized">
                        <ui-icon icon="eye" size="16" icon-style="duotone"></ui-icon>
                        <span>Content recognized</span>
                    </div>`;
					e.appendChild(t);
				}
			}
		} else t && t.remove();
		let n = this.container.querySelector(".data-counter.processed");
		if (e.processedData && e.processedData.length > 0) if (n) {
			let t = n.querySelector("span");
			t && (t.textContent = `${e.processedData.length} processing steps`);
		} else {
			let t = this.container.querySelector(".file-stats");
			if (t) {
				let n = i`<div class="data-counter processed">
                        <ui-icon icon="cogs" size="16" icon-style="duotone"></ui-icon>
                        <span>${e.processedData.length} processing steps</span>
                    </div>`;
				t.appendChild(n);
			}
		}
		else n && n.remove();
	}
	clearAllFiles(e) {
		this.revokeAllPreviewUrls(e), e.files.length = 0, this.updateFileList(e), this.updateFileCounter(e), this.updateDataCounters(e), this.deps.onFilesChanged?.();
	}
	isImageFile(e) {
		return (e?.type || "").toLowerCase().startsWith("image/");
	}
	isMarkdownFile(e) {
		let t = (e?.name || "").toLowerCase();
		return (e?.type || "").toLowerCase() === "text/markdown" || t.endsWith(".md") || t.endsWith(".markdown") || t.endsWith(".mdown") || t.endsWith(".mkd") || t.endsWith(".mkdn");
	}
	getOrCreatePreviewUrl(e) {
		if (!e || !this.isImageFile(e)) return null;
		let t = this.previewUrlCache.get(e);
		if (t) return t;
		try {
			let t = URL.createObjectURL(e);
			return this.previewUrlCache.set(e, t), t;
		} catch {
			return null;
		}
	}
	revokePreviewUrl(e) {
		let t = this.previewUrlCache.get(e);
		if (t) try {
			URL.revokeObjectURL(t);
		} catch {}
		this.previewUrlCache.delete(e);
	}
	async openMarkdownInViewer(e) {
		try {
			let t = await e.text();
			try {
				localStorage.setItem("rs-markdown", t);
			} catch {}
			try {
				this.deps?.state && (this.deps.state.markdown = t, this.deps.state.view = "markdown-viewer");
			} catch {}
			this.deps.render?.(), setTimeout(() => {
				this.deps.showMessage?.(`Opened ${e.name || "file"} in Markdown Viewer`);
			}, 0);
		} catch (t) {
			this.deps.showMessage?.(`Failed to open ${e.name || "file"}`), console.warn("[WorkCenter] Failed to open markdown file:", t);
		}
	}
	createFileIconElement(e) {
		return i`<ui-icon icon="${this.getFileIconName(e)}" size="20" icon-style="duotone" class="file-type-icon"></ui-icon>`;
	}
	getFileIconName(e) {
		return e.startsWith("image/") ? "image" : e === "application/pdf" ? "file-pdf" : e.includes("json") || e.includes("text") || e.includes("markdown") ? "file-text" : "file";
	}
	getReadableFileType(e) {
		if (!e) return "Unknown";
		let t = {
			"image/jpeg": "JPEG Image",
			"image/png": "PNG Image",
			"image/gif": "GIF Image",
			"image/webp": "WebP Image",
			"image/svg+xml": "SVG Image",
			"application/pdf": "PDF Document",
			"text/plain": "Text File",
			"text/markdown": "Markdown",
			"application/json": "JSON",
			"text/html": "HTML",
			"text/css": "CSS",
			"application/javascript": "JavaScript",
			"application/typescript": "TypeScript"
		};
		return t[e] ? t[e] : e.startsWith("image/") ? "Image" : e.startsWith("text/") ? "Text File" : e.startsWith("application/") ? "Document" : e.split("/")[1]?.toUpperCase() || "File";
	}
	formatFileSize(e) {
		return e < 1024 ? `${e} B` : e < 1024 * 1024 ? `${(e / 1024).toFixed(1)} KB` : `${(e / (1024 * 1024)).toFixed(1)} MB`;
	}
	revokeAllPreviewUrls(e) {
		try {
			for (let t of e.files) this.revokePreviewUrl(t);
		} catch {}
	}
	isValidUrl(e) {
		try {
			return new URL(e), !0;
		} catch {
			return !1;
		}
	}
	updateDropHint() {
		if (!this.container) return;
		let e = this.container.querySelector("[data-drop-hint]");
		if (e) switch (globalThis?.location?.hash) {
			case d.SHARE_TARGET_TEXT:
				e.textContent = "Drop text files or paste text content here";
				break;
			case d.SHARE_TARGET_IMAGE:
				e.textContent = "Drop image files here (PNG, JPG, GIF, WebP, etc.)";
				break;
			case d.SHARE_TARGET_FILES:
				e.textContent = "Drop any files here (images, documents, text files, PDFs, etc.)";
				break;
			case d.SHARE_TARGET_URL:
				e.textContent = "Paste URLs here (file drops not accepted on this route)";
				break;
			default:
				e.textContent = "Supports: Images, Documents, Text files, PDFs, URLs, Base64 data";
				break;
		}
	}
}, A = class {
	container = null;
	deps;
	templates;
	voice;
	constructor(e, t, n) {
		this.deps = e, this.templates = t, this.voice = n;
	}
	setContainer(e) {
		this.container = e;
	}
	renderPromptPanel(e) {
		return `
            <div class="prompt-panel">
              <div class="prompt-controls">
                <select class="template-select">
                  <option value="">Select Template...</option>
                  ${e.promptTemplates.map((t) => `<option value="${t.prompt.replace(/"/g, "&quot;")}" ${e.selectedTemplate === t.prompt ? "selected" : ""}>${t.name}</option>`).join("")}
                </select>
                <button class="btn btn-icon" data-action="edit-templates" title="Edit Templates">
                  <ui-icon icon="gear" size="18" icon-style="duotone"></ui-icon>
                  <span class="btn-text">Templates</span>
                </button>
                <button class="btn btn-icon prompt-attach-btn" data-action="select-files" title="Attach files">
                  <ui-icon icon="paperclip" size="18" icon-style="duotone"></ui-icon>
                  <span class="attach-count" data-prompt-file-count>${e.files.length}</span>
                </button>
              </div>

              <div class="prompt-input-group" data-prompt-dropzone data-dropzone="">
                <div class="prompt-input-overlay" data-prompt-drop-hint>
                  <ui-icon icon="paperclip" size="16" icon-style="duotone"></ui-icon>
                  <span>Drop files, links or text to attach</span>
                </div>
                <textarea
                  class="prompt-input"
                  placeholder="Describe what you want to do with the attached content... (or use voice input)"
                  rows="4"
                >${e.currentPrompt}</textarea>
              </div>

              <div class="prompt-actions">
                
                <button class="btn voice-btn ${e.voiceRecording ? "recording" : ""}" data-action="voice-input">
                  <ui-icon icon="microphone" size="20" icon-style="duotone"></ui-icon>
                  ${e.voiceRecording ? "Recording..." : "Hold for Voice"}
                </button>
                <label class="auto-action-label" title="Auto-action (use last successful)">
                  <input type="checkbox" class="auto-action-checkbox" ${e.autoAction ? "checked" : ""}>
                  <ui-icon icon="lightning-a" size="20" icon-style="duotone"></ui-icon>
                </label>
                <button class="btn primary action-btn" data-action="execute">
                  <ui-icon icon="brain" size="20" icon-style="duotone"></ui-icon>
                  <span class="btn-text">Process Content</span>
                </button>
                <button class="btn btn-icon clear-btn" data-action="clear-prompt" title="Clear Prompt">
                  <ui-icon icon="trash" size="18" icon-style="duotone"></ui-icon>
                </button>
              </div>
            </div>
        `;
	}
	renderPromptsSection(e) {
		return `
            <div class="prompts-section">
              ${this.renderPromptPanel(e)}
            </div>
        `;
	}
	async populateInstructionSelect(e) {
		if (!this.container) return;
		let t = this.container.querySelector(".instruction-select");
		if (!t) return;
		let n = await this.templates.loadInstructions(), r = !!e.selectedInstruction && n.some((t) => t.id === e.selectedInstruction), i = r ? e.selectedInstruction : this.templates.getActiveInstructionId();
		t.innerHTML = "<option value=\"\">None (default)</option>";
		for (let e of n) {
			let n = document.createElement("option");
			n.value = e.id, n.textContent = e.label, e.id === i && (n.selected = !0), t.append(n);
		}
		(!e.selectedInstruction || !r) && i && (e.selectedInstruction = i);
	}
	updateInstructionSelect(e) {
		if (!this.container) return;
		let t = this.container.querySelector(".instruction-select");
		if (!t) return;
		let n = this.templates.getInstructions(), r = e.selectedInstruction && n.some((t) => t.id === e.selectedInstruction) ? e.selectedInstruction : this.templates.getActiveInstructionId();
		t.innerHTML = "<option value=\"\">None (default)</option>";
		for (let e of n) {
			let n = document.createElement("option");
			n.value = e.id, n.textContent = e.label, e.id === r && (n.selected = !0), t.append(n);
		}
	}
	getSelectedInstruction(e) {
		return e.selectedInstruction && this.templates.getInstructionById(e.selectedInstruction) || null;
	}
	updatePromptInput(e) {
		if (!this.container) return;
		let t = this.container.querySelector(".prompt-input");
		t && (t.value = e.currentPrompt);
	}
	updateTemplateSelect(e) {
		if (!this.container) return;
		let t = this.container.querySelector(".template-select");
		if (t) {
			let n = t.value;
			t.innerHTML = "<option value=\"\">Select Template...</option>" + e.promptTemplates.map((t) => `<option value="${t.prompt.replace(/"/g, "&quot;")}" ${e.selectedTemplate === t.prompt ? "selected" : ""}>${t.name}</option>`).join(""), e.selectedTemplate && e.promptTemplates.some((t) => t.prompt === e.selectedTemplate) ? t.value = e.selectedTemplate : t.value = n;
		}
	}
	updateVoiceButton(e) {
		if (!this.container) return;
		let t = this.container.querySelector("[data-action=\"voice-input\"]");
		t && (t.innerHTML = e.voiceRecording ? "<ui-icon icon=\"microphone\" size=\"20\" icon-style=\"duotone\"></ui-icon> Recording..." : "<ui-icon icon=\"microphone\" size=\"20\" icon-style=\"duotone\"></ui-icon> Hold for Voice", t.classList.toggle("recording", e.voiceRecording));
	}
	updatePromptFileCount(e) {
		if (!this.container) return;
		let t = this.container.querySelector("[data-prompt-file-count]");
		t && (t.textContent = String(e.files.length));
	}
	clearPrompt(e) {
		e.currentPrompt = "", this.updatePromptInput(e);
	}
	handleTemplateSelection(e, t) {
		e.selectedTemplate = t, t && (e.currentPrompt = t, this.updatePromptInput(e));
	}
	handleInstructionSelection(e, t) {
		e.selectedInstruction = t;
	}
	handleAutoActionToggle(e, t) {
		e.autoAction = t;
	}
}, j = [], M = {
	add(e) {
		j.unshift(e);
	},
	getRecentEntries(e = 20) {
		return j.slice(0, e);
	},
	getStats() {
		return {
			total: j.length,
			completed: j.filter((e) => e.status === "completed").length,
			failed: j.filter((e) => e.status === "failed").length
		};
	}
}, N = class {
	container = null;
	deps;
	constructor(e) {
		this.deps = e;
	}
	setContainer(e) {
		this.container = e;
	}
	updateRecentHistory(e) {
		if (!this.container) return;
		let t = this.container.querySelector("[data-recent-history]");
		if (!t) return;
		t.innerHTML = "";
		let n = M.getRecentEntries(10).filter((e) => e.context.source === "workcenter" && e.status === "completed");
		if (n.length === 0) {
			t.innerHTML = "<div class=\"wc-history-empty\">No recent activity</div>";
			return;
		}
		n.slice(0, 3).forEach((n) => {
			let r = i`<div class="history-item-compact">
        <div class="history-meta">
          <span class="history-status ${n.result?.type === "error" ? "error" : "success"}">${n.result?.type === "error" ? "✗" : "✓"}</span>
          <span class="history-prompt">${n.input.text?.substring(0, 50) || n.action}${n.input.text && n.input.text.length > 50 ? "..." : ""}</span>
          ${n.result?.processingTime ? i`<span class="history-time">${Math.round(n.result.processingTime / 1e3)}s</span>` : ""}
        </div>
        <button class="btn small" data-restore="${n.id}">Use</button>
      </div>`;
			r.querySelector("button")?.addEventListener("click", () => {
				n.input.text && (e.currentPrompt = n.input.text, this.deps.showMessage?.("Restored prompt from history"));
			}), t.append(r);
		});
	}
	updateActionHistory() {
		if (!this.container) return;
		let e = this.container.querySelector("[data-action-stats]");
		if (e) {
			let t = M.getStats();
			e.innerHTML = `
                <div class="stats-item">Total: ${t.total}</div>
                <div class="stats-item">Success: ${t.completed}</div>
                <div class="stats-item">Failed: ${t.failed}</div>
            `;
		}
	}
	showActionHistory() {
		if (!this.container) return;
		let e = M.getRecentEntries(50).filter((e) => e.context.source === "workcenter"), t = i`<div class="action-history-modal">
      <div class="modal-content">
        <div class="modal-header">
          <h3>Action History</h3>
          <div class="modal-actions">
            <button class="btn btn-icon" data-action="export-history" title="Export History">
              <ui-icon icon="download" size="18" icon-style="duotone"></ui-icon>
            </button>
            <button class="btn btn-icon" data-action="clear-history" title="Clear History">
              <ui-icon icon="trash" size="18" icon-style="duotone"></ui-icon>
            </button>
            <button class="btn" data-action="close-modal">Close</button>
          </div>
        </div>

        <div class="history-stats">
          ${(() => {
			let e = M.getStats();
			return i`
              <div class="stat-card">
                <div class="stat-value">${e.total}</div>
                <div class="stat-label">Total Actions</div>
              </div>
              <div class="stat-card">
                <div class="stat-value success">${e.completed}</div>
                <div class="stat-label">Completed</div>
              </div>
              <div class="stat-card">
                <div class="stat-value error">${e.failed}</div>
                <div class="stat-label">Failed</div>
              </div>
              <div class="stat-card">
                <div class="stat-value">${e.byAction.recognize || 0}</div>
                <div class="stat-label">Recognitions</div>
              </div>
            `;
		})()}
        </div>

        <div class="history-filters">
          <select class="filter-select" data-filter="status">
            <option value="">All Status</option>
            <option value="completed">Completed</option>
            <option value="failed">Failed</option>
            <option value="processing">Processing</option>
          </select>
          <select class="filter-select" data-filter="action">
            <option value="">All Actions</option>
            <option value="recognize">Recognize</option>
            <option value="analyze">Analyze</option>
            <option value="process">Process</option>
          </select>
        </div>

        <div class="action-history-list">
          ${e.length === 0 ? i`<div class="wc-history-empty">No actions found</div>` : e.map((e) => i`<div class="action-history-item ${e.status}">
              <div class="action-header">
                <div class="action-meta">
                  <span class="action-status ${e.status}">${this.getStatusIcon(e.status)}</span>
                  <span class="action-type">${e.action}</span>
                  <span class="action-time">${this.formatTimeAgo(e.timestamp)}</span>
                  ${e.result?.processingTime ? i`<span class="action-duration">${Math.round(e.result.processingTime / 1e3)}s</span>` : ""}
                </div>
                <div class="action-actions">
                  ${e.result ? i`<button class="btn small" data-restore-action="${e.id}">Use Result</button>` : ""}
                  <button class="btn small" data-view-details="${e.id}">Details</button>
                </div>
              </div>

              <div class="action-content">
                <div class="input-preview">
                  <strong>Input:</strong>
                  ${e.input.files?.length ? `${e.input.files.length} file(s): ${e.input.files.map((e) => e.name).join(", ")}` : e.input.text?.substring(0, 100) || "No input"}
                  ${e.input.text && e.input.text.length > 100 ? "..." : ""}
                </div>

                ${e.result ? i`<div class="result-preview">
                  <strong>Result:</strong>
                  <div class="result-content">${e.result.content.substring(0, 200)}${e.result.content.length > 200 ? "..." : ""}</div>
                </div>` : ""}

                ${e.error ? i`<div class="error-preview">
                  <strong>Error:</strong> ${e.error}
                </div>` : ""}
              </div>
            </div>`)}
        </div>
      </div>
    </div>`;
		t.addEventListener("click", (e) => {
			let n = e.target, r = n.getAttribute("data-action") || n.closest("[data-action]")?.getAttribute("data-action"), i = n.getAttribute("data-restore-action") || n.getAttribute("data-view-details");
			if (r === "close-modal") t.remove();
			else if (r === "export-history") this.exportActionHistory();
			else if (r === "clear-history") confirm("Are you sure you want to clear all action history?") && (M.clearEntries(), t.remove(), this.updateRecentHistory({}));
			else if (i) {
				let e = M.getEntry(i);
				e && (n.hasAttribute("data-restore-action") && e.result ? (this.deps.showMessage?.("Result restored from history"), t.remove()) : n.hasAttribute("data-view-details") && this.showActionDetails(e));
			}
		}), t.querySelectorAll(".filter-select").forEach((e) => {
			e.addEventListener("change", () => this.applyHistoryFilters(t));
		}), this.container.append(t);
	}
	showActionDetails(e) {
		let t = i`<div class="action-details-modal">
      <div class="modal-content">
        <div class="modal-header">
          <h3>Action Details</h3>
          <button class="btn" data-action="close-modal">Close</button>
        </div>

        <div class="details-grid">
          <div class="detail-item">
            <label>ID:</label>
            <span>${e.id}</span>
          </div>
          <div class="detail-item">
            <label>Timestamp:</label>
            <span>${new Date(e.timestamp).toLocaleString()}</span>
          </div>
          <div class="detail-item">
            <label>Source:</label>
            <span>${e.context.source}</span>
          </div>
          <div class="detail-item">
            <label>Action:</label>
            <span>${e.action}</span>
          </div>
          <div class="detail-item">
            <label>Status:</label>
            <span class="status-${e.status}">${e.status}</span>
          </div>
          ${e.result?.processingTime ? i`<div class="detail-item">
            <label>Processing Time:</label>
            <span>${Math.round(e.result.processingTime / 1e3)}s</span>
          </div>` : ""}
        </div>

        <div class="details-section">
          <h4>Input</h4>
          <div class="input-details">
            <div>Type: ${e.input.type}</div>
            ${e.input.files ? i`<div>Files: ${e.input.files.map((e) => e.name).join(", ")}</div>` : ""}
            ${e.input.text ? i`<div>Text: <pre>${e.input.text}</pre></div>` : ""}
          </div>
        </div>

        ${e.result ? i`<div class="details-section">
          <h4>Result</h4>
          <div class="result-details">
            <div>Type: ${e.result.type}</div>
            <div>Auto Copied: ${e.result.autoCopied ? "Yes" : "No"}</div>
            <div>Content: <pre>${e.result.content}</pre></div>
          </div>
        </div>` : ""}

        ${e.error ? i`<div class="details-section">
          <h4>Error</h4>
          <div class="error-details">${e.error}</div>
        </div>` : ""}
      </div>
    </div>`;
		t.addEventListener("click", (e) => {
			e.target.getAttribute("data-action") === "close-modal" && t.remove();
		}), document.body.append(t);
	}
	applyHistoryFilters(e) {
		let t = e.querySelector("[data-filter=\"status\"]").value, n = e.querySelector("[data-filter=\"action\"]").value;
		e.querySelectorAll(".action-history-item").forEach((e) => {
			let r = e.classList[1], i = e.querySelector(".action-type")?.textContent || "", a = !t || r === t, o = !n || i === n;
			e.style.display = a && o ? "block" : "none";
		});
	}
	exportActionHistory() {
		let e = M.exportEntries("json"), t = new Blob([e], { type: "application/json" }), n = URL.createObjectURL(t), r = document.createElement("a");
		r.href = n, r.download = `action-history-${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.json`, document.body.append(r), r.click(), r.remove(), URL.revokeObjectURL(n), this.deps.showMessage?.("History exported successfully");
	}
	getStatusIcon(e) {
		switch (e) {
			case "completed": return "✓";
			case "failed": return "✗";
			case "processing": return "⟳";
			case "pending": return "⏳";
			case "cancelled": return "⊗";
			default: return "?";
		}
	}
	formatTimeAgo(e) {
		let t = Date.now() - e, n = Math.floor(t / 6e4), r = Math.floor(t / 36e5), i = Math.floor(t / 864e5);
		return i > 0 ? `${i}d ago` : r > 0 ? `${r}h ago` : n > 0 ? `${n}m ago` : "Just now";
	}
	getLastSuccessfulPrompt() {
		return this.deps.history.find((e) => e.ok)?.prompt || "Process the provided content";
	}
}, P = /\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\]|(?<!\$)\$[^$\n]+\$|\\\([\s\S]*?\\\)/, F = /(^|\n)(`{3,}|~{3,})[^\n]*\n[\s\S]*?\n\2(?=\n|$)/g, I = /`[^`\n]+`/g;
function L(e) {
	let t = [], n = "__MD_MASK_";
	return {
		masked: ((e) => e.replace(I, (e) => {
			let r = `${n}${t.length}__`;
			return t.push(e), r;
		}))(((e) => e.replace(F, (e) => {
			let r = `${n}${t.length}__`;
			return t.push(e), r;
		}))(e)),
		restore: (e) => e.replace(/__MD_MASK_(\d+)__/g, (e, n) => t[Number(n)] ?? "")
	};
}
S?.use?.(te({
	throwOnError: !1,
	nonStandard: !0,
	output: "mathml",
	strict: !1
}), { hooks: { preprocess: (e) => {
	if (!P.test(e)) return e;
	let { masked: t, restore: n } = L(e), r = document.createElement("div");
	return r.textContent = t, v(r, {
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
} } });
var R = class {
	state;
	deps;
	ui;
	fileOps;
	shareTarget;
	templates;
	voice;
	actions;
	dataProcessing;
	attachments;
	prompts;
	results;
	history;
	events;
	processedMessageIds = /* @__PURE__ */ new Set();
	constructor(e) {
		this.deps = e, this.state = ne.createDefaultState(), this.dataProcessing = new re(), this.templates = new le(e), this.voice = new w(e), this.fileOps = new ae(e), this.history = new N(e), this.attachments = new k(e, this.fileOps), this.prompts = new A(e, this.templates, this.voice), this.results = new O(e, this.dataProcessing), this.ui = new ie(e, this.attachments, this.prompts, this.results, this.history), this.shareTarget = new se(e, this.fileOps), this.actions = new E(e, this.ui, this.fileOps, this.dataProcessing, this.results, this.history, this.templates), this.events = new D(e, this.ui, this.fileOps, this.actions, this.templates, this.voice, this.shareTarget, this.history, this.attachments, this.prompts, this.state), this.shareTarget.initShareTargetListener(this.state), f("workcenter-core", "workcenter"), this.shareTarget.processQueuedMessages(this.state);
		let t = p("workcenter-core");
		for (let e of t) console.log("[WorkCenter] Processing pending message:", e), this.handleExternalMessage(e);
		typeof globalThis < "u" && globalThis?.addEventListener?.("hashchange", () => {
			this.attachments.updateDropHint?.();
		});
	}
	async handleDroppedContent(e, t) {
		return this.fileOps.handleDroppedContent(this.state, e, t);
	}
	async handlePastedContent(e, t) {
		return this.fileOps.handlePastedContent(this.state, e, t);
	}
	fingerprintIncomingFile(e) {
		return `${String(e.name || "").trim().toLowerCase()}::${Number(e.size || 0)}::${String(e.type || "").trim().toLowerCase()}`;
	}
	pushUniqueIncomingFile(e) {
		if (!e) return !1;
		let t = this.fingerprintIncomingFile(e);
		for (let e of this.state.files) if (this.fingerprintIncomingFile(e) === t) return !1;
		return this.state.files.push(e), !0;
	}
	async handleIncomingContent(e, t) {
		try {
			let n = !1;
			if (Array.isArray(e.files) && e.files.length > 0) {
				let t = e.files.filter((e) => e instanceof File);
				for (let e of t) {
					let t = g(e);
					if (!t.ok) {
						console.warn("[WorkCenter] Skipping oversized/invalid ingress file:", t.reason, e.name);
						continue;
					}
					this.pushUniqueIncomingFile(e) && (n = !0);
				}
			}
			let r = null;
			if (!n && e.file instanceof File) r = e.file;
			else if (!n && e.blob instanceof Blob) {
				let n = e.filename || `attachment-${Date.now()}.${t === "markdown" ? "md" : "txt"}`;
				r = new File([e.blob], n, { type: e.blob.type });
			} else if (!n && (e.text || e.content)) {
				let n = e.text || e.content, i = typeof n == "string" ? n : JSON.stringify(n, null, 2), a = e.filename || `content-${Date.now()}.${t === "markdown" ? "md" : "txt"}`;
				r = new File([i], a, { type: t === "markdown" ? "text/markdown" : "text/plain" });
			}
			if (r) {
				let e = g(r);
				e.ok || (console.warn("[WorkCenter] Rejecting primary attachment:", e.reason), r = null);
			}
			r && this.pushUniqueIncomingFile(r) && (n = !0), n && (this.ui.updateFileList(this.state), this.ui.updateFileCounter(this.state), this.deps.showMessage(r ? `Attached ${r.name} to Work Center` : "Attached files to Work Center"));
		} catch (e) {
			console.warn("[WorkCenter] Failed to handle incoming content:", e), this.deps.showMessage("Failed to attach content");
		}
	}
	async handleExternalMessage(e) {
		if (!e) return;
		let t = typeof e?.id == "string" ? e.id : "";
		if (t) {
			if (this.processedMessageIds.has(t)) return;
			if (this.processedMessageIds.add(t), this.processedMessageIds.size > 256) {
				let e = this.processedMessageIds.values().next();
				e.done || this.processedMessageIds.delete(e.value);
			}
		}
		if (e.type === "share-target-input" && e.data) {
			await this.shareTarget.addShareTargetInput(this.state, e.data), this.ui.updateFileList(this.state), this.ui.updateFileCounter(this.state), this.ui.updateDataPipeline(this.state);
			return;
		}
		if (e.type === "share-target-result" && e.data) {
			await this.shareTarget.addShareTargetResult(this.state, e.data), this.ui.updateDataPipeline(this.state);
			return;
		}
		if (e.type === "ai-result" && e.data) {
			await this.shareTarget.handleAIResult(this.state, e.data), this.ui.updateDataPipeline(this.state);
			return;
		}
		if ((e.type === "content-share" || e.type === "content-attach" || e.type === "file-attach") && e.data) {
			await this.handleIncomingContent(e.data, e.contentType || "text");
			return;
		}
	}
	getState() {
		return this.state;
	}
	destroy() {
		this.ui.setContainer(null), this.attachments.setContainer(null), this.prompts.setContainer(null), this.results.setContainer(null), this.history.setContainer(null), console.log("[WorkCenter] WorkCenterManager destroyed");
	}
	renderWorkCenterView() {
		let e = this.ui.renderWorkCenterView(this.state);
		return this.events.setContainer(e), this.events.setupWorkCenterEvents(), this.ui.updateFileList(this.state), this.ui.updateFileCounter(this.state), this.history.updateRecentHistory(this.state), e;
	}
}, z = "@charset \"UTF-8\";\n/**\n * Workcenter SCSS Index\n *\n * Entry point for all workcenter view styles.\n * Uses @use/@forward for modern module imports.\n *\n * Layer: view.workcenter\n *\n * @module views/workcenter\n */\n@layer view.workcenter.utilities {\n  @keyframes workcenter-spin {\n    to {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes workcenter-fade-in {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n  @keyframes workcenter-fade-in-up {\n    from {\n      opacity: 0;\n      transform: translateY(12px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n  @keyframes workcenter-slide-in-up {\n    from {\n      opacity: 0;\n      transform: translateY(12px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n  @keyframes workcenter-pulse {\n    0%, 100% {\n      opacity: 1;\n      transform: scale(1);\n    }\n    50% {\n      opacity: 0.82;\n      transform: scale(0.98);\n    }\n  }\n  @keyframes workcenter-blink {\n    0%, 49% {\n      opacity: 1;\n    }\n    50%, 100% {\n      opacity: 0.25;\n    }\n  }\n}\n@layer view.workcenter.tokens {\n  :is(html, body):has([data-view=workcenter]) {\n    --view-layout: \"grid\";\n    --view-sidebar-visible: true;\n    --view-toolbar-expanded: true;\n    --view-content-max-width: none;\n  }\n}\n@layer view.workcenter.base {\n  /* Standalone custom element host (shadow content is styled via adopted sheets on shadowRoot). */\n  cw-workcenter-view {\n    display: block;\n    box-sizing: border-box;\n    block-size: 100%;\n    min-block-size: 0;\n    min-inline-size: 0;\n  }\n  .workcenter-view {\n    display: grid;\n    flex-direction: column;\n    grid-template-columns: minmax(0, 1fr);\n    grid-template-rows: minmax(0px, max-content) minmax(0px, 1fr);\n    gap: var(--space-md);\n    padding: var(--space-md);\n    overflow-y: auto;\n    overflow-x: hidden;\n    background: var(--color-background);\n    color: var(--color-on-background);\n    max-block-size: stretch;\n    block-size: stretch;\n    inline-size: stretch;\n    min-inline-size: 0;\n    min-block-size: 0;\n    max-inline-size: stretch;\n    container-type: size;\n    scrollbar-width: thin;\n    scrollbar-color: var(--color-outline-variant) transparent;\n    animation: workcenter-fade-in-up 0.3s ease-out;\n    contain: strict;\n  }\n  .workcenter-view textarea,\n  .workcenter-view input,\n  .workcenter-view select,\n  .workcenter-view button {\n    box-sizing: border-box;\n    max-inline-size: 100%;\n  }\n  .workcenter-view {\n    /*\n     * WHY: Chromium’s native select paints flat square controls; strip UA chrome so tokens, radius, and\n     * chevron match tabs/buttons. Option list popup stays OS-native.\n     */\n  }\n  .workcenter-view select {\n    appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    margin: 0;\n    border: 1px solid var(--color-outline-variant);\n    border-radius: var(--radius-md);\n    background-color: var(--color-surface-container);\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none'%3E%3Cpath stroke='%2394a3b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 9 6 6 6-6'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-position: right var(--space-sm) center;\n    background-size: 1rem 1rem;\n    color: var(--color-on-surface);\n    cursor: pointer;\n    padding-block: var(--space-sm);\n    padding-inline: var(--space-sm) 2rem;\n    font-family: inherit;\n    transition: border-color var(--motion-fast, 0.15s ease), background-color var(--motion-fast, 0.15s ease);\n  }\n  .workcenter-view select:hover {\n    border-color: color-mix(in oklab, var(--color-primary) 35%, var(--color-outline-variant));\n    background-color: var(--color-surface-container-high);\n  }\n  .workcenter-view select:focus {\n    outline: none;\n  }\n  .workcenter-view select:focus-visible {\n    border-color: var(--color-primary);\n    box-shadow: 0 0 0 2px color-mix(in oklab, var(--color-primary) 28%, transparent);\n  }\n  .workcenter-view select:disabled {\n    opacity: 0.55;\n    cursor: not-allowed;\n  }\n  .workcenter-view button {\n    flex-wrap: nowrap;\n    text-wrap: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    text-align: center;\n    text-transform: none;\n    text-decoration: none;\n    text-shadow: none;\n    text-rendering: auto;\n  }\n  .workcenter-view h3 {\n    padding: var(--space-sm);\n  }\n  @container (max-inline-size: 1024px) {\n    .workcenter-view {\n      padding: var(--space-sm);\n      gap: var(--space-sm);\n    }\n  }\n  @container (max-inline-size: 768px) {\n    .workcenter-view {\n      padding: var(--space-xs);\n      gap: var(--space-xs);\n    }\n  }\n  .workcenter-view::-webkit-scrollbar {\n    inline-size: 4px;\n  }\n  .workcenter-view::-webkit-scrollbar-track {\n    background: transparent;\n  }\n  .workcenter-view::-webkit-scrollbar-thumb {\n    background: var(--color-outline-variant);\n    border-radius: 2px;\n  }\n  .workcenter-view::-webkit-scrollbar-thumb:hover {\n    background: var(--color-outline);\n  }\n  .workcenter-view:focus-visible {\n    outline: 2px solid var(--color-primary);\n    outline-offset: -2px;\n  }\n}\n@layer view.workcenter.layout {\n  .workcenter-content {\n    flex: 1;\n    min-block-size: 0;\n    /** NOTE: `contain: strict` + nested `stretch`/`calc-size()` min-heights stranded the Prompt footer below the clipped region on narrow viewports */\n    contain: layout;\n    max-block-size: stretch;\n    block-size: stretch;\n    min-inline-size: 0;\n  }\n  .workcenter-layout {\n    display: grid;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-auto-rows: minmax(min(8rem, 100%), 1fr);\n    grid-auto-flow: row;\n    gap: var(--space-md);\n    min-block-size: 0;\n    flex-direction: column;\n    inline-size: stretch;\n    block-size: stretch;\n  }\n  .workcenter-layout > * {\n    inline-size: stretch;\n  }\n  .workcenter-block {\n    min-block-size: fit-content;\n    max-block-size: stretch;\n    block-size: stretch;\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-md);\n    flex-shrink: 1;\n    flex-grow: 1;\n    flex-basis: fit-content;\n  }\n  .prompts-block,\n  .input-tabs-section {\n    grid-row: 2;\n    order: 2;\n  }\n  .results-block,\n  .results-section {\n    flex-basis: fit-content;\n    grid-row: 1;\n    order: 1;\n    block-size: stretch;\n    max-block-size: stretch;\n    flex-basis: fit-content;\n    flex-grow: 1;\n    flex-shrink: 1;\n    overflow: hidden;\n  }\n  .results-block {\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: fit-content;\n    min-block-size: calc-size(fit-content, max(size, min(100%, 16rem)));\n  }\n  .input-tabs-section,\n  .results-section {\n    min-block-size: 0;\n    gap: var(--space-md);\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    justify-content: stretch;\n    place-content: stretch;\n    place-items: stretch;\n    max-block-size: stretch;\n    flex-shrink: 1;\n    flex-basis: fit-content;\n  }\n  .input-tabs-section,\n  .results-tabs-section {\n    block-size: stretch;\n    max-block-size: stretch;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: 0;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n    gap: var(--space-xs);\n    flex-wrap: nowrap;\n    min-block-size: 0;\n    min-inline-size: 0;\n  }\n  .input-tab-actions,\n  .results-tab-actions {\n    display: flex;\n    flex-wrap: nowrap;\n    gap: var(--space-xs);\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    flex-shrink: 1;\n    flex-grow: 0;\n  }\n  .input-tab-actions > *,\n  .results-tab-actions > * {\n    min-inline-size: 0;\n    overflow: hidden;\n    max-inline-size: stretch;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    flex-wrap: nowrap;\n    inline-size: fit-content;\n    flex-shrink: 1;\n    flex-grow: 0;\n  }\n  .tab-btn {\n    border: 0px solid var(--color-outline-variant);\n    background: var(--color-surface-container-low);\n    color: var(--color-on-surface-variant);\n    border-radius: var(--radius-sm);\n    padding: var(--space-sm) var(--space-md);\n    font-size: var(--text-sm);\n    cursor: pointer;\n  }\n  .tab-btn.is-active {\n    background: var(--color-primary);\n    color: var(--color-on-primary);\n    border-color: var(--color-primary);\n  }\n  .input-tab-panels,\n  .results-tab-panels {\n    display: flex;\n    flex-direction: column;\n    min-block-size: 0;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: 0;\n    block-size: stretch;\n    max-block-size: stretch;\n    inline-size: stretch;\n    min-inline-size: 0;\n    place-content: stretch;\n    place-items: stretch;\n    justify-content: stretch;\n    align-content: stretch;\n    align-items: stretch;\n    justify-items: stretch;\n  }\n  /** Allow the Prompt tab chrome to scroll internally instead of overflowing past the iframe/viewport chrome */\n  .input-tab-panels {\n    overflow-y: auto;\n    overflow-x: hidden;\n    scrollbar-gutter: stable;\n    -webkit-overflow-scrolling: touch;\n  }\n  /** Results pane keeps prior min-height heuristic (desktop cards). */\n  .results-tab-panels {\n    flex-basis: fit-content;\n    min-block-size: min(12rem, 100%);\n  }\n  .tab-panel,\n  .results-tab-panel {\n    display: none;\n    min-inline-size: 0;\n    min-block-size: 0;\n    block-size: stretch;\n    max-block-size: stretch;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: 0;\n    inline-size: stretch;\n    place-content: stretch;\n    place-items: stretch;\n    justify-content: stretch;\n    align-content: stretch;\n    align-items: stretch;\n    justify-items: stretch;\n  }\n  .tab-panel.is-active,\n  .results-tab-panel.is-active {\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n  }\n  .tab-panel > *,\n  .results-tab-panel > * {\n    inline-size: stretch;\n    flex-shrink: 1;\n    flex-basis: 0;\n    min-block-size: 0;\n    min-inline-size: 0;\n    max-block-size: stretch;\n    flex-grow: 1;\n  }\n  /** Pipeline / history shells still prefer content-sized growth */\n  .results-tab-panel {\n    flex-basis: fit-content;\n  }\n  .results-tab-panel[data-results-tab-panel=output] > *, .results-tab-panel[data-results-tab-panel=pipeline] > *, .results-tab-panel[data-results-tab-panel=history] > * {\n    flex-basis: fit-content;\n  }\n  @container (min-inline-size: 1120px) {\n    .workcenter-layout {\n      grid-template-columns: minmax(0px, 1fr);\n      grid-auto-flow: row;\n      align-items: start;\n    }\n    .results-block {\n      order: 1;\n    }\n    .prompts-block {\n      order: 2;\n    }\n  }\n}\n@layer view.workcenter.components {\n  .workcenter-header {\n    display: grid;\n    gap: var(--space-sm);\n    padding: var(--space-xs) var(--space-md);\n    background: var(--color-surface-container-low);\n    border: 1px solid var(--color-outline-variant);\n    border-radius: var(--radius-lg);\n    position: sticky;\n    inset-block-start: 0;\n    z-index: 2;\n    grid-template-columns: [logo] minmax(0, max-content) [controls] minmax(0, 1fr);\n    place-content: center;\n    place-items: center;\n    justify-content: space-between;\n  }\n  .workcenter-header h2 {\n    margin: 0;\n    font-size: var(--text-base);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-on-surface);\n    letter-spacing: -0.01em;\n    white-space: nowrap;\n    grid-column: logo;\n  }\n  @container (max-inline-size: 768px) {\n    .workcenter-header {\n      gap: var(--space-sm);\n      padding: var(--space-sm);\n      grid-template-columns: [controls] minmax(0, 1fr);\n    }\n    .workcenter-header h2 {\n      display: none;\n    }\n  }\n  @container (max-inline-size: 480px) {\n    .workcenter-header {\n      gap: var(--space-xs);\n      padding: var(--space-xs);\n    }\n  }\n  .header-controls {\n    display: block;\n    margin: 0;\n    padding: 0;\n    border: 0;\n    inline-size: stretch;\n    max-inline-size: stretch;\n    grid-column: controls;\n    justify-self: end;\n    min-inline-size: 0;\n  }\n  @container (max-inline-size: 768px) {\n    .header-controls {\n      justify-self: stretch;\n    }\n  }\n  @media (max-width: 768px) {\n    .header-controls {\n      inline-size: 100%;\n      justify-self: stretch;\n    }\n  }\n  .control-selectors {\n    display: grid;\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n    gap: var(--space-md);\n    align-items: start;\n    max-inline-size: min(min(100%, 64rem), round(up, 100%, 32rem));\n    padding: 0px;\n    background: var(--color-surface-container-low);\n    border-radius: var(--radius-sm);\n    inline-size: stretch;\n    justify-self: end;\n  }\n  @container (max-inline-size: 1024px) {\n    .control-selectors {\n      gap: var(--space-sm);\n      padding: var(--space-sm);\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n    }\n  }\n  @container (max-inline-size: 900px) {\n    .control-selectors {\n      gap: var(--space-sm);\n      grid-template-columns: repeat(2, minmax(0, 1fr));\n      inline-size: stretch;\n    }\n  }\n  @container (max-inline-size: 768px) {\n    .control-selectors {\n      gap: var(--space-xs);\n      grid-template-columns: minmax(0, 1fr);\n      max-block-size: none;\n      overflow: visible;\n      padding: var(--space-sm);\n      background: var(--color-surface-container-low);\n      border: 1px solid var(--color-outline-variant);\n      border-radius: var(--radius-md);\n      position: static;\n      inset: auto;\n      box-shadow: none;\n      z-index: auto;\n    }\n  }\n  @container (max-inline-size: 480px) {\n    .control-selectors {\n      gap: var(--space-xs);\n      padding: var(--space-xs);\n      grid-template-columns: minmax(0, 1fr);\n      inset-inline-end: calc(var(--space-xs) * -1);\n    }\n  }\n  .format-selector,\n  .language-selector,\n  .recognition-selector,\n  .processing-selector {\n    display: grid;\n    grid-template-columns: minmax(0, 1fr) minmax(0, 8rem);\n    gap: var(--space-sm);\n    inline-size: stretch;\n    min-inline-size: fit-content;\n    max-inline-size: stretch;\n    padding: var(--space-xs) var(--space-sm);\n    border-radius: var(--radius-sm);\n    background: var(--color-surface);\n    color: var(--color-on-surface);\n    font-size: max(var(--text-sm), 0.875rem);\n    font-weight: var(--font-weight-medium);\n    font-family: var(--font-family);\n    place-content: center;\n    place-items: center;\n    overflow: hidden;\n  }\n  .format-selector select,\n  .language-selector select,\n  .recognition-selector select,\n  .processing-selector select {\n    inline-size: 100%;\n    min-block-size: 2.25rem;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    place-content: center;\n    place-items: center;\n    text-align: start;\n    font-size: 0.875rem;\n    line-height: 1.2;\n  }\n  .format-selector label,\n  .language-selector label,\n  .recognition-selector label,\n  .processing-selector label {\n    font-size: var(--text-xs);\n    color: var(--color-on-surface-variant);\n    white-space: nowrap;\n    flex-wrap: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    max-inline-size: stretch;\n    place-content: center;\n    place-items: center;\n    text-align: end;\n    justify-self: end;\n    padding-inline: var(--space-md);\n  }\n  @container (max-inline-size: 768px) {\n    .format-selector label,\n    .language-selector label,\n    .recognition-selector label,\n    .processing-selector label {\n      text-align: start;\n      justify-self: start;\n    }\n  }\n  @container (max-inline-size: 900px) {\n    .format-selector,\n    .language-selector,\n    .recognition-selector,\n    .processing-selector {\n      font-size: var(--text-xs);\n      padding: var(--space-xs);\n      gap: var(--space-xs);\n    }\n  }\n  @container (max-inline-size: 768px) {\n    .format-selector,\n    .language-selector,\n    .recognition-selector,\n    .processing-selector {\n      gap: var(--space-sm);\n    }\n  }\n  @container (max-inline-size: 640px) {\n    .format-selector,\n    .language-selector,\n    .recognition-selector,\n    .processing-selector {\n      gap: var(--space-xs);\n    }\n  }\n  .workcenter-view :where(button, input, select, textarea) {\n    font-size: 0.875rem;\n    line-height: 1.25;\n  }\n}\n@layer view.workcenter.components {\n  .prompt-panel {\n    block-size: stretch;\n    max-block-size: stretch;\n    /** WHY: `.tab-panel > *` in `_layout` uses `flex-basis: 0` so the prompt fills the tab and the textarea shrinks — but `view.workcenter.components` overrides `layout`, so keep `flex-basis: 0` here too. `fit-content` made the panel as tall as its content and the footer was clipped (`tab-panel.is-active { overflow: hidden }`). */\n    min-block-size: 0;\n    min-inline-size: 0;\n    flex-basis: 0;\n    flex-shrink: 1;\n    flex-grow: 1;\n  }\n  .prompt-panel,\n  .prompt-section {\n    position: relative;\n    border-radius: var(--radius-md);\n    padding: 0;\n    border: none;\n  }\n  .prompt-panel > :where(.wc-file-drop-overlay),\n  .prompt-section > :where(.wc-file-drop-overlay) {\n    position: absolute;\n    inset: 0;\n    pointer-events: none;\n    opacity: 0;\n    visibility: hidden;\n    transition: all var(--motion-normal);\n  }\n  .prompt-panel .prompt-controls,\n  .prompt-section .prompt-controls {\n    display: flex;\n    gap: var(--space-md);\n    align-items: center;\n    place-content: center;\n    place-items: center;\n    flex-wrap: wrap;\n  }\n  @container (max-inline-size: 480px) {\n    .prompt-panel .prompt-controls .btn-icon span,\n    .prompt-section .prompt-controls .btn-icon span {\n      display: none;\n    }\n  }\n  .prompt-panel .prompt-controls .icon-btn,\n  .prompt-section .prompt-controls .icon-btn {\n    inline-size: 40px;\n    block-size: 40px;\n    border-radius: var(--radius-sm);\n    border: none;\n    background: var(--color-surface-container);\n    color: var(--color-on-surface);\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all var(--motion-fast);\n  }\n  .prompt-panel .prompt-controls .icon-btn ui-icon,\n  .prompt-section .prompt-controls .icon-btn ui-icon {\n    transition: color var(--motion-fast);\n  }\n  .prompt-panel .prompt-controls .icon-btn:hover,\n  .prompt-section .prompt-controls .icon-btn:hover {\n    background: var(--color-surface-container-high);\n    box-shadow: var(--elev-1);\n  }\n  .prompt-panel .prompt-controls .icon-btn:hover ui-icon,\n  .prompt-section .prompt-controls .icon-btn:hover ui-icon {\n    color: var(--color-primary);\n  }\n  .prompt-panel .prompt-controls .icon-btn:focus-visible,\n  .prompt-section .prompt-controls .icon-btn:focus-visible {\n    outline: none;\n    box-shadow: var(--focus-ring);\n  }\n  @container (max-inline-size: 768px) {\n    .prompt-panel .prompt-controls .icon-btn,\n    .prompt-section .prompt-controls .icon-btn {\n      inline-size: 36px;\n      block-size: 36px;\n    }\n  }\n  @container (max-inline-size: 480px) {\n    .prompt-panel .prompt-controls .icon-btn,\n    .prompt-section .prompt-controls .icon-btn {\n      inline-size: 32px;\n      block-size: 32px;\n    }\n  }\n  @container (max-inline-size: 768px) {\n    .prompt-panel .prompt-controls,\n    .prompt-section .prompt-controls {\n      gap: var(--space-sm);\n    }\n  }\n  @container (max-inline-size: 480px) {\n    .prompt-panel .prompt-controls,\n    .prompt-section .prompt-controls {\n      align-items: stretch;\n      gap: var(--space-sm);\n    }\n  }\n  .template-select {\n    flex: 1;\n    padding: var(--space-sm) var(--space-md);\n    border-radius: var(--radius-sm);\n    background: var(--color-surface);\n    color: var(--color-on-surface);\n    font-size: var(--text-sm);\n    font-weight: var(--font-weight-medium);\n    font-family: var(--font-family);\n    cursor: pointer;\n    min-block-size: 36px;\n  }\n  .template-select:hover {\n    background: var(--color-surface-container-high);\n    border-color: var(--color-primary);\n  }\n  .template-select:focus {\n    outline: none;\n    border-color: var(--color-primary);\n  }\n  @container (max-inline-size: 768px) {\n    .template-select {\n      min-block-size: 40px;\n    }\n  }\n  .instruction-selector-row {\n    display: flex;\n    align-items: center;\n    gap: var(--space-sm);\n    padding: var(--space-sm) 0;\n  }\n  .instruction-selector-row .instruction-label {\n    display: flex;\n    align-items: center;\n    gap: var(--space-xs);\n    font-size: var(--text-xs);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-on-surface-variant);\n    white-space: nowrap;\n    flex-shrink: 0;\n  }\n  .instruction-selector-row .instruction-label ui-icon {\n    color: var(--color-primary);\n    opacity: 0.8;\n  }\n  .instruction-selector-row .instruction-select {\n    flex: 1;\n    padding: var(--space-xs) var(--space-sm);\n    border-radius: var(--radius-sm);\n    border: 1px solid var(--color-outline-variant);\n    background: var(--color-surface);\n    color: var(--color-on-surface);\n    font-size: var(--text-xs);\n    font-family: var(--font-family);\n    cursor: pointer;\n    min-block-size: 30px;\n    transition: border-color var(--motion-fast);\n  }\n  .instruction-selector-row .instruction-select:hover {\n    border-color: var(--color-primary);\n    background: var(--color-surface-container-high);\n  }\n  .instruction-selector-row .instruction-select:focus {\n    outline: none;\n    border-color: var(--color-primary);\n    box-shadow: 0 0 0 2px color-mix(in oklab, var(--color-primary) 15%, transparent);\n  }\n  .instruction-selector-row .btn-sm {\n    padding: var(--space-xs);\n    min-inline-size: 28px;\n    min-block-size: 28px;\n    border-radius: var(--radius-sm);\n    border: 1px solid var(--color-outline-variant);\n    background: transparent;\n    color: var(--color-on-surface-variant);\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all var(--motion-fast);\n    flex-shrink: 0;\n  }\n  .instruction-selector-row .btn-sm:hover {\n    background: var(--color-surface-container-high);\n    color: var(--color-primary);\n    border-color: var(--color-primary);\n  }\n  @container (max-inline-size: 480px) {\n    .instruction-selector-row {\n      flex-wrap: wrap;\n    }\n    .instruction-selector-row .instruction-label {\n      flex-basis: 100%;\n    }\n  }\n  .prompt-input {\n    inline-size: stretch;\n    /** Scroll inside the shrinking flex region instead of growing past the viewport */\n    block-size: 100%;\n    max-block-size: 100%;\n    min-block-size: 0;\n    flex: 1 1 auto;\n    flex-shrink: 1;\n    flex-basis: 0;\n    padding: var(--space-sm) var(--space-md);\n    border: 1px solid var(--color-outline-variant);\n    border-radius: var(--radius-md);\n    background: var(--color-surface);\n    color: var(--color-on-surface);\n    font-family: var(--font-family-system);\n    font-size: var(--text-sm);\n    line-height: var(--leading-relaxed);\n    resize: vertical;\n    overflow-y: auto;\n    scrollbar-width: thin;\n    scrollbar-color: var(--color-outline-variant) transparent;\n  }\n  .prompt-input::placeholder {\n    color: var(--color-on-surface-variant);\n    opacity: 0.8;\n  }\n  .prompt-input::-webkit-scrollbar {\n    inline-size: 4px;\n    block-size: 4px;\n  }\n  .prompt-input::-webkit-scrollbar-thumb {\n    background: var(--color-outline-variant);\n  }\n  .prompt-input:hover {\n    background: var(--color-surface-container-low);\n    box-shadow: var(--elev-1);\n  }\n  .prompt-input:focus {\n    outline: none;\n    background: var(--color-surface-container-high);\n    box-shadow: var(--focus-ring);\n  }\n  @container (max-inline-size: 1024px) {\n    .prompt-input {\n      padding: var(--space-sm);\n    }\n  }\n  @container (max-inline-size: 768px) {\n    .prompt-input {\n      padding: var(--space-xs) var(--space-sm);\n    }\n  }\n  .wc-file-drop-overlay {\n    position: absolute;\n    inset: 0;\n    pointer-events: none;\n    opacity: 0;\n    visibility: hidden;\n    border: none;\n    border-radius: var(--radius-md);\n    padding-inline: var(--space-lg);\n    padding-block: var(--space-lg);\n    background: var(--color-surface-container-low);\n    box-shadow: var(--elev-1);\n    z-index: 10;\n    transition: all var(--motion-normal);\n  }\n  .wc-file-drop-overlay.drag-over {\n    opacity: 1;\n    visibility: visible;\n    background: color-mix(in oklab, var(--color-primary) 10%, var(--color-surface-container-low));\n    box-shadow: var(--focus-ring), var(--elev-2);\n  }\n  .wc-file-drop-overlay.drag-over .drop-zone-content {\n    opacity: 1;\n    visibility: visible;\n  }\n  @container (max-inline-size: 1024px) {\n    .wc-file-drop-overlay {\n      padding-inline: var(--space-md);\n      padding-block: var(--space-md);\n    }\n  }\n  @container (max-inline-size: 768px) {\n    .wc-file-drop-overlay {\n      padding-inline: var(--space-sm);\n      padding-block: var(--space-sm);\n    }\n  }\n  .prompt-input-group {\n    position: relative;\n    inset: 0;\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-xl);\n    block-size: stretch;\n    max-block-size: stretch;\n    min-block-size: 0;\n    min-inline-size: 0;\n    /** WHY: Consume remaining column height (`flex-basis:0`) instead of insisting on textarea min-height and shoving footer actions off-screen */\n    flex: 1 1 auto;\n    flex-basis: 0;\n    place-content: center;\n    place-items: stretch;\n  }\n  .prompt-input-group[data-dropzone] {\n    position: relative;\n    transition: all var(--motion-normal);\n  }\n  .prompt-input-group .file-drop-zone {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: var(--space-lg);\n    text-align: center;\n    pointer-events: none;\n  }\n  .prompt-input-group .file-drop-zone .drop-zone-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: var(--space-lg);\n    opacity: 0;\n    visibility: hidden;\n    transition: all var(--motion-normal);\n  }\n  .prompt-input-group .file-drop-zone .drop-zone-content .drop-icon {\n    color: var(--color-primary);\n    opacity: 0.8;\n    filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.15));\n    transition: all var(--motion-normal);\n  }\n  @container (max-inline-size: 1024px) {\n    .prompt-input-group .file-drop-zone .drop-zone-content .drop-icon[size=\"4rem\"] {\n      --icon-size: 3.5rem;\n      inline-size: 4rem;\n      block-size: 4rem;\n    }\n  }\n  @container (max-inline-size: 768px) {\n    .prompt-input-group .file-drop-zone .drop-zone-content .drop-icon[size=\"4rem\"] {\n      --icon-size: 3rem;\n      inline-size: 4rem;\n      block-size: 4rem;\n    }\n  }\n  @container (max-inline-size: 480px) {\n    .prompt-input-group .file-drop-zone .drop-zone-content .drop-icon[size=\"4rem\"] {\n      --icon-size: 2.5rem;\n      inline-size: 4rem;\n      block-size: 4rem;\n    }\n  }\n  .prompt-input-group .file-drop-zone .drop-zone-content .drop-text {\n    font-size: var(--text-xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-on-surface);\n    letter-spacing: -0.01em;\n    text-align: center;\n    line-height: var(--leading-tight);\n    font-variant-emoji: text;\n  }\n  @container (max-inline-size: 1024px) {\n    .prompt-input-group .file-drop-zone .drop-zone-content .drop-text {\n      font-size: var(--text-lg);\n    }\n  }\n  @container (max-inline-size: 768px) {\n    .prompt-input-group .file-drop-zone .drop-zone-content .drop-text {\n      font-size: var(--text-base);\n    }\n  }\n  .prompt-input-group .file-drop-zone .drop-zone-content .drop-hint {\n    font-size: var(--text-sm);\n    color: var(--color-on-surface-variant);\n    font-weight: var(--font-weight-medium);\n    opacity: 0.9;\n    text-align: center;\n    max-inline-size: 280px;\n    line-height: var(--leading-normal);\n  }\n  @container (max-inline-size: 768px) {\n    .prompt-input-group .file-drop-zone .drop-zone-content .drop-hint {\n      font-size: var(--text-xs);\n      max-inline-size: 240px;\n    }\n  }\n  @container (max-inline-size: 1024px) {\n    .prompt-input-group .file-drop-zone .drop-zone-content {\n      gap: var(--space-md);\n    }\n  }\n  @container (max-inline-size: 768px) {\n    .prompt-input-group .file-drop-zone .drop-zone-content {\n      gap: var(--space-sm);\n    }\n  }\n  .prompt-input-group .wc-recognized-status {\n    margin-block-start: var(--space-md);\n    padding: var(--space-sm) var(--space-md);\n    background: color-mix(in oklab, var(--color-success) 5%, transparent);\n    border: none;\n    border-radius: var(--radius-lg);\n    box-shadow: var(--elev-1);\n    display: flex;\n    align-items: center;\n    gap: var(--space-sm);\n    font-size: var(--text-sm);\n    color: var(--color-on-surface);\n  }\n  .prompt-input-group .wc-recognized-status .status-icon {\n    color: var(--color-success);\n    flex-shrink: 0;\n  }\n  .prompt-input-group .wc-recognized-status .clear-recognized {\n    margin-inline-start: auto;\n    padding: var(--space-xs) var(--space-sm);\n    border: none;\n    border-radius: var(--radius-full);\n    background: transparent;\n    color: var(--color-on-surface-variant);\n    font-size: var(--text-xs);\n    min-block-size: 28px;\n    box-shadow: none;\n  }\n  .prompt-input-group .wc-recognized-status .clear-recognized:hover {\n    color: var(--color-error);\n    background: color-mix(in oklab, var(--color-error) 5%, transparent);\n  }\n  .prompt-input-group .file-list {\n    margin-block-start: var(--space-md);\n    box-sizing: border-box;\n    inline-size: stretch;\n    max-inline-size: stretch;\n    min-inline-size: 0;\n  }\n  .prompt-input-group .file-item {\n    padding: var(--space-sm) var(--space-md);\n    background: var(--color-surface-container);\n    border: none;\n    box-shadow: var(--elev-0);\n  }\n  .prompt-input-group .file-item:hover {\n    background: var(--color-surface-container-high);\n    box-shadow: var(--elev-1);\n  }\n  .prompt-input-group .file-info {\n    gap: var(--space-md);\n  }\n  .prompt-input-group .file-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    inline-size: 32px;\n    block-size: 32px;\n    border-radius: var(--radius-sm);\n    background: var(--color-surface-container-high);\n  }\n  .prompt-input-group .file-icon ui-icon {\n    color: var(--color-primary);\n  }\n  @container (max-inline-size: 768px) {\n    .prompt-input-group .file-icon {\n      inline-size: 28px;\n      block-size: 28px;\n    }\n  }\n  .prompt-input-group .remove-btn {\n    inline-size: 24px;\n    block-size: 24px;\n    background: transparent;\n    color: var(--color-error);\n    border: none;\n    padding: 0;\n  }\n  .prompt-input-group .remove-btn:hover {\n    background: color-mix(in oklab, var(--color-error) 20%, transparent);\n    color: var(--color-error);\n  }\n  @container (max-inline-size: 1024px) {\n    .prompt-input-group {\n      gap: var(--space-lg);\n    }\n  }\n  @container (max-inline-size: 768px) {\n    .prompt-input-group {\n      gap: var(--space-md);\n    }\n  }\n  /** Grid toolbar: legacy `action-section` / `prompt-section` / `prompts-section`. Not `.prompt-panel` (tabbed Prompt chrome) — avoids `display: grid` fighting flex and clipping the execute row. */\n  .action-section,\n  .prompt-section,\n  .prompts-section {\n    background: var(--color-surface-container-low);\n    border-radius: var(--radius-lg);\n    padding: var(--space-lg);\n    border: 1px solid var(--color-outline-variant);\n    place-content: center;\n    place-items: center;\n    align-items: stretch;\n  }\n  .action-section .prompt-actions,\n  .prompt-section .prompt-actions,\n  .prompts-section .prompt-actions {\n    display: grid;\n    grid-template-columns: minmax(0px, 1fr) minmax(0px, max-content);\n    grid-template-rows: auto auto;\n    gap: var(--space-md);\n    place-self: stretch;\n    align-self: stretch;\n    min-inline-size: 0;\n    max-inline-size: 100%;\n    inline-size: 100%;\n    box-sizing: border-box;\n    place-items: center;\n    place-content: stretch;\n  }\n  .action-section .prompt-actions .voice-btn,\n  .prompt-section .prompt-actions .voice-btn,\n  .prompts-section .prompt-actions .voice-btn {\n    grid-column: 1;\n    grid-row: 1;\n    padding: var(--space-lg);\n    border: none;\n    border-radius: var(--radius-xl);\n    background: var(--color-surface-container-high);\n    color: var(--color-on-surface);\n    font-size: var(--text-sm);\n    font-weight: var(--font-weight-medium);\n    cursor: pointer;\n    transition: all var(--motion-normal);\n    box-shadow: var(--elev-0);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    min-block-size: 44px;\n    inline-size: stretch;\n  }\n  .action-section .prompt-actions .voice-btn:hover,\n  .prompt-section .prompt-actions .voice-btn:hover,\n  .prompts-section .prompt-actions .voice-btn:hover {\n    background: var(--color-surface-container-highest);\n    box-shadow: var(--elev-1);\n  }\n  .action-section .prompt-actions .voice-btn:focus,\n  .prompt-section .prompt-actions .voice-btn:focus,\n  .prompts-section .prompt-actions .voice-btn:focus {\n    outline: none;\n    box-shadow: var(--focus-ring);\n  }\n  .action-section .prompt-actions .voice-btn.recording,\n  .prompt-section .prompt-actions .voice-btn.recording,\n  .prompts-section .prompt-actions .voice-btn.recording {\n    background: var(--color-error);\n    color: var(--color-on-error);\n    animation: workcenter-pulse 1.5s infinite;\n  }\n  .action-section .prompt-actions .voice-btn.recording::before,\n  .prompt-section .prompt-actions .voice-btn.recording::before,\n  .prompts-section .prompt-actions .voice-btn.recording::before {\n    content: \"●\";\n    margin-inline-end: var(--space-sm);\n    color: var(--color-on-error);\n    animation: workcenter-blink 1s infinite;\n  }\n  @container (max-inline-size: 768px) {\n    .action-section .prompt-actions .voice-btn,\n    .prompt-section .prompt-actions .voice-btn,\n    .prompts-section .prompt-actions .voice-btn {\n      min-block-size: 40px;\n      font-size: var(--text-xs);\n    }\n  }\n  @container (max-inline-size: 480px) {\n    .action-section .prompt-actions .voice-btn,\n    .prompt-section .prompt-actions .voice-btn,\n    .prompts-section .prompt-actions .voice-btn {\n      min-block-size: 36px;\n      padding: var(--space-sm);\n    }\n  }\n  .action-section .prompt-actions .auto-action-label,\n  .prompt-section .prompt-actions .auto-action-label,\n  .prompts-section .prompt-actions .auto-action-label {\n    grid-column: 2;\n    grid-row: 1;\n    display: flex;\n    place-content: center;\n    place-items: center;\n    justify-content: center;\n    inline-size: 44px;\n    block-size: 44px;\n    border-radius: var(--radius-lg);\n    background: var(--color-surface-container);\n    cursor: pointer;\n    transition: all var(--motion-fast);\n    box-shadow: var(--elev-0);\n    border: none;\n    padding: 0.5rem;\n  }\n  .action-section .prompt-actions .auto-action-label > :not(ui-icon),\n  .prompt-section .prompt-actions .auto-action-label > :not(ui-icon),\n  .prompts-section .prompt-actions .auto-action-label > :not(ui-icon) {\n    display: none;\n  }\n  .action-section .prompt-actions .auto-action-label ui-icon,\n  .prompt-section .prompt-actions .auto-action-label ui-icon,\n  .prompts-section .prompt-actions .auto-action-label ui-icon {\n    color: var(--color-on-surface-variant);\n    transition: all var(--motion-fast);\n  }\n  .action-section .prompt-actions .auto-action-label input[type=checkbox],\n  .prompt-section .prompt-actions .auto-action-label input[type=checkbox],\n  .prompts-section .prompt-actions .auto-action-label input[type=checkbox] {\n    position: absolute;\n    opacity: 0;\n    inline-size: 1px;\n    block-size: 1px;\n    margin: -1px;\n    padding: 0;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n  }\n  .action-section .prompt-actions .auto-action-label:has(input[type=checkbox]:checked), input[type=checkbox]:checked ~ .action-section .prompt-actions .auto-action-label,\n  .prompt-section .prompt-actions .auto-action-label:has(input[type=checkbox]:checked),\n  input[type=checkbox]:checked ~ .prompt-section .prompt-actions .auto-action-label,\n  .prompts-section .prompt-actions .auto-action-label:has(input[type=checkbox]:checked),\n  input[type=checkbox]:checked ~ .prompts-section .prompt-actions .auto-action-label {\n    background: var(--color-primary);\n    box-shadow: var(--elev-1);\n  }\n  .action-section .prompt-actions .auto-action-label:has(input[type=checkbox]:checked) ui-icon, input[type=checkbox]:checked ~ .action-section .prompt-actions .auto-action-label ui-icon,\n  .prompt-section .prompt-actions .auto-action-label:has(input[type=checkbox]:checked) ui-icon,\n  input[type=checkbox]:checked ~ .prompt-section .prompt-actions .auto-action-label ui-icon,\n  .prompts-section .prompt-actions .auto-action-label:has(input[type=checkbox]:checked) ui-icon,\n  input[type=checkbox]:checked ~ .prompts-section .prompt-actions .auto-action-label ui-icon {\n    color: var(--color-on-primary);\n  }\n  .action-section .prompt-actions .auto-action-label:hover,\n  .prompt-section .prompt-actions .auto-action-label:hover,\n  .prompts-section .prompt-actions .auto-action-label:hover {\n    background: var(--color-surface-container-high);\n    box-shadow: var(--elev-1);\n  }\n  .action-section .prompt-actions .auto-action-label:hover:has(input[type=checkbox]:checked), input[type=checkbox]:checked ~ .action-section .prompt-actions .auto-action-label:hover,\n  .prompt-section .prompt-actions .auto-action-label:hover:has(input[type=checkbox]:checked),\n  input[type=checkbox]:checked ~ .prompt-section .prompt-actions .auto-action-label:hover,\n  .prompts-section .prompt-actions .auto-action-label:hover:has(input[type=checkbox]:checked),\n  input[type=checkbox]:checked ~ .prompts-section .prompt-actions .auto-action-label:hover {\n    background: color-mix(in oklab, var(--color-primary) 90%, black);\n  }\n  .action-section .prompt-actions .auto-action-label:focus-within,\n  .prompt-section .prompt-actions .auto-action-label:focus-within,\n  .prompts-section .prompt-actions .auto-action-label:focus-within {\n    outline: none;\n    box-shadow: var(--focus-ring);\n  }\n  @container (max-inline-size: 768px) {\n    .action-section .prompt-actions .auto-action-label,\n    .prompt-section .prompt-actions .auto-action-label,\n    .prompts-section .prompt-actions .auto-action-label {\n      inline-size: 40px;\n      block-size: 40px;\n    }\n    .action-section .prompt-actions .auto-action-label ui-icon[size=\"20\"],\n    .prompt-section .prompt-actions .auto-action-label ui-icon[size=\"20\"],\n    .prompts-section .prompt-actions .auto-action-label ui-icon[size=\"20\"] {\n      --size: 18px;\n    }\n  }\n  @container (max-inline-size: 480px) {\n    .action-section .prompt-actions .auto-action-label,\n    .prompt-section .prompt-actions .auto-action-label,\n    .prompts-section .prompt-actions .auto-action-label {\n      inline-size: 36px;\n      block-size: 36px;\n    }\n    .action-section .prompt-actions .auto-action-label ui-icon[size=\"20\"],\n    .prompt-section .prompt-actions .auto-action-label ui-icon[size=\"20\"],\n    .prompts-section .prompt-actions .auto-action-label ui-icon[size=\"20\"] {\n      --size: 16px;\n    }\n  }\n  .action-section .prompt-actions .action-btn,\n  .prompt-section .prompt-actions .action-btn,\n  .prompts-section .prompt-actions .action-btn {\n    grid-column: 1;\n    grid-row: 2;\n    padding: var(--space-md) var(--space-lg);\n    border: none;\n    border-radius: var(--radius-md);\n    background: var(--color-primary);\n    color: var(--color-on-primary);\n    cursor: pointer;\n    font-size: var(--text-sm);\n    font-weight: var(--font-weight-medium);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--space-xs);\n    min-block-size: 44px;\n    transition: all var(--motion-normal);\n    inline-size: stretch;\n    max-inline-size: stretch;\n  }\n  .action-section .prompt-actions .action-btn:hover,\n  .prompt-section .prompt-actions .action-btn:hover,\n  .prompts-section .prompt-actions .action-btn:hover {\n    background: color-mix(in oklab, var(--color-primary) 85%, black);\n    box-shadow: var(--elev-1);\n    transform: translateY(-1px);\n  }\n  .action-section .prompt-actions .action-btn:focus,\n  .prompt-section .prompt-actions .action-btn:focus,\n  .prompts-section .prompt-actions .action-btn:focus {\n    outline: none;\n    box-shadow: var(--focus-ring);\n  }\n  .action-section .prompt-actions .action-btn:disabled,\n  .prompt-section .prompt-actions .action-btn:disabled,\n  .prompts-section .prompt-actions .action-btn:disabled {\n    background: var(--color-surface-container-high);\n    color: var(--color-on-surface-variant);\n    cursor: not-allowed;\n    box-shadow: var(--elev-0);\n    transform: none;\n  }\n  @container (max-inline-size: 768px) {\n    .action-section .prompt-actions .action-btn ui-icon[size=\"20\"],\n    .prompt-section .prompt-actions .action-btn ui-icon[size=\"20\"],\n    .prompts-section .prompt-actions .action-btn ui-icon[size=\"20\"] {\n      --icon-size: 16px;\n    }\n  }\n  @container (max-inline-size: 640px) {\n    .action-section .prompt-actions .action-btn .btn-text,\n    .prompt-section .prompt-actions .action-btn .btn-text,\n    .prompts-section .prompt-actions .action-btn .btn-text {\n      display: none;\n    }\n  }\n  @container (max-inline-size: 768px) {\n    .action-section .prompt-actions .action-btn,\n    .prompt-section .prompt-actions .action-btn,\n    .prompts-section .prompt-actions .action-btn {\n      min-block-size: 40px;\n      padding: var(--space-sm) var(--space-md);\n    }\n  }\n  @container (max-inline-size: 480px) {\n    .action-section .prompt-actions .action-btn,\n    .prompt-section .prompt-actions .action-btn,\n    .prompts-section .prompt-actions .action-btn {\n      min-block-size: 36px;\n      padding: var(--space-xs) var(--space-sm);\n      font-size: var(--text-xs);\n    }\n  }\n  .action-section .prompt-actions .clear-btn,\n  .prompt-section .prompt-actions .clear-btn,\n  .prompts-section .prompt-actions .clear-btn {\n    grid-column: 2;\n    grid-row: 2;\n    min-inline-size: 44px;\n    min-block-size: 44px;\n    border-radius: var(--radius-md);\n    border: none;\n    background: var(--color-surface-container);\n    color: var(--color-on-surface);\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all var(--motion-fast);\n    block-size: max-content;\n    max-block-size: fit-content;\n    min-block-size: 2.5rem;\n    aspect-ratio: auto;\n    inline-size: stretch;\n    max-inline-size: stretch;\n  }\n  .action-section .prompt-actions .clear-btn:hover,\n  .prompt-section .prompt-actions .clear-btn:hover,\n  .prompts-section .prompt-actions .clear-btn:hover {\n    background: var(--color-error-container);\n    color: var(--color-on-error-container);\n  }\n  .action-section .prompt-actions .clear-btn:focus,\n  .prompt-section .prompt-actions .clear-btn:focus,\n  .prompts-section .prompt-actions .clear-btn:focus {\n    outline: none;\n    box-shadow: var(--focus-ring);\n  }\n  @container (max-inline-size: 768px) {\n    .action-section .prompt-actions .clear-btn,\n    .prompt-section .prompt-actions .clear-btn,\n    .prompts-section .prompt-actions .clear-btn {\n      min-inline-size: 40px;\n      min-block-size: 40px;\n    }\n  }\n  @container (max-inline-size: 480px) {\n    .action-section .prompt-actions .clear-btn,\n    .prompt-section .prompt-actions .clear-btn,\n    .prompts-section .prompt-actions .clear-btn {\n      min-inline-size: 36px;\n      min-block-size: 36px;\n    }\n  }\n  @container (max-inline-size: 1024px) {\n    .action-section,\n    .prompt-section,\n    .prompts-section {\n      padding: var(--space-md);\n    }\n  }\n  @container (max-inline-size: 768px) {\n    .action-section,\n    .prompt-section,\n    .prompts-section {\n      padding: var(--space-sm);\n    }\n  }\n  .prompt-panel {\n    background: var(--color-surface-container-low);\n    border-radius: var(--radius-lg);\n    padding: var(--space-lg);\n    border: 1px solid var(--color-outline-variant);\n    place-content: center;\n    place-items: center;\n    align-items: stretch;\n  }\n  @container (max-inline-size: 1024px) {\n    .prompt-panel {\n      padding: var(--space-md);\n    }\n  }\n  @container (max-inline-size: 768px) {\n    .prompt-panel {\n      padding: var(--space-sm);\n    }\n  }\n  .wc-block-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: var(--space-md);\n    flex-wrap: nowrap;\n    inline-size: stretch;\n    max-inline-size: stretch;\n    flex-direction: row;\n  }\n  .wc-block-header h3 {\n    margin: 0;\n    font-size: var(--text-lg);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-on-surface);\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: fit-content;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .wc-block-header .prompt-actions {\n    align-items: center;\n    gap: var(--space-xs);\n    flex-wrap: wrap;\n  }\n  .instruction-panel,\n  .prompt-panel {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-md);\n    min-inline-size: 0;\n    min-block-size: 0;\n  }\n  .instruction-panel .instruction-help {\n    font-size: var(--text-xs);\n    color: var(--color-on-surface-variant);\n    background: var(--color-surface-container-high);\n    border-radius: var(--radius-sm);\n    padding: var(--space-sm);\n  }\n  .prompt-panel > .prompt-controls {\n    flex: 0 0 auto;\n  }\n  .prompt-panel > .prompt-input-group {\n    flex: 1 1 auto;\n    flex-basis: 0;\n    min-block-size: 0;\n    min-inline-size: 0;\n    overflow: hidden;\n  }\n  .prompt-panel > .prompt-actions {\n    /** WHY: Earlier rules set `display:grid` + `min-inline-size:max-content` which never shrinks on narrow viewports; flex keeps controls on-screen */\n    display: flex;\n    flex-flow: row wrap;\n    align-items: center;\n    justify-content: flex-start;\n    gap: var(--space-sm);\n    flex: 0 0 auto;\n    flex-grow: 0;\n    flex-shrink: 0;\n    margin-block-start: auto;\n    inline-size: 100%;\n    max-inline-size: 100%;\n    min-inline-size: 0;\n    box-sizing: border-box;\n    padding-block-end: max(var(--space-xs), env(safe-area-inset-bottom, 0px));\n    grid-template-columns: unset;\n    grid-template-rows: unset;\n    place-self: stretch;\n    align-content: flex-start;\n    justify-content: flex-start;\n    place-items: center;\n  }\n  .prompt-panel > .prompt-actions > * {\n    grid-column: unset;\n    grid-row: unset;\n  }\n  .prompt-panel .prompt-attach-btn,\n  .prompt-panel .auto-action-label,\n  .prompt-panel .clear-btn {\n    flex: 0 0 auto;\n  }\n  .prompt-panel .voice-btn {\n    flex: 1 1 14rem;\n    min-inline-size: 12rem;\n    max-inline-size: 100%;\n    inline-size: auto;\n    justify-content: center;\n  }\n  .prompt-panel .action-btn {\n    flex: 0 0 auto;\n    min-inline-size: 10.5rem;\n  }\n  @container (max-inline-size: 760px) {\n    .prompt-panel .voice-btn {\n      flex-basis: 100%;\n      min-inline-size: 0;\n    }\n    .prompt-panel .action-btn {\n      flex: 1 1 auto;\n      min-inline-size: 0;\n    }\n  }\n  .prompt-attach-btn {\n    min-inline-size: 44px;\n    min-block-size: 44px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--space-xs);\n    border: 1px solid var(--color-outline-variant);\n    background: var(--color-surface-container);\n  }\n  .prompt-attach-btn .attach-count {\n    font-size: var(--text-xs);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-primary);\n    background: var(--color-primary-container);\n    border-radius: var(--radius-full);\n    padding: 0 0.35rem;\n    min-inline-size: 1.35rem;\n    text-align: center;\n  }\n  .prompt-input-group[data-prompt-dropzone] {\n    position: relative;\n    border-radius: var(--radius-md);\n    border: 2px dashed transparent;\n    transition: border-color var(--motion-fast), background-color var(--motion-fast);\n  }\n  .prompt-input-group[data-prompt-dropzone].drag-over {\n    border-color: var(--color-primary);\n    background: color-mix(in oklab, var(--color-primary) 7%, transparent);\n  }\n  .prompt-input-overlay {\n    position: absolute !important;\n    inset: var(--space-xs);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--space-xs);\n    border-radius: var(--radius-sm);\n    background: color-mix(in oklab, var(--color-primary) 12%, var(--color-surface-container-high));\n    color: var(--color-on-surface);\n    opacity: 0;\n    visibility: hidden;\n    pointer-events: none;\n    transition: opacity var(--motion-fast), visibility var(--motion-fast);\n    z-index: 3;\n    block-size: stretch;\n    inline-size: stretch;\n    inset: 0px;\n  }\n  .prompt-input-overlay.visible {\n    opacity: 1;\n    visibility: visible;\n  }\n  .prompt-actions .btn, .prompt-actions .icon-btn, .prompt-actions .clear-btn, .prompt-panel .btn, .prompt-panel .icon-btn, .prompt-panel .clear-btn {\n    block-size: 2.5rem;\n    min-block-size: fit-content;\n    block-size: max-content;\n    padding: var(--space-sm) var(--space-md);\n    min-inline-size: 0px;\n    max-inline-size: fit-content;\n  }\n  .prompt-actions .clear-btn, .prompt-actions .voice-btn, .prompt-panel .clear-btn, .prompt-panel .voice-btn {\n    inline-size: auto;\n    aspect-ratio: auto;\n    max-inline-size: stretch;\n  }\n}\n@layer view.workcenter.components {\n  .wc-attachments-section {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-md);\n    min-block-size: fit-content;\n    block-size: fit-content;\n    max-block-size: stretch;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: fit-content;\n  }\n  .file-attachment-area {\n    display: grid;\n    flex-direction: column;\n    gap: var(--space-md);\n    flex: 1;\n    min-block-size: fit-content;\n    block-size: stretch;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: fit-content;\n    grid-template-rows: minmax(0px, 1fr);\n    grid-template-columns: minmax(0px, 1fr);\n    overflow-x: hidden;\n    max-inline-size: stretch;\n    inline-size: stretch;\n    min-inline-size: 0;\n    pointer-events: auto;\n  }\n  .file-attachment-area > * {\n    grid-area: 1/1;\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .file-attachment-area .file-list {\n    z-index: 2;\n    pointer-events: none;\n    block-size: stretch;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: fit-content;\n    box-sizing: border-box;\n    inline-size: stretch;\n    max-inline-size: stretch;\n    min-inline-size: 0;\n  }\n  .file-attachment-area .file-item {\n    pointer-events: none;\n  }\n  .file-attachment-area button {\n    pointer-events: auto;\n  }\n  .file-attachment-area:has(.file-list .file-item) .file-drop-zone {\n    display: none !important;\n    visibility: hidden !important;\n    pointer-events: none !important;\n  }\n  .file-attachment-area .file-list:has(.wc-attachments-empty), .file-attachment-area .file-list:empty {\n    display: none !important;\n    visibility: hidden !important;\n    pointer-events: none !important;\n  }\n  .file-drop-zone {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: var(--space-md);\n    min-block-size: 8rem;\n    position: relative;\n    border-radius: var(--radius-lg);\n    transition: all var(--motion-normal);\n    overflow: auto;\n    cursor: pointer;\n    block-size: stretch;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: fit-content;\n    pointer-events: none;\n  }\n  [data-dropzone] {\n    background: var(--color-surface-container-low);\n    border: 2px dashed color-mix(in oklab, var(--color-outline-variant) 40%, transparent);\n    border-radius: var(--radius-sm);\n  }\n  [data-dropzone]:hover {\n    border-color: color-mix(in oklab, var(--color-primary) 40%, transparent);\n    background: color-mix(in oklab, var(--color-primary) 5%, var(--color-surface-container-low));\n  }\n  [data-dropzone].drag-over {\n    border-color: var(--color-primary);\n    background: color-mix(in oklab, var(--color-primary) 10%, var(--color-surface-container-low));\n    box-shadow: var(--focus-ring);\n  }\n  [data-dropzone].drag-over::before {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(45deg, color-mix(in oklab, var(--color-primary) 5%, transparent) 25%, transparent 25%, transparent 50%, color-mix(in oklab, var(--color-primary) 5%, transparent) 50%, color-mix(in oklab, var(--color-primary) 5%, transparent) 75%, transparent 75%);\n    background-size: 20px 20px;\n    border-radius: inherit;\n    pointer-events: none;\n    z-index: 1;\n  }\n  [data-dropzone].drag-over > * {\n    position: relative;\n    z-index: 2;\n  }\n  .drop-zone-content {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: var(--space-md);\n    text-align: center;\n    block-size: max-content;\n  }\n  .drop-icon {\n    color: var(--color-primary);\n    opacity: 0.7;\n  }\n  .drop-text {\n    font-size: var(--text-lg);\n    font-weight: 500;\n    color: var(--color-on-surface);\n  }\n  .drop-hint {\n    font-size: var(--text-sm);\n    color: var(--color-on-surface-variant);\n    opacity: 0.8;\n  }\n  .file-list {\n    flex: 1;\n    min-block-size: 0;\n    overflow-y: auto;\n    max-block-size: stretch;\n    max-inline-size: stretch;\n    inline-size: stretch;\n    min-inline-size: 0;\n    block-size: max-content;\n    overflow-x: hidden;\n    box-sizing: border-box;\n  }\n  .file-item {\n    display: grid;\n    grid-template-columns: [info] minmax(0px, 1fr) [button] minmax(0px, 2rem);\n    grid-template-rows: minmax(0px, 1fr);\n    align-items: center;\n    gap: var(--space-sm);\n    padding: var(--space-sm);\n    border-radius: var(--radius-sm);\n    background: var(--color-surface-container-high);\n    border: 1px solid var(--color-outline-variant);\n    margin-block-end: var(--space-xs);\n    max-inline-size: stretch;\n    inline-size: stretch;\n    min-inline-size: 0;\n    overflow: hidden;\n    place-content: center;\n    place-items: center;\n    justify-items: safe center;\n    justify-content: safe center;\n    align-self: safe center;\n    align-content: safe center;\n  }\n  .file-item .file-info {\n    grid-column: info;\n    grid-row: 1/-1;\n  }\n  .file-item .remove-btn {\n    box-sizing: border-box;\n    grid-column: button;\n    grid-row: 1/-1;\n    aspect-ratio: auto;\n    max-inline-size: min(2rem, 100%) !important;\n    max-block-size: min(2rem, 100%) !important;\n    inline-size: stretch;\n    block-size: stretch;\n    padding: 0px;\n  }\n  .file-item:hover {\n    background: var(--color-surface-container-highest);\n  }\n  .file-info {\n    display: grid;\n    grid-template-columns: [icon] minmax(0px, 2rem) [details] minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    gap: var(--space-sm);\n    flex: 1;\n    min-inline-size: 0px;\n    inline-size: stretch;\n    max-inline-size: stretch;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    place-content: center;\n    place-items: center;\n    justify-items: safe center;\n    justify-content: safe center;\n    align-self: safe center;\n    align-content: safe center;\n    text-align: start;\n  }\n  .file-info .file-icon, .file-info .file-preview {\n    grid-column: icon;\n    grid-row: 1/-1;\n  }\n  .file-info .file-details {\n    grid-column: details;\n    grid-row: 1/-1;\n  }\n  .file-info:has(.file-preview) .file-icon {\n    display: none !important;\n  }\n  .file-icon,\n  .file-preview {\n    flex-shrink: 0;\n  }\n  .file-preview {\n    inline-size: 2rem;\n    block-size: 2rem;\n    object-fit: cover;\n    border-radius: var(--radius-sm);\n    aspect-ratio: 1/1;\n    object-fit: cover;\n    object-position: center;\n  }\n  .file-details {\n    display: grid;\n    justify-self: start;\n    min-inline-size: fit-content;\n    inline-size: stretch;\n    max-inline-size: stretch;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    grid-template-columns: [name] minmax(0px, 1fr) [size] minmax(0px, max-content) [type] minmax(0px, max-content);\n    grid-template-rows: minmax(0px, 1fr);\n    gap: var(--space-xs);\n  }\n  .file-details .file-name {\n    grid-column: name;\n    grid-row: 1/-1;\n  }\n  .file-details .file-size {\n    grid-column: size;\n    grid-row: 1/-1;\n  }\n  .file-details .file-type {\n    grid-column: type;\n    grid-row: 1/-1;\n  }\n  .file-name {\n    font-size: var(--text-sm);\n    font-weight: 500;\n    color: var(--color-on-surface);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .file-size,\n  .file-type {\n    font-size: var(--text-xs);\n    color: var(--color-on-surface-variant);\n  }\n  .remove-btn {\n    background: var(--color-error-container);\n    color: var(--color-on-error-container);\n    border: none;\n    border-radius: var(--radius-sm);\n    padding: var(--space-xs);\n    cursor: pointer;\n    font-size: var(--text-sm);\n    line-height: 1;\n    flex-shrink: 0;\n  }\n  .remove-btn:hover {\n    background: var(--color-error);\n    color: var(--color-on-error);\n  }\n  .wc-attachments-toolbar {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: var(--space-sm) var(--space-md);\n    flex-wrap: wrap;\n  }\n  .file-actions {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    gap: var(--space-md);\n    inline-size: auto;\n    min-inline-size: max-content;\n    max-inline-size: 100%;\n    place-self: center;\n  }\n  .file-stats {\n    display: flex;\n    align-items: center;\n    gap: var(--space-sm);\n    flex-wrap: wrap;\n    padding: var(--space-sm);\n    background: var(--color-surface-container-high);\n    border-radius: var(--radius-sm);\n    border: 1px solid var(--color-outline-variant);\n    flex-grow: 1;\n    flex-direction: row;\n  }\n  .file-stats .file-counter,\n  .file-stats .data-counter {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--space-xs);\n    padding: var(--space-xs) var(--space-sm);\n    border-radius: var(--radius-md);\n    font-size: var(--text-sm);\n    font-weight: var(--font-weight-medium);\n    inline-size: max-content;\n  }\n  .file-stats .file-counter .count,\n  .file-stats .data-counter .count {\n    min-inline-size: 1ch;\n    text-align: center;\n  }\n  .file-stats .file-counter {\n    background: var(--color-surface-container-high);\n    color: var(--color-on-surface-variant);\n    border: 1px solid color-mix(in oklab, var(--color-outline-variant) 30%, transparent);\n    min-inline-size: calc-size(fit-content, max(size, 25px) + 0.5rem + var(--icon-size, 1rem));\n  }\n  .file-stats .file-counter ui-icon {\n    color: var(--color-primary);\n    opacity: 0.8;\n  }\n  .file-stats .file-counter .count {\n    font-weight: 600;\n    color: var(--color-primary);\n  }\n  .file-stats .file-counter .label {\n    font-size: var(--text-xs);\n  }\n  .file-stats .file-counter:has(.count:empty), .file-stats .file-counter:has(.count:not([data-count]):not(:has-text):not([data-count=\"0\"]):not(:has(.count:empty))) {\n    display: none;\n  }\n  .file-stats .data-counter {\n    min-inline-size: 1.5rem;\n  }\n  .file-stats .data-counter ui-icon {\n    font-size: var(--text-sm);\n  }\n  .file-stats .data-counter.recognized {\n    background: var(--color-secondary-container);\n    color: var(--color-on-secondary-container);\n    border: 1px solid var(--color-secondary);\n  }\n  .file-stats .data-counter.recognized ui-icon {\n    color: var(--color-on-secondary-container);\n  }\n  .file-stats .data-counter.processed {\n    background: var(--color-tertiary-container);\n    color: var(--color-on-tertiary-container);\n    border: 1px solid var(--color-tertiary);\n  }\n  .file-stats .data-counter.processed ui-icon {\n    color: var(--color-on-tertiary-container);\n  }\n  .wc-recognized-status {\n    display: flex;\n    align-items: center;\n    gap: var(--space-sm);\n    padding: var(--space-sm);\n    background: color-mix(in oklab, var(--color-tertiary) 10%, var(--color-surface-container-high));\n    border: 1px solid color-mix(in oklab, var(--color-tertiary) 30%, transparent);\n    border-radius: var(--radius-sm);\n    font-size: var(--text-sm);\n    color: var(--color-on-surface-variant);\n  }\n  .wc-recognized-status .status-icon {\n    color: var(--color-tertiary);\n    flex-shrink: 0;\n  }\n  .wc-recognized-status .clear-recognized {\n    margin-inline-start: auto;\n    background: var(--color-tertiary-container);\n    color: var(--color-on-tertiary-container);\n    border: none;\n    border-radius: var(--radius-sm);\n    padding: var(--space-xs) var(--space-sm);\n    font-size: var(--text-xs);\n    cursor: pointer;\n  }\n  .wc-recognized-status .clear-recognized:hover {\n    background: var(--color-tertiary);\n    color: var(--color-on-tertiary);\n  }\n}\n@layer view.workcenter.components {\n  .wc-output-section {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-md);\n    min-block-size: fit-content;\n    block-size: fit-content;\n    max-block-size: stretch;\n    overflow: hidden;\n    flex-shrink: 1;\n    flex-basis: fit-content;\n    flex-grow: 1;\n    place-content: center;\n    place-items: center;\n    justify-content: stretch;\n    align-content: stretch;\n  }\n  .wc-output-section > * {\n    inline-size: stretch;\n  }\n  .wc-output-content {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-md);\n    min-block-size: fit-content;\n    max-block-size: stretch;\n    block-size: min(10rem, 100%);\n    position: relative;\n    border-radius: var(--radius-md);\n    transition: all var(--motion-normal);\n    overflow: auto;\n    block-size: fit-content;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: fit-content;\n    contain: strict;\n    border: 1px solid var(--color-outline-variant);\n    border-radius: var(--radius-md);\n    padding: var(--space-md);\n    background: var(--color-surface-container-low);\n    color: var(--color-on-surface);\n    font-family: var(--font-family);\n    line-height: 1.6;\n    text-wrap: pretty;\n  }\n  .wc-output-content:has(.result-content) {\n    min-block-size: 10rem;\n  }\n  .wc-output-content[data-dropzone] {\n    min-block-size: 6rem;\n    padding: var(--space-md);\n    background: var(--color-surface-container-low);\n    border: 2px dashed color-mix(in oklab, var(--color-outline-variant) 30%, transparent);\n  }\n  .wc-output-content[data-dropzone]:has(.result-content) {\n    min-block-size: 10rem;\n    border-style: solid;\n    border-color: var(--color-outline-variant);\n  }\n  .wc-output-content[data-dropzone]:hover {\n    border-color: color-mix(in oklab, var(--color-primary) 40%, transparent);\n    background: color-mix(in oklab, var(--color-primary) 5%, var(--color-surface-container-low));\n  }\n  .wc-output-content[data-dropzone].drag-over {\n    border-color: var(--color-primary);\n    background: color-mix(in oklab, var(--color-primary) 10%, var(--color-surface-container-low));\n    box-shadow: var(--focus-ring);\n  }\n  .wc-output-content[data-dropzone].drag-over::before {\n    content: \"\";\n    position: absolute;\n    inset: 0;\n    background: linear-gradient(45deg, color-mix(in oklab, var(--color-primary) 5%, transparent) 25%, transparent 25%, transparent 50%, color-mix(in oklab, var(--color-primary) 5%, transparent) 50%, color-mix(in oklab, var(--color-primary) 5%, transparent) 75%, transparent 75%);\n    background-size: 20px 20px;\n    border-radius: inherit;\n    pointer-events: none;\n    z-index: 1;\n  }\n  .wc-output-content[data-dropzone].drag-over > * {\n    position: relative;\n    z-index: 2;\n  }\n  .wc-output-actions,\n  .pipeline-actions,\n  .step-actions,\n  .history-section .result-actions {\n    display: flex;\n    align-items: center;\n    gap: var(--space-xs);\n  }\n  .wc-output-actions .btn,\n  .pipeline-actions .btn {\n    padding: var(--space-xs) var(--space-sm);\n    font-size: var(--text-sm);\n    min-inline-size: auto;\n  }\n  .results-tabs-header {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    flex-wrap: nowrap;\n    gap: var(--space-sm);\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .results-tabs-header h3 {\n    margin: 0;\n    font-size: var(--text-lg);\n    font-weight: 600;\n    color: var(--color-on-surface);\n    white-space: nowrap;\n  }\n  .results-tab-actions {\n    margin-inline-start: var(--space-sm);\n  }\n  .wc-output-header {\n    display: flex;\n    justify-content: flex-end;\n    margin-inline-start: auto;\n  }\n  .step-actions {\n    margin-block-start: var(--space-xs);\n  }\n  .step-actions .btn {\n    padding: var(--space-xs) var(--space-sm);\n    font-size: var(--text-xs);\n    min-inline-size: auto;\n  }\n  .history-section {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-sm);\n    block-size: fit-content;\n    flex-grow: 1;\n    flex-shrink: 1;\n    flex-basis: fit-content;\n    max-block-size: stretch;\n  }\n  .history-section .result-actions .btn {\n    padding: var(--space-xs) var(--space-sm);\n    font-size: var(--text-xs);\n    min-inline-size: auto;\n  }\n  .result-content {\n    padding: var(--space-md);\n    background: var(--color-surface-container-high);\n    border-radius: var(--radius-md);\n    font-family: var(--font-family);\n    line-height: 1.6;\n    color: var(--color-on-surface);\n    overflow-wrap: break-word;\n    word-wrap: break-word;\n  }\n  .result-content pre {\n    background: var(--color-surface-container-low);\n    border: 1px solid var(--color-outline);\n    border-radius: var(--radius-sm);\n    padding: var(--space-sm);\n    overflow-x: auto;\n    font-family: var(--font-family-mono);\n    font-size: var(--text-sm);\n    line-height: 1.4;\n    margin: var(--space-sm) 0;\n  }\n  .result-content pre code {\n    background: transparent;\n    padding: 0;\n    border: none;\n    border-radius: 0;\n    font-size: inherit;\n  }\n  .result-content code {\n    background: var(--color-surface-container-low);\n    border: 1px solid var(--color-outline);\n    border-radius: var(--radius-sm);\n    padding: 0.125em 0.25em;\n    font-family: var(--font-family-mono);\n    font-size: 0.875em;\n    color: var(--color-on-surface);\n  }\n  .result-content .katex {\n    font-size: 1em;\n  }\n  .result-content .katex-display {\n    margin: var(--space-md) 0;\n    text-align: center;\n  }\n  .result-content table {\n    inline-size: 100%;\n    border-collapse: collapse;\n    margin: var(--space-md) 0;\n    background: var(--color-surface-container-high);\n    border: 1px solid var(--color-outline);\n    border-radius: var(--radius-md);\n    overflow: hidden;\n  }\n  .result-content table th,\n  .result-content table td {\n    padding: var(--space-sm);\n    text-align: start;\n    border-block-end: 1px solid var(--color-outline);\n    border-inline-end: 1px solid var(--color-outline);\n  }\n  .result-content table th:last-child,\n  .result-content table td:last-child {\n    border-inline-end: none;\n  }\n  .result-content table th {\n    background: var(--color-surface-container-low);\n    font-weight: 600;\n    color: var(--color-on-surface);\n  }\n  .result-content table tr:last-child td {\n    border-block-end: none;\n  }\n  .result-content ul,\n  .result-content ol {\n    padding-inline-start: var(--space-lg);\n    margin: var(--space-sm) 0;\n  }\n  .result-content ul li,\n  .result-content ol li {\n    margin: var(--space-xs) 0;\n    line-height: 1.6;\n  }\n  .result-content blockquote {\n    margin: var(--space-md) 0;\n    padding: var(--space-sm) var(--space-md);\n    border-inline-start: 4px solid var(--color-primary);\n    background: color-mix(in oklab, var(--color-primary) 5%, var(--color-surface-container-low));\n    border-radius: 0 var(--radius-sm) var(--radius-sm) 0;\n    color: var(--color-on-surface-variant);\n    font-style: italic;\n  }\n  .result-content a {\n    color: var(--color-primary);\n    text-decoration: underline;\n  }\n  .result-content a:hover {\n    color: var(--color-primary-container);\n    background: color-mix(in oklab, var(--color-primary) 10%, transparent);\n  }\n  .result-content a:focus {\n    outline: 2px solid var(--color-primary);\n    outline-offset: 2px;\n  }\n  .result-content img {\n    max-inline-size: 100%;\n    block-size: auto;\n    border-radius: var(--radius-sm);\n    margin: var(--space-sm) 0;\n  }\n  .result-content h1,\n  .result-content h2,\n  .result-content h3,\n  .result-content h4,\n  .result-content h5,\n  .result-content h6 {\n    margin: var(--space-lg) 0 var(--space-sm);\n    line-height: 1.3;\n    color: var(--color-on-surface);\n  }\n  .result-content h1:first-child,\n  .result-content h2:first-child,\n  .result-content h3:first-child,\n  .result-content h4:first-child,\n  .result-content h5:first-child,\n  .result-content h6:first-child {\n    margin-block-start: 0;\n  }\n  .result-content h1 {\n    font-size: var(--text-3xl);\n    font-weight: 700;\n  }\n  .result-content h2 {\n    font-size: var(--text-2xl);\n    font-weight: 600;\n  }\n  .result-content h3 {\n    font-size: var(--text-xl);\n    font-weight: 600;\n  }\n  .result-content h4 {\n    font-size: var(--text-lg);\n    font-weight: 600;\n  }\n  .result-content h5 {\n    font-size: var(--text-base);\n    font-weight: 600;\n  }\n  .result-content h6 {\n    font-size: var(--text-sm);\n    font-weight: 600;\n  }\n  .result-content p {\n    margin: var(--space-sm) 0;\n  }\n  .result-content p:first-child {\n    margin-block-start: 0;\n  }\n  .result-content p:last-child {\n    margin-block-end: 0;\n  }\n  .result-content hr {\n    border: none;\n    border-block-start: 1px solid var(--color-outline);\n    margin: var(--space-lg) 0;\n  }\n  .code-result,\n  .raw-result {\n    margin: 0;\n    padding: var(--space-md);\n    border-radius: var(--radius-md);\n    border: 1px solid var(--color-outline-variant);\n    background: var(--color-surface-container-low);\n    color: var(--color-on-surface);\n    overflow: auto;\n    font-family: var(--font-family-mono);\n    font-size: var(--text-sm);\n    line-height: 1.5;\n    white-space: pre;\n    min-block-size: calc-size(fit-content, min(size, 100%));\n    block-size: max-content;\n    max-block-size: calc-size(max-content, min(size, 100%));\n    scrollbar-width: thin;\n    scrollbar-color: var(--color-outline-variant) transparent;\n    overflow-x: auto;\n    overflow-y: auto;\n    inline-size: stretch;\n    max-inline-size: stretch;\n    min-inline-size: calc-size(fit-content, min(size, 100%));\n  }\n  .data-pipeline-section {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-sm);\n    min-block-size: calc-size(fit-content, min(size, 100%));\n    block-size: stretch;\n    max-block-size: stretch;\n    container-type: size;\n    contain: strict;\n    overflow-x: hidden;\n    overflow-y: auto;\n    scrollbar-width: thin;\n    scrollbar-color: var(--color-outline-variant) transparent;\n  }\n  .pipeline-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: var(--space-sm);\n    margin-block-end: var(--space-sm);\n    overflow: hidden;\n    text-overflow: ellipsis;\n    block-size: max-content;\n    max-block-size: fit-content;\n    min-block-size: calc-size(fit-content, min(size, 100%));\n    inline-size: stretch;\n  }\n  .pipeline-header h3 {\n    margin: 0;\n    font-size: var(--text-base);\n    font-weight: 600;\n    color: var(--color-on-surface);\n  }\n  .pipeline-content {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-sm);\n    block-size: max-content;\n    max-block-size: fit-content;\n    min-block-size: calc-size(fit-content, min(size, 100%));\n    inline-size: stretch;\n    overflow: hidden;\n  }\n  .pipeline-actions {\n    justify-content: flex-end;\n  }\n  .pipeline-steps {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-md);\n    block-size: max-content;\n    max-block-size: fit-content;\n    min-block-size: calc-size(fit-content, min(size, 100%));\n    inline-size: stretch;\n    overflow: hidden;\n    block-size: max-content;\n    max-block-size: fit-content;\n    min-block-size: calc-size(fit-content, min(size, 100%));\n    inline-size: stretch;\n  }\n  .pipeline-step {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-sm);\n    block-size: max-content;\n    max-block-size: fit-content;\n    min-block-size: calc-size(fit-content, min(size, 100%));\n    inline-size: stretch;\n    padding: var(--space-sm);\n    background: var(--color-surface-container-high);\n    border: 1px solid var(--color-outline-variant);\n    border-radius: var(--radius-md);\n    transition: all var(--motion-fast);\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n  .pipeline-step:hover {\n    background: var(--color-surface-container-highest);\n    border-color: var(--color-primary);\n  }\n  .pipeline-step.recognized-step {\n    border-color: var(--color-secondary);\n    background: color-mix(in oklab, var(--color-secondary) 5%, var(--color-surface-container-high));\n  }\n  .pipeline-step.processed-step {\n    border-color: var(--color-tertiary);\n    background: color-mix(in oklab, var(--color-tertiary) 5%, var(--color-surface-container-high));\n  }\n  .step-header {\n    display: flex;\n    align-items: center;\n    gap: var(--space-sm);\n    flex-wrap: wrap;\n  }\n  .step-icon {\n    flex-shrink: 0;\n    color: var(--color-primary);\n  }\n  .step-title {\n    flex: 1;\n    font-size: var(--text-sm);\n    font-weight: 600;\n    color: var(--color-on-surface);\n  }\n  .step-time,\n  .step-source,\n  .step-format {\n    font-size: var(--text-xs);\n    color: var(--color-on-surface-variant);\n  }\n  .step-content {\n    padding-inline-start: var(--space-lg);\n    border-inline-start: 2px solid var(--color-outline);\n  }\n  .step-preview {\n    font-size: var(--text-sm);\n    color: var(--color-on-surface-variant);\n    line-height: 1.4;\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .history-header {\n    display: grid;\n    grid-template-columns: 1fr max-content;\n    align-items: center;\n    gap: var(--space-md);\n    padding: var(--space-sm) var(--space-md);\n    background: var(--color-surface-container-high);\n    border-radius: var(--radius-md);\n    max-block-size: stretch;\n  }\n  .history-header h4 {\n    margin: 0;\n    font-size: var(--text-base);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-on-surface);\n    letter-spacing: -0.01em;\n  }\n  .recent-history {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-xs);\n    max-block-size: min(300px, 100%);\n    overflow-y: auto;\n    max-block-size: stretch;\n  }\n  .history-item-compact {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: var(--space-sm);\n    padding: var(--space-sm);\n    background: var(--color-surface-container-high);\n    border: 1px solid var(--color-outline-variant);\n    border-radius: var(--radius-sm);\n    transition: all var(--motion-fast);\n    max-block-size: stretch;\n  }\n  .history-item-compact:hover {\n    background: var(--color-surface-container-highest);\n    border-color: var(--color-primary);\n  }\n  .history-meta {\n    display: flex;\n    align-items: center;\n    gap: var(--space-sm);\n    flex: 1;\n    min-inline-size: 0;\n    max-block-size: stretch;\n  }\n  .history-status {\n    flex-shrink: 0;\n    font-size: var(--text-sm);\n    font-weight: 600;\n    max-block-size: stretch;\n  }\n  .history-status.success {\n    color: var(--color-tertiary);\n  }\n  .history-status.error {\n    color: var(--color-error);\n  }\n  .history-prompt {\n    flex: 1;\n    font-size: var(--text-sm);\n    color: var(--color-on-surface);\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-block-size: stretch;\n  }\n  .history-time {\n    flex-shrink: 0;\n    font-size: var(--text-xs);\n    color: var(--color-on-surface-variant);\n    max-block-size: stretch;\n  }\n  .wc-loading {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--space-sm);\n    padding: var(--space-xl);\n    color: var(--color-on-surface-variant);\n    font-size: var(--text-base);\n  }\n  .wc-loading::before {\n    content: \"\";\n    inline-size: 20px;\n    block-size: 20px;\n    border: 2px solid var(--color-primary);\n    border-block-start-color: transparent;\n    border-radius: 50%;\n    animation: workcenter-spin 1s linear infinite;\n  }\n  .error {\n    padding: var(--space-md);\n    background: color-mix(in oklab, var(--color-error) 10%, var(--color-surface-container-high));\n    border: 1px solid var(--color-error);\n    border-radius: var(--radius-md);\n    color: var(--color-error);\n    font-size: var(--text-sm);\n  }\n  .wc-results-empty,\n  .wc-attachments-empty,\n  .wc-history-empty {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: var(--space-lg);\n    color: var(--color-on-surface-variant);\n    font-size: var(--text-sm);\n    font-style: italic;\n  }\n  .wc-results-empty {\n    padding: var(--space-xl);\n    font-size: var(--text-base);\n  }\n  @container (max-inline-size: 768px) {\n    .results-tabs-header h3 {\n      display: none;\n    }\n    .results-tab-actions {\n      margin-inline-start: 0;\n      inline-size: auto;\n    }\n    .results-tab-actions .tab-btn {\n      flex: initial;\n    }\n    .result-content {\n      padding: var(--space-sm);\n    }\n    .step-header {\n      flex-direction: column;\n      align-items: flex-start;\n      gap: var(--space-xs);\n    }\n    .history-header h4 {\n      font-size: var(--text-sm);\n    }\n  }\n}\n@layer view.workcenter.components {\n  .action-history-modal,\n  .action-details-modal,\n  .template-editor-modal {\n    position: fixed;\n    inset: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 1000;\n    padding: var(--space-md);\n  }\n  .action-history-modal,\n  .action-details-modal {\n    background: rgba(0, 0, 0, 0.5);\n  }\n  .template-editor-modal {\n    background: color-mix(in oklab, black 40%, transparent);\n    backdrop-filter: blur(4px);\n    animation: workcenter-fade-in var(--motion-fast) ease;\n  }\n  .action-history-modal .modal-content,\n  .action-details-modal .modal-content,\n  .template-editor-modal .modal-content {\n    background: var(--color-surface-container-high);\n    border-radius: var(--radius-lg);\n    box-shadow: var(--elev-4);\n    max-block-size: 80vh;\n    inline-size: 100%;\n    overflow: hidden;\n    display: flex;\n    flex-direction: column;\n  }\n  .action-history-modal .modal-content,\n  .action-details-modal .modal-content {\n    max-inline-size: 90vw;\n  }\n  .action-history-modal .modal-header,\n  .action-details-modal .modal-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: var(--space-lg);\n    border-block-end: 1px solid var(--color-outline-variant);\n    background: var(--color-surface-container-low);\n  }\n  .action-history-modal .modal-header h3,\n  .action-details-modal .modal-header h3 {\n    margin: 0;\n    font-size: var(--text-lg);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-on-surface);\n  }\n  .action-history-modal .modal-header .modal-actions,\n  .action-details-modal .modal-header .modal-actions {\n    display: flex;\n    align-items: center;\n    gap: var(--space-sm);\n  }\n  .action-history-modal .modal-body,\n  .action-details-modal .modal-body {\n    flex: 1;\n    overflow-y: auto;\n    padding: var(--space-lg);\n  }\n  @container (max-inline-size: 768px) {\n    .action-history-modal .modal-content,\n    .action-details-modal .modal-content {\n      max-block-size: 90vh;\n      max-inline-size: 95vw;\n    }\n  }\n  .template-editor-modal .modal-content {\n    max-inline-size: 640px;\n    padding: var(--space-xl);\n    animation: workcenter-slide-in-up var(--motion-normal) ease;\n  }\n  @container (max-inline-size: 768px) {\n    .template-editor-modal .modal-content {\n      max-block-size: 90vh;\n      max-inline-size: 95vw;\n      padding: var(--space-lg);\n    }\n  }\n  .template-editor-modal .modal-content .modal-header {\n    display: grid;\n    gap: var(--space-xs);\n    margin-block-end: var(--space-lg);\n  }\n  .template-editor-modal .modal-content .modal-header h3 {\n    margin: 0;\n    font-size: var(--text-lg);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-on-surface);\n  }\n  .template-editor-modal .modal-content .modal-header .modal-desc {\n    margin: 0;\n    font-size: var(--text-xs);\n    color: var(--color-on-surface-variant);\n    opacity: 0.85;\n    line-height: 1.5;\n  }\n  .template-editor-modal .modal-content > h3 {\n    margin: 0 0 var(--space-lg) 0;\n    font-size: var(--text-lg);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-on-surface);\n  }\n  .template-editor-modal .modal-content .template-list {\n    flex: 1;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-md);\n    scrollbar-width: thin;\n    scrollbar-color: var(--color-outline-variant) transparent;\n  }\n  .template-editor-modal .modal-content .template-list .template-item {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-sm);\n    padding: var(--space-md);\n    background: var(--color-surface-container);\n    border-radius: var(--radius-md);\n    border: 1px solid var(--color-outline-variant);\n    transition: border-color var(--motion-fast);\n  }\n  .template-editor-modal .modal-content .template-list .template-item:hover {\n    border-color: var(--color-primary);\n  }\n  .template-editor-modal .modal-content .template-list .template-item .template-item-header {\n    display: flex;\n    align-items: center;\n    gap: var(--space-sm);\n  }\n  .template-editor-modal .modal-content .template-list .template-item input,\n  .template-editor-modal .modal-content .template-list .template-item textarea {\n    padding: var(--space-sm);\n    border: 1px solid var(--color-outline);\n    border-radius: var(--radius-sm);\n    background: var(--color-surface);\n    color: var(--color-on-surface);\n    font-family: inherit;\n    font-size: var(--text-sm);\n    transition: border-color var(--motion-fast);\n  }\n  .template-editor-modal .modal-content .template-list .template-item input:focus,\n  .template-editor-modal .modal-content .template-list .template-item textarea:focus {\n    outline: none;\n    border-color: var(--color-primary);\n    box-shadow: 0 0 0 2px color-mix(in oklab, var(--color-primary) 20%, transparent);\n  }\n  .template-editor-modal .modal-content .template-list .template-item input::placeholder,\n  .template-editor-modal .modal-content .template-list .template-item textarea::placeholder {\n    color: var(--color-on-surface-variant);\n    opacity: 0.6;\n  }\n  .template-editor-modal .modal-content .template-list .template-item input {\n    font-weight: var(--font-weight-medium);\n    flex: 1;\n  }\n  .template-editor-modal .modal-content .template-list .template-item textarea {\n    resize: vertical;\n    min-block-size: 80px;\n    font-family: var(--font-family-mono);\n    line-height: 1.5;\n  }\n  .template-editor-modal .modal-content .template-list .template-item .remove-template {\n    flex-shrink: 0;\n    padding: var(--space-xs);\n    min-inline-size: 28px;\n    min-block-size: 28px;\n    background: transparent;\n    border: 1px solid var(--color-outline-variant);\n    border-radius: var(--radius-sm);\n    color: var(--color-on-surface-variant);\n    font-size: var(--text-sm);\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: all var(--motion-fast);\n  }\n  .template-editor-modal .modal-content .template-list .template-item .remove-template:hover {\n    background: color-mix(in oklab, var(--color-error) 12%, transparent);\n    border-color: var(--color-error);\n    color: var(--color-error);\n  }\n  .template-editor-modal .modal-content .modal-actions {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: var(--space-sm);\n    padding-block-start: var(--space-lg);\n    border-block-start: 1px solid var(--color-outline-variant);\n    block-size: max-content;\n    max-block-size: stretch;\n  }\n  .template-editor-modal .modal-content .modal-actions .modal-actions-group {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    gap: var(--space-sm);\n    max-block-size: stretch;\n    block-size: max-content;\n  }\n  .template-editor-modal .modal-content .modal-actions .modal-actions-group-start {\n    flex: 1 1 320px;\n    max-block-size: max-content;\n    block-size: max-content;\n  }\n  .template-editor-modal .modal-content .modal-actions .modal-actions-group-end {\n    justify-content: flex-end;\n  }\n  .template-editor-modal .modal-content .modal-actions .btn {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--space-xs);\n    min-block-size: 2.25rem;\n    line-height: 1;\n    white-space: nowrap;\n    padding: var(--space-sm) var(--space-lg);\n    border-radius: var(--radius-md);\n    font-size: var(--text-sm);\n    font-weight: var(--font-weight-medium);\n    cursor: pointer;\n    transition: all var(--motion-fast);\n  }\n  .template-editor-modal .modal-content .modal-actions .btn.primary {\n    background: var(--color-primary);\n    color: var(--color-on-primary);\n    border: 1px solid var(--color-primary);\n  }\n  .template-editor-modal .modal-content .modal-actions .btn.primary:hover {\n    background: color-mix(in oklab, var(--color-primary) 90%, black);\n  }\n  .template-editor-modal .modal-content .modal-actions .btn:not(.primary) {\n    background: var(--color-surface-container);\n    color: var(--color-on-surface);\n    border: 1px solid var(--color-outline);\n  }\n  .template-editor-modal .modal-content .modal-actions .btn:not(.primary):hover {\n    background: var(--color-surface-container-high);\n  }\n  @container (max-inline-size: 560px) {\n    .template-editor-modal .modal-content .modal-actions {\n      flex-direction: column;\n      align-items: stretch;\n    }\n    .template-editor-modal .modal-content .modal-actions .modal-actions-group {\n      inline-size: 100%;\n    }\n    .template-editor-modal .modal-content .modal-actions .btn {\n      flex: 1 1 calc(50% - var(--space-sm));\n    }\n  }\n  .action-history-modal .history-stats {\n    display: flex;\n    gap: var(--space-md);\n    margin-block-end: var(--space-lg);\n  }\n  @container (max-inline-size: 768px) {\n    .action-history-modal .history-stats {\n      flex-direction: column;\n      gap: var(--space-sm);\n    }\n  }\n  .action-history-modal .history-stats .stat-card {\n    flex: 1;\n    padding: var(--space-md);\n    background: var(--color-surface-container);\n    border-radius: var(--radius-md);\n    text-align: center;\n    border: 1px solid var(--color-outline-variant);\n  }\n  .action-history-modal .history-stats .stat-card .stat-value {\n    display: block;\n    font-size: var(--text-2xl);\n    font-weight: var(--font-weight-bold);\n    color: var(--color-on-surface);\n    margin-block-end: var(--space-xs);\n  }\n  .action-history-modal .history-stats .stat-card .stat-value.success {\n    color: var(--color-success);\n  }\n  .action-history-modal .history-stats .stat-card .stat-value.error {\n    color: var(--color-error);\n  }\n  .action-history-modal .history-stats .stat-card .stat-label {\n    font-size: var(--text-sm);\n    color: var(--color-on-surface-variant);\n    font-weight: var(--font-weight-medium);\n  }\n  .action-history-modal .history-filters {\n    display: flex;\n    gap: var(--space-md);\n    margin-block-end: var(--space-lg);\n  }\n  @container (max-inline-size: 768px) {\n    .action-history-modal .history-filters {\n      flex-direction: column;\n      gap: var(--space-sm);\n    }\n  }\n  .action-history-modal .history-filters .filter-select {\n    appearance: none;\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    padding-block: var(--space-sm);\n    padding-inline: var(--space-sm) 2rem;\n    border: 1px solid var(--color-outline);\n    border-radius: var(--radius-md);\n    background-color: var(--color-surface-container);\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none'%3E%3Cpath stroke='%2394a3b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='m6 9 6 6 6-6'/%3E%3C/svg%3E\");\n    background-repeat: no-repeat;\n    background-position: right var(--space-sm) center;\n    background-size: 1rem 1rem;\n    color: var(--color-on-surface);\n    font-size: var(--text-sm);\n    cursor: pointer;\n  }\n  .action-history-modal .history-filters .filter-select:focus {\n    outline: none;\n    border-color: var(--color-primary);\n  }\n  .action-history-modal .action-history-list {\n    flex: 1;\n    overflow-y: auto;\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-sm);\n  }\n  .action-history-modal .action-history-list .wc-history-empty {\n    text-align: center;\n    padding: var(--space-xl);\n    color: var(--color-on-surface-variant);\n    font-style: italic;\n  }\n  .action-history-modal .action-history-list .action-history-item {\n    padding: var(--space-md);\n    background: var(--color-surface-container);\n    border-radius: var(--radius-md);\n    border: 1px solid var(--color-outline-variant);\n    transition: all var(--motion-fast);\n  }\n  .action-history-modal .action-history-list .action-history-item:hover {\n    background: var(--color-surface-container-high);\n    box-shadow: var(--elev-1);\n  }\n  .action-history-modal .action-history-list .action-history-item.completed {\n    border-color: var(--color-success);\n  }\n  .action-history-modal .action-history-list .action-history-item.failed {\n    border-color: var(--color-error);\n  }\n  .action-history-modal .action-history-list .action-history-item.processing {\n    border-color: var(--color-primary);\n    animation: workcenter-pulse 2s infinite;\n  }\n  .action-history-modal .action-history-list .action-history-item .action-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    margin-block-end: var(--space-sm);\n    gap: var(--space-sm);\n  }\n  @container (max-inline-size: 768px) {\n    .action-history-modal .action-history-list .action-history-item .action-header {\n      flex-direction: column;\n      align-items: stretch;\n    }\n  }\n  .action-history-modal .action-history-list .action-history-item .action-header .action-meta {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-xs);\n  }\n  .action-history-modal .action-history-list .action-history-item .action-header .action-meta .action-status {\n    display: inline-flex;\n    align-items: center;\n    gap: var(--space-xs);\n    font-size: var(--text-sm);\n    font-weight: var(--font-weight-medium);\n  }\n  .action-history-modal .action-history-list .action-history-item .action-header .action-meta .action-status::before {\n    content: \"\";\n    inline-size: 8px;\n    block-size: 8px;\n    border-radius: 50%;\n  }\n  .completed .action-history-modal .action-history-list .action-history-item .action-header .action-meta .action-status::before {\n    background: var(--color-success);\n  }\n  .failed .action-history-modal .action-history-list .action-history-item .action-header .action-meta .action-status::before {\n    background: var(--color-error);\n  }\n  .processing .action-history-modal .action-history-list .action-history-item .action-header .action-meta .action-status::before {\n    background: var(--color-primary);\n    animation: workcenter-blink 1s infinite;\n  }\n  .action-history-modal .action-history-list .action-history-item .action-header .action-meta .action-type {\n    font-size: var(--text-sm);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-on-surface);\n  }\n  .action-history-modal .action-history-list .action-history-item .action-header .action-meta .action-time {\n    font-size: var(--text-xs);\n    color: var(--color-on-surface-variant);\n  }\n  .action-history-modal .action-history-list .action-history-item .action-header .action-meta .action-duration {\n    font-size: var(--text-xs);\n    color: var(--color-primary);\n    font-weight: var(--font-weight-medium);\n  }\n  .action-history-modal .action-history-list .action-history-item .action-header .action-actions {\n    display: flex;\n    gap: var(--space-xs);\n    flex-shrink: 0;\n  }\n  .action-history-modal .action-history-list .action-history-item .action-header .action-actions .btn {\n    padding: var(--space-xs) var(--space-sm);\n    font-size: var(--text-xs);\n  }\n  .action-history-modal .action-history-list .action-history-item .action-content {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-sm);\n  }\n  .action-history-modal .action-history-list .action-history-item .action-content .input-preview,\n  .action-history-modal .action-history-list .action-history-item .action-content .result-preview {\n    font-size: var(--text-sm);\n  }\n  .action-history-modal .action-history-list .action-history-item .action-content .input-preview strong,\n  .action-history-modal .action-history-list .action-history-item .action-content .result-preview strong {\n    color: var(--color-on-surface);\n    font-weight: var(--font-weight-semibold);\n  }\n  .action-history-modal .action-history-list .action-history-item .action-content .input-preview .result-content,\n  .action-history-modal .action-history-list .action-history-item .action-content .result-preview .result-content {\n    margin-block-start: var(--space-xs);\n    padding: var(--space-sm);\n    background: var(--color-surface);\n    border-radius: var(--radius-sm);\n    font-family: var(--font-family-mono);\n    font-size: var(--text-xs);\n    color: var(--color-on-surface);\n    max-block-size: 200px;\n    overflow-y: auto;\n  }\n  .action-history-modal .action-history-list .action-history-item .action-content .error-preview {\n    font-size: var(--text-sm);\n    color: var(--color-error);\n    background: color-mix(in oklab, var(--color-error) 10%, transparent);\n    padding: var(--space-sm);\n    border-radius: var(--radius-sm);\n    border: 1px solid color-mix(in oklab, var(--color-error) 30%, transparent);\n  }\n  .action-history-modal .action-history-list .action-history-item .action-content .error-preview strong {\n    color: var(--color-error);\n  }\n  .action-details-modal .details-grid {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    gap: var(--space-md);\n    margin-block-end: var(--space-lg);\n  }\n  @container (max-inline-size: 768px) {\n    .action-details-modal .details-grid {\n      grid-template-columns: 1fr;\n      gap: var(--space-sm);\n    }\n  }\n  .action-details-modal .details-grid .detail-item {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-xs);\n  }\n  .action-details-modal .details-grid .detail-item label {\n    font-size: var(--text-sm);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-on-surface);\n  }\n  .action-details-modal .details-grid .detail-item span {\n    font-size: var(--text-sm);\n    color: var(--color-on-surface-variant);\n    font-family: var(--font-family-mono);\n  }\n  .action-details-modal .details-grid .detail-item span.status-completed {\n    color: var(--color-success);\n  }\n  .action-details-modal .details-grid .detail-item span.status-failed {\n    color: var(--color-error);\n  }\n  .action-details-modal .details-grid .detail-item span.status-processing {\n    color: var(--color-primary);\n  }\n  .action-details-modal .details-section {\n    margin-block-end: var(--space-lg);\n  }\n  .action-details-modal .details-section:last-child {\n    margin-block-end: 0;\n  }\n  .action-details-modal .details-section h4 {\n    margin: 0 0 var(--space-md) 0;\n    font-size: var(--text-base);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-on-surface);\n  }\n  .action-details-modal .details-section .input-details,\n  .action-details-modal .details-section .result-details {\n    font-size: var(--text-sm);\n    color: var(--color-on-surface-variant);\n    line-height: 1.5;\n  }\n  .action-details-modal .details-section .error-details {\n    background: color-mix(in oklab, var(--color-error) 10%, transparent);\n    border: 1px solid color-mix(in oklab, var(--color-error) 30%, transparent);\n    border-radius: var(--radius-md);\n    padding: var(--space-md);\n    color: var(--color-error);\n    font-family: var(--font-family-mono);\n    font-size: var(--text-sm);\n  }\n  .history-section .history-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-block-end: var(--space-md);\n  }\n  .history-section .history-header h3 {\n    margin: 0;\n    font-size: var(--text-lg);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-on-surface);\n  }\n  .history-section .history-header .history-actions {\n    display: flex;\n    align-items: center;\n    gap: var(--space-sm);\n  }\n  .history-section .recent-history {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-sm);\n    margin-block-end: var(--space-md);\n  }\n  .history-section .recent-history .wc-history-empty {\n    text-align: center;\n    padding: var(--space-lg);\n    color: var(--color-on-surface-variant);\n    font-style: italic;\n  }\n  .history-section .recent-history .history-item-compact {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: var(--space-sm) var(--space-md);\n    background: var(--color-surface-container);\n    border-radius: var(--radius-md);\n    border: 1px solid var(--color-outline-variant);\n    transition: all var(--motion-fast);\n  }\n  .history-section .recent-history .history-item-compact:hover {\n    background: var(--color-surface-container-high);\n  }\n  .history-section .recent-history .history-item-compact .history-meta {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    gap: var(--space-sm);\n  }\n  .history-section .recent-history .history-item-compact .history-meta .history-status {\n    font-size: var(--text-sm);\n    font-weight: var(--font-weight-medium);\n    color: var(--color-success);\n  }\n  .history-section .recent-history .history-item-compact .history-meta .history-prompt {\n    font-size: var(--text-sm);\n    color: var(--color-on-surface);\n    flex: 1;\n  }\n  .history-section .recent-history .history-item-compact .history-meta .history-time {\n    font-size: var(--text-xs);\n    color: var(--color-on-surface-variant);\n    font-weight: var(--font-weight-medium);\n  }\n  .history-section .recent-history .history-item-compact .btn {\n    padding: var(--space-xs) var(--space-sm);\n    font-size: var(--text-xs);\n  }\n  .history-section .action-stats {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));\n    gap: var(--space-sm);\n  }\n  .history-section .action-stats .stats-item {\n    padding: var(--space-sm);\n    background: var(--color-surface-container);\n    border-radius: var(--radius-md);\n    text-align: center;\n    border: 1px solid var(--color-outline-variant);\n  }\n  .history-section .action-stats .stats-item:first-child {\n    background: var(--color-primary-container);\n    color: var(--color-on-primary-container);\n    border-color: var(--color-primary);\n  }\n  .data-pipeline-section {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-sm);\n    min-block-size: calc-size(fit-content, min(size, 100%));\n    block-size: stretch;\n    max-block-size: stretch;\n    margin-block-start: var(--space-lg);\n    padding: var(--space-lg);\n    background: var(--color-surface-container);\n    border-radius: var(--radius-lg);\n    border: 1px solid var(--color-outline-variant);\n    container-type: size;\n    contain: strict;\n    overflow-x: hidden;\n    overflow-y: auto;\n    scrollbar-width: thin;\n    scrollbar-color: var(--color-outline-variant) transparent;\n  }\n  .data-pipeline-section .pipeline-header {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-block-end: var(--space-lg);\n  }\n  .data-pipeline-section .pipeline-header h3 {\n    margin: 0;\n    font-size: var(--text-lg);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-on-surface);\n  }\n  .data-pipeline-section .pipeline-header .pipeline-actions {\n    display: flex;\n    align-items: center;\n    gap: var(--space-sm);\n  }\n  .data-pipeline-section .pipeline-steps {\n    display: flex;\n    flex-direction: column;\n    gap: var(--space-md);\n    block-size: max-content;\n    max-block-size: fit-content;\n    min-block-size: calc-size(fit-content, min(size, 100%));\n    inline-size: stretch;\n    overflow: hidden;\n  }\n  .data-pipeline-section .pipeline-steps .pipeline-step {\n    padding: var(--space-md);\n    background: var(--color-surface-container-low);\n    border-radius: var(--radius-md);\n    border: 1px solid var(--color-outline-variant);\n    overflow: hidden;\n    text-overflow: ellipsis;\n    block-size: max-content;\n    max-block-size: fit-content;\n    min-block-size: calc-size(fit-content, min(size, 100%));\n    inline-size: stretch;\n  }\n  .data-pipeline-section .pipeline-steps .pipeline-step.recognized-step {\n    border-color: var(--color-secondary);\n    background: var(--color-secondary-container);\n  }\n  .data-pipeline-section .pipeline-steps .pipeline-step.processed-step {\n    border-color: var(--color-tertiary);\n    background: var(--color-tertiary-container);\n  }\n  .data-pipeline-section .pipeline-steps .pipeline-step .step-header {\n    display: flex;\n    align-items: center;\n    gap: var(--space-sm);\n    margin-block-end: var(--space-sm);\n  }\n  .data-pipeline-section .pipeline-steps .pipeline-step .step-header ui-icon {\n    flex-shrink: 0;\n    color: var(--color-on-surface-variant);\n  }\n  .data-pipeline-section .pipeline-steps .pipeline-step .step-header .step-title {\n    font-size: var(--text-sm);\n    font-weight: var(--font-weight-semibold);\n    color: var(--color-on-surface);\n    flex: 1;\n  }\n  .data-pipeline-section .pipeline-steps .pipeline-step .step-header .step-time {\n    font-size: var(--text-xs);\n    color: var(--color-on-surface-variant);\n  }\n  .data-pipeline-section .pipeline-steps .pipeline-step .step-header .step-source {\n    font-size: var(--text-xs);\n    color: var(--color-primary);\n    font-weight: var(--font-weight-medium);\n  }\n  .data-pipeline-section .pipeline-steps .pipeline-step .step-header .step-format {\n    font-size: var(--text-xs);\n    color: var(--color-on-surface-variant);\n    font-family: var(--font-family-mono);\n  }\n  .data-pipeline-section .pipeline-steps .pipeline-step .step-header .btn {\n    padding: var(--space-xs) var(--space-sm);\n    font-size: var(--text-xs);\n  }\n  .data-pipeline-section .pipeline-steps .pipeline-step .step-content .step-preview {\n    font-size: var(--text-sm);\n    color: var(--color-on-surface);\n    line-height: 1.5;\n    max-block-size: 100px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n}\n@layer view.workcenter.tokens, view.workcenter.base, view.workcenter.layout, view.workcenter.components, view.workcenter.utilities, view.workcenter.overrides;", B = "/**\n * Font Styles Index\n *\n * Font style declarations (not loading fonts directly)\n * Fonts are loaded via JavaScript font-loader module\n */\n/**\n * Inter Font Family Styles\n *\n * Style declarations for Inter font family (not loading directly)\n * Fonts are loaded via JavaScript font-loader module\n */\n/* Fallback fonts: */\n:root, :host, :scope {\n  font-family: Inter, sans-serif;\n  font-optical-sizing: auto;\n  font-variation-settings: \"opsz\" 16;\n}\n\n/* Variable fonts usage: */\n@supports (font-variation-settings: normal) {\n  :root, :host, :scope {\n    font-family: InterVariable, sans-serif;\n    font-optical-sizing: auto;\n    font-variation-settings: \"opsz\" 16;\n  }\n}\n/* Font feature values: */\n@font-feature-values InterVariable {\n  @character-variant {\n    cv01: 1;\n    cv02: 2;\n    cv03: 3;\n    cv04: 4;\n    cv05: 5;\n    cv06: 6;\n    cv07: 7;\n    cv08: 8;\n    cv09: 9;\n    cv10: 10;\n    cv11: 11;\n    cv12: 12;\n    cv13: 13;\n    alt-1: 1; /* Alternate one */\n    alt-3: 9; /* Flat-top three */\n    open-4: 2; /* Open four */\n    open-6: 3; /* Open six */\n    open-9: 4; /* Open nine */\n    lc-l-with-tail: 5; /* Lower-case L with tail */\n    simplified-u: 6; /* Simplified u */\n    alt-double-s: 7; /* Alternate German double s */\n    uc-i-with-serif: 8; /* Upper-case i with serif */\n    uc-g-with-spur: 10; /* Capital G with spur */\n    single-story-a: 11; /* Single-story a */\n    compact-lc-f: 12; /* Compact f */\n    compact-lc-t: 13; /* Compact t */\n  }\n  @styleset {\n    ss01: 1;\n    ss02: 2;\n    ss03: 3;\n    ss04: 4;\n    ss05: 5;\n    ss06: 6;\n    ss07: 7;\n    ss08: 8;\n    open-digits: 1; /* Open digits */\n    disambiguation: 2; /* Disambiguation (with zero) */\n    disambiguation-except-zero: 4; /* Disambiguation (no zero) */\n    round-quotes-and-commas: 3; /* Round quotes & commas */\n    square-punctuation: 7; /* Square punctuation */\n    square-quotes: 8; /* Square quotes */\n    circled-characters: 5; /* Circled characters */\n    squared-characters: 6; /* Squared characters */\n  }\n}\n@font-feature-values Inter {\n  @character-variant {\n    cv01: 1;\n    cv02: 2;\n    cv03: 3;\n    cv04: 4;\n    cv05: 5;\n    cv06: 6;\n    cv07: 7;\n    cv08: 8;\n    cv09: 9;\n    cv10: 10;\n    cv11: 11;\n    cv12: 12;\n    cv13: 13;\n    alt-1: 1; /* Alternate one */\n    alt-3: 9; /* Flat-top three */\n    open-4: 2; /* Open four */\n    open-6: 3; /* Open six */\n    open-9: 4; /* Open nine */\n    lc-l-with-tail: 5; /* Lower-case L with tail */\n    simplified-u: 6; /* Simplified u */\n    alt-double-s: 7; /* Alternate German double s */\n    uc-i-with-serif: 8; /* Upper-case i with serif */\n    uc-g-with-spur: 10; /* Capital G with spur */\n    single-story-a: 11; /* Single-story a */\n    compact-lc-f: 12; /* Compact f */\n    compact-lc-t: 13; /* Compact t */\n  }\n  @styleset {\n    ss01: 1;\n    ss02: 2;\n    ss03: 3;\n    ss04: 4;\n    ss05: 5;\n    ss06: 6;\n    ss07: 7;\n    ss08: 8;\n    open-digits: 1; /* Open digits */\n    disambiguation: 2; /* Disambiguation (with zero) */\n    disambiguation-except-zero: 4; /* Disambiguation (no zero) */\n    round-quotes-and-commas: 3; /* Round quotes & commas */\n    square-punctuation: 7; /* Square punctuation */\n    square-quotes: 8; /* Square quotes */\n    circled-characters: 5; /* Circled characters */\n    squared-characters: 6; /* Squared characters */\n  }\n}\n@font-feature-values InterDisplay {\n  @character-variant {\n    cv01: 1;\n    cv02: 2;\n    cv03: 3;\n    cv04: 4;\n    cv05: 5;\n    cv06: 6;\n    cv07: 7;\n    cv08: 8;\n    cv09: 9;\n    cv10: 10;\n    cv11: 11;\n    cv12: 12;\n    cv13: 13;\n    alt-1: 1; /* Alternate one */\n    alt-3: 9; /* Flat-top three */\n    open-4: 2; /* Open four */\n    open-6: 3; /* Open six */\n    open-9: 4; /* Open nine */\n    lc-l-with-tail: 5; /* Lower-case L with tail */\n    simplified-u: 6; /* Simplified u */\n    alt-double-s: 7; /* Alternate German double s */\n    uc-i-with-serif: 8; /* Upper-case i with serif */\n    uc-g-with-spur: 10; /* Capital G with spur */\n    single-story-a: 11; /* Single-story a */\n    compact-lc-f: 12; /* Compact f */\n    compact-lc-t: 13; /* Compact t */\n  }\n  @styleset {\n    ss01: 1;\n    ss02: 2;\n    ss03: 3;\n    ss04: 4;\n    ss05: 5;\n    ss06: 6;\n    ss07: 7;\n    ss08: 8;\n    open-digits: 1; /* Open digits */\n    disambiguation: 2; /* Disambiguation (with zero) */\n    disambiguation-except-zero: 4; /* Disambiguation (no zero) */\n    round-quotes-and-commas: 3; /* Round quotes & commas */\n    square-punctuation: 7; /* Square punctuation */\n    square-quotes: 8; /* Square quotes */\n    circled-characters: 5; /* Circled characters */\n    squared-characters: 6; /* Squared characters */\n  }\n}\n:root {\n  --fl-ui-radius: 0.5rem;\n  --fl-ui-gap: 0.75rem;\n  /* Explorer / shell (used by _explorer.scss, _explorer-content.scss) */\n  --color-surface: #151d2e;\n  --color-on-surface: #e8edf5;\n  --color-on-surface-variant: #8b9bb8;\n  --color-primary: #3794ff;\n  --error-color: #f87171;\n}\n\n/* ai-refactor: optimized/refactored at 2026-02-13T00:45:15Z */\n/* ai-refactor: optimized/refactored at 2026-02-13T00:45:12Z */\n@layer tokens, base, layout, utilities, shells, shell, views, view, viewer, components, ux-layer, markdown, essentials, print, print-breaks, overrides;\n@layer components {\n  .btn {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--space-sm);\n    padding-block: 0px;\n    padding-inline: 0px;\n    font-size: var(--font-size-sm);\n    font-weight: 500;\n    border-radius: var(--radius-md);\n    background: var(--color-bg-alt);\n    color: var(--color-fg);\n    border: 1px solid var(--color-border);\n    cursor: pointer;\n    transition: all var(--transition-fast);\n  }\n  .btn:hover:not(:disabled) {\n    background: var(--color-border);\n  }\n  .btn:focus-visible {\n    outline: 2px solid var(--color-primary);\n    outline-offset: 2px;\n  }\n  .btn:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n  .btn {\n    --ui-bg: var(--color-surface-container-high);\n    --ui-fg: var(--color-on-surface);\n    --ui-bg-hover: var(--color-surface-container-highest);\n    --ui-ring: var(--color-primary);\n    --ui-radius: var(--radius-lg);\n    --ui-pad-y: var(--space-sm);\n    --ui-pad-x: var(--space-lg);\n    --ui-font-size: var(--text-sm);\n    --ui-font-weight: var(--font-weight-semibold);\n    --ui-min-h: 40px;\n    --ui-opacity: 1;\n    appearance: none;\n    border: none;\n    background: var(--ui-bg);\n    color: var(--ui-fg);\n    border-radius: var(--ui-radius);\n    padding: max(var(--ui-pad-y, 0px), 0px) max(var(--ui-pad-x, 0px), 0px);\n    font-size: var(--ui-font-size);\n    font-weight: var(--ui-font-weight);\n    letter-spacing: 0.01em;\n    line-height: 1.2;\n    block-size: calc-size(fit-content, max(var(--ui-min-h), size));\n    transition: background-color var(--motion-fast), box-shadow var(--motion-fast), transform var(--motion-fast);\n    box-shadow: var(--elev-0);\n    user-select: none;\n    touch-action: manipulation;\n    pointer-events: auto;\n    gap: var(--space-xs);\n    text-transform: none;\n    opacity: var(--ui-opacity);\n    min-block-size: fit-content;\n    min-inline-size: calc-size(fit-content, size + 0.5rem + var(--icon-size, 1rem));\n    max-inline-size: none;\n    max-block-size: stretch;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    text-wrap: nowrap;\n    text-overflow: ellipsis;\n    overflow: hidden;\n    white-space: nowrap;\n    text-align: center;\n    text-decoration: none;\n    text-shadow: none;\n    text-rendering: auto;\n    contain: none;\n    container-type: normal;\n    place-items: center;\n    place-content: center;\n    justify-content: safe center;\n    justify-items: safe center;\n    align-content: safe center;\n    align-items: safe center;\n  }\n  .btn > ui-icon {\n    flex-shrink: 0;\n    pointer-events: none;\n    color: inherit;\n    align-self: center;\n    vertical-align: middle;\n  }\n  @media (max-width: 480px) {\n    .btn.btn-icon {\n      font-size: 0px !important;\n      aspect-ratio: 1/1;\n      block-size: fit-content;\n      max-block-size: stretch;\n      min-inline-size: 0px;\n      max-inline-size: fit-content;\n      gap: 0px;\n    }\n    .btn.btn-icon .btn-text,\n    .btn.btn-icon span:not(.sr-only) {\n      display: none !important;\n    }\n  }\n  .btn:hover {\n    background: var(--ui-bg-hover);\n    box-shadow: var(--elev-1);\n    transform: translateY(-1px);\n  }\n  .btn:active {\n    transform: translateY(0);\n    box-shadow: var(--elev-0);\n  }\n  .btn:focus-visible {\n    outline: none;\n    box-shadow: 0 0 0 3px color-mix(in oklab, var(--ui-ring) 35%, transparent);\n  }\n  .btn:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n    transform: none !important;\n  }\n  .btn:disabled:hover {\n    background: var(--color-surface-container-high);\n    box-shadow: var(--elev-0);\n  }\n  .btn.primary, .btn.active {\n    --ui-bg: var(--color-primary);\n    --ui-fg: var(--color-on-primary);\n    --ui-ring: var(--color-primary);\n  }\n  .btn.primary {\n    --ui-bg-hover: color-mix(in oklab, var(--color-primary) 90%, black);\n  }\n  .btn.active {\n    box-shadow: var(--elev-1);\n  }\n  .btn.small {\n    --ui-pad-y: var(--space-xs);\n    --ui-pad-x: var(--space-md);\n    --ui-font-size: var(--text-xs);\n    --ui-min-h: 32px;\n    --ui-radius: var(--radius-md);\n  }\n  .btn.icon-btn {\n    inline-size: 40px;\n    block-size: 40px;\n    --ui-pad-y: 0px;\n    --ui-pad-x: 0px;\n    --ui-radius: 9999px;\n    --ui-font-size: var(--text-lg);\n  }\n  .btn[data-action=open-md], .btn[data-action=export-md], .btn[data-action=export-docx] {\n    --ui-font-size: 12px;\n    --ui-pad-x: 8px;\n    --ui-pad-y: 0px;\n    --ui-min-h: 28px;\n  }\n  .btn:is([data-action=view-markdown-viewer],\n  [data-action=view-markdown-editor],\n  [data-action=view-rich-editor],\n  [data-action=view-settings],\n  [data-action=view-history],\n  [data-action=view-workcenter]) {\n    --ui-font-size: 13px;\n    --ui-font-weight: 500;\n    --ui-pad-x: 12px;\n    --ui-pad-y: 0px;\n    --ui-min-h: 32px;\n    --ui-radius: 16px;\n    text-transform: capitalize;\n  }\n  .btn:is([data-action=view-markdown-viewer],\n  [data-action=view-markdown-editor],\n  [data-action=view-rich-editor],\n  [data-action=view-settings],\n  [data-action=view-history],\n  [data-action=view-workcenter][data-current],\n  [data-action=view-workcenter].active) {\n    --ui-bg: var(--color-surface-container-highest);\n    --ui-fg: var(--color-primary);\n    --ui-ring: var(--color-primary);\n  }\n  .btn:is([data-action=toggle-edit],\n  [data-action=snip],\n  [data-action=solve],\n  [data-action=code],\n  [data-action=css],\n  [data-action=voice],\n  [data-action=edit-templates],\n  [data-action=recognize],\n  [data-action=analyze],\n  [data-action=select-files],\n  [data-action=clear-prompt],\n  [data-action=view-full-history]) {\n    --ui-font-size: 12px;\n    --ui-pad-x: 8px;\n    --ui-pad-y: 0px;\n    --ui-min-h: 28px;\n    --ui-radius: 14px;\n  }\n  .btn:has(> ui-icon):not(:has(> *:not(ui-icon))), .btn:has(> span:only-of-type:empty) {\n    font-size: 0px !important;\n    aspect-ratio: 1/1;\n    block-size: fit-content;\n    max-block-size: stretch;\n    min-inline-size: 0px;\n    max-inline-size: fit-content;\n    gap: 0px;\n    overflow: visible;\n  }\n  .btn:has(> ui-icon):not(:has(> *:not(ui-icon))) span:not(.sr-only), .btn:has(> span:only-of-type:empty) span:not(.sr-only) {\n    display: none !important;\n  }\n  .btn-primary {\n    background: var(--color-primary);\n    color: white;\n    border-color: var(--color-primary);\n  }\n  .btn-primary:hover:not(:disabled) {\n    background: var(--color-primary-hover);\n    border-color: var(--color-primary-hover);\n  }\n  @media (max-inline-size: 768px) {\n    .btn {\n      --ui-pad-y: var(--space-xs);\n      --ui-pad-x: var(--space-md);\n      --ui-font-size: var(--text-xs);\n      --ui-min-h: 36px;\n    }\n  }\n  @media (max-inline-size: 480px) {\n    .btn {\n      --ui-pad-y: var(--space-xs);\n      --ui-pad-x: var(--space-xs);\n      --ui-font-size: var(--text-xs);\n      --ui-min-h: 32px;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n    }\n    .btn.btn-icon {\n      overflow: visible;\n    }\n  }\n  @media (prefers-reduced-motion: reduce) {\n    .btn {\n      transition: none;\n      transform: none !important;\n    }\n    .btn:hover, .btn:active {\n      transform: none !important;\n    }\n  }\n}\n@layer utilities {\n  .round-decor {\n    --background-tone-shift: 0;\n    padding-block: 0.25rem;\n    border-radius: 0.25rem;\n    overflow: hidden;\n  }\n  .round-decor:empty {\n    padding: 0;\n    display: none;\n    pointer-events: none;\n    visibility: collapse;\n  }\n  .time-format {\n    display: inline-flex;\n    flex-direction: row;\n    place-content: center;\n    place-items: center;\n    place-self: center;\n    padding: 0.125rem;\n    font: 500 0.9em \"InterVariable\", \"Inter\", \"Fira Mono\", \"Menlo\", \"Consolas\", monospace;\n    font-optical-sizing: auto;\n    font-variant-numeric: tabular-nums;\n    font-kerning: auto;\n    font-stretch: condensed;\n    font-width: condensed;\n    letter-spacing: -0.05em;\n    text-wrap: nowrap;\n    text-align: center;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n  }\n  .ui-ws-item {\n    cursor: pointer;\n    user-select: none;\n    pointer-events: auto;\n  }\n  .ui-ws-item span {\n    pointer-events: none;\n    aspect-ratio: 1/1;\n    inline-size: fit-content;\n    block-size: fit-content;\n    display: inline;\n  }\n  .ui-ws-item:active, .ui-ws-item:has(:active) {\n    will-change: inset, translate, transform, opacity, z-index;\n    cursor: grabbing;\n  }\n}\n@layer essentials {\n  @media print {\n    .ctx-menu, .ux-anchor, .component-loading, .component-error {\n      display: none !important;\n      visibility: hidden !important;\n      opacity: 0 !important;\n      pointer-events: none !important;\n      position: absolute !important;\n      inset: 0 !important;\n      z-index: -1 !important;\n      inline-size: 0 !important;\n      block-size: 0 !important;\n      max-inline-size: 0 !important;\n      max-block-size: 0 !important;\n      min-inline-size: 0 !important;\n      min-block-size: 0 !important;\n      margin: 0 !important;\n      padding: 0 !important;\n      border: none !important;\n      overflow: hidden !important;\n    }\n  }\n  @media screen {\n    :root, :host, :scope {\n      --font-family: \"InterVariable\", \"Inter\", \"Helvetica Neue\", \"Helvetica\", \"Calibri\", \"Roboto\", ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;\n    }\n    ui-window-frame,\n    ui-modal,\n    .ui-grid-item {\n      --opacity: 1;\n      --scale: 1;\n      --rotate: 0deg;\n      --translate-x: 0%;\n      --translate-y: 0%;\n      isolation: isolate;\n      content-visibility: auto;\n      transform-origin: 50% 50%;\n      transform-style: flat;\n      transform-box: fill-box;\n      translate: 0% 0% 0%;\n      opacity: var(--opacity, 1);\n      rotate: 0deg;\n      scale: 1;\n    }\n    .ctx-menu {\n      --font-family: \"InterVariable\", \"Inter\", \"Helvetica Neue\", \"Helvetica\", \"Calibri\", \"Roboto\", ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;\n    }\n    .ctx-menu,\n    .ctx-menu * {\n      visibility: visible;\n      content-visibility: visible;\n    }\n    .ctx-menu {\n      position: fixed;\n      z-index: 99999;\n      inline-size: max-content;\n      min-inline-size: 160px;\n      max-inline-size: min(240px, 100cqi);\n      block-size: fit-content;\n      padding: 0.25rem 0;\n      border: 1px solid var(--color-outline-variant);\n      border-radius: var(--radius-md);\n      background-color: var(--color-surface);\n      color: var(--color-on-surface);\n      font-size: 0.875rem;\n      font-weight: 400;\n      box-shadow: var(--elev-3);\n      opacity: 1;\n      visibility: visible;\n      pointer-events: auto;\n      transform: scale3d(var(--scale, 1), var(--scale, 1), 1) translate3d(var(--translate-x, 0px), var(--translate-y, 0px), 0px);\n      transition: opacity 0.15s ease-out, visibility 0.15s ease-out, transform 0.15s ease-out;\n      font-family: var(--font-family, 'system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif') !important;\n      text-align: start;\n      display: flex;\n      flex-direction: column;\n      align-items: stretch;\n    }\n    .ctx-menu[data-hidden] {\n      opacity: 0;\n      visibility: hidden;\n      pointer-events: none;\n    }\n    .ctx-menu > * {\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: flex-start;\n      text-align: start;\n      inline-size: stretch;\n      min-block-size: 2rem;\n      gap: 0.5rem;\n      padding: 0.375rem 0.75rem;\n      border: none;\n      border-radius: var(--radius-sm);\n      outline: none;\n      position: relative;\n      background-color: transparent;\n      color: var(--color-on-surface);\n      cursor: pointer;\n      text-wrap: nowrap;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n      overflow: hidden;\n      pointer-events: auto;\n      transition: background-color 0.15s ease, color 0.15s ease;\n      font-family: var(--font-family, 'system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif') !important;\n    }\n    .ctx-menu > *:hover {\n      background-color: var(--color-surface-container-high);\n      color: var(--color-on-surface);\n    }\n    .ctx-menu > *:active {\n      background-color: var(--color-surface-container-highest);\n      color: var(--color-on-surface);\n    }\n    .ctx-menu > *:focus-visible {\n      outline: var(--focus-ring);\n      background-color: var(--color-surface-container-high);\n    }\n    .ctx-menu > *:not(.ctx-menu-separator) {\n      gap: 0.5rem;\n    }\n    .ctx-menu > * > * {\n      pointer-events: none;\n    }\n    .ctx-menu > * > span {\n      flex: 1 1 auto;\n      min-inline-size: 0;\n      text-align: start !important;\n      user-select: none;\n      pointer-events: none;\n      font-size: 0.875rem;\n      font-weight: 400;\n      line-height: 1.25;\n      color: inherit;\n    }\n    .ctx-menu > * > ui-icon {\n      --icon-size: 1rem;\n      flex-shrink: 0;\n      inline-size: var(--icon-size);\n      block-size: var(--icon-size);\n      color: var(--color-on-surface-variant);\n      user-select: none;\n      pointer-events: none;\n    }\n    .ctx-menu > .ctx-menu-separator, .ctx-menu.ctx-menu-separator {\n      min-block-size: auto;\n      block-size: 1px;\n      margin: 0.125rem 0.375rem;\n      padding: 0;\n      background-color: var(--color-outline-variant);\n      opacity: 0.3;\n      pointer-events: none;\n    }\n    .ctx-menu {\n      /*\n       * `.grid-rows` applies subgrid + place(center) to children, which centers\n       * label text per row. Context menus must stay flex rows with start-aligned labels.\n       */\n    }\n    .ctx-menu.grid-rows {\n      display: flex !important;\n      flex-direction: column;\n      align-items: stretch;\n      grid-template-columns: unset !important;\n      grid-auto-rows: unset !important;\n    }\n    .ctx-menu.grid-rows > *:not(.ctx-menu-separator) {\n      display: flex !important;\n      flex-flow: row nowrap !important;\n      align-items: center !important;\n      justify-content: flex-start !important;\n      grid-column: unset !important;\n      grid-row: unset !important;\n      grid-template-columns: unset !important;\n      grid-template-rows: unset !important;\n      place-content: unset !important;\n      place-items: unset !important;\n    }\n    .ux-anchor {\n      --shift-x: var(--client-x, 0px);\n      --shift-y: var(--client-y, 0px);\n      --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n      --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n      inset-inline-start: max(var(--shift-x), 0px);\n      inset-block-start: max(var(--shift-y), var(--status-bar-padding, 0px));\n      inset-inline-end: auto;\n      inset-block-end: auto;\n      direction: ltr;\n      writing-mode: horizontal-tb;\n      translate: 0% 0% 0%;\n      transform: none;\n    }\n    .component-loading,\n    .component-error {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      padding: 2rem;\n      gap: 1rem;\n      color: var(--text-secondary, light-dark(#666, #aaa));\n    }\n    .component-loading .loading-spinner {\n      inline-size: 2rem;\n      block-size: 2rem;\n      border: 2px solid var(--border, light-dark(#ddd, #444));\n      border-block-start: 2px solid var(--primary, light-dark(#007bff, #5fa8ff));\n      border-radius: 50%;\n      animation: spin 1s linear infinite;\n    }\n    .component-error {\n      text-align: center;\n    }\n    .component-error h3 {\n      margin: 0;\n      color: var(--error, light-dark(#dc3545, #ff6b6b));\n    }\n    .component-error p {\n      margin: 0;\n    }\n    ui-icon {\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      inline-size: var(--icon-size, 1.25rem);\n      block-size: var(--icon-size, 1.25rem);\n      min-inline-size: var(--icon-size, 1.25rem);\n      min-block-size: var(--icon-size, 1.25rem);\n      color: currentColor;\n      fill: currentColor;\n      flex-shrink: 0;\n      vertical-align: middle;\n      opacity: 1;\n      visibility: visible;\n      /* When a parent uses font-size: 0 for layout, keep raster/mask math stable */\n      font-size: 1rem;\n    }\n    ui-icon svg,\n    ui-icon img {\n      inline-size: 100%;\n      block-size: 100%;\n      color: inherit;\n      fill: currentColor;\n    }\n    :is(button, .btn) > ui-icon {\n      color: inherit;\n    }\n    .file-picker {\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      justify-content: center;\n      min-block-size: 300px;\n      padding: 2rem;\n      text-align: center;\n    }\n    .file-picker .file-picker-header {\n      margin-block-end: 2rem;\n    }\n    .file-picker .file-picker-header h2 {\n      margin: 0 0 0.5rem 0;\n      color: var(--color-on-surface);\n      font-size: 1.5rem;\n      font-weight: 600;\n    }\n    .file-picker .file-picker-header p {\n      margin: 0;\n      color: var(--color-on-surface-variant);\n      font-size: 0.9rem;\n    }\n    .file-picker .file-picker-actions {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      gap: 1rem;\n      margin-block-end: 2rem;\n    }\n    .file-picker .file-picker-actions .btn {\n      display: flex;\n      align-items: center;\n      gap: 0.5rem;\n      padding: 0.75rem 1.5rem;\n      border: 1px solid transparent;\n      border-radius: var(--radius-md);\n      font-weight: 500;\n      transition: all 0.2s ease;\n    }\n    .file-picker .file-picker-actions .btn:hover {\n      transform: translateY(-1px);\n      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n    }\n    .file-picker .file-picker-actions .btn.btn-primary {\n      background: var(--color-primary);\n      color: var(--color-on-primary);\n      border-color: var(--color-primary);\n    }\n    .file-picker .file-picker-actions .btn:not(.btn-primary) {\n      background: var(--color-surface-container);\n      color: var(--color-on-surface);\n      border-color: var(--color-outline-variant);\n    }\n    .file-picker .file-picker-info {\n      max-inline-size: 400px;\n    }\n    .file-picker .file-picker-info p {\n      margin: 0.25rem 0;\n      font-size: 0.85rem;\n      color: var(--color-on-surface-variant);\n    }\n    .file-picker .file-picker-info p strong {\n      color: var(--color-on-surface);\n    }\n  }\n}\n@function --hsv(--src-color <color>) returns <color> {\n  result: hsl(from var(--src-color, black) h calc(calc((calc(l / 100) - calc(calc(l / 100) * (1 - calc(s / 100) / 2))) / clamp(0.0001, min(calc(calc(l / 100) * (1 - calc(s / 100) / 2)), calc(1 - calc(calc(l / 100) * (1 - calc(s / 100) / 2)))), 1)) * 100) calc(calc(calc(l / 100) * (1 - calc(s / 100) / 2)) * 100) / alpha);\n}\n/* ai-refactor: optimized/refactored at 2026-02-13T02:50:43Z */\n/* ==========================================================================\n    Meta / Declarations\n   ========================================================================== */\n/* ==========================================================================\n    Tokens / Mixins (global, not layered)\n   ========================================================================== */\n/* ai-refactor: optimized/refactored at 2026-02-13T00:48:23Z */\n@layer tokens, base, layout, utilities, shells, shell, views, view, viewer, components, ux-layer, markdown, essentials, print, print-breaks, overrides;\n@layer tokens {\n  :root,\n  :host,\n  :scope {\n    color-scheme: light dark;\n    --color-primary: #5a7fff;\n    --color-on-primary: #ffffff;\n    --color-secondary: #6b7280;\n    --color-on-secondary: #ffffff;\n    --color-tertiary: #64748b;\n    --color-on-tertiary: #ffffff;\n    --color-error: #ef4444;\n    --color-on-error: #ffffff;\n    --color-success: #4caf50;\n    --color-warning: #ff9800;\n    --color-info: #2196f3;\n    --color-background: #fafbfc;\n    --color-on-background: #1e293b;\n    --color-surface: #fafbfc;\n    --color-on-surface: #1e293b;\n    --color-surface-variant: #f1f5f9;\n    --color-on-surface-variant: #64748b;\n    --color-outline: #cbd5e1;\n    --color-outline-variant: #94a3b8;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 96%, var(--color-primary) 4%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 75%, transparent);\n    --space-xs: 0.25rem;\n    --space-sm: 0.5rem;\n    --space-md: 0.75rem;\n    --space-lg: 1rem;\n    --space-xl: 1.25rem;\n    --space-2xl: 1.5rem;\n    --padding-xs: var(--space-xs);\n    --padding-sm: var(--space-sm);\n    --padding-md: var(--space-md);\n    --padding-lg: var(--space-lg);\n    --padding-xl: var(--space-xl);\n    --padding-2xl: var(--space-2xl);\n    --padding-3xl: 2rem;\n    --padding-4xl: 2.5rem;\n    --padding-5xl: 3rem;\n    --padding-6xl: 4rem;\n    --padding-7xl: 5rem;\n    --padding-8xl: 6rem;\n    --padding-9xl: 8rem;\n    --gap-xs: var(--space-xs);\n    --gap-sm: var(--space-sm);\n    --gap-md: var(--space-md);\n    --gap-lg: var(--space-lg);\n    --gap-xl: var(--space-xl);\n    --gap-2xl: var(--space-2xl);\n    --radius-none: 0;\n    --radius-sm: 0.25rem;\n    --radius-default: 0.25rem;\n    --radius-md: 0.375rem;\n    --radius-lg: 0.5rem;\n    --radius-xl: 0.75rem;\n    --radius-2xl: 1rem;\n    --radius-3xl: 1.5rem;\n    --radius-full: 9999px;\n    --elev-0: none;\n    --elev-1: 0 1px 1px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1);\n    --elev-2: 0 2px 6px rgba(0, 0, 0, 0.12), 0 8px 24px rgba(0, 0, 0, 0.08);\n    --elev-3: 0 6px 16px rgba(0, 0, 0, 0.14), 0 18px 48px rgba(0, 0, 0, 0.1);\n    --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);\n    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);\n    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);\n    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);\n    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);\n    --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.1);\n    --shadow-inset: inset 0 2px 4px rgba(0, 0, 0, 0.06);\n    --shadow-inset-strong: inset 0 4px 8px rgba(0, 0, 0, 0.12);\n    --shadow-none: 0 0 #0000;\n    --text-xs: 0.8rem;\n    --text-sm: 0.9rem;\n    --text-base: 1rem;\n    --text-lg: 1.1rem;\n    --text-xl: 1.25rem;\n    --text-2xl: 1.6rem;\n    --text-3xl: 2rem;\n    --font-size-xs: 0.75rem;\n    --font-size-sm: 0.875rem;\n    --font-size-base: 1rem;\n    --font-size-lg: 1.125rem;\n    --font-size-xl: 1.25rem;\n    --font-weight-normal: 400;\n    --font-weight-medium: 500;\n    --font-weight-semibold: 600;\n    --font-weight-bold: 700;\n    --font-family: \"Roboto\", ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;\n    --font-family-mono: \"Roboto Mono\", \"SF Mono\", Monaco, Inconsolata, \"Fira Code\", monospace;\n    --font-sans: var(--font-family);\n    --font-mono: var(--font-family-mono);\n    --leading-tight: 1.2;\n    --leading-normal: 1.5;\n    --leading-relaxed: 1.8;\n    --transition-fast: 120ms cubic-bezier(0.2, 0, 0, 1);\n    --transition-normal: 160ms cubic-bezier(0.2, 0, 0, 1);\n    --transition-slow: 200ms cubic-bezier(0.2, 0, 0, 1);\n    --motion-fast: var(--transition-fast);\n    --motion-normal: var(--transition-normal);\n    --motion-slow: var(--transition-slow);\n    --focus-ring: 0 0 0 3px color-mix(in oklab, var(--color-primary) 35%, transparent);\n    --z-base: 0;\n    --z-dropdown: 100;\n    --z-sticky: 200;\n    --z-fixed: 300;\n    --z-modal-backdrop: 400;\n    --z-modal: 500;\n    --z-popover: 600;\n    --z-tooltip: 700;\n    --z-toast: 800;\n    --z-max: 9999;\n    --view-bg: var(--color-surface);\n    --view-fg: var(--color-on-surface);\n    --view-border: var(--color-outline-variant);\n    --view-input-bg: light-dark(#ffffff, var(--color-surface-container-high));\n    --view-files-bg: light-dark(rgba(0, 0, 0, 0.02), var(--color-surface-container-low));\n    --view-file-bg: light-dark(rgba(0, 0, 0, 0.03), var(--color-surface-container-lowest, var(--color-surface-container-low)));\n    --view-results-bg: light-dark(rgba(0, 0, 0, 0.01), var(--color-surface-container-low));\n    --view-result-bg: light-dark(rgba(0, 0, 0, 0.03), var(--color-surface-container-lowest, var(--color-surface-container-low)));\n    --color-surface-elevated: var(--color-surface-container);\n    --color-surface-hover: var(--color-surface-container-low);\n    --color-surface-active: var(--color-surface-container-high);\n    --color-on-surface-muted: var(--color-on-surface-variant);\n    --color-background-alt: var(--color-surface-variant);\n    --color-primary-hover: color-mix(in oklab, var(--color-primary) 80%, black);\n    --color-primary-active: color-mix(in oklab, var(--color-primary) 65%, black);\n    --color-accent: var(--color-secondary);\n    --color-accent-hover: color-mix(in oklab, var(--color-secondary) 80%, black);\n    --color-on-accent: var(--color-on-secondary);\n    --color-border-hover: var(--color-outline-variant);\n    --color-border-strong: var(--color-outline);\n    --color-border-focus: var(--color-primary);\n    --color-text: var(--color-on-surface);\n    --color-text-secondary: var(--color-on-surface-variant);\n    --color-text-muted: color-mix(in oklab, var(--color-on-surface) 50%, var(--color-surface));\n    --color-text-disabled: color-mix(in oklab, var(--color-on-surface) 38%, var(--color-surface));\n    --color-text-inverse: var(--color-on-primary);\n    --color-link: var(--color-primary);\n    --color-link-hover: color-mix(in oklab, var(--color-primary) 80%, black);\n    --color-success-light: color-mix(in oklab, var(--color-success) 60%, white);\n    --color-success-dark: color-mix(in oklab, var(--color-success) 70%, black);\n    --color-warning-light: color-mix(in oklab, var(--color-warning) 60%, white);\n    --color-warning-dark: color-mix(in oklab, var(--color-warning) 70%, black);\n    --color-error-light: color-mix(in oklab, var(--color-error) 60%, white);\n    --color-error-dark: color-mix(in oklab, var(--color-error) 70%, black);\n    --color-info-light: color-mix(in oklab, var(--color-info) 60%, white);\n    --color-info-dark: color-mix(in oklab, var(--color-info) 70%, black);\n    --color-bg: var(--color-surface, var(--color-surface));\n    --color-bg-alt: var(--color-surface-variant, var(--color-surface-variant));\n    --color-fg: var(--color-on-surface, var(--color-on-surface));\n    --color-fg-muted: var(--color-on-surface-variant, var(--color-on-surface-variant));\n    --btn-height-sm: 2rem;\n    --btn-height-md: 2.5rem;\n    --btn-height-lg: 3rem;\n    --btn-padding-x-sm: var(--space-md);\n    --btn-padding-x-md: var(--space-lg);\n    --btn-padding-x-lg: 1.5rem;\n    --btn-radius: var(--radius-md);\n    --btn-font-weight: var(--font-weight-medium);\n    --input-height-sm: 2rem;\n    --input-height-md: 2.5rem;\n    --input-height-lg: 3rem;\n    --input-padding-x: var(--space-md);\n    --input-radius: var(--radius-md);\n    --input-border-color: var(--color-border, var(--color-border));\n    --input-focus-ring-color: var(--color-primary);\n    --input-focus-ring-width: 2px;\n    --card-padding: var(--space-lg);\n    --card-radius: var(--radius-lg);\n    --card-shadow: var(--shadow-sm);\n    --card-border-color: var(--color-border, var(--color-border));\n    --modal-backdrop-bg: light-dark(rgb(0 0 0 / 0.5), rgb(0 0 0 / 0.7));\n    --modal-bg: var(--color-surface, var(--color-surface));\n    --modal-radius: var(--radius-xl);\n    --modal-shadow: var(--shadow-xl);\n    --modal-padding: 1.5rem;\n    --toast-font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif);\n    --toast-font-size: var(--font-size-base, 1rem);\n    --toast-font-weight: var(--font-weight-medium, 500);\n    --toast-letter-spacing: 0.01em;\n    --toast-line-height: 1.4;\n    --toast-white-space: nowrap;\n    --toast-pointer-events: auto;\n    --toast-user-select: none;\n    --toast-cursor: default;\n    --toast-opacity: 0;\n    --toast-transform: translateY(100%) scale(0.9);\n    --toast-transition: opacity 160ms ease-out, transform 160ms cubic-bezier(0.16, 1, 0.3, 1), background-color 100ms ease;\n    --toast-text: var(--color-on-surface, var(--color-on-surface, light-dark(#ffffff, #000000)));\n    --toast-bg: color-mix(in oklab, var(--color-surface-elevated, var(--color-surface-container-high, var(--color-surface, light-dark(#fafbfc, #1e293b)))) 90%, var(--color-on-surface, var(--color-on-surface, light-dark(#000000, #ffffff))));\n    --toast-radius: var(--radius-lg);\n    --toast-shadow: var(--shadow-lg);\n    --toast-padding: var(--space-lg);\n    --sidebar-width: 280px;\n    --sidebar-collapsed-width: 64px;\n    --nav-height: 56px;\n    --nav-height-compact: 48px;\n    --status-height: 24px;\n    --status-bg: var(--color-surface-elevated, var(--color-surface-container-high));\n    --status-font-size: var(--text-xs);\n  }\n  @media (prefers-color-scheme: dark) {\n    :root,\n    :host,\n    :scope {\n      --color-primary: #7ca7ff;\n      --color-on-primary: #0f172a;\n      --color-secondary: #94a3b8;\n      --color-on-secondary: #1e293b;\n      --color-tertiary: #94a3b8;\n      --color-on-tertiary: #0f172a;\n      --color-error: #f87171;\n      --color-on-error: #450a0a;\n      --color-success: #66bb6a;\n      --color-warning: #ffa726;\n      --color-info: #42a5f5;\n      --color-background: #0f1419;\n      --color-on-background: #f1f5f9;\n      --color-surface: #0f1419;\n      --color-on-surface: #f1f5f9;\n      --color-surface-variant: #1e293b;\n      --color-on-surface-variant: #cbd5e1;\n      --color-outline: #475569;\n      --color-outline-variant: #334155;\n      --color-surface-container-low: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n      --color-surface-container: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n      --color-surface-container-high: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n      --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 80%, var(--color-primary) 20%);\n      --color-border: color-mix(in oklab, var(--color-outline-variant) 70%, transparent);\n    }\n  }\n  [data-theme=light] {\n    color-scheme: light;\n    --color-primary: #5a7fff;\n    --color-on-primary: #ffffff;\n    --color-secondary: #6b7280;\n    --color-on-secondary: #ffffff;\n    --color-tertiary: #64748b;\n    --color-on-tertiary: #ffffff;\n    --color-error: #ef4444;\n    --color-on-error: #ffffff;\n    --color-success: #4caf50;\n    --color-warning: #ff9800;\n    --color-info: #2196f3;\n    --color-background: #fafbfc;\n    --color-on-background: #1e293b;\n    --color-surface: #fafbfc;\n    --color-on-surface: #1e293b;\n    --color-surface-variant: #f1f5f9;\n    --color-on-surface-variant: #64748b;\n    --color-outline: #cbd5e1;\n    --color-outline-variant: #94a3b8;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 96%, var(--color-primary) 4%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 75%, transparent);\n  }\n  [data-theme=dark] {\n    color-scheme: dark;\n    --color-primary: #7ca7ff;\n    --color-on-primary: #0f172a;\n    --color-secondary: #94a3b8;\n    --color-on-secondary: #1e293b;\n    --color-tertiary: #94a3b8;\n    --color-on-tertiary: #0f172a;\n    --color-error: #f87171;\n    --color-on-error: #450a0a;\n    --color-success: #66bb6a;\n    --color-warning: #ffa726;\n    --color-info: #42a5f5;\n    --color-background: #0f1419;\n    --color-on-background: #f1f5f9;\n    --color-surface: #0f1419;\n    --color-on-surface: #f1f5f9;\n    --color-surface-variant: #1e293b;\n    --color-on-surface-variant: #cbd5e1;\n    --color-outline: #475569;\n    --color-outline-variant: #334155;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 80%, var(--color-primary) 20%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 70%, transparent);\n  }\n  @media (prefers-reduced-motion: reduce) {\n    :root {\n      --transition-fast: 0ms;\n      --transition-normal: 0ms;\n      --transition-slow: 0ms;\n      --motion-fast: 0ms;\n      --motion-normal: 0ms;\n      --motion-slow: 0ms;\n    }\n  }\n  @media (prefers-contrast: high) {\n    :root {\n      --color-border: var(--color-border, var(--color-outline));\n      --color-border-hover: color-mix(in oklab, var(--color-border, var(--color-outline)) 80%, var(--color-on-surface, var(--color-on-surface)));\n      --color-text-secondary: var(--color-on-surface, var(--color-on-surface));\n      --color-text-muted: var(--color-on-surface-variant, var(--color-on-surface-variant));\n    }\n  }\n  @media print {\n    :root {\n      --view-padding: 0;\n      --view-content-max-width: 100%;\n      --view-bg: white;\n      --view-fg: black;\n      --view-heading-color: black;\n      --view-link-color: black;\n    }\n    :root:has([data-view=viewer]) {\n      --view-code-bg: #f5f5f5;\n      --view-code-fg: black;\n      --view-blockquote-bg: #f5f5f5;\n    }\n  }\n}\n/**\n * Unified CSS Custom Property Registration System\n * \n * This module consolidates property registration logic used across the library.\n * It provides a single source of truth for @property declarations via the\n * CSS Properties and Values API (CSS Houdini).\n * \n * Used by:\n * - lib/core/_properties.scss (orientation, transform, layout properties)\n * - lib/basic/_typed-properties.scss (UI component properties)\n * - lib/advanced/design/ (MD3 design properties)\n */\n/* stylelint-disable scss/function-no-unknown */\n@layer utilities {\n  .m-0 {\n    margin: 0;\n  }\n  .mb-0 {\n    margin-block: 0;\n  }\n  .mi-0 {\n    margin-inline: 0;\n  }\n  .p-0 {\n    padding: 0;\n  }\n  .pb-0 {\n    padding-block: 0;\n  }\n  .pi-0 {\n    padding-inline: 0;\n  }\n  .gap-0 {\n    gap: 0;\n  }\n  .inset-0 {\n    inset: 0;\n  }\n  .m-xs {\n    margin: 0.25rem;\n  }\n  .mb-xs {\n    margin-block: 0.25rem;\n  }\n  .mi-xs {\n    margin-inline: 0.25rem;\n  }\n  .p-xs {\n    padding: 0.25rem;\n  }\n  .pb-xs {\n    padding-block: 0.25rem;\n  }\n  .pi-xs {\n    padding-inline: 0.25rem;\n  }\n  .gap-xs {\n    gap: 0.25rem;\n  }\n  .inset-xs {\n    inset: 0.25rem;\n  }\n  .m-sm {\n    margin: 0.5rem;\n  }\n  .mb-sm {\n    margin-block: 0.5rem;\n  }\n  .mi-sm {\n    margin-inline: 0.5rem;\n  }\n  .p-sm {\n    padding: 0.5rem;\n  }\n  .pb-sm {\n    padding-block: 0.5rem;\n  }\n  .pi-sm {\n    padding-inline: 0.5rem;\n  }\n  .gap-sm {\n    gap: 0.5rem;\n  }\n  .inset-sm {\n    inset: 0.5rem;\n  }\n  .m-md {\n    margin: 0.75rem;\n  }\n  .mb-md {\n    margin-block: 0.75rem;\n  }\n  .mi-md {\n    margin-inline: 0.75rem;\n  }\n  .p-md {\n    padding: 0.75rem;\n  }\n  .pb-md {\n    padding-block: 0.75rem;\n  }\n  .pi-md {\n    padding-inline: 0.75rem;\n  }\n  .gap-md {\n    gap: 0.75rem;\n  }\n  .inset-md {\n    inset: 0.75rem;\n  }\n  .m-lg {\n    margin: 1rem;\n  }\n  .mb-lg {\n    margin-block: 1rem;\n  }\n  .mi-lg {\n    margin-inline: 1rem;\n  }\n  .p-lg {\n    padding: 1rem;\n  }\n  .pb-lg {\n    padding-block: 1rem;\n  }\n  .pi-lg {\n    padding-inline: 1rem;\n  }\n  .gap-lg {\n    gap: 1rem;\n  }\n  .inset-lg {\n    inset: 1rem;\n  }\n  .m-xl {\n    margin: 1.25rem;\n  }\n  .mb-xl {\n    margin-block: 1.25rem;\n  }\n  .mi-xl {\n    margin-inline: 1.25rem;\n  }\n  .p-xl {\n    padding: 1.25rem;\n  }\n  .pb-xl {\n    padding-block: 1.25rem;\n  }\n  .pi-xl {\n    padding-inline: 1.25rem;\n  }\n  .gap-xl {\n    gap: 1.25rem;\n  }\n  .inset-xl {\n    inset: 1.25rem;\n  }\n  .m-2xl {\n    margin: 1.5rem;\n  }\n  .mb-2xl {\n    margin-block: 1.5rem;\n  }\n  .mi-2xl {\n    margin-inline: 1.5rem;\n  }\n  .p-2xl {\n    padding: 1.5rem;\n  }\n  .pb-2xl {\n    padding-block: 1.5rem;\n  }\n  .pi-2xl {\n    padding-inline: 1.5rem;\n  }\n  .gap-2xl {\n    gap: 1.5rem;\n  }\n  .inset-2xl {\n    inset: 1.5rem;\n  }\n  .m-3xl {\n    margin: 2rem;\n  }\n  .mb-3xl {\n    margin-block: 2rem;\n  }\n  .mi-3xl {\n    margin-inline: 2rem;\n  }\n  .p-3xl {\n    padding: 2rem;\n  }\n  .pb-3xl {\n    padding-block: 2rem;\n  }\n  .pi-3xl {\n    padding-inline: 2rem;\n  }\n  .gap-3xl {\n    gap: 2rem;\n  }\n  .inset-3xl {\n    inset: 2rem;\n  }\n  .text-xs {\n    font-size: 0.75rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-sm {\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-base {\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-lg {\n    font-size: 1.125rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-xl {\n    font-size: 1.25rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-2xl {\n    font-size: 1.5rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .font-thin {\n    font-weight: 100;\n  }\n  .font-light {\n    font-weight: 300;\n  }\n  .font-normal {\n    font-weight: 400;\n  }\n  .font-medium {\n    font-weight: 500;\n  }\n  .font-semibold {\n    font-weight: 600;\n  }\n  .font-bold {\n    font-weight: 700;\n  }\n  .text-start {\n    text-align: start;\n  }\n  .text-center {\n    text-align: center;\n  }\n  .text-end {\n    text-align: end;\n  }\n  .text-primary {\n    color: #1e293b, #f1f5f9;\n  }\n  .text-secondary {\n    color: #64748b, #94a3b8;\n  }\n  .text-muted {\n    color: #94a3b8, #64748b;\n  }\n  .text-disabled {\n    color: #cbd5e1, #475569;\n  }\n  .block,\n  .vu-block {\n    display: block;\n  }\n  .inline,\n  .vu-inline {\n    display: inline;\n  }\n  .inline-block {\n    display: inline-block;\n  }\n  .flex,\n  .vu-flex {\n    display: flex;\n  }\n  .inline-flex {\n    display: inline-flex;\n  }\n  .grid,\n  .vu-grid {\n    display: grid;\n  }\n  .hidden,\n  .vu-hidden {\n    display: none;\n  }\n  .flex-row {\n    flex-direction: row;\n  }\n  .flex-col {\n    flex-direction: column;\n  }\n  .flex-wrap {\n    flex-wrap: wrap;\n  }\n  .flex-nowrap {\n    flex-wrap: nowrap;\n  }\n  .items-start {\n    align-items: flex-start;\n  }\n  .items-center {\n    align-items: center;\n  }\n  .items-end {\n    align-items: flex-end;\n  }\n  .items-stretch {\n    align-items: stretch;\n  }\n  .justify-start {\n    justify-content: flex-start;\n  }\n  .justify-center {\n    justify-content: center;\n  }\n  .justify-end {\n    justify-content: flex-end;\n  }\n  .justify-between {\n    justify-content: space-between;\n  }\n  .justify-around {\n    justify-content: space-around;\n  }\n  .grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .h-auto,\n  .block-size-auto {\n    block-size: auto;\n  }\n  .h-full,\n  .block-size-full {\n    block-size: 100%;\n  }\n  .h-screen {\n    block-size: 100vh;\n  }\n  .w-auto,\n  .inline-size-auto {\n    inline-size: auto;\n  }\n  .w-full,\n  .inline-size-full {\n    inline-size: 100%;\n  }\n  .w-screen {\n    inline-size: 100vw;\n  }\n  .min-h-0,\n  .min-block-size-0 {\n    min-block-size: 0;\n  }\n  .min-w-0,\n  .min-inline-size-0 {\n    min-inline-size: 0;\n  }\n  .max-h-full,\n  .max-block-size-full {\n    max-block-size: 100%;\n  }\n  .max-w-full,\n  .max-inline-size-full {\n    max-inline-size: 100%;\n  }\n  .static {\n    position: static;\n  }\n  .relative {\n    position: relative;\n  }\n  .absolute {\n    position: absolute;\n  }\n  .fixed {\n    position: fixed;\n  }\n  .sticky {\n    position: sticky;\n  }\n  .bg-surface {\n    background-color: #fafbfc, #0f1419;\n  }\n  .bg-surface-container {\n    background-color: #f1f5f9, #1e293b;\n  }\n  .bg-surface-container-high {\n    background-color: #e2e8f0, #334155;\n  }\n  .bg-primary {\n    background-color: #5a7fff, #7ca7ff;\n  }\n  .bg-secondary {\n    background-color: #6b7280, #94a3b8;\n  }\n  .border {\n    border: 1px solid #cbd5e1, #475569;\n  }\n  .border-2 {\n    border: 2px solid #cbd5e1, #475569;\n  }\n  .border-primary {\n    border: 1px solid #5a7fff, #7ca7ff;\n  }\n  .border-secondary {\n    border: 1px solid #6b7280, #94a3b8;\n  }\n  .rounded-none {\n    border-radius: 0;\n  }\n  .rounded-sm {\n    border-radius: 0.25rem;\n  }\n  .rounded-md {\n    border-radius: 0.375rem;\n  }\n  .rounded-lg {\n    border-radius: 0.5rem;\n  }\n  .rounded-full {\n    border-radius: 9999px;\n  }\n  .shadow-xs {\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  }\n  .shadow-sm {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  }\n  .shadow-md {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  }\n  .shadow-lg {\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  }\n  .shadow-xl {\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  }\n  .cursor-pointer {\n    cursor: pointer;\n  }\n  .cursor-default {\n    cursor: default;\n  }\n  .cursor-not-allowed {\n    cursor: not-allowed;\n  }\n  .select-none {\n    user-select: none;\n  }\n  .select-text {\n    user-select: text;\n  }\n  .select-all {\n    user-select: all;\n  }\n  .visible {\n    visibility: visible;\n  }\n  .invisible {\n    visibility: hidden;\n  }\n  .collapse,\n  .vs-collapsed {\n    visibility: collapse;\n  }\n  .opacity-0 {\n    opacity: 0;\n  }\n  .opacity-25 {\n    opacity: 0.25;\n  }\n  .opacity-50 {\n    opacity: 0.5;\n  }\n  .opacity-75 {\n    opacity: 0.75;\n  }\n  .opacity-100 {\n    opacity: 1;\n  }\n  @container (max-width: 320px) {\n    .hidden\\@xs {\n      display: none;\n    }\n  }\n  @container (max-width: 640px) {\n    .hidden\\@sm {\n      display: none;\n    }\n  }\n  @container (max-width: 768px) {\n    .hidden\\@md {\n      display: none;\n    }\n  }\n  @container (max-width: 1024px) {\n    .hidden\\@lg {\n      display: none;\n    }\n  }\n  @container (min-width: 320px) {\n    .block\\@xs {\n      display: block;\n    }\n  }\n  @container (min-width: 640px) {\n    .block\\@sm {\n      display: block;\n    }\n  }\n  @container (min-width: 768px) {\n    .block\\@md {\n      display: block;\n    }\n  }\n  @container (min-width: 1024px) {\n    .block\\@lg {\n      display: block;\n    }\n  }\n  @container (max-width: 320px) {\n    .text-sm\\@xs {\n      font-size: 0.875rem;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0;\n    }\n  }\n  @container (min-width: 640px) {\n    .text-base\\@sm {\n      font-size: 1rem;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0;\n    }\n  }\n  .icon-xs {\n    --icon-size: 0.75rem;\n  }\n  .icon-sm {\n    --icon-size: 0.875rem;\n  }\n  .icon-md {\n    --icon-size: 1rem;\n  }\n  .icon-lg {\n    --icon-size: 1.25rem;\n  }\n  .icon-xl {\n    --icon-size: 1.5rem;\n  }\n  .center-absolute {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  .center-flex {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: nowrap;\n  }\n  .interactive {\n    cursor: pointer;\n    touch-action: manipulation;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .interactive:focus-visible {\n    outline: 2px solid #dbeafe, #1e40af;\n    outline-offset: 2px;\n  }\n  .interactive:disabled, .interactive[aria-disabled=true] {\n    cursor: not-allowed;\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  .focus-ring:focus-visible {\n    outline: 2px solid #dbeafe, #1e40af;\n    outline-offset: 2px;\n  }\n  .truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .truncate-2 {\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .truncate-3 {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .aspect-square {\n    aspect-ratio: 1;\n  }\n  .aspect-video {\n    aspect-ratio: 16 / 9;\n  }\n  .margin-block-0 {\n    margin-block: 0;\n  }\n  .margin-block-sm {\n    margin-block: var(--space-sm);\n  }\n  .margin-block-md {\n    margin-block: var(--space-md);\n  }\n  .margin-block-lg {\n    margin-block: var(--space-lg);\n  }\n  .margin-inline-0 {\n    margin-inline: 0;\n  }\n  .margin-inline-sm {\n    margin-inline: var(--space-sm);\n  }\n  .margin-inline-md {\n    margin-inline: var(--space-md);\n  }\n  .margin-inline-lg {\n    margin-inline: var(--space-lg);\n  }\n  .margin-inline-auto {\n    margin-inline: auto;\n  }\n  .padding-block-0 {\n    padding-block: 0;\n  }\n  .padding-block-sm {\n    padding-block: var(--space-sm);\n  }\n  .padding-block-md {\n    padding-block: var(--space-md);\n  }\n  .padding-block-lg {\n    padding-block: var(--space-lg);\n  }\n  .padding-inline-0 {\n    padding-inline: 0;\n  }\n  .padding-inline-sm {\n    padding-inline: var(--space-sm);\n  }\n  .padding-inline-md {\n    padding-inline: var(--space-md);\n  }\n  .padding-inline-lg {\n    padding-inline: var(--space-lg);\n  }\n  .pointer-events-none {\n    pointer-events: none;\n  }\n  .pointer-events-auto {\n    pointer-events: auto;\n  }\n  .line-clamp-1 {\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .line-clamp-2 {\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .line-clamp-3 {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .vs-active {\n    --state-active: 1;\n  }\n  .vs-disabled {\n    pointer-events: none;\n    opacity: 0.5;\n  }\n  .vs-loading {\n    cursor: wait;\n  }\n  .vs-error {\n    color: var(--color-error, #dc3545);\n  }\n  .vs-success {\n    color: var(--color-success, #28a745);\n  }\n  .vs-hidden {\n    display: none !important;\n  }\n  .vl-container,\n  .container {\n    inline-size: 100%;\n    max-inline-size: var(--container-max, 1200px);\n    margin-inline: auto;\n  }\n  .vl-container {\n    padding-inline: var(--space-md);\n  }\n  .container {\n    padding-inline: var(--space-lg);\n  }\n  .vl-grid {\n    display: grid;\n    gap: var(--gap-md);\n  }\n  .vl-stack {\n    display: flex;\n    flex-direction: column;\n    gap: var(--gap-md);\n  }\n  .vl-cluster {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--gap-sm);\n    align-items: center;\n  }\n  .vl-center {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .vu-sr-only {\n    position: absolute;\n    inline-size: 1px;\n    block-size: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n  }\n  .vc-surface {\n    background-color: var(--color-surface);\n    color: var(--color-on-surface);\n  }\n  .vc-surface-variant {\n    background-color: var(--color-surface-variant);\n    color: var(--color-on-surface-variant);\n  }\n  .vc-primary {\n    background-color: var(--color-primary);\n    color: var(--color-on-primary);\n  }\n  .vc-secondary {\n    background-color: var(--color-secondary);\n    color: var(--color-on-secondary);\n  }\n  .vc-elevated {\n    box-shadow: var(--elev-1);\n  }\n  .vc-elevated-2 {\n    box-shadow: var(--elev-2);\n  }\n  .vc-elevated-3 {\n    box-shadow: var(--elev-3);\n  }\n  .vc-rounded {\n    border-radius: var(--radius-md);\n  }\n  .vc-rounded-sm {\n    border-radius: var(--radius-sm);\n  }\n  .vc-rounded-lg {\n    border-radius: var(--radius-lg);\n  }\n  .vc-rounded-full {\n    border-radius: var(--radius-full, 9999px);\n  }\n  .card {\n    background: var(--color-bg);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-lg);\n    padding: var(--space-lg);\n    box-shadow: var(--shadow-sm);\n  }\n  .stack > * + * {\n    margin-block-start: var(--space-md);\n  }\n  .stack-sm > * + * {\n    margin-block-start: var(--space-sm);\n  }\n  .stack-lg > * + * {\n    margin-block-start: var(--space-lg);\n  }\n  @media print {\n    .print-hidden {\n      display: none !important;\n    }\n    .print-visible {\n      display: block !important;\n    }\n    .print-break-before {\n      page-break-before: always;\n    }\n    .print-break-after {\n      page-break-after: always;\n    }\n    .print-break-inside-avoid {\n      page-break-inside: avoid;\n    }\n  }\n  @media (prefers-reduced-motion: reduce) {\n    .transition-fast,\n    .transition-normal,\n    .transition-slow {\n      transition: none;\n    }\n    * {\n      animation-duration: 0.01ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01ms !important;\n    }\n  }\n  @media (prefers-contrast: high) {\n    .text-primary {\n      color: var(--color-on-surface);\n    }\n    .text-secondary,\n    .text-muted,\n    .text-disabled {\n      color: var(--color-on-surface-variant);\n    }\n    .border {\n      border-width: 2px;\n    }\n    .border-top {\n      border-top-width: 2px;\n    }\n    .border-bottom {\n      border-bottom-width: 2px;\n    }\n    .border-left {\n      border-left-width: 2px;\n    }\n    .border-right {\n      border-right-width: 2px;\n    }\n  }\n}\n@property --value {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: true;\n}\n@property --relate {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: true;\n}\n@property --drag-x {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: false;\n}\n@property --drag-y {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: false;\n}\n@property --order {\n  syntax: \"<integer>\";\n  initial-value: 1;\n  inherits: true;\n}\n@property --content-inline-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 100%;\n  inherits: true;\n}\n@property --content-block-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 100%;\n  inherits: true;\n}\n@property --icon-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 16px;\n  inherits: true;\n}\n@property --icon-color {\n  syntax: \"<color>\";\n  initial-value: rgba(0, 0, 0, 0);\n  inherits: true;\n}\n@property --icon-padding {\n  syntax: \"<length-percentage>\";\n  initial-value: 0px;\n  inherits: true;\n}\n@property --icon-image {\n  syntax: \"<image>\";\n  initial-value: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));\n  inherits: true;\n}\n@layer ux-classes {\n  .grid-rows > ::slotted(*) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  .grid-rows > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-rows > ::slotted(*) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  .grid-rows > * {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  .grid-rows > * {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-rows > * {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  :host(.grid-rows) ::slotted(*) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  :host(.grid-rows) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-rows) ::slotted(*) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  .grid-rows {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-rows {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows {\n    grid-auto-rows: minmax(0px, max-content);\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  :host(.grid-rows) {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-rows) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows) {\n    grid-auto-rows: minmax(0px, max-content);\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  .grid-columns > ::slotted(*) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  .grid-columns > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-columns > ::slotted(*) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  .grid-columns > * {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  .grid-columns > * {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-columns > * {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  .grid-columns {\n    --display: inline-grid;\n    --flow: row;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-columns {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-columns {\n    grid-auto-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  :host(.grid-columns) {\n    --display: inline-grid;\n    --flow: row;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-columns) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-columns) {\n    grid-auto-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  .flex-columns > ::slotted(*) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  .flex-columns > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.flex-columns) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  :host(.flex-columns) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  .flex-columns > * {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  .flex-columns > * {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.flex-columns) ::slotted(*) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  :host(.flex-columns) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .flex-columns {\n    --display: inline-flex;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .flex-columns {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.flex-columns) {\n    --display: inline-flex;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.flex-columns) {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-layered > ::slotted(*) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > ::slotted(*) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) ::slotted(::slotted(*)) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) ::slotted(::slotted(*)) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered > * {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > * > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) ::slotted(*) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) ::slotted(*) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-layered {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-layered) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-layered) {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows-3c > ::slotted(*) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) ::slotted(::slotted(*)) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c > * {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) ::slotted(*) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows-3c) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows-3c > ::slotted(*:last-child) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  :host(.grid-rows-3c) ::slotted(::slotted(*:last-child)) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  .grid-rows-3c > *:last-child {\n    grid-column: var(--order, 1)/3 span;\n  }\n  :host(.grid-rows-3c) ::slotted(*:last-child) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  .grid-rows-3c {\n    --order: sibling-index();\n  }\n  .grid-rows-3c {\n    grid-column: var(--order, 1)/var(--order, 1) span;\n  }\n  .grid-rows-3c {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows-3c) {\n    --order: sibling-index();\n  }\n  :host(.grid-rows-3c) {\n    grid-column: var(--order, 1)/var(--order, 1) span;\n  }\n  :host(.grid-rows-3c) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .stretch-inline {\n    inline-size: 100%;\n    inline-size: -webkit-fill-available;\n    inline-size: stretch;\n  }\n  :host(.stretch-inline) {\n    inline-size: 100%;\n    inline-size: -webkit-fill-available;\n    inline-size: stretch;\n  }\n  .stretch-block {\n    block-size: 100%;\n    block-size: -webkit-fill-available;\n    block-size: stretch;\n  }\n  :host(.stretch-block) {\n    block-size: 100%;\n    block-size: -webkit-fill-available;\n    block-size: stretch;\n  }\n  .content-inline-size {\n    padding-inline: max(100% - (100% - var(--content-inline-size, 100%) * 0.5), 0px);\n  }\n  :host(.content-inline-size) {\n    padding-inline: max(100% - (100% - var(--content-inline-size, 100%) * 0.5), 0px);\n  }\n  .content-block-size {\n    padding-block: max(100% - (100% - var(--content-block-size, 100%) * 0.5), 0px);\n  }\n  :host(.content-block-size) {\n    padding-block: max(100% - (100% - var(--content-block-size, 100%) * 0.5), 0px);\n  }\n  .ux-anchor {\n    inset-inline-start: max(var(--client-x, 0px), 0px);\n    inset-block-start: max(var(--client-y, 0px), 0px);\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    writing-mode: horizontal-tb;\n    translate: 0% 0% 0%;\n    transform: none;\n  }\n  .ux-anchor {\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--client-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--client-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n  }\n  @supports (position-anchor: --example) {\n    .ux-anchor {\n      position-anchor: var(--anchor-group);\n      inset-inline-start: anchor(var(--anchor-group) start);\n      inset-block-start: anchor(var(--anchor-group) end);\n      inline-size: anchor-size(var(--anchor-group) self-inline);\n    }\n  }\n  :host(.ux-anchor) {\n    inset-inline-start: max(var(--client-x, 0px), 0px);\n    inset-block-start: max(var(--client-y, 0px), 0px);\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    writing-mode: horizontal-tb;\n    translate: 0% 0% 0%;\n    transform: none;\n  }\n  :host(.ux-anchor) {\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--client-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--client-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n  }\n  @supports (position-anchor: --example) {\n    :host(.ux-anchor) {\n      position-anchor: var(--anchor-group);\n      inset-inline-start: anchor(var(--anchor-group) start);\n      inset-block-start: anchor(var(--anchor-group) end);\n      inline-size: anchor-size(var(--anchor-group) self-inline);\n    }\n  }\n  .ux-anchor {\n    --shift-x: var(--client-x, 0px);\n    --shift-y: var(--client-y, 0px);\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    inset-inline-start: max(var(--shift-x), 0px);\n    inset-block-start: max(var(--shift-y), var(--status-bar-padding, 0px));\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    translate: 0% 0% 0%;\n    writing-mode: horizontal-tb;\n    transform: none;\n  }\n  :host(.ux-anchor) {\n    --shift-x: var(--client-x, 0px);\n    --shift-y: var(--client-y, 0px);\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    inset-inline-start: max(var(--shift-x), 0px);\n    inset-block-start: max(var(--shift-y), var(--status-bar-padding, 0px));\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    translate: 0% 0% 0%;\n    writing-mode: horizontal-tb;\n    transform: none;\n  }\n  .layered-wrap {\n    background-color: transparent;\n    display: inline grid;\n    inline-size: max-content;\n    block-size: max-content;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    z-index: calc(var(--z-index, 0) + 1);\n    overflow: visible;\n  }\n  .layered-wrap > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.layered-wrap) {\n    background-color: transparent;\n    display: inline grid;\n    inline-size: max-content;\n    block-size: max-content;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    z-index: calc(var(--z-index, 0) + 1);\n    overflow: visible;\n  }\n  :host(.layered-wrap) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n}\n@layer components {\n  ui-icon {\n    --icon-color: currentColor;\n    --icon-size: 1rem;\n    --icon-padding: 0.125rem;\n    display: inline-grid;\n    place-content: center;\n    place-items: center;\n    color: var(--icon-color);\n    aspect-ratio: 1;\n  }\n  ui-icon {\n    vertical-align: middle;\n    margin-inline-end: 0.125rem;\n  }\n  ui-icon:last-child {\n    margin-inline-end: 0;\n  }\n}\n@position-try --just-block {\n  inset-block-end: 0px;\n}\n@position-try --just-inline {\n  inset-inline-end: 0px;\n}\n@keyframes percent-coef-x {\n  from {\n    sass(\"--percent-x\"): 0;\n  }\n  to {\n    sass(\"--percent-x\"): 1;\n  }\n}\n@keyframes percent-coef-y {\n  from {\n    sass(\"--percent-y\"): 0;\n  }\n  to {\n    sass(\"--percent-y\"): 1;\n  }\n}", V = /* @__PURE__ */ new Map(), H = /* @__PURE__ */ new Map();
function U(e) {
	if (typeof Uint8Array.fromBase64 == "function") return Uint8Array.fromBase64(e);
	let t = atob(e), n = new Uint8Array(t.length);
	for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
	return n;
}
async function ue(e, t = "gzip") {
	if (typeof CompressionStream > "u") throw Error("Compression Streams API is not supported in this browser");
	let n = new DecompressionStream(t), r = n.writable.getWriter(), i = n.readable.getReader();
	r.write(e), r.close();
	let a = [], o = !1;
	for (; !o;) {
		let { value: e, done: t } = await i.read();
		o = t, e && a.push(e);
	}
	let s = a.reduce((e, t) => e + t.length, 0), c = new Uint8Array(s), l = 0;
	for (let e of a) c.set(e, l), l += e.length;
	return c;
}
async function de(e, t, n = "font/woff2") {
	if (V.has(t)) return V.get(t);
	let r = new Blob([e], { type: n }), i = URL.createObjectURL(r);
	return V.set(t, i), i;
}
async function fe(e) {
	let { base64: t, family: n, style: r = "normal", weight: i = "normal", compressed: a = !1 } = e, o = `${n}-${r}-${i}`;
	if (H.has(o)) return H.get(o);
	let s = U(t), c = await de(a ? await ue(s) : s, o, a ? "application/octet-stream" : "font/woff2"), l = new FontFace(n, `url(${c}) format('woff2')`, {
		style: r,
		weight: typeof i == "string" ? i : `${i}`,
		display: "swap"
	});
	return await l.load(), document.fonts.add(l), H.set(o, l), l;
}
async function pe(e) {
	let t = e.map((e) => fe(e));
	return Promise.all(t);
}
var W = null;
async function me() {
	return W || (W = import("./font-registry-D-pRGvVY.js")?.catch?.((e) => {
		console.error("Failed to load font registry:", e);
	}), W);
}
async function he() {
	let e = await me();
	return pe(Object.values(e.fontRegistry));
}
//#endregion
//#region ../../projects/fl.ui/src/styles/patch-global-native-controls.scss?inline
var ge = "@layer tokens, base, layout, utilities, shells, shell, views, view, viewer, components, ux-layer, markdown, essentials, print, print-breaks, overrides;\n@layer components {\n  button {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    gap: var(--space-sm);\n    padding-block: 0px;\n    padding-inline: 0px;\n    font-size: var(--font-size-sm);\n    font-weight: 500;\n    border-radius: var(--radius-md);\n    background: var(--color-bg-alt);\n    color: var(--color-fg);\n    border: 1px solid var(--color-border);\n    cursor: pointer;\n    transition: all var(--transition-fast);\n  }\n  button:hover:not(:disabled) {\n    background: var(--color-border);\n  }\n  button:focus-visible {\n    outline: 2px solid var(--color-primary);\n    outline-offset: 2px;\n  }\n  button:disabled {\n    opacity: 0.5;\n    cursor: not-allowed;\n  }\n}\n@layer layer.shell.faint.forms {\n  input,\n  select,\n  textarea {\n    background-repeat: no-repeat;\n    min-block-size: 2.5rem;\n    font-size: inherit;\n    max-inline-size: stretch;\n    max-inline-size: 100cqi;\n    text-overflow: ellipsis;\n    overflow: auto;\n    scrollbar-width: none;\n  }\n  textarea[data-multiline=true] {\n    min-block-size: 5rem;\n    resize: vertical;\n  }\n}", _e = "\n    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');\n", ve = async (e) => {
	await s(_e)?.catch(() => void 0), await he().catch(() => void 0), await s(B)?.catch(() => void 0), e?.includeGlobalNativeControls && await s(ge)?.catch(() => void 0);
}, G = class extends t() {
	theme = "default";
	render = function() {
		return i`<slot></slot>`;
	};
	constructor() {
		super();
	}
	onRender() {
		return super.onRender();
	}
	connectedCallback() {
		return super.connectedCallback?.() ?? this;
	}
	onInitialize() {
		let e = super.onInitialize() ?? this;
		return e.loadStyleLibrary(ee()), e;
	}
};
_([a({ source: "attr" })], G.prototype, "theme", void 0), G = _([n("ui-element")], G);
var K = G, ye = r("@function --hsv(--src-color <color>) returns <color> {\n  result: hsl(from var(--src-color, black) h calc(calc((calc(l / 100) - calc(calc(l / 100) * (1 - calc(s / 100) / 2))) / clamp(0.0001, min(calc(calc(l / 100) * (1 - calc(s / 100) / 2)), calc(1 - calc(calc(l / 100) * (1 - calc(s / 100) / 2)))), 1)) * 100) calc(calc(calc(l / 100) * (1 - calc(s / 100) / 2)) * 100) / alpha);\n}\n/* ai-refactor: optimized/refactored at 2026-02-13T02:50:43Z */\n/* ==========================================================================\n    Meta / Declarations\n   ========================================================================== */\n/* ==========================================================================\n    Tokens / Mixins (global, not layered)\n   ========================================================================== */\n/* ai-refactor: optimized/refactored at 2026-02-13T00:48:23Z */\n@layer tokens, base, layout, utilities, shells, shell, views, view, viewer, components, ux-layer, markdown, essentials, print, print-breaks, overrides;\n@layer tokens {\n  :root,\n  :host,\n  :scope {\n    color-scheme: light dark;\n    --color-primary: #5a7fff;\n    --color-on-primary: #ffffff;\n    --color-secondary: #6b7280;\n    --color-on-secondary: #ffffff;\n    --color-tertiary: #64748b;\n    --color-on-tertiary: #ffffff;\n    --color-error: #ef4444;\n    --color-on-error: #ffffff;\n    --color-success: #4caf50;\n    --color-warning: #ff9800;\n    --color-info: #2196f3;\n    --color-background: #fafbfc;\n    --color-on-background: #1e293b;\n    --color-surface: #fafbfc;\n    --color-on-surface: #1e293b;\n    --color-surface-variant: #f1f5f9;\n    --color-on-surface-variant: #64748b;\n    --color-outline: #cbd5e1;\n    --color-outline-variant: #94a3b8;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 96%, var(--color-primary) 4%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 75%, transparent);\n    --space-xs: 0.25rem;\n    --space-sm: 0.5rem;\n    --space-md: 0.75rem;\n    --space-lg: 1rem;\n    --space-xl: 1.25rem;\n    --space-2xl: 1.5rem;\n    --padding-xs: var(--space-xs);\n    --padding-sm: var(--space-sm);\n    --padding-md: var(--space-md);\n    --padding-lg: var(--space-lg);\n    --padding-xl: var(--space-xl);\n    --padding-2xl: var(--space-2xl);\n    --padding-3xl: 2rem;\n    --padding-4xl: 2.5rem;\n    --padding-5xl: 3rem;\n    --padding-6xl: 4rem;\n    --padding-7xl: 5rem;\n    --padding-8xl: 6rem;\n    --padding-9xl: 8rem;\n    --gap-xs: var(--space-xs);\n    --gap-sm: var(--space-sm);\n    --gap-md: var(--space-md);\n    --gap-lg: var(--space-lg);\n    --gap-xl: var(--space-xl);\n    --gap-2xl: var(--space-2xl);\n    --radius-none: 0;\n    --radius-sm: 0.25rem;\n    --radius-default: 0.25rem;\n    --radius-md: 0.375rem;\n    --radius-lg: 0.5rem;\n    --radius-xl: 0.75rem;\n    --radius-2xl: 1rem;\n    --radius-3xl: 1.5rem;\n    --radius-full: 9999px;\n    --elev-0: none;\n    --elev-1: 0 1px 1px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1);\n    --elev-2: 0 2px 6px rgba(0, 0, 0, 0.12), 0 8px 24px rgba(0, 0, 0, 0.08);\n    --elev-3: 0 6px 16px rgba(0, 0, 0, 0.14), 0 18px 48px rgba(0, 0, 0, 0.1);\n    --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);\n    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);\n    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);\n    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);\n    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);\n    --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.1);\n    --shadow-inset: inset 0 2px 4px rgba(0, 0, 0, 0.06);\n    --shadow-inset-strong: inset 0 4px 8px rgba(0, 0, 0, 0.12);\n    --shadow-none: 0 0 #0000;\n    --text-xs: 0.8rem;\n    --text-sm: 0.9rem;\n    --text-base: 1rem;\n    --text-lg: 1.1rem;\n    --text-xl: 1.25rem;\n    --text-2xl: 1.6rem;\n    --text-3xl: 2rem;\n    --font-size-xs: 0.75rem;\n    --font-size-sm: 0.875rem;\n    --font-size-base: 1rem;\n    --font-size-lg: 1.125rem;\n    --font-size-xl: 1.25rem;\n    --font-weight-normal: 400;\n    --font-weight-medium: 500;\n    --font-weight-semibold: 600;\n    --font-weight-bold: 700;\n    --font-family: \"Roboto\", ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;\n    --font-family-mono: \"Roboto Mono\", \"SF Mono\", Monaco, Inconsolata, \"Fira Code\", monospace;\n    --font-sans: var(--font-family);\n    --font-mono: var(--font-family-mono);\n    --leading-tight: 1.2;\n    --leading-normal: 1.5;\n    --leading-relaxed: 1.8;\n    --transition-fast: 120ms cubic-bezier(0.2, 0, 0, 1);\n    --transition-normal: 160ms cubic-bezier(0.2, 0, 0, 1);\n    --transition-slow: 200ms cubic-bezier(0.2, 0, 0, 1);\n    --motion-fast: var(--transition-fast);\n    --motion-normal: var(--transition-normal);\n    --motion-slow: var(--transition-slow);\n    --focus-ring: 0 0 0 3px color-mix(in oklab, var(--color-primary) 35%, transparent);\n    --z-base: 0;\n    --z-dropdown: 100;\n    --z-sticky: 200;\n    --z-fixed: 300;\n    --z-modal-backdrop: 400;\n    --z-modal: 500;\n    --z-popover: 600;\n    --z-tooltip: 700;\n    --z-toast: 800;\n    --z-max: 9999;\n    --view-bg: var(--color-surface);\n    --view-fg: var(--color-on-surface);\n    --view-border: var(--color-outline-variant);\n    --view-input-bg: light-dark(#ffffff, var(--color-surface-container-high));\n    --view-files-bg: light-dark(rgba(0, 0, 0, 0.02), var(--color-surface-container-low));\n    --view-file-bg: light-dark(rgba(0, 0, 0, 0.03), var(--color-surface-container-lowest, var(--color-surface-container-low)));\n    --view-results-bg: light-dark(rgba(0, 0, 0, 0.01), var(--color-surface-container-low));\n    --view-result-bg: light-dark(rgba(0, 0, 0, 0.03), var(--color-surface-container-lowest, var(--color-surface-container-low)));\n    --color-surface-elevated: var(--color-surface-container);\n    --color-surface-hover: var(--color-surface-container-low);\n    --color-surface-active: var(--color-surface-container-high);\n    --color-on-surface-muted: var(--color-on-surface-variant);\n    --color-background-alt: var(--color-surface-variant);\n    --color-primary-hover: color-mix(in oklab, var(--color-primary) 80%, black);\n    --color-primary-active: color-mix(in oklab, var(--color-primary) 65%, black);\n    --color-accent: var(--color-secondary);\n    --color-accent-hover: color-mix(in oklab, var(--color-secondary) 80%, black);\n    --color-on-accent: var(--color-on-secondary);\n    --color-border-hover: var(--color-outline-variant);\n    --color-border-strong: var(--color-outline);\n    --color-border-focus: var(--color-primary);\n    --color-text: var(--color-on-surface);\n    --color-text-secondary: var(--color-on-surface-variant);\n    --color-text-muted: color-mix(in oklab, var(--color-on-surface) 50%, var(--color-surface));\n    --color-text-disabled: color-mix(in oklab, var(--color-on-surface) 38%, var(--color-surface));\n    --color-text-inverse: var(--color-on-primary);\n    --color-link: var(--color-primary);\n    --color-link-hover: color-mix(in oklab, var(--color-primary) 80%, black);\n    --color-success-light: color-mix(in oklab, var(--color-success) 60%, white);\n    --color-success-dark: color-mix(in oklab, var(--color-success) 70%, black);\n    --color-warning-light: color-mix(in oklab, var(--color-warning) 60%, white);\n    --color-warning-dark: color-mix(in oklab, var(--color-warning) 70%, black);\n    --color-error-light: color-mix(in oklab, var(--color-error) 60%, white);\n    --color-error-dark: color-mix(in oklab, var(--color-error) 70%, black);\n    --color-info-light: color-mix(in oklab, var(--color-info) 60%, white);\n    --color-info-dark: color-mix(in oklab, var(--color-info) 70%, black);\n    --color-bg: var(--color-surface, var(--color-surface));\n    --color-bg-alt: var(--color-surface-variant, var(--color-surface-variant));\n    --color-fg: var(--color-on-surface, var(--color-on-surface));\n    --color-fg-muted: var(--color-on-surface-variant, var(--color-on-surface-variant));\n    --btn-height-sm: 2rem;\n    --btn-height-md: 2.5rem;\n    --btn-height-lg: 3rem;\n    --btn-padding-x-sm: var(--space-md);\n    --btn-padding-x-md: var(--space-lg);\n    --btn-padding-x-lg: 1.5rem;\n    --btn-radius: var(--radius-md);\n    --btn-font-weight: var(--font-weight-medium);\n    --input-height-sm: 2rem;\n    --input-height-md: 2.5rem;\n    --input-height-lg: 3rem;\n    --input-padding-x: var(--space-md);\n    --input-radius: var(--radius-md);\n    --input-border-color: var(--color-border, var(--color-border));\n    --input-focus-ring-color: var(--color-primary);\n    --input-focus-ring-width: 2px;\n    --card-padding: var(--space-lg);\n    --card-radius: var(--radius-lg);\n    --card-shadow: var(--shadow-sm);\n    --card-border-color: var(--color-border, var(--color-border));\n    --modal-backdrop-bg: light-dark(rgb(0 0 0 / 0.5), rgb(0 0 0 / 0.7));\n    --modal-bg: var(--color-surface, var(--color-surface));\n    --modal-radius: var(--radius-xl);\n    --modal-shadow: var(--shadow-xl);\n    --modal-padding: 1.5rem;\n    --toast-font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif);\n    --toast-font-size: var(--font-size-base, 1rem);\n    --toast-font-weight: var(--font-weight-medium, 500);\n    --toast-letter-spacing: 0.01em;\n    --toast-line-height: 1.4;\n    --toast-white-space: nowrap;\n    --toast-pointer-events: auto;\n    --toast-user-select: none;\n    --toast-cursor: default;\n    --toast-opacity: 0;\n    --toast-transform: translateY(100%) scale(0.9);\n    --toast-transition: opacity 160ms ease-out, transform 160ms cubic-bezier(0.16, 1, 0.3, 1), background-color 100ms ease;\n    --toast-text: var(--color-on-surface, var(--color-on-surface, light-dark(#ffffff, #000000)));\n    --toast-bg: color-mix(in oklab, var(--color-surface-elevated, var(--color-surface-container-high, var(--color-surface, light-dark(#fafbfc, #1e293b)))) 90%, var(--color-on-surface, var(--color-on-surface, light-dark(#000000, #ffffff))));\n    --toast-radius: var(--radius-lg);\n    --toast-shadow: var(--shadow-lg);\n    --toast-padding: var(--space-lg);\n    --sidebar-width: 280px;\n    --sidebar-collapsed-width: 64px;\n    --nav-height: 56px;\n    --nav-height-compact: 48px;\n    --status-height: 24px;\n    --status-bg: var(--color-surface-elevated, var(--color-surface-container-high));\n    --status-font-size: var(--text-xs);\n  }\n  @media (prefers-color-scheme: dark) {\n    :root,\n    :host,\n    :scope {\n      --color-primary: #7ca7ff;\n      --color-on-primary: #0f172a;\n      --color-secondary: #94a3b8;\n      --color-on-secondary: #1e293b;\n      --color-tertiary: #94a3b8;\n      --color-on-tertiary: #0f172a;\n      --color-error: #f87171;\n      --color-on-error: #450a0a;\n      --color-success: #66bb6a;\n      --color-warning: #ffa726;\n      --color-info: #42a5f5;\n      --color-background: #0f1419;\n      --color-on-background: #f1f5f9;\n      --color-surface: #0f1419;\n      --color-on-surface: #f1f5f9;\n      --color-surface-variant: #1e293b;\n      --color-on-surface-variant: #cbd5e1;\n      --color-outline: #475569;\n      --color-outline-variant: #334155;\n      --color-surface-container-low: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n      --color-surface-container: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n      --color-surface-container-high: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n      --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 80%, var(--color-primary) 20%);\n      --color-border: color-mix(in oklab, var(--color-outline-variant) 70%, transparent);\n    }\n  }\n  [data-theme=light] {\n    color-scheme: light;\n    --color-primary: #5a7fff;\n    --color-on-primary: #ffffff;\n    --color-secondary: #6b7280;\n    --color-on-secondary: #ffffff;\n    --color-tertiary: #64748b;\n    --color-on-tertiary: #ffffff;\n    --color-error: #ef4444;\n    --color-on-error: #ffffff;\n    --color-success: #4caf50;\n    --color-warning: #ff9800;\n    --color-info: #2196f3;\n    --color-background: #fafbfc;\n    --color-on-background: #1e293b;\n    --color-surface: #fafbfc;\n    --color-on-surface: #1e293b;\n    --color-surface-variant: #f1f5f9;\n    --color-on-surface-variant: #64748b;\n    --color-outline: #cbd5e1;\n    --color-outline-variant: #94a3b8;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 96%, var(--color-primary) 4%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 75%, transparent);\n  }\n  [data-theme=dark] {\n    color-scheme: dark;\n    --color-primary: #7ca7ff;\n    --color-on-primary: #0f172a;\n    --color-secondary: #94a3b8;\n    --color-on-secondary: #1e293b;\n    --color-tertiary: #94a3b8;\n    --color-on-tertiary: #0f172a;\n    --color-error: #f87171;\n    --color-on-error: #450a0a;\n    --color-success: #66bb6a;\n    --color-warning: #ffa726;\n    --color-info: #42a5f5;\n    --color-background: #0f1419;\n    --color-on-background: #f1f5f9;\n    --color-surface: #0f1419;\n    --color-on-surface: #f1f5f9;\n    --color-surface-variant: #1e293b;\n    --color-on-surface-variant: #cbd5e1;\n    --color-outline: #475569;\n    --color-outline-variant: #334155;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 80%, var(--color-primary) 20%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 70%, transparent);\n  }\n  @media (prefers-reduced-motion: reduce) {\n    :root {\n      --transition-fast: 0ms;\n      --transition-normal: 0ms;\n      --transition-slow: 0ms;\n      --motion-fast: 0ms;\n      --motion-normal: 0ms;\n      --motion-slow: 0ms;\n    }\n  }\n  @media (prefers-contrast: high) {\n    :root {\n      --color-border: var(--color-border, var(--color-outline));\n      --color-border-hover: color-mix(in oklab, var(--color-border, var(--color-outline)) 80%, var(--color-on-surface, var(--color-on-surface)));\n      --color-text-secondary: var(--color-on-surface, var(--color-on-surface));\n      --color-text-muted: var(--color-on-surface-variant, var(--color-on-surface-variant));\n    }\n  }\n  @media print {\n    :root {\n      --view-padding: 0;\n      --view-content-max-width: 100%;\n      --view-bg: white;\n      --view-fg: black;\n      --view-heading-color: black;\n      --view-link-color: black;\n    }\n    :root:has([data-view=viewer]) {\n      --view-code-bg: #f5f5f5;\n      --view-code-fg: black;\n      --view-blockquote-bg: #f5f5f5;\n    }\n  }\n}\n/**\n * Unified CSS Custom Property Registration System\n * \n * This module consolidates property registration logic used across the library.\n * It provides a single source of truth for @property declarations via the\n * CSS Properties and Values API (CSS Houdini).\n * \n * Used by:\n * - lib/core/_properties.scss (orientation, transform, layout properties)\n * - lib/basic/_typed-properties.scss (UI component properties)\n * - lib/advanced/design/ (MD3 design properties)\n */\n/* stylelint-disable scss/function-no-unknown */\n@layer utilities {\n  .m-0 {\n    margin: 0;\n  }\n  .mb-0 {\n    margin-block: 0;\n  }\n  .mi-0 {\n    margin-inline: 0;\n  }\n  .p-0 {\n    padding: 0;\n  }\n  .pb-0 {\n    padding-block: 0;\n  }\n  .pi-0 {\n    padding-inline: 0;\n  }\n  .gap-0 {\n    gap: 0;\n  }\n  .inset-0 {\n    inset: 0;\n  }\n  .m-xs {\n    margin: 0.25rem;\n  }\n  .mb-xs {\n    margin-block: 0.25rem;\n  }\n  .mi-xs {\n    margin-inline: 0.25rem;\n  }\n  .p-xs {\n    padding: 0.25rem;\n  }\n  .pb-xs {\n    padding-block: 0.25rem;\n  }\n  .pi-xs {\n    padding-inline: 0.25rem;\n  }\n  .gap-xs {\n    gap: 0.25rem;\n  }\n  .inset-xs {\n    inset: 0.25rem;\n  }\n  .m-sm {\n    margin: 0.5rem;\n  }\n  .mb-sm {\n    margin-block: 0.5rem;\n  }\n  .mi-sm {\n    margin-inline: 0.5rem;\n  }\n  .p-sm {\n    padding: 0.5rem;\n  }\n  .pb-sm {\n    padding-block: 0.5rem;\n  }\n  .pi-sm {\n    padding-inline: 0.5rem;\n  }\n  .gap-sm {\n    gap: 0.5rem;\n  }\n  .inset-sm {\n    inset: 0.5rem;\n  }\n  .m-md {\n    margin: 0.75rem;\n  }\n  .mb-md {\n    margin-block: 0.75rem;\n  }\n  .mi-md {\n    margin-inline: 0.75rem;\n  }\n  .p-md {\n    padding: 0.75rem;\n  }\n  .pb-md {\n    padding-block: 0.75rem;\n  }\n  .pi-md {\n    padding-inline: 0.75rem;\n  }\n  .gap-md {\n    gap: 0.75rem;\n  }\n  .inset-md {\n    inset: 0.75rem;\n  }\n  .m-lg {\n    margin: 1rem;\n  }\n  .mb-lg {\n    margin-block: 1rem;\n  }\n  .mi-lg {\n    margin-inline: 1rem;\n  }\n  .p-lg {\n    padding: 1rem;\n  }\n  .pb-lg {\n    padding-block: 1rem;\n  }\n  .pi-lg {\n    padding-inline: 1rem;\n  }\n  .gap-lg {\n    gap: 1rem;\n  }\n  .inset-lg {\n    inset: 1rem;\n  }\n  .m-xl {\n    margin: 1.25rem;\n  }\n  .mb-xl {\n    margin-block: 1.25rem;\n  }\n  .mi-xl {\n    margin-inline: 1.25rem;\n  }\n  .p-xl {\n    padding: 1.25rem;\n  }\n  .pb-xl {\n    padding-block: 1.25rem;\n  }\n  .pi-xl {\n    padding-inline: 1.25rem;\n  }\n  .gap-xl {\n    gap: 1.25rem;\n  }\n  .inset-xl {\n    inset: 1.25rem;\n  }\n  .m-2xl {\n    margin: 1.5rem;\n  }\n  .mb-2xl {\n    margin-block: 1.5rem;\n  }\n  .mi-2xl {\n    margin-inline: 1.5rem;\n  }\n  .p-2xl {\n    padding: 1.5rem;\n  }\n  .pb-2xl {\n    padding-block: 1.5rem;\n  }\n  .pi-2xl {\n    padding-inline: 1.5rem;\n  }\n  .gap-2xl {\n    gap: 1.5rem;\n  }\n  .inset-2xl {\n    inset: 1.5rem;\n  }\n  .m-3xl {\n    margin: 2rem;\n  }\n  .mb-3xl {\n    margin-block: 2rem;\n  }\n  .mi-3xl {\n    margin-inline: 2rem;\n  }\n  .p-3xl {\n    padding: 2rem;\n  }\n  .pb-3xl {\n    padding-block: 2rem;\n  }\n  .pi-3xl {\n    padding-inline: 2rem;\n  }\n  .gap-3xl {\n    gap: 2rem;\n  }\n  .inset-3xl {\n    inset: 2rem;\n  }\n  .text-xs {\n    font-size: 0.75rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-sm {\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-base {\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-lg {\n    font-size: 1.125rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-xl {\n    font-size: 1.25rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-2xl {\n    font-size: 1.5rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .font-thin {\n    font-weight: 100;\n  }\n  .font-light {\n    font-weight: 300;\n  }\n  .font-normal {\n    font-weight: 400;\n  }\n  .font-medium {\n    font-weight: 500;\n  }\n  .font-semibold {\n    font-weight: 600;\n  }\n  .font-bold {\n    font-weight: 700;\n  }\n  .text-start {\n    text-align: start;\n  }\n  .text-center {\n    text-align: center;\n  }\n  .text-end {\n    text-align: end;\n  }\n  .text-primary {\n    color: #1e293b, #f1f5f9;\n  }\n  .text-secondary {\n    color: #64748b, #94a3b8;\n  }\n  .text-muted {\n    color: #94a3b8, #64748b;\n  }\n  .text-disabled {\n    color: #cbd5e1, #475569;\n  }\n  .block,\n  .vu-block {\n    display: block;\n  }\n  .inline,\n  .vu-inline {\n    display: inline;\n  }\n  .inline-block {\n    display: inline-block;\n  }\n  .flex,\n  .vu-flex {\n    display: flex;\n  }\n  .inline-flex {\n    display: inline-flex;\n  }\n  .grid,\n  .vu-grid {\n    display: grid;\n  }\n  .hidden,\n  .vu-hidden {\n    display: none;\n  }\n  .flex-row {\n    flex-direction: row;\n  }\n  .flex-col {\n    flex-direction: column;\n  }\n  .flex-wrap {\n    flex-wrap: wrap;\n  }\n  .flex-nowrap {\n    flex-wrap: nowrap;\n  }\n  .items-start {\n    align-items: flex-start;\n  }\n  .items-center {\n    align-items: center;\n  }\n  .items-end {\n    align-items: flex-end;\n  }\n  .items-stretch {\n    align-items: stretch;\n  }\n  .justify-start {\n    justify-content: flex-start;\n  }\n  .justify-center {\n    justify-content: center;\n  }\n  .justify-end {\n    justify-content: flex-end;\n  }\n  .justify-between {\n    justify-content: space-between;\n  }\n  .justify-around {\n    justify-content: space-around;\n  }\n  .grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .h-auto,\n  .block-size-auto {\n    block-size: auto;\n  }\n  .h-full,\n  .block-size-full {\n    block-size: 100%;\n  }\n  .h-screen {\n    block-size: 100vh;\n  }\n  .w-auto,\n  .inline-size-auto {\n    inline-size: auto;\n  }\n  .w-full,\n  .inline-size-full {\n    inline-size: 100%;\n  }\n  .w-screen {\n    inline-size: 100vw;\n  }\n  .min-h-0,\n  .min-block-size-0 {\n    min-block-size: 0;\n  }\n  .min-w-0,\n  .min-inline-size-0 {\n    min-inline-size: 0;\n  }\n  .max-h-full,\n  .max-block-size-full {\n    max-block-size: 100%;\n  }\n  .max-w-full,\n  .max-inline-size-full {\n    max-inline-size: 100%;\n  }\n  .static {\n    position: static;\n  }\n  .relative {\n    position: relative;\n  }\n  .absolute {\n    position: absolute;\n  }\n  .fixed {\n    position: fixed;\n  }\n  .sticky {\n    position: sticky;\n  }\n  .bg-surface {\n    background-color: #fafbfc, #0f1419;\n  }\n  .bg-surface-container {\n    background-color: #f1f5f9, #1e293b;\n  }\n  .bg-surface-container-high {\n    background-color: #e2e8f0, #334155;\n  }\n  .bg-primary {\n    background-color: #5a7fff, #7ca7ff;\n  }\n  .bg-secondary {\n    background-color: #6b7280, #94a3b8;\n  }\n  .border {\n    border: 1px solid #cbd5e1, #475569;\n  }\n  .border-2 {\n    border: 2px solid #cbd5e1, #475569;\n  }\n  .border-primary {\n    border: 1px solid #5a7fff, #7ca7ff;\n  }\n  .border-secondary {\n    border: 1px solid #6b7280, #94a3b8;\n  }\n  .rounded-none {\n    border-radius: 0;\n  }\n  .rounded-sm {\n    border-radius: 0.25rem;\n  }\n  .rounded-md {\n    border-radius: 0.375rem;\n  }\n  .rounded-lg {\n    border-radius: 0.5rem;\n  }\n  .rounded-full {\n    border-radius: 9999px;\n  }\n  .shadow-xs {\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  }\n  .shadow-sm {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  }\n  .shadow-md {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  }\n  .shadow-lg {\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  }\n  .shadow-xl {\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  }\n  .cursor-pointer {\n    cursor: pointer;\n  }\n  .cursor-default {\n    cursor: default;\n  }\n  .cursor-not-allowed {\n    cursor: not-allowed;\n  }\n  .select-none {\n    user-select: none;\n  }\n  .select-text {\n    user-select: text;\n  }\n  .select-all {\n    user-select: all;\n  }\n  .visible {\n    visibility: visible;\n  }\n  .invisible {\n    visibility: hidden;\n  }\n  .collapse,\n  .vs-collapsed {\n    visibility: collapse;\n  }\n  .opacity-0 {\n    opacity: 0;\n  }\n  .opacity-25 {\n    opacity: 0.25;\n  }\n  .opacity-50 {\n    opacity: 0.5;\n  }\n  .opacity-75 {\n    opacity: 0.75;\n  }\n  .opacity-100 {\n    opacity: 1;\n  }\n  @container (max-width: 320px) {\n    .hidden\\@xs {\n      display: none;\n    }\n  }\n  @container (max-width: 640px) {\n    .hidden\\@sm {\n      display: none;\n    }\n  }\n  @container (max-width: 768px) {\n    .hidden\\@md {\n      display: none;\n    }\n  }\n  @container (max-width: 1024px) {\n    .hidden\\@lg {\n      display: none;\n    }\n  }\n  @container (min-width: 320px) {\n    .block\\@xs {\n      display: block;\n    }\n  }\n  @container (min-width: 640px) {\n    .block\\@sm {\n      display: block;\n    }\n  }\n  @container (min-width: 768px) {\n    .block\\@md {\n      display: block;\n    }\n  }\n  @container (min-width: 1024px) {\n    .block\\@lg {\n      display: block;\n    }\n  }\n  @container (max-width: 320px) {\n    .text-sm\\@xs {\n      font-size: 0.875rem;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0;\n    }\n  }\n  @container (min-width: 640px) {\n    .text-base\\@sm {\n      font-size: 1rem;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0;\n    }\n  }\n  .icon-xs {\n    --icon-size: 0.75rem;\n  }\n  .icon-sm {\n    --icon-size: 0.875rem;\n  }\n  .icon-md {\n    --icon-size: 1rem;\n  }\n  .icon-lg {\n    --icon-size: 1.25rem;\n  }\n  .icon-xl {\n    --icon-size: 1.5rem;\n  }\n  .center-absolute {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  .center-flex {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: nowrap;\n  }\n  .interactive {\n    cursor: pointer;\n    touch-action: manipulation;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .interactive:focus-visible {\n    outline: 2px solid #dbeafe, #1e40af;\n    outline-offset: 2px;\n  }\n  .interactive:disabled, .interactive[aria-disabled=true] {\n    cursor: not-allowed;\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  .focus-ring:focus-visible {\n    outline: 2px solid #dbeafe, #1e40af;\n    outline-offset: 2px;\n  }\n  .truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .truncate-2 {\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .truncate-3 {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .aspect-square {\n    aspect-ratio: 1;\n  }\n  .aspect-video {\n    aspect-ratio: 16 / 9;\n  }\n  .margin-block-0 {\n    margin-block: 0;\n  }\n  .margin-block-sm {\n    margin-block: var(--space-sm);\n  }\n  .margin-block-md {\n    margin-block: var(--space-md);\n  }\n  .margin-block-lg {\n    margin-block: var(--space-lg);\n  }\n  .margin-inline-0 {\n    margin-inline: 0;\n  }\n  .margin-inline-sm {\n    margin-inline: var(--space-sm);\n  }\n  .margin-inline-md {\n    margin-inline: var(--space-md);\n  }\n  .margin-inline-lg {\n    margin-inline: var(--space-lg);\n  }\n  .margin-inline-auto {\n    margin-inline: auto;\n  }\n  .padding-block-0 {\n    padding-block: 0;\n  }\n  .padding-block-sm {\n    padding-block: var(--space-sm);\n  }\n  .padding-block-md {\n    padding-block: var(--space-md);\n  }\n  .padding-block-lg {\n    padding-block: var(--space-lg);\n  }\n  .padding-inline-0 {\n    padding-inline: 0;\n  }\n  .padding-inline-sm {\n    padding-inline: var(--space-sm);\n  }\n  .padding-inline-md {\n    padding-inline: var(--space-md);\n  }\n  .padding-inline-lg {\n    padding-inline: var(--space-lg);\n  }\n  .pointer-events-none {\n    pointer-events: none;\n  }\n  .pointer-events-auto {\n    pointer-events: auto;\n  }\n  .line-clamp-1 {\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .line-clamp-2 {\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .line-clamp-3 {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .vs-active {\n    --state-active: 1;\n  }\n  .vs-disabled {\n    pointer-events: none;\n    opacity: 0.5;\n  }\n  .vs-loading {\n    cursor: wait;\n  }\n  .vs-error {\n    color: var(--color-error, #dc3545);\n  }\n  .vs-success {\n    color: var(--color-success, #28a745);\n  }\n  .vs-hidden {\n    display: none !important;\n  }\n  .vl-container,\n  .container {\n    inline-size: 100%;\n    max-inline-size: var(--container-max, 1200px);\n    margin-inline: auto;\n  }\n  .vl-container {\n    padding-inline: var(--space-md);\n  }\n  .container {\n    padding-inline: var(--space-lg);\n  }\n  .vl-grid {\n    display: grid;\n    gap: var(--gap-md);\n  }\n  .vl-stack {\n    display: flex;\n    flex-direction: column;\n    gap: var(--gap-md);\n  }\n  .vl-cluster {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--gap-sm);\n    align-items: center;\n  }\n  .vl-center {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .vu-sr-only {\n    position: absolute;\n    inline-size: 1px;\n    block-size: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n  }\n  .vc-surface {\n    background-color: var(--color-surface);\n    color: var(--color-on-surface);\n  }\n  .vc-surface-variant {\n    background-color: var(--color-surface-variant);\n    color: var(--color-on-surface-variant);\n  }\n  .vc-primary {\n    background-color: var(--color-primary);\n    color: var(--color-on-primary);\n  }\n  .vc-secondary {\n    background-color: var(--color-secondary);\n    color: var(--color-on-secondary);\n  }\n  .vc-elevated {\n    box-shadow: var(--elev-1);\n  }\n  .vc-elevated-2 {\n    box-shadow: var(--elev-2);\n  }\n  .vc-elevated-3 {\n    box-shadow: var(--elev-3);\n  }\n  .vc-rounded {\n    border-radius: var(--radius-md);\n  }\n  .vc-rounded-sm {\n    border-radius: var(--radius-sm);\n  }\n  .vc-rounded-lg {\n    border-radius: var(--radius-lg);\n  }\n  .vc-rounded-full {\n    border-radius: var(--radius-full, 9999px);\n  }\n  .card {\n    background: var(--color-bg);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-lg);\n    padding: var(--space-lg);\n    box-shadow: var(--shadow-sm);\n  }\n  .stack > * + * {\n    margin-block-start: var(--space-md);\n  }\n  .stack-sm > * + * {\n    margin-block-start: var(--space-sm);\n  }\n  .stack-lg > * + * {\n    margin-block-start: var(--space-lg);\n  }\n  @media print {\n    .print-hidden {\n      display: none !important;\n    }\n    .print-visible {\n      display: block !important;\n    }\n    .print-break-before {\n      page-break-before: always;\n    }\n    .print-break-after {\n      page-break-after: always;\n    }\n    .print-break-inside-avoid {\n      page-break-inside: avoid;\n    }\n  }\n  @media (prefers-reduced-motion: reduce) {\n    .transition-fast,\n    .transition-normal,\n    .transition-slow {\n      transition: none;\n    }\n    * {\n      animation-duration: 0.01ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01ms !important;\n    }\n  }\n  @media (prefers-contrast: high) {\n    .text-primary {\n      color: var(--color-on-surface);\n    }\n    .text-secondary,\n    .text-muted,\n    .text-disabled {\n      color: var(--color-on-surface-variant);\n    }\n    .border {\n      border-width: 2px;\n    }\n    .border-top {\n      border-top-width: 2px;\n    }\n    .border-bottom {\n      border-bottom-width: 2px;\n    }\n    .border-left {\n      border-left-width: 2px;\n    }\n    .border-right {\n      border-right-width: 2px;\n    }\n  }\n}\n@property --value {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: true;\n}\n@property --relate {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: true;\n}\n@property --drag-x {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: false;\n}\n@property --drag-y {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: false;\n}\n@property --order {\n  syntax: \"<integer>\";\n  initial-value: 1;\n  inherits: true;\n}\n@property --content-inline-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 100%;\n  inherits: true;\n}\n@property --content-block-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 100%;\n  inherits: true;\n}\n@property --icon-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 16px;\n  inherits: true;\n}\n@property --icon-color {\n  syntax: \"<color>\";\n  initial-value: rgba(0, 0, 0, 0);\n  inherits: true;\n}\n@property --icon-padding {\n  syntax: \"<length-percentage>\";\n  initial-value: 0px;\n  inherits: true;\n}\n@property --icon-image {\n  syntax: \"<image>\";\n  initial-value: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));\n  inherits: true;\n}\n@layer ux-classes {\n  .grid-rows > ::slotted(*) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  .grid-rows > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-rows > ::slotted(*) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  .grid-rows > * {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  .grid-rows > * {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-rows > * {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  :host(.grid-rows) ::slotted(*) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  :host(.grid-rows) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-rows) ::slotted(*) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  .grid-rows {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-rows {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows {\n    grid-auto-rows: minmax(0px, max-content);\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  :host(.grid-rows) {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-rows) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows) {\n    grid-auto-rows: minmax(0px, max-content);\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  .grid-columns > ::slotted(*) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  .grid-columns > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-columns > ::slotted(*) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  .grid-columns > * {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  .grid-columns > * {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-columns > * {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  .grid-columns {\n    --display: inline-grid;\n    --flow: row;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-columns {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-columns {\n    grid-auto-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  :host(.grid-columns) {\n    --display: inline-grid;\n    --flow: row;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-columns) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-columns) {\n    grid-auto-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  .flex-columns > ::slotted(*) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  .flex-columns > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.flex-columns) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  :host(.flex-columns) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  .flex-columns > * {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  .flex-columns > * {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.flex-columns) ::slotted(*) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  :host(.flex-columns) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .flex-columns {\n    --display: inline-flex;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .flex-columns {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.flex-columns) {\n    --display: inline-flex;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.flex-columns) {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-layered > ::slotted(*) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > ::slotted(*) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) ::slotted(::slotted(*)) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) ::slotted(::slotted(*)) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered > * {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > * > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) ::slotted(*) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) ::slotted(*) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-layered {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-layered) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-layered) {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows-3c > ::slotted(*) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) ::slotted(::slotted(*)) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c > * {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) ::slotted(*) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows-3c) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows-3c > ::slotted(*:last-child) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  :host(.grid-rows-3c) ::slotted(::slotted(*:last-child)) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  .grid-rows-3c > *:last-child {\n    grid-column: var(--order, 1)/3 span;\n  }\n  :host(.grid-rows-3c) ::slotted(*:last-child) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  .grid-rows-3c {\n    --order: sibling-index();\n  }\n  .grid-rows-3c {\n    grid-column: var(--order, 1)/var(--order, 1) span;\n  }\n  .grid-rows-3c {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows-3c) {\n    --order: sibling-index();\n  }\n  :host(.grid-rows-3c) {\n    grid-column: var(--order, 1)/var(--order, 1) span;\n  }\n  :host(.grid-rows-3c) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .stretch-inline {\n    inline-size: 100%;\n    inline-size: -webkit-fill-available;\n    inline-size: stretch;\n  }\n  :host(.stretch-inline) {\n    inline-size: 100%;\n    inline-size: -webkit-fill-available;\n    inline-size: stretch;\n  }\n  .stretch-block {\n    block-size: 100%;\n    block-size: -webkit-fill-available;\n    block-size: stretch;\n  }\n  :host(.stretch-block) {\n    block-size: 100%;\n    block-size: -webkit-fill-available;\n    block-size: stretch;\n  }\n  .content-inline-size {\n    padding-inline: max(100% - (100% - var(--content-inline-size, 100%) * 0.5), 0px);\n  }\n  :host(.content-inline-size) {\n    padding-inline: max(100% - (100% - var(--content-inline-size, 100%) * 0.5), 0px);\n  }\n  .content-block-size {\n    padding-block: max(100% - (100% - var(--content-block-size, 100%) * 0.5), 0px);\n  }\n  :host(.content-block-size) {\n    padding-block: max(100% - (100% - var(--content-block-size, 100%) * 0.5), 0px);\n  }\n  .ux-anchor {\n    inset-inline-start: max(var(--client-x, 0px), 0px);\n    inset-block-start: max(var(--client-y, 0px), 0px);\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    writing-mode: horizontal-tb;\n    translate: 0% 0% 0%;\n    transform: none;\n  }\n  .ux-anchor {\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--client-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--client-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n  }\n  @supports (position-anchor: --example) {\n    .ux-anchor {\n      position-anchor: var(--anchor-group);\n      inset-inline-start: anchor(var(--anchor-group) start);\n      inset-block-start: anchor(var(--anchor-group) end);\n      inline-size: anchor-size(var(--anchor-group) self-inline);\n    }\n  }\n  :host(.ux-anchor) {\n    inset-inline-start: max(var(--client-x, 0px), 0px);\n    inset-block-start: max(var(--client-y, 0px), 0px);\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    writing-mode: horizontal-tb;\n    translate: 0% 0% 0%;\n    transform: none;\n  }\n  :host(.ux-anchor) {\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--client-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--client-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n  }\n  @supports (position-anchor: --example) {\n    :host(.ux-anchor) {\n      position-anchor: var(--anchor-group);\n      inset-inline-start: anchor(var(--anchor-group) start);\n      inset-block-start: anchor(var(--anchor-group) end);\n      inline-size: anchor-size(var(--anchor-group) self-inline);\n    }\n  }\n  .ux-anchor {\n    --shift-x: var(--client-x, 0px);\n    --shift-y: var(--client-y, 0px);\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    inset-inline-start: max(var(--shift-x), 0px);\n    inset-block-start: max(var(--shift-y), var(--status-bar-padding, 0px));\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    translate: 0% 0% 0%;\n    writing-mode: horizontal-tb;\n    transform: none;\n  }\n  :host(.ux-anchor) {\n    --shift-x: var(--client-x, 0px);\n    --shift-y: var(--client-y, 0px);\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    inset-inline-start: max(var(--shift-x), 0px);\n    inset-block-start: max(var(--shift-y), var(--status-bar-padding, 0px));\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    translate: 0% 0% 0%;\n    writing-mode: horizontal-tb;\n    transform: none;\n  }\n  .layered-wrap {\n    background-color: transparent;\n    display: inline grid;\n    inline-size: max-content;\n    block-size: max-content;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    z-index: calc(var(--z-index, 0) + 1);\n    overflow: visible;\n  }\n  .layered-wrap > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.layered-wrap) {\n    background-color: transparent;\n    display: inline grid;\n    inline-size: max-content;\n    block-size: max-content;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    z-index: calc(var(--z-index, 0) + 1);\n    overflow: visible;\n  }\n  :host(.layered-wrap) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n}\n@layer components {\n  ui-icon {\n    --icon-color: currentColor;\n    --icon-size: 1rem;\n    --icon-padding: 0.125rem;\n    display: inline-grid;\n    place-content: center;\n    place-items: center;\n    color: var(--icon-color);\n    aspect-ratio: 1;\n  }\n  ui-icon {\n    vertical-align: middle;\n    margin-inline-end: 0.125rem;\n  }\n  ui-icon:last-child {\n    margin-inline-end: 0;\n  }\n}"), q = class extends K {
	constructor() {
		super();
	}
	styles = () => ye;
	render = () => i`
<div style="background-color: transparent;" part="left"   class="left"  ><slot name="left"  ></slot></div>
        <div style="background-color: transparent;" part="center" class="center"><slot name="center"></slot></div>
        <div style="background-color: transparent;" part="right"  class="right" ><slot name="right" ></slot></div>`;
};
q = _([n("ui-statusbar")], q);
//#endregion
//#region ../../projects/fl.ui/src/ui/navigation/taskbar/element/TaskBar.ts
var be = r("/* Taskbar */\n@function --hsv(--src-color <color>) returns <color> {\n  result: hsl(from var(--src-color, black) h calc(calc((calc(l / 100) - calc(calc(l / 100) * (1 - calc(s / 100) / 2))) / clamp(0.0001, min(calc(calc(l / 100) * (1 - calc(s / 100) / 2)), calc(1 - calc(calc(l / 100) * (1 - calc(s / 100) / 2)))), 1)) * 100) calc(calc(calc(l / 100) * (1 - calc(s / 100) / 2)) * 100) / alpha);\n}\n/* ai-refactor: optimized/refactored at 2026-02-13T02:50:43Z */\n/* ==========================================================================\n    Meta / Declarations\n   ========================================================================== */\n/* ==========================================================================\n    Tokens / Mixins (global, not layered)\n   ========================================================================== */\n/* ai-refactor: optimized/refactored at 2026-02-13T00:48:23Z */\n@layer tokens, base, layout, utilities, shells, shell, views, view, viewer, components, ux-layer, markdown, essentials, print, print-breaks, overrides;\n@layer tokens {\n  :root,\n  :host,\n  :scope {\n    color-scheme: light dark;\n    --color-primary: #5a7fff;\n    --color-on-primary: #ffffff;\n    --color-secondary: #6b7280;\n    --color-on-secondary: #ffffff;\n    --color-tertiary: #64748b;\n    --color-on-tertiary: #ffffff;\n    --color-error: #ef4444;\n    --color-on-error: #ffffff;\n    --color-success: #4caf50;\n    --color-warning: #ff9800;\n    --color-info: #2196f3;\n    --color-background: #fafbfc;\n    --color-on-background: #1e293b;\n    --color-surface: #fafbfc;\n    --color-on-surface: #1e293b;\n    --color-surface-variant: #f1f5f9;\n    --color-on-surface-variant: #64748b;\n    --color-outline: #cbd5e1;\n    --color-outline-variant: #94a3b8;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 96%, var(--color-primary) 4%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 75%, transparent);\n    --space-xs: 0.25rem;\n    --space-sm: 0.5rem;\n    --space-md: 0.75rem;\n    --space-lg: 1rem;\n    --space-xl: 1.25rem;\n    --space-2xl: 1.5rem;\n    --padding-xs: var(--space-xs);\n    --padding-sm: var(--space-sm);\n    --padding-md: var(--space-md);\n    --padding-lg: var(--space-lg);\n    --padding-xl: var(--space-xl);\n    --padding-2xl: var(--space-2xl);\n    --padding-3xl: 2rem;\n    --padding-4xl: 2.5rem;\n    --padding-5xl: 3rem;\n    --padding-6xl: 4rem;\n    --padding-7xl: 5rem;\n    --padding-8xl: 6rem;\n    --padding-9xl: 8rem;\n    --gap-xs: var(--space-xs);\n    --gap-sm: var(--space-sm);\n    --gap-md: var(--space-md);\n    --gap-lg: var(--space-lg);\n    --gap-xl: var(--space-xl);\n    --gap-2xl: var(--space-2xl);\n    --radius-none: 0;\n    --radius-sm: 0.25rem;\n    --radius-default: 0.25rem;\n    --radius-md: 0.375rem;\n    --radius-lg: 0.5rem;\n    --radius-xl: 0.75rem;\n    --radius-2xl: 1rem;\n    --radius-3xl: 1.5rem;\n    --radius-full: 9999px;\n    --elev-0: none;\n    --elev-1: 0 1px 1px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1);\n    --elev-2: 0 2px 6px rgba(0, 0, 0, 0.12), 0 8px 24px rgba(0, 0, 0, 0.08);\n    --elev-3: 0 6px 16px rgba(0, 0, 0, 0.14), 0 18px 48px rgba(0, 0, 0, 0.1);\n    --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);\n    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);\n    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);\n    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);\n    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);\n    --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.1);\n    --shadow-inset: inset 0 2px 4px rgba(0, 0, 0, 0.06);\n    --shadow-inset-strong: inset 0 4px 8px rgba(0, 0, 0, 0.12);\n    --shadow-none: 0 0 #0000;\n    --text-xs: 0.8rem;\n    --text-sm: 0.9rem;\n    --text-base: 1rem;\n    --text-lg: 1.1rem;\n    --text-xl: 1.25rem;\n    --text-2xl: 1.6rem;\n    --text-3xl: 2rem;\n    --font-size-xs: 0.75rem;\n    --font-size-sm: 0.875rem;\n    --font-size-base: 1rem;\n    --font-size-lg: 1.125rem;\n    --font-size-xl: 1.25rem;\n    --font-weight-normal: 400;\n    --font-weight-medium: 500;\n    --font-weight-semibold: 600;\n    --font-weight-bold: 700;\n    --font-family: \"Roboto\", ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;\n    --font-family-mono: \"Roboto Mono\", \"SF Mono\", Monaco, Inconsolata, \"Fira Code\", monospace;\n    --font-sans: var(--font-family);\n    --font-mono: var(--font-family-mono);\n    --leading-tight: 1.2;\n    --leading-normal: 1.5;\n    --leading-relaxed: 1.8;\n    --transition-fast: 120ms cubic-bezier(0.2, 0, 0, 1);\n    --transition-normal: 160ms cubic-bezier(0.2, 0, 0, 1);\n    --transition-slow: 200ms cubic-bezier(0.2, 0, 0, 1);\n    --motion-fast: var(--transition-fast);\n    --motion-normal: var(--transition-normal);\n    --motion-slow: var(--transition-slow);\n    --focus-ring: 0 0 0 3px color-mix(in oklab, var(--color-primary) 35%, transparent);\n    --z-base: 0;\n    --z-dropdown: 100;\n    --z-sticky: 200;\n    --z-fixed: 300;\n    --z-modal-backdrop: 400;\n    --z-modal: 500;\n    --z-popover: 600;\n    --z-tooltip: 700;\n    --z-toast: 800;\n    --z-max: 9999;\n    --view-bg: var(--color-surface);\n    --view-fg: var(--color-on-surface);\n    --view-border: var(--color-outline-variant);\n    --view-input-bg: light-dark(#ffffff, var(--color-surface-container-high));\n    --view-files-bg: light-dark(rgba(0, 0, 0, 0.02), var(--color-surface-container-low));\n    --view-file-bg: light-dark(rgba(0, 0, 0, 0.03), var(--color-surface-container-lowest, var(--color-surface-container-low)));\n    --view-results-bg: light-dark(rgba(0, 0, 0, 0.01), var(--color-surface-container-low));\n    --view-result-bg: light-dark(rgba(0, 0, 0, 0.03), var(--color-surface-container-lowest, var(--color-surface-container-low)));\n    --color-surface-elevated: var(--color-surface-container);\n    --color-surface-hover: var(--color-surface-container-low);\n    --color-surface-active: var(--color-surface-container-high);\n    --color-on-surface-muted: var(--color-on-surface-variant);\n    --color-background-alt: var(--color-surface-variant);\n    --color-primary-hover: color-mix(in oklab, var(--color-primary) 80%, black);\n    --color-primary-active: color-mix(in oklab, var(--color-primary) 65%, black);\n    --color-accent: var(--color-secondary);\n    --color-accent-hover: color-mix(in oklab, var(--color-secondary) 80%, black);\n    --color-on-accent: var(--color-on-secondary);\n    --color-border-hover: var(--color-outline-variant);\n    --color-border-strong: var(--color-outline);\n    --color-border-focus: var(--color-primary);\n    --color-text: var(--color-on-surface);\n    --color-text-secondary: var(--color-on-surface-variant);\n    --color-text-muted: color-mix(in oklab, var(--color-on-surface) 50%, var(--color-surface));\n    --color-text-disabled: color-mix(in oklab, var(--color-on-surface) 38%, var(--color-surface));\n    --color-text-inverse: var(--color-on-primary);\n    --color-link: var(--color-primary);\n    --color-link-hover: color-mix(in oklab, var(--color-primary) 80%, black);\n    --color-success-light: color-mix(in oklab, var(--color-success) 60%, white);\n    --color-success-dark: color-mix(in oklab, var(--color-success) 70%, black);\n    --color-warning-light: color-mix(in oklab, var(--color-warning) 60%, white);\n    --color-warning-dark: color-mix(in oklab, var(--color-warning) 70%, black);\n    --color-error-light: color-mix(in oklab, var(--color-error) 60%, white);\n    --color-error-dark: color-mix(in oklab, var(--color-error) 70%, black);\n    --color-info-light: color-mix(in oklab, var(--color-info) 60%, white);\n    --color-info-dark: color-mix(in oklab, var(--color-info) 70%, black);\n    --color-bg: var(--color-surface, var(--color-surface));\n    --color-bg-alt: var(--color-surface-variant, var(--color-surface-variant));\n    --color-fg: var(--color-on-surface, var(--color-on-surface));\n    --color-fg-muted: var(--color-on-surface-variant, var(--color-on-surface-variant));\n    --btn-height-sm: 2rem;\n    --btn-height-md: 2.5rem;\n    --btn-height-lg: 3rem;\n    --btn-padding-x-sm: var(--space-md);\n    --btn-padding-x-md: var(--space-lg);\n    --btn-padding-x-lg: 1.5rem;\n    --btn-radius: var(--radius-md);\n    --btn-font-weight: var(--font-weight-medium);\n    --input-height-sm: 2rem;\n    --input-height-md: 2.5rem;\n    --input-height-lg: 3rem;\n    --input-padding-x: var(--space-md);\n    --input-radius: var(--radius-md);\n    --input-border-color: var(--color-border, var(--color-border));\n    --input-focus-ring-color: var(--color-primary);\n    --input-focus-ring-width: 2px;\n    --card-padding: var(--space-lg);\n    --card-radius: var(--radius-lg);\n    --card-shadow: var(--shadow-sm);\n    --card-border-color: var(--color-border, var(--color-border));\n    --modal-backdrop-bg: light-dark(rgb(0 0 0 / 0.5), rgb(0 0 0 / 0.7));\n    --modal-bg: var(--color-surface, var(--color-surface));\n    --modal-radius: var(--radius-xl);\n    --modal-shadow: var(--shadow-xl);\n    --modal-padding: 1.5rem;\n    --toast-font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif);\n    --toast-font-size: var(--font-size-base, 1rem);\n    --toast-font-weight: var(--font-weight-medium, 500);\n    --toast-letter-spacing: 0.01em;\n    --toast-line-height: 1.4;\n    --toast-white-space: nowrap;\n    --toast-pointer-events: auto;\n    --toast-user-select: none;\n    --toast-cursor: default;\n    --toast-opacity: 0;\n    --toast-transform: translateY(100%) scale(0.9);\n    --toast-transition: opacity 160ms ease-out, transform 160ms cubic-bezier(0.16, 1, 0.3, 1), background-color 100ms ease;\n    --toast-text: var(--color-on-surface, var(--color-on-surface, light-dark(#ffffff, #000000)));\n    --toast-bg: color-mix(in oklab, var(--color-surface-elevated, var(--color-surface-container-high, var(--color-surface, light-dark(#fafbfc, #1e293b)))) 90%, var(--color-on-surface, var(--color-on-surface, light-dark(#000000, #ffffff))));\n    --toast-radius: var(--radius-lg);\n    --toast-shadow: var(--shadow-lg);\n    --toast-padding: var(--space-lg);\n    --sidebar-width: 280px;\n    --sidebar-collapsed-width: 64px;\n    --nav-height: 56px;\n    --nav-height-compact: 48px;\n    --status-height: 24px;\n    --status-bg: var(--color-surface-elevated, var(--color-surface-container-high));\n    --status-font-size: var(--text-xs);\n  }\n  @media (prefers-color-scheme: dark) {\n    :root,\n    :host,\n    :scope {\n      --color-primary: #7ca7ff;\n      --color-on-primary: #0f172a;\n      --color-secondary: #94a3b8;\n      --color-on-secondary: #1e293b;\n      --color-tertiary: #94a3b8;\n      --color-on-tertiary: #0f172a;\n      --color-error: #f87171;\n      --color-on-error: #450a0a;\n      --color-success: #66bb6a;\n      --color-warning: #ffa726;\n      --color-info: #42a5f5;\n      --color-background: #0f1419;\n      --color-on-background: #f1f5f9;\n      --color-surface: #0f1419;\n      --color-on-surface: #f1f5f9;\n      --color-surface-variant: #1e293b;\n      --color-on-surface-variant: #cbd5e1;\n      --color-outline: #475569;\n      --color-outline-variant: #334155;\n      --color-surface-container-low: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n      --color-surface-container: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n      --color-surface-container-high: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n      --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 80%, var(--color-primary) 20%);\n      --color-border: color-mix(in oklab, var(--color-outline-variant) 70%, transparent);\n    }\n  }\n  [data-theme=light] {\n    color-scheme: light;\n    --color-primary: #5a7fff;\n    --color-on-primary: #ffffff;\n    --color-secondary: #6b7280;\n    --color-on-secondary: #ffffff;\n    --color-tertiary: #64748b;\n    --color-on-tertiary: #ffffff;\n    --color-error: #ef4444;\n    --color-on-error: #ffffff;\n    --color-success: #4caf50;\n    --color-warning: #ff9800;\n    --color-info: #2196f3;\n    --color-background: #fafbfc;\n    --color-on-background: #1e293b;\n    --color-surface: #fafbfc;\n    --color-on-surface: #1e293b;\n    --color-surface-variant: #f1f5f9;\n    --color-on-surface-variant: #64748b;\n    --color-outline: #cbd5e1;\n    --color-outline-variant: #94a3b8;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 96%, var(--color-primary) 4%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 75%, transparent);\n  }\n  [data-theme=dark] {\n    color-scheme: dark;\n    --color-primary: #7ca7ff;\n    --color-on-primary: #0f172a;\n    --color-secondary: #94a3b8;\n    --color-on-secondary: #1e293b;\n    --color-tertiary: #94a3b8;\n    --color-on-tertiary: #0f172a;\n    --color-error: #f87171;\n    --color-on-error: #450a0a;\n    --color-success: #66bb6a;\n    --color-warning: #ffa726;\n    --color-info: #42a5f5;\n    --color-background: #0f1419;\n    --color-on-background: #f1f5f9;\n    --color-surface: #0f1419;\n    --color-on-surface: #f1f5f9;\n    --color-surface-variant: #1e293b;\n    --color-on-surface-variant: #cbd5e1;\n    --color-outline: #475569;\n    --color-outline-variant: #334155;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 80%, var(--color-primary) 20%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 70%, transparent);\n  }\n  @media (prefers-reduced-motion: reduce) {\n    :root {\n      --transition-fast: 0ms;\n      --transition-normal: 0ms;\n      --transition-slow: 0ms;\n      --motion-fast: 0ms;\n      --motion-normal: 0ms;\n      --motion-slow: 0ms;\n    }\n  }\n  @media (prefers-contrast: high) {\n    :root {\n      --color-border: var(--color-border, var(--color-outline));\n      --color-border-hover: color-mix(in oklab, var(--color-border, var(--color-outline)) 80%, var(--color-on-surface, var(--color-on-surface)));\n      --color-text-secondary: var(--color-on-surface, var(--color-on-surface));\n      --color-text-muted: var(--color-on-surface-variant, var(--color-on-surface-variant));\n    }\n  }\n  @media print {\n    :root {\n      --view-padding: 0;\n      --view-content-max-width: 100%;\n      --view-bg: white;\n      --view-fg: black;\n      --view-heading-color: black;\n      --view-link-color: black;\n    }\n    :root:has([data-view=viewer]) {\n      --view-code-bg: #f5f5f5;\n      --view-code-fg: black;\n      --view-blockquote-bg: #f5f5f5;\n    }\n  }\n}\n/**\n * Unified CSS Custom Property Registration System\n * \n * This module consolidates property registration logic used across the library.\n * It provides a single source of truth for @property declarations via the\n * CSS Properties and Values API (CSS Houdini).\n * \n * Used by:\n * - lib/core/_properties.scss (orientation, transform, layout properties)\n * - lib/basic/_typed-properties.scss (UI component properties)\n * - lib/advanced/design/ (MD3 design properties)\n */\n/* stylelint-disable scss/function-no-unknown */\n@layer utilities {\n  .m-0 {\n    margin: 0;\n  }\n  .mb-0 {\n    margin-block: 0;\n  }\n  .mi-0 {\n    margin-inline: 0;\n  }\n  .p-0 {\n    padding: 0;\n  }\n  .pb-0 {\n    padding-block: 0;\n  }\n  .pi-0 {\n    padding-inline: 0;\n  }\n  .gap-0 {\n    gap: 0;\n  }\n  .inset-0 {\n    inset: 0;\n  }\n  .m-xs {\n    margin: 0.25rem;\n  }\n  .mb-xs {\n    margin-block: 0.25rem;\n  }\n  .mi-xs {\n    margin-inline: 0.25rem;\n  }\n  .p-xs {\n    padding: 0.25rem;\n  }\n  .pb-xs {\n    padding-block: 0.25rem;\n  }\n  .pi-xs {\n    padding-inline: 0.25rem;\n  }\n  .gap-xs {\n    gap: 0.25rem;\n  }\n  .inset-xs {\n    inset: 0.25rem;\n  }\n  .m-sm {\n    margin: 0.5rem;\n  }\n  .mb-sm {\n    margin-block: 0.5rem;\n  }\n  .mi-sm {\n    margin-inline: 0.5rem;\n  }\n  .p-sm {\n    padding: 0.5rem;\n  }\n  .pb-sm {\n    padding-block: 0.5rem;\n  }\n  .pi-sm {\n    padding-inline: 0.5rem;\n  }\n  .gap-sm {\n    gap: 0.5rem;\n  }\n  .inset-sm {\n    inset: 0.5rem;\n  }\n  .m-md {\n    margin: 0.75rem;\n  }\n  .mb-md {\n    margin-block: 0.75rem;\n  }\n  .mi-md {\n    margin-inline: 0.75rem;\n  }\n  .p-md {\n    padding: 0.75rem;\n  }\n  .pb-md {\n    padding-block: 0.75rem;\n  }\n  .pi-md {\n    padding-inline: 0.75rem;\n  }\n  .gap-md {\n    gap: 0.75rem;\n  }\n  .inset-md {\n    inset: 0.75rem;\n  }\n  .m-lg {\n    margin: 1rem;\n  }\n  .mb-lg {\n    margin-block: 1rem;\n  }\n  .mi-lg {\n    margin-inline: 1rem;\n  }\n  .p-lg {\n    padding: 1rem;\n  }\n  .pb-lg {\n    padding-block: 1rem;\n  }\n  .pi-lg {\n    padding-inline: 1rem;\n  }\n  .gap-lg {\n    gap: 1rem;\n  }\n  .inset-lg {\n    inset: 1rem;\n  }\n  .m-xl {\n    margin: 1.25rem;\n  }\n  .mb-xl {\n    margin-block: 1.25rem;\n  }\n  .mi-xl {\n    margin-inline: 1.25rem;\n  }\n  .p-xl {\n    padding: 1.25rem;\n  }\n  .pb-xl {\n    padding-block: 1.25rem;\n  }\n  .pi-xl {\n    padding-inline: 1.25rem;\n  }\n  .gap-xl {\n    gap: 1.25rem;\n  }\n  .inset-xl {\n    inset: 1.25rem;\n  }\n  .m-2xl {\n    margin: 1.5rem;\n  }\n  .mb-2xl {\n    margin-block: 1.5rem;\n  }\n  .mi-2xl {\n    margin-inline: 1.5rem;\n  }\n  .p-2xl {\n    padding: 1.5rem;\n  }\n  .pb-2xl {\n    padding-block: 1.5rem;\n  }\n  .pi-2xl {\n    padding-inline: 1.5rem;\n  }\n  .gap-2xl {\n    gap: 1.5rem;\n  }\n  .inset-2xl {\n    inset: 1.5rem;\n  }\n  .m-3xl {\n    margin: 2rem;\n  }\n  .mb-3xl {\n    margin-block: 2rem;\n  }\n  .mi-3xl {\n    margin-inline: 2rem;\n  }\n  .p-3xl {\n    padding: 2rem;\n  }\n  .pb-3xl {\n    padding-block: 2rem;\n  }\n  .pi-3xl {\n    padding-inline: 2rem;\n  }\n  .gap-3xl {\n    gap: 2rem;\n  }\n  .inset-3xl {\n    inset: 2rem;\n  }\n  .text-xs {\n    font-size: 0.75rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-sm {\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-base {\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-lg {\n    font-size: 1.125rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-xl {\n    font-size: 1.25rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-2xl {\n    font-size: 1.5rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .font-thin {\n    font-weight: 100;\n  }\n  .font-light {\n    font-weight: 300;\n  }\n  .font-normal {\n    font-weight: 400;\n  }\n  .font-medium {\n    font-weight: 500;\n  }\n  .font-semibold {\n    font-weight: 600;\n  }\n  .font-bold {\n    font-weight: 700;\n  }\n  .text-start {\n    text-align: start;\n  }\n  .text-center {\n    text-align: center;\n  }\n  .text-end {\n    text-align: end;\n  }\n  .text-primary {\n    color: #1e293b, #f1f5f9;\n  }\n  .text-secondary {\n    color: #64748b, #94a3b8;\n  }\n  .text-muted {\n    color: #94a3b8, #64748b;\n  }\n  .text-disabled {\n    color: #cbd5e1, #475569;\n  }\n  .block,\n  .vu-block {\n    display: block;\n  }\n  .inline,\n  .vu-inline {\n    display: inline;\n  }\n  .inline-block {\n    display: inline-block;\n  }\n  .flex,\n  .vu-flex {\n    display: flex;\n  }\n  .inline-flex {\n    display: inline-flex;\n  }\n  .grid,\n  .vu-grid {\n    display: grid;\n  }\n  .hidden,\n  .vu-hidden {\n    display: none;\n  }\n  .flex-row {\n    flex-direction: row;\n  }\n  .flex-col {\n    flex-direction: column;\n  }\n  .flex-wrap {\n    flex-wrap: wrap;\n  }\n  .flex-nowrap {\n    flex-wrap: nowrap;\n  }\n  .items-start {\n    align-items: flex-start;\n  }\n  .items-center {\n    align-items: center;\n  }\n  .items-end {\n    align-items: flex-end;\n  }\n  .items-stretch {\n    align-items: stretch;\n  }\n  .justify-start {\n    justify-content: flex-start;\n  }\n  .justify-center {\n    justify-content: center;\n  }\n  .justify-end {\n    justify-content: flex-end;\n  }\n  .justify-between {\n    justify-content: space-between;\n  }\n  .justify-around {\n    justify-content: space-around;\n  }\n  .grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .h-auto,\n  .block-size-auto {\n    block-size: auto;\n  }\n  .h-full,\n  .block-size-full {\n    block-size: 100%;\n  }\n  .h-screen {\n    block-size: 100vh;\n  }\n  .w-auto,\n  .inline-size-auto {\n    inline-size: auto;\n  }\n  .w-full,\n  .inline-size-full {\n    inline-size: 100%;\n  }\n  .w-screen {\n    inline-size: 100vw;\n  }\n  .min-h-0,\n  .min-block-size-0 {\n    min-block-size: 0;\n  }\n  .min-w-0,\n  .min-inline-size-0 {\n    min-inline-size: 0;\n  }\n  .max-h-full,\n  .max-block-size-full {\n    max-block-size: 100%;\n  }\n  .max-w-full,\n  .max-inline-size-full {\n    max-inline-size: 100%;\n  }\n  .static {\n    position: static;\n  }\n  .relative {\n    position: relative;\n  }\n  .absolute {\n    position: absolute;\n  }\n  .fixed {\n    position: fixed;\n  }\n  .sticky {\n    position: sticky;\n  }\n  .bg-surface {\n    background-color: #fafbfc, #0f1419;\n  }\n  .bg-surface-container {\n    background-color: #f1f5f9, #1e293b;\n  }\n  .bg-surface-container-high {\n    background-color: #e2e8f0, #334155;\n  }\n  .bg-primary {\n    background-color: #5a7fff, #7ca7ff;\n  }\n  .bg-secondary {\n    background-color: #6b7280, #94a3b8;\n  }\n  .border {\n    border: 1px solid #cbd5e1, #475569;\n  }\n  .border-2 {\n    border: 2px solid #cbd5e1, #475569;\n  }\n  .border-primary {\n    border: 1px solid #5a7fff, #7ca7ff;\n  }\n  .border-secondary {\n    border: 1px solid #6b7280, #94a3b8;\n  }\n  .rounded-none {\n    border-radius: 0;\n  }\n  .rounded-sm {\n    border-radius: 0.25rem;\n  }\n  .rounded-md {\n    border-radius: 0.375rem;\n  }\n  .rounded-lg {\n    border-radius: 0.5rem;\n  }\n  .rounded-full {\n    border-radius: 9999px;\n  }\n  .shadow-xs {\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  }\n  .shadow-sm {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  }\n  .shadow-md {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  }\n  .shadow-lg {\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  }\n  .shadow-xl {\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  }\n  .cursor-pointer {\n    cursor: pointer;\n  }\n  .cursor-default {\n    cursor: default;\n  }\n  .cursor-not-allowed {\n    cursor: not-allowed;\n  }\n  .select-none {\n    user-select: none;\n  }\n  .select-text {\n    user-select: text;\n  }\n  .select-all {\n    user-select: all;\n  }\n  .visible {\n    visibility: visible;\n  }\n  .invisible {\n    visibility: hidden;\n  }\n  .collapse,\n  .vs-collapsed {\n    visibility: collapse;\n  }\n  .opacity-0 {\n    opacity: 0;\n  }\n  .opacity-25 {\n    opacity: 0.25;\n  }\n  .opacity-50 {\n    opacity: 0.5;\n  }\n  .opacity-75 {\n    opacity: 0.75;\n  }\n  .opacity-100 {\n    opacity: 1;\n  }\n  @container (max-width: 320px) {\n    .hidden\\@xs {\n      display: none;\n    }\n  }\n  @container (max-width: 640px) {\n    .hidden\\@sm {\n      display: none;\n    }\n  }\n  @container (max-width: 768px) {\n    .hidden\\@md {\n      display: none;\n    }\n  }\n  @container (max-width: 1024px) {\n    .hidden\\@lg {\n      display: none;\n    }\n  }\n  @container (min-width: 320px) {\n    .block\\@xs {\n      display: block;\n    }\n  }\n  @container (min-width: 640px) {\n    .block\\@sm {\n      display: block;\n    }\n  }\n  @container (min-width: 768px) {\n    .block\\@md {\n      display: block;\n    }\n  }\n  @container (min-width: 1024px) {\n    .block\\@lg {\n      display: block;\n    }\n  }\n  @container (max-width: 320px) {\n    .text-sm\\@xs {\n      font-size: 0.875rem;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0;\n    }\n  }\n  @container (min-width: 640px) {\n    .text-base\\@sm {\n      font-size: 1rem;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0;\n    }\n  }\n  .icon-xs {\n    --icon-size: 0.75rem;\n  }\n  .icon-sm {\n    --icon-size: 0.875rem;\n  }\n  .icon-md {\n    --icon-size: 1rem;\n  }\n  .icon-lg {\n    --icon-size: 1.25rem;\n  }\n  .icon-xl {\n    --icon-size: 1.5rem;\n  }\n  .center-absolute {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  .center-flex {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: nowrap;\n  }\n  .interactive {\n    cursor: pointer;\n    touch-action: manipulation;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .interactive:focus-visible {\n    outline: 2px solid #dbeafe, #1e40af;\n    outline-offset: 2px;\n  }\n  .interactive:disabled, .interactive[aria-disabled=true] {\n    cursor: not-allowed;\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  .focus-ring:focus-visible {\n    outline: 2px solid #dbeafe, #1e40af;\n    outline-offset: 2px;\n  }\n  .truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .truncate-2 {\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .truncate-3 {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .aspect-square {\n    aspect-ratio: 1;\n  }\n  .aspect-video {\n    aspect-ratio: 16 / 9;\n  }\n  .margin-block-0 {\n    margin-block: 0;\n  }\n  .margin-block-sm {\n    margin-block: var(--space-sm);\n  }\n  .margin-block-md {\n    margin-block: var(--space-md);\n  }\n  .margin-block-lg {\n    margin-block: var(--space-lg);\n  }\n  .margin-inline-0 {\n    margin-inline: 0;\n  }\n  .margin-inline-sm {\n    margin-inline: var(--space-sm);\n  }\n  .margin-inline-md {\n    margin-inline: var(--space-md);\n  }\n  .margin-inline-lg {\n    margin-inline: var(--space-lg);\n  }\n  .margin-inline-auto {\n    margin-inline: auto;\n  }\n  .padding-block-0 {\n    padding-block: 0;\n  }\n  .padding-block-sm {\n    padding-block: var(--space-sm);\n  }\n  .padding-block-md {\n    padding-block: var(--space-md);\n  }\n  .padding-block-lg {\n    padding-block: var(--space-lg);\n  }\n  .padding-inline-0 {\n    padding-inline: 0;\n  }\n  .padding-inline-sm {\n    padding-inline: var(--space-sm);\n  }\n  .padding-inline-md {\n    padding-inline: var(--space-md);\n  }\n  .padding-inline-lg {\n    padding-inline: var(--space-lg);\n  }\n  .pointer-events-none {\n    pointer-events: none;\n  }\n  .pointer-events-auto {\n    pointer-events: auto;\n  }\n  .line-clamp-1 {\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .line-clamp-2 {\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .line-clamp-3 {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .vs-active {\n    --state-active: 1;\n  }\n  .vs-disabled {\n    pointer-events: none;\n    opacity: 0.5;\n  }\n  .vs-loading {\n    cursor: wait;\n  }\n  .vs-error {\n    color: var(--color-error, #dc3545);\n  }\n  .vs-success {\n    color: var(--color-success, #28a745);\n  }\n  .vs-hidden {\n    display: none !important;\n  }\n  .vl-container,\n  .container {\n    inline-size: 100%;\n    max-inline-size: var(--container-max, 1200px);\n    margin-inline: auto;\n  }\n  .vl-container {\n    padding-inline: var(--space-md);\n  }\n  .container {\n    padding-inline: var(--space-lg);\n  }\n  .vl-grid {\n    display: grid;\n    gap: var(--gap-md);\n  }\n  .vl-stack {\n    display: flex;\n    flex-direction: column;\n    gap: var(--gap-md);\n  }\n  .vl-cluster {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--gap-sm);\n    align-items: center;\n  }\n  .vl-center {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .vu-sr-only {\n    position: absolute;\n    inline-size: 1px;\n    block-size: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n  }\n  .vc-surface {\n    background-color: var(--color-surface);\n    color: var(--color-on-surface);\n  }\n  .vc-surface-variant {\n    background-color: var(--color-surface-variant);\n    color: var(--color-on-surface-variant);\n  }\n  .vc-primary {\n    background-color: var(--color-primary);\n    color: var(--color-on-primary);\n  }\n  .vc-secondary {\n    background-color: var(--color-secondary);\n    color: var(--color-on-secondary);\n  }\n  .vc-elevated {\n    box-shadow: var(--elev-1);\n  }\n  .vc-elevated-2 {\n    box-shadow: var(--elev-2);\n  }\n  .vc-elevated-3 {\n    box-shadow: var(--elev-3);\n  }\n  .vc-rounded {\n    border-radius: var(--radius-md);\n  }\n  .vc-rounded-sm {\n    border-radius: var(--radius-sm);\n  }\n  .vc-rounded-lg {\n    border-radius: var(--radius-lg);\n  }\n  .vc-rounded-full {\n    border-radius: var(--radius-full, 9999px);\n  }\n  .card {\n    background: var(--color-bg);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-lg);\n    padding: var(--space-lg);\n    box-shadow: var(--shadow-sm);\n  }\n  .stack > * + * {\n    margin-block-start: var(--space-md);\n  }\n  .stack-sm > * + * {\n    margin-block-start: var(--space-sm);\n  }\n  .stack-lg > * + * {\n    margin-block-start: var(--space-lg);\n  }\n  @media print {\n    .print-hidden {\n      display: none !important;\n    }\n    .print-visible {\n      display: block !important;\n    }\n    .print-break-before {\n      page-break-before: always;\n    }\n    .print-break-after {\n      page-break-after: always;\n    }\n    .print-break-inside-avoid {\n      page-break-inside: avoid;\n    }\n  }\n  @media (prefers-reduced-motion: reduce) {\n    .transition-fast,\n    .transition-normal,\n    .transition-slow {\n      transition: none;\n    }\n    * {\n      animation-duration: 0.01ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01ms !important;\n    }\n  }\n  @media (prefers-contrast: high) {\n    .text-primary {\n      color: var(--color-on-surface);\n    }\n    .text-secondary,\n    .text-muted,\n    .text-disabled {\n      color: var(--color-on-surface-variant);\n    }\n    .border {\n      border-width: 2px;\n    }\n    .border-top {\n      border-top-width: 2px;\n    }\n    .border-bottom {\n      border-bottom-width: 2px;\n    }\n    .border-left {\n      border-left-width: 2px;\n    }\n    .border-right {\n      border-right-width: 2px;\n    }\n  }\n}\n@property --value {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: true;\n}\n@property --relate {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: true;\n}\n@property --drag-x {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: false;\n}\n@property --drag-y {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: false;\n}\n@property --order {\n  syntax: \"<integer>\";\n  initial-value: 1;\n  inherits: true;\n}\n@property --content-inline-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 100%;\n  inherits: true;\n}\n@property --content-block-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 100%;\n  inherits: true;\n}\n@property --icon-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 16px;\n  inherits: true;\n}\n@property --icon-color {\n  syntax: \"<color>\";\n  initial-value: rgba(0, 0, 0, 0);\n  inherits: true;\n}\n@property --icon-padding {\n  syntax: \"<length-percentage>\";\n  initial-value: 0px;\n  inherits: true;\n}\n@property --icon-image {\n  syntax: \"<image>\";\n  initial-value: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));\n  inherits: true;\n}\n@layer ux-classes {\n  .grid-rows > ::slotted(*) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  .grid-rows > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-rows > ::slotted(*) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  .grid-rows > * {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  .grid-rows > * {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-rows > * {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  :host(.grid-rows) ::slotted(*) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  :host(.grid-rows) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-rows) ::slotted(*) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  .grid-rows {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-rows {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows {\n    grid-auto-rows: minmax(0px, max-content);\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  :host(.grid-rows) {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-rows) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows) {\n    grid-auto-rows: minmax(0px, max-content);\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  .grid-columns > ::slotted(*) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  .grid-columns > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-columns > ::slotted(*) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  .grid-columns > * {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  .grid-columns > * {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-columns > * {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  .grid-columns {\n    --display: inline-grid;\n    --flow: row;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-columns {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-columns {\n    grid-auto-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  :host(.grid-columns) {\n    --display: inline-grid;\n    --flow: row;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-columns) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-columns) {\n    grid-auto-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  .flex-columns > ::slotted(*) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  .flex-columns > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.flex-columns) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  :host(.flex-columns) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  .flex-columns > * {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  .flex-columns > * {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.flex-columns) ::slotted(*) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  :host(.flex-columns) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .flex-columns {\n    --display: inline-flex;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .flex-columns {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.flex-columns) {\n    --display: inline-flex;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.flex-columns) {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-layered > ::slotted(*) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > ::slotted(*) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) ::slotted(::slotted(*)) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) ::slotted(::slotted(*)) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered > * {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > * > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) ::slotted(*) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) ::slotted(*) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-layered {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-layered) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-layered) {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows-3c > ::slotted(*) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) ::slotted(::slotted(*)) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c > * {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) ::slotted(*) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows-3c) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows-3c > ::slotted(*:last-child) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  :host(.grid-rows-3c) ::slotted(::slotted(*:last-child)) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  .grid-rows-3c > *:last-child {\n    grid-column: var(--order, 1)/3 span;\n  }\n  :host(.grid-rows-3c) ::slotted(*:last-child) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  .grid-rows-3c {\n    --order: sibling-index();\n  }\n  .grid-rows-3c {\n    grid-column: var(--order, 1)/var(--order, 1) span;\n  }\n  .grid-rows-3c {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows-3c) {\n    --order: sibling-index();\n  }\n  :host(.grid-rows-3c) {\n    grid-column: var(--order, 1)/var(--order, 1) span;\n  }\n  :host(.grid-rows-3c) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .stretch-inline {\n    inline-size: 100%;\n    inline-size: -webkit-fill-available;\n    inline-size: stretch;\n  }\n  :host(.stretch-inline) {\n    inline-size: 100%;\n    inline-size: -webkit-fill-available;\n    inline-size: stretch;\n  }\n  .stretch-block {\n    block-size: 100%;\n    block-size: -webkit-fill-available;\n    block-size: stretch;\n  }\n  :host(.stretch-block) {\n    block-size: 100%;\n    block-size: -webkit-fill-available;\n    block-size: stretch;\n  }\n  .content-inline-size {\n    padding-inline: max(100% - (100% - var(--content-inline-size, 100%) * 0.5), 0px);\n  }\n  :host(.content-inline-size) {\n    padding-inline: max(100% - (100% - var(--content-inline-size, 100%) * 0.5), 0px);\n  }\n  .content-block-size {\n    padding-block: max(100% - (100% - var(--content-block-size, 100%) * 0.5), 0px);\n  }\n  :host(.content-block-size) {\n    padding-block: max(100% - (100% - var(--content-block-size, 100%) * 0.5), 0px);\n  }\n  .ux-anchor {\n    inset-inline-start: max(var(--client-x, 0px), 0px);\n    inset-block-start: max(var(--client-y, 0px), 0px);\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    writing-mode: horizontal-tb;\n    translate: 0% 0% 0%;\n    transform: none;\n  }\n  .ux-anchor {\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--client-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--client-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n  }\n  @supports (position-anchor: --example) {\n    .ux-anchor {\n      position-anchor: var(--anchor-group);\n      inset-inline-start: anchor(var(--anchor-group) start);\n      inset-block-start: anchor(var(--anchor-group) end);\n      inline-size: anchor-size(var(--anchor-group) self-inline);\n    }\n  }\n  :host(.ux-anchor) {\n    inset-inline-start: max(var(--client-x, 0px), 0px);\n    inset-block-start: max(var(--client-y, 0px), 0px);\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    writing-mode: horizontal-tb;\n    translate: 0% 0% 0%;\n    transform: none;\n  }\n  :host(.ux-anchor) {\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--client-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--client-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n  }\n  @supports (position-anchor: --example) {\n    :host(.ux-anchor) {\n      position-anchor: var(--anchor-group);\n      inset-inline-start: anchor(var(--anchor-group) start);\n      inset-block-start: anchor(var(--anchor-group) end);\n      inline-size: anchor-size(var(--anchor-group) self-inline);\n    }\n  }\n  .ux-anchor {\n    --shift-x: var(--client-x, 0px);\n    --shift-y: var(--client-y, 0px);\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    inset-inline-start: max(var(--shift-x), 0px);\n    inset-block-start: max(var(--shift-y), var(--status-bar-padding, 0px));\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    translate: 0% 0% 0%;\n    writing-mode: horizontal-tb;\n    transform: none;\n  }\n  :host(.ux-anchor) {\n    --shift-x: var(--client-x, 0px);\n    --shift-y: var(--client-y, 0px);\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    inset-inline-start: max(var(--shift-x), 0px);\n    inset-block-start: max(var(--shift-y), var(--status-bar-padding, 0px));\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    translate: 0% 0% 0%;\n    writing-mode: horizontal-tb;\n    transform: none;\n  }\n  .layered-wrap {\n    background-color: transparent;\n    display: inline grid;\n    inline-size: max-content;\n    block-size: max-content;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    z-index: calc(var(--z-index, 0) + 1);\n    overflow: visible;\n  }\n  .layered-wrap > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.layered-wrap) {\n    background-color: transparent;\n    display: inline grid;\n    inline-size: max-content;\n    block-size: max-content;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    z-index: calc(var(--z-index, 0) + 1);\n    overflow: visible;\n  }\n  :host(.layered-wrap) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n}\n@layer components {\n  ui-icon {\n    --icon-color: currentColor;\n    --icon-size: 1rem;\n    --icon-padding: 0.125rem;\n    display: inline-grid;\n    place-content: center;\n    place-items: center;\n    color: var(--icon-color);\n    aspect-ratio: 1;\n  }\n  ui-icon {\n    vertical-align: middle;\n    margin-inline-end: 0.125rem;\n  }\n  ui-icon:last-child {\n    margin-inline-end: 0;\n  }\n}"), J = class extends K {
	constructor() {
		super();
	}
	styles = () => be;
	render = () => i`<div part="taskbar" class="taskbar"><slot></slot></div>`;
};
J = _([n("ui-taskbar")], J);
//#endregion
//#region ../../projects/fl.ui/src/ui/navigation/taskbar/element/Task.ts
var Y = r("@function --hsv(--src-color <color>) returns <color> {\n  result: hsl(from var(--src-color, black) h calc(calc((calc(l / 100) - calc(calc(l / 100) * (1 - calc(s / 100) / 2))) / clamp(0.0001, min(calc(calc(l / 100) * (1 - calc(s / 100) / 2)), calc(1 - calc(calc(l / 100) * (1 - calc(s / 100) / 2)))), 1)) * 100) calc(calc(calc(l / 100) * (1 - calc(s / 100) / 2)) * 100) / alpha);\n}\n/* ai-refactor: optimized/refactored at 2026-02-13T02:50:43Z */\n/* ==========================================================================\n    Meta / Declarations\n   ========================================================================== */\n/* ==========================================================================\n    Tokens / Mixins (global, not layered)\n   ========================================================================== */\n/* ai-refactor: optimized/refactored at 2026-02-13T00:48:23Z */\n@layer tokens, base, layout, utilities, shells, shell, views, view, viewer, components, ux-layer, markdown, essentials, print, print-breaks, overrides;\n@layer tokens {\n  :root,\n  :host,\n  :scope {\n    color-scheme: light dark;\n    --color-primary: #5a7fff;\n    --color-on-primary: #ffffff;\n    --color-secondary: #6b7280;\n    --color-on-secondary: #ffffff;\n    --color-tertiary: #64748b;\n    --color-on-tertiary: #ffffff;\n    --color-error: #ef4444;\n    --color-on-error: #ffffff;\n    --color-success: #4caf50;\n    --color-warning: #ff9800;\n    --color-info: #2196f3;\n    --color-background: #fafbfc;\n    --color-on-background: #1e293b;\n    --color-surface: #fafbfc;\n    --color-on-surface: #1e293b;\n    --color-surface-variant: #f1f5f9;\n    --color-on-surface-variant: #64748b;\n    --color-outline: #cbd5e1;\n    --color-outline-variant: #94a3b8;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 96%, var(--color-primary) 4%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 75%, transparent);\n    --space-xs: 0.25rem;\n    --space-sm: 0.5rem;\n    --space-md: 0.75rem;\n    --space-lg: 1rem;\n    --space-xl: 1.25rem;\n    --space-2xl: 1.5rem;\n    --padding-xs: var(--space-xs);\n    --padding-sm: var(--space-sm);\n    --padding-md: var(--space-md);\n    --padding-lg: var(--space-lg);\n    --padding-xl: var(--space-xl);\n    --padding-2xl: var(--space-2xl);\n    --padding-3xl: 2rem;\n    --padding-4xl: 2.5rem;\n    --padding-5xl: 3rem;\n    --padding-6xl: 4rem;\n    --padding-7xl: 5rem;\n    --padding-8xl: 6rem;\n    --padding-9xl: 8rem;\n    --gap-xs: var(--space-xs);\n    --gap-sm: var(--space-sm);\n    --gap-md: var(--space-md);\n    --gap-lg: var(--space-lg);\n    --gap-xl: var(--space-xl);\n    --gap-2xl: var(--space-2xl);\n    --radius-none: 0;\n    --radius-sm: 0.25rem;\n    --radius-default: 0.25rem;\n    --radius-md: 0.375rem;\n    --radius-lg: 0.5rem;\n    --radius-xl: 0.75rem;\n    --radius-2xl: 1rem;\n    --radius-3xl: 1.5rem;\n    --radius-full: 9999px;\n    --elev-0: none;\n    --elev-1: 0 1px 1px rgba(0, 0, 0, 0.06), 0 1px 3px rgba(0, 0, 0, 0.1);\n    --elev-2: 0 2px 6px rgba(0, 0, 0, 0.12), 0 8px 24px rgba(0, 0, 0, 0.08);\n    --elev-3: 0 6px 16px rgba(0, 0, 0, 0.14), 0 18px 48px rgba(0, 0, 0, 0.1);\n    --shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);\n    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1);\n    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);\n    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);\n    --shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1);\n    --shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.1);\n    --shadow-inset: inset 0 2px 4px rgba(0, 0, 0, 0.06);\n    --shadow-inset-strong: inset 0 4px 8px rgba(0, 0, 0, 0.12);\n    --shadow-none: 0 0 #0000;\n    --text-xs: 0.8rem;\n    --text-sm: 0.9rem;\n    --text-base: 1rem;\n    --text-lg: 1.1rem;\n    --text-xl: 1.25rem;\n    --text-2xl: 1.6rem;\n    --text-3xl: 2rem;\n    --font-size-xs: 0.75rem;\n    --font-size-sm: 0.875rem;\n    --font-size-base: 1rem;\n    --font-size-lg: 1.125rem;\n    --font-size-xl: 1.25rem;\n    --font-weight-normal: 400;\n    --font-weight-medium: 500;\n    --font-weight-semibold: 600;\n    --font-weight-bold: 700;\n    --font-family: \"Roboto\", ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif;\n    --font-family-mono: \"Roboto Mono\", \"SF Mono\", Monaco, Inconsolata, \"Fira Code\", monospace;\n    --font-sans: var(--font-family);\n    --font-mono: var(--font-family-mono);\n    --leading-tight: 1.2;\n    --leading-normal: 1.5;\n    --leading-relaxed: 1.8;\n    --transition-fast: 120ms cubic-bezier(0.2, 0, 0, 1);\n    --transition-normal: 160ms cubic-bezier(0.2, 0, 0, 1);\n    --transition-slow: 200ms cubic-bezier(0.2, 0, 0, 1);\n    --motion-fast: var(--transition-fast);\n    --motion-normal: var(--transition-normal);\n    --motion-slow: var(--transition-slow);\n    --focus-ring: 0 0 0 3px color-mix(in oklab, var(--color-primary) 35%, transparent);\n    --z-base: 0;\n    --z-dropdown: 100;\n    --z-sticky: 200;\n    --z-fixed: 300;\n    --z-modal-backdrop: 400;\n    --z-modal: 500;\n    --z-popover: 600;\n    --z-tooltip: 700;\n    --z-toast: 800;\n    --z-max: 9999;\n    --view-bg: var(--color-surface);\n    --view-fg: var(--color-on-surface);\n    --view-border: var(--color-outline-variant);\n    --view-input-bg: light-dark(#ffffff, var(--color-surface-container-high));\n    --view-files-bg: light-dark(rgba(0, 0, 0, 0.02), var(--color-surface-container-low));\n    --view-file-bg: light-dark(rgba(0, 0, 0, 0.03), var(--color-surface-container-lowest, var(--color-surface-container-low)));\n    --view-results-bg: light-dark(rgba(0, 0, 0, 0.01), var(--color-surface-container-low));\n    --view-result-bg: light-dark(rgba(0, 0, 0, 0.03), var(--color-surface-container-lowest, var(--color-surface-container-low)));\n    --color-surface-elevated: var(--color-surface-container);\n    --color-surface-hover: var(--color-surface-container-low);\n    --color-surface-active: var(--color-surface-container-high);\n    --color-on-surface-muted: var(--color-on-surface-variant);\n    --color-background-alt: var(--color-surface-variant);\n    --color-primary-hover: color-mix(in oklab, var(--color-primary) 80%, black);\n    --color-primary-active: color-mix(in oklab, var(--color-primary) 65%, black);\n    --color-accent: var(--color-secondary);\n    --color-accent-hover: color-mix(in oklab, var(--color-secondary) 80%, black);\n    --color-on-accent: var(--color-on-secondary);\n    --color-border-hover: var(--color-outline-variant);\n    --color-border-strong: var(--color-outline);\n    --color-border-focus: var(--color-primary);\n    --color-text: var(--color-on-surface);\n    --color-text-secondary: var(--color-on-surface-variant);\n    --color-text-muted: color-mix(in oklab, var(--color-on-surface) 50%, var(--color-surface));\n    --color-text-disabled: color-mix(in oklab, var(--color-on-surface) 38%, var(--color-surface));\n    --color-text-inverse: var(--color-on-primary);\n    --color-link: var(--color-primary);\n    --color-link-hover: color-mix(in oklab, var(--color-primary) 80%, black);\n    --color-success-light: color-mix(in oklab, var(--color-success) 60%, white);\n    --color-success-dark: color-mix(in oklab, var(--color-success) 70%, black);\n    --color-warning-light: color-mix(in oklab, var(--color-warning) 60%, white);\n    --color-warning-dark: color-mix(in oklab, var(--color-warning) 70%, black);\n    --color-error-light: color-mix(in oklab, var(--color-error) 60%, white);\n    --color-error-dark: color-mix(in oklab, var(--color-error) 70%, black);\n    --color-info-light: color-mix(in oklab, var(--color-info) 60%, white);\n    --color-info-dark: color-mix(in oklab, var(--color-info) 70%, black);\n    --color-bg: var(--color-surface, var(--color-surface));\n    --color-bg-alt: var(--color-surface-variant, var(--color-surface-variant));\n    --color-fg: var(--color-on-surface, var(--color-on-surface));\n    --color-fg-muted: var(--color-on-surface-variant, var(--color-on-surface-variant));\n    --btn-height-sm: 2rem;\n    --btn-height-md: 2.5rem;\n    --btn-height-lg: 3rem;\n    --btn-padding-x-sm: var(--space-md);\n    --btn-padding-x-md: var(--space-lg);\n    --btn-padding-x-lg: 1.5rem;\n    --btn-radius: var(--radius-md);\n    --btn-font-weight: var(--font-weight-medium);\n    --input-height-sm: 2rem;\n    --input-height-md: 2.5rem;\n    --input-height-lg: 3rem;\n    --input-padding-x: var(--space-md);\n    --input-radius: var(--radius-md);\n    --input-border-color: var(--color-border, var(--color-border));\n    --input-focus-ring-color: var(--color-primary);\n    --input-focus-ring-width: 2px;\n    --card-padding: var(--space-lg);\n    --card-radius: var(--radius-lg);\n    --card-shadow: var(--shadow-sm);\n    --card-border-color: var(--color-border, var(--color-border));\n    --modal-backdrop-bg: light-dark(rgb(0 0 0 / 0.5), rgb(0 0 0 / 0.7));\n    --modal-bg: var(--color-surface, var(--color-surface));\n    --modal-radius: var(--radius-xl);\n    --modal-shadow: var(--shadow-xl);\n    --modal-padding: 1.5rem;\n    --toast-font-family: var(--font-family, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif);\n    --toast-font-size: var(--font-size-base, 1rem);\n    --toast-font-weight: var(--font-weight-medium, 500);\n    --toast-letter-spacing: 0.01em;\n    --toast-line-height: 1.4;\n    --toast-white-space: nowrap;\n    --toast-pointer-events: auto;\n    --toast-user-select: none;\n    --toast-cursor: default;\n    --toast-opacity: 0;\n    --toast-transform: translateY(100%) scale(0.9);\n    --toast-transition: opacity 160ms ease-out, transform 160ms cubic-bezier(0.16, 1, 0.3, 1), background-color 100ms ease;\n    --toast-text: var(--color-on-surface, var(--color-on-surface, light-dark(#ffffff, #000000)));\n    --toast-bg: color-mix(in oklab, var(--color-surface-elevated, var(--color-surface-container-high, var(--color-surface, light-dark(#fafbfc, #1e293b)))) 90%, var(--color-on-surface, var(--color-on-surface, light-dark(#000000, #ffffff))));\n    --toast-radius: var(--radius-lg);\n    --toast-shadow: var(--shadow-lg);\n    --toast-padding: var(--space-lg);\n    --sidebar-width: 280px;\n    --sidebar-collapsed-width: 64px;\n    --nav-height: 56px;\n    --nav-height-compact: 48px;\n    --status-height: 24px;\n    --status-bg: var(--color-surface-elevated, var(--color-surface-container-high));\n    --status-font-size: var(--text-xs);\n  }\n  @media (prefers-color-scheme: dark) {\n    :root,\n    :host,\n    :scope {\n      --color-primary: #7ca7ff;\n      --color-on-primary: #0f172a;\n      --color-secondary: #94a3b8;\n      --color-on-secondary: #1e293b;\n      --color-tertiary: #94a3b8;\n      --color-on-tertiary: #0f172a;\n      --color-error: #f87171;\n      --color-on-error: #450a0a;\n      --color-success: #66bb6a;\n      --color-warning: #ffa726;\n      --color-info: #42a5f5;\n      --color-background: #0f1419;\n      --color-on-background: #f1f5f9;\n      --color-surface: #0f1419;\n      --color-on-surface: #f1f5f9;\n      --color-surface-variant: #1e293b;\n      --color-on-surface-variant: #cbd5e1;\n      --color-outline: #475569;\n      --color-outline-variant: #334155;\n      --color-surface-container-low: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n      --color-surface-container: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n      --color-surface-container-high: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n      --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 80%, var(--color-primary) 20%);\n      --color-border: color-mix(in oklab, var(--color-outline-variant) 70%, transparent);\n    }\n  }\n  [data-theme=light] {\n    color-scheme: light;\n    --color-primary: #5a7fff;\n    --color-on-primary: #ffffff;\n    --color-secondary: #6b7280;\n    --color-on-secondary: #ffffff;\n    --color-tertiary: #64748b;\n    --color-on-tertiary: #ffffff;\n    --color-error: #ef4444;\n    --color-on-error: #ffffff;\n    --color-success: #4caf50;\n    --color-warning: #ff9800;\n    --color-info: #2196f3;\n    --color-background: #fafbfc;\n    --color-on-background: #1e293b;\n    --color-surface: #fafbfc;\n    --color-on-surface: #1e293b;\n    --color-surface-variant: #f1f5f9;\n    --color-on-surface-variant: #64748b;\n    --color-outline: #cbd5e1;\n    --color-outline-variant: #94a3b8;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 96%, var(--color-primary) 4%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 75%, transparent);\n  }\n  [data-theme=dark] {\n    color-scheme: dark;\n    --color-primary: #7ca7ff;\n    --color-on-primary: #0f172a;\n    --color-secondary: #94a3b8;\n    --color-on-secondary: #1e293b;\n    --color-tertiary: #94a3b8;\n    --color-on-tertiary: #0f172a;\n    --color-error: #f87171;\n    --color-on-error: #450a0a;\n    --color-success: #66bb6a;\n    --color-warning: #ffa726;\n    --color-info: #42a5f5;\n    --color-background: #0f1419;\n    --color-on-background: #f1f5f9;\n    --color-surface: #0f1419;\n    --color-on-surface: #f1f5f9;\n    --color-surface-variant: #1e293b;\n    --color-on-surface-variant: #cbd5e1;\n    --color-outline: #475569;\n    --color-outline-variant: #334155;\n    --color-surface-container-low: color-mix(in oklab, var(--color-surface) 92%, var(--color-primary) 8%);\n    --color-surface-container: color-mix(in oklab, var(--color-surface) 88%, var(--color-primary) 12%);\n    --color-surface-container-high: color-mix(in oklab, var(--color-surface) 84%, var(--color-primary) 16%);\n    --color-surface-container-highest: color-mix(in oklab, var(--color-surface) 80%, var(--color-primary) 20%);\n    --color-border: color-mix(in oklab, var(--color-outline-variant) 70%, transparent);\n  }\n  @media (prefers-reduced-motion: reduce) {\n    :root {\n      --transition-fast: 0ms;\n      --transition-normal: 0ms;\n      --transition-slow: 0ms;\n      --motion-fast: 0ms;\n      --motion-normal: 0ms;\n      --motion-slow: 0ms;\n    }\n  }\n  @media (prefers-contrast: high) {\n    :root {\n      --color-border: var(--color-border, var(--color-outline));\n      --color-border-hover: color-mix(in oklab, var(--color-border, var(--color-outline)) 80%, var(--color-on-surface, var(--color-on-surface)));\n      --color-text-secondary: var(--color-on-surface, var(--color-on-surface));\n      --color-text-muted: var(--color-on-surface-variant, var(--color-on-surface-variant));\n    }\n  }\n  @media print {\n    :root {\n      --view-padding: 0;\n      --view-content-max-width: 100%;\n      --view-bg: white;\n      --view-fg: black;\n      --view-heading-color: black;\n      --view-link-color: black;\n    }\n    :root:has([data-view=viewer]) {\n      --view-code-bg: #f5f5f5;\n      --view-code-fg: black;\n      --view-blockquote-bg: #f5f5f5;\n    }\n  }\n}\n/**\n * Unified CSS Custom Property Registration System\n * \n * This module consolidates property registration logic used across the library.\n * It provides a single source of truth for @property declarations via the\n * CSS Properties and Values API (CSS Houdini).\n * \n * Used by:\n * - lib/core/_properties.scss (orientation, transform, layout properties)\n * - lib/basic/_typed-properties.scss (UI component properties)\n * - lib/advanced/design/ (MD3 design properties)\n */\n/* stylelint-disable scss/function-no-unknown */\n@layer utilities {\n  .m-0 {\n    margin: 0;\n  }\n  .mb-0 {\n    margin-block: 0;\n  }\n  .mi-0 {\n    margin-inline: 0;\n  }\n  .p-0 {\n    padding: 0;\n  }\n  .pb-0 {\n    padding-block: 0;\n  }\n  .pi-0 {\n    padding-inline: 0;\n  }\n  .gap-0 {\n    gap: 0;\n  }\n  .inset-0 {\n    inset: 0;\n  }\n  .m-xs {\n    margin: 0.25rem;\n  }\n  .mb-xs {\n    margin-block: 0.25rem;\n  }\n  .mi-xs {\n    margin-inline: 0.25rem;\n  }\n  .p-xs {\n    padding: 0.25rem;\n  }\n  .pb-xs {\n    padding-block: 0.25rem;\n  }\n  .pi-xs {\n    padding-inline: 0.25rem;\n  }\n  .gap-xs {\n    gap: 0.25rem;\n  }\n  .inset-xs {\n    inset: 0.25rem;\n  }\n  .m-sm {\n    margin: 0.5rem;\n  }\n  .mb-sm {\n    margin-block: 0.5rem;\n  }\n  .mi-sm {\n    margin-inline: 0.5rem;\n  }\n  .p-sm {\n    padding: 0.5rem;\n  }\n  .pb-sm {\n    padding-block: 0.5rem;\n  }\n  .pi-sm {\n    padding-inline: 0.5rem;\n  }\n  .gap-sm {\n    gap: 0.5rem;\n  }\n  .inset-sm {\n    inset: 0.5rem;\n  }\n  .m-md {\n    margin: 0.75rem;\n  }\n  .mb-md {\n    margin-block: 0.75rem;\n  }\n  .mi-md {\n    margin-inline: 0.75rem;\n  }\n  .p-md {\n    padding: 0.75rem;\n  }\n  .pb-md {\n    padding-block: 0.75rem;\n  }\n  .pi-md {\n    padding-inline: 0.75rem;\n  }\n  .gap-md {\n    gap: 0.75rem;\n  }\n  .inset-md {\n    inset: 0.75rem;\n  }\n  .m-lg {\n    margin: 1rem;\n  }\n  .mb-lg {\n    margin-block: 1rem;\n  }\n  .mi-lg {\n    margin-inline: 1rem;\n  }\n  .p-lg {\n    padding: 1rem;\n  }\n  .pb-lg {\n    padding-block: 1rem;\n  }\n  .pi-lg {\n    padding-inline: 1rem;\n  }\n  .gap-lg {\n    gap: 1rem;\n  }\n  .inset-lg {\n    inset: 1rem;\n  }\n  .m-xl {\n    margin: 1.25rem;\n  }\n  .mb-xl {\n    margin-block: 1.25rem;\n  }\n  .mi-xl {\n    margin-inline: 1.25rem;\n  }\n  .p-xl {\n    padding: 1.25rem;\n  }\n  .pb-xl {\n    padding-block: 1.25rem;\n  }\n  .pi-xl {\n    padding-inline: 1.25rem;\n  }\n  .gap-xl {\n    gap: 1.25rem;\n  }\n  .inset-xl {\n    inset: 1.25rem;\n  }\n  .m-2xl {\n    margin: 1.5rem;\n  }\n  .mb-2xl {\n    margin-block: 1.5rem;\n  }\n  .mi-2xl {\n    margin-inline: 1.5rem;\n  }\n  .p-2xl {\n    padding: 1.5rem;\n  }\n  .pb-2xl {\n    padding-block: 1.5rem;\n  }\n  .pi-2xl {\n    padding-inline: 1.5rem;\n  }\n  .gap-2xl {\n    gap: 1.5rem;\n  }\n  .inset-2xl {\n    inset: 1.5rem;\n  }\n  .m-3xl {\n    margin: 2rem;\n  }\n  .mb-3xl {\n    margin-block: 2rem;\n  }\n  .mi-3xl {\n    margin-inline: 2rem;\n  }\n  .p-3xl {\n    padding: 2rem;\n  }\n  .pb-3xl {\n    padding-block: 2rem;\n  }\n  .pi-3xl {\n    padding-inline: 2rem;\n  }\n  .gap-3xl {\n    gap: 2rem;\n  }\n  .inset-3xl {\n    inset: 2rem;\n  }\n  .text-xs {\n    font-size: 0.75rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-sm {\n    font-size: 0.875rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-base {\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-lg {\n    font-size: 1.125rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-xl {\n    font-size: 1.25rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .text-2xl {\n    font-size: 1.5rem;\n    font-weight: 400;\n    line-height: 1.5;\n    letter-spacing: 0;\n  }\n  .font-thin {\n    font-weight: 100;\n  }\n  .font-light {\n    font-weight: 300;\n  }\n  .font-normal {\n    font-weight: 400;\n  }\n  .font-medium {\n    font-weight: 500;\n  }\n  .font-semibold {\n    font-weight: 600;\n  }\n  .font-bold {\n    font-weight: 700;\n  }\n  .text-start {\n    text-align: start;\n  }\n  .text-center {\n    text-align: center;\n  }\n  .text-end {\n    text-align: end;\n  }\n  .text-primary {\n    color: #1e293b, #f1f5f9;\n  }\n  .text-secondary {\n    color: #64748b, #94a3b8;\n  }\n  .text-muted {\n    color: #94a3b8, #64748b;\n  }\n  .text-disabled {\n    color: #cbd5e1, #475569;\n  }\n  .block,\n  .vu-block {\n    display: block;\n  }\n  .inline,\n  .vu-inline {\n    display: inline;\n  }\n  .inline-block {\n    display: inline-block;\n  }\n  .flex,\n  .vu-flex {\n    display: flex;\n  }\n  .inline-flex {\n    display: inline-flex;\n  }\n  .grid,\n  .vu-grid {\n    display: grid;\n  }\n  .hidden,\n  .vu-hidden {\n    display: none;\n  }\n  .flex-row {\n    flex-direction: row;\n  }\n  .flex-col {\n    flex-direction: column;\n  }\n  .flex-wrap {\n    flex-wrap: wrap;\n  }\n  .flex-nowrap {\n    flex-wrap: nowrap;\n  }\n  .items-start {\n    align-items: flex-start;\n  }\n  .items-center {\n    align-items: center;\n  }\n  .items-end {\n    align-items: flex-end;\n  }\n  .items-stretch {\n    align-items: stretch;\n  }\n  .justify-start {\n    justify-content: flex-start;\n  }\n  .justify-center {\n    justify-content: center;\n  }\n  .justify-end {\n    justify-content: flex-end;\n  }\n  .justify-between {\n    justify-content: space-between;\n  }\n  .justify-around {\n    justify-content: space-around;\n  }\n  .grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .h-auto,\n  .block-size-auto {\n    block-size: auto;\n  }\n  .h-full,\n  .block-size-full {\n    block-size: 100%;\n  }\n  .h-screen {\n    block-size: 100vh;\n  }\n  .w-auto,\n  .inline-size-auto {\n    inline-size: auto;\n  }\n  .w-full,\n  .inline-size-full {\n    inline-size: 100%;\n  }\n  .w-screen {\n    inline-size: 100vw;\n  }\n  .min-h-0,\n  .min-block-size-0 {\n    min-block-size: 0;\n  }\n  .min-w-0,\n  .min-inline-size-0 {\n    min-inline-size: 0;\n  }\n  .max-h-full,\n  .max-block-size-full {\n    max-block-size: 100%;\n  }\n  .max-w-full,\n  .max-inline-size-full {\n    max-inline-size: 100%;\n  }\n  .static {\n    position: static;\n  }\n  .relative {\n    position: relative;\n  }\n  .absolute {\n    position: absolute;\n  }\n  .fixed {\n    position: fixed;\n  }\n  .sticky {\n    position: sticky;\n  }\n  .bg-surface {\n    background-color: #fafbfc, #0f1419;\n  }\n  .bg-surface-container {\n    background-color: #f1f5f9, #1e293b;\n  }\n  .bg-surface-container-high {\n    background-color: #e2e8f0, #334155;\n  }\n  .bg-primary {\n    background-color: #5a7fff, #7ca7ff;\n  }\n  .bg-secondary {\n    background-color: #6b7280, #94a3b8;\n  }\n  .border {\n    border: 1px solid #cbd5e1, #475569;\n  }\n  .border-2 {\n    border: 2px solid #cbd5e1, #475569;\n  }\n  .border-primary {\n    border: 1px solid #5a7fff, #7ca7ff;\n  }\n  .border-secondary {\n    border: 1px solid #6b7280, #94a3b8;\n  }\n  .rounded-none {\n    border-radius: 0;\n  }\n  .rounded-sm {\n    border-radius: 0.25rem;\n  }\n  .rounded-md {\n    border-radius: 0.375rem;\n  }\n  .rounded-lg {\n    border-radius: 0.5rem;\n  }\n  .rounded-full {\n    border-radius: 9999px;\n  }\n  .shadow-xs {\n    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);\n  }\n  .shadow-sm {\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);\n  }\n  .shadow-md {\n    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);\n  }\n  .shadow-lg {\n    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);\n  }\n  .shadow-xl {\n    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);\n  }\n  .cursor-pointer {\n    cursor: pointer;\n  }\n  .cursor-default {\n    cursor: default;\n  }\n  .cursor-not-allowed {\n    cursor: not-allowed;\n  }\n  .select-none {\n    user-select: none;\n  }\n  .select-text {\n    user-select: text;\n  }\n  .select-all {\n    user-select: all;\n  }\n  .visible {\n    visibility: visible;\n  }\n  .invisible {\n    visibility: hidden;\n  }\n  .collapse,\n  .vs-collapsed {\n    visibility: collapse;\n  }\n  .opacity-0 {\n    opacity: 0;\n  }\n  .opacity-25 {\n    opacity: 0.25;\n  }\n  .opacity-50 {\n    opacity: 0.5;\n  }\n  .opacity-75 {\n    opacity: 0.75;\n  }\n  .opacity-100 {\n    opacity: 1;\n  }\n  @container (max-width: 320px) {\n    .hidden\\@xs {\n      display: none;\n    }\n  }\n  @container (max-width: 640px) {\n    .hidden\\@sm {\n      display: none;\n    }\n  }\n  @container (max-width: 768px) {\n    .hidden\\@md {\n      display: none;\n    }\n  }\n  @container (max-width: 1024px) {\n    .hidden\\@lg {\n      display: none;\n    }\n  }\n  @container (min-width: 320px) {\n    .block\\@xs {\n      display: block;\n    }\n  }\n  @container (min-width: 640px) {\n    .block\\@sm {\n      display: block;\n    }\n  }\n  @container (min-width: 768px) {\n    .block\\@md {\n      display: block;\n    }\n  }\n  @container (min-width: 1024px) {\n    .block\\@lg {\n      display: block;\n    }\n  }\n  @container (max-width: 320px) {\n    .text-sm\\@xs {\n      font-size: 0.875rem;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0;\n    }\n  }\n  @container (min-width: 640px) {\n    .text-base\\@sm {\n      font-size: 1rem;\n      font-weight: 400;\n      line-height: 1.5;\n      letter-spacing: 0;\n    }\n  }\n  .icon-xs {\n    --icon-size: 0.75rem;\n  }\n  .icon-sm {\n    --icon-size: 0.875rem;\n  }\n  .icon-md {\n    --icon-size: 1rem;\n  }\n  .icon-lg {\n    --icon-size: 1.25rem;\n  }\n  .icon-xl {\n    --icon-size: 1.5rem;\n  }\n  .center-absolute {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n  .center-flex {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    flex-wrap: nowrap;\n  }\n  .interactive {\n    cursor: pointer;\n    touch-action: manipulation;\n    user-select: none;\n    -webkit-tap-highlight-color: transparent;\n  }\n  .interactive:focus-visible {\n    outline: 2px solid #dbeafe, #1e40af;\n    outline-offset: 2px;\n  }\n  .interactive:disabled, .interactive[aria-disabled=true] {\n    cursor: not-allowed;\n    opacity: 0.6;\n    pointer-events: none;\n  }\n  .focus-ring:focus-visible {\n    outline: 2px solid #dbeafe, #1e40af;\n    outline-offset: 2px;\n  }\n  .truncate {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .truncate-2 {\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .truncate-3 {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .aspect-square {\n    aspect-ratio: 1;\n  }\n  .aspect-video {\n    aspect-ratio: 16 / 9;\n  }\n  .margin-block-0 {\n    margin-block: 0;\n  }\n  .margin-block-sm {\n    margin-block: var(--space-sm);\n  }\n  .margin-block-md {\n    margin-block: var(--space-md);\n  }\n  .margin-block-lg {\n    margin-block: var(--space-lg);\n  }\n  .margin-inline-0 {\n    margin-inline: 0;\n  }\n  .margin-inline-sm {\n    margin-inline: var(--space-sm);\n  }\n  .margin-inline-md {\n    margin-inline: var(--space-md);\n  }\n  .margin-inline-lg {\n    margin-inline: var(--space-lg);\n  }\n  .margin-inline-auto {\n    margin-inline: auto;\n  }\n  .padding-block-0 {\n    padding-block: 0;\n  }\n  .padding-block-sm {\n    padding-block: var(--space-sm);\n  }\n  .padding-block-md {\n    padding-block: var(--space-md);\n  }\n  .padding-block-lg {\n    padding-block: var(--space-lg);\n  }\n  .padding-inline-0 {\n    padding-inline: 0;\n  }\n  .padding-inline-sm {\n    padding-inline: var(--space-sm);\n  }\n  .padding-inline-md {\n    padding-inline: var(--space-md);\n  }\n  .padding-inline-lg {\n    padding-inline: var(--space-lg);\n  }\n  .pointer-events-none {\n    pointer-events: none;\n  }\n  .pointer-events-auto {\n    pointer-events: auto;\n  }\n  .line-clamp-1 {\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .line-clamp-2 {\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .line-clamp-3 {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .vs-active {\n    --state-active: 1;\n  }\n  .vs-disabled {\n    pointer-events: none;\n    opacity: 0.5;\n  }\n  .vs-loading {\n    cursor: wait;\n  }\n  .vs-error {\n    color: var(--color-error, #dc3545);\n  }\n  .vs-success {\n    color: var(--color-success, #28a745);\n  }\n  .vs-hidden {\n    display: none !important;\n  }\n  .vl-container,\n  .container {\n    inline-size: 100%;\n    max-inline-size: var(--container-max, 1200px);\n    margin-inline: auto;\n  }\n  .vl-container {\n    padding-inline: var(--space-md);\n  }\n  .container {\n    padding-inline: var(--space-lg);\n  }\n  .vl-grid {\n    display: grid;\n    gap: var(--gap-md);\n  }\n  .vl-stack {\n    display: flex;\n    flex-direction: column;\n    gap: var(--gap-md);\n  }\n  .vl-cluster {\n    display: flex;\n    flex-wrap: wrap;\n    gap: var(--gap-sm);\n    align-items: center;\n  }\n  .vl-center {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .vu-sr-only {\n    position: absolute;\n    inline-size: 1px;\n    block-size: 1px;\n    padding: 0;\n    margin: -1px;\n    overflow: hidden;\n    clip: rect(0, 0, 0, 0);\n    white-space: nowrap;\n    border: 0;\n  }\n  .vc-surface {\n    background-color: var(--color-surface);\n    color: var(--color-on-surface);\n  }\n  .vc-surface-variant {\n    background-color: var(--color-surface-variant);\n    color: var(--color-on-surface-variant);\n  }\n  .vc-primary {\n    background-color: var(--color-primary);\n    color: var(--color-on-primary);\n  }\n  .vc-secondary {\n    background-color: var(--color-secondary);\n    color: var(--color-on-secondary);\n  }\n  .vc-elevated {\n    box-shadow: var(--elev-1);\n  }\n  .vc-elevated-2 {\n    box-shadow: var(--elev-2);\n  }\n  .vc-elevated-3 {\n    box-shadow: var(--elev-3);\n  }\n  .vc-rounded {\n    border-radius: var(--radius-md);\n  }\n  .vc-rounded-sm {\n    border-radius: var(--radius-sm);\n  }\n  .vc-rounded-lg {\n    border-radius: var(--radius-lg);\n  }\n  .vc-rounded-full {\n    border-radius: var(--radius-full, 9999px);\n  }\n  .card {\n    background: var(--color-bg);\n    border: 1px solid var(--color-border);\n    border-radius: var(--radius-lg);\n    padding: var(--space-lg);\n    box-shadow: var(--shadow-sm);\n  }\n  .stack > * + * {\n    margin-block-start: var(--space-md);\n  }\n  .stack-sm > * + * {\n    margin-block-start: var(--space-sm);\n  }\n  .stack-lg > * + * {\n    margin-block-start: var(--space-lg);\n  }\n  @media print {\n    .print-hidden {\n      display: none !important;\n    }\n    .print-visible {\n      display: block !important;\n    }\n    .print-break-before {\n      page-break-before: always;\n    }\n    .print-break-after {\n      page-break-after: always;\n    }\n    .print-break-inside-avoid {\n      page-break-inside: avoid;\n    }\n  }\n  @media (prefers-reduced-motion: reduce) {\n    .transition-fast,\n    .transition-normal,\n    .transition-slow {\n      transition: none;\n    }\n    * {\n      animation-duration: 0.01ms !important;\n      animation-iteration-count: 1 !important;\n      transition-duration: 0.01ms !important;\n    }\n  }\n  @media (prefers-contrast: high) {\n    .text-primary {\n      color: var(--color-on-surface);\n    }\n    .text-secondary,\n    .text-muted,\n    .text-disabled {\n      color: var(--color-on-surface-variant);\n    }\n    .border {\n      border-width: 2px;\n    }\n    .border-top {\n      border-top-width: 2px;\n    }\n    .border-bottom {\n      border-bottom-width: 2px;\n    }\n    .border-left {\n      border-left-width: 2px;\n    }\n    .border-right {\n      border-right-width: 2px;\n    }\n  }\n}\n@property --value {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: true;\n}\n@property --relate {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: true;\n}\n@property --drag-x {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: false;\n}\n@property --drag-y {\n  syntax: \"<number>\";\n  initial-value: 0;\n  inherits: false;\n}\n@property --order {\n  syntax: \"<integer>\";\n  initial-value: 1;\n  inherits: true;\n}\n@property --content-inline-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 100%;\n  inherits: true;\n}\n@property --content-block-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 100%;\n  inherits: true;\n}\n@property --icon-size {\n  syntax: \"<length-percentage>\";\n  initial-value: 16px;\n  inherits: true;\n}\n@property --icon-color {\n  syntax: \"<color>\";\n  initial-value: rgba(0, 0, 0, 0);\n  inherits: true;\n}\n@property --icon-padding {\n  syntax: \"<length-percentage>\";\n  initial-value: 0px;\n  inherits: true;\n}\n@property --icon-image {\n  syntax: \"<image>\";\n  initial-value: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0));\n  inherits: true;\n}\n@layer ux-classes {\n  .grid-rows > ::slotted(*) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  .grid-rows > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-rows > ::slotted(*) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-rows) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  .grid-rows > * {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  .grid-rows > * {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-rows > * {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  :host(.grid-rows) ::slotted(*) {\n    display: grid;\n    grid-auto-flow: column;\n  }\n  :host(.grid-rows) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-rows) ::slotted(*) {\n    --order: sibling-index();\n    grid-column: 1/-1;\n    grid-row: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-template-columns: subgrid;\n    grid-template-rows: minmax(0px, max-content);\n  }\n  .grid-rows {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-rows {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows {\n    grid-auto-rows: minmax(0px, max-content);\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  :host(.grid-rows) {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-rows) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows) {\n    grid-auto-rows: minmax(0px, max-content);\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  .grid-columns > ::slotted(*) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  .grid-columns > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-columns > ::slotted(*) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-columns) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  .grid-columns > * {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  .grid-columns > * {\n    place-content: center;\n    place-items: center;\n  }\n  .grid-columns > * {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    display: grid;\n    grid-auto-flow: row;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.grid-columns) ::slotted(*) {\n    --order: sibling-index();\n    grid-column: var(--order, 1)/calc(var(--order, 1) + 1);\n    grid-row: 1/-1;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: subgrid;\n  }\n  .grid-columns {\n    --display: inline-grid;\n    --flow: row;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-columns {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-columns {\n    grid-auto-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  :host(.grid-columns) {\n    --display: inline-grid;\n    --flow: row;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-columns) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-columns) {\n    grid-auto-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    margin: 0px;\n    padding: 0px;\n    list-style-type: none;\n    list-style-position: inside;\n  }\n  .flex-columns > ::slotted(*) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  .flex-columns > ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.flex-columns) ::slotted(::slotted(*)) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  :host(.flex-columns) ::slotted(::slotted(*)) {\n    place-content: center;\n    place-items: center;\n  }\n  .flex-columns > * {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  .flex-columns > * {\n    place-content: center;\n    place-items: center;\n  }\n  :host(.flex-columns) ::slotted(*) {\n    --order: sibling-index();\n    order: var(--order, auto);\n    flex: 1 1 max-content;\n  }\n  :host(.flex-columns) ::slotted(*) {\n    place-content: center;\n    place-items: center;\n  }\n  .flex-columns {\n    --display: inline-flex;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .flex-columns {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.flex-columns) {\n    --display: inline-flex;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.flex-columns) {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-layered > ::slotted(*) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > ::slotted(*) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) ::slotted(::slotted(*)) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) ::slotted(::slotted(*)) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered > * {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > * > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) ::slotted(*) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) ::slotted(*) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  .grid-layered > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  .grid-layered {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  .grid-layered {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-layered) {\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n  }\n  :host(.grid-layered) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.grid-layered) {\n    --display: inline-grid;\n    --flow: column;\n    --items: center;\n    --content: center;\n    display: var(--display, inline-block);\n    flex-direction: var(--flow, row);\n    place-items: var(--items, center);\n    place-content: var(--content, center);\n    box-sizing: border-box;\n  }\n  :host(.grid-layered) {\n    inline-size: max-content;\n    block-size: max-content;\n    --i-size: max-content;\n    --b-size: max-content;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows-3c > ::slotted(*) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) ::slotted(::slotted(*)) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c > * {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) ::slotted(*) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  .grid-rows-3c {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows-3c) {\n    grid-template-columns: minmax(0px, max-content) minmax(0px, 1fr) minmax(0px, max-content);\n  }\n  :host(.grid-rows-3c) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .grid-rows-3c > ::slotted(*:last-child) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  :host(.grid-rows-3c) ::slotted(::slotted(*:last-child)) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  .grid-rows-3c > *:last-child {\n    grid-column: var(--order, 1)/3 span;\n  }\n  :host(.grid-rows-3c) ::slotted(*:last-child) {\n    grid-column: var(--order, 1)/3 span;\n  }\n  .grid-rows-3c {\n    --order: sibling-index();\n  }\n  .grid-rows-3c {\n    grid-column: var(--order, 1)/var(--order, 1) span;\n  }\n  .grid-rows-3c {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  :host(.grid-rows-3c) {\n    --order: sibling-index();\n  }\n  :host(.grid-rows-3c) {\n    grid-column: var(--order, 1)/var(--order, 1) span;\n  }\n  :host(.grid-rows-3c) {\n    inline-size: auto;\n    block-size: auto;\n    --i-size: auto;\n    --b-size: auto;\n    inline-size: var(--i-size, 100%);\n    block-size: var(--b-size, 100%);\n    aspect-ratio: var(--ar, auto);\n  }\n  .stretch-inline {\n    inline-size: 100%;\n    inline-size: -webkit-fill-available;\n    inline-size: stretch;\n  }\n  :host(.stretch-inline) {\n    inline-size: 100%;\n    inline-size: -webkit-fill-available;\n    inline-size: stretch;\n  }\n  .stretch-block {\n    block-size: 100%;\n    block-size: -webkit-fill-available;\n    block-size: stretch;\n  }\n  :host(.stretch-block) {\n    block-size: 100%;\n    block-size: -webkit-fill-available;\n    block-size: stretch;\n  }\n  .content-inline-size {\n    padding-inline: max(100% - (100% - var(--content-inline-size, 100%) * 0.5), 0px);\n  }\n  :host(.content-inline-size) {\n    padding-inline: max(100% - (100% - var(--content-inline-size, 100%) * 0.5), 0px);\n  }\n  .content-block-size {\n    padding-block: max(100% - (100% - var(--content-block-size, 100%) * 0.5), 0px);\n  }\n  :host(.content-block-size) {\n    padding-block: max(100% - (100% - var(--content-block-size, 100%) * 0.5), 0px);\n  }\n  .ux-anchor {\n    inset-inline-start: max(var(--client-x, 0px), 0px);\n    inset-block-start: max(var(--client-y, 0px), 0px);\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    writing-mode: horizontal-tb;\n    translate: 0% 0% 0%;\n    transform: none;\n  }\n  .ux-anchor {\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--client-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--client-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n  }\n  @supports (position-anchor: --example) {\n    .ux-anchor {\n      position-anchor: var(--anchor-group);\n      inset-inline-start: anchor(var(--anchor-group) start);\n      inset-block-start: anchor(var(--anchor-group) end);\n      inline-size: anchor-size(var(--anchor-group) self-inline);\n    }\n  }\n  :host(.ux-anchor) {\n    inset-inline-start: max(var(--client-x, 0px), 0px);\n    inset-block-start: max(var(--client-y, 0px), 0px);\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    writing-mode: horizontal-tb;\n    translate: 0% 0% 0%;\n    transform: none;\n  }\n  :host(.ux-anchor) {\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--client-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--client-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n  }\n  @supports (position-anchor: --example) {\n    :host(.ux-anchor) {\n      position-anchor: var(--anchor-group);\n      inset-inline-start: anchor(var(--anchor-group) start);\n      inset-block-start: anchor(var(--anchor-group) end);\n      inline-size: anchor-size(var(--anchor-group) self-inline);\n    }\n  }\n  .ux-anchor {\n    --shift-x: var(--client-x, 0px);\n    --shift-y: var(--client-y, 0px);\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    inset-inline-start: max(var(--shift-x), 0px);\n    inset-block-start: max(var(--shift-y), var(--status-bar-padding, 0px));\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    translate: 0% 0% 0%;\n    writing-mode: horizontal-tb;\n    transform: none;\n  }\n  :host(.ux-anchor) {\n    --shift-x: var(--client-x, 0px);\n    --shift-y: var(--client-y, 0px);\n    --translate-x: round(nearest, min(0px, calc(100cqi - (100% + var(--shift-x, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    --translate-y: round(nearest, min(0px, calc(100cqb - (100% + var(--shift-y, 0px)))), calc(1px / var(--pixel-ratio, 1))) !important;\n    inset-inline-start: max(var(--shift-x), 0px);\n    inset-block-start: max(var(--shift-y), var(--status-bar-padding, 0px));\n    inset-inline-end: auto;\n    inset-block-end: auto;\n    direction: ltr;\n    translate: 0% 0% 0%;\n    writing-mode: horizontal-tb;\n    transform: none;\n  }\n  .layered-wrap {\n    background-color: transparent;\n    display: inline grid;\n    inline-size: max-content;\n    block-size: max-content;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    z-index: calc(var(--z-index, 0) + 1);\n    overflow: visible;\n  }\n  .layered-wrap > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n  :host(.layered-wrap) {\n    background-color: transparent;\n    display: inline grid;\n    inline-size: max-content;\n    block-size: max-content;\n    grid-template-columns: minmax(0px, 1fr);\n    grid-template-rows: minmax(0px, 1fr);\n    z-index: calc(var(--z-index, 0) + 1);\n    overflow: visible;\n  }\n  :host(.layered-wrap) > * {\n    grid-column: 1/-1;\n    grid-row: 1/-1;\n  }\n}\n@layer components {\n  ui-icon {\n    --icon-color: currentColor;\n    --icon-size: 1rem;\n    --icon-padding: 0.125rem;\n    display: inline-grid;\n    place-content: center;\n    place-items: center;\n    color: var(--icon-color);\n    aspect-ratio: 1;\n  }\n  ui-icon {\n    vertical-align: middle;\n    margin-inline-end: 0.125rem;\n  }\n  ui-icon:last-child {\n    margin-inline-end: 0;\n  }\n}\n:host(ui-task), :host(ui-task) * {\n  box-sizing: border-box;\n  user-select: none;\n  touch-action: manipulation;\n  -webkit-user-drag: none;\n  -webkit-tap-highlight-color: transparent;\n  gap: 0px;\n  margin: 0px;\n  padding: 0px;\n  border: 0px none transparent;\n}\n:host(ui-task) {\n  user-select: none;\n  pointer-events: auto;\n  box-shadow: none;\n  filter: none;\n}\n:host(ui-task) > * {\n  pointer-events: none;\n}\n\n:host(ui-task:hover) {\n  --background-tone-shift: 0.1;\n  background-color: --c2-surface(var(--background-tone-shift, 0), var(--current));\n}\n\n:host(ui-task[data-focus]) {\n  border-block-end-color: --c2-on-surface(0, var(--current)) !important;\n}\n\n:host(ui-task:not([data-active])) {\n  opacity: 0.6;\n}"), X = class extends K {
	title = "Task";
	icon = "github";
	constructor() {
		super();
	}
	styles = () => Y;
	render = function() {
		return i`
            <div part="icon" class="task-icon c2-contrast c2-transparent"><ui-icon class="c2-contrast c2-transparent" part="icon" icon="${this.icon}"></ui-icon></div>
            <div part="title" class="task-title c2-contrast c2-transparent">${this.title}</div>
        `;
	};
};
//#endregion
//#region ../../projects/fl.ui/src/ui/navigation/appearance/Mobile.ts
_([a({ source: "attr" })], X.prototype, "title", void 0), _([a({ source: "attr" })], X.prototype, "icon", void 0), X = _([n("ui-task")], X), r("ui-taskbar[data-type=desktop] > ui-task[data-focus] {\n  background: --c2-surface(0, var(--current));\n  color: --c2-on-surface(0, var(--current));\n}\n\n:host(ui-taskbar[data-type=desktop]) ::slotted(ui-task[data-focus]) {\n  background: --c2-surface(0, var(--current));\n  color: --c2-on-surface(0, var(--current));\n}"), r("ui-taskbar[data-type=mobile] > ui-task[data-focus] {\n  background: --c2-surface(0, var(--current));\n  color: --c2-on-surface(0, var(--current));\n}\n\n:host(ui-taskbar[data-type=mobile]) ::slotted(ui-task[data-focus]) {\n  background: --c2-surface(0, var(--current));\n  color: --c2-on-surface(0, var(--current));\n}");
//#endregion
//#region ../../projects/fl.ui/src/index.ts
var xe = {
	loadStyles: !0,
	includeGlobalNativeControlStyles: !1,
	styleVariant: "veela-basic"
};
function Se() {
	return { ...xe };
}
(async () => {
	let e = Se();
	e.loadStyles !== !1 && (await ve({ includeGlobalNativeControls: e.includeGlobalNativeControlStyles === !0 }), await u(B));
})()?.catch?.(() => void 0);
//#endregion
//#region ../workcenter-view/src/index.ts
var Z = (() => {
	let t = 0, n = null;
	return {
		acquire() {
			let e = s(z);
			return e && (n = e), n && (t += 1), n;
		},
		release() {
			t <= 0 || !n || (--t, t === 0 && (e(n), n = null));
		}
	};
})(), Q = class extends G {
	id = "workcenter";
	name = "Work Center";
	icon = "lightning";
	options;
	shellContext;
	element = null;
	manager = null;
	deps;
	initializedFromOptions = !1;
	lastOutputText = "";
	pendingRenderAfterMount = !1;
	resultObserver = null;
	_sheet = null;
	autoFileFingerprints = /* @__PURE__ */ new Set();
	processedInboundMessageIds = /* @__PURE__ */ new Set();
	pendingMessages = [];
	leasedDocumentStyles = !1;
	lifecycle = {
		onMount: () => this.onMount(),
		onUnmount: () => this.onUnmount(),
		onShow: () => this.onShow(),
		onHide: () => this.onHide()
	};
	constructor(e = {}) {
		super(), this.options = e, this.shellContext = e.shellContext, this.deps = {
			state: {},
			history: [],
			getSpeechPrompt: async () => null,
			showMessage: (e) => this.showMessage(e),
			render: () => this.requestRender(),
			navigate: (e) => this.shellContext?.navigate(e),
			onFilesChanged: () => this.emitFilesChanged()
		};
	}
	isGlitterWeakRef(e) {
		return !!(e && typeof e.deref == "function");
	}
	leaseWorkCenterDocumentStyles() {
		if (this.leasedDocumentStyles) return this._sheet;
		let e = Z.acquire();
		return e && (this._sheet = e, this.leasedDocumentStyles = !0), e;
	}
	ensureWorkCenterStylesOnShadow() {
		let e = this.leaseWorkCenterDocumentStyles(), t = this.shadowRoot;
		!e || !t?.adoptedStyleSheets || t.adoptedStyleSheets.includes(e) || (t.adoptedStyleSheets = [...t.adoptedStyleSheets, e]);
	}
	onInitialize() {
		let e = super.onInitialize();
		return this.ensureWorkCenterStylesOnShadow(), e ?? this;
	}
	render = (e) => {
		let t = this.isGlitterWeakRef(e) ? void 0 : e;
		return t && (this.options = {
			...this.options,
			...t
		}, this.shellContext = t.shellContext || this.shellContext), this.manager ??= new R(this.deps), this.initializedFromOptions ||= (this.applyInitialOptions(), !0), this.leaseWorkCenterDocumentStyles(), this.element = this.manager.renderWorkCenterView(), this.syncPromptInputFromState(), this.setupProcessResultObserver(), this.emitFilesChanged(), this.element;
	};
	getToolbar() {
		return null;
	}
	normalizeInitialDataMessage(e) {
		if (!e) return null;
		if (typeof e == "string") return {
			type: "content-share",
			contentType: "text",
			data: {
				text: e,
				content: e
			}
		};
		if (e instanceof File) return {
			type: "content-share",
			contentType: e.type || "application/octet-stream",
			data: {
				file: e,
				filename: e.name
			}
		};
		if (Array.isArray(e)) {
			let t = e.filter((e) => e instanceof File);
			return t.length > 0 ? {
				type: "content-share",
				contentType: t[0]?.type || "application/octet-stream",
				data: {
					file: t[0],
					files: t,
					filename: t[0]?.name
				}
			} : null;
		}
		if (typeof e != "object") return null;
		let t = e, n = t.data && typeof t.data == "object" ? t.data : t, r = Array.isArray(n.files) ? n.files.filter((e) => e instanceof File) : void 0, i = n.file instanceof File ? n.file : r?.[0], a = typeof n.text == "string" ? n.text : void 0, o = typeof n.content == "string" ? n.content : void 0, s = typeof n.url == "string" ? n.url : void 0, c = typeof n.filename == "string" ? n.filename : i?.name, l = typeof n.source == "string" ? n.source : void 0;
		return !i && !r?.length && !a && !o && !s ? null : {
			type: typeof t.type == "string" ? t.type : "content-share",
			contentType: typeof t.contentType == "string" ? t.contentType : i?.type || "text",
			data: {
				file: i,
				files: r,
				text: a,
				content: o,
				url: s,
				filename: c,
				source: l
			}
		};
	}
	addFiles(e) {
		let t = this.manager?.getState();
		!t || e.length === 0 || this.appendUniqueAutoFiles(t.files, e) <= 0 || (this.requestRender(), this.emitFilesChanged());
	}
	setPrompt(e) {
		let t = this.manager?.getState();
		t && (t.currentPrompt = e, this.syncPromptInputFromState());
	}
	getFiles() {
		return [...this.manager?.getState().files || []];
	}
	canHandleMessage(e) {
		return [
			"content-attach",
			"content-process",
			"file-attach",
			"share-target-input",
			"share-target-result",
			"ai-result",
			"content-share"
		].includes(e);
	}
	async handleMessage(e) {
		let t = e;
		if (!this.manager) {
			this.pendingMessages.length >= 64 && this.pendingMessages.shift(), this.pendingMessages.push(t);
			return;
		}
		await this.handleMessageWithManager(t);
	}
	async invokeChannelApi(e, t) {
		let n;
		return typeof t == "object" && t && !Array.isArray(t) ? n = t : Array.isArray(t) && t.length > 0 && t.every((e) => e instanceof File) ? n = { files: t } : t instanceof File ? n = { file: t } : typeof t == "string" && (n = { text: t }), await this.handleMessage({
			type: e,
			data: n
		}), !0;
	}
	async handleMessageWithManager(e) {
		if (!this.manager) return;
		let t = typeof e.id == "string" ? e.id.trim() : "";
		if (t) {
			if (this.processedInboundMessageIds.has(t)) return;
			if (this.processedInboundMessageIds.add(t), this.processedInboundMessageIds.size > 256) {
				let e = this.processedInboundMessageIds.values().next();
				e.done || this.processedInboundMessageIds.delete(e.value);
			}
		}
		if (e.type === "share-target-input" || e.type === "share-target-result" || e.type === "ai-result") {
			await this.manager.handleExternalMessage(e), this.emitFilesChanged();
			return;
		}
		if (e.type === "content-share" || e.type === "content-attach" || e.type === "file-attach") {
			await this.manager.handleExternalMessage(e), this.emitFilesChanged();
			return;
		}
		e.data?.file && this.addFiles([e.data.file]), e.data?.files?.length && this.addFiles(e.data.files);
		let n = e.data?.text || e.data?.content || e.data?.url || "";
		n.trim() && this.setPrompt(n), e.type === "content-process" && (this.element?.querySelector("[data-action=\"execute\"]"))?.click();
	}
	async flushPendingMessages() {
		if (!this.manager || this.pendingMessages.length === 0) return;
		let e = this.pendingMessages.splice(0, this.pendingMessages.length);
		for (let t of e) {
			let e = t;
			await this.handleMessageWithManager(e);
		}
	}
	applyInitialOptions() {
		let e = this.manager?.getState();
		if (!e) return;
		Array.isArray(this.options.initialFiles) && this.options.initialFiles.length > 0 && this.appendUniqueAutoFiles(e.files, this.options.initialFiles), typeof this.options.initialPrompt == "string" && this.options.initialPrompt.trim() && (e.currentPrompt = this.options.initialPrompt);
		let t = this.normalizeInitialDataMessage(this.options.initialData);
		t && this.pendingMessages.unshift(t);
	}
	appendUniqueAutoFiles(e, t) {
		let n = 0;
		for (let r of t) {
			if (!(r instanceof File)) continue;
			let t = `${String(r.name || "").trim().toLowerCase()}::${Number(r.size || 0)}::${String(r.type || "").trim().toLowerCase()}`;
			this.autoFileFingerprints.has(t) || (this.autoFileFingerprints.add(t), e.push(r), n++);
		}
		return n;
	}
	syncPromptInputFromState() {
		let e = this.manager?.getState();
		if (!e || !this.element) return;
		let t = this.element.querySelector(".prompt-input");
		t && (t.value = e.currentPrompt || "");
	}
	setupProcessResultObserver() {
		if (this.resultObserver?.disconnect(), !this.element || !this.options.onProcessComplete) return;
		let e = this.element.querySelector("[data-output]");
		e && (this.resultObserver = new MutationObserver(() => {
			let t = e.querySelector(".result-content")?.textContent?.trim() || "";
			!t || t === this.lastOutputText || (this.lastOutputText = t, this.options.onProcessComplete?.(t));
		}), this.resultObserver.observe(e, {
			childList: !0,
			subtree: !0,
			characterData: !0
		}));
	}
	emitFilesChanged() {
		let e = this.manager?.getState().files || [];
		this.options.onFilesChange?.([...e]);
	}
	requestRender() {
		if (!this.manager || !this.element) return;
		let e = this.element, t = e.parentElement;
		if (!t) {
			this.pendingRenderAfterMount = !0;
			return;
		}
		this.pendingRenderAfterMount = !1;
		let n = this.manager.renderWorkCenterView(), r = e.getAttribute("data-view");
		r && n.setAttribute("data-view", r), n.hidden = e.hidden, e.hasAttribute("slot") && (n.slot = e.slot), t.replaceChild(n, e), this.element = n, this.syncPromptInputFromState(), this.setupProcessResultObserver();
	}
	showMessage(e) {
		this.shellContext?.showMessage(e);
	}
	onMount() {
		this.leaseWorkCenterDocumentStyles();
	}
	onUnmount() {
		if (this.resultObserver?.disconnect(), this.resultObserver = null, this.manager?.destroy(), this.manager = null, this.leasedDocumentStyles) {
			try {
				let e = this.shadowRoot, t = this._sheet;
				e?.adoptedStyleSheets?.length && t && e.adoptedStyleSheets.includes(t) && (e.adoptedStyleSheets = [...e.adoptedStyleSheets].filter((e) => e !== t));
			} catch {}
			Z.release(), this.leasedDocumentStyles = !1;
		}
		this._sheet = null;
	}
	onShow() {
		this.leaseWorkCenterDocumentStyles(), this.ensureWorkCenterStylesOnShadow(), this.pendingRenderAfterMount && (this.pendingRenderAfterMount = !1, this.requestRender()), requestAnimationFrame(() => {
			this.flushPendingMessages();
		});
	}
	onHide() {}
};
Q = _([n("cw-workcenter-view")], Q);
function $(e) {
	return new Q(e);
}
var Ce = $;
//#endregion
export { Q as WorkCenterView, $ as createView, $ as default, Ce as createWorkCenterView };
