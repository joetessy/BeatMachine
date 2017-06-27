import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import NavBarContainer from './../navbar/navbar_container';
import TrackStreamContainer from './../track/track_stream_container';


class LoginHomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = { isOpen: false};
  }


  render(){
    if (!this.props.currentUser) {
      return (
        <Redirect to="/" />
      );
    }
      return (
        <div>
          <NavBarContainer />
          <div className='push-below-navbar'>
          <div className='login-home-container'>
            <div className='home-header'>
            <h2>Stream</h2>
            </div>
            <div className='TrackFeed'>
              <TrackStreamContainer/>
            </div>
          </div>
          </div>
        </div>
      );
    }
}

export default LoginHomePage;
