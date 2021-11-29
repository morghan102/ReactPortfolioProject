import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import Checkout from "./CheckoutComponent";



export default function Cart() {

    // ui for the cart itself and whatevers been ordered
    const [readyToPay, setReadyToPay] = useState(false)















    return (
        <Container>
            {!readyToPay ?
                <>
                    <ShoppingCart />
                    <PriceTotal />
                </>
                // {/* // if they click ready tcheckout, render checkiuot btns */}
                : <Container style={{ textAlign: 'center' }} >
                    <Checkout />
                </Container>
            }
        </Container>
    )
}