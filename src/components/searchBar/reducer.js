import getDevTools from '../../utils/getDevTools'

const isValid = s => /^[a-z]*$/i.test(s)

export default (state, action) => {
    let newState = state

    switch (action.type) {
        case 'INIT':
            newState = { state: 'ENABLED.EMPTY', query: '' }
            break
        case 'CHANGED':
            const query = action.payload
            if (!query || query === '') {
                newState = { state: 'ENABLED.EMPTY', query }
            } else {
                newState = { state: isValid(query) ? 'ENABLED.VALID' : 'ENABLED.INVALID', query }
            }
            break
        default:
            newState = state
    }

    const devTools = getDevTools('SearchBox')
    devTools.send(action, newState)

    console.log(`action.type: ${action.type}, payload: ${JSON.stringify(action.payload)}, state: ${JSON.stringify(newState)}}`)
    return newState
}