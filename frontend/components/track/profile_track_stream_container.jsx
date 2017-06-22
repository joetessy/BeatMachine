import { connect } from 'react-redux';
import { requestTracks } from '../../actions/track_actions';
import TrackFeed from './track_feed';
import { selectUserTracks } from './../../reducers/selectors';


const mapStateToProps = (state) => ({
  tracks: selectUserTracks(state)
});

const mapDispatchToProps = (dispatch) => {
  return ({
    requestTracks: () => dispatch(requestTracks())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackFeed);
