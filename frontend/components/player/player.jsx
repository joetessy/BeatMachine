import React from 'react';
import { connect } from 'react-redux';
import { nowPlaying } from './../../actions/player_actions';
import { NavLink } from 'react-router-dom';

class Player extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      queue: [],
      currentUser: this.props.currentUser,
      queueCount: 0,
      tracks: {},
      nowPlaying: null,
      currentTime: null,
      length: null};
    this.checkTime = this.checkTime.bind(this);
    this.myInterval = this.myInterval.bind(this);

    this.startPlayer = this.startPlayer.bind(this);
    this.changeTrack = this.changeTrack.bind(this);
    this.nextTrack = this.nextTrack.bind(this);
    this.previousTrack = this.previousTrack.bind(this);

    this.handlePlayButton = this.handlePlayButton.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);

    this.calculateCurrentValue = this.calculateCurrentValue.bind(this);
    this.updateTime = this.updateTime.bind(this);
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
    }

    else if (currentId && nextId && currentId === nextId ){
      if (this.music.paused && nextProps.nowPlaying.idx === 'z'){
        this.music.play();
        this.playButton.className = 'fa fa-pause';
      } else {
        if (nextProps.nowPlaying.idx === 'z') {
        this.music.pause();
        this.playButton.className = 'fa fa-play';
        }
      }
    }

    else if ( nextId && currentId !== nextId){
      this.changeTrack(this.state.tracks[nextId].audio_url);
    } else if ( currentId && !nextId) {
      this.music.pause();
      this.playButton.className = 'fa fa-play';
    }
  }

  handlePlayButton(){
    let id = this.props.nowPlaying.id;
    let idx = this.props.nowPlaying.idx;
    if (this.music.paused){
      this.music.play();
      this.props.setNowPlaying(id, null, true);
      this.playButton.className = 'fa fa-pause';
    } else {
      this.music.pause();
      this.props.setNowPlaying(id, null, false);
      this.playButton.className = 'fa fa-play';
    }

  }
  startPlayer(np, queue){
    this.footer.className = 'hide footer';
    this.controls.className = 'controls';
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
    this.music.pause();
    let currentId = this.props.nowPlaying.id;
    let queue = this.props.queue;
    const findIdx = el => (el === currentId);
    let newIdx = queue.findIndex(findIdx) + 1;
    if (queue[newIdx]){
      let newId = queue[newIdx];
      this.music.src = this.state.tracks[newId].audio_url;
      this.props.setNowPlaying(newId, newIdx, true);
    }
  }

  previousTrack(){
    this.music.pause();
    let currentId = this.props.nowPlaying.id;
    let queue = this.props.queue;
    const findIdx = el => (el === currentId);
    let newIdx = queue.findIndex(findIdx) - 1;
    if (queue[newIdx]){
      let newId = queue[newIdx];
      this.music.src = this.state.tracks[newId].audio_url;
      this.props.setNowPlaying(newId, newIdx, true);
    }
  }

  handleNext(){
    this.nextTrack();
  }
  handlePrevious(){
    this.previousTrack();
  }

  checkTime(){
      this.interval = setInterval(() => this.myInterval(), 200);
    }

  myInterval(){
    if (!this.music){
      clearInterval(this.interval);
      this.interval = null;
    } else if (this.music.ended){
      this.nextTrack();
    }
    this.updateTime();
  }

  updateTime(){
    let player = this.music;
    let length = this.calculateCurrentValue(player.duration);
    let currentTime = this.calculateCurrentValue(player.currentTime);
    this.setState({currentTime: currentTime});
    this.setState({length: length});

    let progressBar = this.seekObj;
    if (this.state.length !== 'NaN:NaN'){
      progressBar.value = (player.currentTime / player.duration);
      progressBar.addEventListener('click', seek);
    }

    this.seekButton.style.left = `${progressBar.value * 100}%`;

    function seek(e) {
      var percent = e.offsetX / this.offsetWidth;
      player.currentTime = percent * player.duration;
      progressBar.value = percent / 100;
    }
  }

  calculateCurrentValue(currentTime){
    var currentHour = parseInt(currentTime / 36000)  % 24,
    currentMinute = parseInt(currentTime / 60) % 60,
    currentSecondsLong = currentTime % 60,
    currentSeconds = currentSecondsLong.toFixed(),
    theTime =
    ( currentMinute < 10 ? '0' + currentMinute : currentMinute)
    + ':' + (currentSeconds < 10 ? "0" + currentSeconds : currentSeconds);
    return theTime;
  }

  render(){
    let audioPlayer =
          <audio
            ref={(arg) => {this.music = arg;}}
            src="">
          </audio>;
    if (!audioPlayer.paused){
      if (!this.interval){
        this.checkTime();
      }
    }
    let tracks = null;
    let track = null;
    let title = null;
    let artist = null;
    let trackImage = null;
    if (this.props.nowPlaying.id){
      track = this.props.tracks[this.props.nowPlaying.id];
      trackImage =
        <NavLink to={`/${track.artist}`}>
          <img src={track.artist_image}/>
        </NavLink>;

      title =
        <NavLink to={`/${track.artist}/${track.title}`}>
          <div className='footer-title'>{track.title}</div>
        </NavLink>;

      artist =
        <NavLink to={`/${track.artist}`}>
          <div className='footer-artist'>{track.artist}</div>
        </NavLink>;
    }
    let currentTime = null;
    let length = <small className='end-time'>00:00</small>;
    if (this.state.currentTime){
      currentTime = <small className='current-time'>
        {this.state.currentTime}</small>;
      length = <small className='end-time'>
        {this.state.length}</small>;
    }

    return (
      <div className='hide'
        ref={(arg) => {this.footer = arg;}}>
        {audioPlayer}
        <div className='footer-inner'>
          <div className='hide'
            ref={(arg) => {this.controls = arg;}}>
            <i className="fa fa-step-backward" aria-hidden="true"
              onClick={this.handlePrevious}></i>
            <div className='play-pause'>
            <i className=""
                ref={(btn) => {this.playButton = btn;}}
                onClick={this.handlePlayButton}>
            </i>
            </div>
            <i className="fa fa-step-forward" aria-hidden="true"
              onClick={this.handleNext}></i>
          </div>
          <div className='progress'>
            {currentTime}
            <span id='seek-obj-container'>
              <progress id='seek-obj' value='0' max='1'
                ref={(arg => {this.seekObj = arg;})}></progress>
              <div className='seek-button'
                ref={(arg => {this.seekButton = arg;})}></div>
            </span>
            {length}

          </div>
          <div className='footer-info-container'>
          <div className='footer-info'>
            <div className='footer-image'>
              {trackImage}
            </div>

            <div className='footer-links'>
              {artist}
              {title}
            </div>
          </div>
          </div>
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
