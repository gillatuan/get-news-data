import { all, call } from 'redux-saga/effects'

// import { ageDownAsync, ageUpAsync } from './saga'
import { watchLoginAsync } from './authSaga'
import { watchErrorAsync } from './commonSaga'

export function* rootSaga() {
  yield all([
    call(watchErrorAsync),
    call(watchLoginAsync),
  ])
}
