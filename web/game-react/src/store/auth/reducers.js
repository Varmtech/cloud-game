import {AUTH_USER_SUCCESS} from "./actions";

const initialState = {
    userData: null,
};

export default (state = initialState, { type, payload }) => {
    let newState = { ...state };
    switch (type) {
        case AUTH_USER_SUCCESS: {
            newState.userData = payload.userData;
            return newState;
        }

        default:
            return state;
    }
};
