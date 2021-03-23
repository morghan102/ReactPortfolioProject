import React, { Component } from 'react';
import { Control , LocalForm, Errors } from 'react-redux-form';
import { Label, Col, Row } from 'reactstrap';


// might need to combine these compoents or switch how theyre rendered in one another and exported
function About(props) {
    return (
        <React.Fragment>
            <h1>About Us</h1>
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                </div>
                <div className="row">
                    <img />
                    <img />
                    <img />
                </div>
            </div>
            <AboutForm />
        </React.Fragment>
    );
}

class AboutForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            phoneNum: '',
            email: '',
            contactType: 'By Email',
            feedback: '',
            touched: {
                name: false,
                phoneNum: false,
                email: false,
                contactType: false,
                feedback: false
            }
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        alert("you have submitted " + JSON.stringify(values));
    }


    render() {
        return (
            <div className="container">
                <h3>Need to get in touch?</h3>
                <p>Whether you want to leave us feedback or make a special request, or just want to chat, we're here for what you've got to say.</p>
                <div className="row">
                    <div className="col-md-10">
                        <LocalForm>
                            <Row className="form-group">
                                <Label htmlFor="name" md={2}>Full Name</Label>
                                <Col md={8}>
                                    <Control.text 
                                    model=".name"
                                    id="name"
                                    name="name"
                                    placeholder="Full Name"
                                    className="form-control"
                                    />
                                    {/* <Errors /> */}
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="phone" md={2}>Phone Num.</Label>
                                <Col md={3}>
                                    <Control.text 
                                    model=".phone"
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone Number"
                                    className="form-control"
                                    />
                                    {/* <Errors /> */}
                                </Col>
                            {/* </Row> */}

                            {/* <Row className="form-group"> */}
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={3}>
                                    <Control.text 
                                    model=".email"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    className="form-control"
                                    />
                                    {/* <Errors /> */}
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="address" md={2}>Mailing Address</Label>
                                <Col md={8}>
                                    <Control.text 
                                    model=".address"
                                    id="address"
                                    name="address"
                                    placeholder="Mailing Address"
                                    className="form-control"
                                    />
                                    {/* <Errors /> */}
                                </Col>
                            </Row>                            
                            
                            <Row className="form-group">
                                <Label htmlFor="city" md={2}>City</Label>
                                <Col md={2}>
                                    <Control.text 
                                    model=".city"
                                    id="city"
                                    name="city"
                                    placeholder="City"
                                    className="form-control"
                                    />
                                    {/* <Errors /> */}
                                </Col>
                                <Label htmlFor="state" md={2}>State</Label>
                                <Col md={2}>
                                    {/* <Control.text 
                                    // I need a dropdown menu of all the states
                                    /> */}
                                    {/* <Errors /> */}
                                </Col>
                                <Label htmlFor="zip" md={2}>Zip</Label>
                                <Col md={2}>
                                    <Control.text 
                                    model=".zip"
                                    id="zip"
                                    name="zip"
                                    placeholder="Zip"
                                    className="form-control"
                                    />
                                    {/* <Errors /> */}
                                </Col>
                            </Row>
                        </LocalForm>
                    </div>
                </div>
            
            </div>

        );
    }
}

export default About;