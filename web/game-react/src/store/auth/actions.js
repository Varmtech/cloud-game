export const AUTH_USER = 'AUTH_USER';
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';

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