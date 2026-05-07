import { n as e } from "./src-DNKfArm8.js";
import { t } from "./src-BoL7goZG.js";
import { t as n } from "./jsox-D0iVxCRU.js";
import { n as r } from "./SettingsTypes-BMR8vm8-.js";
//#region ../../projects/subsystem/src/other/config/Settings.ts
var i = /* @__PURE__ */ e({
	DB_NAME: () => o,
	SETTINGS_KEY: () => a,
	STORE: () => s,
	WebDavSync: () => A,
	currentWebDav: () => j,
	default: () => A,
	didPersistShellMaintainHubSocket: () => _,
	idbGetSettings: () => m,
	idbPutSettings: () => h,
	loadSettings: () => b,
	normalizeCoreEndpointOrigin: () => g,
	saveSettings: () => x,
	shouldDeferCrxHubSocketBootstrap: () => y,
	updateWebDavSettings: () => M
}), a = "rs-settings", o = "req-store", s = "settings", c = null, l = (e, t) => !t || typeof t != "object" ? e : {
	...e,
	...t,
	core: {
		...e.core || {},
		...t.core || {},
		network: {
			...e.core?.network || {},
			...t.core?.network || {}
		},
		socket: {
			...e.core?.socket || {},
			...t.core?.socket || {}
		},
		interop: {
			...e.core?.interop || {},
			...t.core?.interop || {}
		},
		ops: {
			...e.core?.ops || {},
			...t.core?.ops || {}
		},
		admin: {
			...e.core?.admin || {},
			...t.core?.admin || {}
		}
	},
	ai: {
		...e.ai || {},
		...t.ai || {},
		mcp: t.ai?.mcp ?? e.ai?.mcp ?? [],
		customInstructions: t.ai?.customInstructions ?? e.ai?.customInstructions ?? [],
		activeInstructionId: t.ai?.activeInstructionId ?? e.ai?.activeInstructionId ?? ""
	},
	webdav: {
		...e.webdav || {},
		...t.webdav || {}
	},
	timeline: {
		...e.timeline || {},
		...t.timeline || {}
	},
	appearance: {
		...e.appearance || {},
		...t.appearance || {},
		markdown: {
			...e.appearance?.markdown || {},
			...t.appearance?.markdown || {},
			page: {
				...e.appearance?.markdown?.page || {},
				...t.appearance?.markdown?.page || {}
			},
			modules: {
				...e.appearance?.markdown?.modules || {},
				...t.appearance?.markdown?.modules || {}
			},
			plugins: {
				...e.appearance?.markdown?.plugins || {},
				...t.appearance?.markdown?.plugins || {}
			}
		}
	},
	speech: {
		...e.speech || {},
		...t.speech || {}
	},
	grid: {
		...e.grid || {},
		...t.grid || {}
	},
	shell: {
		...e.shell || {},
		...t.shell || {}
	}
}, u = async () => c ?? null, d = () => {
	try {
		return typeof chrome > "u" || !chrome?.runtime ? !1 : !!(typeof window < "u" && globalThis?.location?.protocol?.startsWith("http"));
	} catch {
		return !1;
	}
}, f = () => typeof chrome < "u" && chrome?.storage?.local;
async function p() {
	if (typeof indexedDB > "u") throw Error("IndexedDB not available");
	if (d()) throw Error("IndexedDB not accessible in content script context");
	return new Promise((e, t) => {
		try {
			let n = indexedDB.open(o, 1);
			n.onupgradeneeded = () => n.result.createObjectStore(s, { keyPath: "key" }), n.onsuccess = () => e(n.result), n.onerror = () => t(n.error);
		} catch (e) {
			t(e);
		}
	});
}
var m = async (e = a) => {
	try {
		if (f()) return console.log("[Settings] Using chrome.storage.local for get"), new Promise((t) => {
			try {
				chrome.storage.local.get([e], (n) => {
					chrome.runtime.lastError ? (console.warn("[Settings] chrome.storage.local.get error:", chrome.runtime.lastError), t(null)) : (console.log("[Settings] chrome.storage.local.get success, has data:", !!n[e]), t(n[e]));
				});
			} catch (e) {
				console.warn("[Settings] chrome.storage access failed:", e), t(null);
			}
		});
		if (typeof indexedDB > "u") return console.warn("[Settings] IndexedDB not available"), null;
		console.log("[Settings] Using IndexedDB for get");
		let t = await p();
		return new Promise((n, r) => {
			let i = t.transaction(s, "readonly").objectStore(s).get(e);
			i.onsuccess = () => {
				console.log("[Settings] IndexedDB get success, has data:", !!i.result?.value), n(i.result?.value), t.close();
			}, i.onerror = () => {
				console.warn("[Settings] IndexedDB get error:", i.error), r(i.error), t.close();
			};
		});
	} catch (e) {
		return console.warn("[Settings] Settings storage access failed:", e), null;
	}
}, h = async (e, t = a) => {
	try {
		if (f()) return new Promise((n, r) => {
			try {
				chrome.storage.local.set({ [t]: e }, () => {
					chrome.runtime.lastError ? r(chrome.runtime.lastError) : n();
				});
			} catch (e) {
				console.warn("chrome.storage write failed:", e), r(e);
			}
		});
		if (typeof indexedDB > "u") {
			console.warn("IndexedDB not available");
			return;
		}
		let n = await p();
		return new Promise((r, i) => {
			let a = n.transaction(s, "readwrite");
			a.objectStore(s).put({
				key: t,
				value: e
			}), a.oncomplete = () => {
				r(void 0), n.close();
			}, a.onerror = () => {
				i(a.error), n.close();
			};
		});
	} catch (e) {
		console.warn("Settings storage write failed:", e);
	}
}, g = (e) => {
	let t = (e || "").trim();
	if (!t) return "";
	try {
		let e = /^[a-z][a-z0-9+.-]*:\/\//i.test(t) ? t : `http://${t}`, n = new URL(e);
		return `${n.protocol}//${n.host}`.toLowerCase();
	} catch {
		return t.toLowerCase();
	}
}, _ = async () => {
	try {
		let e = await m(), t = typeof e == "string" ? n.parse(e) : e;
		if (!t || typeof t != "object") return !1;
		let r = t.shell;
		return typeof r == "object" && !!r && Object.prototype.hasOwnProperty.call(r, "maintainHubSocketConnection");
	} catch {
		return !1;
	}
}, v = () => {
	try {
		let e = globalThis.chrome?.runtime?.id;
		return typeof e == "string" && e.length > 0;
	} catch {
		return !1;
	}
}, y = async (e) => {
	if (!v() || await _()) return !1;
	let t = g(r.core?.endpointUrl || ""), n = g(e.core?.endpointUrl || "");
	return !!t && n === t;
}, b = async () => {
	try {
		let e = await m(), t = typeof e == "string" ? n.parse(e) : e;
		if (console.log("[Settings] loadSettings - raw type:", typeof e, "stored type:", typeof t), t && typeof t == "object") {
			let e = {
				core: {
					...r.core,
					...t?.core,
					network: {
						...r.core?.network || {},
						...t?.core?.network || {}
					},
					socket: {
						...r.core?.socket || {},
						...t?.core?.socket || {}
					},
					interop: {
						...r.core?.interop || {},
						...t?.core?.interop || {}
					},
					ops: {
						...r.core?.ops || {},
						...t?.core?.ops || {}
					},
					admin: {
						...r.core?.admin || {},
						...t?.core?.admin || {}
					}
				},
				ai: {
					...r.ai,
					...t?.ai,
					mcp: t?.ai?.mcp || [],
					customInstructions: t?.ai?.customInstructions || [],
					activeInstructionId: t?.ai?.activeInstructionId || ""
				},
				webdav: {
					...r.webdav,
					...t?.webdav
				},
				timeline: {
					...r.timeline,
					...t?.timeline
				},
				appearance: {
					...r.appearance,
					...t?.appearance,
					markdown: {
						...r.appearance?.markdown || {},
						...t?.appearance?.markdown || {},
						page: {
							...r.appearance?.markdown?.page || {},
							...t?.appearance?.markdown?.page || {}
						},
						modules: {
							...r.appearance?.markdown?.modules || {},
							...t?.appearance?.markdown?.modules || {}
						},
						plugins: {
							...r.appearance?.markdown?.plugins || {},
							...t?.appearance?.markdown?.plugins || {}
						}
					}
				},
				speech: {
					...r.speech,
					...t?.speech
				},
				grid: {
					...r.grid,
					...t?.grid
				},
				shell: {
					...r.shell || {},
					...t?.shell || {}
				}
			};
			try {
				let { getNativeUnifiedSettings: t, isCwsNativeIpcAvailable: n } = await import("./cws-bridge-BnvQqqE6.js");
				if (n()) {
					let n = await t();
					n && typeof n == "object" && (e = l(e, n));
				}
			} catch {}
			return console.log("[Settings] loadSettings result:", {
				hasApiKey: !!e.ai?.apiKey,
				instructionCount: e.ai?.customInstructions?.length || 0,
				activeInstructionId: e.ai?.activeInstructionId || "(none)"
			}), e;
		}
		console.log("[Settings] loadSettings - no stored data, returning defaults");
	} catch (e) {
		console.warn("[Settings] loadSettings error:", e);
	}
	return n.parse(n.stringify(r));
}, x = async (e) => {
	let t = await b(), n = () => e.ai?.mcp === void 0 ? t.ai?.mcp === void 0 ? [] : t.ai.mcp : e.ai.mcp, i = () => e.ai?.customInstructions === void 0 ? t.ai?.customInstructions === void 0 ? [] : t.ai.customInstructions : e.ai.customInstructions, a = () => Object.prototype.hasOwnProperty.call(e.ai || {}, "activeInstructionId") ? e.ai?.activeInstructionId ?? "" : t.ai?.activeInstructionId === void 0 ? "" : t.ai.activeInstructionId, o = {
		core: {
			...r.core || {},
			...t.core || {},
			...e.core || {},
			network: {
				...r.core?.network || {},
				...t.core?.network || {},
				...e.core?.network || {}
			},
			socket: {
				...r.core?.socket || {},
				...t.core?.socket || {},
				...e.core?.socket || {}
			},
			interop: {
				...r.core?.interop || {},
				...t.core?.interop || {},
				...e.core?.interop || {}
			},
			ops: {
				...r.core?.ops || {},
				...t.core?.ops || {},
				...e.core?.ops || {}
			},
			admin: {
				...r.core?.admin || {},
				...t.core?.admin || {},
				...e.core?.admin || {}
			}
		},
		ai: {
			...r.ai || {},
			...t.ai || {},
			...e.ai || {},
			mcp: n(),
			customInstructions: i(),
			activeInstructionId: a()
		},
		webdav: {
			...r.webdav || {},
			...t.webdav || {},
			...e.webdav || {}
		},
		timeline: {
			...r.timeline || {},
			...t.timeline || {},
			...e.timeline || {}
		},
		appearance: {
			...r.appearance || {},
			...t.appearance || {},
			...e.appearance || {},
			markdown: {
				...r.appearance?.markdown || {},
				...t.appearance?.markdown || {},
				...e.appearance?.markdown || {},
				page: {
					...r.appearance?.markdown?.page || {},
					...t.appearance?.markdown?.page || {},
					...e.appearance?.markdown?.page || {}
				},
				modules: {
					...r.appearance?.markdown?.modules || {},
					...t.appearance?.markdown?.modules || {},
					...e.appearance?.markdown?.modules || {}
				},
				plugins: {
					...r.appearance?.markdown?.plugins || {},
					...t.appearance?.markdown?.plugins || {},
					...e.appearance?.markdown?.plugins || {}
				}
			}
		},
		speech: {
			...r.speech || {},
			...t.speech || {},
			...e.speech || {}
		},
		grid: {
			...r.grid || {},
			...t.grid || {},
			...e.grid || {}
		},
		shell: {
			...r.shell || {},
			...t.shell || {},
			...e.shell || {}
		}
	};
	await h(o);
	try {
		let { patchNativeUnifiedSettings: e, isCwsNativeIpcAvailable: t } = await import("./cws-bridge-BnvQqqE6.js");
		t() && e(o);
	} catch {}
	return M(o)?.catch?.(console.warn.bind(console)), o;
}, S = (e, t, n = !1) => {
	let r = (e || "/").replace(/\/+$/g, "") || "/", i = (t || "").replace(/^\/+/g, ""), a = r === "/" ? `/${i}` : `${r}/${i}`;
	return n && (a = a.replace(/\/?$/g, "/")), a.replace(/\/{2,}/g, "/");
}, C = (e) => e?.kind === "directory", w = (e) => {
	let t = new Date(e).getTime();
	return Number.isFinite(t) ? t : 0;
}, T = null, E = () => (T ||= import("./src-Ce6CttgD.js").then((e) => ({
	getDirectoryHandle: e.getDirectoryHandle,
	readFile: e.readFile
})), T), D = async (e, n = "/", r = {}, i = null) => {
	let { getDirectoryHandle: a, readFile: o } = await E(), s = await e?.getDirectoryContents?.(n || "/")?.catch?.((e) => (console.warn(e), []));
	if (r.pruneLocal && s?.length > 0) try {
		let e = await a(i, n)?.catch?.(() => null);
		if (e?.entries) {
			let t = await Array.fromAsync(e.entries()), n = new Set(s?.map?.((e) => e?.basename).filter(Boolean));
			await Promise.all(t.filter(([e]) => !n.has(e)).map(([t]) => e.removeEntry(t, { recursive: !0 })?.catch?.(console.warn.bind(console))));
		}
	} catch (e) {
		console.warn(e);
	}
	return Promise.all(s.map(async (n) => {
		let a = n?.type === "directory", s = a ? S(n.filename, "", !0) : n.filename;
		if (a) return D(e, s, r, i);
		if (n?.type === "file") {
			let r = w((await o(i, s).catch(() => null))?.lastModified);
			if (w(n?.lastmod) > r) {
				let r = await e.getFileContents(s).catch((e) => (console.warn(e), null));
				if (!r || r.byteLength === 0) return;
				let a = n?.mime || "application/octet-stream";
				return t(i, s, new File([r], n.basename, { type: a }));
			}
		}
	}));
}, O = async (e, t = null, n = "/", r = {}) => {
	let { getDirectoryHandle: i } = await E(), a = t ?? await i(null, n, { create: !0 })?.catch?.(console.warn.bind(console)), o = await Array.fromAsync(a?.entries?.() ?? []);
	if (n != "/" && r.pruneRemote && o?.length >= 0) {
		let t = await e.getDirectoryContents(n || "/").catch((e) => (console.warn(e), [])), r = new Set(o.map(([e]) => e.toLowerCase())), i = [...t.filter((e) => {
			let t = (e?.basename || "").toLowerCase();
			return t && !r.has(t);
		}).filter((e) => e.type !== "directory")];
		for (let t of i) {
			let r = t.filename || S(n, t.basename, t.type === "directory");
			try {
				await e.deleteFile(r);
			} catch (e) {
				console.warn("delete failed:", r, e);
			}
		}
	}
	await Promise.all(o.map(async ([t, i]) => {
		let a = C(i), o = S(n, t, a);
		if (a) {
			let a = S(n, t, !1);
			return await e.exists(a).catch((e) => !1) || await e.createDirectory(a, { recursive: !0 }).catch(console.warn), O(e, i, o, r);
		}
		let s = await i.getFile();
		if (!s || s.size === 0) return;
		let c = S(n, t, !1), l = await e.stat(c).catch(() => null), u = w(l?.lastmod), d = w(s.lastModified);
		(!l || d > u) && await e.putFileContents(c, await s.arrayBuffer(), { overwrite: !0 }).catch((e) => null);
	}));
}, k = (e) => {
	let t = new URL(e);
	return t.protocol + t.hostname + ":" + t.port;
}, A = async (e, t = {}) => {
	if (console.log("[Settings] WebDavSync", e, t), !e) return null;
	let n = await u();
	if (!n) return null;
	let r = n(k(e), t);
	return {
		status: j?.sync?.getDAVCompliance?.()?.catch?.(console.warn.bind(console)) ?? null,
		client: r,
		upload(e = !1) {
			if (this.status != null) return O(r, null, "/", { pruneRemote: e })?.catch?.((e) => (console.warn(e), []));
		},
		download(e = !1) {
			if (this.status != null) return D(r, "/", { pruneLocal: e })?.catch?.((e) => (console.warn(e), []));
		}
	};
}, j = { sync: null };
d() || (async () => {
	try {
		let e = await b();
		if (e?.core?.mode === "endpoint" && e?.core?.preferBackendSync || !e?.webdav?.url) return;
		j.sync = await A(e.webdav.url, {
			withCredentials: !0,
			username: e.webdav.username,
			password: e.webdav.password,
			token: e.webdav.token
		}) ?? j.sync, await j?.sync?.upload?.(!0), await j?.sync?.download?.(!0);
	} catch {}
})();
var M = async (e) => {
	if (e ||= await b(), e?.core?.mode === "endpoint" && e?.core?.preferBackendSync) {
		j.sync = null;
		return;
	}
	e?.webdav?.url && (j.sync = await A(e.webdav.url, {
		withCredentials: !0,
		username: e.webdav.username,
		password: e.webdav.password,
		token: e.webdav.token
	}) ?? j.sync, await j?.sync?.upload?.(), await j?.sync?.download?.(!0));
};
if (!d()) {
	try {
		typeof window < "u" && typeof addEventListener == "function" && (addEventListener("pagehide", () => {
			j?.sync?.upload?.()?.catch?.(() => {});
		}), addEventListener("beforeunload", () => {
			j?.sync?.upload?.()?.catch?.(() => {});
		}));
	} catch {}
	(async () => {
		try {
			for (;;) await j?.sync?.upload?.()?.catch?.(() => {}), await new Promise((e) => setTimeout(e, 3e3));
		} catch {}
	})();
}
//#endregion
export { y as i, b as n, x as r, i as t };
