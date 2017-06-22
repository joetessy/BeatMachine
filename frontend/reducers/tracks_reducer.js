import { RECEIVE_TRACKS, RECEIVE_TRACK } from '../actions/track_actions';
import merge from "lodash/merge";

const TrackReducer = (state = null, action) => {
  switch(action.type){
    case RECEIVE_TRACKS:
      return action.tracks;
    case RECEIVE_TRACK:
      let newState = merge({}, state);
      newState[action.track.id] = action.track;
      newState.errors = action.errors;
      return newState;
    default:
      return state;
  }
};

export default TrackReducer;
