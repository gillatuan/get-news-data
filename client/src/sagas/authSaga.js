import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import * as TYPES from '../constants/types'
import UserAPIClient from '../services/UserAPIClient'

export function* login(params) {
  debugger
  // yield Utils.delay(1000)
  const currentUser = yield call(UserAPIClient.getUserInfo, params.payload)

  yield put({ ...currentUser })
}
export function* watchLoginAsync() {
  yield takeLatest(TYPES.LOGIN_ASYNC, login)
}

export function* register(params) {
  debugger
  // yield Utils.delay(1000)
  const currentUser = yield call(UserAPIClient.getUserInfo, params.payload)

  yield put({ ...currentUser })
}
export function* watchRegisterAsync() {
  yield takeLatest(TYPES.REGISTER_PROGRESS_ASYNC, register)
}
