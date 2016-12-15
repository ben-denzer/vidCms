import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user         from './userReducer';
import forms        from './formsReducer';
import message      from './messageReducer';
import content      from './contentReducer';
import comments     from './commentsReducer';
import admin        from './adminReducer';

const rootReducer = combineReducers({
    user,
    forms,
    message,
    content,
    comments,
    admin,
    routing: routerReducer
});

export default rootReducer;