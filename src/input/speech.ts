/*
 * Filename: speech.ts
 * FullPath: modules/views/airpad-view/src/input/speech.ts
 * Change date and time: 14.26.00_10.07.2026
 * Reason for changes: Pass-II migration facade — re-export the working input-old
 *   speech module so the public `src/input/speech` import path keeps resolving
 *   without a dangling symlink into CWSP-reborn stubs. No behavior change.
 */
export * from "../input-old/speech";
