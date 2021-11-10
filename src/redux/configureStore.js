import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import { Blogposts } from './blogposts';

export const ConfigureStore = () => {
    const store = createStore(
// createStore() takes a reducer as an argument. The reducer tells the store how it should handle actions. Otherwise, the store wouldn't know how to handle any actions.
        combineReducers({
            blogposts: Blogposts
            // This store holds our application's state tree. The state tree is immutable - which means that the store will replace it with a new immutable structure each time it needs to be updated. Think of it as cleaning the old representation of state off a whiteboard and then drawing up a new representation.
        }),
        applyMiddleware(thunk, logger)
        // this is all we need to do for logger.
    );
    return store;
};