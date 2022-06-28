import { Collapse } from "antd";
import React from "react";

import { SectionHeading } from "components/global";
import classes from "stylesheet/pages/landingPage/faqsSection/styles.module.scss";

const { Panel } = Collapse;

const FaqsSections = ({ faqProps }) => {
  return (
    <section
      className={`${classes.faqs_section_wrapper} section_margin container`}
    >
      <SectionHeading
        coloredHeadingText="FAQS"
        prependText="Frequently Asked Questions"
        subText="WorkerX helps you increase appointments, and helps you provide excellent customer service"
        centered={true}
      />
      <div className={classes.faq_accordion_wrapper}>
        <FaqAccordion faq={faqProps?.faq} />
      </div>
    </section>
  );
};

const FaqAccordion = ({ faq }) => (
  <Collapse accordion expandIconPosition="right" className="custom_collapse">
    {faq.map(({ question, answer }, index) => (
      <Panel
        header={
          <h3>
            {`Q. ${index + 1}`} {question}
          </h3>
        }
        key={index}
      >
        <p>{answer}</p>
      </Panel>
    ))}
  </Collapse>
);

export default FaqsSections;
