import { call, takeLatest } from 'redux-saga/effects';
import { GET_GAMES } from "./actions";
import { rootApi } from "../../api";

function* getGames() {
  try {
    console.log('handle to get games . ')
    const response = yield call(rootApi.get, '/users/games');
    console.log('response  ==== = ==== ', response)
  } catch (e) {
    console.log('ERROR in login - ', e.message);
  }
}

export default function* GamesSaga() {
  yield takeLatest(GET_GAMES, getGames);
}
