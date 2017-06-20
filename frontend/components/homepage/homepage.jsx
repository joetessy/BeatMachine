import React from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import SessionFormContainer from './session_form_container';
import { AuthRoute } from './../../util/route_util';
import { Route, Redirect } from 'react-router-dom';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class HomePage extends React.Component{
  constructor(props){
    super(props);
    this.state = { isOpen: false, redirect: false };
    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.logout();
  }

  closeModal(e) {
    e.preventDefault();
    this.setState({ isOpen: false });
  }

  openModal(e){
    e.preventDefault();
    this.setState({ isOpen: true });
  }

  componentWillMount(){
    this.setState({redirect: false});
    Modal.setAppElement('body');
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
          <Modal
            onRequestClose={this.closeModal}
            isOpen={this.state.isOpen}
            style={customStyles}
            contentLabel="Modal">
            <AuthRoute path="/login" component={SessionFormContainer} />
            <AuthRoute path="/signup" component={SessionFormContainer} />
          </Modal>
          <div className='orange-bar'></div>
          <div className='welcome-pic'>
            <div className='home-logo'>BeatMachine</div>
            <div className='auth-links'>

                <button onClick={this.openModal}
                  className='signin'>
                  <Link className='login'
                    to='/login'>
                    Sign in
                  </Link>
                </button>

                <button onClick={this.openModal}
                  className='signup'>
                  <Link className='create-account'
                    to='/signup'>
                    Create account
                  </Link>
                </button>
            </div>
              <main>
                <h1>Connect on BeatMachine</h1>
                <h2>Discover, stream, and share a constantly
                  expanding mix of beats from emerging and major
                  artists around the world.</h2>
                <button onClick={this.openModal}
                  className='signup-main'>
                  <Link className='create-account'
                    to='/signup'>
                    Sign up for free
                  </Link>
                </button>
              </main>
          </div>
        </div>
      );
    }
  }
}

export default HomePage;
