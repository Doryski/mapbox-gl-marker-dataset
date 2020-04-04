import React, { createContext, useReducer, useEffect } from 'react'
import reducer from 'reducers/reducer'

const markers = [
	{
		id: 0,
		coordinates: [-91.395263671875, -0.9145729757782163],
		},
	{
		id: 1,
		coordinates: [-90.32958984375, -0.6344474832838974],
	},
	{
		id: 2,
		coordinates: [-91.34033203125, 0.01647949196029245],
	},
]

export const GlobalContext = createContext(markers)

export const GlobalContextProvider = ({ children }) => {
	// managing markers
	const [state, dispatch] = useReducer(reducer, markers)

	const addMarker = (payload) => {
		dispatch({
			type: 'ADD_MARKER',
			payload,
		})
	}

	const updateMarker = (id, payload) => {
		dispatch({
			type: 'UPDATE_MARKER',
			id,
			payload,
		})
	}

	const removeMarker = (id) => {
		dispatch({
			type: 'REMOVE_MARKER',
			id,
		})
	}

	useEffect(() => {
		const markersData = JSON.parse(localStorage.getItem('markers'))

		if (markersData) {
			dispatch({
				type: 'GET_MARKERS',
				payload: markersData,
			})
		}
	}, [])

	useEffect(() => {
		localStorage.setItem('markers', JSON.stringify(state))
	}, [state])

	return (
		<GlobalContext.Provider
			value={{
				markers: state,
				addMarker,
				updateMarker,
				removeMarker,
			}}
		>
			{children}
		</GlobalContext.Provider>
	)
}
