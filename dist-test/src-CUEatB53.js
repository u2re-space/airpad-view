import { Ut as e, br as t } from "./src-C-qx_Mx3.js";
import { a as n, n as r, o as i, t as a, u as o } from "./websocket-Zbhexn22.js";
import { F as s, P as c } from "./config-CdEaAxAm.js";
import { _ as l, a as u, f as d, i as f, m as p } from "./cwsp-endpoint-resolve-DtbuqyNS.js";
import { a as m } from "./clipboard-device-CdAzzaJV.js";
import { a as h, o as g, t as _ } from "./cws-bridge-BVaPzxvD.js";
import { p as v } from "./Settings-BAxgoWK0.js";
import { n as y, r as b } from "./frontend-debug-capture-Boq_GZlO.js";
//#region ../network-view/src/network-probe.ts
var x = (e) => typeof e == "string" ? e.trim() : "", S = (e) => {
	let t = x(e).replace(/\/lna-probe\/?$/i, "").replace(/\/+$/, "");
	if (!t) return "";
	let n = d(t);
	if (!n?.host) return t;
	let r = n.protocol ?? "https";
	return n.port ? `${r}://${n.host}:${n.port}` : `${r}://${n.host}:8434`;
}, C = (e) => {
	let t = e instanceof Error ? e.message : String(e ?? "fetch failed");
	return /abort/i.test(t) ? "timeout" : /refused|ECONNREFUSED/i.test(t) ? "connection refused" : /ENOTFOUND|NAME_NOT_RESOLVED/i.test(t) ? "host not found" : /certificate|cert\.|ssl|tls|ERR_CERT/i.test(t) ? `TLS: ${t}` : /failed to fetch/i.test(t) && g() ? "WebView fetch blocked (CORS/TLS) — use native bridge" : t;
}, w = (e, t, n) => {
	if (t) return;
	let r = [];
	return e.error && r.push(String(e.error)), n != null && n >= 0 && n !== 204 && r.push(`HTTP ${n}`), r.join(" · ") || "unreachable";
}, T = (e, t, n) => {
	let r = new Set(l(n.relay ?? "").map((e) => S(e))), i = new Set(l(n.direct ?? "").map((e) => S(e))), a = S(e);
	return r.has(a) ? t === 0 ? "Relay / gateway" : "Relay (alt)" : i.has(a) ? "Direct peer" : a.includes("192.168.0.200") ? "Gateway LAN fallback" : a.includes("45.147.121.152") ? "Gateway WAN fallback" : `Candidate ${t + 1}`;
};
async function E(e) {
	if (!g()) return null;
	let t = u(e);
	try {
		let n = await h({
			channel: "network:probe",
			payload: {
				relay: S(x(e.relay)),
				direct: S(x(e.direct)),
				candidates: t
			}
		}), r = n.echo, i = n.results ?? r?.results;
		if (!Array.isArray(i) || !i.length) return null;
		let a = /* @__PURE__ */ new Set(), o = [];
		for (let t = 0; t < i.length; t++) {
			let n = i[t], r = S(String(n.url ?? ""));
			if (!r || a.has(r)) continue;
			a.add(r);
			let s = !!n.reachable, c = typeof n.statusCode == "number" ? n.statusCode : void 0;
			o.push({
				label: T(r, o.length, e),
				origin: r,
				ok: s,
				status: c,
				error: w(n, s, c)
			});
		}
		return o.length ? o : null;
	} catch {
		return null;
	}
}
async function D(e, t) {
	if (!g()) return null;
	let n = S(e);
	if (!n) return null;
	let r = Date.now();
	try {
		let e = await h({
			channel: "network:dispatch-probe",
			payload: {
				origin: n,
				clientId: x(t.clientId),
				token: x(t.token),
				accessToken: x(t.accessToken)
			}
		}), i = typeof e.statusCode == "number" ? e.statusCode : void 0, a = !!e.ok, o = typeof e.error == "string" ? e.error.trim() : "", s = typeof e.bodySnippet == "string" ? e.bodySnippet : "";
		return {
			origin: n,
			ok: a,
			status: i,
			latencyMs: Date.now() - r,
			bodySnippet: s,
			error: a ? void 0 : o || (i == null ? "dispatch failed" : `HTTP ${i}`)
		};
	} catch {
		return null;
	}
}
async function O(e, t = {}) {
	let n = await E(e);
	if (n?.length) return n;
	let r = t.timeoutMs ?? 3500, i = t.maxCandidates ?? 6, a = [], o = u(e);
	for (let t = 0; t < o.length; t++) {
		let n = o[t], s = T(n, t, e), c = f(n).slice(0, i);
		if (!c.length) {
			a.push({
				label: s,
				origin: n,
				ok: !1,
				error: "invalid host"
			});
			continue;
		}
		for (let e of c) {
			let t = await p(e, { timeoutMs: r });
			if (a.push({
				label: s,
				...t
			}), t.ok) break;
		}
	}
	return a;
}
async function k(e, t, n, r = 8e3) {
	let i = e.filter((e) => e.ok).map((e) => S(e.origin)), a = i.length ? i : u(t), o = {
		origin: "",
		ok: !1,
		error: "no origin"
	};
	for (let e of a) if (o = await A(e, n, r), o.ok) return o;
	return o;
}
async function A(e, t, n = 8e3) {
	let r = S(e), i = Date.now();
	if (!r) return {
		origin: "",
		ok: !1,
		error: "no origin"
	};
	let a = await D(r, t);
	if (a) return a;
	let o = typeof AbortController < "u" ? new AbortController() : void 0, s = o && n > 0 ? globalThis.setTimeout(() => o.abort(), n) : void 0, c = x(t.clientId), l = x(t.token), u = x(t.accessToken), d = { "Content-Type": "application/json" };
	u && (d["x-auth-token"] = u), l && (d["x-cws-token"] = l);
	let f = {
		userId: c,
		byId: c,
		from: c,
		token: l,
		op: "ask",
		what: "debug:isReady",
		payload: {}
	};
	try {
		let e = await fetch(`${r}/api/network/dispatch`, {
			method: "POST",
			mode: "cors",
			cache: "no-store",
			credentials: "omit",
			headers: d,
			body: JSON.stringify(f),
			signal: o?.signal
		}), t = await e.text().catch(() => ""), n = Date.now() - i, a = e.ok;
		return {
			origin: r,
			ok: a,
			status: e.status,
			statusText: e.statusText,
			latencyMs: n,
			bodySnippet: t.slice(0, 240),
			error: a ? void 0 : `HTTP ${e.status}${e.statusText ? ` ${e.statusText}` : ""}`.trim()
		};
	} catch (e) {
		return {
			origin: r,
			ok: !1,
			error: C(e),
			latencyMs: Date.now() - i
		};
	} finally {
		s && clearTimeout(s);
	}
}
//#endregion
//#region ../network-view/src/network-log-export.ts
var j = (e) => `${new Date(e.ts).toISOString()} [${e.level}] (${e.scope}) ${e.msg}`, M = (e = 400) => {
	let t = y()?.tail(e) ?? [];
	return t.length ? t.map(j).join("\n") + "\n" : "(no frontend log entries — boot WebView debug capture first)\n";
}, N = async (e = 400) => {
	try {
		let t = await h({
			channel: "debug:logcat",
			payload: { limit: e }
		}), n = t.echo, r = typeof t.text == "string" ? t.text : "", i = typeof n?.text == "string" ? n.text : "", a = (r || i).trim();
		if (a) return a.endsWith("\n") ? a : `${a}\n`;
	} catch (e) {
		return `(logcat failed: ${e instanceof Error ? e.message : String(e)})\n`;
	}
	return "(logcat unavailable — native bridge missing or not on Android)\n";
}, P = async (e = 400) => {
	try {
		let t = await h({
			channel: "debug:frontend",
			payload: { limit: e }
		}), n = t.echo, r = typeof t.text == "string" ? t.text : typeof n?.text == "string" ? n.text : "";
		if (r.trim()) return r.endsWith("\n") ? r : `${r}\n`;
	} catch {}
	return "";
}, F = async (e, t = "") => {
	let n = [
		"CWSP Network diagnostics export",
		`generated: ${(/* @__PURE__ */ new Date()).toISOString()}`,
		`userAgent: ${navigator.userAgent}`,
		""
	].join("\n"), r = M(500), i = await P(500), a = await N(500);
	return [
		n,
		"=== Page log ===",
		e || "(empty)",
		"",
		t ? "=== Probe summary ===\n" + t + "\n" : "",
		"=== Frontend log (WebView ring) ===",
		r,
		i.trim() ? "=== Frontend log (native ring) ===\n" + i + "\n" : "",
		"=== Logcat (native) ===",
		a
	].filter(Boolean).join("\n");
}, I = async (e) => {
	let t = e || "(empty log)";
	try {
		return await m(t), !0;
	} catch {
		return !1;
	}
}, L = (e, t) => {
	let n = new Blob([t], { type: "text/plain;charset=utf-8" }), r = URL.createObjectURL(n), i = document.createElement("a");
	i.href = r, i.download = e, i.rel = "noopener", document.body.append(i), i.click(), i.remove(), URL.revokeObjectURL(r);
}, R = (e) => `${e}-${(/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-")}.txt`, z = "@layer ui-network {\n  /* Host fills minimal-shell absolute view slot */\n  .cw-network-view-host {\n    display: flex;\n    flex-direction: column;\n    block-size: 100%;\n    min-block-size: 0;\n    overflow: hidden;\n  }\n  .cw-network-view {\n    display: flex;\n    flex-direction: column;\n    gap: 0;\n    block-size: 100%;\n    min-block-size: 0;\n    overflow: hidden;\n    color: var(--c2-on-surface, light-dark(#1a1a1a, #e8e8e8));\n    background: var(--c2-surface, light-dark(#f5f5f5, #121212));\n    font-family: system-ui, sans-serif;\n  }\n  .cw-network-view__header {\n    flex: 0 0 auto;\n    padding: 0.85rem 1rem 0.65rem;\n  }\n  .cw-network-view__header h1 {\n    margin: 0;\n    font-size: 1.15rem;\n    font-weight: 650;\n  }\n  .cw-network-view__header p {\n    margin: 0.25rem 0 0;\n    opacity: 0.78;\n    font-size: 0.88rem;\n  }\n  .cw-network-body {\n    flex: 1 1 auto;\n    min-block-size: 0;\n    overflow: auto;\n    overscroll-behavior: contain;\n    display: flex;\n    flex-direction: column;\n    gap: 0.75rem;\n    padding: 0 1rem 0.75rem;\n  }\n  .cw-network-status-grid {\n    display: grid;\n    gap: 0.55rem;\n  }\n  .cw-network-status-card {\n    display: grid;\n    gap: 0.35rem;\n    padding: 0.65rem 0.75rem;\n    border-radius: 10px;\n    border: 1px solid light-dark(rgba(0, 0, 0, 0.08), rgba(255, 255, 255, 0.1));\n    background: light-dark(rgba(255, 255, 255, 0.72), rgba(255, 255, 255, 0.04));\n  }\n  .cw-network-status-card[data-state=ok] {\n    border-color: color-mix(in oklab, #2e7d32 55%, transparent);\n  }\n  .cw-network-status-card[data-state=bad] {\n    border-color: color-mix(in oklab, #c62828 55%, transparent);\n  }\n  .cw-network-status-card[data-state=warn] {\n    border-color: color-mix(in oklab, #ef6c00 55%, transparent);\n  }\n  .cw-network-status-card__title {\n    font-size: 0.78rem;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n    opacity: 0.72;\n  }\n  .cw-network-status-card__value {\n    font-size: 1rem;\n    font-weight: 600;\n    word-break: break-word;\n  }\n  .cw-network-status-card__detail {\n    font-size: 0.82rem;\n    opacity: 0.88;\n    word-break: break-word;\n  }\n  .cw-network-actions {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 0.5rem;\n  }\n  .cw-network-actions button {\n    appearance: none;\n    border: 1px solid light-dark(rgba(0, 0, 0, 0.12), rgba(255, 255, 255, 0.14));\n    background: light-dark(#fff, #1e1e1e);\n    color: inherit;\n    border-radius: 999px;\n    padding: 0.45rem 0.85rem;\n    font-size: 0.88rem;\n    cursor: pointer;\n  }\n  .cw-network-actions button:disabled {\n    opacity: 0.55;\n    cursor: wait;\n  }\n  .cw-network-actions--logs button {\n    font-size: 0.8rem;\n  }\n  .cw-network-probes {\n    display: flex;\n    flex-direction: column;\n    gap: 0.45rem;\n    min-block-size: 0;\n  }\n  .cw-network-probes [data-probe-list] {\n    display: flex;\n    flex-direction: column;\n    gap: 0.45rem;\n  }\n  .cw-network-probes h2 {\n    margin: 0;\n    font-size: 0.95rem;\n  }\n  .cw-network-probe-row {\n    display: grid;\n    gap: 0.15rem;\n    padding: 0.55rem 0.65rem;\n    border-radius: 8px;\n    background: light-dark(rgba(0, 0, 0, 0.04), rgba(255, 255, 255, 0.05));\n    font-size: 0.82rem;\n  }\n  .cw-network-probe-row[data-ok=true] {\n    box-shadow: inset 3px 0 0 #2e7d32;\n  }\n  .cw-network-probe-row[data-ok=false] {\n    box-shadow: inset 3px 0 0 #c62828;\n  }\n  .cw-network-probe-row__head {\n    display: flex;\n    justify-content: space-between;\n    gap: 0.5rem;\n    font-weight: 600;\n  }\n  .cw-network-probe-row__error {\n    color: #c62828;\n    word-break: break-word;\n  }\n  .cw-network-log-panel {\n    flex: 0 0 auto;\n    display: flex;\n    flex-direction: column;\n    gap: 0.35rem;\n    min-block-size: 0;\n    max-block-size: min(32vh, 11rem);\n    padding: 0.55rem 1rem 0.85rem;\n    border-block-start: 1px solid light-dark(rgba(0, 0, 0, 0.1), rgba(255, 255, 255, 0.12));\n    background: light-dark(rgba(0, 0, 0, 0.03), rgba(0, 0, 0, 0.22));\n  }\n  .cw-network-log-panel__title {\n    flex: 0 0 auto;\n    margin: 0;\n    font-size: 0.72rem;\n    text-transform: uppercase;\n    letter-spacing: 0.04em;\n    opacity: 0.72;\n  }\n  .cw-network-log {\n    flex: 1 1 auto;\n    margin: 0;\n    padding: 0.55rem 0.65rem;\n    border-radius: 8px;\n    min-block-size: 3.5rem;\n    overflow: auto;\n    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;\n    font-size: 0.75rem;\n    line-height: 1.35;\n    background: light-dark(rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.35));\n    white-space: pre-wrap;\n    word-break: break-word;\n  }\n}", B = () => {
	try {
		let e = globalThis.Capacitor;
		return typeof e?.isNativePlatform == "function" && !!e.isNativePlatform();
	} catch {
		return !1;
	}
}, V = (e) => {
	let t = [`${e.label}: ${e.origin}`];
	return e.ok ? t.push(`OK (${e.latencyMs ?? "?"}ms)`) : e.status && t.push(`FAIL HTTP ${e.status}`), e.error && t.push(e.error), t.join(" — ");
}, H = class {
	root = null;
	sheet = null;
	wsUnsub = null;
	running = !1;
	logLines = [];
	probeSummary = "";
	els = {
		wsCard: null,
		wsValue: null,
		wsDetail: null,
		nativeCard: null,
		nativeValue: null,
		configDetail: null,
		probeList: null,
		log: null,
		testBtn: null,
		reconnectBtn: null
	};
	mount(n) {
		return this.sheet ??= t(z), this.root = e`
            <div class="cw-network-view" data-view="network">
                <header class="cw-network-view__header">
                    <h1>CWSP Network</h1>
                    <p>Connection status, reachability probes, and dispatch errors.</p>
                </header>

                <div class="cw-network-body">
                    <div class="cw-network-status-grid">
                        <section class="cw-network-status-card" data-state="warn" data-ws-card>
                            <div class="cw-network-status-card__title">WebSocket hub</div>
                            <div class="cw-network-status-card__value" data-ws-value>…</div>
                            <div class="cw-network-status-card__detail" data-ws-detail></div>
                        </section>
                        <section class="cw-network-status-card" data-state="warn" data-native-card hidden>
                            <div class="cw-network-status-card__title">Native runtime</div>
                            <div class="cw-network-status-card__value" data-native-value>…</div>
                        </section>
                        <section class="cw-network-status-card">
                            <div class="cw-network-status-card__title">Configuration</div>
                            <div class="cw-network-status-card__detail" data-config-detail>Loading…</div>
                        </section>
                    </div>

                    <div class="cw-network-actions">
                        <button type="button" data-action="test">Run network test</button>
                        <button type="button" data-action="reconnect">Reconnect WS</button>
                        <button type="button" data-action="open-settings">Settings</button>
                    </div>

                    <div class="cw-network-actions cw-network-actions--logs">
                        <button type="button" data-action="copy-frontend-log">Copy Frontend Log</button>
                        <button type="button" data-action="copy-logcat">Copy Logcat</button>
                        <button type="button" data-action="save-page-logs">Save page logs</button>
                    </div>

                    <section class="cw-network-probes">
                        <h2>Probe results</h2>
                        <div data-probe-list></div>
                    </section>
                </div>

                <section class="cw-network-log-panel">
                    <h2 class="cw-network-log-panel__title">Activity log</h2>
                    <pre class="cw-network-log" data-log aria-live="polite"></pre>
                </section>
            </div>
        `, this.els.wsCard = this.root.querySelector("[data-ws-card]"), this.els.wsValue = this.root.querySelector("[data-ws-value]"), this.els.wsDetail = this.root.querySelector("[data-ws-detail]"), this.els.nativeCard = this.root.querySelector("[data-native-card]"), this.els.nativeValue = this.root.querySelector("[data-native-value]"), this.els.configDetail = this.root.querySelector("[data-config-detail]"), this.els.probeList = this.root.querySelector("[data-probe-list]"), this.els.log = this.root.querySelector("[data-log]"), this.els.testBtn = this.root.querySelector("[data-action=\"test\"]"), this.els.reconnectBtn = this.root.querySelector("[data-action=\"reconnect\"]"), this.els.testBtn?.addEventListener("click", () => void this.runFullTest()), this.els.reconnectBtn?.addEventListener("click", () => void this.reconnectWs()), this.root.querySelector("[data-action=\"open-settings\"]")?.addEventListener("click", () => {
			globalThis.dispatchEvent(new CustomEvent("cw:view-open-request", { detail: {
				viewId: "settings",
				target: "minimal"
			} }));
		}), this.root.querySelector("[data-action=\"copy-frontend-log\"]")?.addEventListener("click", () => {
			this.copyFrontendLog();
		}), this.root.querySelector("[data-action=\"copy-logcat\"]")?.addEventListener("click", () => {
			this.copyLogcat();
		}), this.root.querySelector("[data-action=\"save-page-logs\"]")?.addEventListener("click", () => {
			this.savePageLogs();
		}), n.replaceChildren(this.root), this.bootstrap(), this.root;
	}
	unmount() {
		this.wsUnsub?.(), this.wsUnsub = null, this.root?.remove(), this.root = null;
	}
	appendLog(e) {
		let t = (/* @__PURE__ */ new Date()).toLocaleTimeString();
		this.logLines.unshift(`[${t}] ${e}`), this.logLines = this.logLines.slice(0, 40), this.els.log && (this.els.log.textContent = this.logLines.join("\n"));
	}
	setWsUi(e, t) {
		if (!(!this.els.wsCard || !this.els.wsValue)) {
			if (B() && s()) {
				this.els.wsCard.dataset.state = "warn", this.els.wsValue.textContent = "Native Java WebSocket", this.els.wsDetail && (this.els.wsDetail.textContent = t || "CwspRuntime holds `/ws` in the Android service — WebView hub socket is not used.");
				return;
			}
			this.els.wsCard.dataset.state = e ? "ok" : "bad", this.els.wsValue.textContent = e ? "Connected" : "Disconnected", this.els.wsDetail && (this.els.wsDetail.textContent = t || "");
		}
	}
	renderConfig(e) {
		if (!this.els.configDetail) return;
		let t = e?.core, n = String(t?.endpointUrl ?? "—"), r = String(t?.ops?.directUrl ?? "—"), i = String(t?.userId ?? "—"), a = String(t?.socket?.routeTarget ?? "*");
		this.els.configDetail.textContent = [
			`Relay: ${n}`,
			`Direct: ${r}`,
			`Client: ${i}`,
			`Route: ${a}`
		].join("\n");
	}
	renderProbes(t) {
		if (!this.els.probeList) return;
		this.els.probeList.replaceChildren();
		let n = [...t.probes];
		if (t.dispatch) {
			let e = t.dispatch;
			n.push({
				label: "Dispatch /api/network/dispatch",
				origin: e.origin,
				ok: e.ok,
				status: e.status,
				statusText: e.statusText,
				error: e.error || (e.bodySnippet ? e.bodySnippet.slice(0, 120) : void 0),
				latencyMs: e.latencyMs
			});
		}
		if (!n.length) {
			let e = document.createElement("p");
			e.textContent = "No probes yet — tap Run network test.", e.style.opacity = "0.75", e.style.fontSize = "0.85rem", this.els.probeList.append(e);
			return;
		}
		for (let t of n) {
			let n = e`
                <div class="cw-network-probe-row" data-ok="${t.ok ? "true" : "false"}">
                    <div class="cw-network-probe-row__head">
                        <span>${t.label}</span>
                        <span>${t.ok ? "OK" : "FAIL"}${t.latencyMs == null ? "" : ` · ${t.latencyMs}ms`}</span>
                    </div>
                    <div>${t.origin}</div>
                    ${t.error ? `<div class="cw-network-probe-row__error">${t.error}</div>` : ""}
                </div>
            `;
			this.els.probeList.append(n);
		}
	}
	async bootstrap() {
		if (b(), n(null), this.wsUnsub = o((e) => {
			this.setWsUi(e);
		}), this.setWsUi(i()), B()) {
			this.els.nativeCard?.removeAttribute("hidden");
			try {
				let e = await _.getShellInfo();
				this.els.nativeValue && (this.els.nativeValue.textContent = e.native ? `Capacitor · ${e.platform ?? "android"}` : "Web fallback"), this.els.nativeCard && (this.els.nativeCard.dataset.state = e.native ? "ok" : "warn");
			} catch (e) {
				this.els.nativeValue && (this.els.nativeValue.textContent = "Bridge unavailable"), this.appendLog(String(e instanceof Error ? e.message : e));
			}
		}
		let e = await v().catch(() => null);
		this.renderConfig(e), this.appendLog("Ready — tap Run network test for full probe.");
	}
	async reconnectWs() {
		if (B() && s()) {
			this.appendLog("Native WebSocket — reconnect via Android CWSP service / Settings save.");
			return;
		}
		this.appendLog("Reconnecting WebSocket…"), r(), a();
	}
	async runFullTest() {
		if (!this.running) {
			this.running = !0, this.els.testBtn && (this.els.testBtn.disabled = !0);
			try {
				let e = await v().catch(() => null);
				this.renderConfig(e);
				let t = e?.core, n = String(t?.endpointUrl ?? ""), r = String(t?.ops?.directUrl ?? ""), o = String(t?.userId ?? ""), l = String(t?.userKey ?? ""), u = String(t?.socket?.accessToken ?? "");
				this.appendLog("Running /lna-probe on relay, direct, and fallback hosts…");
				let d = await O({
					relay: n,
					direct: r
				});
				B() && d.length && d[0]?.label.startsWith("Relay") && this.appendLog("Probes via native Java bridge (network:probe).");
				for (let e of d) this.appendLog(V(e));
				let f, p = d.filter((e) => e.ok).length;
				(p || n || r) && (this.appendLog(p ? `Testing dispatch on ${p} reachable host(s)…` : "Testing dispatch on configured hosts (all probes failed)…"), f = await k(d, {
					relay: n,
					direct: r
				}, {
					clientId: o,
					token: l,
					accessToken: u
				}), f.ok ? this.appendLog(`Dispatch OK (${f.latencyMs ?? "?"}ms)`) : this.appendLog(`Dispatch FAIL: ${f.error ?? f.status}${f.bodySnippet ? ` — ${f.bodySnippet.slice(0, 80)}` : ""}`)), this.renderProbes({
					probes: d,
					dispatch: f
				}), this.probeSummary = [...d.map(V), f ? `Dispatch: ${f.ok ? "OK" : "FAIL"} ${f.origin} ${f.error ?? f.status ?? ""}` : ""].filter(Boolean).join("\n"), (!B() || !s()) && !i() && c() && a();
			} catch (e) {
				this.appendLog(String(e instanceof Error ? e.message : e));
			} finally {
				this.running = !1, this.els.testBtn && (this.els.testBtn.disabled = !1);
			}
		}
	}
	pageLogText() {
		return [...this.logLines].reverse().join("\n");
	}
	async copyFrontendLog() {
		try {
			await b().flush?.();
		} catch {}
		let e = await I(M(600));
		this.appendLog(e ? "Frontend log copied to clipboard." : "Copy failed — check clipboard permission.");
	}
	async copyLogcat() {
		this.appendLog("Reading logcat…");
		let e = await I(await N(600));
		this.appendLog(e ? "Logcat copied to clipboard." : "Logcat copy failed.");
	}
	async savePageLogs() {
		this.appendLog("Building page log export…");
		let e = await F(this.pageLogText(), this.probeSummary), t = R("cwsp-network");
		L(t, e), this.appendLog(`Saved ${t}`);
	}
}, U = class {
	id = "network";
	name = "Network";
	icon = "wifi-high";
	options;
	element = null;
	panel = null;
	lifecycle = {
		onMount: () => {
			this.element && (this.panel ??= new H(), this.panel.mount(this.element));
		},
		onUnmount: () => {
			this.panel?.unmount(), this.panel = null, this.element = null;
		},
		onShow: () => {
			!this.panel && this.element && (this.panel = new H(), this.panel.mount(this.element));
		}
	};
	constructor(e = {}) {
		this.options = e;
	}
	render = (e) => (e && (this.options = {
		...this.options,
		...e
	}), this.panel?.unmount(), this.panel = null, this.element = document.createElement("div"), this.element.className = "cw-network-view-host", this.element.dataset.view = "network", this.element);
	getToolbar() {
		return null;
	}
};
function W(e) {
	return new U(e);
}
//#endregion
export { U as NetworkView, W as createNetworkView, W as default };
