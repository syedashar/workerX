import Image from "next/image";
import MarkdownView from "react-showdown";
import ReactHtmlParser from "react-html-parser";
import React from "react";
import moment from "moment";
import classes from "stylesheet/pages/helpPage/helpDetailContentSection/styles.module.scss";

const HelpReadSection = ({ helpDetail }) => {
  return (
    <div className={classes.help_detail_content_section_wrapper}>
      <div className={classes.help_video_container}>
        <iframe
          src={`https://www.youtube.com/embed/${helpDetail?.video}?showinfo=0&controls=0&enablejsapi=1&origin=https://workerx.co&modestbranding:1&rel=0`}
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; picture-in-picture"
          allowFullScreen
          //   controls
          //   controlsList="nodownload"
          title="WorkerX"
        />
      </div>

      <div className={classes.help_info}>
        <h2>{helpDetail?.title}</h2>
      </div>

      <br />

      <MarkdownView markdown={helpDetail?.description} />
    </div>
  );
};

export default HelpReadSection;
