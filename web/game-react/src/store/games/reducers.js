import {SET_ACTIVE_GAME_INDEX, SET_GAME_LIST} from './actions';

const initialState = {
    gameList: [],
    activeGameIndex: 0
};

export default (state = initialState, { type, payload }) => {
    let newState = { ...state };
    switch (type) {
        case SET_GAME_LIST: {
            newState.gameList = payload.gameList;
            return newState;
        }
        case SET_ACTIVE_GAME_INDEX: {
            newState.activeGameIndex = payload.gameIndex;
            return newState;
        }
        default:
            return state;
    }
};
