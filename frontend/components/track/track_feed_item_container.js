import { connect } from 'react-redux';
import { deleteTrack } from './../../actions/track_actions';
import TrackFeedItem from './track_feed_item';
import { closeModal, openModal } from '../../actions/modal_actions';
import { createFavorite } from './../../actions/favorite_actions';
import { requestTracks } from './../../actions/track_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,

});

const mapDispatchToProps = (dispatch) => {
  return({
    deleteTrack: (track) => dispatch(deleteTrack(track)),
    closeModal: () => dispatch(closeModal()),
    openModal: (component) => dispatch(openModal(component)),
    createFavorite: (favorite) => dispatch(createFavorite(favorite)),
    requestTracks: () => dispatch(requestTracks())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackFeedItem);
