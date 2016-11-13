import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './userReducer';
import forms from './formsReducer';
import message from './messageReducer';

const rootReducer = combineReducers({
    user,
    forms,
    message,
    routing: routerReducer
});

export default rootReducer;