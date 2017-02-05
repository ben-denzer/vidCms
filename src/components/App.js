import React            from 'react';
import {Route, Redirect, withRouter}from 'react-router-dom';
import styled           from 'styled-components';
import Navbar           from './shared/Navbar';
import HomePage         from './HomePage';
import AboutPage        from './static/AboutPage';
import AuthContainer    from '../containers/AuthContainer';

class App extends React.Component {
    componentDidMount() {
        this.props.addLocationToHistory(this.props.location.pathname);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.location.pathname !== nextProps.location.pathname) {
            this.props.addLocationToHistory(nextProps.location.pathname);
        }
    }
    render() {
        return (
            <AppContainer>
                <Navbar username={this.props.username} logout={this.props.logout} />

                <Route exact path='/' component={HomePage} />
                <Route exact path='/about' component={AboutPage} />
                <PrivateRoute
                    path="/auth"
                    component={AuthContainer}
                    username={this.props.username}
                    lastRoute={this.props.lastRoute}
                />

            </AppContainer>
        );
    }
};

const PrivateRoute = ({ path, username, component, lastRoute }) => {
    if (!username) return <Route path={path} component={component} />;
    return <Redirect to={lastRoute} />
};

const AppContainer = styled.div`
    width: 100%;
`;

export default withRouter(App);