import { disconnectAirPadSession, connectAirPadSession } from "../network/session";
import { isMaintainHubSocketConnectionEnabled } from "../config/config";
import { setRemoteKeyboardEnabled } from "../input/virtual-keyboard";
import { unmountAirpadRuntime } from "../main";
import { waitForDomPaint } from "shared/policies/event-handling-policy";

export class AirpadController {
    private initialized = false;
    private mountPromise: Promise<void> | null = null;

    async mount(contentHost: HTMLElement): Promise<void> {
        if (this.initialized) return;
        if (this.mountPromise) return this.mountPromise;

        this.mountPromise = (async () => {
            const { default: mountAirpad } = await import("../main");

            contentHost.innerHTML = "";
            await waitForDomPaint();
            await mountAirpad(contentHost);
            connectAirPadSession();
            this.initialized = true;
        })().finally(() => {
            this.mountPromise = null;
        });

        return this.mountPromise;
    }

    unmount(): void {
        unmountAirpadRuntime();
        setRemoteKeyboardEnabled(false);
        if (!isMaintainHubSocketConnectionEnabled()) {
            disconnectAirPadSession();
        }
        this.initialized = false;
        this.mountPromise = null;
    }

    reset(): void {
        this.initialized = false;
        this.mountPromise = null;
    }
}

