import * as APIUtil from './../util/favorites_api_util';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';

export const receiveFavorite = (favorite) => {
  return ({
  type: RECEIVE_FAVORITE,
  favorite
});
};

export const createFavorite = (favorite) => dispatch => {
  return APIUtil.createFavorite(favorite)
  .then(response => dispatch(receiveFavorite(response)));
};

export const deleteFavorite = (trackId) => dispatch => {
  return APIUtil.deleteFavorite(trackId)
  .then(response => dispatch(receiveFavorite(response)));
};
