import {CLEAR_MESSAGE} from '../constants/actionTypes';

const clearMessage = () => {
    return {type: CLEAR_MESSAGE};
};

const setMessage = (dispatch) => {
    setTimeout(() => dispatch(clearMessage()), 10000);
}

export {setMessage, clearMessage};