import React                    from 'react';
import { Route, IndexRoute }    from 'react-router';
import App                      from './containers/App';
import HomePage                 from './containers/HomePage';
import AuthPage                 from './containers/AuthPage';
import LoginForm                from './components/LoginForm';
import SignupForm               from './components/SignupForm';
import ResetForm                from './components/ResetForm';
import ForgotPwForm             from './components/ForgotPwForm';
import AdminPage                from './containers/AdminPage';
import UploadForm               from './components/UploadForm';

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage} />
        <Route path="auth/" component={AuthPage}>
            <Route path="login" component={LoginForm} />
            <Route path="signup" component={SignupForm} />
            <Route path="forgotPw" component={ForgotPwForm} />
            <Route path="reset/*" component={ResetForm} />
        </Route>
        <Route path="admin" component={AdminPage}>
            <Route path="upload" component={UploadForm} />
        </Route>
    </Route>
);
