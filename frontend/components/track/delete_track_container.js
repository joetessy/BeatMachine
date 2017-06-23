import { connect } from 'react-redux';
import DeleteTrack from './delete_track';
import deleteTrack from './../../actions/track_actions';
import {closeModal} from './../../actions/modal_actions';

const matchDispatchToProps = (dispatch) => ({
  deleteTrack: (track) => dispatch(deleteTrack(track)),
  closeModal: () => dispatch(closeModal())
});


export default connect(null, matchDispatchToProps)(DeleteTrack);
