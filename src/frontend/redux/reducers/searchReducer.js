import {SEARCH_PRODUCT} from '../constants'


const searchReducer = (state = {}, action) => {
  const {type, payload} = action

  switch (type) {
    case SEARCH_PRODUCT:
      return {...state, payload}
    default:
      return state
  }
}

export default searchReducer
