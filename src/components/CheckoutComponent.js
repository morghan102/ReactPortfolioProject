// import React, { useEffect, useState } from "react";
// import ReactDOM from "react-dom";
// import scriptLoader from "react-async-script-loader";


// //  const CLIENT = {
// //    sandbox:
// //      "TPE389GJABW5S",
// //    production:
// //      "your_production_key"
// //  };

// const CLIENT_ID = process.env.REACT_APP_PAYPAL_CLIENT_ID;
// //    process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;

// let PayPalButton = null;


// // class Cart extends React.Component {
// function Cart() {
//     //   constructor(props) {
//     //     super(props);

//     //     this.state = {
//     //       showButtons: false,
//     //       loading: true,
//     //       paid: false
//     //     };

//     window.React = React;
//     window.ReactDOM = ReactDOM;
//     //   }

//     const [showButtons, setShowButtons] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const [paid, setPaid] = useState(false);


//     // componentDidMount() {
//     //     const { isScriptLoaded, isScriptLoadSucceed } = this.props;

//     //     if (isScriptLoaded && isScriptLoadSucceed) {
//     //         PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
//     //         this.setState({ loading: false, showButtons: true });
//     //     }
//     // }
//     useEffect(() => {
//         const { isScriptLoaded, isScriptLoadSucceed } = scriptLoader;
//         console.log(scriptLoader)

//         if (isScriptLoaded && isScriptLoadSucceed) {
//             PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
//             // this.setState({ loading: false, showButtons: true });
//             setLoading(false);
//             setShowButtons(true)
//         }

//         const scriptJustLoaded = !showButtons && !isScriptLoaded && isScriptLoaded;

//         if (scriptJustLoaded) {
//             if (isScriptLoadSucceed) {
//                 PayPalButton = window.paypal.Buttons.driver("react", {
//                     React,
//                     ReactDOM
//                 });
//                 // this.setState({ loading: false, showButtons: true });
//             }
//         }

//     })

//     // componentWillReceiveProps(nextProps) {
//     //     const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

//     //     const scriptJustLoaded =
//     //         !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

//     //     if (scriptJustLoaded) {
//     //         if (isScriptLoadSucceed) {
//     //             PayPalButton = window.paypal.Buttons.driver("react", {
//     //                 React,
//     //                 ReactDOM
//     //             });
//     //             this.setState({ loading: false, showButtons: true });
//     //         }
//     //     }
//     // }
//     const createOrder = (data, actions) => {
//         return actions.order.create({
//             purchase_units: [
//                 {
//                     description: +"Mercedes G-Wagon",
//                     amount: {
//                         currency_code: "USD",
//                         value: 200
//                     }
//                 }
//             ]
//         });
//     };

//     const onApprove = (data, actions) => {
//         actions.order.capture().then(details => {
//             const paymentData = {
//                 payerID: data.payerID,
//                 orderID: data.orderID
//             };
//             console.log("Payment Approved: ", paymentData);
//             this.setState({ showButtons: false, paid: true });
//         });
//     };

//     // render() {
//     // const { showButtons, loading, paid } = this.state;

//     return (
//         <div className="main">
//             {/* {loading && <Spinner />} */}

//             {showButtons && (
//                 <div>
//                     <div>
//                         <h2>Items: Mercedes G-Wagon</h2>
//                         <h2>Total checkout Amount $200</h2>
//                     </div>

//                     <PayPalButton
//                         createOrder={(data, actions) => createOrder(data, actions)}
//                         onApprove={(data, actions) => onApprove(data, actions)}
//                     />
//                 </div>
//             )}

//             {paid && (
//                 <div className="main">
//                     {/* <img alt="Mercedes G-Wagon" src={Car} /> */}
//                     <h2>
//                         Congrats! you just paid for that picture. Work a little harder and
//                         you'll be able to afford the car itself{" "}
//                         <span role="img" aria-label="emoji">
//                             {" "}
//                             😉
//                         </span>
//                     </h2>
//                 </div>
//             )}
//         </div>
//     );
// }
// // }


// export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`)(Cart);


import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer
} from "@paypal/react-paypal-js";
import { Button, Row, Container, Col } from "reactstrap";
import { useHistory } from "react-router-dom";

// This values are the props in the UI

// Custom component to wrap the PayPalButtons and handle currency changes



export default function Checkout(props) {
  const [paid, setPaid] = useState(false)
  let history = useHistory();
  const amount = props.subtotal;
  const currency = "USD";
  const style = { "layout": "vertical" };



  const PaymentSuccessful = () => {
    if (paid) return (
      <Container>
        <Row>
          <p>Thank you for ordering. Your item will be roasted, packaged, and shipped within 5 business days.</p>
        </Row>
        <Row>
          {/* reset page */}
          <Col>
            <p>Want to make another order?</p>
          </Col>
          <Col>
            <Button
              color='warning'
              onClick={() => handleRenavigate()}
            >Browse our offerings</Button>
          </Col>
        </Row>
      </Container>
    )
    else return null;
  }

  const handleRenavigate = () => {
    history.push('/products')
  }

  // i had this outside of checkout b4, not 100% sure itll work now
  // add venmo options
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);


    const onApprove = (data, actions) => {
      return actions.order.capture().then((details) => {
        const paymentData = {
          payerID: data.payerID,
          orderID: data.orderID
        }
        console.log('Payment successful: ', paymentData)
        // alert('Transaction completed by ' + details.payer.name.given_name);
        setPaid(true)
        // {<PaymentSuccessful />}
      });
    }

    const createOrder = (data, actions) => {
      return actions.order
        .create({
          purchase_units: [
            {
              description: +'itemDynamicallyDefinedDoIConcatThemHere??',
              amount: {
                currency_code: currency,
                value: amount,
              },
            },
          ],
        })
        .then((orderId) => {
          // idk what this is

          // Your code here after create the order
          return orderId;
        });
    }

    return (<>
      {(showSpinner && isPending) && <div className="spinner" />}
      {!paid ?
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          // fundingSource={undefined}
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        // onError= https://developer.paypal.com/docs/business/javascript-sdk/javascript-sdk-reference/#onerror
        />
        : null}
    </>
    );
  }






  return (
    // <div style={{ maxWidth: "750px", minHeight: "200px" }}>
    <PayPalScriptProvider
      options={{
        "client-id": process.env.REACT_APP_PAYPAL_CLIENT_ID,
        components: "buttons",
        currency: "USD"
      }}
    >
      <ButtonWrapper
        currency={currency}
        showSpinner={false}
      />
      <PaymentSuccessful />
    </PayPalScriptProvider>
    // </div>
  );
}






// import React from "react";
// import ReactDOM from "react-dom";
// import scriptLoader from "react-async-script-loader";


//  const CLIENT = {
//    sandbox:
//      "TPE389GJABW5S",
//    production:
//      "your_production_key"
//  };

//  const CLIENT_ID = process.env.REACT_APP_PAYPAL_CLIENT_ID;
// //    process.env.NODE_ENV === "production" ? CLIENT.production : CLIENT.sandbox;

// let PayPalButton = null;
// class PaypalButton extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       showButtons: false,
//       loading: true,
//       paid: false
//     };

//     window.React = React;
//     window.ReactDOM = ReactDOM;
//   }

//   componentDidMount() {
//     const { isScriptLoaded, isScriptLoadSucceed } = this.props;

//     if (isScriptLoaded && isScriptLoadSucceed) {
//       PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
//       this.setState({ loading: false, showButtons: true });
//     }
//   }

//   componentWillReceiveProps(nextProps) {
//     const { isScriptLoaded, isScriptLoadSucceed } = nextProps;

//     const scriptJustLoaded =
//       !this.state.showButtons && !this.props.isScriptLoaded && isScriptLoaded;

//     if (scriptJustLoaded) {
//       if (isScriptLoadSucceed) {
//         PayPalButton = window.paypal.Buttons.driver("react", {
//           React,
//           ReactDOM
//         });
//         this.setState({ loading: false, showButtons: true });
//       }
//     }
//   }
//   createOrder = (data, actions) => {
//     return actions.order.create({
//       purchase_units: [
//         {
//           description: +"Mercedes G-Wagon",
//           amount: {
//             currency_code: "USD",
//             value: 200
//           }
//         }
//       ]
//     });
//   };

//   onApprove = (data, actions) => {
//     actions.order.capture().then(details => {
//       const paymentData = {
//         payerID: data.payerID,
//         orderID: data.orderID
//       };
//       console.log("Payment Approved: ", paymentData);
//       this.setState({ showButtons: false, paid: true });
//     });
//   };

//   render() {
//     const { showButtons, loading, paid } = this.state;

//     return (
//       <div className="main">
//         {/* {loading && <Spinner />} */}

//         {showButtons && (
//           <div>
//             <div>
//               <h2>Items: Mercedes G-Wagon</h2>
//               <h2>Total checkout Amount $200</h2>
//             </div>

//             <PayPalButton
//               createOrder={(data, actions) => this.createOrder(data, actions)}
//               onApprove={(data, actions) => this.onApprove(data, actions)}
//             />
//           </div>
//         )}

//         {paid && (
//           <div className="main">
//             {/* <img alt="Mercedes G-Wagon" src={Car} /> */}
//             <h2>
//               Congrats! you just paid for that picture. Work a little harder and
//               you'll be able to afford the car itself{" "}
//               <span role="img" aria-label="emoji">
//                 {" "}
//                 😉
//               </span>
//             </h2>
//           </div>
//         )}
//       </div>
//     );
//   }
// }


//  export default scriptLoader(`https://www.paypal.com/sdk/js?client-id=${CLIENT_ID}`)(PaypalButton);