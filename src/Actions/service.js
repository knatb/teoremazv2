import {
  SEARCH_SERVICES_START,
  SEARCH_SERVICES_RESET
} from '../constants/actionTypes';

export const resetSearchServices = () => ({
  type: SEARCH_SERVICES_RESET
});

export const searchServices =  () /*payload*/ => ({
  // Preguntar al profe por si se deja el payload
  type: SEARCH_SERVICES_START,
  // payload
});
