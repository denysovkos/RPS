import {
  AUTH_SUCCESS,
  AUTH_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
} from '../actions/auth';

export default function auth(state = {}, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return action.user;
    case AUTH_FAIL:
      return action.error;
    case LOGOUT_SUCCESS:
      return action.user;
    case LOGOUT_FAIL:
      return action.error;
    default:
      return state;
  }
}
