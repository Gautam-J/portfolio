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

export let bottomToTop = {
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

export let leftToRight = {
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

export let linux = {
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

export let graphic = {
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
