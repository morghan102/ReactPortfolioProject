import React, { useState } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import { AppContext } from './context';
// import { Provider } from 'react-redux';
// import { ConfigureStore } from './redux/configureStore';

import FetchImages from './shared/firebaseFetchImages';

import './App.css';


// const store = ConfigureStore();

function App() {

  const [pictureURLs, setPictureURLs] = useState([])
  const [productsInCart, setProductsInCart] = useState([])

  const dispatchEvent = (actionType, payload) => {
    switch (actionType) {
      // case 'ADD_AMOUNT_TO_CART':
      //   cart[item] = payload;
      //   return
      case 'ADD_ITEM_TO_CART':
        setProductsInCart(payload);
        return
      case 'RESET_CART':
        setProductsInCart([]);
        return
      default:
        return;
    }
  }


  return (
    // <Provider store={store}>
    <BrowserRouter>
      <AppContext.Provider value={{ productsInCart, dispatchEvent, pictureURLs }}>

        <div className="App">
          <Main />
          {/* <CoffeeProducts /> */}
        </div>
      </AppContext.Provider>
    </BrowserRouter>
    // </Provider>
  );
}

export default App;
