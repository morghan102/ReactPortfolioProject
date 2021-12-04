import React, { Component, useContext, useEffect, useState } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, Container, Row, Col } from 'reactstrap';
import { Alert, Modal, ModalBody, ModalFooter, ModalTitle } from 'react-bootstrap';
import firebase, { storage, firestore } from '../firebase';
import { AppContext } from '../context';


const CoffeeProducts = () => {
    const { dispatchEvent, productsInCart } = useContext(AppContext);
    const [products, setProducts] = useState([])
    let storageRef = storage.ref()
    const [pictureURLs, setPictureURLs] = useState([])
    const [show, setShow] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null)

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

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
        setSelectedProduct(prod)
        setShow(true)
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setShow(false);
    }

    const handleAdd = (item) => {
        let newArr = productsInCart;
        // newArr.push([`$${prod.price}`, prod.title, quantity, roast]);
        newArr.push(item)
        dispatchEvent('ADD_ITEM_TO_CART', newArr)
        handleCloseModal()
        alertCountdown()
    }

    const alertCountdown = () => {
        setShowAlert(true)
        setTimeout(() => {
            setShowAlert(false)
        }, 3000);
    }

    const capWord = string => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const ModalProduct = () => {
        let quantity = 1;
        let roast = 'light';

        return selectedProduct ? (
            <div className='overlay'>
                <Modal show={show} onHide={handleCloseModal} centered>
                    <Modal.Header>
                        <ModalTitle>{capWord(selectedProduct.title)}</ModalTitle>
                    </Modal.Header>
                    <ModalBody>
                        <p>{capWord(selectedProduct.fullDescription)}</p>
                        <p>${selectedProduct.price}/lb</p>
                        <Row>
                            <Col>
                                <label>
                                    Quantity: <br />
                                    <input type="number" min={1} placeholder={1} onChange={(num) => quantity = parseInt(num.target.value)} className={'h-50 mt-2 w-50'} />
                                </label>
                            </Col>
                            <Col>
                                <label>
                                    Roast:<br />
                                    <select onChange={(val) => roast = val.target.value} className={'mt-2 w-100 h-100'}>
                                        <option value="light">Light</option>
                                        <option value="medium">Medium</option>
                                        <option value="fullCity">Full City</option>
                                        <option value="dark">Dark</option>
                                        <option value="other">Other</option>
                                    </select>
                                </label>
                            </Col>
                        </Row>
                    </ModalBody>
                    <ModalFooter>
                        <Button variant='primary' onClick={() => handleAdd({ 'title': selectedProduct.title, 'price': selectedProduct.price, 'quantity': quantity, 'roast': roast })}>Add to Cart</Button>
                        <Button variant='danger' onClick={handleCloseModal}>Close</Button>
                        {/* btn colors and the closeBtn */}
                        {/* EVENTUALLY make this a full screen modal that has picture of the farm its from, maybe farmers too. More like the html version */}
                    </ModalFooter>
                </Modal>
            </div>
        ) : null;
    }


    return (
        <>
            <Alert show={showAlert} variant={'success'} className="d-flex justify-content-center mb-5">
                <Alert.Heading>Item added to cart!</Alert.Heading>
            </Alert>


            <Container>
                <Row className='flex list-group-sm list-group-flush-md' xs={1} md={2} lg={3}>
                    {products ? products.map((prod) => {
                        return (
                            <>
                                <Card>
                                    <CardImg top className='' width="100%" src={prod.img} alt={prod.title + ' coffee'} />
                                    <CardBody>
                                        <CardTitle tag="h5">{capWord(prod.title)}</CardTitle>
                                        <CardText>{prod.description}</CardText>
                                        <CardText>${prod.price}/lb</CardText>
                                        {/* make so that the btn is a modal giving more info and option to select the roast */}

                                    </CardBody>
                                    <Row style={{justifyContent: 'center', marginBottom: 10}}>
                                        <Button color="warning" onClick={() => handleModalOpen(prod)}>Choose Your Roast</Button>
                                        </Row>
                                </Card>
                            </>
                        )
                    }) : null}
                    <ModalProduct />

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