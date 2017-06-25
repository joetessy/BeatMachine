import React from 'react';
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import NavBarContainer from './../navbar/navbar_container';
import { receiveTrack } from './../../actions/track_actions';
import { withRouter } from 'react-router-dom';
import { selectSingleTrack } from './../../reducers/selectors';

class TrackPage extends React.Component{
  constructor(props){
    super(props);
    this.state = { track: null };
  }

  componentDidMount(){
    let tracks = this.props.tracks;
    let trackTitle = this.props.match.params.trackname;
  }

  componentWillReceiveProps(nextProps){
  }

  render(){

    return (
      <div>
        <NavBarContainer />
        <div className='login-home-container'>
          <div className='profile-header'>
            <div className='profile-header-content'>
              <div className='artist-metadata'>
              <div className='track-artist-name'>
                <NavLink to={`/${this.props.match.params.username}`}>
                {this.props.match.params.username}
              </NavLink>
              </div>
              <div className='track-name'>
                {this.props.match.params.trackname}
              </div>
            </div>
          </div>
          </div>
          <div className='home-header'>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({session: currentUser, tracks}) => ({
  currentUser,
  tracks
});

const matchDispatchToProps = (dispatch) => ({
  receiveTrack: (track) => dispatch(receiveTrack(track))
});

export default
  withRouter(connect(mapStateToProps, matchDispatchToProps)(TrackPage));
