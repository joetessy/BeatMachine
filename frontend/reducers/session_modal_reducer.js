import { LOGIN, SIGNUP } from '../actions/session_modal_actions';
import merge from "lodash/merge";

const SessionModalReducer = (state = null, action) => {
  switch(action.type){
    case LOGIN:
      return 'login';
    case SIGNUP:
      return 'signup';
    default:
      return state;
  }
};

export default SessionModalReducer;
