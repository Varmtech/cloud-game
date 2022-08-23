export const GET_GAMES = 'GET_GAMES';
export const SET_ACTIVE_GAME_INDEX = 'SET_ACTIVE_GAME_INDEX';
export const SET_OS_LOG = 'SET_OS_LOG';
export const SET_JOYSTICK_LOG = 'SET_JOYSTICK_LOG';
export const SET_LOG = 'SET_LOG';
export const SET_GAME_IS_READY_TO_PLAY = 'SET_GAME_IS_READY_TO_PLAY';

export function getGamesAC() {
    return {
        type: GET_GAMES,
    };
}

export function setActiveGameIndexAC(gameIndex) {
    return {
        type: SET_ACTIVE_GAME_INDEX,
        payload: { gameIndex },
    };
}

export function setGameIsReadyToPlayAC(state) {
    return {
        type: SET_GAME_IS_READY_TO_PLAY,
        payload: { state },
    };
}

export function setLogAC(log) {
    return {
        type: SET_LOG,
        payload: { log },
    };
}

export function setOsLogAC(log) {
    return {
        type: SET_OS_LOG,
        payload: { log },
    };
}

export function setJoystickLogAC(log) {
    return {
        type: SET_JOYSTICK_LOG,
        payload: { log },
    };
}