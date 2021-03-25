import React, { Component } from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

// this isfor the main page
// this was crafted after the specific campsite rendering thing, so may need to toss
function RenderBlogItem({blogpost}) {
    // if (blogpost) {
        return(
            // this will be inside a comtainer
                <div className="row">
                    <p>hello render blog Item is workign</p>

                    <Link to={`/blog/${blogpost.id}`}>
                        <h4>{blogpost.title}</h4>
                        <div className="col">
                            <Card>
                                <CardImg src={blogpost.image}></CardImg>
                            </Card>
                        </div>
                </Link>
            </div>
        );
    // }
    // return <div />
};

// for main page
function RenderFeature({featuredPost}) {
    if (featuredPost) {
        return (
            <Link to={`/blog/${featuredPost.id}`}>
                <div className="row">
                    <p>feature blog is workign {console.log(featuredPost.title)}</p>

                    <h4>{featuredPost.title}</h4>
                    <div className="col">
                        <Card>
                            <CardImg src={featuredPost.image}></CardImg>
                        </Card>
                    </div>
                </div>
            </Link>
        );
    } else {
        return (
            <div />
        );
    }
}

// this is for rendering the pecific blog post
// function renderBlogItem({blogpost}) {
//     return(

//     );
// }


// main page
function Blog(props) {

    const blog = props.blogposts.map(blogpost => {
        return (
            <div key={blogpost.id} className="col-md-5 m-1">
                <RenderBlogItem blogpost={blogpost} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <RenderFeature featuredPost={props.featuredPost}/>
            </div>
            <div className="row">
                <p>blog working</p>
                {blog}
            </div>
        </div>
    );



    // if (props.blogposts){
    // return(
    //     <div className="container">
    //         <p>hello function blog is working</p>
    //         <RenderFeature featuredPost={props.featuredPost}/>
    //         <RenderBlog blogpost={props.blogpost}/>
    //     </div>
    //     // 1000px featured blog post - image to right w/ text to left
    //     // posts take up full row, 1 col. not cards. images accompanying switch r or l, text in center

    //     // can have this like the caMPITES component and rendering is a func
    // );
    // } else {
    //     return(
    //         <div />
    //     );
    // }
};

export default Blog;

// when i'm ready to render specific blog postings
// https://learn.nucamp.co/mod/book/view.php?id=3148&chapterid=3745