import React                    from 'react';
import {Route, IndexRoute}      from 'react-router';

import AboutPage                from './components/AboutPage';
import AccountPage              from './containers/AccountPage';
import AdminPage                from './containers/AdminPage';
import App                      from './containers/App';
import AuthPage                 from './containers/AuthPage';
import BlogHome                 from './components/BlogHome';
import BlogPage                 from './components/BlogPage';
import BlogUploadForm           from './containers/BlogUploadForm';
import ContactPage              from './components/ContactPage';
import FreeVideoPage            from './components/content/FreeVideoPage';
import ForgotPwForm             from './components/auth/ForgotPwForm';
import HomePage                 from './components/HomePage';
import LoginForm                from './components/auth/LoginForm';
import ManageUsers              from './components/admin/ManageUsers';
import PremiumVideoPage         from './components/content/PremiumVideoPage';
import ResetForm                from './components/auth/ResetForm';
import SignupForm               from './components/auth/SignupForm';
import VideoUploadForm          from './containers/VideoUploadForm';
import UserPage                 from './components/admin/UserPage';
import VideoHome                from './components/VideoHome';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="about" component={AboutPage} />
        <Route path="account" component={AccountPage} />
        <Route path="admin" component={AdminPage}>
            <Route path="upload/video" component={VideoUploadForm} />
            <Route path="upload/blog" component={BlogUploadForm} />
            <Route path="users" component={ManageUsers} />
            <Route path="users/:id" component={UserPage} />
        </Route>
        <Route path="articles" component={BlogHome} />
        <Route path="auth/" component={AuthPage}>
            <Route path="login" component={LoginForm} />
            <Route path="signup" component={SignupForm} />
            <Route path="forgotPw" component={ForgotPwForm} />
            <Route path="reset/*" component={ResetForm} />
        </Route>
        <Route path="contact" component={ContactPage} />
        <Route path="read">
            <Route path="free/:post_url" component={BlogPage} />
        </Route>
        <Route path="watch">
            <Route path="free/:id" component={FreeVideoPage} />
            <Route path="premium/:id" component={PremiumVideoPage} />
        </Route>
        <Route path="videos" component={VideoHome} />
    </Route>
);
