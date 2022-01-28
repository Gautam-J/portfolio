const rev: "reverse" = "reverse";

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
      repeatType: rev,
      duration: 1.5,
      delay: 2,
    },
  },
};

export const onTapScale = {
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
    y: 150,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
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
      repeatType: rev,
    },
  },
};

export const graphic = {
  initial: {
    scale: 1.2,
    opacity: 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      delay: 0.1,
    },
  },
};
