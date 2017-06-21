import { RECEIVE_TRACKS } from '../actions/track_actions';
import merge from "lodash/merge";

const TrackReducer = (state = null, action) => {
  switch(action.type){
    case RECEIVE_TRACKS:
      return action.tracks;
    default:
      return state;
  }
};

export default TrackReducer;
