import React, { useState, useEffect } from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderPost({ blogpost }) {
    if (blogpost) {
        return (
            // this will be inside a comtainer
            <div className="row">
                <p>rendering post from post component</p>

                <h4>{blogpost.title}</h4>
                <div className="col">
                    <Card>
                        <CardImg src={blogpost.image}></CardImg>
                    </Card>
                </div>
            </div>
        );
    }
    return <div />
};

function BlogPost(props) {
    if (props.blogposts) {
        return (
            <div className="container">
                <p>main blogpost one workign</p>
                {/* <RenderFeature featuredPost={props.featuredPost}/> */}
                <RenderPost blogpost={props.blogpost} />
            </div>
            // 1000px featured blog post - image to right w/ text to left
            // posts take up full row, 1 col. not cards. images accompanying switch r or l, text in center

            // can have this like the caMPITES component and rendering is a func
        );
    } else {
        return (
            <div />
        );
    }
};

export default BlogPost;
// hw to connect this to everything else