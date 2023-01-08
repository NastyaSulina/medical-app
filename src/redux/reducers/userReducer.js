import { SET_USER_EMAIL, SET_USER_ID, SET_USER_NAME, RESET_USER_INFO } from '../actions';

const initialState = {
    isSignedIn: false,
    userName: '',
    email: '',
    userId: 0,
    fontSize: 'normal',
};

// eslint-disable-next-line default-param-last
function userReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER_EMAIL: {
            const newState = { ...state };

            newState.email = action.payload;
            return newState;
        }

        case SET_USER_NAME: {
            const newState = { ...state };
            newState.userName = action.payload;
            return newState;
        }

        case SET_USER_ID: {
            const newState = { ...state };
            newState.userId = action.payload;
            return newState;
        }

        case RESET_USER_INFO: {
            return { ...initialState };
        }

        default:
            return state;
    }
}

export default userReducer;
