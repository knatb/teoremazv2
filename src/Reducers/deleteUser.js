import {
  DELETE_USER_REQ,
  DELETE_USER_COMPLETE,
  DELETE_USER_ERROR
} from '../constants/actionTypes';

const initialState = {
  loading: false,
  result: null,
  error: null
}

export default function (state = initialState, action) {
  switch (action.type) {
    case DELETE_USER_REQ:
      return {
        ...state,
        loading: true
      };
    case DELETE_USER_COMPLETE:
      return {
        ...state,
        loading: false,
          result: action.payload
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        loading: false,
          error: action.payload
      };
    default:
      return state;
  }
}