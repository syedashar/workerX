import HeadingWithIconSection from "components/global/headingWithIconSection";
import { HelpListingSection } from "components/pages/helpPage";
import { helps } from "constants/apiEndpoints";
import { NextSeo } from "next-seo";
import React from "react";
import { getRequest } from "service/apiClient";

const BlogPage = ({ helps, seo }) => {
  const headingProps = {
    headingMaxWidth: 594,
    headingText: "Help Center",
    subText: "Advice and answer from the Worker X",
    icon: "",
  };

  return (
    <>
      {seo && <NextSeo {...seo} />}
      <HeadingWithIconSection {...headingProps} />
      <HelpListingSection helpList={helps} />
    </>
  );
};

export default BlogPage;

export async function getStaticProps() {
  try {
    const data = await getRequest(helps);
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
