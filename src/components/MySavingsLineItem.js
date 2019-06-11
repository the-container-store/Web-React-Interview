import React from "react";
import PropTypes from "prop-types";
import "./MySavingsLineItem.css";
import Icon from "components/Icon";

const propTypes = {
  amount: PropTypes.string,
  authenticated: PropTypes.bool
};

export default function MySavingsLineItem({ amount, authenticated }) {
  return (
    <div className="MySavingsLineItem">
      <div>
        {authenticated && (
          <Icon
            id="pop-logo"
            type="popLogo"
            height="16px"
            className="MySavingsLineItem__pop-logo"
          />
        )}
        {authenticated ? "Pop Savings" : "My Savings"}
      </div>
      <div className="MySavingsLineItem__amount">-{amount}</div>
    </div>
  );
}

MySavingsLineItem.propTypes = propTypes;
