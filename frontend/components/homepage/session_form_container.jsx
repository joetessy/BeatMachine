import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = ({session, modal}) => {
  return {
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
    type: modal
  };
};

const mapDispatchToProps = (dispatch, { history }) => {

};

export default connect(
  mapStateToProps,
  null
)(SessionForm);
