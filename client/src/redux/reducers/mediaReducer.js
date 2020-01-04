import { UPLOAD_MEDIA, GET_LIST_MEDIA, GET_MEDIA, UPDATE_MEDIA } from "../actions/types"

const initialState = {
	items: [],
	item: {},
	uploaded: false
}

export default function (state = initialState, action) {
	switch (action.type) {
		case UPLOAD_MEDIA:
			return {
				...state,
				uploaded: true
			}

		case GET_LIST_MEDIA:
			return {
				...state,
				items: action.items
			}

		case GET_MEDIA:
			return {
				...state,
				item: action.data,
				updated: false
			}

		case UPDATE_MEDIA:
			return {
				...state,
				item: action.item,
				updated: true
			}

		default:
			return state
	}
}
