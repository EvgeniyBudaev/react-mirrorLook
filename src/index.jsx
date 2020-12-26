import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'connected-react-router'
import 'normalize.css'
import "slick-carousel/slick/slick.css";
//import "slick-carousel/slick/slick-theme.css";
import './index.scss'
import App from "@/frontend/components/app"
import store from '@/frontend/redux/store'
import history from '@/history'


// DEV ONLY!!!
window.store = store

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>
  ,document.getElementById('root'))
