import { combineReducers } from 'redux';
import user from './user';
import service from './service';
// Mis archivos reducers

const rootReducer = combineReducers({
  // Mis reducers
  user,
  service
});

export default rootReducer;