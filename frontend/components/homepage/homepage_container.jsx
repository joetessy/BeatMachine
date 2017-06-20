import HomePage from "./homepage";
import { connect } from "react-redux";
import { logout, clearErrors } from './../../actions/session_actions';
import { signupForm, loginForm }
  from './../../actions/modal_actions';


const mapStateToProps = ({session: {currentUser}}) => {
  return ({
    currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    logout: () => dispatch(logout()),
    signupForm: () => dispatch(signupForm()),
    loginForm: () => dispatch(loginForm()),
    clearErrors: () => dispatch(clearErrors()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
