import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects';

import {
  EDIT_USER_REQ,
  EDIT_USER_COMPLETE,
  EDIT_USER_ERROR
} from '../constants/actionTypes';

import apiCall from '../Apis/ApiUser';

function * editUser(action) {
  const payload = action.payload

  const { username } = payload;
  
  const data = {
    email: payload.email,
    completeName: payload.completeName,
    password: payload.password,
    courses: payload.courses
  };

  try {
    const result = yield call(apiCall, 'PUT', `/${username}`, data);

    if(result.data.Error) {
      throw new Error(result.data.Error);
    }

    yield put({
      type: EDIT_USER_COMPLETE,
      payload: result.data
    });

  } catch (e) {
    yield put({
      type: EDIT_USER_ERROR,
      payload: e
    })
  }
}

export default function * () {
  yield takeLatest(EDIT_USER_REQ, editUser);
}