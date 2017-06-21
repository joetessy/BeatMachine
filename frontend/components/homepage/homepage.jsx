import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import SessionFormContainer from './session_form_container';
import { Route, Redirect } from 'react-router-dom';
import LoginHomePageContainer
  from './../login_homepage/login_homepage_container';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = { isOpen: false};
    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleModal = this.handleModal.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.logout();
  }

  closeModal(e) {
    if (this.state.isOpen){
      $('.transform').toggleClass('transform-active');
    }
    this.props.clearErrors();
    let that = this;
    setTimeout(function(){
      that.setState({ isOpen: false });
    }, 400);
  }

  openModal(){
    this.setState({ isOpen: true });
  }

  componentWillMount(){
    Modal.setAppElement('body');
  }

  handleModal(e){
    if (e.currentTarget.textContent === 'Sign up for free' ||
      e.currentTarget.textContent === 'Create account'){
      this.props.signupForm();
    } else if (e.currentTarget.textContent === 'Sign in'){
      this.props.loginForm();
    }
    this.openModal();
  }

  render(){
    if (this.props.currentUser) {
      return (
        <Redirect to="/stream" />
      );
    } else {
      return(
        <div>
          <Modal
            onRequestClose={this.closeModal}
            isOpen={this.state.isOpen}
            className='modal-content transform'
            contentLabel="Modal">
            <SessionFormContainer isOpen={this.state.isOpen}/>
          </Modal>
          <div className='orange-bar'></div>
          <div className='welcome-pic'>
            <div className='home-logo'>BeatMachine</div>
            <div className='auth-links'>
              <button className='signin'
                onClick={this.handleModal}>
                  Sign in
              </button>

              <button className='signup'
                onClick={this.handleModal}>
                  Create account
              </button>
            </div>
              <main className='home-content'>
                <h1>Connect on BeatMachine</h1>
                <h2>Discover, stream, and share a constantly
                  expanding mix of beats from emerging and major
                  artists around the world.</h2>
                <button className='signup-main'
                  onClick={this.handleModal}>
                    Sign up for free
                </button>
              </main>
          </div>
        </div>
      );
    }
  }
}

export default HomePage;
