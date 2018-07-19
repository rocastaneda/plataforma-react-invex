import { Collapse } from 'react-bootstrap'
import EditRange from 'Components/Catalogs/Ranges/EditRange'
import React from 'react'
import SearchRange from 'Components/Catalogs/Ranges/SearchRange'

const ModifyRange = (props) => (

	<div>
		<Collapse in={props.isToggle}>
			<div>
				<SearchRange {...props} />
			</div>
		</Collapse>
		<Collapse in={!props.isToggle}>
			<div><EditRange {...props} /></div>
		</Collapse>
	</div>
)

export default ModifyRange
