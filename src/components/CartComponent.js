import React, { useState, useContext } from "react";
import { Container, Button } from "reactstrap";
import Checkout from "./CheckoutComponent";
import { AppContext } from "../context";
import { ListGroup, Card } from "react-bootstrap";


export default function Cart() {
    // ui for the cart itself and whatevers been ordered
    const [readyToPay, setReadyToPay] = useState(false);
    const [subtotal, setSubtotal] = useState(0)
    const { dispatchEvent, productsInCart } = useContext(AppContext);



    const ItemsInCart = () => {
        let localTotal = 0;
        return (
            <Container>
                <Card>
                    {productsInCart.map((prod) => {
                        // setSubtotal(localT(prod.price * prod.quantity));
                        localTotal += (prod.price * prod.quantity);
                        return (
                            <Card.Body>
                                <Card.Title>{prod.title}</Card.Title>
                                <Card.Text>{prod.roast} roast</Card.Text>
                                <Card.Text>${prod.price} x {prod.quantity}</Card.Text>
                                <Card.Text></Card.Text>
                            </Card.Body>
                        )
                    })}
                    {setSubtotal(localTotal)}
                </Card>
            </Container>
        )
    }

    const Subtotal = () => {
        return (
            <Container>
                <p>{subtotal}</p>
                {/* what about taxes???????? */}
            </Container>
        )
    }



    return (
        <Container>
            {!readyToPay ?
                <>
                    <ItemsInCart />
                    <Subtotal />
                    <Button onClick={() => setReadyToPay(true)}>Ready to Pay!</Button>
                </>
                // {/* // if they click ready tcheckout, render checkiuot btns */}
                : <Container style={{ textAlign: 'center' }} >
                    <Checkout subtotal={subtotal}/>
                    <Button onClick={() => setReadyToPay(false)}>Changed my mind!</Button>
                </Container>
            }
        </Container>
    )
}