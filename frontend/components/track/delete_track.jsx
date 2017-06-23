import React from 'react';

const DeleteTrack = (props) => {
  return(
    <div className='delete-check'>
      <div className='delete-check-content'>
      <h1>Delete Track?</h1>
      <p>Stats and comments for this track will be permanently removed.</p>
        <div className='delete-modal-buttons'>
          <div className='cancel'
            onClick={props.closeModal}>Cancel</div>
          <div className='delete-button'>Delete</div>
        </div>
      </div>
    </div>
  );
};

export default DeleteTrack;
