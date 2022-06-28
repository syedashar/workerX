import React from "react";
import SectionHeading from "../sectionHeading";
import { motion } from "framer-motion";
import { iconVariants } from "animation/headingWithIconVariants";
import { Image } from "antd";

const HeadingWithIconSection = ({
  headingMaxWidth,
  headingText,
  subText,
  icon,
}) => {
  return (
    <div className="heading_with_icon_section_wrapper container">
      <SectionHeading
        prependText={headingText}
        subText={subText}
        textColor="white"
        maxWidth={headingMaxWidth}
      />
      {icon && (
        <motion.div
          initial="hidden"
          animate="show"
          variants={iconVariants}
          className="icon_wrapper"
          style={{ backgroundImage: `url(${icon})` }}
        ></motion.div>
      )}
    </div>
  );
};

export default HeadingWithIconSection;
