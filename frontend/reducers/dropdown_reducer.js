import merge from "lodash/merge";
import { DISPLAY_DROPDOWN, CLEAR_DROPDOWN }
  from './../actions/dropdown_actions';

const DropdownReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type){
    case DISPLAY_DROPDOWN:
      return Object.assign({}, state, action.menu);
    case CLEAR_DROPDOWN:
      return {};
    default:
      return state;
  }
};

export default DropdownReducer;
