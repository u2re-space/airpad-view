/**
 * Phone clipboard helpers for AirPad toolbar.
 * @see https://web.dev/articles/async-clipboard
 */
import { invokeCwsNative, isCapacitorCwsNativeShell } from "com/routing/native/cws-bridge";

const CLIPBOARD_PKGS = ["@supernotes/capacitor-clipboard", "@capacitor/clipboard"] as const;

const isCapacitorNative = (): boolean => {
    try {
        const c = (globalThis as unknown as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor;
        return typeof c?.isNativePlatform === "function" && Boolean(c.isNativePlatform());
    } catch {
        return false;
    }
};

type ClipboardReadPermission = PermissionStatus | null;

let clipboardReadPermission: ClipboardReadPermission = null;

/** Probe {@code clipboard-read} once (prompt may appear on first {@code readText}). */
export function primeClipboardReadPermission(): void {
    const perms = globalThis.navigator?.permissions;
    if (!perms?.query) return;
    perms
        .query({ name: "clipboard-read" as PermissionName })
        .then((status) => {
            clipboardReadPermission = status;
            status.onchange = () => {
                clipboardReadPermission = status;
            };
        })
        .catch(() => {
            /* unsupported — Chromium Android may still prompt on readText */
        });
}

export function isClipboardReadDenied(): boolean {
    return clipboardReadPermission?.state === "denied";
}

const extractBridgeText = (result: unknown): string => {
    if (!result || typeof result !== "object") return "";
    const record = result as Record<string, unknown>;
    const echo = record.echo;
    if (echo && typeof echo === "object") {
        const e = echo as Record<string, unknown>;
        if (typeof e.text === "string") return e.text;
        if (typeof e.value === "string") return e.value;
    }
    return "";
};

/** Native shell: overlay + Java clipboard read + remote {@code keyboard:type}. */
export function triggerNativePasteRemote(
    done: (result: { ok: boolean; text: string; error?: string }) => void,
): void {
    if (!isCapacitorCwsNativeShell()) {
        done({ ok: false, text: "", error: "not native shell" });
        return;
    }
    invokeCwsNative("clipboard:paste-remote", {})
        .then((result) => {
            const text = extractBridgeText(result);
            const ok = Boolean((result as { ok?: boolean })?.ok);
            done({ ok, text, error: ok ? undefined : "native paste failed" });
        })
        .catch((err) => {
            done({ ok: false, text: "", error: String((err as Error)?.message || err) });
        });
}

/** Web Async Clipboard API — must run during user activation (click). */
export function readWebClipboardText(done: (text: string, error?: string) => void): void {
    const clip = globalThis.navigator?.clipboard;
    if (!clip?.readText) {
        done("", "navigator.clipboard.readText unavailable");
        return;
    }
    clip.readText().then(
        (text) => done(String(text ?? "")),
        (err) => done("", String((err as Error)?.message || err)),
    );
}

const writeViaCwsBridge = (text: string, done: (ok: boolean) => void): void => {
    if (!isCapacitorCwsNativeShell()) {
        done(false);
        return;
    }
    invokeCwsNative("clipboard:write-local", { text })
        .then((result) => done(Boolean((result as { ok?: boolean })?.ok)))
        .catch(() => done(false));
};

const writeViaCapacitor = (text: string, done: (ok: boolean) => void): void => {
    if (!isCapacitorNative()) {
        done(false);
        return;
    }
    void (async () => {
        for (const pkg of CLIPBOARD_PKGS) {
            try {
                const mod = (await import(/* @vite-ignore */ pkg)) as {
                    Clipboard?: { write: (opts: { string: string }) => Promise<void> };
                };
                if (!mod?.Clipboard?.write) continue;
                await mod.Clipboard.write({ string: text });
                done(true);
                return;
            } catch {
                /* try next */
            }
        }
        done(false);
    })();
};

/** Write text to phone clipboard (copy-from-remote). */
export function writeAirPadPhoneClipboard(text: string, done: (ok: boolean) => void): void {
    const value = String(text ?? "");
    writeViaCwsBridge(value, (ok) => {
        if (ok) {
            done(true);
            return;
        }
        writeViaCapacitor(value, (capOk) => {
            if (capOk) {
                done(true);
                return;
            }
            const clip = globalThis.navigator?.clipboard;
            if (!clip?.writeText) {
                done(false);
                return;
            }
            clip.writeText(value).then(() => done(true), () => done(false));
        });
    });
}
