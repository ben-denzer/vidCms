import React from 'react';
import {PageTitle} from '../styles/share';

const HomePage = (props) => {
    return (
        <PageTitle>Hi {props.name}</PageTitle>
    );
};

export default HomePage;