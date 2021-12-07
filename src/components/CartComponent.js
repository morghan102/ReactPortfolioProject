import React, { useState, useContext } from "react";
import { Container, Button, Row, ListGroupItem } from "reactstrap";
import Checkout from "./CheckoutComponent";
import { AppContext } from "../context";
import { ListGroup, Card, Alert, Table } from "react-bootstrap";


export default function Cart() {
    // ui for the cart itself and whatevers been ordered
    const [readyToPay, setReadyToPay] = useState(false);
    const [subtotal, setSubtotal] = useState(0)
    const { productsInCart } = useContext(AppContext);
    const [total, setTotal] = useState(0)


    const ItemsInCart = () => {
        let localTotal = 0;
        // let tax = subtotal * .15
        // setTotal(tax + subtotal)
        // setSubTotal(subtotal)
        return (
            <>
                <Table responsive='md'>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Roast</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Item Total</th>
                        </tr>
                    </thead>
                    {productsInCart.map((prod) => {
                        localTotal += (prod.price * prod.quantity);
                        return (
                            <tr horizontal variant='flush'>
                                <td>{prod.title}</td>
                                <td>{prod.roast} roast</td>
                                <td>{prod.price}</td>
                                <td>{prod.quantity}</td>
                                <td>${prod.price * prod.quantity}</td>
                            </tr>
                        )
                    })}
                </Table>
                {setSubtotal(localTotal)}
                <div className='checkout'>
                    <h4>Subtotal: ${localTotal}</h4>
                    <p>Shipping and taxes calculated at checkout</p>
                </div>
                {/* <Container style={{maxWidth: '50%', justifyContent: 'end', paddingRight: '0', display: 'flex'}}>
                <Table >
                    <tr>
                        <td>Subtotal</td>
                        <td>${subtotal}</td>
                    </tr>
                    <tr>
                        <td>Tax</td>
                        <td>${tax}</td>
                    </tr>
                    <tr>
                        <th>Total</th>
                        <td>${total}</td>
                    </tr>
                    {setSubtotal(localTotal)}
                </Table>
                </Container> */}
            </>
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
                        {/* <Subtotal /> */}
                        <Button onClick={() => setReadyToPay(true)}>Ready to Pay!</Button>
                    </> : <Container>
                        <Alert variant='danger'>
                            <h3>Your cart is empty.</h3>
                        </Alert>
                    </Container>

                : <Container style={{ textAlign: 'center' }} >
                    <Checkout subtotal={subtotal} />
                    <Button onClick={() => setReadyToPay(false)}>Changed my mind!</Button>
                </Container>
            }
        </Container>
    )
}