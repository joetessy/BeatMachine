import {RECEIVE_ARTIST} from '../actions/artist_actions';
import {REMOVE_TRACK} from './../actions/track_actions';
import merge from "lodash/merge";

const ArtistReducer = (state = null, action) => {
  let nextState;
  switch(action.type){
    case RECEIVE_ARTIST:
      return action.artist;
    case REMOVE_TRACK:
      nextState = merge({}, state);
      delete nextState.tracks[action.track.id];
      return nextState;
    default:
      return state;
  }
};

export default ArtistReducer;
