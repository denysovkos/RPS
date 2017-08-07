/* globals fetch */
export const USERS_INVALID = 'USERS_INVALID';


function fetchUsers() {
  return (dispatch) => {
    dispatch({ type: USERS_FETCHING });

    return fetch('')
      .then(res => res.json())
      .then(result => dispatch({ type: USERS_INVALID, result }))
      .catch(error => dispatch({ type: USERS_INVALID, error }));
  };
}
