import { connect } from 'react-redux';
import DeleteTrackForm from './delete_track_form';
import { deleteTrack } from './../../actions/track_actions';
import { closeModal } from './../../actions/modal_actions';

const mapStateToProps = ({currentUser}) => ({
  currentUser
});

const matchDispatchToProps = (dispatch) => ({
  deleteTrack: (track) => dispatch(deleteTrack(track)),
  closeModal: () => dispatch(closeModal())
});


export default
  connect(mapStateToProps, matchDispatchToProps)(DeleteTrackForm);
