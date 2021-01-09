import {applyMiddleware, createStore} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers'
import generateId from "./middleware/generateId";
import api from "./middleware/api";


const enhancer = applyMiddleware(
  thunk,
    api,
    generateId,
)

export default createStore(rootReducer, composeWithDevTools(enhancer))