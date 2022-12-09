export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_SELECTED_DATE = 'SET_SELECTED_DATE';
export const SET_USER_NAME = 'SET_USER_NAME';

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

export const setSelectedDate = (date) => {
    return {
        type: SET_SELECTED_DATE,
        payload: date,
    };
};

export const setUserName = (userName) => {
    return {
        type: SET_USER_NAME,
        payload: userName,
    };
};
