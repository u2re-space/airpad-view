/*
 * Filename: keyboard/handlers.ts
 * FullPath: modules/views/airpad-view/src/input/keyboard/handlers.ts
 * Change date and time: 14.26.00_10.07.2026
 * Reason for changes: Pass-II migration facade — re-export the working input-old
 *   keyboard/handlers module so the public `src/input/keyboard/handlers` import
 *   path keeps resolving. No behavior change.
 */
export * from "../../input-old/keyboard/handlers";
