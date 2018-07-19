import Async from 'react-code-splitting'

import 'bootstrap/dist/css/bootstrap.css'
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css'
import 'Assets/styles/font-awesome.min.css'
import 'react-select/dist/react-select.css'
import 'react-virtualized/styles.css'
import 'react-virtualized-select/styles.css'
import 'Assets/styles/main.less'
import 'react-quill/dist/quill.snow.css'

import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'

const App  = props => <Async load={import('Containers/App')} componentProps={props} />
const Activate  = props => <Async load={import('Containers/Grantees/Activate')} componentProps={props} />
const EvaluationApp  = props => <Async load={import('Containers/Grantees/Evaluations')} componentProps={props} />
const GranteeApp  = props => <Async load={import('Containers/Grantees')} componentProps={props} />
const OportunitiesApp  = props => <Async load={import('Containers/Grantees/Oportunities')} componentProps={props} />
const PrincipalApp  = props => <Async load={import('Containers/Grantees/Principal')} componentProps={props} />
const PreRegister  = props => <Async load={import('Containers/Grantees/PreRegister')} componentProps={props} />
const Loading  = props => <Async load={import('Components/common/Loading')} componentProps={props} />
const Login  = props => <Async load={import('Containers/Login')} componentProps={props} />
const Dashboard  = props => <Async load={import('Containers/Grantees/Principal/Dashboard')} componentProps={props} />
const DashboardDetail  = props => <Async load={import('Containers/Grantees/Principal/DashboardDetail')} componentProps={props} />
const DashboardSupervisor  = props => <Async load={import('Containers/Grantees/Principal/DashboardSupervisor')} componentProps={props} />
const AssignmentFilter  = props => <Async load={import('Containers/Filter/AssignmentFilter')} componentProps={props} />
const ProposalAssignment  = props => <Async load={import('Containers/Filter/ProposalAssignment')} componentProps={props} />
const ProposalAssignmentEjec  = props => <Async load={import('Containers/Filter/ProposalAssignmentEjec')} componentProps={props} />
const ChangeDestination  = props => <Async load={import('Containers/ChangeDestination/ChangeDestination')} componentProps={props} />
const ChangeDestinitySuperDirector  = props => <Async load={import('Containers/ChangeDestination/ChangeDestinitySuperDirector')} componentProps={props} />
const Announcement = props => <Async load={import('Containers/Grantees/Oportunities/Announcement')} componentProps={props} componentProps={props} />
const Approach = props => <Async load={import('Containers/Configuration/Approach/Approach')} componentProps={props} />
const AssignmentProfile  = props => <Async load={import('Containers/Configuration/Profile/AssignmentProfile')} componentProps={props} />
const AverageOfExpenses  = props => <Async load={import('Containers/Configuration/Functions/AverageOfExpenses')} componentProps={props} />
const AverageExpAndSeveralEval  = props => <Async load={import('Containers/Configuration/Functions/AverageExpAndSeveralEval')} componentProps={props} />
const DecOrIncDonationAssigned  = props => <Async load={import('Containers/Configuration/Functions/DecOrIncDonationAssigned')} componentProps={props} />
const VariationEvaluationClosed  = props => <Async load={import('Containers/Configuration/Functions/VariationEvaluationClosed')} componentProps={props} />
const VariationEvaluationOpened  = props => <Async load={import('Containers/Configuration/Functions/VariationEvaluationOpened')} componentProps={props} />
const ClosedQuestion  = props => <Async load={import('Containers/Configuration/Project/ClosedQuestion')} componentProps={props} />
const CommentsQuestion  = props => <Async load={import('Containers/Configuration/Project/CommentsQuestion')} componentProps={props} />
const Congrats  = props => <Async load={import('Containers/Grantees/Oportunities/Congrats')} componentProps={props} />
const Consultant  = props => <Async load={import('Containers/Configuration/Consultant')} componentProps={props} />
const Criteria  = props => <Async load={import('Containers/Grantees/Evaluation/Criteria')} componentProps={props} />
const DocNames = props => <Async load={import('Containers/Configuration/Documents/DocNames')} componentProps={props} />
const DocStatus = props => <Async load={import('Containers/Configuration/Documents/DocStatus')} componentProps={props} />
const Donors = props => <Async load={import('Containers/Configuration/Donors/Donors')} componentProps={props} />
const EligibilityCriteria = props => <Async load={import('Containers/Configuration/EligibilityCriteria')} componentProps={props} />
const EmployerRole = props => <Async load={import('Containers/Configuration/EmployerRole/Role')} componentProps={props} />
const EvaluationVariable = props => <Async load={import('Containers/Grantees/Evaluation/EvaluationVariable')} componentProps={props} />
const EvaluationGrantee = props => <Async load={import('Containers/Grantees/Evaluation/EvaluationGrantee')} componentProps={props} />
const GranteesChangeDestiny = props => <Async load={import('Containers/Grantees/GranteesChangeDestiny')} componentProps={props} />
const Events = props => <Async load={import('Containers/Configuration/Event')} componentProps={props} />
const ExerciseInformation = props => <Async load={import('Containers/Configuration/ExerciseInformation/ExerciseInformation')} componentProps={props} />
const Goals = props => <Async load={import('Containers/Configuration/SustainableGoal/Goals')} componentProps={props} />
const Grantee = props => <Async load={import('Containers/Configuration/Grantee')} componentProps={props} />
const Groups = props => <Async load={import('Containers/Configuration/Groups/Groups')} componentProps={props} />
const Home = props => <Async load={import('Containers/Home')} componentProps={props} />
const Indicators = props => <Async load={import('Containers/Configuration/SustainableGoal/Indicators')} componentProps={props} />
const Information = props => <Async load={import('Containers/Grantees/Information')} componentProps={props} />
const InterventionLevel = props => <Async load={import('Containers/Configuration/InterventionLevel/InterventionLevel')} componentProps={props} />
const Items = props => <Async load={import('Containers/Catalog/Items')} componentProps={props} />
const LegalEntity = props => <Async load={import('Containers/Configuration/LegalEntity/LegalEntity')} componentProps={props} />
const Modal = props => <Async load={import('Components/common/ModalMessage')} componentProps={props} />
const Notifications = props => <Async load={import('Containers/Grantees/Notifications')} componentProps={props} />
const Objectives = props => <Async load={import('Containers/Configuration/SustainableGoal/Config')} componentProps={props} />
const OpenQuestion = props => <Async load={import('Containers/Configuration/Project/OpenQuestion')} componentProps={props} />
const Profile = props => <Async load={import('Containers/Configuration/Profile/Profile')} componentProps={props} />
const ProjectConfig = props => <Async load={import('Containers/Configuration/Project/Config')} componentProps={props} />
const Projects = props => <Async load={import('Containers/Grantees/Oportunities/Projects')} componentProps={props} />
const Question = props => <Async load={import('Containers/Configuration/TypeEvaluation/Question')} componentProps={props} />
const Ranges = props => <Async load={import('Containers/Configuration/SustainableGoal/Ranges')} componentProps={props} />
const Register = props => <Async load={import('Containers/Grantees/Register')} componentProps={props} />
const RegulatoryBody = props => <Async load={import('Containers/Configuration/RegulatoryBody/RegulatoryBody')} componentProps={props} />
const Results = props => <Async load={import('Containers/Grantees/Evaluation/Results')} componentProps={props} />
const Scales = props => <Async load={import('Containers/Configuration/SustainableGoal/Scales')} componentProps={props} />
const Services = props => <Async load={import('Containers/Configuration/Services/Services')} componentProps={props} />
const Actors = props => <Async load={import('Containers/Configuration/Actors/Actors')} componentProps={props} />
const SpecialQuestion = props => <Async load={import('Containers/Configuration/Project/SpecialQuestion')} componentProps={props} />
const StageStreng = props => <Async load={import('Containers/Configuration/Strengthening/StageStreng')} componentProps={props} />
const StateStreng = props => <Async load={import('Containers/Configuration/Strengthening/StateStreng')} componentProps={props} />
const Subtheme = props => <Async load={import('Containers/Configuration/Subtheme/Subtheme')} componentProps={props} />
const Subtheme2 = props => <Async load={import('Containers/Configuration/Subtheme/Subtheme2')} componentProps={props} />
const Topic = props => <Async load={import('Containers/Configuration/Topic/Topic')} componentProps={props} />
const TypeEvaluation = props => <Async load={import('Containers/Configuration/TypeEvaluation/Evaluation')} componentProps={props} />
const TypeTable = props => <Async load={import('Containers/Configuration/SustainableGoal/TypeTable')} componentProps={props} />
const ValuationItems = props => <Async load={import('Containers/Grantees/Evaluation/ValuationItems')} componentProps={props} />
const ValuationMenu = props => <Async load={import('Containers/Grantees/Evaluation/Menu')} componentProps={props} />
const Variable = props => <Async load={import('Containers/Configuration/TypeEvaluation/Variable')} componentProps={props} />
const NotFound = props => <Async load={import('Containers/404')} componentProps={props} />
const Notification  = props => <Async load={import('Containers/Notification')} componentProps={props} />
const TemplLetters = props => <Async load={import('Containers/Configuration/Template/TemplLetters')} componentProps={props} />
const FilterByEvaluation  = props => <Async load={import('Containers/Filter/FilterByEvaluation')} componentProps={props} />
const Contracts = props => <Async load={import('Containers/Configuration/Contracts/Contracts')} componentProps={props} />
const TypeContracts = props => <Async load={import('Containers/Configuration/Contracts/TypeContracts')} componentProps={props} />
const PaymentRequirement = props => <Async load={import('Containers/Configuration/Payments/PaymentRequirement')} componentProps={props} />
const Requirements  = props => <Async load={import('Containers/Grantees/Requirements')} componentProps={props} />
const ConditionDelivery = props => <Async load={import('Containers/Delivery')} componentProps={props}/>
const MonitoringStrength = props => <Async load={import('Containers/Grantees/Evaluation/MonitoringStrength')} componentProps={props} />

import configureStore from './store'

import { render } from 'react-dom'

import React from 'react'

let store = configureStore();

const Config = (props) => (
	<App>
		<Route path={`${props.match.url}/configuracion-proyecto`} component={ProjectConfig} />
		<Route path={`${props.match.url}/preguntas-abiertas`} component={OpenQuestion} />
		<Route path={`${props.match.url}/preguntas-cerradas`} component={ClosedQuestion} />
		<Route path={`${props.match.url}/preguntas-comentarios`} component={CommentsQuestion} />
		<Route exact path={`${props.match.url}/preguntas-especiales`} component={SpecialQuestion} />
		<Route path={`${props.match.url}/preguntas-especiales/:pregunta`} component={SpecialQuestion} />
		<Route path={`${props.match.url}/rangos`} component={Ranges} />
		<Route path={`${props.match.url}/tipo-tabla`} component={TypeTable} />
		<Route path={`${props.match.url}/escalas`} component={Scales} />
		<Route path={`${props.match.url}/indicadores`} component={Indicators} />
		<Route path={`${props.match.url}/metas`} component={Goals} />
		<Route path={`${props.match.url}/configuracion-objetivo`} component={Objectives} />
		<Route path={`${props.match.url}/pregunta`} component={Question} />
		<Route path={`${props.match.url}/variable`} component={Variable} />
		<Route path={`${props.match.url}/evaluacion`} component={TypeEvaluation} />
		<Route path={`${props.match.url}/estatus-fortalecimiento`} component={StateStreng} />
		<Route path={`${props.match.url}/configuracion-fortalecimiento`} component={StageStreng} />
		<Route path={`${props.match.url}/estatus-documentos`} component={DocStatus} />
		<Route path={`${props.match.url}/nombres-documentos`} component={DocNames} />
		<Route path={`${props.match.url}/donatarias`} component={Grantee} />
		<Route path={`${props.match.url}/grupos`} component={Groups} />
		<Route path={`${props.match.url}/corridas`} component={Events} />
		<Route path={`${props.match.url}/criterios-elegibilidad`} component={EligibilityCriteria} />
		<Route path={`${props.match.url}/catalogo/rubros`} component={Items} />
		<Route path={`${props.match.url}/subtema`} component={Subtheme} />
		<Route path={`${props.match.url}/subtema2`} component={Subtheme2} />
		<Route path={`${props.match.url}/tema`} component={Topic} />
		<Route path={`${props.match.url}/perfil`} component={Profile} />
		<Route path={`${props.match.url}/asignacion-perfil`} component={AssignmentProfile} />
		<Route path={`${props.match.url}/funcion-patrono`} component={EmployerRole} />
		<Route path={`${props.match.url}/figura-juridica`} component={LegalEntity} />
		<Route path={`${props.match.url}/nivel-intervencion`} component={InterventionLevel} />
		<Route path={`${props.match.url}/informacion-ejercicio`} component={ExerciseInformation} />
		<Route path={`${props.match.url}/enfoque`} component={Approach} />
		<Route path={`${props.match.url}/servicios`} component={Services} />
		<Route path={`${props.match.url}/otros-actores`} component={Actors} />
		<Route path={`${props.match.url}/organismo-regulador`} component={RegulatoryBody} />
		<Route path={`${props.match.url}/consultor`} component={Consultant} />
		<Route path={`${props.match.url}/donantes`} component={Donors} />
		<Route path={`${props.match.url}/promedio-egresos`} component={AverageOfExpenses} />
		<Route path={`${props.match.url}/promedio-egresos-y-diversas-evaluaciones`} component={AverageExpAndSeveralEval} />
		<Route path={`${props.match.url}/disminución-incremento-donativo-asignado`} component={DecOrIncDonationAssigned} />
		<Route path={`${props.match.url}/variacion-evaluaciones-grupo-cerrado`} component={VariationEvaluationClosed} />
		<Route path={`${props.match.url}/variacion-evaluaciones-grupo-abierto`} component={VariationEvaluationOpened} />
		<Route path={`${props.match.url}/plantilla-cartas`} component={TemplLetters} />
		<Route path={`${props.match.url}/contratos`} component={Contracts} />
		<Route path={`${props.match.url}/tipo-contratos`} component={TypeContracts} />
		<Route path={`${props.match.url}/requisito-pagos`} component={PaymentRequirement} />
	</App>);

const Principal = (props) => (
	<PrincipalApp {...props} >
		<Route exact path={`${props.match.url}/detalle/:option`} component={DashboardDetail} />
		<Route path={`${props.match.url}/dashboard`} component={Dashboard} />
		<Route path={`${props.match.url}/dashboard-supervisor/:option`} component={DashboardSupervisor} />
		<Route path={`${props.match.url}/ver-destino`} component={ChangeDestination} />
		<Route path={`${props.match.url}/cambio-destino`} component={ChangeDestinitySuperDirector} />
		<Route path={`${props.match.url}/notificaciones`} component={Notification} />
		<Route path={`${props.match.url}/donatario-pre`} component={AssignmentFilter} />
		<Route path={`${props.match.url}/filtro-de-asignacion`} component={AssignmentFilter} />
		<Route path={`${props.match.url}/propuesta-de-asignacion`} component={ProposalAssignment} />
		<Route path={`${props.match.url}/propuesta-de-asignacion-ejec`} component={ProposalAssignmentEjec} />
		<Route path={`${props.match.url}/filtro-por-evaluacion`} component={FilterByEvaluation} />
		<Route path={`${props.match.url}/entrega-donativo`} component={ConditionDelivery} />
	</PrincipalApp>
);

const Evaluations = (props) => (
	<EvaluationApp {...props} >
		<Route path={`${props.match.url}/convocatoria`} component={EvaluationGrantee} />
		<Route path={`${props.match.url}/menu`} component={ValuationMenu} />
		<Route path={`${props.match.url}/evaluacion-variable`} component={EvaluationVariable} />
		<Route path={`${props.match.url}/valoracion-rubros`} component={ValuationItems} />
		<Route path={`${props.match.url}/resultados`} component={Results} />
		<Route path={`${props.match.url}/criterios-elegibilidad`} component={Criteria} />
		{/* <Route path={`${props.match.url}/fortalecimiento`} component={Criteria} /> */}
		{/* <Route path={`${props.match.url}/desempeno-programa`} component={Criteria} /> */}
		<Route path={`${props.match.url}/fortalecimiento`} component={MonitoringStrength} />
	</EvaluationApp>
);

const Oportunities = (props) => (
	<OportunitiesApp {...props} >
		<Route path={`${props.match.url}/felicitaciones`} component={Congrats} />
		<Route path={`${props.match.url}/convocatoria`} component={Announcement} />
		<Route path={`${props.match.url}/proyectos`} component={Projects} />
	</OportunitiesApp>);

const Grantees = (props) => (
	<GranteeApp {...props} >
		<Route path={`${props.match.url}/principal`} component={Principal} />
		<Route path={`${props.match.url}/registro`} component={Register} />
		<Route path={`${props.match.url}/informacion`} component={Information} />
		<Route path={`${props.match.url}/oportunidades`} component={Oportunities} />
		<Route path={`${props.match.url}/evaluaciones`} component={Evaluations} />
		<Route path={`${props.match.url}/notificaciones`} component={Notifications} />
		<Route path={`${props.match.url}/requisitos-pago`} component={Requirements} />
		<Route path={`${props.match.url}/cambio-destino`} component={GranteesChangeDestiny} />
	</GranteeApp>);

render(
	<Provider store={store}>
		<Router>
			<div>
			<Loading />
			<Switch>
				<Route path={`/${process.env.APP}/login`} component={Login} />
				<Route path={`/${process.env.APP}/home`} component={Home} />
				<Route path={`/${process.env.APP}/configuracion`} component={Config} />
				<Route path={`/${process.env.APP}/donataria`} component={Grantees} />
				<Route path={`/${process.env.APP}/pre-registro`} component={PreRegister} exact />
				<Route path={`/${process.env.APP}/activate`} component={Activate} />
				<Route component={NotFound} />
			</Switch>
			<Modal />
			</div>
		</Router>
	</Provider>,
	document.getElementById('app')
);
