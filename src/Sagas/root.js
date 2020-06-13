import { all } from 'redux-saga/effects';
// Mis sagas
import searchServices from './searchServices';
// User Manager
import searchUser from './searchUser';
import createUser from './createUser';
import loginFromCreate from './loginFromCreate';

export default function* () {
  yield all([
    // Juntar las sagas
    searchUser(),
    createUser(),
    loginFromCreate(),
    searchServices()
  ]);
}