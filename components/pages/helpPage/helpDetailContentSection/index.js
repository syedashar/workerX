import { Col, Row } from "antd";
import { BackButton } from "components/global";
import React from "react";
import classes from "stylesheet/pages/blogPage/blogDetailContentSection/styles.module.scss";
import { HelpReadSection } from "./subComponents";

const BlogDetailContentSection = ({ helpDetailProps }) => {
  return (
    <section
      className={`${classes.blog_detail_content_section_wrapper} container`}
    >
      <BackButton />
      <Row gutter={[30, 30]}>
        <Col xs={24}>
          <HelpReadSection helpDetail={helpDetailProps?.help} />
        </Col>
      </Row>
    </section>
  );
};

export default BlogDetailContentSection;

