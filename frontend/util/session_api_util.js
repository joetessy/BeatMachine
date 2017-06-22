import {
  receiveCurrentUser,
  receiveErrors
} from '../actions/session_actions';

export const login = user => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  })
);

export const signup = user => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    contentType: false,
    processData: false,
    data: user,
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
