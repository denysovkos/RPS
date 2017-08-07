import React, {Component} from 'react';
import { Link } from 'react-router';
import styled from 'styled-components';
import { browserHistory } from 'react-router';

const Login = styled.div`
  text-align: center;
  font-size: 34px;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

const Input = styled.input`
  margin: 5px;
`;

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
  margin: 5px;
`;

const WarningMessage = styled.div`
  background: tomato;
  text-align: center;
  margin: 5px;
  color: white;
  border-radius: 3px;
  border: none;
`;

class LoginForm extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: '',
      password: ''
    }
  }

  handleInput = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  componentWillReceiveProps(nextProps) {
    let {user} = nextProps;

    if(Object.keys(user).length > 1 && user.status !== 401) {
      browserHistory.push('/');
    }
  }

  handleSubmit = (e) => {
    e.preventDefault;

    let {loginAction, user} = this.props;

    loginAction({user: this.state.user, password: this.state.password})
  }

  render() {
    let {user} = this.props;
    return (
      <Login>
        <Input placeholder='admin' type='text' name='user' onChange={this.handleInput}/>
        <Input placeholder='password' type='password' name='password' onChange={this.handleInput}/>
        {user.status === 401 && <WarningMessage>{user.message}</WarningMessage>}
        <Button onClick={(e) => this.handleSubmit(e)}>Login</Button>
      </Login>
    )
  }
}

export default LoginForm;
