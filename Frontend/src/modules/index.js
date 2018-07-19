import Account from './Grantees/Register/Account'
import AdditionalInfo from './Grantees/Information/AdditionalInfo'
import Applications from './Grantees/Opportunities/Applications'
import Approach from './Catalogs/Approach/Approach'
import AverageOfExpenses from './Configurations/Functions/AverageOfExpenses'
import AverageExpAndSeveralEval from './Configurations/Functions/AverageExpAndSeveralEval'
import DecOrIncDonationAssigned from './Configurations/Functions/DecOrIncDonationAssigned'
import VariationEvaluationClosed from './Configurations/Functions/VariationEvaluationClosed'
import VariationEvaluationOpened from './Configurations/Functions/VariationEvaluationOpened'
import AssignmentFilter from './Filter/AssignmentFilter'
import ChangeDestination from './ChangeDestination/ChangeDestination'
import BpmProcess from './Grantees/Bpm/Process'
import CompanyCharter from './Grantees/Register/CompanyCharter'
import ContactData from './Grantees/Register/ContactData'
import Contacts from './Grantees/Information/Contacts'
import Classification from './Grantees/Information/Classification'
import Delegation from './Catalogs/Delegation/Delegation'
import DocName from './Configurations/Documents/DocName'
import Pay from './Configurations/Pay'
import DocStatus from './Configurations/Documents/DocStatus'
import Documents from './Grantees/Register/Documents'
import Donor from './Catalogs/Donor/Donor'
import EligibilityCriteria from './Catalogs/EligibilityCriteria/EligibilityCriteria'
import Evaluation from './Configurations/TypeEvaluation/Evaluation'
import EvalCriteria from './Grantees/Evaluation/EvalCriteria'
import Evaluator from './Catalogs/Evaluator/Evaluator'
import EventBudget from './Configurations/Event/Config'
import Exercises from './Configurations/ExerciseInformation/ExerciseInformation'
import Features from './Catalogs/Features/Features'
import Files from './Grantees/Information/Documents'
import Financial from './Grantees/Information/Financial'
import FunctionPatron from './Catalogs/FunctionPatron/FunctionPatron'
import GeneralInfo from './Grantees/Register/GeneralInfo'
import Goals from './Configurations/SustainableGoal/Goals'
import Government from './Catalogs/Government/Government'
import Grantee from './Configurations/Grantee/Grantee'
import GranteeStatus from './Grantees/Status'
import Groups from './Configurations/Groups/Config'
import Home from './Home'
import IObjectives from './Grantees/Information/Objectives'
import ISummary from './Grantees/Information/Summary'
import Indicators from './Configurations/SustainableGoal/Indicators'
import InterventionLevel from './Catalogs/InterventionLevel/InterventionLevel'
import Items from './Catalogs/Items/Items'
import LegalConcept from './Catalogs/LegalConcept/LegalConcept'
import LegalRepresentation from './Grantees/Register/LegalRepresentation'
import Loading from './Loading'
import Loader from './Loader'
import Locations from './Grantees/Information/Locations'
import Login from './Login'
import Modal from './Modal'
import Notifications from './Grantees/Notifications/Notifications'
import Objectives from './Configurations/SustainableGoal/Objectives'
import Opportunities from './Grantees/Opportunities/Opportunities'
import OrigenEvaluation from './Catalogs/OrigenEvaluation/OrigenEvaluation'
import PatronsCouncelors from './Grantees/Register/PatronsCouncelors'
import PatronsCatalog from './Catalogs/PatronsCouncelors/PatronsCouncelors'
import Phase from './Catalogs/Phase/Phase'
import Population from './Grantees/Information/Population'
import Postal from './Grantees/Information/Postal'
import Profile from './Catalogs/Profile/Profile'
import ProfileUser from './Catalogs/ProfileUser/ProfileUser'
import Project from './Configurations/Project/Project'
import Projects from './Grantees/Opportunities/Projects'
import Question from './Configurations/TypeEvaluation/Question'
import QuestionProject from './Configurations/Project/QuestionProject'
import QuestionType from './Catalogs/QuestionType/QuestionType'
import Ranges from './Configurations/SustainableGoal/Ranges'
import Rubros from './Grantees/Opportunities/Items'
import Scales from './Configurations/SustainableGoal/Scales'
import Services from './Configurations/Services/Services'
import StageStreng from './Configurations/Strengthening/StageStreng'
import StateEvent from './Catalogs/StateEvent/StateEvent'
import StateGrantee from './Catalogs/StateGrantee/StateGrantee'
import StateStreng from './Configurations/Strengthening/StateStreng'
import States from './Catalogs/States/States'
import Subtheme from './Catalogs/Subtheme/Subtheme'
import Subtheme2 from './Catalogs/Subtheme/Subtheme2'
import Summary from './Grantees/Register/Summary'
import Symbols from './Catalogs/Symbols/Symbols'
import Topic from './Catalogs/Topic/Topic'
import Town from './Catalogs/Town/Town'
import TypeFunction from './Catalogs/TypeFunction/TypeFunction'
import TypeTable from './Configurations/SustainableGoal/TypeTable'
import Variable from './Configurations/TypeEvaluation/Variable'
import RegulatoryBody from './Configurations/RegulatoryBody'
import Consultant from './Configurations/Consultant'
import Actor from './Configurations/Actor'
import Contracts from './Configurations/Contracts'
import MonitoringStrength from './Grantees/Evaluation/MonitoringStrength'
import Justification from './Grantees/Evaluation/Justification'
import EvaluationVariable from './Grantees/Evaluation/Variable'
import SustainableGoals from './Grantees/Evaluation/SustainableGoals'
import Results from './Grantees/Evaluation/Results'
import Evaluations from './Grantees/Evaluation/Evaluations'
import Rounding from './Catalogs/Rounding/Rounding'
import ProposalAssignment from './Filter/ProposalAssignment'
import ProposalAssignmentEjec from './Filter/ProposalAssignmentEjec'
import TemplLetters from './Configurations/Template/TemplLetters'
import FilterByEvaluation from './Filter/FilterByEvaluation'
import Notification from './Notifications/Notifications'
import Claves from './Catalogs/Claves/Claves'
import Contratos from './MissingInfo/Contracts'
import TypeContracts from './Configurations/Contracts/TypeContracts'
import Delivery from './Delivery/Delivery'
import PaymentRequirement from './Configurations/Payments/PaymentRequirement'
import TypePaymentRequirement from './Catalogs/TypePaymentRequirements/TypePaymentRequirements'
import DocsAndReps from './MissingInfo/DocumentsAndLegalReps'
import Contabilizadas from './MissingInfo/Grantees'
import PaymentRequirements from './MissingInfo/Requirements'

import {combineReducers} from 'redux'

const rootReducer = combineReducers({
	Applications,
	Approach,
	AverageOfExpenses,
	AverageExpAndSeveralEval,
	DecOrIncDonationAssigned,
	VariationEvaluationClosed,
	VariationEvaluationOpened,
	AssignmentFilter,
	ChangeDestination,
	BpmProcess,
	DocStatus,
	DocName,
	Pay,
	Evaluator,
	EvalCriteria,
	EligibilityCriteria,
	EventBudget,
	Exercises,
	Features,
	Financial,
	Home,
	Ranges,
	TypeTable,
	Scales,
	StateEvent,
	StateGrantee,
	States,
	Indicators,
	Goals,
	Groups,
	Objectives,
	Items,
	StateStreng,
	StageStreng,
	Subtheme,
	Subtheme2,
	Symbols,
	TypeFunction,
	Loading,
	Login,
	LegalConcept,
	Modal,
	Notifications,
	Register: combineReducers({
		Account,
		GeneralInfo,
		ContactData,
		PatronsCouncelors,
		CompanyCharter,
		LegalRepresentation,
		Documents,
		Summary
	}),
	Opportunities,
	Rubros,
	Question,
	OrigenEvaluation,
	PatronsCatalog,
	Project,
	Phase,
	Postal,
	QuestionProject,
	QuestionType,
	Population,
	ProfileUser,
	Profile,
	Topic,
	Town,
	Grantee,
	Donor,
	Variable,
	Evaluation,
	Locations,
	Files,
	FunctionPatron,
	Information: combineReducers({
		AdditionalInfo,
		Objectives: IObjectives,
		Contacts,
		Classification,
		Summary: ISummary
	}),
	Services,
	Projects,
	Delegation,
	Government,
	InterventionLevel,
	GranteeStatus,
	RegulatoryBody,
	Consultant,
	Actor,
	Contracts,
	MonitoringStrength,
	Justification,
	EvaluationVariable,
	SustainableGoals,
	Results,
	Evaluations,
	Rounding,
	ProposalAssignment,
	ProposalAssignmentEjec,
	Loader,
	TemplLetters,
	FilterByEvaluation,
	Notification,
	Claves,
	Contratos,
	TypeContracts,
	Delivery,
	PaymentRequirement,
	TypePaymentRequirement,
	DocsAndReps,
	Contabilizadas,
	PaymentRequirements
});

export default rootReducer;
