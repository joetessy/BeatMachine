import React from 'react';
import { connect } from 'react-redux';
import { selectAllTracks } from './../../reducers/selectors';
import { requestTracks } from '../../actions/track_actions';
import HomePageIndexItem from './homepage_index_item';

class HomePageTrackIndex extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.requestTracks();
  }

  render(){
    let tracks = null;
    if (this.props.tracks.length > 0){
      tracks = this.props.tracks.map((track) => {
        return <HomePageIndexItem
          track={track}
          nowPlaying={this.props.nowPlaying}
          key={track.id}/>;
      });
    }
    return (
      <ul className='homepage-track-index'>
        {tracks}
      </ul>

    );
  }

}

const mapStateToProps = (state) => ({
  tracks: selectAllTracks(state),
  nowPlaying: state.nowPlaying
});

const mapDispatchToProps = (dispatch) => {
  return ({
    requestTracks: () => dispatch(requestTracks())
  });
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePageTrackIndex);
