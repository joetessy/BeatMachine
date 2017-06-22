import * as APIUtil from './../util/artists_api_util';
export const RECEIVE_ARTIST = 'RECEIVE_ARTIST';

export const receiveArtist = (artist) => {
  return {
    type: RECEIVE_ARTIST,
    artist,
  };
};

export const requestArtist = (id) => (dispatch) => {
  return APIUtil.fetchArtist(id)
    .then((response) => dispatch(receiveArtist(response)));
};
