require('./assets/stylesheets/styles.scss');
require('file-loader?name=[name].[ext]!../index.html');
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute} from 'react-router';
import App from './components/App';
import BlogList from './components/BlogList'; 
import BlogDetails from './components/BlogDetails'; 
import PostList from './components/PostList'; 
import PostDetails from './components/PostDetails'; 

import {Provider} from 'react-redux';
import store, {history} from './store';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route path="/blog-app" component={App}>
                <IndexRoute component={BlogList}></IndexRoute>
                <Route path="/blog-app/blog/:blogId" component={BlogDetails}/>
                <Route path="/blog-app/blog/:blogId/posts" component={PostList}/>
                <Route path="/blog-app/blog/:blogId/post/:postId" component={PostDetails}/>
            </Route>
        </Router>
    </Provider>
);

ReactDOM.render(router, document.getElementById('root'));
