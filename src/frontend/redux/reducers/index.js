import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import windowScrollReducer from './windowScrollReducer'
import orderReducer from './orderReducer'
import categoriesReducer from './categoriesReducer'
import productsReducer from './productsReducer'
import productReducer from './productReducer'
import usersReducer from './usersReducer'
import reviewsReducer from './reviewsReducer'


 const rootReducer = history => combineReducers({
  router: connectRouter(history),
  windowScrollReducer,
  orderReducer,
  categoriesReducer,
  productsReducer,
  productReducer,
  usersReducer,
  reviewsReducer,
})

export default rootReducer


