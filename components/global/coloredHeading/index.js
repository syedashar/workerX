import React from "react";

const ColoredHeading = ({ title, ...rest }) => {
  return (
    <span className="colored_heading" {...rest}>
      {title}
    </span>
  );
};

export default ColoredHeading;
