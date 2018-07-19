import * as Utils from 'Assets/Utils'

import { Button, Col, Row, Well } from 'react-bootstrap'
import React, { Component } from 'react'
import { loginCognito, loginOAuth } from "Modules/Login"

import Labels from 'Assets/Labels'
import PasswordInput from 'Components/common/PasswordInput'
import TextInput from 'Components/common/TextInput'
import { connect } from 'react-redux'
import { createModal } from 'Modules/Modal'
import logo from 'Assets/images/logo_inversion_social.svg'
import { permissionFeature } from "Modules/PreRegister"

class Login extends Component {

	register (event) {
		event.preventDefault()

		this.props.permissionFeature({feature: "pre-registro"}).then ( (result) => {

			if (result) {
				this.props.history.push(`/${process.env.APP}/pre-registro`)
			} else {
				this.props.createModal(Utils.warningMessage("El proceso de registro de organizaciones ha concluido"))
			}
		})
	}

	submit (event) {
		event.preventDefault()

		if (!this.state.form.username || !this.state.form.password) {
			this.setState({validate: true})
		} else {
			if (Utils.isValidEmail(this.state.form.username)) {

				this.props.loginCognito(this.state.form).catch ( () => {
					this.props.createModal(Utils.errorMessage('El correo electrónico o contraseña es incorrecto, por favor intente de nuevo'))
				})

			} else {
				this.props.loginOAuth(this.state.form).catch ( () => {
					this.props.createModal(Utils.errorMessage('El usuario o contraseña es incorrecto, por favor intente de nuevo'))
				})
			}
		}
	}

	handleText (event) {
		event.preventDefault()
		this.setState({form:{...this.state.form, [event.target.name]: event.target.value} })
	}

	showInstructions() {

		let modalObj = {
			title: Labels.Login.regInstructionsTitle,
			closeButton: true,
			body: <div><p>{'Si tu organización ya está registrada y quieres darte de alta como usuario, por favor ponte en contacto al siguiente correo:'} <br /> <strong>{Labels.Login.regPhone}</strong></p></div>
		}

		this.props.createModal(modalObj)
	}

	isSession (type) {
		if (type) {
			if (type === 'donataria') {
				this.props.history.push(`/${process.env.APP}/donataria`)
			} else if (type === 'ejecutivo') {
				this.props.history.push(`/${process.env.APP}/donataria/principal/dashboard`)
			}
		}
	}

	constructor(props, context) {

		sessionStorage.clear()

		super(props, context)

		this.state = {
			validate: false,
			form: {}
		}

		this.submit = this.submit.bind(this)
		this.isSession = this.isSession.bind(this)
		this.register = this.register.bind(this)
		this.handleText = this.handleText.bind(this)
		this.showInstructions = this.showInstructions.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.Login.type) {
			this.isSession(nextProps.Login.type)
		}
	}

	render() {
		return (
			<div className="container">
				<br />
				<Row className="text-center">
					<Col md={6} mdOffset={3}>
						<Well>
							<form onSubmit={this.submit}>
								<Row>
									<Col md={12} className="text-center">
										<img src={logo} className="logo" />
									</Col>
								</Row>
								<Row className="mb12">
									<Col md={12} className="text-center"><h1>{Labels.Login.title}</h1></Col>
									<Col md={8} mdOffset={2}>
										<TextInput
											noupper
											name={'username'}
											placeholder={Labels.Login.username}
											maxLength={50}
											required
											value={this.state.form.username}
											error={this.state.validate || false}
											onChange={this.handleText} />
									</Col>
								</Row>
								<Row className="mb12">
									<Col md={8} mdOffset={2}>
										<PasswordInput
											name={'password'}
											placeholder={Labels.Login.password}
											maxLength={50}
											required
											value={this.state.form.password}
											error={this.state.validate || false}
											onChange={this.handleText} />
									</Col>
								</Row>
								<Row className="mb12">
									<Button bsStyle="primary" type="submit" >{Labels.Login.btnLogin}</Button>
								</Row>
								<Button bsStyle="link">{Labels.Login.btnForgotten}</Button>
							</form>
						</Well>
						<Well>
							<Row>
								<Col md={10} mdOffset={1}>
									<h2>{Labels.Login.title2}</h2>
								</Col>
							</Row>
							<Row>
								<Col md={8} mdOffset={2}>
									<Button bsStyle="default" className="btn-block" onClick={this.register}>{Labels.Login.regInstitution}</Button><br />
									<Button bsStyle="default" className="btn-block" onClick={this.showInstructions}>{Labels.Login.regInstructionsTitle}</Button>
								</Col>
							</Row>
						</Well>
					</Col>
				</Row>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return ({
		Login: state.Login.get('Login').toJS(),
		modal: state.Modal.toJS()||{},
		account: state.Register.Account.toJS(),
	})
}

const mapDispatchToProps = (dispatch) => {
	return {
		createModal: (modalObj) => dispatch(createModal(modalObj)),
		loginOAuth: (form) => dispatch(loginOAuth(form)),
		loginCognito: (form) => dispatch(loginCognito(form)),
		permissionFeature: (form) => dispatch(permissionFeature(form))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
