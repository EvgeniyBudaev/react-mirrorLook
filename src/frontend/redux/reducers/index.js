import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import windowScrollReducer from './windowScrollReducer'
import orderReducer from './orderReducer'
import categoriesReducer from './categoriesReducer'
import productsReducer from './productsReducer'
import productReducer from './productReducer'


 const rootReducer = history => combineReducers({
  router: connectRouter(history),
  windowScrollReducer,
  orderReducer,
  categoriesReducer,
  productsReducer,
  productReducer,
})

export default rootReducer


