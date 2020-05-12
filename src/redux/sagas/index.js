import { put, takeEvery, delay } from 'redux-saga/effects'

export function* incrementAsync() {
  yield delay(2000)
  yield put({ type: 'INCREMENT' })
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}