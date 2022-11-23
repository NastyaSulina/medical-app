export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';

export const changeStatus = (data) => {
    return {
        type: CHANGE_TASK_STATUS,
        payload: {
            id: data.id,
            date: data.date,
        },
    };
};

export const setEmail = (email) => {
    return {
        type: SET_USER_EMAIL,
        payload: email,
    };
};
