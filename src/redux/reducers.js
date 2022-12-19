import {
    CHANGE_TASK_STATUS,
    SET_SELECTED_DATE,
    SET_TASKS_BY_DATE,
    SET_USER_EMAIL,
    SET_USER_ID,
    SET_USER_NAME,
    SIGN_IN,
    RESET_TASKS
} from './actions';
import { getFormattedDate } from '../transform/dateFormatter';

const initialState = {
    isSignedIn: false,
    userName: '',
    email: '',
    userId: 0,
    selectedDate: getFormattedDate(),
    fontSize: 'normal',
    tasks: {},
    currentTasks: {},
    previousTasks: {},
};

const getNewState = (state) => JSON.parse(JSON.stringify(state));

function userReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TASK_STATUS: {
            const newState = getNewState(state);

            newState.tasks[action.payload.date].forEach((task) => {
                if (task.id === action.payload.id) {
                    task.status = !task.status;
                }
            });
            return newState;
        }
        case SET_USER_EMAIL: {
            const newState = getNewState(state);

            newState.email = action.payload;
            return newState;
        }
        case SET_SELECTED_DATE: {
            const newState = getNewState(state);

            newState.selectedDate = action.payload;
            return newState;
        }
        case SET_USER_NAME: {
            const newState = getNewState(state);
            newState.userName = action.payload;
            return newState;
        }
        case SIGN_IN: {
            const newState = getNewState(state);
            newState.isSignedIn = action.payload;
            return newState;
        }
        case SET_USER_ID: {
            const newState = getNewState(state);
            newState.userId = action.payload;
            return newState;
        }
        case SET_TASKS_BY_DATE: {
            const newState = getNewState(state);
            newState.tasks[action.payload.date] = [...action.payload.tasks];
            return newState;
        }
        case RESET_TASKS: {
            const newState = getNewState(state);
            newState.tasks = {};
            return newState;
        }

        default:
            return state;
    }
}

export default userReducer;
