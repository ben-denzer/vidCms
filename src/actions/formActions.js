import * as types from '../constants/actionTypes';

function handleTextChange(inputId, inputVal) {
    return {type: types.TEXT_CHANGE, inputId, inputVal};
};

function handleCheck(newVal) {
    return {type: types.SAVE_DATA_CLICKED, newVal};
}

export {handleTextChange, handleCheck};