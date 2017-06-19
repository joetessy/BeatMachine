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
    let errors = (this.props.errors) ? this.props.errors.join(", ") : null;
    const linkText = this.props.formType === 'login' ? '/signup' : '/login';
    return(
      <div className='session-form'>
        <header>{this.props.formType}</header>
        <Link to={linkText}></Link>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='username'>Username:</label>
            <input id='username' type='text'
              onChange={this.handleChange}
              value={this.state.username}></input>

            <label htmlFor='password'>Password:</label>
            <input id='password' type='password'
              onChange={this.handleChange}
              value={this.state.password}></input>

            <input type='submit' value={this.props.formType}/>
        </form>
        <p>{errors}</p>
      </div>
    );
  }
}

export default withRouter(SessionForm);
