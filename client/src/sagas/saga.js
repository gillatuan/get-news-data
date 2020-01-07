import { put } from 'redux-saga/effects'
import * as Utils from '../utils/Utils'

export function* ageUpAsync() {
  debugger
  yield Utils.delay(1000)
  yield put({ type: 'AGE_UP_ASYNC' })
}
export function* ageDownAsync() {
  debugger
  yield Utils.delay(1000)
  yield put({ type: 'AGE_DOWN_ASYNC' })
}
