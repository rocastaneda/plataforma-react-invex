import { MenuItem, Nav, NavDropdown, NavItem, Navbar } from 'react-bootstrap'
import { closeModal, createModal } from 'Modules/Modal'

import React from 'react'
import SideMenu from 'Components/SideMenu'
import { connect } from 'react-redux'
import logo from 'Assets/images/logo_inversion_social.svg'
import { logoutOAuth } from "Modules/Login"

class App extends React.Component {

	logout() {
		this.props.logoutOAuth(sessionStorage.access_token).then(() => {
			this.props.logoutOAuth(sessionStorage.refresh_token).then(() => {
				sessionStorage.clear()
				window.location.href = `/${process.env.APP}/login`
			}).catch( () => {
				sessionStorage.clear()
				window.location.href = `/${process.env.APP}/login`
			});
		}).catch( () => {
			sessionStorage.clear()
			window.location.href = `/${process.env.APP}/login`
		});
	}

	toggleMenu () {
		this.setState({open:!this.state.open})
	}

	handleClick() {
		if (this.state.open)
			this.setState({open:false})
	}

	setSessionAlert () {
		const tiempoInactividad = Number(process.env.TIEMPO_SESION_INACTIVIDAD)
		const tiempoAlerta = Number(process.env.TIEMPO_SESION_ALERTA)

		let _this = this,
				ahora = Number(new Date()),
				tiempo = Number(sessionStorage.session_time) - ahora, //Tiempo restante en caso de recargar la página
				minSigAlerta = tiempoInactividad - tiempoAlerta,
				tiempoAutoCierre = Number(sessionStorage.session_time) - ahora + tiempoAlerta,
				cierre = setTimeout(() =>{_this.props.closeModal(); _this.logout()},tiempoAutoCierre)

		if (tiempo > 1) { // Reload
			setTimeout(this.setSessionAlert,tiempo);
			clearTimeout(cierre);
		} else {
			this.props.createModal({
				body: (<div>
								<h3 className="text-center text-danger">
									<i className="fa fa-clock-o" />
									{' Sesión por expirar'}
								</h3>
								<br />
								<p className="text-center">{'¿Desea continuar con la sesión activa?'}</p>
							</div>),
				footer: [
					{ onClick: () => {_this.props.closeModal()}, type: "default", txt: "No" },
					{
						onClick: () => {
							sessionStorage.session_time = ahora + minSigAlerta;
							tiempo = minSigAlerta;
							clearTimeout(cierre);
							_this.props.closeModal()
							setTimeout(_this.setSessionAlert,tiempo);
						},
						type: "success",
						txt: "Si"
					}
				]
			});
		}
	}

	constructor(props) {
		super(props)

		this.state = {
			open: false
		}

		this.logout = this.logout.bind(this)
		this.setSessionAlert = this.setSessionAlert.bind(this)

		this.toggleMenu = this.toggleMenu.bind(this)
		this.handleClick = this.handleClick.bind(this)

		if (!sessionStorage.access_token || !sessionStorage.bpm_token) {
			window.location.href = `/${process.env.APP}/login`
		}

	}

	componentWillMount () {
		this.setSessionAlert()
	}

	render (){

		const {firstname, lastname} = sessionStorage,
		userName = firstname +' '+ lastname

		return (
			<div>
				<Navbar>
					<Navbar.Brand pullLeft>
						<SideMenu open={this.state.open} close={this.toggleMenu} />
					</Navbar.Brand>

					<Navbar.Collapse>
						<Nav>
							<NavItem eventKey={1}> <i className="menu-toggle fa fa-bars" style={{marginLeft:'-30px',lineHeight:'60px'}} onClick={this.toggleMenu} /> </NavItem>
							<img src={logo} className="logo" style={{margin:'11px 0 15px -10px'}} />
						</Nav>
						<Nav pullRight className="">
							<NavDropdown eventKey={3} title={userName} id="basic-nav-dropdown"  style={{paddingTop:'40px'}}>
								<MenuItem eventKey={3.1} onClick={this.logout}><i className="fa fa-times-circle" /> {'Cerrar sesión'}</MenuItem>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
				<div onClick={this.handleClick}>
					{this.props.children}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		modal: state.Modal.toJS()
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		logoutOAuth: (form) => dispatch(logoutOAuth(form)),
		createModal: (obj) => dispatch(createModal(obj)),
		closeModal: () => dispatch(closeModal())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
