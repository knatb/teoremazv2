import {
  SEARCH_SERVICES_BY_ID_COMPLETE,
  SEARCH_SERVICES_BY_ID_ERROR,
  SEARCH_SERVICES_BY_ID_RESET,
  SEARCH_SERVICES_BY_ID_START
} from '../constants/actionTypes';

const initialState = {
  loading: false,
  result: null,
  error: null
}

export default function (state = initialState, action) {
  switch (action.type){
    case SEARCH_SERVICES_BY_ID_START:
    return {
      ...state,
      loading: true
    };
  case SEARCH_SERVICES_BY_ID_COMPLETE:
    return {
      ...state,
      loading: false,
      result: action.payload
    };
  case SEARCH_SERVICES_BY_ID_ERROR:
    return {
      ...state,
      loading: false,
      error: action.payload
    };
  case SEARCH_SERVICES_BY_ID_RESET:
    return {
      ...initialState
    };
    default: 
    return state;
  }
}