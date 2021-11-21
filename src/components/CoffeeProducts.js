import React, { Component, useEffect, useState } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, Container, Row } from 'reactstrap';
import { Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap';
import firebase, { storage, firestore } from '../firebase';



const CoffeeProducts = () => {
    const [products, setProducts] = useState([])
    let storageRef = storage.ref()
    const [pictureURLs, setPictureURLs] = useState([])
    const [show, setShow] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    //loads pictures into picutreUrls
    useEffect(() => {

        fetchProducts()



        // const fetchImages = async () => {
        //     let result = await storageRef.child('productpage').listAll();
        //     let urlPromises = result.items.map(imageRef => imageRef.getDownloadURL())
        //     return Promise.all(urlPromises)
        // }

        // const loadImages = async () => {
        //     const urls = await fetchImages()
        //     setPictureURLs(urls)
        // }
        // loadImages()
    }, [])
    const fetchProducts = async () => {
        let res = firestore.collection('products')
        const data = await res.get();
        let newArr = [];
        data.docs.forEach(item => {
            newArr.push(item.data())
        })
        setProducts(newArr)
    }

    const handleModalOpen = (prod) => {
        handleShow(true)
        setSelectedProduct(prod)
    };

    const handleAdd = () => {
        console.log('add to shopping cart')
    }

    const ModalEle = () => {
        return selectedProduct ? (
            <div className='overlay'>
                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton={true}>
                        <ModalTitle>{selectedProduct.title}</ModalTitle>
                    </Modal.Header>
                    <ModalBody><p>{selectedProduct.fullDescription}</p></ModalBody>
                    <ModalFooter>
                        <Button variant='danger' onClick={handleClose}>Close</Button>
                        <Button variant='primary' onClick={() => handleAdd()}>Add to Cart</Button>
                        {/* btn colors and the closeBtn */}
                    </ModalFooter>
                </Modal>
            </div>
        ) : null;
    }


    return (
        <>
            <Container>
                <Row className='flex list-group-sm list-group-flush-md ' xs={1} md={2} lg={3}>
                    {products ? products.map((prod) => {
                        return (
                            <>
                                <Card>
                                    <CardImg top className='' width="100%" src={prod.img} alt={prod.title + ' coffee'} />
                                    <CardBody>
                                        <CardTitle tag="h5">{prod.title.toUpperCase()}</CardTitle>
                                        <CardText>{prod.description}</CardText>
                                        {/* make so that the btn is a modal giving more info and option to select the roast */}
                                        <Button color="warning" onClick={() => handleModalOpen(prod)}>Choose Your Roast</Button>
                                    </CardBody>
                                </Card>
                                <ModalEle />
                            </>
                        )
                    }) : null}
                    {/* <Card>
                        <CardImg top width="100%" src={pictureURLs[0]} alt="Bolivian coffee beans"/>
                        <CardBody>
                            <CardTitle tag="h5">Bolivian Coffee</CardTitle>
                            <CardText>Great tasting Bolivian coffee.  Good to the last drop.</CardText>
                            <Button color="warning">Button</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="../assets/images/arabica.jpg" alt="Dark roast coffee" />
                        <CardBody>
                            <CardTitle tag="h5">Arabica</CardTitle>
                            <CardText>This is good coffee.</CardText>
                            <Button color="warning">Button</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="../assets/images/Colombian.jpeg" alt="Colombian coffee beans" />
                        <CardBody>
                            <CardTitle tag="h5">Colombian</CardTitle>
                            <CardText>I can really use a good cup of Colombian coffee</CardText>
                            <Button color="warning">Button</Button>
                        </CardBody>
                    </Card>
                </CardGroup>
            </Container>
            <Container>
                <CardGroup>
                    <Card>
                        <CardImg top width="100%" src="../assets/images/Guatemalan 2.jpg" alt="Argentine coffee beans" />
                        <CardBody>
                            <CardTitle tag="h5">Argentina</CardTitle>
                            <CardText>Great tasting Argentine coffee.  Good to the last drop.</CardText>
                            <Button color="warning">Button</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="../assets/images/Honduran 2.jpeg" alt="Honduran coffee beans" />
                        <CardBody>
                            <CardTitle tag="h5">Honduran</CardTitle>
                            <CardText>Have you ever wondered who thought of making a drink out of a bean?  Aren't you glad they did?</CardText>
                            <Button color="warning">Button</Button>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg top width="100%" src="../assets/images/genericCoffeeBag.png" alt="French roast beans" />
                        <CardBody>
                            <CardTitle tag="h5">French Roast</CardTitle>
                            <CardText>What if the French had nothing to do with this roast?</CardText>
                            <Button color="warning">Button</Button>
                        </CardBody>
                    </Card> */}
                </Row>
            </Container>
        </>

    );
};

export default CoffeeProducts;