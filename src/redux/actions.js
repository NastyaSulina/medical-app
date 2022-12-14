export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_SELECTED_DATE = 'SET_SELECTED_DATE';
export const SET_USER_NAME = 'SET_USER_NAME';
export const SIGN_IN = 'SIGN_IN';

export const changeStatus = (data) => ({
    type: CHANGE_TASK_STATUS,
    payload: {
        id: data.id,
        date: data.date,
    },
});

export const setEmail = (email) => ({
    type: SET_USER_EMAIL,
    payload: email,
});

export const setSelectedDate = (date) => ({
    type: SET_SELECTED_DATE,
    payload: date,
});

export const setUserName = (userName) => ({
    type: SET_USER_NAME,
    payload: userName,
});

export const signIn = (isSignedIn) => ({
    type: SIGN_IN,
    payload: isSignedIn,
});
