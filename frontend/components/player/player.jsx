import React from 'react';
import { connect } from 'react-redux';
import { nowPlaying } from './../../actions/player_actions';

class Player extends React.Component {

  constructor(props){
    super(props);
    this.nextTrack = this.nextTrack.bind(this);
    this.state = { sequenceCount: 0, queue: [] };
  }

  componentWillReceiveProps(nextProps){

    this.setState({queue: this.props.queue});
    if (this.props.location.pathname !== nextProps.location.pathname){
      /* Resume music on path change */
      if (this.music.paused && nextProps.queue.length > 0){
        this.music.play();
      }
    } else if (this.state.queue.length === 0 &&
    this.props.location.pathname === nextProps.location.pathname &&
      nextProps.queue.length > 0){
      /* Start player when recieving a queue (push play button) */
      this.music.src = nextProps.queue[0].audio_url;
      this.setState({queue: nextProps.queue});
      this.music.play();
      this.props.nowPlaying(nextProps.queue[0].id);
    } else if (this.state.queue.length > 0 &&
      nextProps.queue[0].audio_url === this.state.queue[0].audio_url){
      if (this.music.paused){
        /* Pause / play when user pushes same button */
        this.music.play();
        this.setState({queue: nextProps.queue});
        this.props.nowPlaying(nextProps.queue[0].id);
      } else {
        this.music.pause();
        this.props.nowPlaying(null);
      }
    } else {
      /* Change Track when User pushes another button */
      this.music.pause();
      this.setState({queue: nextProps.queue});
      this.music.src = nextProps.queue[0].audio_url;
      if (this.state.queue.length > 0){
        this.music.play();
        this.props.nowPlaying(nextProps.queue[0].id);
      }
    }
  }

  checkTime(){
    let myInterval = function(){
      if (this.music.ended){
        this.nextTrack();
      }
    }.bind(this);
    setInterval(myInterval, 500);
  }

  nextTrack(){
    let currentCount = this.state.sequenceCount;
    if (this.state.queue.length === 1) return;
    let newQueue = this.state.queue.slice(1);
    this.setState({queue: newQueue});
    this.music.src = this.state.queue[0].audio_url;
    this.music.play();
    this.props.nowPlaying(this.state.queue[0].id);
  }

  render(){
    let audioPlayer =
          <audio controls='controls'
            ref={(arg) => (this.music = arg)}
            src="">
          </audio>;
    if (!audioPlayer.paused){
      this.checkTime();
    }
    return (
      <div className='footer'>
        {audioPlayer}
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
