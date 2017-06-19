import Greeting from "./greeting";
import { connect } from "react-redux";
import { logOut } from './../../actions/session_actions';

const mapStateToProps = ({session: {currentUser}}) => {
  return ({
    currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    logOut: () => dispatch(logOut())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
