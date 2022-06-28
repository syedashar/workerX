import { Col, Row } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  toolsCardVariant,
  toolsContainerVariant,
} from "animation/toolsListingVariant";
import classes from "stylesheet/pages/industriesPage/imageGridSection/styles.module.scss";
import { useRouter } from "next/router";

const IndustriesImageGridSection = ({ industries }) => {
  const router = useRouter();

  const handleClick = (content) => {
    router.push({
      pathname: "/industries/[industrySlug]",
      query: {
        industrySlug: content?.slug,
      },
    });
  };

  return (
    <motion.section
      initial="initial"
      whileInView={"visible"}
      variants={toolsContainerVariant}
      className={`${classes.industries_image_grid_section_wrapper} container`}
    >
      <Row gutter={[30, 25]}>
        {industries.map((content) => (
          <Col
            onClick={() => handleClick(content)}
            xs={24}
            sm={12}
            md={8}
            lg={8}
            xlg={6}
            key={content?.slug}
            id={content?.slug}
          >
            <IndustryCard {...content} />
          </Col>
        ))}
      </Row>
    </motion.section>
  );
};

const IndustryCard = ({ icon, image, name }) => (
  <motion.div variants={toolsCardVariant} className={classes.industry_card}>
    <div className={classes.industry_main_image_container}>
      <Image
        alt=""
        src={image}
        loader={() => image}
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className={classes.industry_card_content}>
      <div className={classes.industry_card_icon}>
        <Image
          src={icon}
          loader={() => icon}
          width={35}
          height={35}
          alt="tool icon"
        />
      </div>
      <h3>{name}</h3>
    </div>
  </motion.div>
);

export default IndustriesImageGridSection;
