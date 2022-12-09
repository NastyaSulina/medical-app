import { CHANGE_TASK_STATUS, SET_SELECTED_DATE, SET_USER_EMAIL, SET_USER_NAME } from './actions';
import { getFormattedDate } from '../transform/dateFormatter';

const initialState = {
    email: 'qwerty123@gmail.com',
    userName: 'Анна',
    selectedDate: getFormattedDate(),
    fontSize: 'normal',
    tasks: {
        '10/12/2022': [
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
                status: true,
                time: '17:00',
            },
        ],
    },
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

        default:
            return state;
    }
}

export default userReducer;
