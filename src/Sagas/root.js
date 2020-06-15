import { all } from 'redux-saga/effects';
// Mis sagas
import searchServices from './searchServices';
// User Manager
import searchUser from './searchUser';
import createUser from './createUser';
import editUser from './editUser';
import deleteUser from './deleteUser';
import loginFromCreate from './loginFromCreate';
import loginFromedit from './loginFromEdit';
import addCourseToUser from './addCourseToUser';
import logoutFromDelete from './logoutFromDelete';
// Service manager
import searchServiceById from './searchServiceById'

export default function* () {
  // Juntar las sagas
  yield all([
    // User sagas
    editUser(),
    searchUser(),
    createUser(),
    deleteUser(),
    loginFromCreate(),
    loginFromedit(),
    addCourseToUser(),
    logoutFromDelete(),
    // Service sagas
    searchServices(),
    searchServiceById()
  ]);
}