export const SET_GAME_LIST = 'SET_GAME_LIST';
export const SET_ACTIVE_GAME_INDEX = 'SET_ACTIVE_GAME_INDEX';


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