import React            from 'react';
import {Match}          from 'react-router';
import styled           from 'styled-components';
import Navbar           from './shared/Navbar';
import HomePage         from './HomePage';
import AboutPage        from './static/AboutPage';

const App = (props) => {
    console.log('in app', props.allBlogs);
    return (
        <AppContainer>
            <Navbar name={props.name} />

            <Match exactly pattern='/'          component={ HomePage } />
            <Match exactly pattern='/about'     component={ AboutPage } />
        </AppContainer>
    );
};

const AppContainer = styled.div`
    width: 100%;
    background-color: #ccc;
`;

export default App;