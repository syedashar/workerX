import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import classes from "stylesheet/pages/landingPage/testimonialsSection/styles.module.scss";
import {
  cardContainerVariant,
  cardTextVariant,
} from "animation/testiominalCardVariants";

const TestimonialCard = ({
  image: profileIcon,
  name,
  title: designation,
  description: comment,
  active,
}) => {
  return (
    <motion.div
      animate={active ? "active" : "default"}
      variants={cardContainerVariant}
      className={classes.testimonial_card}
    >
      <div className={classes.testimonial_card_header}>
        <div className={classes.profile_icon_wrapper}>
          <Image
            width={50}
            height={50}
            src={profileIcon}
            alt=""
            loader={() => profileIcon}
          />
        </div>
        <div className={classes.profile_labels_wrapper}>
          <motion.span variants={cardTextVariant} className={classes.title}>
            {name}
          </motion.span>
          <motion.span
            variants={cardTextVariant}
            custom={"designation"}
            className={classes.designation}
          >
            {designation}
          </motion.span>
        </div>
      </div>
      <div className={classes.comment_wrapper}>
        <motion.p variants={cardTextVariant} className={classes.comment}>
          {comment}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
