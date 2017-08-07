import axios from 'axios';
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from '../utils/setAuthorizationToken';

/* globals fetch */
export const AUTH_SUCCESS = 'REDUX/AUTH_SUCCESS';
export const AUTH_FAIL = 'REDUX/AUTH_FAIL';

export const LOGOUT_SUCCESS = 'REDUX/LOGOUT_SUCCESS';
export const LOGOUT_FAIL = 'REDUX/LOGOUT_FAIL';

const auth = (credentials) => {
  return (dispatch) => {
    axios.post('http://localhost:3001/api/login', {...credentials})
      .then(res => {
        if(res.status === 200) {
          const token = res.data.id_token;
          localStorage.setItem('jwtToken', token);
          setAuthorizationToken(token);
          dispatch(setCurrentUser(jwtDecode(token)));
        } else {
          dispatch({ type: AUTH_FAIL, error: res.request.response })
        }
      })
      .catch(error => {
        console.warn(error)
        dispatch({ type: AUTH_FAIL, error: {message:'Invalid credentials', status: 401}})
      });
  };
}

const logout = () => {
  return (dispatch) => {
    axios.post('http://localhost:3001/api/logout')
      .then(res => {
        localStorage.removeItem('jwtToken');
        setAuthorizationToken(false);
        dispatch(setCurrentUser({}));
      })
      .catch(error => dispatch({ type: LOGOUT_FAIL, error }));
  };
}

const setCurrentUser = (user) => {
  return {
    type: Object.keys(user).length > 0 ? AUTH_SUCCESS : LOGOUT_SUCCESS,
    user
  };
}

export default {auth, logout};
