import { Col, Row } from "antd";
import { BackButton } from "components/global";
import React from "react";
import classes from "stylesheet/pages/blogPage/blogDetailContentSection/styles.module.scss";
import { BlogReadSection, RecentPostSection } from "./subComponents";

const BlogDetailContentSection = ({ blogDetailProps }) => {
  return (
    <section
      className={`${classes.blog_detail_content_section_wrapper} container`}
    >
      <BackButton />
      <Row gutter={[30, 30]}>
        <Col xs={24}>
          <BlogReadSection blogDetail={blogDetailProps?.blog} />
        </Col>
      </Row>
    </section>
  );
};

export default BlogDetailContentSection;

// <Col xs={24} sm={24} md={11}>
//   <RecentPostSection recentBlogs={blogDetailProps?.recentblogs} />
// </Col>;
