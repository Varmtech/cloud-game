import { combineReducers } from 'redux';
import GameReducer from './games/reducers'
import AuthReducer from './auth/reducers'

export default combineReducers({
    GameReducer,
    AuthReducer,
});
