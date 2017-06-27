import { RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT }
  from '../actions/comment_actions';
import merge from "lodash/merge";

const CommentReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type){
    case RECEIVE_COMMENTS:
      return action.comments;
    case REMOVE_COMMENT:
      nextState = merge({}, state);
      delete nextState[action.comment.id];
      return nextState;
    case RECEIVE_COMMENT:
      return merge({}, state, {[action.comment.id]: action.comment});
    default:
      return state;
  }
};

export default CommentReducer;
