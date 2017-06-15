import {combineReducers} from 'redux';

import {routerReducer as routing} from 'react-router-redux';
import {reducer as formReducer} from 'redux-form';

import blogs from './blogs';
import blog from './blog';
import posts from './posts';

const rootReducer = combineReducers({form: formReducer, blogs, blog, posts, routing});

export default rootReducer;