import { SearchOutlined } from "@ant-design/icons";
import {
  blogCardVariant,
  blogContainerVariant,
} from "animation/blogListingVariant";
import { Col, Input, Row } from "antd";
import axios from "axios";
import { helps as helpEndpoint } from "constants/apiEndpoints";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import classes from "stylesheet/pages/helpPage/helpListingSection/styles.module.scss";

const HelpListingSection = ({ helpList }) => {
  console.log("HelpListingSection");
  const [helps, setHelps] = useState(helpList);
  const router = useRouter();

  const handleBlogClick = (help) => {
    console.log("slug", help?.slug);
    router.push({
      pathname: "/help/[helpSlug]",
      query: {
        helpSlug: help?.slug,
      },
    });
  };

  const serchHelp = async (e) => {
    console.log(e.target.value);
    const data = await axios.get(
      `http://localhost:1337/${helpEndpoint}?_q=${e.target.value}`
    );
    setHelps(data?.data?.helps);
    console.log(data);
  };

  useEffect(() => {
    console.log("helpuseEffect", helps);
  }, [helps]);
  return (
    <>
      <div className={`${classes.search_bar} container`}>
        <Input
          className={classes.input}
          size="large"
          placeholder="Search for articles..."
          prefix={<SearchOutlined />}
          onKeyPress={(e) => {
            if (e.key === "Enter" && e.target.value) {
              serchHelp(e);
            }
          }}
        />
      </div>

      <section
        initial="hidden"
        whileInView={"visible"}
        variants={blogContainerVariant}
        viewport={{ once: true }}
        className={`${classes.blog_listing_section_wrapper} container`}
      >
        <Row gutter={[30, 30]}>
          {helps?.map((help) => (
            <Col xs={24} key={help.id}>
              <BlogCard {...help} onClick={() => handleBlogClick(help)} />
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
};

const BlogCard = ({
  title,
  preview: shortDescription,
  image: blogImage,
  onClick = null,
}) => {
  return (
    <div
      onClick={onClick}
      variants={blogCardVariant}
      className={classes.blog_card_wrapper}
    >
      <div className={classes.image_wrapper}>
        <Image
          src={blogImage}
          alt=""
          loader={() => blogImage}
          width="100%"
          height="100%"
          layout="fill"
        />
      </div>
      <div className={classes.content_wrapper}>
        <div className={classes.content_body}>
          <h2>{title}</h2>
          <p>{shortDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default HelpListingSection;
