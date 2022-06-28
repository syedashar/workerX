let home = "home";
let blogs = "blogs";
let tools = "tools";
let helps ="helps"
let services = "services";
let features = "features";
let footer = "footer";
let pricingPlans = `${
  process.env.WORKERX_SERVER_PATH || process.env.NEXT_PUBLIC_WORKERX_SERVER_PATH
}subscription/plans`;
let purchasePlan = (planId, subscriptionType) =>
  `${process.env.NEXT_PUBLIC_WORKERX_WEB_PATH}signup?purchasePlanId=${planId}&subscriptionType=${subscriptionType}`;
let startTrial = (planId, subscriptionType) =>
  `${process.env.NEXT_PUBLIC_WORKERX_WEB_PATH}signup?trialPlanId=${planId}&subscriptionType=${subscriptionType}`;
let termsAndCondition = "/terms-and-condition";
let privacyPolicy = "/privacy-policy";

export {
  home,
  helps,
  blogs,
  tools,
  services,
  features,
  footer,
  pricingPlans,
  purchasePlan,
  startTrial,
  termsAndCondition,
  privacyPolicy,
};
