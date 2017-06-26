import React from 'react';
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import NavBarContainer from './../navbar/navbar_container';
import { requestTrack } from './../../actions/track_actions';
import { withRouter } from 'react-router-dom';
import { selectSingleTrack } from './../../reducers/selectors';
import TrackButton from './track_button';

class TrackPage extends React.Component{
  constructor(props){
    super(props);
    this.state = { track: null };
  }

  componentDidMount(){
    this.props.requestTrack(this.props.match.params.title);
    this.setState({track: this.props.track});
  }

  componentWillReceiveProps(nextProps){
    this.setState({track: nextProps.track});
  }

  render(){
    let title = null;
    let artist = null;
    let description = null;
    let image = null;
    let track = null;
    let trackButton = null;
    if (this.props.track){
      title = this.props.track.title;
      artist = this.props.track.artist;
      description = this.props.track.description;
      image = this.props.track.image_url;
      track = this.props.track;
      trackButton = <TrackButton track={track}/>;
    }
    return (
      <div>
        <NavBarContainer />
        <div className='login-home-container'>
          <div className='track-show-header'>
              <div className='track-show-header-content'>
                <div className='track-show-button'>
                  {trackButton}
                </div>
                <div className='artist-metadata'>
                  <div className='track-artist-name'>
                    <NavLink to={`/${artist}`}>
                      {artist}
                    </NavLink>
                  </div>
                <div className='track-name'>
                  {title}
                </div>
              </div>
            </div>
              <div className='track-image'>
                <img src={image}/>
              </div>
          </div>
          <div className='home-header'>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
  currentUser: state.session.currentUser,
  track: state.tracks[state.tracks.showTrack]
  });
};

const matchDispatchToProps = (dispatch) => ({
  requestTrack: (title) => dispatch(requestTrack(title))
});

export default
  withRouter(connect(mapStateToProps, matchDispatchToProps)(TrackPage));
