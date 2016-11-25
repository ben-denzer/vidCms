import React from 'react';

const TextInput = (props) => {
    return (
        <label className="text-input">
            <span>{props.label || props.id[0].toUpperCase().concat(props.id.slice(1))}</span>
            <input
                id={props.id}
                type={props.type || 'text'}
                value={props.val}
                onChange={props.handleChange}
            />
        </label>
    );
};

export default TextInput;