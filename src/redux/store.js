import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import combinedReducer from './reducers';

const rootReducer = combinedReducer;

const Store = createStore(rootReducer, applyMiddleware(thunk));

export default Store;
