import { combineReducers } from 'redux';
import user         from './userReducer';
import forms        from './formsReducer';
import message      from './messageReducer';
import content      from './contentReducer';
import comments     from './commentsReducer';
import admin        from './adminReducer';
import trashCan     from './trashCanReducer';
import route        from './routeReducer';

const rootReducer = combineReducers({
    user,
    forms,
    message,
    content,
    comments,
    admin,
    trashCan,
    route
});

export default rootReducer;