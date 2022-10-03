export const AUTH_USER = 'AUTH_USER';
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
export const SET_GUEST_USER = 'SET_GUEST_USER';
export const SAVE_USER = 'SAVE_USER';
export const AUTH_USER_FAILED = 'AUTH_USER_FAILED';

export function authUserAC(userData) {
    return {
        type: AUTH_USER,
        payload: { userData },
    };
}

export function authUserSuccessAC(userData) {
    return {
        type: AUTH_USER_SUCCESS,
        payload: { userData },
    };
}

export function authUserFailedAC() {
    return {
        type: AUTH_USER_FAILED,
    };
}

export function setGuestUserAC(userData) {
    return {
        type: SET_GUEST_USER,
        payload: { userData },
    };
}

export function saveUserAC(userData) {
    return {
        type: SAVE_USER,
        payload: { userData },
    };
}