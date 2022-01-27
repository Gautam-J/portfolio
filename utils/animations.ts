export const upDownInfinite = {
  initial: {
    y: -40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 1.5,
      delay: 2,
    },
  },
};

export const scrollUp = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 2,
    },
  },
  tap: {
    scale: 0.8,
  },
  hover: {
    scale: 1.2,
  },
};

export const bottomToTop = {
  initial: {
    y: 1000,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.3,
    },
  },
};

export const leftToRight = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.2,
    },
  },
};

export const linux = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

export const navBar = {
  initial: {
    y: -100,
  },
  animate: {
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

export const mobileNavBar = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      delay: 0.2,
      duration: 0.2,
    },
  },
};

export const graphic = {
  initial: {
    opacity: 0,
    scale: 1.5,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.1,
    },
  },
};
