import {
  put,
  takeLatest
} from 'redux-saga/effects';

import {
  SEARCH_USER_COMPLETE,
  SEARCH_USER_ERROR,
  EDIT_USER_COMPLETE
} from '../constants/actionTypes';

function * loginFromEdit (action) {
  const data = action.payload;

  try {
    yield put({
      type: SEARCH_USER_COMPLETE,
      payload: data
    })
  } catch (e) {
    yield put({
      type: SEARCH_USER_ERROR,
      payload: e
    })
  }
}

export default function * () {
  yield takeLatest(EDIT_USER_COMPLETE, loginFromEdit);
}