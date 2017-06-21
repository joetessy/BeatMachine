import * as APIUtil from './../util/tracks_api_util';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';

export const receiveTracks = (tracks) => ({
  type: RECEIVE_TRACKS,
  tracks,
});

export const requestTracks = () => (dispatch) => {
  return APIUtil.fetchTracks()
    .then((response) => dispatch(receiveTracks(response)));
};
