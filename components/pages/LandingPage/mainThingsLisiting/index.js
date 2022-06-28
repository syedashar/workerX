import {
  featureCardVariant,
  featureListingContainerVariant,
  headingVariant,
  paragraphVariant,
} from "animation/feautreListingVariants";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import classes from "stylesheet/pages/landingPage/mainThingsSection/featureListingStyles.module.scss";

const MainThingsListing = ({ work = [] }) => {
  return (
    <motion.div
      variants={featureListingContainerVariant}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: true }}
      className={classes.feature_listing_wrapper}
    >
      {work.map((feature, index) => (
        <FeatureCard key={feature._id} index={index + 1} {...feature} />
      ))}
    </motion.div>
  );
};

const FeatureCard = ({ iconUrl, heading, subHeading, index }) => (
  <div className={classes.feature_card}>
    <div className={classes.rounded_icon_container}>
      <Image
        src={iconUrl}
        alt=""
        width={"40%"}
        height={"40%"}
        objectFit="contain"
        loader={() => iconUrl}
      />
    </div>
    <motion.div variants={featureCardVariant} className={classes.text_wrapper}>
      <motion.h3 variants={headingVariant} custom={index * 0.3}>
        {heading}
      </motion.h3>
      <motion.p variants={paragraphVariant} custom={index * 0.4}>
        {subHeading}
      </motion.p>
    </motion.div>
  </div>
);

export default MainThingsListing;
