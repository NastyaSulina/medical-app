export const SIGN_IN = 'SIGN_IN';
export const SET_SELECTED_DATE = 'SET_SELECTED_DATE';
export const SET_START_TAKING_SELECTED_DATE = 'SET_START_TAKING_SELECTED_DATE';
export const RESET_COMMON_INFO = 'RESET_COMMON_INFO';
export const ADD_IMAGE = 'ADD_IMAGE';

export const signIn = (isSignedIn) => ({
    type: SIGN_IN,
    payload: isSignedIn,
});

export const setSelectedDate = (date) => ({
    type: SET_SELECTED_DATE,
    payload: date,
});

export const setStartTakingSelectedDate = (date) => ({
    type: SET_START_TAKING_SELECTED_DATE,
    payload: date,
});

export const resetCommonInfo = () => ({
    type: RESET_COMMON_INFO,
});

export const addImage = (newImageURI) => ({
    type: ADD_IMAGE,
    payload: newImageURI,
});
