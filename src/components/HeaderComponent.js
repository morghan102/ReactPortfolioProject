import React, { Component } from 'react';
import { Nav, Collapse, NavItem, Navbar, NavbarBrand, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarToggler from 'reactstrap/lib/NavbarToggler';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };
    }
    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleLogin(event) {
        alert(`Username: ${this.username.value} Password ${this.password.value} Remember: ${this.remember.value}`);
        this.toggleModal();
        event.preventDefault();
    }

    render () {
        return (
            <React.Fragment>
                <Navbar sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="ml-auto" href="/"><img src="/assets/images/logo.jpg" height="30" width="30" alt="Others logo"/></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem> 
                                    <NavLink className="nav-link" to="/">
                                        <i className="fa fa-tags fa-lg" /> Products
                                    </NavLink>
                                </NavItem>
                                <NavItem> 
                                    <NavLink className="nav-link" to="/">
                                        <i className="fa fa-info fa-lg" /> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/">
                                        <i className="fa fa-paper-plane fa-lg" /> Blog
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <span className="navbar-text ml-auto">
                                <Button outline onClick={this.toggleModal}>
                                    <i className="fa fa-sign-in fa-lg" /> Login
                                </Button>
                            </span>
                        </Collapse>
                    </div>
                </Navbar>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username" innerRef={input => this.username = input} />
                                            {/* the innerref  attr is needed, set w a callback function w the value of the input field is passed */}
                                            {/* this.the property is then set to the value of the input field */}
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="Password" id="password" name="password" innerRef={input => this.password = input}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" innerRef={input => this.remember = input}/> Remember me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}
export default Header;