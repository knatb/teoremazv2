import {
  // Login
  SEARCH_USER_START,
  SEARCH_USER_RESET,
  // Creation of an user
  CREATE_USER_REQ,
  CREATE_USER_RESET,
  // Update an user
  EDIT_USER_REQ,
  EDIT_USER_RESET,
  ADD_COURSE_REQ,
  // Delete an user
  DELETE_USER_REQ 
} from '../constants/actionTypes';

export const resetUser = () => ({
  type: SEARCH_USER_RESET
});

export const searchUser = payload => ({
  type: SEARCH_USER_START,
  payload
});

export const createUserReq = payload => ({
  type: CREATE_USER_REQ,
  payload
});

export const editUserReq = payload => ({
  type: EDIT_USER_REQ,
  payload
});

export const deleteUser = payload => ({
  type: DELETE_USER_REQ,
  payload
});

export const editUserReset = () => ({
  type: EDIT_USER_RESET
});

export const createUserReset = () => ({
  type: CREATE_USER_RESET
});

export const addCourse = payload => ({
  type: ADD_COURSE_REQ,
  payload
})