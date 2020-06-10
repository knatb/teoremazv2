import { all } from 'redux-saga/effects';
// Mis sagas
import searchServices from './searchServices';

export default function* () {
  yield all([
    // Juntar las sagas
    searchServices()
  ]);
}