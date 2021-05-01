import UniversalRouter from 'universal-router';
import m from 'mithril';

try {
    var History = require('history')
} catch (e) { }

export var history;
if (typeof (window) !== 'undefined') {
    // Browser rendering.
    history = History.createBrowserHistory();
}
else {
    // Server-side rendering.
    history = History.createMemoryHistory();
}

const routers = new Set()

history.listen(({ action, location }) => {
    for (let resolve of routers) {
        resolve({ action, location: location, })
    }
})

export function Link() {
    return {
        view: v => v.children,
        oncreate: ({ dom }) => {
            dom.addEventListener('click', e => {
                if (e.target === dom && dom.href) {
                    e.preventDefault()
                    history.push(dom.href.replace(dom.origin, ''))
                }
            })
        },
    }
}

export function Router(v) {
    let state = {}

    const router = new UniversalRouter(
        Object.keys(v.attrs).map(key => ({
            path: key,
            action: ({ params, path }) => ({ key, path, params, }),
        })),
    )

    const resolve = ({ action, location, }) => {
        state = { action, path: location }

        const promise = router.resolve(location.pathname)
            .then(({ key, params }) => {
                Object.assign(state, { key, params })
            })
            .catch(error => {
                Object.assign(state, { error })
            })
            .finally(() => {
                if (__BROWSER__) {
                    try {
                        m.redraw()
                    } catch (err) {
                        console.log(err)
                    }
                }
            })

        for (const method of ['then', 'catch', 'finally'])
            promise[method](() => {
                if (v.attrs[method]) {
                    v.attrs[method](state)
                }
            })
    }

    resolve(history)

    return {
        view: v =>
            state.key
            &&
            v.attrs[state.key]
            &&
            v.attrs[state.key](state),

        oninit: () => {
            routers.add(resolve)
        },
        onremove: () => {
            routers.delete(resolve)
        },
    }
}