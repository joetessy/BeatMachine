import React from 'react';
import { Link } from 'react-router-dom';
import { Route, Redirect } from 'react-router-dom';
import NavBarContainer from './../navbar/navbar_container';


class LoginHomePage extends React.Component{
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
    if (!this.props.currentUser) {
      return (
        <Redirect to="/" />
      );
    }

      return (
        <div>
          <NavBarContainer />
          <div className='login-home-container'>
            <h2>Stream</h2>
          </div>
        </div>
      );
    }
}

export default LoginHomePage;
