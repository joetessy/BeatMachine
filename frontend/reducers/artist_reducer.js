import {RECEIVE_ARTIST} from '../actions/artist_actions';
import {REMOVE_TRACK, RECEIVE_TRACK} from './../actions/track_actions';
import {RECEIVE_FAVORITE} from '../actions/favorite_actions';
import merge from "lodash/merge";

const ArtistReducer = (state = { tracks: {} }, action) => {
  let nextState;
  switch(action.type){
    case RECEIVE_ARTIST:
      return action.artist;
    case REMOVE_TRACK:
      nextState = merge({}, state);
      delete nextState.tracks[action.track.id];
      return nextState;
    case RECEIVE_TRACK:
      nextState = merge({}, state);
      if (!nextState.tracks){
        nextState.tracks = {};
      }
      nextState.tracks[action.track.id] = action.track;
      return nextState;
    default:
      return state;
  }
};

export default ArtistReducer;
