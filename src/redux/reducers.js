import {
    CHANGE_TASK_STATUS,
    SET_SELECTED_DATE,
    SET_TASKS_BY_DATE,
    SET_USER_EMAIL,
    SET_USER_ID,
    SET_USER_NAME,
    SIGN_IN,
    RESET_TASKS,
    SET_CURRENT_TASKS
} from './actions';
import { getFormattedDate } from '../transform/dateFormatter';

const initialState = {
    isSignedIn: false,
    userName: '',
    email: '',
    userId: 0,
    selectedDate: getFormattedDate(),
    fontSize: 'normal',
    tasks: {
        '2022-12-13': [
            {
                id: 1,
                type: 'medicine',
                name: 'Витамин D',
                status: false,
                time: '14:00',
            },
            {
                id: 2,
                type: 'medicine',
                name: 'Витамин C',
                status: true,
                time: '14:00',
            },
            {
                id: 3,
                type: 'symptom',
                name: 'Настроение',
                status: false,
                time: '15:00',
            },
            {
                id: 4,
                type: 'symptom',
                name: 'Давление',
                status: false,
                time: '17:00',
            },
            {
                id: 5,
                type: 'symptom',
                name: 'Температура',
                status: false,
                time: '17:00',
            },
        ],
    },
    currentTasks: [],
    previousTasks: [],
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
        case SET_CURRENT_TASKS: {
            const newState = getNewState(state);
            newState.currentTasks = [...action.payload];
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
