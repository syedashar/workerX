import { Col, Row } from "antd";
import { FEATURE_PAGE_HEADING_IMAGE } from "assets/images";
import { SectionHeading } from "components/global";
import Image from "next/image";
import React from "react";
import classes from "stylesheet/pages/featuresPage/allFeatureHeadingSection/styles.module.scss";

const AllFeatureHeadingSection = () => {
  const headingProps = {
    appendText: "Features",
    prependText: "All",
    blueText: "WorkerX",
    coloredHeadingText: "All Features",
    subText:
      "WorkerX helps you increase appointments, and helps you provide excellent customer service",
    maxWidth: 400,
  };

  return (
    <section className={`${classes.all_feature_heading_section} container`}>
      <Row gutter={[30, 30]}>
        <Col xs={24} sm={12}>
          <SectionHeading {...headingProps} />
        </Col>
        <Col xs={24} sm={12}>
          <div className={classes.image_wrapper}></div>
        </Col>
      </Row>
    </section>
  );
};

export default AllFeatureHeadingSection;
