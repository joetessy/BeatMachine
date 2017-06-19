import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { signup, login, logout } from "./util/session_api_util";
import { AuthRoute } from './util/route_util';


window.signup = signup;
window.login = login;
window.logout = logout;
window.store = configureStore();


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser){
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  ReactDOM.render(<Root store={store}/>, root);
});
