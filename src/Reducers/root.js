import { combineReducers } from 'redux';
// User Manager
import user from './user';
import createUser from './createUser';
import editUser from './editUser';
// Service manager
import service from './service';
// Material manager
import setMaterial from './material';
// Mis archivos reducers

const rootReducer = combineReducers({
// Mis reducers
  //User managing
  user,
  createUser,
  editUser,
  //Service managing
  service,
  // Material managing
  setMaterial
});

export default rootReducer;