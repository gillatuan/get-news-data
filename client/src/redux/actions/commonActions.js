import { TOGGLE_LOADING, GET_ERRORS } from "./types"

export const loading = (status) => {
	return {
		type: TOGGLE_LOADING,
		loadingStatus: status
	}
}
export const getError = (error) => {
	return {
		type: GET_ERRORS,
		error
	}
}
