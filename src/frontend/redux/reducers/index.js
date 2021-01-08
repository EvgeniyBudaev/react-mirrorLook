import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import history from '../../../history'
import windowScrollReducer from './windowScrollReducer'
import orderReducer from "./orderReducer";
import categoriesReducer from "./categoriesReducer";
import categoryReducer from "./categoryReducer";


const rootReducer = combineReducers({
  router: connectRouter(history),
  windowScrollReducer,
  orderReducer,
  categoriesReducer,
  categoryReducer,
})

export default rootReducer
