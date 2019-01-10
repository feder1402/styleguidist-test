import { useEffect, useRef } from 'react'

const useDevTools = (config) => {
    const devTools = useRef()
    
    useEffect(() => {
        devTools.current  = window.__REDUX_DEVTOOLS_EXTENSION__.connect(config);
        devTools.current.subscribe((message) => {
            console.log('DevTools got a message: ', JSON.stringify(message));
        });
    }, [])

    return devTools.current
}

export default useDevTools