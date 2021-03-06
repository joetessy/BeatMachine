import { connect } from 'react-redux';
import { updateTrack } from './../../actions/track_actions';
import EditTrackForm from './edit_track_form';
import { closeModal } from './../../actions/modal_actions';


const mapStateToProps = ({currentUser}) => ({
  currentUser
});

const matchDispatchToProps = (dispatch) => ({
  updateTrack: (track, id) => dispatch(updateTrack(track, id)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, matchDispatchToProps)(EditTrackForm);
