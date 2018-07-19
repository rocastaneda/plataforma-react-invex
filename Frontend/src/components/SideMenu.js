import Labels from 'Assets/Labels'
import { Link } from 'react-router-dom'
import React from 'react'

class SideMenu extends React.Component {

	setCurrentNav (e,current) {
		e.preventDefault();
		this.setState({current})
	}

	close () {
		this.props.close();
		this.setState({current: 'root'})
	}

	constructor(props) {
		super(props);
		this.state = { current: 'root' };
		this.close = this.close.bind(this);
		this.setCurrentNav = this.setCurrentNav.bind(this)
	}

	render () {
		return (
			<nav className={this.props.open ? "side-menu open" : "side-menu"}>

				<div className="nav-area">
					<ul className={this.state.current == 'root' ? 'current' : 'closed'}>
						<li><a href="#" onClick={this.close}><i className="fa fa-bars pull-left"  />{Labels.Configuration.title} </a></li>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'catalog')}}>{Labels.Catalog.title} <i className="fa fa-arrow-right pull-right"   /></a></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/corridas" } onClick={this.close}>{Labels.Configuration.Event.title}</Link></li>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'documentos')}}>{'Documentos'} <i className="fa fa-arrow-right pull-right" /></a></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/donantes" } onClick={this.close}>{Labels.Configuration.Donors.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/donatarias" } onClick={this.close}>{Labels.Configuration.Grantee.title}</Link></li>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'fortalecimiento')}}>{'Fortalecimiento'} <i className="fa fa-arrow-right pull-right" /></a></li>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'funciones')}}>{Labels.Configuration.Functions.title} <i className="fa fa-arrow-right pull-right" /></a></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/grupos" } onClick={this.close}>{Labels.Configuration.Groups.title}</Link></li>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'perfiles')}}>{'Perfiles'} <i className="fa fa-arrow-right pull-right" /></a></li>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'tipo-evaluacion')}}>{'Preguntas y Evaluaciones'} <i className="fa fa-arrow-right pull-right " /></a></li>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'proyecto')}}>{'Proyecto'} <i className="fa fa-arrow-right  pull-right" /></a></li>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'objetivo-sostenible')}}>{'Objetivos de Desarrollo'} <i className="fa fa-arrow-right pull-right" /></a></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/organismo-regulador" } onClick={this.close}>{Labels.Configuration.RegulatoryBody.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/consultor" } onClick={this.close}>{Labels.Configuration.Consultant.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/criterios-elegibilidad" } onClick={this.close}>{Labels.Configuration.EligibilityCriteria.title}</Link></li>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'subtemas')}}>{'Temas'} <i className="fa fa-arrow-right pull-right" /></a></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/plantilla-cartas" } onClick={this.close}>{Labels.Configuration.Template.letters.title}</Link></li>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'contratos')}}>{'Contratos'} <i className="fa fa-arrow-right pull-right" /></a></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/requisito-pagos" } onClick={this.close}>{Labels.Configuration.Payments.Requirements.title}</Link></li>
					</ul>
					<ul className={this.state.current == 'catalog' ? 'current' : 'closed'}>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'root')}}><i className="fa fa-arrow-left" /> {'Catálogos'}</a></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/enfoque" } onClick={this.close}>{Labels.Configuration.Approach.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/figura-juridica" } onClick={this.close}>{Labels.Configuration.LegalEntity.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/funcion-patrono" } onClick={this.close}>{Labels.Configuration.Role.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/informacion-ejercicio" } onClick={this.close}>{Labels.Configuration.ExerciseInfo.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/nivel-intervencion" } onClick={this.close}>{Labels.Configuration.InterventionLevel.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/servicios" } onClick={this.close}>{Labels.Configuration.Services.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/otros-actores" } onClick={this.close}>{Labels.Configuration.otherActor.title}</Link></li>
					</ul>
					<ul className={this.state.current == 'config' ? 'current' : 'closed'}>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'root')}}><i className="fa fa-arrow-left" /> {'Proyecto'}</a></li>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'proyecto')}}>{'Proyecto'} <i className="fa fa-arrow-right pull-right" /></a></li>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'objetivo-sostenible')}}>{'Objetivos de Desarrollo Sostenible'} <i className="fa fa-arrow-right pull-right" /></a></li>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'fortalecimiento')}}>{'Fortalecimiento'} <i className="fa fa-arrow-right pull-right" /></a></li>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'documentos')}}>{'Documentos'} <i className="fa fa-arrow-right" /></a></li>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'tipo-evaluacion')}}>{'Tipo de Evaluación'} <i className="fa fa-arrow-right pull-right" /></a></li>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'subtemas')}}>{'Subtemas'} <i className="fa fa-arrow-right pull-right" /></a></li>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'perfiles')}}>{'Pefiles'} <i className="fa fa-arrow-right pull-right" /></a></li>
					</ul>
					<ul className={this.state.current == 'objetivo-sostenible' ? 'current' : 'closed'}>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'root')}}><i className="fa fa-arrow-left" /> {'Objetivos del Desarrollo'}</a></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/configuracion-objetivo" } onClick={this.close}>{Labels.Configuration.ObjectivesConfig.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/metas" } onClick={this.close}>{Labels.Configuration.Goals.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/indicadores" } onClick={this.close}>{Labels.Configuration.Indicators.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/escalas" } onClick={this.close}>{Labels.Configuration.Scales.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/rangos" } onClick={this.close}>{Labels.Configuration.Ranges.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/tipo-tabla" } onClick={this.close}>{Labels.Configuration.TypeTable.title}</Link></li>
					</ul>
					<ul className={this.state.current == 'tipo-evaluacion' ? 'current' : 'closed'}>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'root')}}><i className="fa fa-arrow-left" /> {'Pregunta y evaluaciones'}</a></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/pregunta" } onClick={this.close}>{Labels.Configuration.Question.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/variable" } onClick={this.close}>{Labels.Configuration.Variable.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/evaluacion" } onClick={this.close}>{Labels.Configuration.Evaluation.title}</Link></li>
					</ul>
					<ul className={this.state.current == 'proyecto' ? 'current' : 'closed'}>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'root')}}><i className="fa fa-arrow-left" /> {'Proyecto'}</a></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/configuracion-proyecto" } onClick={this.close}>{Labels.Configuration.ProjectConfig.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/preguntas-especiales" } onClick={this.close}>{Labels.Configuration.Questions.SpecialQuestions.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/preguntas-abiertas" } onClick={this.close}>{Labels.Configuration.Questions.OpenQuestions.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/preguntas-cerradas" } onClick={this.close}>{Labels.Configuration.Questions.ClosedQuestions.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/preguntas-comentarios" } onClick={this.close}>{Labels.Configuration.Questions.CommentsQuestions.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/catalogo/rubros" } onClick={this.close}>{Labels.Catalog.Items.title}</Link></li>
					</ul>
					<ul className={this.state.current == 'fortalecimiento' ? 'current' : 'closed'}>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'root')}}><i className="fa fa-arrow-left" /> {'Fortalecimiento'}</a></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/configuracion-fortalecimiento" } onClick={this.close}>{Labels.Configuration.StrengConfig.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/estatus-fortalecimiento" } onClick={this.close}>{Labels.Configuration.StateStreng.title}</Link></li>
					</ul>
					<ul className={this.state.current == 'funciones' ? 'current' : 'closed'}>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'root')}}><i className="fa fa-arrow-left" /> {'Funciones'}</a></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/disminución-incremento-donativo-asignado" } onClick={this.close}>{Labels.Configuration.Functions.DecOrIncDonationAssigned.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/promedio-egresos" } onClick={this.close}>{Labels.Configuration.Functions.AverageOfExpenses.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/promedio-egresos-y-diversas-evaluaciones" } onClick={this.close}>{Labels.Configuration.Functions.AverageExpAndSeveralEval.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/variacion-evaluaciones-grupo-cerrado" } onClick={this.close}>{Labels.Configuration.Functions.VariationEvaluationClosed.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/variacion-evaluaciones-grupo-abierto" } onClick={this.close}>{Labels.Configuration.Functions.VariationEvaluationOpened.title}</Link></li>
					</ul>
					<ul className={this.state.current == 'documentos' ? 'current' : 'closed'}>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'root')}}><i className="fa fa-arrow-left" /> {'Documentos'}</a></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/nombres-documentos" } onClick={this.close}>{Labels.Configuration.Documents.DocsNames.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/estatus-documentos" } onClick={this.close}>{Labels.Configuration.Documents.DocsStatus.title}</Link></li>
					</ul>
					<ul className={this.state.current == 'subtemas' ? 'current' : 'closed'}>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'root')}}><i className="fa fa-arrow-left" /> {'Temas'}</a></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/tema" } onClick={this.close}>{Labels.Configuration.Topic.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/subtema"} onClick={this.close}>{Labels.Configuration.Subtheme.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/subtema2"} onClick={this.close}>{Labels.Configuration.Subtheme2.title}</Link></li>
					</ul>
					<ul className={this.state.current == 'perfiles' ? 'current' : 'closed'}>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'root')}}><i className="fa fa-arrow-left" /> {'Perfiles'}</a></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/asignacion-perfil" } onClick={this.close}>{Labels.Configuration.Profile.assignment.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/perfil" } onClick={this.close}>{Labels.Configuration.Profile.title}</Link></li>
					</ul>
					<ul className={this.state.current == 'contratos' ? 'current' : 'closed'}>
						<li><a href="#" onClick={(e)=>{this.setCurrentNav(e,'root')}}><i className="fa fa-arrow-left" /> {'Contratos'}</a></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/contratos" } onClick={this.close}>{Labels.Configuration.Contracts.title}</Link></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/tipo-contratos" } onClick={this.close}>{Labels.Configuration.Contracts.Type.title}</Link></li>
					</ul>
					<ul className={this.state.current == 'certificado' ? 'current' : 'closed'}>
						<li><a href='#' onClick={(e)=>{this.setCurrentNav(e, 'root')}}><i className="fa fa-arrow-left" /> {'Certificados'}</a></li>
						<li><Link to={ "/" + process.env.APP + "/configuracion/certificado" } onClick={this.close}>Certificado</Link></li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default SideMenu
