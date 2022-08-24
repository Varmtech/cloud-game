import { call, takeLatest } from 'redux-saga/effects';
import {AUTH_USER, authUserSuccessAC, SAVE_USER, saveUserAC} from "./actions";
import { rootApi } from "../../api";
import {auth, signInWithGoogle} from "../../service/firebase";
import store from "../index";

function* authUser() {
  try {
    auth.onAuthStateChanged(function (user) {
      if (user) {
        const userData = {
          displayName: user.displayName,
          email: user.email,
          avatarUrl: user.photoURL,
        }
        localStorage.setItem('user', JSON.stringify(userData))
        store.dispatch(authUserSuccessAC(userData))
      } else {
        // No user is signed in
        // Let's sign them in
        signInWithGoogle()
            .then((result) => {
              if (result) {
                const userData = {
                  display_name: result.user.displayName,
                  email: result.user.email,
                  profile_url: result.user.photoURL,
                }
                localStorage.setItem('user', JSON.stringify(userData))
                store.dispatch(saveUserAC(userData))
                store.dispatch(authUserSuccessAC({displayName: userData.display_name, email: userData.email, avatarUrl: userData.profile_url}))
              }
            }).catch((error) => {
            console.log('error .. ', error)
            /*    // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...*/
        });
      }
    });
  } catch (e) {
    console.log('ERROR in login - ', e.message);
  }
}

function* authUserSuccess(action) {
  try {
    const { payload } = action;
    yield call(rootApi.post, '/users', { ...payload.userData });
  } catch (e) {
    console.log('ERROR in login - ', e.message);
  }
}


export default function* AuthSaga() {
  yield takeLatest(AUTH_USER, authUser);
  yield takeLatest(SAVE_USER, authUserSuccess);
}
