import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Blog from './BlogComponent';
// import { BLOGPOSTS } from '../shared/blogposts';

import { Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        blogposts: state.blogposts
    };
};

class Main extends Component {
// is this still a class component
    render() {
        const BlogPage = () => {
            return(
                <Blog 
                    blogpost={this.props.blogposts.filter(blogpost => blogpost.id === +match.params.blogpostId)[0]}
                    // or w/o the 0, not sure.
                    // or as props, not sure
                    addBlogPost={this.props.addBlogPost}
                    // this will need to be set upl8r
                />
            );
        };
// is the withid one supposed to be my blogpage? Like did i make blogpage to mimic their withid one? idk, im real confused
        const BlogWithId = ({match}) => {
            return(
                <BlogInfo blogpost={this.props}
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/about' component={About} />
                    <Route exact path='/blog' render={() => <Blog featuredPost={this.props.blogposts.filter(blogpost => blogpost.featured[0])} blogposts={this.props.blogposts} />} />
                    {/* use render if you need to pass state data */}
                    <Route path='/blog/:blogId' component={BlogWithId}/>
                </Switch>
                <Footer />
</div>
        );
    }
}

export default Main;