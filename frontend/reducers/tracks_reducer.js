import { RECEIVE_TRACKS, RECEIVE_TRACK, REMOVE_TRACK }
  from '../actions/track_actions';
import merge from "lodash/merge";

const TrackReducer = (state = { }, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type){
    case REMOVE_TRACK:
      nextState = merge({}, state);
      delete nextState[action.track.id];
      return nextState;
    case RECEIVE_TRACKS:
      return action.tracks;
    case RECEIVE_TRACK:
      nextState = merge({}, state, {showTrack: {}});
      nextState[action.track.id] = action.track;
      nextState.showTrack = action.track.id;
      return nextState;
    default:
      return state;
  }
};

export default TrackReducer;
