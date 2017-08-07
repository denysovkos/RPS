import React from 'react';
import { Route } from 'react-router';
import App from './containers/App';
import Home from './containers/Home';
import NoMatch from './containers/NoMatch';
import LoginPage from './containers/LoginPage';
import About from './components/About'

import requireAuth from './utils/requireAuth';

export default (
  <Route component={App}>
    <Route path="/" component={Home} />
    <Route path="/about" component={requireAuth(About)} />
    <Route path="/login" component={LoginPage} />
    <Route path="*" component={NoMatch} />
  </Route>
);
