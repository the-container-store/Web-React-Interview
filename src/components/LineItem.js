import React from "react";
import cx from "classnames";
import "./LineItem.css";

export default function LineItem({ label, amount, large = false }) {
  return (
    <div className={cx(["LineItem", { "LineItem--large": large }])}>
      <div>{label}</div>
      <div className="LineItem__amount">{amount}</div>
    </div>
  );
}
