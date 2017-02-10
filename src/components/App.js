import React            from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import styled           from 'styled-components';
import Navbar           from './shared/Navbar';
import HomePage         from './HomePage';
import AboutPage        from './static/AboutPage';
import AuthContainer    from '../containers/AuthContainer';
import AdminContainer   from '../containers/AdminContainer';

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
        const {username, logout, lastRoute, allBlogs, allImages, allVideos} = this.props;
        return (
            <AppContainer>
                <Navbar username={username} logout={logout} />

                <Route exact path='/'
                    render={() => {
                        return (
                            <HomePage
                                allBlogs={allBlogs}
                                allImages={allImages}
                                allVideos={allVideos}
                            />
                        );
                    }}
                />
                <Route exact path='/about' component={AboutPage} />
                <PrivateRoute
                    path="/auth"
                    component={AuthContainer}
                    username={username}
                    lastRoute={lastRoute}
                />
                <Route path='/admin' component={AdminContainer} />

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
    background-color: #ddd;
    min-height: 100vh;
`;

export default withRouter(App);