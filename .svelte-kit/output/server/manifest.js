export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "kayla/_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DXklDrXr.js","app":"_app/immutable/entry/app.CwKdWk2I.js","imports":["_app/immutable/entry/start.DXklDrXr.js","_app/immutable/chunks/entry.Cc_y01X_.js","_app/immutable/chunks/scheduler.eJV6ods6.js","_app/immutable/entry/app.CwKdWk2I.js","_app/immutable/chunks/scheduler.eJV6ods6.js","_app/immutable/chunks/index.CUoEoFqd.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
