// sidebar variants

const sidebarVariant = {
  hidden: {
    left: "100%",
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
  },
  show: (left) => ({
    left,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  }),
  exit: {
    left: "100%",
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
  },
};

const linkWrapperVariant = {
  hidden: { opacity: 0 },
  show: (delay) => ({
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.13,
      delayChildren: delay ?? 0.3,
    },
  }),
  exit: {
    opacity: 0,
    transition: {
      staggerChildren: 0.15,
      staggerDirection: -1,
      when: "afterChildren",
    },
  },
};

const linkVariant = {
  hidden: { opacity: 0, x: 10 },
  show: {
    opacity: 1,
    x: 0,
  },
  exit: {
    x: 20,
    opacity: 0,
  },
};

export { sidebarVariant, linkVariant, linkWrapperVariant };
