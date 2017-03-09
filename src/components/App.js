import React            from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import styled           from 'styled-components';
import Navbar           from './shared/Navbar';
import HomePage         from './HomePage';
import AboutPage        from './AboutPage';
import AccountPage      from './AccountPage';
import AllPosts         from './AllPosts';
import AllVideos        from './AllVideos';
import AuthContainer    from '../containers/AuthContainer';
import AdminContainer   from '../containers/AdminContainer';
import SingleBlogPage   from './SingleBlogPage';
import VideoContainer   from '../containers/VideoContainer';

class App extends React.Component {
    componentDidMount() {
        this.props.addLocationToHistory(this.props.location.pathname);
    }
    componentWillReceiveProps(nextProps) {
        if (this.props.location.pathname !== nextProps.location.pathname) {
            window.scrollTo(0,0);
            this.props.addLocationToHistory(nextProps.location.pathname);
        }
    }
    render() {
        const {username, user, logout, lastRoute, allBlogs, allImages, allVideos} = this.props;
        return (
            <AppContainer>
                <Navbar username={username} logout={logout} />

                <Route exact path='/'
                    render={() => <HomePage allBlogs={allBlogs} allImages={allImages} allVideos={allVideos} />}
                />
                <Route exact path='/account'
                    render={() => <AccountPage user={user} />} 
                />
                <Route exact path='/about'
                    component={AboutPage}
                />
                <Route path='/admin'
                    component={AdminContainer}
                />
                <PrivateRoute path="/auth"
                    component={AuthContainer}
                    username={username}
                    lastRoute={lastRoute}
                />
                <Route exact path='/blog'
                    render={() => <AllPosts allBlogs={allBlogs} allImages={allImages} />}
                />
                <Route path='/blog/:id'
                    render={() => <SingleBlogPage allBlogs={allBlogs} allImages={allImages} />}
                />
                <Route exact path="/videos"
                    render={() => <AllVideos allVideos={allVideos} />}
                />
                <Route path="/watch/:type/:id" component={VideoContainer} />
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
    padding-bottom: 50px;
    font-size: 18px;
`;

export default withRouter(App);