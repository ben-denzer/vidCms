import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {syncHistoryWithStore} from 'react-router-redux';
import './scss/main.scss';
import {checkForToken} from './actions/authActions';

const store = configureStore();
store.dispatch(checkForToken());
const history= syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>, document.getElementById('root')
);
