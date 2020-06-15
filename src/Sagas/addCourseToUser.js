import {
  call,
  put,
  takeLatest
} from 'redux-saga/effects';

import { EDIT_USER_COMPLETE, EDIT_USER_ERROR, ADD_COURSE_REQ } from '../constants/actionTypes';

import apiCall from '../Apis/ApiUser';

function * addCourseToUser (action) {
  const payload = action.payload;
  
  const { username } = payload;
  const data = {
    courses: payload.courses
  }

  try {
    const result = yield call(apiCall, 'PUT', `/${username}`, data)
    
    if(result.data.Error) {
      throw new Error(result.data.Error);
    }

    yield put({
      type: EDIT_USER_COMPLETE,
      payload: result.data
    });
  } catch (error) {
    yield put({
      type: EDIT_USER_ERROR,
      payload: error
    })
  }
}

export default function * () {
  yield takeLatest(ADD_COURSE_REQ, addCourseToUser);
}