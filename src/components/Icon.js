import React from "react";
import PropTypes from "prop-types";
import Types from "./IconTypes";

const propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(Types)).isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

const defaultProps = {
  color: "#747477"
};

export default function Icon({
  className,
  color,
  height,
  id,
  title,
  type,
  width
}) {
  const icon = Types[type];
  const iconViewBox = getViewBox(icon, type);
  const styles = {
    height: Boolean(height) ? height : getHeight(iconViewBox, width),
    width: Boolean(width) ? width : getWidth(iconViewBox, height)
  };

  return icon.element ? (
    React.cloneElement(icon.element, {
      style: styles,
      preserveAspectRatio: "xMinYMin",
      role: "img",
      className,
      id
    })
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={iconViewBox}
      style={styles}
      aria-labelledby={`${id}-title`}
      role="img"
      preserveAspectRatio="xMinYMin"
      className={className}
    >
      <title id={`${id}-title`}>{title || icon.title}</title>
      <path
        fill={color}
        d={icon.pathD}
        strokeWidth={icon.strokeWidth}
        stroke={icon.strokeWidth ? color : null}
      />
    </svg>
  );
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

const getWidth = get("width");
const getHeight = get("height");

function get(dimension) {
  return (viewbox, size) => {
    const VALUE = 1,
      UNIT = 2,
      WIDTH = 2,
      HEIGHT = 3;
    const box = viewbox.split(" ");

    if (!size) {
      // at this point, there is neither a height nor a width
      // so serve up the default dimension determined by the viewbox
      return (dimension === "width" ? box[WIDTH] : box[HEIGHT]) + "px";
    }

    const sizeRegex = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
    const sizeParts = size.match(sizeRegex);
    const value = sizeParts[VALUE];
    const unit = sizeParts[UNIT];
    const ratio =
      dimension === "width"
        ? box[WIDTH] / box[HEIGHT]
        : box[HEIGHT] / box[WIDTH];
    return `${value * ratio}${unit}`;
  };
}

function getViewBox(icon, type) {
  if (!icon.element) {
    return icon.viewBox;
  }
  if (!icon.element.props) {
    throw new Error("React element required for Icon of type `" + type + "`.");
  }
  if (!icon.element.props.viewBox) {
    throw new Error(
      "Please supply a viewBox prop to the element of type `" + type + "`."
    );
  }
  return icon.element.props.viewBox;
}
