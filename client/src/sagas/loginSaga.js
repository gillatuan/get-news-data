import { put, takeLatest } from 'redux-saga/effects'
import * as Utils from '../utils/Utils'
import * as TYPES from '../constants/types'

export function* login(params) {
  yield Utils.delay(1000)
  yield put({ ...params, type: TYPES.LOGIN_PROGRESS })
}

export function* watchLoginAsync() {
  yield takeLatest(TYPES.LOGIN_ASYNC, login)
}
