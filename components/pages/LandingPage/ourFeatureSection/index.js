import { CREDIT_CARD_IMAGE, GRID_SAMPLE_IMAGE } from "assets/images";
import { GridDesignLayout, SectionHeading } from "components/global";
import React from "react";

import classes from "stylesheet/pages/landingPage/ourFeaturesSection/styles.module.scss";

const OurFeatureSection = ({ featuresProps = [] }) => {
  return (
    <section
      className={`${classes.feature_section_wrapper} section_half_margin`}
    >
      <SectionHeading
        coloredHeadingText="Our Features"
        appendText="Some Important WorkerX Features"
        subText="WorkerX helps you increase appointments, and helps you provide excellent customer service"
        centered={true}
      />
      <div className={classes.feature_section_content}>
        <GridDesignLayout contentArray={featuresProps} />
      </div>
    </section>
  );
};

export default OurFeatureSection;
