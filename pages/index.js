import {
  DownloadAppSection,
  HeroSection,
  MainThingsSection,
  OnlineBookingSection,
  OurFeaturesSection,
  VideoOverviewSection,
} from "components/pages/LandingPage";
import FaqsSections from "components/pages/LandingPage/faqsSection";
import { home, pricingPlans } from "constants/apiEndpoints";
import { NextSeo } from "next-seo";
import { getRequest } from "service/apiClient";

const LandingPage = ({
  heroSection,
  workerXwork,
  features,
  onlineBooking,
  workerXapp,
  videoOverview,
  plans,
  testimonials,
  faq,
  seo,
}) => {
  console.log("index", videoOverview);
  return (
    <>
      {/* <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}"
          height="0"
          width="0"
          style="display:none;visibility:hidden"
        ></iframe>
      </noscript> */}
      {seo && <NextSeo {...seo} />}
      <HeroSection heroSectionProps={heroSection} />
      <VideoOverviewSection videoOverviewProps={videoOverview} />
      <MainThingsSection workerXworkProps={workerXwork} />
      <OurFeaturesSection featuresProps={features} />
      <OnlineBookingSection onlineBookingProps={onlineBooking} />
      <DownloadAppSection workerXappProps={workerXapp} />
      {/* <TestimonialsSection testimonialsProps={testimonials} /> */}
      <FaqsSections faqProps={faq} />
    </>
  );
};
export default LandingPage;

export async function getStaticProps() {
  try {
    let data = await getRequest(home);
    console.log("data", data);
    const {
      success,
      data: { plans },
    } = await getRequest(pricingPlans);

    if (success) {
      data = {
        ...data,
        plans,
      };
    }
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
