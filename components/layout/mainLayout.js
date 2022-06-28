import { Layout } from "antd";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import {
  Footer,
  HalfBlueBackground,
  Header,
  TrialFooter,
} from "components/global";
import { useRouter } from "next/router";
import { handleExitComplete } from "utils";

const MainLayout = ({ children }) => {
  const router = useRouter();
  const hiddenTrialFooterRoutes = ["/terms-and-conditions", "/privacy-policy"];
  const currentRoute = router.pathname;
  const isTrialFooterHidden = hiddenTrialFooterRoutes.includes(currentRoute);

  return (
    <Layout>
      <Header />
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <motion.main
          key={router.asPath}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.4,
              when: "beforeChildren",
            },
          }}
        >
          <HalfBlueBackground />
          {children}
          {!isTrialFooterHidden && <TrialFooter />}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
