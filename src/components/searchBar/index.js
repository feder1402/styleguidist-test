import React, { useReducer } from 'react'
import PropTypes from 'prop-types'
import SearchBar from './view'
import getViewProps from './viewProps'
import reducer from './reducer'

const Wrapper = ({ onSubmit = () => null }) => {
    const [{ state, query }, dispatch] = useReducer(reducer, null, { type: 'INIT' })
    const viewProps = getViewProps(state)

    return <SearchBar {...{state, query, dispatch, ...viewProps}} onSubmit={onSubmit}/>
}

Wrapper.propTypes = {
    /**
     * Callback function to return the query parameter provided by the user
     */
    onSubmit: PropTypes.func.isRequired
}


export default Wrapper