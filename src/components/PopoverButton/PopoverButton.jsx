import { useState } from "react";
import "./PopoverButton.scss";
function PopoverButton() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const togglePopover = () => {
    setIsPopoverOpen((prev) => !prev);
  };
  return (
    <div className="popover">
      <button onClick={togglePopover} className="popover__button">
        click Me
      </button>
      {isPopoverOpen && (
        <div
          className={
            isPopoverOpen
              ? "popover__content-block show"
              : "popover__content-block"
          }>
          <p>This is the popover content!</p>
        </div>
      )}
    </div>
  );
}

export default PopoverButton;
