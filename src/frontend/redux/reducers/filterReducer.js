import {FILTER_PRODUCT} from '../constants'

const initialState = {
  entities: []
}

const filterReducer = (state = initialState , action) => {
  const {type, payload} = action

  switch (type) {
    case FILTER_PRODUCT:
      return {...state, entities: payload.filterState}
    default:
      return state
  }
}

export default filterReducer
