require('./assets/stylesheets/styles.scss');
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import App from './components/App';
import BlogList from './components/BlogList'; 
import BlogDetails from './components/BlogDetails'; 

import {Provider} from 'react-redux';
import store, {history} from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={BlogList}></IndexRoute>
                <Route path="blog/:blogId" component={BlogDetails}></Route>
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
