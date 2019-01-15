// import {useMemo} from 'react'

const session = {}

const getDevTools = (name) => {
    console.log('Name: ' + name)
    if (!session[name]) {
        session[name] = window.__REDUX_DEVTOOLS_EXTENSION__.connect({name})
    }
    return session[name] // window.devToolsExtension
}

export default getDevTools