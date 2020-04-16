import React from 'react'

// reactstrap components
import { Card, CardHeader, CardBody, Collapse } from 'reactstrap'

import MapWrapper from './MapWrapper'
import TableWrapper from './TableWrapper'

const Collapses = () => {
	// collapse states and functions
	const [collapses, setCollapses] = React.useState([])
	const changeCollapse = (collapse) => {
		if (collapses.includes(collapse)) {
			setCollapses(collapses.filter((prop) => prop !== collapse))
		} else {
			setCollapses([...collapses, collapse])
		}
	}

	//   const { markers } = useContext(GlobalContext)
	return (
		<>
			<div id='acordeon'>
				<div aria-multiselectable={true} id='accordion' role='tablist'>
					<Card className='no-transition'>
						<CardHeader
							className='card-collapse'
							id='headingOne'
							role='tab'
						>
							<h5 className='mb-0 panel-title text-center'>
								<a
									aria-expanded={collapses.includes(1)}
									className='collapsed'
									data-parent='#accordion'
									href='#pablo'
									id='collapseOne'
									onClick={(e) => {
										e.preventDefault()
										changeCollapse(1)
									}}
								>
									Map
								</a>
							</h5>
						</CardHeader>
						<Collapse isOpen={collapses.includes(1)}>
							<CardBody>
								<MapWrapper />
							</CardBody>
						</Collapse>
						<CardHeader
							className='card-collapse'
							id='headingTwo'
							role='tab'
						>
							<h5 className='mb-0 panel-title text-center'>
								<a
									aria-controls='collapseTwo'
									aria-expanded={collapses.includes(2)}
									className='collapsed '
									data-parent='#accordion'
									href='#pablo'
									id='collapseTwo'
									onClick={(e) => {
										e.preventDefault()
										changeCollapse(2)
									}}
								>
									Table
								</a>
							</h5>
						</CardHeader>
						<Collapse isOpen={collapses.includes(2)}>
							<CardBody>
								<TableWrapper />
							</CardBody>
						</Collapse>
					</Card>
				</div>
				{/* end acordeon */}
			</div>
		</>
	)
}

export default Collapses
