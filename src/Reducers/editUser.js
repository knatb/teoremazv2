import { 
  EDIT_USER_REQ,
  EDIT_USER_COMPLETE,
  EDIT_USER_ERROR,
  EDIT_USER_RESET,
  ADD_COURSE_REQ
} from '../constants/actionTypes';

const initialState = {
  loding: false,
  results: null,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type){
    case EDIT_USER_REQ: 
      return {
        ...state,
        loading: true
      };
    case ADD_COURSE_REQ:
      return {
        ...state,
        loading: true
      }
    case EDIT_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    case EDIT_USER_COMPLETE:
      return {
        ...state,
        loading: false,
        results: action.payload
      };
    case EDIT_USER_RESET:
      return {
        ...initialState
      }
    default:
      return state;
  }
}