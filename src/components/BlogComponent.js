// THIS ISNT REALLY WORKING

import React, { useState, useEffect } from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import firebase from '../firebase';
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
function Blog() {
    const [loading, setLoading] = useState(false)
    const [blogs, setBlogs] = useState([])

    // Start the fetch operation as soon as the page loads
    window.addEventListener('load', () => {
        fetchBlogs();
        console.log('hi')
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


    const blogItems = blogs.map(blogpost => {
        return (
            <div key={blogpost.id} className="row">
                <RenderBlogItem blogpost={blogpost} />
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

            {blogItems}
        </div>
    );
};

Blog = connect()(Blog); //he return value of the connect() function is the TicketControl component itself, but this time we will have powerful new tools at our disposal: the dispatch() and mapStateToProps() functions.
// BUT when is mstp and dispatch used?
export default Blog;









// when i'm ready to render specific blog postings
// https://learn.nucamp.co/mod/book/view.php?id=3148&chapterid=3745