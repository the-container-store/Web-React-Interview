import React from "react";

import "./Input.css";

function Input({ id, label, onChange }) {
  return (
    <div className="Input__Wrapper">
      <label className="Input__Label" htmlFor={id}>
        {label}
      </label>
      <input id={id} className="Input__Input" onChange={onChange} />
    </div>
  );
}

export default Input;
