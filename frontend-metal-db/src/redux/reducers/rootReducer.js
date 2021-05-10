import { combineReducers } from 'redux';
import userReducer from './userReducer';
import adminReducer from './adminReducer';
import shopReducer from './shopReducer';
import saveCartReducer from './saveCartReducer';
import bandsReducer from './bandsReducer';

const rootReducer = combineReducers({
    userReducer,
    adminReducer,
    shopReducer,
    saveCartReducer,
    bandsReducer
});

export default rootReducer;