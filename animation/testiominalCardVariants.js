import {
  blackColor,
  greyColor,
  primaryColor,
  whiteColor,
} from "constants/theme";

const cardContainerVariant = {
  default: {
    scale: 0.65,
    backgroundColor: whiteColor,
    opacity: 0.5,
    transition: {
      duration: 0.5,
    },
  },
  active: {
    scale: 1,
    backgroundColor: primaryColor,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const cardTextVariant = {
  default: (textType) => ({
    color: textType === "designation" ? greyColor : blackColor,
  }),
  active: {
    color: whiteColor,
  },
};

export { cardTextVariant, cardContainerVariant };
