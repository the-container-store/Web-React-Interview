const DEFAULT_UNITS = "USD";

/**
 * Convert a numeric amount an units to the appropriate currency string.
 * Note: We expect that we will only ever have to support USD, but just
 * in case we ever need to support something other than USD, we want to
 * abstract this currency conversion to a dedicate file so we will only
 * have to make this change in one place when that day comes...
 */
export const currency = (amount, units = DEFAULT_UNITS) => {
  switch (units) {
    case "USD":
    default:
      return toUsd(amount);
  }
};

const toUsd = amount => {
  return amount.toLocaleString("en-US", { style: "currency", currency: "USD" });
};

export const notLastItem = (cartItems, index) => {
  return index !== cartItems.length - 1;
};

export const countItems = cartItems => {
  return cartItems
    .map(cartItem => cartItem.quantity)
    .reduce((a, b) => a + b, 0);
};

export function trimToMaxChars(string, maxChars = 25) {
  if (string.length <= maxChars) {
    return string;
  }
  const trimmedString = string.substring(0, maxChars).trim();
  return `${trimmedString}...`;
}
