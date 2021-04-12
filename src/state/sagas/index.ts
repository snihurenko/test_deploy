import { all } from 'redux-saga/effects';
import hotelsSaga from './hotels';

export default function* () {
  yield all([
    hotelsSaga()
  ]);
}
