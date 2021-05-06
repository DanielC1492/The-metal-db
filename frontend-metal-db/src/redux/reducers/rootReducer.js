import { combineReducers } from 'redux';
import userReducer from './userReducer';
import adminReducer from './adminReducer';
import shopReducer from './shopReducer';

const rootReducer = combineReducers({
    userReducer,
    adminReducer,
    shopReducer
});

export default rootReducer;