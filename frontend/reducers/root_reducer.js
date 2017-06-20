import session from './session_reducer';
import modal from './modal_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session,
  modal
});

export default RootReducer;
