import getDevTools from './getDevTools'

const init = ( name ) => getDevTools( name )

const event = ( logger, action ) => {
  logger.send( 'event: ' + action.type + (action.payload ? ' (' + JSON.stringify( action.payload ) + ')' : ''),
      action.payload )

}

const transition = ( logger, state ) => {
  logger.send( 'state-transition: ' + state.state, state )
}

export default { init, event, transition }
