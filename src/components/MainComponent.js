import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Blog from './BlogComponent';
import { BLOGPOSTS } from '../shared/blogposts';

import { Switch, Route, Redirect, withRouter} from 'react-router-dom';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogposts: BLOGPOSTS
        };
    }

    render() {
        const BlogPage = () => {
            return(
                <Blog 
                    blogpost={this.state.blogposts.filter(blogpost => blogpost.id === +matchMedia.params.blogpostId)[0]}
                    // or w/o the 0, not sure.
                    // or as props, not sure
                    addBlogPost={this.state.props.addBlogPost}
                    // this will need to be set upl8r
                />
            );
        };



        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/about' component={About} />
                    <Route exact path='/blog' render={() => <Blog blogposts={this.state.blogposts} />} />
                </Switch>
                <Footer />
</div>
        );
    }
}

export default Main;