import React, { Fragment } from "react";
import "./CartItems.css";
import HorizontalLine from "components/HorizontalLine";
import CartItem from "./CartItem";
import { countItems, notLastItem } from "./utils";

export default function CartItems({ cartItems }) {
  return (
    <div className="CartItems">
      <div className="CartItems__heading">{countItems(cartItems)} Items</div>
      <HorizontalLine />
      {cartItems.map((cartItem, index) => {
        return (
          <Fragment key={`cart-item-${index}`}>
            <CartItem {...cartItem} />
            {notLastItem(cartItems, index) && <HorizontalLine />}
          </Fragment>
        );
      })}
    </div>
  );
}
