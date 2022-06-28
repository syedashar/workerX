import { PricingGrid } from "components/global";
import React from "react";
import classes from "stylesheet/pages/pricingPage/pricingSection/styles.module.scss";

const PricingSection = ({ plans }) => {
  return (
    <section className={`${classes.pricing_section_wrapper} container`}>
      <PricingGrid plans={plans} />
    </section>
  );
};

export default PricingSection;
