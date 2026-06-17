import { ht as e, i as t, mt as n, o as r } from "./src-C-qx_Mx3.js";
import { f as i, r as a, u as o } from "./UniformInterop-DxjJGqmH.js";
import { p as s } from "./Settings-BAxgoWK0.js";
import { n as c, t as l } from "./toast-B6k6nwY1.js";
import { c as u, l as d, t as f } from "./messaging-DTqWl-L-.js";
import { t as p } from "./log-sanitizer--qMKW3ZD.js";
import { n as m, r as ee, t as h } from "./ShareTargetGateway-CebQawfP.js";
//#region ../../projects/subsystem/src/routing/pwa/pwa-copy.ts
var g = !1, _ = [], v = async (e, t = "high") => {
	await d.sendMessage({
		type: "share-target-result",
		destination: "workcenter",
		data: e,
		metadata: { priority: t }
	});
}, te = (e) => {
	if (typeof e != "string") return null;
	try {
		return JSON.parse(e);
	} catch {
		return null;
	}
}, y = (e) => {
	if (typeof e == "string") {
		let t = te(e);
		if (t && typeof t == "object") {
			let n = t;
			if (n.recognized_data != null) {
				let e = n.recognized_data;
				return Array.isArray(e) ? e.map((e) => typeof e == "string" ? e : JSON.stringify(e)).join("\n") : typeof e == "string" ? e : JSON.stringify(e);
			}
			if (typeof n.verbose_data == "string" && n.verbose_data.trim()) return n.verbose_data;
			if (typeof n.content == "string" && n.content.trim()) return n.content;
			let r = n.choices;
			if (Array.isArray(r) && r.length > 0) {
				let e = r[0], t = e?.message?.content;
				if (typeof t == "string" && t.trim()) return t;
				let n = e?.text;
				if (typeof n == "string" && n.trim()) return n;
			}
			let i = n.output_text;
			if (typeof i == "string" && i.trim()) return i;
			let a = n.output;
			if (Array.isArray(a) && a.length > 0) {
				let e = a[0]?.content?.[0]?.text;
				if (typeof e == "string" && e.trim()) return e;
			}
			return e;
		}
		return e;
	}
	if (e && typeof e == "object") {
		let t = e;
		if (t.recognized_data != null) {
			let e = t.recognized_data;
			return Array.isArray(e) ? e.map((e) => typeof e == "string" ? e : JSON.stringify(e)).join("\n") : typeof e == "string" ? e : JSON.stringify(e);
		}
		if (typeof t.verbose_data == "string" && t.verbose_data.trim()) return t.verbose_data;
		if (typeof t.content == "string" && t.content.trim()) return t.content;
		let n = t.choices;
		if (Array.isArray(n) && n.length > 0) {
			let e = n[0], t = e?.message?.content;
			if (typeof t == "string" && t.trim()) return t;
			let r = e?.text;
			if (typeof r == "string" && r.trim()) return r;
		}
		let r = t.output_text;
		if (typeof r == "string" && r.trim()) return r;
		let i = t.output;
		if (Array.isArray(i) && i.length > 0) {
			let e = i[0]?.content?.[0]?.text;
			if (typeof e == "string" && e.trim()) return e;
		}
	}
	return e;
}, b = () => {
	try {
		if (typeof window > "u") return !1;
		let e = String(window.location?.href ?? "");
		if (e.startsWith("chrome-extension://") || e.startsWith("moz-extension://") || e.startsWith("edge-extension://")) return !1;
		let t = window.location?.protocol ?? "";
		return t === "http:" || t === "https:";
	} catch {
		return !1;
	}
}, ne = async () => {
	try {
		if (!b()) return;
		if (!navigator.serviceWorker) {
			console.log("[PWA-Copy] Service workers not supported");
			return;
		}
		if (!navigator.serviceWorker.controller) {
			if (console.log("[PWA-Copy] Waiting for service worker to control page..."), !(await navigator.serviceWorker.ready).active) {
				console.log("[PWA-Copy] Service worker not active yet");
				return;
			}
			await new Promise((e) => setTimeout(e, 100));
		}
		console.log("[PWA-Copy] Checking for pending clipboard operations...");
		let e = await fetch("/clipboard/pending"), t = String(e.headers.get("content-type") || "").toLowerCase();
		if (!e.ok || !t.includes("application/json")) {
			console.log("[PWA-Copy] Pending clipboard endpoint is unavailable in this context, skipping");
			return;
		}
		let r = await e.json();
		if (r.operations && Array.isArray(r.operations) && r.operations.length > 0) {
			console.log("[PWA-Copy] Found", r.operations.length, "pending clipboard operations");
			for (let e of r.operations) if (e.type === "ai-result" && e.data) {
				console.log("[PWA-Copy] Processing pending AI result:", e.id);
				let t = y(e.data);
				await n(t, { showFeedback: !0 }), await v({
					content: typeof t == "string" ? t : JSON.stringify(t),
					rawData: e.data,
					timestamp: Date.now(),
					source: "share-target",
					action: "AI Processing (Pending)",
					metadata: {
						operationId: e.id,
						fromPendingQueue: !0
					}
				}), console.log("[PWA-Copy] Delivered pending share target result to work center");
				try {
					await fetch(`/clipboard/remove/${e.id}`, { method: "DELETE" });
				} catch (e) {
					console.warn("[PWA-Copy] Failed to remove processed operation:", e);
				}
			}
		}
	} catch (e) {
		console.warn("[PWA-Copy] Failed to check pending operations:", e);
	}
}, re = () => {
	if (!b()) return () => void 0;
	if (g) return () => x();
	if (g = !0, console.log("[PWA-Copy] Initializing clipboard and toast receivers..."), ne().catch(console.warn), _.push(e()), _.push(l()), typeof BroadcastChannel < "u") {
		let e = new BroadcastChannel("rs-clipboard"), t = async (e) => {
			let { type: t, data: r, operations: i } = e.data || {};
			if (console.log("[PWA-Copy] Clipboard channel message:", t, p(r)), t === "pending-operations" && i && Array.isArray(i)) {
				console.log("[PWA-Copy] Received", i.length, "pending operations via broadcast");
				for (let e of i) if (e.type === "ai-result" && e.data) {
					console.log("[PWA-Copy] Processing broadcasted AI result:", e.id);
					let t = typeof e.data == "string" ? e.data : JSON.stringify(e.data);
					await n(t, { showFeedback: !0 }), await v({
						content: t,
						rawData: e.data,
						timestamp: Date.now(),
						source: "share-target",
						action: "AI Processing (Broadcasted)",
						metadata: {
							operationId: e.id,
							fromBroadcast: !0
						}
					}), console.log("[PWA-Copy] Delivered broadcasted share target result to work center");
					try {
						await fetch(`/clipboard/remove/${e.id}`, { method: "DELETE" });
					} catch (e) {
						console.warn("[PWA-Copy] Failed to remove processed operation:", e);
					}
				}
			}
		};
		e.addEventListener("message", t), _.push(() => {
			e.removeEventListener("message", t), e.close();
		});
		let r = new BroadcastChannel("rs-share-target"), i = async (e) => {
			let { type: t, data: r } = e.data || {};
			if (console.log("[PWA-Copy] Share channel message:", t, p(r)), t === "copy-shared" && r && await n(r, { showFeedback: !0 }), t === "share-received" && r && console.log("[PWA-Copy] Share received from SW:", p(r)), t === "ai-result" && r) if (console.log("[PWA-Copy] AI result from SW:", p(r)), r.success && r.data) {
				let e = y(r.data);
				await n(e, { showFeedback: !0 }), await d.sendMessage({
					type: "share-target-result",
					destination: "workcenter",
					data: {
						content: typeof e == "string" ? e : JSON.stringify(e),
						rawData: r.data,
						timestamp: Date.now(),
						source: "share-target",
						action: "AI Processing",
						metadata: {
							fromServiceWorker: !0,
							shareTargetId: r.id || "unknown"
						}
					},
					metadata: { priority: "high" }
				});
			} else c({
				message: r.error || "Processing failed",
				kind: "error"
			});
			t === "share-received" && r && (console.log("[PWA-Copy] Share received, broadcasting input to work center:", p(r)), await d.sendMessage({
				type: "share-target-input",
				destination: "workcenter",
				data: {
					...r,
					timestamp: Date.now(),
					metadata: {
						fromServiceWorker: !0,
						...r.metadata
					}
				},
				metadata: { priority: "high" }
			}));
		};
		r.addEventListener("message", i), _.push(() => {
			r.removeEventListener("message", i), r.close();
		});
		let a = new BroadcastChannel("rs-sw"), o = async (e) => {
			let { type: t, results: r } = e.data || {};
			if (console.log("[PWA-Copy] SW channel message:", t, p(r)), t === "commit-to-clipboard" && r && Array.isArray(r)) {
				for (let e of r) if (e?.status === "queued" && e?.data) {
					console.log("[PWA-Copy] Copying result data:", p(e.data));
					let t = y(e.data);
					await n(t, { showFeedback: !0 }), await d.sendMessage({
						type: "share-target-result",
						destination: "workcenter",
						data: {
							content: typeof t == "string" ? t : JSON.stringify(t),
							rawData: e.data,
							timestamp: Date.now(),
							source: "share-target",
							action: "Legacy AI Processing",
							metadata: {
								legacyCommit: !0,
								resultStatus: e.status
							}
						},
						metadata: { priority: "normal" }
					});
					break;
				}
			}
		};
		a.addEventListener("message", o), _.push(() => {
			a.removeEventListener("message", o), a.close();
		});
	}
	return console.log("[PWA-Copy] Receivers initialized"), () => x();
}, x = () => {
	_.forEach((e) => e?.()), _ = [], g = !1;
}, ie = (e) => {
	let t = (e || "").toLowerCase();
	return t.includes("javascript") || t.includes("ecmascript") || t.includes("module") || t.includes("text/javascript");
}, ae = (e) => {
	let t = (e || "").toLowerCase();
	return t.includes("text/html") || t.includes("application/xhtml");
}, oe = (e) => {
	let t = e.trimStart().slice(0, 400);
	return t ? t.startsWith("<!") || /^<\s*html[\s>]/i.test(t) || t.startsWith("<!--") : !1;
}, se = 8e3, ce = async (e) => {
	let t = new AbortController(), n = setTimeout(() => t.abort(), se);
	try {
		let n = await fetch(e, {
			method: "GET",
			cache: "no-store",
			credentials: "same-origin",
			signal: t.signal
		}), r = n.headers.get("content-type"), i = n.status;
		if (!n.ok || ae(r)) return {
			ok: !1,
			url: e,
			contentType: r,
			status: i
		};
		if (ie(r)) return {
			ok: !0,
			url: e,
			contentType: r,
			status: i
		};
		try {
			let t = (await n.clone().text()).trimStart().slice(0, 2048);
			if (oe(t)) return {
				ok: !1,
				url: e,
				contentType: r,
				status: i
			};
			if (/^\s*(?:\/\/|\/\*|import\s|export\s|self\.|'use strict'|"use strict")/m.test(t) || /\b(?:addEventListener|serviceWorker|workbox|skipWaiting|caches\.|navigator\.serviceWorker)\b/.test(t)) return {
				ok: !0,
				url: e,
				contentType: r,
				status: i
			};
		} catch {}
		return {
			ok: !1,
			url: e,
			contentType: r,
			status: i
		};
	} catch {
		return {
			ok: !1,
			url: e
		};
	} finally {
		clearTimeout(n);
	}
}, S = () => "/", le = () => {
	try {
		let e = String(globalThis?.location?.pathname || "").match(/^(\/apps\/cw)(?:\/|$)/);
		if (e?.[1]) {
			let t = e[1];
			return t.endsWith("/") ? t : `${t}/`;
		}
	} catch {}
	return null;
}, ue = () => {
	let e = S(), t = le(), n = [], r = (e) => {
		let t = e === "" ? "/" : e.endsWith("/") ? e : `${e}/`;
		n.includes(t) || n.push(t);
	};
	return r(e), t && t !== e && r(t), n;
}, de = (e) => {
	try {
		let t = typeof globalThis < "u" && globalThis.location?.origin ? String(globalThis.location.origin) : "https://invalid.invalid", n = new URL(e, `${t}/`).pathname, r = n.lastIndexOf("/");
		return r <= 0 ? "/" : n.slice(0, r + 1);
	} catch {
		return "/";
	}
}, fe = () => {
	let e = !!{
		BASE_URL: "/",
		DEV: !1,
		MODE: "test",
		PROD: !0,
		SSR: !1
	}?.DEV, t = ue(), n = [], r = [];
	for (let e of t) n.push(`${e}dev-sw.js?dev-sw`), e !== "/" && (n.push(`${e}sw.js`), r.push(`${e}sw.js`));
	let i = ["/dev-sw.js?dev-sw", "/sw.js"], a = ["/sw.js", "/apps/cw/sw.js"];
	try {
		let e = String(globalThis?.location?.pathname || "");
		(e === "/apps/cw" || e.startsWith("/apps/cw/")) && (a = ["/apps/cw/sw.js", "/sw.js"]);
	} catch {}
	let o = e ? [
		...n,
		...i,
		...r
	] : [...new Set([...r, ...a])];
	return [...new Set(o)];
}, pe = async () => {
	if (typeof window > "u" || !("serviceWorker" in navigator)) return null;
	let e = (globalThis?.location?.protocol || "").toLowerCase();
	if (e === "chrome-extension:" || e === "file:" || e === "about:" || e !== "https:" && e !== "http:") return null;
	let t = async (e) => {
		if (e) try {
			return await navigator.serviceWorker.getRegistration(e) ?? void 0;
		} catch {
			return;
		}
	};
	try {
		let e = await t(typeof globalThis < "u" ? globalThis.location?.href : "");
		if (!e?.active && !e?.waiting && !e?.installing) {
			let n = typeof globalThis < "u" && globalThis.location?.origin ? String(globalThis.location.origin) : "", r = S();
			n && r !== "/" && (e = await t(new URL(r, n).href));
		}
		if (!e?.active && !e?.waiting && !e?.installing) {
			let n = typeof globalThis < "u" && globalThis.location?.origin ? String(globalThis.location.origin) : "";
			n && (e = await t(new URL("/", n).href));
		}
		if (e?.active || e?.waiting || e?.installing) return e;
	} catch {}
	let n = fe(), r = async (e) => {
		let t = de(e), n = e.includes("/dev-sw.js?dev-sw");
		try {
			return await navigator.serviceWorker.register(e, {
				scope: t,
				updateViaCache: "none"
			});
		} catch {
			if (n) try {
				return await navigator.serviceWorker.register(e, {
					scope: t,
					type: "module",
					updateViaCache: "none"
				});
			} catch {
				return null;
			}
			return null;
		}
	};
	for (let e of n) {
		if (!(await ce(e)).ok) continue;
		let t = await r(e);
		if (t) return t;
	}
	return null;
}, C = (e) => {
	let t = String(e?.name || "").toLowerCase(), n = String(e?.type || "").toLowerCase();
	if (n.startsWith("image/")) return "image";
	let r = /\.(?:md|markdown|mdown|mkd|mkdn|mdtxt|mdtext)(?:$|[?#])/i;
	return n === "text/markdown" || r.test(t) ? "markdown" : n.startsWith("text/") || n === "application/json" || n === "application/xml" || n === "application/xhtml+xml" || n === "application/javascript" || n === "application/typescript" || n === "application/x-typescript" ? "text" : /\.(?:txt|text|html|htm|css|scss|sass|less|json|csv|xml|yaml|yml|log|ini|env|toml|graphql|svg|tsx?|jsx?|mts|cts|cjs|mjs|vue|svelte|rst)(?:$|[?#])/i.test(t) ? r.test(t) ? "markdown" : "text" : (!n || n === "application/octet-stream") && r.test(t) ? "markdown" : /\.(?:png|jpe?g|gif|webp|bmp)(?:$|[?#])/i.test(t) ? "image" : "file";
}, w = (e) => {
	let t = e.trim().replace(/\\/g, "/"), n = Math.max(t.lastIndexOf("/"), t.lastIndexOf("\\")), r = ((n >= 0 ? t.slice(n + 1) : t) || "").trim();
	if (!r) return "file";
	try {
		return C(new File([], r, { type: "application/octet-stream" }));
	} catch {
		return "file";
	}
}, me = (e) => {
	let t = Array.isArray(e.files) ? e.files : [], n = String(e.text || "").trim(), r = String(e.url || "").trim(), i = e.metadata && typeof e.metadata == "object" && !Array.isArray(e.metadata) ? e.metadata : {}, a = Math.max(Number(i.fileCount) || 0, Number(e.fileCount) || 0), o = t.length === 0 && a > 0;
	if (e.hint?.contentType && !o) return String(e.hint.contentType);
	if (t.length > 0) {
		let e = C(t[0]);
		return e === "image" ? "image" : e === "markdown" ? "markdown" : e === "text" ? "text" : "file";
	}
	let s = typeof e.hint?.filename == "string" && e.hint.filename.trim() || typeof e.title == "string" && e.title.trim() || "";
	if (!n && s && (!r || o)) {
		let e = w(s);
		if (e === "markdown") return "markdown";
		if (e === "text") return "text";
		if (e === "image") return "image";
		if (o && e === "file") return "file";
	}
	if (r) {
		let e = r.split("#")[0].split("?")[0].toLowerCase();
		return /\.(md|markdown|mdown|mkd|mkdn|mdtxt|mdtext)$/.test(e) ? "markdown" : "url";
	}
	return n ? "text" : "other";
}, he = (e, t) => e.hint?.action === "save" ? "explorer" : t === "markdown" || t === "text" ? "viewer" : e.hint?.destination ? e.hint.destination : e.hint?.action === "process" || e.hint?.action === "attach" ? "workcenter" : e.hint?.action === "open" ? "viewer" : "workcenter", ge = (e, t) => e === "viewer" ? t?.action === "open" ? "content-load" : "content-view" : e === "explorer" ? "file-save" : e === "workcenter" ? "content-attach" : e === "editor" ? "content-load" : "content-share", _e = (e) => {
	let t = me(e), n = he(e, t), r = ge(n, e.hint), i = Array.isArray(e.files) ? e.files : [], a = {
		title: e.title,
		text: e.text,
		content: e.text,
		url: e.url,
		files: i,
		filename: e.hint?.filename || i[0]?.name,
		source: e.source,
		route: e.route,
		hint: e.hint
	}, s = {
		destination: o(n),
		routePath: `/${n}`,
		messageType: r,
		contentType: t,
		data: a,
		metadata: {
			source: e.source,
			route: e.route,
			pending: !!e.pending,
			hint: e.hint,
			...e.metadata || {}
		}
	};
	return console.log("[ViewTransfer] Resolved transfer:", p({
		source: e.source,
		route: e.route,
		pending: e.pending,
		hint: e.hint,
		contentType: t,
		destination: n,
		messageType: r,
		fileCount: i.length
	})), s;
}, ve = (e, t) => {
	if (!(typeof BroadcastChannel > "u")) try {
		let n = new BroadcastChannel(i(e.destination));
		n.postMessage({
			type: "view-transfer",
			message: t
		}), n.close();
	} catch (e) {
		console.warn("[ViewTransfer] View-channel mirror failed:", e);
	}
}, ye = async (e) => {
	let t = _e(e);
	Array.isArray(e.files) && e.files;
	let n = t.contentType === "image" || t.contentType === "file", r = {
		id: crypto.randomUUID(),
		type: t.messageType,
		destination: o(t.destination),
		contentType: t.contentType,
		data: t.data,
		metadata: t.metadata,
		source: `view-transfer:${e.source}`
	};
	console.log("[ViewTransfer] Dispatching message:", p({
		destination: r.destination,
		type: r.type,
		contentType: r.contentType,
		metadata: r.metadata
	})), ve(t, r);
	let i = !1;
	if (e.pending && !n) try {
		let e = {
			...r,
			data: {
				...r.data || {},
				files: []
			}
		};
		f(t.destination, e), i = !0;
	} catch (e) {
		console.warn("[ViewTransfer] Failed to enqueue pending message:", e);
	}
	let a = await u({
		...r,
		purpose: ["deliver", "mail"],
		protocol: "window",
		op: e.hint?.action === "open" ? "invoke" : "deliver",
		srcChannel: r.source,
		dstChannel: o(t.destination)
	}), s = a || i;
	return console.log("[ViewTransfer] Message delivery status:", {
		deliveredNow: a,
		queuedAsPending: i,
		hasBinaryPayload: n,
		delivered: s,
		destination: t.destination,
		routePath: t.routePath
	}), {
		delivered: s,
		resolved: t
	};
}, T = 100, be = 2, E = [], xe = (e) => {
	for (; E.length && e - E[0] > T;) E.shift();
}, Se = async () => {
	let e = () => new Promise((e) => {
		globalThis.queueMicrotask(e);
	});
	for (;;) {
		let t = Date.now();
		if (xe(t), E.length < be) {
			E.push(Date.now());
			return;
		}
		let n = T - (t - E[0]) + 1;
		await new Promise((e) => {
			globalThis.setTimeout(e, Math.max(0, n));
		}), await e();
	}
}, Ce = {
	maxStringLength: 180,
	maxArrayLength: 8,
	maxObjectKeys: 20,
	maxDepth: 3
}, D = (e) => typeof File < "u" && e instanceof File, we = (e) => typeof Blob < "u" && e instanceof Blob, O = (e, n) => {
	if (!e) return e;
	let i = r(e);
	return i ? `[data-url ${i.mimeType || "application/octet-stream"}, length=${e.length}]` : e.length > n && t(e) ? `[base64-like string, length=${e.length}]` : e.length > n ? `${e.slice(0, n)}... [truncated ${e.length - n} chars]` : e;
}, k = (e, t) => {
	let n = Array.from(e.entries()), r = [...new Set(n.map(([e]) => e))], i = {};
	for (let n of r.slice(0, t.maxObjectKeys)) i[n] = e.getAll(n).slice(0, t.maxArrayLength).map((e) => typeof e == "string" ? O(e, t.maxStringLength) : D(e) ? {
		file: e.name,
		type: e.type,
		size: e.size
	} : j(e, t));
	return {
		kind: "FormData",
		keyCount: r.length,
		keys: r,
		preview: i
	};
}, Te = (e, t, n, r) => {
	if (n >= t.maxDepth) return `[object depth>${t.maxDepth}]`;
	if (r.has(e)) return "[circular]";
	r.add(e);
	let i = Object.entries(e), a = i.slice(0, t.maxObjectKeys), o = {};
	for (let [e, i] of a) o[e] = A(i, t, n + 1, r);
	return i.length > t.maxObjectKeys && (o.__truncatedKeys = i.length - t.maxObjectKeys), o;
}, A = (e, t, n, r) => {
	if (e == null) return e;
	if (typeof e == "string") return O(e, t.maxStringLength);
	if (typeof e == "number" || typeof e == "boolean" || typeof e == "bigint") return e;
	if (typeof e == "symbol") return e.toString();
	if (typeof e == "function") return `[function ${e.name || "anonymous"}]`;
	if (typeof FormData < "u" && e instanceof FormData) return k(e, t);
	if (D(e)) return {
		file: e.name,
		type: e.type,
		size: e.size
	};
	if (we(e)) return {
		blob: !0,
		type: e.type,
		size: e.size
	};
	if (Array.isArray(e)) {
		if (n >= t.maxDepth) return `[array(${e.length}) depth>${t.maxDepth}]`;
		let i = e.slice(0, t.maxArrayLength).map((e) => A(e, t, n + 1, r));
		return e.length > t.maxArrayLength && i.push(`[${e.length - t.maxArrayLength} more items]`), i;
	}
	return typeof e == "object" ? Te(e, t, n, r) : String(e);
}, j = (e, t = {}) => A(e, {
	...Ce,
	...t
}, 0, /* @__PURE__ */ new WeakSet()), Ee = () => {
	try {
		if (typeof window > "u") return !1;
		let e = String(window.location?.href ?? "");
		if (e.startsWith("chrome-extension://") || e.startsWith("moz-extension://") || e.startsWith("edge-extension://")) return !1;
		let t = window.location?.protocol ?? "";
		return t === "chrome-extension:" || t === "moz-extension:" || t === "edge-extension:" ? !1 : t === "http:" || t === "https:";
	} catch {
		return !1;
	}
}, M = null, N = !1, P = !1, F = null, I = !1, L = {
	immediate: !1,
	onRegistered: () => {
		console.log("[PWA] Service worker registered successfully");
	},
	onRegisterError: (e) => {
		console.error("[PWA] Service worker registration failed:", e);
	}
}, De = () => {
	N || typeof navigator > "u" || !navigator.serviceWorker || (N = !0, navigator.serviceWorker.addEventListener("controllerchange", () => {
		P || (P = !0, console.log("[PWA] Service worker controller changed"), globalThis?.dispatchEvent?.(new CustomEvent("sw-controller-changed")), L?.immediate === !0 && globalThis.location.reload());
	}));
}, R = (e, t) => {
	let n = e?.waiting;
	return n ? (console.log(`[PWA] Activating waiting service worker (${t})`), n.postMessage({ type: "SKIP_WAITING" }), !0) : !1;
}, z = async (e) => {
	e?.update && await e.update().catch((e) => console.warn("[PWA] registration.update failed:", e));
}, Oe = (e) => {
	I || typeof document > "u" || (I = !0, document.addEventListener("visibilitychange", () => {
		document.visibilityState === "visible" && z(e);
	}));
}, B = async (e = L) => (L = {
	...L,
	...e || {}
}, M || (M = (async () => {
	if (typeof globalThis > "u") return null;
	let e = (globalThis?.location?.protocol || "").toLowerCase();
	if (e === "chrome-extension:" || e === "file:" || e === "about:" || e !== "https:" && e !== "http:") return null;
	if (!("serviceWorker" in navigator)) return console.warn("[PWA] Service workers not supported"), null;
	try {
		let e = await pe(), t = {
			BASE_URL: "/",
			DEV: !1,
			MODE: "test",
			PROD: !0,
			SSR: !1
		};
		if (!e) return t?.DEV ? console.warn("[PWA] Service worker not registered (dev): probe failed for dev-sw/sw.js — check Vite BASE_URL matches vite-plugin-pwa dev worker path.") : console.error("[PWA] Service worker registration failed: no valid sw.js found"), null;
		De(), await z(e), Oe(e), t?.DEV && e.waiting && R(e, "initial");
		try {
			L?.immediate === !0 && e.waiting && R(e, "initial");
		} catch (e) {
			console.warn("[PWA] Failed to auto-activate waiting service worker:", e);
		}
		return e?.addEventListener?.("updatefound", () => {
			let n = e?.installing;
			n && n?.addEventListener?.("statechange", () => {
				if (n?.state === "installed" && navigator.serviceWorker.controller) {
					console.log("[PWA] New service worker available"), c({
						message: "App update available",
						kind: "info"
					});
					try {
						L?.immediate === !0 && !R(e, "updatefound") && t?.DEV && globalThis.setTimeout(() => {
							try {
								R(e, "updatefound");
							} catch (e) {
								console.warn("[PWA] Delayed SW activation failed:", e);
							}
						}, 0);
					} catch (e) {
						console.warn("[PWA] Failed to auto-activate waiting service worker on updatefound:", e);
					}
				}
			});
		}), F &&= (globalThis?.clearInterval?.(F), null), t?.DEV || (F = globalThis?.setInterval?.(() => {
			e?.update?.().catch?.(console.warn);
		}, 300 * 1e3)), console.log("[PWA] Service worker registered successfully"), e;
	} catch (e) {
		return console.error("[PWA] Service worker registration failed:", e), null;
	}
})(), M)), ke = null, V = () => {
	ke ||= re();
}, H = (e) => {
	let t = Array.isArray(e.files) ? e.files.filter((e) => e instanceof File) : [], n = String(e.text || "").trim(), r = String(e.url || e.sharedUrl || "").trim();
	if (t.length > 0) {
		let e = C(t[0]);
		return e === "image" ? "image" : e === "markdown" ? "markdown" : e === "text" ? "text" : "file";
	}
	let i = Number(e.fileCount ?? 0);
	if (i > 0) {
		let t = typeof e.hint?.filename == "string" && e.hint.filename.trim() || typeof e.title == "string" && e.title.trim() || "";
		if (t) {
			let e = w(t);
			return e === "markdown" ? "markdown" : e === "text" ? "text" : e === "image" ? "image" : "file";
		}
	}
	return n ? "text" : r ? "url" : i > 0 ? "file" : "other";
}, U = (e) => {
	let t = C(e);
	return t === "markdown" || t === "text";
}, Ae = async (e) => {
	let t = Array.isArray(e.files) ? e.files.filter((e) => e instanceof File) : [];
	if (!t.length) return e;
	let n = String(e.text || "").trim(), r = String(e.source || "");
	if (!(r === "launch-queue" || r === "cached-bootstrap" || r === "share-target" || !n)) return e;
	let i = t.find(U);
	if (!i) return e;
	try {
		let t = (await i.text())?.trim?.();
		return t ? {
			...e,
			title: e.title || i.name,
			text: t
		} : e;
	} catch {
		return e;
	}
}, je = async (e) => {
	let t = H(e);
	if (typeof e.aiEnabled == "boolean") return e.aiEnabled === !1 && !(t === "text" || t === "markdown");
	try {
		return ((await s().catch(() => null))?.ai?.autoProcessShared ?? !0) === !1 && !(t === "text" || t === "markdown");
	} catch {
		return !1;
	}
}, W = (e) => {
	let t = e?.hint;
	if (!(!t || typeof t != "object")) return t;
}, Me = async (e = {}) => {
	let t = await m(e);
	return t ? h(t) : null;
}, G = async (e, t = 12) => {
	let n = { ...e };
	if (Number(n.fileCount ?? 0) > 0 && !n.files?.length) for (let e = 1; e <= t; e++) {
		try {
			let e = await Me({ clear: !1 });
			if (e?.files?.length) {
				n = {
					...n,
					...e,
					files: e.files
				};
				break;
			}
		} catch {}
		await new Promise((t) => globalThis.setTimeout(t, 80 * e));
	}
	return n;
}, Ne = async (e) => {
	if (!("caches" in globalThis)) return {
		...e,
		source: "share-target"
	};
	try {
		let t = await (await caches.open("share-target-data")).match("/share-target-data");
		if (!t) return {
			...e,
			source: "share-target"
		};
		let n = await t.json().catch(() => null);
		if (!n) return {
			...e,
			source: "share-target"
		};
		let r = await G(n), i = Array.isArray(r.files) ? r.files.filter((e) => e instanceof File) : [], a = Array.isArray(e.files) ? e.files.filter((e) => e instanceof File) : [], o = i.length > 0 ? i : a, s = Math.max(Number(r.fileCount ?? 0), Number(e.fileCount ?? 0), o.length), c = typeof e.hint == "object" && e.hint !== null ? { ...e.hint } : {}, l = typeof r.hint == "object" && r.hint !== null ? { ...r.hint } : {}, u = Object.keys({
			...l,
			...c
		}).length > 0 ? {
			...l,
			...c,
			filename: c.filename || l.filename || o[0]?.name
		} : o[0]?.name ? { filename: o[0].name } : void 0;
		return {
			...e,
			...r,
			title: r.title || e.title,
			text: r.text ?? e.text,
			url: r.url || e.url,
			sharedUrl: r.sharedUrl || e.sharedUrl,
			files: o.length ? o : void 0,
			fileCount: s > 0 ? s : r.fileCount ?? e.fileCount,
			imageCount: r.imageCount ?? e.imageCount,
			...u ? { hint: u } : {},
			source: "share-target"
		};
	} catch (t) {
		return console.warn("[ShareTarget] mergeUrlParamsShareWithCache failed:", t), {
			...e,
			source: "share-target"
		};
	}
}, K = async (e, t, n, r = !1) => {
	await Se();
	let i = await Ae(e), a = Array.isArray(i.files) ? i.files.filter((e) => e instanceof File) : [];
	console.log("[ViewTransfer] Pipeline input:", j({
		source: t,
		pending: r,
		hint: n,
		title: i.title,
		text: i.text,
		url: i.url || i.sharedUrl,
		fileCount: a.length,
		fileCountReported: i.fileCount,
		imageCountReported: i.imageCount,
		timestamp: i.timestamp
	}));
	let o = await je(i), s = (H(i) === "markdown" || H(i) === "text") && !o ? {
		...n,
		destination: "viewer",
		action: "open",
		filename: n?.filename || a[0]?.name
	} : void 0, c = o ? {
		destination: "workcenter",
		action: "attach",
		...n || {}
	} : s ?? n;
	console.log("[ViewTransfer] Hint resolution:", {
		forceAttachToWorkCenter: o,
		inputHint: j(n),
		resolvedHint: j(c)
	});
	let { delivered: l, resolved: u } = await ye({
		source: t,
		route: t === "launch-queue" ? "launch-queue" : "share-target",
		title: i.title,
		text: i.text,
		url: i.url || i.sharedUrl,
		files: a,
		fileCount: i.fileCount ?? a.length,
		hint: c,
		pending: r,
		metadata: {
			timestamp: i.timestamp || Date.now(),
			fileCount: i.fileCount ?? a.length,
			imageCount: i.imageCount ?? a.filter((e) => e.type.startsWith("image/")).length
		}
	});
	console.log("[ViewTransfer] Dispatch result:", {
		delivered: l,
		destination: u.destination,
		routePath: u.routePath,
		messageType: u.messageType,
		contentType: u.contentType
	});
	let d = (globalThis?.location?.pathname || "").replace(/\/+$/, "") || "/", f = !1;
	try {
		let e = new URLSearchParams(globalThis?.location?.search || "");
		f = e.get("silent") === "1" || e.get("silent") === "true";
	} catch {
		f = !1;
	}
	let p = async () => {
		if (!l) return !1;
		try {
			let { bootLoader: e } = await import("./BootLoader-ow_gF8Le.js"), n = e.getShell();
			if (!(n && ![
				"window",
				"tabbed",
				"environment"
			].includes(n.id)) || !n.getElement?.()?.isConnected) return !1;
			let i = n.getContext?.().navigationState?.currentView;
			return u.destination === "viewer" && i === "workcenter" && t !== "share-target" ? (console.log("[ViewTransfer] Skipping steal to viewer — staying on Work Center", {
				source: t,
				pending: r,
				delivered: l
			}), !0) : (await n.navigate(u.destination, void 0, { force: !0 }), console.log("[ViewTransfer] Routed through live shell:", u.routePath), !0);
		} catch (e) {
			return console.warn("[ViewTransfer] Live shell routing failed, falling back to hard navigation:", e), !1;
		}
	};
	if (f) return d === u.routePath ? await p() : console.log("[ViewTransfer] Silent mode: skipping navigation; delivery via channels only:", u.routePath), l;
	if (d !== u.routePath) {
		if (!await p()) {
			let e = new URL(globalThis?.location?.href);
			e.pathname = u.routePath, e.search = "", e.hash = "", r && e.searchParams.set("shared", "1"), console.log("[ViewTransfer] Navigating to resolved route:", e.toString()), globalThis.location.href = e.toString();
		}
		return l;
	}
	return await p(), console.log("[ViewTransfer] Already on resolved route:", u.routePath), l;
}, q = (e) => {
	let t = e.text?.trim();
	if (t) return {
		content: t,
		type: "text"
	};
	let n = (e.url || e.sharedUrl)?.trim();
	if (n) return {
		content: n,
		type: "url"
	};
	let r = e.title?.trim();
	if (r) return {
		content: r,
		type: "text"
	};
	if (Array.isArray(e.files) && e.files.length > 0) {
		let t = e.files[0];
		if (t instanceof File || t instanceof Blob) return {
			content: null,
			type: "file"
		};
	}
	return {
		content: null,
		type: null
	};
}, J = async (e, t = !1) => {
	if (console.log("[ShareTarget] Processing shared data:", {
		hasText: !!e.text,
		hasUrl: !!e.url,
		fileCount: e.files?.length || e.fileCount || 0,
		imageCount: e.imageCount || 0,
		source: e.source || "unknown",
		aiProcessed: e.aiProcessed
	}), e.aiProcessed && e.results?.length) return console.log("[ShareTarget] AI already processed in SW, showing result"), c({
		message: "Content processed by service worker",
		kind: "success"
	}), !0;
	let { content: n, type: r } = q(e);
	if (console.log("[ShareTarget] Extracted content:", {
		content: n?.substring(0, 50),
		type: r
	}), !n && r !== "file") return t ? (console.log("[ShareTarget] No content to process (skipping)"), !1) : e.fileCount && e.fileCount > 0 ? (console.log("[ShareTarget] Files processed in service worker"), c({
		message: "Files received and being processed",
		kind: "info"
	}), !0) : (console.warn("[ShareTarget] No content to process"), c({
		message: "No content received to process",
		kind: "warning"
	}), !1);
	try {
		console.log("[ShareTarget] Starting AI processing for type:", r), c({
			message: "Processing shared content...",
			kind: "info"
		});
		let t = (e) => new Promise((t, n) => {
			let r = new FileReader();
			r.onload = () => t(r.result), r.onerror = n, r.readAsDataURL(e);
		});
		console.log("[ShareTarget] Using unified processing endpoint");
		let i, o;
		if (r === "file" && e.files?.[0]) {
			let n = e.files[0];
			console.log("[ShareTarget] Processing file:", {
				name: n.name,
				type: n.type,
				size: n.size
			}), i = await t(n), o = "base64";
		} else if (n) i = n, o = "text", console.log("[ShareTarget] Processing text content, length:", n.length);
		else throw Error("No processable content found");
		console.log("[ShareTarget] Calling unified processing API");
		let s = await fetch("/api/processing", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				content: i,
				contentType: o,
				processingType: "general-processing",
				metadata: {
					source: "share-target",
					title: e.title || "Shared Content",
					timestamp: Date.now()
				}
			})
		});
		if (!s.ok) throw Error(`Processing API failed: ${s.status}`);
		let l = await s.json();
		if (console.log("[ShareTarget] Unified processing completed:", { success: l.success }), l.success && l.data) {
			console.log("[ShareTarget] Processing result via unified messaging");
			let e = new BroadcastChannel(Y.CLIPBOARD);
			e.postMessage({
				type: "copy",
				data: l.data
			}), e.close();
			try {
				await d.sendMessage({
					type: "share-target-result",
					source: "share-target",
					destination: "workcenter",
					data: {
						content: typeof l.data == "string" ? l.data : JSON.stringify(l.data, null, 2),
						rawData: l.data,
						timestamp: Date.now(),
						source: "share-target",
						action: "Processing (/api/processing)",
						metadata: l.metadata
					},
					metadata: { priority: "high" }
				});
			} catch {
				let e = new BroadcastChannel(a.WORK_CENTER);
				e.postMessage({
					type: "share-target-result",
					data: {
						content: l.data,
						rawData: l.data,
						timestamp: Date.now(),
						source: "share-target",
						action: "Processing (/api/processing)",
						metadata: l.metadata
					}
				}), e.close();
			}
			return !0;
		} else {
			let e = l?.error || "AI processing returned no data";
			console.warn("[ShareTarget] AI processing failed:", e);
			let t = new BroadcastChannel(Y.SHARE_TARGET);
			return t.postMessage({
				type: "ai-result",
				data: {
					success: !1,
					error: e
				}
			}), t.close(), c({
				message: `Processing failed: ${e}`,
				kind: "warning"
			}), !1;
		}
	} catch (t) {
		if (console.error("[ShareTarget] Processing error:", t), console.log("[ShareTarget] Attempting server-side fallback"), await X(e)) return console.log("[ShareTarget] Server-side fallback succeeded"), !0;
		console.warn("[ShareTarget] All processing methods failed");
		let n = new BroadcastChannel(Y.SHARE_TARGET);
		return n.postMessage({
			type: "ai-result",
			data: {
				success: !1,
				error: t?.message || String(t)
			}
		}), n.close(), c({
			message: `Processing failed: ${t?.message || "Unknown error"}`,
			kind: "error"
		}), !1;
	}
}, Y = {
	SHARE_TARGET: a.SHARE_TARGET,
	TOAST: a.TOAST,
	CLIPBOARD: a.CLIPBOARD,
	MINIMAL_APP: a.MINIMAL_APP,
	MAIN_APP: a.MAIN_APP,
	FILE_EXPLORER: a.FILE_EXPLORER,
	PRINT_VIEWER: a.PRINT_VIEWER
}, X = async (e) => {
	try {
		let { content: t, type: n } = q(e);
		if (!t) return !1;
		console.log("[ShareTarget] Attempting server-side AI fallback");
		let { getRuntimeSettings: r } = await import("./RuntimeSettings-BDtViyrN.js"), i = await r().catch(() => null), a = i?.ai?.apiKey;
		if (!a) return console.log("[ShareTarget] No API key for server fallback"), !1;
		let o = await fetch("/api/share/process", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				text: n === "text" ? t : void 0,
				url: n === "url" ? t : void 0,
				title: e.title,
				apiKey: a,
				baseUrl: i?.ai?.baseUrl,
				model: i?.ai?.customModel || i?.ai?.model
			})
		});
		if (!o.ok) return console.warn("[ShareTarget] Server fallback failed:", o.status), !1;
		let s = await o.json();
		if (s?.ok && s?.data) {
			console.log("[ShareTarget] Broadcasting server-side result to clipboard handlers");
			let e = new BroadcastChannel(Y.SHARE_TARGET);
			return e.postMessage({
				type: "ai-result",
				data: {
					success: !0,
					data: String(s.data)
				}
			}), e.close(), !0;
		}
		return !1;
	} catch (e) {
		return console.warn("[ShareTarget] Server fallback error:", e), !1;
	}
}, Z = () => {
	let e = new URLSearchParams(globalThis?.location?.search), t = e.get("shared"), n = t === "1" || t === "true" || t === "test", r = !1;
	if (t === "1" || t === "true") {
		console.log("[ShareTarget] Detected shared=1 URL param, processing server-side share");
		let t = {
			title: e.get("title") || void 0,
			text: e.get("text") || void 0,
			url: e.get("url") || void 0,
			sharedUrl: e.get("sharedUrl") || void 0,
			timestamp: Date.now(),
			source: "url-params"
		};
		console.log("[ShareTarget] Share data from URL params:", j({
			title: t.title,
			text: t.text,
			url: t.url,
			sharedUrl: t.sharedUrl
		}));
		let n = new URL(globalThis?.location?.href);
		[
			"shared",
			"action",
			"title",
			"text",
			"url",
			"sharedUrl"
		].forEach((e) => n.searchParams.delete(e)), globalThis?.history?.replaceState?.({}, "", n.pathname + n.hash), (async () => {
			let e = await Ne(t), { content: n, type: r } = q(e), i = Number(e.fileCount ?? 0) > 0;
			if (console.log("[ShareTarget] After cache merge:", j({
				title: e.title,
				text: e.text,
				url: e.url,
				fileCount: e.fileCount,
				filesLen: e.files?.length
			})), console.log("[ShareTarget] Extracted (merged):", {
				content: n?.substring(0, 50),
				type: r
			}), n || r === "file" || i) {
				console.log("[ShareTarget] Routing merged share payload");
				try {
					await K(e, "share-target", W(e), !0) || await J(e, !0);
				} catch (t) {
					console.warn("[ShareTarget] Route transfer failed, falling back to processing:", t), await J(e, !0);
				}
			} else console.log("[ShareTarget] Nothing to route after merge");
		})().catch((e) => console.warn("[ShareTarget] shared=1 async flow failed:", e));
		return;
	} else if (t === "test") {
		c({
			message: "Share target route working",
			kind: "info"
		});
		let e = new URL(globalThis?.location?.href);
		e.searchParams.delete("shared"), globalThis?.history?.replaceState?.({}, "", e.pathname + e.hash);
	}
	try {
		let e = sessionStorage.getItem("rs-pending-share");
		if (e) {
			sessionStorage.removeItem("rs-pending-share");
			let t = JSON.parse(e);
			console.log("[ShareTarget] Found pending share in sessionStorage:", j(t)), r = !0, K(t, "pending", W(t), !0).catch((e) => {
				console.warn("[ShareTarget] Pending transfer routing failed:", e);
			});
		}
	} catch {}
	!n && !r && (async () => {
		try {
			let e = null, t = {}, n = [], r = 0;
			for (let i = 1; i <= 4 && (e = await m({ clear: !1 }), t = e?.meta && typeof e.meta == "object" ? e.meta : {}, n = Array.isArray(e?.files) ? e.files : [], r = Number(t?.fileCount || 0), !(r <= 0 || n.length > 0)); i++) await new Promise((e) => globalThis.setTimeout(e, 200 * i));
			let i = Number(t?.timestamp || Date.now()), a = Date.now() - i;
			if (!Number.isFinite(a) || a < 0 || a > 300 * 1e3) return;
			let o = {
				...h({
					meta: t,
					files: n,
					fileMeta: e?.fileMeta || []
				}),
				fileCount: n.length || r,
				timestamp: i,
				source: "cached-bootstrap"
			};
			if (!o.text && !o.url && !o.title && (o.fileCount ?? 0) <= 0) return;
			console.log("[ShareTarget] Bootstrap recovery from cached payload:", j({
				source: o.source,
				fileCount: o.fileCount,
				imageCount: o.imageCount,
				hasText: !!o.text,
				hasUrl: !!o.url,
				ageMs: a
			}));
			let s = await K(o, "pending", W(o), !0), c = Array.isArray(o.files) && o.files.length > 0;
			s && !c && await m({ clear: !0 }).catch(() => null);
		} catch (e) {
			console.warn("[ShareTarget] Cached bootstrap recovery failed:", e);
		}
	})(), typeof BroadcastChannel < "u" ? (new BroadcastChannel(Y.SHARE_TARGET).addEventListener("message", async (e) => {
		let t = e.data?.type, n = e.data?.data;
		if (console.log("[ShareTarget] Broadcast received:", {
			type: t,
			hasData: !!n
		}), t === "share-received" && n) {
			console.log("[ShareTarget] Share notification received:", {
				hasText: !!n.text,
				hasUrl: !!n.url,
				fileCount: n.fileCount || 0,
				aiEnabled: n.aiEnabled,
				source: n.source
			});
			let e = await G(n);
			!(Array.isArray(n.files) && n.files.some((e) => e instanceof File)) && Array.isArray(e.files) && e.files.some((e) => e instanceof File) && c({
				message: `Received ${e.files.filter((e) => e instanceof File).length || n.fileCount || 0} shared file(s)`,
				kind: "info"
			}), e.files?.length || e.text || e.url || e.title || (e.fileCount ?? 0) > 0 ? (console.log("[ShareTarget] Processing broadcasted share data"), await K(e, "share-target", W(e), !0) || await J(e, !0)) : (n.fileCount ?? 0) > 0 && c({
				message: `Processing ${n.fileCount} file(s)...`,
				kind: "info"
			});
		} else t === "ai-result" && console.log("[ShareTarget] AI result broadcast received (handled by PWA clipboard)");
	}), console.log("[ShareTarget] Broadcast channel listener set up")) : console.warn("[ShareTarget] BroadcastChannel not available");
}, Q = async () => {
	if (!("launchQueue" in globalThis)) {
		console.log("[LaunchQueue] launchQueue API not available");
		return;
	}
	try {
		globalThis?.launchQueue?.setConsumer?.((e) => {
			console.log("[LaunchQueue] Launch params received:", j({
				fileHandleCount: e?.files?.length || 0,
				hasTargetUrl: !!e?.targetURL,
				targetURL: e?.targetURL
			}));
			let t = [...e.files];
			if (!t || t.length === 0) {
				console.log("[LaunchQueue] No files in launch params - this may indicate:"), console.log("  - File opener was used but no files were selected"), console.log("  - Launch queue consumer called with empty payload"), console.log("  - Permission issues preventing file access"), console.log("  - Browser compatibility issues");
				return;
			}
			console.log(`[LaunchQueue] Processing ${t.length} file handle(s)`);
			let n = [], r = [];
			(async () => {
				for (let e of t) try {
					if (console.log("[LaunchQueue] Processing file handle:", {
						name: e.name || "unknown",
						type: e.constructor.name,
						hasGetFile: typeof e.getFile == "function",
						isFile: e instanceof File
					}), e.getFile) try {
						if ("queryPermission" in e) {
							let t = await e.queryPermission({ mode: "read" });
							if (console.log("[LaunchQueue] File handle permission:", t), t === "prompt" && "requestPermission" in e) try {
								t = await e.requestPermission({ mode: "read" }), console.log("[LaunchQueue] File handle permission requested:", t);
							} catch (e) {
								console.warn("[LaunchQueue] requestPermission failed:", e);
							}
							if (t !== "granted") {
								console.warn("[LaunchQueue] No permission to access file:", e.name, t), r.push(e);
								continue;
							}
						}
						let t = await e.getFile();
						console.log("[LaunchQueue] Got file from handle:", t.name, t.type, t.size), n.push(t);
					} catch (t) {
						console.warn("[LaunchQueue] Permission or access error for file handle:", t, e), r.push(e);
					}
					else e instanceof File ? (console.log("[LaunchQueue] File handle is already a File object:", e.name, e.type), n.push(e)) : (console.warn("[LaunchQueue] Unknown file handle type:", e.constructor.name), r.push(e));
				} catch (t) {
					console.warn("[LaunchQueue] Failed to get file from handle:", t, e), r.push(e);
				}
				if (console.log(`[LaunchQueue] Successfully processed ${n.length} files, ${r.length} failed`), n.length === 0) {
					r.length > 0 ? (console.error("[LaunchQueue] All file handles failed to process"), c({
						message: `Failed to process ${r.length} launched file(s)`,
						kind: "error"
					})) : console.log("[LaunchQueue] No files to process after filtering");
					return;
				}
				if (n.length > 0) {
					let e = n.length === 1 && U(n[0]) ? {
						destination: "viewer",
						action: "open",
						filename: n[0]?.name
					} : void 0, t = Date.now(), r = n?.filter?.((e) => e.type.startsWith("image/")).length, i = await ee({
						files: n,
						meta: {
							timestamp: t,
							source: "launch-queue",
							route: "launch-queue",
							hint: e,
							fileCount: n.length,
							imageCount: r
						}
					});
					if (i || console.warn("[LaunchQueue] Failed to pre-stage files to cache"), console.log("[LaunchQueue] Staged launch queue payload:", {
						fileCount: n.length,
						imageCount: r,
						fileTypes: n?.map?.((e) => ({
							name: e.name,
							type: e.type,
							size: e.size
						})),
						source: "launch-queue",
						staged: i
					}), c({
						message: `Received ${n.length} file(s)`,
						kind: "info"
					}), i) {
						if (!await K({
							title: n[0]?.name,
							files: n,
							fileCount: n.length,
							imageCount: r,
							timestamp: t,
							source: "launch-queue",
							hint: e
						}, "launch-queue", e, !0)) {
							let e = new URL(globalThis?.location?.href);
							e.pathname = "/share-target", e.searchParams.set("shared", "1"), e.hash = "", globalThis.location.href = e.toString();
						}
					} else c({
						message: `Failed to stage ${n.length} launched file(s)`,
						kind: "error"
					});
				}
				e.targetURL && console.log("[LaunchQueue] Target URL:", e.targetURL);
			})();
		}), console.log("[LaunchQueue] Consumer set up successfully");
	} catch (e) {
		console.error("[LaunchQueue] Failed to set up consumer:", e);
	}
}, $ = null, Pe = async () => $ || ($ = (async () => {
	if (!(typeof globalThis > "u" || typeof window > "u") && Ee()) {
		try {
			await B({ immediate: !1 });
		} catch (e) {
			console.warn("[PWA] Service worker registration failed:", e);
		}
		try {
			V();
		} catch (e) {
			console.warn("[PWA] initReceivers failed:", e);
		}
		try {
			Z();
		} catch (e) {
			console.warn("[PWA] handleShareTarget failed:", e);
		}
		Q().catch((e) => console.warn("[PWA] setupLaunchQueueConsumer failed:", e));
	}
})(), $);
//#endregion
export { B as a, V as i, Z as n, J as o, Pe as r, Q as s, Y as t };
