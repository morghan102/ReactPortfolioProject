import React from 'react';
import { Card, CardImg } from 'reactstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// for main page
function RenderFeature({ feature }) {
    if (feature) {
        return (
            <Link to={`/blog/${feature.id}`}>
                <div className="row">
                    <p>feature blog is workign </p>

                    <h4>{feature.title}</h4>
                    <div className="col">
                        <Card>
                            <CardImg src={feature.image}></CardImg>
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


function RenderBlogItem({ blogpost }) {
    // i am misunderstanding smth about the attributes of each item
    // idk but this is kinda important
    // if (blogpost.featured === false) {
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
function Blog(props) {

    const blog = props.blogposts.map(blogpost => {
        return (
            // <div key={blogpost.id} className="row">
            <RenderBlogItem blogpost={blogpost} />
            //  </div>
        );
    });

    const feature = props.blogposts.filter(blogpost => blogpost.featured);
    // i tried
    // const feature = props.blogposts.map((blogpost) => (
    //     blogpost.featured ? blogpost : <div />
    // ));

    return (
        <div className="container container-fluid">
            <RenderFeature feature={feature} />
            {blog}
        </div>
    );
};

Blog = connect()(Blog);

export default Blog;

// when i'm ready to render specific blog postings
// https://learn.nucamp.co/mod/book/view.php?id=3148&chapterid=3745