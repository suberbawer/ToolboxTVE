import 'bootstrap/dist/css/bootstrap.css' // Bootstrap
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import PageState from './Reducers/PageState'

const store = compose(applyMiddleware(thunk))
  (createStore)
  (PageState, PageState.initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())// This could be generic combining reducers.

  ReactDOM.render(
    <Provider store={ store }>
      <App />
    </Provider>,

    document.getElementById('root')
  )
