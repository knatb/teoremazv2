import {
  SEARCH_USER_START,
  SEARCH_USER_RESET 
} from '../constants/actionTypes';

export const resetUserSearch = () => ({
  type: SEARCH_USER_RESET
});

export const searchUser = payload => ({
  type: SEARCH_USER_START,
  payload
});