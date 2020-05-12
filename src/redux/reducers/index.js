import { combineReducers } from 'redux';
import incrementReducer from './increment';

export default combineReducers({
    increment: incrementReducer
});