import React, { Component } from 'react';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Label, Col, Row, Button } from 'reactstrap';

const req = val => val && val.length;
const maxLength = val => len => !val || (val.length <= len);
const minLength = len => val => val && (val.length >= len);
const isNum = val => !isNaN(+val);
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

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
                    <div className="col">
                        <LocalForm onSubmit={values => this.handleSubmit(values)} >
                            <Row className="form-group">
                                <Label htmlFor="name" md={2}>Full Name</Label>
                                <Col md={8}>
                                    <Control.text
                                        model=".name"
                                        id="name"
                                        name="name"
                                        placeholder="Full Name"
                                        className="form-control"
                                        validators={{
                                            req,
                                            minLength: minLength(2),
                                            maxLength: maxLength(20)
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".name"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            req: 'Required',
                                            minLength: 'Must be at least 2 chars.',
                                            maxLength: 'Must be 15 chars or less.'
                                        }}
                                    />
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
                                        validators={{
                                            req,
                                            minLength: minLength(10),
                                            maxLength: maxLength(12),
                                            isNum
                                        }}
                                    />
                                    <Errors
                                        className="text-danger"
                                        model=".phone"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            req: 'Required',
                                            minLength: 'Must be at least 10 numbers.',
                                            maxLength: 'Must be 12 numbers or less.',
                                            isNum: 'Must be a phone number.'
                                        }}
                                    />
                                </Col>

                                <Label htmlFor="email" md={1}>Email</Label>
                                <Col md={3}>
                                    <Control.text
                                        model=".email"
                                        id="email"
                                        name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            req,
                                            validEmail
                                        }}
                                    />
                                    <Errors 
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            req: 'Required',
                                            validEmail: 'Invalid address.'
                                        }}
                                    />
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
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{ size: 3, offset: 2 }}>
                                    <Control.text
                                        model=".city"
                                        id="city"
                                        name="city"
                                        placeholder="City"
                                        className="form-control"
                                    />
                                </Col>
                                <Label htmlFor="state" md={1}>State</Label>
                                <Col md={2}>
                                    <Control.select
                                        model=".state"
                                        className="form-control"
                                        id="state"
                                        name="state"
                                    >
                                        <option value="">N/A</option>
                                        <option value="AK">Alaska</option>
                                        <option value="AL">Alabama</option>
                                        <option value="AR">Arkansas</option>
                                        <option value="AZ">Arizona</option>
                                        <option value="CA">California</option>
                                        <option value="CO">Colorado</option>
                                        <option value="CT">Connecticut</option>
                                        <option value="DC">District of Columbia</option>
                                        <option value="DE">Delaware</option>
                                        <option value="FL">Florida</option>
                                        <option value="GA">Georgia</option>
                                        <option value="HI">Hawaii</option>
                                        <option value="IA">Iowa</option>
                                        <option value="ID">Idaho</option>
                                        <option value="IL">Illinois</option>
                                        <option value="IN">Indiana</option>
                                        <option value="KS">Kansas</option>
                                        <option value="KY">Kentucky</option>
                                        <option value="LA">Louisiana</option>
                                        <option value="MA">Massachusetts</option>
                                        <option value="MD">Maryland</option>
                                        <option value="ME">Maine</option>
                                        <option value="MI">Michigan</option>
                                        <option value="MN">Minnesota</option>
                                        <option value="MO">Missouri</option>
                                        <option value="MS">Mississippi</option>
                                        <option value="MT">Montana</option>
                                        <option value="NC">North Carolina</option>
                                        <option value="ND">North Dakota</option>
                                        <option value="NE">Nebraska</option>
                                        <option value="NH">New Hampshire</option>
                                        <option value="NJ">New Jersey</option>
                                        <option value="NM">New Mexico</option>
                                        <option value="NV">Nevada</option>
                                        <option value="NY">New York</option>
                                        <option value="OH">Ohio</option>
                                        <option value="OK">Oklahoma</option>
                                        <option value="OR">Oregon</option>
                                        <option value="PA">Pennsylvania</option>
                                        <option value="PR">Puerto Rico</option>
                                        <option value="RI">Rhode Island</option>
                                        <option value="SC">South Carolina</option>
                                        <option value="SD">South Dakota</option>
                                        <option value="TN">Tennessee</option>
                                        <option value="TX">Texas</option>
                                        <option value="UT">Utah</option>
                                        <option value="VA">Virginia</option>
                                        <option value="VT">Vermont</option>
                                        <option value="WA">Washington</option>
                                        <option value="WI">Wisconsin</option>
                                        <option value="WV">West Virginia</option>
                                        <option value="WY">Wyoming</option>
                                    </Control.select>
                                </Col>
                                <Col md={2}>
                                    <Control.text
                                        model=".zip"
                                        id="zip"
                                        name="zip"
                                        placeholder="Zip"
                                        className="form-control"
                                    />

                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="contactType" md={{ size: 2 }}>How can we contact you?</Label>
                                <Col md={{ size: 3 }}>
                                    <Control.select
                                        model=".contactType"
                                        name="contactType"
                                        className="form-control"
                                        validators={{
                                            req
                                        }}
                                    >
                                        <option>By Email</option>
                                        <option>By Phone</option>
                                        <option>Don't contact me</option>
                                    </Control.select>
                                    <Errors 
                                        className="text-danger"
                                        model=".contactType"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            req: 'Required'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="feedback" md={2}>Your Feedback</Label>
                                <Col md={8}>
                                    <Control.textarea
                                        model=".feedback"
                                        id="feedback"
                                        name="feedback"
                                        placeholder="Feedback"
                                        rows="5"
                                        className="form-control"
                                        validators={{
                                            req,
                                            minLength: minLength(20),
                                            maxLength: maxLength(500)
                                        }}
                                    />
                                    <Errors 
                                        className="text-danger"
                                        model=".feedback"
                                        show="touched"
                                        component="div"
                                        messages={{
                                            req: 'Required',
                                            minLength: 'Must be 20 chars or more.',
                                            maxLength: 'Must be 500 chars or less.'
                                        }}
                                    />
                                </Col>
                            </Row>

                            <Row className="form-group">
                                <Col md={{ size: 8, offset: 2 }}>
                                    <Button type="submit" color="primary">
                                        Submit
                                    </Button>
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