import {combineReducers} from 'redux';

import {routerReducer as routing} from 'react-router-redux';
import blogs from './blogs';
import blog from './blog';

const rootReducer = combineReducers({blogs, blog, routing});

export default rootReducer;