export const getViewProps = (state) => {
    let inputEnabled = true
    let submitEnabled = true
    let error = undefined

    switch (state) {
        case 'DISABLED':
            inputEnabled = false
            submitEnabled = false
            break;
        case 'ENABLED.EMPTY':
            submitEnabled = false
            break;
        case 'ENABLED.VALID':
            break;
        case 'ENABLED.INVALID':
            submitEnabled = false
            error = 'Invalid value'
            break;
        default:
            console.log('Invalid state for SearchBar: ' + state)
            break
    }

    return { inputEnabled, submitEnabled, error }
}
