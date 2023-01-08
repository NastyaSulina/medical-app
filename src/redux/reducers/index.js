import { combineReducers } from 'redux';
import userReducer from './userReducer';
import taskReducer from './taskReducer';
import commonReducer from './commonReducer';

export default combineReducers({
    userReducer,
    taskReducer,
    commonReducer
});