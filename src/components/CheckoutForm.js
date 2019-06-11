import React from "react";

import Input from "./Input";
import StateSelect from "./StateSelect";
import "./CheckoutForm.css";

export default function CheckoutForm({ cart, setCart }) {
  const onZipChange = e => {
    console.log(e.target.value);
  };

  return (
    <div>
      <div className="Checkout__Row">
        <Input id="first-name" label="First Name" />
        <Input id="last-name" label="Last Name" />
      </div>
      <div className="Checkout__Row">
        <Input id="address-1" label="Address Line 1" />
      </div>
      <div className="Checkout__Row">
        <Input id="address-2" label="Address Line 2" />
      </div>
      <div className="Checkout__Row">
        <Input id="city" label="City" />
        <StateSelect cart={cart} setCart={setCart} />
        <Input id="zip" label="Zip" onChange={onZipChange} />
      </div>
    </div>
  );
}
