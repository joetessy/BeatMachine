import { connect } from 'react-redux';
import Modal from './modal';
import { closeModal, receiveComponent } from './../../actions/modal_actions';

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser,
    isOpen: state.modal.isOpen,
    component: state.modal.component
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    receiveComponent: (component) => dispatch(receiveComponent(component)),
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
