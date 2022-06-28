import { Col, Row } from "antd";
import { CREDIT_CARD_IMAGE } from "assets/images";
import { SectionHeading } from "components/global";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import classes from "stylesheet/pages/featuresPage/featureTopGridSection/styles.module.scss";

const MainFeaturesTopGridSection = ({ features }) => {
  const headingProps = {
    textColor: "white",
    subText:
      "WorkerX helps you increase appointments, and helps you provide excellent customer service",
    appendText: "Features",
    maxWidth: 400,
  };

  return (
    <section className={`${classes.feature_top_grid_section} container`}>
      <Row gutter={[20, 30]}>
        <Col xs={24} sm={24} md={10} lg={14}>
          <SectionHeading {...headingProps} />
          <div className={classes.hero_image_wrapper}></div>
        </Col>
        <Col xs={24} sm={24} md={14} lg={10}>
          <motion.div
            initial="hidden"
            whileInView={"animate"}
            viewport={{ once: true }}
            variants={featureCardContainerVariants}
            className={classes.feature_cards_container}
          >
            <Row gutter={[1, 1]}>
              {features.map((feature) => (
                <Col key={feature.slug} xs={12}>
                  <FeatureCard {...feature} />
                </Col>
              ))}
            </Row>
          </motion.div>
        </Col>
      </Row>
    </section>
  );
};

const FeatureCard = ({ shortTitle, icon }) => (
  <motion.div variants={featureCardVariants} className={classes.feature_card}>
    <div className={classes.icon_wrapper}>
      <Image width={40} height={40} src={icon} alt="" loader={() => icon} />
    </div>
    <h3>{shortTitle}</h3>
  </motion.div>
);

const featureCardContainerVariants = {
  hidden: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const featureCardVariants = {
  hidden: {
    opacity: 0,
    scale: 1.01,
  },
  animate: {
    opacity: 1,
    scale: 1,
  },
};

export default MainFeaturesTopGridSection;
