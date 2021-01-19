import {SEARCH_PRODUCT} from '../constants'

const initialState = {
  entities: ''
}

const searchReducer = (state = initialState , action) => {
  const {type, payload} = action

  switch (type) {
    case SEARCH_PRODUCT:
      return {...state, entities: payload}
    default:
      return state
  }
}

export default searchReducer
