import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.logout();
  }


  render(){
    if (this.props.currentUser) {
      return (
        <div>
          <h1>Welcome, {this.props.currentUser.username}</h1>
          <button onClick={this.handleClick}>Log Out!</button>
        </div>
      );
    } else {
      return(
        <div>
          <div className='orange-bar'></div>
          <div className='welcome-pic'>
            <div className='home-logo'>BeatMachine</div>
            <div className='auth-links'>
              <Link className='login'
                to='/login'>
                <button className='signin'>
                  Sign in
                </button>
              </Link>

              <Link className='create-account'
                to='/signup'>
                <button className='signup'>Create account</button>
              </Link>
            </div>
              <main>
                <h1>Connect on BeatMachine</h1>
                <h2>Discover, stream, and share a constantly
                  expanding mix of beats from emerging and major
                  artists around the world.</h2>
                  <Link className='create-account'
                    to='/signup'>
                    <button className='signup-main'>Sign up for free</button>
                  </Link>
              </main>
          </div>
        </div>
      );
    }
  }
}

export default Greeting;
