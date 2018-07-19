import { Button, Col, Row } from 'react-bootstrap'

import Labels from 'Assets/Labels'
import React from 'react'
import SelectInput from "Components/common/SelectInput"
import States from "Components/Catalogs/States"
import TableData from "Components/common/TableData"
import TextInput from "Components/common/TextInput"

const columns = [{name: 'Id', id: 'id', type: 'simple', index: true, sort: true }, {name: Labels.Configuration.Ranges.range, id: 'rango', type: 'simple', sort: true}]

const SearchRange = (props) => (

	<Row>
		<Col xs={12}><h2>{Labels.findRecs}</h2></Col>
		<Col sm={6} md={4}>
			<TextInput
				label={Labels.Configuration.Ranges.range}
				name={'rango'}
				placeholder={Labels.Configuration.Ranges.newRange}
				maxLength={100}
				alphanum
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
		<Col sm={6} smOffset={6} md={4} mdOffset={0}>
			<Button bsStyle="primary" className="inline" onClick={props.submitSearch} >{Labels.search}</Button>
		</Col>
		<Col xs={12}>
			<TableData
				page={1}
				pageStartIndex={1}
				columns={columns}
				state
				onClickEdit={props.handleEdit}
				edit
				data={props.ranges} />
		</Col>
	</Row>
)

export default SearchRange
