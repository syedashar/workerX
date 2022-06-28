import { message } from "antd";
import { Button, SectionHeading } from "components/global";
import React, { useState } from "react";
import classes from "stylesheet/pages/landingPage/heroSection/introSectionStyles.module.scss";
import { splitText, validateEmail } from "utils";

const IntroSection = ({ button, heading, dynamicColorHeading }) => {
  const [email, setEmail] = useState("");

  const subText =
    "WorkerX helps you increase appointments, and helps you provide excellent customer service";

  const [prependText, appendText] = splitText(heading, dynamicColorHeading);

  const handleButtonClick = () => {
    // validate email
    if (email.length > 0) {
      if (validateEmail(email)) {
        const url = `${process.env.NEXT_PUBLIC_WORKERX_WEB_PATH}/signup?email=${email}`;
        window.open(url, "_blank");
        setEmail("");
      } else {
        message.error("Please enter a valid email");
      }
    }
  };

  return (
    <div className={classes.wrapper}>
      <SectionHeading
        coloredHeadingText="Save Tour Time Effectively"
        prependText={prependText}
        blueText={dynamicColorHeading}
        appendText={appendText}
        subText={subText}
        maxWidth={444}
      />
      <div className={classes.input_btn_wrapper}>
        <input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          className="primary_input_field"
        />
        <Button
          title={button?.label || "N/a"}
          type="primary"
          onClick={handleButtonClick}
        />
      </div>
    </div>
  );
};

export default IntroSection;
