import axios from "axios"

import { UPLOAD_MEDIA, GET_LIST_MEDIA, GET_MEDIA, GET_ERRORS, UPDATE_MEDIA } from "./types"
import { getError, loading } from "./commonActions"

// Add Post
export const uploadMedia = (mediaFiles) => (dispatch) => {
	// dispatch(clearErrors())

	const formData = new FormData()
	formData.append("selectedFile", mediaFiles)
	formData.append("title", mediaFiles.title)

	axios
		.post("/api/media/upload", formData)
		.then((res) => {
			dispatch({
				type: UPLOAD_MEDIA,
				item: res.data
			})
		})
		.catch((err) => {
			dispatch({
				type: GET_ERRORS,
				items: err.response.data
			})
		})
}

// update Media
export const updateMedia = (id, mediaData) => {
	return async (dispatch) => {
		dispatch(loading(true))

		await axios
			.put(`/api/media/${id}`, mediaData)
			.then((res) => {
				dispatch({
					type: UPDATE_MEDIA,
					item: res.data
				})
			})
			.catch((err) => {
				dispatch(getError(err.response.data))
			})
	}
}

export const getListMedia = (page) => {
	return async (dispatch) => {
		dispatch(loading(true))

		let dataList = null
		let url = `/api/media/list/${page}`

		await axios
			.get(url)
			.then((res) => {
				dataList = res.data

				dispatch({
					type: GET_LIST_MEDIA,
					items: dataList
				})
			})
			.catch((err) => {
				dispatch(getError(err.response.data))
			})

		if (dataList) {
			dispatch(loading(false))
		}
	}
}

// Get Media
export const getMedia = (id) => {
	return async (dispatch) => {
		dispatch(loading(true))

		await axios
			.get(`/api/media/get/${id}`)
			.then((res) => {
				dispatch({
					type: GET_MEDIA,
					data: res.data
				})
			})
			.catch((err) => {
				dispatch(getError(err.response.data))
			})

		dispatch(loading(false))
	}
}

export const updateStatus = (param) => {
	return async (dispatch) => {
		dispatch(loading(true))

		let dataList = null
		await axios
			.post("/api/media/update-status", param)
			.then((res) => {
				dataList = res.data

				dispatch({
					type: GET_LIST_MEDIA,
					items: dataList
				})
			})
			.catch((err) => {
				dispatch(getError(err.response.data))
			})

		if (dataList) {
			dispatch(loading(false))
		}
	}
}

export const deleteItem = (param) => {
	return async (dispatch) => {
		dispatch(loading(true))

		let dataList = null
		await axios
			.post("/api/media/delete", param)
			.then((res) => {
				dataList = res.data

				dispatch({
					type: GET_LIST_MEDIA,
					payload: dataList
				})
			})
			.catch((err) => {
				dispatch(getError(err.response.data))
			})

		if (dataList) {
			dispatch(loading(false))
		}
	}
}
