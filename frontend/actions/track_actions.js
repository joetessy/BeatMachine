import * as APIUtil from './../util/tracks_api_util';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
import receiveErrors from './session_actions';


export const receiveTracks = (tracks) => ({
  type: RECEIVE_TRACKS,
  tracks,
});

export const receiveTrack = (track) => ({
  type: RECEIVE_TRACK,
  track,
});

export const requestTracks = () => (dispatch) => {
  return APIUtil.fetchTracks()
    .then((response) => dispatch(receiveTracks(response)));
};

export const createTrack = () => (dispatch) => {
  return APIUtil.createTrack()
    .then((response) => dispatch(receiveTrack(response)) && dispatch(receiveErrors([])),
    error => dispatch(receiveErrors(error.responseJSON)));
};
