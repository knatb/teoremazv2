import { combineReducers } from 'redux';
// User Manager
import user from './user';
import createUser from './createUser';
// Service manager
import service from './service';
// Mis archivos reducers

const rootReducer = combineReducers({
  // Mis reducers
  user,
  createUser,
  service
});

export default rootReducer;