import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

// this isfor the main page
function renderBlog({blogpost}) {
    if (blogpost) {
        return(
            // this will be inside a comtainer
            <Link to={`/blog/${blogpost.id}`}>
                <div className="row">
                    <p>hello render blog is workign</p>

                    <h4>{blogpost.title}</h4>
                    <div className="col">
                        <Card>
                            <CardImg src={blogpost.image}></CardImg>
                        </Card>
                    </div>
                </div>
            </Link>
        );
    }
};

// for main page
function renderFeature({featuredPost}) {
    if (featuredPost)
    return (
        <Link to={`/blog/${featuredPost.id}`}>
            <div className="row">
                <p>feature blog is workign</p>

                <h4>{featuredPost.title}</h4>
                <div className="col">
                    <Card>
                        <CardImg src={featuredPost.image}></CardImg>
                    </Card>
                </div>
            </div>
        </Link>
    );
}

// this is for rendering the pecific blog post
// function renderBlogItem({blogpost}) {
//     return(

//     );
// }


// main page
function Blog(props) {
    if (props.blogposts){
    return(
        <div className="container">
            <p>hello function blog is working</p>
            <renderFeature />
            <renderBlog />
        </div>
        // 1000px featured blog post - image to right w/ text to left
        // posts take up full row, 1 col. not cards. images accompanying switch r or l, text in center

        // can have this like the caMPITES component and rendering is a func
    );
    } else {
        return(
            <div />
        );
    }
};

export default Blog;

// when i'm ready to render specific blog postings
// https://learn.nucamp.co/mod/book/view.php?id=3148&chapterid=3745