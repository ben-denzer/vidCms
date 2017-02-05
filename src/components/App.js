import React            from 'react';
import {Route}          from 'react-router-dom';
import styled           from 'styled-components';
import Navbar           from './shared/Navbar';
import HomePage         from './HomePage';
import AboutPage        from './static/AboutPage';
import AuthContainer    from '../containers/AuthContainer';

const App = (props) => {
    return (
        <AppContainer>
            <Navbar username={props.username} logout={props.logout} />

            <Route exact path='/'          component={HomePage} />
            <Route exact path='/about'     component={AboutPage} />
            <Route path='/auth'              component={AuthContainer} />
        </AppContainer>
    );
};

const AppContainer = styled.div`
    width: 100%;
`;

export default App;