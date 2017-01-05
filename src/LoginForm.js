import React from 'react'

class LoginForm extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			userName: '',
			password: ''
		};

		this.handleFormSubmit = this.formSubmit.bind(this);
		this.handleOnUserNameChange = this.onUserNameChange.bind(this);
		this.handleOnPasswordChange = this.onPasswordChange.bind(this);
	}

	formSubmit(e) {
		e.preventDefault();
		console.log(this.state);
	}

	onUserNameChange(e) {
		this.setState({userName: e.target.value});
	}

	onPasswordChange(e) {
		this.setState({password: e.target.value});
	}

	render() {
		return (
			<form onSubmit={this.handleFormSubmit}>
				<div className="container">
					<FormLabel text="Username" />
					<FormInput type="text" onChange={this.handleOnUserNameChange} />

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
