import { connect } from 'react-redux';
import { requestTracks } from '../../actions/track_actions';
import TrackFeed from './track_feed';
import { selectCurrentUserTracks } from './../../reducers/selectors';


const mapStateToProps = (state) => ({
  tracks: selectCurrentUserTracks(state)
});

const mapDispatchToProps = (dispatch) => {
  return ({
    requestTracks: () => dispatch(requestTracks())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackFeed);
