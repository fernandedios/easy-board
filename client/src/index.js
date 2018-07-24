import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { HashRouter } from 'react-router-dom'
import reduxThunk from 'redux-thunk';

import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import LoginReducer from './login/LoginReducer';

const reducers = combineReducers({
    auth: LoginReducer
});

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <HashRouter><App /></HashRouter>
    </Provider>, 
    document.getElementById('root')
);

registerServiceWorker();
