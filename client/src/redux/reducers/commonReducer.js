import { CLEAR_ERRORS, GET_ERRORS, TOGGLE_LOADING } from "../actions/types"

const initialState = { loadingStatus: false }

export default function (state = initialState, action) {
	switch (action.type) {
		case TOGGLE_LOADING:
			return {
				...state,
				loadingStatus: action.loadingStatus
			}

		case CLEAR_ERRORS:
			return {
				...state,
				messageErr: ""
			}

		case GET_ERRORS:
			return {
				...state,
				messageErr: action.error
			}

		default:
			return state
	}
}
