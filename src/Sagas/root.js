import { all } from 'redux-saga/effects';
// Mis sagas
import searchServices from './searchServices';
// User Manager
import searchUser from './searchUser';
import createUser from './createUser';
import editUser from './editUser';
import loginFromCreate from './loginFromCreate';

export default function* () {
  yield all([
    // Juntar las sagas
    // User sagas
    editUser(),
    searchUser(),
    createUser(),
    loginFromCreate(),

    // Service sagas
    searchServices()
  ]);
}