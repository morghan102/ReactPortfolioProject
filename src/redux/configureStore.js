import { createStore, combineReducers } from 'redux';
import { Blogposts } from './blogposts';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            blogposts: Blogposts
        })
    );
    return store;
};