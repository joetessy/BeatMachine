import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';


class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: ""
		};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
		if (this.props.type === 'login'){
			this.props.login({user});
		} else {
			this.props.signup({user});
		}
    this.setState({username: '', password: '' });
  }

  handleChange(e){
    this.setState({ [e.currentTarget.id]: e.currentTarget.value});
  }

	componentDidMount(){
		if (this.props.isOpen){
			$('.transform').toggleClass('transform-active');
		}
	}



  render(){
		let title = null;
		let buttonText = null;
		let pwText = null;
		switch(this.props.type){
			case 'login':
				title = 'Sign in to BeatMachine';
				buttonText = 'Sign In';
				pwText = 'Enter Your Password';
			break;
			case 'signup':
				title = 'Create your BeatMachine Account';
				buttonText = 'Continue';
				pwText = 'Choose a password';
			break;
		}
    let errors = (this.props.errors) ? this.props.errors.join(", ") : null;
    return(
			<div className='auth-form-container'>
      <div className='session-form'>
        <form onSubmit={this.handleSubmit}>
					<header><h1>{title}</h1></header>
          <label htmlFor='username'>Enter Your Username
            <input id='username' type='text'
              onChange={this.handleChange}
              value={this.state.username}></input>
					</label>
					<label htmlFor='password'>{pwText}
          	<input id='password' type='password'
            	onChange={this.handleChange}
            	value={this.state.password}></input>
					</label>

						<input type='submit' value={buttonText}/>
        </form>
					<div className='error-container'>
					<p className='errors'>{errors}</p>
					</div>
      	</div>
			</div>
    );
  }
}

export default withRouter(SessionForm);
