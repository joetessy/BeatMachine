import ArtistPage from "./artist_page";
import { connect } from "react-redux";
import { logout } from './../../actions/session_actions';


const mapStateToProps = ({session: {currentUser}}) => {
  return ({
    currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    logout: () => dispatch(logout()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(ArtistPage);
