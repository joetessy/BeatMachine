import { RECEIVE_ERRORS, CLEAR_ERRORS }
  from '../actions/errors_actions';
import merge from "lodash/merge";

const defaultState = [];

const ErrorsReducer = (state = defaultState, action) => {
  switch(action.type){
    case RECEIVE_ERRORS:
      return state.concat(action.errors);
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ErrorsReducer;
