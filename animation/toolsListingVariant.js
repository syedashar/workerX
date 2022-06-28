const toolsContainerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const toolsCardVariant = {
  hidden: {
    y: 0,
    opacity: 0,
  },
  visible: {
    opacity: 1,
    y: [0, -10, 0],
    transition: {
      times: [0, 0.5, 1],
    },
  },
};

export { toolsContainerVariant, toolsCardVariant };
