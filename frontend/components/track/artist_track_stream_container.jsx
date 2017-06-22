import { connect } from 'react-redux';
import { requestArtist } from '../../actions/artist_actions';
import TrackFeed from './track_feed';
import { selectArtistTracks } from './../../reducers/selectors';


const mapStateToProps = ({artist}) => ({
  artist
});

const mapDispatchToProps = (dispatch) => {
  return ({
    requestTracks: (artist) => dispatch(requestArtist(artist))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackFeed);
