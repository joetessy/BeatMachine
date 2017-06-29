import APIUtil from './../util/favorites_api_util';



export const createFavorite = (favorite) => dispatch => {
  return APIUtil.createFavorite(favorite);
};

export const deleteFavorite = (id) => dispatch => {
  return APIUtil.deleteFavorite(id);
};
