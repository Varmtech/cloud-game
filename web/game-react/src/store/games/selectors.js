export const activeGameSelector = (store) => store.GameReducer.activeGame;
export const logsSelector = (store) => store.GameReducer.logs;
export const logsOsSelector = (store) => store.GameReducer.osLogs;
export const logsJoySelector = (store) => store.GameReducer.joyLogs;
export const gameIsReadyToPlaySelector = (store) => store.GameReducer.gameIsReadyToPlay;
export const gameListSelector = (store) => store.GameReducer.gameList;
export const gameLoadingSelector = (store) => store.GameReducer.getGamesLoading;
export const gameShareLinkSelector = (store) => store.GameReducer.gameShareLink;
