/*
 * Filename: coordinator.ts
 * FullPath: modules/views/airpad-view/src/network/coordinator.ts
 * Change date and time: 14.26.00_10.07.2026
 * Reason for changes: Pass-II migration facade — re-export the working network-old
 *   coordinator module so the public `src/network/coordinator` path keeps resolving.
 *   No behavior change.
 */
export * from "../network-old/coordinator";
