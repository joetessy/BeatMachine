import React from 'react';
import { connect } from 'react-redux';
import { requestComments } from './../../actions/comment_actions';
import { selectAllComments } from './../../reducers/selectors';
import CommentIndexItem from './comment_index_item';


class CommentsIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestComments(this.props.track.title);
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.comments.length !== this.props.comments.length){
      nextProps.requestComments(nextProps.track.title);
    }
  }

  render(){
    let comments = this.props.comments.map((comment) => {
        return <CommentIndexItem
          artist={this.props.track.artist}
          currentUser={this.props.currentUser}
          comment={comment}
          key={comment.id}/>;
      });
      let commentCount;
      commentCount = this.props.comments.length;
    return(
      <div>
        <div className='comments-header'>
          <i className="fa fa-comment" aria-hidden="true"></i>
          {commentCount}  Comments
        </div>
        {comments}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    currentUser: state.session.currentUser,
    comments: selectAllComments(state.comments),
    track: ownProps.track
  });
};

const mapDispatchToProps = (dispatch) => ({
  requestComments: (trackTitle) => dispatch(requestComments(trackTitle))
});


export default connect(mapStateToProps, mapDispatchToProps)(CommentsIndex);
