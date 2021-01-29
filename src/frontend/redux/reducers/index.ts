import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import windowScrollReducer from './windowScrollReducer'
import orderReducer from './orderReducer'
import {categoriesReducer} from './categoriesReducer'
import productsReducer from './productsReducer'
import {productReducer} from './productReducer'
import usersReducer from './usersReducer'
import reviewsReducer from './reviewsReducer'
import searchReducer from './searchReducer'
import filterReducer from './filterReducer'


 const rootReducer = (history: any) => combineReducers({
  router: connectRouter(history),
  windowScrollReducer,
  orderReducer,
  categoriesReducer,
  productsReducer,
  productReducer,
  usersReducer,
  reviewsReducer,
  searchReducer,
  filterReducer
})

// (globalState: RootStateType) => RootStateType
type RootReducerType = typeof rootReducer
export type RootStateType = ReturnType<RootReducerType>

export {rootReducer}


