export const userDataSelector = (store) => store.AuthReducer.userData;
export const guestUserDataSelector = (store) => store.AuthReducer.guestUserData;
export const authUserFailedSelector = (store) => store.AuthReducer.authUserFailed;
