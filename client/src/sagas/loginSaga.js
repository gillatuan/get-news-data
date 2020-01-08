import { put, takeLatest } from 'redux-saga/effects'
import * as Utils from '../utils/Utils'
import * as Types from '../constants/types'

export function* login() {
  yield Utils.delay(1000)
  yield put({ type: Types.LOGIN_PROGRESS })
}

export function* watchLoginAsync() {
  yield takeLatest(Types.LOGIN_ASYNC, login)
}
