import { Ut as e } from "./src-C-qx_Mx3.js";
import { A as t, B as n, C as r, D as i, E as a, F as o, I as s, L as c, M as l, N as u, O as d, P as f, R as p, S as m, T as h, V as g, _, a as ee, c as v, d as y, f as b, g as x, h as S, j as C, k as te, l as ne, m as re, n as ie, o as ae, p as oe, s as se, u as ce, w as le, y as ue, z as w } from "./websocket-Zbhexn22.js";
import { B as de, H as fe, K as pe, M as me, O as he, P as ge, R as _e, U as ve, a as ye, g as be, i as xe, k as Se, l as Ce, m as we, o as Te, p as Ee, r as De, s as Oe, t as ke, u as Ae, x as je } from "./config-CdEaAxAm.js";
import { p as Me } from "./Settings-BAxgoWK0.js";
import { a as Ne } from "./sw-handling-CZYt8qjv.js";
//#region src/input/keyboard/api.ts
var Pe = null;
function Fe() {
	return "virtualKeyboard" in navigator && navigator.virtualKeyboard ? (Pe = navigator.virtualKeyboard, Pe.overlaysContent = !0, w("VirtualKeyboard API available"), !0) : !1;
}
function Ie() {
	return Pe;
}
function Le() {
	return Pe !== null;
}
//#endregion
//#region src/input/keyboard/state.ts
var Re = !1, ze = null, Be = null, Ve = !1;
function He(e) {
	Re = e;
}
function Ue() {
	return Re;
}
function We(e) {
	ze = e;
}
function Ge() {
	return ze;
}
function Ke(e) {
	Be = e;
}
function qe() {
	return Be;
}
function Je(e) {
	Ve = e;
}
function T() {
	return Ve;
}
"visualViewport" in globalThis && globalThis?.visualViewport?.addEventListener?.("resize", function(e) {
	Re = e.target.height * e.target.scale / globalThis?.screen?.height < .75;
}), "virtualKeyboard" in globalThis?.navigator && (navigator.virtualKeyboard.overlaysContent = !0, navigator.virtualKeyboard.addEventListener("geometrychange", (e) => {
	let { x: t, y: n, width: r, height: i } = e.target.boundingRect;
	Re = i > 0;
}));
//#endregion
//#region src/input/keyboard/constants.ts
var Ye = {
	smileys: [
		"😀",
		"😃",
		"😄",
		"😁",
		"😆",
		"😅",
		"🤣",
		"😂",
		"🙂",
		"🙃",
		"😉",
		"😊",
		"😇",
		"🥰",
		"😍",
		"🤩",
		"😘",
		"😗",
		"😚",
		"😙"
	],
	gestures: [
		"👋",
		"🤚",
		"🖐",
		"✋",
		"🖖",
		"👌",
		"🤌",
		"🤏",
		"✌️",
		"🤞",
		"🤟",
		"🤘",
		"🤙",
		"👈",
		"👉",
		"👆",
		"🖕",
		"👇",
		"☝️",
		"👍"
	],
	symbols: [
		"❤️",
		"🧡",
		"💛",
		"💚",
		"💙",
		"💜",
		"🖤",
		"🤍",
		"🤎",
		"💔",
		"❣️",
		"💕",
		"💞",
		"💓",
		"💗",
		"💖",
		"💘",
		"💝",
		"💟",
		"☮️"
	],
	objects: [
		"⌚",
		"📱",
		"📲",
		"💻",
		"⌨️",
		"🖥️",
		"🖨️",
		"🖱️",
		"🖲️",
		"🕹️",
		"🗜️",
		"💾",
		"💿",
		"📀",
		"📼",
		"📷",
		"📸",
		"📹",
		"🎥",
		"📽️"
	],
	arrows: [
		"⬆️",
		"↗️",
		"➡️",
		"↘️",
		"⬇️",
		"↙️",
		"⬅️",
		"↖️",
		"↕️",
		"↔️",
		"↩️",
		"↪️",
		"⤴️",
		"⤵️",
		"🔃",
		"🔄",
		"🔙",
		"🔚",
		"🔛",
		"🔜"
	]
}, Xe = [
	[
		"1",
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"0"
	],
	[
		"q",
		"w",
		"e",
		"r",
		"t",
		"y",
		"u",
		"i",
		"o",
		"p"
	],
	[
		"a",
		"s",
		"d",
		"f",
		"g",
		"h",
		"j",
		"k",
		"l"
	],
	[
		"z",
		"x",
		"c",
		"v",
		"b",
		"n",
		"m"
	]
], Ze = [
	[
		"!",
		"@",
		"#",
		"$",
		"%",
		"^",
		"&",
		"*",
		"(",
		")"
	],
	[
		"Q",
		"W",
		"E",
		"R",
		"T",
		"Y",
		"U",
		"I",
		"O",
		"P"
	],
	[
		"A",
		"S",
		"D",
		"F",
		"G",
		"H",
		"J",
		"K",
		"L"
	],
	[
		"Z",
		"X",
		"C",
		"V",
		"B",
		"N",
		"M"
	]
], Qe = (e) => {
	let t = String(e || "left").toLowerCase();
	return t === "right" ? 1 : t === "middle" ? 2 : 0;
}, $e = (e, t, n, r = 0) => {
	let i = /* @__PURE__ */ new ArrayBuffer(8), a = new DataView(i);
	return a.setInt16(0, Math.round(t), !0), a.setInt16(2, Math.round(n), !0), a.setUint8(4, e), a.setUint8(5, r), a.setUint16(6, le(), !0), i;
}, et = (e, t) => $e(0, e, t, 0), tt = (e, t) => $e(2, e, t, 0), nt = (e, t = !1) => $e(1, 0, 0, Qe(e) | (t ? 128 : 0)), rt = (e) => $e(3, 0, 0, Qe(e)), it = (e) => $e(4, 0, 0, Qe(e)), at = (e, t = 0) => {
	let n = /* @__PURE__ */ new ArrayBuffer(8), r = new DataView(n);
	return r.setUint32(0, e >>> 0, !0), r.setUint8(4, 6), r.setUint8(5, t), r.setUint16(6, le(), !0), n;
}, ot = (e) => e ? {
	perfTsLo: e,
	perfTs: r(e)
} : {}, st = (e) => {
	let t = e instanceof Uint8Array ? e : new Uint8Array(e);
	if (t.byteLength < 6) return null;
	let n = new DataView(t.buffer, t.byteOffset, t.byteLength), r = n.getUint8(4), i = ot(t.byteLength >= 8 ? n.getUint16(6, !0) : 0);
	if (r === 6) {
		let e = n.getUint32(0, !0);
		switch (n.getUint8(5)) {
			case 1: return {
				what: "keyboard:tap",
				payload: {
					key: "backspace",
					...i
				}
			};
			case 2: return {
				what: "keyboard:tap",
				payload: {
					key: "enter",
					...i
				}
			};
			case 3: return {
				what: "keyboard:tap",
				payload: {
					key: "space",
					...i
				}
			};
			case 4: return {
				what: "keyboard:tap",
				payload: {
					key: "tab",
					...i
				}
			};
			default: return {
				what: "keyboard:type",
				payload: {
					text: String.fromCodePoint(e || 0),
					...i
				}
			};
		}
	}
	let a = n.getInt16(0, !0), o = n.getInt16(2, !0), s = n.getUint8(5), c = (s & 127) == 1 ? "right" : (s & 127) == 2 ? "middle" : "left";
	switch (r) {
		case 1: return {
			what: "mouse:click",
			payload: {
				button: c,
				double: !!(s & 128),
				...i
			}
		};
		case 2: return {
			what: "mouse:scroll",
			payload: {
				dx: a,
				dy: o,
				...i
			}
		};
		case 3: return {
			what: "mouse:down",
			payload: {
				button: c,
				...i
			}
		};
		case 4: return {
			what: "mouse:up",
			payload: {
				button: c,
				...i
			}
		};
		default: return {
			what: "mouse:move",
			payload: {
				x: a,
				y: o,
				...i
			}
		};
	}
}, ct = (e) => new Promise((t) => setTimeout(t, e)), lt = () => !be().trim(), ut = (e) => {
	switch (e.type) {
		case "pointer.move": return {
			what: "mouse:move",
			payload: {
				x: e.dx,
				y: e.dy,
				z: e.dz ?? 0
			}
		};
		case "pointer.click": return {
			what: "mouse:click",
			payload: {
				button: e.button || "left",
				double: !!(e.double || e.count === 2)
			}
		};
		case "pointer.scroll": return {
			what: "mouse:scroll",
			payload: {
				dx: e.dx || 0,
				dy: e.dy || 0
			}
		};
		case "pointer.down": return {
			what: "mouse:down",
			payload: { button: e.button || "left" }
		};
		case "pointer.up": return {
			what: "mouse:up",
			payload: { button: e.button || "left" }
		};
		case "voice.submit": return {
			what: "voice:submit",
			payload: { text: e.text }
		};
		case "keyboard.char": switch (e.char) {
			case "\b":
			case "": return {
				what: "keyboard:tap",
				payload: { key: "backspace" }
			};
			case "\n":
			case "\r": return {
				what: "keyboard:tap",
				payload: { key: "enter" }
			};
			case "	": return {
				what: "keyboard:tap",
				payload: { key: "tab" }
			};
			default: return e.char === " " ? {
				what: "keyboard:tap",
				payload: { key: "space" }
			} : {
				what: "keyboard:type",
				payload: { text: e.char }
			};
		}
		case "keyboard.binary": switch (e.flags ?? 0) {
			case 1: return {
				what: "keyboard:tap",
				payload: { key: "backspace" }
			};
			case 2: return {
				what: "keyboard:tap",
				payload: { key: "enter" }
			};
			case 3: return {
				what: "keyboard:tap",
				payload: { key: "space" }
			};
			case 4: return {
				what: "keyboard:tap",
				payload: { key: "tab" }
			};
			default: return {
				what: "keyboard:type",
				payload: { text: String.fromCodePoint(e.codePoint) }
			};
		}
		case "gesture.swipe": return null;
	}
}, dt = (e) => {
	if (!lt() || !ae()) return !1;
	switch (e.type) {
		case "pointer.move": return x(et(e.dx, e.dy));
		case "pointer.scroll": return x(tt(e.dx || 0, e.dy || 0));
		case "pointer.click": return x(nt(e.button, !!(e.double || e.count === 2)));
		case "pointer.down": return x(rt(e.button));
		case "pointer.up": return x(it(e.button));
		case "keyboard.binary": return x(at(e.codePoint, e.flags ?? 0));
		default: return !1;
	}
}, ft = async (e, t) => {
	oe("keyboard:tap", {
		key: e,
		modifier: t || []
	}, bt());
}, pt = async () => {
	let e = await S("clipboard:get", {}, bt());
	return typeof e == "string" ? e : String(e || "");
}, mt = async (e) => {
	await S("clipboard:update", { text: e }, bt());
}, ht = (e) => {
	ee(e);
}, gt = () => {
	ie();
}, _t = () => ae(), vt = (e) => ce(e), yt = (e) => v(e), bt = () => {
	let e = be().trim();
	return e ? [e] : void 0;
}, xt = (e) => {
	if (e.type === "gesture.swipe" || dt(e)) return;
	let t = ut(e);
	t && oe(t.what, t.payload, bt());
}, St = (e) => {
	if (lt() && x(e)) return;
	let t = st(e);
	if (t) {
		oe(t.what, t.payload, bt());
		return;
	}
}, Ct = (e, t = 0) => at(e, t), wt = async () => {
	if (!_e()) return {
		ok: !1,
		error: "Remote clipboard bridge disabled in Settings → Server → Embedded shell."
	};
	try {
		return {
			ok: !0,
			text: await pt()
		};
	} catch (e) {
		return {
			ok: !1,
			error: e?.error || e?.message || String(e)
		};
	}
}, Tt = async () => {
	if (!_e()) return {
		ok: !1,
		error: "Remote clipboard bridge disabled in Settings → Server → Embedded shell."
	};
	try {
		return await ft("c", ["control"]), await ct(60), await wt();
	} catch (e) {
		return {
			ok: !1,
			error: e?.error || e?.message || String(e)
		};
	}
}, Et = async () => {
	if (!_e()) return {
		ok: !1,
		error: "Remote clipboard bridge disabled in Settings → Server → Embedded shell."
	};
	try {
		return await ft("x", ["control"]), await ct(60), await wt();
	} catch (e) {
		return {
			ok: !1,
			error: e?.error || e?.message || String(e)
		};
	}
}, Dt = async (e) => {
	if (!_e()) return {
		ok: !1,
		error: "Remote clipboard bridge disabled in Settings → Server → Embedded shell."
	};
	try {
		return await mt(e), await ct(20), await ft("v", ["control"]), { ok: !0 };
	} catch (e) {
		return {
			ok: !1,
			error: e?.error || e?.message || String(e)
		};
	}
}, Ot = (e) => new Promise((t) => setTimeout(t, e)), kt = () => {
	let e = _t();
	return {
		connected: e,
		state: e ? "connected" : "disconnected",
		host: he(),
		protocol: Se(),
		detail: e ? null : "disconnected",
		timestampMs: Date.now()
	};
}, E = {
	init(e) {
		ht(e), ue() && b();
	},
	connect() {
		if (ue()) {
			b();
			return;
		}
		y("airpad-connect");
	},
	disconnect() {
		ge() || me() || gt();
	},
	reconnectAfterConfigChange(e) {
		m();
		let t = e?.delayMs ?? 80;
		(async () => {
			if (await Ot(t), e?.skipNativeSync || await pe(), ue()) {
				await _() ? await b() : se();
				return;
			}
			y("airpad-config");
		})().catch(() => {
			console.warn("[AirPad] reconnect after config failed");
		});
	},
	isConnected() {
		return ae();
	},
	getRemoteHost() {
		return he();
	},
	getState() {
		return kt();
	},
	onConnectionChange(e) {
		return vt(e);
	},
	onServerClipboardUpdate(e) {
		return yt(e);
	},
	onStateChange(e) {
		e(kt().state, kt().detail);
		let t = vt((t) => {
			e(t ? "connected" : "disconnected", t ? null : "disconnected");
		});
		return () => {
			t();
		};
	},
	onVoiceMessage(e) {
		return ne((t) => {
			e(t);
		});
	},
	sendCoordinatorAct(e, t, n) {
		return oe(e, t, n);
	},
	sendCoordinatorAsk(e, t, n) {
		return re(e, t, n);
	},
	sendCoordinatorRequest(e, t, n) {
		return S(e, t, n);
	},
	sendAirPadIntent(e) {
		xt(e);
	},
	sendAirPadKeyboardChar(e) {
		xt({
			type: "keyboard.char",
			char: e
		});
	},
	createAirPadKeyboardMessage(e, t = 0) {
		return Ct(e, t);
	},
	sendAirPadBinaryMessage(e) {
		St(e);
	},
	requestClipboardRead() {
		return wt();
	},
	requestClipboardCopy() {
		return Tt();
	},
	requestClipboardCut() {
		return Et();
	},
	requestClipboardPaste(e) {
		return Dt(e);
	},
	requestClipboardHistory(e) {
		return S("clipboard:get", {
			request: "history",
			target: e
		}, [e]);
	},
	sendClipboardUpdate(e, t) {
		return S("clipboard:update", t ? {
			text: e,
			target: t
		} : { text: e }, t ? [t] : void 0);
	}
}, At = (e) => {
	E.init(e);
}, jt = () => {
	E.connect();
}, Mt = () => {
	E.disconnect();
};
function Nt(e) {
	E.reconnectAfterConfigChange(e);
}
var Pt = () => E.isConnected(), Ft = (e) => E.onConnectionChange(e), It = (e) => E.onServerClipboardUpdate(e), Lt = (e) => E.onVoiceMessage(e), D = (e) => {
	E.sendAirPadIntent(e);
}, Rt = (e) => {
	E.sendAirPadKeyboardChar(e);
}, zt = async () => E.requestClipboardRead(), Bt = async () => E.requestClipboardCopy(), Vt = async () => E.requestClipboardCut(), Ht = async (e) => E.requestClipboardPaste(e);
//#endregion
//#region src/input/keyboard/message.ts
function O(e) {
	Pt() && Rt(e);
}
//#endregion
//#region src/input/keyboard/ui.ts
function Ut() {
	return `
        <div class="virtual-keyboard-container" data-hidden="true" aria-hidden="true">
            <div class="keyboard-header">
                <button type="button" name="airpad-keyboard-close" class="keyboard-close" aria-label="Close keyboard">✕</button>
                <div class="keyboard-tabs">
                    <button type="button" name="airpad-keyboard-tab-letters" class="keyboard-tab active" data-tab="letters">ABC</button>
                    <button type="button" name="airpad-keyboard-tab-emoji" class="keyboard-tab" data-tab="emoji">😀</button>
                </div>
            </div>
            <div class="keyboard-content">
                <div class="keyboard-panel active" data-panel="letters">
                    <div class="keyboard-shift-container">
                        <button type="button" name="airpad-keyboard-shift" class="keyboard-shift" data-shift="lower">⇧</button>
                    </div>
                    <div class="keyboard-rows" id="keyboardRows"></div>
                    <div class="keyboard-special">
                        <button class="keyboard-key special space" data-key=" ">Space</button>
                        <button class="keyboard-key special backspace" data-key="backspace">⌫</button>
                        <button class="keyboard-key special enter" data-key="enter">↵</button>
                    </div>
                </div>
                <div class="keyboard-panel" data-panel="emoji">
                    <div class="emoji-categories">
                        ${Object.keys(Ye).map((e) => `<button class="emoji-category-btn" data-category="${e}">${e}</button>`).join("")}
                    </div>
                    <div class="emoji-grid" id="emojiGrid"></div>
                </div>
            </div>
        </div>
    `;
}
function Wt(e = !1) {
	let t = Ge()?.querySelector("#keyboardRows");
	t && (t.innerHTML = "", (e ? Ze : Xe).forEach((e) => {
		let n = document.createElement("div");
		n.className = "keyboard-row", e.forEach((e) => {
			let t = document.createElement("button");
			t.className = "keyboard-key", t.textContent = e, t.setAttribute("data-key", e), t.addEventListener("click", () => Kt(e)), n.appendChild(t);
		}), t.appendChild(n);
	}));
}
function Gt(e) {
	let t = Ge()?.querySelector("#emojiGrid");
	if (!t) return;
	let n = Ye[e] || [];
	t.innerHTML = "", n.forEach((e) => {
		let n = document.createElement("button");
		n.className = "emoji-key", n.textContent = e, n.setAttribute("data-emoji", e), n.addEventListener("click", () => Kt(e)), t.appendChild(n);
	});
}
function Kt(e) {
	O(e === "backspace" ? "\b" : e === "enter" ? "\n" : e);
}
function qt() {
	let e = qe();
	if (!e || (e.textContent = "⌨️", !e.isConnected)) return;
	let t = e.ownerDocument;
	if (!t || t.activeElement !== e) return;
	let n = e.firstChild, r = globalThis?.getSelection?.();
	if (!(!(n instanceof Text) || !r)) try {
		let i = t.createRange();
		i.setStart(n, Math.min(1, e.textContent?.length ?? 0)), i.collapse(!0), r.removeAllRanges(), r.addRange(i);
	} catch {}
}
//#endregion
//#region ../../projects/subsystem/runtime/event-handling-policy.ts
function Jt(e) {
	e.stopPropagation();
}
function Yt() {
	return new Promise((e) => {
		globalThis.requestAnimationFrame?.(() => e()) ?? setTimeout(e, 0);
	});
}
//#endregion
//#region ../../projects/subsystem/runtime/doc-tools.ts
function Xt(e) {
	let t = e.target;
	if (t instanceof HTMLElement) return t;
	if (t instanceof Node && t.parentElement) return t.parentElement;
	for (let t of e.composedPath?.() ?? []) if (t instanceof HTMLElement) return t;
	return null;
}
//#endregion
//#region src/input/keyboard/handlers.ts
var Zt = null;
function Qt() {
	try {
		Zt?.abort();
	} catch {}
	Zt = null;
}
var $t = /* @__PURE__ */ new WeakSet(), en = /* @__PURE__ */ new WeakSet(), tn = /* @__PURE__ */ new WeakSet(), nn = "input,textarea,select,[contenteditable=\"true\"]", rn = ".config-overlay, .virtual-keyboard-container, .keyboard-toggle, .view-cwsp, .view-cwsp button, .view-cwsp .big-button, .view-cwsp .neighbor-button, .log-overlay.open, .log-panel, .airpad-config-overlay";
function an(e) {
	return e ? !!(e.matches?.(nn) || e.closest?.(rn)) : !1;
}
function on() {
	let e = C(), t = e?.querySelector(".airpad-config-overlay") ?? e?.querySelector(".config-overlay");
	return t ? t.style.display === "flex" || t.classList.contains("flex") : !1;
}
function sn(e) {
	let t = c();
	t && (t.textContent = e);
}
function cn() {
	if (!T() || on()) return;
	let e = Ge(), t = Ie(), n = qe();
	t ? (n && (n.contentEditable = "true", n.setAttribute("virtualkeyboardpolicy", "manual")), qt(), n?.focus({ preventScroll: !0 }), t.show(), sn("overlay:on / policy:manual")) : (He(!0), e?.classList?.add?.("visible"), sn("overlay:off")), Wt(!1), Gt("smileys");
}
var ln = !1;
function k() {
	if (!ln) {
		ln = !0;
		try {
			let e = Ge(), t = Ie(), n = qe();
			He(!1), e?.classList?.remove?.("visible"), t && (qt(), t.hide(), n && (n.contentEditable = "false", n.removeAttribute("virtualkeyboardpolicy")), n?.blur(), sn("overlay:on / policy:auto"));
		} finally {
			ln = !1;
		}
	}
}
function un() {
	Ue() ? k() : cn();
}
function dn() {
	let e = qe();
	e && ($t.has(e) || ($t.add(e), e.addEventListener("click", (e) => {
		if (Jt(e), !T()) {
			w("Keyboard is available after WS connection");
			return;
		}
		on() || un();
	})));
}
function fn() {
	let e = Ie(), t = qe();
	if (!e || !t || en.has(t)) return;
	en.add(t);
	let n = "⌨️", r = null, i = null, a = 0, o = !1, s = n, c = !1, l = !1, u = "", d = null, f = (e = !1) => {
		d !== null && (clearTimeout(d), d = null), e ? (l = !1, u = "") : d = globalThis.setTimeout(() => {
			l = !1, u = "", d = null;
		}, 600);
	}, p = (e) => {
		let t = e.includes(":") ? e.split(":").slice(1).join(":") : e, n = Date.now();
		return i === t && n - a < 20 ? !0 : (i = t, a = n, !1);
	}, m = () => {
		queueMicrotask(() => {
			r = null, qt(), s = n;
		});
	}, h = (e) => {
		T() && (O(e), m());
	}, g = 12e3, _ = 12e4, ee = 0, v = (e) => Array.from(String(e || "")), y = (e, t) => {
		let n = String(e || "");
		if (!n) {
			m();
			return;
		}
		if (t && p(t)) {
			m();
			return;
		}
		let r = v(n);
		r.length > _ ? (r = r.slice(0, _), w(`[AirPad] Input truncated to ${_} chars to avoid UI freeze.`)) : r.length > g && w(`[AirPad] Streaming large input (${r.length} chars) in chunks.`);
		let i = ++ee, a = 0, o = () => {
			if (i !== ee || !T()) return;
			let e = Math.min(a + 256, r.length);
			for (let t = a; t < e; t++) O(r[t]);
			if (a = e, a < r.length) {
				globalThis.setTimeout(o, 0);
				return;
			}
			m();
		};
		o();
	}, b = 0, x = (e, t) => {
		let n = String(e || "");
		if (!n) {
			t?.();
			return;
		}
		let r = v(n);
		r.length > _ ? (r = r.slice(0, _), w(`[AirPad] Composition text truncated to ${_} chars to avoid UI freeze.`)) : r.length > g && w(`[AirPad] Streaming large composition input (${r.length} chars) in chunks.`);
		let i = b, a = 0, o = () => {
			if (i !== b || !T()) return;
			let e = Math.min(a + 256, r.length);
			for (let t = a; t < e; t++) O(r[t]);
			if (a = e, a < r.length) {
				globalThis.setTimeout(o, 0);
				return;
			}
			t?.();
		};
		o();
	}, S = (e, t) => {
		if (e <= 0) {
			t?.();
			return;
		}
		let n = b, r = e, i = () => {
			if (n !== b || !T()) return;
			let e = Math.min(r, 256);
			for (let t = 0; t < e; t++) O("\b");
			if (r -= e, r > 0) {
				globalThis.setTimeout(i, 0);
				return;
			}
			t?.();
		};
		i();
	}, C = (e, t, n) => {
		let r = String(t || "");
		r.length > _ && (r = r.slice(0, _), w(`[AirPad] Composition replacement truncated to ${_} chars.`)), S(e, () => {
			if (!r) {
				n();
				return;
			}
			x(r, n);
		});
	}, te = (e) => e.replace(/⌨️/g, "").replace(/⌨\uFE0F?/g, "").replace(/\uFE0F/g, ""), ne = (e, t) => {
		let n = te(e), r = te(t);
		return n.startsWith(r) ? n.slice(r.length) : r.startsWith(n) ? "" : n;
	};
	t.addEventListener("keydown", (e) => {
		if (T()) {
			if (e.isComposing) {
				d !== null && (clearTimeout(d), d = null);
				return;
			}
			if (l && !e.isComposing && f(!0), c = !1, (e.ctrlKey || e.metaKey) && !e.altKey) {
				let t = String(e.key || "").toLowerCase();
				if (t === "c" || t === "x") {
					e.preventDefault(), o = !1, f(!0);
					return;
				}
			}
			if (e.key === "Backspace" || e.key === "Delete") {
				e.preventDefault(), o = !1, p("backspace") || h("\b");
				return;
			}
			if (e.key === "Enter") {
				e.preventDefault(), o = !1, f(!0), p("enter") || h("\n");
				return;
			}
			if (e.key === "Tab") {
				e.preventDefault(), o = !1, p("tab") || h("	");
				return;
			}
			if (e.key === "Unidentified" || e.key === "Process" || e.key === "") {
				o = !0, s = t.textContent || n;
				return;
			}
			if (e.key === " ") {
				e.preventDefault(), o = !1, f(!0);
				return;
			}
			if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
				e.preventDefault(), o = !1;
				return;
			}
			o = !1;
		}
	}), t.addEventListener("beforeinput", (e) => {
		if (!T()) return;
		let r = e;
		if (s = t.textContent || n, c = !0, r.inputType === "insertCompositionText") {
			d !== null && (clearTimeout(d), d = null);
			return;
		}
		if (r.inputType === "insertText" && l && f(!0), o && r.inputType === "insertText" && r.data) {
			e.preventDefault(), o = !1, y(r.data, `text:${r.data}`);
			return;
		}
		if (r.inputType === "insertText") {
			e.preventDefault();
			let t = r.data;
			t && y(t, `text:${t}`);
			return;
		}
		if (r.inputType === "insertReplacementText") {
			e.preventDefault(), f(!0);
			let t = r.data || r.dataTransfer?.getData("text");
			t && y(t, `replace:${t}`);
			return;
		}
		if (r.inputType === "insertLineBreak" || r.inputType === "insertParagraph") {
			e.preventDefault(), f(!0), p("linebreak") || h("\n");
			return;
		}
		if (r.inputType === "deleteContentBackward" || r.inputType === "deleteContentForward") {
			e.preventDefault(), p("deleteback") || h("\b");
			return;
		}
		if (r.inputType === "insertFromPaste") {
			e.preventDefault(), f(!0);
			let t = r.data || r.dataTransfer?.getData("text/plain");
			t && y(t);
			return;
		}
	}), t.addEventListener("compositionstart", () => {
		T() && (d !== null && (clearTimeout(d), d = null), l = !0, u = "", o = !1, b++);
	}), t.addEventListener("compositionupdate", (e) => {
		if (!T()) return;
		d !== null && (clearTimeout(d), d = null), b++;
		let t = e.data || "", n = () => {
			u = t, m();
		};
		if (t.startsWith(u)) {
			let e = t.slice(u.length);
			if (e.length > 0) if (e.length <= 256) {
				for (let t of e) O(t);
				n();
			} else x(e, n);
			else n();
		} else if (u.startsWith(t)) {
			let e = v(u).length - v(t).length;
			if (e <= 256) {
				for (let t = 0; t < e; t++) O("\b");
				n();
			} else S(e, n);
		} else {
			let e = v(u).length, r = v(t).length;
			if (e <= 256 && r <= 256) {
				for (let t = 0; t < e; t++) O("\b");
				for (let e of t) O(e);
				n();
			} else C(e, t, n);
		}
	}), t.addEventListener("compositionend", (e) => {
		if (!T()) return;
		d !== null && (clearTimeout(d), d = null), b++;
		let t = e.data || "", n = () => {
			l = !1, u = "", m();
		};
		if (t !== u) {
			let e = v(u).length, r = v(t).length;
			if (e <= 256 && r <= 256) {
				for (let t = 0; t < e; t++) O("\b");
				for (let e of t) O(e);
				n();
			} else C(e, t, n);
		} else n();
	}), t.addEventListener("input", (e) => {
		if (!T()) return;
		let t = e;
		if (t.inputType === "insertCompositionText" || t.inputType?.includes("Composition") || l) return;
		let n = e.target.textContent || "";
		if (o) {
			o = !1;
			let e = ne(n, s);
			e.length > 0 && !p(`unidentified:${e}`) && y(e), m();
			return;
		}
		if (!c) {
			let e = ne(n, s);
			e.length > 0 && !p(`input:${e}`) && y(e), m();
			return;
		}
		m(), c = !1;
	}), t.addEventListener("paste", (e) => {
		if (!T()) return;
		e.preventDefault(), o = !1, f(!0);
		let t = e.clipboardData?.getData("text") || "";
		t && y(t);
	}), t.addEventListener("drop", (e) => {
		if (!T()) return;
		e.preventDefault(), o = !1, f(!0);
		let t = e.dataTransfer?.getData("text") || "";
		if (t) {
			y(t);
			return;
		}
		m();
	}), t.addEventListener("blur", () => {
		r !== null && (clearTimeout(r), r = null), d !== null && (clearTimeout(d), d = null), l = !1, u = "", o = !1, i = null, c = !1, s = n, qt();
	}), t.addEventListener("focus", () => {
		i = null, a = 0, o = !1, c = !1, l = !1, u = "", d !== null && (clearTimeout(d), d = null), s = n, qt();
	});
}
function pn() {
	let e = Ge();
	if (!e) return;
	if (!tn.has(e)) {
		tn.add(e), e.querySelector(".keyboard-close")?.addEventListener("click", k);
		let t = e.querySelectorAll(".keyboard-tab");
		t.forEach((n) => {
			n.addEventListener("click", () => {
				let r = n.getAttribute("data-tab");
				t.forEach((e) => e.classList.remove("active")), n.classList.add("active"), (e?.querySelectorAll(".keyboard-panel"))?.forEach((e) => {
					e.classList.remove("active"), e.getAttribute("data-panel") === r && e.classList.add("active");
				});
			});
		});
		let n = e.querySelector(".keyboard-shift"), r = !1;
		n?.addEventListener("click", () => {
			r = !r, Wt(r), n.classList.toggle("active", r);
		});
		let i = e.querySelectorAll(".emoji-category-btn");
		if (i.length > 0) {
			let e = i[0];
			e.classList.add("active");
			let t = e.getAttribute("data-category");
			t && Gt(t), i.forEach((e) => {
				e.addEventListener("click", () => {
					let t = e.getAttribute("data-category");
					t && (i.forEach((e) => e.classList.remove("active")), e.classList.add("active"), Gt(t));
				});
			});
		}
		e.addEventListener("click", (t) => {
			t.target === e && k();
		});
	}
	let t = C();
	if (!t) return;
	Qt(), Zt = new AbortController();
	let { signal: n } = Zt;
	t.addEventListener("focusout", (e) => {
		if (!T() || !Ue()) return;
		let t = Xt(e), n = e.relatedTarget, r = n instanceof HTMLElement ? n : null;
		an(t) || an(r) || k();
	}, { signal: n }), t.addEventListener("pointerdown", (e) => {
		T() && Ue() && (an(Xt(e)) || k());
	}, {
		capture: !1,
		passive: !0,
		signal: n
	});
}
//#endregion
//#region src/input/virtual-keyboard.ts
function mn(e) {
	let t = qe();
	if (!(t instanceof HTMLButtonElement)) return;
	t.disabled = !1, t.setAttribute("aria-disabled", String(!e)), t.classList.toggle("is-disabled", !e);
	let n = c();
	n && (n.textContent = `${(n.textContent || "overlay:off").replace(/\s*\/\s*remote:(on|off)\s*$/i, "")} / remote:${e ? "on" : "off"}`);
}
function hn(e) {
	Je(e), mn(e), e || k();
}
function gn(e) {
	Fe();
	let n = Le(), r = c();
	r && (r.textContent = n ? "overlay:on / policy:auto" : "overlay:off");
	let i = t(), a = e?.closest?.(".view-cwsp") ?? e ?? i?.closest?.(".view-cwsp") ?? i ?? document.body, o = a.querySelector(".virtual-keyboard-container");
	if (!o) {
		let e = Ut();
		a.insertAdjacentHTML("beforeend", e), o = a.querySelector(".virtual-keyboard-container");
	}
	if (!o) {
		w("Failed to create keyboard element");
		return;
	}
	o.classList.remove("visible"), We(o);
	let s = a.querySelector(".bottom-toolbar") ?? a, l = s.querySelector(".keyboard-toggle");
	if (!l) {
		let e = n ? "<button type=\"button\" name=\"airpad-keyboard-toggle\" tabindex=\"-1\" contenteditable=\"false\" virtualkeyboardpolicy=\"manual\" class=\"keyboard-toggle keyboard-toggle-editable\" aria-label=\"Toggle keyboard\">⌨️</button>" : "<button type=\"button\" name=\"airpad-keyboard-toggle\" tabindex=\"-1\" class=\"keyboard-toggle\" aria-label=\"Toggle keyboard\">⌨️</button>";
		s.insertAdjacentHTML("beforeend", e), l = s.querySelector(".keyboard-toggle");
	}
	if (!l) {
		w("Failed to create toggle button");
		return;
	}
	l.autofocus = !1, l.removeAttribute("autofocus"), l instanceof HTMLElement && (l.setAttribute("autocapitalize", "off"), l.setAttribute("autocorrect", "off"), l.setAttribute("spellcheck", "false")), Ke(l), hn(!1), dn(), fn(), pn(), w("Virtual keyboard initialized");
}
//#endregion
//#region src/input/speech.ts
var A = null, _n = !1, j = !1, vn = "ru-RU", yn = !1, bn = null, xn = (e) => {
	let t = (e || "").trim();
	return !t || t === "ru" ? "ru-RU" : t === "en" ? "en-US" : t === "en-GB" ? "en-GB" : t === "en-US" ? "en-US" : t;
};
async function Sn() {
	try {
		vn = xn((await Me())?.speech?.language), A && (A.lang = vn);
	} catch {
		vn = "ru-RU";
	}
}
var Cn = () => _n || j;
function wn(e) {
	let t = a();
	t && (t.textContent = e);
}
function Tn() {
	let e = window.SpeechRecognition || window.webkitSpeechRecognition;
	if (!e) return w("SpeechRecognition API не поддерживается."), null;
	let t = new e();
	return t.lang = vn, t.interimResults = !1, t.maxAlternatives = 1, t;
}
function En() {
	yn || (yn = !0, Sn(), A = Tn(), bn?.(), bn = Lt((e) => {
		let t = p();
		t && (t.textContent = e.text);
	}), A && (A.onstart = () => {
		let e = h(), t = p();
		_n = !0, j = !0, e && e.classList.add("listening"), wn("listening"), t && (t.textContent = "Слушаю..."), w("Speech: start");
	}, A.onend = () => {
		let e = h();
		_n = !1, j = !1, e && e.classList.remove("listening"), wn("idle"), w("Speech: end");
	}, A.onerror = (e) => {
		let t = p();
		t && (t.textContent = "Ошибка распознавания: " + e.error), w("Speech error: " + e.error);
	}, A.onresult = (e) => {
		let t = p(), n = (e.results[0][0].transcript || "").trim(), r = n.split(/\s+/).filter(Boolean);
		if (t && (t.textContent = n ? "Команда: " + n : "Команда не распознана"), w("Speech result: " + n), r.length < 2) {
			w("Speech: недостаточно слов (нужно >= 2) — не отправляем и не подключаем WS");
			return;
		}
		let i = (e) => {
			if (Pt()) {
				D({
					type: "voice.submit",
					text: n
				});
				return;
			}
			if (Date.now() > e) {
				w("Speech: не удалось дождаться WS, команда не отправлена");
				return;
			}
			setTimeout(() => i(e), 120);
		};
		Pt() ? D({
			type: "voice.submit",
			text: n
		}) : (w("Speech: подключаем WS перед отправкой команды"), jt(), i(Date.now() + 2e3));
	}));
}
function Dn() {
	let e = h();
	if (!e) return;
	let t = !1, n = null;
	e.addEventListener("pointerdown", (r) => {
		if (r.preventDefault(), !t) {
			if (t = !0, n = r.pointerId, e.setPointerCapture(n), !A) {
				w("SpeechRecognition недоступен");
				return;
			}
			try {
				A.start();
			} catch (e) {
				w("Recognition start error: " + e.message);
			}
		}
	}), e.addEventListener("pointerup", (r) => {
		if (!(!t || r.pointerId !== n) && (r.preventDefault(), t = !1, e.releasePointerCapture(n), n = null, A)) try {
			A.stop();
		} catch (e) {
			w("Recognition stop error: " + e.message);
		}
	}), e.addEventListener("pointercancel", () => {
		if (t && (t = !1, n = null, A)) try {
			A.stop();
		} catch {}
	});
}
//#endregion
//#region src/config/motion-quantize.ts
var On = (e) => {
	let t = Math.round(e.dx), n = Math.round(e.dy), r = Math.round(e.dz);
	return t === 0 && n === 0 && r === 0 ? null : (e.dx -= t, e.dy -= n, e.dz -= r, {
		dx: t,
		dy: n,
		dz: r
	});
}, M = {
	dx: 0,
	dy: 0,
	dz: 0
}, kn = null;
function An() {
	M.dx = 0, M.dy = 0, M.dz = 0;
}
function jn() {
	kn === null && (kn = globalThis?.setTimeout?.(() => {
		kn = null;
		let e = On(M);
		e && D({
			type: "pointer.move",
			dx: e.dx,
			dy: e.dy,
			dz: e.dz
		});
	}, 7));
}
function Mn(e, t, n = 0) {
	Math.abs(e) < .001 && (e = 0), Math.abs(t) < .001 && (t = 0), Math.abs(n) < .001 && (n = 0), !(e === 0 && t === 0 && n === 0) && (M.dx += e, M.dy += t, M.dz += n, jn());
}
function Nn() {
	An(), kn !== null && (clearTimeout(kn), kn = null);
}
//#endregion
//#region src/utils/math.ts
function N(e) {
	return Number.isFinite(e) ? e : 0;
}
function Pn(e) {
	let t = N(e);
	return t < 0 ? 0 : t > 1 ? 1 : t;
}
function Fn(e, t, n) {
	return N(e) + (N(t) - N(e)) * Pn(n);
}
function In(e, t) {
	let n = Math.max(0, N(e)), r = Math.abs(N(t));
	return 1 - Math.exp(-r * n);
}
function P() {
	return {
		x: 0,
		y: 0,
		z: 0
	};
}
function Ln(e, t, n = .5) {
	let r = N(e.x), i = N(e.y), a = N(e.z), o = N(t.x), s = N(t.y), c = N(t.z), l = N(n);
	return {
		x: r + (o - r) * l,
		y: i + (s - i) * l,
		z: a + (c - a) * l
	};
}
function Rn(e) {
	return {
		x: N(e.x),
		y: N(e.y),
		z: N(e.z)
	};
}
function zn(e, t) {
	return {
		x: N(e.x) - N(t.x),
		y: N(e.y) - N(t.y),
		z: N(e.z) - N(t.z)
	};
}
function Bn(e, t) {
	return {
		x: N(e.x) + N(t.x),
		y: N(e.y) + N(t.y),
		z: N(e.z) + N(t.z)
	};
}
function F(e, t) {
	let n = N(t);
	return {
		x: N(e.x) * n,
		y: N(e.y) * n,
		z: N(e.z) * n
	};
}
function Vn(e, t) {
	let n = Math.abs(N(t));
	if (n === 0) return P();
	let r = N(e.x), i = N(e.y), a = N(e.z), o = Math.hypot(r, i, a);
	if (o === 0 || o <= n) return {
		x: r,
		y: i,
		z: a
	};
	let s = n / o;
	return {
		x: r * s,
		y: i * s,
		z: a * s
	};
}
function Hn(e, t) {
	let n = Math.abs(N(t));
	return {
		x: Math.abs(N(e.x)) < n ? 0 : N(e.x),
		y: Math.abs(N(e.y)) < n ? 0 : N(e.y),
		z: Math.abs(N(e.z)) < n ? 0 : N(e.z)
	};
}
function Un(e, t = .01) {
	let n = Math.abs(N(t) || .01);
	return Math.abs(N(e.x)) < n && Math.abs(N(e.y)) < n && Math.abs(N(e.z)) < n;
}
function Wn(e, t, n = .25) {
	return Ln(e, t, n);
}
function Gn(e, t, n, r) {
	let i = {
		ax: N(e.x),
		ay: N(e.y),
		az: N(e.z)
	};
	return {
		x: i[t],
		y: i[n],
		z: i[r]
	};
}
function Kn(e, t, n) {
	let r = N(t), i = Math.cos(r), a = Math.sin(r), o = N(e.x), s = N(e.y);
	return {
		x: o * i - s * a,
		y: o * a + s * i,
		z: N(n === void 0 ? e.z : n)
	};
}
function qn(e) {
	let t = Math.PI * 2;
	return e %= t, e < -Math.PI ? e += t : e > Math.PI && (e -= t), e;
}
function Jn(e) {
	return {
		x: qn(N(e.x)),
		y: qn(N(e.y)),
		z: qn(N(e.z))
	};
}
//#endregion
//#region src/input/unfinised/gravity-sensor.ts
var Yn = null, Xn = P(), Zn = 0;
function Qn() {
	return Xn;
}
function $n() {
	return Zn;
}
function er() {
	return Yn !== null;
}
//#endregion
//#region src/input/unfinised/gyroscope.ts
var I = null, tr = performance.now();
function nr() {
	tr = performance.now(), pr(), ir = P(), ar = P(), vr = P();
}
function rr() {
	nr(), Cr = !1;
}
var ir = P(), L = P(), ar = P(), or = [], sr = [], cr = 0, lr = P(), ur = 0, dr = 0, fr = 0;
function pr() {
	or = [], sr = [], cr = 0, lr = P(), L = P();
}
function mr() {
	return Math.min(1, or.length / ye) ** 2;
}
function hr(e, t = 1, n = P()) {
	if (Math.abs(e.x) + Math.abs(e.y) + Math.abs(e.z) < 1e-4 || Math.hypot(n.x - L.x, n.y - L.y, n.z - L.z) > 1 - mr()) return;
	let r = F(Jn(e), 1 / Math.max(.001, t)), i = null;
	if (or.length >= 1e3) {
		let e = sr.shift();
		i = F(or.shift(), e), cr -= e;
	}
	or.push(r), sr.push(t), cr += 1, i && (lr = zn(lr, i)), lr = Bn(lr, r), cr > 0 && (L = F(lr, 1 / cr));
}
function gr(e, t = .1, n = 1) {
	let r = Math.max(.1, Math.min(t * 10, Oe, 1)), i = e;
	return hr(Jn(i), n, ir), zn(i, L), ir = Wn(ir, i, r), Jn(ir);
}
var _r = (e) => {
	let t = Gn(e, "az", "ax", "ay");
	return Kn(t, qn(t.z * -1), 1);
}, vr = P(), yr = P(), br = (e) => {
	let t = zn(e, vr);
	return vr = e, t;
}, xr = (e) => {
	yr = Bn(yr, e);
	let t = {
		x: yr.x * -1 * 600,
		y: yr.y * -1 * 600,
		z: yr.z * 600 * Te
	};
	yr = P();
	let n = Vn(t, 30), r = Math.abs(n.x) < .001 ? 0 : n.x, i = Math.abs(n.y) < .001 ? 0 : n.y, a = Math.abs(n.z) < .001 ? 0 : n.z;
	r === 0 && i === 0 && a === 0 || Mn(r, i, a);
};
function Sr() {
	if (!("Gyroscope" in window)) {
		w("Gyroscope API не поддерживается.");
		return;
	}
	try {
		I = new window.Gyroscope({ frequency: 60 });
	} catch (e) {
		w("Невозможно создать Gyroscope: " + (e.message || e));
		return;
	}
	I.addEventListener("reading", () => {
		let e = performance.now(), t = (e - (tr || e)) / 1e3;
		tr = e, dr += t, ur++, fr = dr / ur;
		let n = t / fr, r = Rn(I);
		ar = Jn(Bn(ar, F(r, t)));
		let i = Hn(br(_r(gr(ar, t, n))), xe);
		Un(i) || Ci() === "AIR_MOVE" && (j || xr(i));
	}), I.addEventListener("error", (e) => {
		w("Gyroscope error: " + (e.error && e.error.message || e.message || e));
	}), I.start(), w("Gyroscope started (60 Hz, angle integration)");
}
var Cr = !1;
function wr() {
	if (I) {
		try {
			I.start?.();
		} catch (e) {
			w(`Gyroscope restart failed: ${e instanceof Error ? e.message : String(e)}`);
		}
		return;
	}
	Cr || (Cr = !0, Sr());
}
//#endregion
//#region src/input/unfinised/accelerometer.ts
var R = null, Tr = performance.now();
function Er() {
	Tr = performance.now(), Lr(), Or = P(), kr = P(), z = P();
}
function Dr() {
	Er(), Gr = !1;
}
var Or = P(), kr = P(), Ar = [], jr = [], Mr = 0, Nr = P(), Pr = 0, Fr = 0, Ir = 0;
function Lr() {
	Ar = [], jr = [], Mr = 0, Nr = P(), kr = P();
}
function Rr(e, t = 1, n = P()) {
	if (Math.abs(e.x) + Math.abs(e.y) + Math.abs(e.z) < 1e-4 || Math.hypot(n.x - kr.x, n.y - kr.y, n.z - kr.z) > 2) return;
	let r = F(e, 1 / Math.max(.001, t)), i = null;
	if (Ar.length >= 1e3) {
		let e = jr.shift();
		i = F(Ar.shift(), e), Mr -= e;
	}
	Ar.push(r), jr.push(t), Mr += 1, i && (Nr = zn(Nr, i)), Nr = Bn(Nr, r), Mr > 0 && (kr = F(Nr, 1 / Mr));
}
function zr(e, t = .1, n = 1) {
	let r = Math.max(.05, Math.min(t * 1, De, 1));
	return Or = Wn(Or, e, r), Rr(e, n, Or), Or;
}
var Br = P(), Vr = (e) => {
	let t = zn(e, Br);
	return Br = e, t;
}, z = P(), Hr = (e) => {
	z = Bn(z, e);
	let t = {
		x: z.x * -1 * 40,
		y: z.y * -1 * 40,
		z: z.z * 1 * 40
	};
	z = P(), Math.abs(t.x) < .1 && (t.x = 0), Math.abs(t.y) < .1 && (t.y = 0), Math.abs(t.z) < .1 && (t.z = 0), !(t.x === 0 && t.y === 0 && t.z === 0) && Mn(t.x, t.y, t.z);
}, Ur = (e) => {
	if (er() && $n() > .1) {
		let t = Qn(), n = $n();
		return {
			x: e.x - t.x * n,
			y: e.y - t.y * n,
			z: e.z - t.z * n
		};
	}
	return e;
};
function Wr() {
	if (!("Accelerometer" in window)) {
		w("Accelerometer API is not supported.");
		return;
	}
	try {
		R = new window.Accelerometer({ frequency: 60 });
	} catch (e) {
		w("Cannot create Accelerometer: " + (e.message || e));
		return;
	}
	R.addEventListener("reading", () => {
		let e = performance.now(), t = (e - (Tr || e)) / 1e3;
		Tr = e, Fr += t, Pr++, Ir = Fr / Pr;
		let n = t / Ir, r = zr(Rn(R), t, n), i = Hn(Vr(Ur(r)), ke);
		Un(r) || Ci() === "AIR_MOVE" && (j || Hr(i));
	}), R.addEventListener("error", (e) => {
		w("Accelerometer error: " + (e?.error?.message || e?.message || e));
	}), R.start(), w("Accelerometer started (60 Hz)");
}
var Gr = !1;
function Kr() {
	if (R) {
		try {
			R.start?.();
		} catch (e) {
			w(`Accelerometer restart failed: ${e instanceof Error ? e.message : String(e)}`);
		}
		return;
	}
	Gr || (Gr = !0, Wr());
}
//#endregion
//#region src/input/sensor/relative-orientation.ts
var B = null, qr = !1, Jr = null, Yr = null, V = P(), H = 60;
function Xr() {
	Yr = null, V = P(), H = 60;
}
function Zr() {
	try {
		B && B.stop?.();
	} catch {}
	B = null, qr && Jr && globalThis.removeEventListener("deviceorientation", Jr), qr = !1, Jr = null;
}
var Qr = (e, t) => {
	let [n, r, i, a] = e, o = Math.hypot(n, r, i, a) || 1, s = n / o, c = r / o, l = i / o, u = a / o;
	return t && s * t[0] + c * t[1] + l * t[2] + u * t[3] < 0 && (s = -s, c = -c, l = -l, u = -u), [
		s,
		c,
		l,
		u
	];
}, $r = (e) => {
	let [t, n, r, i] = e;
	return [
		-t,
		-n,
		-r,
		i
	];
}, ei = (e, t) => {
	let [n, r, i, a] = e, [o, s, c, l] = t;
	return [
		a * o + n * l + r * c - i * s,
		a * s - n * c + r * l + i * o,
		a * c + n * s - r * o + i * l,
		a * l - n * o - r * s - i * c
	];
}, ti = (e) => {
	let [t, n, r, i] = e, a = Math.hypot(t, n, r), o = 2 * Math.atan2(a, i || 1);
	if (a < 1e-6) return {
		x: 0,
		y: 0,
		z: 0
	};
	let s = 1 / a;
	return {
		x: t * s * o,
		y: n * s * o,
		z: r * s * o
	};
};
function ni(e) {
	let t = Gn(e, "az", "ay", "ax"), n = Kn(t, t.z * -1, 1);
	return {
		x: n.x * -1 * 600,
		y: n.y * -1 * 600,
		z: n.z * -1 * 600
	};
}
function ri(e, t) {
	let n = ni(e), r = Math.hypot(n.x, n.y, n.z), i = Math.max(60, Math.min(800, r)), a = i > H ? In(t, 6) : In(t, 14);
	return H = Fn(H, i, a), Number.isFinite(H) || (H = 60), H = Math.max(60, Math.min(800, H)), H;
}
function ii(e, t) {
	return Vn(ni(e), t);
}
function ai(e, t) {
	if (!e || e.length < 4) return P();
	let n = Qr([
		e[0],
		e[1],
		e[2],
		e[3]
	], Yr);
	Yr ||= n;
	let r = ei(n, $r(Yr));
	Yr = n;
	let i = ti(r), a = ri(i, t), o = ni(i), s = Pn(In(t, Fn(6, 24, Pn((Math.hypot(o.x, o.y, o.z) - 60) / 740))) * Pn(Ae));
	V = Wn(V, i, s * .9);
	let c = a / 600;
	V = Vn(V, Math.max(Ce, c));
	let l = {
		x: Math.abs(V.x) < .001 ? 0 : V.x,
		y: Math.abs(V.y) < .001 ? 0 : V.y,
		z: Math.abs(V.z) < .001 ? 0 : V.z
	};
	if (Math.abs(l.x) < .001 && Math.abs(l.y) < .001 && Math.abs(l.z) < .001) return P();
	let u = ii(l, a);
	return Un(u, .001) ? P() : u;
}
async function oi() {
	let e = globalThis.DeviceOrientationEvent;
	if (e && typeof e.requestPermission == "function") try {
		let t = await e.requestPermission();
		return t === "granted" ? !0 : (w(`Device orientation permission denied: ${t}`), !1);
	} catch (e) {
		return w(`Device orientation permission error: ${e instanceof Error ? e.message : String(e)}`), !1;
	}
	return !0;
}
var si = () => {
	if (qr) return;
	let e = performance.now(), t = {
		x: 0,
		y: 0,
		z: 0
	};
	Jr = (n) => {
		let r = performance.now(), i = Math.max(1e-5, (r - e) / 1e3);
		e = r;
		let a = Number(n.alpha ?? 0), o = {
			x: Number(n.beta ?? 0),
			y: Number(n.gamma ?? 0),
			z: a
		}, s = {
			x: o.x - t.x,
			y: o.y - t.y,
			z: o.z - t.z
		};
		t = o;
		let c = ii({
			x: s.x * Math.PI / 180,
			y: s.y * Math.PI / 180,
			z: s.z * Math.PI / 180
		}, ri({
			x: s.x * Math.PI / 180,
			y: s.y * Math.PI / 180,
			z: s.z * Math.PI / 180
		}, i));
		Ci && Ci() !== "AIR_MOVE" || j || Un(c, .001) || Mn(c.x, c.y, c.z);
	}, globalThis.addEventListener("deviceorientation", Jr, { passive: !0 }), qr = !0, w("RelativeOrientation fallback active (deviceorientation)");
};
async function ci() {
	await oi(), li();
}
function li() {
	if (Zr(), !window.RelativeOrientationSensor) {
		w("RelativeOrientationSensor API is not supported."), si();
		return;
	}
	try {
		B = new window.RelativeOrientationSensor({
			frequency: 120,
			referenceFrame: "device"
		});
	} catch (e) {
		w("Cannot create RelativeOrientationSensor: " + (e?.message || e)), B = null, si();
		return;
	}
	let e = performance.now();
	B.addEventListener("reading", () => {
		let t = performance.now(), n = Math.max(1e-5, (t - e) / 1e3);
		e = t;
		let r = ai(B.quaternion, n);
		Ci && Ci() !== "AIR_MOVE" || j || Mn(r.x, r.y, r.z);
	}), B.addEventListener("error", (e) => {
		w("RelativeOrientationSensor error: " + (e?.error?.message || e?.message || e)), si();
	});
	try {
		B.start(), w("RelativeOrientationSensor started (120 Hz)");
	} catch (e) {
		w("RelativeOrientationSensor start failed: " + (e?.message || e)), si();
	}
}
//#endregion
//#region src/ui/air-button.ts
var U = "IDLE", ui = 0, W = null, G = null, K = !1, di = null, fi = null, pi = 0, mi = !1, hi = !1, gi = /* @__PURE__ */ new WeakSet(), _i = /* @__PURE__ */ new WeakSet(), vi = !1, q = null, J = null, yi = 300, bi = 12, xi = 340, Si = 16;
function Ci() {
	return U;
}
function wi(e) {
	let t = te(), n = i();
	U = e, t && (t.textContent = e + (K ? " [DRAG]" : "")), n && (n.classList.toggle("air-move", e === "AIR_MOVE"), n.classList.toggle("active", e !== "IDLE"), n.classList.toggle("drag-active", K));
}
function Y() {
	wi("IDLE"), W = null, di = null, fi = null, hi = !1, G !== null && (clearTimeout(G), G = null);
}
function Ti() {
	rr(), Dr(), ci(), wr(), Kr();
}
function Ei(e = !1) {
	wi("AIR_MOVE"), Xr(), Ti(), e && !K ? (K = !0, D({
		type: "pointer.down",
		button: "left"
	}), w("Air: AIR_MOVE + DRAG started (mouse down)"), wi("AIR_MOVE")) : w("Air: AIR_MOVE started (cursor control via sensors)");
}
function Di() {
	U === "AIR_MOVE" && (K ? (D({
		type: "pointer.up",
		button: "left"
	}), w("Air: DRAG ended (mouse up)"), K = !1) : w("Air: AIR_MOVE ended"));
}
function Oi(e) {
	if (jt(), Cn()) return;
	let t = Date.now(), n = t - pi;
	mi && n < yi ? (hi = !0, w(`Air: double-tap detected (${n}ms since last tap), preparing for drag...`)) : hi = !1, mi = !1, G !== null && (clearTimeout(G), G = null), ui = t, W = {
		x: e.clientX,
		y: e.clientY
	}, wi("WAIT_TAP_OR_HOLD"), Ei(hi);
}
function ki(e) {
	if (Cn()) {
		Y();
		return;
	}
	let t = Date.now(), n = t - ui, r = e?.clientX ?? W?.x ?? 0, i = e?.clientY ?? W?.y ?? 0, a = !1, o = !1;
	if (U === "AIR_MOVE" && !K && W) {
		let e = r - W.x, t = i - W.y;
		o = n < xi && Math.hypot(e, t) < Si;
	}
	if (U === "AIR_MOVE" && Di(), U === "GESTURE_SWIPE" && w("Air: swipe gesture ended"), U === "WAIT_TAP_OR_HOLD" && W && n < 200) {
		let e = r - W.x, t = i - W.y;
		Math.hypot(e, t) < bi && (a = !0, hi ? (D({
			type: "pointer.click",
			button: "left",
			count: 2
		}), w("Air: tap-tap → double-click"), a = !1) : (D({
			type: "pointer.click",
			button: "left"
		}), w("Air: tap → click")));
	}
	o && (D({
		type: "pointer.click",
		button: "left"
	}), w("Air: short hold + small move → click (grace)"), a = !0), pi = t, mi = a, a && w(`Air: clean tap recorded, next tap+hold within ${yi}ms will start drag`), K = !1, Y();
}
function Ai(e, t) {
	if (!W) return;
	let n = e - W.x, r = t - W.y;
	U === "WAIT_TAP_OR_HOLD" ? Math.hypot(n, r) > 40 && (G !== null && (clearTimeout(G), G = null), hi = !1, mi = !1, wi("GESTURE_SWIPE"), ji(n, r)) : U === "GESTURE_SWIPE" && Mi(e, t);
}
function ji(e, t) {
	if (Math.abs(t) > Math.abs(e)) fi = "vertical", di = {
		x: W.x,
		y: W.y
	}, D({
		type: "pointer.scroll",
		dx: 0,
		dy: Math.round(t * .8)
	}), w(`Air: swipe ${t > 0 ? "down" : "up"} → scroll`);
	else {
		fi = "horizontal";
		let t = e > 0 ? "right" : "left";
		w(`Air: swipe ${t}`), D({
			type: "gesture.swipe",
			direction: t
		}), Y();
	}
}
function Mi(e, t) {
	if (!di || !W || fi !== "vertical") return;
	let n = t - di.y;
	Math.abs(n) > 2 && (D({
		type: "pointer.scroll",
		dx: 0,
		dy: Math.round(n * .8)
	}), di = {
		x: e,
		y: t
	});
}
var X = "IDLE", Ni = 0, Z = null, Q = null, $ = null, Pi = 250, Fi = 200, Ii = 15;
function Li() {
	X = "MIDDLE_SCROLL", Y(), D({
		type: "pointer.down",
		button: "middle"
	}), w("Neighbor: MIDDLE_SCROLL started (sensors active)"), d()?.classList.add("middle-scroll-active", "active"), Ei();
}
function Ri() {
	X === "MIDDLE_SCROLL" && (D({
		type: "pointer.up",
		button: "middle"
	}), w("Neighbor: MIDDLE_SCROLL ended"), X = "IDLE", Y(), d()?.classList.remove("middle-scroll-active", "active"));
}
function zi() {
	Q !== null && (clearTimeout(Q), Q = null), Z = null, X = "IDLE", d()?.classList.remove("middle-scroll-active", "active"), Y();
}
function Bi() {
	let e = d();
	e && (gi.has(e) || (gi.add(e), e.addEventListener("pointerdown", (t) => {
		t.preventDefault(), !($ !== null && $ !== t.pointerId) && (jt(), !Cn() && ($ = t.pointerId, e.setPointerCapture($), Ni = Date.now(), Z = {
			x: t.clientX,
			y: t.clientY
		}, X = "WAIT_TAP_OR_HOLD", e.classList.add("active"), Q = globalThis?.setTimeout?.(() => {
			Q = null, X === "WAIT_TAP_OR_HOLD" && Li();
		}, Pi)));
	}), e.addEventListener("pointermove", (e) => {
		if (!(e.pointerId !== $ || !Z) && (e.preventDefault(), X === "WAIT_TAP_OR_HOLD")) {
			let t = e.clientX - Z.x, n = e.clientY - Z.y;
			Math.hypot(t, n) > Ii && Q !== null && (clearTimeout(Q), Q = null);
		}
	}), e.addEventListener("pointerup", (t) => {
		if (t.pointerId !== $) return;
		t.preventDefault();
		let n = Date.now() - Ni;
		if (X === "MIDDLE_SCROLL") Ri();
		else if (X === "WAIT_TAP_OR_HOLD" && n < Fi && Z) {
			let e = t.clientX - Z.x, n = t.clientY - Z.y;
			Math.hypot(e, n) < Ii && (D({
				type: "pointer.click",
				button: "right"
			}), w("Neighbor: tap → right-click (context menu)"));
		}
		$ !== null && (e.releasePointerCapture($), $ = null), zi();
	}), e.addEventListener("pointercancel", (t) => {
		(t?.pointerId === $ || t?.pointerId == null) && (X === "MIDDLE_SCROLL" && (D({
			type: "pointer.up",
			button: "middle"
		}), w("Neighbor: middle-scroll cancelled")), $ !== null && (e.releasePointerCapture($), $ = null), zi());
	}), e.addEventListener("contextmenu", (e) => {
		e.preventDefault();
	}), w("Neighbor button initialized (tap: right-click, hold: middle-scroll via sensors)")));
}
function Vi() {
	let e = i();
	if (e) {
		if (Bi(), _i.has(e) || (_i.add(e), e.addEventListener("pointerdown", (t) => {
			t.preventDefault(), !(q !== null && q !== t.pointerId) && (q = t.pointerId, J = e, J.setPointerCapture(q), Oi(t));
		})), !vi) {
			vi = !0;
			let t = e.ownerDocument;
			t.addEventListener("pointermove", (e) => {
				e.pointerId === q && (e.preventDefault(), W && (Cn() || Ai(e.clientX, e.clientY)));
			}), t.addEventListener("pointerup", (e) => {
				if (e.pointerId === q) {
					if (e.preventDefault(), q !== null && J) try {
						J.releasePointerCapture(q);
					} catch {}
					q = null, J = null, ki(e);
				}
			}), t.addEventListener("pointercancel", (e) => {
				if (!(e?.pointerId !== q && e?.pointerId != null)) {
					if (q !== null && J) try {
						J.releasePointerCapture(q);
					} catch {}
					q = null, J = null, K && (D({
						type: "pointer.up",
						button: "left"
					}), K = !1, w("Air: drag cancelled (mouse up)")), Y();
				}
			});
		}
		w("Air button initialized");
	}
}
//#endregion
//#region src/ui/clipboard-toolbar.ts
var Hi = null, Ui = /* @__PURE__ */ new WeakSet(), Wi = /* @__PURE__ */ new WeakSet(), Gi = /* @__PURE__ */ new WeakSet();
function Ki() {
	Hi &&= (Hi(), null);
}
function qi(e, t) {
	let n = s();
	if (!n || n === void 0) return;
	let r = t?.source ? String(t.source) : "pc", i = String(e ?? "");
	if (!i) {
		n.classList.remove("visible"), n.innerHTML = "";
		return;
	}
	n.innerHTML = `
        <div class="meta">Clipboard (${r})</div>
        <div class="text"></div>
    `;
	let a = n.querySelector(".text");
	a && (a.textContent = i), n.classList.add("visible");
}
async function Ji() {
	let e = navigator;
	return e?.clipboard?.readText ? await e.clipboard.readText() : globalThis?.prompt?.("Вставь текст из телефона (clipboard readText недоступен):", "") || "";
}
async function Yi(e) {
	let t = navigator;
	if (t?.clipboard?.writeText) try {
		return await t.clipboard.writeText(e), !0;
	} catch {
		return !1;
	}
	return !1;
}
function Xi() {
	let e = f(), t = u(), n = o();
	Hi && Hi(), Hi = It((e, t) => qi(e, t)), zt().then((e) => {
		e?.ok && typeof e.text == "string" && qi(e.text, { source: "pc" });
	}), t && !Ui.has(t) && (Ui.add(t), t.addEventListener("click", async () => {
		let e = await Bt();
		if (!e?.ok) {
			w("Copy failed: " + (e?.error || "unknown"));
			return;
		}
		let t = String(e.text || "");
		qi(t, { source: "pc" }), await Yi(t) || w("PC clipboard received. If phone clipboard write is blocked, copy from the preview line.");
	})), e && !Wi.has(e) && (Wi.add(e), e.addEventListener("click", async () => {
		let e = await Vt();
		if (!e?.ok) {
			w("Cut failed: " + (e?.error || "unknown"));
			return;
		}
		let t = String(e.text || "");
		qi(t, { source: "pc" }), await Yi(t) || w("PC clipboard received (after cut). If phone clipboard write is blocked, copy from the preview line.");
	})), n && !Gi.has(n) && (Gi.add(n), n.addEventListener("click", async () => {
		let e = await Ji();
		if (!e) {
			w("Paste: phone clipboard is empty (or permission denied).");
			return;
		}
		let t = await Ht(e);
		if (!t?.ok) {
			w("Paste failed: " + (t?.error || "unknown"));
			return;
		}
		qi(e, { source: "phone" });
	}));
}
//#endregion
//#region src/ui/config-ui.ts
var Zi = "airpad-config-overlay";
function Qi() {
	let e = C() ?? document;
	return e.body ?? e.documentElement ?? document.body;
}
function $i(e, t) {
	let n = (t.querySelector("cw-shell-minimal[data-theme]") ?? t.querySelector("[data-shell-system=\"task-tab\"][data-theme]") ?? t.querySelector("[data-shell][data-theme]"))?.getAttribute("data-theme");
	n === "light" || n === "dark" ? e.setAttribute("data-theme", n) : e.removeAttribute("data-theme");
}
function ea() {
	let e = (C() ?? document).createElement("div");
	e.className = `config-overlay ${Zi}`, e.innerHTML = "\n        <div class=\"config-panel\">\n            <h3>Airpad Configuration</h3>\n            <div class=\"config-panel__body\">\n                <div class=\"config-group\">\n                    <label for=\"airpadQuickConnect\"><strong>Where to connect</strong>:</label>\n                    <input\n                        type=\"text\"\n                        id=\"airpadQuickConnect\"\n                        name=\"airpad-quick-connect\"\n                        placeholder=\"192.168.0.110 or 45.147.121.152\"\n                    />\n                    <label for=\"airpadAuthPass\"><strong>Auth pass token</strong> (optional):</label>\n                    <input\n                        type=\"password\"\n                        id=\"airpadAuthPass\"\n                        name=\"airpad-auth-pass\"\n                        autocomplete=\"off\"\n                        placeholder=\"If the remote requires a control token for input/mouse\"\n                    />\n                    <div class=\"field-hint\">\n                        Target device ID, IP, or domain. Ports are auto-discovered (8434, 443, 8080, …). Auth pass is optional.\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"config-actions\">\n                <button id=\"saveConfig\" type=\"button\" name=\"airpad-config-save\">Save & Reconnect</button>\n                <button id=\"cancelConfig\" type=\"button\" name=\"airpad-config-cancel\">Cancel</button>\n            </div>\n        </div>\n    ";
	let t = e.querySelector("#airpadQuickConnect"), n = e.querySelector("#airpadAuthPass"), r = e.querySelector("#saveConfig"), i = e.querySelector("#cancelConfig");
	t.value = je(), n.value = we();
	let a = () => {
		e.classList.remove("flex"), e.style.display = "none", e.setAttribute("aria-hidden", "true");
	};
	return r.addEventListener("click", () => {
		if (r.disabled) return;
		r.disabled = !0;
		let e = t.value, i = n.value;
		fe(i), ve(e, { discover: !1 }), a(), r.disabled = !1, (async () => {
			try {
				await ve(e, {
					discover: !0,
					probeTimeoutMs: 1200,
					maxProbeCandidates: 3
				});
				let t = await pe();
				t.ok || console.warn("[AirPad] native settings sync failed:", t.error);
			} catch (e) {
				console.warn("[AirPad] background save/reconnect failed:", e);
			}
			Nt({
				delayMs: 80,
				skipNativeSync: !0
			});
		})();
	}), i.addEventListener("click", a), e.addEventListener("click", (t) => {
		t.target === e && a();
	}), e;
}
function ta() {
	try {
		k();
	} catch {}
	let e = C() ?? document, t = Qi(), n = e.querySelector(`.${Zi}`);
	if (n && n.parentElement !== t && (n.remove(), n = null), !n) n = ea(), t.appendChild(n);
	else {
		let e = n.querySelector("#airpadQuickConnect"), t = n.querySelector("#airpadAuthPass");
		e && (e.value = je()), t && (t.value = we());
	}
	$i(n, e), n.classList.add("flex"), n.style.display = "flex", n.style.zIndex = "120000", n.setAttribute("aria-hidden", "false");
}
function na() {
	(C() ?? document).querySelectorAll(`.${Zi}`).forEach((e) => e.remove());
}
//#endregion
//#region src/component/AirpadEventBus.ts
var ra = class {
	handlers = /* @__PURE__ */ new Map();
	on(e, t) {
		let n = this.handlers.get(e) ?? /* @__PURE__ */ new Set();
		return n.add(t), this.handlers.set(e, n), () => this.off(e, t);
	}
	off(e, t) {
		let n = this.handlers.get(e);
		n && (n.delete(t), n.size === 0 && this.handlers.delete(e));
	}
	emit(e, t) {
		let n = this.handlers.get(e);
		if (n) for (let e of n) e(t);
	}
	clear() {
		this.handlers.clear();
	}
}, ia = "cw-airpad-action-rail", aa = class extends HTMLElement {
	abort = null;
	connectedCallback() {
		this.ensureRendered();
	}
	disconnectedCallback() {
		this.disconnect();
	}
	connect(e) {
		this.disconnect(), this.ensureRendered(), this.abort = new AbortController();
		let t = this.abort.signal;
		this.addEventListener("click", (t) => {
			let n = t.target;
			n instanceof Element && this.contains(n) && (n.closest("#btnConfig") && e.emit("ui.config.open", void 0), n.closest("#btnAdminDoor") && e.emit("ui.admin.open", void 0));
		}, {
			capture: !0,
			signal: t
		});
	}
	disconnect() {
		this.abort?.abort(), this.abort = null;
	}
	ensureRendered() {
		this.querySelector("#clipboardToolbar") || (this.innerHTML = "\n            <div class=\"bottom-toolbar\" id=\"clipboardToolbar\" aria-label=\"Clipboard actions\">\n                <button type=\"button\" id=\"btnCut\" name=\"airpad-clipboard-cut\" class=\"toolbar-btn\" aria-label=\"Cut (Ctrl+X)\">✂️</button>\n                <button type=\"button\" id=\"btnCopy\" name=\"airpad-clipboard-copy\" class=\"toolbar-btn\" aria-label=\"Copy (Ctrl+C)\">📋</button>\n                <button type=\"button\" id=\"btnPaste\" name=\"airpad-clipboard-paste\" class=\"toolbar-btn\" aria-label=\"Paste (Ctrl+V)\">📥</button>\n                <button type=\"button\" id=\"btnConnect\" name=\"airpad-ws-connect\" class=\"toolbar-btn connect-fab connect-fab--ws\">WS ↔</button>\n                <button type=\"button\" id=\"btnAdminDoor\" name=\"airpad-admin-door\" class=\"toolbar-btn toolbar-btn--admin-door\" aria-label=\"Open server admin (HTTPS)\" title=\"Server admin (HTTPS :8434)\">ADM</button>\n                <button type=\"button\" id=\"btnConfig\" name=\"airpad-config\" class=\"toolbar-btn\" aria-label=\"Configuration\" title=\"Configuration\">⚙️</button>\n            </div>\n            <div id=\"clipboardPreview\" class=\"clipboard-preview\" aria-live=\"polite\"></div>\n        ");
	}
};
function oa() {
	let e = globalThis?.customElements;
	!e || typeof e.get != "function" || typeof e.define != "function" || e.get(ia) || e.define(ia, aa);
}
//#endregion
//#region src/component/CwAirpadSidePanels.ts
var sa = "cw-airpad-side-panels", ca = class extends HTMLElement {
	abort = null;
	connectedCallback() {
		this.ensureRendered();
	}
	disconnectedCallback() {
		this.disconnect();
	}
	connect(e) {
		this.disconnect(), this.ensureRendered(), this.abort = new AbortController();
		let t = this.abort.signal, n = (e) => this.querySelector(`#${CSS.escape(e)}`), r = (e, r, i) => {
			let a = n(r), o = n(e), s = n(i);
			if (!a || !o) return;
			let c = () => {
				a.classList.add("open"), a.setAttribute("aria-hidden", "false"), o.setAttribute("aria-expanded", "true");
			}, l = () => {
				a.classList.remove("open"), a.setAttribute("aria-hidden", "true"), o.setAttribute("aria-expanded", "false");
			};
			o.addEventListener("click", c, { signal: t }), s?.addEventListener("click", l, { signal: t }), a.addEventListener("click", (e) => {
				e.target === a && l();
			}, { signal: t }), this.addEventListener("keydown", (e) => {
				e.key === "Escape" && a.classList.contains("open") && l();
			}, {
				capture: !0,
				signal: t
			});
		};
		r("logToggle", "logOverlay", "logClose"), r("hintToggle", "hintOverlay", "hintClose"), n("btnReload")?.addEventListener("click", () => e.emit("ui.reload.request", void 0), { signal: t }), n("btnMotionReset")?.addEventListener("click", () => e.emit("ui.motion.reset", void 0), { signal: t });
	}
	disconnect() {
		this.abort?.abort(), this.abort = null;
	}
	ensureRendered() {
		this.querySelector("#logOverlay") || (this.innerHTML = "\n            <div class=\"side-actions-row\" role=\"group\" aria-label=\"Panels\">\n                <button type=\"button\" id=\"hintToggle\" name=\"airpad-hints-toggle\" class=\"side-log-toggle side-hint-toggle\" aria-controls=\"hintOverlay\" aria-expanded=\"false\">Hints</button>\n                <button type=\"button\" id=\"logToggle\" name=\"airpad-log-toggle\" class=\"side-log-toggle\" aria-controls=\"logOverlay\" aria-expanded=\"false\">Логи</button>\n                <button type=\"button\" id=\"btnMotionReset\" name=\"airpad-motion-reset\" class=\"side-log-toggle side-fix-toggle\" aria-label=\"Reset motion calibration\">Fix</button>\n                <button type=\"button\" id=\"btnReload\" name=\"airpad-reload\" class=\"side-log-toggle side-reload-toggle\" aria-label=\"Reload\">Reload</button>\n            </div>\n\n            <div id=\"logOverlay\" class=\"log-overlay\" aria-hidden=\"true\">\n                <div class=\"log-panel\">\n                    <div class=\"log-overlay-header\">\n                        <span>Журнал соединения</span>\n                        <button type=\"button\" id=\"logClose\" name=\"airpad-log-close\" class=\"ghost-btn\" aria-label=\"Закрыть логи\">Закрыть</button>\n                    </div>\n                    <div id=\"logContainer\" class=\"log-container\"></div>\n                </div>\n            </div>\n\n            <div id=\"hintOverlay\" class=\"log-overlay hint-overlay\" aria-hidden=\"true\">\n                <div class=\"log-panel hint-panel\">\n                    <div class=\"log-overlay-header\">\n                        <span>Подсказки AirPad</span>\n                        <button type=\"button\" id=\"hintClose\" name=\"airpad-hint-close\" class=\"ghost-btn\" aria-label=\"Закрыть подсказки\">Закрыть</button>\n                    </div>\n                    <section class=\"hint hint-modal-content\" id=\"hintPanel\" aria-label=\"Airpad quick help\">\n                        <details class=\"hint-group\" data-hint-group>\n                            <summary>Жесты Air-кнопки</summary>\n                            <ul><li>Короткий тап — клик.</li><li>Удержание &gt; 100ms — режим air-мыши.</li><li>Свайп вверх/вниз по кнопке — скролл.</li><li>Свайп влево/вправо — жест.</li></ul>\n                        </details>\n                        <details class=\"hint-group\" data-hint-group>\n                            <summary>AI-кнопка</summary>\n                            <ul><li>Нажми и держи — идёт распознавание речи.</li><li>Отпусти — команда уйдёт в endpoint voice pipeline.</li></ul>\n                        </details>\n                        <details class=\"hint-group\" data-hint-group>\n                            <summary>Виртуальная клавиатура</summary>\n                            <ul><li>Открой кнопкой ⌨️ на нижней панели.</li><li>Поддерживает текст, эмодзи и спецсимволы.</li><li>Передаёт ввод в бинарном формате.</li></ul>\n                        </details>\n                    </section>\n                </div>\n            </div>\n        ");
	}
};
function la() {
	let e = globalThis?.customElements;
	!e || typeof e.get != "function" || typeof e.define != "function" || e.get(sa) || e.define(sa, ca);
}
//#endregion
//#region src/main.ts
var ua = null, da = 0, fa = null, pa = null;
function ma() {
	Qt(), da += 1, fa?.abort(), fa = null, pa?.(), pa = null, ua?.(), ua = null, Ki(), na(), g(null), hn(!1), Zr();
}
async function ha(n) {
	console.log("[Airpad] Mounting airpad app..."), da += 1, fa?.abort();
	let r = new AbortController();
	fa = r;
	let i = r.signal, a = da;
	oa(), la();
	let o = n ?? document.body.querySelector("#app") ?? document.body;
	if (o || (o = document.createElement("div"), o.id = "app"), o.replaceChildren(e`
        <div class="container">
            <header class="hero">
                <div class="status-container">
                    <div class="status-bar">
                        <div class="status-item">
                            WS:
                            <span id="wsStatus" class="value ws-status-bad">disconnected</span>
                        </div>
                        <div class="status-item">
                            Air:
                            <span id="airStatus" class="value">IDLE</span>
                        </div>
                        <div class="status-item">
                            AI:
                            <span id="aiStatus" class="value">idle</span>
                        </div>
                        <div class="status-item">
                            VK:
                            <span id="vkStatus" class="value">overlay:off</span>
                        </div>
                    </div>
                </div>
            </header>

            <div class="stage">
                <div class="ai-block">
                    <div id="aiButton" name="airpad-ai" class="big-button ai" data-no-virtual-keyboard="true">
                        AI
                    </div>
                    <div class="label">Голосовой ассистент (удерживай для записи)</div>
                </div>

                <div class="air-block">
                    <div class="air-row">
                    <button type="button" id="airButton" name="airpad-air" class="big-button air" data-no-virtual-keyboard="true">
                        Air
                    </button>
                    <button type="button" id="airNeighborButton" name="airpad-neighbor-act" data-no-virtual-keyboard="true"
                        class="neighbor-button">Act</button>
                    </div>
                    <div class="label">Air‑трекбол/курсор и жесты</div>
                </div>
            </div>
            <div id="voiceText" class="voice-line"></div>
        </div>

        <cw-airpad-side-panels></cw-airpad-side-panels>
        <cw-airpad-action-rail></cw-airpad-action-rail>
    `), g(o), await Yt(), i.aborted || a !== da) {
		t() === o && g(null);
		return;
	}
	await ga(a, i, o);
}
async function ga(e, t, r) {
	let i = r;
	if (!i) {
		console.warn("[Airpad] initAirpadApp: no mount root");
		return;
	}
	let a = (e) => n(`#${CSS.escape(e)}`), o = new ra(), s = i.querySelector("cw-airpad-side-panels"), c = i.querySelector("cw-airpad-action-rail");
	s?.connect(o), c?.connect(o), t.addEventListener("abort", () => {
		s?.disconnect(), c?.disconnect(), o.clear();
	}, { once: !0 });
	let u = (e, n) => {
		let r = o.on(e, n);
		t.addEventListener("abort", r, { once: !0 });
	};
	function d() {
		Nn(), Xr(), w("Motion runtime state reset (recalibrated).");
	}
	u("ui.config.open", () => ta()), u("ui.motion.reset", () => d()), u("ui.reload.request", () => {
		try {
			globalThis?.location?.reload?.();
		} catch (e) {
			console.error(e);
		}
		try {
			globalThis?.navigation?.navigate?.("airpad");
		} catch (e) {
			console.error(e);
		}
		try {
			globalThis?.navigation?.reload?.();
		} catch (e) {
			console.error(e);
		}
	});
	function f() {
		let e = a("hintPanel");
		if (!e) return;
		let n = Array.from(e.querySelectorAll("[data-hint-group]"));
		if (n.length === 0) return;
		let r = globalThis.matchMedia("(max-width: 980px), (max-height: 860px)"), i = () => {
			let e = r.matches;
			n.forEach((t) => {
				e && (t.open = !1);
			});
		};
		i(), r.addEventListener?.("change", i, { signal: t });
	}
	let p = (e) => e instanceof Error ? `${e.name}: ${e.message}` : typeof e == "string" ? e : String(e), m = (e, t) => {
		try {
			t();
		} catch (t) {
			w(`Airpad init [${e}] failed: ${p(t)}`);
		}
	}, h = () => !!(t.aborted || e !== void 0 && e !== da);
	if (h()) return;
	de(), pa ??= Ee(), m("websocket button", () => At(l())), m("speech", () => En()), m("AI button", () => Dn()), m("Air button", () => Vi()), m("virtual keyboard", () => gn(i)), ua?.(), ua = Ft((e) => {
		hn(e);
	}), m("clipboard toolbar", () => Xi()), m("adaptive hint", () => f()), w("Готово. Нажми \"WS Connect\", затем используй Air/AI кнопки."), w("Движение мыши: RelativeOrientation + Gyroscope/Accelerometer (запуск при удержании Air).");
	let g = () => {
		h() || (m("relative orientation", () => li()), m("gyroscope", () => Sr()), m("accelerometer", () => Wr()));
	};
	typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(g, { timeout: 2e3 }) : globalThis.setTimeout(g, 0);
	let _ = () => {
		h() || globalThis.location?.protocol !== "chrome-extension:" && Ne({
			immediate: !1,
			onRegistered() {
				w("PWA: service worker registered");
			},
			onRegisterError(e) {
				w("PWA: service worker register error: " + (e?.message ?? String(e)));
			}
		}).catch((e) => {
			w("PWA: service worker disabled: " + p(e));
		});
	};
	typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(_, { timeout: 6e3 }) : globalThis.setTimeout(_, 2500);
}
//#endregion
export { jt as a, Yt as i, ma as n, Mt as o, hn as r, ha as t };
