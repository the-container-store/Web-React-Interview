import React, { useState } from "react";
import Icon from "components/Icon";

import "./Tooltip.css";

export default function Tooltip({
  block,
  children,
  className,
  message,
  tooltipSize,
  triggerText,
  triggerIcon,
  id,
  ...rest
}) {
  const [isShown, setIsShown] = useState(false);

  return (
    <span className="ToolTip__wrapper">
      <Trigger onClick={() => setIsShown(true)}>
        {triggerIcon ? (
          <Icon
            id={id}
            type={triggerIcon}
            className={isShown ? "ToolTip__icon--active" : "ToolTip__icon"}
          />
        ) : (
          triggerText
        )}
      </Trigger>
      {isShown && (
        <ClickOutside onClick={() => setIsShown(false)}>
          <div className="ToolTip" style={{ minWidth: tooltipSize }} {...rest}>
            <div className="ToolTip__message">
              {children || message}
              <Trigger
                className="ToolTip__trigger--close"
                onClick={() => setIsShown(false)}
              >
                <Icon id="closeToolTip" type="close" width="16px" />
              </Trigger>
            </div>
          </div>
        </ClickOutside>
      )}
    </span>
  );
}

function Trigger({ className, onClick, ...props }) {
  const classes = [className, "ToolTip__trigger"].filter(Boolean).join(" ");
  return <button className={classes} onClick={onClick} {...props} />;
}

function ClickOutside({ children, onClick }) {
  const refs = React.Children.map(children, () => React.createRef());
  const handleClick = e => {
    const isOutside = refs.every(ref => {
      return Boolean(ref.current) && !ref.current.contains(e.target);
    });

    if (isOutside) {
      onClick();
    }
  };

  React.useEffect(() => {
    document.addEventListener("click", handleClick);

    return function() {
      document.removeEventListener("click", handleClick);
    };
  });

  return React.Children.map(children, (element, idx) =>
    React.cloneElement(element, { ref: refs[idx] })
  );
}
