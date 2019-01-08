import React, { useState } from 'react'
import PropTypes from 'prop-types'
import useFocus from '../../utils/useFocus'
import './SearchBar.css'

// const _isInvalid = s => !(/^[a-z]*$/i.test(s))

const SearchBar = ({ onSubmit = () => null }) => {
    // const error = null
    // const isLoading = false

    const [query, setQuery] = useState('')

    // Set focus on input box (UC 1.1)
    const searchRef = useFocus('')

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
                className='normal' // {_isInvalid(query) ? "error" : 'normal'}
                disabled={true} //{isLoading || error}
                onChange={e => setQuery(e.target.value)}
                placeholder='Enter tag to search...'
                ref={searchRef}
                type='text'
                value={query}
            />
            {' '}
            <button
                disabled={true} // {isLoading || error || query === '' || _isInvalid(query)}
                type='submit'
            >
                Search
            </button>
            {/* <div id="message">{message}</div> */}
        </form >
    )
}


SearchBar.views = (state) => {
    let inputClassname = 'normal'
    let inputDisabled = false
    let buttonDisabled = false
    let errMsg = ''

    switch (state) {
        case 'DISABLED':
            inputClassname = 'normal'
            inputDisabled = false
            buttonDisabled = false
            errMsg = ''
            break;
        case 'ENABLED.EMPTY':
            inputClassname = 'normal'
            inputDisabled = false
            buttonDisabled = true
            errMsg = ''
            break;
        case 'ENABLED.VALID':
            inputClassname = 'normal'
            inputDisabled = false
            buttonDisabled = false
            errMsg = ''
            break;
        case 'ENABLED.INVALID':
            inputClassname = 'error'
            inputDisabled = false
            buttonDisabled = true
            errMsg = 'Invalid value'
            break;
        default:
            console.log('Invalid state for SearchBar: ' + state)
            break
    }

    const SearchBar = ({ onSubmit = () => null }) => {
        // const error = null
        // const isLoading = false

        const [query, setQuery] = useState('')

        // Set focus on input box (UC 1.1)
        const searchRef = useFocus('')

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
                    className={inputClassname} // {_isInvalid(query) ? "error" : 'normal'}
                    disabled={inputDisabled} //{isLoading || error}
                    onChange={e => setQuery(e.target.value)}
                    placeholder='Enter tag to search...'
                    ref={searchRef}
                    type='text'
                    value={query}
                />
                {' '}
                <button
                    disabled={buttonDisabled} // {isLoading || error || query === '' || _isInvalid(query)}
                    type='submit'
                >
                    Search
                </button>
                {errMsg && <div id="message">{errMsg}</div>}
            </form >
        )
    }

    return SearchBar
}

SearchBar.propTypes = {
    /**
     * Callback function to return the query parameter provided by the user
     */
    onSubmit: PropTypes.func.isRequired
}

export default SearchBar.views('ENABLED.VALID')
