import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import SearchBar from './view'

import reducer from './reducer'

const Wrapper = ({ onSubmit = () => null }) => {
    const [{ state, query }, dispatch] = useReducer(reducer, {nap: {onSubmit}}, { type: 'INIT' })

    return <SearchBar {...{state, query, dispatch }} onSubmit={onSubmit}/>
}

Wrapper.propTypes = {
    /**
     * Callback function that returns the query parameter entered by the user
     */
    onSubmit: PropTypes.func.isRequired
}

Wrapper.displayName = "SearchBar"


export default Wrapper
