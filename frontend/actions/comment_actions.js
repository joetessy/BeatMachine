import * as APIUtil from './../util/comments_api_util.js';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';



export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments,
});

export const requestComments = (trackTitle) => dispatch => {
  return APIUtil.fetchComments(trackTitle)
    .then(response => dispatch(receiveComments(response)));
};
