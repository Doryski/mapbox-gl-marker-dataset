export default (state, action) => {
	switch (action.type) {
		case 'GET_MARKERS':
			return action.payload
		case 'ADD_MARKER':
			return [action.payload, ...state]
		case 'UPDATE_MARKER':
			return state.map((marker) => {
				if (marker.id === action.id) {
					return {
						...marker,
						coordinates: action.payload,
					}
				} else {
					return marker
				}
			})
		case 'REMOVE_MARKER':
			return state.filter((marker) => marker.id !== action.id)
		default:
			return state
	}
}
