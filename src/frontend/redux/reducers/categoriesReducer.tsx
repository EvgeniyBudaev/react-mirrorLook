import { arrToMap } from '../utils'
import { FAILURE, LOAD_CATEGORIES, REQUEST, SUCCESS}  from '../constants'
import { LoadCategoriesActionType } from '../actions/actions'

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null as object | null,
  response: null as object | null,
}

export type InitialStateCategoriesType = typeof initialState
type Types = LoadCategoriesActionType & InitialStateCategoriesType


const categoriesReducer = (state = initialState, action: Types):InitialStateCategoriesType => {
  const {type, response, error} = action

  switch (type) {
    case LOAD_CATEGORIES + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      }
    case LOAD_CATEGORIES + SUCCESS:
      return {
        ...state,
        entities: arrToMap(response),
        loading: false,
        loaded: true,
      }
    case LOAD_CATEGORIES + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      }
    default:
      return state
  }
}

export {categoriesReducer}
