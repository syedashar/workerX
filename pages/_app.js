import MainLayout from "components/layout/mainLayout";
import Freshdesk from "externalScripts/freshdesk";
import GoogleAnalytics from "externalScripts/googleAnalytics";
import { useTransitionFix } from "hooks";
import { DefaultSeo } from "next-seo";
import DEFAULTSEO from "next-seo.config";
import "stylesheet/scss/main.scss";

function MyApp({ Component, pageProps }) {
  useTransitionFix();

  return (
    <>
      <GoogleAnalytics />
      <Freshdesk />
      <DefaultSeo {...DEFAULTSEO} />
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}

export default MyApp;
