import React from "react";
import { Tabs } from "antd";
import classes from "stylesheet/pages/featuresPage/featureTabsSection/styles.module.scss";
import { GridDesignLayout } from "components/global";
import { CREDIT_CARD_IMAGE, GRID_SAMPLE_IMAGE } from "assets/images";

const { TabPane } = Tabs;

const FeatureTabsSection = ({ features }) => {
  return (
    <section
      className={`${classes.feature_tab_section_wrapper} container section_half_margin`}
    >
      <Tabs className="custom_tabs" defaultActiveKey="1" animated={true}>
        {features.map((feature, index) => (
          <TabPane tab={feature.shortTitle} key={index + 1}>
            <GridDesignLayout contentArray={[feature]} />
          </TabPane>
        ))}
      </Tabs>
    </section>
  );
};

const contentArray = [
  {
    id: 0,
    icon: CREDIT_CARD_IMAGE,
    heading: "Get Paid Easily without any hasle",
    subHeading:
      "Move your storefront online. From mechanics to landscapers, GoSite will help you sell and market your services from anywhere, anytime.",
    learnMoreLink: "/",
    image: GRID_SAMPLE_IMAGE,
  },
];

export default FeatureTabsSection;
