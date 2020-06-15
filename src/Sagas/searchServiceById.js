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
  if (data.course){
    try {
      const result = yield call (apiCall, 'GET', `/${data.course}` , null, null);
      if (result.data.Error) {
        throw new Error(result.data.Eror);
      }
      yield put({
        type: SEARCH_SERVICES_BY_ID_COMPLETE,
        payload: result.data
      });
    } catch (e) {
      yield put({
        type: SEARCH_SERVICES_BY_ID_ERROR,
        payload: e
      })
    }
  }
  else {
    try {
      const result = yield call (apiCall, 'GET', `/${data.id}` , null, null);
      console.log(result)
      if (result.data.Error) {
        throw new Error(result.data.Eror);
      }
      yield put({
        type: SEARCH_SERVICES_BY_ID_COMPLETE,
        payload: result.data
      });
    } catch (e) {
      yield put({
        type: SEARCH_SERVICES_BY_ID_ERROR,
        payload: e
      })
    }
  }
  
}

export default function* () {
  yield takeLatest(SEARCH_SERVICES_BY_ID_START, searchServiceById);
}