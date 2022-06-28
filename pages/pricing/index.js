import HeadingWithIconSection from "components/global/headingWithIconSection";
import PricingPageBottomSection from "components/global/pricingPageBottomSection";
import { PricingSection } from "components/pages/pricingPage";
import { pricingPlans } from "constants/apiEndpoints";
import { NextSeo } from "next-seo";
import React from "react";
import { getRequest } from "service/apiClient";

const PricingPlanPage = ({ plans, seo }) => {
  const headingProps = {
    headingText: "Pricing Plan",
    subText:
      "WorkerX helps you increase appointments, and helps you provide excellent customer service",
    headingMaxWidth: 594,
  };

  const bottomPage = {
    creditCardText: "Hello",
    trailText: "23",
  };

  return (
    <>
      {seo && <NextSeo {...seo} />}
      <HeadingWithIconSection {...headingProps} />
      <PricingSection plans={plans} />
      <PricingPageBottomSection {...bottomPage} />
    </>
  );
};

export default PricingPlanPage;

// get pricing plans by get static props
export async function getStaticProps() {
  try {
    const {
      success,
      data: { plans },
    } = await getRequest(pricingPlans);
    if (success) {
    }

    return {
      props: {
        plans,
      },
      revalidate: 10800,
    };
  } catch (error) {
    console.error(error);
    return {
      props: {},
      revalidate: 10800,
    };
  }
}
