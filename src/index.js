import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import firebase from "./firebase";
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { reducer } from './reducers/blogpost-reducer';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';


const store = createStore(reducer, applyMiddleware(thunk, logger));//this is eventually rootReducer(?)
// console.log(store)
store.subscribe(() =>
  console.log(store.getState())
);
const rrfProps = {
  firebase,
  config: {
    userProfile: "users"
  },
  dispatch: store.dispatch,
  createFirestoreInstance
}

// const initialOptions = { //not sure if i want the scriptprovider here or in the cart
//   "client-id": "sb",
//   currency: "USD",
//   intent: "capture",
//   "data-client-token": "abc123xyz==",
// };


ReactDOM.render(
  <React.StrictMode>
    {/* top provider is redux: provides our Redux store's context */}
    <Provider store={store}>
      {/* <PayPalScriptProvider options={initialOptions}> */}
        {/* provides Firebase and Firestore context */}
        {/* <ReactReduxFirebaseProvider {...rrfProps}> */}
        <App />
        {/* </ReactReduxFirebaseProvider> */}
      {/* </PayPalScriptProvider> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
