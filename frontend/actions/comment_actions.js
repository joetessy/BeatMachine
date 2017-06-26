import * as APIUtil from './../util/comments_api_util.js';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';


export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments,
});

export const receiveComment = (comment) => ({
  type: RECEIVE_COMMENT,
  comment

});

export const requestComments = (trackTitle) => dispatch => {
  return APIUtil.fetchComments(trackTitle)
    .then(response => dispatch(receiveComments(response)));
};

export const createComment = (comment) => dispatch => {
  return APIUtil.createComment(comment)
    .then(response => dispatch(receiveComment(response)));
};
