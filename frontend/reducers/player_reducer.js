import { RECEIVE_AUDIO, STOP_AUDIO } from '../actions/player_actions';
import merge from 'lodash/merge';

const initialState = [];

const PlayerReducer = ( state = initialState, action ) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_AUDIO:
      let nextState = Object.assign([], state);
      nextState.unshift(action.url);
      return nextState;
    case STOP_AUDIO:
      return {};
    default:
      return state;
  }
};

export default PlayerReducer;
