import Log from '../../utils/logger'

const isValid = s => /^[a-z]*$/i.test( s )

const INIT_STATE = { state: 'ENABLED.EMPTY', query: '' }

const logger = Log.init( 'SearchBox' )

export default ( state, action ) => {
  if ( state == null ) {
    state = {}
  }
  let newState = { ...state }

  Log.event( logger, action )

  switch ( action.type ) {
    case 'INIT':
      newState = {...state, ...INIT_STATE}
      break
    case 'CHANGED':
      const query = action.payload
      if ( !query || query === '' ) {
        newState = INIT_STATE
      } else {
        newState = {...state,  state: isValid( query ) ? 'ENABLED.VALID' : 'ENABLED.INVALID', query }
      }
      break
    case 'SUBMITTED':
      if ( state.nap[ 'onSubmit' ] ) {
        state.nap[ 'onSubmit' ]( action.payload )
      }
      newState = {...state, ...INIT_STATE}
      break
    default:
      newState = state
  }

  if ( state.state !== newState.state ) {
    Log.transition( logger, newState )
  }

  return newState
}
