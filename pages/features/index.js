import {
  MainFeaturesTopGridSection,
  AllFeatureHeadingSection,
  FeatureTabsSection,
} from "components/pages/featuresPage";
import { features } from "constants/apiEndpoints";
import { NextSeo } from "next-seo";
import React from "react";
import { getRequest } from "service/apiClient";

const FeaturesPage = ({ features, seo }) => {
  // reduce features array if not even

  const feauturesCopy = [...features];

  if (feauturesCopy.length % 2 !== 0) {
    feauturesCopy.pop();
  }

  return (
    <>
      {seo && <NextSeo {...seo} />}
      <MainFeaturesTopGridSection features={feauturesCopy} />
      <AllFeatureHeadingSection />
      <FeatureTabsSection features={features} />
    </>
  );
};

export default FeaturesPage;

export async function getStaticProps() {
  try {
    const data = await getRequest(features);
    return {
      props: {
        ...data,
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
