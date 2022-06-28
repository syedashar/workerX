import { Col, Row, Grid } from "antd";
import React from "react";
import { BannerSection, IntroSection } from "./subComponents";
import classes from "stylesheet/pages/landingPage/heroSection/styles.module.scss";

const { useBreakpoint } = Grid;

const HeroSection = ({ heroSectionProps }) => {
  const breakpoint = useBreakpoint();

  return (
    <section className={classes.hero_section_wrapper}>
      <Row gutter={[10, 50]} className={classes.section_row}>
        <Col
          xs={{ span: 24, order: 2 }}
          sm={{ span: 24, order: 2 }}
          md={{ span: 12, order: 1 }}
          className={classes.intro_section_col}
        >
          <IntroSection {...heroSectionProps} />
        </Col>
        {!breakpoint.xs && (
          <Col
            xs={{ span: 24, order: 1 }}
            sm={{ span: 24, order: 1 }}
            md={{ span: 12, order: 2 }}
          >
            <BannerSection {...heroSectionProps} />
          </Col>
        )}
      </Row>
    </section>
  );
};

export default HeroSection;
