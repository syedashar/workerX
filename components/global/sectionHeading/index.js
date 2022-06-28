import React from "react";
import ColoredHeading from "../coloredHeading";

const SectionHeading = ({
  prependText = "",
  blueText = "",
  appendText = "",
  subText = "",
  centered = false,
  coloredHeadingText = "",
  maxWidth = null,
  textColor = "black",
  style,
  ...rest
}) => {
  return (
    <div
      className={`section_heading_wrapper ${
        centered ? "centered" : ""
      } ${textColor}`}
      style={{ maxWidth: maxWidth || "auto", ...style }}
      {...rest}
    >
      {coloredHeadingText && <ColoredHeading title={coloredHeadingText} />}
      <h1 className="section_heading">
        {prependText} <mark>{blueText}</mark> {appendText}
      </h1>
      <p>{subText}</p>
    </div>
  );
};

export default SectionHeading;
