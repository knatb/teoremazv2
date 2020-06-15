import {
  put,
  call,
  takeLatest
} from 'redux-saga/effects';
import {
  SEARCH_SERVICES_BY_ID_COMPLETE,
  SEARCH_SERVICES_BY_ID_ERROR,
  SEARCH_SERVICES_BY_ID_START
} from '../constants/actionTypes';
 import apiCall from '../Apis/ApiServices';

function * searchServiceById(action) {
  const data = action.payload;
  try {
    
    const result = yield call (apiCall, 'GET', `/${data.course}` , null, null);
    console.log(result)
    if (result.data.Error) {
      throw new Error(result.data.Eror);
    }
    console.log(result.data)
    yield put({
      type: SEARCH_SERVICES_BY_ID_COMPLETE,
      payload: result.data
    });
    console.log(result.data)
  } catch (e) {
    yield put({
      type: SEARCH_SERVICES_BY_ID_ERROR,
      payload: e
    })
  }
}

export default function* () {
  yield takeLatest(SEARCH_SERVICES_BY_ID_START, searchServiceById);
}