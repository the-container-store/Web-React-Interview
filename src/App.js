import React, { useState } from "react";
import Banner from "components/Banner";
import OrderSummary from "components/OrderSummary";
import CheckoutForm from "components/CheckoutForm";

import "./App.css";

function App() {
  const initialCart = require("./data/cart.json");

  const [cart, setCart] = useState(initialCart);

  return (
    <div className="App">
      <Banner>
        <h1 className="App__heading">Secure Checkout</h1>
      </Banner>
      <div className="App__row">
        <div className="App__left-col">
          <CheckoutForm cart={cart} setCart={setCart} />
        </div>
        <div className="App__right-col">
          <OrderSummary cart={cart} />
        </div>
      </div>
    </div>
  );
}

export default App;
