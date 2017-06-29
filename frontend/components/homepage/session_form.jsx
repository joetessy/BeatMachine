import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { findDOMNode } from 'react-dom';
import $ from 'jquery';


class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			location: "",
			imageFile: null,
			imageUrl: null,
			errors: '',
		};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
		this.updateFile = this.updateFile.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
		this.props.clearErrors();
    const user = Object.assign({}, this.state);
		if (this.props.type === 'login'){
			this.props.login({user}).then(this.props.closeModal());
		} else {
			let formData = new FormData();
				formData.append('user[username]', this.state.username);
				formData.append('user[password]', this.state.password);
				formData.append('user[location]', this.state.location);
				formData.append('user[avatar]', this.state.imageFile);
				this.props.signup(formData).then(this.props.closeModal());
		}

		if (this.state.username === "" || this.state.password === "" ||
			this.state.imageFile === null){
				this.setState({errors: 'Please fill out all values'});
			}
  }

  handleChange(e){
    this.setState({ [e.currentTarget.id]: e.currentTarget.value});
  }

	updateFile(e){
		const file = e.currentTarget.files[0];
		const fileReader = new FileReader();
		fileReader.onloadend = function(){
			this.setState({imageFile: file, imageUrl: fileReader.result});
		}.bind(this);
		if (file){
			fileReader.readAsDataURL(file);
		}
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
		let feErrors = null;
		let formClass = null;
		let containerClass = null;
		let imageInput = () => {return null;};
		let locationInput = () => {return null;};
		switch(this.props.type){
			case 'login':
				formClass = 'auth-login';
				containerClass = 'login-container';
				title = 'Sign in to BeatMachine';
				buttonText = 'Sign In';
				pwText = 'Enter Your Password';
			break;
			case 'signup':
				formClass = 'auth-signup';
				containerClass = 'signup-container';
				title = 'Create your BeatMachine Account';
				buttonText = 'Continue';
				pwText = 'Choose a Password';
				imageInput = () => {
					return (
						<div className='image-input'>
						<label className='file-container'
							htmlFor='image'>Upload Profile Image
							<input type='file' onChange={this.updateFile} />
							</label>
							<div className='img-cropper'>
								<img src={this.state.imageUrl}/>
							</div>
						</div>
					);
				};
				locationInput = () => {
					return (
							<label>
								Enter Location
								<input id='location'
									onChange={this.handleChange}
									 value={this.state.location}/>
							</label>
					);
				};
			break;
		}
    let errors = (this.props.errors.length > 0) ?
			this.props.errors.join(", ") : null;
    return(
			<div className={containerClass}>
      <div className={formClass}>
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
					{locationInput()}
					{imageInput()}
					<input type='submit' value={buttonText}/>
        </form>
					<div className='error-container'>
					<p className='errors'>
						{ this.props.type === 'login' ?
							errors : this.state.errors }
					</p>
					</div>
      	</div>
			</div>
    );
  }
}

export default withRouter(SessionForm);
