import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import NavBarContainer from './../navbar/navbar_container';
import ProfileTrackStreamContainer
  from './../track/profile_track_stream_container';


class ProfilePage extends React.Component{
  constructor(props){
    super(props);
    this.state = { isOpen: false};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e){
    e.preventDefault();
    this.props.logout();
  }

  render(){
    return (
      <div>
        <NavBarContainer />
        <div className='login-home-container'>
          <div className='profile-header'>

          </div>
          <div className='TrackFeed'>
            <ProfileTrackStreamContainer/>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
