import "./SettingsTypes-DAv90T5n.js";
import { h as e, p as t } from "./Settings-BAxgoWK0.js";
//#region ../../projects/subsystem/src/service/instructions/utils.ts
var n = () => `ci_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`, r = () => n(), i = (e, t) => {
	let n = Number.isFinite(e.order) ? e.order : 2 ** 53 - 1, r = Number.isFinite(t.order) ? t.order : 2 ** 53 - 1;
	return n === r ? (e.label || "").localeCompare(t.label || "") : n - r;
}, a = (e) => [...e || []].sort(i), o = (e, t) => t && e.find((e) => e.id === t) || null, s = async () => {
	let e = await t(), n = a(e?.ai?.customInstructions), r = o(n, e?.ai?.activeInstructionId);
	return {
		instructions: n,
		activeId: r?.id || "",
		activeInstruction: r
	};
}, c = async () => (await s()).instructions, l = async (n) => {
	let r = await t();
	await e({
		...r,
		ai: {
			...r.ai,
			activeInstructionId: n || ""
		}
	});
}, u = async (n, i) => {
	let a = await t(), o = a?.ai?.customInstructions || [], s = {
		id: r(),
		label: n.trim() || "Untitled",
		instruction: i.trim(),
		enabled: !0,
		order: o.length
	};
	return await e({
		...a,
		ai: {
			...a.ai,
			customInstructions: [...o, s]
		}
	}), s;
}, d = async (n) => {
	if (!n.length) return [];
	let i = await t(), a = i?.ai?.customInstructions || [], o = n.map((e, t) => ({
		id: r(),
		label: e.label.trim() || "Untitled",
		instruction: e.instruction.trim(),
		enabled: e.enabled ?? !0,
		order: a.length + t
	}));
	return await e({
		...i,
		ai: {
			...i.ai,
			customInstructions: [...a, ...o]
		}
	}), o;
}, f = async (n, r) => {
	let i = await t(), a = i?.ai?.customInstructions || [], o = a.findIndex((e) => e.id === n);
	return o === -1 ? !1 : (a[o] = {
		...a[o],
		...r
	}, await e({
		...i,
		ai: {
			...i.ai,
			customInstructions: a
		}
	}), !0);
}, p = async (n) => {
	let r = await t(), i = r?.ai?.customInstructions || [], a = i.filter((e) => e.id !== n);
	if (a.length === i.length) return !1;
	let o = r.ai?.activeInstructionId === n ? "" : r.ai?.activeInstructionId || "";
	return await e({
		...r,
		ai: {
			...r.ai,
			customInstructions: a,
			activeInstructionId: o
		}
	}), !0;
};
//#endregion
export { s as a, c as i, d as n, l as o, p as r, f as s, u as t };
