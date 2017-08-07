import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

import Header from './Header';
require('normalize.css');
require('./basicCss/index.scss');

const App = ({ children }) => (
  <div>
    <Helmet
      title="KD Starter kit"
      titleTemplate="KD Starter kit - %s"
      meta={[
        { 'char-set': 'utf-8' },
        { name: 'description', content: 'KD Starter kit' },
      ]}
    />
    <Header />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default App;
