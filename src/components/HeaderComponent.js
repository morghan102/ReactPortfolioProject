import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component {
    render () {
        return (
            <Navbar sticky="top" expand="md" dark>
                <div className="container">
                    <NavbarBrand className="ml-auto" href="/"><img alt="Others logo"/></NavbarBrand>
                </div>
            </Navbar>
        );
    }
}