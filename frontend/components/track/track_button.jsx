import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestTracks } from './../../actions/track_actions';
import { receiveAudio } from './../../actions/player_actions';
import { selectAllTracks, selectArtistTracks }
  from '../../reducers/selectors';


class TrackButton extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let tracks;
    if (this.props.match.path.slice(1) === 'stream'){
      tracks = this.props.tracks;
    } else {
      tracks = this.props.artistTracks;
    }
    for(let i = 0; i < tracks.length; i++){
      if (tracks[i].id === this.props.track.id){
        tracks = tracks.slice(i);
        break;
      }
    }
    this.props.sendAudio(tracks);
  }

  render(){
    return(
      <div className='play-button'
        onClick={this.handleClick}>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  tracks: selectAllTracks(state),
  artistTracks: selectAllTracks(state.artist),
  track: ownProps.track
});

const mapDispatchToProps = (dispatch) => ({
  sendHomeTracks: () => dispatch(requestTracks()),
  sendAudio: (src) => dispatch(receiveAudio(src))
});


export default
  withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackButton));
