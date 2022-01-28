const rev: "reverse" = "reverse";

let isMobile = true;
if (typeof window !== "undefined") {
  isMobile = window.innerWidth < 768;
}

export let upDownInfinite = {
  initial: {
    y: isMobile ? 0 : -40,
    opacity: isMobile ? 1 : 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      repeat: isMobile ? 0 : Infinity,
      repeatType: rev,
      duration: isMobile ? 0 : 1.5,
      delay: isMobile ? 0 : 2,
    },
  },
};

export let onTapScale = {
  initial: {
    opacity: isMobile ? 1 : 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: isMobile ? 0 : 1,
      delay: isMobile ? 0 : 2,
    },
  },
  tap: {
    scale: 0.8,
  },
  hover: {
    scale: 1.2,
  },
};

export let bottomToTop = {
  initial: {
    y: isMobile ? 0 : 150,
    opacity: isMobile ? 1 : 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: isMobile ? 0 : 1,
      delay: isMobile ? 0 : 0.3,
    },
  },
};

export let leftToRight = {
  initial: {
    x: isMobile ? 0 : -200,
    opacity: isMobile ? 1 : 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: isMobile ? 0 : 1,
      delay: isMobile ? 0 : 0.2,
    },
  },
};

export let linux = {
  initial: {
    opacity: isMobile ? 1 : 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: isMobile ? 0 : 2,
      repeat: isMobile ? 0 : Infinity,
      repeatType: rev,
    },
  },
};

export let graphic = {
  initial: {
    scale: isMobile ? 1 : 1.2,
    opacity: isMobile ? 1 : 0,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: isMobile ? 0 : 2,
      delay: isMobile ? 0 : 0.1,
    },
  },
};
