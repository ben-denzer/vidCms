import React                  from 'react';
import ReactDOM               from 'react-dom';
import {Provider}             from 'react-redux';
import {BrowserRouter, Match} from 'react-router';
import configureStore         from './store/configureStore';
import {checkForToken}        from './actions/authActions';
import {getAllContent}        from './actions/contentActions'
import App                    from './components/App';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
store.dispatch(checkForToken());
store.dispatch(getAllContent());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Match pattern='/' component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
