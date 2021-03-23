import React, { Component } from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';

class Main extends Component {
    render() {
        return (
            <div>
                <Header />
                <About />
                <Footer />
            </div>
        );
    }
}

export default Main;