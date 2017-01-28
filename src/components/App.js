import React from 'react';
import {Match, Link} from 'react-router';
import styled from 'styled-components';
import HomePage from './HomePage';
import Page2 from './Page2';

const App = (props) => {
    return (
        <AppContainer>
            <Link to='/'>Home</Link>
            <Link to='/Page2'>Page 2</Link>
            <Match exactly pattern='/' component={HomePage} />
            <Match exactly pattern='/Page2' component={Page2} />
        </AppContainer>
    );
};

const AppContainer = styled.div`
    width: 100%;
    background-color: #ccc;
`;

export default App;