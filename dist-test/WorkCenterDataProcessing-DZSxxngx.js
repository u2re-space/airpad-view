import { n as e } from "./src-DNKfArm8.js";
import { t } from "./jsox-D0iVxCRU.js";
import { t as n } from "./clipboard-DVOr4eiu.js";
import { t as r } from "./purify.es-LA6kif_Y.js";
import { t as i } from "./marked.esm-Bh9f89IO.js";
//#region ../../projects/subsystem/src/other/document/AIResponseParser.ts
var a = [
	/```json\s*\n?([\s\S]*?)\n?```/i,
	/```toon\s*\n?([\s\S]*?)\n?```/i,
	/```\s*\n?([\s\S]*?)\n?```/,
	/(\{[\s\S]*\})/,
	/(\[[\s\S]*\])/
], o = (e) => !e || typeof e != "string" ? "" : e.replace(/^\uFEFF/, "").replace(/[\u200B-\u200D\uFEFF]/g, "").replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim(), s = (e) => {
	let t = e;
	return t = t.replace(/,(\s*[}\]])/g, "$1"), t = t.replace(/:\s*"([^"]*)\n([^"]*)"/g, (e, t, n) => `: "${t}\\n${n}"`), t = t.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, ""), t;
}, c = (e) => {
	if (!e) return {
		ok: !1,
		error: "Empty input"
	};
	try {
		return {
			ok: !0,
			data: t.parse(e)
		};
	} catch {}
	try {
		return {
			ok: !0,
			data: JSON.parse(e)
		};
	} catch {}
	try {
		let n = s(e);
		return {
			ok: !0,
			data: t.parse(n)
		};
	} catch {}
	try {
		let n = e.match(/^[^{[]*([{\[][\s\S]*[}\]])[^}\]]*$/);
		if (n?.[1]) return {
			ok: !0,
			data: t.parse(n[1])
		};
	} catch {}
	return {
		ok: !1,
		error: "Failed to parse JSON with all strategies"
	};
}, l = (e) => {
	if (e == null) return {
		ok: !1,
		error: "Response is null or undefined"
	};
	if (typeof e != "string") return typeof e == "object" ? {
		ok: !0,
		data: e,
		source: "direct"
	} : {
		ok: !1,
		error: `Expected string, got ${typeof e}`
	};
	let t = o(e);
	if (!t) return {
		ok: !1,
		error: "Response is empty after cleaning",
		raw: e
	};
	let n = c(t);
	if (n.ok) return {
		ok: !0,
		data: n.data,
		raw: e,
		source: "direct"
	};
	for (let n of a) {
		let r = t.match(n);
		if (r?.[1]) {
			let t = c(o(r[1]));
			if (t.ok) return {
				ok: !0,
				data: t.data,
				raw: e,
				source: "markdown_block"
			};
		}
	}
	let r = t.match(/(\{[\s\S]+\}|\[[\s\S]+\])/);
	if (r?.[1]) {
		let t = c(s(r[1]));
		if (t.ok) return {
			ok: !0,
			data: t.data,
			raw: e,
			source: "recovered"
		};
	}
	return {
		ok: !1,
		error: "Could not extract valid JSON from response",
		raw: e
	};
}, u = /* @__PURE__ */ e({ WorkCenterDataProcessing: () => d }), d = class {
	formatResult(e, t, n) {
		if (t === "auto") {
			let t = e?.rawData || e, n = l(t)?.data || t;
			if (typeof n == "string") try {
				let e = JSON.parse(n);
				e && typeof e == "object" && (n = e);
			} catch {}
			if (n && typeof n == "object" && (n.recognized_data || n.verbose_data || n.keywords_and_tags || n.suggested_type)) {
				let e = [];
				if (n.recognized_data) {
					let t = Array.isArray(n.recognized_data) ? n.recognized_data : [n.recognized_data];
					e.push(...t.map((e) => String(e)));
				}
				if (n.verbose_data && e.push(String(n.verbose_data)), n.keywords_and_tags && Array.isArray(n.keywords_and_tags) && n.keywords_and_tags.length > 0 && e.push(`\n**Keywords:** ${n.keywords_and_tags.join(", ")}`), n.confidence || n.suggested_type) {
					let t = [];
					n.confidence && t.push(`Confidence: ${Math.round(n.confidence * 100)}%`), n.suggested_type && t.push(`Type: ${n.suggested_type}`), t.length > 0 && e.push(`\n*${t.join(" • ")}*`);
				}
				if (e.length > 0) return `<div class="markdown-result structured-content">${e.join("\n\n")}</div>`;
			}
			return n && typeof n == "object" ? this.formatResult(e, "json") : this.formatResult(e, "markdown");
		}
		if (t === "json") {
			let t = e?.rawData || e, n = l(t)?.data || t;
			if (typeof n == "string") try {
				let e = JSON.parse(n);
				e && typeof e == "object" && (n = e);
			} catch {}
			return this.renderAsJSON(n);
		}
		if (t === "markdown") {
			let t = e?.rawData || e, n = l(t)?.data || t;
			if (typeof n == "string") try {
				let e = JSON.parse(n);
				e && typeof e == "object" && (n = e);
			} catch {}
			if (n && typeof n == "object" && (n.recognized_data || n.verbose_data || n.keywords_and_tags || n.suggested_type)) {
				let e = [];
				if (n.recognized_data) {
					let t = Array.isArray(n.recognized_data) ? n.recognized_data : [n.recognized_data];
					e.push(...t.map((e) => String(e)));
				}
				if (n.verbose_data && e.push(String(n.verbose_data)), n.keywords_and_tags && Array.isArray(n.keywords_and_tags) && n.keywords_and_tags.length > 0 && e.push(`\n**Keywords:** ${n.keywords_and_tags.join(", ")}`), n.confidence || n.suggested_type) {
					let t = [];
					n.confidence && t.push(`Confidence: ${Math.round(n.confidence * 100)}%`), n.suggested_type && t.push(`Type: ${n.suggested_type}`), t.length > 0 && e.push(`\n*${t.join(" • ")}*`);
				}
				if (e.length > 0) return `<div class="markdown-result structured-content">${e.join("\n\n")}</div>`;
			}
		}
		let r = this.normalizeResultData(e);
		if (!r) return "<div class=\"no-result\">No result</div>";
		switch (t) {
			case "code": return this.renderAsCode(r);
			case "raw": return this.renderAsRaw(e?.rawData || e);
			case "html": return this.renderAsHTML(r);
			case "text": return this.renderAsText(r);
			default: return this.renderAsMarkdown(r);
		}
	}
	normalizeResultData(e) {
		if (!e) return null;
		let t = l(e)?.data || e;
		if (t && typeof t == "object" && (t.data !== void 0 && (t = t.data), typeof t == "string")) try {
			let e = JSON.parse(t);
			e && typeof e == "object" && (t = e);
		} catch {}
		return (typeof t != "object" || !t) && (t = { recognized_data: [String(t)] }), t;
	}
	renderAsJSON(e) {
		try {
			let t = (e, r = 0) => {
				let i = "  ".repeat(r);
				if (e === null) return "null";
				if (typeof e == "boolean") return e ? "true" : "false";
				if (typeof e == "number") return String(e);
				if (typeof e == "string") {
					if (e.includes("<math") || e.includes("class=\"katex\"") || e.includes("<span>")) {
						let t = `__HTML_CONTENT_${Math.random().toString(36).substr(2, 9)}__`;
						return n[t] = e, `"${t}"`;
					}
					return JSON.stringify(e);
				}
				if (Array.isArray(e)) {
					if (e.length === 0) return "[]";
					let n = e.map((e) => t(e, r + 1));
					return `[\n${"  ".repeat(r + 1)}${n.join(`,\n${"  ".repeat(r + 1)}`)}\n${i}]`;
				}
				if (typeof e == "object") {
					let n = Object.keys(e);
					if (n.length === 0) return "{}";
					let a = n.map((n) => {
						let i = t(e[n], r + 1);
						return `${JSON.stringify(n)}: ${i}`;
					});
					return `{\n${"  ".repeat(r + 1)}${a.join(`,\n${"  ".repeat(r + 1)}`)}\n${i}}`;
				}
				return String(e);
			}, n = {}, r = `<div class="json-result"><pre>${t(e)}</pre></div>`;
			for (let [e, t] of Object.entries(n)) {
				let n = document.createElement("div");
				n.innerHTML = t;
				let i = n.innerHTML;
				r = r.replace(`"${e}"`, `<span class="json-html-content">${i}</span>`);
			}
			return r;
		} catch (e) {
			return `<div class="error">Failed to format JSON: ${e}</div>`;
		}
	}
	renderAsHTML(e) {
		let t = this.extractContentItems(e).map((e) => this.renderContentItem(e, "html")).join("");
		return t ? `<div class="html-result">${t}</div>` : `<div class="html-result">${this.renderMathAsHTML(this.extractTextContent(e))}</div>`;
	}
	renderAsText(e) {
		let t = this.extractContentItems(e).map((e) => this.renderContentItem(e, "text")).join("\n\n");
		return t.trim() ? `<pre class="text-result">${this.escapeHtml(t)}</pre>` : `<pre class="text-result">${this.escapeHtml(this.extractTextContent(e))}</pre>`;
	}
	renderAsRaw(e) {
		let t = "";
		if (typeof e == "string") t = e;
		else try {
			t = JSON.stringify(e, null, 2);
		} catch {
			t = String(e ?? "");
		}
		return `<pre class="raw-result">${this.escapeHtml(t)}</pre>`;
	}
	renderAsCode(e) {
		let t = this.extractContentItems(e).join("\n\n").trim() || this.extractTextContent(e), n = this.extractLikelyCode(t), r = this.detectCodeLanguage(t);
		return `<pre class="code-result"><code data-lang="${this.escapeHtml(r)}">${this.escapeHtml(n)}</code></pre>`;
	}
	renderAsMarkdown(e) {
		let t = this.extractContentItems(e).map((e) => this.renderContentItem(e, "markdown")).join("\n\n");
		if (!t.trim()) try {
			let t = this.extractTextContent(e), n = i.parse(t);
			return r.sanitize(n);
		} catch (e) {
			return console.warn("Markdown parsing failed, falling back to simple rendering:", e), this.renderMathAsHTML(t);
		}
		try {
			let e = i.parse(t);
			return r.sanitize(e);
		} catch (e) {
			return console.warn("Markdown parsing failed, falling back to simple rendering:", e), this.renderMathAsHTML(t);
		}
	}
	extractContentItems(e) {
		let t = [];
		if (e.recognized_data) {
			let n = Array.isArray(e.recognized_data) ? e.recognized_data : [e.recognized_data];
			t.push(...n.map((e) => String(e)));
		}
		if (e.verbose_data && t.push(String(e.verbose_data)), t.length === 0) {
			for (let n of [
				"content",
				"text",
				"message",
				"result",
				"response",
				"description"
			]) if (e[n]) {
				let r = Array.isArray(e[n]) ? e[n] : [e[n]];
				t.push(...r.map((e) => String(e)));
				break;
			}
		}
		if (t.length === 0) {
			let n = this.extractTextContent(e);
			n && t.push(n);
		}
		return t;
	}
	renderContentItem(e, t) {
		switch (t) {
			case "html": return `<div class="recognized-item">${this.renderMathAsHTML(e)}</div>`;
			case "text": return this.stripMarkdown(e);
			case "markdown": return e;
			default: return e;
		}
	}
	renderMathAsHTML(e) {
		let t = e;
		return t = t.replace(/\$\$([^$]+)\$\$/g, (e, t) => {
			try {
				return i.parse(`$$${t}$$`).replace(/<p>|<\/p>/g, "").trim();
			} catch {
				return `<span class="math-display">${this.escapeHtml(`$$${t}$$`)}</span>`;
			}
		}), t = t.replace(/\$([^$]+)\$/g, (e, t) => {
			try {
				return i.parse(`$${t}$`).replace(/<p>|<\/p>/g, "").trim();
			} catch {
				return `<span class="math-inline">${this.escapeHtml(`$${t}$`)}</span>`;
			}
		}), t = t.replace(/\n/g, "<br>"), t;
	}
	stripMarkdown(e) {
		return e.replace(/#{1,6}\s*/g, "").replace(/\*\*(.*?)\*\*/g, "$1").replace(/\*(.*?)\*/g, "$1").replace(/`(.*?)`/g, "$1").replace(/^\s*[-*+]\s+/gm, "").replace(/^\s*\d+\.\s+/gm, "").replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1").replace(/!\[([^\]]+)\]\([^\)]+\)/g, "$1").trim();
	}
	extractLikelyCode(e) {
		let t = e.match(/```[\t ]*([a-zA-Z0-9_-]+)?\n([\s\S]*?)```/);
		return t?.[2] ? t[2].trim() : e;
	}
	detectCodeLanguage(e) {
		let t = e.match(/```[\t ]*([a-zA-Z0-9_-]+)?\n/)?.[1];
		return t ? t.toLowerCase() : /\b(interface|type|const|let|=>|import\s+type)\b/.test(e) ? "typescript" : /\b(function|const|let|var|import|export)\b/.test(e) ? "javascript" : /\b(def |import |from |class )/.test(e) ? "python" : /\b<[^>]+>/.test(e) ? "html" : "text";
	}
	extractTextContent(e) {
		if (e == null) return "";
		if (typeof e == "string") return e;
		if (typeof e == "number" || typeof e == "boolean") return String(e);
		if (Array.isArray(e)) return e.map((e) => this.extractTextContent(e)).join("\n");
		if (typeof e == "object") {
			for (let t of [
				"verbose_data",
				"recognized_data",
				"content",
				"text",
				"message",
				"result",
				"response",
				"data"
			]) if (e[t] != null) {
				let n = this.extractTextContent(e[t]);
				if (n) return n;
			}
			try {
				return JSON.stringify(e, null, 2);
			} catch {
				return "[Complex Object]";
			}
		}
		return String(e);
	}
	escapeHtml(e) {
		let t = document.createElement("div");
		return t.textContent = e, t.innerHTML;
	}
	copyResultsToClipboard(e, t) {
		let r = "";
		if (t === "auto" && e) {
			let t = e?.rawData || e, n = l(t)?.data || t;
			if (typeof n == "string") try {
				let e = JSON.parse(n);
				e && typeof e == "object" && (n = e);
			} catch {}
			if (n && typeof n == "object" && (n.recognized_data || n.verbose_data)) {
				let e = [];
				if (n.recognized_data) {
					let t = Array.isArray(n.recognized_data) ? n.recognized_data : [n.recognized_data];
					e.push(...t.map((e) => String(e)));
				}
				n.verbose_data && e.push(String(n.verbose_data)), r = e.join("\n\n");
			} else {
				let t = this.normalizeResultData(e);
				r = this.extractContentItems(t).join("\n\n");
			}
		} else if ((t === "markdown" || t === "html") && e) {
			let t = this.normalizeResultData(e);
			r = this.extractContentItems(t).join("\n\n");
		} else if (t === "json" && e) {
			let t = this.normalizeResultData(e);
			r = this.extractContentItems(t).join("\n\n");
		} else if ((t === "raw" || t === "code") && e) {
			let t = e?.rawData || e;
			r = typeof t == "string" ? t : JSON.stringify(t, null, 2);
		} else r = e?.textContent || "";
		return n(r).then((e) => {
			if (!e.ok) throw Error(e.error || "Clipboard write failed");
		});
	}
};
//#endregion
export { u as n, d as t };
