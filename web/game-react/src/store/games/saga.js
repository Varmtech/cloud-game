import { call, takeLatest, put } from 'redux-saga/effects';
import {GET_GAMES, setGamesAC} from "./actions";
import { rootApi } from "../../api";

function* getGames() {
  try {
    const { data } = yield call(rootApi.get, '/users/games');
    yield put(setGamesAC(data))
  } catch (e) {
    console.log('ERROR in login - ', e.message);
  }
}

export default function* GamesSaga() {
  yield takeLatest(GET_GAMES, getGames);
}
