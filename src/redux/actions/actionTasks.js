export const SET_TASKS_BY_DATE = 'SET_TASKS_BY_DATE';
export const SET_CURRENT_TASKS = 'SET_CURRENT_TASKS';
export const SET_PREVIOUS_TASKS = 'SET_PREVIOUS_TASKS';
export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';

export const RESET_TASKS = 'RESET_TASKS';

export const changeTaskStatus = (data) => ({
    type: CHANGE_TASK_STATUS,
    payload: {
        id: data.id,
        date: data.date,
    },
});

export const setCurrentTasks = (tasks) => ({
    type: SET_CURRENT_TASKS,
    payload: tasks,
});

export const setPreviousTasks = (tasks) => ({
    type: SET_PREVIOUS_TASKS,
    payload: tasks,
});

export const setTasksByDate = (date, tasks) => ({
    type: SET_TASKS_BY_DATE,
    payload: {
        date,
        tasks,
    },
});

export const resetTasks = () => ({
    type: RESET_TASKS,
});
