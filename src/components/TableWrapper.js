import React, { useContext } from 'react';
import { Table, Button } from 'reactstrap';
import { GlobalContext } from 'context/GlobalContext';

const TableWrapper = () => {
    const { markers, removeMarker } = useContext(GlobalContext)
    
    return (
		<Table striped hover responsive>
			<thead>
				<tr>
					<th>#</th>
					<th>Longitude</th>
					<th>Latitude</th>
					<th>Remove</th>
				</tr>
			</thead>
			<tbody>
				{markers.map((marker) => (
					<tr key={marker.id}>
						<th scope='row'>{String(marker.id).slice(0, 6)}</th>
						<td>{marker.coordinates[0].toFixed(6)}</td>
						<td>{marker.coordinates[1].toFixed(6)}</td>
						<td>
							<Button
								color='danger'
								size='xs'
								onClick={() => removeMarker(marker.id)}
							>
								X
							</Button>
						</td>
					</tr>
				))}
			</tbody>
		</Table>
	)
}

export default TableWrapper;



