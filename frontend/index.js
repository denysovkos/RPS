import 'isomorphic-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import routes from './Routes';
import configureStore from './configureStore';

const store = configureStore();

if (module.hot) {
  module.hot.accept();
}

/* global window, document */

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('root'),
);
