import React from 'react';

const SaveDataCheckbox = (props) => {
    return (
        <label>
            Keep Me Logged In <input type="checkbox" id="saveData" onChange={props.handleCheck} />
        </label>
    );
};

export default SaveDataCheckbox;