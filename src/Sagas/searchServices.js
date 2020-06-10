import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects';
import {
  SEARCH_SERVICES_COMPLETE,
  SEARCH_SERVICES_ERROR,
  SEARCH_SERVICES_START
} from '../constants/actionTypes';
 import apiCall from '../Apis/ApiServices';

function* searchServices() {
  try {
    const result = yield call (apiCall, 'GET', '/', null);

    if (result.data.Error) {
      throw new Error(result.data.Eror);
    }

    yield put({
      type: SEARCH_SERVICES_COMPLETE,
      payload: result.data
    });
  } catch (e) {
    yield put({
      type: SEARCH_SERVICES_ERROR,
      payload: e
    })
  }
}

export default function* () {
  yield takeLatest(SEARCH_SERVICES_START, searchServices);
}