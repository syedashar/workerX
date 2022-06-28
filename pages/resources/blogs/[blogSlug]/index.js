import { BlogDetailContentSection } from "components/pages/blogPage";
import { blogs } from "constants/apiEndpoints";
import { NextSeo } from "next-seo";
import { getRequest } from "service/apiClient";

const BlogDetailPage = (props) => {
  return (
    <>
      {props?.seo && <NextSeo {...props.seo} />}
      <BlogDetailContentSection blogDetailProps={props} />
    </>
  );
};

export default BlogDetailPage;

export async function getStaticPaths() {
  const data = await getRequest(blogs);

  const paths = data?.blogs.map((blog) => ({
    params: {
      blogSlug: blog?.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  let blogSlug = context.params.blogSlug;

  try {
    const data = await getRequest(`${blogs}/${blogSlug}`);
    return {
      props: {
        ...data,
      },
      revalidate: 10800,
    };
  } catch (error) {
    return {
      props: {},
      revalidate: 10800,
    };
  }
}
