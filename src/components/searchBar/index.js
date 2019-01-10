import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useFocus from '../../utils/useFocus'
import useDevTools from '../../utils/useDevTools'
import './SearchBar.css'

// const _isInvalid = s => !(/^[a-z]*$/i.test(s))

//devTools.init({ value: 'initial state' });
const config = { name: 'SearchBar', trace: true }

const SearchBarViews = (state) => {
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

    const SearchBar = ({ onSubmit = () => null }) => {
        // const error = null
        // const isLoading = false

        const devTools = useDevTools(config)
        const [query, setQuery] = useState('')

        // Set focus on input box (UC 1.1)
        const searchRef = useFocus('')

        devTools.send('STATE_CHANGED', { state, inputEnabled, submitEnabled, error })

        // Return query string when user clicks button (UC 3.1)
        const _onSubmit = (e) => {
            e.preventDefault()
            onSubmit(query)

            // Clear input box after a search fires (UC 3.2)
            setQuery('')
        }

        // const message = _isInvalid(query) ? 'Queries can have just letters' : ''

        return (
            <form onSubmit={_onSubmit} >
                <input
                    className={error ? 'error' : 'normal'} // {_isInvalid(query) ? "error" : 'normal'}
                    disabled={!inputEnabled} //{isLoading || error}
                    onChange={e => setQuery(e.target.value)}
                    placeholder='Enter tag to search...'
                    ref={searchRef}
                    type='text'
                    value={query}
                />
                {' '}
                <button
                    disabled={!submitEnabled} // {isLoading || error || query === '' || _isInvalid(query)}
                    type='submit'
                >
                    Search
                </button>
                {error && <div id="message">{error}</div>}
            </form >
        )
    }

    SearchBar.propTypes = {
        /**
         * Callback function to return the query parameter provided by the user
         */
        onSubmit: PropTypes.func.isRequired
    }

    return SearchBar
}



export default SearchBarViews('ENABLED.VALID')
