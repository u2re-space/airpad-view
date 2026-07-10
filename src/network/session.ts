/*
 * Filename: session.ts
 * FullPath: modules/views/airpad-view/src/network/session.ts
 * Change date and time: 14.26.00_10.07.2026
 * Reason for changes: Pass-II migration facade — re-export the working network-old
 *   session module so the public `src/network/session` import path keeps resolving
 *   without a dangling symlink into CWSP-reborn stubs. No behavior change.
 */
export * from "../network-old/session";
