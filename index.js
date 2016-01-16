import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App';
import { writer } from './reducers/writer';
import { settings } from './reducers/settings';
import { timer } from './reducers/timer';

const reducer = combineReducers({ writer, settings, timer })
const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

