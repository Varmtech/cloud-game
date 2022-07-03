export const SET_GAME_LIST = 'SET_GAME_LIST';
export const SET_ACTIVE_GAME_INDEX = 'SET_ACTIVE_GAME_INDEX';
export const GAME_IS_STARTED = 'GAME_IS_STARTED';


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

export function setGameIsStarted(gameStarted) {
    return {
        type: GAME_IS_STARTED,
        payload: { gameStarted },
    };
}