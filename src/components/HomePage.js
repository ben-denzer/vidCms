import React from 'react';
import {PageTitle, PageHeadline, ContentContainer} from '../styles/share';

const HomePage = (props) => {
    return (
        <div>
            <PageTitle>NodeReact.com</PageTitle>
            <PageHeadline>JavaScript === Life</PageHeadline>
            <ContentContainer></ContentContainer>
        </div>
    );
};

export default HomePage;