import { pricingPlans, startTrial } from "constants/apiEndpoints";
import { usePageTop, useWindowDimensions } from "hooks";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { getRequest } from "service/apiClient";
import { DefaultHeader, MobileHeader } from "./subComponents";

const Header = () => {
  const { width } = useWindowDimensions();
  const router = useRouter();
  const isPageTop = usePageTop();
  const whiteRoutes = [
    "/",
    "/terms-and-conditions",
    "/privacy-policy",
    "/industries/[industrySlug]",
  ];
  const [standardPlan, setStandardPlan] = useState(undefined);
  const isWhite =
    whiteRoutes.includes(router.asPath) ||
    whiteRoutes.includes(router.pathname);

  const handleTrialButtonClick = () => {
    standardPlan && window.open(startTrial(standardPlan?._id), "_blank");
  };

  const headerProps = {
    isWhite,
    isPageTop,
    trialButtonOnClick: handleTrialButtonClick,
  };

  useEffect(() => {
    const init = async () => {
      try {
        const {
          success,
          data: { plans },
        } = await getRequest(pricingPlans);

        if (success) {
          setStandardPlan(plans.find((plan) => plan.name === "Standard"));
        }
      } catch (err) {
        return {
          props: {},
        };
      }
    };
    init();
  }, []);

  return width > 992 ? (
    <DefaultHeader {...headerProps} />
  ) : (
    <MobileHeader {...headerProps} />
  );
};

export default Header;
