import React, { useContext } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Blog from './BlogComponent';
import Home from './HomeComponent';
import Cart from './CartComponent';
// import blogposts from '../shared/blogposts';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import CoffeeProducts from './CoffeeProducts';
import { AppContext } from '../context';


const mapStateToProps = state => {
    return {
        blogposts: state.blogposts,
        headerTitle: state.pageTitle
    };
};

function Main() {
    const { dispatchEvent, productsInCart } = useContext(AppContext);

    // render() {
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

    // wtf is this for anyway?
    const BlogWithId = ({ match }) => {
        return (
            // that comp might need a diff name?
            <Blog
                blogpost={this.props.blogposts.filter(blogpost => blogpost.id === +match.params.blogpostId)[0]}
            // could add a comment thing here l8r? if yes, refer to below:
            // https://learn.nucamp.co/mod/book/view.php?id=3230&chapterid=3762
            />
        );
    };

    return (
        <div>
            <Header products={productsInCart } />
            <Switch>
                <Route exact path='/home' render={() => <Home />} />
                <Route exact path='/about' component={About} />
                <Route exact path='/blog' render={() => <Blog />} /> {/* featuredPost={this.props.blogposts.filter(blogpost => blogpost.featured[0])}  */}
                {/* use render if you need to pass state data */}
                <Route path='/blog/:blogpostId' component={BlogWithId} />
                <Route exact path='/products' render={() => <CoffeeProducts />} />
                <Route exact path='/cart' render={() => <Cart />} />
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
    );
}
// }

export default withRouter(connect(mapStateToProps)(Main));
// mapdispatchtoprops is not here (unlike our nucampsite) bc i dont have an addcommment feature