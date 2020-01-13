import { TOGGLE_LOADING, GET_ERRORS_ASYNC } from '../../constants/types'

export const loading = (status) => {
  return {
    type: TOGGLE_LOADING,
    loadingStatus: status
  }
}
export const getError = (error) => {
  debugger
  return {
    type: GET_ERRORS_ASYNC,
    error
  }
}

export const returnAction = (type, payload) => {
  return {
    type,
    payload
  }
}
