import { HeadingWithIconSection } from "components/global";
import { ToolsListingSection } from "components/pages/toolsPage";
import { tools } from "constants/apiEndpoints";
import { NextSeo } from "next-seo";
import React from "react";
import { getRequest } from "service/apiClient";

const ToolsPage = ({ tools, seo }) => {
  const headingProps = {
    headingMaxWidth: 594,
    headingText: "Tools",
    subText:
      "WorkerX helps you increase appointments, and helps you provide excellent customer service",
    icon: "/images/tools-image-right.png",
  };

  return (
    <>
      {seo && <NextSeo {...seo} />}
      <HeadingWithIconSection {...headingProps} />
      <ToolsListingSection tools={tools} />
    </>
  );
};

export async function getStaticProps() {
  try {
    const data = await getRequest(tools);
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

export default ToolsPage;
