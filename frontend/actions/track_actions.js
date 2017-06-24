import * as APIUtil from './../util/tracks_api_util';
export const RECEIVE_TRACKS = 'RECEIVE_TRACKS';
export const RECEIVE_TRACK = 'RECEIVE_TRACK';
export const REMOVE_TRACK = 'REMOVE_TRACK';
import receiveErrors from './session_actions';


export const receiveTracks = (tracks) => ({
  type: RECEIVE_TRACKS,
  tracks,
});

export const receiveTrack = (track) => ({
  type: RECEIVE_TRACK,
  track,
});

export const removeTrack = (track) => ({
  type: REMOVE_TRACK,
  track,
});

export const deleteTrack = track => dispatch => {
  return APIUtil.destroyTrack(track)
    .then(response => dispatch(removeTrack(response)));
};

export const requestTracks = () => (dispatch) => {
  return APIUtil.fetchTracks()
    .then((response) => dispatch(receiveTracks(response)));
};

export const createTrack = (track) => (dispatch) => {
  return APIUtil.createTrack(track).then((response) => dispatch(receiveTrack(response)));
};

export const updateTrack = (track, id) => dispatch => {
  return APIUtil.updateTrack(track, id).then(response => dispatch(receiveTrack(response)))
};
