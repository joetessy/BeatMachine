import { connect } from 'react-redux';
import { requestTracks } from '../../actions/track_actions';
import TrackFeed from './track_feed';
import { selectAllTracks } from './../../reducers/selectors';


const mapStateToProps = (state) => ({
  tracks: selectAllTracks(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => {
  return ({
    requestTracks: () => dispatch(requestTracks())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackFeed);
