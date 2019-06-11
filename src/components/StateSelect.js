import React from "react";

import "./StateSelect.css";

const STATES = require("data/states.json");

function StateSelect({ cart, setCart }) {
  const selectState = stateOption => {
    const newAddress = { ...cart.shippingAddress, state: stateOption.value };
    setCart({ ...cart, shippingAddress: newAddress });
  };

  return (
    <div className="Input__Wrapper">
      <label className="Input__Label" htmlFor="state-select">
        State
      </label>
      <select
        id="state-select"
        className="StateSelect Input__Input"
        value={STATES.find(s => s.value === cart.shippingAddress.state)}
        onChange={selectState}
      >
        {STATES.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StateSelect;
