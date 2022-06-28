import {
  descriptionVariant,
  iconVariant,
  titleVariant,
} from "animation/gridDesignLayoutVariants";
import { Col, Row, Grid } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Button from "../button";

const { useBreakpoint } = Grid;

const GridDesignLayout = ({ contentArray = [] }) => {
  const breakpoint = useBreakpoint();

  const getOrder = (index, section) => {
    switch (section) {
      case "descriptiveSection":
        return index % 2 === 0 ? 0 : 1;
      case "imageSection":
        return index % 2 === 0 ? 1 : 0;

      case "descriptiveSectionSmall":
        return 1;

      case "imageSectionSmall":
        return 0;

      default:
        break;
    }
  };

  const getFlexJustification = (imageSmOrder, imageOrder) => {
    // change flex justification based on order and breakpoint

    if (breakpoint.md) {
      if (imageOrder === 0) {
        return "flex_start";
      } else {
        return "flex_end";
      }
    }

    if (breakpoint.sm) {
      if (imageSmOrder === 0) {
        return "flex_start";
      } else {
        return "flex_end";
      }
    }

    if (breakpoint.xs) {
      if (imageSmOrder === 0) {
        return "center";
      } else {
        return "flex_end";
      }
    }
  };

  return (
    <section className="grid_design_layout_wrapper">
      {contentArray.map(({ image, slug, ...rest }, index) => {
        const descriptionSmOrder = getOrder(index, "descriptiveSectionSmall");
        const descriptionOrder = getOrder(index, "descriptiveSection");
        const imageSmOrder = getOrder(index, "imageSectionSmall");
        const imageOrder = getOrder(index, "imageSection");
        return (
          <Row key={slug} gutter={[30, 30]}>
            <Col
              xs={{
                span: 24,
                order: descriptionSmOrder,
              }}
              sm={{
                span: 24,
                order: descriptionSmOrder,
              }}
              md={{ span: 12, order: descriptionOrder }}
            >
              <DescriptiveSection {...rest} />
            </Col>
            <Col
              xs={{ span: 24, order: imageSmOrder }}
              sm={{ span: 24, order: imageSmOrder }}
              md={{ span: 12, order: imageOrder }}
            >
              <div
                id={slug}
                className={`image_wrapper ${getFlexJustification(
                  imageSmOrder,
                  imageOrder
                )}`}
              >
                <Image
                  quality={100}
                  loader={() => image}
                  src={image}
                  alt=""
                  objectFit="contain"
                  width={breakpoint.md ? 400 : 300}
                  height={"100%"}
                />
              </div>
            </Col>
          </Row>
        );
      })}
    </section>
  );
};

const DescriptiveSection = ({ icon, heading, subHeading, learnMoreLink }) => (
  <motion.div
    initial={"hidden"}
    whileInView={"animate"}
    viewport={{ once: true }}
    className="grid_descriptive_wrapper"
  >
    <motion.div variants={iconVariant} className="grid_icon_container">
      <Image
        loader={() => icon}
        src={icon}
        alt=""
        width={"40%"}
        height={"40%"}
      />
    </motion.div>
    <motion.h2 variants={titleVariant}>{heading}</motion.h2>
    <motion.p variants={descriptionVariant}>{subHeading}</motion.p>
    {learnMoreLink && <Button title="Learn More" type="secondary" />}
  </motion.div>
);

export default GridDesignLayout;
