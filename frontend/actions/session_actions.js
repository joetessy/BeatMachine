import * as APIUtil from './../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});


export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});


export const signup = (user) => dispatch => {
  return APIUtil.signup(user).then(response => dispatch(receiveCurrentUser(response)) && dispatch(receiveErrors([])),
  error => dispatch(receiveErrors(error.responseJSON)));
};



export const login = (user) => dispatch => {
  return APIUtil.login(user).then(response => dispatch(receiveCurrentUser(response)) && dispatch(receiveErrors([])),
  error => {
    return dispatch(receiveErrors(error.responseJSON));
  });
};


export const logout = () =>  dispatch => {
  return APIUtil.logout().then(response => dispatch(receiveCurrentUser(null)));
};
