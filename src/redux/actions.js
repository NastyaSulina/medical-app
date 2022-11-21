export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';

export const changeStatus = (data) => {
    return {
        type: CHANGE_TASK_STATUS,
        payload: {
            id: data.id,
            date: data.date,
        },
    };
};
