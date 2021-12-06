import React, { useState, useContext } from "react";
import { Container, Button, Row, ListGroupItem } from "reactstrap";
import Checkout from "./CheckoutComponent";
import { AppContext } from "../context";
import { ListGroup, Card, Alert } from "react-bootstrap";


export default function Cart() {
    // ui for the cart itself and whatevers been ordered
    const [readyToPay, setReadyToPay] = useState(false);
    const [subtotal, setSubtotal] = useState(0)
    const { dispatchEvent, productsInCart } = useContext(AppContext);
    const [total, setTotal] = useState(0)


    const ItemsInCart = () => {
        let localTotal = 0;
        return (
            <Container>
                <ListGroup horizontal variant='flush'>
                    <ListGroupItem  className="fw-bold">Product</ListGroupItem>
                    <ListGroupItem>Roast</ListGroupItem>
                    <ListGroupItem>Price x Quantity</ListGroupItem>
                </ListGroup>
                {/* <Card> */}
                {productsInCart.map((prod) => {
                    localTotal += (prod.price * prod.quantity);
                    return (
                        <ListGroup horizontal variant='flush'>
                            <ListGroupItem>{prod.title}</ListGroupItem>
                            <ListGroupItem>{prod.roast} roast</ListGroupItem>
                            <ListGroupItem>{prod.price} x {prod.quantity}</ListGroupItem>
                        </ListGroup>
                        // <Card.Body>
                        //     <Card.Title>{prod.title}</Card.Title>
                        //     <Card.Text>{prod.roast} roast</Card.Text>
                        //     <Card.Text>${prod.price} x {prod.quantity}</Card.Text>
                        //     <Card.Text></Card.Text>
                        // </Card.Body>
                    )
                })}
                {setSubtotal(localTotal)}
                {/* </Card> */}
            </Container>
        )
    }

    const Subtotal = () => {
        let tax = subtotal * .15
        setTotal(tax + subtotal)
        return (
            <Container>
                <p>Subtotal: ${subtotal}</p>
                <p>Tax: ${tax}</p>
                <p>Total: ${total}</p>
                {/* what about taxes???????? */}
            </Container>
        )
    }



    return (
        <Container>
            {!readyToPay ?
                productsInCart.length > 0 ?
                    <>
                        <ItemsInCart />
                        <Subtotal />
                        <Button onClick={() => setReadyToPay(true)}>Ready to Pay!</Button>
                    </> : <Container>
                        <Alert variant='danger'>
                            <h3>Your cart is empty.</h3>
                        </Alert>
                    </Container>

                : <Container style={{ textAlign: 'center' }} >
                    <Checkout subtotal={total} />
                    <Button onClick={() => setReadyToPay(false)}>Changed my mind!</Button>
                </Container>
            }
        </Container>
    )
}