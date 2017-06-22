import { RECEIVE_CURRENT_USER  }
  from '../actions/session_actions';
import merge from "lodash/merge";

const defaultState = {
    currentUser: null,
};

const SessionReducer = (state = defaultState, action) => {
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      let tempStateUser = merge({}, state);
      tempStateUser.currentUser = action.currentUser;
      return tempStateUser;
    default:
      return state;
  }
};

export default SessionReducer;
