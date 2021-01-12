import {ADD_MATCH_PARAMS} from '../constants'

const initialState = {
  restId: null,
}

const routingReducer = (state = initialState, action) => {
  const {type, payload} = action
  //console.log('[routingReducer][action]', action)

  switch (type) {
    case ADD_MATCH_PARAMS: {
      return {...state, restId: payload.restId}
    }
    default:
      return state
  }
}

export default routingReducer
