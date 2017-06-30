import React from 'react';
import SessionFormContainer from './session_form_container';
import { Route, Redirect } from 'react-router-dom';
import LoginHomePageContainer
  from './../login_homepage/login_homepage_container';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';
import HomePageTrackIndex from './homepage_track_index';

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = { isOpen: false};
    this.handleClick = this.handleClick.bind(this);
    this.guestLogin = this.guestLogin.bind(this);
    this.handleAuth = this.handleAuth.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.logout();
  }

  handleAuth(component){
    this.props.clearErrors();
    return (e) => { this.props.openModal(component); };
  }

  guestLogin(){
    const user = { user: {username: "guest", password: "password" } };
    this.props.login(user);
  }

  render(){
    if (this.props.currentUser) {
      return (
        <Redirect to="/stream" />
      );
    } else {
      return(
        <div>
          <div className='orange-bar'></div>
          <div className='welcome-pic'>
            <div className='home-logo'>
              <img src={window.images.logo}/>
              <div className='logo-title'>
              BeatMachine
              </div>
            </div>
            <div className='auth-links'>
              <button className='signin'
                onClick={this.guestLogin}>
                  Guest
              </button>
              <button className='signin'
                onClick={this.handleAuth(
                  <SessionFormContainer type='login'/>)}>
                  Sign in
              </button>

              <button className='signup'
                onClick={this.handleAuth(
                  <SessionFormContainer type='signup'/>)}>
                  Create account
              </button>
            </div>
              <main className='home-content'>
                <h1>Connect on BeatMachine</h1>
                <h2>Discover, stream, and share a constantly
                  expanding mix of beats from emerging and major
                  artists around the world.</h2>
                <button className='signup-main'
                  onClick={this.handleAuth(
                    <SessionFormContainer type='signup'/>
                  )}>
                    Sign up for free
                </button>
              </main>
          </div>
          <div className='home-discover'>
            <h1>Hear what's trending for free in the BeatMachine Community</h1>
            <div className='homepage-track-index-container'>
              <HomePageTrackIndex/>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default HomePage;
