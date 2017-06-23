import { connect } from 'react-redux';
import { deleteTrack } from './../../actions/track_actions';
import TrackFeedItem from './track_feed_item';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => {
  return({
    deleteTrack: () => dispatch(deleteTrack())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackFeedItem);
