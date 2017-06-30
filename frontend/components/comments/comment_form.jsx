import React from 'react';
import { connect } from 'react-redux';
import { createComment } from './../../actions/comment_actions';
import { createFavorite, deleteFavorite }
  from './../../actions/favorite_actions';
import { openModal } from './../../actions/modal_actions';
import merge from 'lodash/merge';
import EditTrackContainer from './../track/edit_track_form_container';
import DeleteTrackContainer from './../track/delete_track_container';

class CommentForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      author_id: '',
      track_id: '',
      body: '',
      track: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleFavorite = this.handleFavorite.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState(
      {author_id: nextProps.currentUser.id,
        track_id: nextProps.track.id,
        track: nextProps.track.title
      });
  }

  handleFavorite(){
    if (this.props.currentUser.favorite_tracks.includes(this.props.track.id)){
      this.props.deleteFavorite(this.props.track.id);
    } else {
    this.props.createFavorite(
      { user_id: this.props.currentUser.id,
        track_id: this.props.track.id});
    }
  }

  handleInput(e){
    this.setState({body: e.currentTarget.value});
  }

  handleSubmit(e){
    e.preventDefault();
    let comment = merge({}, this.state);
    this.props.createComment({comment}).then(()=> {
      this.setState({body: ''});
    });
  }

  render (){
    let likeClass;
    let likeId;
    let countClass = null;
    if (this.props.currentUser.favorite_tracks.includes(this.state.track_id)){
      likeClass = 'liked-button';
      likeId = 'comment-liked';
      countClass = 'liked-count';

    } else {
      likeClass = 'like-button ';
      likeId = 'comment-like';
      countClass = 'like-count';

    }
    let trackCount = null;

    if (this.props.track){
      if (this.props.track.favorited_users &&
        this.props.track.favorited_users.length >= 1){
          trackCount = <div className={countClass}>
        {`  ${this.props.track.favorited_users.length}`}</div>;
      }
    }

    let editDelete = null;
    if (this.props.track){
      if (this.props.currentUser.username === this.props.track.artist){
        editDelete =
        <div className='editDelete'>
        <div className='comment-form-edit'>
          <i className="fa fa-pencil" aria-hidden="true"
            onClick={()=> (this.props.openModal(<EditTrackContainer
              track={this.props.track}/>))}></i>
        </div>
        <div className='comment-form-delete'>
          <i className="fa fa-trash" aria-hidden="true"
            onClick={()=> (this.props.openModal(<DeleteTrackContainer
              track={this.props.track}/>))}></i>
        </div>
        </div>;
      }
    }

    return(
      <div className='comment-form-container'>
        <div className='comment-form-box'>
      <img src={this.props.currentUser.image_url}/>
      <form className='comment-form' onSubmit={this.handleSubmit}>
        <input className='comment-input' type='text'
          onChange={this.handleInput}
          value={this.state.body}
          placeholder="Write a comment">
        </input>
          <button className='comment-button' type='submit'></button>
      </form>
    </div>
      <div className='comment-form-buttons'>
        <div className={likeClass}
          id={likeId}
          onClick={()=> this.handleFavorite()}>
          <i className="fa fa-heart" aria-hidden="true"></i>
          {trackCount}
        </div>
          {editDelete}
        </div>
      </div>
    );

  }
}

const mapStateToProps = ({session: {currentUser}}, ownProps) => {
  return ({
    currentUser,
    track: ownProps.track
  });

};

const mapDispatchToProps = (dispatch) => ({
  createComment: (comment) => dispatch(createComment(comment)),
  createFavorite: (favorite) => dispatch(createFavorite(favorite)),
  deleteFavorite: (trackId) => dispatch(deleteFavorite(trackId)),
  openModal: (component) => dispatch(openModal(component)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
