import { NOW_PLAYING } from '../actions/player_actions';
import merge from 'lodash/merge';

const initialState = {id: null, idx: null, status: null};

const NowPlayingReducer = ( state = initialState, action ) => {
  Object.freeze(state);
  switch(action.type){
    case NOW_PLAYING:
      let newState = merge({}, state);
      newState.idx = action.idx;
      newState.id = action.id;
      newState.status = action.status;
      return newState;
    default:
      return state;
  }
};

export default NowPlayingReducer;
