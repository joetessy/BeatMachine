import session from './session_reducer';
import sessionModal from './session_modal_reducer';
import tracks from './tracks_reducer';
import artist from './artist_reducer';
import modal from './modal_reducer';
import errors from './errors_reducer';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  session,
  tracks,
  artist,
  modal,
  sessionModal,
  errors
});

export default RootReducer;
