import ArtistPage from "./artist_page";
import { connect } from "react-redux";
import { logout } from './../../actions/session_actions';
import { requestArtist } from '../../actions/artist_actions.js';


const mapStateToProps = ({session: {currentUser}, artist}) => {
  return ({
    currentUser,
    artist,

  });
};

const mapDispatchToProps = dispatch => {
  return ({
    logout: () => dispatch(logout()),
    requestArtist: (artist) => dispatch(requestArtist(artist))

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage);
