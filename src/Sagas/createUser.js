import {
  put,
  call, 
  takeLatest
} from 'redux-saga/effects';

import {
  CREATE_USER_REQ,
  CREATE_USER_ERROR,
  CREATE_USER_COMPLETE
} from '../constants/actionTypes';

import apiCall from '../Apis/ApiUser';

function * createUser (action) {
  const data = action.payload;

  try {
    const result = yield call(apiCall, 'POST', '/', data);
    
    if (result.data.Error) {
      throw new Error(result.data.Error);
    }

    yield put({
      type: CREATE_USER_COMPLETE,
      payload: result.data
    });

  } catch (e) {
    yield put({
      type: CREATE_USER_ERROR,
      payload: e
    })
  }
}

export default function * () {
  yield takeLatest(CREATE_USER_REQ, createUser);
}