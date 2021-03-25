import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Blogposts } from './blogposts';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            blogposts: Blogposts
        }),
        applyMiddleware(thunk, logger)
        // this is all we need to do for logger.
    );
    return store;
};