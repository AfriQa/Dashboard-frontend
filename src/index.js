import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'
import App from './App'
import reducer from './redux/reducer'
import logger from './redux/middleware/logger'
import api from './redux/middleware/api'
import { Provider } from "react-redux"
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

export const store = createStore(
  reducer,
  applyMiddleware(thunk, logger({ destination: "console" }), api)
)

ReactDOM.render((
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
), document.getElementById('root'))

serviceWorker.register();
