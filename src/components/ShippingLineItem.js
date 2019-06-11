import React from "react";

import LineItem from "./LineItem";
import { currency } from "components/utils";

export default function ShippingLineItem({ shipping }) {
  const getAmount = () => {
    if (shipping && shipping === 0) {
      return "FREE";
    } else if (shipping && shipping > 0) {
      return currency(shipping);
    }
    return "---";
  };

  return <LineItem label={"Shipping"} amount={getAmount()} />;
}
