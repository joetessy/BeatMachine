import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS }
  from '../actions/session_actions';
import merge from "lodash/merge";

const defaultState = {
    currentUser: null,
    errors: [],
};

const SessionReducer = (state = defaultState, action) => {
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      let tempStateUser = merge({}, state);
      tempStateUser.currentUser = action.currentUser;
      return tempStateUser;
    case RECEIVE_ERRORS:
      let tempStateError = merge({}, state);
      tempStateError.errors = action.errors;
      return tempStateError;
    default:
      return state;
  }
};

export default SessionReducer;
