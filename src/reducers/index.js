import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user         from './userReducer';
import forms        from './formsReducer';
import message      from './messageReducer';
import content      from './contentReducer';
import comments     from './commentsReducer';

const rootReducer = combineReducers({
    user,
    forms,
    message,
    content,
    comments,
    routing: routerReducer
});

export default rootReducer;