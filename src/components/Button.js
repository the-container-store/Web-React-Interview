import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.css";

const variants = ["primary", "secondary"];
const propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(variants)
};

export default function Button({
  children,
  className,
  type = "button",
  variant = "primary",
  ...rest
}) {
  if (!variants.includes(variant)) {
    variant = "primary";
  }

  const classes = classNames(
    "Button",
    {
      "Button--primary": "primary" === variant,
      "Button--secondary": "secondary" === variant
    },
    className
  );
  return (
    <button className={classes} type={type} {...rest}>
      {children}
    </button>
  );
}

Button.propTypes = propTypes;
