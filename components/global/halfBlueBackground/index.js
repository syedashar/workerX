import { AnimatePresence } from "framer-motion";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const HalfBlueBackground = () => {
  const router = useRouter();

  const hiddenRoutes = [
    "/",
    "/terms-and-conditions",
    "/privacy-policy",
    "/industries/[industrySlug]",
  ];

  const isHidden =
    hiddenRoutes.includes(router.asPath) ||
    hiddenRoutes.includes(router.pathname);

  return (
    <AnimatePresence>
      {!isHidden && (
        <motion.div
          variants={halfBlueBgVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="half_blue_bg"
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

const halfBlueBgVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    transition: {
      duration: 0.5,
    },
  },
  visible: {
    opacity: 1,
    x: "0",
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    backgroundColor: "#fff",
    x: "-100vw",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default HalfBlueBackground;
