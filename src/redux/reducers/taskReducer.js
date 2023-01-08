import {
    CHANGE_TASK_STATUS,
    RESET_TASKS,
    SET_CURRENT_TASKS,
    SET_PREVIOUS_TASKS,
    SET_TASKS_BY_DATE
} from '../actions';

const initialState = {
    tasks: {},
    currentTasks: [],
    previousTasks: []
};

const getNewState = (state) => JSON.parse(JSON.stringify(state));

// eslint-disable-next-line default-param-last
function taskReducer(state = initialState, action) {
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

        case SET_CURRENT_TASKS: {
            const newState = getNewState(state);
            newState.currentTasks = [...action.payload];
            return newState;
        }

        case SET_PREVIOUS_TASKS: {
            const newState = getNewState(state);
            newState.previousTasks = [...action.payload];
            return newState;
        }

        case SET_TASKS_BY_DATE: {
            const newState = getNewState(state);
            newState.tasks[action.payload.date] = [...action.payload.tasks];
            return newState;
        }

        case RESET_TASKS: {
            return { ...initialState };
        }

        default:
            return state;
    }
}

export default taskReducer;
