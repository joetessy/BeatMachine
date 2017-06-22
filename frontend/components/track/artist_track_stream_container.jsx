import { connect } from 'react-redux';
import { requestArtist } from '../../actions/artist_actions';
import TrackFeed from './track_feed';
import { selectArtistTracks } from './../../reducers/selectors';


const mapStateToProps = (state, ownProps) => ({
  artist: ownProps.artist
});

const mapDispatchToProps = (dispatch) => {
  return ({
    requestArtist: (artist) => dispatch(requestArtist(artist))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackFeed);
