export const SET_USER_EMAIL = 'SET_USER_EMAIL';

export const setEmail = email => dispatch => {
    dispatch({
        type: SET_USER_EMAIL,
        payload: email,
    })
}