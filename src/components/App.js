import React            from 'react';
import {Match}          from 'react-router';
import styled           from 'styled-components';
import Navbar           from './shared/Navbar';
import HomePage         from './HomePage';
import AboutPage        from './static/AboutPage';
import AuthContainer    from '../containers/AuthContainer';

const App = (props) => {
    return (
        <AppContainer>
            <Navbar username={props.username} logout={props.logout} />

            <Match exactly pattern='/'          component={HomePage} />
            <Match exactly pattern='/about'     component={AboutPage} />
            <Match pattern='/auth'              component={AuthContainer} />
        </AppContainer>
    );
};

const AppContainer = styled.div`
    width: 100%;
`;

export default App;