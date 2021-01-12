import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import history from '../../../history'
import windowScrollReducer from './windowScrollReducer'
import orderReducer from './orderReducer'
import categoriesReducer from './categoriesReducer'
import productsReducer from './productsReducer'


const rootReducer = combineReducers({
  router: connectRouter(history),
  windowScrollReducer,
  orderReducer,
  categoriesReducer,
  productsReducer,
})

export default rootReducer
