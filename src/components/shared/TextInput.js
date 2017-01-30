import React from 'react';
import {FormLabel, FormLabelSpan, FormInput} from '../../styles/authFormStyles';

const TextInput = (props) => {
    return (
        <FormLabel>
            <FormLabelSpan>{props.label || props.id[0].toUpperCase().concat(props.id.slice(1))}</FormLabelSpan>
            <FormInput
                id={props.id}
                type={/password/.test(props.id) ? 'password' : 'text'}
                value={props.val}
                onChange={props.handleChange}
            />
        </FormLabel>
    );
};

export default TextInput;