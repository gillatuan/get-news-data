import { all, call } from 'redux-saga/effects'

// import { ageDownAsync, ageUpAsync } from './saga'
import { watchLoginAsync } from './loginSaga'

export function* rootSaga() {
  yield all([
    call(watchLoginAsync),
  ])
}
