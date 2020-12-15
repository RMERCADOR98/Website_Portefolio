export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: 300,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "afterChildren",
      // delayChildren: 3,
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

//Home
export const icons = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 1.3,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 1.5,
    },
  },
};
