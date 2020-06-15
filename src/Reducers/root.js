import { combineReducers } from 'redux';
// User Manager
import user from './user';
import createUser from './createUser';
import editUser from './editUser';
import deleteUser from './deleteUser';
// Service manager
import service from './service';
// Material manager
import setMaterial from './material';

import servicebyid from './servicebyid';
// Mis archivos reducers

const rootReducer = combineReducers({
// Mis reducers
  //User managing
  user,
  createUser,
  editUser,
  deleteUser,
  //Service managing
  service,
  // Material managing
  setMaterial,
  servicebyid
});

export default rootReducer;