import { HeroSection } from "components/pages/industriesPage";
import { services } from "constants/apiEndpoints";

import { getRequest } from "service/apiClient";

const IndustryDetailPage = ({ industry }) => {
  return <>{industry && <HeroSection {...industry} />}</>;
};

export default IndustryDetailPage;

export async function getStaticPaths() {
  const data = await getRequest(services);

  const paths = data?.Industries.map((industry) => ({
    params: {
      industrySlug: industry?.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  let industrySlug = context.params.industrySlug;

  try {
    const data = await getRequest(`${services}/${industrySlug}`);
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
