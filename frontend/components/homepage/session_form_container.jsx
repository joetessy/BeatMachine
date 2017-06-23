import { connect } from 'react-redux';
import { login, logout, signup }
  from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({session, errors, sessionModal}) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors,
    type: sessionModal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    login: (u) => dispatch(login(u)),
    signup: (u) => dispatch(signup(u)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
