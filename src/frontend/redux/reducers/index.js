import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import history from '@/history'
import windowScrollReducer from '@/frontend/redux/reducers/windowScrollReducer'

const rootReducer = combineReducers({
  router: connectRouter(history),
  windowScrollReducer
})

export default rootReducer
