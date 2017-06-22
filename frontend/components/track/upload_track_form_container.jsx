import { connect } from 'react-redux';
import { createTrack }
  from '../../actions/track_actions';
import { logout } from './../../actions/session_actions';
import UploadTrackForm from './upload_track_form';


const mapStateToProps = ({session: {currentUser}}) => {
  return ({
    currentUser
  });
};

const mapDispatchToProps = (dispatch) => {
  return ({
    createTrack: () => dispatch(createTrack()),
  });
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UploadTrackForm);
