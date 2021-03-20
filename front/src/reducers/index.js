import { combineReducers } from 'redux';

import user from './users';
import post from './posts'; 

const rootReducer = combineReducers({
    user,
    post,
});

export default rootReducer;
