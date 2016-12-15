//import {ADMIN_DATA_SUCCESS, AUTH_ERROR, NEW_MESSAGE} from '../constants/actionTypes';
import * as types from '../constants/actionTypes';
import {apiPromise} from './apiPromise';

const getAdminData = (token, dispatch) => {
    return (dispatch) => {
        apiPromise({token}, 'admin/getData').then(
            (allData) => {
                return dispatch({type: types.ADMIN_DATA_SUCCESS, allData})
            },
            (err) => {
                if (err === 'unauthorized') {
                    return dispatch({type: types.NEW_MESSAGE, error: 'You need to be logged in to access this.'});
                } else {
                    return dispatch({type: types.NEW_MESSAGE, messageType: 'error', text: 'Network Error, Please Try Again'});
                }
            }
        )
    }
}

export {getAdminData};