export const gameListSelector = (store) => store.GameReducer.gameList;
export const activeGameIndexSelector = (store) => store.GameReducer.activeGameIndex;
export const gameIsStarted = (store) => store.GameReducer.gameIsStarted;
export const logsSelector = (store) => store.GameReducer.logs;
export const logsOsSelector = (store) => store.GameReducer.osLogs;
export const logsJoySelector = (store) => store.GameReducer.joyLogs;
