import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import App from './App'
import reducer from './redux/reducer'
import logger from './redux/middleware/logger'
import api from './redux/middleware/api'
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { save, load } from "redux-localstorage-simple"
import { createStore, applyMiddleware } from "redux"
import 'bootstrap/dist/css/bootstrap.css'

export const store = createStore(
  reducer,
  // applyMiddleware(thunk, logger({ destination: "console" }), api)
  // load(),
  // applyMiddleware(thunk, save(), logger({ destination: "console" }), api)
  applyMiddleware(thunk, logger({ destination: "console" }), api)
)

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))

serviceWorker.register()
