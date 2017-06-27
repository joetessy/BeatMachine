import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteComment } from './../../actions/comment_actions';

const CommentIndexItem = (props) => {
  let deleteButton = null;
  let comment = props.comment;
  let artist = props.artist;
  let currentUser = props.currentUser;
  if (currentUser.username === artist ||
    currentUser.username === comment.author){
    deleteButton = <div className='delete-button'>
      <i className="fa fa-trash"
        aria-hidden="true"
        onClick={() => props.deleteComment(comment.id)}></i>
    </div>;
  }

  return(
    <div className='comment'>
        <div className='comment-content-left'>
          <NavLink to={`/${comment.author}`}>
      <div className='comment-avatar'>
        <img src={comment.author_image}/>
      </div>
    </NavLink>
      <div className='comment-content'>
        <NavLink to={`/${comment.author}`}>
        <div className='comment-author'>
          {comment.author}
        </div>
      </NavLink>
      <div className='comment-body'>
        {comment.body}
      </div>
      </div>
    </div>
    <div className='right-side'>
      <div className='comment-time-ago'>
        {comment.time_ago}
      </div>
      {deleteButton}
    </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  deleteComment: (id) => dispatch(deleteComment(id))
});


export default connect(null, mapDispatchToProps)(CommentIndexItem);
