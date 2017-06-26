import { RECEIVE_COMMENTS }
  from '../actions/comment_actions';
import merge from "lodash/merge";

const CommentReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type){
    case RECEIVE_COMMENTS:
      return action.comments;
    default:
      return state;
  }
};

export default CommentReducer;
