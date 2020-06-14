import {
  SET_MATERIAL
} from '../constants/actionTypes';

const intitialState = {
  materials: []
}

export default function (state = intitialState, action) {
  switch (action.type){
    case SET_MATERIAL:
      return {
        ...state,
        materials: action.payload
      }
    default:
      return state;
  }
}