import {
    SET_ACTIVE_GAME_INDEX,
    SET_GAME_IS_READY_TO_PLAY,
    SET_JOYSTICK_LOG,
    SET_LOG,
    SET_OS_LOG,
} from './actions';

const initialState = {
    gameList: [],
    activeGameIndex: 1,
    gameIsStarted: false,
    logs: [],
    joyLogs: [],
    osLogs: '',
    gameIsReadyToPlay: false
};

export default (state = initialState, { type, payload }) => {
    let newState = { ...state };
    switch (type) {
        case SET_ACTIVE_GAME_INDEX: {
            newState.activeGameIndex = payload.gameIndex;
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
        case SET_GAME_IS_READY_TO_PLAY: {
            newState.gameIsReadyToPlay = payload.state;
            return newState;
        }
        default:
            return state;
    }
};
