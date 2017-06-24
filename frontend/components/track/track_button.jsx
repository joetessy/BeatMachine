import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestTracks } from './../../actions/track_actions';
import { receiveAudio } from './../../actions/player_actions';


class TrackButton extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.props.sendAudio(this.props.track.audio_url);
  }

  render(){
    return(
      <div className='play-button'
        onClick={this.handleClick}>
      </div>
    );
  }

}

const mapStateToProps = (state, ownProps) => ({
  state,
  track: ownProps.track
});

const mapDispatchToProps = (dispatch) => ({
  sendHomeTracks: () => dispatch(requestTracks()),
  sendAudio: (src) => dispatch(receiveAudio(src))
});


export default
  withRouter(connect(mapStateToProps, mapDispatchToProps)(TrackButton));
