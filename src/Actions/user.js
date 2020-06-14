import {
  // Login
  SEARCH_USER_START,
  SEARCH_USER_RESET,
  // Creation of an user
  CREATE_USER_REQ,
  // Update an user
  EDIT_USER_REQ 
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