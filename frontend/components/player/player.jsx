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
    let currentIdx = this.props.nowPlaying.idx;
    let nextId = nextProps.nowPlaying.id;
    let nextIdx = nextProps.nowPlaying.idx;
    let nextStatus = nextProps.nowPlaying.status;
    let nextPlaying = nextProps.nowPlaying;


    if (this.props.location.pathname === '/stream' ||
    this.props.location.pathname === '/'){
      // Get all tracks if on home page
      this.setState({tracks: nextProps.tracks});
    } else {
        // Get artist tracks if on artist page
        this.setState({tracks: nextProps.artistTracks});
    }
    let currentQueue = this.props.queue;
    let nextQueue = nextProps.queue;

    //Start player by clicking track index button
    if (currentQueue.length === 0 && nextQueue.length > 0){
      this.startPlayer(nextPlaying, nextQueue);
    }

    //Handles Pause resume when clicking track index button
    else if (currentId === nextId && nextStatus !== null){
      if (this.music.paused &&
        nextIdx === currentIdx
      && nextStatus !== 'paused'){
        this.music.play();
        this.playButton.className = 'fa fa-pause';
      } else {
        if (nextIdx === currentIdx &&
          nextStatus !== 'playing') {
        this.music.pause();
        this.playButton.className = 'fa fa-play';
        }
      }
    }

    //Handles Track change;
    else if ( nextId && currentId !== nextId){
      this.changeTrack(this.state.tracks[nextId].audio_url, currentId);
    }
  }
  startPlayer(np, queue){
    this.footer.className = 'hide footer';
    this.controls.className = 'controls';
    this.music.src = this.state.tracks[queue[np.idx]].audio_url;
    this.music.play();
    this.playButton.className = 'fa fa-pause';
  }

  changeTrack(src, id){
    this.music.src = src;
    this.music.play();
    this.playButton.className = 'fa fa-pause';
    const waveForm = $('#wave-' + id);
    if (waveForm){
      waveForm.find('wave')[1].style.width = '0px';
    }
  }

  nextTrack(id, idx){
    this.music.pause();
    let nextIdx = idx + 1;
    let queue = this.props.queue;
    if (queue[nextIdx]){
      let newId = queue[nextIdx];
      this.music.src = this.state.tracks[newId].audio_url;
      this.props.setNowPlaying(newId, nextIdx, 'playing');
    }
  }

  previousTrack(id, idx){
    this.music.pause();
    let nextIdx = idx - 1;
    let queue = this.props.queue;
    if (queue[nextIdx]){
      let newId = queue[nextIdx];
      this.music.src = this.state.tracks[newId].audio_url;
      this.props.setNowPlaying(newId, nextIdx, 'playing');
    }
  }

  //player controls pause / resume
  handlePlayButton(){
    let id = this.props.nowPlaying.id;
    let idx = this.props.nowPlaying.idx;
    let status = this.props.nowPlaying.status;
    if (this.music.paused && status === 'paused'){
      this.music.play();
      this.props.setNowPlaying(id, idx, 'playing');
      this.playButton.className = 'fa fa-pause';
    } else {
      this.music.pause();
      this.props.setNowPlaying(id, idx, 'paused');
      this.playButton.className = 'fa fa-play';
    }
  }

  //player controls next / previous
  handleNext(){
    this.nextTrack(this.props.nowPlaying.id, this.props.nowPlaying.idx);
  }
  handlePrevious(){
    this.previousTrack(this.props.nowPlaying.id, this.props.nowPlaying.idx);
  }

  checkTime(){
      this.interval = setInterval(() => this.myInterval(), 200);
    }

  myInterval(){
    if (!this.music){
      clearInterval(this.interval);
      this.interval = null;
    } else if (this.music.ended){
      this.nextTrack(this.props.nowPlaying.id, this.props.nowPlaying.idx);
    }
    this.updateTime();
  }

  updateTime(){
    let player = this.music;
    let length = this.calculateCurrentValue(player.duration);
    let currentTime = this.calculateCurrentValue(player.currentTime);
    this.setState({currentTime: currentTime});
    this.setState({length: length});
    if ($('#wave-' + this.props.nowPlaying.id)[0]){
      let waveForm = $('#wave-' + this.props.nowPlaying.id)[0];
      $('#wave-' + this.props.nowPlaying.id).find('wave')[1].style.width =
       Math.floor(waveForm.offsetWidth/player.duration * player.currentTime) + "px";
    }

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
        {this.state.length === 'NaN:NaN' ? '--:--' : this.state.length}</small>;
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
  setNowPlaying: (id, idx, status) => dispatch(nowPlaying(id, idx, status))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
