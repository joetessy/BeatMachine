import HomePage from "./homepage";
import { connect } from "react-redux";
import { logout } from './../../actions/session_actions';
import { signupForm, loginForm } from './../../actions/modal_actions';


const mapStateToProps = ({session: {currentUser}}) => {
  return ({
    currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    logout: () => dispatch(logout()),
    signupForm: () => dispatch(signupForm()),
    loginForm: () => dispatch(loginForm())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
