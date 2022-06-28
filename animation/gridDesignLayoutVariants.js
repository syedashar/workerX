const iconVariant = {
  hidden: {
    opacity: 0,
    rotate: -90,
  },
  animate: {
    opacity: 1,
    rotate: 0,

    transition: {
      duration: 1,
      delay: 0.3,
      ease: "easeInOut",
    },
  },
};

const titleVariant = {
  hidden: {
    opacity: 0,
    y: 3,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const descriptionVariant = {
  hidden: {
    opacity: 0,
    y: 3,
  },

  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.7,
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export { descriptionVariant, iconVariant, titleVariant };
