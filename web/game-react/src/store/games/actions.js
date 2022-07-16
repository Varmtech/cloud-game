export const SET_GAME_LIST = 'SET_GAME_LIST';
export const SET_ACTIVE_GAME_INDEX = 'SET_ACTIVE_GAME_INDEX';
export const GAME_IS_STARTED = 'GAME_IS_STARTED';
export const SET_OS_LOG = 'SET_OS_LOG';
export const SET_JOYSTICK_LOG = 'SET_JOYSTICK_LOG';
export const SET_LOG = 'SET_LOG';


export function setGamesAC(gameList) {
    return {
        type: SET_GAME_LIST,
        payload: { gameList },
    };
}

export function setActiveGameIndexAC(gameIndex) {
    return {
        type: SET_ACTIVE_GAME_INDEX,
        payload: { gameIndex },
    };
}

export function setGameIsStarted(gameIndex) {
    return {
        type: SET_ACTIVE_GAME_INDEX,
        payload: { gameIndex },
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