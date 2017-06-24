import { RECEIVE_AUDIO, STOP_AUDIO } from '../actions/player_actions';
import merge from 'lodash/merge';

const initialState = null;

const PlayerReducer = ( state = initialState, action ) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_AUDIO:
      if (action.url === state){
        return null;
      }
      return action.url;
    case STOP_AUDIO:
      return {};
    default:
      return state;
  }
};

export default PlayerReducer;
