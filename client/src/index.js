import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import configureStore from './store';
import registerServiceWorker from './registerServiceWorker';

// import { List, Map } from 'immutable';
// const Immutable = require('immutable');

const initialState = ({
  downKeys: [],
  events: []
});

    
let store = configureStore(initialState);
    
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
