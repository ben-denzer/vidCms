import React            from 'react';
import {Route, Redirect, withRouter} from 'react-router-dom';
import styled           from 'styled-components';

import AboutPage        from './AboutPage';
import AccountPage      from './AccountPage';
import AdminContainer   from '../containers/AdminContainer';
import AllPosts         from './AllPosts';
import AllVideos        from './AllVideos';
import AuthContainer    from '../containers/AuthContainer';
import ChangePwForm     from './account/ChangePwForm';
import HomePage         from './HomePage';
import MessageBar       from './shared/MessageBar';
import Navbar           from './shared/Navbar';
import SingleBlogPage   from './SingleBlogPage';
import VideoContainer   from '../containers/VideoContainer';

class App extends React.Component {
    componentDidMount() {
        this.props.addLocationToHistory(this.props.location.pathname);
    }
    componentWillReceiveProps(nextProps) {
        const {addLocationToHistory, location, push} = this.props;

        if (location.pathname !== nextProps.location.pathname) {
            window.scrollTo(0,0);
            addLocationToHistory(nextProps.location.pathname);
        }

        if (nextProps.message && nextProps.message.success === 'Password Changed') {
            if (/changePw/.test(location.pathname)) {
                push('/account');
            }
        }
    }
    render() {
        const {
            allBlogs,
            allImages,
            allVideos,
            clearMessage,
            forms,
            handleTextChange,
            lastRoute,
            logout,
            message,
            push,
            submitChangePw,
            user
        } = this.props;

        return (
            <AppContainer>
                <Navbar username={user.username} logout={logout} />

                <MessageBar clearMessage={clearMessage} message={message} />

                <Route exact path='/'
                    render={() => <HomePage allBlogs={allBlogs} allImages={allImages} allVideos={allVideos} />}
                />
                <Route exact path='/account'
                    render={() => <AccountPage push={push} user={user} />}
                />
                <Route exact path='/account/changePw'
                    render={() => (
                        <UserRoute
                            component={ChangePwForm}
                            forms={forms}
                            handleChange={handleTextChange}
                            submitChangePw={submitChangePw}
                            user={user}
                        />
                    )}
                />
                <Route exact path='/about'
                    component={AboutPage}
                />
                <Route path='/admin'
                    component={AdminContainer}
                />
                <AuthRoute path="/auth"
                    component={AuthContainer}
                    username={user.username}
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

const AuthRoute = ({ path, username, component, lastRoute }) => {
    if (!username) return <Route path={path} component={component} />;
    return <Redirect to={lastRoute} />
};

const UserRoute = ({component, forms, handleChange, submitChangePw, user}) => {
    const props = {forms, handleChange, submitChangePw, user};
    if (!user.username) return <Redirect to="/account" />
    return <Route component={component} {...props} />
};

const AppContainer = styled.div`
    width: 100%;
    background-color: #ddd;
    min-height: 100vh;
    padding-bottom: 50px;
    font-size: 18px;
`;

export default withRouter(App);
