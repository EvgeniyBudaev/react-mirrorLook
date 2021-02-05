import {SEARCH_PRODUCT} from '../constants'
import {ISearchProduct} from '../types'

interface ISearchState {
  entities: string
}
const initialState = {
  entities: ''
}

const searchReducer = (state: ISearchState = initialState , action: ISearchProduct): ISearchState => {
  const {type, payload} = action

  switch (type) {
    case SEARCH_PRODUCT:
      return {...state, entities: payload}
    default:
      return state
  }
}

export default searchReducer
