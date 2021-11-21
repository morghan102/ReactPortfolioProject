import React, { Component, useEffect, useState } from 'react';
import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody, Container
} from 'reactstrap';
import firebase, { storage, firestore } from '../firebase';



const CoffeeProducts = () => {
    const [products, setProducts] = useState([])
    let storageRef = storage.ref()
    const [pictureURLs, setPictureURLs] = useState([])

    //loads pictures into picutreUrls
    useEffect(() => {

        fetchProducts()



        // const fetchImages = async () => {
        //     let result = await storageRef.child('productImages').listAll();
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
        // console.log(data)
        data.docs.forEach(item => {
            // console.log(item.data())
            let newArr = products
            setProducts(newArr.push(item.data()))
        })
        console.log(typeof products) //obj here
    }



    return (
        <>
            {/* iterate over the product list AND the prod images */}
            {/* images will have to be named for the product or this wont work */}
            <Container>
                <CardGroup>
                    {/* number here */}
                    {console.log( typeof products)}
                    {/* {products.length !== 0 ? products.forEach((prod) => {
                        return (
                            <Card>
                                <CardImg top width="100%" src={prod.img.path} alt={prod.description} />
                                <CardBody>
                                    <CardTitle tag="h5">{prod.title}</CardTitle>
                                    <CardText>{prod.description}</CardText>
                                    <Button color="warning">Button</Button>
                                </CardBody>

                            </Card>
                        )
                        // console.log(prod)
                    }) : null} */}
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
                </CardGroup>
            </Container>
        </>

    );
};

export default CoffeeProducts;