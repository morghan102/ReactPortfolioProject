// import the firebase blogposts into here and do that 1st line as (state = those_blogposts)


export const reducer = (state = {}, action) => {
    const { id, title, image, featured, description, postText } = action;
    switch (action.type) {
        case 'ADD_BLOGPOST':
           return Object.assign({}, state, { //this clones the state obj. if we mutated the og, this wdnt be a pur func anymore
                //The first argument must be an empty object {}. Otherwise, Object.assign() will directly mutate the state we pass in instead of making a clone of it first. We don't want to do that!
                // The second argument is the object that will be cloned. In the reducer action above, it's the ticket list state we pass into our function.
                // The third argument is the change that should be made to our new copy. This will always be the new ticket that should be added to our ticket list state.
                [id]: {
                    title: title,
                    image: image,
                    featured: featured,
                    description: description,
                    postText: postText
                }
            });
        case 'DELETE_BLOGPOST': //this one isnt fully pure but that is ok? i dont totally get it
            let newState = {...state};
            delete newState[id];
            return newState;
        default:
            return state;
    }
    //  All a reducer cares about is taking a thing, applying an action to a copy of that thing, and then returning the altered copy. 
    // It doesn't know anything else about our application such as how state will be stored or applied in the UI. 
};