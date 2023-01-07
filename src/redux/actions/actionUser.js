export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_ID = 'SET_USER_ID';
export const RESET_USER_INFO = 'RESET_USER_INFO';

export const setEmail = (email) => ({
    type: SET_USER_EMAIL,
    payload: email,
});

export const setUserName = (userName) => ({
    type: SET_USER_NAME,
    payload: userName,
});

export const setUserId = (id) => ({
    type: SET_USER_ID,
    payload: id,
});

export const resetUserInfo = () => ({
    type: RESET_USER_INFO,
});
