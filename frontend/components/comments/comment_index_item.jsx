import React from 'react';
import { NavLink } from 'react-router-dom';

const CommentIndexItem = ({comment}) => {

  return(
    <div className='comment'>
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
  );


};


export default CommentIndexItem;
