import { put } from 'redux-saga/effects'

const delay = ms => new Promise(res => setTimeout(res, ms))

export function* ageUpAsync() {
  debugger
  yield delay(1000)
  yield put({ type: 'AGE_UP_ASYNC' })
}
export function* ageDownAsync() {
  debugger
  yield delay(1000)
  yield put({ type: 'AGE_DOWN_ASYNC' })
}
