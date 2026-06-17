//#region ../../projects/subsystem/src/routing/api/channel-actions.ts
var e = {
	ViewerPushToWorkcenter: "viewer.attach-to-workcenter",
	WorkcenterAttach: "attach-files",
	WorkcenterFileAttach: "file-attach",
	WorkcenterShare: "content-share"
}, t = {
	WallpaperSet: "workspace.wallpaper-set",
	WallpaperFromFile: "workspace.wallpaper-from-file",
	SpeedDialPinHref: "workspace.speed-dial-pin-href",
	SpeedDialPinFile: "workspace.speed-dial-pin-file"
}, n = {
	NavigatePath: "navigate-path",
	ContentExplorer: "content-explorer",
	Navigate: "navigate",
	GetPath: "get-path",
	FileSave: "file-save",
	RequestUpload: "explorer-request-upload",
	RequestPaste: "explorer-request-paste",
	RequestUse: "explorer-request-use",
	SetColorScheme: "explorer-set-color-scheme"
}, r = {
	ContentView: "content-view",
	ContentLoad: "content-load",
	SetContent: "set-content",
	OpenUrl: "open-url",
	OpenMarkdownUrl: "open-markdown-url",
	AttachToWorkcenter: e.ViewerPushToWorkcenter,
	SetColorScheme: "viewer-set-color-scheme"
}, i = {
	Patch: "patch",
	SettingsUpdate: "settings-update"
}, a = {
	Start: "start",
	AirpadStart: "airpad-start",
	Retry: "retry"
}, o = {
	Navigate: "navigate",
	OpenView: "open-view",
	...t
}, s = {
	Reload: "reload",
	Refresh: "refresh"
};
//#endregion
export { i as a, o as i, n, r as o, s as r, a as t };
