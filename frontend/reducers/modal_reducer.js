import { OPEN, CLOSE, RECEIVE_COMPONENT } from '../actions/modal_actions';
import merge from 'lodash/merge';

const initialState = {
  isOpen: false,
  component: ''
};

const ModalReducer = ( state = initialState, action ) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_COMPONENT:
      let component = action.component;
      return Object.assign({}, state, { component });
    case OPEN:
      return Object.assign({}, state, {component: action.component,
                                      isOpen: true});
    case CLOSE:
      return Object.assign({}, state, {component: null, isOpen: false});
    default:
      return state;
  }
};

export default ModalReducer;
