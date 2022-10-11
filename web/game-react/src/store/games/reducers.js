import {
    GET_GAMES,
    SET_ACTIVE_GAME,
    SET_GAME_IS_READY_TO_PLAY,
    SET_GAME_SHARE_LINK,
    SET_GAMES,
    SET_JOYSTICK_LOG,
    SET_LOG,
    SET_OS_LOG,
    SET_PLAYERS_LIST,
} from './actions';

const initialState = {
    gameList: [],
    activeGame: null,
    gameIsStarted: false,
    logs: [],
    joyLogs: [],
    osLogs: '',
    gameShareLink: '',
    gameIsReadyToPlay: false,
    getGamesLoading: false,
    playersList: []
};

export default (state = initialState, { type, payload }) => {
    let newState = { ...state };
    switch (type) {
        case GET_GAMES: {
            newState.getGamesLoading = true
            return newState;
        }
        case SET_GAMES: {
            newState.gameList = payload.gameList;
            newState.activeGame = payload.gameList[0];
            newState.getGamesLoading = false
            return newState;
        }
        case SET_GAME_SHARE_LINK: {
            newState.gameShareLink = payload.link;
            return newState;
        }
        case SET_PLAYERS_LIST: {
            newState.playersList = Object.values(payload.players);
            return newState;
        }
        case SET_ACTIVE_GAME: {
            newState.activeGame = payload.game;
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
