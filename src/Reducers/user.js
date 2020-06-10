import {
  SEARCH_USER_START,
  SEARCH_USER_ERROR,
  SEARCH_USER_COMPLETE,
  SEARCH_USER_RESET
} from '../constants/actionTypes';

const initialState = {
  loding: true,
  results: null,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_USER_START:
      return {
        ...state,
        loading: true
      };
    case SEARCH_USER_COMPLETE:
      return {
        ...state,
        loading: false,
        results: action.payload
      };
    case SEARCH_USER_ERROR: 
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case SEARCH_USER_RESET:
      return {
        ...initialState
      };
    default: 
      return state;
  }
}