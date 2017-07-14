import React from 'react';
import ReactDOM from 'react-dom';
import Wavesurfer from 'react-wavesurfer';
import { connect } from 'react-redux';

class WaveForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pos: 0,
      loading: true};
    this.handlePosChange = this.handlePosChange.bind(this);
    this.handleReady = this.handleReady.bind(this);
  }

  componentDidMount(){
    const audio = $('audio')[0];
  }


  handlePosChange(e){
    this.setState({
      pos: e.originalArgs[0]
    });
    const audio = $('audio')[0];
    if (audio.src === this.props.track.audio_url){
      audio.currentTime = this.state.pos;
    }
  }

  handleReady(){
    this.setState({loading: false});
  }


  render(){
    let loader = this.state.loading ?
    <div className='loader-container'>
      <div className="sk-circle">
        <div className="sk-circle1 sk-child"></div>
        <div className="sk-circle2 sk-child"></div>
        <div className="sk-circle3 sk-child"></div>
        <div className="sk-circle4 sk-child"></div>
        <div className="sk-circle5 sk-child"></div>
        <div className="sk-circle6 sk-child"></div>
        <div className="sk-circle7 sk-child"></div>
        <div className="sk-circle8 sk-child"></div>
        <div className="sk-circle9 sk-child"></div>
        <div className="sk-circle10 sk-child"></div>
        <div className="sk-circle11 sk-child"></div>
        <div className="sk-circle12 sk-child"></div>
      </div>
    </div>: null;



    return (
      <div className="track-waveform" id={"wave-" + this.props.track.id}>
        {loader}
        <Wavesurfer
          onPosChange={this.handlePosChange}
          container={`#wave-${this.props.track.id}`}
          backend='MediaElement'
          mediaElt={this.wave}
          audioFile={this.props.track.audio_url}
          onSeek={this.handleSeek}
          onReady={this.handleReady}
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
