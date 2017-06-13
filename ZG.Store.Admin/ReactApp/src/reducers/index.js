import {combineReducers} from 'redux';

import {routerReducer as routing} from 'react-router-redux';
import blogs from './blogs';

const rootReducer = combineReducers({blogs, routing});

export default rootReducer;