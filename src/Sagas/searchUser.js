import {
  put,
  call, 
  takeLatest
} from 'redux-saga/effects';

import { 
  SEARCH_USER_START,
  SEARCH_USER_COMPLETE, 
  SEARCH_USER_ERROR 
} from '../constants/actionTypes';

import apiCall from '../Apis/ApiUser';

function * searchUser (action) {
  const data = action.payload;
  
  try {
    const result = yield call(apiCall, 'POST', '/login', data);

    if(result.data.Error) {
      throw new Error(result.data.Error);
    }

    yield put({
      type: SEARCH_USER_COMPLETE,
      payload: result.data
    });

  } catch (e) {
    yield put({
      type: SEARCH_USER_ERROR,
      payload: e
    })
  }
}

export default function* () {
  yield takeLatest(SEARCH_USER_START, searchUser);
}

