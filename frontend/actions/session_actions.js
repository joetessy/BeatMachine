import * as APIUtil from './../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser,
});


export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors,
});


export const signUp = (user) => dispatch => {
  return APIUtil.signUp(user).then(response => dispatch(receiveCurrentUser(response)) && dispatch(receiveErrors([])),
  error => dispatch(receiveErrors(error.responseJSON)));
};



export const logIn = (user) => dispatch => {
  return APIUtil.logIn(user).then(response => dispatch(receiveCurrentUser(response)) && dispatch(receiveErrors([])),
  error => {
    return dispatch(receiveErrors(error.responseJSON));
  });
};


export const logOut = () =>  dispatch => {
  return APIUtil.logOut().then(response => dispatch(receiveCurrentUser(null)));
};
