import { connect } from 'react-redux';
import { createTrack }
  from '../../actions/track_actions';
import { logout } from './../../actions/session_actions';
import UploadTrackForm from './upload_track_form';


const mapStateToProps = ({session: {currentUser}, errors}) => {
  return ({
    currentUser,
    errors
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createTrack: (track) => dispatch(createTrack(track)),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadTrackForm);
