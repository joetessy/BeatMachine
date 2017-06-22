import {RECEIVE_ARTIST} from '../actions/artist_actions';
import merge from "lodash/merge";

const ArtistReducer = (state = null, action) => {
  switch(action.type){
    case RECEIVE_ARTIST:
      return action.artist;
    default:
      return state;
  }
};

export default ArtistReducer;
