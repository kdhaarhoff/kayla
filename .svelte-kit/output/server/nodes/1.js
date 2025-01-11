

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BZEIh3Gs.js","_app/immutable/chunks/scheduler.eJV6ods6.js","_app/immutable/chunks/index.CUoEoFqd.js","_app/immutable/chunks/entry.Cc_y01X_.js"];
export const stylesheets = [];
export const fonts = [];
