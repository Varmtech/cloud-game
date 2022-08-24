export const GET_GAMES = 'GET_GAMES';
export const SET_GAMES = 'SET_GAMES';
export const SET_ACTIVE_GAME = 'SET_ACTIVE_GAME';
export const SET_OS_LOG = 'SET_OS_LOG';
export const SET_JOYSTICK_LOG = 'SET_JOYSTICK_LOG';
export const SET_LOG = 'SET_LOG';
export const SET_GAME_IS_READY_TO_PLAY = 'SET_GAME_IS_READY_TO_PLAY';

export function getGamesAC() {
    return {
        type: GET_GAMES,
    };
}

export function setGamesAC(gameList) {
    return {
        type: SET_GAMES,
        payload: { gameList }
    };
}

export function setActiveGameAC(game) {
    return {
        type: SET_ACTIVE_GAME,
        payload: { game },
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