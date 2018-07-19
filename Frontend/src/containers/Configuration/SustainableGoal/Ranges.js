import * as Utils from 'Assets/Utils'

import React, {Component} from 'react'
import { Tab, Tabs } from 'react-bootstrap'
import { addRange, clearRange, getRange, searchRange, updateRange } from "Modules/Configurations/SustainableGoal/Ranges"

import Labels from 'Assets/Labels'
import ModifyRange from 'Components/Catalogs/Ranges/ModifyRange'
import NewRange from 'Components/Catalogs/Ranges/NewRange'
import { connect } from 'react-redux'
import { createModal } from 'Modules/Modal'

class Ranges extends Component {

	toggleBack() {
		this.handleSelectTab(2)
	}

	toggle() {
		this.setState({toggle: !this.state.toggle})
	}

	submitAdd (event) {
		event.preventDefault()

		if (!this.state.form.rango || !this.state.form.state || this.state.form.categoria.length<1) {
			this.setState({validate: true, validateAdd:true})
			if( this.state.form.categoria.length>0) this.setState({ ...this.state.form, validateAdd: false})
		} else {
			this.props.addRange(this.state.form).then( () =>  {
				this.setState({validate: false, validateAdd: false, form: {...Utils.setDefaultValues(this.state.form)}})
			})
		}
	}

	submitUpdate (event) {
		event.preventDefault()

		if (!this.state.form.rango || !this.state.form.state) {
			this.setState({validate: true})
		} else {
			this.props.updateRange(this.state.form).then ( () => {
				this.handleSelectTab(2)
			})
		}
	}

	submitSearch (event) {
		event.preventDefault()
		this.props.searchRange(this.state.form)
	}

	handleText (event) {
		event.preventDefault()
		this.setState({form:{...this.state.form, [event.target.name]: event.target.value}, validateAdd: false })
	}

	handleAddText (event) {

		switch (event.key) {
			case 'Enter':
				this.handleAdd ()
				break
			default: break
		}
	}

	handleEdit (id) {
		this.props.getRange(id).then( () => {
			this.toggle()
		})
	}

	handleSelect (value, element) {
		this.setState({form: {...this.state.form, [element]: value}})
	}

	handleRemove (id) {

		let categoriaRemove = this.state.form.categoriaRemove
		let itemRemove = Utils.getItem(this.state.form.categoria, {id})

		if (itemRemove.tmp === undefined) {
			itemRemove.deleted = true
			categoriaRemove.push(itemRemove)
		}

		let categoria = Utils.removeItem(this.state.form.categoria, {id})
		this.setState({form: {...this.state.form, categoria, categoriaRemove}})
	}

	handleAdd () {
		if (!this.state.form.category) {
			this.setState({validateAdd: true})
		} else {
			let categoria = this.state.form.categoria

			if (categoria.some((c) => { return c.categoria.toUpperCase() == this.state.form.category.toUpperCase() } )) {
				this.props.createModal(Utils.warningMessage(Labels.listMessageIn))
			} else {
				categoria.push({tmp:'tmp', id: Utils.getUUID(), categoria:this.state.form.category})
				this.setState({form:{...this.state.form, categoria, category: ''} })
			}
		}
	}

	handleSelectTab(key){
		this.props.clearRange()

		if (key === 2){
			this.props.searchRange({}).then( () => {
				this.setState({validate: false, validateAdd: false, form: {...Utils.setDefaultValues(this.state.form)}, key, toggle: true })
			})
		} else {
			this.setState({validate: false, validateAdd: false, form: {...Utils.setDefaultValues(this.state.form)}, key, toggle: true })
		}
	}

	constructor(props) {
		super(props)

		this.state = {
			key: 1,
			validate: false,
			validateAdd: false,
			toggle: true,
			columns: [{name: Labels.Configuration.Ranges.category, id: 'categoria', createdBy: sessionStorage.uid, type: 'simple', sort: true}],

			form: { categoria: [], categoriaRemove: [] }
		};

		this.toggle = this.toggle.bind(this)
		this.toggleBack = this.toggleBack.bind(this)

		this.submitAdd = this.submitAdd.bind(this)
		this.submitUpdate = this.submitUpdate.bind(this)
		this.submitSearch = this.submitSearch.bind(this)
		this.handleText = this.handleText.bind(this)
		this.handleEdit = this.handleEdit.bind(this)
		this.handleAdd = this.handleAdd.bind(this)
		this.handleAddText = this.handleAddText.bind(this)
		this.handleSelect = this.handleSelect.bind(this)
		this.handleRemove = this.handleRemove.bind(this)
		this.handleSelectTab = this.handleSelectTab.bind(this)
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.rangeItem.id)
			this.setState({form: { ...nextProps.rangeItem, categoriaRemove: []}})
	}

	render(){

		return (
			<div className="container">
				<h1>{Labels.Configuration.Ranges.title}</h1>
				<Tabs activeKey={this.state.key} onSelect={this.handleSelectTab} id={'rangos'}>
					<Tab eventKey={1} title={Labels.newItem}>
						<NewRange
							columns={this.state.columns}
							form={this.state.form}
							validate={this.state.validate}
							validateAdd={this.state.validateAdd}
							handleText={this.handleText}
							handleAdd={this.handleAdd}
							handleAddText={this.handleAddText}
							handleSelect={this.handleSelect}
							handleRemove={this.handleRemove}
							submitAdd={this.submitAdd} />
					</Tab>
					<Tab eventKey={2} title={Labels.editItems}>
						<ModifyRange
							isToggle={this.state.toggle}
							toggle={this.toggle}
							toggleBack={this.toggleBack}
							columns={this.state.columns}
							ranges={this.props.ranges}
							rangeItem={this.props.rangeItem}
							form={this.state.form}
							validate={this.state.validate}
							validateAdd={this.state.validateAdd}
							handleText={this.handleText}
							handleAdd={this.handleAdd}
							handleAddText={this.handleAddText}
							handleEdit={this.handleEdit}
							handleSelect={this.handleSelect}
							handleRemove={this.handleRemove}
							submitUpdate={this.submitUpdate}
							submitSearch={this.submitSearch} />
					</Tab>
				</Tabs>
			</div>
		)
	}
}

const mapStateToProps = (state) => {

	let rangeItem = {...state.Ranges.get('Get').toJS()};

	return {
		rangeItem,
		ranges: state.Ranges.get('Search').toJS()
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateRange: (form) => dispatch(updateRange(form)),
		addRange: (form) => dispatch(addRange(form)),
		searchRange: (form) => dispatch(searchRange(form)),
		getRange: (id) => dispatch(getRange(id)),
		clearRange: () => dispatch(clearRange()),
		createModal: (modalObj) => dispatch(createModal(modalObj))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Ranges)
