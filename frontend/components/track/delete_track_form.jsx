import React from 'react';

class DeleteTrack extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.deleteTrack(this.props.track);
    this.props.closeModal();
  }

  render(){
    return(
      <div className='delete-check'>
        <div className='delete-check-content'>
        <h1>Delete Track?</h1>
        <p>Stats and comments for this track will be permanently removed.</p>
          <div className='delete-modal-buttons'>
            <div className='cancel'
              onClick={this.props.closeModal}>Cancel</div>
            <div className='delete-button'
              onClick={this.handleClick}>Delete</div>
          </div>
        </div>
      </div>
    );
  }
}



export default DeleteTrack;
