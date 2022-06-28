import {PricingGrid, SectionHeading} from "components/global";
import React from "react";
import classes from "stylesheet/pages/landingPage/pricingSection/styles.module.scss";

const PricingSection = ({plans}) => {
    return (
        <section
            className={`${classes.pricing_section_wrapper} section_margin container`}
        >
            <SectionHeading
                coloredHeadingText="Pricing Plans"
                prependText="Our Different Plans"
                subText={
                    "WorkerX helps you increase appointments, and helps you provide excellent customer service"
                }
                maxWidth={400}
                style={{marginBottom: 60}}
            />
            <PricingGrid plans={plans}/>
        </section>
    );
};

export default PricingSection;
