import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducer';
import taskReducer from './reducers/taskReducer';
import commonReducer from './reducers/commonReducer';

const rootReducer = combineReducers({
    user: userReducer,
    task: taskReducer,
    common: commonReducer,
});

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
