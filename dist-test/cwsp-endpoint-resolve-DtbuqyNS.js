//#region ../../projects/cwsp-shared/src/cwsp-endpoint-resolve.ts
var e = [
	8434,
	443,
	9443,
	7443,
	8444,
	8445,
	18443
], t = [
	8080,
	8081,
	8082,
	18080,
	80,
	8888
], n = (e) => typeof e == "string" ? e.trim() : "", r = (e) => /^\d{1,5}$/.test(e), i = (e) => n(e).replace(/^[a-z][a-z0-9+.-]*:\/\//i, "").split("/")[0], a = (e) => {
	let t = n(e);
	return t ? !!(/^[a-z][a-z0-9+.-]*:\/\//i.test(t) || t.startsWith("localhost") || t.includes("/") || /^\[[0-9a-f:]+\](?::\d{1,5})?$/i.test(t) || /^\d{1,3}(?:\.\d{1,3}){3}(?::\d{1,5})?$/.test(t) || /^[^.\s:]+:\d{1,5}$/.test(t) || /^[a-z0-9-]+(?:\.[a-z0-9-]+)+(?::\d{1,5})?$/i.test(t)) : !1;
}, o = (e) => {
	let t = n(e);
	if (!t) return null;
	let a, o = t, s = t.match(/^([a-z][a-z0-9+.-]*):\/\//i);
	if (s) {
		let e = s[1].toLowerCase();
		(e === "http" || e === "https") && (a = e), o = i(t);
	}
	if (o = o.split("/")[0]?.trim() || "", !o) return null;
	let c = o.lastIndexOf(":");
	if (c > 0) {
		let e = o.slice(0, c).trim(), n = o.slice(c + 1).trim();
		if (e && r(n)) return {
			raw: t,
			host: e,
			port: n,
			protocol: a
		};
	}
	return {
		raw: t,
		host: o,
		protocol: a
	};
}, s = (n) => {
	let r = o(n);
	if (!r) return "";
	let { host: i, port: a, protocol: s } = r;
	return i ? a ? `${s || (e.some((e) => String(e) === a) ? "https" : t.some((e) => String(e) === a) ? "http" : "https")}://${i}:${a}/` : s ? `${s}://${i}/` : i : "";
}, c = (e, t, n) => `${e}://${t}:${n}/`, l = ["https://192.168.0.200:8434/", "https://45.147.121.152:8434/"], u = (e) => n(e).split(/[;,]/).map((e) => e.trim()).filter(Boolean), d = (e) => {
	let t = n(e).replace(/\/lna-probe\/?$/i, "").replace(/\/+$/, "");
	if (!t) return "";
	let r = o(t);
	if (!r?.host) return t;
	let i = r.protocol ?? "https";
	return r.port ? `${i}://${r.host}:${r.port}` : `${i}://${r.host}:8434`;
}, f = (e) => {
	let t = n(e);
	return t && t.replace(/(?<![0-9]):8443(?![0-9])/g, ":8434").replace(/(?<![0-9]):8343(?![0-9])/g, ":8434");
}, p = (e) => {
	let t = [], n = (e) => {
		let n = d(e);
		n && !t.includes(n) && t.push(n);
	};
	for (let t of u(e.relay ?? "")) n(t);
	for (let t of u(e.direct ?? "")) n(t);
	if (e.extras?.length) for (let t of e.extras) n(t);
	if (e.fleetFallbacks !== !1) for (let e of l) n(e);
	return t;
}, m = (n, r = {}) => {
	let i = o(n);
	if (!i?.host) return [];
	let a = r.preferHttps !== !1, s = r.includeHttp !== !1, l = r.httpsPorts ?? e, u = r.httpPorts ?? t, d = [], f = (e) => {
		e && !d.includes(e) && d.push(e);
	}, { host: p, port: m, protocol: h } = i;
	if (m) return h === "https" ? (f(c("https", p, m)), d) : h === "http" ? (f(c("http", p, m)), d) : (f(c("https", p, m)), s && f(c("http", p, m)), d);
	if (h === "https") {
		for (let e of l) f(c("https", p, e));
		return d;
	}
	if (h === "http") {
		for (let e of u) f(c("http", p, e));
		return d;
	}
	let g = a ? s ? ["https", "http"] : ["https"] : s ? ["http", "https"] : ["https"];
	for (let e of g) {
		let t = e === "https" ? l : u;
		for (let n of t) f(c(e, p, n));
	}
	return d;
}, h = () => {
	try {
		return typeof globalThis.fetch == "function" ? globalThis.fetch.bind(globalThis) : void 0;
	} catch {
		return;
	}
}, g = 2500, _ = (e) => {
	let t = e instanceof Error ? e.message : String(e ?? "fetch failed");
	return /abort/i.test(t) ? "timeout" : /refused|ECONNREFUSED/i.test(t) ? "connection refused" : /ENOTFOUND|NAME_NOT_RESOLVED/i.test(t) ? "host not found" : /certificate|cert\.|ssl|tls|ERR_CERT/i.test(t) ? `TLS: ${t}` : t;
}, v = async (e, t = {}) => {
	let r = t.fetchFn ?? h(), i = n(e).replace(/\/+$/, ""), a = Date.now();
	if (!r || !i) return {
		origin: i || e,
		ok: !1,
		error: "invalid origin",
		latencyMs: 0
	};
	let o = t.timeoutMs ?? g, s = typeof AbortController < "u" ? new AbortController() : void 0, c = s && o > 0 ? globalThis.setTimeout(() => s.abort(), o) : void 0;
	try {
		let e = await r(`${i}/lna-probe`, {
			method: "GET",
			mode: "cors",
			cache: "no-store",
			credentials: "omit",
			signal: s?.signal
		}), t = Date.now() - a, n = e.status === 204;
		return {
			origin: i,
			ok: n,
			status: e.status,
			statusText: e.statusText,
			latencyMs: t,
			error: n ? void 0 : `HTTP ${e.status}${e.statusText ? ` ${e.statusText}` : ""}`.trim()
		};
	} catch (e) {
		return {
			origin: i,
			ok: !1,
			error: _(e),
			latencyMs: Date.now() - a
		};
	} finally {
		c && clearTimeout(c);
	}
}, y = async (e, t = {}) => {
	let r = t.fetchFn ?? h();
	if (!r) return !1;
	let i = n(e).replace(/\/+$/, "");
	if (!i) return !1;
	let a = t.timeoutMs ?? g, o = typeof AbortController < "u" ? new AbortController() : void 0, s = o && a > 0 ? globalThis.setTimeout(() => o.abort(), a) : void 0;
	try {
		return (await r(`${i}/lna-probe`, {
			method: "GET",
			mode: "cors",
			cache: "no-store",
			credentials: "omit",
			signal: o?.signal
		})).status === 204;
	} catch {
		return !1;
	} finally {
		s && clearTimeout(s);
	}
}, b = (e) => {
	try {
		let t = new URL(e);
		return {
			origin: e,
			protocol: t.protocol === "http:" ? "http" : "https",
			port: t.port || (t.protocol === "http:" ? "80" : "443"),
			host: t.hostname
		};
	} catch {
		return null;
	}
}, x = async (e, t = {}) => {
	let n = o(e);
	if (!n?.host) return null;
	if (n.port) {
		let e = async (e) => {
			let r = c(e, n.host, n.port);
			return await y(r, t) ? b(r) : null;
		};
		if (n.protocol === "https") {
			let t = await e("https");
			if (t) return t;
		} else if (n.protocol === "http") {
			let t = await e("http");
			if (t) return t;
		} else {
			let n = await e("https");
			if (n) return n;
			if (t.includeHttp !== !1) {
				let t = await e("http");
				if (t) return t;
			}
		}
	}
	let r = m(n.host, t), i = t.maxProbeCandidates;
	i != null && i > 0 && r.length > i && (r = r.slice(0, i));
	for (let e of r) {
		if (!await y(e, t)) continue;
		let n = b(e);
		if (n) return n;
	}
	return null;
}, S = (e) => {
	let t = n(e);
	return t ? /^[a-z][a-z0-9+.-]*:\/\//i.test(t) ? !0 : !!o(t)?.port : !1;
}, C = async (e, t = {}) => {
	let r = n(e);
	if (!r) return "";
	if (t.discover !== !1 && !S(r)) {
		let e = await x(r, t);
		if (e?.origin) return e.origin;
	}
	return s(r);
}, w = async (e, t = {}) => {
	let n = {};
	return e.relayHttpsUrl !== void 0 && (n.relayHttpsUrl = await C(e.relayHttpsUrl, t)), e.directHttpsUrl !== void 0 && (n.directHttpsUrl = await C(e.directHttpsUrl, t)), n;
};
//#endregion
export { u as _, p as a, a as c, d, o as f, w as g, C as h, m as i, f as l, v as m, t as n, x as o, y as p, l as r, S as s, e as t, s as u };
