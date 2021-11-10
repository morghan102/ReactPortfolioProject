import blogpostReducer from '../../reducers/blogpost-reducer'; //this desnt exist yet

describe('blogpostReducer', () => { //describe blocks are for grouping together related tests. All of our ticketListReducer tests will be grouped together in one describe block.
    let action;
    const blogpostData = {
        id: 0,
        title: "What equipment do you need to roast your own coffee?",
        image: "../assets/images/arabica.jpg",
        featured: false,
        description: "Lorem ipsum more here!!",
        postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    }
    const currentState = {
        1: {
            id: 0,
            title: "What equipment do you need to roast your own coffee?",
            image: "../assets/images/arabica.jpg",
            featured: false,
            description: "Lorem ipsum more here!!",
            postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        },
        2: {
            id: 1,
            title: "post 2",
            image: "../assets/images/arabica.jpg",
            featured: true,
            description: "Lorem ipsum more here!!",
            postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
    }


    test('Should return default state if there is no action type passed into the reducer', () => {//test refers to the individual test. This test will make sure our reducer returns the correct default value.
        expect(blogpostReducer({}, { type: null })).toEqual({}); //Our expect statement lets our test know what the expected value will be.
        //The first argument is the current state while the second argument is an action that will be applied to the current state. 
    });

    test('Should successfully add new blogpost data to blogposts', () => {
        const { id, title, image, featured, description, postText } = blogpostData;
        action = {
            type: 'ADD_BLOGPOST',
            id: id,
            title: title,
            image: image,
            featured: featured,
            description: description,
            postText: postText
        };
        // In the last lesson, we briefly touched on the fact that our action can contain more than just the action's type. In the test above, our action has a type of ADD_TICKET. However, our reducer won't be able to do anything useful unless it also has information about the ticket it is supposed to add. That's why our reducer takes an object as an argument instead of just a string for the action type itself. Because it takes an object, it can take multiple key-value pairs that include additional information about the action the reducer will need to take.

        expect(blogpostReducer({}, action)).toEqual({
            [id]: {
                title: title,
                image: image,
                featured: featured,
                description: description,
                postText: postText
            }
        });
    });

    test('Should successfully delete a blogpost', () => {
        action = {
            type: 'DELETE_BLOGPOST',
            id: 1
        };
        expect(blogpostReducer(currentState, action)).toEqual({
            2: {
                id: 1,
                title: "post 2",
                image: "../assets/images/arabica.jpg",
                featured: true,
                description: "Lorem ipsum more here!!",
                postText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        });
    });

    
});
//our reducer needs to know two things:
// What is the thing that needs to be changed (the current state)?
// How should that thing be changed (what action should be applied to that thing)?

export default (state = {}, action) => {
    return state;
}

// and to run, 'npm test' and it auto finds it here