import HomePage from "./homepage";
import { connect } from "react-redux";
import { logout, login } from './../../actions/session_actions';
import { clearErrors } from './../../actions/errors_actions';
import { closeModal, openModal } from './../../actions/modal_actions';


const mapStateToProps = ({session: {currentUser}, modal}) => {
  return ({
    currentUser,
    modal
  });
};

const mapDispatchToProps = dispatch => {
  return ({
    login: (u) => dispatch(login(u)),
    logout: () => dispatch(logout()),
    closeModal: () => dispatch(closeModal()),
    openModal: (component) => dispatch(openModal(component)),
    clearErrors: () => dispatch(clearErrors()),
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
