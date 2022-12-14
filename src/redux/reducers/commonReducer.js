import {
    SET_SELECTED_DATE,
    SET_START_TAKING_SELECTED_DATE,
    SIGN_IN,
    RESET_COMMON_INFO,
    ADD_IMAGE,
    DELETE_IMAGE
} from '../actions';
import { getDateDefaultFromJSDate } from '../../transform/dateFormatter';

const initialState = {
    isSignedIn: false,
    selectedDate: getDateDefaultFromJSDate(),
    startTakingSelectedDate: getDateDefaultFromJSDate(),
    fontSize: 'normal',
    images: []
};

const getNewState = (state) => JSON.parse(JSON.stringify(state));

// eslint-disable-next-line default-param-last
function commonReducer(state = initialState, action) {
    switch (action.type) {
        case SET_SELECTED_DATE: {
            const newState = getNewState(state);
            newState.selectedDate = action.payload;
            return newState;
        }

        case SET_START_TAKING_SELECTED_DATE: {
            const newState = getNewState(state);
            newState.startTakingSelectedDate = action.payload;
            return newState;
        }

        case SIGN_IN: {
            const newState = getNewState(state);
            newState.isSignedIn = action.payload;
            return newState;
        }

        case RESET_COMMON_INFO: {
            return { ...initialState };
        }

        case ADD_IMAGE: {
            const newState = getNewState(state);
            newState.images.push(action.payload);
            return newState;
        }

        case DELETE_IMAGE: {
            const newState = getNewState(state);
            newState.images.splice(state.images.indexOf(action.payload), 1);
            return newState;
        }

        default:
            return state;
    }
}

export default commonReducer;
