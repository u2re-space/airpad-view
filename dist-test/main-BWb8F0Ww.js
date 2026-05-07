import { Ut as e } from "./src-BoL7goZG.js";
import { _ as t, a as n, c as r, d as i, f as a, g as o, i as s, l as c, m as l, n as u, o as d, p as f, r as p, s as m, t as h, u as g, v as _ } from "./utils-D2Szamfx.js";
import { A as v, D as ee, E as y, O as b, a as x, d as te, k as ne, n as re, o as ie, r as ae, v as oe, y as se } from "./config-BynrmT5f.js";
import { a as ce } from "./sw-handling-DB5oCPCZ.js";
import { t as le } from "./settings-config-DYOSsuGM.js";
//#region src/input/keyboard/api.ts
var ue = null;
function de() {
	return "virtualKeyboard" in navigator && navigator.virtualKeyboard ? (ue = navigator.virtualKeyboard, ue.overlaysContent = !0, o("VirtualKeyboard API available"), !0) : !1;
}
function fe() {
	return ue;
}
function pe() {
	return ue !== null;
}
//#endregion
//#region src/input/keyboard/state.ts
var me = !1, he = null, ge = null, _e = !1;
function ve(e) {
	me = e;
}
function ye() {
	return me;
}
function be(e) {
	he = e;
}
function S() {
	return he;
}
function xe(e) {
	ge = e;
}
function C() {
	return ge;
}
function Se(e) {
	_e = e;
}
function w() {
	return _e;
}
"visualViewport" in globalThis && globalThis?.visualViewport?.addEventListener?.("resize", function(e) {
	me = e.target.height * e.target.scale / globalThis?.screen?.height < .75;
}), "virtualKeyboard" in globalThis?.navigator && (navigator.virtualKeyboard.overlaysContent = !0, navigator.virtualKeyboard.addEventListener("geometrychange", (e) => {
	let { x: t, y: n, width: r, height: i } = e.target.boundingRect;
	me = i > 0;
}));
//#endregion
//#region src/input/keyboard/constants.ts
var Ce = {
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
}, we = [
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
], Te = [
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
], Ee = !1, De = /* @__PURE__ */ new Set(), Oe = /* @__PURE__ */ new Set(), ke = /* @__PURE__ */ new Set();
function Ae() {
	Ee = !0, De.forEach((e) => e(!0));
}
function je() {
	Ee = !1, De.forEach((e) => e(!1));
}
function Me() {
	return Ee;
}
function Ne(e) {
	return De.add(e), () => De.delete(e);
}
function Pe(e) {
	return Oe.add(e), () => Oe.delete(e);
}
function Fe(e) {
	return ke.add(e), () => ke.delete(e);
}
function Ie(e, t, n) {
	return globalThis.dispatchEvent?.(new CustomEvent("cwsp:act", { detail: {
		what: e,
		payload: t,
		nodes: n
	} })), !0;
}
async function Le(e, t, n) {
	return globalThis.dispatchEvent?.(new CustomEvent("cwsp:ask", { detail: {
		what: e,
		payload: t,
		nodes: n
	} })), null;
}
async function T(e, t, n) {
	return Le(e, t, n);
}
//#endregion
//#region src/network/rails/packet-ws.ts
var Re = (e) => new Promise((t) => setTimeout(t, e)), ze = (e) => {
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
}, Be = (e) => e.what.startsWith("mouse:") ? {
	what: "airpad:mouse",
	payload: {
		op: e.what,
		params: [e.what],
		data: e.payload
	}
} : e.what.startsWith("keyboard:") ? {
	what: "airpad:keyboard",
	payload: {
		op: e.what,
		params: [e.what],
		data: e.payload
	}
} : e, Ve = async (e, t) => {
	let n = {
		op: "keyboard:tap",
		params: ["keyboard:tap"],
		data: {
			key: e,
			modifier: t || []
		}
	};
	try {
		await T("airpad:keyboard", n);
	} catch {
		await T("keyboard:tap", {
			key: e,
			modifier: t || []
		});
	}
}, He = async () => {
	try {
		let e = await T("airpad:clipboard:read", {
			op: "airpad:clipboard:read",
			params: ["airpad:clipboard:read"]
		});
		return typeof e == "string" ? e : String(e || "");
	} catch {
		let e = await T("clipboard:get", {});
		return typeof e == "string" ? e : String(e || "");
	}
}, Ue = async (e) => {
	try {
		await T("airpad:clipboard:write", {
			op: "airpad:clipboard:write",
			params: ["airpad:clipboard:write"],
			data: { text: e }
		});
	} catch {
		await T("clipboard:update", { text: e });
	}
}, We = () => {
	Ae();
}, Ge = () => {
	je();
}, Ke = () => Me(), qe = (e) => Ne(e), Je = (e) => Pe(e), Ye = (e) => {
	if (e.type === "gesture.swipe") return;
	let t = ze(e);
	if (!t) return;
	let n = Be(t);
	Ie(n.what, n.payload);
}, Xe = (e) => {
	let t = e instanceof Uint8Array ? e : new Uint8Array(e);
	if (t.byteLength < 6) return;
	let n = new DataView(t.buffer, t.byteOffset, t.byteLength);
	n.getUint8(4) === 6 && Ye({
		type: "keyboard.binary",
		codePoint: n.getUint32(0, !0),
		flags: n.getUint8(5)
	});
}, Ze = (e, t = 0) => {
	let n = /* @__PURE__ */ new ArrayBuffer(8), r = new DataView(n);
	return r.setUint32(0, e, !0), r.setUint8(4, 6), r.setUint8(5, t), r.setUint16(6, 0, !0), n;
}, Qe = async () => {
	if (!y()) return {
		ok: !1,
		error: "Remote clipboard bridge disabled in Settings → Server → Embedded shell."
	};
	try {
		return {
			ok: !0,
			text: await He()
		};
	} catch (e) {
		return {
			ok: !1,
			error: e?.error || e?.message || String(e)
		};
	}
}, $e = async () => {
	if (!y()) return {
		ok: !1,
		error: "Remote clipboard bridge disabled in Settings → Server → Embedded shell."
	};
	try {
		return await Ve("c", ["control"]), await Re(60), await Qe();
	} catch (e) {
		return {
			ok: !1,
			error: e?.error || e?.message || String(e)
		};
	}
}, et = async () => {
	if (!y()) return {
		ok: !1,
		error: "Remote clipboard bridge disabled in Settings → Server → Embedded shell."
	};
	try {
		return await Ve("x", ["control"]), await Re(60), await Qe();
	} catch (e) {
		return {
			ok: !1,
			error: e?.error || e?.message || String(e)
		};
	}
}, tt = async (e) => {
	if (!y()) return {
		ok: !1,
		error: "Remote clipboard bridge disabled in Settings → Server → Embedded shell."
	};
	try {
		return await Ue(e), await Re(20), await Ve("v", ["control"]), { ok: !0 };
	} catch (e) {
		return {
			ok: !1,
			error: e?.error || e?.message || String(e)
		};
	}
}, nt = (e) => new Promise((t) => setTimeout(t, e)), rt = () => {
	let e = Ke();
	return {
		connected: e,
		state: e ? "connected" : "disconnected",
		host: oe(),
		protocol: se(),
		detail: e ? null : "disconnected",
		timestampMs: Date.now()
	};
}, E = {
	init(e) {},
	connect() {
		We();
	},
	disconnect() {
		Ge();
	},
	reconnectAfterConfigChange(e) {
		Ge(), v(), nt(e?.delayMs ?? 80).then(() => {
			We();
		}).catch(() => {
			console.warn("[AirPad] reconnect after config failed");
		});
	},
	isConnected() {
		return Me();
	},
	getRemoteHost() {
		return oe();
	},
	getState() {
		return rt();
	},
	onConnectionChange(e) {
		return qe(e);
	},
	onServerClipboardUpdate(e) {
		return Je(e);
	},
	onStateChange(e) {
		e(rt().state, rt().detail);
		let t = qe((t) => {
			e(t ? "connected" : "disconnected", t ? null : "disconnected");
		});
		return () => {
			t();
		};
	},
	onVoiceMessage(e) {
		return Fe((t) => {
			e(t);
		});
	},
	sendCoordinatorAct(e, t, n) {
		return Ie(e, t, n);
	},
	sendCoordinatorAsk(e, t, n) {
		return Le(e, t, n);
	},
	sendCoordinatorRequest(e, t, n) {
		return T(e, t, n);
	},
	sendAirPadIntent(e) {
		Ye(e);
	},
	sendAirPadKeyboardChar(e) {
		Ye({
			type: "keyboard.char",
			char: e
		});
	},
	createAirPadKeyboardMessage(e, t = 0) {
		return Ze(e, t);
	},
	sendAirPadBinaryMessage(e) {
		Xe(e);
	},
	requestClipboardRead() {
		return Qe();
	},
	requestClipboardCopy() {
		return $e();
	},
	requestClipboardCut() {
		return et();
	},
	requestClipboardPaste(e) {
		return tt(e);
	},
	requestClipboardHistory(e) {
		return T("clipboard:get", {
			request: "history",
			target: e
		}, [e]);
	},
	sendClipboardUpdate(e, t) {
		return T("clipboard:update", t ? {
			text: e,
			target: t
		} : { text: e }, t ? [t] : void 0);
	}
}, it = (e) => {
	E.init(e);
}, at = () => {
	E.connect();
}, ot = () => {
	E.disconnect();
};
function st(e) {
	E.reconnectAfterConfigChange(e);
}
var ct = () => E.isConnected(), lt = (e) => E.onConnectionChange(e), ut = (e) => E.onServerClipboardUpdate(e), dt = (e) => E.onVoiceMessage(e), D = (e) => {
	E.sendAirPadIntent(e);
}, ft = (e) => {
	E.sendAirPadKeyboardChar(e);
}, pt = async () => E.requestClipboardRead(), mt = async () => E.requestClipboardCopy(), ht = async () => E.requestClipboardCut(), gt = async (e) => E.requestClipboardPaste(e);
//#endregion
//#region src/input/keyboard/message.ts
function O(e) {
	ct() && ft(e);
}
//#endregion
//#region src/input/keyboard/ui.ts
function _t() {
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
                        ${Object.keys(Ce).map((e) => `<button class="emoji-category-btn" data-category="${e}">${e}</button>`).join("")}
                    </div>
                    <div class="emoji-grid" id="emojiGrid"></div>
                </div>
            </div>
        </div>
    `;
}
function vt(e = !1) {
	let t = S()?.querySelector("#keyboardRows");
	t && (t.innerHTML = "", (e ? Te : we).forEach((e) => {
		let n = document.createElement("div");
		n.className = "keyboard-row", e.forEach((e) => {
			let t = document.createElement("button");
			t.className = "keyboard-key", t.textContent = e, t.setAttribute("data-key", e), t.addEventListener("click", () => bt(e)), n.appendChild(t);
		}), t.appendChild(n);
	}));
}
function yt(e) {
	let t = S()?.querySelector("#emojiGrid");
	if (!t) return;
	let n = Ce[e] || [];
	t.innerHTML = "", n.forEach((e) => {
		let n = document.createElement("button");
		n.className = "emoji-key", n.textContent = e, n.setAttribute("data-emoji", e), n.addEventListener("click", () => bt(e)), t.appendChild(n);
	});
}
function bt(e) {
	O(e === "backspace" ? "\b" : e === "enter" ? "\n" : e);
}
function xt() {
	let e = C();
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
function St(e) {
	e.stopPropagation();
}
function Ct() {
	return new Promise((e) => {
		globalThis.requestAnimationFrame?.(() => e()) ?? setTimeout(e, 0);
	});
}
//#endregion
//#region ../../projects/subsystem/runtime/doc-tools.ts
function wt(e) {
	let t = e.target;
	if (t instanceof HTMLElement) return t;
	if (t instanceof Node && t.parentElement) return t.parentElement;
	for (let t of e.composedPath?.() ?? []) if (t instanceof HTMLElement) return t;
	return null;
}
//#endregion
//#region src/input/keyboard/handlers.ts
var Tt = null;
function Et() {
	try {
		Tt?.abort();
	} catch {}
	Tt = null;
}
var Dt = /* @__PURE__ */ new WeakSet(), Ot = /* @__PURE__ */ new WeakSet(), kt = /* @__PURE__ */ new WeakSet(), At = "input,textarea,select,[contenteditable=\"true\"]", jt = ".config-overlay, .virtual-keyboard-container, .keyboard-toggle, .view-cwsp, .view-cwsp button, .view-cwsp .big-button, .view-cwsp .neighbor-button, .log-overlay.open, .log-panel, .airpad-config-overlay";
function Mt(e) {
	return e ? !!(e.matches?.(At) || e.closest?.(jt)) : !1;
}
function Nt() {
	let e = m(), t = e?.querySelector(".airpad-config-overlay") ?? e?.querySelector(".config-overlay");
	return t ? t.style.display === "flex" || t.classList.contains("flex") : !1;
}
function Pt(e) {
	let t = f();
	t && (t.textContent = e);
}
function Ft() {
	if (!w() || Nt()) return;
	let e = S(), t = fe(), n = C();
	t ? (n && (n.contentEditable = "true", n.setAttribute("virtualkeyboardpolicy", "manual")), xt(), n?.focus({ preventScroll: !0 }), t.show(), Pt("overlay:on / policy:manual")) : (ve(!0), e?.classList?.add?.("visible"), Pt("overlay:off")), vt(!1), yt("smileys");
}
var It = !1;
function k() {
	if (!It) {
		It = !0;
		try {
			let e = S(), t = fe(), n = C();
			ve(!1), e?.classList?.remove?.("visible"), t && (xt(), t.hide(), n && (n.contentEditable = "false", n.removeAttribute("virtualkeyboardpolicy")), n?.blur(), Pt("overlay:on / policy:auto"));
		} finally {
			It = !1;
		}
	}
}
function Lt() {
	ye() ? k() : Ft();
}
function Rt() {
	let e = C();
	e && (Dt.has(e) || (Dt.add(e), e.addEventListener("click", (e) => {
		if (St(e), !w()) {
			o("Keyboard is available after WS connection");
			return;
		}
		Nt() || Lt();
	})));
}
function zt() {
	let e = fe(), t = C();
	if (!e || !t || Ot.has(t)) return;
	Ot.add(t);
	let n = "⌨️", r = null, i = null, a = 0, s = !1, c = n, l = !1, u = !1, d = "", f = null, p = (e = !1) => {
		f !== null && (clearTimeout(f), f = null), e ? (u = !1, d = "") : f = globalThis.setTimeout(() => {
			u = !1, d = "", f = null;
		}, 600);
	}, m = (e) => {
		let t = e.includes(":") ? e.split(":").slice(1).join(":") : e, n = Date.now();
		return i === t && n - a < 20 ? !0 : (i = t, a = n, !1);
	}, h = () => {
		queueMicrotask(() => {
			r = null, xt(), c = n;
		});
	}, g = (e) => {
		w() && (O(e), h());
	}, _ = 12e3, v = 12e4, ee = 0, y = (e) => Array.from(String(e || "")), b = (e, t) => {
		let n = String(e || "");
		if (!n) {
			h();
			return;
		}
		if (t && m(t)) {
			h();
			return;
		}
		let r = y(n);
		r.length > v ? (r = r.slice(0, v), o(`[AirPad] Input truncated to ${v} chars to avoid UI freeze.`)) : r.length > _ && o(`[AirPad] Streaming large input (${r.length} chars) in chunks.`);
		let i = ++ee, a = 0, s = () => {
			if (i !== ee || !w()) return;
			let e = Math.min(a + 256, r.length);
			for (let t = a; t < e; t++) O(r[t]);
			if (a = e, a < r.length) {
				globalThis.setTimeout(s, 0);
				return;
			}
			h();
		};
		s();
	}, x = 0, te = (e, t) => {
		let n = String(e || "");
		if (!n) {
			t?.();
			return;
		}
		let r = y(n);
		r.length > v ? (r = r.slice(0, v), o(`[AirPad] Composition text truncated to ${v} chars to avoid UI freeze.`)) : r.length > _ && o(`[AirPad] Streaming large composition input (${r.length} chars) in chunks.`);
		let i = x, a = 0, s = () => {
			if (i !== x || !w()) return;
			let e = Math.min(a + 256, r.length);
			for (let t = a; t < e; t++) O(r[t]);
			if (a = e, a < r.length) {
				globalThis.setTimeout(s, 0);
				return;
			}
			t?.();
		};
		s();
	}, ne = (e, t) => {
		if (e <= 0) {
			t?.();
			return;
		}
		let n = x, r = e, i = () => {
			if (n !== x || !w()) return;
			let e = Math.min(r, 256);
			for (let t = 0; t < e; t++) O("\b");
			if (r -= e, r > 0) {
				globalThis.setTimeout(i, 0);
				return;
			}
			t?.();
		};
		i();
	}, re = (e, t, n) => {
		let r = String(t || "");
		r.length > v && (r = r.slice(0, v), o(`[AirPad] Composition replacement truncated to ${v} chars.`)), ne(e, () => {
			if (!r) {
				n();
				return;
			}
			te(r, n);
		});
	}, ie = (e) => e.replace(/⌨️/g, "").replace(/⌨\uFE0F?/g, "").replace(/\uFE0F/g, ""), ae = (e, t) => {
		let n = ie(e), r = ie(t);
		return n.startsWith(r) ? n.slice(r.length) : r.startsWith(n) ? "" : n;
	};
	t.addEventListener("keydown", (e) => {
		if (w()) {
			if (e.isComposing) {
				f !== null && (clearTimeout(f), f = null);
				return;
			}
			if (u && !e.isComposing && p(!0), l = !1, (e.ctrlKey || e.metaKey) && !e.altKey) {
				let t = String(e.key || "").toLowerCase();
				if (t === "c" || t === "x") {
					e.preventDefault(), s = !1, p(!0);
					return;
				}
			}
			if (e.key === "Backspace" || e.key === "Delete") {
				e.preventDefault(), s = !1, m("backspace") || g("\b");
				return;
			}
			if (e.key === "Enter") {
				e.preventDefault(), s = !1, p(!0), m("enter") || g("\n");
				return;
			}
			if (e.key === "Tab") {
				e.preventDefault(), s = !1, m("tab") || g("	");
				return;
			}
			if (e.key === "Unidentified" || e.key === "Process" || e.key === "") {
				s = !0, c = t.textContent || n;
				return;
			}
			if (e.key === " ") {
				e.preventDefault(), s = !1, p(!0);
				return;
			}
			if (e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey) {
				e.preventDefault(), s = !1;
				return;
			}
			s = !1;
		}
	}), t.addEventListener("beforeinput", (e) => {
		if (!w()) return;
		let r = e;
		if (c = t.textContent || n, l = !0, r.inputType === "insertCompositionText") {
			f !== null && (clearTimeout(f), f = null);
			return;
		}
		if (r.inputType === "insertText" && u && p(!0), s && r.inputType === "insertText" && r.data) {
			e.preventDefault(), s = !1, b(r.data, `text:${r.data}`);
			return;
		}
		if (r.inputType === "insertText") {
			e.preventDefault();
			let t = r.data;
			t && b(t, `text:${t}`);
			return;
		}
		if (r.inputType === "insertReplacementText") {
			e.preventDefault(), p(!0);
			let t = r.data || r.dataTransfer?.getData("text");
			t && b(t, `replace:${t}`);
			return;
		}
		if (r.inputType === "insertLineBreak" || r.inputType === "insertParagraph") {
			e.preventDefault(), p(!0), m("linebreak") || g("\n");
			return;
		}
		if (r.inputType === "deleteContentBackward" || r.inputType === "deleteContentForward") {
			e.preventDefault(), m("deleteback") || g("\b");
			return;
		}
		if (r.inputType === "insertFromPaste") {
			e.preventDefault(), p(!0);
			let t = r.data || r.dataTransfer?.getData("text/plain");
			t && b(t);
			return;
		}
	}), t.addEventListener("compositionstart", () => {
		w() && (f !== null && (clearTimeout(f), f = null), u = !0, d = "", s = !1, x++);
	}), t.addEventListener("compositionupdate", (e) => {
		if (!w()) return;
		f !== null && (clearTimeout(f), f = null), x++;
		let t = e.data || "", n = () => {
			d = t, h();
		};
		if (t.startsWith(d)) {
			let e = t.slice(d.length);
			if (e.length > 0) if (e.length <= 256) {
				for (let t of e) O(t);
				n();
			} else te(e, n);
			else n();
		} else if (d.startsWith(t)) {
			let e = y(d).length - y(t).length;
			if (e <= 256) {
				for (let t = 0; t < e; t++) O("\b");
				n();
			} else ne(e, n);
		} else {
			let e = y(d).length, r = y(t).length;
			if (e <= 256 && r <= 256) {
				for (let t = 0; t < e; t++) O("\b");
				for (let e of t) O(e);
				n();
			} else re(e, t, n);
		}
	}), t.addEventListener("compositionend", (e) => {
		if (!w()) return;
		f !== null && (clearTimeout(f), f = null), x++;
		let t = e.data || "", n = () => {
			u = !1, d = "", h();
		};
		if (t !== d) {
			let e = y(d).length, r = y(t).length;
			if (e <= 256 && r <= 256) {
				for (let t = 0; t < e; t++) O("\b");
				for (let e of t) O(e);
				n();
			} else re(e, t, n);
		} else n();
	}), t.addEventListener("input", (e) => {
		if (!w()) return;
		let t = e;
		if (t.inputType === "insertCompositionText" || t.inputType?.includes("Composition") || u) return;
		let n = e.target.textContent || "";
		if (s) {
			s = !1;
			let e = ae(n, c);
			e.length > 0 && !m(`unidentified:${e}`) && b(e), h();
			return;
		}
		if (!l) {
			let e = ae(n, c);
			e.length > 0 && !m(`input:${e}`) && b(e), h();
			return;
		}
		h(), l = !1;
	}), t.addEventListener("paste", (e) => {
		if (!w()) return;
		e.preventDefault(), s = !1, p(!0);
		let t = e.clipboardData?.getData("text") || "";
		t && b(t);
	}), t.addEventListener("drop", (e) => {
		if (!w()) return;
		e.preventDefault(), s = !1, p(!0);
		let t = e.dataTransfer?.getData("text") || "";
		if (t) {
			b(t);
			return;
		}
		h();
	}), t.addEventListener("blur", () => {
		r !== null && (clearTimeout(r), r = null), f !== null && (clearTimeout(f), f = null), u = !1, d = "", s = !1, i = null, l = !1, c = n, xt();
	}), t.addEventListener("focus", () => {
		i = null, a = 0, s = !1, l = !1, u = !1, d = "", f !== null && (clearTimeout(f), f = null), c = n, xt();
	});
}
function Bt() {
	let e = S();
	if (!e) return;
	if (!kt.has(e)) {
		kt.add(e), e.querySelector(".keyboard-close")?.addEventListener("click", k);
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
			r = !r, vt(r), n.classList.toggle("active", r);
		});
		let i = e.querySelectorAll(".emoji-category-btn");
		if (i.length > 0) {
			let e = i[0];
			e.classList.add("active");
			let t = e.getAttribute("data-category");
			t && yt(t), i.forEach((e) => {
				e.addEventListener("click", () => {
					let t = e.getAttribute("data-category");
					t && (i.forEach((e) => e.classList.remove("active")), e.classList.add("active"), yt(t));
				});
			});
		}
		e.addEventListener("click", (t) => {
			t.target === e && k();
		});
	}
	let t = m();
	if (!t) return;
	Et(), Tt = new AbortController();
	let { signal: n } = Tt;
	t.addEventListener("focusout", (e) => {
		if (!w() || !ye()) return;
		let t = wt(e), n = e.relatedTarget, r = n instanceof HTMLElement ? n : null;
		Mt(t) || Mt(r) || k();
	}, { signal: n }), t.addEventListener("pointerdown", (e) => {
		w() && ye() && (Mt(wt(e)) || k());
	}, {
		capture: !1,
		passive: !0,
		signal: n
	});
}
//#endregion
//#region src/input/virtual-keyboard.ts
function Vt(e) {
	let t = C();
	if (!(t instanceof HTMLButtonElement)) return;
	t.disabled = !1, t.setAttribute("aria-disabled", String(!e)), t.classList.toggle("is-disabled", !e);
	let n = f();
	n && (n.textContent = `${(n.textContent || "overlay:off").replace(/\s*\/\s*remote:(on|off)\s*$/i, "")} / remote:${e ? "on" : "off"}`);
}
function Ht(e) {
	Se(e), Vt(e), e || k();
}
function Ut(e) {
	de();
	let t = pe(), n = f();
	n && (n.textContent = t ? "overlay:on / policy:auto" : "overlay:off");
	let r = d(), i = e?.closest?.(".view-cwsp") ?? e ?? r?.closest?.(".view-cwsp") ?? r ?? document.body, a = i.querySelector(".virtual-keyboard-container");
	if (!a) {
		let e = _t();
		i.insertAdjacentHTML("beforeend", e), a = i.querySelector(".virtual-keyboard-container");
	}
	if (!a) {
		o("Failed to create keyboard element");
		return;
	}
	a.classList.remove("visible"), be(a);
	let s = i.querySelector(".bottom-toolbar") ?? i, c = s.querySelector(".keyboard-toggle");
	if (!c) {
		let e = t ? "<button type=\"button\" name=\"airpad-keyboard-toggle\" tabindex=\"-1\" contenteditable=\"false\" virtualkeyboardpolicy=\"manual\" class=\"keyboard-toggle keyboard-toggle-editable\" aria-label=\"Toggle keyboard\">⌨️</button>" : "<button type=\"button\" name=\"airpad-keyboard-toggle\" tabindex=\"-1\" class=\"keyboard-toggle\" aria-label=\"Toggle keyboard\">⌨️</button>";
		s.insertAdjacentHTML("beforeend", e), c = s.querySelector(".keyboard-toggle");
	}
	if (!c) {
		o("Failed to create toggle button");
		return;
	}
	c.autofocus = !1, c.removeAttribute("autofocus"), c instanceof HTMLElement && (c.setAttribute("autocapitalize", "off"), c.setAttribute("autocorrect", "off"), c.setAttribute("spellcheck", "false")), xe(c), Ht(!1), Rt(), zt(), Bt(), o("Virtual keyboard initialized");
}
//#endregion
//#region src/input/speech.ts
var A = null, Wt = !1, j = !1, Gt = "ru-RU", Kt = !1, qt = null, Jt = (e) => {
	let t = (e || "").trim();
	return !t || t === "ru" ? "ru-RU" : t === "en" ? "en-US" : t === "en-GB" ? "en-GB" : t === "en-US" ? "en-US" : t;
};
async function Yt() {
	try {
		Gt = Jt((await le())?.speech?.language), A && (A.lang = Gt);
	} catch {
		Gt = "ru-RU";
	}
}
var Xt = () => Wt || j;
function Zt(e) {
	let t = u();
	t && (t.textContent = e);
}
function Qt() {
	let e = window.SpeechRecognition || window.webkitSpeechRecognition;
	if (!e) return o("SpeechRecognition API не поддерживается."), null;
	let t = new e();
	return t.lang = Gt, t.interimResults = !1, t.maxAlternatives = 1, t;
}
function $t() {
	Kt || (Kt = !0, Yt(), A = Qt(), qt?.(), qt = dt((e) => {
		let t = l();
		t && (t.textContent = e.text);
	}), A && (A.onstart = () => {
		let e = h(), t = l();
		Wt = !0, j = !0, e && e.classList.add("listening"), Zt("listening"), t && (t.textContent = "Слушаю..."), o("Speech: start");
	}, A.onend = () => {
		let e = h();
		Wt = !1, j = !1, e && e.classList.remove("listening"), Zt("idle"), o("Speech: end");
	}, A.onerror = (e) => {
		let t = l();
		t && (t.textContent = "Ошибка распознавания: " + e.error), o("Speech error: " + e.error);
	}, A.onresult = (e) => {
		let t = l(), n = (e.results[0][0].transcript || "").trim(), r = n.split(/\s+/).filter(Boolean);
		if (t && (t.textContent = n ? "Команда: " + n : "Команда не распознана"), o("Speech result: " + n), r.length < 2) {
			o("Speech: недостаточно слов (нужно >= 2) — не отправляем и не подключаем WS");
			return;
		}
		let i = (e) => {
			if (ct()) {
				D({
					type: "voice.submit",
					text: n
				});
				return;
			}
			if (Date.now() > e) {
				o("Speech: не удалось дождаться WS, команда не отправлена");
				return;
			}
			setTimeout(() => i(e), 120);
		};
		ct() ? D({
			type: "voice.submit",
			text: n
		}) : (o("Speech: подключаем WS перед отправкой команды"), at(), i(Date.now() + 2e3));
	}));
}
function en() {
	let e = h();
	if (!e) return;
	let t = !1, n = null;
	e.addEventListener("pointerdown", (r) => {
		if (r.preventDefault(), !t) {
			if (t = !0, n = r.pointerId, e.setPointerCapture(n), !A) {
				o("SpeechRecognition недоступен");
				return;
			}
			try {
				A.start();
			} catch (e) {
				o("Recognition start error: " + e.message);
			}
		}
	}), e.addEventListener("pointerup", (r) => {
		if (!(!t || r.pointerId !== n) && (r.preventDefault(), t = !1, e.releasePointerCapture(n), n = null, A)) try {
			A.stop();
		} catch (e) {
			o("Recognition stop error: " + e.message);
		}
	}), e.addEventListener("pointercancel", () => {
		if (t && (t = !1, n = null, A)) try {
			A.stop();
		} catch {}
	});
}
//#endregion
//#region src/config/motion-state.ts
var M = {
	dx: 0,
	dy: 0,
	dz: 0
}, N = null;
function tn() {
	M.dx = 0, M.dy = 0, M.dz = 0;
}
function nn() {
	N === null && (N = globalThis?.setTimeout?.(() => {
		N = null, !(M.dx === 0 && M.dy === 0 && M.dz === 0) && (D({
			type: "pointer.move",
			dx: M.dx,
			dy: M.dy,
			dz: M.dz
		}), tn());
	}, 7));
}
function rn(e, t, n = 0) {
	Math.abs(e) < .001 && (e = 0), Math.abs(t) < .001 && (t = 0), Math.abs(n) < .001 && (n = 0), !(e === 0 && t === 0 && n === 0) && (M.dx += e, M.dy += t, M.dz += n, nn());
}
function an() {
	tn(), N !== null && (clearTimeout(N), N = null);
}
//#endregion
//#region src/utils/math.ts
function P(e) {
	return Number.isFinite(e) ? e : 0;
}
function on(e) {
	let t = P(e);
	return t < 0 ? 0 : t > 1 ? 1 : t;
}
function sn(e, t, n) {
	return P(e) + (P(t) - P(e)) * on(n);
}
function cn(e, t) {
	let n = Math.max(0, P(e)), r = Math.abs(P(t));
	return 1 - Math.exp(-r * n);
}
function F() {
	return {
		x: 0,
		y: 0,
		z: 0
	};
}
function ln(e, t, n = .5) {
	let r = P(e.x), i = P(e.y), a = P(e.z), o = P(t.x), s = P(t.y), c = P(t.z), l = P(n);
	return {
		x: r + (o - r) * l,
		y: i + (s - i) * l,
		z: a + (c - a) * l
	};
}
function un(e, t) {
	let n = Math.abs(P(t));
	if (n === 0) return F();
	let r = P(e.x), i = P(e.y), a = P(e.z), o = Math.hypot(r, i, a);
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
function dn(e, t = .01) {
	let n = Math.abs(P(t) || .01);
	return Math.abs(P(e.x)) < n && Math.abs(P(e.y)) < n && Math.abs(P(e.z)) < n;
}
function fn(e, t, n = .25) {
	return ln(e, t, n);
}
function pn(e, t, n, r) {
	let i = {
		ax: P(e.x),
		ay: P(e.y),
		az: P(e.z)
	};
	return {
		x: i[t],
		y: i[n],
		z: i[r]
	};
}
function mn(e, t, n) {
	let r = P(t), i = Math.cos(r), a = Math.sin(r), o = P(e.x), s = P(e.y);
	return {
		x: o * i - s * a,
		y: o * a + s * i,
		z: P(n === void 0 ? e.z : n)
	};
}
performance.now();
function hn() {
	performance.now(), _n = F(), vn = F(), yn = F();
}
function gn() {
	hn();
}
var _n = F(), vn = F(), yn = F();
performance.now();
function bn() {
	performance.now(), Sn = F(), Cn = F(), wn = F();
}
function xn() {
	bn();
}
var Sn = F(), Cn = F(), wn = F(), I = "IDLE", Tn = 0, L = null, R = null, z = !1, B = null, En = null, Dn = 0, On = !1, V = !1, kn = /* @__PURE__ */ new WeakSet(), An = /* @__PURE__ */ new WeakSet(), jn = !1, H = null, U = null, Mn = 300, Nn = 150, Pn = 12, Fn = 340, In = 16;
function Ln() {
	return I;
}
function W(e) {
	let t = n(), r = p();
	I = e, t && (t.textContent = e + (z ? " [DRAG]" : "")), r && (r.classList.toggle("air-move", e === "AIR_MOVE"), r.classList.toggle("active", e !== "IDLE"), r.classList.toggle("drag-active", z));
}
function G() {
	W("IDLE"), L = null, B = null, En = null, V = !1, R !== null && (clearTimeout(R), R = null);
}
function Rn(e = !1) {
	W("AIR_MOVE"), gn(), xn(), e && !z ? (z = !0, D({
		type: "pointer.down",
		button: "left"
	}), o("Air: AIR_MOVE + DRAG started (mouse down)"), W("AIR_MOVE")) : o("Air: AIR_MOVE started (cursor control via sensors)");
}
function zn() {
	I === "AIR_MOVE" && (z ? (D({
		type: "pointer.up",
		button: "left"
	}), o("Air: DRAG ended (mouse up)"), z = !1) : o("Air: AIR_MOVE ended"));
}
function Bn(e) {
	if (at(), Xt()) return;
	let t = Date.now(), n = t - Dn;
	On && n < Mn ? (V = !0, o(`Air: double-tap detected (${n}ms since last tap), preparing for drag...`)) : V = !1, On = !1, R !== null && (clearTimeout(R), R = null), Tn = t, L = {
		x: e.clientX,
		y: e.clientY
	}, W("WAIT_TAP_OR_HOLD");
	let r = V ? Nn : 100;
	R = globalThis?.setTimeout?.(() => {
		I === "WAIT_TAP_OR_HOLD" && Rn(V);
	}, r);
}
function Vn(e) {
	if (Xt()) {
		G();
		return;
	}
	let t = Date.now(), n = t - Tn, r = e?.clientX ?? L?.x ?? 0, i = e?.clientY ?? L?.y ?? 0, a = !1, s = !1;
	if (I === "AIR_MOVE" && !z && L) {
		let e = r - L.x, t = i - L.y;
		s = n < Fn && Math.hypot(e, t) < In;
	}
	if (I === "AIR_MOVE" && zn(), I === "GESTURE_SWIPE" && o("Air: swipe gesture ended"), I === "WAIT_TAP_OR_HOLD" && L && n < 200) {
		let e = r - L.x, t = i - L.y;
		Math.hypot(e, t) < Pn && (a = !0, V ? (D({
			type: "pointer.click",
			button: "left",
			count: 2
		}), o("Air: tap-tap → double-click"), a = !1) : (D({
			type: "pointer.click",
			button: "left"
		}), o("Air: tap → click")));
	}
	s && (D({
		type: "pointer.click",
		button: "left"
	}), o("Air: short hold + small move → click (grace)"), a = !0), Dn = t, On = a, a && o(`Air: clean tap recorded, next tap+hold within ${Mn}ms will start drag`), z = !1, G();
}
function Hn(e, t) {
	if (!L) return;
	let n = e - L.x, r = t - L.y;
	I === "WAIT_TAP_OR_HOLD" ? Math.hypot(n, r) > 40 && (R !== null && (clearTimeout(R), R = null), V = !1, On = !1, W("GESTURE_SWIPE"), Un(n, r)) : I === "GESTURE_SWIPE" && Wn(e, t);
}
function Un(e, t) {
	if (Math.abs(t) > Math.abs(e)) En = "vertical", B = {
		x: L.x,
		y: L.y
	}, D({
		type: "pointer.scroll",
		dx: 0,
		dy: Math.round(t * .8)
	}), o(`Air: swipe ${t > 0 ? "down" : "up"} → scroll`);
	else {
		En = "horizontal";
		let t = e > 0 ? "right" : "left";
		o(`Air: swipe ${t}`), D({
			type: "gesture.swipe",
			direction: t
		}), G();
	}
}
function Wn(e, t) {
	if (!B || !L || En !== "vertical") return;
	let n = t - B.y;
	Math.abs(n) > 2 && (D({
		type: "pointer.scroll",
		dx: 0,
		dy: Math.round(n * .8)
	}), B = {
		x: e,
		y: t
	});
}
var K = "IDLE", Gn = 0, q = null, J = null, Y = null, Kn = 250, qn = 200, Jn = 15;
function Yn() {
	K = "MIDDLE_SCROLL", G(), D({
		type: "pointer.down",
		button: "middle"
	}), o("Neighbor: MIDDLE_SCROLL started (sensors active)"), s()?.classList.add("middle-scroll-active", "active"), Rn();
}
function Xn() {
	K === "MIDDLE_SCROLL" && (D({
		type: "pointer.up",
		button: "middle"
	}), o("Neighbor: MIDDLE_SCROLL ended"), K = "IDLE", G(), s()?.classList.remove("middle-scroll-active", "active"));
}
function Zn() {
	J !== null && (clearTimeout(J), J = null), q = null, K = "IDLE", s()?.classList.remove("middle-scroll-active", "active"), G();
}
function Qn() {
	let e = s();
	e && (kn.has(e) || (kn.add(e), e.addEventListener("pointerdown", (t) => {
		t.preventDefault(), !(Y !== null && Y !== t.pointerId) && (at(), !Xt() && (Y = t.pointerId, e.setPointerCapture(Y), Gn = Date.now(), q = {
			x: t.clientX,
			y: t.clientY
		}, K = "WAIT_TAP_OR_HOLD", e.classList.add("active"), J = globalThis?.setTimeout?.(() => {
			J = null, K === "WAIT_TAP_OR_HOLD" && Yn();
		}, Kn)));
	}), e.addEventListener("pointermove", (e) => {
		if (!(e.pointerId !== Y || !q) && (e.preventDefault(), K === "WAIT_TAP_OR_HOLD")) {
			let t = e.clientX - q.x, n = e.clientY - q.y;
			Math.hypot(t, n) > Jn && J !== null && (clearTimeout(J), J = null);
		}
	}), e.addEventListener("pointerup", (t) => {
		if (t.pointerId !== Y) return;
		t.preventDefault();
		let n = Date.now() - Gn;
		if (K === "MIDDLE_SCROLL") Xn();
		else if (K === "WAIT_TAP_OR_HOLD" && n < qn && q) {
			let e = t.clientX - q.x, n = t.clientY - q.y;
			Math.hypot(e, n) < Jn && (D({
				type: "pointer.click",
				button: "right"
			}), o("Neighbor: tap → right-click (context menu)"));
		}
		Y !== null && (e.releasePointerCapture(Y), Y = null), Zn();
	}), e.addEventListener("pointercancel", (t) => {
		(t?.pointerId === Y || t?.pointerId == null) && (K === "MIDDLE_SCROLL" && (D({
			type: "pointer.up",
			button: "middle"
		}), o("Neighbor: middle-scroll cancelled")), Y !== null && (e.releasePointerCapture(Y), Y = null), Zn());
	}), e.addEventListener("contextmenu", (e) => {
		e.preventDefault();
	}), o("Neighbor button initialized (tap: right-click, hold: middle-scroll via sensors)")));
}
function $n() {
	let e = p();
	if (e) {
		if (Qn(), An.has(e) || (An.add(e), e.addEventListener("pointerdown", (t) => {
			t.preventDefault(), !(H !== null && H !== t.pointerId) && (H = t.pointerId, U = e, U.setPointerCapture(H), Bn(t));
		})), !jn) {
			jn = !0;
			let t = e.ownerDocument;
			t.addEventListener("pointermove", (e) => {
				e.pointerId === H && (e.preventDefault(), L && (Xt() || Hn(e.clientX, e.clientY)));
			}), t.addEventListener("pointerup", (e) => {
				if (e.pointerId === H) {
					if (e.preventDefault(), H !== null && U) try {
						U.releasePointerCapture(H);
					} catch {}
					H = null, U = null, Vn(e);
				}
			}), t.addEventListener("pointercancel", (e) => {
				if (!(e?.pointerId !== H && e?.pointerId != null)) {
					if (H !== null && U) try {
						U.releasePointerCapture(H);
					} catch {}
					H = null, U = null, z && (D({
						type: "pointer.up",
						button: "left"
					}), z = !1, o("Air: drag cancelled (mouse up)")), G();
				}
			});
		}
		o("Air button initialized");
	}
}
//#endregion
//#region src/input/sensor/relative-orientation.ts
var X = null, er = !1, tr = null, nr = null, Z = F(), Q = 60;
function rr() {
	nr = null, Z = F(), Q = 60;
}
function ir() {
	try {
		X && X.stop?.();
	} catch {}
	X = null, er && tr && globalThis.removeEventListener("deviceorientation", tr), er = !1, tr = null;
}
var ar = (e, t) => {
	let [n, r, i, a] = e, o = Math.hypot(n, r, i, a) || 1, s = n / o, c = r / o, l = i / o, u = a / o;
	return t && s * t[0] + c * t[1] + l * t[2] + u * t[3] < 0 && (s = -s, c = -c, l = -l, u = -u), [
		s,
		c,
		l,
		u
	];
}, or = (e) => {
	let [t, n, r, i] = e;
	return [
		-t,
		-n,
		-r,
		i
	];
}, sr = (e, t) => {
	let [n, r, i, a] = e, [o, s, c, l] = t;
	return [
		a * o + n * l + r * c - i * s,
		a * s - n * c + r * l + i * o,
		a * c + n * s - r * o + i * l,
		a * l - n * o - r * s - i * c
	];
}, cr = (e) => {
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
function lr(e) {
	let t = pn(e, "az", "ay", "ax"), n = mn(t, t.z * -1, 1);
	return {
		x: n.x * -1 * 600,
		y: n.y * -1 * 600,
		z: n.z * -1 * 600
	};
}
function ur(e, t) {
	let n = lr(e), r = Math.hypot(n.x, n.y, n.z), i = Math.max(60, Math.min(800, r)), a = i > Q ? cn(t, 6) : cn(t, 14);
	return Q = sn(Q, i, a), Number.isFinite(Q) || (Q = 60), Q = Math.max(60, Math.min(800, Q)), Q;
}
function dr(e, t) {
	return un(lr(e), t);
}
function fr(e, t) {
	if (!e || e.length < 4) return F();
	let n = ar([
		e[0],
		e[1],
		e[2],
		e[3]
	], nr);
	nr ||= n;
	let r = sr(n, or(nr));
	nr = n;
	let i = cr(r), a = ur(i, t), o = lr(i), s = on(cn(t, sn(6, 24, on((Math.hypot(o.x, o.y, o.z) - 60) / 740))) * on(ae));
	Z = fn(Z, i, s * .9);
	let c = a / 600;
	Z = un(Z, Math.max(re, c));
	let l = {
		x: Math.abs(Z.x) < .001 ? 0 : Z.x,
		y: Math.abs(Z.y) < .001 ? 0 : Z.y,
		z: Math.abs(Z.z) < .001 ? 0 : Z.z
	};
	if (Math.abs(l.x) < .001 && Math.abs(l.y) < .001 && Math.abs(l.z) < .001) return F();
	let u = dr(l, a);
	return dn(u, .001) ? F() : u;
}
function pr() {
	ir();
	let e = () => {
		if (er) return;
		let e = performance.now(), t = {
			x: 0,
			y: 0,
			z: 0
		};
		tr = (n) => {
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
			let c = dr({
				x: s.x * Math.PI / 180,
				y: s.y * Math.PI / 180,
				z: s.z * Math.PI / 180
			}, ur({
				x: s.x * Math.PI / 180,
				y: s.y * Math.PI / 180,
				z: s.z * Math.PI / 180
			}, i));
			Ln && Ln() !== "AIR_MOVE" || ct() && (j || dn(c, .001) || rn(c.x, c.y, c.z));
		}, globalThis.addEventListener("deviceorientation", tr, { passive: !0 }), er = !0, o("RelativeOrientation fallback active (deviceorientation)");
	};
	if (!window.RelativeOrientationSensor) {
		o("RelativeOrientationSensor API is not supported."), e();
		return;
	}
	try {
		X = new window.RelativeOrientationSensor({
			frequency: 120,
			referenceFrame: "device"
		});
	} catch (e) {
		o("Cannot create RelativeOrientationSensor: " + (e?.message || e)), X = null;
		return;
	}
	let t = performance.now();
	X.addEventListener("reading", () => {
		let e = performance.now(), n = Math.max(1e-5, (e - t) / 1e3);
		t = e;
		let r = fr(X.quaternion, n);
		Ln && Ln() !== "AIR_MOVE" || ct() && (j || rn(r.x, r.y, r.z));
	}), X.addEventListener("error", (t) => {
		o("RelativeOrientationSensor error: " + (t?.error?.message || t?.message || t)), e();
	});
	try {
		X.start(), o("RelativeOrientationSensor started (120 Hz)");
	} catch (e) {
		o("RelativeOrientationSensor start failed: " + (e?.message || e));
	}
}
//#endregion
//#region src/ui/clipboard-toolbar.ts
var $ = null, mr = /* @__PURE__ */ new WeakSet(), hr = /* @__PURE__ */ new WeakSet(), gr = /* @__PURE__ */ new WeakSet();
function _r() {
	$ &&= ($(), null);
}
function vr(e, t) {
	let n = a();
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
	let o = n.querySelector(".text");
	o && (o.textContent = i), n.classList.add("visible");
}
async function yr() {
	let e = navigator;
	return e?.clipboard?.readText ? await e.clipboard.readText() : globalThis?.prompt?.("Вставь текст из телефона (clipboard readText недоступен):", "") || "";
}
async function br(e) {
	let t = navigator;
	if (t?.clipboard?.writeText) try {
		return await t.clipboard.writeText(e), !0;
	} catch {
		return !1;
	}
	return !1;
}
function xr() {
	let e = g(), t = c(), n = i();
	$ && $(), $ = ut((e, t) => vr(e, t)), pt().then((e) => {
		e?.ok && typeof e.text == "string" && vr(e.text, { source: "pc" });
	}), t && !mr.has(t) && (mr.add(t), t.addEventListener("click", async () => {
		let e = await mt();
		if (!e?.ok) {
			o("Copy failed: " + (e?.error || "unknown"));
			return;
		}
		let t = String(e.text || "");
		vr(t, { source: "pc" }), await br(t) || o("PC clipboard received. If phone clipboard write is blocked, copy from the preview line.");
	})), e && !hr.has(e) && (hr.add(e), e.addEventListener("click", async () => {
		let e = await ht();
		if (!e?.ok) {
			o("Cut failed: " + (e?.error || "unknown"));
			return;
		}
		let t = String(e.text || "");
		vr(t, { source: "pc" }), await br(t) || o("PC clipboard received (after cut). If phone clipboard write is blocked, copy from the preview line.");
	})), n && !gr.has(n) && (gr.add(n), n.addEventListener("click", async () => {
		let e = await yr();
		if (!e) {
			o("Paste: phone clipboard is empty (or permission denied).");
			return;
		}
		let t = await gt(e);
		if (!t?.ok) {
			o("Paste failed: " + (t?.error || "unknown"));
			return;
		}
		vr(e, { source: "phone" });
	}));
}
//#endregion
//#region src/ui/config-ui.ts
var Sr = "airpad-config-overlay";
function Cr() {
	let e = m() ?? document;
	return e.body ?? e.documentElement ?? document.body;
}
function wr(e, t) {
	let n = (t.querySelector("cw-shell-minimal[data-theme]") ?? t.querySelector("[data-shell-system=\"task-tab\"][data-theme]") ?? t.querySelector("[data-shell][data-theme]"))?.getAttribute("data-theme");
	n === "light" || n === "dark" ? e.setAttribute("data-theme", n) : e.removeAttribute("data-theme");
}
function Tr() {
	let e = (m() ?? document).createElement("div");
	e.className = `config-overlay ${Sr}`, e.innerHTML = "\n        <div class=\"config-panel\">\n            <h3>Airpad Configuration</h3>\n            <div class=\"config-panel__body\">\n                <div class=\"config-group\">\n                    <label for=\"airpadQuickConnect\"><strong>Where to connect</strong>:</label>\n                    <input\n                        type=\"text\"\n                        id=\"airpadQuickConnect\"\n                        name=\"airpad-quick-connect\"\n                        placeholder=\"L-192.168.0.110 or https://192.168.0.110:8443/\"\n                    />\n                    <label for=\"airpadAuthPass\"><strong>Auth pass token</strong> (optional):</label>\n                    <input\n                        type=\"password\"\n                        id=\"airpadAuthPass\"\n                        name=\"airpad-auth-pass\"\n                        autocomplete=\"off\"\n                        placeholder=\"If the remote requires a control token for input/mouse\"\n                    />\n                    <div class=\"field-hint\">\n                        Target device ID or URL:port. Default identity and tokens stay in Settings → Server; set an auth pass here when the peer rejects control without it.\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"config-actions\">\n                <button id=\"saveConfig\" type=\"button\" name=\"airpad-config-save\">Save & Reconnect</button>\n                <button id=\"cancelConfig\" type=\"button\" name=\"airpad-config-cancel\">Cancel</button>\n            </div>\n        </div>\n    ";
	let t = e.querySelector("#airpadQuickConnect"), n = e.querySelector("#airpadAuthPass"), r = e.querySelector("#saveConfig"), i = e.querySelector("#cancelConfig");
	t.value = te(), n.value = ie();
	let a = () => {
		e.classList.remove("flex"), e.style.display = "none", e.setAttribute("aria-hidden", "true");
	};
	return r.addEventListener("click", () => {
		ne(t.value), b(n.value), st({ delayMs: 100 }), a();
	}), i.addEventListener("click", a), e.addEventListener("click", (t) => {
		t.target === e && a();
	}), e;
}
function Er() {
	try {
		k();
	} catch {}
	let e = m() ?? document, t = Cr(), n = e.querySelector(`.${Sr}`);
	if (n && n.parentElement !== t && (n.remove(), n = null), !n) n = Tr(), t.appendChild(n);
	else {
		let e = n.querySelector("#airpadQuickConnect"), t = n.querySelector("#airpadAuthPass");
		e && (e.value = te()), t && (t.value = ie());
	}
	wr(n, e), n.classList.add("flex"), n.style.display = "flex", n.style.zIndex = "120000", n.setAttribute("aria-hidden", "false");
}
function Dr() {
	(m() ?? document).querySelectorAll(`.${Sr}`).forEach((e) => e.remove());
}
//#endregion
//#region src/component/AirpadEventBus.ts
var Or = class {
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
}, kr = "cw-airpad-action-rail", Ar = class extends HTMLElement {
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
		this.querySelector("#clipboardToolbar") || (this.innerHTML = "\n            <div class=\"bottom-toolbar\" id=\"clipboardToolbar\" aria-label=\"Clipboard actions\">\n                <button type=\"button\" id=\"btnCut\" name=\"airpad-clipboard-cut\" class=\"toolbar-btn\" aria-label=\"Cut (Ctrl+X)\">✂️</button>\n                <button type=\"button\" id=\"btnCopy\" name=\"airpad-clipboard-copy\" class=\"toolbar-btn\" aria-label=\"Copy (Ctrl+C)\">📋</button>\n                <button type=\"button\" id=\"btnPaste\" name=\"airpad-clipboard-paste\" class=\"toolbar-btn\" aria-label=\"Paste (Ctrl+V)\">📥</button>\n                <button type=\"button\" id=\"btnConnect\" name=\"airpad-ws-connect\" class=\"toolbar-btn connect-fab connect-fab--ws\">WS ↔</button>\n                <button type=\"button\" id=\"btnAdminDoor\" name=\"airpad-admin-door\" class=\"toolbar-btn toolbar-btn--admin-door\" aria-label=\"Open server admin (HTTPS)\" title=\"Server admin (HTTPS :8443)\">ADM</button>\n                <button type=\"button\" id=\"btnConfig\" name=\"airpad-config\" class=\"toolbar-btn\" aria-label=\"Configuration\" title=\"Configuration\">⚙️</button>\n            </div>\n            <div id=\"clipboardPreview\" class=\"clipboard-preview\" aria-live=\"polite\"></div>\n        ");
	}
};
function jr() {
	let e = globalThis?.customElements;
	!e || typeof e.get != "function" || typeof e.define != "function" || e.get(kr) || e.define(kr, Ar);
}
//#endregion
//#region src/component/CwAirpadSidePanels.ts
var Mr = "cw-airpad-side-panels", Nr = class extends HTMLElement {
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
function Pr() {
	let e = globalThis?.customElements;
	!e || typeof e.get != "function" || typeof e.define != "function" || e.get(Mr) || e.define(Mr, Nr);
}
//#endregion
//#region src/main.ts
var Fr = null, Ir = 0, Lr = null, Rr = null;
function zr() {
	Et(), Ir += 1, Lr?.abort(), Lr = null, Rr?.(), Rr = null, Fr?.(), Fr = null, _r(), Dr(), _(null), Ht(!1), ir();
}
async function Br(t) {
	console.log("[Airpad] Mounting airpad app..."), Ir += 1, Lr?.abort();
	let n = new AbortController();
	Lr = n;
	let r = n.signal, i = Ir;
	jr(), Pr();
	let a = t ?? document.body.querySelector("#app") ?? document.body;
	if (a || (a = document.createElement("div"), a.id = "app"), a.replaceChildren(e`
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
    `), _(a), await Ct(), r.aborted || i !== Ir) {
		d() === a && _(null);
		return;
	}
	await Vr(i, r, a);
}
async function Vr(e, n, i) {
	let a = i;
	if (!a) {
		console.warn("[Airpad] initAirpadApp: no mount root");
		return;
	}
	let s = (e) => t(`#${CSS.escape(e)}`), c = new Or(), l = a.querySelector("cw-airpad-side-panels"), u = a.querySelector("cw-airpad-action-rail");
	l?.connect(c), u?.connect(c), n.addEventListener("abort", () => {
		l?.disconnect(), u?.disconnect(), c.clear();
	}, { once: !0 });
	let d = (e, t) => {
		let r = c.on(e, t);
		n.addEventListener("abort", r, { once: !0 });
	};
	function f() {
		an(), rr(), o("Motion runtime state reset (recalibrated).");
	}
	d("ui.config.open", () => Er()), d("ui.motion.reset", () => f()), d("ui.reload.request", () => {
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
	function p() {
		let e = s("hintPanel");
		if (!e) return;
		let t = Array.from(e.querySelectorAll("[data-hint-group]"));
		if (t.length === 0) return;
		let r = globalThis.matchMedia("(max-width: 980px), (max-height: 860px)"), i = () => {
			let e = r.matches;
			t.forEach((t) => {
				e && (t.open = !1);
			});
		};
		i(), r.addEventListener?.("change", i, { signal: n });
	}
	let m = (e) => e instanceof Error ? `${e.name}: ${e.message}` : typeof e == "string" ? e : String(e), h = (e, t) => {
		try {
			t();
		} catch (t) {
			o(`Airpad init [${e}] failed: ${m(t)}`);
		}
	}, g = () => !!(n.aborted || e !== void 0 && e !== Ir);
	if (g()) return;
	ee(), Rr ??= x(), h("websocket button", () => it(r())), h("speech", () => $t()), h("AI button", () => en()), h("Air button", () => $n()), h("virtual keyboard", () => Ut(a)), Fr?.(), Fr = lt((e) => {
		Ht(e);
	}), h("clipboard toolbar", () => xr()), h("adaptive hint", () => p()), o("Готово. Нажми \"WS Connect\", затем используй Air/AI кнопки."), o("Движение мыши основано только на Gyroscope API (повороты телефона).");
	let _ = () => {
		g() || h("relative orientation", () => pr());
	};
	typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(_, { timeout: 2e3 }) : globalThis.setTimeout(_, 0);
	let v = () => {
		g() || globalThis.location?.protocol !== "chrome-extension:" && ce({
			immediate: !1,
			onRegistered() {
				o("PWA: service worker registered");
			},
			onRegisterError(e) {
				o("PWA: service worker register error: " + (e?.message ?? String(e)));
			}
		}).catch((e) => {
			o("PWA: service worker disabled: " + m(e));
		});
	};
	typeof globalThis.requestIdleCallback == "function" ? globalThis.requestIdleCallback(v, { timeout: 6e3 }) : globalThis.setTimeout(v, 2500);
}
//#endregion
export { ot as a, Ct as i, zr as n, Ht as r, Br as t };
