import axios from "axios"

import {
  ADD_MODULE,
  CLEAR_MODULE_STATE,
  EDIT_MODULE,
  GET_MODULES,
  GET_MODULE,
  DELETE_MODULE,
} from "./types"
import { getError, loading } from "./commonActions"

// Add Post
export const addModule = (moduleData) => {
  return async (dispatch) => {
    dispatch(loading(true))

    let dataItem = null
    await axios
      .post("/api/modules/new", moduleData)
      .then((res) => {
        dataItem = res.data

        dispatch({
          type: ADD_MODULE,
          item: dataItem,
        })
      })
      .catch((err) => {
        dispatch(getError(err.response.data.messageErr))
      })

    if (dataItem) {
      dispatch(loading(false))
    }
  }
}

// update Module
export const editModule = (id, moduleData) => {
  return async (dispatch) => {
    dispatch(loading(true))

    let dataItem = null
    await axios
      .put(`/api/modules/${id}`, moduleData)
      .then((res) => {
        dataItem = res.data

        dispatch({
          type: EDIT_MODULE,
          item: dataItem,
        })
      })
      .catch((err) => {
        let errmsg = ""
        if (err.response.data.err.codeName === "DuplicateKey") {
          errmsg = "Title is existing"
        }
        dispatch(getError(errmsg))
      })

    if (dataItem) {
      dispatch(loading(false))
    }
  }
}

export const getModules = (page) => {
  return async (dispatch) => {
    dispatch(loading(true))

    let dataList = null
    let url = `/api/modules/list/${page}`

    await axios
      .get(url)
      .then((res) => {
        dataList = res.data

        dispatch({
          type: GET_MODULES,
          items: dataList,
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

// Get Module
export const getModule = (id) => {
  return async (dispatch) => {
    dispatch(loading(true))

    let dataItem = null
    await axios
      .get(`/api/modules/get/${id}`)
      .then((res) => {
        dataItem = res.data

        dispatch({
          type: GET_MODULE,
          data: dataItem,
        })
      })
      .catch((err) => {
        dispatch(getError(err.response.data))
      })

    if (dataItem) {
      dispatch(loading(false))
    }
  }
}
// Get Module by alias
export const getModuleByAlias = (alias) => {
  return async (dispatch) => {
    dispatch(loading(true))

    let dataList = null
    await axios
      .get(`/api/modules/get-item/${alias}`)
      .then((res) => {
        dataList = res.data

        dispatch({
          type: GET_MODULES,
          items: dataList,
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

// Delete Module
export const deleteModule = (id) => (dispatch) => {
  axios
    .delete(`/api/modules/delete-${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_MODULE,
        payload: id,
      })
    )
    .catch((err) => dispatch(getError(err.response.data)))
}

export const updateStatus = (param) => {
  return async (dispatch) => {
    dispatch(loading(true))

    let dataItem = null
    await axios
      .post("/api/modules/update-status", param)
      .then((res) => {
        dataItem = res.data

        dispatch({
          type: GET_MODULES,
          items: dataItem,
        })
      })
      .catch((err) => {
        dispatch(getError(err.response.data))
      })

    if (dataItem) {
      dispatch(loading(false))
    }
  }
}

export const clearModuleState = () => {
  return {
    type: CLEAR_MODULE_STATE,
  }
}
