import React from "react";
import { trimToMaxChars, currency } from "components/utils";
import "./CartItem.css";
import he from "he";
import Tooltip from "components/ToolTip";
import Icon from "components/Icon";

export default function CartItem({
  description,
  quantity,
  imageUrl,
  price,
  retailPrice,
  totalPrice,
  totalRetailPrice,
  isDiscounted,
  additionalShipFee = 0,
  prop65Warnings = []
}) {
  return (
    <>
      <CartItemRow>
        <div>
          <img className="CartItem__image" src={imageUrl} alt={description} />
        </div>
        <div className="CartItem__details">
          <LineItem>{trimToMaxChars(he.decode(description))}</LineItem>
          <LineItem>
            {isDiscounted ? (
              <>
                <span className="CartItem__price--sale">
                  {currency(price)}/ea
                </span>
                <span className="CartItem__price--originally">
                  {currency(retailPrice)}/ea
                </span>
              </>
            ) : (
              `${currency(price)}/ea`
            )}
          </LineItem>
          <LineItem>Qty: {quantity}</LineItem>
        </div>
        <CartItemPrice>
          {isDiscounted ? (
            <>
              <div className="CartItem__price--sale">
                {currency(totalPrice)}
              </div>
              <div className="CartItem__price--originally">
                {currency(totalRetailPrice)}
              </div>
            </>
          ) : (
            currency(totalPrice)
          )}
        </CartItemPrice>
      </CartItemRow>
      {additionalShipFee > 0 && (
        <CartItemRow>
          <AdditionalShippingFee
            additionalShipFee={additionalShipFee}
            quantity={quantity}
          />
        </CartItemRow>
      )}
      {prop65Warnings.map((msg, index) => {
        return (
          <CartItemRow key={`prop-65-warning-${index}`}>
            <Prop65Warning>{msg}</Prop65Warning>
          </CartItemRow>
        );
      })}
    </>
  );
}

function LineItem(props) {
  return <div className="CartItem__line-item" {...props} />;
}

function CartItemRow(props) {
  return <div className="CartItem__row" {...props} />;
}

function CartItemPrice(props) {
  return <div className="CartItem__price" {...props} />;
}

function AdditionalShippingFee({ additionalShipFee, quantity }) {
  return (
    <>
      <div className="CartItem__additional-fee">
        <LineItem>
          <Tooltip
            triggerText="Addt'l Shipping Fee"
            message={
              "Extremely heavy items or those that are big and bulky require additional fees to cover the expense of shipping."
            }
            variant={"tooltipLeft"}
            tooltipSize="300px"
          />{" "}
          {currency(additionalShipFee)}/ea
        </LineItem>
      </div>
      <CartItemPrice>{currency(additionalShipFee * quantity)}</CartItemPrice>
    </>
  );
}

function Prop65Warning({ children }) {
  return (
    <div className="CartItem__warning">
      <strong className="CartItem__warning-title">
        <Icon type="alertBorder" id="prop65Icon" />
        WARNING:&nbsp;
      </strong>
      {children}
    </div>
  );
}
