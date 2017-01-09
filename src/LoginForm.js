import React from 'react'
import request from 'request'

class LoginForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: ''
		};

		this.handleFormSubmit = this.formSubmit.bind(this);
		this.handleOnEmailChange = this.onEmailChange.bind(this);
		this.handleOnPasswordChange = this.onPasswordChange.bind(this);
	}

	formSubmit(e) {
		e.preventDefault();
		request.post({
			url: 'http://54.253.12.41:8100/api/users/login',
			form: {
				email: this.state.email,
				password: this.state.password
			}
		}, function(err, httpResponse, body) {
			console.log(err);
			console.log(body);
		})
	}

	onEmailChange(e) {
		this.setState({email: e.target.value});
	}

	onPasswordChange(e) {
		this.setState({password: e.target.value});
	}

	render() {
		return (
			<form onSubmit={this.handleFormSubmit}>
				<div className="container">
					<FormLabel text="Email" />
					<FormInput type="text" onChange={this.handleOnEmailChange} />

					<FormLabel text="Password" />
					<FormInput type="password" onChange={this.handleOnPasswordChange} />

					<FormButton type="submit" text="Login" />
				</div>
			</form>
		)
	}
	
}

class FormInput extends React.Component {

	constructor(props) {
		super(props);

		this.handleOnInputChange = this.onInputChange.bind(this);
	}

	onInputChange(e) {
		this.props.onChange(e);
	}

	render() {
		const type = this.props.type;

		return (
			<input type={type} onChange={this.handleOnInputChange} />
		)
	}

}

function FormLabel(props) {
	return (
		<label>
			<b>{props.text}</b>
		</label>
	)
}

function FormButton(props) {
	return (
		<button type={props.type}>{props.text}</button>
	)
}

export default LoginForm
