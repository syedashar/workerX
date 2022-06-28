import React, { useState, useEffect } from "react";
import classes from "stylesheet/pages/pricingPage/pricingSection/styles.module.scss";
import { getRequest } from "service/apiClient";

const PricingPageBottomSection = ({
                                      creditCardText,
                                      trailText,
}) => {
      const [priceFooter, setPriceFooter] = useState();

      const getPricingFooter = async () => {
        const data = await getRequest("price");
        setPriceFooter(data);
      };
      useEffect(() => {
        getPricingFooter();
      }, []);
    return (
      <div className={classes.pricing_bottom_section_padding_top}>
        <p className={classes.pricing_bottom_section}>
          <span className={classes.pricing_bottom_section_esterik_color}>
            *
          </span>{" "}
          {priceFooter?.trial}
        </p>
        <p className={classes.pricing_bottom_section}>
          <span className={classes.pricing_bottom_section_esterik_color}>
            **
          </span>{" "}
          {priceFooter?.card}
        </p>
      </div>
    );
};

export default PricingPageBottomSection;
