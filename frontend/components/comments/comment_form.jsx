import React from 'react';
import { connect } from 'react-redux';
import { createComment } from './../../actions/comment_actions';
import merge from 'lodash/merge';

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
  }

  componentWillReceiveProps(nextProps){
    this.setState(
      {author_id: nextProps.currentUser.id,
        track_id: nextProps.track.id,
        track: nextProps.track.title
      });
  }

  handleInput(e){
    this.setState({body: e.currentTarget.value});
  }

  handleSubmit(e){
    e.preventDefault();
    let comment = merge({}, this.state);
    this.props.createComment({comment});
    this.setState({body: ''});
  }

  render (){
    return(
      <div className='comment-form-container'>
        <div className='comment-form-box'>
      <img src={this.props.currentUser.image_url}/>
      <form className='comment-form' onSubmit={this.handleSubmit}>
        <input className='comment-input' type='text'
          onChange={this.handleInput}
          value={this.state.title}
          placeholder="Write a comment">
        </input>
          <button className='comment-button' type='submit'></button>
      </form>
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
  createComment: (comment) => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
