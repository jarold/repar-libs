import 'bulma/css/bulma.css';
import throttle from 'lodash/throttle';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

import './index.css';
import App from './App';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reparLibs');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = state => {
  const serializedState = JSON.stringify(state);
  localStorage.setItem('reparLibs', serializedState);
};

const persistedState = loadState();
const store = createStore(
  reducers,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(
  throttle(() => {
    saveState(store.getState());
  }),
  1000
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
