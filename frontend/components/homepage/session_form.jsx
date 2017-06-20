import React from 'react';
import { Link, withRouter } from 'react-router-dom';


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
    this.props.processForm({user});
    this.setState({username: '', password: '' });
  }


  handleChange(e){
    this.setState({ [e.currentTarget.id]: e.currentTarget.value});
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
    const linkText = this.props.formType === 'login' ? '/signup' : '/login';
    return(
			<div className='auth-form-container'>
      <div className='session-form'>
        <form onSubmit={this.handleSubmit}>
					<header>{title}</header>
					<Link to={linkText}></Link>
          <label htmlFor='username'>Enter Your Email
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
        <p>{errors}</p>
      </div>
			</div>
    );
  }
}

export default withRouter(SessionForm);
