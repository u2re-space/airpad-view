/*
 * Filename: virtual-keyboard.ts
 * FullPath: modules/views/airpad-view/src/input/virtual-keyboard.ts
 * Change date and time: 14.26.00_10.07.2026
 * Reason for changes: Pass-II migration facade — re-export the working input-old
 *   virtual-keyboard module so the public `src/input/virtual-keyboard` import
 *   path keeps resolving without a dangling symlink into CWSP-reborn stubs.
 *   No behavior change.
 */
export * from "../input-old/virtual-keyboard";
