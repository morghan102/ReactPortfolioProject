// import { PayPalButtons } from "@paypal/react-paypal-js";
import PaypalButton from './PaypalButton';
import React, { useState } from "react";
import { Container } from "reactstrap";

function Cart() {

    const [showPaypal, setShowPaypal] = useState(false);

    return (
        <Container>
            {showPaypal ? <PaypalButton />
                : <div className="main">
                    <h2> Buy this Mercedes at a giveaway price (Super Cheap) </h2>
                    {/* <img alt="Mercedes G-Wagon" src={Car} /> */}
                    <h3>
                        <b>$200</b>
                    </h3>
                    <button onClick={() => setShowPaypal(true)}> Pay </button>
                </div>
            }
        </Container>
    )
}

export default Cart;