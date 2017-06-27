import {createStore, applyMiddleware, compose} from 'redux';
import {hashHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import rootReducer from './reducers/index';

const middleware = applyMiddleware(promise(), thunk, createLogger()); 
//createLogger() will log every action in console
//thunk will make async actions (to server) work
//promise will dispatch promise specific actions like "FETCH_BLOGS_PENDING", "FETCH_BLOGS_FULFILLED", "FETCH_BLOGS_REJECTED"

const store = createStore(rootReducer, middleware);
export default store;

export const history = syncHistoryWithStore(hashHistory, store);
//syncHistoryWithStore will put and sync browserHistory in store

