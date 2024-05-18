import { all } from 'redux-saga/effects';
import AuthSaga from '../auth/saga';
import GamesSaga from "../games/saga";

export default function* rootSaga() {
  yield all([
    AuthSaga(),
    GamesSaga(),
  ]);
}
