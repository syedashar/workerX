import HeadingWithIconSection from "components/global/headingWithIconSection";
import { BlogListingSection } from "components/pages/blogPage";
import { blogs } from "constants/apiEndpoints";
import { NextSeo } from "next-seo";
import React from "react";
import { getRequest } from "service/apiClient";

const BlogPage = ({ blogs, seo }) => {
  const headingProps = {
    headingMaxWidth: 594,
    headingText: "Blog",
    subText:
      "WorkerX helps you increase appointments, and helps you provide excellent customer service",
    icon: "/images/blog-image-right.png",
  };

  return (
    <>
      {seo && <NextSeo {...seo} />}
      <HeadingWithIconSection {...headingProps} />
      <BlogListingSection blogs={blogs} />
    </>
  );
};

export default BlogPage;

export async function getStaticProps() {
  try {
    const data = await getRequest(blogs);
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
