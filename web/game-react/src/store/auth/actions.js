export const AUTH_USER = 'AUTH_USER';
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
export const SAVE_USER = 'SAVE_USER';

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

export function saveUserAC(userData) {
    return {
        type: SAVE_USER,
        payload: { userData },
    };
}