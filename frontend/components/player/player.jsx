import React from 'react';
import { connect } from 'react-redux';
import { nowPlaying } from './../../actions/player_actions';

class Player extends React.Component {

  constructor(props){
    super(props);
    this.nextTrack = this.nextTrack.bind(this);
    this.state = { sequenceCount: 0 };
  }

  componentWillReceiveProps(nextProps){
    debugger;
    if (this.props.location.pathname !== nextProps.location.pathname){
      this.music.play();
    } else if (this.props.queue.length === 0 &&
    this.props.location.pathname === nextProps.location.pathname){
      debugger;
      this.music.src = nextProps.queue[0].audio_url;
      this.music.play();
      this.props.nowPlaying(nextProps.queue[0].id);
    } else if (this.props.queue.length > 0 &&
      nextProps.queue[0].audio_url === this.props.queue[0].audio_url){
        debugger;
      if (this.music.paused){
        this.music.play();
        this.props.nowPlaying(nextProps.queue[0].id);
      } else {
        this.music.pause();
        this.props.nowPlaying(null);
      }
    } else {
      debugger;
      this.music.pause();
      this.music.src = nextProps.queue[0].audio_url;
      this.music.play();
      this.props.nowPlaying(nextProps.queue[0].id);
    }
  }

  checkTime(){
    setInterval(function(){
      if (this.music.ended){
        this.nextTrack();
      }
    }.bind(this), 500);
  }

  nextTrack(){
    let currentCount = this.state.sequenceCount;
    this.setState({sequenceCount: currentCount + 1});
    this.music.src =this.props.queue[this.state.sequenceCount].audio_url;
    this.music.play();
    this.props.nowPlaying(this.props.queue[this.state.sequenceCount].id);
  }

  render(){
    let audioPlayer =
          <audio controls='controls'
            ref={(arg) => (this.music = arg)}
            src="">
          </audio>;
    this.checkTime();
    return (
      <div className='footer'>
        {audioPlayer}
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  queue: state.player
});

const mapDispatchToProps = (dispatch) => ({
  nowPlaying: (id) => dispatch(nowPlaying(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);
