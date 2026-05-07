import "./UniformInterop-C0jUw_HW.js";
//#region ../../projects/subsystem/src/routing/channel/ShareTargetGateway.ts
var e = "share-target-data", t = "/share-target-data", n = "/share-target-files", r = "/share-target-file/", i = () => typeof globalThis < "u" && "caches" in globalThis, a = async (a) => {
	if (!i()) return !1;
	let o = Array.isArray(a.files) ? a.files : [], s = a.meta ?? {};
	try {
		let i = await caches.open(e), a = Number(s?.timestamp) || Date.now();
		await i.put(t, new Response(JSON.stringify({
			...s,
			title: s?.title,
			text: s?.text,
			url: s?.url,
			sharedUrl: s?.sharedUrl,
			source: s?.source || "share-target",
			route: s?.route || s?.source || "share-target",
			timestamp: a,
			fileCount: o.length,
			imageCount: o.filter((e) => (e?.type || "").toLowerCase().startsWith("image/")).length
		}), { headers: { "Content-Type": "application/json" } }));
		let c = [];
		for (let e = 0; e < o.length; e++) {
			let t = o[e], n = `${r}${a}-${e}`, s = new Headers();
			s.set("Content-Type", t.type || "application/octet-stream"), s.set("X-File-Name", encodeURIComponent(t.name || `file-${e}`)), s.set("X-File-Size", String(t.size || 0)), s.set("X-File-LastModified", String(t.lastModified ?? 0)), await i.put(n, new Response(t, { headers: s })), c.push({
				key: n,
				name: t.name || `file-${e}`,
				type: t.type || "application/octet-stream",
				size: t.size || 0,
				lastModified: t.lastModified ?? void 0
			});
		}
		return await i.put(n, new Response(JSON.stringify({
			files: c,
			timestamp: a
		}), { headers: { "Content-Type": "application/json" } })), !0;
	} catch (e) {
		return console.warn("[ShareTargetGateway] Failed to store payload to cache:", e), !1;
	}
}, o = async (r = {}) => {
	let a = r.clear !== !1;
	if (!i()) return null;
	try {
		let r = await caches.open(e), i = await r.match(t), o = await r.match(n);
		if (!i && !o) return null;
		let s = i ? await i.json().catch(() => null) : null, c = o ? await o.json().catch(() => null) : null, l = Array.isArray(c?.files) ? c.files : [], u = [];
		for (let e of l) {
			let t = typeof e?.key == "string" ? e.key.trim() : String(e?.key ?? "").trim();
			if (!t) continue;
			let n = await r.match(t);
			if (!n) continue;
			let i = await n.blob();
			u.push(new File([i], e.name || "shared-file", {
				type: e.type || i.type || "application/octet-stream",
				lastModified: Number(e.lastModified) || Date.now()
			}));
		}
		if (a) {
			await r.delete(t).catch(() => {}), await r.delete(n).catch(() => {});
			for (let e of l) e?.key && await r.delete(e.key).catch(() => {});
		}
		return {
			meta: s || {},
			files: u,
			fileMeta: l
		};
	} catch (e) {
		return console.warn("[ShareTargetGateway] Failed to consume cached payload:", e), null;
	}
}, s = (e) => {
	let t = e?.meta || {}, n = Array.isArray(e?.files) ? e.files : [], r = Array.isArray(e?.fileMeta) ? e.fileMeta : [], i = typeof r[0]?.name == "string" && r[0].name.trim().length > 0 ? r[0].name.trim() : void 0, a = t.hint, o = a && typeof a == "object" && !Array.isArray(a) ? { ...a } : {}, s = Object.keys(o).length > 0 ? { ...o } : void 0;
	i && !n.length && (typeof o.filename == "string" && String(o.filename).trim() || (s = {
		...s || o,
		filename: i
	}));
	let c = {
		...t,
		title: typeof t.title == "string" ? t.title : void 0,
		text: typeof t.text == "string" ? t.text : void 0,
		url: typeof t.url == "string" ? t.url : void 0,
		sharedUrl: typeof t.sharedUrl == "string" ? t.sharedUrl : void 0,
		source: typeof t.source == "string" ? t.source : "share-target",
		route: typeof t.route == "string" ? t.route : typeof t.source == "string" ? t.source : "share-target",
		timestamp: Number(t.timestamp || Date.now()),
		files: n,
		fileCount: n.length || Number(t.fileCount || 0),
		imageCount: Number(t.imageCount || n.filter((e) => (e?.type || "").toLowerCase().startsWith("image/")).length)
	};
	return s !== void 0 && (c.hint = s), c;
};
//#endregion
export { o as n, a as r, s as t };
