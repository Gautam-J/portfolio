let isMobile = true;
if (typeof window !== "undefined") {
  isMobile = window.innerWidth < 768;
}

export const navBar = {
  initial: {
    y: isMobile ? 0 : -100,
  },
  animate: {
    y: 0,
    transition: {
      duration: isMobile ? 0 : 1,
      delay: isMobile ? 0 : 0.5,
    },
  },
};

export const mobileNavBar = {
  initial: {
    opacity: isMobile ? 1 : 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: isMobile ? 0 : 0.2,
    },
  },
  exit: {
    opacity: isMobile ? 1 : 0,
    transition: {
      delay: isMobile ? 0 : 0.2,
      duration: isMobile ? 0 : 0.2,
    },
  },
};
