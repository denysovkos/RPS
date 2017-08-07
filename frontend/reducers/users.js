import {
  USERS_INVALID,
} from '../actions/users';

export default function users(state = {}, action) {
  switch (action.type) {
    case USERS_INVALID:
      return {...state};
    default:
      return state;
  }
}
