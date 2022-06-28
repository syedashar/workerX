import { HelpDetailContentSection } from "components/pages/helpPage";
import { helps } from "constants/apiEndpoints";
import { NextSeo } from "next-seo";
import { getRequest } from "service/apiClient";

const BlogDetailPage = (props) => {
  return (
    <>
      {props?.seo && <NextSeo {...props.seo} />}
      <HelpDetailContentSection helpDetailProps={props} />
    </>
  );
};

export default BlogDetailPage;

export async function getStaticPaths() {
  const data = await getRequest(helps);

  const paths = data?.helps.map((help) => ({
    params: {
      helpSlug: help?.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  let helpSlug = context.params.helpSlug;

  try {
    const data = await getRequest(`${helps}/${helpSlug}`);
    console.log("signleHelp", data);
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
