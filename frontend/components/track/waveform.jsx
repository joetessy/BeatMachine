import React from 'react';
import ReactDOM from 'react-dom';
import Wavesurfer from 'react-wavesurfer';
import { connect } from 'react-redux';

class WaveForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {playing: false,
    pos: 0};
    this.handleTogglePlay = this.handleTogglePlay.bind(this);
    this.handlePosChange = this.handlePosChange.bind(this);
  }

  componentDidMount(){
    const audio = $('audio')[0];
  }

  handleTogglePlay(){
    this.setState({
      playing: !this.state.playing
    });
  }

  handlePosChange(e){
    this.setState({
      pos: e.originalArgs[0]
    });
    const audio = $('audio')[0];
    audio.currentTime = this.state.pos;

  }


  render(){
    return (

      <div className="track-waveform" id={"wave-" + this.props.track.id}>
        <Wavesurfer
          onPosChange={this.handlePosChange}
          container={`#wave-${this.props.track.id}`}
          backend='MediaElement'
          audioFile={this.props.track.audio_url}
          ref={this.wavesurfer}
          onSeek={this.handleSeek}
          options={
            {
            waveColor: '#8c8c8c',
            progressColor: '#ff5000',
            height: 50,
            width: 200,
            barWidth: 2,
            cursorColor: 'transparent'}
          }/>
        </div>

    );
  }
}

const mapStateToProps = (state, ownProps) => ({
    nowPlaying: state.nowPlaying.status,
    track: ownProps.track
});

export default connect(mapStateToProps, null)(WaveForm);
