import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App';
import { writer } from './reducers/writer';
import { settings } from './reducers/settings';

const reducer = combineReducers({ writer, settings })
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

