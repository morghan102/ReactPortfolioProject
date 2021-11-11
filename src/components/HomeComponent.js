import React from 'react';
import { Col, Container, Row, Card, CardImg, CardGroup, CardBody, CardFooter, CardText, CardTitle } from 'reactstrap';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// https://yourstory.com/2017/03/what-is-hero-image

function Home() {
    return (
        <Container>
            {/* //img classes dont do anuything i think */}
            {/* // img isnt centered in carousel box. box itself is centered */}
            {/* <Container className="container mt-5 pt-5 justify-content-center"> */}
            <Row className='justify-content-center'>
                <Col className="col-md-8 mx-auto justify-content-center border">
                    <Carousel class="carousel slide carousel-fade justify-content-center" infiniteLoop autoPlay width='50%'>
                        <div className='justify-content-center align-items-center'>
                            <img className="d-block w-100 img-fluid" src='../assets/images/arabica.jpg' />
                            <p className='legend'>image 1</p>
                        </div>
                        <div>
                            <img className="d-block w-100 img-fluid" src='../assets/images/arabica.jpg' />
                            <p className='legend'>image 1</p>
                        </div>
                        <div>
                            <img className="d-block w-100 img-fluid" src='../assets/images/arabica.jpg' />
                            <p className='legend'>image 1</p>
                        </div>
                    </Carousel>
                </Col>
            </Row>
            {/* </Container> */}
            <Row>
                <CardGroup>
                    <Card>
                        <CardImg src="../assets/images/arabica.jpg" />
                        <CardBody>
                            <CardTitle>Products</CardTitle>
                            <CardText>
                            See what's new or choose between your favorites.
                            </CardText>
                        </CardBody>
                        <CardFooter>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardImg src="../assets/images/arabica.jpg" />
                        <CardBody>
                            <CardTitle>Blog</CardTitle>
                            <CardText>
                            Learn about Fair-Trade and more!
                            </CardText>
                        </CardBody>
                        <CardFooter>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardFooter>
                    </Card>
                    <Card>
                        <CardImg src="../assets/images/arabica.jpg" />
                        <CardBody>
                            <CardTitle>About Us</CardTitle>
                            <CardText>
                            Learn about our wonderful company.
                            </CardText>
                        </CardBody>
                        <CardFooter>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardFooter>
                    </Card>
                </CardGroup>
            </Row>
        </Container>
    );

}

export default Home;