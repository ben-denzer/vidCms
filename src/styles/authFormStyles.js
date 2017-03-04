import styled from 'styled-components';

export const FormBox = styled.form`
    background-color: #fff;
    width: 80%;
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    padding: 15px;
`;

export const ErrorBox = styled.div`
    color: red;
`;

export const FormTitle = styled.h1`
    font-size: 22px;
    font-weight: bold;
    margin-top: 0;
    margin-bottom: 5px;
    align-self: center;
`;

export const FormLabel = styled.label`
    font-size: 18px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
`;

export const FormLabelSpan = styled.span`
    align-self: flex-start;
`;

export const FormInput = styled.input`
    width: 100%;
`;

