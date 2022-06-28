import { INDUSTRY_ICON_IMAGE } from "assets/images";
import { HeadingWithIconSection } from "components/global";
import { IndustriesImageGridSection } from "components/pages/industriesPage";
import { services } from "constants/apiEndpoints";
import { NextSeo } from "next-seo";

import React from "react";
import { getRequest } from "service/apiClient";

const IndustriesPage = ({ Industries: industries, seo }) => {
  const headingProps = {
    headingMaxWidth: 594,
    headingText: "Industries",
    subText:
      "WorkerX helps you increase appointments, and helps you provide excellent customer service",
    icon: "/images/industry-image-right.png",
  };

  return (
    <>
      {seo && <NextSeo {...seo} />}
      <HeadingWithIconSection {...headingProps} />
      <IndustriesImageGridSection industries={industries} />
    </>
  );
};

export async function getStaticProps() {
  try {
    const data = await getRequest(services);
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

export default IndustriesPage;
