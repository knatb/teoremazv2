import {
  put,
  takeLatest
} from 'redux-saga/effects';

import {
  SEARCH_USER_COMPLETE,
  SEARCH_USER_ERROR,
  CREATE_USER_COMPLETE
} from '../constants/actionTypes';

function * loginFromCreate (action) {
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
  yield takeLatest(CREATE_USER_COMPLETE, loginFromCreate);
}