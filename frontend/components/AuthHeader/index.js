import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import {isEqual} from 'lodash';

class Auth extends Component {

  render() {
    let {user = {}, logout} = this.props;

    return (
      Object.keys(user).length > 0 && user.status !== 401 ?
        <Link to="/" onClick={logout}>{`Logout, ${user.user}`}</Link> :
        <Link to="/login">Login</Link>

    );
  }
}

export default Auth;
