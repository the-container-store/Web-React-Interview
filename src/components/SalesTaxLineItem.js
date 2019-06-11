import React from "react";

import "./SalesTaxLineItem.css";
import LineItem from "./LineItem";
import { currency } from "components/utils";

export default function SalesTaxLineItem({ tax, isPickup }) {
  return (
    <>
      <LineItem
        label="Sales Tax*"
        amount={tax != null ? currency(tax) : "---"}
      />
      <div className="SalesTaxLineItem__legal">
        {isPickup ? "Calculated based on store" : "Calculated based on address"}
      </div>
    </>
  );
}
