import { NOW_PLAYING } from '../actions/player_actions';
import merge from 'lodash/merge';

const initialState = {};

const NowPlayingReducer = ( state = initialState, action ) => {
  Object.freeze(state);
  switch(action.type){
    case NOW_PLAYING:
      return action.id;
    default:
      return state;
  }
};

export default NowPlayingReducer;
