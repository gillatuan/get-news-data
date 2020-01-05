import { takeLatest } from 'redux-saga/effects'

import { ageDownAsync, ageUpAsync } from './saga'
import { SET_CURRENT_USER } from '../redux/actions/types'

export function* rootSaga() {
  debugger
  yield takeLatest(SET_CURRENT_USER, ageUpAsync)
  yield takeLatest('AGE_DOWN', ageDownAsync)
}
