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
import { ApolloProvider } from '@apollo/react-hooks'
import client from "./config/apollo/client"
import { composeWithDevTools } from "redux-devtools-extension"
import "bootstrap/dist/css/bootstrap.min.css"
import Autoload from "./autoload"

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk, logger({ destination: "console" }), api))
)

store.dispatch(Autoload())

ReactDOM.render((
  <ApolloProvider client={client}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ApolloProvider>
), document.getElementById('root'))

serviceWorker.register();
