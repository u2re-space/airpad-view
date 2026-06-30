import { t as e } from "./src-C-qx_Mx3.js";
import { t } from "./jsox-CIxBzsI5.js";
import { l as n } from "./cwsp-endpoint-resolve-DtbuqyNS.js";
import { n as r } from "./SettingsTypes-DAv90T5n.js";
//#region ../../projects/subsystem/src/other/config/Settings.ts
var i = "rs-settings", a = "rs-settings.v1", o = { nativeSynced: null }, s = () => ({ ...o }), c = (e) => typeof e == "string" ? e.trim() : "", l = () => {
	try {
		let e = globalThis.Capacitor;
		return typeof e?.isNativePlatform == "function" && !!e.isNativePlatform();
	} catch {
		return !1;
	}
}, u = {
	core: {
		endpointUrl: "https://192.168.0.200:8434",
		userKey: "n3v3rm1nd",
		allowInsecureTls: !0,
		useCoreIdentityForAirPad: !0,
		ops: { directUrl: "https://192.168.0.110:8434" },
		socket: {
			routeTarget: "L-192.168.0.110",
			accessToken: "n3v3rm1nd",
			allowAccessTokenWithoutUserKey: !0,
			protocol: "auto"
		},
		interop: { preferNativeWebsocket: !0 }
	},
	shell: {
		bridgeDaemonEnabled: !0,
		autoStartOnBoot: !0,
		enableRemoteClipboardBridge: !0,
		acceptInboundClipboardData: !0,
		applyRemoteClipboardToDevice: !0,
		maintainHubSocketConnection: !1
	}
}, d = (e) => {
	if (!l()) return !1;
	let t = c(e.core?.endpointUrl), n = c(e.core?.userId), i = c(e.core?.socket?.accessToken), a = c(r.core?.endpointUrl);
	return !!(!n || !i || !t || t === a || /localhost|127\.0\.0\.1|:6065/i.test(t));
}, f = !1, p = async () => {
	if (!l() || f) return null;
	let e = "";
	try {
		let { getNativeUnifiedSettings: t, isCwsNativeIpcAvailable: n } = await import("./cws-bridge-BGth_SZV.js");
		n() && (e = c((await t())?.core?.userId));
	} catch {}
	let t = await F({ nativeOverlay: !1 }), n = c(t.core?.userId);
	if (!d(t) && !(e && n && e !== n && n === "L-192.168.0.196")) return f = !0, null;
	let r = {
		...t,
		core: {
			...t.core,
			...u.core,
			userId: e || n || "",
			ops: {
				...t.core?.ops || {},
				...u.core?.ops || {}
			},
			socket: {
				...t.core?.socket || {},
				...u.core?.socket || {},
				selfId: e || c(t.core?.socket?.selfId) || ""
			},
			interop: {
				...t.core?.interop || {},
				...u.core?.interop || {}
			}
		},
		shell: {
			...t.shell || {},
			...u.shell || {}
		}
	};
	return console.log("[Settings] seeding Capacitor CWSP defaults"), f = !0, I(r);
}, m = () => {
	try {
		let e = globalThis.localStorage?.getItem?.(a);
		return e ? JSON.parse(e) : null;
	} catch {
		return null;
	}
}, h = (e) => {
	try {
		return globalThis.localStorage?.setItem?.(a, JSON.stringify(e)), !0;
	} catch {
		return !1;
	}
}, g = (e, t) => {
	if (!t || typeof t != "object") return e;
	let n = {}, r = {}, i = !1, a = c(t.core?.endpointUrl);
	a && (r.endpointUrl = a, i = !0);
	let o = c(t.core?.userId);
	o && (r.userId = o, i = !0);
	let s = c(t.core?.userKey);
	s && (r.userKey = s, i = !0);
	let l = c(t.core?.appClientId);
	l && (r.appClientId = l, i = !0);
	let u = {}, d = !1, f = c(t.core?.socket?.routeTarget);
	f && (u.routeTarget = f, d = !0);
	let p = c(t.core?.socket?.accessToken);
	p && (u.accessToken = p, d = !0);
	let m = c(t.core?.socket?.clientAccessToken);
	m && (u.clientAccessToken = m, d = !0), d && (r.socket = u, i = !0);
	let h = {}, g = !1, _ = c(t.shell?.clipboardShareDestinationIds);
	_ && (h.clipboardShareDestinationIds = _, g = !0);
	let v = c(t.shell?.clipboardInboundAllowIds);
	return v && (h.clipboardInboundAllowIds = v, g = !0), g && (n.shell = h, i = !0), i ? (n.core = r, C(e, n)) : e;
}, _ = (e) => e.split("."), v = (e, t) => _(t).reduce((e, t) => e == null ? e : e[t], e), y = (e) => e.replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase(), b = "req-store", x = "settings", S = null, C = (e, t) => !t || typeof t != "object" ? e : {
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
}, w = async () => S ?? null, T = () => {
	try {
		return typeof chrome > "u" || !chrome?.runtime ? !1 : !!(typeof window < "u" && globalThis?.location?.protocol?.startsWith("http"));
	} catch {
		return !1;
	}
}, E = () => typeof chrome < "u" && chrome?.storage?.local;
async function D() {
	if (typeof indexedDB > "u") throw Error("IndexedDB not available");
	if (T()) throw Error("IndexedDB not accessible in content script context");
	return new Promise((e, t) => {
		try {
			let n = indexedDB.open(b, 1);
			n.onupgradeneeded = () => n.result.createObjectStore(x, { keyPath: "key" }), n.onsuccess = () => e(n.result), n.onerror = () => t(n.error);
		} catch (e) {
			t(e);
		}
	});
}
var O = async (e = i) => {
	try {
		if (l()) {
			let e = m();
			if (e != null) return e;
		}
		if (E()) {
			console.log("[Settings] Using chrome.storage.local for get");
			let t = await new Promise((t) => {
				try {
					chrome.storage.local.get([e], (n) => {
						chrome.runtime.lastError ? (console.warn("[Settings] chrome.storage.local.get error:", chrome.runtime.lastError), t(null)) : (console.log("[Settings] chrome.storage.local.get success, has data:", !!n[e]), t(n[e]));
					});
				} catch (e) {
					console.warn("[Settings] chrome.storage access failed:", e), t(null);
				}
			});
			if (t != null) return t;
		}
		if (typeof indexedDB < "u") {
			console.log("[Settings] Using IndexedDB for get");
			let t = await D(), n = await new Promise((n, r) => {
				let i = t.transaction(x, "readonly").objectStore(x).get(e);
				i.onsuccess = () => {
					console.log("[Settings] IndexedDB get success, has data:", !!i.result?.value), n(i.result?.value), t.close();
				}, i.onerror = () => {
					console.warn("[Settings] IndexedDB get error:", i.error), r(i.error), t.close();
				};
			});
			if (n != null) return n;
		} else console.warn("[Settings] IndexedDB not available");
	} catch (e) {
		console.warn("[Settings] Settings storage access failed:", e);
	}
	let t = m();
	return t == null ? null : (console.log("[Settings] Using localStorage mirror fallback for get"), t);
}, k = async (e, t = i) => {
	let n = !1, r = !1;
	if (E()) {
		await new Promise((n, r) => {
			try {
				chrome.storage.local.set({ [t]: e }, () => {
					chrome.runtime.lastError ? r(chrome.runtime.lastError) : n();
				});
			} catch (e) {
				r(e);
			}
		});
		return;
	}
	r = h(e);
	try {
		if (typeof indexedDB > "u") {
			if (!r && l()) throw Error("Settings storage unavailable (no IndexedDB or localStorage)");
			return;
		}
		let i = await D();
		await new Promise((r, a) => {
			let o = i.transaction(x, "readwrite");
			o.objectStore(x).put({
				key: t,
				value: e
			}), o.oncomplete = () => {
				n = !0, r(), i.close();
			}, o.onerror = () => {
				a(o.error), i.close();
			};
		});
	} catch (e) {
		if (console.warn("[Settings] IndexedDB write failed:", e), !r && l()) throw Error("Settings could not be saved (IndexedDB and localStorage failed)");
	}
	!n && r && console.log("[Settings] persisted to localStorage mirror (IndexedDB skipped or failed)");
}, A = (e) => {
	let t = (e || "").trim();
	if (!t) return "";
	try {
		let e = /^[a-z][a-z0-9+.-]*:\/\//i.test(t) ? t : `http://${t}`, n = new URL(e);
		return `${n.protocol}//${n.host}`.toLowerCase();
	} catch {
		return t.toLowerCase();
	}
}, j = (e) => {
	let t = e.core;
	if (!t) return e;
	let r = (e) => e?.map((e) => n(e)), i = t.network?.listenPortHttps === 8443 || t.network?.listenPortHttps === 8343 ? 8434 : t.network?.listenPortHttps;
	return {
		...e,
		core: {
			...t,
			endpointUrl: n(t.endpointUrl ?? ""),
			ops: t.ops ? {
				...t.ops,
				directUrl: n(t.ops.directUrl ?? ""),
				httpTargets: r(t.ops.httpTargets),
				wsTargets: r(t.ops.wsTargets),
				syncTargets: r(t.ops.syncTargets)
			} : t.ops,
			admin: t.admin ? {
				...t.admin,
				httpsOrigin: n(t.admin.httpsOrigin ?? "")
			} : t.admin,
			network: t.network ? {
				...t.network,
				listenPortHttps: i,
				destinations: r(t.network.destinations)
			} : t.network
		}
	};
}, M = async () => {
	try {
		let e = await O(), n = typeof e == "string" ? t.parse(e) : e;
		if (!n || typeof n != "object") return !1;
		let r = n.shell;
		return typeof r == "object" && !!r && Object.prototype.hasOwnProperty.call(r, "maintainHubSocketConnection");
	} catch {
		return !1;
	}
}, N = () => {
	try {
		let e = globalThis.chrome?.runtime?.id;
		return typeof e == "string" && e.length > 0;
	} catch {
		return !1;
	}
}, P = async (e) => {
	if (!N() || await M()) return !1;
	let t = A(r.core?.endpointUrl || ""), n = A(e.core?.endpointUrl || "");
	return !!t && n === t;
}, F = async (e) => {
	try {
		let n = await O();
		n ??= m();
		let i = typeof n == "string" ? t.parse(n) : n;
		if (console.log("[Settings] loadSettings - raw type:", typeof n, "stored type:", typeof i), i && typeof i == "object") {
			let t = {
				core: {
					...r.core,
					...i?.core,
					network: {
						...r.core?.network || {},
						...i?.core?.network || {}
					},
					socket: {
						...r.core?.socket || {},
						...i?.core?.socket || {}
					},
					interop: {
						...r.core?.interop || {},
						...i?.core?.interop || {}
					},
					ops: {
						...r.core?.ops || {},
						...i?.core?.ops || {}
					},
					admin: {
						...r.core?.admin || {},
						...i?.core?.admin || {}
					}
				},
				ai: {
					...r.ai,
					...i?.ai,
					mcp: i?.ai?.mcp || [],
					customInstructions: i?.ai?.customInstructions || [],
					activeInstructionId: i?.ai?.activeInstructionId || ""
				},
				webdav: {
					...r.webdav,
					...i?.webdav
				},
				timeline: {
					...r.timeline,
					...i?.timeline
				},
				appearance: {
					...r.appearance,
					...i?.appearance,
					markdown: {
						...r.appearance?.markdown || {},
						...i?.appearance?.markdown || {},
						page: {
							...r.appearance?.markdown?.page || {},
							...i?.appearance?.markdown?.page || {}
						},
						modules: {
							...r.appearance?.markdown?.modules || {},
							...i?.appearance?.markdown?.modules || {}
						},
						plugins: {
							...r.appearance?.markdown?.plugins || {},
							...i?.appearance?.markdown?.plugins || {}
						}
					}
				},
				speech: {
					...r.speech,
					...i?.speech
				},
				grid: {
					...r.grid,
					...i?.grid
				},
				shell: {
					...r.shell || {},
					...i?.shell || {}
				}
			};
			try {
				if (e?.nativeOverlay !== !1 && !l()) {
					let { getNativeUnifiedSettings: e, isCwsNativeIpcAvailable: n } = await import("./cws-bridge-BGth_SZV.js");
					if (n()) {
						let n = await e();
						n && typeof n == "object" && (t = g(t, n));
					}
				}
			} catch {}
			return console.log("[Settings] loadSettings result:", {
				hasApiKey: !!t.ai?.apiKey,
				instructionCount: t.ai?.customInstructions?.length || 0,
				activeInstructionId: t.ai?.activeInstructionId || "(none)"
			}), j(t);
		}
		console.log("[Settings] loadSettings - no stored data, returning defaults");
	} catch (e) {
		console.warn("[Settings] loadSettings error:", e);
	}
	return t.parse(t.stringify(r));
}, I = async (e) => {
	let t = await F({ nativeOverlay: !1 }), n = () => e.ai?.mcp === void 0 ? t.ai?.mcp === void 0 ? [] : t.ai.mcp : e.ai.mcp, i = () => e.ai?.customInstructions === void 0 ? t.ai?.customInstructions === void 0 ? [] : t.ai.customInstructions : e.ai.customInstructions, a = () => Object.prototype.hasOwnProperty.call(e.ai || {}, "activeInstructionId") ? e.ai?.activeInstructionId ?? "" : t.ai?.activeInstructionId === void 0 ? "" : t.ai.activeInstructionId, s = {
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
	await k(s), o = { nativeSynced: null };
	try {
		let { initCwsNativeBridge: e, patchNativeUnifiedSettingsDetailed: t, isCwsNativeIpcAvailable: n } = await import("./cws-bridge-BGth_SZV.js");
		if (n()) {
			await e().catch(() => null);
			let n = await t(s);
			o = {
				nativeSynced: n.ok,
				nativeError: n.error
			}, n.ok || console.warn("[Settings] native settings patch did not confirm ok:", n.error);
		}
	} catch (e) {
		o = {
			nativeSynced: !1,
			nativeError: String(e instanceof Error ? e.message : e)
		}, console.warn("[Settings] native settings patch failed:", e);
	}
	try {
		let { applyAirpadRuntimeFromAppSettings: e, syncAirpadRemoteConfigFromAppSettings: t } = await import("./config-CSDn2Ft9.js");
		e(s), t(s, { persist: !0 });
	} catch (e) {
		console.warn("[Settings] AirPad runtime sync failed:", e);
	}
	return q(s)?.catch?.(console.warn.bind(console)), s;
}, L = (e, t, n = !1) => {
	let r = (e || "/").replace(/\/+$/g, "") || "/", i = (t || "").replace(/^\/+/g, ""), a = r === "/" ? `/${i}` : `${r}/${i}`;
	return n && (a = a.replace(/\/?$/g, "/")), a.replace(/\/{2,}/g, "/");
}, R = (e) => e?.kind === "directory", z = (e) => {
	let t = new Date(e).getTime();
	return Number.isFinite(t) ? t : 0;
}, B = null, V = () => (B ||= import("./src-BOVkPDgs.js").then((e) => ({
	getDirectoryHandle: e.getDirectoryHandle,
	readFile: e.readFile
})), B), H = async (t, n = "/", r = {}, i = null) => {
	let { getDirectoryHandle: a, readFile: o } = await V(), s = await t?.getDirectoryContents?.(n || "/")?.catch?.((e) => (console.warn(e), []));
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
		let a = n?.type === "directory", s = a ? L(n.filename, "", !0) : n.filename;
		if (a) return H(t, s, r, i);
		if (n?.type === "file") {
			let r = z((await o(i, s).catch(() => null))?.lastModified);
			if (z(n?.lastmod) > r) {
				let r = await t.getFileContents(s).catch((e) => (console.warn(e), null));
				if (!r || r.byteLength === 0) return;
				let a = n?.mime || "application/octet-stream";
				return e(i, s, new File([r], n.basename, { type: a }));
			}
		}
	}));
}, U = async (e, t = null, n = "/", r = {}) => {
	let { getDirectoryHandle: i } = await V(), a = t ?? await i(null, n, { create: !0 })?.catch?.(console.warn.bind(console)), o = await Array.fromAsync(a?.entries?.() ?? []);
	if (n != "/" && r.pruneRemote && o?.length >= 0) {
		let t = await e.getDirectoryContents(n || "/").catch((e) => (console.warn(e), [])), r = new Set(o.map(([e]) => e.toLowerCase())), i = [...t.filter((e) => {
			let t = (e?.basename || "").toLowerCase();
			return t && !r.has(t);
		}).filter((e) => e.type !== "directory")];
		for (let t of i) {
			let r = t.filename || L(n, t.basename, t.type === "directory");
			try {
				await e.deleteFile(r);
			} catch (e) {
				console.warn("delete failed:", r, e);
			}
		}
	}
	await Promise.all(o.map(async ([t, i]) => {
		let a = R(i), o = L(n, t, a);
		if (a) {
			let a = L(n, t, !1);
			return await e.exists(a).catch((e) => !1) || await e.createDirectory(a, { recursive: !0 }).catch(console.warn), U(e, i, o, r);
		}
		let s = await i.getFile();
		if (!s || s.size === 0) return;
		let c = L(n, t, !1), l = await e.stat(c).catch(() => null), u = z(l?.lastmod), d = z(s.lastModified);
		(!l || d > u) && await e.putFileContents(c, await s.arrayBuffer(), { overwrite: !0 }).catch((e) => null);
	}));
}, W = (e) => {
	let t = new URL(e);
	return t.protocol + t.hostname + ":" + t.port;
}, G = async (e, t = {}) => {
	if (console.log("[Settings] WebDavSync", e, t), !e) return null;
	let n = await w();
	if (!n) return null;
	let r = n(W(e), t);
	return {
		status: K?.sync?.getDAVCompliance?.()?.catch?.(console.warn.bind(console)) ?? null,
		client: r,
		upload(e = !1) {
			if (this.status != null) return U(r, null, "/", { pruneRemote: e })?.catch?.((e) => (console.warn(e), []));
		},
		download(e = !1) {
			if (this.status != null) return H(r, "/", { pruneLocal: e })?.catch?.((e) => (console.warn(e), []));
		}
	};
}, K = { sync: null };
T() || (async () => {
	try {
		let e = await F();
		if (e?.core?.mode === "endpoint" && e?.core?.preferBackendSync || !e?.webdav?.url) return;
		K.sync = await G(e.webdav.url, {
			withCredentials: !0,
			username: e.webdav.username,
			password: e.webdav.password,
			token: e.webdav.token
		}) ?? K.sync, await K?.sync?.upload?.(!0), await K?.sync?.download?.(!0);
	} catch {}
})();
var q = async (e) => {
	if (e ||= await F(), e?.core?.mode === "endpoint" && e?.core?.preferBackendSync) {
		K.sync = null;
		return;
	}
	e?.webdav?.url && (K.sync = await G(e.webdav.url, {
		withCredentials: !0,
		username: e.webdav.username,
		password: e.webdav.password,
		token: e.webdav.token
	}) ?? K.sync, await K?.sync?.upload?.(), await K?.sync?.download?.(!0));
};
if (!T()) {
	try {
		typeof window < "u" && typeof addEventListener == "function" && (addEventListener("pagehide", () => {
			K?.sync?.upload?.()?.catch?.(() => {});
		}), addEventListener("beforeunload", () => {
			K?.sync?.upload?.()?.catch?.(() => {});
		}));
	} catch {}
	(async () => {
		try {
			for (;;) await K?.sync?.upload?.()?.catch?.(() => {}), await new Promise((e) => setTimeout(e, 3e3));
		} catch {}
	})();
}
//#endregion
export { y as _, G as a, p as c, O as d, k as f, P as g, I as h, x as i, v as l, A as m, i as n, K as o, F as p, a as r, M as s, b as t, s as u, _ as v, q as y };
