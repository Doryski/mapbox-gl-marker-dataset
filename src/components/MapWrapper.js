import React, { useContext } from 'react'
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl'
import { GlobalContext } from 'context/GlobalContext'
import uuid from 'react-uuid'

const Map = ReactMapboxGl({
	accessToken:
		'pk.eyJ1IjoiZG9yeXNraSIsImEiOiJjazhrZTdjaDcwMHQ2M210aGoxdTl6bnBsIn0.T6vaQGeUkM3Dv9CjX2Iuxw',
})

const MapWrapper = () => {
	const { addMarker, updateMarker, markers } = useContext(GlobalContext)

	const onMapClick = (e) => {
		const setLng = e.lngLat.lng
		const setLat = e.lngLat.lat

		addMarker({
			id: uuid(),
			coordinates: [setLng, setLat],
		})
	}

	const onMarkerDrag = (id, e) => {
		const newLng = e.lngLat.lng
		const newLat = e.lngLat.lat
		const newCoordinates = [newLng, newLat]

		updateMarker(id, newCoordinates)
	}

	return (
		<Map
			style='mapbox://styles/mapbox/streets-v11'
			containerStyle={{
				height: '50vh',
				width: '100vw',
			}}
			onClick={(_, e) => {
				onMapClick(e)
			}}
		>
			<Layer
				type='symbol'
				id='marker'
				layout={{ 'icon-image': 'marker-15', 'icon-size': 2 }}
			>
				{markers.map((marker) => (
					<Feature
						key={marker.id}
						coordinates={[
							marker.coordinates[0],
							marker.coordinates[1],
						]}
						draggable
						onDrag={(e) => onMarkerDrag(marker.id, e)}
					/>
				))}
			</Layer>
		</Map>
	)
}

export default MapWrapper
