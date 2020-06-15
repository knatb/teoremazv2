import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects';

import {
  DELETE_USER_REQ,
  DELETE_USER_COMPLETE,
  DELETE_USER_ERROR
} from '../constants/actionTypes';

import apiCall from '../Apis/ApiUser';
import { result } from 'lodash';

function * deleteUser(action) {
  let {username} = action.payload;
  try {
    yield call(apiCall, 'DELETE', `/${username}`);

    if(result.data?.Error) {
      throw new Error(result.data.Error);
    }

    yield put({
      type: DELETE_USER_COMPLETE,
      payload: result.data
    });

  } catch (error) {
    yield put({
      type: DELETE_USER_ERROR,
      payload: result.data
    })
  }
}

export default function * () {
  yield takeLatest(DELETE_USER_REQ, deleteUser);
}