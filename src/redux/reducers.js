import { CHANGE_TASK_STATUS } from './actions';

const initialState = {
    tasks: {
        '23/11/2022': [
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
        ],
    },
};

function userReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_TASK_STATUS:
            const newState = JSON.parse(JSON.stringify(state));

            newState.tasks[action.payload.date].forEach((task) => {
                if (task.id === action.payload.id) {
                    task.status = !task.status;
                }
            });
            return newState;
        default:
            return state;
    }
}

export default userReducer;
