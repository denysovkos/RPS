import React, {Component} from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Auth from '../../components/AuthHeader';
import logout from '../../actions/auth';

import './style.scss';

const Logo = styled.div`
  text-align: center;
  font-size: 34px;
  padding: 10px;
`;

const HeaderMenu = styled.div`
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 5px;
`;

class Header extends Component {
  render() {
    let {user, logout} = this.props;
    return (
      <div className='header'>
        <Logo> KD STARTER PACK</Logo>
        <HeaderMenu>
        <ul>
          <li><Link to="/">Home page</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/404page">404</Link></li>
          <li><Auth user={user} logout={logout}/></li>
        </ul>
        </HeaderMenu>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    user: state.auth
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...logout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
