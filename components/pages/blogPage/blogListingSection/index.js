import {
  blogCardVariant,
  blogContainerVariant,
} from "animation/blogListingVariant";
import { Col, Row } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import moment from "moment";
import classes from "stylesheet/pages/blogPage/blogListingSection/styles.module.scss";

const BlogListingSection = ({ blogs }) => {
  const router = useRouter();

  const handleBlogClick = (blog) => {
    router.push({
      pathname: "/resources/blogs/[blogSlug]",
      query: {
        blogSlug: blog?.slug,
      },
    });
  };

  return (
    <motion.section
      initial="hidden"
      whileInView={"visible"}
      variants={blogContainerVariant}
      viewport={{ once: true }}
      className={`${classes.blog_listing_section_wrapper} container`}
    >
      <Row gutter={[30, 30]}>
        {blogs?.map((blog) => (
          <Col xs={24} sm={12} md={8} xlg={6} key={blog.id}>
            <BlogCard {...blog} onClick={() => handleBlogClick(blog)} />
          </Col>
        ))}
      </Row>
    </motion.section>
  );
};

const BlogCard = ({
  title,
  preview: shortDescription,
  blogger,
  bloggerImage: userIcon,
  readingTime,
  image: blogImage,
  publishedAt,
  onClick = null,
}) => {
  return (
    <motion.div
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
        <div className={classes.content_header}>
          <div className={classes.user_info}>
            <div className={classes.user_image}>
              <Image
                src={userIcon}
                alt=""
                width={35}
                height={35}
                loader={() => userIcon}
              />
            </div>
            <div className={classes.user_name}>{blogger}</div>
          </div>
          <span className="subtle_text">{readingTime} Read</span>
        </div>
        <div className={classes.content_body}>
          <h2>{title}</h2>
          <p>{shortDescription}</p>
        </div>
        <div className={classes.content_footer}>
          <h4>Published</h4>

          <p>{moment(publishedAt).format("MMMM Do, YYYY")}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogListingSection;
