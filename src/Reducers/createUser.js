import {
  CREATE_USER_REQ,
   CREATE_USER_COMPLETE, 
   CREATE_USER_ERROR,
   CREATE_USER_RESET
} from '../constants/actionTypes';

const initialState = {
  loding: false,
  results: null,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type){
    case CREATE_USER_REQ: 
      return {
        ...state,
        loading: true
      };
    case CREATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case CREATE_USER_COMPLETE:
      return {
        ...state,
        loading: false,
        results: action.payload
      };
    case CREATE_USER_RESET:
      return {
        ...initialState
      }
    default:
      return state;
  }
}