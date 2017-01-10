import React from 'react'
import request from 'request'
import MyFormInput from './components/MyFormInput'
import MyFormButton from './components/MyFormButton'
import MyFormLabel from './components/MyFormLabel'

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
		}, function (err, httpResponse, body) {
			console.log(err);
			console.log(body);
		})
	}

	onEmailChange(e) {
		this.updateState("email", e);
	}

	onPasswordChange(e) {
		this.updateState("password", e);
	}

	updateState(key, e) {
		var tmpState = {};
		tmpState[key] = e.target.value;
		this.setState(tmpState);
	}

	render() {
		return (
			<form onSubmit={this.handleFormSubmit}>
				<div className="container">
					<MyFormLabel text="Email" />
					<MyFormInput type="text" onChange={this.handleOnEmailChange} />

					<MyFormLabel text="Password" />
					<MyFormInput type="password" onChange={this.handleOnPasswordChange} />

					<MyFormButton type="submit" text="Login" />
				</div>
			</form>
		)
	}

}

export default LoginForm
