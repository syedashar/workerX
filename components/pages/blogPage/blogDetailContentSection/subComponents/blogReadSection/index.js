import moment from "moment";
import Image from "next/image";
import React from "react";
import MarkdownView from "react-showdown";
import classes from "stylesheet/pages/blogPage/blogDetailContentSection/styles.module.scss";

const BlogReadSection = ({ blogDetail }) => {
  return (
    <div className={classes.blog_read_section_wrapper}>
      <div
        className={classes.blog_image_container}
        style={{ backgroundImage: `url(${blogDetail?.image})` }}
      >
        <div className={classes.blog_info}>
          <span className={classes.read_time}>
            {blogDetail?.readingTime} Read
          </span>
          <h1>{blogDetail?.title}</h1>
          <div className={classes.writer_info}>
            <div className={classes.image_wrapper}>
              <Image
                alt=""
                width={40}
                height={40}
                src={blogDetail?.bloggerImage}
                loader={() => blogDetail?.bloggerImage}
              />
            </div>
            <span className={classes.username}>{blogDetail?.blogger}</span>
          </div>
        </div>
      </div>

      <div className={classes.publish}>
        <h4>Published :</h4>

        <p>{moment(blogDetail?.publishedAt).format("MMMM Do, YYYY")}</p>
      </div>
      <br />

      <MarkdownView markdown={blogDetail?.description} />
    </div>
  );
};

const blogText =
  "When it comes to PC gaming – whether you’re building your own rig or buying one of the best gaming PCs – you’re going to need one of the best graphics cards. While many processors will be able to do basic graphics without one, if you want to play the best PC games or even do heavy-duty creative work, a graphics card is extremely important. That’s likely one of the main reasons it’s so hard to buy one right now. After the Nvidia GeForce RTX 3080 came out in 2020, graphics cards have been notoriously hard to come by. It’s a shame, too, because the graphics cards that are out there right now are better than they’ve ever been – and PC games are getting harder and harder to run. To help find the right one for you, we’ve narrowed things down to make it simpler to choose. It’s no secret that graphics cards of all kinds have been tough to get lately, and actually finding one is a whole other issue. When it comes to PC gaming – whether you’re building your own rig or buying one of the best gaming PCs – you’re going to need one of the best graphics cards. While many processors will be able to do basic graphics without one, if you want to play the best PC games or even do heavy-duty creative work, a graphics card is extremely important. That’s likely one of the main reasons it’s so hard to buy one right now. After the Nvidia GeForce RTX 3080 came out in 2020, graphics cards have been notoriously hard to come by. It’s a shame, too, because the graphics cards that are out there right now are better than they’ve ever been – and PC games are getting harder and harder to run. To help find the right one for you, we’ve narrowed things down to make it simpler to choose. It’s no secret that graphics cards of all kinds have been tough to get lately, and actually finding one is a whole other issue.";

export default BlogReadSection;
