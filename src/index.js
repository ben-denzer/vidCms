import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import {syncHistoryWithStore} from 'react-router-redux';
import './scss/main.scss';
import {checkForToken} from './actions/authActions';
import {getAllVideos} from './actions/contentActions'

const store = configureStore();
store.dispatch(checkForToken());
store.dispatch(getAllVideos(store.dispatch));
const history= syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>, document.getElementById('root')
);
