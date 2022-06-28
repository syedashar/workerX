const menuLinkWrapperVariant = {
  hidden: {},
  visible: {
    transition: {
      when: "afterChildren",
    },
  },
};

const subMenuItemVariant = {
  hidden: {
    opacity: 0,
    y: -2,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const subMenuVariant = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 0.2,
      when: "afterChildren",
      staggerChildren: 0.12,
      staggerDirection: -1,
    },
    transitionEnd: {
      display: "none",
    },
  },
  visible: {
    display: "block",
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.17,
      delayChildren: 0.2,
    },
  },
};

export { subMenuVariant, subMenuItemVariant, menuLinkWrapperVariant };
