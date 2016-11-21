import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './userReducer';
import forms from './formsReducer';
import message from './messageReducer';
import content from './contentReducer';

const rootReducer = combineReducers({
    user,
    forms,
    message,
    content,
    routing: routerReducer
});

export default rootReducer;