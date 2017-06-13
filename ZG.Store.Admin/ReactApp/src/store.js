import {createStore, compose} from 'redux';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';

import rootReducer from './reducers/index';

import blogs from './data/blogs';

const defaultState = {
    blogs,
}

const store = createStore(rootReducer, defaultState);
export default store;

export const history = syncHistoryWithStore(browserHistory, store);

