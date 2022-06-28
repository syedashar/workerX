import { Col, Row } from "antd";
import { SectionHeading } from "components/global";
// import Image from "next/image";
import React from "react";
import classes from "stylesheet/pages/landingPage/videoOverview/styles.module.scss";
import MainThingsListing from "../mainThingsLisiting";
import { splitText } from "utils";

const VideoOverviewSection = ({ videoOverviewProps }) => {
  const embedId = "ysnCuBfWyu8";
  console.log(videoOverviewProps);

  const [prependText, appendText] = splitText(
    videoOverviewProps?.heading,
    videoOverviewProps?.dynamicColorHeading
  );
  return (
    <section
      className={`${classes.video_overview_section_wrapper} section_margin`}
    >
      <SectionHeading
        coloredHeadingText="Video Overview"
        prependText={prependText}
        blueText={videoOverviewProps?.dynamicColorHeading}
        appendText={appendText}
        centered={true}
      />
      <Row gutter={[20, 10]}>
        <Col xs={24} sm={24} md={24}>
          <div className={classes.video_wrapper}>
            <iframe
              src={`https://www.youtube.com/embed/${videoOverviewProps?.video}?showinfo=0&controls=0&enablejsapi=1&origin=https://workerx.co&modestbranding:1&rel=0`}
              frameBorder="0"
              allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
              allowFullScreen
              //   controls
              //   controlsList="nodownload"
              title="WorkerX"
            />
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default VideoOverviewSection;
