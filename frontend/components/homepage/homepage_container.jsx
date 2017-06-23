import HomePage from "./homepage";
import { connect } from "react-redux";
import { logout, login } from './../../actions/session_actions';
import { clearErrors } from './../../actions/errors_actions';
import { signupForm, loginForm }
  from './../../actions/session_modal_actions';


const mapStateToProps = ({session: {currentUser}}) => {
  return ({
    currentUser
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    login: (u) => dispatch(login(u)),
    logout: () => dispatch(logout()),
    signupForm: () => dispatch(signupForm()),
    loginForm: () => dispatch(loginForm()),
    clearErrors: () => dispatch(clearErrors()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
