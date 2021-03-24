import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Blog from './BlogComponent';


class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <About />
                <Footer />
                <Blog />
            </div>
        );
    }
}

export default Main;