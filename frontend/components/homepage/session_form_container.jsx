import { connect } from 'react-redux';
import { login, logout, signup }
  from '../../actions/session_actions';
import { clearErrors } from './../../actions/errors_actions';
import { closeModal } from './../../actions/modal_actions';
import SessionForm from './session_form';


const mapStateToProps = ({session, errors}, ownProps) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors,
  };
};

const mapDispatchToProps = (dispatch) => {
  return ({
    login: (u) => dispatch(login(u)),
    signup: (u) => dispatch(signup(u)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearErrors()),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
