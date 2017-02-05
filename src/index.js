import React                  from 'react';
import ReactDOM               from 'react-dom';
import {Provider}             from 'react-redux';
import {BrowserRouter}        from 'react-router-dom';
import configureStore         from './store/configureStore';
import {checkForToken}        from './actions/authActions';
import {getAllContent}        from './actions/contentActions'
import AppContainer           from './containers/AppContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(checkForToken());
store.dispatch(getAllContent());

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
