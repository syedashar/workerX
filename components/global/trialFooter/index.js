import { message } from "antd";
import React, { useState,useEffect } from "react";
import { validateEmail } from "utils";
import Button from "../button";
import { getRequest } from "service/apiClient";
import { convertNodeToElement } from "react-html-parser";

const TrialFooter = () => {
  const [email, setEmail] = useState("");
  const [trialData, setTrialData] = useState();

  const getTrialFooter = async () => {
    let trial = "trial-footer";
    const data = await getRequest(trial);
    setTrialData(data?.trial);
  };
    useEffect(() => {
          getTrialFooter();

    },[])

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
    <section className="trial_footer_wrapper section_margin trial_footer_margin_bottom">
      <div className="container trial_footer_container">
        <div className="trial_footer_inner_content">
          <h1>{trialData?.heading}</h1>
          <p>{trialData?.subHeading}</p>
          <div className="trial_bottom_div">
            <input
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Email"
              className="primary_input_field"
            />
            <Button
              title={trialData?.button?.label}
              type="dark"
              onClick={handleButtonClick}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrialFooter;
