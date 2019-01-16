const session = {}

const getDevTools = (name) => {
    if (!session[name]) {
        session[name] = window.__REDUX_DEVTOOLS_EXTENSION__.connect({name})
    }
    return session[name]
}

export default getDevTools
