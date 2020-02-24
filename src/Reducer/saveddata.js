const initialdata = {
	data: []
}
export const saveData = (state = initialdata, { type, payload }) => {
	switch (type) {
		case 'SAVE_DATA': {
			var data = removeusingSet(payload, state)
			return { data }
		}
		default:
			return state;
	}
}

function removeusingSet(payload, state) {
	var foundIndex = state.data.findIndex(x => x.id === payload.id);
	if (foundIndex !== -1) {
		state.data[foundIndex] = payload;
		return state.data
	}
	else {
		return [...state.data, payload]

	}
}
