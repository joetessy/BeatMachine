import React from 'react';
import { connect } from 'react-redux';
import { nowPlaying } from './../../actions/player_actions';

class Player extends React.Component {

  constructor(props){
    super(props);
    this.state = { queue: [], currentUser: this.props.currentUser,
    queueCount: 0 };
    this.checkTime = this.checkTime.bind(this);
    this.myInterval = this.myInterval.bind(this);
    this.nextTrack = this.nextTrack.bind(this);
    this.handlePathChange = this.handlePathChange.bind(this);
    this.startPlayer = this.startPlayer.bind(this);
    this.handlePauseResume = this.handlePauseResume.bind(this);
    this.changeTrack = this.changeTrack.bind(this);
    this.handlePlayButton = this.handlePlayButton.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
    this.previousTrack = this.previousTrack.bind(this);
  }

  componentWillReceiveProps(nextProps){
    this.setState({queue: this.props.queue});
    this.setState({currentUser: nextProps.currentUser});
    let currentQueue = this.state.queue;
    let nextQueue = nextProps.queue;
                                                    /* If Path Change */
    if (this.props.location.pathname !== nextProps.location.pathname){
      this.handlePathChange();
                                /* Start player when recieving a queue */
    } else if (currentQueue.length === 0 && nextQueue.length > 0){
      this.startPlayer(nextProps, nextQueue);
                                      /* If user pauses or resumes track*/
    } else if (nextQueue.length > 0 &&
      nextQueue[0].audio_url === currentQueue[0].audio_url){
      this.handlePauseResume(nextQueue);
    } else {
                      /* Change Track when User pushes another button */
      this.changeTrack(currentQueue, nextQueue);
    }
  }


  handlePathChange(){
    if (this.music.paused){
      this.music.pause();
    } else {
      this.music.play();
    }
  }

  startPlayer(nextProps, queue){
    this.footer.className = 'footer';
    this.playButton.className = 'fa fa-pause';
    this.music.src = queue[0].audio_url;
    this.setState({queue: queue});
    this.music.play();
    this.props.nowPlaying(queue[0].id);
  }

  handlePauseResume(nextQueue){
    if (this.music.paused){
      /* Pause / play when user pushes same button */
      this.playButton.className = 'fa fa-pause';
      this.music.play();
      this.setState({queue: nextQueue});
      this.props.nowPlaying(nextQueue[this.state.queueCount].id);
    } else {
      this.music.pause();
      this.playButton.className = 'fa fa-play';
      this.props.nowPlaying(null);
    }
  }

  handlePlayButton(){
    this.handlePauseResume(this.state.queue);
  }

  changeTrack(currentQueue, nextQueue){
    this.music.pause();
    this.setState({queue: nextQueue});
    this.music.src = nextQueue[0].audio_url;
    if (currentQueue.length > 0){
      this.playButton.className = 'fa fa-pause';
      this.music.play();
      this.props.nowPlaying(nextQueue[0].id);
    }
  }

  nextTrack(){
    if (this.state.queue.length === 1) return;
    let count = this.state.queueCount + 1;
    this.setState({queueCount: count});
    this.music.src = this.state.queue[count].audio_url;
    this.playButton.className = 'fa fa-pause';
    this.music.play();
    this.props.nowPlaying(this.state.queue[count].id);
  }

  handleNext(){
    this.nextTrack();
  }

  previousTrack(){


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
  queue: state.player,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  nowPlaying: (id) => dispatch(nowPlaying(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
