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
		client: {"start":"_app/immutable/entry/start.Cb-nDQEo.js","app":"_app/immutable/entry/app.CYzA70D6.js","imports":["_app/immutable/entry/start.Cb-nDQEo.js","_app/immutable/chunks/entry.DWrJjCAx.js","_app/immutable/chunks/scheduler.eJV6ods6.js","_app/immutable/entry/app.CYzA70D6.js","_app/immutable/chunks/scheduler.eJV6ods6.js","_app/immutable/chunks/index.CUoEoFqd.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
