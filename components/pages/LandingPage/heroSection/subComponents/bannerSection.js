import Image from "next/image";
import React from "react";
import classes from "stylesheet/pages/landingPage/heroSection/bannerSectionStyles.module.scss";

const BannerSection = ({ imgUrl }) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.image_wrapper}>
        <Image
          src={imgUrl}
          loader={() => imgUrl}
          alt="section image"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default BannerSection;
