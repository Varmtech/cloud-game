export const activeGameIndexSelector = (store) => store.GameReducer.activeGameIndex;
export const logsSelector = (store) => store.GameReducer.logs;
export const logsOsSelector = (store) => store.GameReducer.osLogs;
export const logsJoySelector = (store) => store.GameReducer.joyLogs;
export const gameIsReadyToPlaySelector = (store) => store.GameReducer.gameIsReadyToPlay;
