import {
  SEARCH_USER_START,
  SEARCH_USER_RESET,
  CREATE_USER_REQ 
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
})