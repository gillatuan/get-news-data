import { put, takeLatest } from 'redux-saga/effects'
import * as TYPES from '../constants/types'

export function* handleError(params) {
  debugger
  // yield Utils.delay(1000)
  yield put({ ...params, type: TYPES.GET_ERRORS })
}

export function* watchErrorAsync() {
  yield takeLatest(TYPES.GET_ERRORS_ASYNC, handleError)
}
