import {
  put,
  takeLatest
} from 'redux-saga/effects';

import {
  DELETE_USER_COMPLETE,
  SEARCH_USER_RESET
} from '../constants/actionTypes';

function * logoutFromDelete () {
  yield put({
    type: SEARCH_USER_RESET
  })
}

export default function * () {
  yield takeLatest(DELETE_USER_COMPLETE, logoutFromDelete);
}