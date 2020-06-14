import {
  SEARCH_SERVICES_START,
  SEARCH_SERVICES_RESET,
  SEARCH_SERVICES_BY_ID_START,
  SEARCH_SERVICES_BY_ID_RESET
} from '../constants/actionTypes';

export const resetSearchServices = () => ({
  type: SEARCH_SERVICES_RESET
});

export const searchServices =  () /*payload*/ => ({
  // Preguntar al profe por si se deja el payload
  type: SEARCH_SERVICES_START,
  // payload
});

export const resetSearchServiceById =  () => ({
  // Preguntar al profe por si se deja el payload
  type: SEARCH_SERVICES_BY_ID_RESET
});

export const searchServiceById =  payload => ({
  // Preguntar al profe por si se deja el payload
  type: SEARCH_SERVICES_BY_ID_START,
  payload
});
