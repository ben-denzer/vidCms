import {PUSH_LOCATION} from '../constants/actionTypes';

const addLocationToHistory = (pathname) => {
    return {type: PUSH_LOCATION, pathname};
};

export {addLocationToHistory};