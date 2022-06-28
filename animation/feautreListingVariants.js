const featureListingContainerVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const featureCardVariant = {
  hidden: {
    opacity: 0,
    width: "0",
  },
  show: {
    opacity: 1,
    width: "100%",
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const headingVariant = {
  hidden: {
    opacity: 0,
    x: -5,
  },
  show: (delay) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeInOut",
    },
  }),
};

const paragraphVariant = {
  hidden: {
    opacity: 0,
    x: -5,
  },
  show: (delay) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      delay,
      ease: "easeInOut",
    },
  }),
};

export {
  featureCardVariant,
  featureListingContainerVariant,
  headingVariant,
  paragraphVariant,
};
