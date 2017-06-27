import { RECEIVE_COMMENTS, RECEIVE_COMMENT }
  from '../actions/comment_actions';
import merge from "lodash/merge";

const CommentReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type){
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      nextState = merge([], state);
      nextState.push(action.comment);
      return nextState;
    default:
      return state;
  }
};

export default CommentReducer;
