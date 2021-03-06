import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import App from './frontend/components/app'
import reportWebVitals from './reportWebVitals'
import store from './frontend/redux/store'
import 'normalize.css'
import 'slick-carousel/slick/slick.css'
import './index.css'
// import {ConnectedRouter} from 'connected-react-router'
// import history from './history'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
