import { combineReducers } from 'redux';
// User Manager
import user from './user';
import createUser from './createUser';
// Service manager
import service from './service';
// Material manager
import setMaterial from './material';
// Mis archivos reducers

const rootReducer = combineReducers({
  // Mis reducers
  user,
  createUser,
  service,
  setMaterial
});

export default rootReducer;