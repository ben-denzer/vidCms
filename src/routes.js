import React                    from 'react';
import {Route, IndexRoute}      from 'react-router';

import AdminPage                from './containers/AdminPage';
import App                      from './containers/App';
import AuthPage                 from './containers/AuthPage';
import FreeVideoPage            from './components/content/FreeVideoPage';
import ForgotPwForm             from './components/auth/ForgotPwForm';
import HomePage                 from './components/HomePage';
import LoginForm                from './components/auth/LoginForm';
import SignupForm               from './components/auth/SignupForm';
import ResetForm                from './components/auth/ResetForm';
import UploadForm               from './containers/UploadForm';
import VideoHome                from './containers/VideoHome';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="videos" component={VideoHome} />
        <Route path="auth/" component={AuthPage}>
            <Route path="login" component={LoginForm} />
            <Route path="signup" component={SignupForm} />
            <Route path="forgotPw" component={ForgotPwForm} />
            <Route path="reset/*" component={ResetForm} />
        </Route>
        <Route path="admin" component={AdminPage}>
            <Route path="upload" component={UploadForm} />
        </Route>
        <Route path="watch/:id" component={FreeVideoPage} />
    </Route>
);
