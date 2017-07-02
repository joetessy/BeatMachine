import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestTracks } from './../../actions/track_actions';
import { receiveAudio, nowPlaying} from './../../actions/player_actions';
import { selectAllTrackIds, selectArtistTrackIds }
  from '../../reducers/selectors';
import values from 'lodash/values';


class TrackButton extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    let tracks;
    if (this.props.match.path.slice(1) === 'stream'
      || this.props.match.path === '/'){
      tracks = selectAllTrackIds(this.props.tracks);
    } else {
      tracks = selectArtistTrackIds(this.props.artist);
    }
    let thisId = this.props.track.id;
    let currentId = this.props.nowPlaying.id;
    let currentIdx = this.props.nowPlaying.idx;
    let status = this.props.nowPlaying.status;

    if (thisId === currentId){
      if (status === 'playing'){
        this.props.sendNowPlaying(thisId, currentIdx, 'paused');
      } else {
        this.props.sendNowPlaying(thisId, currentIdx, 'playing');
      }
    } else {
      for(let i = 0; i < tracks.length; i++){
        if (tracks[i] === thisId){
          this.props.sendNowPlaying(thisId, i, 'playing');
          break;
        }
      }
      this.props.sendAudio(tracks);
    }
  }

  render(){
    let icon;
    if (this.props.nowPlaying.id === this.props.track.id
      & this.props.nowPlaying.status === 'playing'){
      icon = <i className="fa fa-pause" aria-hidden="true"></i>;
    } else {
      icon = <i className="fa fa-play" aria-hidden="true"></i>;
    }

    let buttonClass = '';
    if (this.props.location.pathname === '/' &&
      this.props.nowPlaying.id === this.props.track.id
      && this.props.nowPlaying.status === 'playing'){
      buttonClass='play-button-show';
    }

    return(
      <div className={`play-button ${buttonClass}`}
        onClick={this.handleClick}>
        {icon}
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  tracks: state,
  artist: state.artist,
  track: ownProps.track,
  nowPlaying: state.nowPlaying,
  queue: state.player
});

const mapDispatchToProps = (dispatch) => ({
  sendHomeTracks: () => dispatch(requestTracks()),
  sendAudio: (src) => dispatch(receiveAudio(src)),
  sendNowPlaying: (id, idx, status) => dispatch(nowPlaying(id, idx, status))
});


export default
  withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackButton));
