import {
    type KvmLayoutConfig,
    findKvmScreen
} from "cwsp-shared/kvm-layout";
import { CWSP_SLOT, cwspGlobal } from "cwsp-shared/cwsp-global";

type KvmSessionState = {
    layout: KvmLayoutConfig | null;
    activePeerId: string;
    virtualX: number;
    virtualY: number;
};

const kvmSession = (): KvmSessionState =>
    cwspGlobal(CWSP_SLOT.airpadKvmSession, () => ({
        layout: null,
        activePeerId: "",
        virtualX: 0,
        virtualY: 0
    }));

export const resetAirpadKvmSession = (): void => {
    const state = kvmSession();
    state.layout = null;
    state.activePeerId = "";
    state.virtualX = 0;
    state.virtualY = 0;
};

export const getAirpadKvmActivePeer = (): string => kvmSession().activePeerId;

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
        const state = kvmSession();
        state.layout = res.layout;
        const screen = findKvmScreen(state.layout, dest) ?? state.layout.screens[0];
        state.activePeerId = screen.peerId;
        state.virtualX = Math.floor(screen.width / 2);
        state.virtualY = Math.floor(screen.height / 2);
    } catch {
        resetAirpadKvmSession();
    }
}

/** Mirror virtual cursor on the desk screen only — server owns cross-screen handoff. */
export const trackAirpadMotionDelta = (dx: number, dy: number, destinationId: string): void => {
    const state = kvmSession();
    if (!state.layout || (!dx && !dy)) return;
    const dest = destinationId.trim();
    const screen = findKvmScreen(state.layout, dest);
    if (!screen) return;

    state.virtualX = Math.max(0, Math.min(screen.width - 1, state.virtualX + dx));
    state.virtualY = Math.max(0, Math.min(screen.height - 1, state.virtualY + dy));
    state.activePeerId = screen.peerId;
};

export const getAirpadMotionKvmPayload = (destinationId: string): Record<string, unknown> | undefined => {
    const state = kvmSession();
    if (!state.layout) return undefined;
    const dest = destinationId.trim();
    const localScreen = findKvmScreen(state.layout, dest);
    return {
        airpad: true,
        virtualX: state.virtualX,
        virtualY: state.virtualY,
        sourceDpiScale: localScreen?.dpiScale ?? 1,
        targetDpiScale: localScreen?.dpiScale ?? 1,
        sensitivity: localScreen?.sensitivity ?? 1
    };
};
