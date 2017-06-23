import { connect } from 'react-redux';
import { deleteTrack } from './../../actions/track_actions';
import TrackFeedItem from './track_feed_item';
import { closeModal, openModal } from '../../actions/modal_actions';
import {displayDropdown} from './../../actions/dropdown_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
  visible: Boolean(state.dropDown.dropdownMenu)
});

const mapDispatchToProps = (dispatch) => {
  return({
    deleteTrack: (track) => dispatch(deleteTrack(track)),
    closeModal: () => dispatch(closeModal()),
    openModal: (component) => dispatch(openModal(component)),
    displayDropdown: () => dispatch(displayDropdown({dropdownMenu: true}))
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackFeedItem);
