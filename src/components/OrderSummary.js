import React from "react";

import "./OrderSummary.css";
import HorizontalLine from "components/HorizontalLine";
import LineItem from "./LineItem";
import ShippingLineItem from "./ShippingLineItem";
import SalesTaxLineItem from "./SalesTaxLineItem";
import MySavingsLineItem from "./MySavingsLineItem";
import CartItems from "./CartItems";
import { currency } from "components/utils";

export default function OrderSummary({ cart }) {
  const {
    subTotal,
    items,
    tax,
    shipping,
    total,
    totalSavings = 0,
    paymentMethods = [],
    shippingAddress
  } = cart;

  console.log(shippingAddress);

  if (subTotal) {
    return (
      <section className="OrderSummary">
        <div className="OrderSummary__pricing">
          <h2 className="OrderSummary__heading">Order Summary</h2>
          <HorizontalLine />
          <LineItem label="Subtotal" amount={currency(subTotal)} />
          {totalSavings > 0 && (
            <MySavingsLineItem amount={currency(totalSavings)} />
          )}
          <ShippingLineItem shipping={shipping} />
          <SalesTaxLineItem tax={tax} />
          {paymentMethods.map(value => (
            <LineItem label="Gift Card" amount={"-" + currency(value.amount)} />
          ))}
          <HorizontalLine />
          <LineItem label="Total:" amount={currency(total)} large={true} />
          {totalSavings > 0 && (
            <div className="OrderSummary__savings">
              You Saved{" "}
              <span className="OrderSummary__savings-amount">
                {currency(totalSavings)}
              </span>
            </div>
          )}
        </div>

        <CartItems cartItems={items} />
      </section>
    );
  }

  return null;
}
