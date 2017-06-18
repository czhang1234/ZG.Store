import {combineReducers} from 'redux';

import {routerReducer as routing} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import blogs from './blogs';
import blog from './blog';
import posts from './posts';
import post from './post';

const rootReducer = combineReducers({form: formReducer, blogs, blog, posts, post, routing});
//so the state in store is
/*
{
    form,
    blogs, 
    blog,
    posts,
    post,
    routing
}
*/
//blogs reducer only handles the blogs and blog reducer only handle the blog, etc.

export default rootReducer;