import {createStore, applyMiddleware, compose} from 'redux';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import rootReducer from './reducers/index';

/*
const defaultState = {
    blogs: {
        fetchingBlogs: false,
        fetchedBlogs: false,
        fetchBlogsError: null,
        blogs: []
    }
}
*/

const middleware = applyMiddleware(promise(), thunk, createLogger());

const store = createStore(rootReducer, middleware);
export default store;

export const history = syncHistoryWithStore(browserHistory, store);

