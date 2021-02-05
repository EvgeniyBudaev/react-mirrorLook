import {FILTER_PRODUCT} from '../constants'
import {IFilterProduct} from '../types'

interface IFilterState {
  entities: Array<string>
}
const initialState = {
  entities: []
}

const filterReducer = (state:IFilterState = initialState , action: IFilterProduct): IFilterState => {

  console.log('[filterReducer][action]', action)

  switch (action.type) {
    case FILTER_PRODUCT:
      return {...state, entities: action.payload.filterState}
    default:
      return state
  }
}

export default filterReducer
