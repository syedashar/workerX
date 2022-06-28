import {
  toolsCardVariant,
  toolsContainerVariant
} from "animation/toolsListingVariant";
import { Col, Row } from "antd";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import classes from "stylesheet/pages/toolsPage/toolsListingSection/styles.module.scss";


const ToolsListingSection = ({ tools }) => {
  return (
    <motion.section
      initial="initial"
      whileInView={"visible"}
      variants={toolsContainerVariant}
      className={`${classes.tools_listing_section_wrapper} container`}
    >
      <Row gutter={[30, 30]}>
        {tools &&
          tools.length > 0 &&
          tools.map((tool) => (
            <Col xs={24} sm={12} md={8} lg={8} xlg={6} key={tool.id}>
              <ToolCard {...tool} />
            </Col>
          ))}
      </Row>
    </motion.section>
  );
};

const ToolCard = ({ icon, name, description }) => {
  return (
    <motion.div variants={toolsCardVariant} className={classes.tool_card}>
      <div className={classes.tool_card_icon}>
        <Image
          src={icon}
          loader={() => icon}
          width={35}
          height={35}
          alt="tool icon"
        />
      </div>
      <h2>{name}</h2>
      <p>{description}</p>
    </motion.div>
  );
};

export default ToolsListingSection;
