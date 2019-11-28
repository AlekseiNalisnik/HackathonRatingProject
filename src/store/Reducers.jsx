import { combineReducers } from 'redux';
import { authReducer } from './Auth/Reducers';
import { regReducer } from './Reg/Reducers';
import { newMainReducer } from './Main/Reducers';

export default combineReducers({
    auth: authReducer,
    reg: regReducer,
    newMain: newMainReducer
});