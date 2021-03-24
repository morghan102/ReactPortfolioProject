import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardHeader } from 'reactstrap';
import { Link } from 'react-router-dom';
import { render } from '@testing-library/react';

function renderBlog({blogposts}) {
    if(blogposts) {
        return(
            // this will be inside a comtainer
            <div className="row">
                <h4>{blogposts.title}</h4>
                <div className="col">
                    <Card>
                        <CardImg src={blogposts.image}></CardImg>
                    </Card>
                </div>
            </div>
        );
    }
};




function Blog(props) {
    return(
        <div className="container">
            <renderBlog />
        </div>
        // 1000px featured blog post - image to right w/ text to left
        // posts take up full row, 1 col. not cards. images accompanying switch r or l, text in center

        // can have this like the caMPITES component and rendering is a func
    );
}

export default Blog;