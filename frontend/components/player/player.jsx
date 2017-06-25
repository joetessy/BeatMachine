import React from 'react';
import { connect } from 'react-redux';

class Player extends React.Component {

  constructor(props){
    super(props);
  }

  componentWillReceiveProps(nextProps){
    if (this.props.location.pathname !== nextProps.location.pathname){
      this.music.play();
    } else if (this.props.queue.length === 0 &&
    this.props.location.pathname === nextProps.location.pathname){
      this.music.src = nextProps.queue[0].audio_url;
      this.music.play();
    } else if (this.props.queue.length > 0 &&
      nextProps.queue[0].audio_url === this.props.queue[0].audio_url){
      if (this.music.paused){
        this.music.play();
      } else {
        this.music.pause();
      }
    } else {
      this.music.pause();
      this.music.src = nextProps.queue[0].audio_url;
      this.music.play();
    }
  }

  render(){
    let audioPlayer =
          <audio controls='controls'
            autoPlay
            ref={(arg) => (this.music = arg)}
            src="">
          </audio>;
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

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, null)(Player);
