import { combineReducers } from 'redux';
import user         from './userReducer';
import forms        from './formsReducer';
import message      from './messageReducer';
import content      from './contentReducer';
import admin        from './adminReducer';
import route        from './routeReducer';
 
const rootReducer = combineReducers({
    user,
    forms,
    message,
    content,
    admin,
    route
});

export default rootReducer;