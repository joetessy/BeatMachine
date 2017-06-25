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
      tracks = selectAllTracks(this.props.tracks);
    } else {
      tracks = selectArtistTracks(this.props.artist);
    }
    for(let i = 0; i < tracks.length; i++){
      if (tracks[i].id === this.props.track.id){
        tracks = tracks.slice(i);
        break;
      }
    }
    console.log(tracks);
    this.props.sendAudio(tracks);
  }

  componentWillReceiveProps(){

  }

  render(){
    let icon;
    if (this.props.nowPlaying === this.props.track.id ){
      icon = <i className="fa fa-pause" aria-hidden="true"></i>;
    } else {
      icon = <i className="fa fa-play" aria-hidden="true"></i>;
    }

    return(
      <div className='play-button'
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
  nowPlaying: state.nowPlaying
});

const mapDispatchToProps = (dispatch) => ({
  sendHomeTracks: () => dispatch(requestTracks()),
  sendAudio: (src) => dispatch(receiveAudio(src))
});


export default
  withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackButton));
