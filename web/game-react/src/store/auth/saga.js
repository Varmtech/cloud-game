import { put, call, takeLatest } from 'redux-saga/effects';
import { AUTH_USER } from "./actions";
import { rootApi } from "../../api";

function* getMembers(action) {
  try {
    const { payload } = action;
    const userAuthData = {
      displayName: payload.userData.displayName,
      email: payload.userData.email,
      photoUrl: payload.userData.photoURL,
    }
    yield call(rootApi.post, '/users', { ...userAuthData });
  } catch (e) {
    console.log('ERROR in login - ', e.message);
  }
}


export default function* MembersSaga() {
  yield takeLatest(AUTH_USER, getMembers);
}
