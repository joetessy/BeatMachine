import ArtistPage from "./artist_page";
import { connect } from "react-redux";
import { logout } from './../../actions/session_actions';
import { requestArtist } from '../../actions/artist_actions.js';
import { closeModal } from './../../actions/modal_actions';


const mapStateToProps = ({session: {currentUser}, artist, modal}) => {
  return ({
    currentUser,
    artist,
    modal

  });
};

const mapDispatchToProps = dispatch => {
  return ({
    logout: () => dispatch(logout()),
    requestArtist: (artist) => dispatch(requestArtist(artist)),
    closeModal: () => dispatch(closeModal())

  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage);
