import { Col, Row } from "antd";
import { ColoredHeading } from "components/global";
import Image from "next/image";
import React from "react";
import classes from "stylesheet/pages/industriesPage/industryDetailPage/heroSection/styles.module.scss";

const HeroSection = ({ description, icon, image, name }) => {
  return (
    <section className={classes.hero_section_wrapper}>
      <Row gutter={[10, 50]} className={classes.section_row}>
        <Col
          xs={{ span: 24, order: 2 }}
          sm={{ span: 24, order: 2 }}
          md={{ span: 12, order: 1 }}
          className={classes.intro_section_col}
        >
          <div className={classes.industry_mini_card_icon}>
            <Image
              src={icon}
              loader={() => icon}
              width={35}
              height={35}
              alt="tool icon"
            />
          </div>
          <ColoredHeading title={name} />
          <p>{description}</p>
        </Col>

        <Col
          xs={{ span: 24, order: 1 }}
          sm={{ span: 24, order: 1 }}
          md={{ span: 12, order: 2 }}
        >
          <div className={classes.hero_image_wrapper}>
            <Image
              objectFit="contain"
              src={image}
              alt=""
              loader={() => image}
              layout="fill"
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default HeroSection;
