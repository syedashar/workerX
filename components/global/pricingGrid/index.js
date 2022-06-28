import React, { useState } from "react";
import { Col, Tabs, Row, Grid, Divider } from "antd";
import Button from "../button";
import { motion } from "framer-motion";
import { TICK_ICON } from "assets/svgs";
import {
  pricingCardVariants,
  pricingGridVariants,
  recommendedTagVariant,
} from "animation/pricingCardVariants";
import { useRouter } from "next/router";
import { purchasePlan, startTrial } from "constants/apiEndpoints";

const { useBreakpoint } = Grid;

const PricingGrid = ({ plans }) => {
  const breakpoint = useBreakpoint();
  const [subscriptionType, setSubscriptionType] = useState("monthly");
  const router = useRouter();
  const { TabPane } = Tabs;

  // from pricing page

  const onChange = (e) => {
    setSubscriptionType(e.target.value);
  };
  const fromPricingPage = router.asPath.includes("pricing");

  return (
    <motion.div
      initial="hidden"
      whileInView={"visible"}
      variants={pricingGridVariants}
      viewport={{ once: true }}
      className="pricing_grid_wrapper"
      key={subscriptionType}
    >
      <div
        style={{ display: "flex", marginTop: "-30px", marginBottom: "10px" }}
      >
        <Button
          type={subscriptionType == "monthly" ? "secondary" : "primary"}
          title="Monthly"
          value="monthly"
          style={{
            marginRight: "5px",
            fontSize: "18px",
          }}
          onClick={onChange}
        />

        <Button
          type={subscriptionType == "yearly" ? "secondary" : "primary"}
          title="Yearly"
          value="yearly"
          style={{ fontSize: "18px" }}
          onClick={onChange}
        />
      </div>
      <Row gutter={[15, 20]} justify="center">
        {plans &&
          plans.map((content, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={content._id + index}>
              <PricingCard
                {...content}
                subscription={
                  subscriptionType === "monthly"
                    ? content?.monthly
                    : content?.yearly
                }
                subscriptionType={subscriptionType}
                isXs={breakpoint.xs}
                fromPricingPage={fromPricingPage}
              />
            </Col>
          ))}
      </Row>
    </motion.div>
  );
};

const PricingCard = ({
  _id,
  name,

  subscription,
  features,
  currencySymbol,
  isUnlimited,

  isXs,
  subscriptionType,
  fromPricingPage,
  description,
}) => {
  const handlePlanBtnClick = (btnClickType, planId, subscriptionType) => {
    switch (btnClickType) {
      case 1:
        // contact us
        break;
      case 2:
        // purchase plan
        window.open(purchasePlan(planId, subscriptionType), "_blank");
        break;
      case 3:
        // start trial
        window.open(startTrial(planId, subscriptionType), "_blank");
        break;
      default:
        break;
    }
  };

  return (
    <motion.div
      variants={pricingCardVariants}
      custom={{ isUnlimited, isXs, fromPricingPage }}
      className={`${
        isUnlimited ? "recommended_pricing_card_wrapper" : ""
      } pricing_card_wrapper`}
    >
      {isUnlimited && (
        <motion.div
          variants={recommendedTagVariant}
          className="recommended_tag"
        />
      )}
      {subscription?.isDiscountEnabled && (
        <motion.div variants={recommendedTagVariant} className="voucher">
          <h6 className="vc">
            {`Save 
            ${subscription?.couponId?.amount}
          ${subscription?.couponId?.type == 1 ? "USD" : "%"}`}
          </h6>
        </motion.div>
      )}

      <div className={"pricing_card_header"}>
        <p>{name}</p>
        {subscription?.isDiscountEnabled ? (
          <h1>
            <del className="discount_price"> ${subscription?.amount}</del>
            {currencySymbol || "$"}
            {subscription?.couponId?.type === 1
              ? subscription?.amount - subscription?.couponId?.amount
              : subscription?.amount -
                (subscription?.amount * subscription?.couponId?.amount) / 100}
          </h1>
        ) : (
          <h1>
            {currencySymbol || "$"}
            {subscription?.amount}
          </h1>
        )}
        <p className="interval_text">/ {subscription?.interval}</p>
      </div>

      <p className="desc_text">{description}</p>
      <Divider className="card_divider" />
      <div className={"features_provided_wrapper"}>
        {features.map(({ name, _id }) => (
          <div className="feature" key={_id}>
            <span>{TICK_ICON}</span>
            <p>{name}</p>
          </div>
        ))}
      </div>
      <div className="pricing_card_btns_wrapper">
        {/* 1 for contact us.
          2 for choose plan.
          3 for start trial */}
        <Button
          type={isUnlimited ? "default" : "primary"}
          title={isUnlimited ? "Contact Us" : "Choose Plan"}
          style={planBtnStyle}
          onClick={() =>
            handlePlanBtnClick(isUnlimited ? 1 : 2, _id, subscriptionType)
          }
        />
        {!isUnlimited && (
          <Button
            type={"secondary"}
            title="Start Trial"
            style={planBtnStyle}
            onClick={() => handlePlanBtnClick(3, _id, subscriptionType)}
          />
        )}
      </div>
    </motion.div>
  );
};

const planBtnStyle = { height: 44, width: "100%", padding: "0px 23px" };

export default PricingGrid;
