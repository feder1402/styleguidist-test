import React from 'react'
import PropTypes from 'prop-types'
import useFocus from '../../utils/useFocus'
import { getViewProps } from './Puppet'
import './SearchBar.css'

const onSubmit = ( e ) => {  e.preventDefault();  e.stopPropagation() }

const SearchBar = ( { state, query, dispatch } ) => {

  // Set focus on input box (UC 1.1)
  const searchRef = useFocus( '' )

  const { inputEnabled, submitEnabled, error } = getViewProps( state )

  return (
      <form {...{onSubmit}}>
        <input
            className={error ? 'error' : 'normal'}
            disabled={!inputEnabled}
            onChange={e => dispatch( { type: 'CHANGED', payload: e.target.value } )}
            placeholder='Enter tag to search...'
            ref={searchRef}
            type='text'
            value={query}
        />
        {' '}
        <button
            disabled={!submitEnabled}
            type='text'
            onClick={() => {dispatch( { type: 'SUBMITTED', payload: query } )}}
        >
          Search
        </button>
        {error && <div id="message">{error}</div>}
      </form>
  )
}

SearchBar.propTypes = {
  /**
   * Callback function to return the query parameter provided by the user
   */
  onSubmit: PropTypes.func.isRequired,
}

export default SearchBar
