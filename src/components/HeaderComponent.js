import React, { Component } from 'react';
import { Nav, Collapse, NavItem, Navbar, NavbarBrand, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Alert } from 'reactstrap';
// adding alert would be neat
// https://reactstrap.github.io/components/alerts/
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarToggler from 'reactstrap/lib/NavbarToggler';
import { NavLink, withRouter } from 'react-router-dom';
// import { Control } from 'react-redux-form';

// should be able to make top change color w scroll
// https://codesandbox.io/s/nifty-newton-f4j0j?file=/src/Header.js or https://stackoverflow.com/questions/59510990/how-to-change-navbar-background-color-in-react-when-i-scroll

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
        const headerTitle = this.props.location.pathname.slice(1);
        const style = {color: 'gray', textDecoration: 'none'};
        const actStyle = {color: 'black', textDecoration: 'none'};

        return (
            <React.Fragment>
                <Navbar sticky="top" light expand="md">
                    <div className="container">
                        <NavbarBrand className="ml-auto" href="/"><img src="/assets/images/logo.jpg" height="40" width="40" alt="Others logo"/></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home" style={style} activeStyle={actStyle}>
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem> 
                                    <NavLink className="nav-link" to="/products" style={style} activeStyle={actStyle}>
                                        <i className="fa fa-tags fa-lg" /> Products
                                    </NavLink>
                                </NavItem>
                                <NavItem> 
                                    <NavLink className="nav-link" to="/about" style={style} activeStyle={actStyle}>
                                        <i className="fa fa-info fa-lg" /> About Us
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/blog" style={style} activeStyle={actStyle}>
                                        <i className="fa fa-paper-plane fa-lg" /> Blog
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav navbar className="ml-auto">
                                    <NavItem className="mt-2">
                                        <NavLink className="nav-link" to="/" style={style} activeStyle={actStyle}> 
                                            <i className="fa fa-shopping-cart fa-lg" />
                                        </NavLink>
                                    </NavItem>
                                    <span className="ml-2 navbar-text">
                                    <Button outline onClick={this.toggleModal} style={{color: 'black'}}>
                                        <i className="fa fa-sign-in fa-lg" /> Site Admin?
                                    </Button>
                                    {/* <Form inline>
                                        <FormControl type="text" placeholder="Search" length="5" className=""/>
                                        <Button variant="outline-success">Search</Button>
                                    </Form> 
                                    I cant figure out how to add the search bar, considering removing it entirely*/}
                                </span>
                            </Nav>
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

                <div className="bg-image mb-5 pb-3">
                    <div class="banner container-fluid pt-3" style={{backgroundImage: "url(../assets/images/coffeeSpillWide.jpg)"}}>
                        <div class="row text-light">
                            <div class="col-12 text-center mt-5">
                                <h1 className="display-4 shade pb-5 mb-5 text-center text-light" >{headerTitle}</h1>
                            </div>
                        </div>
                    </div>
                </div>      
              
            </React.Fragment>
        );
    }
}
export default withRouter(Header);