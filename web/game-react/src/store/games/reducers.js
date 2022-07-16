import {GAME_IS_STARTED, SET_ACTIVE_GAME_INDEX, SET_GAME_LIST, SET_JOYSTICK_LOG, SET_LOG, SET_OS_LOG} from './actions';

const initialState = {
    gameList: [],
    activeGameIndex: 0,
    gameIsStarted: false,
    logs: [],
    joyLogs: [],
    osLogs: ''
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
        case GAME_IS_STARTED: {
            newState.gameIsStarted = payload.gameStarted;
            return newState;
        }
        case SET_LOG: {
            newState.logs = [...newState.logs, payload.log];
            return newState;
        }
        case SET_OS_LOG: {
            newState.osLogs = payload.log;
            return newState;
        }
        case SET_JOYSTICK_LOG: {
            newState.joyLogs = [...newState.joyLogs, payload.log];
            return newState;
        }
        default:
            return state;
    }
};
