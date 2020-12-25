import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {routerMiddleware} from 'connected-react-router'

import rootReducer from '@/frontend/redux/reducers'
import history from '../../history.js'

const enhancer = applyMiddleware(
  thunk,
  routerMiddleware(history),
)

export default createStore(rootReducer, composeWithDevTools(enhancer))