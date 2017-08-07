import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import auth from '../actions/auth';

import LoginForm from '../components/LoginForm/LoginForm';


const LoginPage = (props) => {
  return(

      <LoginForm loginAction={props.auth} user={props.user}/>

  )
}

LoginPage.propTypes = {

};

function mapStateToProps(state) {
  return {
    user: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...auth }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
