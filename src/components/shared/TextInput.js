import React from 'react';
import {FormLabel, FormLabelSpan, FormInput} from '../../styles/authFormStyles';

const TextInput = (props) => {
    const inputType = () => {
        if (/password/i.test(props.id)) return 'password';
        if (/email/.test(props.id)) return 'email';
        return 'text';
    }
    return (
        <FormLabel>
            <FormLabelSpan>{props.label || props.id[0].toUpperCase().concat(props.id.slice(1))}</FormLabelSpan>
            <FormInput
                id={props.id}
                type={inputType()}
                value={props.val}
                onChange={props.handleChange}
            />
        </FormLabel>
    );
};

export default TextInput;