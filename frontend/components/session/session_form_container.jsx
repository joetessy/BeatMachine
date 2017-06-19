import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signUp, logIn } from './../../actions/session_actions';

const mapStateToProps = ({session: {currentUser, errors}}, ownProps) => {
  const formType = (ownProps.location.pathname === '/login') ? 'login' : 'signup';
  return ({
    loggedIn: Boolean(currentUser),
    errors,
    formType,
  });
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const authFunc = (ownProps.location.pathname === '/login') ? logIn : signUp;
  return ({
    processForm: (u) => dispatch(authFunc(u)),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
