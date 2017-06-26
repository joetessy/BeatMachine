import React from 'react';
import { connect } from 'react-redux';
import { requestComments } from './../../actions/comment_actions';
import CommentIndexItem from './comment_index_item';


class CommentsIndex extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestComments(this.props.track.title);
  }

  render(){
    let comments;
    if (Array.isArray(this.props.comments)){
      comments = this.props.comments.map((comment) => {
        return <CommentIndexItem comment={comment} key={comment.id}/>;
      });
    }
    return(
      <div>
        {comments}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return({
    comments: state.comments,
    track: ownProps.track
  });
};

const mapDispatchToProps = (dispatch) => ({
  requestComments: (trackTitle) => dispatch(requestComments(trackTitle))
});


export default connect(mapStateToProps, mapDispatchToProps)(CommentsIndex);
