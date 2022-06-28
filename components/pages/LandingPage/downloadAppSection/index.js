import { Col, Row } from "antd";
import { TWO_MOBILES_IMAGE } from "assets/images";
import { SectionHeading } from "components/global";
import Image from "next/image";
import React from "react";
import classes from "stylesheet/pages/landingPage/downloadAppSection/styles.module.scss";
import { splitText } from "utils";

const DownloadAppSection = ({ workerXappProps }) => {
  const [prependText, appendText] = splitText(
    workerXappProps?.heading,
    workerXappProps?.dynamicColorHeading
  );

  return (
    <section className={`${classes.download_app_section} section_margin`}>
      <div className="container">
        <Row>
          <Col xs={24} sm={12}>
            <div className={classes.image_wrapper}>
              <Image
                src={workerXappProps?.imageurl}
                loader={() => workerXappProps?.imageurl}
                alt=""
                layout="fill"
                objectFit="contain"
                quality={100}
              />
            </div>
          </Col>
          <Col xs={24} sm={12}>
            <div className={classes.content_container}>
              <SectionHeading
                prependText={prependText}
                blueText={workerXappProps?.dynamicColorHeading}
                appendText={appendText}
                coloredHeadingText="WorkerX App"
                subText={workerXappProps?.subHeading}
              />
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default DownloadAppSection;
