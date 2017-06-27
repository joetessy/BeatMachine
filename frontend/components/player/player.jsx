import React from 'react';
import { connect } from 'react-redux';
import { nowPlaying } from './../../actions/player_actions';

class Player extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      queue: [],
      currentUser: this.props.currentUser,
      queueCount: 0,
      tracks: {},
      nowPlaying: null};
    this.checkTime = this.checkTime.bind(this);
    this.myInterval = this.myInterval.bind(this);

    this.startPlayer = this.startPlayer.bind(this);
    this.changeTrack = this.changeTrack.bind(this);
    this.nextTrack = this.nextTrack.bind(this);
    this.previousTrack = this.previousTrack.bind(this);

    this.handlePlayButton = this.handlePlayButton.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }

  componentWillReceiveProps(nextProps){
    let currentId = this.props.nowPlaying.id;
    let nextId = nextProps.nowPlaying.id;

    if (this.props.location.pathname === '/stream'){
      this.setState({tracks: nextProps.tracks});
    } else {
        this.setState({tracks: nextProps.artistTracks});
    }
    let currentQueue = this.props.queue;
    let nextQueue = nextProps.queue;

    if (this.props.queue.length === 0 && nextQueue.length > 0){
      this.startPlayer(nextProps.nowPlaying, nextQueue);
    } else if ( nextId && currentId !== nextId){
      this.changeTrack(this.state.tracks[nextId].audio_url);
    } else if ( currentId && !nextId) {
      this.music.pause();
      this.playButton.className = 'fa fa-play';
    }
  }
  startPlayer(np, queue){
    this.footer.className = 'footer';
    this.music.src = this.state.tracks[queue[np.idx]].audio_url;
    this.music.play();
    this.playButton.className = 'fa fa-pause';
  }

  changeTrack(src){
    this.music.src = src;
    this.music.play();
    this.playButton.className = 'fa fa-pause';

  }

  nextTrack(){
    let newIdx = this.props.nowPlaying.idx + 1;
    let newId = this.props.queue[newIdx];
    this.music.src = this.state.tracks[newId].audio_url;
    this.props.setNowPlaying(newId, newIdx, true);
  }

  previousTrack(){
    this.music.pause();
    let newIdx = this.props.nowPlaying.idx - 1;
    let newId = this.props.queue[newIdx];
    this.music.src = this.state.tracks[newId].audio_url;
    this.props.setNowPlaying(newId, newIdx, true);
    this.music.play();
  }


  handlePlayButton(){
    let id = this.props.nowPlaying.id;
    let idx = this.props.nowPlaying.idx;
    if (this.music.paused){
      this.music.play();
      this.props.setNowPlaying(id, idx, true);
      this.playButton.className = 'fa fa-pause';
    } else {
      this.music.pause();
      this.props.setNowPlaying(id, idx, false);
      this.playButton.className = 'fa fa-play';
    }

  }

  handleNext(){
    this.nextTrack();
  }


  handlePrevious(){
    this.previousTrack();
  }


  checkTime(){
      this.interval = setInterval(() => this.myInterval(), 1000);
    }

  myInterval(){
    if (!this.music){
      clearInterval(this.interval);
      this.interval = null;
    } else if (this.music.ended){
      this.nextTrack();
    }
  }

  render(){
    let audioPlayer =
          <audio
            controls='controls'
            ref={(arg) => {this.music = arg;}}
            src="">
          </audio>;
    if (!audioPlayer.paused){
      if (!this.interval){
        this.checkTime();
      }
    }
    return (
      <div className='footer hide'
        ref={(arg) => {this.footer = arg;}}>
        <div className='footer-inner'>
          <div className='controls'>
            <i className="fa fa-step-backward" aria-hidden="true"
              onClick={this.handlePrevious}></i>

            <i className=""
                ref={(btn) => {this.playButton = btn;}}
                onClick={this.handlePlayButton}>
            </i>
            <i className="fa fa-step-forward" aria-hidden="true"
              onClick={this.handleNext}></i>

          </div>
          {audioPlayer}
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  tracks: state.tracks,
  artistTracks: state.artist.tracks,
  queue: state.player,
  currentUser: state.session.currentUser,
  nowPlaying: state.nowPlaying
});

const mapDispatchToProps = (dispatch) => ({
  setNowPlaying: (id, idx, playing) => dispatch(nowPlaying(id, idx, playing))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
