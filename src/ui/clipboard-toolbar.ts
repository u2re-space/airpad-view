// =========================
// Clipboard toolbar (Cut / Copy / Paste)
// =========================

import { log, getBtnCut, getBtnCopy, getBtnPaste, getClipboardPreviewEl } from '../utils/utils';
import {
    onAirPadRemoteClipboardUpdate,
    requestAirPadClipboardCopy,
    requestAirPadClipboardCut,
    requestAirPadClipboardPaste,
    requestAirPadClipboardRead,
} from '../network/session';
import { dismissKeyboardForControlInteraction } from '../input/keyboard/handlers';
import {
    isClipboardReadDenied,
    primeClipboardReadPermission,
    readWebClipboardText,
    triggerNativePasteRemote,
    writeAirPadPhoneClipboard,
} from './phone-clipboard';
import { isCapacitorCwsNativeShell } from 'com/routing/native/cws-bridge';

let unsubscribeClipboardUpdate: (() => void) | null = null;
const boundCopyButtons = new WeakSet<HTMLElement>();
const boundCutButtons = new WeakSet<HTMLElement>();
const boundPasteButtons = new WeakSet<HTMLElement>();

/** Call when Airpad unmounts so a fresh DOM gets listeners on next mount. */
export function resetClipboardToolbarState(): void {
    if (unsubscribeClipboardUpdate) {
        unsubscribeClipboardUpdate();
        unsubscribeClipboardUpdate = null;
    }
}

function setPreview(text: string, meta?: { source?: string }) {
    const clipboardPreviewEl = getClipboardPreviewEl();
    if (!clipboardPreviewEl || typeof clipboardPreviewEl === 'undefined') return;

    const source = meta?.source ? String(meta.source) : 'pc';
    const safeText = String(text ?? '');

    if (!safeText) {
        clipboardPreviewEl.classList.remove('visible');
        clipboardPreviewEl.innerHTML = '';
        return;
    }

    clipboardPreviewEl.innerHTML = `
        <div class="meta">Clipboard (${source})</div>
        <div class="text"></div>
    `;
    const textEl = clipboardPreviewEl.querySelector('.text') as HTMLElement | null;
    if (textEl) textEl.textContent = safeText;
    clipboardPreviewEl.classList.add('visible');
}

function finishPasteToRemote(text: string): void {
    const normalized = String(text ?? '').trim();
    if (!normalized) {
        log('Paste: phone clipboard is empty.');
        return;
    }
    requestAirPadClipboardPaste(normalized).then((res) => {
        if (!res?.ok) {
            log('Paste failed: ' + (res?.error || 'unknown'));
            return;
        }
        setPreview(normalized, { source: 'phone' });
    });
}

/** Sync click handler — work via .then(), no async/await in the gesture stack. */
function handlePasteClick(): void {
    dismissKeyboardForControlInteraction();

    if (isCapacitorCwsNativeShell()) {
        triggerNativePasteRemote((result) => {
            if (result.ok) {
                const t = String(result.text || '').trim();
                if (t) setPreview(t, { source: 'phone' });
                return;
            }
            log('Paste failed: ' + (result.error || 'native'));
        });
        return;
    }

    if (isClipboardReadDenied()) {
        log('Paste: clipboard-read permission denied in browser settings.');
        return;
    }

    readWebClipboardText((text, error) => {
        if (error && !text) {
            log('Paste: ' + error);
            return;
        }
        finishPasteToRemote(text);
    });
}

function bindClipboardButton(
    btn: HTMLButtonElement | null,
    bound: WeakSet<HTMLElement>,
    onActivate: () => void,
): void {
    if (!btn || bound.has(btn)) return;
    bound.add(btn);
    btn.addEventListener(
        'pointerdown',
        () => {
            dismissKeyboardForControlInteraction();
        },
        { passive: true },
    );
    btn.addEventListener('click', onActivate);
}

function bindPasteClipboardButton(btn: HTMLButtonElement | null): void {
    if (!btn || boundPasteButtons.has(btn)) return;
    boundPasteButtons.add(btn);
    btn.addEventListener('click', handlePasteClick);
}

export function initClipboardToolbar() {
    primeClipboardReadPermission();

    const btnCut = getBtnCut();
    const btnCopy = getBtnCopy();
    const btnPaste = getBtnPaste();

    if (unsubscribeClipboardUpdate) {
        unsubscribeClipboardUpdate();
    }
    unsubscribeClipboardUpdate = onAirPadRemoteClipboardUpdate((text, meta) => setPreview(text, meta));

    requestAirPadClipboardRead().then((res) => {
        if (res?.ok && typeof res.text === 'string') setPreview(res.text, { source: 'pc' });
    });

    if (btnCopy) {
        bindClipboardButton(btnCopy, boundCopyButtons, () => {
            requestAirPadClipboardCopy().then((res) => {
                if (!res?.ok) {
                    log('Copy failed: ' + (res?.error || 'unknown'));
                    return;
                }
                const text = String(res.text || '');
                setPreview(text, { source: 'pc' });
                writeAirPadPhoneClipboard(text, (ok) => {
                    if (!ok) log('PC clipboard received — copy from preview if phone write blocked.');
                });
            });
        });
    }

    if (btnCut) {
        bindClipboardButton(btnCut, boundCutButtons, () => {
            requestAirPadClipboardCut().then((res) => {
                if (!res?.ok) {
                    log('Cut failed: ' + (res?.error || 'unknown'));
                    return;
                }
                const text = String(res.text || '');
                setPreview(text, { source: 'pc' });
                writeAirPadPhoneClipboard(text, (ok) => {
                    if (!ok) log('PC clipboard received (cut) — copy from preview if phone write blocked.');
                });
            });
        });
    }

    if (btnPaste) {
        bindPasteClipboardButton(btnPaste);
    }
}
