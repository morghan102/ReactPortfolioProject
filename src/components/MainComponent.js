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

    render() {
        // i dont think i need that. they have a func like this just for the homepage w the feature
        // const BlogPage = () => {
        //     return(
        //         <Blog 
        //             blogpost={this.props.blogposts.filter(blogpost => blogpost.id === +match.params.blogpostId)[0]}
        //             // or w/o the 0, not sure.
        //             // or as props, not sure
        //             addBlogPost={this.props.addBlogPost}
        //             // this will need to be set upl8r
        //         />
        //     );
        // };

// i think this is to render the indiv post
        const BlogWithId = ({match}) => {
            return(
                // that comp might need a diff name?
                <Blog 
                    blogpost={this.props.blogposts.filter(blogpost => blogpost.id === +match.params.blogpostId)[0]}
                    // could add a comment thing here l8r?
                />
            );
        };

        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/about' component={About} />
                    <Route exact path='/blog' render={() => <Blog featuredPost={this.props.blogposts.filter(blogpost => blogpost.featured[0])} blogposts={this.props.blogposts} />} />
                    {/* use render if you need to pass state data */}
                    <Route path='/blog/:blogpostId' component={BlogWithId}/>
                </Switch>
                <Footer />
</div>
        );
    }
}

export default withRouter(connect(mapStateToProps)(Main));