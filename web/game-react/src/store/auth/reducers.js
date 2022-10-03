import {AUTH_USER_FAILED, AUTH_USER_SUCCESS, SET_GUEST_USER} from "./actions";

const initialState = {
    userData: null,
    guestUserData: null,
    authUserFailed: false
};

export default (state = initialState, { type, payload }) => {
    let newState = { ...state };
    switch (type) {
        case AUTH_USER_SUCCESS: {
            newState.userData = payload.userData;
            return newState;
        }
        case SET_GUEST_USER: {
            newState.guestUserData = payload.userData;
            return newState;
        }
        case AUTH_USER_FAILED: {
            newState.authUserFailed = true;
            return newState;
        }

        default:
            return state;
    }
};
