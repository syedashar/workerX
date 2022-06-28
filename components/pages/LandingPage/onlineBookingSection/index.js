import { Col, Row } from "antd";
import { SectionHeading } from "components/global";
import Image from "next/image";
import React from "react";
import classes from "stylesheet/pages/landingPage/onlineBookingSection/styles.module.scss";
import { splitText } from "utils";
import MainThingsListing from "../mainThingsLisiting";

const OnlineBookingSection = ({ onlineBookingProps }) => {
  const [prependText, appendText] = splitText(
    onlineBookingProps?.heading,
    onlineBookingProps?.dynamicColorHeading
  );

  return (
    <section
      className={`${classes.online_booking_section_wrapper} section_margin`}
    >
      <SectionHeading
        coloredHeadingText="Online Booking"
        prependText={prependText}
        blueText={onlineBookingProps?.dynamicColorHeading}
        subText={onlineBookingProps?.subHeading}
        centered={true}
      />
      <Row gutter={[20, 10]}>
        <Col xs={24} sm={24} md={12}>
          <div className={classes.image_wrapper}>
            <Image
              alt=""
              quality={100}
              layout="fill"
              objectFit="contain"
              src={onlineBookingProps?.imageurl}
              loader={() => onlineBookingProps?.imageurl}
            />
          </div>
        </Col>
        <Col xs={24} sm={24} md={12}>
          <MainThingsListing work={onlineBookingProps?.procedure} />
        </Col>
      </Row>
    </section>
  );
};

export default OnlineBookingSection;
