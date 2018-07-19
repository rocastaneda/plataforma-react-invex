import { Button, Col, Row } from 'react-bootstrap'

import Labels from 'Assets/Labels'
import React from 'react'
import SelectInput from "Components/common/SelectInput"
import States from "Components/Catalogs/States"
import TableData from "Components/common/TableData"
import TextInput from "Components/common/TextInput"

const NewRange = (props) => (

	<Row>
		<Col xs={12} className=""><h2>{Labels.info}</h2></Col>
		<Col sm={6} md={4}>
			<TextInput
				label={Labels.Configuration.Ranges.range}
				name={'rango'}
				alphanum
				placeholder={Labels.Configuration.Ranges.newRange}
				maxLength={100}
				value={props.form.rango}
				required
				error={props.validate || false}
				onChange={props.handleText} />
		</Col>
		<Col sm={6} md={4}>
			<SelectInput
				name={'state'}
				label={Labels.Configuration.Ranges.stateItem}
				value={props.form.state}
				options={States}
				required
				error={props.validate || false}
				onChange={(v)=>{props.handleSelect(v,'state')}} />
		</Col>
		<Col xs={12}><hr /></Col>
		<Col xs={12}><h2>{Labels.Configuration.Ranges.table}</h2></Col>
		<Col sm={6} md={4} >
			<TextInput
				label={Labels.Configuration.Ranges.category}
				name={'category'}
				alphanum
				placeholder={Labels.Configuration.Ranges.newCategory}
				maxLength={150}
				value={props.form.category}
				required
				error={props.validateAdd || false}
				onChange={props.handleText}
				onKeyDown={props.handleAddText} />
		</Col>
		<Col md={4}><Button bsStyle="link" className="inline" onClick={props.handleAdd}><i className="fa fa-plus-square" />{Labels.add}</Button></Col>
		<Col xs={12} >
			<TableData
				page={1}
				pageStartIndex={1}
				columns={props.columns}
				onClickRemove={props.handleRemove}
				create
				remove
				data={props.form.categoria} />
		</Col>
		<Col xs={12} className="text-right">
			<Button bsStyle="primary" className="inline"  onClick={props.submitAdd} >{Labels.save}</Button>
		</Col>
	</Row>
)

export default NewRange
