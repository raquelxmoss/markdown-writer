import ReactDOM from 'react-dom';
import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import App from './containers/App';
import { writer } from './reducers/writer';
import { settings } from './reducers/settings';
import { timer } from './reducers/timer';
import { fileList } from './reducers/file_list';

const reducer = combineReducers({ writer, settings, timer, fileList })
const store = createStore(reducer)
console.log(store.getState())
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)