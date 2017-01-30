import React from 'react';

const SaveDataCheckbox = (props) => {
    return (
        <label>
            <input type="checkbox" id="saveData" onChange={props.handleCheck} /> Keep Me Logged In
        </label>
    );
};

export default SaveDataCheckbox;