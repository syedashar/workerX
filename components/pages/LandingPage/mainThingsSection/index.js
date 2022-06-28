import React from "react";
import { Col, Divider, Grid, Row } from "antd";

import { SectionHeading } from "components/global";
import classes from "stylesheet/pages/landingPage/mainThingsSection/styles.module.scss";
import MainThingsListing from "../mainThingsLisiting";
import { COMPUTER_IMAGE } from "assets/images";
import Image from "next/image";
import { splitText } from "utils";

const { useBreakpoint } = Grid;

const MainThingsSection = ({ workerXworkProps }) => {
  const breakpoints = useBreakpoint();

  const [prependText, appendText] = splitText(
    workerXworkProps?.heading,
    workerXworkProps?.dynamicColorHeading
  );

  return (
    <section className={classes.wrapper}>
      <div className={`${classes.content_container}`}>
        <Row gutter={[10, 10]}>
          <Col xs={24} md={11}>
            <div className={classes.intro_text_image_wrapper}>
              <SectionHeading
                coloredHeadingText="WorkerX Work"
                prependText={prependText}
                blueText={workerXworkProps?.dynamicColorHeading}
                appendText={appendText}
                subText={workerXworkProps?.subHeading}
                maxWidth={440}
              />

              <div className={classes.image_wrapper}>
                <Image
                  alt="computer"
                  src={workerXworkProps?.imageurl}
                  layout="fill"
                  objectFit="contain"
                  quality={100}
                  loader={() => workerXworkProps?.imageurl}
                />
              </div>
            </div>
          </Col>
          <Col xs={24} sm={24} md={2}>
            <Divider
              type={breakpoints.xs ? "horizontal" : "vertical"}
              style={{ height: "100%" }}
            />
          </Col>
          <Col xs={24} md={11}>
            <MainThingsListing work={workerXworkProps?.work} />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default MainThingsSection;
