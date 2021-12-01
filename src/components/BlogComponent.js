// THIS ISNT REALLY WORKING

import React, { useState, useEffect } from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from '../firebase';
import PropTypes from 'prop-types';
import Button from 'reactstrap/lib/Button';
// import firestore database from './whereever firebase is.; in that fb file the db isnt named anything and i'm not super clear whats being exp


// for main page
// function RenderFeature({ feature }) {
//     if (feature) {
//         return (
//             <Link to={`/blog/${feature.id}`}>
//                 <div className="row">
//                     <p>feature blog is workign </p>

//                     <h4>{feature.title}</h4>
//                     <div className="col">
//                         <Card>
//                             <CardImg src={feature.image}></CardImg>
//                         </Card>
//                     </div>
//                 </div>
//             </Link>
//         );
//     } else {
//         return (
//             <div />
//         );
//     }
// }


function RenderBlogItem({ blogpost }) {
    console.log(blogpost)
    // i am misunderstanding smth about the attributes of each item
    // idk but this is kinda important
    // if (blogpost.featured === false) {
    // console.log(blogpost)
    return (
        <div className="row mb-md-4 mb-1 blog">
            <div className="col-6">
                <Link to={`/blog/${blogpost.id}`}>
                    <h3>{blogpost.title}</h3>
                </Link>
                <hr />
                <p>{blogpost.description}</p>
            </div>
            <div className="col-6">
                <Link to={`/blog/${blogpost.id}`}>
                    <img src={blogpost.image} style={{ maxWidth: 300 }}></img>
                </Link>
            </div>
        </div>
    );
    // }
};

// main page
function Blog({ dispatch }) {
    const [loading, setLoading] = useState(false)
    const [editing, setEditing] = useState(false)
    const [blogs, setBlogs] = useState([])
    // const [storeBlogs, setS
    const [selectedBlog, setSelectedBlog] = useState(null)
    const [formVisibleOnPage, setFormVisibleOnPage] = useState(false)//for editing and deleting? if the user is logged in as admin

    // Start the fetch operation as soon as the page loads
    window.addEventListener('load', () => {
        fetchBlogs();
        console.log('loading from blogComp')
    });

    // Fetch the required data using the get() method
    const fetchBlogs = () => {
        setLoading(true);
        firebase.firestore().collection("blogposts").get().then((querySnapshot) => {

            // Loop through the data and store
            // it in array to display
            querySnapshot.forEach(element => {
                var data = element.data();
                setBlogs(arr => [...arr, data]);

            });
            setLoading(false);
        })
    }

    //these 3 consts shd only be visible to admins
    const addOrEditBlogs = (newBlog) => {
// shd be able to edit and add here biut idk how?
        const { id, title, featured, image, postText, description } = newBlog;
        const action = {
            type: 'ADD_OR_EDIT_BLOGPOST',
            id: id,
            title: title,
            featured: featured,
            image: image,
            postText: postText,
            description: description,
        }
        dispatch(action);
        setFormVisibleOnPage(false) //where do i set to true?
    }

    const editSelectedBlog = (id) => {
        const selectedBlog = this.props.blogs[id];
        setSelectedBlog(selectedBlog);
      }

    // const editBlogs = (blog, newBlog) => { //THIS WONT WORK AS IS!!!
    //     const { id, title, featured, image, postText, description } = blog;
    //     // const { id, title, featured, image, postText, description } = newBlog;
    //     // this function will only handle updating the redux state
    //     // setEditing(true); //set these in an onclick function. 
    //     // setSelectedBlog(blog)
    //     const action = {
    //         type: 'EDIT_BLOGPOST',
    //         id: id,
    //         title: title,
    //         featured: featured,
    //         image: image,
    //         postText: postText,
    //         description: description,
    //     }
    //     dispatch(action);
    //     setFormVisibleOnPage(false) //where do i set to true?
    // }
    const deleteBlogs = (id) => {
        const action = {
            type: 'DELETE_BLOGPOST',
            id: id
        }
        dispatch(action);
        setSelectedBlog(null)
    }
    
let state;
console.log(state)
    const blogItems = blogs.map(blogpost => {
        return (
            <div key={blogpost.id} className="row">
                <RenderBlogItem blogpost={state !== undefined ? state : blogpost} /> 
                {/* blogpost refers to local state from the firestore. I need it to reder to the state in redux */}
            </div>
        );
    });

    // const feature = props.blogposts.filter(blogpost => blogpost.featured);
    // i tried
    // const feature = props.blogposts.map((blogpost) => (
    //     blogpost.featured ? blogpost : <div />
    // ));

    return (
        <div className="container container-fluid">
            {/* <RenderFeature feature={feature} /> */}
            {/* {loading ? <p>Loading!</p>
                : { blogItems }
            } */}
            <h1>Coming soon!</h1>
            {blogItems}
            <Button onClick={() => addOrEditBlogs({ id: 7, title: 'hi', featured: false, image: 'src', description: 'kjbdck', postText: 'ksdjbcdkjb' })} />
        </div>
    );
};
Blog.propTypes = {
    blogs: PropTypes.object
}
const mapStateToProps = (state) => {
    // console.log(state) i only have smth in state after clicking the btn
    return { blogs: state } //idk if this is right
}

//mdtp should be 2nd arg of connect
Blog = connect(mapStateToProps)(Blog); //he return value of the connect() function is the TicketControl component itself, but this time we will have powerful new tools at our disposal: the dispatch() and mapStateToProps() functions.
// BUT when is mstp and dispatch used?
export default Blog;









// when i'm ready to render specific blog postings
// https://learn.nucamp.co/mod/book/view.php?id=3148&chapterid=3745