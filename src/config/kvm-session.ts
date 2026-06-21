import {
    type KvmLayoutConfig,
    findKvmScreen
} from "cwsp-shared/kvm-layout";

let layout: KvmLayoutConfig | null = null;
let activePeerId = "";
let virtualX = 0;
let virtualY = 0;

export const resetAirpadKvmSession = (): void => {
    layout = null;
    activePeerId = "";
    virtualX = 0;
    virtualY = 0;
};

export const getAirpadKvmActivePeer = (): string => activePeerId;

export async function refreshAirpadKvmSession(
    ask: (what: string, payload: Record<string, unknown>) => Promise<unknown>,
    destinationId: string
): Promise<void> {
    resetAirpadKvmSession();
    const dest = destinationId.trim();
    try {
        const ready = (await ask("kvm:isready", {})) as { ready?: boolean };
        if (!ready?.ready) return;
        const res = (await ask("kvm:layout", {})) as { layout?: KvmLayoutConfig };
        if (!res?.layout?.screens?.length) return;
        layout = res.layout;
        const screen = findKvmScreen(layout, dest) ?? layout.screens[0];
        activePeerId = screen.peerId;
        virtualX = Math.floor(screen.width / 2);
        virtualY = Math.floor(screen.height / 2);
    } catch {
        resetAirpadKvmSession();
    }
}

/** Mirror virtual cursor on the desk screen only — server owns cross-screen handoff. */
export const trackAirpadMotionDelta = (dx: number, dy: number, destinationId: string): void => {
    if (!layout || (!dx && !dy)) return;
    const dest = destinationId.trim();
    const screen = findKvmScreen(layout, dest);
    if (!screen) return;

    virtualX = Math.max(0, Math.min(screen.width - 1, virtualX + dx));
    virtualY = Math.max(0, Math.min(screen.height - 1, virtualY + dy));
    activePeerId = screen.peerId;
};

export const getAirpadMotionKvmPayload = (destinationId: string): Record<string, unknown> | undefined => {
    if (!layout) return undefined;
    const dest = destinationId.trim();
    const localScreen = findKvmScreen(layout, dest);
    return {
        airpad: true,
        virtualX,
        virtualY,
        sourceDpiScale: localScreen?.dpiScale ?? 1,
        targetDpiScale: localScreen?.dpiScale ?? 1,
        sensitivity: localScreen?.sensitivity ?? 1
    };
};
