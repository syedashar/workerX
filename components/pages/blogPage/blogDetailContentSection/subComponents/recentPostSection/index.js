import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import classes from "stylesheet/pages/blogPage/blogDetailContentSection/styles.module.scss";

const RecentPostSection = ({ recentBlogs }) => {
  const router = useRouter();

  const handleBlogClick = (slug) => {
    router.push({
      pathname: "/resources/blogs/[blogSlug]",
      query: {
        blogSlug: slug,
      },
    });
  };

  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      variants={recentPostsContainerVariants}
      viewport={{ once: true }}
      className={classes.recent_posts_wrapper}
    >
      <div className={classes.header}>
        <h3>Recent Posts</h3>
      </div>
      <div className={classes.post_cards_wrapper}>
        {recentBlogs.map((post) => (
          <PostCard key={post.id} {...post} handleBlogClick={handleBlogClick} />
        ))}
      </div>
    </motion.div>
  );
};

const PostCard = ({
  image,
  title,
  readingTime,
  bloggerImage,
  blogger,
  handleBlogClick,
  slug,
}) => {
  return (
    <motion.div
      variants={postCardVariants}
      className={classes.post_card}
      onClick={() => handleBlogClick(slug)}
    >
      <div className={classes.post_card_image}>
        <Image alt="" src={image} loader={() => image} layout="fill" />
      </div>
      <div className={classes.post_card_content}>
        <span className={classes.title}>{title}</span>
        <div className={classes.card_footer}>
          <div className={classes.writer_info}>
            <div className={classes.writer_image_wrapper}>
              <Image
                alt=""
                src={bloggerImage}
                loader={() => bloggerImage}
                layout="fill"
              />
            </div>
            <span className={classes.writer_name}>{blogger}</span>
          </div>
          <span className={classes.read_time}>{readingTime}</span>
        </div>
      </div>
    </motion.div>
  );
};

const recentPostsContainerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const postCardVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

export default RecentPostSection;
