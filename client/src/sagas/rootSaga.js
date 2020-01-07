import { all } from 'redux-saga/effects'

// import { ageDownAsync, ageUpAsync } from './saga'
import { watchLoginAsync } from './loginSaga'

export function* rootSaga() {
  debugger
  yield all([
    watchLoginAsync()
  ])
}
