import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import {routerMiddleware} from 'connected-react-router'


import history from '../../history.js'
import rootReducer from './reducers'
import generateId from "./middleware/generateId";

const enhancer = applyMiddleware(
  thunk,
  routerMiddleware(history),
    generateId,
)

export default createStore(rootReducer, composeWithDevTools(enhancer))