const pricingCardVariants = {
  hidden: {
    opacity: 0,
    y: -5,
  },
  visible: ({ isRecommended, isXs, fromPricingPage }) => {
    return {
      opacity: 1,
      y:
        isRecommended && !isXs
          ? [-5, -4, -3, -2, -1, 0, -3, -6, -8, -9, -10, -20, -25]
          : 0,
      // height: isRecommended && !isXs ? 425 : 400,

      transition: {
        duration: 0.3,
      },
    };
  },
};

const pricingGridVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const recommendedTagVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 1,
    },
  },
};

export { pricingCardVariants, pricingGridVariants, recommendedTagVariant };
