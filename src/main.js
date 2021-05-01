import App, { RenderToken } from 'fusion-core';


export default async function start() {
    // Allow Mithril to work with SSR.
    if (!global.window) {
        global.window = global.document = global.requestAnimationFrame = undefined
    }

    // Require mithril after setting window.
    var m = require('mithril');
    m.route.prefix = '';
    const mithrilRender = require('./lib/mithril/render');

    // Set the render based on browser vs SSR.
    const render = el =>
        __NODE__
            ? `<div id="root">${mithrilRender.sync(el)}</div>`
            : m.mount(document.getElementById('root'), el);

    // Set up the app.
    const p = require('./page')
    const root = p.App;
    const app = new App(root);
    app.register(RenderToken, render);
    return app;
}
