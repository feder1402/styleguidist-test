import React from 'react'
import PropTypes from 'prop-types'
import useFocus from '../../utils/useFocus'
import './SearchBar.css'

const SearchBar = ({ inputEnabled, submitEnabled, error, query, dispatch}) => {

    // Set focus on input box (UC 1.1)
    const searchRef = useFocus('')

    return (
        <form onSubmit={() => dispatch({ type: 'SUBMITTED', payload: query })} >
            <input
                className={error ? 'error' : 'normal'}
                disabled={!inputEnabled}
                onChange={e => dispatch({ type: 'CHANGED', payload: e.target.value })}
                placeholder='Enter tag to search...'
                ref={searchRef}
                type='text'
                value={query}
            />
            {' '}
            <button
                disabled={!submitEnabled}
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


export default SearchBar